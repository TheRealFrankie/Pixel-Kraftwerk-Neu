'use client';

import React from 'react';
import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';

/**
 * Kleiner Block für Service-Seiten: "Diese Gebiete bedienen wir" mit 3–5 Links zu Stadt-Seiten.
 * SEO-Plan Abschnitt 9: Interlinking von Service- zu Stadt-Seiten.
 */
const PICK_COUNT = 5;

interface ServicedRegionsBlockProps {
  /** Überschrift als H2 (z. B. für Webseiten-Seite) oder H3 (Standard) */
  headingTag?: 'h2' | 'h3';
}

const ServicedRegionsBlock: React.FC<ServicedRegionsBlockProps> = ({ headingTag = 'h3' }) => {
  const links = LEISTUNGSGEBIETE_CITIES.slice(0, PICK_COUNT);
  const Heading = headingTag;
  return (
    <div className="bg-dark-500 border border-dark-100 p-6 mt-8">
      <Heading className="text-lg font-heading font-bold text-light-100 mb-3">Diese Gebiete bedienen wir</Heading>
      <p className="text-light-300 text-sm mb-3">
        Wir unterstützen Unternehmen in Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz und Groitzsch.
      </p>
      <p className="text-sm">
        {links.map((city, i) => (
          <React.Fragment key={city.slug}>
            <a href={`/leistungsgebiete/${city.slug}`} className="text-primary-400 hover:underline">{city.name}</a>
            {i < links.length - 1 ? ' · ' : ''}
          </React.Fragment>
        ))}
        {' · '}
        <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungsgebiete</a>
      </p>
    </div>
  );
};

export default ServicedRegionsBlock;
