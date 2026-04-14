import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';
import { SERVICE_SLUGS } from '@/data/services';

const baseUrl = 'https://pixelkraftwerk-ai.com';
const lastMod = '2026-04-14';

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}

const TIER_BOUNDARIES = { core: 13, tier1: 23, tier2: 33, tier3: 43 };

function regionPriority(index: number, isServicePage: boolean): number {
  const base =
    index < TIER_BOUNDARIES.core ? 0.8 :
    index < TIER_BOUNDARIES.tier1 ? 0.7 :
    index < TIER_BOUNDARIES.tier2 ? 0.6 :
    index < TIER_BOUNDARIES.tier3 ? 0.5 : 0.4;
  return isServicePage ? Math.max(base - 0.1, 0.3) : base;
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastModified}</lastmod>\n    <changefreq>${e.changeFrequency}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export function buildSitemapIndex(): string {
  const sitemaps = [
    `${baseUrl}/sitemap-core.xml`,
    `${baseUrl}/sitemap-regional.xml`,
    `${baseUrl}/sitemap-legal.xml`,
  ];

  const entries = sitemaps
    .map(
      (loc) =>
        `  <sitemap>\n    <loc>${loc}</loc>\n    <lastmod>${lastMod}</lastmod>\n  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`;
}

export function buildCoreSitemap(): string {
  return toXml([
    { url: baseUrl, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/ki-chatbots`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/telefonassistenten`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/automatisierungen`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/webseite`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/seo-top-3-in-google`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/leistungsgebiete`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ueber-uns`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
  ]);
}

export function buildRegionalSitemap(): string {
  const entries: SitemapEntry[] = [];

  LEISTUNGSGEBIETE_CITIES.forEach((city, i) => {
    entries.push({
      url: `${baseUrl}/leistungsgebiete/${city.slug}`,
      lastModified: lastMod,
      changeFrequency: i < TIER_BOUNDARIES.tier1 ? 'weekly' : 'monthly',
      priority: regionPriority(i, false),
    });
  });

  LEISTUNGSGEBIETE_CITIES.forEach((city, i) => {
    for (const service of SERVICE_SLUGS) {
      entries.push({
        url: `${baseUrl}/leistungsgebiete/${city.slug}/${service}`,
        lastModified: lastMod,
        changeFrequency: i < TIER_BOUNDARIES.tier1 ? 'weekly' : 'monthly',
        priority: regionPriority(i, true),
      });
    }
  });

  return toXml(entries);
}

export function buildLegalSitemap(): string {
  return toXml([
    { url: `${baseUrl}/haeufige-fragen`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
  ]);
}
