const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Generates an astronomically precise, sacred Jyotish Sudarshana Chakra emblem
 * with 12 Rashi spokes, 12 outer constellation bindus, an 8-petaled inner lotus,
 * and a radiant Surya bindu core.
 */
function generateEmblemSVG(cx, cy, r, isLight = false) {
  const goldPrimary = isLight ? '#0D9488' : '#14B8A6';
  const goldSecondary = isLight ? '#D97706' : '#F59E0B';
  const goldTertiary = isLight ? '#2DD4BF' : '#A7F3D0';
  const pearlFill = isLight ? '#FFFFFF' : '#0F172A';
  const haloFill = isLight ? 'rgba(13, 148, 136, 0.12)' : 'rgba(20, 184, 166, 0.18)';

  const rOuter = r;
  const rBeaded = r * 0.90;
  const rMid = r * 0.74;
  const rInner = r * 0.44;
  const rCore = r * 0.14;

  // 12 Constellation Diamond Bindus on the Outer Ring
  let constellationBindus = '';
  for (let i = 0; i < 12; i++) {
    const deg = i * 30;
    const rad = (deg * Math.PI) / 180;
    const bx = cx + rOuter * Math.cos(rad);
    const by = cy + rOuter * Math.sin(rad);
    const dSize = i % 3 === 0 ? r * 0.055 : r * 0.038; // Cardinal directions slightly larger
    const p1 = `${bx.toFixed(2)},${(by - dSize).toFixed(2)}`;
    const p2 = `${(bx + dSize).toFixed(2)},${by.toFixed(2)}`;
    const p3 = `${bx.toFixed(2)},${(by + dSize).toFixed(2)}`;
    const p4 = `${(bx - dSize).toFixed(2)},${by.toFixed(2)}`;
    const fill = i % 3 === 0 ? goldSecondary : goldPrimary;
    constellationBindus += `<polygon points="${p1} ${p2} ${p3} ${p4}" fill="${fill}" />\n`;
  }

  // 12 Astrological Rashi Spokes (from inner ring to mid ring)
  let spokes = '';
  for (let i = 0; i < 12; i++) {
    const deg = i * 30;
    const rad = (deg * Math.PI) / 180;
    const x1 = (cx + rInner * Math.cos(rad)).toFixed(2);
    const y1 = (cy + rInner * Math.sin(rad)).toFixed(2);
    const x2 = (cx + rMid * Math.cos(rad)).toFixed(2);
    const y2 = (cy + rMid * Math.sin(rad)).toFixed(2);
    spokes += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${goldPrimary}" stroke-width="${(r * 0.032).toFixed(2)}" stroke-linecap="round" />\n`;
  }

  // 8 Sacred Lotus Petals (Ashtadala Padma) inside the inner sanctum
  let lotusPetals = '';
  const petalCount = 8;
  const petalR = r * 0.42;
  for (let i = 0; i < petalCount; i++) {
    const angle = (i * 360) / petalCount;
    const rad = (angle * Math.PI) / 180;
    const tipX = (cx + petalR * Math.cos(rad)).toFixed(2);
    const tipY = (cy + petalR * Math.sin(rad)).toFixed(2);
    
    // Control points for petal curve
    const radLeft = ((angle - 18) * Math.PI) / 180;
    const radRight = ((angle + 18) * Math.PI) / 180;
    const c1X = (cx + (petalR * 0.6) * Math.cos(radLeft)).toFixed(2);
    const c1Y = (cy + (petalR * 0.6) * Math.sin(radLeft)).toFixed(2);
    const c2X = (cx + (petalR * 0.6) * Math.cos(radRight)).toFixed(2);
    const c2Y = (cy + (petalR * 0.6) * Math.sin(radRight)).toFixed(2);

    lotusPetals += `<path d="M ${cx.toFixed(2)} ${cy.toFixed(2)} Q ${c1X} ${c1Y} ${tipX} ${tipY} Q ${c2X} ${c2Y} ${cx.toFixed(2)} ${cy.toFixed(2)} Z" fill="${goldSecondary}" fill-opacity="${isLight ? '0.35' : '0.45'}" stroke="${goldPrimary}" stroke-width="${(r * 0.024).toFixed(2)}" />\n`;
  }

  // 8 Pointed Radiant Solar Stars around the core
  let solarRays = '';
  for (let i = 0; i < 8; i++) {
    const deg = i * 45 + 22.5; // Staggered between lotus petals
    const rad = (deg * Math.PI) / 180;
    const rx1 = (cx + (rCore * 1.1) * Math.cos(rad)).toFixed(2);
    const ry1 = (cy + (rCore * 1.1) * Math.sin(rad)).toFixed(2);
    const rx2 = (cx + (rCore * 2.1) * Math.cos(rad)).toFixed(2);
    const ry2 = (cy + (rCore * 2.1) * Math.sin(rad)).toFixed(2);
    solarRays += `<line x1="${rx1}" y1="${ry1}" x2="${rx2}" y2="${ry2}" stroke="${goldTertiary}" stroke-width="${(r * 0.038).toFixed(2)}" stroke-linecap="round" />\n`;
  }

  return `
  <!-- Astrological Sudarshana Chakra -->
  <g id="chakra-emblem" transform-origin="${cx} ${cy}">
    <!-- Background Radiant Aura -->
    <circle cx="${cx}" cy="${cy}" r="${(r * 0.88).toFixed(2)}" fill="${haloFill}" />

    <!-- Outer Precision Rings -->
    <circle cx="${cx}" cy="${cy}" r="${rOuter.toFixed(2)}" fill="none" stroke="${goldPrimary}" stroke-width="${(r * 0.040).toFixed(2)}" />
    <circle cx="${cx}" cy="${cy}" r="${rBeaded.toFixed(2)}" fill="none" stroke="${goldPrimary}" stroke-width="${(r * 0.022).toFixed(2)}" stroke-dasharray="${(r * 0.045).toFixed(2)} ${(r * 0.045).toFixed(2)}" />
    <circle cx="${cx}" cy="${cy}" r="${rMid.toFixed(2)}" fill="none" stroke="${goldPrimary}" stroke-width="${(r * 0.030).toFixed(2)}" />

    <!-- 12 Astrological Rashi Spokes -->
    ${spokes}

    <!-- 12 Constellation Diamond Bindus -->
    ${constellationBindus}

    <!-- Inner Sacred Sanctum Ring -->
    <circle cx="${cx}" cy="${cy}" r="${rInner.toFixed(2)}" fill="none" stroke="${goldPrimary}" stroke-width="${(r * 0.035).toFixed(2)}" />

    <!-- Ashtadala Padma (8-Petaled Lotus) -->
    ${lotusPetals}

    <!-- Solar Rays from Central Bindu -->
    ${solarRays}

    <!-- Radiant Surya Bindu Core -->
    <circle cx="${cx}" cy="${cy}" r="${(rCore * 1.35).toFixed(2)}" fill="${goldSecondary}" />
    <circle cx="${cx}" cy="${cy}" r="${rCore.toFixed(2)}" fill="${pearlFill}" stroke="${goldPrimary}" stroke-width="${(r * 0.03).toFixed(2)}" />
    <circle cx="${(cx - rCore * 0.28).toFixed(2)}" cy="${(cy - rCore * 0.28).toFixed(2)}" r="${(rCore * 0.38).toFixed(2)}" fill="${goldTertiary}" opacity="0.8" />
  </g>
  `;
}

