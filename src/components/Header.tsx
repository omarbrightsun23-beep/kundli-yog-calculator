import React from 'react';
import { Compass } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onScrollToCalculator: () => void;
  onScrollToYogaDirectory: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToCalculator, onScrollToYogaDirectory }) => {
  return (
    <header className="w-full">
      {/* Main Nav Header */}
      <nav 
        id="main-navigation" 
        className="border-b border-[#E2DCB9] bg-white sticky top-0 z-40 transition-colors shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <BrandLogo 
            variant="full" 
            size="md" 
            onClick={onScrollToCalculator} 
            className="hover:opacity-90 transition cursor-pointer"
          />

          <div className="hidden md:flex items-center space-x-7 text-sm text-[#2C3138] font-semibold">
            <a 
              id="nav-yoga-checker"
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                onScrollToCalculator();
              }} 
              className="hover:text-[#003865] transition-colors cursor-pointer"
            >
              Kundli Yog Calculator
            </a>
            <a 
              id="nav-classical-guide"
              href="#yoga-directory"
              onClick={(e) => {
                e.preventDefault();
                onScrollToYogaDirectory();
              }} 
              className="hover:text-[#003865] transition-colors cursor-pointer"
            >
              Classical Yogas Directory
            </a>
            <a 
              id="nav-how-it-works"
              href="#how-it-works" 
              className="hover:text-[#003865] transition-colors"
            >
              How It Works
            </a>
            <a 
              id="nav-faq"
              href="#faq" 
              className="hover:text-[#003865] transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <button
              id="header-cta-btn"
              onClick={onScrollToCalculator}
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] transition-colors flex items-center space-x-1.5 shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Check My Chart</span>
              <span className="xs:hidden">Calculate</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

