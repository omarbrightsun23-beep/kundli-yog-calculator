import React from 'react';
import { X, Network, ExternalLink, BookOpen, Calculator, ShieldCheck } from 'lucide-react';
import { YOGA_ENCYCLOPEDIA } from '../data/yogaEncyclopedia';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToYoga: (slug: string) => void;
  onScrollToCalculator: () => void;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact') => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  onNavigateToYoga,
  onScrollToCalculator,
  onOpenPolicy
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="sitemap-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-3xl w-full p-6 sm:p-8 text-left shadow-2xl relative my-8 max-h-[85vh] overflow-y-auto">
        <button
          id="close-sitemap-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs text-[#003865] font-bold mb-1">
          <Network className="w-4 h-4 text-[#FBAF3C]" />
          <span>HTML &amp; Semantic Sitemap</span>
        </div>

        <h3 className="text-2xl font-bold text-[#003865] font-cinzel mb-2">
          KundliYog Complete Sitemap
        </h3>
        <p className="text-xs text-[#828892] mb-6 font-normal">
          Crawlable directory of tools, programmatic yoga articles, and legal documents for visitors and search indexing bots.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs">
          {/* Column 1: Core Calculators & Features */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#003865] uppercase tracking-wider text-[11px] border-b border-[#E2DCB9] pb-1.5 flex items-center space-x-1.5">
              <Calculator className="w-3.5 h-3.5 text-[#FBAF3C]" />
              <span>Core Application</span>
            </h4>
            <ul className="space-y-2 text-[#2C3138] font-normal">
              <li>
                <a
                  id="sitemap-calc-link"
                  href="#calculator"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onScrollToCalculator();
                  }}
                  className="hover:text-[#003865] transition cursor-pointer block"
                >
                  Kundli Yog Calculator (Lahiri Ephemeris)
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={onClose} className="hover:text-[#003865] transition block">
                  How Classical Jyotish Math Works
                </a>
              </li>
              <li>
                <a href="#chart-section" onClick={onClose} className="hover:text-[#003865] transition block">
                  North &amp; South Indian Kundli Charts
                </a>
              </li>
              <li>
                <a href="#dasha-section" onClick={onClose} className="hover:text-[#003865] transition block">
                  Vimshottari Dasha 120-Year Timeline
                </a>
              </li>
              <li>
                <a href="#faq" onClick={onClose} className="hover:text-[#003865] transition block">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Classical Yoga Encyclopedia (pSEO) */}
          <div className="space-y-3 sm:col-span-1 md:col-span-1">
            <h4 className="font-bold text-[#003865] uppercase tracking-wider text-[11px] border-b border-[#E2DCB9] pb-1.5 flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#003865]" />
              <span>Yoga Encyclopedia</span>
            </h4>
            <ul className="space-y-1.5 text-[#2C3138] font-normal max-h-56 overflow-y-auto pr-1">
              {YOGA_ENCYCLOPEDIA.map((item) => (
                <li key={item.slug}>
                  <a
                    id={`sitemap-yoga-${item.slug}`}
                    href={`/yoga/${item.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      onNavigateToYoga(item.slug);
                    }}
                    className="hover:text-[#003865] transition cursor-pointer truncate block w-full"
                  >
                    {item.name} ({item.category})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#003865] uppercase tracking-wider text-[11px] border-b border-[#E2DCB9] pb-1.5 flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FBAF3C]" />
              <span>Legal &amp; Company</span>
            </h4>
            <ul className="space-y-2 text-[#2C3138] font-normal">
              <li>
                <a
                  id="sitemap-about-link"
                  href="/about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenPolicy('about');
                  }}
                  className="hover:text-[#003865] transition cursor-pointer block"
                >
                  About KundliYog &amp; Heritage
                </a>
              </li>
              <li>
                <a
                  id="sitemap-contact-link"
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenPolicy('contact');
                  }}
                  className="hover:text-[#003865] transition cursor-pointer block"
                >
                  Contact Us &amp; Research Support
                </a>
              </li>
              <li>
                <a
                  id="sitemap-privacy-link"
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenPolicy('privacy');
                  }}
                  className="hover:text-[#003865] transition cursor-pointer block"
                >
                  Privacy Policy (Zero Data Retention)
                </a>
              </li>
              <li>
                <a
                  id="sitemap-terms-link"
                  href="/terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenPolicy('terms');
                  }}
                  className="hover:text-[#003865] transition cursor-pointer block"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  id="sitemap-disclaimer-link"
                  href="/disclaimer"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenPolicy('disclaimer');
                  }}
                  className="hover:text-[#003865] transition cursor-pointer block"
                >
                  Astrological Guidance Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003865] hover:underline font-medium flex items-center space-x-1 pt-1"
                >
                  <span>Raw XML Sitemap</span>
                  <ExternalLink className="w-3 h-3 text-[#FBAF3C]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E2DCB9] flex items-center justify-between text-xs text-[#828892]">
          <span>XML Sitemap is registered at <strong className="text-[#003865]">/sitemap.xml</strong> with full Google Search Console compliance.</span>
          <button
            id="sitemap-done-btn"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#003865] hover:bg-[#002b4d] text-white font-bold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