/**
 * Generates transparent-background header logos with Cinzel serif wordmark
 * and high-contrast, elegant typography.
 */
function generateHeaderLogoSVG(isLight = false) {
  const primaryTextColor = isLight ? '#0F172A' : '#FFFFFF';
  const accentTextColor = isLight ? '#0D9488' : '#14B8A6';
  const taglineColor = isLight ? '#0F766E' : '#2DD4BF';
  const dividerColor = isLight ? '#E2E8F0' : '#25344D';
  const dividerAccent = isLight ? '#0D9488' : '#14B8A6';

  const emblem = generateEmblemSVG(66, 60, 47, isLight);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="520" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&amp;family=Plus+Jakarta+Sans:wght@600;700;800&amp;display=swap');
      .brand-title {
        font-family: 'Cinzel', 'Trajan Pro', Georgia, serif;
        font-weight: 800;
        font-size: 35px;
        letter-spacing: 0.12em;
      }
      .brand-title-accent {
        font-family: 'Cinzel', 'Trajan Pro', Georgia, serif;
        font-weight: 900;
        letter-spacing: 0.12em;
      }
      .brand-tagline {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 11.5px;
        letter-spacing: 0.22em;
      }
    </style>
  </defs>

  <!-- Sacred Jyotish Emblem -->
  ${emblem}

  <!-- Vertical Divider with Diamond Accents -->
  <line x1="130" y1="26" x2="130" y2="94" stroke="${dividerColor}" stroke-width="1.8" stroke-linecap="round" />
  <polygon points="130,22 133,26 130,30 127,26" fill="${dividerAccent}" />
  <polygon points="130,90 133,94 130,98 127,94" fill="${dividerAccent}" />

  <!-- Typography: Primary Regal Wordmark -->
  <text x="148" y="62" class="brand-title" fill="${primaryTextColor}">KUNDLI <tspan fill="${accentTextColor}" class="brand-title-accent">YOG</tspan></text>

  <!-- Typography: Tagline -->
  <text x="150" y="85" class="brand-tagline" fill="${taglineColor}">ROYAL HOROSCOPE &amp; YOGA ANALYZER</text>
</svg>`;
}

/**
 * Generates the square Favicon SVG (48x48) with deep cosmic container and brilliant emblem
 */
function generateFaviconSVG() {
  const emblem = generateEmblemSVG(24, 24, 18, false);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <defs>
    <radialGradient id="fav-bg" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#131F33" />
      <stop offset="100%" stop-color="#0B1120" />
    </radialGradient>
    <linearGradient id="fav-border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#0D9488" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#14B8A6" stop-opacity="0.85" />
    </linearGradient>
  </defs>

  <!-- Squircle Container -->
  <rect x="1.5" y="1.5" width="45" height="45" rx="11" fill="url(#fav-bg)" stroke="url(#fav-border)" stroke-width="1.5" />

  <!-- Emblem -->
  ${emblem}
</svg>`;
}

