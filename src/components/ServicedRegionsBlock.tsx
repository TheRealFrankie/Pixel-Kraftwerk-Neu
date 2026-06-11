'use client';

import React from 'react';
import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';

/**
 * Block für Service-Seiten: "Diese Gebiete bedienen wir" mit Links zu allen 50 Stadt-Seiten.
 * SEO-Plan Abschnitt 9: Interlinking von Service- zu Stadt-Seiten.
 */

interface ServicedRegionsBlockProps {
  /** Überschrift als H2 (z. B. für Webseiten-Seite) oder H3 (Standard) */
  headingTag?: 'h2' | 'h3';
}

const ServicedRegionsBlock: React.FC<ServicedRegionsBlockProps> = ({ headingTag = 'h3' }) => {
  const Heading = headingTag;
  return (
    <div className="bg-dark-500 border border-dark-100 p-6 mt-8">
      <Heading className="text-lg font-heading font-bold text-light-100 mb-3">Diese Gebiete bedienen wir</Heading>
      <p className="text-light-300 text-sm mb-3">
        Wir betreuen Unternehmen in Leipzig, Groitzsch und {LEISTUNGSGEBIETE_CITIES.length - 2} weiteren Städten in Mitteldeutschland.
      </p>
      <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
        {LEISTUNGSGEBIETE_CITIES.map((city) => (
          <a key={city.slug} href={`/leistungsgebiete/${city.slug}`} className="text-primary-400 hover:underline">
            {city.name}
          </a>
        ))}
        <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">
          · Alle Leistungsgebiete →
        </a>
      </div>
    </div>
  );
};

export default ServicedRegionsBlock;
