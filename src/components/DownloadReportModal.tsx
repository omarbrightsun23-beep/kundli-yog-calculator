import React, { useState } from 'react';
import { Download, Printer, FileText, Check, X, ShieldCheck, Award } from 'lucide-react';
import { ChartAnalysis, DashaPeriod, BirthInput } from '../types/astrology';
import { downloadReportAsHTML, openPrintableReportWindow } from '../utils/reportExporter';
import { BrandLogo } from './BrandLogo';

interface DownloadReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  input: BirthInput;
  analysis: ChartAnalysis;
  dashaSchedule: DashaPeriod[];
}

export const DownloadReportModal: React.FC<DownloadReportModalProps> = ({
  isOpen,
  onClose,
  input,
  analysis,
  dashaSchedule
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const handlePrintPDF = () => {
    openPrintableReportWindow(input, analysis, dashaSchedule);
  };

  const handleDownloadHTML = () => {
    downloadReportAsHTML(input, analysis, dashaSchedule);
  };

  const handleCopySummary = () => {
    const summary = `🕉️ KUNDLI YOG DOSSIER for ${input.userName}
Lagna: ${analysis.lagnaSignName} (${analysis.lagnaSanskrit}) | Moon: ${analysis.moonSignName} | Nakshatra: ${analysis.nakshatraName} (Pada ${analysis.nakshatraPada})
Chart Power: ${analysis.chartScore}%

Detected Classical Yogas (${analysis.yogas.length}):
${analysis.yogas.map((y, i) => `${i + 1}. ${y.name} (${y.strength}% Strength) - ${y.category}\n   Formed by: ${y.planets.join(' + ')}\n   Activation: ${y.activation}`).join('\n\n')}

Vimshottari Dasha Current: ${dashaSchedule.find((d) => d.isCurrent)?.lord || 'Active'} Mahadasha

Generated with Sidereal Lahiri Ephemeris via Kundli Yog Calculator (https://www.kundliyogcalculator.com)`;

    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <div 
      id="download-report-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-lg w-full p-6 sm:p-8 text-left shadow-2xl relative my-8">
        <button
          id="close-download-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <BrandLogo variant="full" size="sm" className="mb-4" />

        <div className="flex items-center space-x-2 text-[#FBAF3C] mb-1">
          <Award className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#003865]">Export Official Dossier</span>
        </div>

        <h3 className="text-2xl font-bold text-[#003865] font-cinzel">
          Download Final Kundli Yog
        </h3>
        <p className="text-xs text-[#828892] mt-1 mb-6 leading-relaxed font-normal">
          Export your complete sidereal astrological analysis for <strong className="text-[#003865]">{input.userName}</strong> including all {analysis.yogas.length} detected yogas, strength factors, planetary coordinates, and 120-year Vimshottari schedule.
        </p>

        {/* Download Options */}
        <div className="space-y-3.5">
          {/* Option 1: Print / Save PDF */}
          <button
            id="download-modal-pdf-btn"
            onClick={handlePrintPDF}
            className="w-full p-4 rounded-xl bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] font-bold text-sm transition flex items-center justify-between shadow-xs cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <Printer className="w-5 h-5 text-[#003865]" />
              <div className="text-left">
                <div className="font-extrabold uppercase tracking-wide text-xs text-[#003865]">
                  Print or Save as PDF
                </div>
                <div className="text-[11px] font-medium text-[#003865]/90">
                  Formatted high-res document ready for printing or PDF archival
                </div>
              </div>
            </div>
            <span className="text-xs font-black uppercase text-[#003865]">Instant ➔</span>
          </button>

          {/* Option 2: Download HTML Document */}
          <button
            id="download-modal-html-btn"
            onClick={handleDownloadHTML}
            className="w-full p-4 rounded-xl bg-[#FAF8F2] hover:bg-white border border-[#E2DCB9] hover:border-[#003865] text-[#003865] font-semibold text-sm transition flex items-center justify-between cursor-pointer shadow-xs"
          >
            <div className="flex items-center space-x-3">
              <Download className="w-5 h-5 text-[#003865]" />
              <div className="text-left">
                <div className="text-xs font-bold text-[#003865]">
                  Download Offline Dossier (.HTML)
                </div>
                <div className="text-[11px] text-[#828892] font-normal">
                  Standalone document that opens in any browser without internet
                </div>
              </div>
            </div>
            <span className="text-xs text-[#003865] font-bold">.html file</span>
          </button>

          {/* Option 3: Copy Full Text Summary */}
          <button
            id="download-modal-copy-summary-btn"
            onClick={handleCopySummary}
            className="w-full p-4 rounded-xl bg-[#FAF8F2] hover:bg-white border border-[#E2DCB9] hover:border-[#003865] text-[#003865] font-semibold text-sm transition flex items-center justify-between cursor-pointer shadow-xs"
          >
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-[#003865]" />
              <div className="text-left">
                <div className="text-xs font-bold text-[#003865]">
                  Copy Complete Text Summary
                </div>
                <div className="text-[11px] text-[#828892] font-normal">
                  For pasting into notes, WhatsApp, email, or consultations
                </div>
              </div>
            </div>
            {copiedSummary ? (
              <span className="text-xs text-[#003865] font-bold flex items-center space-x-1">
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </span>
            ) : (
              <span className="text-xs text-[#828892] font-medium">Copy</span>
            )}
          </button>
        </div>

        {/* Guarantee Badge */}
        <div className="mt-6 pt-4 border-t border-[#E2DCB9] flex items-center space-x-2 text-[11px] text-[#828892]">
          <ShieldCheck className="w-4 h-4 text-[#FBAF3C] flex-shrink-0" />
          <span>Calculations strictly follow classical Parashari Jyotish guidelines with zero ads or watermarks.</span>
        </div>
      </div>
    </div>
  );
};
