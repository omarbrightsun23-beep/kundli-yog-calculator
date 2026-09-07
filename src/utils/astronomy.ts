import { 
  PlanetName, 
  PlanetaryCoordinates, 
  PlanetInfo, 
  PlanetDataRecord, 
  YogaResult, 
  ChartAnalysis, 
  DashaPeriod, 
  CityPreset 
} from '../types/astrology';

export const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export const SANSKRIT_SIGNS = [
  'Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya',
  'Tula', 'Vrishchika', 'Dhanu', 'Makara', 'Kumbha', 'Meena'
];

export const SIGN_LORDS: Record<number, PlanetName> = {
  0: 'Mars',
  1: 'Venus',
  2: 'Mercury',
  3: 'Moon',
  4: 'Sun',
  5: 'Mercury',
  6: 'Venus',
  7: 'Mars',
  8: 'Jupiter',
  9: 'Saturn',
  10: 'Saturn',
  11: 'Jupiter'
};

export const EXALTATION: Partial<Record<PlanetName, number>> = {
  Sun: 0,       // Aries
  Moon: 1,      // Taurus
  Mars: 9,      // Capricorn
  Mercury: 5,   // Virgo
  Jupiter: 3,   // Cancer
  Venus: 11,    // Pisces
  Saturn: 6,    // Libra
  Rahu: 1,      // Taurus
  Ketu: 7       // Scorpio
};

export const DEBILITATION: Partial<Record<PlanetName, number>> = {
  Sun: 6,       // Libra
  Moon: 7,      // Scorpio
  Mars: 3,      // Cancer
  Mercury: 11,  // Pisces
  Jupiter: 9,   // Capricorn
  Venus: 5,     // Virgo
  Saturn: 0,    // Aries
  Rahu: 7,      // Scorpio
  Ketu: 1       // Taurus
};

export const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

export const DASHA_LORDS = [
  'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'
];

export const DASHA_YEARS: Record<string, number> = {
  Ketu: 7,
  Venus: 20,
  Sun: 6,
  Moon: 10,
  Mars: 7,
  Rahu: 18,
  Jupiter: 16,
  Saturn: 19,
  Mercury: 17
};

export const DASHA_SIGNIFICANCE: Record<string, string> = {
  Sun: 'Authority, father, leadership, government recognition, vital energy.',
  Moon: 'Mental peace, public appeal, emotional growth, maternal connections.',
  Mars: 'Courage, real estate, technical enterprise, sports, direct action.',
  Mercury: 'Business expansion, analytical intellect, media, communication, education.',
  Jupiter: 'Wisdom, spirituality, financial fortune, mentors, progeny, legal victory.',
  Venus: 'Luxury, relationship harmony, vehicles, arts, design, material joys.',
  Saturn: 'Discipline, enduring structure, career elevation, maturity, mass appeal.',
  Rahu: 'Materialistic acceleration, foreign travel, unconventional breakthroughs, fame.',
  Ketu: 'Spiritual detachment, intuitive insights, occult wisdom, research mastery.'
};

export const CELEBRITY_MATCHES: Record<string, string> = {
  'Gajakesari Yoga': 'APJ Abdul Kalam & Amitabh Bachchan',
  'Budhaditya Yoga': 'Albert Einstein & Steve Jobs',
  'Ruchaka Yoga': 'Theodore Roosevelt & Sardar Vallabhbhai Patel',
  'Bhadra Yoga': 'Bill Gates & Rabindranath Tagore',
  'Hamsa Yoga': 'Swami Vivekananda & Dr. S. Radhakrishnan',
  'Malavya Yoga': 'Marilyn Monroe & Rabindranath Tagore',
  'Sasa Yoga': 'Barack Obama & Nelson Mandela',
  'Dharma-Karma Adhipati Raj Yoga': 'Mahatma Gandhi & Jawaharlal Nehru',
  'Chandra-Mangal Yoga': 'Warren Buffett & Mukesh Ambani',
  'Maha Dhan Yoga': 'Jeff Bezos & Lakshmi Mittal',
  'Amala Yoga': 'Mother Teresa & Nelson Mandela',
  'Neech Bhanga Raj Yoga': 'Narendra Modi & Abraham Lincoln',
  'Vipreet Raj Yoga': 'Winston Churchill & Franklin D. Roosevelt'
};

