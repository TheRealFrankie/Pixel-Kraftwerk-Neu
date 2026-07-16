'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import BreadcrumbNav from './BreadcrumbNav';
import type { BreadcrumbItem } from './BreadcrumbNav';
import { businessInfo } from '@/data/businessInfo';
import { INK, BODY, MUTED, PETROL, PETROL_DARK, BORDER, HERO_GRADIENT } from '@/lib/theme';

interface PageHeroProps {
  /** id-Attribut für die <section> */
  sectionId?: string;
  /** Unsichtbarer Anker-Span kurz vor dem Hero (für Smooth-Scroll-Targets) */
  anchorId?: string;
  imageSrc: string;
  imageAlt: string;
  /** Breadcrumb-Pfad; falls übergeben, wird er oben im Hero angezeigt */
  breadcrumbs?: BreadcrumbItem[];
  /** Kleines Pill-Badge über der H1 */
  badge?: string;
  /** Optionales Icon links vom Badge-Text */
  badgeIcon?: React.ReactNode;
  /** Hauptzeile der H1 */
  h1: string;
  /** Optionale zweite Zeile in Petrol-Farbe */
  h1Accent?: string;
  /** Erster Unterzeilen-Absatz */
  subline?: string;
  /** Optionaler zweiter Unterzeilen-Absatz */
  subline2?: string;
  /** Primärer CTA-Button (petrol) */
  cta1Label: string;
  cta1Action?: () => void;
  cta1Href?: string;
  /** Sekundärer CTA-Button (outline) */
  cta2Label?: string;
  cta2Href?: string;
  cta2Action?: () => void;
  /** Trust-Zeile mit Google-Bewertung anzeigen */
  showTrust?: boolean;
  /** Bildausrichtung */
  imagePosition?: 'center' | 'right';
}

const PageHero: React.FC<PageHeroProps> = ({
  sectionId,
  anchorId,
  imageSrc,
  imageAlt,
  breadcrumbs,
  badge,
  badgeIcon,
  h1,
  h1Accent,
  subline,
  subline2,
  cta1Label,
  cta1Action,
  cta1Href,
  cta2Label,
  cta2Href,
  cta2Action,
  showTrust = false,
  imagePosition = 'right',
}) => {
  return (
    <section
      id={sectionId}
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: 'calc(100vh - 36px)', background: '#FAFAF9' }}
    >
      {anchorId && <span id={anchorId} className="absolute top-0 left-0" aria-hidden="true" />}

      {/* Vollbild-Hintergrundbild */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover object-${imagePosition}`}
          priority
          sizes="100vw"
        />
        {/* Heller Gradient: links Text, rechts Bild */}
        <div className="absolute inset-0" style={{ background: HERO_GRADIENT }} aria-hidden />
      </div>

      {/* Breadcrumb oben – im normalen Fluss, kein absolute */}
      {breadcrumbs && (
        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      )}

      <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-5"
              >
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border"
                  style={{
                    background: 'rgba(14,124,114,0.07)',
                    color: PETROL_DARK,
                    borderColor: 'rgba(14,124,114,0.2)',
                  }}
                >
                  {badgeIcon ?? <Star size={12} fill={PETROL} color={PETROL} />}
                  {badge}
                </span>
              </motion.div>
            )}

            {/* H1 */}
            <motion.h1
              className="font-heading font-bold tracking-tight mb-4 leading-[1.08]"
              style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {h1}
              {h1Accent && (
                <>
                  <br />
                  <span style={{ color: PETROL }}>{h1Accent}</span>
                </>
              )}
            </motion.h1>

            {/* Subline */}
            {subline && (
              <motion.p
                className="text-lg max-w-xl mb-3 leading-relaxed"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {subline}
              </motion.p>
            )}
            {subline2 && (
              <motion.p
                className="text-base max-w-xl mb-5 leading-relaxed"
                style={{ color: MUTED }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {subline2}
              </motion.p>
            )}

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {cta1Href ? (
                <a href={cta1Href} className="btn-primary">
                  {cta1Label}
                  <ArrowRight size={18} />
                </a>
              ) : (
                <button onClick={cta1Action} className="btn-primary">
                  {cta1Label}
                  <ArrowRight size={18} />
                </button>
              )}

              {cta2Label && (
                cta2Href ? (
                  <a href={cta2Href} className="btn-secondary">
                    {cta2Label}
                  </a>
                ) : (
                  <button onClick={cta2Action} className="btn-secondary">
                    {cta2Label}
                  </button>
                )
              )}
            </motion.div>

            {/* Trust-Zeile */}
            {showTrust && (
              <motion.div
                className="flex flex-wrap items-center gap-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.5 }}
              >
                <a
                  href={businessInfo.socialMedia.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                  aria-label="Unsere Google-Bewertung ansehen"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                  <span style={{ color: MUTED }} className="ml-1">
                    5,0 auf Google
                  </span>
                </a>
                <span style={{ color: BORDER }}>|</span>
                <span style={{ color: MUTED }}>Antwort binnen 24 Stunden</span>
              </motion.div>
            )}
          </div>

          {/* Rechte Spalte bleibt leer – Bild ist Hintergrund */}
          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
