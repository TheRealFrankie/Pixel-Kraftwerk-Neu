import React from 'react';
import { businessInfo } from '../data/businessInfo';
import { BUSINESS_ID } from '@/lib/jsonld';

const WebSiteSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.url}/#website`,
    "url": businessInfo.url,
    "name": businessInfo.name,
    "description": businessInfo.description,
    "publisher": {
      "@id": BUSINESS_ID
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${businessInfo.url}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "de-DE"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebSiteSchema;
