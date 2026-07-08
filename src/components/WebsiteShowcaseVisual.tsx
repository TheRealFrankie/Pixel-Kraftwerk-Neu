'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const INK = '#0C1210';
const MUTED = '#68746F';
const SURFACE = '#F3F5F4';

interface WebsiteShowcaseVisualProps {
  className?: string;
}

const WebsiteShowcaseVisual: React.FC<WebsiteShowcaseVisualProps> = ({ className = '' }) => {
  const reduced = useReducedMotion() ?? false;

  return (
    <div
      className={`relative w-full max-w-md mx-auto select-none ${className}`}
      role="img"
      aria-label="Abstrakte Visualisierung einer professionellen Unternehmenswebsite auf Desktop und Smartphone"
    >
      {/* Hintergrund-Aura */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(14,124,114,0.07) 0%, transparent 70%)' }}
        aria-hidden
      />

      {/* ═══ BROWSER-MOCKUP ═══ */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        style={{ border: `1px solid ${BORDER}`, background: '#fff', boxShadow: '0 4px 24px rgba(12,18,16,0.10), 0 1px 4px rgba(12,18,16,0.06)' }}
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {/* Browser-Kopfzeile */}
        <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}>
          {/* Traffic-Lights */}
          <div className="flex items-center gap-1.5" aria-hidden>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
          </div>
          {/* URL-Pille */}
          <div className="flex-1 mx-2 h-5 rounded-md flex items-center px-2.5 gap-1.5" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden><path d="M4 0.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke={PETROL} strokeWidth="0.8"/><path d="M4 0.5v7M0.5 4h7" stroke={PETROL} strokeWidth="0.8"/></svg>
            <div className="h-1.5 rounded-full flex-1" style={{ background: SURFACE }} />
          </div>
        </div>

        {/* Website-Inhalt (abstrakt) */}
        <div className="p-3.5 space-y-3">

          {/* Hero-Block */}
          <div className="rounded-xl p-3" style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, rgba(14,124,114,0.05) 100%)`, border: `1px solid ${BORDER}` }}>
            <div className="h-2 w-3/5 rounded-full mb-2" style={{ background: INK, opacity: 0.18 }} />
            <div className="h-1.5 w-4/5 rounded-full mb-1.5" style={{ background: INK, opacity: 0.10 }} />
            <div className="h-1.5 w-2/3 rounded-full mb-3" style={{ background: INK, opacity: 0.10 }} />
            <div className="flex gap-2">
              <div className="h-6 w-24 rounded-lg flex items-center justify-center" style={{ background: PETROL }}>
                <div className="h-1.5 w-12 rounded-full" style={{ background: 'rgba(255,255,255,0.7)' }} />
              </div>
              <div className="h-6 w-20 rounded-lg flex items-center justify-center" style={{ border: `1px solid ${BORDER}` }}>
                <div className="h-1.5 w-10 rounded-full" style={{ background: MUTED, opacity: 0.5 }} />
              </div>
            </div>
          </div>

          {/* 3-Leistungs-Kärtchen */}
          <div className="grid grid-cols-3 gap-2">
            {[{ w: '70%' }, { w: '60%' }, { w: '75%' }].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-lg p-2.5"
                style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 1px 3px rgba(12,18,16,0.06)' }}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <div className="w-5 h-5 rounded-md mb-1.5" style={{ background: 'rgba(14,124,114,0.1)' }} aria-hidden />
                <div className="h-1.5 rounded-full mb-1" style={{ background: INK, opacity: 0.15, width: item.w }} />
                <div className="h-1 rounded-full" style={{ background: INK, opacity: 0.08, width: '90%' }} />
                <div className="h-1 rounded-full mt-0.5" style={{ background: INK, opacity: 0.08, width: '75%' }} />
              </motion.div>
            ))}
          </div>

          {/* Referenz-Streifen */}
          <div className="rounded-lg px-3 py-2 flex items-center gap-2" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div className="h-1.5 w-1/4 rounded-full" style={{ background: MUTED, opacity: 0.4 }} />
            <div className="flex gap-1.5 ml-auto" aria-hidden>
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-6 h-4 rounded" style={{ background: `rgba(14,124,114,${0.08 + n * 0.05})`, border: `1px solid ${BORDER}` }} />
              ))}
            </div>
          </div>

          {/* Kontakt-Block */}
          <div className="rounded-lg p-2.5 flex items-center gap-2.5" style={{ background: `rgba(14,124,114,0.06)`, border: `1px solid rgba(14,124,114,0.18)` }}>
            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: PETROL }} aria-hidden>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="flex-1">
              <div className="h-1.5 w-1/2 rounded-full mb-1" style={{ background: PETROL, opacity: 0.5 }} />
              <div className="h-1 w-3/4 rounded-full" style={{ background: INK, opacity: 0.10 }} />
            </div>
            <div className="h-5 w-14 rounded-md" style={{ background: PETROL, opacity: 0.9 }} />
          </div>
        </div>
      </motion.div>

      {/* ═══ SMARTPHONE-MOCKUP (überlappend unten rechts) ═══ */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-20 rounded-2xl overflow-hidden"
        style={{ border: `1.5px solid ${BORDER}`, background: '#fff', boxShadow: '0 4px 16px rgba(12,18,16,0.12)', zIndex: 10 }}
        initial={reduced ? false : { opacity: 0, x: 12, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
      >
        {/* Phone header */}
        <div className="px-1.5 py-1 flex justify-center" style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}>
          <div className="h-1 w-5 rounded-full" style={{ background: BORDER }} />
        </div>
        {/* Phone content */}
        <div className="p-1.5 space-y-1">
          <div className="h-1.5 w-full rounded" style={{ background: SURFACE, border: `1px solid ${BORDER}` }} />
          <div className="h-4 rounded" style={{ background: `rgba(14,124,114,0.07)`, border: `1px solid ${BORDER}` }}>
            <div className="h-1 mx-1 mt-1.5 w-3/4 rounded-full" style={{ background: INK, opacity: 0.12 }} />
          </div>
          <div className="grid grid-cols-2 gap-1">
            {[1, 2].map((n) => (
              <div key={n} className="h-5 rounded" style={{ background: SURFACE, border: `1px solid ${BORDER}` }} />
            ))}
          </div>
          <div className="h-3 rounded flex items-center justify-center" style={{ background: PETROL }}>
            <div className="h-1 w-8 rounded-full" style={{ background: 'rgba(255,255,255,0.6)' }} />
          </div>
        </div>
      </motion.div>

      {/* ═══ SCHWEBENDE BADGES ═══ */}
      <motion.div
        className="absolute -top-3 -left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium"
        style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 2px 8px rgba(12,18,16,0.10)', color: PETROL, zIndex: 10 }}
        initial={reduced ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 6l3 3 5-5" stroke={PETROL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Schnelle Ladezeit
      </motion.div>

      <motion.div
        className="absolute bottom-8 -left-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium"
        style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 2px 8px rgba(12,18,16,0.10)', color: PETROL, zIndex: 10 }}
        initial={reduced ? false : { opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.4 }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 6l3 3 5-5" stroke={PETROL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        SEO-technisch vorbereitet
      </motion.div>
    </div>
  );
};

export default WebsiteShowcaseVisual;
