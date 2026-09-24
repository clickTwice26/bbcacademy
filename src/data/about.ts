import type { Localized } from '~/i18n/utils';
import type { IconName } from '~/lib/icons';
import type { PhotoKey } from './images';

export interface Aim {
  icon: IconName;
  text: Localized;
}

export const aims: Aim[] = [
  {
    icon: 'hand-heart',
    text: {
      en: 'Working for the welfare of all beings through loving-kindness, compassion, sympathetic joy and equanimity, as exemplified by Gautama Buddha.',
      bn: 'গৌতম বুদ্ধের আদর্শে মৈত্রী, করুণা, মুদিতা ও উপেক্ষার গুণাবলি ধারণ করে সকল প্রাণীর কল্যাণে কাজ করা।',
    },
  },
  {
    icon: 'toolbox',
    text: {
      en: 'Creating self-employment by giving technical and vocational education to young people held back by poverty and lack of opportunity.',
      bn: 'শিক্ষা, সংস্কৃতি ও আর্থসামাজিকভাবে পিছিয়ে পড়া তরুণদের কারিগরি ও বৃত্তিমূলক শিক্ষা দিয়ে আত্মকর্মসংস্থানের সুযোগ সৃষ্টি করা।',
    },
  },
  {
    icon: 'globe-hemisphere-east',
    text: {
      en: 'Building close ties and brotherhood with Buddhist organisations worldwide through international meetings, seminars and conferences.',
      bn: 'আন্তর্জাতিক সভা, সেমিনার ও সম্মেলনে অংশ নিয়ে বিশ্বের বিভিন্ন বৌদ্ধ সংগঠনের সঙ্গে ঘনিষ্ঠ সম্পর্ক ও ভ্রাতৃত্ববোধ গড়ে তোলা।',
    },
  },
  {
    icon: 'baby',
    text: {
      en: 'Providing health, education and care for neglected, poor, destitute and orphaned children.',
      bn: 'সমাজের অবহেলিত, দরিদ্র, দুস্থ ও অনাথ শিশুদের স্বাস্থ্য, শিক্ষা ও ভরণপোষণের ব্যবস্থা করা।',
    },
  },
  {
    icon: 'flower-lotus',
    text: {
      en: "Running a Monks' Training Centre that shapes newly ordained novices in the Buddha's ideals of sila (precepts), samadhi (meditation) and prajna (wisdom).",
      bn: 'নবদীক্ষিত শ্রামণদের জন্য ভিক্ষু প্রশিক্ষণ কেন্দ্র পরিচালনা করা, যেখানে বুদ্ধের শীল, সমাধি ও প্রজ্ঞার আদর্শে তাঁদের ভিক্ষুজীবন গড়ে ওঠে।',
    },
  },
  {
    icon: 'columns',
    text: {
      en: 'Reviving the ancient Buddhist civilisation and culture of the Cumilla region, long faded into oblivion, and presenting it to the world.',
      bn: 'বিস্মৃতির অতলে হারিয়ে যাওয়া কুমিল্লা অঞ্চলের প্রাচীন বৌদ্ধ সভ্যতা ও সংস্কৃতিকে পুনরুজ্জীবিত করে বিশ্বের সামনে তুলে ধরা।',
    },
  },
  {
    icon: 'magnifying-glass',
    text: {
      en: 'Assisting scholars and researchers from home and abroad who study the ancient Buddhist relics of Cumilla and the rest of Bangladesh.',
      bn: 'কুমিল্লাসহ বাংলাদেশের বিভিন্ন স্থানে ছড়িয়ে থাকা প্রাচীন বৌদ্ধ নিদর্শন নিয়ে দেশি-বিদেশি পণ্ডিত ও গবেষকদের কাজে সহায়তা করা।',
    },
  },
  {
    icon: 'first-aid-kit',
    text: {
      en: 'Providing healthcare to the poor, the destitute and the elderly of the area through health clinics.',
      bn: 'স্বাস্থ্য ক্লিনিক প্রতিষ্ঠার মাধ্যমে এলাকার দরিদ্র, দুস্থ ও প্রবীণদের স্বাস্থ্যসেবা দেওয়া।',
    },
  },
];

export interface Publication {
  image: PhotoKey;
  title: Localized;
  publisher: Localized;
}

export const publications: Publication[] = [
  {
    image: 'publications/shalban-souvenir-orange.jpg',
    title: { en: 'Shalban', bn: 'শালবন' },
    publisher: { en: 'Souvenir, YMBA Cumilla', bn: 'স্মরণিকা, ওয়াইএমবিএ কুমিল্লা' },
  },
  {
    image: 'publications/shalban-souvenir-maroon.jpg',
    title: { en: 'Shalban', bn: 'শালবন' },
    publisher: { en: 'Souvenir, YMBA Cumilla', bn: 'স্মরণিকা, ওয়াইএমবিএ কুমিল্লা' },
  },
  {
    image: 'publications/shalban-souvenir-green.jpg',
    title: { en: 'Shalban', bn: 'শালবন' },
    publisher: { en: 'Souvenir', bn: 'স্মরণিকা' },
  },
  {
    image: 'publications/shalban-souvenir-orange-2.jpg',
    title: { en: 'Shalban', bn: 'শালবন' },
    publisher: { en: 'Souvenir, YMBA Cumilla', bn: 'স্মরণিকা, ওয়াইএমবিএ কুমিল্লা' },
  },
  {
    image: 'publications/jyotipal-kathina-2011.jpg',
    title: { en: 'Jyotipal', bn: 'জ্যোতিঃপাল' },
    publisher: {
      en: 'Kathina Ceremony 2011, Sangharaj Jyotipal Mahathero Foundation',
      bn: 'কঠিন চীবর দান ২০১১, সংঘরাজ জ্যোতিঃপাল মহাথের ফাউন্ডেশন',
    },
  },
  {
    image: 'publications/world-peace-pagoda-souvenir.png',
    title: { en: 'World Peace Pagoda Analayo', bn: 'বিশ্ব শান্তি প্যাগোডা অনালয়ো' },
    publisher: { en: 'Inauguration Ceremony souvenir', bn: 'উদ্বোধন অনুষ্ঠানের স্মরণিকা' },
  },
];
