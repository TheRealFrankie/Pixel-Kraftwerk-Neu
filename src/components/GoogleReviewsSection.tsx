'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { googleReviews, googleAggregate } from '@/data/googleReviews';

const INK = '#0C1210';
const MUTED = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';

/* Google-G inline SVG in Originalfarben */
function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label="Google"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ReviewCard({ review, index }: { review: (typeof googleReviews)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 220;
  const displayText = isLong && !expanded ? review.text.slice(0, 220).trimEnd() + ' …' : review.text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col bg-white rounded-2xl p-6"
      style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
    >
      {/* Sterne + Google-G */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={PETROL} color={PETROL} />
          ))}
        </div>
        <GoogleG size={20} />
      </div>

      {/* Rezensionstext */}
      <p className="text-base leading-relaxed flex-grow mb-4" style={{ color: INK }}>
        &ldquo;{displayText}&rdquo;
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-semibold mb-4 text-left"
          style={{ color: PETROL }}
        >
          {expanded ? 'Weniger anzeigen' : 'Weiterlesen'}
        </button>
      )}

      {/* Name + Datum */}
      <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div>
          <p className="text-sm font-heading font-bold" style={{ color: INK }}>{review.name}</p>
          <p className="text-xs" style={{ color: MUTED }}>{review.date}</p>
        </div>
        <a
          href={googleAggregate.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline underline-offset-2 hover:opacity-70 transition-opacity"
          style={{ color: MUTED }}
        >
          Rezension auf Google
        </a>
      </div>
    </motion.div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section data-section-label="Rezensionen" className="section-padding" style={{ background: '#FAFAF9' }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-sm tracking-wide uppercase mb-3" style={{ color: PETROL }}>
            Echte Google-Bewertungen
          </p>
          <h2 className="font-heading font-bold mb-6" style={{ color: INK }}>
            Das sagen unsere Kunden
          </h2>

          {/* Gesamtwertung */}
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="font-heading font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: INK, lineHeight: 1 }}>
                {googleAggregate.rating}
              </span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} fill={PETROL} color={PETROL} />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <GoogleG size={18} />
                  <span className="text-sm font-medium" style={{ color: MUTED }}>Google-Bewertung</span>
                </div>
              </div>
            </div>
            <a
              href={googleAggregate.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: PETROL }}
            >
              Alle Bewertungen auf Google ansehen →
            </a>
          </div>
        </motion.div>

        {/* Karten-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {googleReviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