export const CITY_PRESETS: CityPreset[] = [
  // United States Metros (All Major Time Zones)
  { label: 'New York, NY, USA (Eastern - UTC -5:00)', lat: 40.7128, lon: -74.0060, tz: -5.0, country: 'USA' },
  { label: 'Los Angeles, CA, USA (Pacific - UTC -8:00)', lat: 34.0522, lon: -118.2437, tz: -8.0, country: 'USA' },
  { label: 'Chicago, IL, USA (Central - UTC -6:00)', lat: 41.8781, lon: -87.6298, tz: -6.0, country: 'USA' },
  { label: 'Houston, TX, USA (Central - UTC -6:00)', lat: 29.7604, lon: -95.3698, tz: -6.0, country: 'USA' },
  { label: 'San Francisco, CA, USA (Pacific - UTC -8:00)', lat: 37.7749, lon: -122.4194, tz: -8.0, country: 'USA' },
  { label: 'Dallas / Fort Worth, TX, USA (Central - UTC -6:00)', lat: 32.7767, lon: -96.7970, tz: -6.0, country: 'USA' },
  { label: 'Washington, D.C., USA (Eastern - UTC -5:00)', lat: 38.9072, lon: -77.0369, tz: -5.0, country: 'USA' },
  { label: 'Seattle, WA, USA (Pacific - UTC -8:00)', lat: 47.6062, lon: -122.3321, tz: -8.0, country: 'USA' },
  { label: 'Miami, FL, USA (Eastern - UTC -5:00)', lat: 25.7617, lon: -80.1918, tz: -5.0, country: 'USA' },
  { label: 'Atlanta, GA, USA (Eastern - UTC -5:00)', lat: 33.7490, lon: -84.3880, tz: -5.0, country: 'USA' },
  { label: 'Boston, MA, USA (Eastern - UTC -5:00)', lat: 42.3601, lon: -71.0589, tz: -5.0, country: 'USA' },
  { label: 'Phoenix, AZ, USA (Mountain MST - UTC -7:00)', lat: 33.4484, lon: -112.0740, tz: -7.0, country: 'USA' },
  { label: 'Denver, CO, USA (Mountain - UTC -7:00)', lat: 39.7392, lon: -104.9903, tz: -7.0, country: 'USA' },
  { label: 'Austin, TX, USA (Central - UTC -6:00)', lat: 30.2672, lon: -97.7431, tz: -6.0, country: 'USA' },
  { label: 'San Diego, CA, USA (Pacific - UTC -8:00)', lat: 32.7157, lon: -117.1611, tz: -8.0, country: 'USA' },
  { label: 'Honolulu, HI, USA (Hawaii - UTC -10:00)', lat: 21.3069, lon: -157.8583, tz: -10.0, country: 'USA' },

  // Global & Diaspora Metros
  { label: 'Toronto, Canada (Eastern - UTC -5:00)', lat: 43.6532, lon: -79.3832, tz: -5.0, country: 'International' },
  { label: 'Vancouver, Canada (Pacific - UTC -8:00)', lat: 49.2827, lon: -123.1207, tz: -8.0, country: 'International' },
  { label: 'London, UK (GMT/BST - UTC 0:00)', lat: 51.5074, lon: -0.1278, tz: 0.0, country: 'International' },
  { label: 'New Delhi, India (IST - UTC +5:30)', lat: 28.6139, lon: 77.2090, tz: 5.5, country: 'International' },
  { label: 'Mumbai, India (IST - UTC +5:30)', lat: 19.0760, lon: 72.8777, tz: 5.5, country: 'International' },
  { label: 'Bengaluru, India (IST - UTC +5:30)', lat: 12.9716, lon: 77.5946, tz: 5.5, country: 'International' },
  { label: 'Chennai, India (IST - UTC +5:30)', lat: 13.0827, lon: 80.2707, tz: 5.5, country: 'International' },
  { label: 'Kolkata, India (IST - UTC +5:30)', lat: 22.5726, lon: 88.3639, tz: 5.5, country: 'International' },
  { label: 'Dubai, UAE (GST - UTC +4:00)', lat: 25.2048, lon: 55.2708, tz: 4.0, country: 'International' },
  { label: 'Singapore (SGT - UTC +8:00)', lat: 1.3521, lon: 103.8198, tz: 8.0, country: 'International' },
  { label: 'Sydney, Australia (AEST - UTC +10:00)', lat: -33.8688, lon: 151.2093, tz: 10.0, country: 'International' }
];