/**
 * Generates the Apple Touch Icon (180x180) with deep cosmic gradients and rich borders
 */
function generateAppleTouchIconSVG() {
  const emblem = generateEmblemSVG(90, 90, 68, false);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <defs>
    <radialGradient id="apple-bg" cx="50%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#131F33" />
      <stop offset="100%" stop-color="#0B1120" />
    </radialGradient>
    <linearGradient id="apple-border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6" />
      <stop offset="50%" stop-color="#0D9488" />
      <stop offset="100%" stop-color="#14B8A6" />
    </linearGradient>
  </defs>

  <rect x="4" y="4" width="172" height="172" rx="40" fill="url(#apple-bg)" stroke="url(#apple-border)" stroke-width="3" />
  ${emblem}
</svg>`;
}

/**
 * Generates OpenGraph / Twitter Card (1200x630) with rich branding, chakra art, and typography
 */
function generateOGImageSVG() {
  const emblem = generateEmblemSVG(260, 315, 175, false);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .og-title {
        font-family: 'Cinzel', 'Trajan Pro', Georgia, serif;
        font-weight: 900;
        font-size: 64px;
        letter-spacing: 0.12em;
      }
      .og-tagline {
        font-family: 'Cinzel', 'Trajan Pro', Georgia, serif;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 0.24em;
      }
      .og-body {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 21px;
        font-weight: 500;
      }
      .og-badge {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.08em;
      }
    </style>
    <radialGradient id="og-bg" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#131F33" />
      <stop offset="100%" stop-color="#0B1120" />
    </radialGradient>
    <radialGradient id="og-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#14B8A6" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#131F33" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Deep Slate Canvas -->
  <rect width="1200" height="630" fill="url(#og-bg)" />

  <!-- Background Halo behind Chakra -->
  <circle cx="260" cy="315" r="280" fill="url(#og-halo)" />

  <!-- Modern Hairline Borders -->
  <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#25344D" stroke-width="2" />
  <rect x="36" y="36" width="1128" height="558" rx="12" fill="none" stroke="#0D9488" stroke-width="1.6" opacity="0.6" />

  <!-- Left Astrological Wheel -->
  ${emblem}

  <!-- Right Typography & Content -->
  <g transform="translate(520, 0)">
    <!-- Primary Title -->
    <text x="0" y="195" class="og-title" fill="#FFFFFF">KUNDLI <tspan fill="#14B8A6">YOG</tspan></text>
    
    <!-- Subtitle -->
    <text x="3" y="238" class="og-tagline" fill="#14B8A6">ROYAL HOROSCOPE &amp; YOGA ANALYZER</text>

    <!-- Decorative Teal Divider -->
    <line x1="2" y1="265" x2="380" y2="265" stroke="#14B8A6" stroke-width="1.8" opacity="0.6" />
    <polygon points="380,265 385,262 390,265 385,268" fill="#14B8A6" />

    <!-- Feature Checklist -->
    <g transform="translate(0, 318)">
      <!-- Item 1 -->
      <circle cx="12" cy="0" r="5" fill="#14B8A6" />
      <text x="32" y="7" class="og-body" fill="#F8FAFC">Detect Over 50+ Classical Vedic Yogas &amp; Doshas</text>

      <!-- Item 2 -->
      <circle cx="12" cy="52" r="5" fill="#14B8A6" />
      <text x="32" y="59" class="og-body" fill="#F8FAFC">Astronomical Lahiri Sidereal Ephemeris &amp; Scoring</text>

      <!-- Item 3 -->
      <circle cx="12" cy="104" r="5" fill="#14B8A6" />
      <text x="32" y="111" class="og-body" fill="#F8FAFC">120-Year Vimshottari Dasha Activation Timeline</text>
    </g>

    <!-- Bottom Authority Badge -->
    <g transform="translate(0, 485)">
      <rect x="0" y="0" width="460" height="42" rx="21" fill="rgba(20, 184, 166, 0.15)" stroke="#14B8A6" stroke-width="1.2" />
      <text x="24" y="27" class="og-badge" fill="#2DD4BF">👑 100% FREE CLIENT-SIDE SIDEREAL HOROSCOPE CHECK</text>
    </g>
  </g>
</svg>`;
}

