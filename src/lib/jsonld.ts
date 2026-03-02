import { businessInfo } from '@/data/businessInfo';

export const BUSINESS_ID = `${businessInfo.url}/#business`;

export type JsonLd = Record<string, unknown>;

export interface ServiceSchemaInput {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  areaServed: string[];
}

export interface FaqItemInput {
  question: string;
  answer: string;
}

export interface FaqSchemaInput {
  url: string;
  faqs: FaqItemInput[];
}

export function buildBusinessSchema(): JsonLd {
  const sameAs = Object.values(businessInfo.socialMedia).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': businessInfo.businessType || 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: businessInfo.logo,
    image: businessInfo.image,
    foundingDate: businessInfo.foundingDate,
    priceRange: businessInfo.priceRange,
    telephone: businessInfo.contact.telephone,
    email: businessInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      postalCode: businessInfo.address.postalCode,
      addressRegion: businessInfo.address.addressRegion,
      addressCountry: businessInfo.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    areaServed: businessInfo.serviceArea.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    founders: businessInfo.founders.map((founder) => ({
      '@type': 'Person',
      name: founder.name,
    })),
    vatID: businessInfo.vatID,
    openingHoursSpecification: businessInfo.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automatisierungs-Services',
      itemListElement: businessInfo.services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function buildServiceSchema(input: ServiceSchemaInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${input.url}#service`,
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: {
      '@id': BUSINESS_ID,
    },
    areaServed: input.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
  };
}

export function buildFaqSchema(input: FaqSchemaInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${input.url}#faq`,
    mainEntity: input.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Dev-only helper: warnt in der Konsole, wenn auf einer Seite kein JSON-LD vorhanden ist.
 */
export function logMissingJsonLd(pageName: string): void {
  if (typeof window === 'undefined') return;
  if (process.env.NODE_ENV === 'production') return;

  const count = document.querySelectorAll('script[type="application/ld+json"]').length;
  if (count === 0) {
    // eslint-disable-next-line no-console
    console.warn(`[jsonld] Auf der Seite "${pageName}" wurde kein JSON-LD gefunden.`);
  }
}

