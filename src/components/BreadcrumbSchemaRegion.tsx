import React from 'react';
import { businessInfo } from '@/data/businessInfo';

const baseUrl = businessInfo.url;

interface BreadcrumbSchemaRegionProps {
  regionName: string;
  regionSlug: string;
}

/** BreadcrumbList-Schema für /leistungsgebiete/[region] (Home, Leistungsgebiete, Ort). */
const BreadcrumbSchemaRegion: React.FC<BreadcrumbSchemaRegionProps> = ({ regionName, regionSlug }) => {
  const name = businessInfo.name;
  const regionUrl = baseUrl + '/leistungsgebiete/' + regionSlug;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name, item: baseUrl + '/' },
      { '@type': 'ListItem', position: 2, name: name + ' – Leistungsgebiete', item: baseUrl + '/leistungsgebiete' },
      { '@type': 'ListItem', position: 3, name: name + ' – ' + regionName, item: regionUrl },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BreadcrumbSchemaRegion;
