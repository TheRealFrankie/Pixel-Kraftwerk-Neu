import React from 'react';
import { businessInfo } from '@/data/businessInfo';

interface BreadcrumbSchemaProps {
  serviceName: string;
  serviceUrl: string;
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ serviceName, serviceUrl }) => {
  const baseUrl = businessInfo.url;
  const name = businessInfo.name;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name, item: baseUrl + '/' },
      { '@type': 'ListItem', position: 2, name: name + ' – Leistungen', item: baseUrl + '/leistungen' },
      { '@type': 'ListItem', position: 3, name: name + ' – ' + serviceName, item: serviceUrl },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export default BreadcrumbSchema;
