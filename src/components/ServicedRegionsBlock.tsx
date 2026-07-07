'use client';

import React from 'react';
import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';
import { INK, BODY, PETROL, BORDER, SURFACE } from '@/lib/theme';

interface ServicedRegionsBlockProps {
  headingTag?: 'h2' | 'h3';
}

const VISIBLE_COUNT = 8;

const ServicedRegionsBlock: React.FC<ServicedRegionsBlockProps> = ({ headingTag = 'h3' }) => {
  const Heading = headingTag;
  const visible = LEISTUNGSGEBIETE_CITIES.slice(0, VISIBLE_COUNT);
  return (
    <div className="rounded-2xl border p-6 mt-8" style={{ background: SURFACE, borderColor: BORDER }}>
      <Heading className="text-lg font-heading font-bold mb-3" style={{ color: INK }}>
        Diese Gebiete bedienen wir
      </Heading>
      <p className="text-sm mb-3" style={{ color: BODY }}>
        Wir betreuen Unternehmen in Leipzig, Groitzsch und {LEISTUNGSGEBIETE_CITIES.length - 2} weiteren Städten in Mitteldeutschland.
      </p>
      <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
        {visible.map((city) => (
          <a key={city.slug} href={`/leistungsgebiete/${city.slug}`} style={{ color: PETROL }} className="hover:underline">
            {city.name}
          </a>
        ))}
        <a href="/leistungsgebiete" style={{ color: PETROL }} className="hover:underline font-heading font-bold">
          · Alle Leistungsgebiete →
        </a>
      </div>
    </div>
  );
};

export default ServicedRegionsBlock;
