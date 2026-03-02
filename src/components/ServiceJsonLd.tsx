'use client';

import React, { useEffect } from 'react';
import { businessInfo } from '@/data/businessInfo';
import { buildFaqSchema, buildServiceSchema, type FaqItemInput } from '@/lib/jsonld';

interface ServiceJsonLdProps {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  /** Liste der Städte, in denen der Service für diese Seite gilt. Standard: alle Service-Gebiete. */
  areaServed?: string[];
  /** Sichtbare FAQs der Seite – 1:1 wie im Content. */
  faqs?: FaqItemInput[];
  /** Optional: Name der Seite für Dev-Logging. */
  pageName?: string;
}

const ServiceJsonLd: React.FC<ServiceJsonLdProps> = ({
  name,
  serviceType,
  description,
  url,
  areaServed,
  faqs,
  pageName,
}) => {
  const serviceSchema = buildServiceSchema({
    name,
    serviceType,
    description,
    url,
    areaServed: areaServed && areaServed.length > 0 ? areaServed : businessInfo.serviceArea,
  });

  const schemas = [serviceSchema];

  if (faqs && faqs.length > 0) {
    schemas.push(buildFaqSchema({ url, faqs }));
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;
    const count = document.querySelectorAll('script[type="application/ld+json"]').length;
    if (count === 0 && pageName) {
      // eslint-disable-next-line no-console
      console.warn(`[jsonld] Auf der Seite "${pageName}" wurde kein JSON-LD gefunden.`);
    }
  }, [pageName]);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default ServiceJsonLd;

