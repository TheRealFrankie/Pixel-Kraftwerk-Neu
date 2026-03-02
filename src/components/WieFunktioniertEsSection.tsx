'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Kostenlose Analyse',
    description:
      'Wir prüfen, ob Top-3-Rankings für Ihr Unternehmen und Ihre Region realistisch sind und wie groß das Potenzial ist. Was wir dabei anschauen: aktuelle Sichtbarkeit (Maps + organische Suche), Wettbewerb in Ihrem Gebiet (Leipzig, Groitzsch, Markkleeberg …), Suchbegriffe mit echtem Auftragspotenzial, größte Hebel (Profil, Website, Bewertungen, Inhalte, lokale Signale).',
  },
  {
    step: '02',
    title: 'Onboarding',
    description:
      'Sie erhalten klare Anweisungen, wie wir sicheren Zugriff auf Ihr Profil und die notwendigen Daten bekommen. Wichtig: Wir arbeiten sauber und transparent – ohne „Tricks“, die später Probleme machen.',
  },
  {
    step: '03',
    title: 'Umsetzung',
    description:
      'Wir setzen alle vereinbarten Maßnahmen um – von der Optimierung Ihres Profils bis zu den entscheidenden Signalen für Google. Das umfasst typischerweise: Google Business Profil (Kategorien, Leistungen, Inhalte, Fotos), Website-Onpage (Struktur, Texte, interne Verlinkung, lokale Relevanz), lokale Signale (Standort, NAP-Konsistenz, Citations), Bewertungssystem (sauber & regelkonform), Tracking/Messbarkeit. Wenn technische Themen anstehen (Performance, Tracking, strukturierte Daten), ist ein Softwareentwickler oft der Unterschied zwischen „läuft irgendwie“ und „läuft stabil“.',
  },
  {
    step: '04',
    title: 'Feintuning',
    description:
      'Wir tracken, welche Maßnahmen die größte Wirkung haben, und verstärken genau diese Hebel. SEO ist kein „Einmal-Fix“. In den ersten 90 Tagen passiert das Entscheidende: wir sehen, welche Keywords steigen, wir erkennen, was im Gebiet wirklich zieht, wir verbessern genau die Seiten/Signale, die Ranking + Anfragen pushen.',
  },
];

interface WieFunktioniertEsSectionProps {
  onCtaClick?: () => void;
}

const WieFunktioniertEsSection: React.FC<WieFunktioniertEsSectionProps> = ({ onCtaClick }) => {
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
              Kostenlose SEO-Analyse anfordern
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WieFunktioniertEsSection;
