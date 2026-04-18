import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';
import { SERVICE_SLUGS } from '@/data/services';
import {
  SERVICE_SUBPAGES,
  SERVICE_GLOBAL_ROUTE_PREFIX,
  SERVICES_WITH_SUBPAGES,
  globalSubpageSitemapPriority,
} from '@/data/serviceSubpages';

const baseUrl = 'https://pixelkraftwerk-ai.com';

/** Aktuelles Datum (Build/Request) für Content-Sitemaps */
function contentLastMod(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Rechtstexte ändern sich selten – konservatives lastmod spart Crawl-Signale */
const legalLastMod = '2026-01-15';

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}

const TIER_BOUNDARIES = { core: 13, tier1: 23, tier2: 33, tier3: 43 };

const LEIPZIG_SLUG = 'leipzig';

function regionPriority(index: number, isServicePage: boolean): number {
  const base =
    index < TIER_BOUNDARIES.core
      ? 0.8
      : index < TIER_BOUNDARIES.tier1
        ? 0.7
        : index < TIER_BOUNDARIES.tier2
          ? 0.6
          : index < TIER_BOUNDARIES.tier3
            ? 0.5
            : 0.4;
  return isServicePage ? Math.max(base - 0.1, 0.3) : base;
}

/** Leipzig als Hauptmarkt: höhere Priorität als andere Städte gleichen Index */
function cityRegionPriority(citySlug: string, index: number, isServicePage: boolean): number {
  if (citySlug === LEIPZIG_SLUG) {
    return isServicePage ? 0.8 : 0.9;
  }
  return regionPriority(index, isServicePage);
}

/** Regionale Subpages (Topic): Leipzig angehoben, sonst leicht unter Region+Service */
function regionalSubpagePriority(citySlug: string, cityIndex: number): number {
  if (citySlug === LEIPZIG_SLUG) {
    return 0.75;
  }
  return Math.max(regionPriority(cityIndex, true) - 0.1, 0.2);
}

/** Stadt- und Service-Landingpages: wie bisher, Tier-2+ monatlich */
function regionalLandingChangeFreq(cityIndex: number): 'weekly' | 'monthly' {
  return cityIndex < TIER_BOUNDARIES.tier1 ? 'weekly' : 'monthly';
}

/** Tiefe regionale Subpages (Topic): ab Tier-2 yearly – spart Crawl-Budget */
function regionalSubpageChangeFreq(cityIndex: number): 'weekly' | 'yearly' {
  return cityIndex < TIER_BOUNDARIES.tier1 ? 'weekly' : 'yearly';
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
  const lmContent = contentLastMod();
  const sitemaps: { loc: string; lastmod: string }[] = [
    { loc: `${baseUrl}/sitemap-core.xml`, lastmod: lmContent },
    { loc: `${baseUrl}/sitemap-regional.xml`, lastmod: lmContent },
    { loc: `${baseUrl}/sitemap-subpages.xml`, lastmod: lmContent },
    { loc: `${baseUrl}/sitemap-legal.xml`, lastmod: legalLastMod },
  ];

  const entries = sitemaps
    .map((s) => `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`;
}

export function buildCoreSitemap(): string {
  const lm = contentLastMod();
  const entries: SitemapEntry[] = [
    { url: baseUrl, lastModified: lm, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/ki-chatbots`, lastModified: lm, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/telefonassistenten`, lastModified: lm, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/automatisierungen`, lastModified: lm, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/webseite`, lastModified: lm, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/seo-top-3-in-google`, lastModified: lm, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/crm-systeme`, lastModified: lm, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/leistungen`, lastModified: lm, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: lm, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/leistungsgebiete`, lastModified: lm, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/haeufige-fragen`, lastModified: lm, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ueber-uns`, lastModified: lm, changeFrequency: 'monthly', priority: 0.7 },
  ];

  for (const service of SERVICES_WITH_SUBPAGES) {
    const prefix = SERVICE_GLOBAL_ROUTE_PREFIX[service] ?? `/${service}`;
    for (const sub of SERVICE_SUBPAGES[service]) {
      entries.push({
        url: `${baseUrl}${prefix}/${sub.slug}`,
        lastModified: lm,
        changeFrequency: 'monthly',
        priority: globalSubpageSitemapPriority(sub.slug),
      });
    }
  }

  return toXml(entries);
}

export function buildRegionalSitemap(): string {
  const lm = contentLastMod();
  const entries: SitemapEntry[] = [];

  LEISTUNGSGEBIETE_CITIES.forEach((city, i) => {
    const cf = regionalLandingChangeFreq(i);
    entries.push({
      url: `${baseUrl}/leistungsgebiete/${city.slug}`,
      lastModified: lm,
      changeFrequency: cf,
      priority: cityRegionPriority(city.slug, i, false),
    });
  });

  LEISTUNGSGEBIETE_CITIES.forEach((city, i) => {
    const cf = regionalLandingChangeFreq(i);
    for (const service of SERVICE_SLUGS) {
      entries.push({
        url: `${baseUrl}/leistungsgebiete/${city.slug}/${service}`,
        lastModified: lm,
        changeFrequency: cf,
        priority: cityRegionPriority(city.slug, i, true),
      });
    }
  });

  return toXml(entries);
}

export function buildSubpageSitemap(): string {
  const lm = contentLastMod();
  const entries: SitemapEntry[] = [];

  LEISTUNGSGEBIETE_CITIES.forEach((city, i) => {
    const cf = regionalSubpageChangeFreq(i);
    for (const service of SERVICES_WITH_SUBPAGES) {
      for (const sub of SERVICE_SUBPAGES[service]) {
        entries.push({
          url: `${baseUrl}/leistungsgebiete/${city.slug}/${service}/${sub.slug}`,
          lastModified: lm,
          changeFrequency: cf,
          priority: regionalSubpagePriority(city.slug, i),
        });
      }
    }
  });

  return toXml(entries);
}

export function buildLegalSitemap(): string {
  return toXml([
    { url: `${baseUrl}/impressum`, lastModified: legalLastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: legalLastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: legalLastMod, changeFrequency: 'yearly', priority: 0.3 },
  ]);
}
