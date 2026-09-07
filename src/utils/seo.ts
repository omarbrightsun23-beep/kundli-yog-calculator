/**
 * SEO & Head Management Utility
 * Updates document title, meta descriptions, canonical URLs, and Open Graph tags
 * dynamically so Googlebot and search engines can properly index deep pages,
 * yoga encyclopedia guides, and legal pages without canonical conflicts or soft 404s.
 */

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
}

export const DEFAULT_TITLE = 'Kundli Yog — Free Vedic Kundli Yog Calculator & Chart Analyzer';
export const DEFAULT_DESCRIPTION = 'Free online Kundli Yog calculator and analyzer. Discover and check all auspicious Kundli Yog combinations in your birth chart with Lahiri Sidereal ephemeris, planetary strength scoring, and Vimshottari Dasha timeline.';
export const DOMAIN = 'https://www.kundliyogcalculator.com';

export const DEFAULT_SEO: SEOProps = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  canonicalPath: '/',
  canonicalUrl: 'https://www.kundliyogcalculator.com/',
  ogType: 'website'
};

export function updatePageSEO(seo?: Partial<SEOProps> & { noindex?: boolean }) {
  const title = seo?.title || DEFAULT_TITLE;
  const description = seo?.description || DEFAULT_DESCRIPTION;
  let fullCanonical = seo?.canonicalUrl;
  
  if (!fullCanonical) {
    const canonicalPath = seo?.canonicalPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
    if (canonicalPath === '/' || !canonicalPath) {
      fullCanonical = `${DOMAIN}/`;
    } else {
      fullCanonical = `${DOMAIN}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(/\/+$/, '');
    }
  }

  // 1. Document Title
  document.title = title;

  // 2. Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', fullCanonical);

  // 4. Meta Robots Tag (Index/Follow vs Noindex)
  let robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    robots = document.createElement('meta');
    robots.setAttribute('name', 'robots');
    document.head.appendChild(robots);
  }
  if (seo?.noindex) {
    robots.setAttribute('content', 'noindex, follow');
  } else {
    robots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  // 5. Open Graph Meta Tags
  updateMeta('property', 'og:title', title);
  updateMeta('property', 'og:description', description);
  updateMeta('property', 'og:url', fullCanonical);
  updateMeta('property', 'og:type', seo?.ogType || 'website');

  // 6. Twitter Card Meta Tags
  updateMeta('name', 'twitter:title', title);
  updateMeta('name', 'twitter:description', description);
  updateMeta('name', 'twitter:url', fullCanonical);
}

function updateMeta(attrName: 'name' | 'property', attrVal: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
