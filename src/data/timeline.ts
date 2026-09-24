import type { Localized } from '~/i18n/utils';

export interface Milestone {
  /** ISO date at the precision known: YYYY, YYYY-MM or YYYY-MM-DD. */
  date: string;
  text: Localized;
}

export const academyTimeline: Milestone[] = [
  {
    date: '1991',
    text: {
      en: "Advocate Dhira Sen Singha and Venerable Shilabhadra Mahathero bring the Buddhist community of Cumilla and Noakhali together as the Young Men's Buddhist Association (YMBA).",
      bn: 'অ্যাডভোকেট ধীরসেন সিংহ ও ভদন্ত শীলভদ্র মহাথের কুমিল্লা ও নোয়াখালীর বৌদ্ধ সমাজকে ইয়াং মেন্স বুড্ডিস্ট অ্যাসোসিয়েশনের (ওয়াইএমবিএ) ছায়াতলে একত্র করেন।',
    },
  },
  {
    date: '1994',
    text: {
      en: "At YMBA's appeal, the Government of Bangladesh grants 2.28 acres beside Salban Vihara for the Academy.",
      bn: 'ওয়াইএমবিএর আবেদনে বাংলাদেশ সরকার একাডেমির জন্য শালবন বিহারের পাশে ২.২৮ একর জমি বরাদ্দ দেয়।',
    },
  },
  {
    date: '1994-12',
    text: {
      en: 'The foundation stone of the Bangladesh Buddhist Cultural Academy is laid.',
      bn: 'বাংলাদেশ বুদ্ধিষ্ট কালচারাল একাডেমীর ভিত্তিপ্রস্তর স্থাপন করা হয়।',
    },
  },
  {
    date: '1995-09-08',
    text: {
      en: 'Lt Col (Retd.) Akbar Hossain, Bir Protik, and Venerable Jyotipal Mahathero lay the foundation stone of New Salban Vihara.',
      bn: 'লেফটেন্যান্ট কর্নেল (অব.) আকবর হোসেন, বীর প্রতীক ও ভদন্ত জ্যোতিঃপাল মহাথের নব শালবন বিহারের ভিত্তিপ্রস্তর স্থাপন করেন।',
    },
  },
  {
    date: '2011-10-20',
    text: {
      en: 'The foundation of the World Peace Pagoda Analayo is laid.',
      bn: 'বিশ্ব শান্তি প্যাগোডা অনালয়োর ভিত্তি স্থাপন করা হয়।',
    },
  },
  {
    date: '2017-10-21',
    text: {
      en: 'The World Peace Pagoda Analayo is inaugurated.',
      bn: 'বিশ্ব শান্তি প্যাগোডা অনালয়োর উদ্বোধন হয়।',
    },
  },
  {
    date: '2021',
    text: {
      en: 'The Salban Vihara Orphanage opens its doors.',
      bn: 'শালবন বিহার অনাথালয় যাত্রা শুরু করে।',
    },
  },
];

export const pagodaTimeline: Milestone[] = [
  {
    date: '2001-10-23',
    text: {
      en: 'An alms-giving ceremony with monks and donors from Thailand is held at Kanak Chaitya Vihara, Baraigaon, in memory of the 10th Sangharaj.',
      bn: 'দশম সংঘরাজের স্মরণে বড়ইগাঁও কনক চৈত্য বিহারে থাইল্যান্ডের ভিক্ষু ও দাতাদের উপস্থিতিতে সংঘদান অনুষ্ঠিত হয়।',
    },
  },
  {
    date: '2010-11-05',
    text: {
      en: 'The Royal Thai Kathin Chivara Dana is celebrated in the presence of the representative of the King of Thailand.',
      bn: 'থাইল্যান্ডের রাজার প্রতিনিধির উপস্থিতিতে রাজকীয় থাই কঠিন চীবর দান উদ্‌যাপিত হয়।',
    },
  },
  {
    date: '2011-10-20',
    text: {
      en: 'The foundation of the World Peace Pagoda Analayo is laid at New Salban Vihara.',
      bn: 'নব শালবন বিহারে বিশ্ব শান্তি প্যাগোডা অনালয়োর ভিত্তি স্থাপন করা হয়।',
    },
  },
  {
    date: '2013-10-06',
    text: {
      en: "Construction begins in the presence of the Thai Chargé d'Affaires, Mr. Phasit Chudabuddhi, and guests from Thailand.",
      bn: 'থাই চার্জ দ্য অ্যাফেয়ার্স ফাসিত চুদাবুদ্ধি এবং থাইল্যান্ডের অতিথিদের উপস্থিতিতে নির্মাণকাজ শুরু হয়।',
    },
  },
  {
    date: '2014-08-15',
    text: {
      en: 'A 30-foot metal Buddha image brought from Thailand is installed.',
      bn: 'থাইল্যান্ড থেকে আনা ৩০ ফুট উঁচু ধাতব বুদ্ধমূর্তি স্থাপন করা হয়।',
    },
  },
  {
    date: '2017-04-11',
    text: {
      en: 'The main golden chaitya from Thailand is installed with sacred relics.',
      bn: 'থাইল্যান্ড থেকে আনা সোনালি প্রধান চৈত্য পবিত্র ধাতুসহ স্থাপন করা হয়।',
    },
  },
  {
    date: '2017-10-21',
    text: {
      en: 'The pagoda is officially inaugurated.',
      bn: 'প্যাগোডার আনুষ্ঠানিক উদ্বোধন হয়।',
    },
  },
];
