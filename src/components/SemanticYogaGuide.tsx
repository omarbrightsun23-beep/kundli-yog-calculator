import React, { useState } from 'react';
import { 
  Crown, 
  Coins, 
  AlertTriangle, 
  CheckCircle2, 
  Compass, 
  ArrowRight, 
  Flame, 
  Clock, 
  Languages
} from 'lucide-react';
import { YOGA_ENCYCLOPEDIA, YogaArticle } from '../data/yogaEncyclopedia';

interface SemanticYogaGuideProps {
  onSelectYoga: (article: YogaArticle) => void;
  onScrollToCalculator: () => void;
}

export const SemanticYogaGuide: React.FC<SemanticYogaGuideProps> = ({
  onSelectYoga,
  onScrollToCalculator
}) => {
  const [activeTab, setActiveTab] = useState<'silos' | 'dhan-vs-raj' | 'why-no-results' | 'hindi-guide'>('silos');

  const openYogaBySlug = (slug: string) => {
    const article = YOGA_ENCYCLOPEDIA.find((a) => a.slug === slug);
    if (article) {
      onSelectYoga(article);
    } else {
      onScrollToCalculator();
    }
  };

  return (
    <section id="semantic-guide" className="max-w-6xl mx-auto px-4 py-16 border-t border-[#E2DCB9]">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold font-cinzel text-[#003865] tracking-wide">
          Complete Kundli Yog Architecture &amp; Parashari Principles
        </h2>
        <p className="text-xs sm:text-sm text-[#828892] mt-2 font-normal max-w-2xl mx-auto leading-relaxed">
          Deep-dive analysis of royal Raj Yogas, generational Dhan Yogas, cancellation rules (Yoga Bhanga), and Vimshottari Dasha activation timing.
        </p>
      </div>

      {/* Interactive Topic Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#FAF8F2] p-1.5 rounded-xl border border-[#E2DCB9] flex flex-wrap justify-center gap-1 shadow-xs">
          <button
            id="tab-btn-silos"
            onClick={() => setActiveTab('silos')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
              activeTab === 'silos'
                ? 'bg-[#003865] text-white shadow-xs'
                : 'text-[#003865] hover:text-[#002b4d]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>4 Core Study Pillars</span>
          </button>
          <button
            id="tab-btn-dhan-vs-raj"
            onClick={() => setActiveTab('dhan-vs-raj')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
              activeTab === 'dhan-vs-raj'
                ? 'bg-[#003865] text-white shadow-xs'
                : 'text-[#003865] hover:text-[#002b4d]'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>Dhan Yoga vs. Raj Yoga</span>
          </button>
          <button
            id="tab-btn-why-no-results"
            onClick={() => setActiveTab('why-no-results')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
              activeTab === 'why-no-results'
                ? 'bg-[#003865] text-white shadow-xs'
                : 'text-[#003865] hover:text-[#002b4d]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Why Hasn&apos;t My Yoga Worked Yet?</span>
          </button>
          <button
            id="tab-btn-hindi-guide"
            onClick={() => setActiveTab('hindi-guide')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
              activeTab === 'hindi-guide'
                ? 'bg-[#003865] text-white shadow-xs'
                : 'text-[#003865] hover:text-[#002b4d]'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>हिंदी गाइड (राजयोग कैसे देखें)</span>
          </button>
        </div>
      </div>

      {/* Tab 1: The 4 Programmatic Silos */}
      {activeTab === 'silos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Silo 1: Calculator & Tools */}
          <div className="bg-white border border-[#E2DCB9] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center space-x-2 text-[#003865] text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4 text-[#FBAF3C]" />
                <span>Pillar 1 &bull; Instant Calculators</span>
              </div>
              <h3 className="text-xl font-bold text-[#003865] font-cinzel mb-2">
                Free Kundli Yoga Calculator by Date of Birth
              </h3>
              <p className="text-xs text-[#2C3138] leading-relaxed font-normal mb-4">
                Calculate all royal yogas in your Janam Kundali with zero registration. Built on true Chitrapaksha (Lahiri) Sidereal ephemeris with exact planetary coordinates and house cusps.
              </p>
              <ul className="text-xs text-[#2C3138] space-y-1.5 font-normal mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003865] flex-shrink-0" />
                  <span>Real-time Raj Yoga &amp; Gajakesari Yoga detector</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003865] flex-shrink-0" />
                  <span>North Indian diamond &amp; South Indian box charts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003865] flex-shrink-0" />
                  <span>120-Year Vimshottari Dasha timeline with active period highlights</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onScrollToCalculator}
              className="w-full bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
            >
              <span>Launch Kundli Yoga Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Silo 2: Specific High-Volume Yogas */}
          <div className="bg-white border border-[#E2DCB9] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center space-x-2 text-[#003865] text-xs font-bold uppercase tracking-wider mb-2">
                <Crown className="w-4 h-4 text-[#FBAF3C]" />
                <span>Pillar 2 &bull; Specific Royal Alignments</span>
              </div>
              <h3 className="text-xl font-bold text-[#003865] font-cinzel mb-2">
                Panch Mahapurusha, Gajakesari &amp; Budhaditya
              </h3>
              <p className="text-xs text-[#2C3138] leading-relaxed font-normal mb-4">
                Explore the most celebrated auspicious yogas in classical Jyotish. Each alignment carries distinct formation rules, planetary strengths, and life-changing benefits.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  onClick={() => openYogaBySlug('gajakesari-yoga')}
                  className="bg-[#FAF8F2] hover:bg-[#EFE6C8] text-left p-2.5 rounded-xl border border-[#E2DCB9] transition cursor-pointer"
                >
                  <p className="text-xs font-bold text-[#003865]">Gajakesari Yoga</p>
                  <p className="text-[10px] text-[#828892]">Guru &bull; Chandra Kendra</p>
                </button>
                <button
                  onClick={() => openYogaBySlug('budhaditya-yoga')}
                  className="bg-[#FAF8F2] hover:bg-[#EFE6C8] text-left p-2.5 rounded-xl border border-[#E2DCB9] transition cursor-pointer"
                >
                  <p className="text-xs font-bold text-[#003865]">Budhaditya Yoga</p>
                  <p className="text-[10px] text-[#828892]">Sun &bull; Mercury Union</p>
                </button>
                <button
                  onClick={() => openYogaBySlug('ruchaka-yoga')}
                  className="bg-[#FAF8F2] hover:bg-[#EFE6C8] text-left p-2.5 rounded-xl border border-[#E2DCB9] transition cursor-pointer"
                >
                  <p className="text-xs font-bold text-[#003865]">Ruchaka Yoga</p>
                  <p className="text-[10px] text-[#828892]">Exalted Mars Kendra</p>
                </button>
                <button
                  onClick={() => openYogaBySlug('malavya-yoga')}
                  className="bg-[#FAF8F2] hover:bg-[#EFE6C8] text-left p-2.5 rounded-xl border border-[#E2DCB9] transition cursor-pointer"
                >
                  <p className="text-xs font-bold text-[#003865]">Malavya Yoga</p>
                  <p className="text-[10px] text-[#828892]">Venus in Pisces/Libra</p>
                </button>
              </div>
            </div>
            <button
              onClick={() => openYogaBySlug('raj-yoga')}
              className="text-xs text-[#003865] hover:text-[#002b4d] font-bold flex items-center justify-between border-t border-[#E2DCB9] pt-3 cursor-pointer"
            >
              <span>Read Full Raj Yoga Encyclopedia Guide</span>
              <ArrowRight className="w-4 h-4 text-[#FBAF3C]" />
            </button>
          </div>

          {/* Silo 3: Problem, Cancellation & Yoga Bhanga */}
          <div className="bg-white border border-[#E2DCB9] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center space-x-2 text-[#003865] text-xs font-bold uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-[#FBAF3C]" />
                <span>Pillar 3 &bull; Cancellation &amp; Dosha Transmutation</span>
              </div>
              <h3 className="text-xl font-bold text-[#003865] font-cinzel mb-2">
                Neech Bhanga, Vipreet Raj Yoga &amp; Kemdrum Rules
              </h3>
              <p className="text-xs text-[#2C3138] leading-relaxed font-normal mb-4">
                Weakness or adversity in a birth chart is rarely permanent. Parashari astrology features precise cancellation rules that transmute hardship into sovereign strength.
              </p>
              <div className="space-y-2 mb-6 text-xs text-[#2C3138] font-normal">
                <div className="bg-[#FAF8F2] p-2.5 rounded-xl border border-[#E2DCB9]">
                  <span className="font-bold text-[#003865]">Neech Bhanga Raj Yoga:</span> Debilitated planet cancelled by Kendra placement of its dispositor; early struggle converted into late-life triumph.
                </div>
                <div className="bg-[#FAF8F2] p-2.5 rounded-xl border border-[#E2DCB9]">
                  <span className="font-bold text-[#003865]">Kemdrum Bhanga:</span> Isolated Moon cancelled when planets occupy Kendra from Lagna or Moon, turning loneliness into self-made mastery.
                </div>
              </div>
            </div>
            <button
              onClick={() => openYogaBySlug('neech-bhanga-raj-yoga')}
              className="text-xs text-[#003865] hover:text-[#002b4d] font-bold flex items-center justify-between border-t border-[#E2DCB9] pt-3 cursor-pointer"
            >
              <span>Explore Neech Bhanga Transmutation Rules</span>
              <ArrowRight className="w-4 h-4 text-[#FBAF3C]" />
            </button>
          </div>

          {/* Silo 4: Generational Wealth Combinations */}
          <div className="bg-white border border-[#E2DCB9] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center space-x-2 text-[#003865] text-xs font-bold uppercase tracking-wider mb-2">
                <Coins className="w-4 h-4 text-[#FBAF3C]" />
                <span>Pillar 4 &bull; Wealth &amp; Treasury Yogas</span>
              </div>
              <h3 className="text-xl font-bold text-[#003865] font-cinzel mb-2">
                Maha Dhan Yoga, Lakshmi Yoga &amp; Chandra-Mangal
              </h3>
              <p className="text-xs text-[#2C3138] leading-relaxed font-normal mb-4">
                How planetary alignments produce continuous multi-generational wealth, commercial acumen, real estate expansion, and liquid financial stability.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  onClick={() => openYogaBySlug('dhan-yoga')}
                  className="bg-[#FAF8F2] hover:bg-[#EFE6C8] text-left p-2.5 rounded-xl border border-[#E2DCB9] transition cursor-pointer"
                >
                  <p className="text-xs font-bold text-[#003865]">Maha Dhan Yoga</p>
                  <p className="text-[10px] text-[#828892]">2nd &amp; 11th House Lord Bond</p>
                </button>
                <button
                  onClick={() => openYogaBySlug('lakshmi-yoga')}
                  className="bg-[#FAF8F2] hover:bg-[#EFE6C8] text-left p-2.5 rounded-xl border border-[#E2DCB9] transition cursor-pointer"
                >
                  <p className="text-xs font-bold text-[#003865]">Lakshmi Yoga</p>
                  <p className="text-[10px] text-[#828892]">9th Lord + Venus in Kendra</p>
                </button>
              </div>
            </div>
            <button
              onClick={() => openYogaBySlug('dhan-yoga')}
              className="text-xs text-[#003865] hover:text-[#002b4d] font-bold flex items-center justify-between border-t border-[#E2DCB9] pt-3 cursor-pointer"
            >
              <span>Explore All Wealth &amp; Prosperity Yogas</span>
              <ArrowRight className="w-4 h-4 text-[#FBAF3C]" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Dhan Yoga vs. Raj Yoga */}
      {activeTab === 'dhan-vs-raj' && (
        <div className="bg-white border border-[#E2DCB9] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#003865] text-center mb-4">
              Dhan Yoga vs. Raj Yoga: What is the Real Difference?
            </h3>
            <p className="text-xs sm:text-sm text-[#828892] leading-relaxed font-normal mb-8 text-center">
              While both yogas confer auspicious results, they govern fundamentally different aspects of life: <strong>Raj Yoga</strong> governs authority, dignity, and societal power, whereas <strong>Dhan Yoga</strong> governs cash flow, accumulated treasury, and economic independence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Raj Yoga Pillar */}
              <div className="bg-[#FAF8F2] border-2 border-[#003865] rounded-xl p-5 shadow-xs">
                <div className="flex items-center space-x-2 text-[#003865] font-bold text-sm mb-3">
                  <Crown className="w-4 h-4 text-[#FBAF3C]" />
                  <span>Raj Yoga (Royalty &amp; Authority)</span>
                </div>
                <ul className="text-xs text-[#2C3138] space-y-2.5 font-normal">
                  <li><strong>Houses Involved:</strong> Kendra (1st, 4th, 7th, 10th) + Trikona (1st, 5th, 9th).</li>
                  <li><strong>Core Meaning:</strong> Worldly status, administrative dignity, political office, leadership rank, and public reverence.</li>
                  <li><strong>Life Outcome:</strong> The individual commands respect and influences institutions. They may be an executive, judge, or public servant.</li>
                  <li><strong>Limitation:</strong> Without supporting Dhan Yogas, high prestige can occasionally coexist with modest liquid finances.</li>
                </ul>
              </div>

              {/* Dhan Yoga Pillar */}
              <div className="bg-[#FAF8F2] border-2 border-[#E2DCB9] rounded-xl p-5 shadow-xs">
                <div className="flex items-center space-x-2 text-[#003865] font-bold text-sm mb-3">
                  <Coins className="w-4 h-4 text-[#FBAF3C]" />
                  <span>Dhan Yoga (Treasury &amp; Wealth)</span>
                </div>
                <ul className="text-xs text-[#2C3138] space-y-2.5 font-normal">
                  <li><strong>Houses Involved:</strong> 2nd (Dhana / Liquid Treasury) + 11th (Labha / Profits) linked with 1st, 5th, or 9th.</li>
                  <li><strong>Core Meaning:</strong> Continuous inflow of revenue, multi-generational wealth preservation, investments, and freedom from debt.</li>
                  <li><strong>Life Outcome:</strong> The native commands financial assets, business equity, and luxury conveyances.</li>
                  <li><strong>Distinction:</strong> A quiet commercial entrepreneur can possess massive Dhan Yoga without ever entering public office.</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={onScrollToCalculator}
                className="bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] font-bold py-2.5 px-6 rounded-xl text-xs transition inline-flex items-center space-x-2 shadow-xs cursor-pointer"
              >
                <span>Check Both in Your Birth Chart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Why Hasn't My Yoga Worked Yet? */}
      {activeTab === 'why-no-results' && (
        <div className="bg-white border border-[#E2DCB9] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#003865] text-center mb-4">
              Why Hasn&apos;t My Raj Yog or Dhan Yog Given Results Yet?
            </h3>
            <p className="text-xs sm:text-sm text-[#828892] leading-relaxed font-normal mb-8 text-center">
              If an astrologer told you that you possess a royal combination, yet you face professional bottlenecks or financial stress, four classical Parashari principles explain why:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <div className="flex items-center space-x-2 text-[#003865] font-bold text-xs mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FBAF3C]" />
                  <span>1. Dasha Dormancy</span>
                </div>
                <p className="text-xs text-[#2C3138] leading-relaxed font-normal">
                  Yogas represent potential energy. They require the active Vimshottari Mahadasha or Antardasha of the participating planets to ignite. If you are running an unrelated dusthana dasha, the yoga remains in latent hibernation.
                </p>
              </div>

              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <div className="flex items-center space-x-2 text-[#003865] font-bold text-xs mb-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#FBAF3C]" />
                  <span>2. Planetary Combustion (Asta)</span>
                </div>
                <p className="text-xs text-[#2C3138] leading-relaxed font-normal">
                  If a yoga planet is situated too close to the Sun (typically under 3° to 8°), its rays are overshadowed. While the mental impulse remains, external material fruits may be delayed until the second half of life.
                </p>
              </div>

              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <div className="flex items-center space-x-2 text-[#003865] font-bold text-xs mb-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#FBAF3C]" />
                  <span>3. Dusthana Affliction (6, 8, 12)</span>
                </div>
                <p className="text-xs text-[#2C3138] leading-relaxed font-normal">
                  If one of the yoga lords is seated in the 6th (debts/disputes), 8th (obstacles), or 12th (expenses), the pure auspicious energy leaks into overcoming crises rather than pure advancement.
                </p>
              </div>

              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <div className="flex items-center space-x-2 text-[#003865] font-bold text-xs mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FBAF3C]" />
                  <span>4. Maturation Age of Planets</span>
                </div>
                <p className="text-xs text-[#2C3138] leading-relaxed font-normal">
                  Planets have inherent awakening ages in Vedic astrology (e.g. Mars matures at 28, Mercury at 32, Saturn at 36). Yogas formed by Saturn or Rahu rarely give their crowning glory until after age 36.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={onScrollToCalculator}
                className="bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] font-bold py-2.5 px-6 rounded-xl text-xs transition inline-flex items-center space-x-2 shadow-xs cursor-pointer"
              >
                <span>Check Your Dasha Timeline in the Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Hindi Guide */}
      {activeTab === 'hindi-guide' && (
        <div className="bg-white border border-[#E2DCB9] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#003865] text-center mb-4">
              कुंडली योग गाइड (सरल हिंदी मार्गदर्शिका)
            </h3>
            <p className="text-xs sm:text-sm text-[#828892] leading-relaxed font-normal mb-8 text-center">
              वैदिक ज्योतिष शास्त्र के प्रमुख राजयोग, गजकेसरी योग और धन योगों का शास्त्रीय विवरण।
            </p>
            <div className="space-y-4 mb-8 text-xs text-[#2C3138] leading-relaxed font-normal">
              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <h4 className="text-[#003865] font-bold mb-1">1. राजयोग क्या है और कब बनता है?</h4>
                <p>
                  जब केंद्र भावों (1, 4, 7, 10) के स्वामी और त्रिकोण भावों (1, 5, 9) के स्वामी आपस में मिलते हैं, तो शुभ राजयोग बनता है। यह व्यक्ति को समाज में पद, प्रभाव और उच्च प्रतिष्ठा दिलाता है।
                </p>
              </div>
              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <h4 className="text-[#003865] font-bold mb-1">2. गजकेसरी योग कैसे बनता है?</h4>
                <p>
                  जब चंद्रमा से केंद्र में (1, 4, 7, या 10वें भाव में) देवगुरु बृहस्पति स्थित हों, तब गजकेसरी योग का निर्माण होता है। यह जातक को तीव्र बुद्धि, नैतिक सम्मान और दीर्घायु प्रदान करता है।
                </p>
              </div>
              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <h4 className="text-[#003865] font-bold mb-1">3. धन योग और लक्ष्मी योग क्या हैं?</h4>
                <p>
                  जब कुंडली के 2रे भाव (धन) और 11वें भाव (लाभ) का संबंध 5वें या 9वें भाव (भाग्य) से बनता है, तो व्यक्ति व्यापार और निवेश से निरंतर धन अर्जित करता है।
                </p>
              </div>
              <div className="bg-[#FAF8F2] border border-[#E2DCB9] p-4 rounded-xl shadow-xs">
                <h4 className="text-[#003865] font-bold mb-1">4. राजयोग का फल कब मिलता है?</h4>
                <p>
                  राजयोग बनाने वाले ग्रहों की विंशोत्तरी महादशा या अंतर्दशा आने पर ही योग का वास्तविक फल जातक को जीवन में प्राप्त होता है।
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={onScrollToCalculator}
                className="bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] font-bold py-2.5 px-6 rounded-xl text-xs transition inline-flex items-center space-x-2 shadow-xs cursor-pointer"
              >
                <span>अपनी कुंडली में योग जांचें</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
