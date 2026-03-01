'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Phone
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const KiChatbots: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Website-Besucher keine schnelle Antwort erhalten',
    'Ihr Team immer wieder dieselben Fragen beantworten muss',
    'Anfragen außerhalb der Geschäftszeiten unbeantwortet bleiben',
    'Interessenten zur Konkurrenz wechseln, weil es dort schneller geht'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Live-Demo erleben',
      description: 'Testen Sie die digitale Kundenassistenz direkt auf unserer Website.'
    },
    {
      step: '02',
      title: 'Unverbindliches Gespräch',
      description: 'Wir besprechen kurz Ihre Anforderungen und Ziele.'
    },
    {
      step: '03',
      title: 'Individuelle Einrichtung',
      description: 'Die digitale Kundenassistenz wird speziell auf Ihr Unternehmen angepasst.'
    },
    {
      step: '04',
      title: 'Live-Schaltung & Optimierung',
      description: 'Wir begleiten den laufenden Betrieb und optimieren kontinuierlich.'
    }
  ];


  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Dienstleister & Agenturen', description: '' },
    { icon: <Briefcase size={28} />, title: 'Handwerk & lokale Betriebe', description: '' },
    { icon: <Stethoscope size={28} />, title: 'Praxen, Kanzleien & Beratungen', description: '' },
    { icon: <ShoppingBag size={28} />, title: 'E-Commerce & Service-Websites', description: '' }
  ];

  const targetAudienceCriteria = [
    'regelmäßig Kundenanfragen erhalten',
    'einen hohen Kommunikationsaufwand haben',
    'Anfragen strukturierter erfassen möchten',
    'ihre Erreichbarkeit über die Website verbessern wollen'
  ];

  const features = [
    'Automatische Begrüßung von Website-Besuchern',
    'Beantwortung häufig gestellter Fragen',
    'Vorqualifizierung von Anfragen',
    'Erfassung von Kontaktdaten und Anliegen',
    'Weiterleitung relevanter Anfragen an Ihr Team',
    'Termin- und Anfrageerfassung nach definierten Regeln',
    'Optional mehrsprachig einsetzbar'
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema serviceName="Digitale Kundenassistenz" serviceUrl="https://pixelkraftwerk-ai.com/ki-chatbots" />

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
              <MessageSquare size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digitale Kundenassistenz für Ihre Website
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-primary-500 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Ihre Website kann mehr, als nur informieren
            </motion.h2>

            <motion.p
              className="text-xl text-light-200 mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unsere digitale Kundenassistenz übernimmt Kundenanfragen, beantwortet häufige Fragen und erfasst Termine oder Anliegen – <strong>automatisch, zuverlässig und 24/7</strong>.
            </motion.p>

            <motion.div
              className="bg-primary-500/10 border border-primary-500/30 p-4 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-light-200">
                👉 <strong>Erleben Sie die digitale Kundenassistenz live</strong> – direkt hier auf der Website.<br />
                <em className="text-light-300 text-sm">Hinweis: Die Assistenz auf dieser Seite ist eine Live-Demo unseres Systems.</em>
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jetzt kostenloses Erstgespräch sichern
              <ArrowRight className="ml-2" size={24} />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Das Problem: <span className="text-primary-500">Anfragen kommen – aber nicht an</span>
              </h2>
              <p className="text-light-200 mb-8">
                Jeden Tag gehen potenzielle Kunden verloren, weil:
              </p>
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
                  <span className="text-primary-500 mr-4 mt-1 flex-shrink-0 text-xl">•</span>
                  <p className="text-light-200">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-light-100 mt-10 text-lg font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Das kostet Zeit, Geld und Nerven.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Die Lösung: <span className="text-primary-500">Eine Kundenassistenz, die für Sie arbeitet</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Unsere digitale Kundenassistenz übernimmt die erste Kommunikation mit Ihren Website-Besuchern – <strong>ohne zusätzliches Personal</strong>.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-400 p-8 border border-primary-500/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">In der Praxis bedeutet das:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">Besucher werden aktiv angesprochen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">Standardfragen werden selbstständig beantwortet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">Termine und Anfragen werden strukturiert erfasst</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">Nur relevante Anliegen landen bei Ihrem Team</span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              className="text-center text-primary-500 text-lg font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ➡️ Weniger Unterbrechungen. Mehr qualifizierte Anfragen.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Erleben Sie die <span className="text-primary-500">Kundenassistenz live</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Die Kundenassistenz auf dieser Website zeigt Ihnen <strong>live</strong>, wie das System arbeitet.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-500 p-8 border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-light-100 mb-4">Sie können:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 flex-shrink-0">•</span>
                  <span className="text-light-200">typische Kundenfragen stellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 flex-shrink-0">•</span>
                  <span className="text-light-200">Abläufe testen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 flex-shrink-0">•</span>
                  <span className="text-light-200">sehen, wie Anfragen strukturiert aufgenommen werden</span>
                </li>
              </ul>
              <p className="text-light-200 mt-6">
                <strong>So würde die Kundenassistenz auch bei Ihnen funktionieren</strong> – angepasst auf Ihr Unternehmen.
              </p>
            </motion.div>

            <motion.p
              className="text-center text-primary-500 text-lg font-bold mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ➡️ Starten Sie die Live-Demo direkt im Chat.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Was unsere digitale Kundenassistenz <span className="text-primary-500">leistet</span>
              </h2>
            </motion.div>

            <div className="bg-dark-400 p-8 border border-dark-100">
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-primary-500 mr-3 flex-shrink-0">•</span>
                    <span className="text-light-100">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-dark-100">
                <p className="text-light-200 text-center">
                  <strong>Wichtig:</strong> Die digitale Kundenassistenz ersetzt kein Fachpersonal – sie <strong>entlastet</strong>, filtert und strukturiert die Kommunikation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Mieten statt kaufen – <span className="text-primary-500">volle Transparenz</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Unsere digitale Kundenassistenz wird <strong>monatlich gemietet</strong>, nicht verkauft.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-500 p-8 border border-primary-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-6">Das bedeutet für Sie:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">Keine hohen Einmalkosten</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200"><strong>Keine Mindestlaufzeit</strong></span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">Kündigungsfrist: <strong>3 Monate zum Monatsende</strong></span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">Betrieb, Wartung und laufende Optimierung inklusive</span>
                </div>
              </div>
              <p className="text-light-200 mt-6 text-center">
                Sie bleiben flexibel – wir sorgen dafür, dass die Kundenassistenz dauerhaft Mehrwert liefert.
              </p>
            </motion.div>
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
                Für welche Unternehmen <span className="text-primary-500">ist das sinnvoll?</span>
              </h2>
              <p className="text-light-200 mb-8">
                Die digitale Kundenassistenz eignet sich besonders für Unternehmen, die:
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-400 p-8 border border-dark-100 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {targetAudienceCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-light-200">{criteria}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-bold text-light-100">Typische Einsatzbereiche:</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center bg-dark-400 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mb-4">{audience.icon}</div>
                  <h3 className="text-sm font-heading font-bold text-light-100">{audience.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                So starten wir <span className="text-primary-500">gemeinsam</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl font-heading font-bold text-primary-500 mr-6 flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{step.title}</h3>
                    <p className="text-light-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-dark-400 border border-primary-500/30 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <Phone size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">
                    Viele Anfragen kommen auch per Telefon.
                  </h3>
                  <p className="text-light-300 mb-4">
                    Unsere telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet häufige Fragen und erfasst Anliegen automatisch.
                  </p>
                  <a
                    href="/telefonassistenten"
                    className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200"
                  >
                    Mehr zur telefonischen Kundenassistenz
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="ki-chatbots"
        relatedSlugs={['telefonassistenten', 'termine-buchungen', 'crm-lead-management', 'webseite', 'seo-top-3-in-google']}
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
              Bereit für <span className="text-primary-500">bessere Kundenkommunikation?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Wenn Sie möchten, zeigen wir Ihnen <strong>individuell</strong>,<br />
              wie die digitale Kundenassistenz in Ihrem Unternehmen eingesetzt werden kann.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              >
                Jetzt kostenloses Erstgespräch sichern
                <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>
            <motion.p
              className="text-light-300 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ohne Testzugang. Ohne Verpflichtung. Mit klarer Erwartung.
            </motion.p>
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
            <RegionServiceLinksBlock serviceSlug="ki-chatbots" title="KI-Chatbots in Ihrem Gebiet" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-dark-500/50 border border-primary-500/20 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-primary-500 mb-2">Hinweis</h3>
              <p className="text-light-300 text-sm">
                Die Kundenassistenz auf dieser Website dient als Demo.<br />
                Jede digitale Kundenassistenz wird individuell eingerichtet und angepasst.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default KiChatbots;
