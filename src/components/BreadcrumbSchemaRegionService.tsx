import React from 'react';
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export default BreadcrumbSchemaRegionService;
