import React, { useState } from 'react';
import { Share2, Crown, Star, Clock, MessageCircle, CheckCircle2, Download } from 'lucide-react';
import { YogaResult } from '../types/astrology';

interface YogasGridProps {
  userName: string;
  chartScore: number;
  yogas: YogaResult[];
  onOpenShareModal: () => void;
  onOpenDownloadModal: () => void;
}

export const YogasGrid: React.FC<YogasGridProps> = ({
  userName,
  chartScore,
  yogas,
  onOpenShareModal,
  onOpenDownloadModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedLinkNotice, setCopiedLinkNotice] = useState(false);

  const categories = [
    { id: 'all', label: `All Yogas (${yogas.length})` },
    { id: 'royal', label: 'Royal & Raj Yogas 👑' },
    { id: 'mahapurusha', label: 'Mahapurusha 🏆' },
    { id: 'wealth', label: 'Wealth & Assets 💰' },
    { id: 'intellect', label: 'Intellect & Fame 🧠' },
    { id: 'protection', label: 'Protective & Reversal 🛡️' }
  ];

  const filteredYogas = yogas.filter((y) => {
    if (selectedCategory === 'all') return true;
    const cat = y.category.toLowerCase();
    if (selectedCategory === 'royal') return cat.includes('royal') || cat.includes('raj');
    if (selectedCategory === 'mahapurusha') return cat.includes('mahapurusha');
    if (selectedCategory === 'wealth') return cat.includes('wealth') || cat.includes('dhan') || cat.includes('abundance');
    if (selectedCategory === 'intellect') return cat.includes('intellect') || cat.includes('fame') || cat.includes('purity');
    if (selectedCategory === 'protection') return cat.includes('protection') || cat.includes('adversity') || cat.includes('reversal');
    return true;
  });

  const handleWhatsAppShare = () => {
    const topYoga = yogas.length > 0 ? yogas[0].name : 'Raj Yogas';
    const text = encodeURIComponent(
      `🕉️ I just calculated my Vedic Kundli on KundliYog and discovered ${topYoga} with a ${chartScore}% chart power score! 👑 Check your planetary yogas: ${window.location.href}`
    );
    const waUrl = `https://api.whatsapp.com/send?text=${text}`;
    try {
      const opened = window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (!opened) {
        // If popup blocker intervened in iframe, fallback to clipboard
        navigator.clipboard.writeText(decodeURIComponent(text));
        setCopiedLinkNotice(true);
        setTimeout(() => setCopiedLinkNotice(false), 3000);
      }
    } catch (e) {
      navigator.clipboard.writeText(decodeURIComponent(text));
      setCopiedLinkNotice(true);
      setTimeout(() => setCopiedLinkNotice(false), 3000);
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('royal') || cat.includes('raj')) {
      return 'bg-[#FAF8F2] text-[#003865] border-[#E2DCB9]';
    }
    if (cat.includes('mahapurusha')) {
      return 'bg-[#EFE6C8] text-[#003865] border-[#E2DCB9]';
    }
    if (cat.includes('wealth') || cat.includes('dhan') || cat.includes('abundance')) {
      return 'bg-[#FAF8F2] text-[#003865] border-[#E2DCB9]';
    }
    if (cat.includes('protection') || cat.includes('reversal')) {
      return 'bg-[#FAF8F2] text-[#2C3138] border-[#E2DCB9]';
    }
    return 'bg-[#FAF8F2] text-[#003865] border-[#E2DCB9]';
  };

  return (
    <div id="yogas-container" className="space-y-6">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`filter-category-${cat.id}`}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#003865] text-white shadow-xs'
                : 'bg-white text-[#2C3138] hover:text-[#003865] hover:bg-[#FAF8F2] border border-[#E2DCB9]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      {filteredYogas.length === 0 ? (
        <div className="bg-white border border-[#E2DCB9] rounded-2xl p-12 text-center text-[#828892] shadow-xs">
          <p className="text-sm">No yogas found under this specific filter category.</p>
          <button
            id="reset-category-filter-btn"
            onClick={() => setSelectedCategory('all')}
            className="mt-3 text-xs text-[#003865] hover:underline font-bold cursor-pointer"
          >
            Show All Yogas ({yogas.length})
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredYogas.map((yoga, idx) => (
            <div
              key={idx}
              id={`yoga-card-${idx}`}
              className="bg-white border border-[#E2DCB9] hover:border-[#003865] rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between shadow-xs hover:shadow-sm group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border shadow-2xs ${getCategoryBadgeClass(yoga.category)}`}>
                      {yoga.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-cinzel text-[#003865] mt-2 group-hover:text-[#FBAF3C] transition-colors">
                      {yoga.name}
                    </h3>
                  </div>

                  {/* Strength Pill */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-base font-black font-cinzel text-[#003865]">
                      {yoga.strength}%
                    </div>
                    <div className="text-[10px] text-[#828892] font-semibold uppercase tracking-wider">
                      Strength
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#2C3138] font-normal leading-relaxed mb-4">
                  {yoga.description}
                </p>

                {/* Planets Involved Chips */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  <span className="text-[11px] text-[#828892] font-semibold mr-1">Grahas:</span>
                  {yoga.planets.map((planet, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2 py-0.5 rounded-md bg-[#FAF8F2] border border-[#E2DCB9] text-[#003865] text-xs font-semibold"
                    >
                      {planet}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Activation & Celebrity */}
              <div className="pt-4 border-t border-[#E2DCB9] text-[11px] space-y-1.5">
                <div className="flex items-center space-x-1.5 text-[#003865] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#FBAF3C] flex-shrink-0" />
                  <span>Activation: {yoga.activation}</span>
                </div>

                {yoga.celebrity && (
                  <div className="flex items-center space-x-1.5 text-[#828892] font-normal">
                    <Star className="w-3.5 h-3.5 text-[#FBAF3C] flex-shrink-0" />
                    <span>Celebrity Archetype: <strong className="text-[#2C3138] font-semibold">{yoga.celebrity}</strong></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIRAL SHARE, WHATSAPP & DOWNLOAD CALLOUT */}
      <div 
        id="whatsapp-share-callout"
        className="mt-8 p-6 rounded-2xl bg-white border border-[#E2DCB9] flex flex-col lg:flex-row items-center justify-between gap-4 shadow-xs"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-[#003865] border border-[#002b4d] flex items-center justify-center text-[#FBAF3C] flex-shrink-0 shadow-xs">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#003865] flex items-center space-x-2">
              <span>Challenge Friends &amp; Family on WhatsApp</span>
            </h3>
            <p className="text-xs text-[#828892] mt-0.5 max-w-xl font-normal">
              Share your rare Raj Yogas on WhatsApp or export your complete official dossier to compare chart powers!
            </p>
            {copiedLinkNotice && (
              <p className="text-xs text-[#003865] font-semibold mt-1 animate-pulse">
                ✓ Share text copied to clipboard!
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          <button
            id="download-report-cta-btn"
            onClick={onOpenDownloadModal}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] font-bold text-xs uppercase tracking-wider border border-[#e59f30] transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>Download Report</span>
          </button>

          <button
            id="whatsapp-share-cta-btn"
            onClick={handleWhatsAppShare}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#003865] hover:bg-[#002b4d] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#FBAF3C]" />
            <span>WhatsApp</span>
          </button>

          <button
            id="story-card-cta-btn"
            onClick={onOpenShareModal}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F2] text-[#003865] font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 border border-[#E2DCB9] cursor-pointer whitespace-nowrap shadow-xs"
          >
            <Share2 className="w-4 h-4 text-[#003865]" />
            <span>Story Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};
