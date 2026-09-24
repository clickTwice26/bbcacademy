import { getEntry, render } from 'astro:content';
import type { Lang } from '~/i18n/utils';

export type ProseCollection = 'pages' | 'projects' | 'people';

/** Load a text in the requested language. Throws (fails the build) if the translation is missing. */
export async function getLocalized(collection: ProseCollection, lang: Lang, slug: string) {
  const entry = await getEntry(collection, `${lang}/${slug}`);
  if (!entry) throw new Error(`Missing text: src/content/${collection}/${lang}/${slug}.md`);
  return entry;
}

export async function renderLocalized(collection: ProseCollection, lang: Lang, slug: string) {
  return render(await getLocalized(collection, lang, slug));
}
