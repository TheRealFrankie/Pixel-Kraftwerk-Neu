'use client';

import React, { useEffect } from 'react';

const baseUrl = 'https://pixelkraftwerk-ai.com';
const scriptId = 'breadcrumb-schema-leistungsgebiete';

/** BreadcrumbList-Schema für /leistungsgebiete (nur Home + Leistungsgebiete). */
const BreadcrumbSchemaLeistungsgebiete: React.FC = () => {
  useEffect(() => {
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Pixel Kraftwerk', item: baseUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Pixel Kraftwerk – Leistungsgebiete', item: baseUrl + '/leistungsgebiete' },
      ],
    };
    scriptElement.textContent = JSON.stringify(schema);
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);
  return null;
};

export default BreadcrumbSchemaLeistungsgebiete;
