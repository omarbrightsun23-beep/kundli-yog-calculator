import React, { useEffect, useRef, useState } from 'react';
import { Download, Copy, Check, X, Share2 } from 'lucide-react';
import { ChartAnalysis, YogaResult } from '../types/astrology';
import { BrandLogo } from './BrandLogo';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  analysis: ChartAnalysis;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  userName,
  analysis
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderCard = (logoImg?: HTMLImageElement) => {
      // Professional Deep Harbor Navy Gradient Canvas Background
      const grad = ctx.createLinearGradient(0, 0, 540, 960);
      grad.addColorStop(0, '#002240');
      grad.addColorStop(0.5, '#003865');
      grad.addColorStop(1, '#002240');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 540, 960);

      // Subtle star dots
      ctx.fillStyle = 'rgba(226, 220, 185, 0.35)';
      for (let i = 0; i < 40; i++) {
        const sx = Math.random() * 540;
        const sy = Math.random() * 960;
        const sr = Math.random() * 1.5 + 0.5;
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Outer Gold Frame
      ctx.strokeStyle = 'rgba(251, 175, 60, 0.7)';
      ctx.lineWidth = 3;
      ctx.strokeRect(24, 24, 492, 912);

      // Inner Corner Accent Marks
      ctx.strokeStyle = '#FBAF3C';
      ctx.lineWidth = 2;
      // Top-Left
      ctx.beginPath();
      ctx.moveTo(34, 48);
      ctx.lineTo(34, 34);
      ctx.lineTo(48, 34);
      ctx.stroke();
      // Top-Right
      ctx.beginPath();
      ctx.moveTo(506, 48);
      ctx.lineTo(506, 34);
      ctx.lineTo(492, 34);
      ctx.stroke();
      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(34, 912);
      ctx.lineTo(34, 926);
      ctx.lineTo(48, 926);
      ctx.stroke();
      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(506, 912);
      ctx.lineTo(506, 926);
      ctx.lineTo(492, 926);
      ctx.stroke();

      // Brand Logo Header on Card
      if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
        const logoWidth = 240;
        const logoHeight = (logoWidth * logoImg.naturalHeight) / logoImg.naturalWidth;
        ctx.drawImage(logoImg, (540 - logoWidth) / 2, 45, logoWidth, logoHeight);
      } else {
        // Fallback Header Title
        ctx.fillStyle = '#FBAF3C';
        ctx.font = "bold 20px 'Cinzel', serif";
        ctx.textAlign = 'center';
        ctx.fillText('KUNDLI YOG', 270, 75);
      }

      ctx.fillStyle = '#E2DCB9';
      ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = 'center';
      ctx.fillText('Vedic Planetary Intelligence • Lahiri Ayanamsa', 270, 115);

      // User Greeting & Lagna
      ctx.fillStyle = '#FFFFFF';
      ctx.font = "bold 30px 'Cinzel', serif";
      ctx.fillText(userName, 270, 160);

      ctx.fillStyle = '#FBAF3C';
      ctx.font = "15px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(
        `Lagna: ${analysis.lagnaSignName} (${analysis.lagnaSanskrit}) • Moon: ${analysis.moonSignName}`,
        270,
        190
      );

      // Score Circle Box
      ctx.fillStyle = 'rgba(0, 56, 101, 0.85)';
      ctx.strokeStyle = '#FBAF3C';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(270, 285, 68, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FBAF3C';
      ctx.font = "bold 44px 'Cinzel', serif";
      ctx.fillText(`${analysis.chartScore}%`, 270, 290);

      ctx.fillStyle = '#E2DCB9';
      ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText('CHART POWER', 270, 320);

      // Yogas Header
      ctx.fillStyle = '#FFFFFF';
      ctx.font = "bold 20px 'Cinzel', serif";
      ctx.fillText('Detected Classical Yogas', 270, 410);

      // Top 3 Yogas List
      let yOffset = 460;
      const topYogas = analysis.yogas.slice(0, 3);

      topYogas.forEach((yoga) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.fillRect(48, yOffset - 30, 444, 88);
        ctx.strokeStyle = 'rgba(226, 220, 185, 0.35)';
        ctx.strokeRect(48, yOffset - 30, 444, 88);

        ctx.fillStyle = '#FBAF3C';
        ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
        ctx.textAlign = 'left';
        ctx.fillText(yoga.name, 68, yOffset);

        ctx.fillStyle = '#E2DCB9';
        ctx.font = "13px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(
          `${yoga.category} • Strength: ${yoga.strength}%`,
          68,
          yOffset + 24
        );

        ctx.fillStyle = '#CBD5E1';
        ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
        const planStr = `Formed by: ${yoga.planets.join(' + ')}`;
        ctx.fillText(planStr, 68, yOffset + 44);

        yOffset += 105;
      });

      // Nakshatra highlight line
      ctx.fillStyle = '#E2DCB9';
      ctx.font = "13px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = 'center';
      ctx.fillText(
        `Birth Moon Nakshatra: ${analysis.nakshatraName} (Pada ${analysis.nakshatraPada})`,
        270,
        820
      );

      // Bottom Branding & URL
      ctx.fillStyle = '#FBAF3C';
      ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText('Check Your Kundli Yogas at KundliYog', 270, 875);

      ctx.fillStyle = '#E2DCB9';
      ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText('Free Vedic Astrology Planetary Analyzer', 270, 900);
    };

  const logoImg = new Image();
  logoImg.src = '/logo-header-dark.png';
  logoImg.onload = () => {
    renderCard(logoImg);
  };
  renderCard();
}, [isOpen, userName, analysis]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `${userName.replace(/\s+/g, '_')}_KundliYog_Card.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="share-modal" 
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-md w-full p-6 text-center shadow-2xl relative my-8">
        <button
          id="close-share-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <BrandLogo variant="full" size="sm" className="mb-3 justify-center mx-auto" />

        <h3 className="text-xl font-bold text-[#003865] font-cinzel mb-1 flex items-center justify-center space-x-2">
          <span>Your Cosmic Share Card</span>
        </h3>
        <p className="text-xs text-[#828892] mb-5">
          Sized for Instagram Stories, WhatsApp Status &amp; Twitter (9:16)
        </p>

        {/* Canvas Preview Container */}
        <div className="relative mx-auto rounded-xl overflow-hidden border border-[#E2DCB9] shadow-xl max-w-[280px]">
          <canvas
            ref={canvasRef}
            width={540}
            height={960}
            className="w-full h-auto rounded-xl block"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            id="download-canvas-btn"
            onClick={handleDownload}
            className="flex-1 py-3 px-4 rounded-xl bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#003865]" />
            <span>Download PNG</span>
          </button>
          <button
            id="copy-link-btn"
            onClick={handleCopyLink}
            className="py-3 px-4 rounded-xl bg-[#FAF8F2] hover:bg-[#EFE6C8] text-[#003865] font-bold text-xs transition flex items-center justify-center space-x-2 border border-[#E2DCB9] cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#003865]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#003865]" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