export function getJulianDay(dateObj: Date, utHours: number): number {
  let year = dateObj.getUTCFullYear();
  let month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate() + utHours / 24.0;
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
}

export function getLahiriAyanamsa(jd: number): number {
  const t = (jd - 2451545.0) / 36525.0;
  return 23.853055 + (50.29 / 3600.0) * (t * 100.0);
}

export function normalizeDeg(deg: number): number {
  let d = deg % 360;
  return d < 0 ? d + 360 : d;
}

export function calculatePlanetaryPositions(jd: number, lat: number, lon: number): PlanetaryCoordinates {
  const T = (jd - 2451545.0) / 36525.0;
  const ayanamsa = getLahiriAyanamsa(jd);

  // SUN
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  const M_sun = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  const C_sun =
    (1.914602 - 0.004817 * T) * Math.sin((M_sun * Math.PI) / 180) +
    (0.019993 - 0.000101 * T) * Math.sin((2 * M_sun * Math.PI) / 180);
  const sunTrop = normalizeDeg(L0 + C_sun);
  const sunSid = normalizeDeg(sunTrop - ayanamsa);

  // MOON
  const L_moon = 218.3164477 + 481267.88123421 * T;
  const M_moon = 134.9633964 + 477198.8675055 * T;
  const moonTrop =
    L_moon +
    6.289 * Math.sin((M_moon * Math.PI) / 180) -
    1.274 * Math.sin(((M_moon - 2 * (L_moon - sunTrop)) * Math.PI) / 180) +
    0.658 * Math.sin((2 * (L_moon - sunTrop) * Math.PI) / 180);
  const moonSid = normalizeDeg(moonTrop - ayanamsa);

  // MARS
  const marsTrop = normalizeDeg(
    355.433 + 19140.299 * T + 10.691 * Math.sin(((19.373 + 19139.858 * T) * Math.PI) / 180)
  );
  const marsSid = normalizeDeg(marsTrop - ayanamsa);

  // MERCURY
  const mercTrop = normalizeDeg(sunTrop + 22.5 * Math.sin(((174.79 + 149472.5 * T) * Math.PI) / 180));
  const mercSid = normalizeDeg(mercTrop - ayanamsa);

  // JUPITER
  const jupTrop = normalizeDeg(
    34.351 + 3034.905 * T + 5.55 * Math.sin(((20.02 + 3034.69 * T) * Math.PI) / 180)
  );
  const jupSid = normalizeDeg(jupTrop - ayanamsa);

  // VENUS
  const venTrop = normalizeDeg(sunTrop + 46.0 * Math.sin(((50.41 + 58517.8 * T) * Math.PI) / 180));
  const venSid = normalizeDeg(venTrop - ayanamsa);

  // SATURN
  const satTrop = normalizeDeg(
    50.077 + 1222.113 * T + 6.35 * Math.sin(((317.02 + 1221.55 * T) * Math.PI) / 180)
  );
  const satSid = normalizeDeg(satTrop - ayanamsa);

  // RAHU (Mean Lunar Node)
  const rahuTrop = normalizeDeg(125.04452 - 1934.136261 * T);
  const rahuSid = normalizeDeg(rahuTrop - ayanamsa);
  const ketuSid = normalizeDeg(rahuSid + 180);

  // ASCENDANT (LAGNA)
  const GMST0 = 100.46061837 + 36000.770053608 * T + 0.000387933 * T * T;
  const dayFrac = jd + 0.5 - Math.floor(jd + 0.5);
  const gmst = normalizeDeg(GMST0 + dayFrac * 360.0 * 1.00273790935);
  const lmst = normalizeDeg(gmst + lon);

  const eps = 23.4392911 - 0.0130042 * T;
  const epsRad = (eps * Math.PI) / 180.0;
  const lmstRad = (lmst * Math.PI) / 180.0;
  const latRad = (lat * Math.PI) / 180.0;

  const y = Math.cos(lmstRad);
  const x = -Math.sin(lmstRad) * Math.cos(epsRad) - Math.tan(latRad) * Math.sin(epsRad);
  const ascTrop = normalizeDeg((Math.atan2(y, x) * 180.0) / Math.PI);
  const ascSid = normalizeDeg(ascTrop - ayanamsa);

  return {
    Lagna: ascSid,
    Sun: sunSid,
    Moon: moonSid,
    Mars: marsSid,
    Mercury: mercSid,
    Jupiter: jupSid,
    Venus: venSid,
    Saturn: satSid,
    Rahu: rahuSid,
    Ketu: ketuSid
  };
}

