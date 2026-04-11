import React from 'react';

const baseUrl = 'https://pixelkraftwerk-ai.com';

/** BreadcrumbList-Schema für /leistungsgebiete (nur Home + Leistungsgebiete). */
const BreadcrumbSchemaLeistungsgebiete: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pixel Kraftwerk', item: baseUrl + '/' },
      { '@type': 'ListItem', position: 2, name: 'Pixel Kraftwerk – Leistungsgebiete', item: baseUrl + '/leistungsgebiete' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BreadcrumbSchemaLeistungsgebiete;
