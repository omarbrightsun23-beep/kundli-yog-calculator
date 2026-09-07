import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface BrandLogoProps {
  variant?: 'full' | 'emblem' | 'compact';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  showSubtitle?: boolean;
  inverted?: boolean;
}

/**
 * Astronomical Sudarshana Chakra Emblem
 * Mathematically constructed with 12 Rashi spokes, 12 constellation diamonds,
 * 8-petaled sacred lotus (Ashtadala Padma), and a radiant Surya Bindu core.
 */
export const ChakraEmblem: React.FC<{
  size?: number;
  className?: string;
  isLight?: boolean;
  inverted?: boolean;
}> = ({ size = 44, className = '', isLight = true, inverted = false }) => {
  // CubicYardHub Signature Palette:
  // 1. Deep Harbor Navy: #003865, 2. Amber Gold: #FBAF3C, 3. Dark Navy: #002b4d, 4. Sand: #E2DCB9 / Cream: #EFE6C8 / White
  const goldPrimary = '#FBAF3C'; // Warm Solar Amber Gold
  const goldSecondary = inverted ? '#FFFFFF' : '#003865'; // White on dark, Deep Harbor Navy on light
  const goldTertiary = inverted ? '#FBAF3C' : '#002b4d'; // Amber gold on dark, Dark Navy on light
  const pearlFill = inverted ? '#003865' : '#FFFFFF';
  const haloFill = inverted ? 'rgba(251, 175, 60, 0.22)' : 'rgba(251, 175, 60, 0.12)';

  const cx = 50;
  const cy = 50;
  const r = 44;
  const rOuter = r;
  const rBeaded = r * 0.90;
  const rMid = r * 0.74;
  const rInner = r * 0.44;
  const rCore = r * 0.14;

  // 12 Constellation Diamond Bindus
  const constellationBindus = [];
  for (let i = 0; i < 12; i++) {
    const deg = i * 30;
    const rad = (deg * Math.PI) / 180;
    const bx = cx + rOuter * Math.cos(rad);
    const by = cy + rOuter * Math.sin(rad);
    const dSize = i % 3 === 0 ? r * 0.055 : r * 0.038;
    const p1 = `${bx.toFixed(2)},${(by - dSize).toFixed(2)}`;
    const p2 = `${(bx + dSize).toFixed(2)},${by.toFixed(2)}`;
    const p3 = `${bx.toFixed(2)},${(by + dSize).toFixed(2)}`;
    const p4 = `${(bx - dSize).toFixed(2)},${by.toFixed(2)}`;
    const fill = i % 3 === 0 ? (inverted ? '#FFFFFF' : goldSecondary) : goldPrimary;
    constellationBindus.push(
      <polygon key={`bindu-${i}`} points={`${p1} ${p2} ${p3} ${p4}`} fill={fill} />
    );
  }

  // 12 Astrological Rashi Spokes
  const spokes = [];
  for (let i = 0; i < 12; i++) {
    const deg = i * 30;
    const rad = (deg * Math.PI) / 180;
    const x1 = (cx + rInner * Math.cos(rad)).toFixed(2);
    const y1 = (cy + rInner * Math.sin(rad)).toFixed(2);
    const x2 = (cx + rMid * Math.cos(rad)).toFixed(2);
    const y2 = (cy + rMid * Math.sin(rad)).toFixed(2);
    spokes.push(
      <line
        key={`spoke-${i}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={goldPrimary}
        strokeWidth={(r * 0.032).toFixed(2)}
        strokeLinecap="round"
      />
    );
  }

  // 8 Sacred Lotus Petals
  const lotusPetals = [];
  const petalCount = 8;
  const petalR = r * 0.42;
  for (let i = 0; i < petalCount; i++) {
    const angle = (i * 360) / petalCount;
    const rad = (angle * Math.PI) / 180;
    const tipX = (cx + petalR * Math.cos(rad)).toFixed(2);
    const tipY = (cy + petalR * Math.sin(rad)).toFixed(2);
    const radLeft = ((angle - 18) * Math.PI) / 180;
    const radRight = ((angle + 18) * Math.PI) / 180;
    const c1X = (cx + (petalR * 0.6) * Math.cos(radLeft)).toFixed(2);
    const c1Y = (cy + (petalR * 0.6) * Math.sin(radLeft)).toFixed(2);
    const c2X = (cx + (petalR * 0.6) * Math.cos(radRight)).toFixed(2);
    const c2Y = (cy + (petalR * 0.6) * Math.sin(radRight)).toFixed(2);

    lotusPetals.push(
      <path
        key={`petal-${i}`}
        d={`M ${cx} ${cy} Q ${c1X} ${c1Y} ${tipX} ${tipY} Q ${c2X} ${c2Y} ${cx} ${cy} Z`}
        fill={inverted ? '#FBAF3C' : goldSecondary}
        fillOpacity={inverted ? 0.45 : (isLight ? 0.35 : 0.45)}
        stroke={inverted ? '#FBAF3C' : goldPrimary}
        strokeWidth={(r * 0.024).toFixed(2)}
      />
    );
  }

  // 8 Solar Rays
  const solarRays = [];
  for (let i = 0; i < 8; i++) {
    const deg = i * 45 + 22.5;
    const rad = (deg * Math.PI) / 180;
    const rx1 = (cx + (rCore * 1.1) * Math.cos(rad)).toFixed(2);
    const ry1 = (cy + (rCore * 1.1) * Math.sin(rad)).toFixed(2);
    const rx2 = (cx + (rCore * 2.1) * Math.cos(rad)).toFixed(2);
    const ry2 = (cy + (rCore * 2.1) * Math.sin(rad)).toFixed(2);
    solarRays.push(
      <line
        key={`ray-${i}`}
        x1={rx1}
        y1={ry1}
        x2={rx2}
        y2={ry2}
        stroke={goldTertiary}
        strokeWidth={(r * 0.038).toFixed(2)}
        strokeLinecap="round"
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`aspect-square select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* Background Aura */}
      <circle cx={cx} cy={cy} r={r * 0.88} fill={haloFill} />

      {/* Outer Precision Rings */}
      <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke={goldPrimary} strokeWidth={r * 0.040} />
      <circle
        cx={cx}
        cy={cy}
        r={rBeaded}
        fill="none"
        stroke={inverted ? '#FBAF3C' : goldPrimary}
        strokeWidth={r * 0.022}
        strokeDasharray={`${r * 0.045} ${r * 0.045}`}
      />
      <circle cx={cx} cy={cy} r={rMid} fill="none" stroke={goldPrimary} strokeWidth={r * 0.030} />

      {/* 12 Rashi Spokes */}
      {spokes}

      {/* 12 Constellation Diamond Bindus */}
      {constellationBindus}

      {/* Inner Sacred Sanctum Ring */}
      <circle cx={cx} cy={cy} r={rInner} fill="none" stroke={goldPrimary} strokeWidth={r * 0.035} />

      {/* Ashtadala Padma Lotus */}
      {lotusPetals}

      {/* Solar Rays */}
      {solarRays}

      {/* Radiant Central Surya Bindu */}
      <circle cx={cx} cy={cy} r={rCore * 1.35} fill={inverted ? '#FBAF3C' : goldSecondary} />
      <circle cx={cx} cy={cy} r={rCore} fill={inverted ? '#FFFFFF' : pearlFill} stroke={goldPrimary} strokeWidth={r * 0.03} />
      <circle cx={cx - rCore * 0.28} cy={cy - rCore * 0.28} r={rCore * 0.38} fill={goldTertiary} opacity={0.85} />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  onClick,
  showSubtitle = true,
  inverted = false
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Size specifications
  const emblemSize = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];

  const titleSize = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  }[size];

  const subtitleSize = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs'
  }[size];

  if (variant === 'emblem') {
    return (
      <div
        id="brand-emblem-container"
        className={`group inline-flex items-center justify-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label="Kundli Yog Emblem"
      >
        <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-45">
          <ChakraEmblem size={emblemSize} isLight={isLight} inverted={inverted} />
        </div>
      </div>
    );
  }

  return (
    <div
      id="brand-logo-container"
      className={`group inline-flex items-center space-x-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label="Kundli Yog — Royal Horoscope & Yoga Analyzer"
    >
      {/* Animated Astronomical Emblem */}
      <div className="flex-shrink-0 transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-105">
        <ChakraEmblem size={emblemSize} isLight={isLight} inverted={inverted} />
      </div>

      {/* Sacred Vertical Divider */}
      <div className="relative flex flex-col items-center justify-center self-stretch py-0.5">
        <div className="w-1.5 h-1.5 rotate-45 mb-0.5 bg-[#FBAF3C]" />
        <div className={`w-px flex-grow ${inverted ? 'bg-white/40' : 'bg-[#E2DCB9]'}`} />
        <div className={`w-1.5 h-1.5 rotate-45 mt-0.5 ${inverted ? 'bg-white' : 'bg-[#003865]'}`} />
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center text-left leading-none">
        <div className={`font-cinzel font-black tracking-wider ${titleSize} ${inverted ? 'text-white' : 'text-[#003865]'}`}>
          <span>KUNDLI </span>
          <span className="text-[#FBAF3C] group-hover:text-[#e59f30] transition-colors">
            YOG
          </span>
        </div>

        {showSubtitle && variant !== 'compact' && (
          <div className={`mt-1 font-sans font-bold uppercase tracking-[0.20em] ${inverted ? 'text-[#EFE6C8]' : 'text-[#828892]'} ${subtitleSize}`}>
            ROYAL HOROSCOPE &amp; YOGA ANALYZER
          </div>
        )}
      </div>
    </div>
  );
};
