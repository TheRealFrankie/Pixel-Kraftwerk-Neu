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
  /** Button-Beschriftung unter den Schritten (z. B. SEO-Seite: Gratis-Video-CTA) */
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
    <section className="py-20 bg-dark-500" aria-labelledby="wie-funktioniert-heading">
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
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
            >
              Wie kommen Sie in die <span className="text-primary-500">Top 3?</span>
            </h2>
            <p className="text-light-200 max-w-2xl mx-auto">
              Es ist einfacher, als die meisten denken. Der Weg in die Top 3 – Schritt für Schritt.
            </p>
          </motion.div>

          <div className="space-y-6 mb-10">
            {STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                className="flex items-start bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-colors duration-300 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl font-heading font-bold text-primary-500 mr-6 flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{item.title}</h3>
                  <p className="text-light-300">{item.description}</p>
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
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
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
