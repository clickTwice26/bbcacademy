import type { Localized } from '~/i18n/utils';
import type { PhotoKey } from './images';

export interface Person {
  /** Also the page anchor and the prose file name in src/content/people/{en,bn}/ */
  id: string;
  group: 'tribute' | 'office';
  portrait: PhotoKey;
  /** Landscape photo (shown wide) rather than a portrait. */
  wide?: boolean;
  name: Localized;
  role: Localized;
  years?: Localized;
}

export const people: Person[] = [
  {
    id: 'jyotipal-mahathero',
    group: 'tribute',
    portrait: 'people/jyotipal-mahathero.jpg',
    wide: true,
    name: {
      en: 'Most Venerable 10th Sangharaj Jyotipal Mahathero',
      bn: 'পরম পূজ্য দশম সংঘরাজ জ্যোতিঃপাল মহাথের',
    },
    role: { en: 'Visionary and Chief Adviser', bn: 'স্বপ্নদ্রষ্টা ও প্রধান উপদেষ্টা' },
    years: { en: '1914-2002', bn: '১৯১৪-২০০২' },
  },
  {
    id: 'luang-pho-son',
    group: 'tribute',
    portrait: 'people/luang-pho-son.jpg',
    name: {
      en: 'Phra Thep Mongkhon Yan (Luang Pho Son Analayo)',
      bn: 'ফ্রা থেপ মংকলইয়ান (লুয়াং ফো সন অনালয়ো)',
    },
    role: {
      en: 'Chief Patron of the World Peace Pagoda Analayo',
      bn: 'বিশ্ব শান্তি প্যাগোডা অনালয়োর প্রধান পৃষ্ঠপোষক',
    },
  },
  {
    id: 'akbar-hossain',
    group: 'tribute',
    portrait: 'people/akbar-hossain.jpg',
    name: {
      en: 'Lt Colonel (Retd.) Akbar Hossain, Bir Protik',
      bn: 'লেফটেন্যান্ট কর্নেল (অব.) আকবর হোসেন, বীর প্রতীক',
    },
    role: {
      en: 'Chief Patron of the Bangladesh Buddhist Cultural Academy',
      bn: 'বাংলাদেশ বুদ্ধিষ্ট কালচারাল একাডেমীর প্রধান পৃষ্ঠপোষক',
    },
  },
  {
    id: 'dhira-sen-singha',
    group: 'tribute',
    portrait: 'people/dhira-sen-singha.jpg',
    name: { en: 'Mr. Dhira Sen Singha (Gandhi)', bn: 'ধীরসেন সিংহ (গান্ধী)' },
    role: {
      en: 'Founder President of YMBA and the Bangladesh Buddhist Cultural Academy',
      bn: 'ওয়াইএমবিএ ও বাংলাদেশ বুদ্ধিষ্ট কালচারাল একাডেমীর প্রতিষ্ঠাতা সভাপতি',
    },
    years: { en: '1947-1993', bn: '১৯৪৭-১৯৯৩' },
  },
  {
    id: 'shilabhadra-mahathero',
    group: 'office',
    portrait: 'people/shilabhadra-mahathero.jpg',
    name: { en: 'Venerable Shilabhadra Mahathero', bn: 'ভদন্ত শীলভদ্র মহাথের' },
    role: {
      en: 'Founder President of the Bangladesh Buddhist Cultural Academy and Chief Abbot of New Salban Vihara',
      bn: 'বাংলাদেশ বুদ্ধিষ্ট কালচারাল একাডেমীর প্রতিষ্ঠাতা সভাপতি ও নব শালবন বিহারের অধ্যক্ষ',
    },
  },
  {
    id: 'sugato-priya-bhikkhu',
    group: 'office',
    portrait: 'people/sugato-priya-bhikkhu.jpg',
    name: { en: 'Venerable Sugato Priya Bhikkhu', bn: 'ভদন্ত সুগতপ্রিয় ভিক্ষু' },
    role: { en: 'Deputy Chief Abbot', bn: 'উপাধ্যক্ষ' },
  },
  {
    id: 'swapan-chandra-singha',
    group: 'office',
    portrait: 'people/swapan-chandra-singha.jpg',
    name: { en: 'Mr. Swapan Chandra Singha', bn: 'স্বপন চন্দ্র সিংহ' },
    role: { en: 'General Secretary and Co-founder', bn: 'সাধারণ সম্পাদক ও সহ-প্রতিষ্ঠাতা' },
  },
];

export function getPerson(id: string): Person {
  const person = people.find((p) => p.id === id);
  if (!person) throw new Error(`Unknown person: ${id}`);
  return person;
}
