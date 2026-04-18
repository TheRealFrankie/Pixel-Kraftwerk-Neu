/**
 * Zentrale Registry aller Service-Subpages (Supporting Pages / Cluster Content).
 *
 * Jeder Eintrag gehoert zu einem Eltern-Service (Pillar Page).
 * Die Keys in SERVICE_SUBPAGES entsprechen den regionalen Service-Slugs
 * aus services.ts. Fuer die globalen Routen wird SERVICE_GLOBAL_ROUTE_PREFIX
 * genutzt, da einige Services abweichende globale URLs haben.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SubpageDefinition {
  slug: string;
  label: string;
  /** Primary keyword for SEO title generation */
  primaryKeyword: string;
  /** Keywords used in regional meta-title generation */
  titleKeywords: string;
}

export interface SubpageContentSection {
  heading: string;
  headingLevel: 'h2' | 'h3';
  paragraphs: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface SubpageFaqItem {
  q: string;
  a: string;
}

export interface SubpageLink {
  text: string;
  href: string;
}

export interface SubpageAreaLink {
  text: string;
  slug: string;
}

export interface SubpageProblemBlock {
  title: string;
  body: string;
  bullets?: string[];
}

export interface SubpageProblemSection {
  headline: string;
  lead: string;
  bullets: string[];
  tagline?: string;
  details?: SubpageProblemBlock[];
}

export interface SubpageSolutionBlock {
  title: string;
  intro?: string;
  bullets?: string[];
  footnote?: string;
}

export interface SubpageSolutionSection {
  headline: string;
  lead: string;
  primary: { title: string; bullets: string[] };
  blocks?: SubpageSolutionBlock[];
  tagline?: string;
}

export interface SubpageDefinitionSection {
  headline: string;
  lead: string;
  examples?: string[];
  blocks?: { title: string; body: string }[];
}

export interface SubpageFeaturesSection {
  headline: string;
  primaryList: string[];
  note?: string;
  groups?: { title: string; intro?: string; bullets: string[] }[];
}

export interface SubpageBenefit {
  icon?: string;
  title: string;
  description?: string;
}

export interface SubpageBenefitsSection {
  headline?: string;
  benefits: SubpageBenefit[];
}

export interface SubpageProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SubpageProcessSection {
  headline?: string;
  steps: SubpageProcessStep[];
}

export interface SubpageAudience {
  icon?: string;
  title: string;
  description?: string;
}

export interface SubpageAudienceSection {
  headline: string;
  criteria: string[];
  audiences: SubpageAudience[];
}

export interface SubpageRentalSection {
  headline: string;
  lead: string;
  points: string[];
  additional?: { title: string; bullets: string[] }[];
}

export interface SubpageMiniCta {
  headline: string;
  body?: string;
  buttonText: string;
}

export interface SubpageCrossSell {
  kicker?: string;
  title: string;
  body: string;
  ctaText: string;
  ctaHref: string;
}

export interface SubpageContent {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  imageAltTexts: string[];

  h1: string;
  /** Optional short subheadline shown between h1 and intro (like the main service page). */
  subheadline?: string;
  intro: string;
  /** Optional button label for the hero CTA. Falls back to a sensible default. */
  heroCtaText?: string;

  /** Optional structured sections (new, render like the main service page). */
  problem?: SubpageProblemSection;
  solution?: SubpageSolutionSection;
  definition?: SubpageDefinitionSection;
  features?: SubpageFeaturesSection;
  benefits?: SubpageBenefitsSection;
  process?: SubpageProcessSection;
  audiences?: SubpageAudienceSection;
  rental?: SubpageRentalSection;
  miniCta?: SubpageMiniCta;
  crossSell?: SubpageCrossSell;

  /** Existing free-form sections – rendered as deep-dive content blocks. */
  sections: SubpageContentSection[];
  faqs: SubpageFaqItem[];
  ctaText: string;

