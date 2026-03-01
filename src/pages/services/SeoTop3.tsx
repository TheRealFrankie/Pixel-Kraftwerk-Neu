'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  CheckCircle,
  XCircle,
  TrendingUp,
  DollarSign,
  Shield,
  ChevronDown,
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import VorherNachherSection from '../../components/VorherNachherSection';
import WieFunktioniertEsSection from '../../components/WieFunktioniertEsSection';

const SeoTop3: React.FC = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Kunden suchen bei Google nach Ihrer Leistung – und landen bei Ihrer Konkurrenz.',
    'Ihre Website ist online, bringt aber kaum qualifizierte Anfragen.',
    'Sie investieren in Werbung, ohne genau zu wissen, was wirklich funktioniert.',
    'Ihre Konkurrenz dominiert die lokale Suche – Sie werden kaum gesehen.',
  ];

  /** Eine Sektion „Was Sie bekommen“: Angebot + zentrale Benefits kombiniert (Plan: keine Dopplung zu „Was das für Sie bedeutet“). */
  const offerBullets = [
    'Analyse Ihrer Sichtbarkeit und der Konkurrenz.',
    'Keyword-Auswahl mit echtem Auftragspotenzial.',
    'Onpage-Optimierung Ihrer Website.',
    'Lokale Signale (Maps, Standort, Bewertungen) stärken.',
    'Monitoring & Feintuning über mindestens 90 Tage.',
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: 'Mehr Sichtbarkeit, mehr Anfragen',
      text: 'Ihre Website erscheint oben, wenn Kunden nach Ihrer Leistung suchen.',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Planbares Umsatzpotenzial',
      text: 'Mehr qualifizierte Anfragen – besonders für lokale Dienstleister.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Transparent & regional',
      text: 'Klare Kommunikation; ideal für Leipzig, Groitzsch und die Region.',
    },
  ];

  const faqs = [
    {
      question: 'Ist die Top-3-Platzierung bei Google garantiert?',
      answer:
        'Wir arbeiten mit 90-Tage-Fokus auf Ihre wichtigsten Keywords; Ziel ist die Top 3, wo realistisch. Vorab sprechen wir offen über Wettbewerb, Region und Ausgangslage.',
    },
    {
      question: 'Für wen lohnt sich dieses SEO-Angebot?',
      answer:
        'Vor allem für lokale Dienstleister, Praxen und Betriebe, bei denen Kunden nach Leistungen vor Ort suchen. In einem kurzen Potenzialgespräch prüfen wir, ob SEO für Sie Sinn ergibt.',
    },
    {
      question: 'Brauche ich zwingend eine neue Website?',
      answer:
        'Nicht unbedingt. Oft bauen wir auf Ihrer bestehenden Website auf. Bei ungeeigneter Struktur oder Technik empfehlen wir eine Modernisierung – die setzen wir auf Wunsch mit um.',
    },
    {
      question: 'Wie lange dauert es, bis Ergebnisse sichtbar werden?',
      answer:
        'Viele sehen innerhalb weniger Wochen erste Bewegungen. Unser Zielzeitraum für stabile, bessere Rankings liegt bei rund 90 Tagen.',
    },
    {
      question: 'Wie misst Pixel Kraftwerk den Erfolg?',
      answer:
        'Wir beobachten Ihre wichtigsten Keywords, die Sichtbarkeit Ihrer Website und die Anzahl der Anfragen. Sie erhalten regelmäßig eine verständliche Zusammenfassung.',
    },
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema
        serviceName="Top 3 in Google in 90 Tagen"
        serviceUrl="https://pixelkraftwerk-ai.com/seo-top-3-in-google"
      />

      <section className="relative pt-32 pb-20 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 border border-primary-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Search size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Top 3 in Google in 90 Tagen
              <span className="block text-primary-500 mt-2">– für die Suchbegriffe, die Kunden bringen</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Wir sorgen dafür, dass Ihr Unternehmen dort erscheint, wo Kunden klicken – in den Top-Ergebnissen. Speziell für{' '}
              <a href="/leistungsgebiete/leipzig" className="text-primary-400 hover:underline">Leipzig</a>,{' '}
              <a href="/leistungsgebiete/groitzsch" className="text-primary-400 hover:underline">Groitzsch</a>,{' '}
              <a href="/leistungsgebiete/markkleeberg" className="text-primary-400 hover:underline">Markkleeberg</a> und die Region.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose SEO-Analyse anfordern
            </motion.button>
          </div>
        </div>
      </section>

      <VorherNachherSection />

      <WieFunktioniertEsSection onCtaClick={scrollToContact} />

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-2">
                Kommt Ihnen das <span className="text-primary-500">bekannt vor?</span>
              </h2>
              <p className="text-light-300 text-sm max-w-xl mx-auto">Was online nicht gefunden wird, bringt keine neuen Aufträge.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <XCircle className="text-red-400 mr-4 mt-1 flex-shrink-0" size={20} />
                  <p className="text-light-200">{problem}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Was Sie <span className="text-primary-500">bekommen</span>
              </h2>
              <p className="text-light-300 max-w-2xl mx-auto text-sm">Unser SEO-Angebot und der Nutzen für Sie – kompakt.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {offerBullets.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-400 p-4 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-light-200 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-5 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mb-2">{benefit.icon}</div>
                  <h3 className="text-base font-heading font-bold text-light-100 mb-1">{benefit.title}</h3>
                  <p className="text-light-300 text-sm">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              className="text-light-300 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Für starke Rankings braucht es eine ebenso starke Website.&nbsp;
              <a href="/webseite" className="text-primary-400 hover:underline">
                Hier erfahren Sie mehr zu unseren Webseiten im Mietmodell.
              </a>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              id="faq-heading"
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Häufige Fragen zum <span className="text-primary-500">SEO-Angebot</span>
              </h2>
            </motion.div>

            <div className="space-y-2" role="list">
              {faqs.map((faq, index) => {
                const isOpen = faqOpenIndex === index;
                return (
                  <motion.div
                    key={index}
                    className="bg-dark-500 border border-dark-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-heading font-bold text-light-100 hover:bg-dark-400/50 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-primary-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-light-300 text-sm px-5 pb-4 pt-0">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="seo-top-3-in-google"
        relatedSlugs={['ki-chatbots', 'telefonassistenten', 'termine-buchungen', 'webseite', 'content-video']}
      />

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Wie viele Kunden verlieren Sie aktuell <span className="text-primary-500">an Ihre Konkurrenz?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns Ihr Potenzial gemeinsam prüfen – mit einer kostenlosen SEO-Analyse.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ArrowRight className="mr-2" size={24} />
              SEO-Potenzialcheck anfragen
            </motion.button>
            <motion.p
              className="text-light-300 text-sm mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Noch Fragen? Viele Antworten finden Sie in unseren{' '}
              <a href="/faq" className="text-primary-400 hover:underline">
                FAQ
              </a>
              .
            </motion.p>
            <ServicedRegionsBlock />
            <div className="bg-dark-400 border border-dark-100 p-6 mt-8 text-center">
              <h3 className="text-lg font-heading font-bold text-light-100 mb-3">Diese Gebiete bedienen wir</h3>
              <p className="text-sm text-light-300 mb-3">
                {LEISTUNGSGEBIETE_CITIES.slice(0, 5).map((city, i) => (
                  <React.Fragment key={city.slug}>
                    <a href={`/leistungsgebiete/${city.slug}`} className="text-primary-400 hover:underline">
                      {city.name}
                    </a>
                    {i < 4 ? ' · ' : ''}
                  </React.Fragment>
                ))}
                {' · '}
                <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">
                  Alle Leistungsgebiete
                </a>
              </p>
            </div>
            <RegionServiceLinksBlock
              serviceSlug="website-seo"
              title="SEO: Top 3 in Google in Ihrem Gebiet"
            />
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default SeoTop3;

