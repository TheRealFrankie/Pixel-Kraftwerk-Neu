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
import TrustLine from '../../components/TrustLine';
import StickyCtaBar from '../../components/StickyCtaBar';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
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
    <div style={{ background: '#FAFAF9' }}>
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
      {/* HERO */}
      <section
        id="digitale-kundenassistenz"
        className="relative min-h-[100dvh] md:min-h-screen flex flex-col"
        style={{ background: '#FAFAF9' }}
      >
        <span id="ki-chatbot-fur-ihre-website" className="absolute top-0 left-0" aria-hidden="true" />
        <div className="absolute inset-0">
          <Image
            src="/images/ki-chatbot-digitale-kundenassistenz-hero.png"
            alt="KI-Chatbot auf Laptop und Smartphone – digitale Kundenassistenz von Pixel Kraftwerk"
            fill
            className="object-cover"
            style={{ objectPosition: '65% center' }}
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(95deg, rgba(250,250,249,0.98) 0%, rgba(250,250,249,0.93) 35%, rgba(250,250,249,0.6) 55%, rgba(250,250,249,0.08) 75%, rgba(250,250,249,0.0) 88%)' }}
            aria-hidden
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav items={isRegional ? [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
            { label: regionName!, href: regionUrl },
            { label: 'KI-Chatbots' },
          ] : [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'KI-Chatbots' },
          ]} />
        </div>

        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <motion.h1
                className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3"
                style={{ color: '#0E7C72' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {isRegional ? `Digitale Kundenassistenz in ${regionName}` : 'Digitale Kundenassistenz Groitzsch & Leipzig'}
              </motion.h1>

              <motion.h2
                className="font-heading font-bold tracking-tight mb-2 leading-[1.08]"
                style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                {regionContent?.localHook || 'Verlieren Sie keine Anfrage mehr, nur weil Ihre Website nicht antwortet.'}
              </motion.h2>

              <motion.h3
                className="sr-only md:not-sr-only text-sm md:text-base max-w-xl mb-3 leading-snug font-semibold"
                style={{ color: '#0E7C72' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {SERVICE_TITLE_KEYWORDS['ki-chatbots']}
              </motion.h3>

              <motion.p
                className="text-base md:text-lg max-w-xl mb-4 leading-relaxed"
                style={{ color: '#404B48' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Unsere digitale Kundenassistenz beantwortet Anfragen rund um die Uhr, qualifiziert Leads vor und übergibt sie strukturiert an Ihr Team.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <button onClick={scrollToDemo} className="btn-primary">
                  Live-Demo starten
                  <ArrowRight size={18} />
                </button>
                <div className="flex items-center gap-4 sm:hidden">
                  <button onClick={scrollToContact} className="text-sm font-semibold underline underline-offset-4" style={{ color: '#0E7C72' }}>
                    Erstgespräch sichern
                  </button>
                  <a href="tel:+491785844460" className="text-sm font-semibold underline underline-offset-4" style={{ color: '#0E7C72' }}>
                    Jetzt anrufen
                  </a>
                </div>
                <button onClick={scrollToContact} className="btn-secondary hidden sm:inline-flex">
                  Erstgespräch sichern
                </button>
                <a href="tel:+491785844460" className="btn-secondary hidden sm:inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Jetzt anrufen
                </a>
              </motion.div>
              <motion.div className="hidden sm:flex flex-wrap gap-x-4 gap-y-1 mt-3 mb-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}>
                {['Keine Einmalkosten', 'Keine Mindestlaufzeit', 'Betreuung inklusive'].map(item => (
                  <span key={item} className="flex items-center gap-1 text-xs" style={{ color: '#68746F' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </span>
                ))}
              </motion.div>
              <div className="hidden sm:block">
                <TrustLine className="mt-4" />
              </div>
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

      {/* PROBLEM – verlorene Anfragen */}
      <section className="py-24" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-5"
                style={{ background: 'rgba(239,68,68,0.06)', color: '#B91C1C', borderColor: 'rgba(239,68,68,0.18)' }}
              >
                <AlertTriangle size={12} />
                Das Problem
              </span>
              <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: '#404B48' }}>
                Die meisten Besucher kommen mit einer konkreten Frage. Bekommen sie nicht sofort eine Antwort, schließen sie den Tab – für immer.
              </p>
            </motion.div>

            {/* Problem-Karten */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl p-5 border shadow-card bg-white"
                  style={{ borderColor: '#E4E9E7' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(239,68,68,0.07)', color: '#B91C1C' }}
                  >
                    <AlertTriangle size={16} strokeWidth={2} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>{problem}</p>
                </motion.div>
              ))}
            </div>

            {/* Zwei Detail-Karten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div
                className="rounded-2xl border bg-white p-7 shadow-card-hover"
                style={{ borderColor: '#E4E9E7' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(239,68,68,0.07)', color: '#B91C1C' }}
                >
                  <AlertTriangle size={18} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3" style={{ color: '#0C1210' }}>
                  Warum Besucher abspringen
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#68746F' }}>
                  Viele Besucher sind nicht „nur neugierig" – sie haben eine konkrete Frage. Das passiert besonders häufig bei:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Preis-/Kostenfragen („Was kostet das ungefähr?")',
                    'Verfügbarkeiten („Wann wäre der nächste Termin?")',
                    'Einzugsgebiet/Ort („Kommt ihr auch nach …?")',
                    'Ablauf („Wie läuft das ab?")',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}>
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="6.5" stroke="#E4E9E7" />
                        <path d="M4.5 7l2 2 3-3" stroke="#B91C1C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="rounded-2xl border bg-white p-7 shadow-card-hover"
                style={{ borderColor: '#E4E9E7' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72' }}
                >
                  <Zap size={18} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3" style={{ color: '#0C1210' }}>
                  Was das täglich kostet
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#68746F' }}>
                  Jede unbeantwortete Anfrage ist ein möglicher Auftrag, der gar nicht erst ankommt. Und jede Standardfrage bindet Zeit, die Sie für Kunden und Projekte brauchen.
                </p>
                <div className="rounded-xl p-4 space-y-2.5" style={{ background: '#F4F7F6' }}>
                  {[
                    { label: 'Verlorene Leads', value: 'täglich' },
                    { label: 'Wiederholungsfragen', value: 'bindet Zeit' },
                    { label: 'Außerhalb Geschäftszeiten', value: 'keine Antwort' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span style={{ color: '#68746F' }}>{label}</span>
                      <span className="font-semibold px-2 py-0.5 rounded-md text-xs" style={{ background: 'rgba(239,68,68,0.08)', color: '#B91C1C' }}>{value}</span>
                    </div>
                  ))}
                </div>
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
                    className="group relative bg-white p-6 border border-dark-200 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary-glow rounded-2xl shadow-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 border border-primary-500/30 mb-4 group-hover:bg-primary-500/20 transition-colors duration-300 rounded-full">
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
                    className="relative bg-white p-6 border border-dark-200 hover:border-primary-500/40 transition-all duration-300 group rounded-2xl shadow-card"
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
              className="rounded-2xl border bg-white p-7 shadow-card mb-8"
              style={{ borderColor: '#E4E9E7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-heading font-bold mb-2" style={{ color: '#0C1210' }}>Was die Assistenz konkret übernimmt</h3>
              <p className="text-sm mb-5" style={{ color: '#68746F' }}>Je nach Unternehmen übernehmen wir z. B.:</p>
              <div className="flex flex-wrap gap-2">
                {['Erste Fragen klären', 'Infos & Ablauf erklären', 'Kontaktdaten erfassen', 'Terminwünsche aufnehmen', 'Übergabe ans Team'].map(item => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ background: 'rgba(14,124,114,0.06)', color: '#0E7C72', borderColor: 'rgba(14,124,114,0.2)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </span>
                ))}
              </div>
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
                  className="flex items-center bg-white p-5 border border-dark-200 hover:border-primary-500/40 hover:bg-dark-400/80 transition-all duration-300 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-500/10 border border-primary-500/30 mr-4 flex-shrink-0 rounded-xl">
                    <CheckCircle className="text-primary-500" size={18} strokeWidth={2} />
                  </div>
                  <span className="text-light-100 font-medium">{criteria}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-2xl border bg-white p-7 shadow-card mb-12"
              style={{ borderColor: '#E4E9E7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Typische Situationen, wo es sofort hilft</h3>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Viele „kurze“ Fragen → ständig Unterbrechungen</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Viele Leads „versickern“ → wenig Rücklauf</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Viele Anfragen außerhalb der Zeiten → Leads weg</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Telefon + Website parallel → Team kommt nicht hinterher</li>
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
                  className="group flex flex-col items-center text-center bg-white p-6 border border-dark-200 hover:border-primary-500/50 hover:-translate-y-1 hover:shadow-primary-glow transition-all duration-300 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/30 mb-4 text-primary-500 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300 rounded-xl">
                    {audience.icon}
                  </div>
                  <h3 className="text-sm font-heading font-bold text-light-100 leading-tight">{audience.title}</h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white border-l-2 border-primary-500 p-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl shadow-card"
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
                className="inline-flex items-center px-5 py-3 bg-primary-500/10 border border-primary-500/50 text-primary-400 font-heading font-bold hover:bg-primary-500 hover:text-dark-500 transition-all duration-300 flex-shrink-0 rounded-full"
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
                  <div className="relative bg-white border border-dark-200 px-5 py-4 max-w-md rounded-2xl shadow-card">
                    <div className="absolute left-[-7px] top-4 w-3 h-3 bg-dark-500 border-l border-b border-dark-200 rotate-45" />
                    <p className="text-light-100">„{bubble}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-white p-8 border border-dark-200 mb-8 rounded-2xl shadow-card"
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
              className="bg-white p-8 border border-dark-200 rounded-2xl shadow-card"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 mb-6 rounded-full">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <motion.div
                className="rounded-2xl border bg-white p-7 shadow-card"
                style={{ borderColor: 'rgba(14,124,114,0.3)' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72' }}>
                  Jetzt ausprobieren
                </span>
                <h3 className="text-base font-heading font-bold mb-2" style={{ color: '#0C1210' }}>Typische Fragen aus der Praxis:</h3>
                <p className="text-xs mb-4" style={{ color: '#68746F' }}>Stellen Sie diese direkt im Chat unten rechts:</p>
                <div className="flex flex-wrap gap-2">
                  {['"Was kostet das?"', '"Kommt ihr nach [Ort]?"', '"Termin nächste Woche"', '"Wie läuft das ab?"', '"Bitte zurückrufen"'].map(q => (
                    <span key={q} className="px-3 py-1.5 rounded-lg text-xs font-medium border cursor-default" style={{ background: '#F4F7F6', color: '#404B48', borderColor: '#E4E9E7' }}>{q}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border bg-white p-7 shadow-card"
                style={{ borderColor: '#E4E9E7' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-heading font-bold mb-4" style={{ color: '#0C1210' }}>Darauf sollten Sie achten</h3>
                <ul className="space-y-3">
                  {['Wie schnell kommt die erste Antwort?', 'Welche Infos sammelt sie, bevor sie übergibt?', 'Wie fühlt es sich an, mit ihr zu reden?', 'Ab wann zieht sie einen Menschen hinzu?'].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}>
                      <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="rounded-2xl border bg-white p-7 shadow-card mb-8"
              style={{ borderColor: '#E4E9E7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-heading font-bold mb-4" style={{ color: '#0C1210' }}>Sie können im Demo:</h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {['Typische Kundenfragen stellen', 'Abläufe testen', 'Anfrage-Aufnahme live erleben'].map(item => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ background: 'rgba(14,124,114,0.06)', color: '#0E7C72', borderColor: 'rgba(14,124,114,0.2)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm" style={{ color: '#68746F' }}>So würde die Kundenassistenz auch bei Ihnen funktionieren – angepasst auf Ihr Unternehmen.</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border bg-white p-7 shadow-card mb-8"
              style={{ borderColor: '#E4E9E7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-heading font-bold mb-2" style={{ color: '#0C1210' }}>So würde es bei Ihnen aussehen</h3>
              <p className="text-sm mb-5" style={{ color: '#68746F' }}>Wir richten die Assistenz individuell ein, sodass sie:</p>
              <div className="flex flex-wrap gap-2">
                {['Zu Ihrer Branche passt', 'Ihre Leistungen korrekt erklärt', 'Leads teamgerecht erfasst'].map(item => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ background: 'rgba(14,124,114,0.06)', color: '#0E7C72', borderColor: 'rgba(14,124,114,0.2)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </span>
                ))}
              </div>
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

            <div className="bg-white p-8 border border-dark-200 rounded-2xl shadow-card">
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
                    <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-light-100">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-dark-200">
                <p className="text-light-200 text-center mb-8">
                  <strong>Wichtig:</strong> Die digitale Kundenassistenz ersetzt kein Fachpersonal – sie <strong>entlastet</strong>, filtert und strukturiert die Kommunikation.
                </p>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Funktionen im Überblick</h3>
                <p className="text-light-200 mb-4">Je nach Setup kann die Assistenz:</p>
                <ul className="space-y-2 text-light-200">
                  <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Antworten aus Ihrer Wissensbasis geben (FAQ, Leistungen, Ablauf)</li>
                  <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Besucher durch klare Optionen führen (Buttons statt Textwände)</li>
                  <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>bei Unsicherheit nachfragen (statt irgendwas zu erfinden)</li>
                  <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>bei „kritischen“ Anliegen an Menschen übergeben</li>
                </ul>
                <h3 className="text-xl font-heading font-bold text-light-100 mt-8 mb-4">Optional: Mehrsprachigkeit & Regeln</h3>
                <p className="text-light-200 mb-4">Optional kann die Assistenz:</p>
                <ul className="space-y-2 text-light-200">
                  <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>mehrere Sprachen sprechen</li>
                  <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>feste Regeln berücksichtigen (z. B. Einzugsgebiet, Öffnungszeiten, Terminlogik)</li>
                  <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Anfragen nach Kategorien sortieren (Support, Angebot, Termin, Rückruf)</li>
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
              className="bg-white p-8 border border-primary-500/30 mb-8 rounded-2xl shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Was bei Ihrem Team landet (nur relevante Anliegen)</h3>
              <p className="text-light-200 mb-4">Statt „Hi, ich hab da mal ne Frage…“ bekommt Ihr Team strukturierte Infos, z. B.:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Name + Telefonnummer</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Anliegen in Klartext</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Ort / Einsatzgebiet</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Wunschzeitpunkt / Dringlichkeit</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Kontext (welche Seite besucht wurde, welche Auswahl getroffen wurde)</li>
              </ul>
              <p className="text-light-200 mt-4">So können Sie schneller entscheiden, wer wann zurückruft – und verlieren weniger Leads.</p>
            </motion.div>

            <motion.div
              className="bg-white border border-dark-200 mb-8 shadow-xl overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between px-6 py-3 bg-dark-400 border-b border-dark-200">
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
              <div className="px-6 py-5 border-b border-dark-200 bg-dark-500">
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
              <div className="px-6 py-3 border-t border-dark-200 bg-dark-400 flex items-center justify-between">
                <span className="text-light-300 text-xs">Automatisch strukturiert von der Kundenassistenz</span>
                <div className="flex items-center gap-2 text-primary-400 text-xs font-heading font-bold">
                  <Send size={12} />
                  ÜBERGEBEN
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 border border-dark-200 mb-8 rounded-2xl shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Übergabe per E-Mail / CRM / Tabelle</h3>
              <p className="text-light-200 mb-4">Sie entscheiden, wie Ihr Team am liebsten arbeitet:</p>
              <ul className="space-y-2 text-light-200">
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>E-Mail an eine oder mehrere Adressen</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>zentrale Übersicht (z. B. für Vertrieb/Backoffice)</li>
                <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>CRM-Eintrag mit Tags und Feldern</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white p-8 border border-dark-200 rounded-2xl shadow-card"
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
              <table className="w-full border-collapse bg-white border border-dark-200">
                <thead>
                  <tr>
                    <th className="border border-dark-200 p-3 text-left font-heading font-bold text-light-100">Setup</th>
                    <th className="border border-dark-200 p-3 text-left font-heading font-bold text-light-100">Gut, wenn…</th>
                    <th className="border border-dark-200 p-3 text-left font-heading font-bold text-light-100">Ergebnis</th>
                  </tr>
                </thead>
                <tbody className="text-light-200 text-sm">
                  <tr>
                    <td className="border border-dark-200 p-3">Schnell-Setup (MVP)</td>
                    <td className="border border-dark-200 p-3">Sie wollen testen & schnell live gehen</td>
                    <td className="border border-dark-200 p-3">Sofort weniger Standardfragen</td>
                  </tr>
                  <tr>
                    <td className="border border-dark-200 p-3">Individuelle Einrichtung</td>
                    <td className="border border-dark-200 p-3">Sie wollen sauberes Routing + echte Prozesse</td>
                    <td className="border border-dark-200 p-3">Mehr qualifizierte Leads & weniger Aufwand</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="relative bg-white p-8 border border-dark-200 hover:border-primary-500/30 transition-colors duration-300 rounded-2xl shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 border border-primary-500/30 rounded-xl">
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
                className="relative bg-white p-8 border-2 border-primary-500/50 shadow-primary-glow rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 bg-primary-500 text-dark-500 text-xs font-heading font-bold tracking-wide rounded-xl">
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
                    className="relative flex items-start gap-6 bg-white p-6 border border-dark-200 hover:border-primary-500/50 transition-all duration-300 group rounded-2xl shadow-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative flex items-center justify-center w-14 h-14 bg-white border-2 border-primary-500/50 flex-shrink-0 group-hover:border-primary-500 group-hover:bg-primary-500/10 transition-all duration-300 z-10 rounded-2xl shadow-card">
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
                <div className="flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/30 flex-shrink-0 rounded-xl">
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
              className="relative bg-white border border-primary-500/20 p-8 md:p-10 text-center overflow-hidden rounded-2xl shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/30 mb-5 rounded-full">
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
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg rounded-xl"
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
                  className="group bg-white p-6 border border-dark-200 hover:border-primary-500/40 transition-colors duration-300 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-500/10 border border-primary-500/30 flex-shrink-0 mt-0.5 rounded-xl">
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
                  className="group bg-white p-6 border border-dark-200 hover:border-primary-500/40 transition-colors duration-300 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (faqItems.length + index) * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-500/10 border border-primary-500/30 flex-shrink-0 mt-0.5 rounded-xl">
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
              className="bg-white border border-primary-500/30 p-10 text-center relative overflow-hidden rounded-2xl shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 border border-primary-500/30 mb-6 rounded-full">
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
                style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72', borderColor: 'rgba(14,124,114,0.25)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Wir nehmen maximal 3 Neukunden pro Monat an
              </motion.div>
              <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg rounded-xl"
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
              <div className="flex items-center justify-center w-10 h-10 bg-primary-500/10 border border-primary-500/20 flex-shrink-0 rounded-xl">
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

      <ContactForm service="ki-chatbot" heading="Kostenloses Chatbot-Erstgespräch anfragen" subheading="Wir zeigen Ihnen in 20 Minuten, wie ein KI-Chatbot Ihre Anfragen automatisch beantwortet." />

      <GoogleMapsSection />

      <StickyCtaBar ctaLabel="Kostenloses Erstgespräch sichern" />
    </div>
  );
};

export default KiChatbots;
export type { KiChatbotsProps };
