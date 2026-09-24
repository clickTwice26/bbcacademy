import type { Localized } from '~/i18n/utils';
import type { PhotoKey } from './images';

export interface Site {
  id: string;
  name: Localized;
  /** Number of the site on the hand-drawn survey map, where it appears. */
  mapNo?: number;
  photos: PhotoKey[];
}

/** The significant monasteries and sites shown in the Academy's profile. */
export const sites: Site[] = [
  {
    id: 'salban-vihara',
    name: { en: 'Salban Vihara', bn: 'শালবন বিহার' },
    mapNo: 17,
    photos: [
      'heritage/sites/salban-vihara-1.jpg',
      'heritage/sites/salban-vihara-3.jpg',
      'heritage/sites/salban-vihara-2.jpg',
    ],
  },
  {
    id: 'kutila-mura',
    name: { en: 'Kutila Mura (Triratna Stupa)', bn: 'কোটিলা মুড়া (ত্রিরত্ন স্তূপ)' },
    mapNo: 8,
    photos: ['heritage/sites/kutila-mura-1.jpg', 'heritage/sites/kutila-mura-2.jpg'],
  },
  {
    id: 'ananda-vihara',
    name: { en: 'Ananda Vihara', bn: 'আনন্দ বিহার' },
    mapNo: 10,
    photos: ['heritage/sites/ananda-vihara-1.jpg', 'heritage/sites/ananda-vihara-2.jpg'],
  },
  {
    id: 'itakhola-mura',
    name: { en: 'Itakhola Mura', bn: 'ইটাখোলা মুড়া' },
    mapNo: 13,
    photos: [
      'heritage/sites/itakhola-mura-1.jpg',
      'heritage/sites/itakhola-mura-2.jpg',
      'heritage/sites/itakhola-mura-3.jpg',
    ],
  },
  {
    id: 'rupban-mura',
    name: { en: 'Rupban Mura', bn: 'রূপবান মুড়া' },
    mapNo: 14,
    photos: ['heritage/sites/rupban-mura-2.jpg', 'heritage/sites/rupban-mura-1.jpg'],
  },
  {
    id: 'bhoja-vihara',
    name: { en: 'Bhoja Vihara', bn: 'ভোজ বিহার' },
    mapNo: 12,
    photos: ['heritage/sites/bhoja-vihara-1.jpg'],
  },
  {
    id: 'charpatra-mura',
    name: { en: 'Charpatra Mura', bn: 'চারপত্র মুড়া' },
    mapNo: 7,
    photos: ['heritage/sites/charpatra-mura-1.jpg', 'heritage/sites/charpatra-mura-2.jpg'],
  },
  {
    id: 'queen-mainamati-palace',
    name: { en: "Queen Mainamati's Palace", bn: 'রানী ময়নামতির প্রাসাদ' },
    mapNo: 1,
    photos: [
      'heritage/sites/queen-mainamati-palace-2.jpg',
      'heritage/sites/queen-mainamati-palace-1.jpg',
    ],
  },
  {
    id: 'latikot-mura',
    name: { en: 'Latikot Mura', bn: 'লতিকোট মুড়া' },
    photos: ['heritage/sites/latikot-mura-1.jpg', 'heritage/sites/latikot-mura-2.jpg'],
  },
];

export const antiquities: PhotoKey[] = [
  'heritage/antiquities/bronze-seated-figure.jpg',
  'heritage/antiquities/terracotta-plaque-foliage.jpg',
  'heritage/antiquities/stone-deity-serpent-canopy.jpg',
  'heritage/antiquities/bronze-bell.jpg',
  'heritage/antiquities/seated-buddha-itakhola.jpg',
  'heritage/antiquities/stone-stele-multi-armed-deity.jpg',
  'heritage/antiquities/terracotta-plaques-display.jpg',
  'heritage/antiquities/stone-buddha-relief.jpg',
  'heritage/antiquities/gold-coin.jpg',
  'heritage/antiquities/stone-sculptures-gallery.jpg',
  'heritage/antiquities/bronze-votive-shrine.jpg',
  'heritage/antiquities/stone-divine-couple.jpg',
];

/** Legend of the hand-drawn survey map, as printed on it. */
export const mapLegend: Localized[] = [
  { en: 'Place of Queen Mainamati', bn: 'রানী ময়নামতির প্রাসাদস্থল' },
  { en: 'Mainamati hillocks', bn: 'ময়নামতি টিলা' },
  { en: 'Mainamati hillocks', bn: 'ময়নামতি টিলা' },
  { en: 'Mainamati hillocks', bn: 'ময়নামতি টিলা' },
  { en: 'Mainamati hillocks', bn: 'ময়নামতি টিলা' },
  { en: 'Mainamati hillocks', bn: 'ময়নামতি টিলা' },
  { en: 'Charpatra Mound', bn: 'চারপত্র মুড়া' },
  { en: 'Kutila Mound', bn: 'কোটিলা মুড়া' },
  { en: 'Bairagi Mound', bn: 'বৈরাগী মুড়া' },
  { en: "Ananda Raja's Place", bn: 'আনন্দ রাজার প্রাসাদস্থল' },
  { en: "Place of Rupban's Daughter", bn: 'রূপবান কন্যার স্থান' },
  { en: "Bhoj Raja's Place", bn: 'ভোজ রাজার প্রাসাদস্থল' },
  { en: 'Ita Khola Hills', bn: 'ইটাখোলা টিলা' },
  { en: 'Rupban Mound', bn: 'রূপবান মুড়া' },
  { en: 'Kotbari Mound', bn: 'কোটবাড়ী মুড়া' },
  { en: 'Hati Gara Mound', bn: 'হাতিগাড়া মুড়া' },
  { en: 'Salban Vihar', bn: 'শালবন বিহার' },
  { en: 'Ujirpura Mound', bn: 'উজিরপুর মুড়া' },
  { en: 'Pucca Mound', bn: 'পাক্কা মুড়া' },
  { en: 'Khila Mound', bn: 'খিলা মুড়া' },
  { en: 'Rupbani Mound', bn: 'রূপবানী মুড়া' },
  { en: 'Bala Gajir Mound', bn: 'বালাগাজীর মুড়া' },
  { en: 'Shandi Mound', bn: 'শান্দি মুড়া' },
];
