'use client';

import React from 'react';
import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';
import { getRegionServiceLinkText, type ServiceSlug } from '@/data/services';
import { INK, BODY, PETROL, BORDER, SURFACE } from '@/lib/theme';

const LINK_COUNT = 8;

interface RegionServiceLinksBlockProps {
  serviceSlug: ServiceSlug;
  title?: string;
}

const RegionServiceLinksBlock: React.FC<RegionServiceLinksBlockProps> = ({
  serviceSlug,
  title = 'In Ihrer Region',
}) => {
  const links = LEISTUNGSGEBIETE_CITIES.slice(0, LINK_COUNT);

  return (
    <div className="rounded-2xl border p-6 mt-8" style={{ background: SURFACE, borderColor: BORDER }}>
      <h3 className="text-lg font-heading font-bold mb-3" style={{ color: INK }}>
        {title}
      </h3>
      <p className="text-sm mb-3" style={{ color: BODY }}>
        Wir bieten diese Leistung in allen unseren Leistungsgebieten an – hier eine Auswahl:
      </p>
      <p className="text-sm">
        {links.map((city, i) => (
          <React.Fragment key={city.slug}>
            <a
              href={`/leistungsgebiete/${city.slug}/${serviceSlug}`}
              style={{ color: PETROL }}
              className="hover:underline"
            >
              {getRegionServiceLinkText(serviceSlug, city.name, i)}
            </a>
            {i < links.length - 1 ? ' · ' : ''}
          </React.Fragment>
        ))}
        {' · '}
        <a href="/leistungsgebiete" style={{ color: PETROL }} className="hover:underline font-heading font-bold">
          Alle Leistungsgebiete
        </a>
      </p>
    </div>
  );
};

export default RegionServiceLinksBlock;
