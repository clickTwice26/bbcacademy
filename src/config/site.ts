/**
 * Organisation details used across the site. Edit here, not in templates.
 * Empty strings / null hide the related UI (social icons, WhatsApp, donation block).
 */
export const site = {
  url: 'https://www.bbca-org.com',

  /** Set to true once a native speaker has reviewed the Bangla text.
   *  While false, /bn/ pages are noindex, left out of the sitemap and get no hreflang. */
  bnReviewed: false,

  name: {
    en: 'Bangladesh Buddhist Cultural Academy',
    bn: 'বাংলাদেশ বুদ্ধিষ্ট কালচারাল একাডেমী',
  },
  shortName: 'BBCA',
  parent: {
    en: "Young Men's Buddhist Association (YMBA), Cumilla",
    bn: 'ইয়াং মেন্স বুড্ডিস্ট অ্যাসোসিয়েশন (ওয়াইএমবিএ), কুমিল্লা',
  },
  motto: {
    en: 'May all beings be happy',
    bn: 'জগতের সকল প্রাণী সুখী হোক',
  },
  founded: 1991,
  registration: 'Com/481/92',

  phones: ['+8801815273516', '+8801715034698', '+8801835558088'],
  email: 'bbca.bd95@gmail.com',
  address: {
    en: ['New Salban Vihara, Mainamati Museum', 'P.O. Alahipur, Kotbari', 'Cumilla-3503, Bangladesh'],
    bn: ['নব শালবন বিহার, ময়নামতি জাদুঘর', 'ডাকঘর: আলাহিপুর, কোটবাড়ী', 'কুমিল্লা-৩৫০৩, বাংলাদেশ'],
  },
  /** Map pin: "Shalban Buddist Temple" on OpenStreetMap (node 5297458843), just west of the
   *  Salban Vihara ruins, where the profile places New Salban Vihara. Confirm with the Academy. */
  geo: { lat: 23.4255, lng: 91.1345 },

  /** Full profile URLs, e.g. 'https://www.facebook.com/…'. Leave empty to hide. */
  socials: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
  /** WhatsApp number in international format without '+', e.g. '8801815273516'. Empty hides it. */
  whatsapp: '',

  /** Bank / mobile-banking details for donations. Null hides the block on the Support page.
   *  The bank account is the one printed in the Academy's profile ("FOLDER 2.docx", Source of funding). */
  donation: {
    bank: {
      accountName: 'Bangladesh Buddhist Cultural Academy',
      accountType: { en: 'Savings', bn: 'সঞ্চয়ী' },
      accountNumber: '01 00 28 01 53 430',
      bankName: 'Janata Bank PLC',
      branch: 'Cumilla Cadet College Branch',
      branchCode: '00 839',
      routing: '13 51 91 189',
      swift: 'JANBBDDH',
    },
  } as null | {
    bank?: {
      accountName: string;
      accountType?: { en: string; bn: string };
      accountNumber: string;
      bankName: string;
      branch: string;
      branchCode?: string;
      routing?: string;
      swift?: string;
    };
    mobile?: { service: string; number: string }[];
  },
} as const;

export type Site = typeof site;
