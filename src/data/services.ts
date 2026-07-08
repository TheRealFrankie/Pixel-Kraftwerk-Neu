/**
 * Zentrale Service-Daten für URLs, Breadcrumbs und Verlinkung.
 * Single Source of Truth für /leistungsgebiete/[region]/[service] und globale Service-Routen.
 */
export const SERVICE_SLUGS = [
  'ki-chatbots',
  'telefonassistenten',
  'automatisierungen',
  'webseiten',
  'seo-top-3',
  'crm-systeme',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** Kurzlabel für Title/H1 (z. B. „KI-Chatbots“, „SEO-Agentur“) – Single Source of Truth für Titles UND H1/H2 */
export const SERVICE_TITLE_LABELS: Record<ServiceSlug, string> = {
  'ki-chatbots': 'KI-Chatbots',
  telefonassistenten: 'KI-Telefonassistenten',
  automatisierungen: 'Automatisierungen',
  webseiten: 'Webdesign',
  'seo-top-3': 'SEO-Agentur',
  'crm-systeme': 'CRM-Systeme',
};

/** Keyword-Liste für Title/H2 (sekundäre Kategorien & pertinente Services) */
export const SERVICE_TITLE_KEYWORDS: Record<ServiceSlug, string> = {
  'ki-chatbots': 'digitale Kundenassistenz, Website-Chatbot oder KI-Chatbot',
  telefonassistenten: 'KI-Telefonassistenz, Anrufannahme oder Telefonservice',
  automatisierungen: 'Leadgenerierung, Terminbuchung oder Prozessautomatisierung',
  webseiten: 'moderne Website, professionelle Unternehmenswebseite oder individuelles Webdesign',
  'seo-top-3': 'Local SEO, Google-Maps-Ranking oder Top-3-Platzierungen',
  'crm-systeme': 'Kundenverwaltung, Lead-Management oder Vertriebspipeline',
};

export interface ServiceInfo {
  slug: ServiceSlug;
  /** Kurzlabel für Breadcrumbs und Listen (z. B. „KI-Chatbots“, „Telefonassistenten“) */
  label: string;
  /** Varianten für Linktext „[X] in [Stadt]“ / „[X] für [Stadt]“ – rotieren für Vielfalt */
  linkTextVariants: string[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'ki-chatbots',
    label: 'KI-Chatbots',
    linkTextVariants: [
      'KI-Chatbots in',
      'Digitale Kundenassistenz für Unternehmen in',
      'KI-Chatbots für Unternehmen in',
    ],
  },
  {
    slug: 'telefonassistenten',
    label: 'Telefonassistenten',
    linkTextVariants: [
      'Telefonassistenten in',
      'Telefonische Kundenassistenz für Unternehmen in',
      'Telefonassistenten für Unternehmen in',
    ],
  },
  {
    slug: 'automatisierungen',
    label: 'Anfragen, Vertrieb & Terminplanung',
    linkTextVariants: ['Automatisierungen in', 'Anfragen & Terminplanung in', 'Automatisierungen für'],
  },
  {
    slug: 'webseiten',
    label: 'Webseiten',
    linkTextVariants: ['Webseiten in', 'Webseiten für'],
  },
  {
    slug: 'seo-top-3',
    label: 'SEO: Top 3 in Google',
    linkTextVariants: ['SEO: Top 3 in Google in', 'Top 3 in Google für', 'SEO in'],
  },
  {
    slug: 'crm-systeme',
    label: 'CRM-Systeme',
    linkTextVariants: [
      'CRM-Systeme in',
      'CRM & Lead-Management für Unternehmen in',
      'CRM-Systeme für Unternehmen in',
    ],
  },
];

const slugToService = new Map(SERVICES.map((s) => [s.slug, s]));

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return slugToService.get(slug as ServiceSlug);
}

export function isValidServiceSlug(slug: string): slug is ServiceSlug {
  return SERVICE_SLUGS.includes(slug as ServiceSlug);
}

/** Linktext für „[Service] in [Stadt]“ mit Variation (z. B. für Index 0: „KI-Chatbots in Leipzig“) */
export function getRegionServiceLinkText(
  serviceSlug: ServiceSlug,
  cityName: string,
  variantIndex: number = 0
): string {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return `${serviceSlug} in ${cityName}`;
  const variant = service.linkTextVariants[variantIndex % service.linkTextVariants.length];
  return `${variant} ${cityName}`;
}
