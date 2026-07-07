'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { businessInfo } from '@/data/businessInfo';

interface TrustLineProps {
  className?: string;
}

const PETROL = '#0E7C72';
const MUTED  = '#68746F';
const BORDER = '#E4E9E7';

const TrustLine: React.FC<TrustLineProps> = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center gap-4 ${className}`}>
    <a
      href={businessInfo.socialMedia.googleReview}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      aria-label="Unsere Google-Bewertungen ansehen"
    >
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} fill={PETROL} color={PETROL} />
        ))}
      </div>
      <span className="text-sm font-medium" style={{ color: MUTED }}>5,0 auf Google</span>
    </a>
    <span style={{ color: BORDER }} className="hidden sm:block" aria-hidden>·</span>
    <span className="text-sm" style={{ color: MUTED }}>Antwort binnen 24 Stunden</span>
    <span style={{ color: BORDER }} className="hidden sm:block" aria-hidden>·</span>
    <span className="text-sm" style={{ color: MUTED }}>Unverbindlich &amp; kostenlos</span>
  </div>
);

export default TrustLine;
