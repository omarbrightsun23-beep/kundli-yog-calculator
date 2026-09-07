import React from 'react';
import { Compass, ShieldCheck, Heart, Network, Mail, FileText, HelpCircle, BookOpen } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact' | 'sitemap') => void;
  onScrollToCalculator: () => void;
  onScrollToYogaDirectory: () => void;
  onNavigateToYoga?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onScrollToCalculator,
  onScrollToYogaDirectory,
  onNavigateToYoga
}) => {
  return (
    <footer id="app-footer" className="bg-[#003865] text-[#EFE6C8] pt-14 pb-12 border-t border-[#002b4d] mt-auto text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#002b4d]/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo 
              variant="full" 
              size="md" 
              onClick={onScrollToCalculator} 
              className="hover:opacity-90 transition cursor-pointer"
              inverted={true}
            />

            <p className="text-xs text-[#EFE6C8]/80 font-normal leading-relaxed max-w-sm">
              Classical Vedic Astrology &amp; Ephemeris Research. Formulated with astronomical Chitrapaksha (Lahiri) Sidereal ephemeris, Parashari Kendra-Trikona lordships, and 120-year Vimshottari Dasha timing.
            </p>

            <div className="flex items-center space-x-2 text-[11px] text-[#EFE6C8] bg-[#002b4d] px-3 py-1.5 rounded-lg border border-[#002b4d] inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-[#FBAF3C]" />
              <span>100% Client-Side Privacy • Zero Personal Data Stored</span>
            </div>
          </div>

          {/* Column 1: Core Calculators */}
          <div className="space-y-3">
            <h4 className="text-white font-cinzel font-bold text-xs uppercase tracking-wider">
              Astrological Tools
            </h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a
                  id="footer-nav-calculator"
                  href="#calculator"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToCalculator();
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Kundli Yog Calculator
                </a>
              </li>
              <li>
                <a
                  id="footer-nav-directory"
                  href="#yoga-directory"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToYogaDirectory();
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Classical Yogas Directory
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#EFE6C8] hover:text-[#FBAF3C] transition block">
                  How Ephemeris Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#EFE6C8] hover:text-[#FBAF3C] transition block">
                  Vedic Astrology FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Classical Combinations */}
          <div className="space-y-3">
            <h4 className="text-white font-cinzel font-bold text-xs uppercase tracking-wider">
              Classical Yogas
            </h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a
                  id="footer-yoga-gajakesari"
                  href="/yoga/gajakesari-yoga"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToYoga) onNavigateToYoga('gajakesari-yoga');
                    else onScrollToYogaDirectory();
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Gajakesari Yoga (Guru-Chandra)
                </a>
              </li>
              <li>
                <a
                  id="footer-yoga-budhaditya"
                  href="/yoga/budhaditya-yoga"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToYoga) onNavigateToYoga('budhaditya-yoga');
                    else onScrollToYogaDirectory();
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Budhaditya Yoga (Surya-Budha)
                </a>
              </li>
              <li>
                <a
                  id="footer-yoga-mahapurusha"
                  href="/yoga/ruchaka-yoga"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToYoga) onNavigateToYoga('ruchaka-yoga');
                    else onScrollToYogaDirectory();
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Panch Mahapurusha Yogas
                </a>
              </li>
              <li>
                <a
                  id="footer-yoga-dhan"
                  href="/yoga/maha-dhan-yoga"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToYoga) onNavigateToYoga('maha-dhan-yoga');
                    else onScrollToYogaDirectory();
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Maha Dhan &amp; Lakshmi Yogas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal, Policy & Sitemap */}
          <div className="space-y-3">
            <h4 className="text-white font-cinzel font-bold text-xs uppercase tracking-wider">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a
                  id="footer-about-btn"
                  href="/about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPolicy('about');
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  About Us &amp; Heritage
                </a>
              </li>
              <li>
                <a
                  id="footer-contact-btn"
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPolicy('contact');
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  id="footer-privacy-btn"
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPolicy('privacy');
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  id="footer-terms-btn"
                  href="/terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPolicy('terms');
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  id="footer-disclaimer-btn"
                  href="/disclaimer"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPolicy('disclaimer');
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer block"
                >
                  Astrological Disclaimer
                </a>
              </li>
              <li>
                <a
                  id="footer-sitemap-btn"
                  href="/sitemap"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPolicy('sitemap');
                  }}
                  className="text-[#EFE6C8] hover:text-[#FBAF3C] transition cursor-pointer flex items-center space-x-1"
                >
                  <span>Sitemap</span>
                  <Network className="w-3 h-3 text-[#FBAF3C]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-[11px] text-[#EFE6C8]/80 font-medium">
          <p>
            © {new Date().getFullYear()} KundliYog. Built for Vedic astrology scholars, students, and astrological research worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