export function analyzeChart(planets: PlanetaryCoordinates): ChartAnalysis {
  const lagnaSign = Math.floor(planets.Lagna / 30);
  const planetKeys: PlanetName[] = [
    'Lagna', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'
  ];

  const planetData = {} as PlanetDataRecord;

  for (const p of planetKeys) {
    const deg = planets[p];
    const sign = Math.floor(deg / 30);
    const house = ((sign - lagnaSign + 12) % 12) + 1; // 1 to 12
    const degInSign = deg % 30;

    let isCombust = false;
    if (p !== 'Sun' && p !== 'Lagna' && p !== 'Rahu' && p !== 'Ketu') {
      let diff = Math.abs(planets[p] - planets.Sun);
      if (diff > 180) diff = 360 - diff;
      const limit = p === 'Mercury' ? 6 : p === 'Venus' ? 8 : p === 'Mars' ? 10 : 11;
      if (diff < limit) isCombust = true;
    }

    const isExalted = sign === EXALTATION[p];
    const isDebilitated = sign === DEBILITATION[p];
    const isOwnSign = SIGN_LORDS[sign] === p;

    planetData[p] = {
      deg,
      degInSign,
      sign,
      signName: SIGNS[sign],
      sanskritSign: SANSKRIT_SIGNS[sign],
      house,
      isExalted,
      isDebilitated,
      isOwnSign,
      isCombust
    };
  }

  // House Lords
  const houseLords: Record<number, PlanetName> = {};
  for (let h = 1; h <= 12; h++) {
    const signInHouse = (lagnaSign + (h - 1)) % 12;
    houseLords[h] = SIGN_LORDS[signInHouse];
  }

  // Nakshatra of Moon
  const nakshatraIndex = Math.floor(planets.Moon / (360.0 / 27.0));
  const degInNak = planets.Moon % (360.0 / 27.0);
  const nakshatraPada = Math.floor(degInNak / (360.0 / 108.0)) + 1;
  const nakshatraName = NAKSHATRAS[nakshatraIndex] || 'Ashwini';

  const detectedYogas: YogaResult[] = [];

  // 1. Gajakesari Yoga (Jupiter in Kendra from Moon: 1, 4, 7, 10)
  const moonSign = planetData.Moon.sign;
  const jupSign = planetData.Jupiter.sign;
  const diffFromMoon = ((jupSign - moonSign + 12) % 12) + 1;
  if ([1, 4, 7, 10].includes(diffFromMoon)) {
    let strength = 75;
    if (planetData.Jupiter.isExalted || planetData.Moon.isExalted) strength += 20;
    if (planetData.Jupiter.isCombust) strength -= 25;
    if (planetData.Jupiter.isDebilitated || planetData.Moon.isDebilitated) strength -= 30;
    strength = Math.min(100, Math.max(25, strength));

    detectedYogas.push({
      id: 'gajakesari',
      name: 'Gajakesari Yoga',
      category: 'Royal & Intellect 👑',
      planets: ['Jupiter', 'Moon'],
      strength,
      description:
        'Jupiter occupies a cardinal Kendra house (1st, 4th, 7th, or 10th) from the Moon. One of the most auspicious classical yogas, conferring moral authority, enduring intellect, societal esteem, and royal protection against adversaries.',
      activation: 'Fully activates during Jupiter and Moon Mahadasha / Antardasha periods.',
      celebrity: CELEBRITY_MATCHES['Gajakesari Yoga'],
      beneficLevel: 'Supreme'
    });
  }

  // 2. Budhaditya Yoga (Sun + Mercury in same sign)
  if (planetData.Sun.sign === planetData.Mercury.sign) {
    let strength = 70;
    if (planetData.Mercury.isCombust) strength -= 15;
    if (planetData.Mercury.isExalted) strength += 25;
    strength = Math.min(100, Math.max(30, strength));

    detectedYogas.push({
      id: 'budhaditya',
      name: 'Budhaditya Yoga',
      category: 'Intellect & Leadership 🧠',
      planets: ['Sun', 'Mercury'],
      strength,
      description:
        'The conjunction of the Sun (soul, authority, willpower) and Mercury (intellect, analytical logic). Endows the native with exceptional speech, business acumen, administrative prowess, and rapid cognitive clarity.',
      activation: 'Peak activation during Sun & Mercury Dasha cycles.',
      celebrity: CELEBRITY_MATCHES['Budhaditya Yoga'],
      beneficLevel: 'High'
    });
  }

  // 3. Panch Mahapurusha Yogas
  const mahapurushaList: {
    planet: PlanetName;
    name: string;
    desc: string;
  }[] = [
    {
      planet: 'Mars',
      name: 'Ruchaka Yoga',
      desc: 'Formed by exalted or own-sign Mars in a Kendra house. Imparts relentless courage, leadership over forces, technical/real estate mastery, and physical vigor.'
    },
    {
      planet: 'Mercury',
      name: 'Bhadra Yoga',
      desc: 'Formed by exalted or own-sign Mercury in a Kendra house. Grants scholarly supremacy, photographic comprehension, financial acuity, and eloquent oratory.'
    },
    {
      planet: 'Jupiter',
      name: 'Hamsa Yoga',
      desc: 'Formed by exalted or own-sign Jupiter in a Kendra house. Confers spiritual wisdom, philanthropic leadership, ethical nobility, and high respect across institutions.'
    },
    {
      planet: 'Venus',
      name: 'Malavya Yoga',
      desc: 'Formed by exalted or own-sign Venus in a Kendra house. Bestows magnetic charm, artistic genius, luxurious acquisitions, romantic fulfillment, and radiant lifestyle.'
    },
    {
      planet: 'Saturn',
      name: 'Sasa Yoga',
      desc: 'Formed by exalted or own-sign Saturn in a Kendra house. Confers command over masses, unshakeable stamina, industrial success, and authority built on patient discipline.'
    }
  ];

  mahapurushaList.forEach((mp) => {
    const p = planetData[mp.planet];
    if ([1, 4, 7, 10].includes(p.house) && (p.isOwnSign || p.isExalted)) {
      let strength = p.isExalted ? 95 : 85;
      if (p.isCombust) strength -= 20;
      detectedYogas.push({
        id: mp.name.toLowerCase().replace(/\s+/g, '-'),
        name: mp.name,
        category: 'Panch Mahapurusha (Legendary) 🏆',
        planets: [mp.planet],
        strength,
        description: mp.desc,
        activation: `Primarily manifests during the ${mp.planet} Mahadasha and sub-periods.`,
        celebrity: CELEBRITY_MATCHES[mp.name],
        beneficLevel: 'Supreme'
      });
    }
  });

  // 4. Dharma-Karma Adhipati Raj Yoga (Lord of 9th + Lord of 10th in sambandha)
  const lord9 = houseLords[9];
  const lord10 = houseLords[10];
  if (
    lord9 &&
    lord10 &&
    (planetData[lord9].sign === planetData[lord10].sign ||
      planetData[lord9].house === 10 ||
      planetData[lord10].house === 9)
  ) {
    detectedYogas.push({
      id: 'dharma-karma',
      name: 'Dharma-Karma Adhipati Raj Yoga',
      category: 'Supreme Royal Yoga 👑',
      planets: [lord9, lord10],
      strength: 92,
      description:
        'The Lord of the 9th house (Dharma, fortune, divine grace) unifies with the Lord of the 10th house (Karma, career authority, status). A prime hallmark of statecraft, high enterprise, and indelible legacy.',
      activation: `Peak activation during ${lord9} and ${lord10} Dasha cycles.`,
      celebrity: CELEBRITY_MATCHES['Dharma-Karma Adhipati Raj Yoga'],
      beneficLevel: 'Supreme'
    });
  }

  // 5. Chandra-Mangal Yoga (Moon + Mars conjunction or mutual aspect)
  if (planetData.Moon.sign === planetData.Mars.sign) {
    detectedYogas.push({
      id: 'chandra-mangal',
      name: 'Chandra-Mangal Yoga',
      category: 'Wealth & Enterprise 💰',
      planets: ['Moon', 'Mars'],
      strength: 80,
      description:
        'Conjunction of Moon (liquidity, mindset, masses) and Mars (land, boldness, kinetic drive). Indicates an entrepreneurial spark, commercial initiative, and capacity to accumulate tangible assets.',
      activation: 'Active during Moon and Mars Dasha periods.',
      celebrity: CELEBRITY_MATCHES['Chandra-Mangal Yoga'],
      beneficLevel: 'High'
    });
  }

  // 6. Maha Dhan Yoga (2nd Lord and 11th Lord connection)
  const lord2 = houseLords[2];
  const lord11 = houseLords[11];
  if (
    lord2 &&
    lord11 &&
    (planetData[lord2].sign === planetData[lord11].sign ||
      [1, 5, 9, 11].includes(planetData[lord2].house) ||
      [1, 2, 5, 9].includes(planetData[lord11].house))
  ) {
    detectedYogas.push({
      id: 'maha-dhan',
      name: 'Maha Dhan Yoga',
      category: 'Wealth & Assets 💰',
      planets: [lord2, lord11],
      strength: 84,
      description:
        'Powerful linkage between the 2nd house of stored wealth/treasury and the 11th house of recurrent cash flows and gains. Foretells exponential financial growth and wealth-building discipline.',
      activation: `Activates during ${lord2} and ${lord11} planetary transits and dashas.`,
      celebrity: CELEBRITY_MATCHES['Maha Dhan Yoga'],
      beneficLevel: 'High'
    });
  }

  // 7. Amala Yoga (Benefics in 10th house from Lagna or Moon)
  const benefics: PlanetName[] = ['Jupiter', 'Venus', 'Mercury'];
  const beneficsIn10 = benefics.filter((b) => planetData[b].house === 10);
  if (beneficsIn10.length > 0) {
    detectedYogas.push({
      id: 'amala-yoga',
      name: 'Amala Yoga',
      category: 'Purity & Clean Fame 🌟',
      planets: beneficsIn10,
      strength: 82,
      description:
        'Natural benefics placed in the 10th house of worldly actions. Grants an unblemished professional reputation, social philanthropy, and high respect in public and civic life.',
      activation: 'Manifests during middle to mature career phases and active dasha periods.',
      celebrity: CELEBRITY_MATCHES['Amala Yoga'],
      beneficLevel: 'High'
    });
  }

  // 8. Neech Bhanga Raj Yoga (Cancellation of debility)
  for (const p of planetKeys) {
    if (planetData[p].isDebilitated) {
      const debSign = planetData[p].sign;
      const dispositor = SIGN_LORDS[debSign];
      if (dispositor && [1, 4, 7, 10].includes(planetData[dispositor].house)) {
        detectedYogas.push({
          id: `neech-bhanga-${p.toLowerCase()}`,
          name: `Neech Bhanga Raj Yoga (${p})`,
          category: 'Adversity Turned Triumph ⚡',
          planets: [p, dispositor],
          strength: 89,
          description: `The debilitation of ${p} is cancelled because its sign dispositor (${dispositor}) is strongly seated in a cardinal Kendra house. Transforms initial struggle and delay into spectacular resilience and lifelong success.`,
          activation: `Activates strongly in ${p} and ${dispositor} Dashas, typically flourishing after age 28.`,
          celebrity: CELEBRITY_MATCHES['Neech Bhanga Raj Yoga'],
          beneficLevel: 'Supreme'
        });
      }
    }
  }

  // 9. Vipreet Raj Yoga (Harsha, Sarala, Vimala)
  const lord6 = houseLords[6];
  const lord8 = houseLords[8];
  const lord12 = houseLords[12];
  if (
    [6, 8, 12].includes(planetData[lord6].house) ||
    [6, 8, 12].includes(planetData[lord8].house) ||
    [6, 8, 12].includes(planetData[lord12].house)
  ) {
    detectedYogas.push({
      id: 'vipreet-raj',
      name: 'Vipreet Raj Yoga',
      category: 'Strategic Protection & Reversal 🛡️',
      planets: [lord6, lord8, lord12],
      strength: 76,
      description:
        'Lords of challenging dusthana houses (6th, 8th, 12th) situated in dusthana houses themselves. Shields the native from hidden enemies, turns opponent mistakes into victories, and catalyzes gains through sudden systemic disruptions.',
      activation: 'Activates during turbulent external conditions, market downturns, or competitive challenges.',
      celebrity: CELEBRITY_MATCHES['Vipreet Raj Yoga'],
      beneficLevel: 'Protective'
    });
  }

  // 10. Vasumati Yoga (Benefics in Upachaya houses 3, 6, 10, 11)
  const beneficsInUpachaya = benefics.filter((b) => [3, 6, 10, 11].includes(planetData[b].house));
  if (beneficsInUpachaya.length >= 2) {
    detectedYogas.push({
      id: 'vasumati-yoga',
      name: 'Vasumati Yoga',
      category: 'Self-Made Abundance 💎',
      planets: beneficsInUpachaya,
      strength: 78,
      description:
        'Multiple natural benefics situated in Upachaya houses (houses of progressive growth). Guarantees steady self-made prosperity that compounds year-after-year without dependence on inheritance.',
      activation: 'Grows continuously with age, especially in the 30s and 40s.',
      beneficLevel: 'High'
    });
  }

  // Calculate Chart Power Score
  let score = 52;
  detectedYogas.forEach((y) => {
    score += y.strength * 0.11;
  });
  if (planetData.Sun.isExalted || planetData.Moon.isExalted) score += 6;
  if (planetData.Jupiter.isExalted) score += 5;
  score = Math.min(97, Math.max(45, Math.round(score)));

  let summaryQuote = 'Your chart demonstrates exceptional professional drive and strategic acumen.';
  if (score >= 85) {
    summaryQuote = 'A remarkably potent chart characterized by rare sovereign combinations and high protective dignity.';
  } else if (score >= 75) {
    summaryQuote = 'Strong planetary alignment conferring executive authority, commercial enterprise, and intellectual distinction.';
  }

  return {
    lagnaSign,
    lagnaSignName: SIGNS[lagnaSign],
    lagnaSanskrit: SANSKRIT_SIGNS[lagnaSign],
    moonSignName: SIGNS[planetData.Moon.sign],
    moonSanskrit: SANSKRIT_SIGNS[planetData.Moon.sign],
    nakshatraName,
    nakshatraPada,
    planetData,
    yogas: detectedYogas,
    chartScore: score,
    summaryQuote
  };
}

