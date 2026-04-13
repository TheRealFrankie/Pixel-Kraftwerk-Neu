import { LEISTUNGSGEBIETE_SLUGS } from '@/data/leistungsgebiete';
import { SERVICE_SLUGS } from '@/data/services';

const baseUrl = 'https://pixelkraftwerk-ai.com';
const lastMod = '2026-03-06';

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
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
    { url: baseUrl, lastModified: lastMod, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/ueber-uns`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/kontakt`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/leistungen`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ki-chatbots`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/telefonassistenten`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/automatisierungen`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/webseite`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/seo-top-3-in-google`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/leistungsgebiete`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
  ]);
}

export function buildRegionalSitemap(): string {
  const entries: SitemapEntry[] = [];

  for (const region of LEISTUNGSGEBIETE_SLUGS) {
    entries.push({
      url: `${baseUrl}/leistungsgebiete/${region}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  for (const region of LEISTUNGSGEBIETE_SLUGS) {
    for (const service of SERVICE_SLUGS) {
      entries.push({
        url: `${baseUrl}/leistungsgebiete/${region}/${service}`,
        lastModified: lastMod,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return toXml(entries);
}

export function buildLegalSitemap(): string {
  return toXml([
    { url: `${baseUrl}/haeufige-fragen`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/impressum`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/agb`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/datenschutz`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
  ]);
}
