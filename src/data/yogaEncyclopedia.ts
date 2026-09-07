export interface YogaArticle {
  slug: string;
  name: string;
  sanskritName: string;
  category: 'Raj Yoga' | 'Panch Mahapurusha' | 'Dhan Yoga' | 'Intellect' | 'Protective' | 'Dosha';
  planetsInvolved: string[];
  formationRule: string;
  classicalSource: string;
  shlokaSummary: string;
  effects: string[];
  invalidationConditions: string[];
  dashaActivation: string;
  celebrityExamples: string[];
  searchIntentKeywords: string[];
}

export const YOGA_ENCYCLOPEDIA: YogaArticle[] = [
  {
    slug: 'raj-yoga',
    name: 'Raj Yoga in Kundli',
    sanskritName: 'राजयोग (सम्पूर्ण विश्लेषण)',
    category: 'Raj Yoga',
    planetsInvolved: ['Kendra Lords (1st, 4th, 7th, 10th)', 'Trikona Lords (1st, 5th, 9th)'],
    formationRule: 'Connection (conjunction, mutual 7th drishti aspect, or Parivartana sign exchange) between the rulers of the Kendra houses (Vishnu sthanas of action) and Trikona houses (Lakshmi sthanas of fortune).',
    classicalSource: 'Brihat Parashara Hora Shastra (BPHS), Raj Yoga Adhyaya & Phaladeepika',
    shlokaSummary: 'Unification of divine luck (Trikona) with worldly power, kingdom, and administrative authority (Kendra). Elevated status, royal honor, and career supremacy.',
    effects: [
      'Confers high social status, leadership dignity, executive command, and public prominence.',
      'Elevates the native above peers, creating opportunities for rapid socio-economic advancement.',
      'Protects during organizational disputes and grants authority in corporate or government realms.',
      'Ensures continuous upward career momentum when energized by favorable Mahadashas.'
    ],
    invalidationConditions: [
      'Combustion of participating lords by proximity to the Sun (<6°).',
      'Affliction by placement in Dusthana houses (6th, 8th, 12th) without cancellation.',
      'Debility of Kendra or Trikona lords without Neech Bhanga.',
      'Severe malefic aspect from Rahu or Saturn without Jupiterian intervention.'
    ],
    dashaActivation: 'Activates during the conjoined Mahadasha or Antardasha of the Kendra and Trikona rulers. Peak manifestation typically between ages 28 and 48.',
    celebrityExamples: ['Mahatma Gandhi', 'Barack Obama', 'Indira Gandhi', 'Narendra Modi', 'Abraham Lincoln'],
    searchIntentKeywords: [
      'raj yoga in kundli',
      'raj yoga calculator free',
      'kundli me rajyog kaise dekhe',
      'raj yog kab banta hai',
      'check raj yoga online',
      'types of raj yoga in kundli',
      'how to find raj yog in kundli by date of birth',
      'raj yoga check free',
      'which house is responsible for raj yoga',
      'why hasn\'t my raj yoga given results yet',
      'does raj yoga guarantee a government job'
    ]
  },
  {
    slug: 'dhan-yoga',
    name: 'Dhan Yoga (Wealth Combinations)',
    sanskritName: 'धन योग (समृद्धि एवं कोष)',
    category: 'Dhan Yoga',
    planetsInvolved: ['2nd Lord (Dhana / Treasury)', '11th Lord (Labha / Gains)', '5th & 9th Lords (Lakshmi Trikonas)'],
    formationRule: 'Strong associations between the 2nd house of accumulated wealth, 11th house of income/recurring cash flows, 5th house of intellect/speculation, and 9th house of divine grace.',
    classicalSource: 'Brihat Parashara Hora Shastra, Dhana Yoga Adhyaya & Saravali',
    shlokaSummary: 'The eternal circulation of capital: accumulated liquid assets (2nd) continuously fed by multi-source gains (11th) through meritorious intellect (5th) and divine fortune (9th).',
    effects: [
      'Continuous inflow of liquid capital, diversified business revenues, and sound asset compounding.',
      'Generational wealth preservation and financial independence from early adulthood.',
      'Astute investment intelligence in real estate, equities, gold, and commercial ventures.',
      'Freedom from crippling debt and protection against corporate bankruptcies.'
    ],
    invalidationConditions: [
      'Lords of 2nd or 11th situated in the 6th, 8th, or 12th house (forming Daridra Yoga).',
      'Heavily combust or debilitated without Neech Bhanga.',
      'Strong aspect of functional malefics without benefic balance.'
    ],
    dashaActivation: 'Peak financial prosperity unlocks during the Mahadashas of the 2nd, 5th, 9th, and 11th house lords.',
    celebrityExamples: ['Warren Buffett', 'Jeff Bezos', 'Mukesh Ambani', 'Bernard Arnault', 'Ratan Tata'],
    searchIntentKeywords: [
      'dhan yoga in kundli',
      'dhan yoga calculator online',
      'dhan yoga vs raj yoga',
      'amir banne ke yog kundli me',
      'wealth yogas in horoscope',
      'which yoga makes a person wealthy',
      'how to identify dhan yog in birth chart',
      '2nd and 11th house combinations',
      'can a malefic aspect ruin a dhan yoga'
    ]
  },
  {
    slug: 'gajakesari-yoga',
    name: 'Gajakesari Yoga',
    sanskritName: 'गजकेसरी योग',
    category: 'Raj Yoga',
    planetsInvolved: ['Jupiter (Guru)', 'Moon (Chandra)'],
    formationRule: 'Jupiter occupies a Kendra house (1st, 4th, 7th, or 10th) from the natal Moon.',
    classicalSource: 'Brihat Parashara Hora Shastra, Ch. 36 & Phaladeepika',
    shlokaSummary: 'Gaja (the royal elephant) symbolizes majestic stamina, patience, and memory; Kesari (the lion) represents fearless command and regal sovereignty.',
    effects: [
      'Confers unshakeable societal esteem, moral uprightness, and respect among scholars.',
      'Grants enduring intellectual memory, eloquence, and magnetic mentorship qualities.',
      'Protects the native from sudden downfall; adversaries are consistently neutralized.',
      'Blesses with longevity, good health, and virtuous progeny.'
    ],
    invalidationConditions: [
      'Jupiter is severely combust by the Sun within 11 degrees.',
      'Either Moon or Jupiter is in deep debilitation without Neech Bhanga cancellation.',
      'Conjunction with Rahu creating Guru-Chandal dosha diminishes moral purity.'
    ],
    dashaActivation: 'Unlocks full results during Jupiter Mahadasha/Moon Antardasha, or vice versa, especially between ages 28 and 54.',
    celebrityExamples: ['Dr. APJ Abdul Kalam', 'Amitabh Bachchan', 'Barack Obama', 'Queen Elizabeth II'],
    searchIntentKeywords: [
      'gajakesari yoga benefits',
      'gajakesari yoga calculator',
      'gaj kesari yoga in kundli',
      'check gajakesari yoga in kundli',
      'kundli me gajkesari yog',
      'jupiter moon kendra',
      'gajakesari yoga rules',
      'how do i know if gaj kesari yoga is active',
      'who can seek benefits of gajakesari yoga',
      'how long does gajakesari yoga last'
    ]
  },
  {
    slug: 'budhaditya-yoga',
    name: 'Budhaditya Yoga',
    sanskritName: 'बुधादित्य योग',
    category: 'Intellect',
    planetsInvolved: ['Sun (Surya)', 'Mercury (Budha)'],
    formationRule: 'Sun and Mercury conjunct in the same zodiac sign (rasi), without excessive combustion.',
    classicalSource: 'Saravali, Ch. 15 & Brihat Jataka',
    shlokaSummary: 'Unification of Atmakaraka (Sun - Soul/Authority) with Amatyakaraka (Mercury - Intellect/Commerce).',
    effects: [
      'Grants razor-sharp mathematical, analytical, and cryptographic aptitude.',
      'Bestows exceptional oratory, persuasive writing, and diplomatic communication.',
      'Indicates career triumphs in public administration, finance, technology, or academia.',
      'Native commands administrative dignity and respect from governmental bodies.'
    ],
    invalidationConditions: [
      'Mercury is at the exact same degree as the Sun (deep combustion / cazimi under 3 degrees reduces speech clarity).',
      'Placed in dusthana houses (6th, 8th, or 12th) without benefic aspects.'
    ],
    dashaActivation: 'Flourishes during Mercury and Sun Mahadasha and Bhukti cycles, especially in early career.',
    celebrityExamples: ['Albert Einstein', 'Steve Jobs', 'Warren Buffett', 'Swami Vivekananda'],
    searchIntentKeywords: [
      'budhaditya yoga in kundli',
      'budh aditya yoga in kundli',
      'budhaditya yoga in 1st house',
      'combust mercury in budhaditya yoga',
      'is budhaditya yoga effective if mercury is combust',
      'sun mercury conjunction vedic',
      'budhaditya yoga benefits',
      'budhaditya yoga career'
    ]
  },
  {
    slug: 'dharma-karma-adhipati-raj-yoga',
    name: 'Dharma-Karma Adhipati Raj Yoga',
    sanskritName: 'धर्म-कर्माधिपति राजयोग',
    category: 'Raj Yoga',
    planetsInvolved: ['9th House Lord (Bhagya/Dharma)', '10th House Lord (Karma/Rajya)'],
    formationRule: 'Lords of the 9th and 10th houses establish a Sambandha: mutual conjunction, mutual aspect (drishti), or Parivartana (sign exchange).',
    classicalSource: 'Brihat Parashara Hora Shastra, Raj Yoga Adhyaya',
    shlokaSummary: 'The supreme fusion of divine grace (9th house) with worldly ambition and royal execution (10th house).',
    effects: [
      'Regarded as the pinnacle Raj Yoga in Vedic astrology, conferring statecraft authority.',
      'Elevates the native to the top tiers of their chosen profession or public life.',
      'Fosters ethical entrepreneurship and enduring socio-political legacy.',
      'Ensures continuous upward trajectory even in the midst of macroeconomic turbulence.'
    ],
    invalidationConditions: [
      'If either lord also rules a dusthana house (6, 8, 12) without proper neutralizers.',
      'Placements afflicted by malefic associations (Saturn/Rahu) without Jupiterian aspect.'
    ],
    dashaActivation: 'Manifests during the conjoined Dasha periods of the 9th and 10th lords, marking the highest career triumphs.',
    celebrityExamples: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Indira Gandhi', 'Abraham Lincoln'],
    searchIntentKeywords: ['9th and 10th lord conjunction', 'dharma karma adhipati yoga', 'supreme raj yoga vedic', 'raj yoga calculator']
  },
  {
    slug: 'ruchaka-yoga',
    name: 'Ruchaka Yoga',
    sanskritName: 'रुचक योग',
    category: 'Panch Mahapurusha',
    planetsInvolved: ['Mars (Mangal)'],
    formationRule: 'Mars resides in a cardinal Kendra house (1, 4, 7, 10) in its own sign (Aries, Scorpio) or exaltation sign (Capricorn).',
    classicalSource: 'Brihat Samhita & Phaladeepika, Pancha Mahapurusha chapter',
    shlokaSummary: 'Endows martial fortitude, tactical brilliance, athletic mastery, and commanding presence.',
    effects: [
      'Supreme physical stamina, courage, and fearlessness in high-stakes environments.',
      'Acquisition of prime real estate, engineering leadership, and military/police command.',
      'Charismatic physical aura with decisive administrative judgment.',
      'Unsurpassed ability to execute aggressive, large-scale projects successfully.'
    ],
    invalidationConditions: [
      'Mars placed in debilitation (Cancer) without Neech Bhanga.',
      'Severely combust by the Sun within 10 degrees.'
    ],
    dashaActivation: 'Peak manifestations during the 7-year Mars Mahadasha and sub-periods.',
    celebrityExamples: ['Theodore Roosevelt', 'Sardar Vallabhbhai Patel', 'Bruce Lee', 'Michael Jordan'],
    searchIntentKeywords: ['ruchaka yoga mars', 'panch mahapurusha ruchaka', 'exalted mars kendra', 'ruchaka yoga effects']
  },
  {
    slug: 'bhadra-yoga',
    name: 'Bhadra Yoga',
    sanskritName: 'भद्र योग',
    category: 'Panch Mahapurusha',
    planetsInvolved: ['Mercury (Budha)'],
    formationRule: 'Mercury occupies a Kendra house (1, 4, 7, 10) in Gemini (own sign) or Virgo (own/exalted sign).',
    classicalSource: 'Brihat Parashara Hora Shastra & Jataka Parijata',
    shlokaSummary: 'The archetype of the intellectual genius, master merchant, and eloquent scholar.',
    effects: [
      'Photographic cognitive retention, mastery over languages, mathematics, and codes.',
      'Commercial supremacy in trading, technology architectures, and mass communications.',
      'Youthful vitality, witty conversation, and high public magnetism.',
      'Philanthropic disposition combined with acute financial risk management.'
    ],
    invalidationConditions: [
      'Mercury severely combust by proximity to the Sun.',
      'Afflicted by heavy malefic aspects without Jupiterian support.'
    ],
    dashaActivation: 'Unlocks transformative growth during the 17-year Mercury Mahadasha.',
    celebrityExamples: ['Bill Gates', 'Rabindranath Tagore', 'Mark Zuckerberg', 'Isaac Newton'],
    searchIntentKeywords: ['bhadra yoga mercury', 'bhadra yoga in virgo', 'mercury panch mahapurusha', 'bhadra yoga benefits']
  },
  {
    slug: 'hamsa-yoga',
    name: 'Hamsa Yoga',
    sanskritName: 'हंस योग',
    category: 'Panch Mahapurusha',
    planetsInvolved: ['Jupiter (Guru)'],
    formationRule: 'Jupiter occupies a Kendra house (1, 4, 7, 10) in Sagittarius, Pisces (own signs), or Cancer (exaltation).',
    classicalSource: 'Brihat Parashara Hora Shastra & Saravali',
    shlokaSummary: 'Hamsa (the swan of divine discrimination) represents pure spiritual wisdom and unshakeable dharma.',
    effects: [
      'Revered moral authority, spiritual mentorship, and scholarly institution-building.',
      'Natural fortune in legal, academic, judicial, and philosophical realms.',
      'Protective celestial shield against life catastrophes and reputational damage.',
      'Generous patronage toward humanitarian and educational institutions.'
    ],
    invalidationConditions: [
      'Jupiter combust by the Sun.',
      'Debilitated in Capricorn without Neech Bhanga.'
    ],
    dashaActivation: 'Radiates maximum benevolence throughout the 16-year Jupiter Mahadasha.',
    celebrityExamples: ['Swami Vivekananda', 'Dr. S. Radhakrishnan', 'Dalai Lama', 'Paramahansa Yogananda'],
    searchIntentKeywords: ['hamsa yoga jupiter', 'exalted jupiter kendra', 'hamsa yoga cancer', 'hamsa yoga effects']
  },
  {
    slug: 'malavya-yoga',
    name: 'Malavya Yoga',
    sanskritName: 'मालव्य योग',
    category: 'Panch Mahapurusha',
    planetsInvolved: ['Venus (Shukra)'],
    formationRule: 'Venus resides in a Kendra house (1, 4, 7, 10) in Taurus, Libra (own signs), or Pisces (exaltation).',
    classicalSource: 'Phaladeepika & Brihat Jataka',
    shlokaSummary: 'The goddess of opulence, fine aesthetics, cinema, luxury transport, and romantic harmony.',
    effects: [
      'Captivating physical charm, artistic brilliance, musicality, and cinematic appeal.',
      'Accumulation of elite motor vehicles, palatial estates, and designer luxuries.',
      'Blissful romantic union and high sensory refinement.',
      'Exceptional diplomatic tact and grace in corporate or public negotiations.'
    ],
    invalidationConditions: [
      'Venus combust within 8 degrees of the Sun.',
      'Debilitated in Virgo without cancellation.'
    ],
    dashaActivation: 'Yields prime luxury and creative breakthroughs throughout the 20-year Venus Mahadasha.',
    celebrityExamples: ['Marilyn Monroe', 'Rabindranath Tagore', 'Aishwarya Rai', 'Leonardo DiCaprio'],
    searchIntentKeywords: ['malavya yoga venus', 'exalted venus in pisces', 'malavya yoga luxury', 'malavya yoga marriage']
  },
  {
    slug: 'sasa-yoga',
    name: 'Sasa Yoga',
    sanskritName: 'शश योग',
    category: 'Panch Mahapurusha',
    planetsInvolved: ['Saturn (Shani)'],
    formationRule: 'Saturn resides in a Kendra house (1, 4, 7, 10) in Capricorn, Aquarius (own signs), or Libra (exaltation).',
    classicalSource: 'Brihat Parashara Hora Shastra, Pancha Mahapurusha',
    shlokaSummary: 'Command over the masses, monumental patience, industrial empire-building, and enduring legacy.',
    effects: [
      'Ability to lead large labor forces, industrial supply chains, and grassroots political movements.',
      'Unyielding stoic stamina; builds dynasties through patient, multi-decade discipline.',
      'Deep legal, judicial, and systemic governance abilities.',
      'Immunity to sudden panics; thrives during economic recessions and structural turnarounds.'
    ],
    invalidationConditions: [
      'Saturn combust by the Sun within 11 degrees.',
      'Debilitated in Aries without Neech Bhanga.'
    ],
    dashaActivation: 'Reaches monumental fruition during the 19-year Saturn Mahadasha, especially after age 36.',
    celebrityExamples: ['Barack Obama', 'Nelson Mandela', 'Margaret Thatcher', 'Oprah Winfrey'],
    searchIntentKeywords: ['sasa yoga saturn', 'exalted saturn in libra', 'shasha yoga effects', 'saturn panch mahapurusha']
  },
  {
    slug: 'maha-dhan-yoga',
    name: 'Maha Dhan Yoga',
    sanskritName: 'महा धन योग',
    category: 'Dhan Yoga',
    planetsInvolved: ['2nd House Lord (Dhana)', '11th House Lord (Labha)'],
    formationRule: 'Association or mutual exchange between the lord of the 2nd house (treasury) and 11th house (recurring cash flows), or both placed in Kendra/Trikona.',
    classicalSource: 'Brihat Parashara Hora Shastra, Dhana Yoga Adhyaya',
    shlokaSummary: 'The compounding loop of stored capital (2nd house) feeding recurring gains (11th house).',
    effects: [
      'Continuous streams of liquid assets, diversified cashflows, and financial independence.',
      'Multi-generational wealth preservation with minimal exposure to bankruptcies.',
      'Astute capital allocation acumen in business equity, real estate, and commodities.',
      'Family legacy characterized by abundance and financial security.'
    ],
    invalidationConditions: [
      'If lords are afflicted by dusthana placements (6, 8, 12) without benefic aspects.',
      'Severe malefic combustion without benefic support.'
    ],
    dashaActivation: 'Activates during the transits and Mahadashas of the 2nd and 11th lords.',
    celebrityExamples: ['Jeff Bezos', 'Lakshmi Mittal', 'Warren Buffett', 'Mukesh Ambani'],
    searchIntentKeywords: ['maha dhan yoga vedic', 'wealth yoga in kundli', '2nd and 11th lord conjunction', 'dhan yoga calculator']
  },
  {
    slug: 'chandra-mangal-yoga',
    name: 'Chandra-Mangal Yoga',
    sanskritName: 'चन्द्र-मंगल योग',
    category: 'Dhan Yoga',
    planetsInvolved: ['Moon (Chandra)', 'Mars (Mangal)'],
    formationRule: 'Moon and Mars are conjunct in the same sign, or in mutual 7th aspect from one another.',
    classicalSource: 'Saravali & Phaladeepika',
    shlokaSummary: 'The union of liquid intuition (Moon) with dynamic enterprise and land/real estate execution (Mars).',
    effects: [
      'Sharp commercial instincts, fast-paced dealmaking, and financial resilience.',
      'High success in real estate, infrastructure, manufacturing, and commodity trade.',
      'Unstoppable drive to convert concepts into commercial reality.',
      'Courageous, bold approach to business negotiations.'
    ],
    invalidationConditions: [
      'If conjunct in dusthana houses (6, 8, 12) or heavily afflicted by Saturn.',
      'Debilitation of either planet without Neech Bhanga.'
    ],
    dashaActivation: 'Unlocks dynamic financial surges during Moon and Mars Dasha periods.',
    celebrityExamples: ['Warren Buffett', 'Mukesh Ambani', 'Bernard Arnault', 'Henry Ford'],
    searchIntentKeywords: ['chandra mangal yoga', 'moon mars conjunction vedic', 'chandra mangal yoga wealth', 'chandra mangal yoga in 1st house']
  },
  {
    slug: 'neech-bhanga-raj-yoga',
    name: 'Neech Bhanga Raj Yoga',
    sanskritName: 'नीचभंग राजयोग',
    category: 'Raj Yoga',
    planetsInvolved: ['Debilitated Planet', 'Sign Dispositor / Exaltation Lord'],
    formationRule: 'A debilitated planet has its sign dispositor or exaltation lord situated in a Kendra house from the Lagna or Moon.',
    classicalSource: 'Phaladeepika, Ch. 6 & Brihat Parashara Hora Shastra',
    shlokaSummary: 'Transmutation of cosmic debility into monumental, indestructible self-made triumph.',
    effects: [
      'Early life adversity and struggles build unmatched resilience and psychological toughness.',
      'Mid-to-late life ascension to unprecedented heights of authority, wealth, and public renown.',
      'Profound empathy and strategic wisdom born out of overcoming initial setbacks.',
      'The native becomes an inspiring archetype of the self-made champion.'
    ],
    invalidationConditions: [
      'The cancelling dispositor is itself combust or placed in the 6th, 8th, or 12th house.',
      'Debilitated planet has zero Kendra connections.'
    ],
    dashaActivation: 'Activates strongly during the Dasha of the debilitated planet and its dispositor, typically surging after age 28.',
    celebrityExamples: ['Narendra Modi', 'Abraham Lincoln', 'Steve Jobs', 'Shah Rukh Khan'],
    searchIntentKeywords: [
      'neech bhang raj yoga in kundli',
      'neech bhang raj yoga calculator',
      'signs of neech bhang raj yog',
      'does neech bhanga raj yoga really give success after initial struggle',
      'debilitated planet cancellation',
      'what cancels raj yoga in kundli',
      'neech bhanga raj yoga benefits'
    ]
  },
  {
    slug: 'vipreet-raj-yoga',
    name: 'Vipreet Raj Yoga',
    sanskritName: 'विपरीत राजयोग',
    category: 'Protective',
    planetsInvolved: ['6th Lord (Harsha)', '8th Lord (Sarala)', '12th Lord (Vimala)'],
    formationRule: 'Lords of dusthana houses (6, 8, 12) occupy dusthana houses without association with benefic lords.',
    classicalSource: 'Uttara Kalamrita by Kalidasa',
    shlokaSummary: 'Two minuses produce a sovereign plus: crisis transforms into sudden victory and strategic reversal.',
    effects: [
      'Shields against competitor schemes, hidden enemies, and malicious lawsuits.',
      'Unexpected financial windfalls or promotions arising from sudden systemic disruption or rivals’ missteps.',
      'Exceptional fortitude under high-stress, crisis-management scenarios.',
      'Enables the native to emerge unscathed and victorious from severe market downturns.'
    ],
    invalidationConditions: [
      'The dusthana lords are aspected by auspicious trine (5th/9th) lords, which ruins the pure Vipreet insulation.',
      'Dusthana lords move into Kendra houses without mutual sambandha.'
    ],
    dashaActivation: 'Unlocks peak advantages during times of industry chaos, competitive exams, or volatile elections.',
    celebrityExamples: ['Winston Churchill', 'Franklin D. Roosevelt', 'Richard Nixon', 'Indira Gandhi'],
    searchIntentKeywords: [
      'vipreet raj yoga meaning and calculator',
      'vipreet raj yoga in kundli',
      'harsha yoga in kundli',
      'harsha sarala vimala yoga',
      '6 8 12 lords dusthana',
      'what is vipreet raj yoga and who gets it'
    ]
  },
  {
    slug: 'amala-yoga',
    name: 'Amala Yoga',
    sanskritName: 'अमला योग',
    category: 'Intellect',
    planetsInvolved: ['Jupiter', 'Venus', 'Mercury'],
    formationRule: 'Only natural benefics (Jupiter, Venus, Mercury) occupy the 10th house from the Lagna or Moon.',
    classicalSource: 'Brihat Parashara Hora Shastra & Jataka Parijata',
    shlokaSummary: 'Amala signifies spotless purity, immaculate reputation, and philanthropic statesmanship.',
    effects: [
      'The native enjoys an untarnished, spotless public reputation and civic reverence.',
      'Professional triumphs achieved entirely through merit, grace, and ethical excellence.',
      'Honored by world leaders, monarchs, and philanthropic institutions.',
      'Leaves a peaceful, noble legacy celebrated across generations.'
    ],
    invalidationConditions: [
      'Presence of natural malefics (Mars, Saturn, Rahu) in the 10th house.',
      'Combustion of the 10th house benefic.'
    ],
    dashaActivation: 'Steadily elevates professional authority during the middle-to-senior phases of life.',
    celebrityExamples: ['Mother Teresa', 'Nelson Mandela', 'Warren Buffett', 'Kofi Annan'],
    searchIntentKeywords: ['amala yoga in kundli', 'benefics in 10th house', 'amala yoga 10th house vedic', 'amala yoga benefits']
  },
  {
    slug: 'vasumati-yoga',
    name: 'Vasumati Yoga',
    sanskritName: 'वसुमति योग',
    category: 'Dhan Yoga',
    planetsInvolved: ['Benefics in Upachayas (3, 6, 10, 11)'],
    formationRule: 'Natural benefics (Jupiter, Venus, Mercury) are positioned in Upachaya houses (3rd, 6th, 10th, 11th) from Lagna or Moon.',
    classicalSource: 'Saravali & Brihat Jataka',
    shlokaSummary: 'Vasumati (Earth Mother of Endless Treasures) bestows self-made compounding wealth.',
    effects: [
      'Self-made prosperity that grows year-after-year through personal industry and compounding.',
      'Freedom from financial servitude; never dependent on hereditary wealth or handouts.',
      'Multi-source income streams expanding throughout the 30s, 40s, and 50s.',
      'Command over substantial real estate, investment portfolios, and liquid reserves.'
    ],
    invalidationConditions: [
      'Benefics debilitated or combust.',
      'Upachaya houses populated strictly by afflicted malefics.'
    ],
    dashaActivation: 'Compounds consistently with age, reaching maximum yield in the second half of life.',
    celebrityExamples: ['Ratan Tata', 'Carlos Slim', 'Andrew Carnegie', 'Azim Premji'],
    searchIntentKeywords: ['vasumati yoga vedic', 'benefics in upachaya houses', 'vasumati yoga wealth', 'vasumati yoga calculator']
  },
  {
    slug: 'lakshmi-yoga',
    name: 'Lakshmi Yoga',
    sanskritName: 'लक्ष्मी योग (धन एवं ऐश्वर्य)',
    category: 'Dhan Yoga',
    planetsInvolved: ['9th Lord (Bhagya)', 'Venus (Shukra - Karaka of Wealth)'],
    formationRule: 'The 9th house lord occupies a Kendra or Trikona house in its own or exaltation sign, while Venus is strong and well-placed in Kendra/Trikona.',
    classicalSource: 'Brihat Parashara Hora Shastra, Dhana Yoga Prakarana',
    shlokaSummary: 'Lakshmi is the divine consort of Lord Vishnu representing infinite grace, royalty, wealth, and elegance. The native is blessed with continuous abundance and regal comforts.',
    effects: [
      'Blessed with continuous fortune, nobility, and high-level financial ease.',
      'Immunity from extreme poverty; financial resources replenish spontaneously.',
      'Commands graceful physical aesthetics, pleasant speech, and generous philanthropic disposition.',
      'Enjoys luxurious conveyances, prime properties, and affectionate family relationships.'
    ],
    invalidationConditions: [
      'Venus combust within 8 degrees of the Sun.',
      '9th lord debilitated in dusthana houses (6th, 8th, 12th) without cancellation.'
    ],
    dashaActivation: 'Full results bloom during Venus Mahadasha or the 9th lord’s Dasha, conferring sustained luxury and honor.',
    celebrityExamples: ['Queen Elizabeth II', 'Ratan Tata', 'Mukesh Ambani', 'J.K. Rowling'],
    searchIntentKeywords: [
      'lakshmi yoga in kundli',
      'lakshmi yoga benefits',
      'lakshmi yoga calculator',
      'lakshmi yoga in birth chart',
      'venus 9th lord wealth yoga'
    ]
  },
  {
    slug: 'kemdrum-yoga',
    name: 'Kemdrum Yoga & Cancellation Rules',
    sanskritName: 'केमद्रुम योग एवं भंग नियम',
    category: 'Dosha',
    planetsInvolved: ['Moon (Chandra)', 'Benefics in Kendra'],
    formationRule: 'Formed when there are no planets (excluding Sun, Rahu, and Ketu) in the 2nd and 12th houses from the Moon. However, if any planet occupies a Kendra from the Lagna or Moon, Kemdrum Bhanga (cancellation) occurs.',
    classicalSource: 'Brihat Jataka & Phaladeepika, Ch. 6',
    shlokaSummary: 'Kemdrum creates psychological isolation or erratic finances. But when cancelled (Kemdrum Bhanga), the native evolves exceptional psychological grit and self-reliant triumph.',
    effects: [
      'Without cancellation: spells of mental anxiety, financial fluctuations, and feeling unsupported.',
      'With Kemdrum Bhanga (Cancelled): Transforms into fierce self-reliance, intellectual originality, and mid-life dynasty building.',
      'Bestows deep introspective depth and philosophical clarity.',
      'Protective Kendra planets convert early loneliness into sovereign independence.'
    ],
    invalidationConditions: [
      'Any planet (except Sun/nodes) sits in the 2nd or 12th from Moon (Yoga completely invalid).',
      'Planets in Kendra from Moon or Lagna trigger instant Kemdrum Bhanga (Cancellation).',
      'Jupiter aspects the Moon with divine 5th, 7th, or 9th drishti.'
    ],
    dashaActivation: 'Testing during early Moon Dasha; if cancelled, yields profound self-made success in Jupiter and Mercury Dashas.',
    celebrityExamples: ['Abraham Lincoln', 'Steve Jobs', 'Albert Einstein'],
    searchIntentKeywords: [
      'kemdrum yoga cancellation rules',
      'kemdrum yoga in kundli',
      'kemdrum bhang raj yoga',
      'what cancels kemdrum yoga',
      'kemdrum yoga remedies',
      'moon isolated in chart'
    ]
  }
];