export function calculateDashaSchedule(moonDeg: number, birthDateObj: Date): DashaPeriod[] {
  const nakshatraIdx = Math.floor(moonDeg / (360.0 / 27.0));
  const degInNak = moonDeg % (360.0 / 27.0);
  const nakTotalDeg = 360.0 / 27.0;
  const balanceFrac = 1.0 - degInNak / nakTotalDeg;

  const firstLordIdx = nakshatraIdx % 9;
  const firstLord = DASHA_LORDS[firstLordIdx];
  const firstTotalYears = DASHA_YEARS[firstLord];
  const balanceYears = firstTotalYears * balanceFrac;

  const schedule: DashaPeriod[] = [];
  let currentYear = birthDateObj.getFullYear() + birthDateObj.getMonth() / 12.0;

  let lordIdx = firstLordIdx;
  let isFirst = true;

  for (let i = 0; i < 9; i++) {
    const pLord = DASHA_LORDS[lordIdx];
    const spanYears = isFirst ? balanceYears : DASHA_YEARS[pLord];
    const endYear = currentYear + spanYears;

    const nowYear = new Date().getFullYear() + new Date().getMonth() / 12.0;
    const isCurrent = nowYear >= currentYear && nowYear <= endYear;

    schedule.push({
      lord: pLord,
      start: Math.round(currentYear),
      end: Math.round(endYear),
      isCurrent,
      spanYears: Math.round(spanYears),
      significance: DASHA_SIGNIFICANCE[pLord] || 'Planetary period activation.'
    });

    currentYear = endYear;
    lordIdx = (lordIdx + 1) % 9;
    isFirst = false;
  }
  return schedule;
}
