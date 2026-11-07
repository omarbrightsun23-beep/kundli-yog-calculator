import fs from 'node:fs';
import path from 'node:path';
import { YOGA_ENCYCLOPEDIA } from '../src/data/yogaEncyclopedia';
import { FORMATION_IMAGE_ALT, formationImageSrc } from '../src/data/formationImages';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');
const DOMAIN = 'https://www.kundliyogcalculator.com';

interface RouteSEO {
  path: string;
  title: string;
  description: string;
  heading: string;
  contentHtml: string;
  schemaType?: string;
}

const STATIC_ROUTES: RouteSEO[] = [
  // 1. Legal / Informational pages
  {
    path: '/about-us',
    title: 'About KundliYog — Classical Vedic Astrology Heritage & Ephemeris',
    description: 'Learn about KundliYog and our dedication to Parashari Jyotish principles, Chitrapaksha Lahiri ephemeris, and 100% client-side privacy.',
    heading: 'About KundliYog',
    contentHtml: `
      <h2>Classical Jyotish Ephemeris & Research</h2>
      <p>KundliYog was established to bridge ancient Parashari astronomical sciences with modern computational precision. We adhere strictly to the Chitrapaksha Lahiri Ayanamsa and Parashari house principles from Brihat Parashara Hora Shastra.</p>
      <p>Our platform executes 100% of astrological planetary calculations directly inside the user's browser, ensuring absolute privacy of personal birth records with zero database storage.</p>
      <p><a href="/#calculator">&larr; Return to Free Kundli Yog Calculator</a> &bull; <a href="/sitemap">Browse Complete Sitemap</a></p>
    `
  },
  {
    path: '/contact-us',
    title: 'Contact Us — KundliYog Astrology Research & Support',
    description: 'Contact the KundliYog research team for classical Jyotish feedback, ephemeris inquiries, and educational collaborations.',
    heading: 'Contact KundliYog Support & Research Team',
    contentHtml: `
      <h2>Academic & Technical Inquiries</h2>
      <p>Have questions regarding planetary mathematical calculations, ephemeris accuracy, or classical yoga interpretations? Reach out to our research desk at support@kundliyogcalculator.com.</p>
      <p><a href="/#calculator">&larr; Return to Free Kundli Yog Calculator</a></p>
    `
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy — 100% Client-Side Ephemeris & Zero Storage | KundliYog',
    description: 'Read the KundliYog privacy policy: zero database persistence of user birth details, zero tracking cookies, pure client-side Jyotish calculations.',
    heading: 'Privacy Policy',
    contentHtml: `
      <h2>Zero-Storage Ephemeris Architecture</h2>
      <p>At KundliYog, your privacy is inviolable. When you input your date, time, and coordinates of birth, calculations are processed ephemerally in your local browser session using JavaScript. We do not store, log, or transmit your birth data to any external server or database.</p>
      <p><a href="/#calculator">&larr; Return to Free Kundli Yog Calculator</a></p>
    `
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions — KundliYog Vedic Astrology',
    description: 'Terms and conditions for utilizing KundliYog free Vedic astrology analysis and ephemeris calculators.',
    heading: 'Terms & Conditions',
    contentHtml: `
      <h2>Educational & Cultural Research Usage</h2>
      <p>KundliYog provides astrological calculations for cultural, spiritual, and educational enlightenment. While calculated with high astronomical precision according to classical scriptures, astrological interpretations should not substitute for licensed professional, medical, or financial counsel.</p>
      <p><a href="/#calculator">&larr; Return to Free Kundli Yog Calculator</a></p>
    `
  },
  {
    path: '/disclaimer',
    title: 'Astrological Guidance Disclaimer — KundliYog',
    description: 'Astrological guidance disclaimer for KundliYog horoscope calculations and yoga evaluations.',
    heading: 'Astrological Guidance Disclaimer',
    contentHtml: `
      <h2>Scriptural & Philosophical Context</h2>
      <p>Astrological yogas reflect cosmic potentials and archetypal tendencies as articulated in Vedic scriptures. Karmic realization depends on conscious effort, spiritual discipline, and active planetary periods (Dashas).</p>
      <p><a href="/#calculator">&larr; Return to Free Kundli Yog Calculator</a></p>
    `
  },
  {
    path: '/sitemap',
    title: 'Complete Sitemap — KundliYog Vedic Astrology Directory',
    description: 'Explore the full sitemap of classical yogas, doshas, ephemeris calculations, and Vedic astrology resources on KundliYog.',
    heading: 'Complete KundliYog Directory & Index',
    contentHtml: `
      <h2>Full Index of Classical Kundli Yogas</h2>
      <ul>
        ${YOGA_ENCYCLOPEDIA.map((y) => `<li><a href="/yoga/${y.slug}">${escapeHtml(y.name)} (${escapeHtml(y.sanskritName)})</a> — ${escapeHtml(y.category)}</li>`).join('')}
      </ul>
      <p><a href="/#calculator">&larr; Return to Free Kundli Yog Calculator</a></p>
    `
  }
];

