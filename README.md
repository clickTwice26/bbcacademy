# Bangladesh Buddhist Cultural Academy: website

A bilingual website (English and বাংলা) for the Bangladesh Buddhist Cultural Academy (BBCA), a master project of YMBA Cumilla beside the 8th-century Salban Vihara at Kotbari, Mainamati. It is built with [Astro](https://astro.build) as a static site: the output is plain HTML, CSS and images that can be hosted anywhere.

All text and photos come from the Academy's profile documents, `Introduction.docx` and its later revision `FOLDER 2.docx`. Those documents and `CONTENT-NOTES.md` (open questions for the Academy) are kept locally and are not part of this repository.

## Run it

Requires Node.js 22.12 or newer (`.nvmrc` pins 24).

```bash
npm install
```

```bash
npm run dev
```

The site runs at http://localhost:4321; the Bangla version is at http://localhost:4321/bn/.

```bash
npm run build
```

`npm run build` writes the finished site to `dist/`. Check it with `npm run preview`, and check types and translations with `npm run check`.

## Pages

| English | Bangla | View |
|---|---|---|
| `/` | `/bn/` | `src/views/HomePage.astro` |
| `/about/` | `/bn/about/` | `AboutPage.astro` |
| `/people/` | `/bn/people/` | `PeoplePage.astro` |
| `/heritage/` | `/bn/heritage/` | `HeritagePage.astro` |
| `/projects/` and `/projects/<slug>/` | `/bn/projects/…` | `ProjectsPage.astro`, `ProjectPage.astro` |
| `/gallery/` | `/bn/gallery/` | `GalleryPage.astro` |
| `/visit/` (contact at `#contact`) | `/bn/visit/` | `VisitPage.astro` |
| `/support/` | `/bn/support/` | `SupportPage.astro` |

Files in `src/pages/` are thin wrappers that pass `lang="en"` or `lang="bn"` to the shared view. Both languages use the same URL slugs, so the language switch just adds or removes `/bn`.

## Editing content

| What | Where |
|---|---|
| Contact details, phones, email, address, map pin, social links, WhatsApp, donation details, domain | `src/config/site.ts` |
| Buttons, menus, headings and other short interface text (both languages) | `src/i18n/ui.ts` |
| Long texts: history, heritage article, project descriptions, biographies | `src/content/{pages,projects,people}/{en,bn}/*.md` |
| Project list, titles, summaries, cover photos and galleries | `src/data/projects.ts` |
| People: names, roles, portraits | `src/data/people.ts` |
| Timelines, aims, publications, heritage sites, map legend | `src/data/timeline.ts`, `about.ts`, `heritage.ts` |
| Photo descriptions (alt text) and gallery categories | `src/data/images.ts` |

**Rules:**
- **Keep both languages in step.** Every Markdown file exists in `en/` and `bn/` with the same name; a missing translation stops the build and tells you which file is missing. `npm run check` also reports any interface text missing from the Bangla dictionary.
- **Write "Salban" and "Cumilla"**, and "World Peace Pagoda Analayo", in English text.
- **Avoid long dashes (—)** in visible text; use a comma, colon or full stop instead.

### Social links, WhatsApp and donations

- In `src/config/site.ts`, fill in `socials.facebook` (and the others) with full URLs and `whatsapp` with the number in international format without "+", for example `8801815273516`. Empty values stay hidden.
- The Support page shows the Academy's bank account from `donation.bank` in `src/config/site.ts`. To add mobile-banking numbers, fill in `donation.mobile`; set `donation` to `null` to hide the whole block. Receiving donations from abroad requires registration with Bangladesh's NGO Affairs Bureau, so confirm that before launch.

### Publishing the Bangla pages

- **While `bnReviewed` is `false`** in `src/config/site.ts`, Bangla pages are visible to visitors but tell search engines not to index them, and they are left out of the sitemap.
- **After a native speaker has reviewed the Bangla text,** set `bnReviewed: true`. The Bangla pages become indexable and are added to the sitemap, and hreflang language links are added to both languages.

## Photos

- **Where they live:** photos are in `src/assets/images/`, one folder per section. Astro makes resized WebP versions at build time and never enlarges a photo beyond its original size.
- **How they were made:** they were extracted from the Word documents by `scripts/extract_docx_assets.py`, following `scripts/image_manifest.json` (most photos come from `Introduction.docx`; the Salban Kindergarten photos come from `FOLDER 2.docx`). The script:
  - renames each image and removes duplicates
  - leaves out watermarked stock images
  - converts the CMYK and EMF images
  - crops camera date stamps and trims letterbox bars
  - cuts the emblem out of the letterhead
  - makes the favicons and the social-sharing image `public/og-default.jpg`
- **Re-running the script:** it needs `Introduction.docx` at the repository root (not committed) and Python 3 with Pillow. The kindergarten photos need `FOLDER 2.docx` as well; without it they are skipped and the committed copies stay as they are (`--folder2-only` extracts just those):

  ```bash
  npm run assets
  ```

**Swapping in better photos.** The photos in the document are small, about 450 pixels wide. To use an original:
1. Save it over the existing file with the **same name and folder**, e.g. `src/assets/images/projects/world-peace-pagoda/pagoda-golden-naga.jpg`.
2. Rebuild.

Captions and alt text stay the same. Do not re-run the extraction script afterwards, because it rewrites these files from the Word document.

**Adding a new photo.**
1. Put the file under `src/assets/images/`.
2. Add an entry with English and Bangla descriptions to `src/data/images.ts`. The build fails if a photo has no description.
3. Reference it where it should appear, for example in a project's `gallery` in `src/data/projects.ts`.

Photos in the `heritage/sites`, `heritage/antiquities`, `projects/*` and `publications` folders appear in the Gallery automatically.

## Quality checks

```bash
npm run check
```

```bash
npm run build
```

```bash
npx html-validate "dist/**/*.html"
```

```bash
npx linkinator dist --recurse --skip "^https?://(?!localhost)"
```

The validator settings are in `.htmlvalidate.json`. `role="list"` is kept on unstyled lists on purpose: it keeps list semantics for Safari/VoiceOver. Bangla heading ids are valid HTML.

## Deploying

### Cubicle (Docker)

The `Dockerfile` builds the site with Node 24 and serves `dist/` with nginx (non-root) on port 8080. Cubicle reads `cubicle.json`, which only sets the health check path, `/healthz`. The nginx config is `docker/nginx.conf.template`:
- **Port:** nginx listens on `$PORT`, which defaults to 8080.
- **Trailing slashes:** it redirects `/about` to `/about/`.
- **Caching:** it caches hashed `/_astro/` files for a year.
- **Instant links:** it rewrites root-relative links to work behind Cubicle's instant link. The proxy strips `/<token>` and sends `X-Forwarded-Prefix`; nginx adds it back to root-relative links.

No environment variables are needed. To make canonical links, the sitemap and share previews use the deployed address instead of `src/config/site.ts`, add a build argument to `cubicle.json`:

```json
"buildArgs": { "SITE_URL": "https://<app-name>.cubicle.shagato.space" }
```

To try the image locally:

```bash
docker build -t bbca .
```

```bash
docker run --rm -p 8080:8080 bbca
```

Then open http://localhost:8080/ (health check: http://localhost:8080/healthz).

### Other static hosts

`npm run build` produces a static `dist/` folder. Any static host works:

- **Netlify, Cloudflare Pages or Vercel:** connect the repository, with build command `npm run build` and output folder `dist`.
- **cPanel or other shared hosting:** upload the contents of `dist/` to `public_html/`.

Set the final domain in `src/config/site.ts` (`url`), or pass `SITE_URL` when building, since it is used for canonical links, the sitemap and social previews.

## Technical notes

- **Astro 7.** Content collections live in `src/content.config.ts`, with Markdown per language. `compressHTML: true` keeps normal HTML whitespace between inline elements.
- **Fonts** are self-hosted with Fontsource:
  - Fraunces for headings
  - Hind Siliguri for body text in English and Bangla
  - Noto Serif Bengali for Bangla headings

  They are split by script, so English pages don't download Bengali font files.
- **Icons** come from Phosphor (`src/lib/icons.ts` lists the ones used).
- **JavaScript is minimal:** the mobile menu, scroll reveal, gallery filter and the PhotoSwipe lightbox, which loads only on pages with photo galleries. The map loads only when a visitor clicks it.
