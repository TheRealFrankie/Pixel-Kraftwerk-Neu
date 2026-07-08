'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, CheckCircle2, Database, MessageSquare, Bell, CalendarClock } from 'lucide-react';

const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const INK = '#0C1210';
const MUTED = '#68746F';

export interface WorkflowStep {
  icon: React.ReactNode;
  title: string;
  badge: string;
}

const DEFAULT_STEPS: WorkflowStep[] = [
  { icon: <Mail size={18} />, title: 'Neue Website-Anfrage', badge: 'Anfrage eingegangen' },
  { icon: <CheckCircle2 size={18} />, title: 'Daten prüfen & sortieren', badge: 'automatisch geprüft' },
  { icon: <Database size={18} />, title: 'Kontakt im CRM anlegen', badge: 'CRM aktualisiert' },
  { icon: <MessageSquare size={18} />, title: 'Kunde erhält eine Antwort', badge: 'Nachricht versendet' },
  { icon: <Bell size={18} />, title: 'Mitarbeiter wird informiert', badge: 'Aufgabe erstellt' },
  { icon: <CalendarClock size={18} />, title: 'Follow-up wird geplant', badge: 'Termin vorbereitet' },
];

interface AutomationWorkflowVisualProps {
  steps?: WorkflowStep[];
  footerLabel?: string;
}

const Connector: React.FC<{ reduced: boolean }> = ({ reduced }) => (
  <div className="relative flex items-center justify-center my-1" aria-hidden>
    <div
      className="w-0.5 h-5 rounded-full"
      style={{ background: `linear-gradient(to bottom, ${PETROL}, rgba(14,124,114,0.3))` }}
    />
    {!reduced && (
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ background: PETROL }}
        animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    )}
  </div>
);

const AutomationWorkflowVisual: React.FC<AutomationWorkflowVisualProps> = ({
  steps = DEFAULT_STEPS,
  footerLabel = 'Automatisierter Ablauf – kein manueller Schritt nötig',
}) => {
  const reduced = useReducedMotion() ?? false;

  return (
    <div
      className="relative w-full max-w-xs mx-auto lg:max-w-sm"
      role="img"
      aria-label="Visualisierung eines automatisierten Ablaufs"
    >
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(14,124,114,0.07) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative flex flex-col">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={reduced ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              whileHover={reduced ? undefined : { scale: 1.02, transition: { duration: 0.15 } }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white"
              style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 4px rgba(12,18,16,0.07)' }}
            >
              <div
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(14,124,114,0.08)', color: PETROL }}
                aria-hidden
              >
                {step.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-heading font-semibold leading-tight truncate" style={{ color: INK }}>
                  {step.title}
                </p>
              </div>
              <span
                className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(14,124,114,0.1)', color: PETROL, border: '1px solid rgba(14,124,114,0.2)' }}
              >
                {step.badge}
              </span>
            </motion.div>
            {i < steps.length - 1 && <Connector reduced={reduced} />}
          </React.Fragment>
        ))}
      </div>

      <p className="text-center text-xs mt-4 font-medium" style={{ color: MUTED }}>
        {footerLabel}
      </p>
    </div>
  );
};

export default AutomationWorkflowVisual;
