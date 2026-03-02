'use client';

import React from 'react';
import Image from 'next/image';
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
      title: 'Schritt 1 – Live-Demo erleben',
      description: 'Testen Sie die digitale Kundenassistenz direkt auf unserer Website.'
    },
    {
      step: '02',
      title: 'Schritt 2 – Unverbindliches Gespräch',
      description: 'Wir besprechen kurz Ihre Anforderungen und Ziele.'
    },
    {
      step: '03',
      title: 'Schritt 3 – Individuelle Einrichtung',
      description: 'Die digitale Kundenassistenz wird speziell auf Ihr Unternehmen angepasst.'
    },
    {
      step: '04',
      title: 'Schritt 4 – Live-Schaltung & Optimierung',
      description: 'Wir begleiten den laufenden Betrieb und optimieren kontinuierlich.'
    }
  ];

  const faqItems = [
    {
      question: 'Ersetzt das meinen Support oder Vertrieb?',
      answer: 'Nein. Es entlastet. Die Assistenz übernimmt Standardfragen und sammelt Infos – Ihr Team kümmert sich um die wichtigen Fälle.'
    },
    {
      question: 'Funktioniert das auch bei komplexen Leistungen?',
      answer: 'Ja, wenn man die Wissensbasis sauber aufbaut und klare Grenzen setzt (wann an Menschen übergeben wird).'
    },
    {
      question: 'Wie schnell kann das live gehen?',
      answer: 'Ein MVP kann sehr schnell starten. Individuelle Einrichtung + Integrationen brauchen etwas mehr Setup – dafür kommt es dann perfekt bei Ihnen an.'
    },
    {
      question: 'Kann man das mehrsprachig nutzen?',
      answer: 'Ja, optional mehrsprachig.'
    },
    {
      question: 'Was ist mit Datenschutz / DSGVO?',
      answer: 'Wir achten auf Datenminimierung, Transparenz und saubere Prozesse (z. B. welche Daten abgefragt werden und wohin sie gehen).'
    },
    {
      question: 'Brauche ich dafür einen Softwareentwickler?',
      answer: 'Nicht zwingend. Für einfache FAQ/Lead-Erfassung reicht oft ein Standard-Setup. Für tiefe Integrationen (CRM, Kalender, Ticket-System) ist ein Software-Entwickler / Softwareentwickler sinnvoll.'
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

      {/* Hero mit Premium-Hintergrundbild – Bild beginnt unterhalb der Header-Leiste */}
      <section id="digitale-kundenassistenz" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-500">
        <span id="ki-chatbot-fur-ihre-website" className="absolute top-0 left-0" aria-hidden="true" />
        {/* Bild-Container: erst ab Header-Höhe, geht nicht über die Menüleiste */}
        <div className="absolute top-20 left-0 right-0 bottom-0 md:top-24">
          <Image
            src="/images/Chatbot - digitaleKundenassitenz.png"
            alt="Digitale Kundenassistenz – KI-Chatbot im Einsatz"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Mehrschichtiger Overlay: Lesbarkeit + Premium-Look */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/50 to-dark-500/95"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-500/30 via-transparent to-dark-500/40" aria-hidden />
          {/* Dezenter Primary-Glow unten */}
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
              <MessageSquare size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            {/* Headline: Typografie nur – weiches Weiß, Schatten, optionaler Stroke für Lesbarkeit */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 leading-tight"
              style={{
                color: '#F5F7FA',
                textShadow: '0 10px 30px rgba(0,0,0,0.65)',
                WebkitTextStroke: '1px rgba(0,0,0,0.25)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digitale Kundenassistenz für Ihre Website (KI-Chatbot)
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-400 mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Ihre Website kann mehr, als nur informieren
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed font-sans"
              style={{
                color: '#F5F7FA',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ihre Website kann mehr als nur schön aussehen und Leistungen aufzählen: Sie kann <strong style={{ color: '#F5F7FA' }}>Anfragen annehmen, Fragen beantworten und Termine erfassen</strong> – automatisch, zuverlässig und <strong style={{ color: '#F5F7FA' }}>24/7</strong>.
            </motion.p>
            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed font-sans"
              style={{
                color: '#F5F7FA',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unsere digitale Kundenassistenz übernimmt die erste Kommunikation mit Ihren Website-Besuchern, beantwortet häufige Fragen und erfasst Termine oder Anliegen – so, dass bei Ihnen <strong style={{ color: '#F5F7FA' }}>nur die wirklich relevanten Anfragen</strong> ankommen.
            </motion.p>

            <motion.div
              className="border border-primary-500/40 rounded-xl px-4 py-4 sm:px-5 sm:py-4 mb-8 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: '#F5F7FA',
                  textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                  WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
                }}
              >
                👉 <strong>Erleben Sie die digitale Kundenassistenz live – direkt hier auf der Website.</strong>
              </p>
              <p
                className="mt-2 text-sm sm:text-base"
                style={{
                  color: '#E8EAED',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                <em>Hinweis: Die Assistenz auf dieser Seite ist eine Live-Demo unseres Systems.</em>
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jetzt kostenloses Erstgespräch sichern
              <ArrowRight className="ml-2" size={24} />
            </motion.button>
          </div>
        </div>
        {/* Feine Trennlinie am unteren Hero-Rand */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
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
                Jeden Tag gehen potenzielle Kunden verloren, weil …
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

            <motion.div
              className="mt-12 bg-dark-500 p-8 border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Warum Besucher abspringen</h3>
              <p className="text-light-200 mb-4">
                Viele Besucher sind nicht „nur neugierig“. Sie haben eine konkrete Frage – und wenn sie nicht sofort eine Antwort bekommen, schließen sie den Tab. Das passiert besonders häufig bei:
              </p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Preis-/Kostenfragen („Was kostet das ungefähr?“)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Verfügbarkeiten („Wann wäre der nächste Termin?“)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Einzugsgebiet/Ort („Kommt ihr auch nach …?“)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Ablauf („Wie läuft das ab?“)</li>
              </ul>
            </motion.div>

            <motion.div
              className="mt-8 bg-dark-500 p-8 border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Was das Sie täglich kostet (Zeit, Geld, Nerven)</h3>
              <p className="text-light-200">
                Jede unbeantwortete Anfrage ist ein möglicher Auftrag, der gar nicht erst in Ihrem System ankommt. Und jede Standardfrage bindet Zeit, die Sie eigentlich für Kunden, Projekte oder Teamführung brauchen.
              </p>
            </motion.div>
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

            <motion.div
              className="bg-dark-400 p-8 border border-dark-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Was die Assistenz konkret übernimmt</h3>
              <p className="text-light-200 mb-4">Je nach Unternehmen übernehmen wir z. B.:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Erste Fragen klären (Ort, Anliegen, Dringlichkeit)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Infos geben (Ablauf, Verfügbarkeit, Einzugsgebiet)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Kontaktdaten erfassen (Name, Telefon, E-Mail)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Terminwünsche abfragen oder direkt zur Buchung führen</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Übergabe an Ihr Team (E-Mail/CRM/Übersicht)</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-dark-400 p-8 border border-dark-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Was bei Ihrem Team landet (nur relevante Anliegen)</h3>
              <p className="text-light-200 mb-4">Statt „Hi, ich hab da mal ne Frage…“ bekommt Ihr Team strukturierte Infos, z. B.:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Name + Telefonnummer</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Anliegen in Klartext</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Ort / Einsatzgebiet</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Wunschzeitpunkt / Dringlichkeit</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Kontext (welche Seite besucht wurde, welche Auswahl getroffen wurde)</li>
              </ul>
              <p className="text-light-200 mt-4">So können Sie schneller entscheiden, wer wann zurückruft – und verlieren weniger Leads.</p>
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
                Kurz erklärt: Was ist eine digitale Kundenassistenz (KI-Chatbot)?
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Eine digitale Kundenassistenz ist ein KI-gestützter Website-Chat, der Besucher:innen <strong>sofort</strong> hilft – auch abends, am Wochenende oder wenn Ihr Team gerade im Kundentermin steckt.
              </p>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Statt „Schreiben Sie uns eine Mail“ bekommen Besucher direkt Antworten wie:
              </p>
              <ul className="text-light-200 max-w-3xl mx-auto mb-8 space-y-2 list-disc list-inside">
                <li>„Ja, wir sind in Ihrem Gebiet unterwegs.“</li>
                <li>„So läuft der Ablauf – in 3 Schritten.“</li>
                <li>„Ich nehme kurz die Infos auf und melde mich mit einem Terminvorschlag.“</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-dark-400 p-8 border border-dark-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Für wen das gedacht ist</h3>
              <p className="text-light-200">
                Besonders sinnvoll ist das für Unternehmen mit: regelmäßig wiederkehrenden Kundenfragen, vielen Kontaktanfragen über Website oder Telefon, hohem „Orga“-Anteil (Terminabsprachen, Rückrufwünsche, Vorqualifizierung) sowie mehreren Leistungen / Standorten / Einsatzgebieten.
              </p>
            </motion.div>
            <motion.div
              className="bg-dark-400 p-8 border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Was sie nicht ist (kein Ersatz für Fachpersonal)</h3>
              <p className="text-light-200">
                <strong>Wichtig:</strong> Die digitale Kundenassistenz ersetzt kein Fachpersonal – sie entlastet, filtert und strukturiert die Kommunikation. Bei komplexen Fällen wird sauber an Ihr Team übergeben.
              </p>
            </motion.div>
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
                Erleben Sie die <span className="text-primary-500">Kundenassistenz live (Demo)</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Die Kundenassistenz auf dieser Website zeigt Ihnen <strong>live</strong>, wie das System arbeitet.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-500 p-8 border border-dark-100 mb-8"
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
              <p className="text-light-200 mt-6">So würde die Kundenassistenz auch bei Ihnen funktionieren – angepasst auf Ihr Unternehmen.</p>
            </motion.div>

            <motion.div
              className="bg-dark-500 p-8 border border-dark-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-light-100 mb-4">Was Sie testen können</h3>
              <p className="text-light-200 mb-4">Probieren Sie z. B.:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>„Was kostet das ungefähr?“</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>„Kommt ihr auch nach [Ort]?“</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>„Ich brauche einen Termin nächste Woche.“</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>„Wie läuft das ab?“</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>„Kann ich zurückgerufen werden?“</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-dark-500 p-8 border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold text-light-100 mb-4">So würde es bei Ihnen aussehen (individuell angepasst)</h3>
              <p className="text-light-200 mb-4">Wir richten die Assistenz so ein, dass sie:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>zu Ihrer Branche passt (Wording, typische Fragen)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Ihre Leistungen korrekt erklärt (ohne zu viel zu versprechen)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Leads so erfasst, wie Ihr Team sie wirklich braucht</li>
              </ul>
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
                <p className="text-light-200 text-center mb-8">
                  <strong>Wichtig:</strong> Die digitale Kundenassistenz ersetzt kein Fachpersonal – sie <strong>entlastet</strong>, filtert und strukturiert die Kommunikation.
                </p>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Funktionen im Überblick</h3>
                <p className="text-light-200 mb-4">Je nach Setup kann die Assistenz:</p>
                <ul className="space-y-2 text-light-200">
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Antworten aus Ihrer Wissensbasis geben (FAQ, Leistungen, Ablauf)</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Besucher durch klare Optionen führen (Buttons statt Textwände)</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>bei Unsicherheit nachfragen (statt irgendwas zu erfinden)</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>bei „kritischen“ Anliegen an Menschen übergeben</li>
                </ul>
                <h3 className="text-xl font-heading font-bold text-light-100 mt-8 mb-4">Optional: Mehrsprachigkeit & Regeln</h3>
                <p className="text-light-200 mb-4">Optional kann die Assistenz:</p>
                <ul className="space-y-2 text-light-200">
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>mehrere Sprachen sprechen</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>feste Regeln berücksichtigen (z. B. Einzugsgebiet, Öffnungszeiten, Terminlogik)</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Anfragen nach Kategorien sortieren (Support, Angebot, Termin, Rückruf)</li>
                </ul>
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
                Was passiert mit den Anfragen – und wie kommt das bei Ihnen an?
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Damit es nicht bei „Chatverlauf irgendwo“ bleibt, sorgen wir für klare Übergaben. Beispiele: E-Mail mit allen Infos (Name, Anliegen, Ort, Wunschzeit), CRM / Tabellen-Übersicht für strukturierte Nachverfolgung, automatische Terminlogik (wenn gewünscht). Wenn Integrationen tiefer gehen (z. B. CRM, Kalender, Ticket-System), setzen wir das sauber um – je nach Setup auch gemeinsam mit einem Software-Entwickler / Softwareentwickler in Ihrem Team oder bei uns.
              </p>
            </motion.div>
            <motion.div
              className="bg-dark-500 p-8 border border-dark-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Übergabe per E-Mail / CRM / Tabelle</h3>
              <p className="text-light-200 mb-4">Sie entscheiden, wie Ihr Team am liebsten arbeitet:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>E-Mail an eine oder mehrere Adressen</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>zentrale Übersicht (z. B. für Vertrieb/Backoffice)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>CRM-Eintrag mit Tags und Feldern</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-dark-500 p-8 border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Integrationen & Automatisierung (wenn nötig mit Software-Entwickler / Softwareentwickler)</h3>
              <p className="text-light-200">
                Wenn Sie mehr Automatisierung wollen (z. B. „Lead kommt rein → wird zugewiesen → wird nachgefasst“), dann ist das genau der Punkt, wo eine technische Umsetzung durch erfahrene Automations-Teams oder Softwareentwickler den größten Unterschied macht.
              </p>
            </motion.div>
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
                Baukasten vs. individuelle Einrichtung (Mini-Vergleich)
              </h2>
            </motion.div>
            <motion.div
              className="overflow-x-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <table className="w-full border-collapse bg-dark-400 border border-dark-100">
                <thead>
                  <tr>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Setup</th>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Gut, wenn…</th>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Ergebnis</th>
                  </tr>
                </thead>
                <tbody className="text-light-200 text-sm">
                  <tr>
                    <td className="border border-dark-100 p-3">Schnell-Setup (MVP)</td>
                    <td className="border border-dark-100 p-3">Sie wollen testen & schnell live gehen</td>
                    <td className="border border-dark-100 p-3">Sofort weniger Standardfragen</td>
                  </tr>
                  <tr>
                    <td className="border border-dark-100 p-3">Individuelle Einrichtung</td>
                    <td className="border border-dark-100 p-3">Sie wollen sauberes Routing + echte Prozesse</td>
                    <td className="border border-dark-100 p-3">Mehr qualifizierte Leads & weniger Aufwand</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div
              className="bg-dark-400 p-8 border border-dark-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Schnell-Setup (MVP)</h3>
              <p className="text-light-200 mb-4">Ideal, wenn Sie:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>erstmal live testen möchten</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>schnell sehen wollen, welche Fragen wirklich kommen</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>ohne großen Aufwand starten wollen</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-dark-400 p-8 border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Individuelle Einrichtung (Integrationen & Prozesse)</h3>
              <p className="text-light-200 mb-4">Ideal, wenn Sie:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Leads strukturiert ins CRM bringen möchten</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Terminlogik automatisieren wollen</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>mehrere Leistungen/Teams/Standorte haben</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>messbar mehr Anfragen und weniger Chaos wollen</li>
              </ul>
            </motion.div>
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
              <p className="text-light-200 mt-6 text-center mb-8">
                Sie bleiben flexibel – wir sorgen dafür, dass die Kundenassistenz dauerhaft Mehrwert liefert.
              </p>
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Ihre Vorteile im Mietmodell</h3>
              <p className="text-light-200 mb-4">Sie haben keinen „Projekt-Klotz“, der nach dem Go-Live liegen bleibt. Stattdessen:</p>
              <ul className="space-y-2 text-light-200 mb-8">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>laufende Anpassungen an echte Kundenfragen</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Verbesserungen anhand der Chat-Auswertung</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>klare Weiterentwicklung statt Stillstand</li>
              </ul>
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Laufende Optimierung inklusive</h3>
              <p className="text-light-200 mb-4">Wir schauen regelmäßig:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Welche Fragen kommen am häufigsten?</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Wo brechen Besucher ab?</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Welche Einstiegsfrage konvertiert besser?</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Welche Übergabe bringt die meisten Termine?</li>
              </ul>
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
              className="bg-dark-400 p-8 border border-dark-100 mb-8"
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

            <motion.div
              className="bg-dark-400 p-8 border border-dark-100 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Typische Situationen, wo es sofort hilft</h3>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Viele „kurze“ Fragen → ständig Unterbrechungen</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Viele Leads „versickern“ → wenig Rücklauf</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Viele Anfragen außerhalb der Zeiten → Leads weg</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Telefon + Website parallel → Team kommt nicht hinterher</li>
              </ul>
            </motion.div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-bold text-light-100">Typische Einsatzbereiche (Dienstleister, Handwerk, Praxen, E-Commerce)</h3>
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
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8">
                5 schnelle Gründe, warum Unternehmen das lieben
              </h2>
              <ul className="space-y-3 text-light-200 text-left max-w-2xl mx-auto">
                <li className="flex items-start"><span className="text-primary-500 mr-3 flex-shrink-0">•</span><strong className="text-light-100">24/7 erreichbar</strong>, ohne „abends noch Mails“</li>
                <li className="flex items-start"><span className="text-primary-500 mr-3 flex-shrink-0">•</span><strong className="text-light-100">Sofort Antworten</strong>, statt Wartezeit</li>
                <li className="flex items-start"><span className="text-primary-500 mr-3 flex-shrink-0">•</span><strong className="text-light-100">Weniger Unterbrechungen</strong> im Tagesgeschäft</li>
                <li className="flex items-start"><span className="text-primary-500 mr-3 flex-shrink-0">•</span><strong className="text-light-100">Bessere Leads</strong>, weil sauber vorqualifiziert</li>
                <li className="flex items-start"><span className="text-primary-500 mr-3 flex-shrink-0">•</span><strong className="text-light-100">Weniger Chaos</strong>, weil Anfragen strukturiert ankommen</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
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

      <RelatedServices currentSlug="ki-chatbots" />

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
              Wenn Sie möchten, zeigen wir Ihnen individuell, wie die digitale Kundenassistenz in Ihrem Unternehmen eingesetzt werden kann.
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
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              FAQ – häufige Fragen
            </motion.h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-3">{item.question}</h3>
                  <p className="text-light-200">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
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
