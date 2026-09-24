/**
 * Photo registry: every image under src/assets/images with its alt text in both
 * languages. The build fails if a file has no alt text or an entry has no file.
 * Keys are paths relative to src/assets/images.
 */
import type { ImageMetadata } from 'astro';
import type { Lang, Localized } from '~/i18n/utils';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{jpg,jpeg,png}', {
  eager: true,
});

const alt = {
  'brand/bbca-emblem.png': {
    en: 'Emblem of the Bangladesh Buddhist Cultural Academy',
    bn: 'বাংলাদেশ বুদ্ধিষ্ট কালচারাল একাডেমীর প্রতীক',
  },

  // People
  'people/jyotipal-mahathero.jpg': {
    en: 'The Most Venerable 10th Sangharaj Jyotipal Mahathero seated in meditation beneath a Bodhi tree',
    bn: 'বোধিবৃক্ষের নিচে ধ্যানমগ্ন পরম পূজ্য দশম সংঘরাজ জ্যোতিঃপাল মহাথের',
  },
  'people/luang-pho-son.jpg': {
    en: 'Phra Thep Mongkhon Yan (Luang Pho Son Analayo) seated before a shrine decked with flowers',
    bn: 'ফুলে সাজানো বেদির সামনে উপবিষ্ট ফ্রা থেপ মংকলইয়ান (লুয়াং ফো সন অনালয়ো)',
  },
  'people/akbar-hossain.jpg': {
    en: 'Portrait of Lt Colonel (Retd.) Akbar Hossain, Bir Protik',
    bn: 'লেফটেন্যান্ট কর্নেল (অব.) আকবর হোসেন, বীর প্রতীক-এর প্রতিকৃতি',
  },
  'people/dhira-sen-singha.jpg': {
    en: 'Portrait of Mr. Dhira Sen Singha (Gandhi)',
    bn: 'ধীরসেন সিংহ (গান্ধী)-এর প্রতিকৃতি',
  },
  'people/shilabhadra-mahathero.jpg': {
    en: 'Portrait of Venerable Shilabhadra Mahathero',
    bn: 'ভদন্ত শীলভদ্র মহাথের-এর প্রতিকৃতি',
  },
  'people/sugato-priya-bhikkhu.jpg': {
    en: 'Portrait of Venerable Sugato Priya Bhikkhu',
    bn: 'ভদন্ত সুগতপ্রিয় ভিক্ষুর প্রতিকৃতি',
  },
  'people/swapan-chandra-singha.jpg': {
    en: 'Portrait of Mr. Swapan Chandra Singha',
    bn: 'স্বপন চন্দ্র সিংহের প্রতিকৃতি',
  },

  // Heritage
  'heritage/mainamati-lalmai-map.png': {
    en: 'Hand-drawn map of the Mainamati-Lalmai hill range between Cumilla town and Lalmai railway station, marking 23 ruins and mounds',
    bn: 'কুমিল্লা শহর থেকে লালমাই রেলস্টেশন পর্যন্ত ময়নামতি-লালমাই পাহাড়শ্রেণির হাতে আঁকা মানচিত্র, যেখানে ২৩টি ধ্বংসাবশেষ ও ঢিবি চিহ্নিত',
  },
  'heritage/sites/salban-vihara-1.jpg': {
    en: 'Excavated brick walls of Salban Vihara on a grassy site',
    bn: 'সবুজ ঘাসে ঘেরা শালবন বিহারের খননকৃত ইটের দেয়াল',
  },
  'heritage/sites/salban-vihara-2.jpg': {
    en: 'Terraced brick ruins under a cloudy sky',
    bn: 'মেঘলা আকাশের নিচে ধাপে ধাপে উঠে যাওয়া ইটের ধ্বংসাবশেষ',
  },
  'heritage/sites/salban-vihara-3.jpg': {
    en: 'Brick stairway leading up to the ruins of Salban Vihara, with visitors at the top',
    bn: 'শালবন বিহারের ধ্বংসাবশেষে ওঠার ইটের সিঁড়ি, ওপরে দর্শনার্থীরা',
  },
  'heritage/sites/itakhola-mura-1.jpg': {
    en: 'Brick steps and walls of the Itakhola Mura monastery',
    bn: 'ইটাখোলা মুড়া বিহারের ইটের সিঁড়ি ও দেয়াল',
  },
  'heritage/sites/itakhola-mura-2.jpg': {
    en: 'Paved path and staircase at Itakhola Mura',
    bn: 'ইটাখোলা মুড়ার বাঁধানো পথ ও সিঁড়ি',
  },
  'heritage/sites/itakhola-mura-3.jpg': {
    en: 'Brick ruins of Itakhola Mura rising in terraces',
    bn: 'ধাপে ধাপে উঠে যাওয়া ইটাখোলা মুড়ার ইটের ধ্বংসাবশেষ',
  },
  'heritage/sites/rupban-mura-1.jpg': {
    en: 'The brick mound of Rupban Mura with an arched opening',
    bn: 'খিলানযুক্ত প্রবেশপথসহ রূপবান মুড়ার ইটের ঢিবি',
  },
  'heritage/sites/rupban-mura-2.jpg': {
    en: 'Wide view of the Rupban Mura ruins',
    bn: 'রূপবান মুড়ার ধ্বংসাবশেষের বিস্তৃত দৃশ্য',
  },
  'heritage/sites/latikot-mura-1.jpg': {
    en: 'The brick foundations of Latikot Mura seen from above',
    bn: 'ওপর থেকে দেখা লতিকোট মুড়ার ইটের ভিত্তি',
  },
  'heritage/sites/latikot-mura-2.jpg': {
    en: 'Excavated trench and brick courses at Latikot Mura',
    bn: 'লতিকোট মুড়ার খননকৃত অংশ ও ইটের সারি',
  },
  'heritage/sites/kutila-mura-1.jpg': {
    en: 'Stepped brick platform of Kutila Mura (Triratna Stupa)',
    bn: 'কোটিলা মুড়ার (ত্রিরত্ন স্তূপ) ধাপযুক্ত ইটের বেদি',
  },
  'heritage/sites/kutila-mura-2.jpg': {
    en: 'The round stupa bases of Kutila Mura',
    bn: 'কোটিলা মুড়ার গোলাকার স্তূপভিত্তি',
  },
  'heritage/sites/charpatra-mura-1.jpg': {
    en: 'Grass-covered brick walls of Charpatra Mura',
    bn: 'ঘাসে ঢাকা চারপত্র মুড়ার ইটের দেয়াল',
  },
  'heritage/sites/charpatra-mura-2.jpg': {
    en: 'Early black-and-white photograph of the Charpatra Mura ruins',
    bn: 'চারপত্র মুড়ার ধ্বংসাবশেষের পুরোনো সাদাকালো আলোকচিত্র',
  },
  'heritage/sites/queen-mainamati-palace-1.jpg': {
    en: "Visitors among the brick remains of Queen Mainamati's palace",
    bn: 'রানী ময়নামতির প্রাসাদের ইটের ধ্বংসাবশেষের মাঝে দর্শনার্থীরা',
  },
  'heritage/sites/queen-mainamati-palace-2.jpg': {
    en: "The site of Queen Mainamati's palace framed by trees",
    bn: 'গাছপালায় ঘেরা রানী ময়নামতির প্রাসাদের স্থান',
  },
  'heritage/sites/ananda-vihara-1.jpg': {
    en: 'Cross-shaped central shrine and monastery walls at Ananda Vihara',
    bn: 'আনন্দ বিহারের ক্রুশাকৃতি কেন্দ্রীয় মন্দির ও বিহারের দেয়াল',
  },
  'heritage/sites/ananda-vihara-2.jpg': {
    en: 'Brick walls and pillar bases at Ananda Vihara',
    bn: 'আনন্দ বিহারের ইটের দেয়াল ও স্তম্ভের ভিত্তি',
  },
  'heritage/sites/bhoja-vihara-1.jpg': {
    en: 'The low mound of Bhoja Vihara across a grassy field',
    bn: 'ঘাসের মাঠের ওপারে ভোজ বিহারের নিচু ঢিবি',
  },
  'heritage/antiquities/bronze-seated-figure.jpg': {
    en: 'Seated bronze figure wearing a crown, on display in a museum',
    bn: 'জাদুঘরে প্রদর্শিত মুকুট পরিহিত উপবিষ্ট ব্রোঞ্জ মূর্তি',
  },
  'heritage/antiquities/bronze-votive-shrine.jpg': {
    en: 'Bronze votive plaque with a seated Buddha inside an ornate frame',
    bn: 'অলংকৃত কাঠামোর ভেতরে উপবিষ্ট বুদ্ধসহ ব্রোঞ্জের ফলক',
  },
  'heritage/antiquities/bronze-bell.jpg': {
    en: 'Large bronze bell with a looped handle',
    bn: 'আংটাযুক্ত বড় ব্রোঞ্জের ঘণ্টা',
  },
  'heritage/antiquities/stone-deity-serpent-canopy.jpg': {
    en: 'Stone relief of a seated deity beneath a serpent canopy',
    bn: 'সর্পফণার ছায়াতলে উপবিষ্ট দেবমূর্তির পাথরের ভাস্কর্য',
  },
  'heritage/antiquities/terracotta-plaques-display.jpg': {
    en: 'Terracotta plaques displayed in a museum case',
    bn: 'জাদুঘরের শোকেসে সাজানো পোড়ামাটির ফলক',
  },
  'heritage/antiquities/stone-stele-multi-armed-deity.jpg': {
    en: 'Black stone stele carved with a multi-armed deity',
    bn: 'বহুবাহু দেবমূর্তি খোদাই করা কালো পাথরের ফলক',
  },
  'heritage/antiquities/stone-sculptures-gallery.jpg': {
    en: 'A row of carved stone sculptures in a museum gallery',
    bn: 'জাদুঘরে সারিবদ্ধ খোদাই করা পাথরের ভাস্কর্য',
  },
  'heritage/antiquities/seated-buddha-itakhola.jpg': {
    en: 'Seated Buddha statue in place at Itakhola Mura, its head now missing',
    bn: 'ইটাখোলা মুড়ায় স্বস্থানে থাকা মস্তকহীন উপবিষ্ট বুদ্ধমূর্তি',
  },
  'heritage/antiquities/stone-buddha-relief.jpg': {
    en: 'Weathered stone relief of the Buddha',
    bn: 'ক্ষয়ে যাওয়া পাথরে খোদিত বুদ্ধমূর্তি',
  },
  'heritage/antiquities/terracotta-plaque-foliage.jpg': {
    en: 'Terracotta plaque decorated with scrolling foliage',
    bn: 'লতাপাতার নকশাখচিত পোড়ামাটির ফলক',
  },
  'heritage/antiquities/gold-coin.jpg': {
    en: 'Gold coin stamped with a standing figure',
    bn: 'দণ্ডায়মান মূর্তি অঙ্কিত স্বর্ণমুদ্রা',
  },
  'heritage/antiquities/stone-divine-couple.jpg': {
    en: 'Stone sculpture of a divine couple',
    bn: 'দেব-দম্পতির পাথরের ভাস্কর্য',
  },

  // Publications
  'publications/shalban-souvenir-green.jpg': {
    en: 'Green covers and inside pages of the Shalban souvenir',
    bn: '“শালবন” স্মরণিকার সবুজ প্রচ্ছদ ও ভেতরের পাতা',
  },
  'publications/shalban-souvenir-orange.jpg': {
    en: 'Orange cover of the Shalban souvenir published by YMBA, Cumilla',
    bn: 'ওয়াইএমবিএ, কুমিল্লা প্রকাশিত “শালবন” স্মরণিকার কমলা প্রচ্ছদ',
  },
  'publications/shalban-souvenir-orange-2.jpg': {
    en: 'Another edition of the Shalban souvenir with an orange cover',
    bn: 'কমলা প্রচ্ছদের “শালবন” স্মরণিকার আরেকটি সংস্করণ',
  },
  'publications/shalban-souvenir-maroon.jpg': {
    en: 'Maroon cover of the Shalban souvenir',
    bn: '“শালবন” স্মরণিকার মেরুন প্রচ্ছদ',
  },
  'publications/jyotipal-kathina-2011.jpg': {
    en: 'Cover of the book Jyotipal, published for the Kathina ceremony of 2011 by the Sangharaj Jyotipal Mahathero Foundation',
    bn: '২০১১ সালের কঠিন চীবর দান উপলক্ষে সংঘরাজ জ্যোতিঃপাল মহাথের ফাউন্ডেশন প্রকাশিত “জ্যোতিঃপাল” গ্রন্থের প্রচ্ছদ',
  },
  'publications/world-peace-pagoda-souvenir.png': {
    en: 'Souvenir of the inauguration ceremony of the World Peace Pagoda Analayo',
    bn: 'বিশ্ব শান্তি প্যাগোডা অনালয়োর উদ্বোধন অনুষ্ঠানের স্মরণিকা',
  },

  // New Salban Vihara
  'projects/new-salban-vihara/vihara-building.jpg': {
    en: 'The white main building of New Salban Vihara with its red-trimmed gable',
    bn: 'লাল কারুকাজের চূড়াসহ নব শালবন বিহারের সাদা মূল ভবন',
  },
  'projects/new-salban-vihara/monks-under-tree.jpg': {
    en: 'Monks in saffron robes seated in rows under a large tree in the vihara courtyard',
    bn: 'বিহার প্রাঙ্গণে বড় গাছের নিচে সারিবদ্ধ হয়ে বসা গেরুয়া চীবর পরিহিত ভিক্ষুরা',
  },
  'projects/new-salban-vihara/prayer-hall-gathering.jpg': {
    en: 'Monks and devotees gathered in the prayer hall',
    bn: 'প্রার্থনা হলে সমবেত ভিক্ষু ও উপাসক-উপাসিকারা',
  },

  // World Peace Pagoda
  'projects/world-peace-pagoda/pagoda-naga-stairway.jpg': {
    en: 'Staircase guarded by golden naga serpents leading up to the white World Peace Pagoda',
    bn: 'সোনালি নাগমূর্তির পাহারায় সিঁড়ি উঠে গেছে সাদা বিশ্ব শান্তি প্যাগোডার দিকে',
  },
  'projects/world-peace-pagoda/pagoda-golden-naga.jpg': {
    en: 'Golden naga balustrade and the gilded spires of the World Peace Pagoda',
    bn: 'সোনালি নাগ রেলিং ও বিশ্ব শান্তি প্যাগোডার সোনালি চূড়া',
  },
  'projects/world-peace-pagoda/pagoda-avenue.jpg': {
    en: 'Red-paved avenue lined with gardens leading to the World Peace Pagoda',
    bn: 'বাগানঘেরা লাল পথ চলে গেছে বিশ্ব শান্তি প্যাগোডার দিকে',
  },
  'projects/world-peace-pagoda/pagoda-garden-wide.jpg': {
    en: 'The World Peace Pagoda rising above the trees of New Salban Vihara',
    bn: 'নব শালবন বিহারের গাছপালার ওপরে মাথা তুলে দাঁড়ানো বিশ্ব শান্তি প্যাগোডা',
  },
  'projects/world-peace-pagoda/pagoda-pillar.jpg': {
    en: 'Carved pillar standing in front of the pagoda',
    bn: 'প্যাগোডার সামনে খোদাই করা স্তম্ভ',
  },
  'projects/world-peace-pagoda/pagoda-garden.jpg': {
    en: 'The pagoda and a standing golden Buddha, seen from the garden',
    bn: 'বাগান থেকে দেখা প্যাগোডা ও দণ্ডায়মান সোনালি বুদ্ধমূর্তি',
  },
  'projects/world-peace-pagoda/pagoda-flower-garden.jpg': {
    en: 'Beds of red and yellow flowers in front of the pagoda',
    bn: 'প্যাগোডার সামনে লাল ও হলুদ ফুলের বাগান',
  },
  'projects/world-peace-pagoda/shrine-golden-buddha.jpg': {
    en: 'Golden Buddha image on an ornate red and gold altar',
    bn: 'লাল-সোনালি অলংকৃত বেদিতে সোনালি বুদ্ধমূর্তি',
  },
  'projects/world-peace-pagoda/pagoda-blue-sky.jpg': {
    en: 'The pagoda under a clear blue sky',
    bn: 'নীল আকাশের নিচে প্যাগোডা',
  },
  'projects/world-peace-pagoda/pagoda-dusk.jpg': {
    en: 'The pagoda at dusk',
    bn: 'গোধূলিতে প্যাগোডা',
  },
  'projects/world-peace-pagoda/pagoda-path.jpg': {
    en: 'Garden path curving towards the pagoda',
    bn: 'প্যাগোডার দিকে এঁকেবেঁকে যাওয়া বাগানের পথ',
  },

  // Monks' training
  'projects/monks-training-centre/monks-ceremony.jpg': {
    en: 'Rows of monks in saffron robes at a ceremony',
    bn: 'অনুষ্ঠানে সারিবদ্ধ গেরুয়া চীবর পরিহিত ভিক্ষুরা',
  },
  'projects/monks-training-centre/novices-prayer-hall.jpg': {
    en: 'Novice monks seated in the prayer hall',
    bn: 'প্রার্থনা হলে বসা শ্রামণেরা',
  },
  'projects/monks-training-centre/novices-reading.jpg': {
    en: 'Young novices kneeling as they read their texts',
    bn: 'হাঁটু গেড়ে বসে পাঠে মগ্ন তরুণ শ্রামণেরা',
  },
  'projects/monks-training-centre/novices-meditation-terrace.jpg': {
    en: 'Novices meditating in rows on an open terrace among trees',
    bn: 'গাছপালাঘেরা খোলা চত্বরে সারিবদ্ধভাবে ধ্যানরত শ্রামণেরা',
  },
  'projects/monks-training-centre/novices-meditation-rows.jpg': {
    en: 'Novices in meditation, seated on mats in neat rows',
    bn: 'মাদুরে সারিবদ্ধভাবে বসে ধ্যানরত শ্রামণেরা',
  },
  'projects/monks-training-centre/novices-group.jpg': {
    en: 'A group of young novice monks standing together',
    bn: 'একসঙ্গে দাঁড়ানো তরুণ শ্রামণদের দল',
  },
  'projects/monks-training-centre/novices-walking-meditation.jpg': {
    en: 'Novices standing in rows during walking meditation',
    bn: 'চংক্রমণ ধ্যানের সময় সারিবদ্ধভাবে দাঁড়ানো শ্রামণেরা',
  },
  'projects/monks-training-centre/novices-at-ruins.jpg': {
    en: 'Novices meditating among the brick ruins of an ancient monastery',
    bn: 'প্রাচীন বিহারের ইটের ধ্বংসাবশেষের মাঝে ধ্যানরত শ্রামণেরা',
  },
  'projects/monks-training-centre/teaching-session.jpg': {
    en: 'A senior monk leading a session for novices',
    bn: 'শ্রামণদের পাঠদান করছেন একজন জ্যেষ্ঠ ভিক্ষু',
  },

  // Orphanage
  'projects/salban-orphanage/orphanage-entrance.jpg': {
    en: 'Entrance road and sign of the Salban Vihara Orphanage',
    bn: 'শালবন বিহার অনাথালয়ের প্রবেশপথ ও সাইনবোর্ড',
  },
  'projects/salban-orphanage/classroom.jpg': {
    en: 'Children studying at desks in the orphanage hall',
    bn: 'অনাথালয়ের হলঘরে বেঞ্চে বসে পড়াশোনারত শিশুরা',
  },
  'projects/salban-orphanage/mealtime.jpg': {
    en: 'A monk serving a meal to the children',
    bn: 'শিশুদের খাবার পরিবেশন করছেন একজন ভিক্ষু',
  },
  'projects/salban-orphanage/dining-hall.jpg': {
    en: 'Children and novices eating together in the dining hall',
    bn: 'খাবার ঘরে একসঙ্গে খাচ্ছে শিশু ও শ্রামণেরা',
  },
  'projects/salban-orphanage/football-team.jpg': {
    en: 'The orphanage football team in front of the World Peace Pagoda',
    bn: 'বিশ্ব শান্তি প্যাগোডার সামনে অনাথালয়ের ফুটবল দল',
  },
  'projects/salban-orphanage/children-with-books.jpg': {
    en: 'Children holding up their new books in front of the pagoda',
    bn: 'প্যাগোডার সামনে নতুন বই হাতে শিশুরা',
  },

  // Guest house
  'projects/guest-house/exterior.jpg': {
    en: 'The two-storey Salban Vihara Guest House with a Thai-style gabled entrance',
    bn: 'থাই রীতির ত্রিকোণ প্রবেশদ্বারসহ দোতলা শালবন বিহার গেস্ট হাউস',
  },
  'projects/guest-house/lounge.jpg': {
    en: 'Lounge of the guest house with wooden sofas and a dining table',
    bn: 'কাঠের সোফা ও খাবার টেবিলসহ গেস্ট হাউসের লাউঞ্জ',
  },
  'projects/guest-house/reception.jpg': {
    en: 'Reception area of the guest house',
    bn: 'গেস্ট হাউসের অভ্যর্থনা কক্ষ',
  },

  // Proposed
  'projects/english-medium-school/school-concept.jpg': {
    en: 'Concept image of a school building',
    bn: 'একটি বিদ্যালয় ভবনের ধারণাচিত্র',
  },
  'projects/shilabhadra-hostel/hostel-building.jpg': {
    en: 'Architectural rendering of the proposed five-storey Acharya Pandit Shilabhadra Hostel',
    bn: 'প্রস্তাবিত পাঁচতলা আচার্য পণ্ডিত শীলভদ্র ছাত্রাবাসের স্থাপত্য নকশা',
  },
  'projects/shilabhadra-hostel/hostel-render.jpg': {
    en: 'Architectural rendering of the proposed five-storey Acharya Pandit Shilabhadra Hostel building',
    bn: 'প্রস্তাবিত পাঁচতলা আচার্য পণ্ডিত শীলভদ্র ছাত্রাবাস ভবনের স্থাপত্য নকশা',
  },
} satisfies Record<string, Localized>;

