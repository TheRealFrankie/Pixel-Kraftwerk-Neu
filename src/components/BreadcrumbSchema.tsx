import React, { useEffect } from 'react';
import { businessInfo } from '@/data/businessInfo';

interface BreadcrumbSchemaProps {
  serviceName: string;
  serviceUrl: string;
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ serviceName, serviceUrl }) => {
  useEffect(() => {
    const scriptId = 'breadcrumb-schema';

    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const baseUrl = businessInfo.url;
    const name = businessInfo.name;
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": name, "item": baseUrl + "/" },
        { "@type": "ListItem", "position": 2, "name": name + " – Leistungen", "item": baseUrl + "/leistungen" },
        { "@type": "ListItem", "position": 3, "name": name + " – " + serviceName, "item": serviceUrl }
      ]
    };

    scriptElement.textContent = JSON.stringify(breadcrumbSchema);

    return () => {
      const element = document.getElementById(scriptId);
      if (element) {
        element.remove();
      }
    };
  }, [serviceName, serviceUrl]);

  return null;
};

export default BreadcrumbSchema;
