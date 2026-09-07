import React from 'react';
import { Share2, Award, Zap, ShieldCheck, Download, FileText, Compass, Star } from 'lucide-react';
import { ChartAnalysis } from '../types/astrology';

interface OverviewBannerProps {
  userName: string;
  analysis: ChartAnalysis;
  onOpenShareModal: () => void;
  onOpenDownloadModal: () => void;
}

export const OverviewBanner: React.FC<OverviewBannerProps> = ({
  userName,
  analysis,
  onOpenShareModal,
  onOpenDownloadModal
}) => {
  const getPowerTier = (score: number) => {
    if (score >= 88) return { label: 'Sovereign Royal Dignity (Uttam)', color: 'text-amber-900', bg: 'bg-amber-100 border border-amber-300' };
    if (score >= 78) return { label: 'High Auspicious Strength (Shubh)', color: 'text-emerald-900', bg: 'bg-emerald-100 border border-emerald-300' };
    if (score >= 68) return { label: 'Strategic Auspicious Potential (Madhyam)', color: 'text-teal-900', bg: 'bg-teal-100 border border-teal-300' };
    return { label: 'Foundation Auspicious Alignment (Samanya)', color: 'text-indigo-900', bg: 'bg-indigo-100 border border-indigo-300' };
  };

  const tier = getPowerTier(analysis.chartScore);

  return (
    <div 
      id="overview-highlight-banner"
      className="bg-white border border-[#E2DCB9] rounded-2xl p-6 sm:p-8 mb-8 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs relative overflow-hidden"
    >
      <div className="relative z-10 flex-1">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
          <span 
            id="result-lagna-badge"
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#E2DCB9] text-[#003865] text-xs font-bold shadow-xs"
          >
            <Zap className="w-3 h-3 text-[#FBAF3C]" />
            <span>Lagna: {analysis.lagnaSignName} ({analysis.lagnaSanskrit})</span>
          </span>

          <span 
            id="result-moon-badge"
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EFE6C8] border border-[#E2DCB9] text-[#003865] text-xs font-bold shadow-xs"
          >
            <span>Moon: {analysis.moonSignName} ({analysis.moonSanskrit})</span>
          </span>

          <span 
            id="result-nakshatra-badge"
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#E2DCB9] text-[#2C3138] text-xs font-bold shadow-xs"
          >
            <Compass className="w-3 h-3 text-[#003865]" />
            <span>{analysis.nakshatraName} (Pada {analysis.nakshatraPada})</span>
          </span>
        </div>

        <h2 id="result-greeting-title" className="text-2xl sm:text-3xl font-extrabold text-[#003865] font-cinzel tracking-wide">
          Kundli Yoga Analysis for <span className="gold-gradient-text">{userName}</span>
        </h2>

        <p id="result-summary-text" className="text-[#828892] text-sm mt-2 max-w-2xl font-normal leading-relaxed">
          Analysis identified <strong className="text-[#003865] font-bold">{analysis.yogas.length} classical planetary yogas</strong>. {analysis.summaryQuote}
        </p>
      </div>

      {/* Auspicious Strength Score Card & Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 bg-[#FAF8F2] p-5 rounded-2xl border border-[#E2DCB9] shadow-xs w-full sm:w-auto">
        <div className="text-center min-w-[110px]">
          <div className="text-[11px] uppercase tracking-wider text-[#828892] font-bold flex items-center justify-center space-x-1">
            <Award className="w-3.5 h-3.5 text-[#FBAF3C]" />
            <span>Yoga Strength</span>
          </div>
          <div id="chart-power-score" className="text-3xl sm:text-4xl font-black font-cinzel text-[#003865] mt-0.5">
            {analysis.chartScore}%
          </div>
          <div className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-1.5 ${tier.bg} ${tier.color} inline-block whitespace-nowrap shadow-xs`}>
            {tier.label}
          </div>
        </div>

        <div className="hidden sm:block h-16 w-[1px] bg-[#E2DCB9]"></div>

        <div className="flex flex-col space-y-2.5 w-full sm:w-auto">
          <button
            id="download-final-kundli-report-btn"
            onClick={onOpenDownloadModal}
            className="w-full px-4 py-2.5 rounded-xl bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>Download Final Kundli Yog</span>
          </button>

          <button
            id="open-share-story-btn"
            onClick={onOpenShareModal}
            className="w-full px-4 py-2 rounded-xl bg-white hover:bg-[#FAF8F2] text-[#003865] text-xs font-bold transition flex items-center justify-center space-x-2 border border-[#E2DCB9] cursor-pointer whitespace-nowrap shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5 text-[#003865]" />
            <span>Share Story Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};