  parentServiceLink: SubpageLink;
  siblingSubpageLinks: SubpageLink[];
  crossServiceLinks: SubpageLink[];
  areaLinks: SubpageAreaLink[];
}

export interface RegionalSubpageContent {
  localHook?: string;
  localSection?: string[];
  localFaqs?: SubpageFaqItem[];
}

// ---------------------------------------------------------------------------
// Service ↔ global-route mapping (regional slug → global URL prefix)
// ---------------------------------------------------------------------------

export const SERVICE_GLOBAL_ROUTE_PREFIX: Record<string, string> = {
  automatisierungen: '/automatisierungen',
  'ki-chatbots': '/ki-chatbots',
  'crm-systeme': '/crm-systeme',
  'seo-top-3': '/seo-top-3-in-google',
};

/** Services that have subpages (subset of SERVICE_SLUGS) */
export const SERVICES_WITH_SUBPAGES = [
  'automatisierungen',
  'ki-chatbots',
  'telefonassistenten',
  'crm-systeme',
  'seo-top-3',
] as const;

export type ServiceWithSubpages = (typeof SERVICES_WITH_SUBPAGES)[number];

// ---------------------------------------------------------------------------
// Subpage definitions per service
// ---------------------------------------------------------------------------

export const SERVICE_SUBPAGES: Record<ServiceWithSubpages, SubpageDefinition[]> = {
  automatisierungen: [
    {
      slug: 'leadgenerierung',
      label: 'Leadgenerierung automatisieren',
      primaryKeyword: 'Leadgenerierung automatisieren',
      titleKeywords: 'Leadgenerierung, automatische Lead-Erfassung oder Lead-Qualifizierung',
    },
    {
      slug: 'terminbuchung',
      label: 'Terminbuchung automatisieren',
      primaryKeyword: 'Terminbuchung automatisieren',
      titleKeywords: 'automatische Terminbuchung, Online-Terminplanung oder Kalender-Automatisierung',
    },
    {
      slug: 'angebotsprozesse',
      label: 'Angebotsprozesse automatisieren',
      primaryKeyword: 'Angebotsprozesse automatisieren',
      titleKeywords: 'Angebotserstellung, Angebotsprozesse oder Angebotsautomatisierung',
    },
    {
      slug: 'email-automatisierung',
      label: 'E-Mail Automatisierung',
      primaryKeyword: 'E-Mail Automatisierung',
      titleKeywords: 'E-Mail-Automatisierung, automatische E-Mails oder E-Mail-Workflows',
    },
  ],

  'ki-chatbots': [
    {
      slug: 'website-chatbot',
      label: 'Website Chatbot',
      primaryKeyword: 'Website Chatbot',
      titleKeywords: 'Website-Chatbot, Homepage-Chat oder Live-Chat mit KI',
    },
    {
      slug: 'whatsapp-chatbot',
      label: 'WhatsApp Chatbot',
      primaryKeyword: 'WhatsApp Chatbot',
      titleKeywords: 'WhatsApp-Chatbot, WhatsApp-Automatisierung oder Messenger-Bot',
    },
    {
      slug: 'instagram-chatbot',
      label: 'Instagram Chatbot',
      primaryKeyword: 'Instagram Chatbot',
      titleKeywords: 'Instagram-Chatbot, Instagram-DM-Automatisierung oder Social-Media-Bot',
    },
    {
      slug: 'facebook-chatbot',
      label: 'Facebook Messenger Chatbot',
      primaryKeyword: 'Facebook Messenger Chatbot',
      titleKeywords: 'Facebook-Chatbot, Messenger-Bot oder Facebook-Messenger-Automatisierung',
    },
    {
      slug: 'telegram-chatbot',
      label: 'Telegram Chatbot',
      primaryKeyword: 'Telegram Chatbot',
      titleKeywords: 'Telegram-Chatbot, Telegram-Bot oder Telegram-Automatisierung',
    },
    {
      slug: 'faq-automatisierung',
      label: 'FAQ Automatisierung',
      primaryKeyword: 'FAQ Automatisierung',
      titleKeywords: 'FAQ-Automatisierung, automatische FAQ oder KI-gestützte Wissensdatenbank',
    },
  ],

  telefonassistenten: [
    {
      slug: 'ki-telefonassistent-inbound',
      label: 'KI Telefonassistent (Inbound)',
      primaryKeyword: 'KI Telefonassistent Inbound',
      titleKeywords: 'KI-Telefonassistent, Inbound-Anrufe oder automatische Anrufannahme',
    },
    {
      slug: 'ki-anrufsystem',
      label: 'KI Anrufsystem',
      primaryKeyword: 'KI Anrufsystem',
      titleKeywords: 'KI-Anrufsystem, automatisches Telefonsystem oder KI-Telefonanlage',
    },
    {
      slug: 'ki-terminassistent',
      label: 'KI Terminassistent',
      primaryKeyword: 'KI Terminassistent Telefon',
      titleKeywords: 'KI-Terminassistent, telefonische Terminbuchung oder automatische Terminvereinbarung',
    },
    {
      slug: 'ki-lead-qualifizierung-telefon',
      label: 'KI Lead-Qualifizierung per Telefon',
      primaryKeyword: 'KI Lead-Qualifizierung Telefon',
      titleKeywords: 'KI-Lead-Qualifizierung, telefonische Lead-Erfassung oder Anruf-Qualifizierung',
    },
    {
      slug: 'automatische-rueckrufsysteme',
      label: 'Automatische Rückrufsysteme',
      primaryKeyword: 'Automatische Rückrufsysteme',
      titleKeywords: 'automatische Rückrufsysteme, Rückruf-Automatisierung oder Callback-System',
    },
    {
      slug: 'ki-telefon-kundenservice',
      label: 'KI Telefon-Kundenservice',
      primaryKeyword: 'KI Telefon-Kundenservice',
      titleKeywords: 'KI-Telefon-Kundenservice, automatischer Kundenservice oder KI-Support am Telefon',
    },
  ],

  'crm-systeme': [
    {
      slug: 'crm-fuer-handwerker',
      label: 'CRM für Handwerker',
      primaryKeyword: 'CRM für Handwerker',
      titleKeywords: 'CRM für Handwerker, Handwerker-CRM oder Kundenverwaltung Handwerk',
    },
    {
      slug: 'crm-fuer-vermietung',
      label: 'CRM für Vermietung',
      primaryKeyword: 'CRM für Vermietung',
      titleKeywords: 'CRM für Vermietung, Vermieter-CRM oder Mietverwaltung',
    },
    {
      slug: 'crm-fuer-dienstleister',
      label: 'CRM für Dienstleister',
      primaryKeyword: 'CRM für Dienstleister',
      titleKeywords: 'CRM für Dienstleister, Dienstleister-CRM oder Kundenverwaltung',
    },
  ],

  'seo-top-3': [
    {
      slug: 'local-seo',
      label: 'Local SEO',
      primaryKeyword: 'Local SEO',
      titleKeywords: 'Local SEO, lokale Suchmaschinenoptimierung oder Google-Business-Profil',
    },
    {
      slug: 'google-maps-ranking',
      label: 'Google Maps Ranking',
      primaryKeyword: 'Google Maps Ranking',
      titleKeywords: 'Google-Maps-Ranking, Map-Pack-Optimierung oder Google-Maps-SEO',
    },
    {
      slug: 'seo-fuer-handwerker',
      label: 'SEO für Handwerker',
      primaryKeyword: 'SEO für Handwerker',
      titleKeywords: 'SEO für Handwerker, Handwerker-SEO oder Suchmaschinenoptimierung Handwerk',
    },
    {
      slug: 'seo-fuer-dienstleister',
      label: 'SEO für Dienstleister',
      primaryKeyword: 'SEO für Dienstleister',
      titleKeywords: 'SEO für Dienstleister, Dienstleister-SEO oder Suchmaschinenoptimierung',
    },
  ],
};

/**
 * Topic-Slugs mit hoher Kaufbereitschaft (globale Subpage-URLs in der Sitemap).
 * Übrige Slugs (Kanal-/Nische) erhalten niedrigere Priorität.
 */
const HIGH_INTENT_SUBPAGE_SLUGS = new Set<string>([
  'leadgenerierung',
  'terminbuchung',
  'website-chatbot',
  'whatsapp-chatbot',
  'ki-telefonassistent-inbound',
  'ki-anrufsystem',
  'ki-terminassistent',
  'ki-lead-qualifizierung-telefon',
  'automatische-rueckrufsysteme',
  'ki-telefon-kundenservice',
  'crm-fuer-handwerker',
  'crm-fuer-vermietung',
  'crm-fuer-dienstleister',
  'local-seo',
  'google-maps-ranking',
  'seo-fuer-handwerker',
  'seo-fuer-dienstleister',
]);

/** Priorität für globale Service-Subpages in sitemap-core.xml */
export function globalSubpageSitemapPriority(topicSlug: string): number {
  return HIGH_INTENT_SUBPAGE_SLUGS.has(topicSlug) ? 0.85 : 0.75;
}

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

const subpageIndex = new Map<string, { service: ServiceWithSubpages; def: SubpageDefinition }>();

for (const service of SERVICES_WITH_SUBPAGES) {
  for (const def of SERVICE_SUBPAGES[service]) {
    subpageIndex.set(`${service}.${def.slug}`, { service, def });
  }
}

export function getSubpagesForService(serviceSlug: string): SubpageDefinition[] {
  return SERVICE_SUBPAGES[serviceSlug as ServiceWithSubpages] ?? [];
}

export function getSubpageBySlug(
  serviceSlug: string,
  topicSlug: string
): SubpageDefinition | undefined {
  return subpageIndex.get(`${serviceSlug}.${topicSlug}`)?.def;
}

export function isValidSubpageSlug(serviceSlug: string, topicSlug: string): boolean {
  return subpageIndex.has(`${serviceSlug}.${topicSlug}`);
}

export function hasSubpages(serviceSlug: string): boolean {
  return SERVICES_WITH_SUBPAGES.includes(serviceSlug as ServiceWithSubpages);
}

/** All topic slugs across all services (for generateStaticParams in regional route) */
export function getAllSubpageParams(): { service: string; topic: string }[] {
  const params: { service: string; topic: string }[] = [];
  for (const service of SERVICES_WITH_SUBPAGES) {
    for (const def of SERVICE_SUBPAGES[service]) {
      params.push({ service, topic: def.slug });
    }
  }
  return params;
}

/**
 * Global route prefix for a service.
 * E.g. 'seo-top-3' → '/seo-top-3-in-google'
 */
export function getGlobalRoutePrefix(serviceSlug: string): string {
  return SERVICE_GLOBAL_ROUTE_PREFIX[serviceSlug] ?? `/${serviceSlug}`;
}

/**
 * Einheitlicher meta-title für globale (nicht-regionale) Subpages.
 * Pattern: "{Label} Groitzsch & Leipzig – wenn Sie nach {titleKeywords} in meiner Nähe suchen – Pixel Kraftwerk"
 * Identisch zum Muster der regionalen Subpage-Titles, damit die Außendarstellung konsistent ist.
 */
export function buildGlobalSubpageMetaTitle(def: SubpageDefinition): string {
  return `${def.label} Groitzsch & Leipzig – wenn Sie nach ${def.titleKeywords} in meiner Nähe suchen – Pixel Kraftwerk`;
}

/**
 * Einheitliche Standard-areaLinks für globale Subpages (7 Tier-1-Städte).
 * Erzeugt SEO-starke Interlinks zu den wichtigsten Regions-Service-Landingpages.
 */
export function buildTier1AreaLinks(label: string): SubpageAreaLink[] {
  return [
    { text: `${label} in Leipzig`, slug: 'leipzig' },
    { text: `${label} in Halle (Saale)`, slug: 'halle-saale' },
    { text: `${label} in Chemnitz`, slug: 'chemnitz' },
    { text: `${label} in Jena`, slug: 'jena' },
    { text: `${label} in Gera`, slug: 'gera' },
    { text: `${label} in Zwickau`, slug: 'zwickau' },
    { text: `${label} in Grimma`, slug: 'grimma' },
  ];
}
