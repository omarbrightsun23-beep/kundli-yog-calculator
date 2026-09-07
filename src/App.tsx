import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { BirthForm } from './components/BirthForm';
import { OverviewBanner } from './components/OverviewBanner';
import { YogasGrid } from './components/YogasGrid';
import { KundliChart } from './components/KundliChart';
import { DashaTimeline } from './components/DashaTimeline';
import { PlanetaryTable } from './components/PlanetaryTable';
import { PSEOYogaDirectory } from './components/PSEOYogaDirectory';
import { SemanticYogaGuide } from './components/SemanticYogaGuide';
import { GoogleAd } from './components/GoogleAd';
import { Footer } from './components/Footer';
import { BirthInput, ChartAnalysis, DashaPeriod } from './types/astrology';
import { useTheme } from './context/ThemeContext';
import { YOGA_ENCYCLOPEDIA, YogaArticle } from './data/yogaEncyclopedia';
import { updatePageSEO, DEFAULT_SEO, DOMAIN } from './utils/seo';
import {
  getJulianDay,
  calculatePlanetaryPositions,
  analyzeChart,
  calculateDashaSchedule
} from './utils/astronomy';
import { Compass, BookOpen, Clock, ShieldCheck, Download } from 'lucide-react';

// Lazy-loaded non-critical components to optimize Core Web Vitals and initial bundle payload
const FAQSection = lazy(() => import('./components/FAQSection').then((m) => ({ default: m.FAQSection })));
const SitemapModal = lazy(() => import('./components/SitemapModal').then((m) => ({ default: m.SitemapModal })));
const PrivacyPolicyModal = lazy(() => import('./components/PrivacyPolicyModal').then((m) => ({ default: m.PrivacyPolicyModal })));
const TermsModal = lazy(() => import('./components/TermsModal').then((m) => ({ default: m.TermsModal })));
const DisclaimerModal = lazy(() => import('./components/DisclaimerModal').then((m) => ({ default: m.DisclaimerModal })));
const AboutModal = lazy(() => import('./components/AboutModal').then((m) => ({ default: m.AboutModal })));
const ContactModal = lazy(() => import('./components/ContactModal').then((m) => ({ default: m.ContactModal })));
const ShareModal = lazy(() => import('./components/ShareModal').then((m) => ({ default: m.ShareModal })));
const DownloadReportModal = lazy(() => import('./components/DownloadReportModal').then((m) => ({ default: m.DownloadReportModal })));

