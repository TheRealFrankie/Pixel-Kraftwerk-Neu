'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, FileText, Bell, Zap } from 'lucide-react';

const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const INK = '#0C1210';
const MUTED = '#68746F';
const SURFACE = '#F3F5F4';

const TASKS = [
  { done: true, label: 'Erstgespräch geführt' },
  { done: true, label: 'Angebot verschickt' },
  { done: false, label: 'Nachfassen am Dienstag' },
];

const DOCS = ['Angebot_2024-11.pdf', 'Projektbeschreibung.docx'];

interface CrmCustomerFileVisualProps {
  className?: string;
}

const CrmCustomerFileVisual: React.FC<CrmCustomerFileVisualProps> = ({ className = '' }) => {
  const reduced = useReducedMotion() ?? false;

  return (
    <div
      className={`relative w-full max-w-sm mx-auto select-none ${className}`}
      role="img"
      aria-label="Abstrahierte Darstellung einer zentralen Kundenakte in einem individuellen CRM-System"
    >
      {/* Hintergrund-Aura */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(14,124,114,0.08) 0%, transparent 70%)' }}
        aria-hidden
      />

      {/* ── Haupt-Kundenkarte ── */}
      <motion.div
        className="relative rounded-2xl bg-white overflow-hidden"
        style={{ border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(12,18,16,0.10), 0 1px 4px rgba(12,18,16,0.06)' }}
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {/* Kartenheader */}
        <div className="flex items-center justify-between px-4 py-3" style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(14,124,114,0.12)' }} aria-hidden>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="5" r="2.5" stroke={PETROL} strokeWidth="1.2" />
                <path d="M2.5 12c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke={PETROL} strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="h-2 w-20 rounded-full" style={{ background: INK, opacity: 0.18 }} />
              <div className="h-1.5 w-14 rounded-full mt-1" style={{ background: MUTED, opacity: 0.25 }} />
            </div>
          </div>
          {/* Status-Pill */}
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(14,124,114,0.10)', color: PETROL, border: `1px solid rgba(14,124,114,0.22)` }}
          >
            In Bearbeitung
          </span>
        </div>

        {/* Karteninhalt */}
        <div className="p-4 space-y-4">

          {/* Aufgaben-Block */}
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: MUTED }}>Aufgaben</p>
            <div className="space-y-1.5">
              {TASKS.map((task, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={reduced ? false : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                >
                  <CheckCircle2
                    size={14}
                    style={{ color: task.done ? PETROL : BORDER, flexShrink: 0 }}
                    aria-hidden
                  />
                  <div
                    className="h-1.5 rounded-full flex-1"
                    style={{ background: task.done ? 'rgba(14,124,114,0.18)' : `${BORDER}`, width: `${60 + i * 10}%` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dokumente-Block */}
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '0.75rem' }}>
            <p className="text-xs font-semibold mb-2" style={{ color: MUTED }}>Dokumente</p>
            <div className="space-y-1.5">
              {DOCS.map((doc, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                  initial={reduced ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.07, duration: 0.35 }}
                >
                  <FileText size={12} style={{ color: PETROL, flexShrink: 0 }} aria-hidden />
                  <div className="h-1.5 rounded-full flex-1" style={{ background: INK, opacity: 0.13, width: i === 0 ? '70%' : '55%' }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Automatisierungs-Zeile */}
          <motion.div
            className="flex items-center gap-2 rounded-lg px-3 py-2"
            style={{ background: 'rgba(14,124,114,0.06)', border: `1px solid rgba(14,124,114,0.18)` }}
            initial={reduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.4 }}
          >
            <Zap size={13} style={{ color: PETROL, flexShrink: 0 }} aria-hidden />
            <div className="h-1.5 rounded-full flex-1" style={{ background: PETROL, opacity: 0.35 }} />
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(14,124,114,0.12)', color: PETROL, border: `1px solid rgba(14,124,114,0.20)`, whiteSpace: 'nowrap' }}
            >
              Automatisiert
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Schwebende Erinnerungs-Badge oben rechts ── */}
      <motion.div
        className="absolute -top-3 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white"
        style={{ border: `1px solid ${BORDER}`, boxShadow: '0 2px 10px rgba(12,18,16,0.10)', color: PETROL }}
        initial={reduced ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
      >
        <Bell size={11} aria-hidden />
        Nachfassen morgen
      </motion.div>

      {/* ── Schwebende Status-Badge unten links ── */}
      <motion.div
        className="absolute -bottom-3 -left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white"
        style={{ border: `1px solid ${BORDER}`, boxShadow: '0 2px 10px rgba(12,18,16,0.10)', color: PETROL }}
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke={PETROL} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Alle Infos an einem Ort
      </motion.div>
    </div>
  );
};

export default CrmCustomerFileVisual;
