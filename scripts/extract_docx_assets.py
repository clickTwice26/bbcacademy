#!/usr/bin/env python3
"""Extract, clean and rename the images embedded in Introduction.docx (and the new ones in FOLDER 2.docx).

This is a one-time, reproducible asset step. Its outputs (src/assets/images/**,
public/favicon*, public/apple-touch-icon.png, public/og-default.jpg) are
committed, so building the website never needs Python.

    python3 scripts/extract_docx_assets.py [--sheet /tmp/contact-sheet.jpg]
    python3 scripts/extract_docx_assets.py --folder2-only    # just the photos from FOLDER 2.docx

To use a higher-resolution original instead, replace the file under
src/assets/images/ with the same name; the site picks it up on the next build.
"""
from __future__ import annotations

import argparse
import io
import json
import re
import struct
import zipfile
from pathlib import Path

from PIL import Image, ImageCms, ImageDraw, ImageFont, ImageOps, ImageStat

ROOT = Path(__file__).resolve().parent.parent
DOCX = ROOT / "Introduction.docx"
DOCX2 = ROOT / "FOLDER 2.docx"
MANIFEST = ROOT / "scripts" / "image_manifest.json"
OUT = ROOT / "src" / "assets" / "images"
PUBLIC = ROOT / "public"

IVORY = (251, 246, 238)
TERRACOTTA = (154, 59, 34)
SAFFRON = (216, 150, 43)
INK = (43, 29, 22)

FONT_SERIF_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
FONT_SERIF = "/System/Library/Fonts/Supplemental/Georgia.ttf"
FONT_BANGLA = "/System/Library/Fonts/KohinoorBangla.ttc"


def read_media(z: zipfile.ZipFile) -> dict[int, tuple[str, bytes]]:
    """Return {image number: (extension, bytes)} for word/media/imageN.*."""
    media = {}
    for name in z.namelist():
        m = re.fullmatch(r"word/media/image(\d+)\.(\w+)", name)
        if m:
            media[int(m.group(1))] = (m.group(2).lower(), z.read(name))
    return media


def emf_to_image(data: bytes) -> Image.Image:
    """Decode an EMF that wraps a single EMR_STRETCHDIBITS bitmap."""
    off = 0
    while off < len(data):
        rtype, size = struct.unpack_from("<II", data, off)
        if rtype == 81:  # EMR_STRETCHDIBITS
            off_bmi, cb_bmi, off_bits, cb_bits = struct.unpack_from("<4I", data, off + 48)
            bmi = data[off + off_bmi : off + off_bmi + cb_bmi]
            bits = data[off + off_bits : off + off_bits + cb_bits]
            header = b"BM" + struct.pack("<IHHI", 14 + len(bmi) + len(bits), 0, 0, 14 + len(bmi))
            im = Image.open(io.BytesIO(header + bmi + bits))
            im.load()
            return im.convert("RGB")
        if size == 0:
            break
        off += size
    raise ValueError("No EMR_STRETCHDIBITS record found in EMF")


def to_srgb(im: Image.Image) -> Image.Image:
    """Convert CMYK (with its embedded ICC profile when present) to sRGB."""
    if im.mode == "CMYK":
        icc = im.info.get("icc_profile")
        if icc:
            src = ImageCms.ImageCmsProfile(io.BytesIO(icc))
            dst = ImageCms.createProfile("sRGB")
            return ImageCms.profileToProfile(im, src, dst, outputMode="RGB")
        return im.convert("RGB")
    if im.mode not in ("RGB", "L"):
        return im.convert("RGB")
    return im


def levels(im: Image.Image, black: int, white: int) -> Image.Image:
    """Stretch grays so ink stays dark and paper/bleed-through turns white."""
    span = max(1, white - black)
    lut = [0 if v <= black else 255 if v >= white else round((v - black) * 255 / span) for v in range(256)]
    return im.point(lut)


def dark_edge_box(im: Image.Image, threshold: int = 40, max_share: float = 0.08) -> tuple[int, int, int, int] | None:
    """Box that excludes uniform near-black letterbox rows/columns at the edges, or None."""
    gray = ImageOps.grayscale(im)
    w, h = gray.size

    def is_dark(box: tuple[int, int, int, int]) -> bool:
        stat = ImageStat.Stat(gray.crop(box))
        return stat.mean[0] < threshold and stat.stddev[0] < 25

    top = 0
    while top < h * max_share and is_dark((0, top, w, top + 1)):
        top += 1
    bottom = h
    while h - bottom < h * max_share and is_dark((0, bottom - 1, w, bottom)):
        bottom -= 1
    left = 0
    while left < w * max_share and is_dark((left, top, left + 1, bottom)):
        left += 1
    right = w
    while w - right < w * max_share and is_dark((right - 1, top, right, bottom)):
        right -= 1
    if (left, top, right, bottom) == (0, 0, w, h):
        return None
    return (left, top, right, bottom)


