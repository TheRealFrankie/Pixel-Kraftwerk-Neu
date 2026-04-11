'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Globe,
  ArrowRight,
  DollarSign,
  HeadphonesIcon,
  Zap,
  Shield,
  Clock,
  Building2,
  Briefcase,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import RelatedServices from '../../components/RelatedServices';
import ServiceJsonLd from '../../components/ServiceJsonLd';

const Website: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const websiteProcessSteps = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Analyse Ihres aktuellen Auftritts und Ihrer Zielgruppe. Wir klären u. a.: welche Leistungen wirklich verkauft werden sollen, welche Fragen Kunden immer stellen, welche Orte/Servicegebiete wichtig sind (z. B. Leipzig & Umland).',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Modernes Design, abgestimmt auf Ihr Unternehmen. Fokus: klare Struktur, mobile-first, „ruhige“ Professionalität statt überladenem Look, sichtbare Kontaktpunkte (CTA) an den richtigen Stellen.',
    },
    {
      step: '03',
      title: 'Umsetzung',
      description: 'Technische Umsetzung (schnell, sicher, mobiloptimiert). Dazu gehören: schnelle Ladezeiten, saubere Darstellung auf Handy/Tablet, technische Basis für Local SEO (Struktur, Überschriften, Seitenlogik). Bei Sonderfunktionen (z. B. komplexe Formulare, Konfiguratoren, Integrationen) arbeitet der Software-Entwickler mit – damit es sauber und wartbar bleibt.',
    },
    {
      step: '04',
      title: 'Livegang',
      description: 'Livegang Ihrer neuen Website.',
    },
    {
      step: '05',
      title: 'Betreuung',
      description: 'Laufende Betreuung, Pflege und Anpassungen im Mietmodell.',
    },
  ];

  const rentalModelBenefits = [
    {
      icon: <DollarSign size={24} />,
      title: 'Keine hohen Startkosten',
      text: 'Statt mehrere tausend Euro auf einmal zahlen Sie einen planbaren monatlichen Betrag.',
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: 'Full-Service inklusive',
      text: 'Design, Technik, Hosting, Sicherheit und Anpassungen – alles erledigt.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Änderungen in 48 Stunden',
      text: 'Ihr Angebot ändert sich? Wir passen Ihre Website an – schnell und unkompliziert.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Keine Technik, keine Verantwortung',
      text: 'Updates, Performance, Sicherheit, Backups – nicht Ihr Problem.',
    },
  ];

  const targetAudiences = [
    {
      icon: <Building2 size={28} />,
      title: 'Lokale Unternehmen',
      description: 'Ein moderner Webauftritt für mehr Sichtbarkeit in Ihrer Region.',
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Dienstleister & Berater',
      description: 'Eine Website, die Vertrauen schafft und Anfragen strukturiert einsammelt.',
    },
    {
      icon: <Wrench size={28} />,
      title: 'Handwerk & Gewerbe',
      description: 'Gefunden werden, wenn Kunden akuten Bedarf haben – mit klarer Präsentation Ihrer Leistungen.',
    },
    {
      icon: <Stethoscope size={28} />,
      title: 'Praxen & Kanzleien',
      description: 'Professioneller Auftritt mit klarer Struktur für Patienten und Mandanten.',
    },
  ];

  const faqItems = [
    { question: 'Was kostet eine Website im Mietmodell?', answer: 'Sie zahlen einen festen monatlichen Betrag. Der genaue Preis hängt vom Umfang ab – das klären wir im kurzen Gespräch.' },
    { question: 'Was ist im Mietmodell enthalten?', answer: 'Betreuung, Technik, Updates und laufende Anpassungen – damit die Website nicht „nach dem Launch“ liegen bleibt.' },
    { question: 'Kann ich später Texte/Bilder/Leistungen ändern lassen?', answer: 'Ja. Änderungen sind jederzeit möglich – genau dafür ist das Mietmodell gedacht.' },
    { question: 'Ist die Website für Google optimiert?', answer: 'Die technische Basis ist SEO-freundlich (mobil, schnell, sauberer Aufbau). Für Top-Platzierungen empfehlen wir zusätzlich „Top 3 in Google“.' },
    { question: 'Können Formulare, WhatsApp oder Terminbuchung eingebaut werden?', answer: 'Ja. Wir integrieren die Kontaktwege, die zu Ihrer Zielgruppe passen – kurz, schnell, ohne unnötige Hürden.' },
    { question: 'Wann brauche ich einen Software-Entwickler?', answer: 'Wenn Sie spezielle Funktionen oder Integrationen brauchen (z. B. CRM, Automatisierungen, komplexe Formulare). Für Standard-Websites meist nicht.' },
  ];

  const canonicalUrl = 'https://pixelkraftwerk-ai.com/webseite';

  return (
    <>
      <div className="bg-dark-500">
        <ServiceJsonLd
          name="Webseiten im Mietmodell"
          serviceType="Web Design"
          description="Moderne, schnelle Webseiten im Mietmodell – inklusive Technik, Betreuung und laufenden Anpassungen. Ideal für lokale Unternehmen, die ohne hohe Startkosten professionell auftreten wollen."
          url={canonicalUrl}
          pageName="Webseiten"
          faqs={faqItems.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
        <BreadcrumbSchema serviceName="Webseiten" serviceUrl={canonicalUrl} />
      {/* Hero mit Premium-Hintergrundbild – Bild unterhalb der Header-Leiste */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-500">
        <div className="absolute top-20 md:top-24 left-0 right-0 z-20 container mx-auto px-4">
          <BreadcrumbNav overlay items={[
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'Webseiten' },
          ]} />
        </div>
        <div className="absolute top-20 left-0 right-0 bottom-0 md:top-24">
          <Image
            src="/images/webseiten-mietmodell-agentur.webp"
            alt="Moderne Webseiten – professioneller Webauftritt"
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
              <Globe size={40} className="text-primary-500" strokeWidth={1.5} />
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
              Moderne Webseiten Leipzig &amp; Groitzsch
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-400 mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              – im einfachen Mietmodell
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
              Ihre Website soll wie ein guter Mitarbeiter arbeiten: Sie stellt Ihr Unternehmen professionell vor und macht Besuchern leicht, Kontakt aufzunehmen.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{
                color: '#E8EAED',
                textShadow: '0 4px 12px rgba(0,0,0,0.5)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <strong style={{ color: '#F5F7FA' }}>Sie konzentrieren sich auf Ihr Kerngeschäft – wir kümmern uns dauerhaft um Ihre Website.</strong>
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Unverbindliches Website-Angebot anfordern
            </motion.button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Warum moderne Webseiten heute Kunden bringen (oder eben nicht)
              </h2>
              <p className="text-light-200 mb-4">
                Viele Websites sehen „okay“ aus – aber sie bringen kaum Anfragen. Meist liegt das nicht am Design, sondern daran, dass drei Dinge fehlen:
              </p>
              <ul className="list-disc list-inside text-light-200 space-y-2 mb-4">
                <li><strong className="text-light-100">Klarheit:</strong> Was genau bieten Sie an – und für wen?</li>
                <li><strong className="text-light-100">Vertrauen:</strong> Warum sollte ein Kunde Ihnen glauben / Sie wählen?</li>
                <li><strong className="text-light-100">Nächster Schritt:</strong> Wie kommt der Besucher schnell zum Kontakt oder Termin?</li>
              </ul>
              <p className="text-light-200">
                Unsere Webseiten sind deshalb nicht nur „schön“, sondern so aufgebaut, dass sie <strong className="text-light-100">Verstehen → Vertrauen → Kontakt</strong> sauber führen.
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
                Ihre Website als <span className="text-primary-500">Rundum-sorglos-Paket</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-6">
                Statt ein einmaliges Projekt zu kaufen, mieten Sie Ihre Website – inklusive Betreuung, Technik und
                regelmäßigen Anpassungen.
              </p>
              <p className="text-light-100 text-lg">
                <strong>Sie zahlen monatlich – wir halten Ihre Website dauerhaft frisch und funktionsfähig.</strong>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <DollarSign size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">fester monatlicher Betrag</p>
              </motion.div>
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <HeadphonesIcon size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">volle Betreuung inklusive</p>
              </motion.div>
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Zap size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">jederzeit anpassbar</p>
              </motion.div>
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Shield size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">technisch immer aktuell</p>
              </motion.div>
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Was am Mietmodell besonders stark ist</h3>
              <p className="text-light-200 mb-4">
                Viele Websites veralten, weil nach dem Launch niemand mehr Zeit hat. Im Mietmodell passiert das nicht:
              </p>
              <ul className="list-disc list-inside text-light-200 space-y-2 mb-4">
                <li>Inhalte können schnell aktualisiert werden (Leistungen, Preise, Team, Öffnungszeiten)</li>
                <li>neue Bereiche/Seiten lassen sich ergänzen (z. B. neue Leistungen oder Orte)</li>
                <li>Technik bleibt aktuell (Sicherheit, Performance, Mobiloptimierung)</li>
              </ul>
              <p className="text-light-200">
                Wenn Sie zusätzlich individuelle Funktionen oder Integrationen brauchen, hilft ein <strong className="text-light-100">Software-Entwickler</strong> dabei, dass alles stabil läuft – z. B. Terminlogik, CRM-Anbindungen oder automatisierte Lead-Flows.
              </p>
            </motion.div>

            <motion.p
              className="text-center text-light-300 text-sm mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Sie möchten zusätzlich gezielt bei Google sichtbar werden?&nbsp;
              <a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">
                Hier geht es zu unserem SEO-Angebot „Top 3 in Google“.
              </a>
            </motion.p>
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
              Passt eine Website im Mietmodell zu Ihrem Unternehmen?
            </motion.h2>
            <motion.p
              className="text-light-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              In einem kurzen Gespräch klären wir, wie Ihre aktuelle Website aufgestellt ist – und ob ein Mietmodell mit laufender Betreuung für Sie wirklich Sinn ergibt.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Gespräch zu Ihrer Website anfragen
              <ArrowRight className="ml-2" size={22} />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6">
                Was ist im Mietmodell enthalten?
              </h2>
              <ul className="list-disc list-inside text-light-200 space-y-3">
                <li>Hosting & technische Basis (schnell, sicher, mobiloptimiert)</li>
                <li>Updates & Wartung (damit alles stabil und aktuell bleibt)</li>
                <li>Kleine Änderungen inklusive (Texte, Bilder, Leistungen, Öffnungszeiten)</li>
                <li>Support & Betreuung (kurzer Draht, schnelle Anpassungen)</li>
                <li>Laufende Optimierung nach Bedarf (z. B. Struktur/CTAs/Performance)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Was eine Website „vertrauensstark“ macht (die wichtigsten Bausteine)
              </h2>
              <p className="text-light-200 mb-4">
                Eine Website schafft Vertrauen, wenn Kunden in Sekunden das Gefühl bekommen: „Die wirken professionell. Die haben Struktur. Da kann ich anfragen.“ Typische Bausteine, die bei lokalen Unternehmen besonders gut wirken:
              </p>
              <ul className="list-disc list-inside text-light-200 space-y-2">
                <li><strong className="text-light-100">Klare Leistungssätze in Kundensprache</strong> (kein Fachjargon)</li>
                <li><strong className="text-light-100">Echte Bilder</strong> (Team, Betrieb, Projekte) statt austauschbarer Stockfotos</li>
                <li><strong className="text-light-100">Bewertungen / Referenzen</strong> (z. B. Google Bewertungen, Ergebnisse, Projekte)</li>
                <li><strong className="text-light-100">Transparenter Ablauf</strong> („So läuft’s ab“ in 3–5 Schritten)</li>
                <li><strong className="text-light-100">Einfache Kontaktwege</strong> (Formular, Telefon, WhatsApp, Termin – je nach Zielgruppe)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                KI, Automatisierung & moderne Webseiten: Was sinnvoll ist (und was nicht)
              </h2>
              <p className="text-light-200 mb-4">
                „KI“ muss nicht groß angekündigt werden – sie soll im Hintergrund helfen. Sinnvolle Beispiele:
              </p>
              <ul className="list-disc list-inside text-light-200 space-y-2 mb-4">
                <li><strong className="text-light-100">KI-Automatisierung</strong> für Anfragen: Kontaktformular → Lead → Zuständigkeit → Follow-up → Termin</li>
                <li><strong className="text-light-100">Digitale Kundenassistenz</strong> (Website-Chat), die Fragen beantwortet und Anfragen vorqualifiziert</li>
                <li><strong className="text-light-100">Telefonische Kundenassistenz</strong>, die Anrufe annimmt und Rückrufe strukturiert erfasst</li>
              </ul>
              <p className="text-light-200">
                Das Ergebnis: Besucher bekommen schneller Antworten, Anfragen gehen nicht verloren, und Ihr Team arbeitet strukturierter. Hier nutzen wir künstliche Intelligenz pragmatisch – nicht als Buzzword, sondern als Hebel für bessere Abläufe.
              </p>
            </motion.div>
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
                So entsteht Ihre <span className="text-primary-500">neue Website</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {websiteProcessSteps.map((step, index) => (
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
                Für wen ist dieses <span className="text-primary-500">Angebot ideal?</span>
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

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6">
                Mini-Vergleich: Einmal-Projekt vs. Mietmodell
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-dark-400 border border-dark-100">
                  <thead>
                    <tr>
                      <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Thema</th>
                      <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Einmal-Projekt</th>
                      <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Mietmodell</th>
                    </tr>
                  </thead>
                  <tbody className="text-light-200 text-sm">
                    <tr><td className="border border-dark-100 p-3">Updates</td><td className="border border-dark-100 p-3">oft „später“</td><td className="border border-dark-100 p-3">inklusive & regelmäßig</td></tr>
                    <tr><td className="border border-dark-100 p-3">Anpassungen</td><td className="border border-dark-100 p-3">extra Aufwand</td><td className="border border-dark-100 p-3">jederzeit möglich</td></tr>
                    <tr><td className="border border-dark-100 p-3">Technik</td><td className="border border-dark-100 p-3">wird oft alt</td><td className="border border-dark-100 p-3">technisch immer aktuell</td></tr>
                    <tr><td className="border border-dark-100 p-3">Betreuung</td><td className="border border-dark-100 p-3">endet nach Launch</td><td className="border border-dark-100 p-3">dauerhaft dabei</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Häufige Verbesserungen, die sofort mehr Anfragen bringen
              </h2>
              <p className="text-light-200 mb-4">
                Wenn eine Website „nicht zieht“, sind es oft diese Hebel:
              </p>
              <ul className="list-disc list-inside text-light-200 space-y-2">
                <li>Hero-Text klarer (Problem + Lösung + CTA)</li>
                <li>Leistungen besser strukturieren (nicht zu viel auf einmal)</li>
                <li>mehr Vertrauen (Bewertungen, Referenzen, echte Bilder)</li>
                <li>Kontaktwege vereinfachen (weniger Felder, schneller erreichbar)</li>
                <li>Servicegebiete sauber einbauen (ohne Keyword-Spam)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

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
              Kurze FAQ (Webseiten im Mietmodell)
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
              Bereit für eine Website, die <span className="text-primary-500">wirklich für Sie arbeitet?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns in einer kurzen, unverbindlichen Beratung besprechen, wie Ihre neue Website aussehen und
              was sie für Ihr Unternehmen leisten soll.
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
              Gespräch anfragen
            </motion.button>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="webseite"
        anchorBySlug={{
          'ki-chatbots': '#ki-chatbot-fur-ihre-website',
          'telefonassistenten': '#ki-telefonagent-fur-ihr-unternehmen',
          'automatisierungen': '#ki-automatisierung-fur-anfragen-termine',
          'seo-top-3-in-google': '#lokale-sichtbarkeit-ausbauen',
        }}
      />

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ServicedRegionsBlock headingTag="h2" />
            <RegionServiceLinksBlock serviceSlug="webseiten" title="Webseiten in Ihrem Gebiet" />
          </div>
        </div>
      </section>

        <ContactForm />

        <GoogleMapsSection />
      </div>
    </>
  );
};

export default Website;

