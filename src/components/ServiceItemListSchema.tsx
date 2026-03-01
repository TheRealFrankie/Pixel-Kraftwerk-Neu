import React from 'react';

const ServiceItemListSchema: React.FC = () => {
  const services = [
    {
      name: "KI-Chatbots – Digitale Kundenassistenz",
      url: "https://pixelkraftwerk-ai.com/ki-chatbots",
      description: "KI-Chatbots als digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team."
    },
    {
      name: "KI-Telefonassistent",
      url: "https://pixelkraftwerk-ai.com/telefonassistenten",
      description: "KI-Telefonassistent für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr."
    },
    {
      name: "Automatisierungen für Anfragen, Vertrieb & Terminplanung",
      url: "https://pixelkraftwerk-ai.com/automatisierungen",
      description: "Wir bauen Automatisierungen, die Anfragen sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress. Leipzig & Region."
    },
    {
      name: "Webseiten",
      url: "https://pixelkraftwerk-ai.com/webseite",
      description: "Moderne Webseiten im Mietmodell. Professioneller Webauftritt für lokale Unternehmen mit klarer Struktur und laufender Betreuung."
    },
    {
      name: "SEO: Top 3 in Google",
      url: "https://pixelkraftwerk-ai.com/seo-top-3-in-google",
      description: "SEO-Angebot mit Fokus auf Top-3-Platzierungen bei Google für Suchbegriffe, die wirklich Kunden bringen – speziell für Leipzig, Groitzsch und Region."
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "@id": service.url,
        "name": service.name,
        "url": service.url,
        "description": service.description
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceItemListSchema;
