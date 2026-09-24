import type { Lang } from '~/i18n/utils';

const locale = (lang: Lang) => (lang === 'bn' ? 'bn-BD' : 'en-GB');
const BN_DIGITS = '০১২৩৪৫৬৭৮৯';

/** Swap Latin digits for Bengali digits on Bangla pages (phone numbers, codes). */
export function digits(text: string, lang: Lang): string {
  return lang === 'bn' ? text.replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]) : text;
}

export function formatNumber(value: number, lang: Lang, options: Intl.NumberFormatOptions = {}): string {
  return new Intl.NumberFormat(locale(lang), options).format(value);
}

/** Years never get thousands separators (1991, not 1,991). */
export const formatYear = (year: number, lang: Lang) => formatNumber(year, lang, { useGrouping: false });

export type DatePrecision = 'day' | 'month' | 'year';

/** Format an ISO date (YYYY, YYYY-MM or YYYY-MM-DD) at the precision it carries. */
export function formatDate(iso: string, lang: Lang): string {
  const parts = iso.split('-');
  const precision: DatePrecision = parts.length === 3 ? 'day' : parts.length === 2 ? 'month' : 'year';
  if (precision === 'year') return formatYear(Number(parts[0]), lang);
  const date = new Date(`${parts[0]}-${parts[1] ?? '01'}-${parts[2] ?? '01'}T00:00:00Z`);
  const options: Intl.DateTimeFormatOptions =
    precision === 'day'
      ? { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
      : { month: 'long', year: 'numeric', timeZone: 'UTC' };
  return new Intl.DateTimeFormat(locale(lang), options).format(date);
}

/**
 * '+8801815273516' -> '+880 1815-273516' with a non-breaking space and hyphen,
 * so a number never wraps across lines (Bengali digits on Bangla pages).
 */
export function formatPhone(e164: string, lang: Lang): string {
  const m = e164.match(/^\+880(\d{4})(\d{6})$/);
  const pretty = m ? `+880\u00A0${m[1]}\u2011${m[2]}` : e164;
  return digits(pretty, lang);
}