// Add all 18 Encyclopedia Yogas with internal interlinks
for (const yoga of YOGA_ENCYCLOPEDIA) {
  const cleanTitle = yoga.name.includes('Kundli')
    ? `${yoga.name} — Formation, Meaning & Activation | KundliYog`
    : `${yoga.name} in Kundli — Formation, Meaning & Activation | KundliYog`;

  // Compute 3-4 related yogas for internal link crawling
  const relatedYogas = YOGA_ENCYCLOPEDIA
    .filter((other) => other.slug !== yoga.slug)
    .map((other) => {
      let score = 0;
      if (other.category === yoga.category) score += 4;
      const commonPlanets = other.planetsInvolved.filter((p) => yoga.planetsInvolved.includes(p));
      score += commonPlanets.length * 2;
      return { yoga: other, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((item) => item.yoga);

  STATIC_ROUTES.push({
    path: `/yoga/${yoga.slug}`,
    title: cleanTitle,
    description: `Complete classical guide to ${yoga.name} (${yoga.sanskritName}) in Vedic Astrology. Learn formation rules, planetary combinations, cancelation factors (Yoga Bhanga), and Dasha timing.`,
    heading: `${yoga.name} (${yoga.sanskritName})`,
    schemaType: 'Article',
    contentHtml: `
      <article>
        <h2>Classical Parashari Overview</h2>
        <p><strong>Category:</strong> ${escapeHtml(yoga.category)}</p>
        <p><strong>Scriptural Source:</strong> ${escapeHtml(yoga.classicalSource)}</p>
        <p><strong>Planets Involved:</strong> ${escapeHtml(yoga.planetsInvolved.join(', '))}</p>
        
        <h3>Formation Rule</h3>
        <p>${escapeHtml(yoga.formationRule)}</p>
        ${FORMATION_IMAGE_ALT[yoga.slug] ? `<img src="${formationImageSrc(yoga.slug)}" alt="${escapeHtml(FORMATION_IMAGE_ALT[yoga.slug])}" width="1200" height="1200" loading="lazy" decoding="async">` : ''}
        
        <h3>Philosophical Meaning &amp; Shloka Summary</h3>
        <p>${escapeHtml(yoga.shlokaSummary)}</p>
        
        <h3>Core Life Effects &amp; Auspicious Manifestations</h3>
        <ul>
          ${yoga.effects.map((e) => `<li>${escapeHtml(e)}</li>`).join('')}
        </ul>
        
        <h3>Yoga Bhanga (Cancellation &amp; Invalidation Factors)</h3>
        <ul>
          ${yoga.invalidationConditions.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}
        </ul>
        
        <h3>Vimshottari Dasha Timing &amp; Fruition</h3>
        <p>${escapeHtml(yoga.dashaActivation)}</p>
        
        ${yoga.celebrityExamples && yoga.celebrityExamples.length > 0 ? `
          <h3>Notable Historical &amp; Contemporary Horoscopes</h3>
          <p>${escapeHtml(yoga.celebrityExamples.join(', '))}</p>
        ` : ''}

        <h3>Related Classical Yogas in Vedic Astrology</h3>
        <p>Explore complementary planetary combinations and auspicious yogas:</p>
        <ul>
          ${relatedYogas.map((r) => `<li><a href="/yoga/${r.slug}"><strong>${escapeHtml(r.name)}</strong> (${escapeHtml(r.sanskritName)})</a> — ${escapeHtml(r.category)}</li>`).join('')}
        </ul>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #E2DCB9;" />
        <p><a href="/#calculator"><strong>Calculate this yoga in your personal Janam Kundli with our Free Kundli Yog Calculator &rarr;</strong></a></p>
      </article>
    `
  });
}

function generatePrerenderedPages() {
  if (!fs.existsSync(BASE_HTML_PATH)) {
    console.error('Base index.html not found at', BASE_HTML_PATH);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf-8');

  console.log(`Prerendering ${STATIC_ROUTES.length} static SEO routes with interlinked crawl hierarchy...`);

  for (const route of STATIC_ROUTES) {
    const targetDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const fullCanonicalUrl = `${DOMAIN}${route.path}`;

    let pageHtml = baseHtml;

    // 1. Replace Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${escapeHtml(route.title)}</title>`
    );

    // 2. Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(route.description)}" />`
    );

    // 3. Replace Canonical
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${fullCanonicalUrl}" />`
    );

    // 4. Replace OG Title, Description, and URL
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${fullCanonicalUrl}" />`
    );

    // 5. Replace Twitter Title, Description, and URL
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:url" content="${fullCanonicalUrl}" />`
    );

    // 6. Inject rich crawlable HTML content for Search Engine Bots directly in the initial HTML
    const botContentBlock = `
      <div id="prerendered-content" style="max-width: 900px; margin: 0 auto; padding: 24px; font-family: sans-serif; line-height: 1.6; color: #2C3138;">
        <h1 style="color: #003865; font-size: 28px; margin-bottom: 12px;">${escapeHtml(route.heading)}</h1>
        <p style="color: #828892; font-size: 14px; margin-bottom: 24px;">Published by KundliYog Classical Research Desk &bull; Updated September 2026</p>
        ${route.contentHtml}
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #E2DCB9;" />
        <p><a href="/">&larr; Back to Free Kundli Yog Calculator</a> &bull; <a href="/sitemap">All Yogas Directory</a> &bull; <a href="/feed.xml">RSS Feed</a></p>
      </div>
    `;

    // Replace the noscript block with specific prerendered markup for this route
    pageHtml = pageHtml.replace(
      /<noscript>[\s\S]*?<\/noscript>/i,
      `<noscript>${botContentBlock}</noscript>`
    );

    fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf-8');
  }

  // 7. Generate true 404.html for Vercel
  const notFoundHtml = baseHtml
    .replace(/<title>.*?<\/title>/i, '<title>404 — Page Not Found | KundliYog</title>')
    .replace(
      /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
      '<meta name="robots" content="noindex, nofollow" />'
    )
    .replace(
      /<noscript>[\s\S]*?<\/noscript>/i,
      `<noscript>
        <div style="text-align: center; padding: 48px; font-family: sans-serif;">
          <h1>404 — Astrological Resource Not Found</h1>
          <p>The requested horoscope page or yoga guide does not exist.</p>
          <a href="/">Go to Kundli Yog Calculator</a>
        </div>
      </noscript>`
    );

  fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf-8');

  // 8. Generate RSS 2.0 Feed
  generateRssFeed();

  // 9. Generate XML Sitemap with exact canonical https://www.kundliyogcalculator.com/
  generateSitemapXml();

  // 10. Generate llms.txt for AI Crawlers
  generateLlmsTxt();

  // 11. Copy IndexNow key file if present
  const indexNowKeyFile = 'e8f49a2b1c6d4e7f8a3b5c0d2e1f4a6b.txt';
  const pubKey = path.join(PUBLIC_DIR, indexNowKeyFile);
  if (fs.existsSync(pubKey)) {
    fs.copyFileSync(pubKey, path.join(DIST_DIR, indexNowKeyFile));
  }

  console.log(`Successfully completed prerendering ${STATIC_ROUTES.length} routes, sitemap.xml, RSS feed, llms.txt, and 404.html!`);
}

