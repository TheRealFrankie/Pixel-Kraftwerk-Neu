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
  Phone,
  Mail,
  AlertTriangle,
  Clock,
  Zap,
  BellOff,
  Target,
  Sparkles,
  Users,
  FileText,
  Send,
  Rocket,
  Settings,
  Star,
  Euro,
  Infinity as InfinityIcon,
  RefreshCw,
  PlayCircle
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import BreadcrumbSchemaRegionService from '../../components/BreadcrumbSchemaRegionService';
import ServiceJsonLd from '../../components/ServiceJsonLd';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText } from '../../data/services';
import SubpageLinksBlock from '../../components/SubpageLinksBlock';
import HeroScrollIndicator from '../../components/HeroScrollIndicator';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

interface KiChatbotsProps {
  regionSlug?: string;
  regionName?: string;
}

const KiChatbots: React.FC<KiChatbotsProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/ki-chatbots`
    : `${baseUrl}/ki-chatbots`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'ki-chatbots', 'KI-Chatbots')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Website-Besucher keine schnelle Antwort erhalten',
    'Ihr Team immer wieder dieselben Fragen beantworten muss',
    'Anfragen außerhalb der Geschäftszeiten unbeantwortet bleiben',
    'Interessenten zur Konkurrenz wechseln, weil es dort schneller geht'
  ];

  const zielzustandPoints = [
    { icon: Clock, title: '24/7 erreichbar', text: 'ohne „abends noch Mails"' },
    { icon: Zap, title: 'Sofort Antworten', text: 'statt Wartezeit und Tab-zu' },
    { icon: BellOff, title: 'Weniger Unterbrechungen', text: 'im laufenden Tagesgeschäft' },
    { icon: Target, title: 'Bessere Leads', text: 'weil sauber vorqualifiziert' },
    { icon: Sparkles, title: 'Weniger Chaos', text: 'weil Anfragen strukturiert ankommen' }
  ];

  const praxisItems = [
    { title: 'Besucher werden aktiv angesprochen', subtitle: 'Statt passiver Formulare – die Assistenz startet das Gespräch.' },
    { title: 'Standardfragen werden selbstständig beantwortet', subtitle: 'Preis, Ablauf, Einzugsgebiet – sofort und zuverlässig.' },
    { title: 'Termine und Anfragen werden strukturiert erfasst', subtitle: 'Mit Name, Anliegen, Dringlichkeit und Kontaktdaten.' },
    { title: 'Nur relevante Anliegen landen bei Ihrem Team', subtitle: 'Vorqualifiziert, eingeordnet, sofort bearbeitbar.' }
  ];

  const mietStats = [
    { icon: Euro, value: '0 €', label: 'Einmalkosten' },
    { icon: InfinityIcon, value: 'keine', label: 'Mindestlaufzeit' },
    { icon: Clock, value: '24/7', label: 'Assistenz aktiv' },
    { icon: RefreshCw, value: 'inkl.', label: 'Laufende Optimierung' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Schritt 1 – Live-Demo erleben',
      description: 'Testen Sie die digitale Kundenassistenz direkt auf unserer Website – in weniger als einer Minute.'
    },
    {
      step: '02',
      title: 'Schritt 2 – Unverbindliches Gespräch',
      description: 'Kein Verkaufsgespräch. Wir klären ehrlich, ob sich eine Kundenassistenz für Sie lohnt – und wenn ja, in welcher Form.'
    },
    {
      step: '03',
      title: 'Schritt 3 – Individuelle Einrichtung',
      description: 'Die digitale Kundenassistenz wird speziell auf Ihr Unternehmen angepasst – mit Ihrem Wording, Ihren Leistungen und Ihren Regeln.'
    },
    {
      step: '04',
      title: 'Schritt 4 – Live-Schaltung & Optimierung',
      description: 'Wir begleiten den laufenden Betrieb und optimieren kontinuierlich auf Basis echter Anfragen.'
    }
  ];

  const faqItems = [
    {
      question: 'Ersetzt das meinen Support oder Vertrieb?',
      answer: 'Nein. Es entlastet. Die Assistenz übernimmt Standardfragen und sammelt Infos – Ihr Team kümmert sich um die wichtigen Fälle.'
    },
    {
      question: 'Wie schnell kann das live gehen?',
      answer: 'Ein MVP kann sehr schnell starten. Individuelle Einrichtung + Integrationen brauchen etwas mehr Setup – dafür kommt es dann perfekt bei Ihnen an.'
    },
    {
      question: 'Funktioniert das auch bei komplexen Leistungen?',
      answer: 'Ja, wenn man die Wissensbasis sauber aufbaut und klare Grenzen setzt (wann an Menschen übergeben wird).'
    },
    {
      question: 'Was ist mit Datenschutz / DSGVO?',
      answer: 'Wir achten auf Datenminimierung, Transparenz und saubere Prozesse (z. B. welche Daten abgefragt werden und wohin sie gehen).'
    },
    {
      question: 'Kann man das mehrsprachig nutzen?',
      answer: 'Ja, optional mehrsprachig.'
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
      <LocalBusinessSchema
        pageType="service"
        customDescription={isRegional
          ? `Digitale Kundenassistenz für Unternehmen in ${regionName} und Umgebung. Pixel Kraftwerk aus Groitzsch richtet KI-Chatbots für Website, WhatsApp, Instagram und Facebook ein.`
          : 'Digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Pixel Kraftwerk aus Groitzsch richtet KI-Chatbots für Website, WhatsApp, Instagram und Facebook ein.'}
      />
      {isRegional ? (
        <BreadcrumbSchemaRegionService
          regionName={regionName}
          regionUrl={regionUrl}
          serviceName="KI-Chatbots"
          serviceUrl={currentPageUrl}
        />
      ) : (
        <BreadcrumbSchema serviceName="Digitale Kundenassistenz" serviceUrl="https://pixelkraftwerk-ai.com/ki-chatbots" />
      )}
      <ServiceJsonLd
        name={isRegional ? `Digitale Kundenassistenz in ${regionName}` : 'Digitale Kundenassistenz (KI-Chatbot)'}
        serviceType="KI-Chatbot"
        description={isRegional
          ? `Digitale Kundenassistenz für Unternehmen in ${regionName} und Umgebung. Automatische Kundenbetreuung auf Ihrer Website rund um die Uhr – von Pixel Kraftwerk aus Groitzsch.`
          : 'Digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team.'}
        url={currentPageUrl}
        areaServed={isRegional ? [regionName] : undefined}
        faqs={[
          ...faqItems.map((item) => ({ question: item.question, answer: item.answer })),
          ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
        ]}
        pageName={isRegional ? `KI-Chatbots in ${regionName}` : 'KI-Chatbots'}
      />
      {/* HERO – Schmerz + Outcome + Dual-CTA */}
      <section id="digitale-kundenassistenz" className="relative min-h-screen flex items-center overflow-hidden bg-dark-500">
        <span id="ki-chatbot-fur-ihre-website" className="absolute top-0 left-0" aria-hidden="true" />
        <div className="absolute top-20 md:top-24 left-0 right-0 z-20 container mx-auto px-4">
          <BreadcrumbNav overlay items={isRegional ? [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
            { label: regionName, href: regionUrl },
            { label: 'KI-Chatbots' },
          ] : [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'KI-Chatbots' },
          ]} />
        </div>
        <div className="absolute inset-0">
          <Image
            src="/images/ki-chatbot-digitale-kundenassistenz.webp"
            alt="Digitale Kundenassistenz – KI-Chatbot im Einsatz"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/50 to-dark-500/95"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-500/30 via-transparent to-dark-500/40" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500/15 to-transparent" aria-hidden />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 border border-primary-500/40 backdrop-blur-sm mb-8 shadow-primary-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MessageSquare size={40} className="text-primary-500" strokeWidth={1.5} />
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
              {isRegional ? `Digitale Kundenassistenz in ${regionName}` : (
                <>Digitale Kundenassistenz<span className="sr-only"> Leipzig &amp; Groitzsch</span></>
              )}
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-400 mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {regionContent?.localHook || 'Verlieren Sie keine Anfrage mehr, nur weil Ihre Website nicht antwortet.'}
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
              Unsere digitale Kundenassistenz beantwortet Anfragen <strong style={{ color: '#F5F7FA' }}>rund um die Uhr</strong>, qualifiziert Leads vor und übergibt sie strukturiert an Ihr Team – damit bei Ihnen <strong style={{ color: '#F5F7FA' }}>nur noch die wirklich relevanten Anfragen</strong> ankommen.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{
                color: '#E8EAED',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Jede unbeantwortete Frage auf Ihrer Website ist ein möglicher Auftrag, der zur Konkurrenz geht. Ihre Website kann <strong style={{ color: '#F5F7FA' }}>Anfragen annehmen, Fragen beantworten und Termine erfassen</strong> – automatisch, zuverlässig und <strong style={{ color: '#F5F7FA' }}>24/7</strong>.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={scrollToDemo}
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              >
                Live-Demo starten – in 30 Sekunden testen
                <ArrowRight className="ml-2" size={24} />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 border border-primary-500/50 text-primary-400 font-heading font-bold hover:bg-primary-500/10 hover:text-primary-300 transition-all duration-300"
              >
                Oder: Erstgespräch sichern
                <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>

            <motion.p
              className="text-sm mt-6"
              style={{ color: '#E8EAED' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              Keine Einmalinvestition. Keine Mindestlaufzeit. Start innerhalb weniger Tage.
            </motion.p>
          </div>
        </div>
        <HeroScrollIndicator />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
      </section>

      {/* PROBLEM – verlorene Anfragen */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 mb-6">
                <AlertTriangle size={16} className="text-primary-400" />
                <span className="text-primary-400 text-sm font-heading font-bold tracking-wide">DAS PROBLEM</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Das Problem: <span className="text-primary-500">Anfragen kommen – aber nicht an</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Die meisten Besucher kommen mit einer konkreten Frage auf Ihre Website: Was kostet das? Kommt ihr in meinen Ort? Wann wäre der nächste Termin? Bekommen sie nicht sofort eine Antwort, schließen sie den Tab. Für immer.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="group relative flex items-start bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/40 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500/60 group-hover:bg-primary-500 transition-colors duration-300" />
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-500/10 border border-primary-500/20 mr-4 flex-shrink-0">
                    <AlertTriangle className="text-primary-400" size={18} strokeWidth={2} />
                  </div>
                  <p className="text-light-200 pt-2">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-10 py-6 border-t border-b border-primary-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100 text-xl font-heading font-bold">
                Das kostet Zeit, Geld und Nerven.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div
                className="bg-dark-500 p-8 border border-dark-100"
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
                className="bg-dark-500 p-8 border border-dark-100"
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
        </div>
      </section>

      {/* ZIELZUSTAND – so fühlt es sich an, wenn es läuft */}
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
                So sieht Ihr Alltag aus, <span className="text-primary-500">wenn die Assistenz läuft</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Statt „noch schnell eine Mail beantworten“ zwischen zwei Kundenterminen bekommen Sie morgens eine saubere Liste: Wer hat angefragt, was will er, wann will er, wie dringend ist es.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {zielzustandPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary-glow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 border border-primary-500/30 mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                      <Icon className="text-primary-500" size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-heading font-bold text-light-100 mb-2 leading-tight">{point.title}</h3>
                    <p className="text-light-300 text-sm leading-relaxed">{point.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-light-100 font-heading font-bold">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Weniger verlorene Leads
              </span>
              <span className="inline-flex items-center gap-2 text-light-100 font-heading font-bold">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Schnellere Reaktion
              </span>
              <span className="inline-flex items-center gap-2 text-light-100 font-heading font-bold">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Mehr qualifizierte Anfragen
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LÖSUNG – wie die Assistenz arbeitet */}
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
                Die Lösung: <span className="text-primary-500">Eine Kundenassistenz, die für Sie arbeitet</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Unsere digitale Kundenassistenz übernimmt die erste Kommunikation mit Ihren Website-Besuchern – <strong>ohne zusätzliches Personal</strong>. Sie ersetzt niemanden – sie entlastet.
              </p>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-6 text-center">In der Praxis bedeutet das:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {praxisItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/40 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="absolute top-4 right-4 text-4xl font-heading font-bold text-primary-500/20 group-hover:text-primary-500/40 transition-colors duration-300 leading-none">
                      0{index + 1}
                    </span>
                    <CheckCircle className="text-primary-500 mb-3" size={22} />
                    <h4 className="text-base font-heading font-bold text-light-100 mb-1 pr-10 leading-snug">{item.title}</h4>
                    <p className="text-light-300 text-sm leading-relaxed">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-dark-500 p-8 border border-dark-100 mb-8"
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
              className="relative bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-500/10 border border-primary-500/30 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles className="text-primary-500 inline-block mr-2 -mt-1" size={18} />
              <span className="text-light-100 text-lg font-heading font-bold">
                Das Ergebnis: weniger Chaos, weniger Standardfragen, mehr Anfragen, die wirklich Geschäft sind.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FÜR WEN – Selbstselektion früh */}
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
              <p className="text-light-200 mb-8 max-w-3xl mx-auto">
                Ehrliche Antwort: Eine Kundenassistenz lohnt sich nicht für jedes Geschäftsmodell. Besonders wirksam ist sie für Unternehmen, die:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {targetAudienceCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-dark-400 p-5 border border-dark-100 hover:border-primary-500/40 hover:bg-dark-400/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-500/10 border border-primary-500/30 mr-4 flex-shrink-0">
                    <CheckCircle className="text-primary-500" size={18} strokeWidth={2} />
                  </div>
                  <span className="text-light-100 font-medium">{criteria}</span>
                </motion.div>
              ))}
            </div>

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
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-primary-500/40" />
                <Users size={18} className="text-primary-500" />
                <div className="w-8 h-px bg-primary-500/40" />
              </div>
              <h3 className="text-xl font-heading font-bold text-light-100">Typische Einsatzbereiche <span className="text-light-300 font-normal text-base block md:inline mt-1 md:mt-0">(Dienstleister, Handwerk, Praxen, E-Commerce)</span></h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col items-center text-center bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 hover:-translate-y-1 hover:shadow-primary-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/30 mb-4 text-primary-500 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
                    {audience.icon}
                  </div>
                  <h3 className="text-sm font-heading font-bold text-light-100 leading-tight">{audience.title}</h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-dark-400 border-l-2 border-primary-500 p-6 flex flex-col md:flex-row items-center justify-between gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100 md:text-left text-center">
                Wenn Sie sich in zwei oder mehr Punkten wiedererkennen, <strong>lohnt sich ein Blick auf die Demo.</strong>
              </p>
              <button
                onClick={scrollToDemo}
                className="inline-flex items-center px-5 py-3 bg-primary-500/10 border border-primary-500/50 text-primary-400 font-heading font-bold hover:bg-primary-500 hover:text-dark-500 transition-all duration-300 flex-shrink-0"
              >
                <PlayCircle size={18} className="mr-2" />
                Demo jetzt testen
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KURZ ERKLÄRT – Was ist eine digitale Kundenassistenz (KI-Chatbot)? */}
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
                Kurz erklärt: Was ist eine digitale Kundenassistenz (KI-Chatbot)?
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Eine digitale Kundenassistenz ist ein KI-gestützter Website-Chat, der Besucher:innen <strong>sofort</strong> hilft – auch abends, am Wochenende oder wenn Ihr Team gerade im Kundentermin steckt.
              </p>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Statt „Schreiben Sie uns eine Mail“ bekommen Besucher direkt Antworten wie:
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto mb-12 space-y-3">
              {[
                'Ja, wir sind in Ihrem Gebiet unterwegs.',
                'So läuft der Ablauf – in 3 Schritten.',
                'Ich nehme kurz die Infos auf und melde mich mit einem Terminvorschlag.'
              ].map((bubble, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-500/20 border border-primary-500/40 flex-shrink-0 mt-1">
                    <MessageSquare className="text-primary-500" size={18} strokeWidth={2} />
                  </div>
                  <div className="relative bg-dark-500 border border-dark-100 px-5 py-4 max-w-md">
                    <div className="absolute left-[-7px] top-4 w-3 h-3 bg-dark-500 border-l border-b border-dark-100 rotate-45" />
                    <p className="text-light-100">„{bubble}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-dark-500 p-8 border border-dark-100 mb-8"
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
              className="bg-dark-500 p-8 border border-dark-100"
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

      {/* DEMO – zentrales Beweiselement */}
      <section id="demo" className="py-20 bg-gradient-to-b from-dark-500 via-dark-400 to-dark-500 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-primary-400 text-sm font-heading font-bold tracking-wide">LIVE-DEMO</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-light-100 mb-4">
                Lieber in 30 Sekunden testen, <span className="text-primary-500">als 5 Minuten lesen</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-4 text-lg">
                Die Assistenz, die gerade <strong>unten rechts auf dieser Website</strong> läuft, ist genau die, die wir auch für Sie einrichten.
              </p>
              <p className="text-light-300 max-w-3xl mx-auto mb-8">
                Stellen Sie ihr die Fragen, die Ihre Kunden stellen würden – und sehen Sie live, was dabei herauskommt.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="bg-dark-500 p-8 border border-primary-500/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-heading font-bold text-primary-400 mb-4">Probieren Sie das hier:</h3>
                <p className="text-light-300 text-sm mb-4">Was Sie testen können – typische Fragen aus der Praxis:</p>
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-heading font-bold text-light-100 mb-4">Darauf sollten Sie achten</h3>
                <ul className="space-y-3 text-light-200">
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Wie schnell kommt die erste Antwort?</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Welche Infos sammelt sie, bevor sie übergibt?</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Wie fühlt es sich an, mit ihr zu „reden“?</li>
                  <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Ab wann zieht sie einen Menschen hinzu?</li>
                </ul>
              </motion.div>
            </div>

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
              <h3 className="text-lg font-heading font-bold text-light-100 mb-4">So würde es bei Ihnen aussehen (individuell angepasst)</h3>
              <p className="text-light-200 mb-4">Wir richten die Assistenz so ein, dass sie:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>zu Ihrer Branche passt (Wording, typische Fragen)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Ihre Leistungen korrekt erklärt (ohne zu viel zu versprechen)</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Leads so erfasst, wie Ihr Team sie wirklich braucht</li>
              </ul>
            </motion.div>

            <motion.p
              className="text-center text-light-100 text-lg font-bold mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Genau so würde Ihre Kundenassistenz auch aussehen – nur mit Ihrem Wording, Ihren Leistungen, Ihren Regeln.
            </motion.p>
            <motion.p
              className="text-center text-primary-500 text-base font-heading font-bold mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Chat unten rechts öffnen und loslegen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN – Was die Assistenz leistet (Funktionen im Überblick) */}
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

      {/* ÜBERGABE – was bei Ihrem Team ankommt */}
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
              className="bg-dark-500 p-8 border border-primary-500/30 mb-8"
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

            <motion.div
              className="bg-dark-500 border border-dark-100 mb-8 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between px-6 py-3 bg-dark-400 border-b border-dark-100">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary-400" />
                  <span className="text-primary-400 text-xs font-heading font-bold tracking-wider">BEISPIEL – NEUE ANFRAGE</span>
                </div>
                <div className="flex items-center gap-2 text-light-300 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                  </span>
                  14:32 Uhr
                </div>
              </div>
              <div className="px-6 py-5 border-b border-dark-100 bg-dark-500">
                <div className="text-xs text-light-300 mb-1 font-heading tracking-wide">BETREFF</div>
                <div className="text-light-100 font-heading font-bold">Neue vorqualifizierte Anfrage – Chatbot für Arztpraxis (Leipzig)</div>
              </div>
              <div className="px-6 py-5 space-y-3 font-mono text-sm">
                {[
                  { label: 'Name', value: 'Maria Schulz' },
                  { label: 'Telefon', value: '0176 / …' },
                  { label: 'Anliegen', value: 'Chatbot für eine Arztpraxis mit Online-Terminvergabe' },
                  { label: 'Ort', value: 'Leipzig' },
                  { label: 'Dringlichkeit', value: 'Mittel, „bis Ende des Monats"' },
                  { label: 'Kontext', value: 'War auf /ki-chatbots, hat Demo ausprobiert' }
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[8rem_1fr] gap-3 items-start">
                    <span className="text-light-300 text-xs uppercase tracking-wide pt-0.5">{row.label}</span>
                    <span className="text-light-100">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-dark-100 bg-dark-400 flex items-center justify-between">
                <span className="text-light-300 text-xs">Automatisch strukturiert von der Kundenassistenz</span>
                <div className="flex items-center gap-2 text-primary-400 text-xs font-heading font-bold">
                  <Send size={12} />
                  ÜBERGEBEN
                </div>
              </div>
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
                Wenn Sie mehr Automatisierung wollen (z. B. „Lead kommt rein → wird zugewiesen → wird nachgefasst"), dann ist das genau der Punkt, wo eine technische Umsetzung durch erfahrene Automations-Teams oder Softwareentwickler den größten Unterschied macht.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SETUP – Baukasten vs. Individuell */}
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
              <p className="text-light-200 max-w-3xl mx-auto">
                Zwei Wege, je nachdem wie tief Sie einsteigen wollen.
              </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="relative bg-dark-400 p-8 border border-dark-100 hover:border-primary-500/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 border border-primary-500/30">
                    <Rocket className="text-primary-500" size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-light-100">Schnell-Setup (MVP)</h3>
                </div>
                <p className="text-light-200 mb-4">Ideal, wenn Sie:</p>
                <ul className="space-y-3 text-light-200">
                  <li className="flex items-start"><CheckCircle className="text-primary-500/70 mr-3 flex-shrink-0 mt-0.5" size={18} />erstmal live testen möchten</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500/70 mr-3 flex-shrink-0 mt-0.5" size={18} />schnell sehen wollen, welche Fragen wirklich kommen</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500/70 mr-3 flex-shrink-0 mt-0.5" size={18} />ohne großen Aufwand starten wollen</li>
                </ul>
              </motion.div>
              <motion.div
                className="relative bg-dark-400 p-8 border-2 border-primary-500/50 shadow-primary-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 bg-primary-500 text-dark-500 text-xs font-heading font-bold tracking-wide">
                  <Star size={12} fill="currentColor" />
                  EMPFOHLEN
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 border border-primary-500/50">
                    <Settings className="text-primary-500" size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-light-100">Individuelle Einrichtung</h3>
                </div>
                <p className="text-light-300 text-sm mb-4">(Integrationen & Prozesse)</p>
                <p className="text-light-200 mb-4">Ideal, wenn Sie:</p>
                <ul className="space-y-3 text-light-200">
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />Leads strukturiert ins CRM bringen möchten</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />Terminlogik automatisieren wollen</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />mehrere Leistungen/Teams/Standorte haben</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />messbar mehr Anfragen und weniger Chaos wollen</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MIETMODELL – Flexibel starten statt groß investieren */}
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
                Flexibel starten statt groß investieren – <span className="text-primary-500">unser Mietmodell</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-4">
                Wir verkaufen keinen Chatbot. Wir liefern eine Assistenz, die laufend besser wird – und Sie zahlen nur, solange sie für Sie arbeitet.
              </p>
              <p className="text-light-300 max-w-3xl mx-auto">
                Unsere digitale Kundenassistenz wird <strong>monatlich gemietet</strong>, nicht verkauft.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {mietStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/40 text-center transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="text-primary-500 mx-auto mb-3" size={24} strokeWidth={1.75} />
                    <div className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-1 leading-tight">{stat.value}</div>
                    <div className="text-xs text-light-300 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

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
              <ul className="space-y-2 text-light-200 mb-6">
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Welche Fragen kommen am häufigsten?</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Wo brechen Besucher ab?</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Welche Einstiegsfrage konvertiert besser?</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">•</span>Welche Übergabe bringt die meisten Termine?</li>
              </ul>
              <div className="relative bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-500/10 border-l-2 border-primary-500 p-5 flex items-start gap-3">
                <Sparkles className="text-primary-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-light-100 font-heading font-bold">
                  Ihre Assistenz wird nicht zum abgeschlossenen Projekt – sie wird zum mitwachsenden Teil Ihres Vertriebs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABLAUF – So starten wir gemeinsam */}
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
              <p className="text-light-200">
                Vier Schritte – vom ersten Test bis zur laufenden Optimierung.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500/60 via-primary-500/30 to-primary-500/10 hidden md:block" aria-hidden />
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-6 bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative flex items-center justify-center w-14 h-14 bg-dark-400 border-2 border-primary-500/50 flex-shrink-0 group-hover:border-primary-500 group-hover:bg-primary-500/10 transition-all duration-300 z-10">
                      <span className="text-xl font-heading font-bold text-primary-500">
                        {step.step}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{step.title}</h3>
                      <p className="text-light-300 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TELEFONASSISTENZ Cross-Link */}
      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="relative bg-gradient-to-br from-dark-400 via-dark-400 to-dark-500 border border-primary-500/30 p-8 overflow-hidden group hover:border-primary-500/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 blur-3xl rounded-full group-hover:bg-primary-500/10 transition-colors duration-500" aria-hidden />
              <div className="relative flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/30 flex-shrink-0">
                  <Phone size={24} className="text-primary-500" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-primary-400 font-heading font-bold tracking-wide mb-2">ERGÄNZENDER KANAL</div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">
                    Viele Anfragen kommen auch per Telefon.
                  </h3>
                  <p className="text-light-300 mb-4 leading-relaxed">
                    Unsere telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet häufige Fragen und erfasst Anliegen automatisch.
                  </p>
                  <a
                    href="/telefonassistenten"
                    className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200 group/link"
                  >
                    Mehr zur telefonischen Kundenassistenz
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ZWISCHEN-CTA */}
      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="relative bg-dark-400 border border-primary-500/20 p-8 md:p-10 text-center overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/30 mb-5">
                <Clock size={14} className="text-primary-400" />
                <span className="text-primary-400 text-xs font-heading font-bold tracking-wide">15 MINUTEN – UNVERBINDLICH</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Passt eine digitale Kundenassistenz zu Ihrem Alltag?
              </h2>
              <p className="text-light-200 mb-8 max-w-xl mx-auto">
                In einem <strong>15-minütigen Gespräch</strong> klären wir ehrlich, ob eine Kundenassistenz bei Ihnen Sinn ergibt – oder ob an anderer Stelle mehr Hebel liegt. Kein Verkaufsdruck, keine Verpflichtung.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              >
                Passt ein Chatbot zu Ihrem Unternehmen? In 15 Minuten klären.
                <ArrowRight className="ml-2" size={22} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              {isRegional ? `FAQ – KI-Chatbots in ${regionName}` : 'FAQ – häufige Fragen'}
            </motion.h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-500/10 border border-primary-500/30 flex-shrink-0 mt-0.5">
                      <span className="text-primary-500 font-heading font-bold text-sm">?</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{item.question}</h3>
                      <p className="text-light-200 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {regionContent?.localFaqs?.map((faq, index) => (
                <motion.div
                  key={`local-${index}`}
                  className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (faqItems.length + index) * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-500/10 border border-primary-500/30 flex-shrink-0 mt-0.5">
                      <span className="text-primary-500 font-heading font-bold text-sm">?</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{faq.q}</h3>
                      <p className="text-light-200 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHLUSS-CTA */}
      <section className="py-20 bg-dark-500 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-500/5 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-dark-400 border border-primary-500/30 p-10 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 border border-primary-500/30 mb-6">
                <MessageSquare className="text-primary-500" size={28} strokeWidth={1.5} />
              </div>
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Bereit, <span className="text-primary-500">keine Anfrage mehr zu verlieren?</span>
              </motion.h2>
              <motion.p
                className="text-light-200 mb-8 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                In 15 Minuten klären wir, ob eine Kundenassistenz bei Ihnen Sinn ergibt – und wenn ja, in welcher Form. Ehrlich. Ohne Verpflichtung.
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
                  className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
                >
                  Unverbindliches Chatbot-Angebot anfragen
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </motion.div>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-light-300 text-sm mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary-500" />Ohne Testzugang</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary-500" />Ohne Verpflichtung</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary-500" />Mit klarer Erwartung</span>
              </motion.div>
              <motion.p
                className="text-light-300 text-sm mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Noch Fragen? Viele Antworten finden Sie in unseren{' '}
                <a href="/haeufige-fragen" className="text-primary-400 hover:underline">
                  häufig gestellten Fragen
                </a>
                .
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
        <section className="py-16 bg-dark-400">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6">
                KI-Chatbots für Unternehmen in {regionName}
              </h2>
              {regionContent.paragraphs.map((p, i) => (
                <p key={i} className="text-light-200 text-lg leading-relaxed mb-5">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isRegional && (
        <section className="py-12 bg-dark-400">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-light-200 text-lg leading-relaxed">
                Wir entwickeln KI-Chatbots für Unternehmen in{' '}
                <a href="/leistungsgebiete/leipzig" className="text-primary-400 hover:underline">Leipzig</a>,{' '}
                <a href="/leistungsgebiete/markkleeberg" className="text-primary-400 hover:underline">Markkleeberg</a>,{' '}
                <a href="/leistungsgebiete/borna" className="text-primary-400 hover:underline">Borna</a> und der gesamten Region.
                Von unserem Standort in <a href="/leistungsgebiete/groitzsch" className="text-primary-400 hover:underline">Groitzsch</a> aus betreuen wir Projekte persönlich – von der ersten Analyse bis zur laufenden Optimierung.
              </p>
            </div>
          </div>
        </section>
      )}

      <SubpageLinksBlock
        serviceSlug="ki-chatbots"
        regionSlug={isRegional ? regionSlug : undefined}
        title="Chatbot-Lösungen im Detail"
      />

      <RelatedServices currentSlug="ki-chatbots" />

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {isRegional ? (
              <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-heading font-bold text-light-100 mb-4">
                  Weitere Leistungen in {regionName}
                </h3>
                <p className="text-light-200 mb-3">
                  <a href={regionUrl} className="text-primary-400 hover:underline font-heading font-bold">
                    Alle Leistungen in {regionName}
                  </a>
                  {' – '}Übersicht unserer Angebote in Ihrer Region.
                </p>
                <p className="text-light-200 mb-6">
                  <a href="/ki-chatbots" className="text-primary-400 hover:underline">
                    Mehr zur digitalen Kundenassistenz im Überblick
                  </a>
                  {' – '}alle Details auf unserer Service-Seite.
                </p>
                <p className="text-light-300 text-sm mb-3">KI-Chatbots in anderen Gebieten:</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {otherRegions.map((city, i) => (
                    <li key={city.slug}>
                      <a
                        href={`/leistungsgebiete/${city.slug}/ki-chatbots`}
                        className="text-primary-400 hover:underline"
                      >
                        {getRegionServiceLinkText('ki-chatbots', city.name, i)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <ServicedRegionsBlock />
                <RegionServiceLinksBlock serviceSlug="ki-chatbots" title="KI-Chatbots in Ihrem Gebiet" />
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-dark-500/50 border-l-2 border-primary-500/40 p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary-500/10 border border-primary-500/20 flex-shrink-0">
                <AlertTriangle size={18} className="text-primary-500" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-bold text-primary-500 mb-1 tracking-wide uppercase">Hinweis</h3>
                <p className="text-light-300 text-sm leading-relaxed">
                  Die Kundenassistenz auf dieser Website dient als Demo. Jede digitale Kundenassistenz wird individuell eingerichtet und angepasst.
                </p>
              </div>
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
export type { KiChatbotsProps };
