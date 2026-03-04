'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  HeadphonesIcon,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  MessageSquare,
  PhoneCall,
  PhoneForwarded
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const Telefonassistenten: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Verpasste Anrufe führen regelmäßig zu verlorenen Aufträgen?',
    'Ihr Team wird ständig durch Telefonate aus dem Arbeitsfluss gerissen?',
    'Außerhalb der Geschäftszeiten ist niemand erreichbar?',
    'Die Qualität der Anrufannahme hängt von Auslastung und Tageszeit ab?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse Ihrer Telefonkommunikation',
      description: 'Wir analysieren typische Anrufgründe, Abläufe und Anforderungen Ihres Unternehmens.'
    },
    {
      step: '02',
      title: 'Training des Assistenten',
      description: 'Die telefonische Kundenassistenz wird mit Ihren Inhalten, Abläufen und Informationen trainiert.'
    },
    {
      step: '03',
      title: 'Einrichtung der Rufnummer',
      description: 'Sie erhalten eine dedizierte Telefonnummer für den Einsatz des Assistenten.'
    },
    {
      step: '04',
      title: 'Test & Optimierung',
      description: 'Gemeinsame Testphase mit Anpassungen auf Basis realer Gespräche.'
    },
    {
      step: '05',
      title: 'Dauerhafter Betrieb',
      description: 'Der Assistent arbeitet zuverlässig im Hintergrund – wir überwachen und optimieren laufend.'
    }
  ];

  const benefits = [
    { icon: <Clock size={24} />, title: '24/7 Erreichbarkeit', text: 'Ihr Unternehmen ist jederzeit telefonisch erreichbar – auch außerhalb der Geschäftszeiten.' },
    { icon: <PhoneCall size={24} />, title: 'Keine verpassten Anrufe', text: 'Jeder Anruf wird entgegengenommen und professionell bearbeitet.' },
    { icon: <Users size={24} />, title: 'Entlastung des Teams', text: 'Routineanrufe werden automatisch übernommen – Ihr Team gewinnt Zeit.' },
    { icon: <Shield size={24} />, title: 'Gleichbleibende Qualität', text: 'Jeder Anrufer erhält dieselbe strukturierte Betreuung.' },
    { icon: <PhoneForwarded size={24} />, title: 'Strukturierte Anrufannahme', text: 'Anliegen werden erfasst, dokumentiert und übersichtlich weitergegeben.' },
    { icon: <HeadphonesIcon size={24} />, title: 'Natürliche Gespräche', text: 'Moderne Sprachverarbeitung sorgt für flüssige, verständliche Dialoge.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Dienstleister & Agenturen', description: 'Strukturierte Annahme vieler gleichartiger Anrufe.' },
    { icon: <Stethoscope size={28} />, title: 'Praxen & Kanzleien', description: 'Entlastung des Empfangs und konstante Erreichbarkeit.' },
    { icon: <ShoppingBag size={28} />, title: 'E-Commerce & Handel', description: 'Automatische Bearbeitung von Status-, Liefer- und Serviceanfragen.' },
    { icon: <Briefcase size={28} />, title: 'Handwerk & lokale Betriebe', description: 'Keine Anfrage geht verloren – auch bei hoher Auslastung.' }
  ];

  const features = [
    'Annahme eingehender Anrufe',
    'Beantwortung häufiger Fragen',
    'Terminvereinbarung und Kalenderintegration',
    'Erfassung von Rückrufwünschen',
    'Weiterleitung dringender Anliegen',
    'Mehrsprachige Kommunikation',
    'Integration in bestehende CRM-Systeme'
  ];

  const typicalQuestions = [
    '„Was kostet das ungefähr?“ (je nach Regeln: grober Rahmen oder Rückruf)',
    '„Wann wäre der nächste Termin möglich?“',
    '„Bieten Sie das auch in [Ort] an?“',
    '„Wie läuft das ab?“',
    '„Können Sie mich zurückrufen?“',
    '„Ich habe ein Problem mit …“'
  ];

  const optimizationPoints = [
    'häufige Missverständnisse werden entfernt',
    'neue Standardfragen werden ergänzt',
    'Übergaben an Ihr Team werden verbessert',
    'Termin- oder Routingregeln werden feiner eingestellt'
  ];

  const faqItems = [
    { question: 'Ersetzt der Telefonagent mein Team?', answer: 'Nein. Er übernimmt Standardfälle und erfasst Infos – komplexe Fälle gehen an Ihr Team.' },
    { question: 'Kann der Assistent Termine wirklich buchen?', answer: 'Ja, je nach Setup. Wenn echte Kalenderlogik und Regeln nötig sind, setzen wir das sauber um.' },
    { question: 'Was passiert, wenn der Assistent etwas nicht versteht?', answer: 'Dann fragt er nach oder erfasst einen Rückrufwunsch. Wichtig: Er rät nicht „irgendwas“.' },
    { question: 'Kann man mehrere Sprachen nutzen?', answer: 'Ja, mehrsprachige Kommunikation ist möglich.' },
    { question: 'Ist das DSGVO-konform umsetzbar?', answer: 'In der Regel ja – mit Datenminimierung, Transparenz und klaren Regeln (welche Daten abgefragt werden und wohin sie gehen).' },
    { question: 'Brauche ich dafür einen Softwareentwickler?', answer: 'Für ein einfaches Setup nicht zwingend. Für CRM-, Kalender- oder Ticket-Integrationen ist ein Software-Entwickler / Softwareentwickler sehr hilfreich.' }
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema serviceName="Telefonische Kundenassistenz" serviceUrl="https://pixelkraftwerk-ai.com/telefonassistenten" />

      {/* Hero mit Premium-Hintergrundbild – Bild unterhalb der Header-Leiste */}
      <section id="ki-telefonagent-fur-ihr-unternehmen" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-500">
        <div className="absolute top-20 left-0 right-0 bottom-0 md:top-24">
          <Image
            src="/images/ki-telefonassistent.webp"
            alt="Telefonische Kundenassistenz – KI-Anrufannahme"
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
              <Phone size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

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
              Telefonische Kundenassistenz für Ihr Unternehmen (KI-Telefonagent)
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-400 mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Telefonate und Termine automatisch annehmen – rund um die Uhr
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed"
              style={{
                color: '#F5F7FA',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unsere telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet Fragen, verwaltet Termine und erfasst Anliegen zuverlässig – <strong style={{ color: '#F5F7FA' }}>automatisiert, professionell und 24/7</strong>.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{
                color: '#E8EAED',
                textShadow: '0 4px 12px rgba(0,0,0,0.5)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Ideal für Unternehmen, die viele Anrufe bekommen – aber nicht ständig ans Telefon können, ohne dass das Tagesgeschäft leidet.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Individuelle Beratung anfordern
            </motion.button>
          </div>
        </div>
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
                Kurz erklärt: Was ist eine telefonische Kundenassistenz?
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-6">
                Eine telefonische Kundenassistenz (KI-Telefonagent / Telefonbot) ist ein intelligenter Sprachassistent, der Anrufe <strong className="text-light-100">in natürlicher Sprache</strong> führt – ähnlich wie ein guter Empfang.
              </p>
              <p className="text-light-200 mb-4">
                Statt „Bitte versuchen Sie es später nochmal“ passiert Folgendes:
              </p>
            </motion.div>
            <ul className="space-y-2 text-light-200 mb-8 max-w-2xl mx-auto">
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Anrufer werden freundlich begrüßt</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>das Anliegen wird kurz geklärt</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Standardfragen werden beantwortet</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Termine oder Rückrufwünsche werden strukturiert aufgenommen</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>dringende Fälle werden weitergeleitet</li>
            </ul>
            <motion.div
              className="bg-dark-500 border border-dark-100 p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100">
                <strong className="text-primary-500">Wichtig:</strong> Der Telefonagent ersetzt kein Fachpersonal – er <strong>entlastet</strong>, <strong>filtert</strong> und <strong>sorgt dafür, dass kein Anruf verloren geht</strong>.
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
                Kennen Sie diese Situation?
              </h2>
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
                  <span className="text-primary-500 mr-4 mt-1 flex-shrink-0">?</span>
                  <p className="text-light-200">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-light-100 mt-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>Dann ist unsere telefonische Kundenassistenz die passende Lösung.</strong>
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
                Warum verpasste Anrufe so teuer sind (ohne dass man es merkt)
              </h2>
              <p className="text-light-200 mb-6">
                Viele Anrufer rufen nicht dreimal an. Wenn niemand rangeht, passiert oft:
              </p>
            </motion.div>
            <ul className="space-y-2 text-light-200 mb-6 max-w-2xl mx-auto">
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>sie schreiben gar nicht erst eine E-Mail</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>sie rufen direkt beim nächsten Anbieter an</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>sie sind genervt, weil es „zu umständlich“ wirkt</li>
            </ul>
            <motion.p
              className="text-center text-light-100 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Das Ergebnis: <strong className="text-primary-400">Aufträge gehen verloren</strong>, obwohl die Nachfrage eigentlich da wäre.
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
                Was Ihre <span className="text-primary-500">telefonische Kundenassistenz leistet</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Die telefonische Kundenassistenz versteht natürliche Sprache und bearbeitet Anrufe selbstständig – zuverlässig und strukturiert.
              </p>
            </motion.div>

            <div className="bg-dark-400 p-8 border border-dark-100 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                    <span className="text-light-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="bg-dark-400 p-6 border border-dark-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">
                Typische Fragen, die der Telefonagent sofort klärt
              </h3>
              <p className="text-light-200 mb-4 text-sm">Damit Sie ein Gefühl dafür bekommen, hier typische Beispiele:</p>
              <ul className="space-y-2 text-light-200">
                {typicalQuestions.map((q, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Passt eine telefonische Kundenassistenz zu Ihrem Alltag?
            </motion.h2>
            <motion.p
              className="text-light-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              In einem kurzen Gespräch klären wir, wie viele Anrufe Sie heute verlieren – und ob ein KI-Telefonagent für Ihr Team wirklich Entlastung bringt.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Gespräch zur telefonischen Kundenassistenz anfragen
              <ArrowRight className="ml-2" size={22} />
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
                So entstehen weniger Unterbrechungen – und bessere Anfragen
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-4">
                Der große Vorteil ist nicht nur „24/7 erreichbar“. Sondern: Ihr Team bekommt <strong className="text-light-100">strukturierte Infos</strong>, statt „Anruf verpasst“.
              </p>
              <p className="text-light-200 mb-4">
                Beispiele, wie Anfragen bei Ihnen ankommen können:
              </p>
            </motion.div>
            <ul className="space-y-2 text-light-200 mb-6 max-w-2xl mx-auto">
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>per E-Mail mit Zusammenfassung (Name, Anliegen, Ort, Dringlichkeit, Rückrufzeit)</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>als Eintrag im CRM (mit Tags/Kategorie)</li>
              <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>als Übersicht in einer Team-Inbox</li>
            </ul>
            <motion.p
              className="text-light-200 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Wenn Sie tiefere Automationen möchten (z. B. CRM-Routing, Terminlogik, Nachfassen), ist das genau der Punkt, an dem ein <strong className="text-light-100">Software-Entwickler / Softwareentwickler</strong> richtig Mehrwert bringt: saubere Integrationen, stabile Abläufe, weniger Chaos.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Mini-Vergleich: Schnell starten vs. individuell integrieren
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
                    <td className="border border-dark-100 p-3">Sie wollen schnell live gehen & erstmal testen</td>
                    <td className="border border-dark-100 p-3">Sofort weniger verpasste Anrufe</td>
                  </tr>
                  <tr>
                    <td className="border border-dark-100 p-3">Individuelle Einrichtung</td>
                    <td className="border border-dark-100 p-3">Sie wollen CRM/Kalender/Prozesse sauber automatisieren</td>
                    <td className="border border-dark-100 p-3">Mehr qualifizierte Leads + weniger Aufwand</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
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
                So entsteht <span className="text-primary-500">Ihre telefonische Kundenassistenz</span>
              </h2>
              <p className="text-light-200">
                Von der ersten Analyse bis zum laufenden Betrieb – ein klarer, erprobter Prozess.
              </p>
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
            <motion.div
              className="mt-8 bg-dark-500 p-6 border border-dark-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">
                Was in der Praxis „Optimierung“ bedeutet
              </h3>
              <ul className="space-y-2 text-light-200">
                {optimizationPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
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
                Ihre <span className="text-primary-500">Vorteile</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-primary-500 mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{benefit.title}</h3>
                  <p className="text-light-300 text-sm">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
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
                Ideal für <span className="text-primary-500">diese Branchen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mr-4 flex-shrink-0">{audience.icon}</div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{audience.title}</h3>
                    <p className="text-light-300 text-sm">{audience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Lokal in Leipzig & Region: Warum das bei Telefonbots wirklich hilft
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Gerade bei telefonischer Kommunikation zählt Feingefühl: Tonalität, typische Fragen, regionale Orte und echte Abläufe. Deshalb ist es ein Vorteil, wenn Einrichtung und Optimierung nah am Alltag lokaler Unternehmen passieren.
              </p>
            </motion.div>
            <motion.p
              className="text-light-200 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Wir unterstützen Unternehmen in Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz und Groitzsch – und kennen die typischen Anforderungen in der Region.
            </motion.p>
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
                <MessageSquare size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">
                    Auch über die Website erreichbar sein?
                  </h3>
                  <p className="text-light-300 mb-4">
                    Viele Kunden nehmen zuerst über die Website Kontakt auf. Unsere digitale Kundenassistenz beantwortet Anfragen direkt online und erfasst Anliegen strukturiert.
                  </p>
                  <a
                    href="/ki-chatbots#digitale-kundenassistenz"
                    className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200"
                  >
                    Mehr zur digitalen Kundenassistenz
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="telefonassistenten" />

      <section id="faq" className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              FAQ – häufige Fragen zur telefonischen Kundenassistenz
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
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Bereit für <span className="text-primary-500">professionelle Anrufannahme?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam besprechen, wie die telefonische Kundenassistenz Ihr Unternehmen entlasten kann.
            </motion.p>
            <motion.p
              className="text-light-300 text-sm mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Noch Fragen? Viele Antworten finden Sie in unseren{' '}
              <a href="#faq" className="text-primary-400 hover:underline">
                FAQ
              </a>
              .
            </motion.p>
            <ServicedRegionsBlock />
            <RegionServiceLinksBlock serviceSlug="telefonassistenten" title="Telefonassistenten in Ihrem Gebiet" />
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default Telefonassistenten;