def process(entry: dict, ext: str, raw: bytes) -> tuple[bytes | None, Image.Image]:
    """Apply manifest ops. Returns (original bytes if untouched, image)."""
    if ext == "emf":
        im = emf_to_image(raw)
    else:
        im = Image.open(io.BytesIO(raw))
        im.load()
    transformed = ext == "emf" or im.mode == "CMYK"
    im = to_srgb(im)

    if "crop" in entry:
        im = im.crop(tuple(entry["crop"]))
        transformed = True
    if entry.get("autotrim", True) and not entry.get("grayscale"):
        box = dark_edge_box(im)
        if box:
            im = im.crop(box)
            transformed = True
    if entry.get("grayscale"):
        im = ImageOps.grayscale(im)
        transformed = True
    if "whiteout" in entry:
        draw = ImageDraw.Draw(im)
        for box in entry["whiteout"]:
            draw.rectangle(box, fill=255 if im.mode == "L" else (255, 255, 255))
        transformed = True
    if "levels" in entry:
        im = levels(im, *entry["levels"])
        transformed = True
    max_w = entry.get("maxWidth")
    if max_w and im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        transformed = True

    out_ext = Path(entry["out"]).suffix.lower().lstrip(".")
    same_format = (out_ext in ("jpg", "jpeg") and ext in ("jpg", "jpeg")) or out_ext == ext
    return (None if transformed or not same_format else raw), im


def save(im: Image.Image, path: Path, original: bytes | None) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if original is not None:
        path.write_bytes(original)  # untouched: keep the exact bytes
    elif path.suffix.lower() == ".png":
        im.save(path, optimize=True)
    else:
        im.convert("RGB").save(path, quality=90, optimize=True, progressive=True)


def extract_emblem(letterhead: Image.Image) -> Image.Image:
    """Cut the circular emblem out of the scanned letterhead, paper made transparent."""
    region = letterhead.convert("RGB").crop((0, 0, 175, letterhead.height))
    gray = ImageOps.grayscale(region)
    # Paper (light) -> transparent, ink (dark) -> opaque, soft ramp between.
    alpha = gray.point(lambda v: 0 if v > 232 else 255 if v < 196 else round((232 - v) * 255 / 36))
    bbox = alpha.point(lambda v: 255 if v > 90 else 0).getbbox()
    pad = 3
    bbox = (max(0, bbox[0] - pad), max(0, bbox[1] - pad), min(region.width, bbox[2] + pad), min(region.height, bbox[3] + pad))
    emblem = region.crop(bbox).convert("RGBA")
    emblem.putalpha(alpha.crop(bbox))
    return emblem


def square(im: Image.Image, size: int, bg=None) -> Image.Image:
    """Fit an RGBA image into a square canvas."""
    canvas = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
    fitted = ImageOps.contain(im, (size, size), Image.LANCZOS)
    canvas.alpha_composite(fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2))
    return canvas


