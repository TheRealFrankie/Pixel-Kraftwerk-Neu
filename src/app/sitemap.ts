import type { MetadataRoute } from 'next';
import { LEISTUNGSGEBIETE_SLUGS } from '@/data/leistungsgebiete';
import { SERVICE_SLUGS } from '@/data/services';

export const dynamic = 'force-static';
const baseUrl = 'https://pixelkraftwerk-ai.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date('2026-03-06');
  const regionServiceEntries: MetadataRoute.Sitemap = [];
  for (const region of LEISTUNGSGEBIETE_SLUGS) {
    for (const service of SERVICE_SLUGS) {
      regionServiceEntries.push({
        url: baseUrl + `/leistungsgebiete/${region}/${service}`,
        lastModified: lastMod,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: lastMod, changeFrequency: 'weekly', priority: 1 },
    { url: baseUrl + '/ueber-uns', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/kontakt', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/leistungen', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/ki-chatbots', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/telefonassistenten', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/automatisierungen', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/webseite', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/seo-top-3-in-google', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/leistungsgebiete', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    ...LEISTUNGSGEBIETE_SLUGS.map((slug) => ({
      url: baseUrl + `/leistungsgebiete/${slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...regionServiceEntries,
    { url: baseUrl + '/haeufige-fragen', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/impressum', lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
    { url: baseUrl + '/agb', lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
    { url: baseUrl + '/datenschutz', lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
  ];
  return staticPages;
}
