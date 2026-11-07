// Formation chart images for the 18 encyclopedia yoga pages.
// Image files live in public/images/ and are served at /images/<file>.
// Alt texts per the image package insert guide (~/workspace/kundli-images/INSERT-GUIDE.md).

export const FORMATION_IMAGE_ALT: Record<string, string> = {
  'amala-yoga':
    'Kundli chart showing Amala Yoga formation — only the natural benefics Jupiter, Venus and Mercury occupy the 10th house from the Leo ascendant',
  'bhadra-yoga':
    'Kundli chart showing Bhadra Yoga, a Pancha Mahapurusha Yoga — Mercury in its own sign Gemini in the ascendant kendra',
  'budhaditya-yoga':
    'Kundli chart showing Budhaditya Yoga formation — Sun and Mercury conjunct in Leo in the ascendant',
  'chandra-mangal-yoga':
    'Kundli chart showing Chandra-Mangal Yoga formation — exalted Moon and Mars conjunct in Taurus in the ascendant',
  'dhan-yoga':
    'Kundli chart showing Dhan Yoga formation — 2nd lord Venus and 11th lord Saturn in mutual sign exchange, with 9th lord Jupiter in the 5th house',
  'dharma-karma-adhipati-raj-yoga':
    'Kundli chart showing Dharma-Karma Adhipati Raj Yoga — 9th lord Saturn and 10th lord Jupiter conjunct in the 10th house in Pisces',
  'gajakesari-yoga':
    'Kundli chart showing Gajakesari Yoga formation — Jupiter in the 10th house, a kendra from the Moon placed in the Cancer ascendant',
  'hamsa-yoga':
    'Kundli chart showing Hamsa Yoga, a Pancha Mahapurusha Yoga — Jupiter in its own sign Sagittarius in the ascendant kendra',
  'kemdrum-yoga':
    'Kundli chart showing Kemdrum Yoga formation — the Moon in Gemini in the 10th house with no planets in the 2nd or 12th houses from it',
  'lakshmi-yoga':
    'Kundli chart showing Lakshmi Yoga formation — 9th lord Saturn in its own sign in the 9th house and Venus in its own sign in the Taurus ascendant',
  'maha-dhan-yoga':
    'Kundli chart showing Maha Dhan Yoga formation — 2nd lord Mercury and 11th lord Jupiter in mutual exchange (parivartana)',
  'malavya-yoga':
    'Kundli chart showing Malavya Yoga, a Pancha Mahapurusha Yoga — Venus in its own sign Taurus in the ascendant kendra',
  'neech-bhanga-raj-yoga':
    'Kundli chart showing Neech Bhanga Raj Yoga formation — debilitated Jupiter in Capricorn in the 7th house, with its dispositor Saturn in the 10th house kendra',
  'raj-yoga':
    'North Indian kundli chart showing Raj Yoga formation — the 10th lord Saturn and 9th lord Jupiter conjunct in the 10th house of an Aries ascendant chart',
  'ruchaka-yoga':
    'Kundli chart showing Ruchaka Yoga, a Pancha Mahapurusha Yoga — Mars in its own sign Aries in the ascendant kendra',
  'sasa-yoga':
    'Kundli chart showing Sasa Yoga, a Pancha Mahapurusha Yoga — Saturn in its exaltation sign Libra in the ascendant kendra',
  'vasumati-yoga':
    'Kundli chart showing Vasumati Yoga formation — benefics Jupiter, Venus and Mercury placed in the upachaya houses, the 6th, 10th and 11th',
  'vipreet-raj-yoga':
    'Kundli chart showing Vipreet Raj Yoga formation — the lords of the 6th, 8th and 12th houses placed in dusthana houses',
};

export function formationImageSrc(slug: string): string {
  return `/images/${slug}-formation-in-kundli-chart.webp`;
}
