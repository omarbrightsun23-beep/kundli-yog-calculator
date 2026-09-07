import https from 'node:https';
import { YOGA_ENCYCLOPEDIA } from '../src/data/yogaEncyclopedia';

const HOST = 'www.kundliyogcalculator.com';
const KEY = 'e8f49a2b1c6d4e7f8a3b5c0d2e1f4a6b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/about-us`,
  `https://${HOST}/contact-us`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/terms-and-conditions`,
  `https://${HOST}/disclaimer`,
  `https://${HOST}/sitemap`,
  ...YOGA_ENCYCLOPEDIA.map((y) => `https://${HOST}/yoga/${y.slug}`)
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST
});

console.log(`Submitting ${URL_LIST.length} URLs to IndexNow API for fast search engine crawl notification...`);

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  },
  (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`✅ IndexNow successfully accepted ${URL_LIST.length} URLs (HTTP ${res.statusCode})!`);
        console.log('Search engines (Bing, Yandex, Seznam, Naver) notified for immediate crawl.');
      } else {
        console.log(`IndexNow returned status ${res.statusCode}: ${data}`);
      }
    });
  }
);

req.on('error', (err) => {
  console.warn('IndexNow submission note (network):', err.message);
});

req.write(payload);
req.end();