export type PhotoKey = keyof typeof alt;

export type GalleryCategory =
  | 'sites'
  | 'antiquities'
  | 'vihara'
  | 'pagoda'
  | 'training'
  | 'orphanage'
  | 'guesthouse'
  | 'publications';

export const galleryCategories: GalleryCategory[] = [
  'sites',
  'antiquities',
  'vihara',
  'pagoda',
  'training',
  'orphanage',
  'guesthouse',
  'publications',
];

const categoryByFolder: Record<string, GalleryCategory> = {
  'heritage/sites/': 'sites',
  'heritage/antiquities/': 'antiquities',
  'projects/new-salban-vihara/': 'vihara',
  'projects/world-peace-pagoda/': 'pagoda',
  'projects/monks-training-centre/': 'training',
  'projects/salban-orphanage/': 'orphanage',
  'projects/guest-house/': 'guesthouse',
  'publications/': 'publications',
};

export interface Photo {
  key: PhotoKey;
  src: ImageMetadata;
  alt: Localized;
  category?: GalleryCategory;
}

const PREFIX = '/src/assets/images/';

// Fail the build early if files and alt text drift apart.
for (const path of Object.keys(files)) {
  const key = path.slice(PREFIX.length);
  if (!(key in alt)) throw new Error(`Image has no alt text in src/data/images.ts: ${key}`);
}

export function photo(key: PhotoKey): Photo {
  const file = files[PREFIX + key];
  if (!file) throw new Error(`Image file missing for registry entry: ${key}`);
  const folder = Object.keys(categoryByFolder).find((f) => key.startsWith(f));
  return { key, src: file.default, alt: alt[key], category: folder ? categoryByFolder[folder] : undefined };
}

export const photoAlt = (key: PhotoKey, lang: Lang) => alt[key][lang];

/** All gallery photos in registry order. */
export const galleryPhotos: Photo[] = (Object.keys(alt) as PhotoKey[]).map(photo).filter((p) => p.category);