def arch_mask(w: int, h: int) -> Image.Image:
    mask = Image.new("L", (w, h), 0)
    d = ImageDraw.Draw(mask)
    d.ellipse((0, 0, w, w), fill=255)
    d.rectangle((0, w // 2, w, h), fill=255)
    return mask


def build_og(emblem: Image.Image, pagoda: Image.Image, path: Path) -> None:
    W, H = 1200, 630
    og = Image.new("RGB", (W, H), IVORY)
    d = ImageDraw.Draw(og)

    # Arch-framed pagoda on the right.
    aw, ah = 420, 520
    photo = ImageOps.fit(pagoda.convert("RGB"), (aw, ah), Image.LANCZOS, centering=(0.5, 0.35))
    ax, ay = W - aw - 70, (H - ah) // 2 + 10
    og.paste(Image.new("RGB", (aw + 24, ah + 24), SAFFRON), (ax - 12, ay - 12), arch_mask(aw + 24, ah + 24))
    og.paste(photo, (ax, ay), arch_mask(aw, ah))

    # Text column.
    x = 70
    em = ImageOps.contain(emblem, (150, 150), Image.LANCZOS)
    og.paste(em, (x, 60), em)
    title = ImageFont.truetype(FONT_SERIF_BOLD, 54)
    y = 240
    for line in ("Bangladesh Buddhist", "Cultural Academy"):
        d.text((x, y), line, font=title, fill=TERRACOTTA)
        y += 66
    try:
        bangla = ImageFont.truetype(FONT_BANGLA, 34, index=1, layout_engine=ImageFont.Layout.RAQM)
        d.text((x, y + 10), "বাংলাদেশ বুদ্ধিষ্ট কালচারাল একাডেমী", font=bangla, fill=INK)
    except OSError:
        pass
    d.line((x, y + 78, x + 120, y + 78), fill=SAFFRON, width=4)
    small = ImageFont.truetype(FONT_SERIF, 25)
    d.text((x, y + 98), "New Salban Vihara · Kotbari, Mainamati, Cumilla", font=small, fill=INK)
    path.parent.mkdir(parents=True, exist_ok=True)
    og.save(path, quality=88, optimize=True, progressive=True)


def contact_sheet(paths: list[Path], dest: Path) -> None:
    T, cols, pad, lab = 240, 6, 8, 18
    rows = (len(paths) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * (T + pad) + pad, rows * (T + lab + pad) + pad), "white")
    d = ImageDraw.Draw(sheet)
    font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 11)
    for i, p in enumerate(paths):
        im = Image.open(p)
        im = im.convert("RGBA")
        im.thumbnail((T, T))
        x, y = pad + (i % cols) * (T + pad), pad + (i // cols) * (T + lab + pad)
        tile = Image.new("RGB", (T, T), (230, 230, 230))
        tile.paste(im, ((T - im.width) // 2, (T - im.height) // 2), im)
        sheet.paste(tile, (x, y + lab))
        d.text((x, y + 2), p.name[:38], fill="black", font=font)
    sheet.save(dest, quality=85)


def extract_folder2(manifest: dict) -> list[Path]:
    """Photos that only appear in FOLDER 2.docx (listed in the manifest as images_folder2)."""
    entries = manifest.get("images_folder2", [])
    if not entries:
        return []
    if not DOCX2.exists():
        print(f"skipped {len(entries)} photo(s): {DOCX2.name} is not at the repository root (outputs already committed)")
        return []
    with zipfile.ZipFile(DOCX2) as z:
        media = read_media(z)
    written = []
    for entry in entries:
        ext, raw = media[entry["src"]]
        original, im = process(entry, ext, raw)
        dest = OUT / entry["out"]
        save(im, dest, original)
        written.append(dest)
        print(f"folder2 image{entry['src']:<3} -> {dest.relative_to(ROOT)}  {im.width}x{im.height}{'' if original is None else '  (copied)'}")
    return written


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--sheet", type=Path, help="write a contact sheet of all outputs to this path")
    ap.add_argument("--folder2-only", action="store_true", help="only extract the photos taken from FOLDER 2.docx")
    args = ap.parse_args()

    manifest = json.loads(MANIFEST.read_text())
    if args.folder2_only:
        if not extract_folder2(manifest):
            raise SystemExit(f"Nothing extracted: put {DOCX2.name} at the repository root")
        return
    with zipfile.ZipFile(DOCX) as z:
        media = read_media(z)

    listed = {e["src"] for e in manifest["images"]} | {int(k) for k in manifest["excluded"]}
    missing = sorted(set(media) - listed)
    if missing:
        raise SystemExit(f"Images not in manifest (add or exclude them): {missing}")

    written: list[Path] = []
    for entry in manifest["images"]:
        ext, raw = media[entry["src"]]
        original, im = process(entry, ext, raw)
        dest = OUT / entry["out"]
        save(im, dest, original)
        written.append(dest)
        print(f"image{entry['src']:<3} -> {dest.relative_to(ROOT)}  {im.width}x{im.height}{'' if original is None else '  (copied)'}")

    # Brand: emblem from the letterhead, favicons, social image.
    letterhead = Image.open(io.BytesIO(media[1][1]))
    emblem = extract_emblem(letterhead)
    emblem_path = OUT / "brand" / "bbca-emblem.png"
    emblem_path.parent.mkdir(parents=True, exist_ok=True)
    emblem.save(emblem_path, optimize=True)
    written.append(emblem_path)
    print(f"image1   -> {emblem_path.relative_to(ROOT)}  {emblem.width}x{emblem.height}")

    PUBLIC.mkdir(exist_ok=True)
    square(emblem, 64).save(PUBLIC / "favicon.png", optimize=True)
    square(emblem, 48).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    apple = Image.new("RGBA", (180, 180), IVORY + (255,))
    apple.alpha_composite(square(emblem, 150), (15, 15))
    apple.convert("RGB").save(PUBLIC / "apple-touch-icon.png", optimize=True)

    pagoda = Image.open(OUT / "projects/world-peace-pagoda/pagoda-golden-naga.jpg")
    build_og(emblem, pagoda, PUBLIC / "og-default.jpg")
    written += [PUBLIC / "favicon.png", PUBLIC / "apple-touch-icon.png", PUBLIC / "og-default.jpg"]
    written += extract_folder2(manifest)
    print("public   -> favicon.png, favicon.ico, apple-touch-icon.png, og-default.jpg")

    if args.sheet:
        contact_sheet(written, args.sheet)
        print(f"contact sheet -> {args.sheet}")


if __name__ == "__main__":
    main()
