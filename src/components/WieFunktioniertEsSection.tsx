'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Kostenlose Analyse',
    description:
      'Wir prüfen, wie groß das Potenzial für Ihr Unternehmen in Ihrer Region ist – und ob Top-3-Rankings realistisch erreichbar sind.',
  },
  {
    step: '02',
    title: 'Onboarding',
    description:
      'Sie erhalten alles, was wir für den Start brauchen. Wir arbeiten sauber, transparent und ohne fragwürdige Methoden.',
  },
  {
    step: '03',
    title: 'Umsetzung',
    description:
      'Wir kümmern uns um alles. Von Ihrem Online-Profil bis zu den entscheidenden Faktoren, die Google für die Platzierung berücksichtigt.',
  },
];

interface WieFunktioniertEsSectionProps {
  onCtaClick?: () => void;
  ctaLabel?: string;
}

const WieFunktioniertEsSection: React.FC<WieFunktioniertEsSectionProps> = ({
  onCtaClick,
  ctaLabel = 'Kostenlose SEO-Analyse anfordern',
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
              Wie kommen Sie in die <span style={{ color: '#0E7C72' }}>Top 3?</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#404B48' }}>
              Es ist einfacher, als die meisten denken. Der Weg in die Top 3 – Schritt für Schritt.
            </p>
          </motion.div>

          <div className="space-y-4 mb-10">
            {STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                className="flex items-start gap-5 rounded-2xl border bg-white p-6 shadow-card"
                style={{ borderColor: '#E4E9E7' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl font-heading font-bold text-lg"
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
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300 rounded-xl"
            >
              <ArrowRight className="mr-2" size={24} />
              {ctaLabel}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WieFunktioniertEsSection;