function generateSitemapXml() {
  const now = new Date().toISOString().split('T')[0];
  const urls = [
    `  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,
    ...STATIC_ROUTES.map((route) => {
      const priority = route.path.startsWith('/yoga/') ? '0.8' : (route.path === '/sitemap' ? '0.7' : '0.5');
      const changefreq = route.path.startsWith('/yoga/') ? 'weekly' : 'monthly';
      return `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent, 'utf-8');
  console.log('✅ Generated sitemap.xml in dist/ and public/ with canonical https://www.kundliyogcalculator.com/');
}

function generateRssFeed() {
  const now = new Date().toUTCString();
  const items = STATIC_ROUTES.map((route) => {
    return `    <item>
      <title>${escapeXml(route.title)}</title>
      <link>${DOMAIN}${route.path}</link>
      <guid isPermaLink="true">${DOMAIN}${route.path}</guid>
      <description>${escapeXml(route.description)}</description>
      <pubDate>${now}</pubDate>
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kundli Yog Calculator — Classical Vedic Astrology &amp; Ephemeris Updates</title>
    <link>${DOMAIN}</link>
    <description>Discover your auspicious Kundli Yog alignments: Raj Yog, Dhan Yog, Panch Mahapurusha with Chitrapaksha Lahiri ephemeris.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${DOMAIN}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  fs.writeFileSync(path.join(DIST_DIR, 'feed.xml'), rss, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'feed.xml'), rss, 'utf-8');
  console.log('✅ Generated feed.xml (RSS 2.0) in dist/ and public/');
}

function generateLlmsTxt() {
  const content = `# Kundli Yog Calculator (${DOMAIN})
> Classical Vedic Astrology (Jyotish) Ephemeris and Kundli Yog Calculator & Encyclopedia

Kundli Yog Calculator is a free, privacy-first Vedic Astrology platform computing auspicious and inauspicious planetary alignments (Yogas & Doshas) according to classical Brihat Parashara Hora Shastra principles using the Chitrapaksha Lahiri Sidereal Ayanamsa.

## Primary Tools & Calculators
- [Kundli Yog Calculator](${DOMAIN}/#calculator): Interactive birth chart calculator with planetary longitude ephemeris, house cusp analysis, yoga strength meters, and Vimshottari Dasha timeline.

## Classical Parashari Yoga Encyclopedia
${YOGA_ENCYCLOPEDIA.map((y) => `- [${y.name} (${y.sanskritName})](${DOMAIN}/yoga/${y.slug}): ${y.formationRule.replace(/\n/g, ' ')}`).join('\n')}

## Core Information & Legal
- [About Us](${DOMAIN}/about-us): Mission, Chitrapaksha Lahiri ephemeris background, and astronomical principles.
- [Privacy Policy](${DOMAIN}/privacy-policy): Zero database persistence guarantee; 100% in-browser client-side computations.
- [Astrological Disclaimer](${DOMAIN}/disclaimer): Cultural, spiritual, and educational scope of Jyotish interpretations.
- [Complete Sitemap](${DOMAIN}/sitemap): Comprehensive directory of all astrological guides.
`;

  fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), content, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), content, 'utf-8');
  console.log('✅ Generated llms.txt in dist/ and public/');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

generatePrerenderedPages();
