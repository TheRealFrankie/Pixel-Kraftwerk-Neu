'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { googleReviews, googleAggregate } from '@/data/googleReviews';

const STAR_COLOR = '#2BA99E';
const TEXT_LIGHT = '#E7F4F2';
const TEXT_MUTED = '#9BB8B4';

const quotes = googleReviews.map((r) => ({
  text: r.shortQuote,
  author: r.shortName,
}));

export default function GoogleReviewsTopbar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <a
      href={googleAggregate.reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 px-4 w-full hover:opacity-90 transition-opacity"
      style={{
        background: '#0B1512',
        height: '36px',
        minHeight: '36px',
        flexShrink: 0,
      }}
      aria-label="5,0 auf Google – Bewertungen ansehen"
    >
      {/* Sterne + Wertung */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill={STAR_COLOR} color={STAR_COLOR} />
          ))}
        </div>
        <span className="text-xs font-heading font-bold" style={{ color: TEXT_LIGHT }}>
          5,0
        </span>
        <span className="text-xs hidden sm:inline" style={{ color: TEXT_MUTED }}>
          auf Google
        </span>
      </div>

      {/* Trennstrich */}
      <span className="hidden sm:block w-px h-4 flex-shrink-0" style={{ background: 'rgba(231,244,242,0.15)' }} />

      {/* Rotierendes Zitat */}
      <div className="relative overflow-hidden h-full flex items-center min-w-0 max-w-xs sm:max-w-sm md:max-w-lg">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="text-xs truncate block"
            style={{ color: TEXT_MUTED }}
          >
            &ldquo;{quotes[index].text}&rdquo;
            <span className="ml-1 font-semibold" style={{ color: TEXT_LIGHT }}>
              – {quotes[index].author}
            </span>
          </motion.span>
        </AnimatePresence>
      </div>
    </a>
  );
}
