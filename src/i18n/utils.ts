import { ui, type UIKey } from './ui';

export type Lang = 'en' | 'bn';
export const langs: readonly Lang[] = ['en', 'bn'];
export const defaultLang: Lang = 'en';

/** A value given in both languages. */
export type Localized<T = string> = Record<Lang, T>;

/** Translate an interface string, filling {placeholders}. */
export function t(lang: Lang, key: UIKey, vars?: Record<string, string | number>): string {
  let text: string = ui[lang][key] ?? ui.en[key];
  if (vars) {
    for (const [name, value] of Object.entries(vars)) text = text.replaceAll(`{${name}}`, String(value));
  }
  return text;
}

/** Pick the current language from a Localized value. */
export const pick = <T>(value: Localized<T>, lang: Lang): T => value[lang];

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === '/bn' || url.pathname.startsWith('/bn/') ? 'bn' : 'en';
}

/**
 * Build a site path for a language. Accepts '/about/', 'about', '/visit/#contact'.
 * Always returns a path with a trailing slash (config: trailingSlash 'always').
 */
export function localizePath(path: string, lang: Lang): string {
  const [rawPath, hash] = path.split('#');
  let clean = '/' + rawPath.replace(/^\/+/, '');
  if (!clean.endsWith('/')) clean += '/';
  const prefixed = lang === 'en' ? clean : `/bn${clean === '/' ? '/' : clean}`;
  return hash ? `${prefixed}#${hash}` : prefixed;
}

/** The same page in the other language. Slugs are identical in both languages. */
export function alternatePath(pathname: string, target: Lang): string {
  const base = pathname === '/bn' || pathname.startsWith('/bn/') ? pathname.slice(3) || '/' : pathname;
  return localizePath(base, target);
}
