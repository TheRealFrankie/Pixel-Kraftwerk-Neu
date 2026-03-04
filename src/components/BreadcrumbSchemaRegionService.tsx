'use client';

import React, { useEffect } from 'react';
import { businessInfo } from '@/data/businessInfo';

const baseUrl = businessInfo.url;

interface BreadcrumbSchemaRegionServiceProps {
  regionName: string;
  regionUrl: string;
  serviceName: string;
  serviceUrl: string;
}

/** BreadcrumbList-Schema für Seiten /leistungsgebiete/[region]/[service]. */
const BreadcrumbSchemaRegionService: React.FC<BreadcrumbSchemaRegionServiceProps> = ({
  regionName,
  regionUrl,
  serviceName,
  serviceUrl,
}) => {
  useEffect(() => {
    const scriptId = 'breadcrumb-schema-region-service';

    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const name = businessInfo.name;
    const regionItem = regionUrl.startsWith('http') ? regionUrl : baseUrl + regionUrl;
    const serviceItem = serviceUrl.startsWith('http') ? serviceUrl : baseUrl + (serviceUrl.startsWith('/') ? serviceUrl : '/' + serviceUrl);
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name, item: baseUrl + '/' },
        { '@type': 'ListItem', position: 2, name: name + ' – Leistungsgebiete', item: baseUrl + '/leistungsgebiete' },
        { '@type': 'ListItem', position: 3, name: name + ' – ' + regionName, item: regionItem },
        { '@type': 'ListItem', position: 4, name: name + ' – ' + regionName + ' – ' + serviceName, item: serviceItem },
      ],
    };

    scriptElement.textContent = JSON.stringify(breadcrumbSchema);

    return () => {
      const element = document.getElementById(scriptId);
      if (element) element.remove();
    };
  }, [regionName, regionUrl, serviceName, serviceUrl]);

  return null;
};

export default BreadcrumbSchemaRegionService;
