import React, { useState } from 'react';
import { ChevronDown, Search, Compass } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
  category: 'Formation & Rules' | 'Timing & Dasha' | 'Cancellation & Doshas' | 'Wealth vs Royalty & Hindi';
}

export const FAQ_DATA: FAQItem[] = [
  // 1. Formation & Identification Questions
  {
    category: 'Formation & Rules',
    q: 'Why are my zodiac sign and ascendant different in Vedic astrology compared to Western astrology?',
    a: 'Most people in the United States and the West are familiar with Western Tropical astrology, which fixes 0° Aries to the Vernal Equinox (the start of Spring). In contrast, Vedic Astrology (Jyotish) uses the Sidereal Zodiac (specifically the Chitrapaksha Lahiri Ayanamsa), which measures planetary positions against the actual observable fixed constellations in the cosmos. Because the Earth wobbles on its axis (axial precession), there is currently an approximate 24-degree difference between the two systems. As a result, your Vedic Ascendant (Lagna), Moon sign, and Sun sign will often fall one sign earlier than your Western tropical chart (for example, a Western Taurus Sun may become an Aries Sun in Vedic astrology). KundliYog computes exact sidereal positions so you can see your true classical Vedic chart.'
  },
  {
    category: 'Formation & Rules',
    q: 'What is a Kundli Yog and how do I check my Kundli Yog?',
    a: 'In Vedic Astrology (Jyotish), a Kundli Yog (also spelled Kundali Yoga) refers to a specific planetary combination, conjunction, mutual aspect, or house exchange in your birth chart (Janam Kundli). Classical scriptures like Brihat Parashara Hora Shastra, Phaladeepika, and Saravali categorize yogas into auspicious unions (such as Raj Yog for authority, Dhan Yog for wealth, and Gajakesari Yog for wisdom) and challenging doshas (such as Kemdrum). You can check every Kundli Yog formed in your horoscope for free by entering your date of birth, exact time, and birthplace in our Kundli Yog Calculator above.'
  },
  {
    category: 'Formation & Rules',
    q: 'How do I find out if I have Raj Yoga in my Kundli?',
    a: 'To identify a Raj Yoga in your Kundli (birth chart), look for connections between the lords of Kendra houses (1st, 4th, 7th, 10th — representing pillars of action and worldly status) and Trikona houses (1st, 5th, 9th — representing divine fortune, dharma, and intellect). When a Kendra lord and a Trikona lord either conjunct in the same sign, cast mutual 7th aspects on each other, or exchange signs (Parivartana), a classical Parashari Raj Yoga is formed. You can check this instantly by entering your birth date, time, and birthplace in our free Kundli Yog Calculator above.'
  },
  {
    category: 'Formation & Rules',
    q: 'Which houses and planets form Gajakesari Yoga?',
    a: 'Gajakesari Yoga is formed by Jupiter (Guru) and the Moon (Chandra). According to Brihat Parashara Hora Shastra (BPHS), it occurs when Jupiter occupies a Kendra house (1st, 4th, 7th, or 10th) from the natal Moon. In this alignment, Gaja (the elephant) symbolizes majestic stamina, wisdom, and memory, while Kesari (the lion) represents fearless sovereignty. The yoga delivers maximum strength when Jupiter is in its own sign (Sagittarius, Pisces) or exaltation sign (Cancer), and when neither planet is combust or severely afflicted by Rahu.'
  },
  {
    category: 'Formation & Rules',
    q: 'Can Budhaditya Yoga form in any house, and what if Mercury is combust?',
    a: 'Budhaditya Yoga forms whenever the Sun (Surya) and Mercury (Budha) occupy the same zodiac sign. It can occur in any of the 12 houses, but its most illustrious results appear in the 1st, 5th, 9th, 10th, and 11th houses. Because Mercury is astronomically always close to the Sun (never more than 28° apart), combustion frequently occurs. Classical treatises (like Saravali) confirm that Budhaditya Yoga remains valid and functional unless Mercury is in "deep combustion" (under 3° from the exact solar center), which can cause nervous restlessness or strained communication. When separated by 3° to 12°, Mercury absorbs the solar radiance, conferring exceptional analytical, mathematical, and cryptographic intellect.'
  },
  {
    category: 'Formation & Rules',
    q: 'How many total yogas exist in a Janam Kundali?',
    a: 'Classical Vedic astrology literature details hundreds of planetary yogas. Dr. B.V. Raman’s authoritative work "Three Hundred Important Combinations" outlines 300 major yogas, while foundational texts like Brihat Parashara Hora Shastra, Phaladeepika, and Jataka Parijata describe thousands of micro-combinations. These are classified into major archetypes: Raj Yogas (authority and leadership), Dhan Yogas (wealth and commerce), Panch Mahapurusha Yogas (planetary greatness), Nabhasa Yogas (sky patterns), and Ashubha/Dosha Yogas (challenging karmic alignments like Kemdrum or Kaal Sarp).'
  },

  // 2. Timing & Dasha Questions
  {
    category: 'Timing & Dasha',
    q: 'At what age does Raj Yoga start working?',
    a: 'Raj Yogas do not activate continuously from birth. Instead, their seeds blossom when the native enters the Vimshottari Mahadasha or Antardasha of the planets creating the yoga. Additionally, specific planets carry inherent maturation ages in Vedic Jyotish: Jupiter matures at age 16, the Sun at 21, the Moon at 24, Venus at 25, Mars at 28, Mercury at 32, Saturn at 36, and Rahu at 42. Major Raj Yogas commonly begin showing prominent societal elevation between ages 28 and 42, coinciding with the activation of the 9th and 10th house rulers.'
  },
  {
    category: 'Timing & Dasha',
    q: 'Why do I have Raj Yoga in my chart but am still facing financial hardship?',
    a: 'This is one of the most frequent astrological queries. A Raj Yoga in your chart can remain dormant or delayed due to four classical factors: 1) Timing: You may currently be running the Mahadasha of an unrelated planet or a Dusthana lord (6th, 8th, or 12th). 2) Planetary Combustion: One of the yoga-forming planets may be within 5°–8° of the Sun. 3) Yoga Bhanga: A debilitating planet or an inimical aspect (such as Saturn or Rahu casting malefic drishti) may be obstructing results. 4) Raj Yoga vs. Dhan Yoga distinction: A pure Raj Yoga confers status, rank, and responsibility, but without supporting 2nd and 11th house Dhan Yogas, liquid cash flow may feel tight despite high public prestige.'
  },
  {
    category: 'Timing & Dasha',
    q: 'Does a yoga activate during Mahadasha or Antardasha?',
    a: 'Yes, the Vimshottari Dasha system acts as the cosmic ignition switch for every natal yoga. The yoga produces its most dramatic, life-changing fruits when the native runs the Mahadasha of Planet A and the Antardasha (sub-period) of Planet B that formed the yoga. If the Mahadasha of the yoga lords occurs in infancy or extreme old age, the results manifest through parental prosperity or honorary lifetime achievements rather than active mid-career ascents.'
  },
  {
    category: 'Timing & Dasha',
    q: 'How long does Gajakesari Yoga last in a person\'s life?',
    a: 'While the foundational character traits of Gajakesari Yoga (high intellect, moral dignity, memory, and reputation) protect the native throughout their entire lifespan, the peak external breakthroughs — awards, prestigious appointments, and major assets — surge during the 16-year Jupiter Mahadasha and the 10-year Moon Mahadasha, particularly during their overlapping Antardashas.'
  },

  // 3. Cancellation & Results Questions (Yoga Bhanga)
  {
    category: 'Cancellation & Doshas',
    q: 'What cancels a Raj Yoga (Yoga Bhanga)?',
    a: 'A Raj Yoga is canceled or significantly weakened (Yoga Bhanga) under the following conditions: 1) One of the participating planets is in deep debilitation without Neech Bhanga cancellation. 2) The yoga lords are placed in Dusthana houses (6th house of litigation/debts, 8th house of obstacles, or 12th house of loss). 3) One of the lords is combust by the Sun without benefic relief. 4) The Lagna lord is astronomically weak (Shadbala score below 1.0) and unable to bear the weight of royal authority.'
  },
  {
    category: 'Cancellation & Doshas',
    q: 'Does Neech Bhanga Raj Yoga really give success after initial struggle?',
    a: 'Yes. Neech Bhanga Raj Yoga is classical proof of the Vedic principle of transmutation. When a debilitated planet has its sign ruler or exaltation lord placed in a Kendra house from the Lagna or Moon, the planetary debility is canceled and converted into royal strength. Natives with Neech Bhanga (such as Steve Jobs, Narendra Modi, or Abraham Lincoln) invariably experience severe early adversity, humble origins, or profound rejection. Overcoming these crucibles builds extraordinary grit, eventually propelling them to unprecedented authority.'
  },
  {
    category: 'Cancellation & Doshas',
    q: 'Can a malefic aspect from Saturn or Rahu ruin a Dhan Yoga?',
    a: 'A malefic aspect from natural malefics (Saturn, Mars, Rahu, or Ketu) will not completely destroy a Dhan Yoga, but it alters how wealth is earned and kept. Rahu introduces sudden speculative volatility, offshore dealings, and sudden windfall/loss cycles. Saturn demands grueling labor, structural delays, and austere wealth preservation, meaning prosperity typically materializes after age 36. If Jupiter or Venus aspects the wealth houses, the negative friction is largely neutralized.'
  },
  {
    category: 'Cancellation & Doshas',
    q: 'Does Raj Yoga guarantee a government job or political position?',
    a: 'A Raj Yoga indicates authority, sovereignty, and leadership over others, but does not strictly guarantee government employment. In the modern era, Raj Yoga manifests through corporate executive roles (CEO, VP), entrepreneurial empires, judicial appointments, academic directorships, political office, or creative influence. For specific civil service or government careers, the Sun (Surya - Atmakaraka) and the 10th house (Karma Bhava) must also be strongly connected to the Lagna or 9th house.'
  },
  {
    category: 'Cancellation & Doshas',
    q: 'What is Kemdrum Yoga and how does its cancellation (Kemdrum Bhanga) work?',
    a: 'Kemdrum Yoga occurs when there are no planets (excluding the Sun, Rahu, and Ketu) in both the 2nd and 12th houses from the natal Moon. This leaves the Moon isolated, causing bouts of loneliness, anxiety, or financial unpredictability. However, classical texts like Phaladeepika emphasize Kemdrum Bhanga (cancellation): if ANY planet sits in a Kendra (1st, 4th, 7th, 10th) from the Lagna or Moon, or if Jupiter aspects the Moon, the dosha is completely nullified. When cancelled, the native develops extraordinary self-reliance, intellectual depth, and independent executive capability.'
  },

  // 4. Dhan Yoga vs Raj Yoga & Hindi / Hinglish Queries
  {
    category: 'Wealth vs Royalty & Hindi',
    q: 'Dhan Yoga vs Raj Yoga: what is the difference?',
    a: 'While both are highly auspicious, they serve distinct life dimensions: 1) Raj Yoga involves Kendra (action) and Trikona (fortune) houses (1, 4, 5, 7, 9, 10), elevating your public authority, dignity, title, and societal influence. 2) Dhan Yoga specifically involves the 2nd house (accumulated treasury/liquid wealth) and 11th house (cash flows/profits) connecting with the 1st, 5th, or 9th houses. A person with only Raj Yoga may hold high political or administrative rank with moderate personal wealth. A person with strong Dhan Yoga may run a quiet, ultra-profitable commercial enterprise with vast liquid fortunes.'
  },
  {
    category: 'Wealth vs Royalty & Hindi',
    q: 'Kundli me rajyog kaise dekhe aur kab banta hai? (कुंडली में राजयोग कैसे देखें?)',
    a: 'वैदिक ज्योतिष के अनुसार जब केंद्र भावों (1, 4, 7, 10 - विष्णु स्थान) के स्वामी और त्रिकोण भावों (1, 5, 9 - लक्ष्मी स्थान) के स्वामी आपस में युति, दृष्टि या राशि परिवर्तन करते हैं, तब कुंडली में शुभ राजयोग बनता है। यह राजयोग जातक को समाज में मान-सम्मान, पद-प्रतिष्ठा और नेतृत्व क्षमता प्रदान करता है।'
  },
  {
    category: 'Wealth vs Royalty & Hindi',
    q: 'Kundli me amir banne ke yog kaun se hote hain? (कुंडली में अमीर बनने के योग)',
    a: 'कुंडली में धन योग और महा धन योग व्यक्ति को धनवान बनाते हैं। जब द्वितीय भाव (धन भाव) और एकादश भाव (लाभ भाव) के स्वामियों का संबंध लग्न (प्रथम भाव), पंचम या नवम भाव से बनता है, या चंद्र-मंगल युति होती है, तो व्यक्ति को निरंतर धन लाभ और आर्थिक समृद्धि प्राप्त होती है।'
  }
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    'All',
    'Formation & Rules',
    'Timing & Dasha',
    'Cancellation & Doshas',
    'Wealth vs Royalty & Hindi'
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.q.toLowerCase().includes(q) ||
      item.a.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="max-w-5xl mx-auto px-4 py-16 border-t border-[#E2DCB9] mt-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold font-cinzel text-[#003865] tracking-wide">
          Frequently Asked Questions on Kundli Yog
        </h2>
        <p className="text-xs sm:text-sm text-[#828892] mt-2 font-normal max-w-2xl mx-auto leading-relaxed">
          Authoritative answers to the most searched questions regarding Raj Yogas, Dhan Yogas, combustion, cancellation (Yoga Bhanga), and Vimshottari Dasha timing based on Brihat Parashara Hora Shastra.
        </p>
      </div>

      {/* Search & Category Pills */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#828892] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="faq-search-input"
            type="text"
            placeholder="Search FAQs (e.g. raj yoga, combustion, timing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#E2DCB9] rounded-xl pl-10 pr-4 py-2 text-xs text-[#003865] placeholder-[#828892] focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] transition shadow-xs"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`faq-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#003865] text-white shadow-xs'
                  : 'bg-[#FAF8F2] text-[#003865] hover:bg-[#EFE6C8] border border-[#E2DCB9] shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 bg-[#FAF8F2] rounded-2xl border border-[#E2DCB9] text-[#828892] text-xs">
            No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or filter.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={faq.q}
                id={`faq-item-${idx}`}
                className="bg-white border border-[#E2DCB9] hover:border-[#003865] rounded-xl overflow-hidden transition shadow-xs"
              >
                <button
                  id={`faq-question-btn-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center text-sm sm:text-base font-bold text-[#003865] hover:text-[#002b4d] transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 flex items-center space-x-2">
                    <span className="text-[#FBAF3C] font-serif font-bold text-sm">Q.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#003865] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#2C3138] leading-relaxed font-normal border-t border-[#E2DCB9] pt-3">
                    <p>{faq.a}</p>
                    <div className="mt-3 pt-3 border-t border-[#E2DCB9] flex items-center justify-between text-[11px] text-[#828892]">
                      <span className="font-semibold text-[#003865]">Category: {faq.category}</span>
                      <a
                        href="#calculator"
                        className="text-[#003865] hover:text-[#FBAF3C] font-bold flex items-center space-x-1"
                      >
                        <Compass className="w-3 h-3 text-[#FBAF3C]" />
                        <span>Check In Your Birth Chart</span>
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};
