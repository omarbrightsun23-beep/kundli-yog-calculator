import React, { useState } from 'react';
import { Search, BookOpen, Compass, ArrowRight, ShieldAlert, CheckCircle2, Star, User } from 'lucide-react';
import { YOGA_ENCYCLOPEDIA, YogaArticle } from '../data/yogaEncyclopedia';
import { FORMATION_IMAGE_ALT, formationImageSrc } from '../data/formationImages';

interface PSEOYogaDirectoryProps {
  onSelectYogaForTesting: (yogaName: string) => void;
  onScrollToCalculator: () => void;
  activeArticle?: YogaArticle | null;
  onSelectArticle?: (article: YogaArticle | null) => void;
}

export const PSEOYogaDirectory: React.FC<PSEOYogaDirectoryProps> = ({
  onSelectYogaForTesting,
  onScrollToCalculator,
  activeArticle: controlledArticle,
  onSelectArticle
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [localArticle, setLocalArticle] = useState<YogaArticle | null>(null);

  const activeArticle = controlledArticle !== undefined ? controlledArticle : localArticle;

  const handleOpenArticle = (article: YogaArticle) => {
    if (onSelectArticle) {
      onSelectArticle(article);
    } else {
      setLocalArticle(article);
    }
  };

  const handleCloseArticle = () => {
    if (onSelectArticle) {
      onSelectArticle(null);
    } else {
      setLocalArticle(null);
    }
  };

  const categories = ['All', 'Raj Yoga', 'Panch Mahapurusha', 'Dhan Yoga', 'Intellect', 'Protective', 'Dosha'];

  const filteredArticles = YOGA_ENCYCLOPEDIA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.sanskritName.includes(q) ||
      item.planetsInvolved.some((p) => p.toLowerCase().includes(q)) ||
      item.effects.some((e) => e.toLowerCase().includes(q)) ||
      item.searchIntentKeywords.some((k) => k.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="yoga-directory" className="max-w-6xl mx-auto px-4 py-16 border-t border-[#E2DCB9]">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold font-cinzel text-[#003865] tracking-wide">
          Classical Kundli Yog Encyclopedia &amp; Guide
        </h2>
        <p className="text-xs sm:text-sm text-[#828892] mt-2 font-normal max-w-2xl mx-auto leading-relaxed">
          Comprehensive Parashari scriptural reference. Explore how royal Raj Yog, Mahapurusha alignments, and generational Dhan Yog combinations are formed, cancelled, and activated.
        </p>
      </div>

      {/* Zodiac sign wheel — start of the encyclopedia section, before the yoga guides list */}
      <figure className="mb-10 text-center">
        <img
          src="/images/zodiac-signs-wheel-vedic-astrology.webp"
          alt="Zodiac sign wheel (Rashi Chakra) of Vedic astrology showing the 12 signs from Aries to Pisces with their sign numbers 1 to 12"
          width={1200}
          height={1200}
          loading="lazy"
          decoding="async"
          className="w-full max-w-md mx-auto rounded-2xl border border-[#E2DCB9] shadow-xs"
        />
      </figure>

      {/* Search and Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#828892] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="yoga-search-input"
            type="text"
            placeholder="Search yoga by name, planet, or benefit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#E2DCB9] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#003865] placeholder-[#828892] focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] transition shadow-xs"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`p-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#003865] text-white shadow-xs'
                  : 'bg-[#FAF8F2] text-[#003865] hover:bg-[#EFE6C8] border border-[#E2DCB9] shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Encyclopedia Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArticles.map((article) => (
          <article
            key={article.slug}
            id={`encyclopedia-card-${article.slug}`}
            className="bg-white border border-[#E2DCB9] hover:border-[#003865] rounded-2xl p-5 transition flex flex-col justify-between shadow-xs hover:shadow-md group"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F2] text-[#003865] border border-[#E2DCB9]">
                  {article.category}
                </span>
                <span className="text-[11px] text-[#828892] font-serif">{article.sanskritName}</span>
              </div>

              <h3 className="text-lg font-bold text-[#003865] font-cinzel mt-1 group-hover:text-[#002b4d] transition">
                {article.name}
              </h3>

              <p className="text-xs text-[#2C3138] leading-relaxed font-normal mt-2 line-clamp-3">
                {article.formationRule}
              </p>

              <div className="mt-3 pt-3 border-t border-[#E2DCB9] text-[11px] text-[#828892] space-y-1">
                <div>
                  <strong className="text-[#003865]">Planets:</strong> {article.planetsInvolved.join(', ')}
                </div>
                <div>
                  <strong className="text-[#003865]">Source:</strong> {article.classicalSource}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E2DCB9] flex items-center justify-between">
              <a
                id={`read-article-${article.slug}`}
                href={`/yoga/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenArticle(article);
                }}
                className="text-xs font-bold text-[#003865] hover:text-[#002b4d] flex items-center space-x-1 cursor-pointer"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FBAF3C]" />
              </a>
              <button
                id={`check-yoga-btn-${article.slug}`}
                onClick={onScrollToCalculator}
                className="text-[11px] text-[#003865] hover:text-[#002b4d] font-semibold transition cursor-pointer"
              >
                Check in Kundli
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Deep-Dive Article Modal */}
      {activeArticle && (
        <div 
          id="yoga-article-modal" 
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              id="close-article-modal-btn"
              onClick={handleCloseArticle}
              className="absolute top-5 right-5 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center space-x-2 text-xs text-[#003865] font-bold mb-1">
              <span>{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.classicalSource}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#003865] font-cinzel">
              {activeArticle.name}
            </h3>
            <div className="text-sm text-[#828892] font-serif font-semibold mt-0.5 mb-4">
              {activeArticle.sanskritName}
            </div>

            {/* Shloka summary quote */}
            <div className="p-4 rounded-xl bg-[#FAF8F2] border-l-4 border-[#FBAF3C] mb-5 text-xs text-[#2C3138] italic">
              &ldquo;{activeArticle.shlokaSummary}&rdquo;
            </div>

            {/* Formation Rules */}
            <div className="space-y-4 text-xs sm:text-sm text-[#2C3138]">
              <div>
                <h4 className="font-bold text-[#003865] uppercase text-xs tracking-wider mb-1 flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#FBAF3C]" />
                  <span>Classical Formation Rule</span>
                </h4>
                <p className="font-normal leading-relaxed">{activeArticle.formationRule}</p>
              </div>

              {/* Formation chart image — end of the Formation Rule section */}
              {FORMATION_IMAGE_ALT[activeArticle.slug] && (
                <figure className="text-center">
                  <img
                    src={formationImageSrc(activeArticle.slug)}
                    alt={FORMATION_IMAGE_ALT[activeArticle.slug]}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="w-full max-w-md mx-auto rounded-xl border border-[#E2DCB9]"
                  />
                  <figcaption className="text-[11px] text-[#828892] mt-1.5">
                    {FORMATION_IMAGE_ALT[activeArticle.slug]}
                  </figcaption>
                </figure>
              )}

              <div>
                <h4 className="font-bold text-[#003865] uppercase text-xs tracking-wider mb-2 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FBAF3C]" />
                  <span>Key Positive Manifestations</span>
                </h4>
                <ul className="space-y-1.5 font-normal list-disc pl-5 text-[#2C3138]">
                  {activeArticle.effects.map((eff, i) => (
                    <li key={i}>{eff}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#003865] uppercase text-xs tracking-wider mb-2 flex items-center space-x-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#003865]" />
                  <span>Cancellation &amp; Weakening Criteria</span>
                </h4>
                <ul className="space-y-1.5 font-normal list-disc pl-5 text-[#828892]">
                  {activeArticle.invalidationConditions.map((cond, i) => (
                    <li key={i}>{cond}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#003865] uppercase text-xs tracking-wider mb-1">
                  Vimshottari Dasha Activation
                </h4>
                <p className="font-medium text-[#003865]">{activeArticle.dashaActivation}</p>
              </div>

              {/* Astronomical & Combustion Nuance */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9]">
                <h4 className="font-bold text-[#003865] uppercase text-[11px] tracking-wider mb-1 flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#FBAF3C]" />
                  <span>Astronomical &amp; Parashari Nuance</span>
                </h4>
                <p className="text-xs text-[#2C3138] font-normal leading-relaxed">
                  {activeArticle.slug === 'gajakesari-yoga' && (
                    <>Jupiter and Moon form Kendra angles (0°, 90°, or 180° angular separation). Full results materialize when Moon has Paksha Bala (Waxing/Shukla Paksha) and Jupiter is unafflicted by Rahu/Ketu.</>
                  )}
                  {activeArticle.slug === 'budhaditya-yoga' && (
                    <>Combustion nuance: Mercury within 3° of the Sun enters deep combustion (Asta), causing restless speech. When Mercury sits between 3° and 12° from the Sun, it absorbs the solar brilliance to confer razor-sharp analytical genius.</>
                  )}
                  {activeArticle.slug === 'neech-bhanga-raj-yoga' && (
                    <>Cancellation rule: Debility is not permanent. If the debilitated planet&apos;s sign lord or exaltation lord is in a Kendra from Lagna or Moon, initial struggles convert into late-life sovereign victory.</>
                  )}
                  {activeArticle.slug === 'kemdrum-yoga' && (
                    <>Cancellation rule: If ANY planet occupies a Kendra from Lagna or Moon, or Jupiter casts drishti on Moon, Kemdrum Bhanga occurs, converting loneliness into exceptional self-reliance.</>
                  )}
                  {activeArticle.slug === 'raj-yoga' && (
                    <>Parashari rule: Formed by lords of Kendra (1, 4, 7, 10 - Vishnu) and Trikona (1, 5, 9 - Lakshmi). Without supporting 2nd/11th house Dhan Yogas, high prestige can exist with modest liquid reserves.</>
                  )}
                  {activeArticle.slug === 'dhan-yoga' && (
                    <>Wealth mechanics: Bridges the 2nd house of accumulated treasury and 11th house of ongoing cash flows with 1st, 5th, or 9th trines for perpetual economic prosperity.</>
                  )}
                  {!['gajakesari-yoga', 'budhaditya-yoga', 'neech-bhanga-raj-yoga', 'kemdrum-yoga', 'raj-yoga', 'dhan-yoga'].includes(activeArticle.slug) && (
                    <>Requires verification of planet Shadbala (astronomical strength ratio &gt; 1.0) and uncombust planetary degrees in the Chitrapaksha (Lahiri) Nirayana chakra.</>
                  )}
                </p>
              </div>

              {activeArticle.celebrityExamples.length > 0 && (
                <div className="pt-2">
                  <h4 className="font-bold text-[#003865] uppercase text-xs tracking-wider mb-1 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-[#003865]" />
                    <span>Historical &amp; Celebrity Alignment</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {activeArticle.celebrityExamples.map((celeb, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF8F2] border border-[#E2DCB9] text-[#003865] text-xs font-semibold"
                      >
                        {celeb}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related search intent keywords */}
              {activeArticle.searchIntentKeywords && activeArticle.searchIntentKeywords.length > 0 && (
                <div className="pt-2">
                  <h4 className="font-bold text-[#828892] uppercase text-[10px] tracking-wider mb-1.5">
                    Related Searches &amp; Core Inquiries
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeArticle.searchIntentKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F2] border border-[#E2DCB9] text-[11px] text-[#2C3138]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-4 border-t border-[#E2DCB9] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#828892]">
                Want to check if you have {activeArticle.name}?
              </span>
              <button
                id="modal-test-chart-btn"
                onClick={() => {
                  handleCloseArticle();
                  onScrollToCalculator();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <span>Calculate in My Kundli</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#003865]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