export default function App() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [inputState, setInputState] = useState<BirthInput>({
    userName: 'Alex Morgan',
    dob: '1996-07-15',
    tob: '10:45',
    cityValue: '40.7128,-74.0060,-5.0',
    lat: 40.7128,
    lon: -74.0060,
    tz: -5.0,
    chartStyle: 'north'
  });

  const [analysis, setAnalysis] = useState<ChartAnalysis | null>(null);
  const [dashaSchedule, setDashaSchedule] = useState<DashaPeriod[]>([]);
  const [activeTab, setActiveTab] = useState<'yogas' | 'chart' | 'dasha' | 'planets'>('yogas');

  // Active yoga article for deep-link / modal
  const [activeYogaArticle, setActiveYogaArticle] = useState<YogaArticle | null>(null);
  const [isNotFoundRoute, setIsNotFoundRoute] = useState<boolean>(false);

  // Modals state
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
  const [activePolicyModal, setActivePolicyModal] = useState<
    'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact' | 'sitemap' | null
  >(null);

  const resultsRef = useRef<HTMLDivElement | null>(null);

  // Function to execute chart calculation
  const runCalculation = (input: BirthInput, shouldScroll = false) => {
    const [hour, min] = input.tob.split(':').map(Number);
    const birthDateObj = new Date(`${input.dob}T${input.tob}:00Z`);
    const utHours = hour + min / 60.0 - input.tz;

    const jd = getJulianDay(birthDateObj, utHours);
    const planets = calculatePlanetaryPositions(jd, input.lat, input.lon);
    const result = analyzeChart(planets);
    const dasha = calculateDashaSchedule(planets.Moon, birthDateObj);

    setInputState(input);
    setAnalysis(result);
    setDashaSchedule(dasha);

    if (shouldScroll && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Run initial calculation on load
  useEffect(() => {
    runCalculation(inputState, false);
  }, []);

  // Handle URL route inspection on load and history popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;

      if (path.startsWith('/yoga/')) {
        const slug = path.replace('/yoga/', '').replace(/\/$/, '');
        const article = YOGA_ENCYCLOPEDIA.find((a) => a.slug === slug);
        if (article) {
          setIsNotFoundRoute(false);
          setActiveYogaArticle(article);
          updatePageSEO({
            title: `${article.name} in Kundli — Formation, Meaning & Activation | KundliYog`,
            description: `${article.formationRule} ${article.shlokaSummary} Classical source: ${article.classicalSource}.`,
            canonicalUrl: `${DOMAIN}/yoga/${article.slug}`,
            ogType: 'article'
          });
          return;
        } else {
          setIsNotFoundRoute(true);
          setActiveYogaArticle(null);
          setActivePolicyModal(null);
          updatePageSEO({
            title: '404 — Astrological Guide Not Found | KundliYog',
            description: 'The requested Kundli Yog guide does not exist in our classical encyclopedia.',
            noindex: true
          });
          return;
        }
      } else if (path === '/about-us') {
        setIsNotFoundRoute(false);
        setActivePolicyModal('about');
        updatePageSEO({
          title: 'About KundliYog — Classical Vedic Astrology Heritage & Ephemeris',
          description: 'Learn about KundliYog and our dedication to Parashari Jyotish principles, Chitrapaksha Lahiri ephemeris, and 100% client-side privacy.',
          canonicalUrl: `${DOMAIN}/about-us`
        });
        return;
      } else if (path === '/privacy-policy') {
        setIsNotFoundRoute(false);
        setActivePolicyModal('privacy');
        updatePageSEO({
          title: 'Privacy Policy — 100% Client-Side Ephemeris & Zero Storage | KundliYog',
          description: 'Read the KundliYog privacy policy: zero database persistence of user birth details, zero tracking cookies, pure client-side Jyotish calculations.',
          canonicalUrl: `${DOMAIN}/privacy-policy`
        });
        return;
      } else if (path === '/terms-and-conditions') {
        setIsNotFoundRoute(false);
        setActivePolicyModal('terms');
        updatePageSEO({
          title: 'Terms & Conditions — KundliYog Vedic Astrology',
          description: 'Terms and conditions for utilizing KundliYog free Vedic astrology analysis and ephemeris calculators.',
          canonicalUrl: `${DOMAIN}/terms-and-conditions`
        });
        return;
      } else if (path === '/disclaimer') {
        setIsNotFoundRoute(false);
        setActivePolicyModal('disclaimer');
        updatePageSEO({
          title: 'Astrological Guidance Disclaimer — KundliYog',
          description: 'Astrological guidance disclaimer for KundliYog horoscope calculations and yoga evaluations.',
          canonicalUrl: `${DOMAIN}/disclaimer`
        });
        return;
      } else if (path === '/contact-us') {
        setIsNotFoundRoute(false);
        setActivePolicyModal('contact');
        updatePageSEO({
          title: 'Contact Us — KundliYog Astrology Research & Support',
          description: 'Contact the KundliYog research team for classical Jyotish feedback, ephemeris inquiries, and educational collaborations.',
          canonicalUrl: `${DOMAIN}/contact-us`
        });
        return;
      } else if (path === '/sitemap') {
        setIsNotFoundRoute(false);
        setActivePolicyModal('sitemap');
        updatePageSEO({
          title: 'Complete Sitemap — KundliYog Vedic Astrology Directory',
          description: 'Explore the full sitemap of classical yogas, doshas, ephemeris calculations, and Vedic astrology resources on KundliYog.',
          canonicalUrl: `${DOMAIN}/sitemap`
        });
        return;
      }

      if (path === '/' || path === '') {
        // Default home route
        setIsNotFoundRoute(false);
        setActiveYogaArticle(null);
        setActivePolicyModal(null);
        updatePageSEO(DEFAULT_SEO);
        return;
      }

      // Unrecognized route -> set 404 state and noindex
      setIsNotFoundRoute(true);
      setActiveYogaArticle(null);
      setActivePolicyModal(null);
      updatePageSEO({
        title: '404 — Page Not Found | KundliYog',
        description: 'The requested astrological resource could not be found.',
        noindex: true
      });
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToYogaDirectory = () => {
    const el = document.getElementById('yoga-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToYogaSlug = (slug: string) => {
    const article = YOGA_ENCYCLOPEDIA.find((a) => a.slug === slug);
    if (article) {
      setActiveYogaArticle(article);
      window.history.pushState({}, '', `/yoga/${slug}`);
      updatePageSEO({
        title: `${article.name} in Kundli — Formation, Meaning & Activation | KundliYog`,
        description: `${article.formationRule} ${article.shlokaSummary} Classical source: ${article.classicalSource}.`,
        canonicalUrl: `${DOMAIN}/yoga/${article.slug}`,
        ogType: 'article'
      });
    }

    const el = document.getElementById(`encyclopedia-card-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-amber-400');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-amber-400');
      }, 2500);
    } else {
      handleScrollToYogaDirectory();
    }
  };

  const handleCloseYogaArticle = () => {
    setActiveYogaArticle(null);
    if (window.location.pathname.startsWith('/yoga/')) {
      window.history.pushState({}, '', '/');
      updatePageSEO(DEFAULT_SEO);
    }
  };

  const handleOpenPolicyModal = (
    type: 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact' | 'sitemap'
  ) => {
    setIsNotFoundRoute(false);
    setActivePolicyModal(type);
    const pathMap: Record<string, string> = {
      about: '/about-us',
      contact: '/contact-us',
      privacy: '/privacy-policy',
      terms: '/terms-and-conditions',
      disclaimer: '/disclaimer',
      sitemap: '/sitemap'
    };

    const seoMap: Record<string, { title: string; description: string; canonicalUrl: string }> = {
      about: {
        title: 'About KundliYog — Classical Vedic Astrology Heritage & Ephemeris',
        description: 'Learn about KundliYog and our dedication to Parashari Jyotish principles, Chitrapaksha Lahiri ephemeris, and 100% client-side privacy.',
        canonicalUrl: `${DOMAIN}/about-us`
      },
      contact: {
        title: 'Contact Us — KundliYog Astrology Research & Support',
        description: 'Contact the KundliYog research team for classical Jyotish feedback, ephemeris inquiries, and educational collaborations.',
        canonicalUrl: `${DOMAIN}/contact-us`
      },
      privacy: {
        title: 'Privacy Policy — 100% Client-Side Ephemeris & Zero Storage | KundliYog',
        description: 'Read the KundliYog privacy policy: zero database persistence of user birth details, zero tracking cookies, pure client-side Jyotish calculations.',
        canonicalUrl: `${DOMAIN}/privacy-policy`
      },
      terms: {
        title: 'Terms & Conditions — KundliYog Vedic Astrology',
        description: 'Terms and conditions for utilizing KundliYog free Vedic astrology analysis and ephemeris calculators.',
        canonicalUrl: `${DOMAIN}/terms-and-conditions`
      },
      disclaimer: {
        title: 'Astrological Guidance Disclaimer — KundliYog',
        description: 'Astrological guidance disclaimer for KundliYog horoscope calculations and yoga evaluations.',
        canonicalUrl: `${DOMAIN}/disclaimer`
      },
      sitemap: {
        title: 'Complete Sitemap — KundliYog Vedic Astrology Directory',
        description: 'Explore the full sitemap of classical yogas, doshas, ephemeris calculations, and Vedic astrology resources on KundliYog.',
        canonicalUrl: `${DOMAIN}/sitemap`
      }
    };

    const path = pathMap[type];
    if (path) {
      window.history.pushState({}, '', path);
      if (seoMap[type]) {
        updatePageSEO(seoMap[type]);
      }
    }
  };

  const handleClosePolicyModal = () => {
    setActivePolicyModal(null);
    if (
      ['/about-us', '/contact-us', '/privacy-policy', '/terms-and-conditions', '/disclaimer', '/sitemap'].includes(
        window.location.pathname
      )
    ) {
      window.history.pushState({}, '', '/');
      updatePageSEO(DEFAULT_SEO);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F2] text-[#003865] selection:bg-[#EFE6C8] selection:text-[#003865]">
      {/* HEADER */}
      <Header 
        onScrollToCalculator={handleScrollToCalculator} 
        onScrollToYogaDirectory={handleScrollToYogaDirectory}
      />

      <main className="flex-grow">
        {isNotFoundRoute ? (
          <div className="max-w-3xl mx-auto px-4 py-20 sm:py-28 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white border border-[#E2DCB9] flex items-center justify-center text-[#003865] shadow-sm">
              <Compass className="w-8 h-8 text-[#FBAF3C]" />
            </div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DCB9] text-[#003865] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span>HTTP 404 • Resource Not Found</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-[#003865] mb-4 tracking-tight">
              Astrological Guide Not Found
            </h1>
            <p className="text-sm sm:text-base text-[#828892] max-w-lg mx-auto mb-8 leading-relaxed font-normal">
              The requested Kundli Yog guide or page could not be located in our Parashari encyclopedia. You can calculate your birth chart or explore all classical yogas in the directory below.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => {
                  window.history.pushState({}, '', '/');
                  setIsNotFoundRoute(false);
                  updatePageSEO(DEFAULT_SEO);
                  setTimeout(() => handleScrollToCalculator(), 100);
                }}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] transition shadow-xs cursor-pointer flex items-center space-x-2"
              >
                <Compass className="w-4 h-4" />
                <span>Go to Kundli Yog Calculator</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  window.history.pushState({}, '', '/sitemap');
                  setIsNotFoundRoute(false);
                  handleOpenPolicyModal('sitemap');
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-[#FAF8F2] text-[#003865] border border-[#E2DCB9] transition shadow-xs cursor-pointer flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Full Sitemap</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* HERO SECTION */}
            <section className="relative pt-12 pb-8 overflow-hidden">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[280px] rounded-full blur-3xl bg-[#FBAF3C]/15"></div>
                <div className="absolute top-10 right-1/4 translate-x-1/2 w-[550px] h-[280px] rounded-full blur-3xl bg-[#003865]/10"></div>
                <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl bg-[#E2DCB9]/30"></div>
              </div>

              <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight mb-3 leading-tight text-[#003865]">
                  <span className="text-[#FBAF3C]">Kundli Yog</span> Calculator &amp; Free Vedic Chart Analyzer
                </h1>

                <p className="text-base sm:text-lg font-cinzel font-semibold text-[#003865] mb-3">
                  Discover Every Auspicious Kundli Yog in Your Vedic Birth Chart
                </p>

                <p className="text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal leading-relaxed text-[#828892]">
                  Classical Vedic Astrology (Jyotish) reveals your destiny blueprint through planetary alignments. Calculate which powerful <strong className="text-[#003865] font-semibold">Kundli Yog</strong> combinations — including Raj Yog, Dhan Yog, and Panch Mahapurusha — are formed in your horoscope using Chitrapaksha Lahiri sidereal ephemeris.
                </p>

                {/* BIRTH FORM */}
                <BirthForm
                  initialValues={inputState}
                  onSubmit={(val) => runCalculation(val, true)}
                />
              </div>
            </section>

        {/* GOOGLE ADSENSE PLACEMENT 1: BELOW CALCULATOR */}
        <GoogleAd
          placementId="ad-below-calculator"
          slot="8291047201"
          className="my-4 sm:my-6"
        />

        {/* HOW IT WORKS / EDUCATIONAL SECTION */}
        <section id="how-it-works" className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Warm Amber Gold */}
            <div className="bg-white border border-[#E2DCB9] hover:border-[#003865] rounded-2xl p-5 text-left shadow-xs transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9] flex items-center justify-center text-[#FBAF3C] mb-3 shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#003865] font-cinzel mb-1">Lahiri Sidereal Precision</h3>
              <p className="text-xs text-[#2C3138] leading-relaxed font-normal">
                Calculates Julian Day and exact Chitrapaksha Ayanamsa to locate planetary constellations and the true Ascendant (Lagna).
              </p>
            </div>

            {/* Card 2: Deep Harbor Navy */}
            <div className="bg-white border border-[#E2DCB9] hover:border-[#003865] rounded-2xl p-5 text-left shadow-xs transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9] flex items-center justify-center text-[#003865] mb-3 shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#003865] font-cinzel mb-1">Parashari Scriptural Principles</h3>
              <p className="text-xs text-[#2C3138] leading-relaxed font-normal">
                Cross-references Kendra-Trikona lordships, mutual aspects, dispositor alignments, and cancellation rules (Neech Bhanga).
              </p>
            </div>

            {/* Card 3: Amber & Navy */}
            <div className="bg-white border border-[#E2DCB9] hover:border-[#003865] rounded-2xl p-5 text-left shadow-xs transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9] flex items-center justify-center text-[#FBAF3C] mb-3 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#003865] font-cinzel mb-1">Dasha Activation Timeline</h3>
              <p className="text-xs text-[#2C3138] leading-relaxed font-normal">
                Computes the 120-year Vimshottari cycle from Moon’s exact nakshatra to reveal which yogas are currently triggered in your life.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        {analysis && (
          <section ref={resultsRef} id="results-section" className="max-w-6xl mx-auto px-4 py-8">
            {/* OVERVIEW HIGHLIGHT BANNER WITH DOWNLOAD KUNDLI BUTTON */}
            <OverviewBanner
              userName={inputState.userName}
              analysis={analysis}
              onOpenShareModal={() => setIsShareModalOpen(true)}
              onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
            />

            {/* TAB NAVIGATION */}
            <div className="flex border-b border-[#E2DCB9] mb-6 space-x-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                id="tab-btn-yogas"
                onClick={() => setActiveTab('yogas')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  activeTab === 'yogas'
                    ? 'border-[#003865] text-[#003865] bg-white rounded-t-lg shadow-xs'
                    : 'border-transparent text-[#828892] hover:text-[#003865]'
                }`}
              >
                👑 Detected Kundli Yogas ({analysis.yogas.length})
              </button>
              <button
                id="tab-btn-chart"
                onClick={() => setActiveTab('chart')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  activeTab === 'chart'
                    ? 'border-[#003865] text-[#003865] bg-white rounded-t-lg shadow-xs'
                    : 'border-transparent text-[#828892] hover:text-[#003865]'
                }`}
              >
                📜 Kundli Visual Chart
              </button>
              <button
                id="tab-btn-dasha"
                onClick={() => setActiveTab('dasha')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  activeTab === 'dasha'
                    ? 'border-[#003865] text-[#003865] bg-white rounded-t-lg shadow-xs'
                    : 'border-transparent text-[#828892] hover:text-[#003865]'
                }`}
              >
                ⏳ Dasha Activation Timeline
              </button>
              <button
                id="tab-btn-planets"
                onClick={() => setActiveTab('planets')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  activeTab === 'planets'
                    ? 'border-[#003865] text-[#003865] bg-white rounded-t-lg shadow-xs'
                    : 'border-transparent text-[#828892] hover:text-[#003865]'
                }`}
              >
                🪐 Planetary Coordinates
              </button>
            </div>

            {/* TAB CONTENTS */}
            <div className="transition-all duration-300">
              {activeTab === 'yogas' && (
                <YogasGrid
                  userName={inputState.userName}
                  chartScore={analysis.chartScore}
                  yogas={analysis.yogas}
                  onOpenShareModal={() => setIsShareModalOpen(true)}
                  onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
                />
              )}

              {activeTab === 'chart' && (
                <div id="chart-section">
                  <KundliChart
                    lagnaSign={analysis.lagnaSign}
                    planetData={analysis.planetData}
                    initialStyle={inputState.chartStyle}
                  />
                </div>
              )}

              {activeTab === 'dasha' && (
                <div id="dasha-section">
                  <DashaTimeline
                    dashaSchedule={dashaSchedule}
                    moonNakshatra={analysis.nakshatraName}
                    pada={analysis.nakshatraPada}
                  />
                </div>
              )}

              {activeTab === 'planets' && (
                <PlanetaryTable planetData={analysis.planetData} />
              )}
            </div>

            {/* QUICK ACTION BAR AT BOTTOM OF RESULTS */}
            <div className="mt-10 p-5 rounded-2xl bg-white border border-[#E2DCB9] flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center space-x-2 text-xs text-[#828892]">
                <ShieldCheck className="w-4 h-4 text-[#FBAF3C]" />
                <span>Complete Vedic horoscope and yoga report calculated for <strong className="text-[#003865]">{inputState.userName}</strong></span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  id="results-bottom-download-btn"
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Kundli Report</span>
                </button>
                <button
                  id="results-bottom-story-btn"
                  onClick={() => setIsShareModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#FAF8F2] hover:bg-[#EFE6C8] text-[#003865] text-xs font-bold transition border border-[#E2DCB9] cursor-pointer shadow-xs"
                >
                  Story Card
                </button>
              </div>
            </div>
          </section>
        )}

        {/* pSEO CLASSICAL YOGAS DIRECTORY & ENCYCLOPEDIA */}
        <PSEOYogaDirectory
          onSelectYogaForTesting={(yogaName) => handleScrollToCalculator()}
          onScrollToCalculator={handleScrollToCalculator}
          activeArticle={activeYogaArticle}
          onSelectArticle={(art) => {
            if (art) handleNavigateToYogaSlug(art.slug);
            else handleCloseYogaArticle();
          }}
        />

        {/* SEMANTIC YOGA KNOWLEDGE ARCHITECTURE & PROGRAMMATIC SILOS */}
        <SemanticYogaGuide
          onSelectYoga={(art) => handleNavigateToYogaSlug(art.slug)}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* PROGRAMMATIC FAQ SECTION (Lazy-Loaded with low-profile skeleton) */}
        <Suspense
          fallback={
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
              <div className="h-6 w-48 bg-slate-200 rounded-md mx-auto mb-4 animate-pulse" />
              <div className="h-4 w-72 bg-slate-100 rounded-md mx-auto mb-8 animate-pulse" />
              <div className="space-y-3">
                <div className="h-14 bg-white border border-[#E2DCB9] rounded-xl animate-pulse" />
                <div className="h-14 bg-white border border-[#E2DCB9] rounded-xl animate-pulse" />
                <div className="h-14 bg-white border border-[#E2DCB9] rounded-xl animate-pulse" />
              </div>
            </section>
          }
        >
          <FAQSection />
        </Suspense>

        {/* GOOGLE ADSENSE PLACEMENT 2: JUST BEFORE FOOTER */}
        <GoogleAd
          placementId="ad-before-footer"
          slot="4920185739"
          className="my-8 sm:my-10"
        />
          </>
        )}
      </main>

      {/* LAZY-LOADED OVERLAYS & MODALS (Loaded on-demand only when triggered) */}
      <Suspense fallback={null}>
        {analysis && isShareModalOpen && (
          <ShareModal
            isOpen={isShareModalOpen}
            onClose={() => setIsShareModalOpen(false)}
            userName={inputState.userName}
            analysis={analysis}
          />
        )}

        {analysis && isDownloadModalOpen && (
          <DownloadReportModal
            isOpen={isDownloadModalOpen}
            onClose={() => setIsDownloadModalOpen(false)}
            input={inputState}
            analysis={analysis}
            dashaSchedule={dashaSchedule}
          />
        )}

        {activePolicyModal === 'privacy' && (
          <PrivacyPolicyModal
            isOpen={true}
            onClose={handleClosePolicyModal}
          />
        )}

        {activePolicyModal === 'terms' && (
          <TermsModal
            isOpen={true}
            onClose={handleClosePolicyModal}
          />
        )}

        {activePolicyModal === 'disclaimer' && (
          <DisclaimerModal
            isOpen={true}
            onClose={handleClosePolicyModal}
          />
        )}

        {activePolicyModal === 'about' && (
          <AboutModal
            isOpen={true}
            onClose={handleClosePolicyModal}
          />
        )}

        {activePolicyModal === 'contact' && (
          <ContactModal
            isOpen={true}
            onClose={handleClosePolicyModal}
          />
        )}

        {activePolicyModal === 'sitemap' && (
          <SitemapModal
            isOpen={true}
            onClose={handleClosePolicyModal}
            onNavigateToYoga={handleNavigateToYogaSlug}
            onScrollToCalculator={handleScrollToCalculator}
            onOpenPolicy={handleOpenPolicyModal}
          />
        )}
      </Suspense>

      {/* FOOTER */}
      <Footer
        onOpenPolicy={handleOpenPolicyModal}
        onScrollToCalculator={handleScrollToCalculator}
        onScrollToYogaDirectory={handleScrollToYogaDirectory}
        onNavigateToYoga={handleNavigateToYogaSlug}
      />
    </div>
  );
}
