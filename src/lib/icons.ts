// Phosphor icons (regular weight), imported as raw SVG strings. Add new ones here.

import arrowRight from '@phosphor-icons/core/assets/regular/arrow-right.svg?raw';
import arrowUpRight from '@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw';
import arrowLeft from '@phosphor-icons/core/assets/regular/arrow-left.svg?raw';
import arrowsOut from '@phosphor-icons/core/assets/regular/arrows-out.svg?raw';
import bank from '@phosphor-icons/core/assets/regular/bank.svg?raw';
import bed from '@phosphor-icons/core/assets/regular/bed.svg?raw';
import books from '@phosphor-icons/core/assets/regular/books.svg?raw';
import bookOpenText from '@phosphor-icons/core/assets/regular/book-open-text.svg?raw';
import buildings from '@phosphor-icons/core/assets/regular/buildings.svg?raw';
import bus from '@phosphor-icons/core/assets/regular/bus.svg?raw';
import car from '@phosphor-icons/core/assets/regular/car.svg?raw';
import caretLeft from '@phosphor-icons/core/assets/regular/caret-left.svg?raw';
import caretRight from '@phosphor-icons/core/assets/regular/caret-right.svg?raw';
import columns from '@phosphor-icons/core/assets/regular/columns.svg?raw';
import deviceMobile from '@phosphor-icons/core/assets/regular/device-mobile.svg?raw';
import envelopeSimple from '@phosphor-icons/core/assets/regular/envelope-simple.svg?raw';
import facebookLogo from '@phosphor-icons/core/assets/regular/facebook-logo.svg?raw';
import firstAidKit from '@phosphor-icons/core/assets/regular/first-aid-kit.svg?raw';
import flowerLotus from '@phosphor-icons/core/assets/regular/flower-lotus.svg?raw';
import globeHemisphereEast from '@phosphor-icons/core/assets/regular/globe-hemisphere-east.svg?raw';
import graduationCap from '@phosphor-icons/core/assets/regular/graduation-cap.svg?raw';
import handCoins from '@phosphor-icons/core/assets/regular/hand-coins.svg?raw';
import handHeart from '@phosphor-icons/core/assets/regular/hand-heart.svg?raw';
import handsPraying from '@phosphor-icons/core/assets/regular/hands-praying.svg?raw';
import handshake from '@phosphor-icons/core/assets/regular/handshake.svg?raw';
import instagramLogo from '@phosphor-icons/core/assets/regular/instagram-logo.svg?raw';
import list from '@phosphor-icons/core/assets/regular/list.svg?raw';
import magnifyingGlass from '@phosphor-icons/core/assets/regular/magnifying-glass.svg?raw';
import mapPin from '@phosphor-icons/core/assets/regular/map-pin.svg?raw';
import phone from '@phosphor-icons/core/assets/regular/phone.svg?raw';
import shieldCheck from '@phosphor-icons/core/assets/regular/shield-check.svg?raw';
import student from '@phosphor-icons/core/assets/regular/student.svg?raw';
import toolbox from '@phosphor-icons/core/assets/regular/toolbox.svg?raw';
import train from '@phosphor-icons/core/assets/regular/train.svg?raw';
import usersThree from '@phosphor-icons/core/assets/regular/users-three.svg?raw';
import whatsappLogo from '@phosphor-icons/core/assets/regular/whatsapp-logo.svg?raw';
import x from '@phosphor-icons/core/assets/regular/x.svg?raw';
import youtubeLogo from '@phosphor-icons/core/assets/regular/youtube-logo.svg?raw';
import translate from '@phosphor-icons/core/assets/regular/translate.svg?raw';
import baby from '@phosphor-icons/core/assets/regular/baby.svg?raw';
import scroll from '@phosphor-icons/core/assets/regular/scroll.svg?raw';

export const icons = {
  'arrow-right': arrowRight,
  'arrow-up-right': arrowUpRight,
  'arrow-left': arrowLeft,
  'arrows-out': arrowsOut,
  'bank': bank,
  'bed': bed,
  'books': books,
  'book-open-text': bookOpenText,
  'buildings': buildings,
  'bus': bus,
  'car': car,
  'caret-left': caretLeft,
  'caret-right': caretRight,
  'columns': columns,
  'device-mobile': deviceMobile,
  'envelope-simple': envelopeSimple,
  'facebook-logo': facebookLogo,
  'first-aid-kit': firstAidKit,
  'flower-lotus': flowerLotus,
  'globe-hemisphere-east': globeHemisphereEast,
  'graduation-cap': graduationCap,
  'hand-coins': handCoins,
  'hand-heart': handHeart,
  'hands-praying': handsPraying,
  'handshake': handshake,
  'instagram-logo': instagramLogo,
  'list': list,
  'magnifying-glass': magnifyingGlass,
  'map-pin': mapPin,
  'phone': phone,
  'shield-check': shieldCheck,
  'student': student,
  'toolbox': toolbox,
  'train': train,
  'users-three': usersThree,
  'whatsapp-logo': whatsappLogo,
  'x': x,
  'youtube-logo': youtubeLogo,
  translate: translate,
  'baby': baby,
  'scroll': scroll,
} as const;

export type IconName = keyof typeof icons;
