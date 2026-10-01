import type { Localized } from '~/i18n/utils';
import type { IconName } from '~/lib/icons';
import type { PhotoKey } from './images';

export interface Project {
  slug: string;
  status: 'running' | 'proposed';
  plot: 1 | 2;
  /** Has its own page with prose in src/content/projects/{en,bn}/<slug>.md */
  detail: boolean;
  cover?: PhotoKey;
  /** Label shown under a cover that is not a photo of the real thing. */
  coverNote?: 'concept' | 'proposed';
  gallery: PhotoKey[];
  icon: IconName;
  title: Localized;
  summary?: Localized;
}

/** In the order the Academy lists them for Plot 1 and Plot 2. */
export const projects: Project[] = [
  {
    slug: 'new-salban-vihara',
    status: 'running',
    plot: 1,
    detail: true,
    cover: 'projects/new-salban-vihara/vihara-building.jpg',
    gallery: [
      'projects/new-salban-vihara/vihara-building.jpg',
      'projects/new-salban-vihara/monks-under-tree.jpg',
      'projects/new-salban-vihara/prayer-hall-gathering.jpg',
    ],
    icon: 'hands-praying',
    title: { en: 'New Salban Vihara and Prayer Hall', bn: 'নব শালবন বিহার ও প্রার্থনা হল' },
    summary: {
      en: 'Our monastery, named after and built in the spirit of the ancient Salban Vihara next door.',
      bn: 'পাশের প্রাচীন শালবন বিহারের নামে ও তার আদলে গড়া আমাদের বিহার।',
    },
  },
  {
    slug: 'world-peace-pagoda',
    status: 'running',
    plot: 1,
    detail: true,
    cover: 'projects/world-peace-pagoda/pagoda-golden-naga.jpg',
    gallery: [
      'projects/world-peace-pagoda/pagoda-golden-naga.jpg',
      'projects/world-peace-pagoda/pagoda-naga-stairway.jpg',
      'projects/world-peace-pagoda/pagoda-avenue.jpg',
      'projects/world-peace-pagoda/pagoda-garden.jpg',
      'projects/world-peace-pagoda/shrine-golden-buddha.jpg',
      'projects/world-peace-pagoda/pagoda-flower-garden.jpg',
      'projects/world-peace-pagoda/pagoda-garden-wide.jpg',
      'projects/world-peace-pagoda/pagoda-path.jpg',
      'projects/world-peace-pagoda/pagoda-blue-sky.jpg',
      'projects/world-peace-pagoda/pagoda-dusk.jpg',
      'projects/world-peace-pagoda/pagoda-pillar.jpg',
    ],
    icon: 'flower-lotus',
    title: { en: 'World Peace Pagoda Analayo', bn: 'বিশ্ব শান্তি প্যাগোডা অনালয়ো' },
    summary: {
      en: 'The first and only Thai-style Great Pagoda in Bangladesh, inaugurated in 2017.',
      bn: 'বাংলাদেশে থাই স্থাপত্যরীতির প্রথম ও একমাত্র মহাচৈত্য, উদ্বোধন ২০১৭ সালে।',
    },
  },
  {
    slug: 'salban-orphanage',
    status: 'running',
    plot: 1,
    detail: true,
    cover: 'projects/salban-orphanage/children-with-books.jpg',
    gallery: [
      'projects/salban-orphanage/children-with-books.jpg',
      'projects/salban-orphanage/classroom.jpg',
      'projects/salban-orphanage/football-team.jpg',
      'projects/salban-orphanage/mealtime.jpg',
      'projects/salban-orphanage/dining-hall.jpg',
      'projects/salban-orphanage/orphanage-entrance.jpg',
    ],
    icon: 'hand-heart',
    title: { en: 'Salban Vihara Orphanage', bn: 'শালবন বিহার অনাথালয়' },
    summary: {
      en: 'Food, shelter, schooling and care for 120 orphaned and destitute children.',
      bn: '১২০টি অনাথ ও দুস্থ শিশুর খাদ্য, আশ্রয়, শিক্ষা ও পরিচর্যা।',
    },
  },
  {
    slug: 'library',
    status: 'running',
    plot: 1,
    detail: false,
    gallery: [],
    icon: 'books',
    title: { en: 'Salban Vihara Library', bn: 'শালবন বিহার পাঠাগার' },
  },
  {
    slug: 'guest-house',
    status: 'running',
    plot: 1,
    detail: true,
    cover: 'projects/guest-house/exterior.jpg',
    gallery: [
      'projects/guest-house/exterior.jpg',
      'projects/guest-house/lounge.jpg',
      'projects/guest-house/reception.jpg',
    ],
    icon: 'bed',
    title: { en: 'Salban Vihara Guest House', bn: 'শালবন বিহার গেস্ট হাউস' },
    summary: {
      en: 'Rooms for researchers, scholars and tourists inside a secure, police-protected campus.',
      bn: 'পুলিশ-সুরক্ষিত নিরাপদ প্রাঙ্গণে গবেষক, পণ্ডিত ও পর্যটকদের থাকার ব্যবস্থা।',
    },
  },
  {
    slug: 'religious-school',
    status: 'running',
    plot: 1,
    detail: false,
    gallery: [],
    icon: 'book-open-text',
    title: { en: 'Religious School', bn: 'ধর্মীয় বিদ্যালয়' },
  },
  {
    slug: 'monks-training-centre',
    status: 'running',
    plot: 1,
    detail: true,
    cover: 'projects/monks-training-centre/novices-at-ruins.jpg',
    gallery: [
      'projects/monks-training-centre/novices-at-ruins.jpg',
      'projects/monks-training-centre/novices-meditation-rows.jpg',
      'projects/monks-training-centre/novices-reading.jpg',
      'projects/monks-training-centre/novices-group.jpg',
      'projects/monks-training-centre/novices-meditation-terrace.jpg',
      'projects/monks-training-centre/novices-walking-meditation.jpg',
      'projects/monks-training-centre/teaching-session.jpg',
      'projects/monks-training-centre/novices-prayer-hall.jpg',
      'projects/monks-training-centre/monks-ceremony.jpg',
    ],
    icon: 'student',
    title: {
      en: "Novice and Monks' Training and Meditation Centre",
      bn: 'শ্রামণ ও ভিক্ষু প্রশিক্ষণ ও ধ্যান কেন্দ্র',
    },
    summary: {
      en: 'Training in Vinaya discipline, the Tripitaka and meditation for newly ordained novices and monks.',
      bn: 'নবদীক্ষিত শ্রামণ ও ভিক্ষুদের জন্য বিনয়, ত্রিপিটক ও ধ্যান বিষয়ে প্রশিক্ষণ।',
    },
  },
  {
    slug: 'kindergarten-school',
    status: 'running',
    plot: 1,
    detail: true,
    cover: 'projects/kindergarten-school/pupils-outside-school.jpg',
    gallery: [
      'projects/kindergarten-school/pupils-outside-school.jpg',
      'projects/kindergarten-school/pupils-with-monk-and-teachers.jpg',
      'projects/kindergarten-school/pupils-by-mural.jpg',
    ],
    icon: 'baby',
    title: { en: 'Salban Kindergarten', bn: 'শালবন কিন্ডারগার্টেন' },
    summary: {
      en: "A first step in schooling for the orphanage's youngest children and for destitute children of the neighbourhood.",
      bn: 'অনাথালয়ের ছোট শিশু এবং আশপাশের দুস্থ শিশুদের জন্য শিক্ষাজীবনের প্রথম ধাপ।',
    },
  },
  {
    slug: 'shilabhadra-hostel',
    status: 'proposed',
    plot: 2,
    detail: true,
    cover: 'projects/shilabhadra-hostel/hostel-building.jpg',
    coverNote: 'proposed',
    gallery: ['projects/shilabhadra-hostel/hostel-render.jpg'],
    icon: 'buildings',
    title: { en: 'Acharya Pandit Shilabhadra Hostel', bn: 'আচার্য পণ্ডিত শীলভদ্র ছাত্রাবাস' },
    summary: {
      en: 'A five-storey hostel for about 100 poor, minority and indigenous students of nearby colleges and universities.',
      bn: 'আশপাশের কলেজ ও বিশ্ববিদ্যালয়ের প্রায় ১০০ জন দরিদ্র, সংখ্যালঘু ও আদিবাসী শিক্ষার্থীর জন্য পাঁচতলা ছাত্রাবাস।',
    },
  },
  {
    slug: 'english-medium-school',
    status: 'proposed',
    plot: 2,
    detail: true,
    cover: 'projects/english-medium-school/school-concept.jpg',
    coverNote: 'concept',
    gallery: [],
    icon: 'graduation-cap',
    title: { en: 'Co-Educational English Medium School', bn: 'সহশিক্ষা ইংরেজি মাধ্যম বিদ্যালয়' },
    summary: {
      en: 'There is no English-medium school near the Academy. We plan one with an international curriculum.',
      bn: 'একাডেমির আশপাশে কোনো ইংরেজি মাধ্যম বিদ্যালয় নেই। আন্তর্জাতিক পাঠ্যক্রমের একটি বিদ্যালয়ের পরিকল্পনা আমাদের।',
    },
  },
  {
    slug: 'health-clinic',
    status: 'proposed',
    plot: 2,
    detail: true,
    gallery: [],
    icon: 'first-aid-kit',
    title: { en: 'Health Clinic', bn: 'স্বাস্থ্য ক্লিনিক' },
    summary: {
      en: 'Primary healthcare at the doorstep of poor and marginalised families, with an ambulance for emergencies.',
      bn: 'দরিদ্র ও প্রান্তিক পরিবারের দোরগোড়ায় প্রাথমিক স্বাস্থ্যসেবা, জরুরি প্রয়োজনে অ্যাম্বুলেন্সসহ।',
    },
  },
  {
    slug: 'research-centre',
    status: 'proposed',
    plot: 2,
    detail: true,
    cover: 'heritage/sites/ananda-vihara-1.jpg',
    gallery: [],
    icon: 'magnifying-glass',
    title: {
      en: 'Administrative Building and Archaeological Research Centre',
      bn: 'প্রশাসনিক ভবন ও প্রত্নতাত্ত্বিক গবেষণা কেন্দ্র',
    },
    summary: {
      en: 'A centre where scholars from home and abroad can research the ancient Buddhist civilisation of Cumilla.',
      bn: 'দেশ-বিদেশের পণ্ডিতরা যেখানে কুমিল্লার প্রাচীন বৌদ্ধ সভ্যতা নিয়ে গবেষণা করতে পারবেন।',
    },
  },
];

export const detailProjects = projects.filter((p) => p.detail);
export const runningProjects = projects.filter((p) => p.status === 'running');
export const proposedProjects = projects.filter((p) => p.status === 'proposed');

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
