import React from 'react';
import { buildBusinessSchema } from '@/lib/jsonld';

interface LocalBusinessSchemaProps {
  pageType?: 'homepage' | 'about' | 'contact' | 'service';
  customDescription?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  customDescription
}) => {
  const schema = buildBusinessSchema();

  if (customDescription) {
    (schema as any).description = customDescription;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
