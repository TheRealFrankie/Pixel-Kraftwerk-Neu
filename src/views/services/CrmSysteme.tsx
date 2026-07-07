'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Users,
  ArrowRight,
  CheckCircle,
  Shield,
  BarChart3,
  Target,
  Zap,
  Database,
  TrendingUp,
  Settings,
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import BreadcrumbSchemaRegionService from '../../components/BreadcrumbSchemaRegionService';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TrustLine from '../../components/TrustLine';
import StickyCtaBar from '../../components/StickyCtaBar';
import ServiceJsonLd from '../../components/ServiceJsonLd';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import SubpageLinksBlock from '../../components/SubpageLinksBlock';
import HeroScrollIndicator from '../../components/HeroScrollIndicator';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

interface CrmSystemeProps {
  regionSlug?: string;
  regionName?: string;
}

const CrmSysteme: React.FC<CrmSystemeProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/crm-systeme`
    : `${baseUrl}/crm-systeme`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'crm-systeme', 'CRM-Systeme')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const breadcrumbItems = isRegional
    ? [
        { label: 'Startseite', href: '/' },
        { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
        { label: regionName!, href: regionUrl },
        { label: 'CRM-Systeme' },
      ]
    : [
        { label: 'Startseite', href: '/' },
        { label: 'Leistungen', href: '/leistungen' },
        { label: 'CRM-Systeme' },
      ];

  const faqs = [
    {
      question: 'Was ist ein CRM-System und warum brauche ich eines?',
      answer:
        'Ein CRM-System (Customer Relationship Management) ist eine Software, die alle Kundenkontakte, Anfragen, Angebote und Aufgaben an einem zentralen Ort bündelt. Statt verstreuter Zettel, Excel-Listen und E-Mail-Postfächer sehen Sie auf einen Blick, wo jeder Kunde steht. Das spart Zeit, verhindert verlorene Anfragen und sorgt dafür, dass Ihr Team professionell und organisiert arbeitet – selbst bei wachsendem Geschäft.',
    },
    {
      question: 'Für welche Unternehmensgrößen eignet sich ein CRM?',
      answer:
        'CRM-Systeme sind nicht nur für Konzerne. Gerade kleine Teams mit 2–20 Mitarbeitern profitieren enorm, weil dort besonders viel Wissen „im Kopf" steckt. Wenn ein Mitarbeiter ausfällt oder Urlaub hat, sind alle Infos trotzdem verfügbar. Ab dem Moment, wo Sie mehr als 10 Anfragen pro Woche bearbeiten, lohnt sich ein strukturiertes System.',
    },
    {
      question: 'Wie lange dauert die Einführung eines CRM-Systems?',
      answer:
        'Ein einfaches Setup mit den wichtigsten Pipelines und Automatisierungen steht in 2–4 Wochen. Komplexere Migrationen mit Datenimport aus Altsystemen, individuellen Workflows und Team-Schulung dauern 4–8 Wochen. Wir arbeiten iterativ: Sie können das System ab Woche 2 produktiv nutzen, während wir im Hintergrund weitere Automatisierungen einbauen.',
    },
    {
      question: 'Was kostet ein CRM-System für kleine Unternehmen?',
      answer:
        'Die Kosten hängen von Anbieter, Nutzerzahl und Umfang der Einrichtung ab. Wir bieten ein transparentes Paket: Einmalige Einrichtung plus optionales monatliches Betreuungspaket – Sie wissen vorab genau, was auf Sie zukommt. Im Vergleich zum Umsatzverlust durch verlorene Leads rechnet sich die Investition meist innerhalb weniger Wochen. Im kostenlosen Erstgespräch nennen wir Ihnen konkrete Zahlen für Ihren Fall.',
    },
    {
      question: 'Kann ich mein bestehendes System (Excel, Outlook) integrieren?',
      answer:
        'Ja. Wir migrieren Daten aus Excel, Outlook, Google Contacts und gängigen Branchensoftware-Lösungen. Bestehende Kontakte, Notizen und Kommunikationshistorie werden sauber importiert, damit nichts verloren geht. Auch eine laufende Synchronisation (z. B. E-Mail-Integration, Kalender-Anbindung) richten wir standardmäßig ein.',
    },
    {
      question: 'Welche CRM-Software empfiehlt Pixel Kraftwerk?',
      answer:
        'Wir arbeiten herstellerunabhängig und wählen die Plattform nach Ihren Anforderungen. Für kleine Teams eignen sich Lösungen wie HubSpot (starke kostenlose Basis), Pipedrive (vertriebsfokussiert) oder Brevo (Marketing + CRM). Für Handwerker und Dienstleister gibt es branchenspezifische Optionen. Entscheidend ist nicht die Software – sondern dass sie zu Ihren Prozessen passt.',
    },
    {
      question: 'Wie sicher sind meine Kundendaten im CRM?',
      answer:
        'Datenschutz hat oberste Priorität. Wir setzen auf DSGVO-konforme Anbieter mit Servern in der EU, verschlüsselter Datenübertragung und granularer Rechteverwaltung. Sie entscheiden, wer welche Daten sehen darf. Zusätzlich richten wir automatische Backups und Löschfristen ein, damit Sie jederzeit audit-fähig sind.',
    },
    {
      question: 'Kann das CRM-System mit meiner Website verknüpft werden?',
      answer:
        'Selbstverständlich. Kontaktformulare, Chatbot-Anfragen und Terminbuchungen fließen automatisch ins CRM. So wird aus einem Website-Besucher direkt ein Lead mit allen Infos – ohne manuelles Abtippen. Wir integrieren das nahtlos in Ihre bestehende oder von uns entwickelte Website.',
    },
    {
      question: 'Was passiert nach der Einrichtung – bekomme ich Support?',
      answer:
        'Ja. Wir bieten optionale Betreuungspakete mit monatlichem Review, Workflow-Anpassungen und Schulungen für neue Teammitglieder. Die meisten Kunden starten mit dem Betreuungspaket und reduzieren nach 3–6 Monaten, wenn alle Prozesse eingespielt sind. Bei akuten Fragen sind wir natürlich jederzeit erreichbar.',
    },
    {
      question: 'Kann ich das CRM-System selbst verwalten?',
      answer:
        'Absolut. Wir schulen Ihr Team, sodass Alltags-Aufgaben (Kontakte anlegen, Pipeline pflegen, Berichte ziehen) ohne uns funktionieren. Für Anpassungen an Workflows, neue Automatisierungen oder Integrationen stehen wir als Partner bereit. Ziel ist Ihre Eigenständigkeit – nicht Abhängigkeit.',
    },
  ];

  const problemPoints = [
    'Anfragen gehen in E-Mail-Postfächern, Notizzetteln und Handynotizen unter',
    'Kein Überblick, welche Leads offen sind und wer nachfassen muss',
    'Angebote werden verschickt – aber das Follow-up vergessen',
    'Kundenwissen steckt in einzelnen Köpfen statt im System',
    'Neukundengewinnung funktioniert, aber Bestandskunden werden vernachlässigt',
    'Keine Auswertung, woher Aufträge kommen und welche Kanäle sich lohnen',
  ];

  const solutionFeatures = [
    {
      icon: Database,
      title: 'Zentrale Kundendatenbank',
      description:
        'Alle Kontakte, Anfragen und Kommunikation an einem Ort. Jeder im Team sieht sofort den aktuellen Stand – ob am Schreibtisch oder unterwegs auf der Baustelle.',
    },
    {
      icon: Target,
      title: 'Visuelle Vertriebs-Pipeline',
      description:
        'Ihre Leads und Angebote als übersichtliche Kanban-Boards. Drag & Drop vom Erstkontakt bis zum Abschluss. Nichts geht mehr verloren, kein Follow-up wird vergessen.',
    },
    {
      icon: Zap,
      title: 'Automatisierte Follow-ups',
      description:
        'Das System erinnert Ihr Team automatisch an Nachfass-Aufgaben, verschickt Follow-up-E-Mails und eskaliert, wenn eine Anfrage zu lange unbearbeitet bleibt.',
    },
    {
      icon: BarChart3,
      title: 'Auswertungen & Kennzahlen',
      description:
        'Dashboard mit Conversion-Raten, Umsatzprognosen und Kanal-Performance. Sie sehen auf einen Blick, welche Marketing-Maßnahmen Aufträge bringen – und welche nicht.',
    },
    {
      icon: Settings,
      title: 'Individuelle Workflows',
      description:
        'Branchenspezifische Prozesse statt Standard-Vorlagen. Ob Aufmaß-Termin beim Handwerker, Exposé-Versand bei der Vermietung oder Beratungsgespräch beim Dienstleister – jeder Workflow passt zu Ihrem Geschäft.',
    },
    {
      icon: Shield,
      title: 'DSGVO & Datensicherheit',
      description:
        'EU-Server, verschlüsselte Übertragung, Löschfristen, Rechtemanagement. Ihre Kundendaten sind sicher und Sie sind jederzeit audit-fähig – ohne juristische Kopfschmerzen.',
    },
  ];

  const targetGroups = [
    {
      title: 'Handwerksbetriebe & Baufirmen',
      description:
        'Aufmaß-Anfragen, Angebote, Nachfass-Termine – strukturiert statt chaotisch. Mit mobiler CRM-App auch auf der Baustelle immer im Bild.',
      link: { href: '/crm-systeme/crm-fuer-handwerker', text: 'CRM für Handwerker im Detail' },
    },
    {
      title: 'Hausverwaltungen & Vermietung',
      description:
        'Mieteranfragen, Besichtigungen, Mietverträge – alles in einer Timeline. Automatische Erinnerungen bei Mieterwechsel und Vertragsfristen.',
      link: { href: '/crm-systeme/crm-fuer-vermietung', text: 'CRM für Vermietung im Detail' },
    },
    {
      title: 'Dienstleister & Agenturen',
      description:
        'Vom Erstgespräch über das Angebot bis zum Projektstart – transparente Pipeline und automatisierte Onboarding-Prozesse.',
      link: { href: '/crm-systeme/crm-fuer-dienstleister', text: 'CRM für Dienstleister im Detail' },
    },
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Analyse & Konzept',
      description:
        'Wir analysieren Ihre aktuellen Prozesse: Wie kommen Anfragen rein? Wer bearbeitet was? Wo gehen Leads verloren? Daraus entwickeln wir ein CRM-Konzept, das zu Ihrer Arbeitsweise passt – nicht umgekehrt.',
    },
    {
      step: '02',
      title: 'Plattform-Auswahl & Setup',
      description:
        'Basierend auf Teamgröße, Budget und Anforderungen empfehlen wir die passende CRM-Plattform. Dann richten wir Pipelines, benutzerdefinierte Felder, Tags und die Grundstruktur ein.',
    },
    {
      step: '03',
      title: 'Datenmigration & Integration',
      description:
        'Bestehende Kontakte und Kommunikationshistorie werden sauber importiert. Website-Formulare, E-Mail-Postfächer und Kalender werden angebunden, damit alles automatisch ins CRM fließt.',
    },
    {
      step: '04',
      title: 'Automatisierungen einrichten',
      description:
        'Follow-up-Sequenzen, Aufgaben-Zuweisungen, Benachrichtigungen und E-Mail-Templates – die Automatisierungen, die Ihrem Team täglich Zeit sparen und dafür sorgen, dass kein Lead durch das Raster fällt.',
    },
    {
      step: '05',
      title: 'Schulung & Go-Live',
      description:
        'Ihr Team lernt das System in einer praxisnahen Schulung kennen. Wir begleiten die ersten Wochen aktiv und optimieren Workflows basierend auf dem echten Arbeitsalltag.',
    },
  ];

  const comparisonTable = {
    headers: ['Kriterium', 'Ohne CRM', 'Mit CRM von Pixel Kraftwerk'],
    rows: [
      ['Anfragen-Überblick', 'Verstreut in E-Mail, Notizen, Kopf', 'Zentrale Pipeline mit Status pro Lead'],
      ['Follow-up', 'Vergessen oder zu spät', 'Automatische Erinnerung + E-Mail-Sequenz'],
      ['Kundenwissen', 'Nur beim zuständigen Mitarbeiter', 'Im System – für alle im Team abrufbar'],
      ['Auswertung', 'Bauchgefühl', 'Dashboard mit Zahlen und Trends'],
      ['Reaktionszeit', 'Stunden bis Tage', 'Minuten durch Sofort-Benachrichtigung'],
      ['Skalierbarkeit', 'Mehr Aufträge = mehr Chaos', 'Mehr Aufträge = gleicher Prozess, mehr Umsatz'],
    ],
  };

  return (
    <>
      <LocalBusinessSchema
        pageType="service"
        customDescription={isRegional
          ? `CRM-Systeme und Lead-Management für Unternehmen in ${regionName} und Umgebung. Pixel Kraftwerk aus Groitzsch richtet CRM-Systeme für Handwerker, Dienstleister und Vermietung ein.`
          : 'CRM-Systeme und Lead-Management für kleine Unternehmen. Pixel Kraftwerk aus Groitzsch richtet CRM-Systeme für Handwerker, Dienstleister und Vermietung ein – inklusive Migration und Schulung.'}
      />
      {isRegional ? (
        <BreadcrumbSchemaRegionService
          regionName={regionName!}
          regionUrl={regionUrl}
          serviceName="CRM-Systeme"
          serviceUrl={currentPageUrl}
        />
      ) : (
        <BreadcrumbSchema
          serviceName="CRM-Systeme"
          serviceUrl="https://pixelkraftwerk-ai.com/crm-systeme"
        />
      )}
      <ServiceJsonLd
        name={isRegional ? `CRM-Systeme ${regionName}` : 'CRM-Systeme'}
        serviceType="CRM-System Einführung & Betreuung"
        description={
          isRegional
            ? `CRM-Systeme und Lead-Management für Unternehmen in ${regionName}. Zentrale Kundenverwaltung, automatisierte Follow-ups und transparente Vertriebspipeline.`
            : 'CRM-Systeme und Lead-Management für kleine Unternehmen. Zentrale Kundenverwaltung, automatisierte Follow-ups und transparente Vertriebspipeline von Pixel Kraftwerk.'
        }
        url={currentPageUrl}
        areaServed={isRegional ? [regionName!] : undefined}
        faqs={[
          ...faqs.map((f) => ({ question: f.question, answer: f.answer })),
          ...(regionContent?.faqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
        ]}
        pageName="CRM-Systeme"
      />

      <div style={{ background: '#FAFAF9' }}>
        {/* Hero mit Premium-Hintergrundbild */}
        {/* HERO */}
      <section
        id="crm-systeme"
        className="relative h-screen flex flex-col overflow-hidden"
        style={{ background: '#FAFAF9' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/crm-systeme-kundenverwaltung.webp"
            alt="CRM-System für Kundenverwaltung und Lead-Management"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)' }} aria-hidden />
        </div>
        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav items={isRegional ? [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
            { label: regionName!, href: regionUrl },
            { label: 'CRM-Systeme' },
          ] : [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'CRM-Systeme' },
          ]} />
        </div>
        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-5">
                <span className="pill-badge"><Users size={12} /> CRM-Systeme</span>
              </motion.div>
              <motion.h1 className="font-heading font-bold tracking-tight mb-4 leading-[1.08]" style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                {isRegional ? `CRM-Systeme in ${regionName}` : 'CRM-Systeme Groitzsch & Leipzig'}
              </motion.h1>
              <motion.h2 className="text-base max-w-xl mb-3 leading-relaxed font-semibold" style={{ color: '#0E7C72' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                {SERVICE_TITLE_KEYWORDS['crm-systeme']}
              </motion.h2>
              <motion.p className="text-lg mb-3 max-w-xl leading-relaxed" style={{ color: '#0E7C72', fontWeight: 600 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                {regionContent?.localHook || 'Kunden gewinnen, Prozesse ordnen'}
              </motion.p>
              <motion.p className="text-base max-w-xl mb-6 leading-relaxed" style={{ color: '#404B48' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                Anfragen kommen rein – aber wer fasst nach? Ein CRM-System bringt Struktur in Ihren Vertrieb, automatisiert wiederkehrende Aufgaben und sorgt dafür, dass aus Interessenten Kunden werden.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                <button onClick={scrollToContact} className="btn-primary">
                  CRM-Beratung vereinbaren
                  <ArrowRight size={18} />
                </button>
                <a href="tel:+491785844460" className="btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Jetzt anrufen
                </a>
              </motion.div>
              <TrustLine className="mt-5" />
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

        {/* Problem */}
        <section className="py-20" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Das Problem: Wachstum ohne System führt zu Chaos
              </motion.h2>

              <motion.p
                className=" text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Die meisten kleinen Unternehmen starten mit E-Mail und Excel. Das funktioniert – bis es nicht mehr funktioniert. Ab einem bestimmten Punkt kosten verlorene Anfragen mehr als jedes CRM-System. Typische Symptome, die wir bei Kunden {isRegional ? `in ${regionName} und ` : ''}in der Region immer wieder sehen:
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {problemPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl bg-white border p-4 shadow-card" style={{ borderColor: '#E4E9E7' }}>
                    <div className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center mt-0.5" style={{ background: 'rgba(239,68,68,0.07)', color: '#B91C1C' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 6h6" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: '#404B48' }}>{point}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                className=" text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Kommt Ihnen das bekannt vor? Dann ist es Zeit für ein System, das mitwächst. Ein CRM ersetzt nicht Ihre Arbeitsweise – es gibt ihr eine Struktur, die mit jedem neuen Auftrag wertvoller wird.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Solution Features */}
        <section className="py-20" style={{ background: '#FAFAF9' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Die Lösung: Ein CRM, das zu Ihrem Geschäft passt
              </motion.h2>
              <motion.p
                className=" text-center text-lg mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Kein überladenes Enterprise-System, sondern genau die Funktionen, die Sie brauchen. Klar, übersichtlich und auf Ihre Branche zugeschnitten.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutionFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="bg-white border border-dark-200 p-6 hover:border-primary-500/30 transition-all duration-300 rounded-2xl shadow-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <feature.icon className="w-8 h-8 text-primary-500 mb-4" />
                    <h3 className="text-lg font-heading font-bold mb-3" style={{ color: '#0C1210' }}>{feature.title}</h3>
                    <p className=" text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ohne CRM vs. mit CRM – der Unterschied im Alltag
              </motion.h2>

              <motion.div
                className="overflow-x-auto rounded-2xl border shadow-card"
                style={{ borderColor: '#E4E9E7' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      {comparisonTable.headers.map((h, i) => (
                        <th key={i} className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? '#fff' : '#FAFAF9' }}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-3 px-4 text-sm border-b" style={{ color: cIdx === 2 ? '#0E7C72' : '#404B48', fontWeight: cIdx === 2 ? 600 : 400, borderColor: '#E4E9E7' }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="py-14" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                className="text-xl md:text-2xl font-heading font-bold mb-3" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Welches CRM passt zu Ihrem Unternehmen?
              </motion.h2>
              <motion.p
                className=" mb-6 text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                In 20 Minuten zeigen wir Ihnen, welches System zu Ihren Abläufen passt und was es kostet.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <button onClick={scrollToContact} className="btn-primary">
                  CRM-Beratung vereinbaren
                  <ArrowRight size={18} />
                </button>
                <a href="tel:+491785844460" className="btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Direkt anrufen
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Groups */}
        <section className="py-20" style={{ background: '#FAFAF9' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Für wen eignet sich ein CRM-System?
              </motion.h2>
              <motion.p
                className=" text-center text-lg mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Wir haben CRM-Systeme für verschiedenste Branchen eingerichtet. Drei Bereiche, in denen die Wirkung besonders groß ist:
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {targetGroups.map((group, i) => (
                  <motion.div
                    key={i}
                    className="bg-white border border-dark-200 p-6 flex flex-col rounded-2xl shadow-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-heading font-bold mb-3" style={{ color: '#0C1210' }}>{group.title}</h3>
                    <p className=" text-sm leading-relaxed mb-4 flex-1">{group.description}</p>
                    <a
                      href={isRegional ? `/leistungsgebiete/${regionSlug}/crm-systeme/${group.link.href.split('/').pop()}` : group.link.href}
                      className="text-primary-400 hover:underline text-sm font-heading"
                    >
                      {group.link.text} →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                So führen wir Ihr CRM-System ein
              </motion.h2>
              <motion.p
                className=" text-lg mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Kein Projekt-Marathon, sondern ein pragmatischer 5-Schritte-Prozess. Sie können das System bereits nach wenigen Tagen produktiv nutzen.
              </motion.p>

              <div className="space-y-6">
                {implementationSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 rounded-2xl border bg-white p-5 shadow-card"
                    style={{ borderColor: '#E4E9E7' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl" style={{ background: 'rgba(14,124,114,0.08)', border: '1px solid rgba(14,124,114,0.2)' }}>
                      <span className="font-heading font-bold text-sm" style={{ color: '#0E7C72' }}>{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-bold mb-1.5" style={{ color: '#0C1210' }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#68746F' }}>{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cross-link: Automatisierungen */}
        <section className="py-16" style={{ background: '#FAFAF9' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="bg-white border border-primary-500/20 p-8 rounded-2xl shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-bold mb-3" style={{ color: '#0C1210' }}>
                  CRM + Automatisierung = maximale Wirkung
                </h3>
                <p className=" leading-relaxed mb-4">
                  Ein CRM-System entfaltet sein volles Potenzial, wenn es mit intelligenten Automatisierungen kombiniert wird. Neue Anfragen werden automatisch als Lead angelegt, Follow-ups laufen im Hintergrund und Termine buchen sich von selbst. Unsere{' '}
                  <a href="/automatisierungen" className="text-primary-400 hover:underline">Automatisierungslösungen</a>{' '}
                  ergänzen Ihr CRM perfekt. Auch unser{' '}
                  <a href="/ki-chatbots" className="text-primary-400 hover:underline">KI-Chatbot</a>{' '}
                  kann Anfragen direkt ins CRM weiterleiten.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Regional Content */}
        {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
          <section className="py-16" style={{ background: '#F4F7F6' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <motion.h2
                  className="text-2xl md:text-3xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  CRM-Systeme für Unternehmen in {regionName}
                </motion.h2>
                {regionContent.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    className=" text-lg leading-relaxed mb-5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faq" className="py-20" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-8" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Häufige Fragen zu CRM-Systemen{isRegional ? ` in ${regionName}` : ''}
              </motion.h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
                ))}
                {regionContent?.faqs?.map((faq, i) => (
                  <FaqItem key={`local-${i}`} question={faq.q} answer={faq.a} index={faqs.length + i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: '#FAFAF9' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <TrendingUp className="w-4 h-4 text-primary-500" />
                <span className="text-primary-400 text-sm font-heading">Bereit für strukturierten Vertrieb?</span>
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Lassen Sie uns Ihr CRM-System gemeinsam aufsetzen
              </motion.h2>
              <motion.p
                className=" text-lg mb-8 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Kostenlose Erstberatung – wir analysieren Ihre aktuelle Situation und zeigen, wie ein CRM Ihren Arbeitsalltag konkret vereinfacht.
              </motion.p>
              <p className="text-xs font-semibold mb-4 flex items-center justify-center gap-1.5" style={{ color: '#0E7C72' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Wir nehmen maximal 3 Neukunden pro Monat an
              </p>
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center px-10 py-4 rounded-xl bg-primary-500 text-dark-500 font-heading font-bold text-lg shadow-lg shadow-primary-500/20 hover:bg-primary-400 hover:shadow-primary-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <ArrowRight className="mr-2" size={24} />
                Jetzt CRM-Beratung anfragen
              </motion.button>

              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a href="/automatisierungen" className="text-primary-400 hover:underline">Automatisierungslösungen entdecken</a>
                <a href="/ki-chatbots" className="text-primary-400 hover:underline">KI-Chatbots für Ihr Unternehmen</a>
                <a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">Mit SEO mehr Anfragen generieren</a>
              </div>
            </div>
          </div>
        </section>

        <SubpageLinksBlock
          serviceSlug="crm-systeme"
          regionSlug={isRegional ? regionSlug : undefined}
          title="CRM-Themen im Detail"
        />

        <RelatedServices currentSlug="crm-systeme" />

        <section className="py-20" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {isRegional ? (
                <div className="mt-10 text-left max-w-2xl mx-auto">
                  <h3 className="text-xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                    Weitere Leistungen in {regionName}
                  </h3>
                  <p className=" mb-3">
                    <a href={regionUrl} className="text-primary-400 hover:underline font-heading font-bold">
                      Alle Leistungen in {regionName}
                    </a>
                    {' – '}Übersicht unserer Angebote in Ihrer Region.
                  </p>
                  <p className=" mb-6">
                    <a href="/crm-systeme" className="text-primary-400 hover:underline">
                      Mehr zu CRM-Systemen im Überblick
                    </a>
                    {' – '}alle Details auf unserer Service-Seite.
                  </p>
                  <p className=" text-sm mb-3">CRM-Systeme in anderen Gebieten:</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {otherRegions.map((city, i) => (
                      <li key={city.slug}>
                        <a
                          href={`/leistungsgebiete/${city.slug}/crm-systeme`}
                          className="text-primary-400 hover:underline"
                        >
                          {getRegionServiceLinkText('crm-systeme', city.name, i)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <ServicedRegionsBlock />
                  <RegionServiceLinksBlock serviceSlug="crm-systeme" title="CRM-Systeme in Ihrem Gebiet" />
                </>
              )}
            </div>
          </div>
        </section>

        <ContactForm service="crm-systeme" heading="CRM-Beratung vereinbaren" subheading="In 20 Minuten klären wir, welches CRM zu Ihren Abläufen passt und was es kostet." />
        <GoogleMapsSection />
      </div>
      <StickyCtaBar ctaLabel="CRM-Beratung vereinbaren" />
    </>
  );
};

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      className="border border-dark-200 bg-white overflow-hidden rounded-2xl shadow-card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-400/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-light-100 font-heading font-bold pr-4">{question}</span>
        <CheckCircle className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-light-200 leading-relaxed">{answer}</div>
      )}
    </motion.div>
  );
}

export default CrmSysteme;
export type { CrmSystemeProps };
