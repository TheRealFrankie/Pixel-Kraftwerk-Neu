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
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

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
    linkTextVariants: ['KI-Chatbots in', 'Digitale Kundenassistenz für', 'KI-Chatbots für'],
  },
  {
    slug: 'telefonassistenten',
    label: 'Telefonassistenten',
    linkTextVariants: ['Telefonassistenten in', 'Telefonische Kundenassistenz für', 'Telefonassistenten für'],
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