async function buildAssets() {
  const publicDir = path.join(__dirname, '../public');

  const darkSVG = generateHeaderLogoSVG(false);
  const lightSVG = generateHeaderLogoSVG(true);
  const faviconSVG = generateFaviconSVG();
  const appleTouchSVG = generateAppleTouchIconSVG();
  const ogSVG = generateOGImageSVG();

  // Save SVG source files
  fs.writeFileSync(path.join(publicDir, 'logo-header-dark.svg'), darkSVG);
  fs.writeFileSync(path.join(publicDir, 'logo-header-light.svg'), lightSVG);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSVG);
  fs.writeFileSync(path.join(publicDir, 'og-image-1200x630.svg'), ogSVG);

  console.log('SVGs generated successfully in /public');

  // Generate PNGs using sharp with alpha channel transparency preserved
  await sharp(Buffer.from(faviconSVG)).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png'));
  await sharp(Buffer.from(faviconSVG)).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(Buffer.from(appleTouchSVG)).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Header Logos (Transparent PNGs)
  await sharp(Buffer.from(darkSVG)).resize(520, 120).png().toFile(path.join(publicDir, 'logo-header-dark.png'));
  await sharp(Buffer.from(darkSVG)).resize(1040, 240).png().toFile(path.join(publicDir, 'logo-header-dark@2x.png'));

  await sharp(Buffer.from(lightSVG)).resize(520, 120).png().toFile(path.join(publicDir, 'logo-header-light.png'));
  await sharp(Buffer.from(lightSVG)).resize(1040, 240).png().toFile(path.join(publicDir, 'logo-header-light@2x.png'));

  // Default logo.png as alias to high-res light logo
  await sharp(Buffer.from(lightSVG)).resize(520, 120).png().toFile(path.join(publicDir, 'logo.png'));

  // OpenGraph Image
  await sharp(Buffer.from(ogSVG)).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image-1200x630.png'));
  await sharp(Buffer.from(ogSVG)).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image.png'));

  console.log('All PNG, SVG, and Favicon assets successfully built in /public!');
}

buildAssets().catch((err) => {
  console.error('Asset build failed:', err);
  process.exit(1);
});
