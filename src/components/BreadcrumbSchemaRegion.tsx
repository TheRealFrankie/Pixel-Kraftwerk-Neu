'use client';

import React, { useEffect } from 'react';

const baseUrl = 'https://pixelkraftwerk-ai.com';
const scriptId = 'breadcrumb-schema-region';

interface BreadcrumbSchemaRegionProps {
  regionName: string;
  regionSlug: string;
}

/** BreadcrumbList-Schema für /leistungsgebiete/[region] (Home, Leistungsgebiete, Ort). */
const BreadcrumbSchemaRegion: React.FC<BreadcrumbSchemaRegionProps> = ({ regionName, regionSlug }) => {
  useEffect(() => {
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    const regionUrl = baseUrl + '/leistungsgebiete/' + regionSlug;
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Pixel Kraftwerk', item: baseUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Pixel Kraftwerk – Leistungsgebiete', item: baseUrl + '/leistungsgebiete' },
        { '@type': 'ListItem', position: 3, name: 'Pixel Kraftwerk – ' + regionName, item: regionUrl },
      ],
    };
    scriptElement.textContent = JSON.stringify(schema);
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [regionName, regionSlug]);
  return null;
};

export default BreadcrumbSchemaRegion;
