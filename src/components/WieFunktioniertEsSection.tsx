'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Kostenlose Potenzialanalyse',
    description:
      'Wir prüfen Ihre aktuelle Sichtbarkeit, relevante Suchbegriffe, Ihr Google-Unternehmensprofil und die technischen Grundlagen Ihrer Website.',
  },
  {
    step: '02',
    title: 'Strategie & Prioritäten',
    description:
      'Auf Basis der Analyse legen wir fest, welche Suchbegriffe realistisch verbesserbar sind und in welcher Reihenfolge Maßnahmen den größten Effekt haben.',
  },
  {
    step: '03',
    title: 'Technische & inhaltliche Optimierung',
    description:
      'Seitentitel, Überschriften, Inhalte, interne Verlinkung und technische Fehler werden gezielt verbessert – sauber und nachvollziehbar.',
  },
  {
    step: '04',
    title: 'Lokale Signale stärken',
    description:
      'Google-Unternehmensprofil, Standortseiten, Einsatzgebiete, Bewertungen und konsistente Unternehmensdaten werden optimiert.',
  },
  {
    step: '05',
    title: 'Entwicklung messen',
    description:
      'Wir beobachten die Entwicklung relevanter Suchbegriffe, Klicks, Anrufe und Anfragen – und machen Veränderungen für Sie sichtbar.',
  },
  {
    step: '06',
    title: 'Weiter optimieren',
    description:
      'Suchverhalten und Wettbewerb verändern sich. Wir passen die Strategie regelmäßig an, damit die Sichtbarkeit erhalten bleibt und weiter wächst.',
  },
];

interface WieFunktioniertEsSectionProps {
  onCtaClick?: () => void;
  ctaLabel?: string;
}

const WieFunktioniertEsSection: React.FC<WieFunktioniertEsSectionProps> = ({
  onCtaClick,
  ctaLabel = 'Kostenlose SEO-Potenzialanalyse anfragen',
}) => {
  const scrollToContact = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20" style={{ background: '#F4F7F6' }} aria-labelledby="wie-funktioniert-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              id="wie-funktioniert-heading"
              className="text-2xl md:text-3xl font-heading font-bold mb-4"
              style={{ color: '#0C1210' }}
            >
              So verbessern wir Ihre{' '}
              <span style={{ color: '#0E7C72' }}>lokale Sichtbarkeit</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#404B48' }}>
              Schritt für Schritt – transparent, nachvollziehbar und auf Ihre Ausgangslage abgestimmt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                className="flex items-start gap-5 rounded-2xl border bg-white p-6"
                style={{ borderColor: '#E4E9E7', boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl font-heading font-bold text-base"
                  style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72', border: '1px solid rgba(14,124,114,0.2)' }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold mb-1.5" style={{ color: '#0C1210' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#68746F' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold text-base rounded-xl transition-all duration-300"
              style={{ background: '#0E7C72', color: '#FFFFFF' }}
            >
              {ctaLabel}
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WieFunktioniertEsSection;
