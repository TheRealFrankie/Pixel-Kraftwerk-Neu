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
  PhoneForwarded,
  AlertTriangle,
  Zap,
  FileText,
  Calendar,
  Rocket,
  Settings,
  Star,
  Sparkles,
  Hammer,
  Coffee
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import BreadcrumbSchemaRegionService from '../../components/BreadcrumbSchemaRegionService';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';
import ServiceJsonLd from '../../components/ServiceJsonLd';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TrustLine from '../../components/TrustLine';
import StickyCtaBar from '../../components/StickyCtaBar';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import { businessInfo } from '../../data/businessInfo';
import SubpageLinksBlock from '../../components/SubpageLinksBlock';
import HeroScrollIndicator from '../../components/HeroScrollIndicator';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

interface TelefonassistentenProps {
  regionSlug?: string;
  regionName?: string;
}

const Telefonassistenten: React.FC<TelefonassistentenProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/telefonassistenten`
    : `${baseUrl}/telefonassistenten`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'telefonassistenten', 'Telefonassistenten')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Verpasste Anrufe führen regelmäßig zu verlorenen Aufträgen?',
    'Ihr Team wird ständig durch Telefonate aus dem Arbeitsfluss gerissen?',
    'Außerhalb der Geschäftszeiten ist niemand erreichbar?',
    'Die Qualität der Anrufannahme hängt von Auslastung und Tageszeit ab?'
  ];

  const zielzustandPoints = [
    { icon: PhoneCall, title: 'Jeder Anruf wird angenommen', text: 'auch während Sie arbeiten' },
    { icon: Zap, title: 'Häufige Fragen sofort beantwortet', text: 'Preis, Ort, Ablauf, Termin' },
    { icon: FileText, title: 'Rückrufwünsche sauber erfasst', text: 'mit Name, Anliegen, Dringlichkeit' },
    { icon: Calendar, title: 'Termine vorbereitet oder gebucht', text: 'optional direkt im Kalender' },
    { icon: Users, title: 'Team entlastet', text: 'keine Unterbrechungen für Standardfragen' }
  ];

  const selfSelectionCriteria = [
    'Sie bekommen regelmäßig Anrufe während Terminen oder Einsätzen',
    'Kleines Team, das nicht ständig ans Telefon kann',
    'Viele gleichartige Standardfragen am Telefon',
    'Erreichbarkeit ist für Ihre Kunden ein Vertrauenssignal'
  ];

  const praxisScenarios = [
    { icon: Hammer, title: 'Auf der Baustelle', text: 'Telefon klingelt, Hände voll. Die Assistenz nimmt ab, klärt das Anliegen, Sie rufen abends strukturiert zurück.' },
    { icon: Stethoscope, title: 'In der Behandlung', text: 'Patient wartet, Sie können nicht ans Telefon. Die Assistenz erfasst den Terminwunsch, das Backoffice plant am nächsten Morgen ein.' },
    { icon: Coffee, title: 'Im Kundentermin', text: 'Interessent ruft zur Preisanfrage an. Die Assistenz gibt den Rahmen, fragt Ort und Projektgröße ab, übergibt strukturiert.' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse Ihrer Telefonkommunikation',
      description: 'Wir analysieren typische Anrufgründe, Abläufe und Anforderungen Ihres Unternehmens – damit die Assistenz später genau das übernimmt, was bei Ihnen wirklich anfällt.'
    },
    {
      step: '02',
      title: 'Training des Assistenten',
      description: 'Die telefonische Kundenassistenz wird mit Ihren Inhalten, Abläufen und Informationen trainiert – inklusive Wording, Einzugsgebiet und Sonderfällen.'
    },
    {
      step: '03',
      title: 'Einrichtung der Rufnummer',
      description: 'Sie erhalten eine dedizierte Telefonnummer für den Einsatz des Assistenten – wahlweise als zusätzliche Nummer oder per Rufweiterleitung.'
    },
    {
      step: '04',
      title: 'Test & Optimierung',
      description: 'Gemeinsame Testphase mit Anpassungen auf Basis realer Gespräche – so kommt nur das live, was funktioniert.'
    },
    {
      step: '05',
      title: 'Dauerhafter Betrieb',
      description: 'Der Assistent arbeitet zuverlässig im Hintergrund – wir überwachen und optimieren laufend auf Basis echter Gespräche.'
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
    '„Was kostet das ungefähr?" (je nach Regeln: grober Rahmen oder Rückruf)',
    '„Wann wäre der nächste Termin möglich?"',
    '„Bieten Sie das auch in [Ort] an?"',
    '„Wie läuft das ab?"',
    '„Können Sie mich zurückrufen?"',
    '„Ich habe ein Problem mit …"'
  ];

  const faqItems = [
    { question: 'Ersetzt der Telefonagent mein Team?', answer: 'Nein. Er übernimmt Standardfälle und erfasst Infos – komplexe Fälle gehen an Ihr Team.' },
    { question: 'Kann der Assistent Termine wirklich buchen?', answer: 'Ja, je nach Setup. Wenn echte Kalenderlogik und Regeln nötig sind, setzen wir das sauber um.' },
    { question: 'Was passiert, wenn der Assistent etwas nicht versteht?', answer: 'Dann fragt er nach oder erfasst einen Rückrufwunsch. Wichtig: Er rät nicht „irgendwas".' },
    { question: 'Ist das DSGVO-konform umsetzbar?', answer: 'In der Regel ja – mit Datenminimierung, Transparenz und klaren Regeln (welche Daten abgefragt werden und wohin sie gehen).' },
    { question: 'Kann man mehrere Sprachen nutzen?', answer: 'Ja, mehrsprachige Kommunikation ist möglich.' },
    { question: 'Brauche ich dafür einen Softwareentwickler?', answer: 'Für ein einfaches Setup nicht zwingend. Für CRM-, Kalender- oder Ticket-Integrationen ist ein Software-Entwickler / Softwareentwickler sehr hilfreich.' }
  ];

  return (
    <div style={{ background: '#FAFAF9' }}>
      <LocalBusinessSchema
        pageType="service"
        customDescription={isRegional
          ? `Telefonische Kundenassistenz für Unternehmen in ${regionName} und Umgebung. Pixel Kraftwerk aus Groitzsch richtet KI-Telefonassistenten für Inbound-Anrufe, Terminbuchung und Lead-Qualifizierung ein.`
          : 'Telefonische Kundenassistenz für automatische Anrufannahme. Pixel Kraftwerk aus Groitzsch richtet KI-Telefonassistenten für Inbound-Anrufe, Terminbuchung und Lead-Qualifizierung ein.'}
      />
      {isRegional ? (
        <BreadcrumbSchemaRegionService
          regionName={regionName}
          regionUrl={regionUrl}
          serviceName="Telefonassistenten"
          serviceUrl={currentPageUrl}
        />
      ) : (
        <BreadcrumbSchema serviceName="Telefonische Kundenassistenz" serviceUrl="https://pixelkraftwerk-ai.com/telefonassistenten" />
      )}
      <ServiceJsonLd
        name={isRegional ? `Telefonische Kundenassistenz in ${regionName}` : 'Telefonische Kundenassistenz (KI-Telefonagent)'}
        serviceType="KI-Telefonassistent"
        description={isRegional
          ? `Telefonische Kundenassistenz für Unternehmen in ${regionName} und Umgebung. Automatische Anrufannahme rund um die Uhr – von Pixel Kraftwerk aus Groitzsch.`
          : 'Telefonische Kundenassistenz für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr.'}
        url={currentPageUrl}
        areaServed={isRegional ? [regionName] : undefined}
        faqs={[
          ...faqItems.map((item) => ({ question: item.question, answer: item.answer })),
          ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
        ]}
        pageName={isRegional ? `Telefonassistenten in ${regionName}` : 'Telefonassistenten'}
      />
      {/* HERO */}
      <section
        id="ki-telefonagent-fur-ihr-unternehmen"
        className="relative min-h-[100dvh] md:min-h-screen flex flex-col"
        style={{ background: '#FAFAF9' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/ki-telefonassistent-hero.png"
            alt="Telefonische Kundenassistenz – KI-Anrufannahme"
            fill
            className="object-cover"
            style={{ objectPosition: '55% center' }}
            priority
            sizes="100vw"
          />
          {/* Mobile: fast deckend damit Text lesbar bleibt */}
          <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(100deg, rgba(250,250,249,0.99) 0%, rgba(250,250,249,0.97) 60%, rgba(250,250,249,0.88) 78%, rgba(250,250,249,0.5) 92%, rgba(250,250,249,0.15) 100%)' }} aria-hidden />
          {/* Desktop: Original-Verlauf */}
          <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(95deg, rgba(250,250,249,0.98) 0%, rgba(250,250,249,0.94) 32%, rgba(250,250,249,0.55) 52%, rgba(250,250,249,0.05) 70%, rgba(250,250,249,0.0) 82%)' }} aria-hidden />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav items={isRegional ? [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
            { label: regionName!, href: regionUrl },
            { label: 'Telefonassistenten' },
          ] : [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'Telefonassistenten' },
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
                {isRegional ? `Telefonische Kundenassistenz in ${regionName}` : 'Telefonische Kundenassistenz Groitzsch & Leipzig'}
              </motion.h1>

              <motion.h2
                className="font-heading font-bold tracking-tight mb-2 leading-[1.08]"
                style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                {regionContent?.localHook || 'Aus jedem Anruf wird eine Antwort, ein Rückruf oder ein Termin – automatisch, Tag und Nacht.'}
              </motion.h2>

              <motion.h3 className="sr-only md:not-sr-only text-sm md:text-base max-w-xl mb-3 leading-snug font-semibold" style={{ color: '#0E7C72' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                {SERVICE_TITLE_KEYWORDS['telefonassistenten']}
              </motion.h3>

              <motion.p className="text-base md:text-lg max-w-xl mb-4 leading-relaxed" style={{ color: '#404B48' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                {isRegional && regionContent?.intro
                  ? regionContent.intro
                  : 'Unsere telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet Fragen, erfasst Rückrufwünsche und vereinbart Termine – automatisiert, professionell und 24/7.'}
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.5 }}>
                <button onClick={scrollToContact} className="btn-primary">
                  Erstgespräch sichern
                  <ArrowRight size={18} />
                </button>
                <a href={`tel:${businessInfo.contact.telephoneE164}`} className="inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold underline underline-offset-4 sm:no-underline sm:justify-start sm:px-6 sm:py-3 sm:rounded-xl sm:border" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>
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

      {/* PROBLEM – Anrufe kommen, aber nicht durch */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 mb-6 rounded-full">
                <AlertTriangle size={16} className="text-primary-400" />
                <span className="text-primary-400 text-sm font-heading font-bold tracking-wide">DAS PROBLEM</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Das Problem: <span className="text-primary-500">Anrufe kommen – aber nicht durch</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Das Telefon klingelt mitten im Termin. Im Kundengespräch. Auf der Baustelle. In der Behandlung. Und während Ihr Team arbeitet, verlieren Sie genau den Erstkontakt, der ein neuer Kunde hätte werden können.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="group relative flex items-start bg-white p-6 border border-dark-200 hover:border-primary-500/40 transition-all duration-300 rounded-2xl shadow-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500/60 group-hover:bg-primary-500 transition-colors duration-300" />
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-500/10 border border-primary-500/20 mr-4 flex-shrink-0 rounded-xl">
                    <AlertTriangle className="text-primary-400" size={18} strokeWidth={2} />
                  </div>
                  <p className="text-light-200 pt-2">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-light-100 mt-10 text-lg font-heading font-bold"
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

      {/* VERLUST – Warum verpasste Anrufe so teuer sind */}
      <section className="py-16 border-t" style={{ background: '#F4F7F6', borderColor: '#E4E9E7' }}>
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
                Warum verpasste Anrufe so teuer sind (ohne dass man es merkt)
              </h2>
              <p className="text-light-200 mb-6">
                Viele Anrufer rufen nicht dreimal an. Wenn niemand rangeht, passiert oft:
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              {[
                'sie schreiben gar nicht erst eine E-Mail',
                'sie rufen direkt beim nächsten Anbieter an',
                'sie sind genervt, weil es „zu umständlich" wirkt'
              ].map((loss, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-dark-200 p-5 text-center rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-light-200 text-sm">{loss}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="text-center py-6 border-t border-b border-primary-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100 text-lg font-heading font-bold">
                Das Ergebnis: <span className="text-primary-400">Aufträge gehen verloren</span>, obwohl die Nachfrage eigentlich da wäre.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ZIELZUSTAND – so klingt Ihr Telefon, wenn die Assistenz läuft */}
      <section className="py-20" style={{ background: '#FAFAF9' }}>
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
                So klingt Ihr Telefon, <span className="text-primary-500">wenn die Assistenz läuft</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Statt „Sorry, wir waren im Termin – ich ruf zurück" bekommen Ihre Anrufer sofort einen freundlichen Gesprächspartner. Und Sie bekommen morgens eine saubere Liste: Wer hat angerufen, was will er, wann soll zurückgerufen werden, wie dringend ist es.
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
                Weniger verpasste Anrufe
              </span>
              <span className="inline-flex items-center gap-2 text-light-100 font-heading font-bold">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Schnellere Reaktion
              </span>
              <span className="inline-flex items-center gap-2 text-light-100 font-heading font-bold">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Mehr qualifizierte Rückrufe
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LÖSUNG – Was die Kundenassistenz leistet */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
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

            <div className="bg-white p-8 border border-dark-200 mb-8 rounded-2xl shadow-card">
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
              className="bg-white p-8 border border-dark-200 mb-6 rounded-2xl shadow-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">
                Typische Fragen, die der Telefonagent sofort klärt
              </h3>
              <p className="text-light-300 text-sm mb-6">Damit Sie ein Gefühl dafür bekommen, hier typische Beispiele:</p>
              <div className="space-y-3">
                {typicalQuestions.map((q, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-9 h-9 bg-primary-500/20 border border-primary-500/40 flex-shrink-0 mt-1">
                      <Phone className="text-primary-500" size={15} strokeWidth={2} />
                    </div>
                    <div className="relative bg-white border border-dark-200 px-4 py-3 flex-1 rounded-2xl shadow-card">
                      <div className="absolute left-[-7px] top-3 w-3 h-3 bg-white border-l border-b border-dark-200 rotate-45" />
                      <p className="text-light-200 text-sm">{q}</p>
                    </div>
                  </motion.div>
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
                So entlasten Sie Ihr Team – und verlieren trotzdem keinen Kontakt.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VORTEILE – nach vorne gezogen */}
      <section className="py-20" style={{ background: '#FAFAF9' }}>
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
                Ihre <span className="text-primary-500">Vorteile</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white p-6 border border-dark-200 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary-glow rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 border border-primary-500/30 mb-4 text-primary-500 group-hover:bg-primary-500/20 transition-colors duration-300 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{benefit.title}</h3>
                  <p className="text-light-300 text-sm leading-relaxed">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FÜR WEN – Branchen / Selbstselektion */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
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
              <p className="text-light-200 max-w-3xl mx-auto mb-8">
                Ehrliche Antwort: Eine telefonische Kundenassistenz lohnt sich vor allem, wenn Ihr Alltag einer dieser Situationen ähnelt:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {selfSelectionCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white p-5 border border-dark-200 hover:border-primary-500/40 transition-all duration-300 rounded-2xl shadow-card"
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

            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-primary-500/40" />
                <Users size={18} className="text-primary-500" />
                <div className="w-8 h-px bg-primary-500/40" />
              </div>
              <h3 className="text-xl font-heading font-bold text-light-100">Ideal für diese Branchen</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="group flex items-start bg-white p-6 border border-dark-200 hover:border-primary-500/50 hover:-translate-y-1 hover:shadow-primary-glow transition-all duration-300 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/30 mr-4 flex-shrink-0 text-primary-500 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300 rounded-xl">
                    {audience.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{audience.title}</h3>
                    <p className="text-light-300 text-sm leading-relaxed">{audience.description}</p>
                  </div>
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
                Wenn Sie sich wiedererkennen, <strong>lohnt sich ein 15-Minuten-Gespräch.</strong>
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-5 py-3 bg-primary-500/10 border border-primary-500/50 text-primary-400 font-heading font-bold hover:bg-primary-500 hover:text-dark-500 transition-all duration-300 flex-shrink-0 rounded-full"
              >
                <Phone size={18} className="mr-2" />
                Erstgespräch anfragen
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRAXIS-BEISPIEL – Anruf-Protokoll + Alltag-Szenarien */}
      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 mb-6 rounded-full">
                <Phone size={14} className="text-primary-400" />
                <span className="text-primary-400 text-sm font-heading font-bold tracking-wide">AUS DER PRAXIS</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                So sieht ein typischer Anruf bei der Assistenz aus
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Kurzes Beispiel aus der Praxis: Ein Kunde ruft an, während Sie im Kundentermin sind. Folgendes passiert.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-dark-200 mb-12 shadow-xl overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between px-6 py-3 bg-dark-500 border-b border-dark-200">
                <div className="flex items-center gap-2">
                  <PhoneCall size={16} className="text-primary-400" />
                  <span className="text-primary-400 text-xs font-heading font-bold tracking-wider">EINGEHENDER ANRUF</span>
                </div>
                <div className="flex items-center gap-2 text-light-300 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                  </span>
                  15:47 Uhr
                </div>
              </div>
              <div className="px-6 py-5 border-b border-dark-200 bg-dark-400">
                <div className="text-xs text-light-300 mb-1 font-heading tracking-wide">ANLIEGEN</div>
                <div className="text-light-100 font-heading font-bold">Terminanfrage Heizungswartung – Leipzig-Gohlis</div>
              </div>
              <div className="px-6 py-5 space-y-3 font-mono text-sm">
                {[
                  { label: 'Anrufer', value: 'Thomas Weber' },
                  { label: 'Nummer', value: '0341 / …' },
                  { label: 'Anliegen', value: 'Terminanfrage Heizungswartung' },
                  { label: 'Ort', value: 'Leipzig-Gohlis' },
                  { label: 'Dringlichkeit', value: 'Mittel, „die nächsten 2 Wochen"' },
                  { label: 'Rückruf', value: 'Mo–Fr 9–12 Uhr bevorzugt' }
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[8rem_1fr] gap-3 items-start">
                    <span className="text-light-300 text-xs uppercase tracking-wide pt-0.5">{row.label}</span>
                    <span className="text-light-100">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-dark-200 bg-dark-500 flex items-center justify-between">
                <span className="text-light-300 text-xs">Automatisch erfasst von der Kundenassistenz</span>
                <div className="flex items-center gap-2 text-primary-400 text-xs font-heading font-bold">
                  <CheckCircle size={12} />
                  TERMINVORSCHLAG GESENDET
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {praxisScenarios.map((scenario, index) => {
                const Icon = scenario.icon;
                return (
                  <motion.div
                    key={index}
                    className="group bg-white p-6 border border-dark-200 hover:border-primary-500/40 transition-all duration-300 rounded-2xl shadow-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 border border-primary-500/30 mb-4 group-hover:bg-primary-500/20 transition-colors duration-300 rounded-full">
                      <Icon className="text-primary-500" size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-heading font-bold text-light-100 mb-2">{scenario.title}</h3>
                    <p className="text-light-300 text-sm leading-relaxed">{scenario.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* KURZ ERKLÄRT – wandert nach hinten, SEO-Content bleibt */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
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
                Statt „Bitte versuchen Sie es später nochmal" passiert Folgendes:
              </p>
            </motion.div>
            <ul className="space-y-2 text-light-200 mb-8 max-w-2xl mx-auto">
              <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Anrufer werden freundlich begrüßt</li>
              <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>das Anliegen wird kurz geklärt</li>
              <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Standardfragen werden beantwortet</li>
              <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Termine oder Rückrufwünsche werden strukturiert aufgenommen</li>
              <li className="flex items-start"><svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>dringende Fälle werden weitergeleitet</li>
            </ul>
            <motion.div
              className="bg-white border-l-2 border-primary-500 p-6 flex items-start gap-4 rounded-xl shadow-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary-500/10 border border-primary-500/20 flex-shrink-0 rounded-xl">
                <AlertTriangle size={18} className="text-primary-500" />
              </div>
              <p className="text-light-100">
                <strong className="text-primary-500">Wichtig:</strong> Der Telefonagent ersetzt kein Fachpersonal – er <strong>entlastet</strong>, <strong>filtert</strong> und <strong>sorgt dafür, dass kein Anruf verloren geht</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ÜBERGABE ANS TEAM */}
      <section className="py-20" style={{ background: '#FAFAF9' }}>
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
                Der große Vorteil ist nicht nur „24/7 erreichbar". Sondern: Ihr Team bekommt <strong className="text-light-100">strukturierte Infos</strong>, statt „Anruf verpasst" – und kann sofort effizient reagieren.
              </p>
              <p className="text-light-200 mb-4">
                Beispiele, wie Anfragen bei Ihnen ankommen können:
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 border border-primary-500/30 mb-8 rounded-2xl shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-3 text-light-200">
                <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />per E-Mail mit Zusammenfassung (Name, Anliegen, Ort, Dringlichkeit, Rückrufzeit)</li>
                <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />als Eintrag im CRM (mit Tags/Kategorie)</li>
                <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />als Übersicht in einer Team-Inbox</li>
              </ul>
            </motion.div>
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

      {/* SETUP – Schnell vs. Individuell */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
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
                Mini-Vergleich: Schnell starten vs. individuell integrieren
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Zwei Wege, je nachdem wie tief Sie einsteigen wollen.
              </p>
            </motion.div>
            <motion.div
              className="overflow-x-auto mb-8 rounded-2xl border shadow-card" style={{ borderColor: '#E4E9E7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Setup</th>
                    <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Gut, wenn…</th>
                    <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Ergebnis</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr style={{ background: '#fff' }}>
                    <td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Schnell-Setup (MVP)</td>
                    <td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Sie wollen schnell live gehen & erstmal testen</td>
                    <td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>Sofort weniger verpasste Anrufe</td>
                  </tr>
                  <tr style={{ background: '#FAFAF9' }}>
                    <td className="py-3 px-4" style={{ color: '#404B48' }}>Individuelle Einrichtung</td>
                    <td className="py-3 px-4" style={{ color: '#404B48' }}>Sie wollen CRM/Kalender/Prozesse sauber automatisieren</td>
                    <td className="py-3 px-4 font-semibold" style={{ color: '#0E7C72' }}>Mehr qualifizierte Leads + weniger Aufwand</td>
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
                  <li className="flex items-start"><CheckCircle className="text-primary-500/70 mr-3 flex-shrink-0 mt-0.5" size={18} />schnell live gehen möchten</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500/70 mr-3 flex-shrink-0 mt-0.5" size={18} />sehen wollen, welche Anrufe wirklich kommen</li>
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
                <p className="text-light-300 text-sm mb-4">(CRM / Kalender / Terminlogik)</p>
                <p className="text-light-200 mb-4">Ideal, wenn Sie:</p>
                <ul className="space-y-3 text-light-200">
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />Anrufe strukturiert ins CRM bringen möchten</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />Terminlogik automatisieren wollen</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />mehrere Leistungen/Teams/Standorte haben</li>
                  <li className="flex items-start"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={18} />messbar mehr qualifizierte Anrufe wollen</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* ABLAUF – So entsteht Ihre telefonische Kundenassistenz */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
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
                Fünf Schritte – von der ersten Analyse bis zum laufenden Betrieb.
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

      {/* CHATBOT CROSS-LINK */}
      <section className="py-16" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="rounded-2xl border bg-white p-8 shadow-card"
              style={{ borderColor: 'rgba(14,124,114,0.25)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0" style={{ background: 'rgba(14,124,114,0.08)', border: '1px solid rgba(14,124,114,0.2)' }}>
                  <MessageSquare size={22} style={{ color: '#0E7C72' }} strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-heading font-bold tracking-wide mb-2 uppercase" style={{ color: '#0E7C72' }}>Ergänzender Kanal</div>
                  <h3 className="text-base font-heading font-bold mb-2" style={{ color: '#0C1210' }}>
                    Auch über die Website erreichbar sein?
                  </h3>
                  <p className="mb-4 leading-relaxed text-sm" style={{ color: '#404B48' }}>
                    Viele Kunden nehmen zuerst über die Website Kontakt auf. Unsere digitale Kundenassistenz beantwortet Anfragen direkt online und erfasst Anliegen strukturiert.
                  </p>
                  <a
                    href="/ki-chatbots#digitale-kundenassistenz"
                    className="inline-flex items-center font-heading font-bold hover:underline transition-colors duration-200 group/link text-sm"
                    style={{ color: '#0E7C72' }}
                  >
                    Mehr zur digitalen Kundenassistenz
                    <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ZWISCHEN-CTA */}
      <section className="py-16" style={{ background: '#FAFAF9' }}>
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
                Passt eine telefonische Kundenassistenz zu Ihrem Alltag?
              </h2>
              <p className="text-light-200 mb-8 max-w-xl mx-auto">
                In einem kurzen Gespräch klären wir, wie viele Anrufe Sie heute verlieren – und ob ein KI-Telefonagent für Ihr Team wirklich Entlastung bringt.
              </p>
              <p className="text-xs text-primary-400 font-semibold mb-3 flex items-center justify-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Wir nehmen maximal 3 Neukunden pro Monat an
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg rounded-xl"
              >
                Wie viele Anrufe gehen bei Ihnen verloren? Jetzt klären.
                <ArrowRight className="ml-2" size={22} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOKAL-SEKTION */}
      <section className="py-20" style={{ background: '#FAFAF9' }}>
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
                {isRegional
                  ? `Telefonische Kundenassistenz für Unternehmen in ${regionName}`
                  : 'Lokal in Leipzig & Region: Warum das bei Telefonbots wirklich hilft'}
              </h2>
              {isRegional && regionContent?.localSection ? (
                regionContent.localSection.map((p, i) => (
                  <motion.p
                    key={i}
                    className="text-light-200 max-w-3xl mx-auto mb-4 text-left"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {p}
                  </motion.p>
                ))
              ) : isRegional ? (
                <p className="text-light-200 max-w-3xl mx-auto">
                  Gerade bei telefonischer Kommunikation zählt Feingefühl: Tonalität, typische Fragen und regionale Besonderheiten. Als Agentur mit Sitz in Groitzsch kennen wir die Anforderungen von Unternehmen in {regionName} und der Region. Einrichtung und Optimierung Ihrer telefonischen Kundenassistenz erfolgen nah an Ihrem Alltag – persönlich, praxisnah und mit kurzen Wegen.
                </p>
              ) : (
                <p className="text-light-200 max-w-3xl mx-auto">
                  Gerade bei telefonischer Kommunikation zählt Feingefühl: Tonalität, typische Fragen, regionale Orte und echte Abläufe. Deshalb ist es ein Vorteil, wenn Einrichtung und Optimierung nah am Alltag lokaler Unternehmen passieren.
                </p>
              )}
            </motion.div>
            {!isRegional && (
              <motion.p
                className="text-light-200 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Wir unterstützen Unternehmen in Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz und Groitzsch – und kennen die typischen Anforderungen in der Region.
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
        <section className="py-16" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6">
                Telefonassistenten für Unternehmen in {regionName}
              </h3>
              {regionContent.paragraphs.map((p, i) => (
                <p key={i} className="text-light-200 text-lg leading-relaxed mb-5">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isRegional && (
        <section className="py-12" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-light-200 text-lg leading-relaxed">
                Unsere KI-Telefonassistenten entlasten Teams in{' '}
                <a href="/leistungsgebiete/leipzig" className="text-primary-400 hover:underline">Leipzig</a>,{' '}
                <a href="/leistungsgebiete/borna" className="text-primary-400 hover:underline">Borna</a> und{' '}
                <a href="/leistungsgebiete/markkleeberg" className="text-primary-400 hover:underline">Markkleeberg</a> täglich bei der Anrufannahme.
                Direkt aus <a href="/leistungsgebiete/groitzsch" className="text-primary-400 hover:underline">Groitzsch</a> – persönliche Betreuung, kurze Wege.
              </p>
            </div>
          </div>
        </section>
      )}

      <SubpageLinksBlock
        serviceSlug="telefonassistenten"
        regionSlug={isRegional ? regionSlug : undefined}
        title="Telefonassistenten im Detail"
      />

      <RelatedServices currentSlug="telefonassistenten" />

      {/* FAQ */}
      <section id="faq" className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isRegional
                ? `FAQ – Telefonische Kundenassistenz in ${regionName}`
                : 'FAQ – häufige Fragen zur telefonischen Kundenassistenz'}
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
                <Phone className="text-primary-500" size={28} strokeWidth={1.5} />
              </div>
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Bereit, <span className="text-primary-500">keinen Anruf mehr zu verlieren{isRegional ? ` in ${regionName}` : ''}?</span>
              </motion.h2>
              <motion.p
                className="text-light-200 mb-8 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                In 15 Minuten klären wir, wie viele Anrufe Sie heute verlieren – und ob eine Assistenz für Ihr Team wirklich Entlastung bringt. Ehrlich. Ohne Verpflichtung.
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
                  className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg rounded-xl"
                >
                  Kostenloses Erstgespräch anfragen
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
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary-500" />Ohne Einrichtungskosten</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary-500" />Ohne Verpflichtung</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary-500" />Mit eigener Rufnummer</span>
              </motion.div>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* REGIONEN-BLOCK (ausgelagert aus Abschluss-CTA) */}
      <section className="py-16" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {isRegional ? (
              <div className="text-left">
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
                  <a href="/telefonassistenten" className="text-primary-400 hover:underline">
                    Mehr zur telefonischen Kundenassistenz im Überblick
                  </a>
                  {' – '}alle Details auf unserer Service-Seite.
                </p>
                <p className="text-light-300 text-sm mb-3">Telefonassistenten in anderen Gebieten:</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {otherRegions.map((city, i) => (
                    <li key={city.slug}>
                      <a
                        href={`/leistungsgebiete/${city.slug}/telefonassistenten`}
                        className="text-primary-400 hover:underline"
                      >
                        {getRegionServiceLinkText('telefonassistenten', city.name, i)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <ServicedRegionsBlock />
                <RegionServiceLinksBlock serviceSlug="telefonassistenten" title="Telefonassistenten in Ihrem Gebiet" />
              </>
            )}
          </div>
        </div>
      </section>

      <ContactForm service="telefonassistent" heading="Telefonassistenten-Beratung anfragen" subheading="Wir analysieren, wie viele Anrufe Sie verlieren und was ein KI-Telefonagent konkret bringt." />

      <GoogleMapsSection />

      <StickyCtaBar ctaLabel="Erstgespräch sichern" />
    </div>
  );
};

export default Telefonassistenten;
export type { TelefonassistentenProps };
