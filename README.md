# Kundli Yog Calculator — Classical Vedic Astrology Ephemeris & Yoga Analyzer

Kundli Yog Calculator (https://www.kundliyogcalculator.com) is a high-performance, privacy-first Vedic Astrology platform computing auspicious alignments (Raj Yog, Dhan Yog, Panch Mahapurusha) using the Chitrapaksha Lahiri Sidereal Ayanamsa.

---

## 🚀 Google Indexing & Search Engine Files in This Repository

This repository includes a complete suite of files specifically built for **Googlebot, Bingbot, and AI Search Crawlers**:

| File Path | Purpose for Google & Search Crawlers |
| :--- | :--- |
| `public/robots.txt` | Directs Googlebot and search spiders to index all pages and points to the sitemap. |
| `public/sitemap.xml` | Comprehensive XML index of all 25+ canonical URLs with `<lastmod>`, `<changefreq>`, and `<priority>`. |
| `public/feed.xml` | **RSS 2.0 Feed** linked in `<head>` via `<link rel="alternate" type="application/rss+xml">` for fast-cadence crawl detection. |
| `public/llms.txt` | Structured guide for AI search engines (Google Search Generative Experience, Perplexity, Copilot). |
| `public/e8f49a2b1c6d4e7f8a3b5c0d2e1f4a6b.txt` | **IndexNow protocol key** allowing instant crawl notifications to search engines. |
| `public/google-site-verification-template.html` | Template for Google Search Console HTML file verification. |
| `scripts/prerender.ts` | Static pre-renderer producing fully crawled HTML files in `dist/` with 0ms client-side rendering delay. |
| `scripts/submit-indexnow.ts` | Direct API script to ping search engines immediately on deployment. |
| `.github/workflows/google-indexing.yml` | **GitHub Actions CI/CD** pipeline that builds static pages and automatically notifies crawlers on every push. |
| `vercel.json` | Production HTTP headers configuring correct XML/plain MIME types, gzip compression, and cache headers. |

---

## 🔍 How to Verify in Google Search Console (GSC)

Google Search Console provides two primary verification methods for this repository:

### Method 1: HTML Tag (Fastest & Recommended)
1. In Google Search Console, select **URL prefix** (`https://www.kundliyogcalculator.com`) or **Domain**.
2. Under "Verification method", select **HTML tag**.
3. Copy the `content` attribute string:
   ```html
   <meta name="google-site-verification" content="YOUR_TOKEN_HERE" />
   ```
4. Paste this meta tag inside `index.html` in the `<head>` section, commit, and push to GitHub.
5. In GSC, click **Verify**.

### Method 2: HTML File Upload
1. In Google Search Console, select **HTML file**.
2. Download the verification file (e.g., `google1234567890abcdef.html`).
3. Copy this file into the `public/` directory of this repository:
   ```bash
   cp ~/Downloads/google1234567890abcdef.html public/
   ```
4. Commit and push to GitHub. Once deployed, verify that `https://www.kundliyogcalculator.com/google1234567890abcdef.html` opens.
5. In GSC, click **Verify**.

---

## 📡 Submitting Sitemaps to Google

Once verified in GSC:
1. Navigate to **Sitemaps** in the left sidebar of Google Search Console.
2. Under "Add a new sitemap", enter:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.
4. *(Optional & Recommended)* Also submit the RSS feed:
   ```text
   feed.xml
   ```
   Google Search Console officially accepts RSS 2.0 feeds as responsive sitemaps for rapid re-crawling.

---

## ⚡ Triggering Instant Search Engine Crawls

Whenever you push new content or yoga definitions to this repository:
```bash
# Submit all 25+ URLs instantly to Bing, Yandex, and IndexNow crawlers:
npm run ping:indexnow
```
Googlebot will also be notified automatically via the `.github/workflows/google-indexing.yml` GitHub Action workflow whenever code is merged to `main`.

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Build production assets and prerender all static SEO routes
npm run build

# Preview production build locally
npm run preview
```
