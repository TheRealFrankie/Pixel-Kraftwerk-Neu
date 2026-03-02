'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
        'Wir garantieren Top-3-Rankings in 90 Tagen – aber nicht „für jedes Fantasie-Keyword“. Entscheidend ist, dass wir gemeinsam Suchbegriffe wählen, die echtes Auftragspotenzial haben, in Ihrem Gebiet realistisch zu gewinnen sind und zu Ihrem Angebot passen. Genau dafür startet alles mit der kostenlosen Analyse.',
    },
    {
      question: 'Für wen lohnt sich dieses SEO-Angebot?',
      answer:
        'Für lokale Unternehmen, die regelmäßig Aufträge über Google gewinnen wollen – besonders: Dienstleister & Handwerk, Praxen, Kanzleien, Beratung, lokale Betriebe mit klaren Leistungen und Einzugsgebiet.',
    },
    {
      question: 'Brauche ich zwingend eine neue Website?',
      answer:
        'Nicht zwingend. Aber: Wenn die Website langsam ist, unklar aufgebaut ist oder keine sauberen Leistungsseiten hat, bremst sie SEO aus. Oft reichen gezielte Verbesserungen – manchmal lohnt ein Neustart im Mietmodell.',
    },
    {
      question: 'Wie lange dauert es, bis Ergebnisse sichtbar werden?',
      answer:
        'Oft sieht man erste Bewegungen nach wenigen Wochen – echte Stabilität baut sich über Monate auf. Die ersten 90 Tage sind das Fundament: Setup + Maßnahmen + Feintuning.',
    },
    {
      question: 'Wie misst Pixel Kraftwerk den Erfolg?',
      answer:
        'Wir messen nicht nur Rankings, sondern das, was zählt: Sichtbarkeit in Ihrem Gebiet, Klicks/Anrufe/Nachrichten, Anfragen über Website/GBP, Entwicklung der wichtigsten Suchbegriffe. Wenn gewünscht, kann ein Softwareentwickler Tracking/Events so umsetzen, dass Sie genau sehen, welche Seiten/Keywords Umsatz bringen.',
    },
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema
        serviceName="Top 3 in Google in 90 Tagen"
        serviceUrl="https://pixelkraftwerk-ai.com/seo-top-3-in-google"
      />

      {/* Hero mit Premium-Hintergrundbild – Bild unterhalb der Header-Leiste */}
      <section id="lokale-sichtbarkeit-ausbauen" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-500">
        <div className="absolute top-20 left-0 right-0 bottom-0 md:top-24">
          <Image
            src="/images/top 3 in google suche.png"
            alt="Top 3 in Google – SEO Sichtbarkeit"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/50 to-dark-500/95" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-500/30 via-transparent to-dark-500/40" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500/15 to-transparent" aria-hidden />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 border border-primary-500/40 backdrop-blur-sm mb-8 shadow-primary-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Search size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 leading-tight"
              style={{
                color: '#F5F7FA',
                textShadow: '0 10px 30px rgba(0,0,0,0.65)',
                WebkitTextStroke: '1px rgba(0,0,0,0.25)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Top 3 in Google in 90 Tagen
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-400 mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              – für die Suchbegriffe, die Kunden bringen
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{
                color: '#F5F7FA',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
              }}
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
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose SEO-Analyse anfordern
            </motion.button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Kurz erklärt: Was „Top 3 in Google“ bei lokalen Unternehmen wirklich heißt
            </motion.h2>
            <motion.div
              className="space-y-4 text-light-200 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                Wenn lokale Unternehmen „Top 3“ sagen, meinen sie fast immer die sichtbaren Top-Ergebnisse in der lokalen Suche (Google Maps/Local Pack) – dort, wo Kunden direkt klicken: <strong className="text-light-100">Anrufen, Route, Website</strong>.
              </p>
              <p>
                Das Ziel ist nicht „Traffic um jeden Preis“, sondern:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>mehr qualifizierte Anfragen</li>
                <li>mehr Anrufe und Nachrichten</li>
                <li>mehr Termine</li>
                <li>weniger Abhängigkeit von Ads</li>
              </ul>
              <p>
                Und genau deshalb setzen wir nicht auf Tricks, sondern auf die Signale, die langfristig wirken: <strong className="text-light-100">Relevanz, Vertrauen und lokale Stärke</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <VorherNachherSection />

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Warum Top 3 so viel verändert (ohne dass Sie mehr arbeiten müssen)
            </motion.h2>
            <motion.div
              className="space-y-4 text-light-200 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                Wenn Sie sichtbar sind, passiert Folgendes automatisch:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Kunden finden Sie genau dann, wenn Bedarf da ist</li>
                <li>die Konkurrenz verliert Anteile, ohne dass Sie „lauter“ werden müssen</li>
                <li>Ihre Website/Telefon klingelt, ohne dass Sie pro Klick bezahlen</li>
              </ul>
              <p>
                SEO ist damit ein <strong className="text-light-100">Planbarkeits-Hebel</strong> – besonders für Dienstleister und lokale Betriebe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-light-100 mb-3">Was das in Kundensprache bedeutet</h3>
              <ul className="space-y-2 text-light-200 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>Google versteht klar, <strong className="text-light-100">was Sie anbieten</strong> und <strong className="text-light-100">für wen</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>Kunden sehen Sie dort, wo sie klicken</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>Anfragen kommen nicht „zufällig“, sondern planbarer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>Ihre Sichtbarkeit baut sich auf – und bleibt stabil</span>
                </li>
              </ul>
            </motion.div>

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

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Wie wir Keywords auswählen (damit es wirklich Kunden bringt)
            </motion.h2>
            <motion.div
              className="space-y-4 text-light-200 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                Viele SEO-Anbieter schießen auf „viel Suchvolumen“. Wir fokussieren auf Suchbegriffe, die <strong className="text-light-100">zu Aufträgen führen</strong>.
              </p>
              <p>Beispiel-Logik:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Leistung + Ort (z. B. „[Leistung] Leipzig“)</li>
                <li>„in der Nähe“ / „Notdienst“ / „Termin“ (wenn passend)</li>
                <li>konkrete Probleme („[Problem] beheben“, „Kosten“, „Ablauf“)</li>
                <li>Longtail, der leichter zu gewinnen ist – aber extrem qualifiziert</li>
              </ul>
              <p>
                So entsteht ein Keyword-Set, das realistisch zu ranken ist und trotzdem Umsatz bringt. Als Online-Marketing-Unternehmen arbeiten wir hier nicht mit „Gefühl“, sondern mit klarer Priorisierung: schnelle Wins zuerst, dann Ausbau.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was in den Top 3 wirklich zählt (die 3 Hebel)
            </motion.h2>
            <motion.p
              className="text-light-200 text-sm md:text-base mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
            >
              Damit Google Sie oben zeigt, braucht es vor allem:
            </motion.p>
            <div className="space-y-4">
              <motion.div
                className="bg-dark-400 p-5 border border-dark-100 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-heading font-bold text-light-100 mb-2">1) Relevanz</h3>
                <p className="text-light-200 text-sm">Ihr Profil und Ihre Website müssen klar signalisieren, welche Leistungen Sie anbieten (und in welchem Gebiet).</p>
              </motion.div>
              <motion.div
                className="bg-dark-400 p-5 border border-dark-100 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-heading font-bold text-light-100 mb-2">2) Vertrauen / Prominenz</h3>
                <p className="text-light-200 text-sm">Bewertungen, Referenzen, echte Aktivität, starke Inhalte – damit Google und Kunden Ihnen glauben.</p>
              </motion.div>
              <motion.div
                className="bg-dark-400 p-5 border border-dark-100 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-heading font-bold text-light-100 mb-2">3) Konsistenz</h3>
                <p className="text-light-200 text-sm">Daten, Standortsignale, Inhalte und Verlinkungen müssen zusammenpassen – ohne Chaos.</p>
              </motion.div>
            </div>
            <motion.p
              className="text-light-200 text-sm mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              Genau diese drei Punkte bildet unser 90-Tage-Programm ab.
            </motion.p>
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
                Webseiten im Mietmodell – starke Website als SEO-Basis
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
        anchorBySlug={{
          'ki-chatbots': '#ki-chatbot-fur-website-anfragen',
          'telefonassistenten': '#ki-telefonagent-fur-anrufe',
          'automatisierungen': '#automatisierungen-fur-follow-ups-terminplanung',
          'webseite': '#website-als-seo-basis',
        }}
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
            <RegionServiceLinksBlock
              serviceSlug="seo-top-3"
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

