'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Shield,
  BarChart2,
  FileText,
  Users,
  Inbox,
  Repeat2,
  Settings,
  Megaphone,
  UserPlus,
  Mail,
  Filter,
  Database,
  Send,
  BellRing,
  CalendarCheck,
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
import SubpageLinksBlock from '../../components/SubpageLinksBlock';
import CheckList from '../../components/ui/CheckList';
import Accordion from '../../components/Accordion';
import AutomationWorkflowVisual, { type WorkflowStep } from '../../components/AutomationWorkflowVisual';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

/* ─── Theme ────────────────────────────────────────────────────────────────── */
const INK    = '#0C1210';
const BODY   = '#404B48';
const MUTED  = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const SURFACE = '#F3F5F4';
const PAPER  = '#FAFAF9';

/* ─── Props ─────────────────────────────────────────────────────────────────── */
interface AutomatisierungenProps {
  regionSlug?: string;
  regionName?: string;
}

/* ─── Hero-Workflow-Visual (passend zur Leistung Automatisierungen) ─────────── */
const heroWorkflowSteps: WorkflowStep[] = [
  { icon: <Mail size={18} />, title: 'Neue Anfrage', badge: 'Eingang erfasst' },
  { icon: <Filter size={18} />, title: 'Daten prüfen & sortieren', badge: 'automatisch geprüft' },
  { icon: <Database size={18} />, title: 'CRM-Kontakt erstellen', badge: 'CRM aktualisiert' },
  { icon: <Send size={18} />, title: 'Automatische Antwort senden', badge: 'Nachricht versendet' },
  { icon: <BellRing size={18} />, title: 'Team benachrichtigen', badge: 'Aufgabe erstellt' },
  { icon: <CalendarCheck size={18} />, title: 'Follow-up planen', badge: 'Termin vorbereitet' },
];

/* ─── Automatisierungsbereiche ───────────────────────────────────────────────── */
const automationAreas = [
  {
    icon: <Inbox size={20} />,
    title: 'Kundenanfragen & Vertrieb',
    items: [
      'Anfragen aus Website, E-Mail, WhatsApp und Werbung zentral erfassen',
      'Interessenten automatisch vorqualifizieren',
      'Leads nach Leistung, Region oder Dringlichkeit sortieren',
      'Anfragen Mitarbeitern oder Standorten zuweisen',
      'Eingangsbestätigungen versenden',
      'Rückrufaufgaben erstellen',
      'Angebote nachfassen',
      'Unbearbeitete Anfragen erkennen',
      'Kontakte reaktivieren',
    ],
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Termine & Kunden-Onboarding',
    items: [
      'Termine rund um die Uhr buchen',
      'Bestätigungen und Erinnerungen versenden',
      'Kundendaten vor einem Termin abfragen',
      'Benötigte Dokumente anfordern',
      'Neue Kunden im CRM anlegen',
      'Projektordner erstellen',
      'Willkommensnachrichten versenden',
      'Mitarbeiter informieren',
    ],
  },
  {
    icon: <Megaphone size={20} />,
    title: 'E-Mail & Kundenservice',
    items: [
      'Eingehende E-Mails kategorisieren',
      'Nachrichten nach Dringlichkeit priorisieren',
      'Standardanfragen beantworten',
      'Antwortentwürfe vorbereiten',
      'Support-Tickets erstellen',
      'Nachrichten weiterleiten',
      'Unbeantwortete Anliegen überwachen',
      'Beschwerden sofort melden',
    ],
  },
  {
    icon: <FileText size={20} />,
    title: 'Angebote, Rechnungen & Dokumente',
    items: [
      'Daten in Angebote übernehmen',
      'Dokumente aus Vorlagen erstellen',
      'Angebote versenden und nachverfolgen',
      'Rechnungsdaten aus E-Mails auslesen',
      'Zahlungseingänge zuordnen',
      'Zahlungserinnerungen vorbereiten',
      'Dateien automatisch sortieren',
      'Dokumente zur Freigabe senden',
    ],
  },
  {
    icon: <Settings size={20} />,
    title: 'Interne Prozesse',
    items: [
      'Aufgaben automatisch erstellen und zuweisen',
      'Mitarbeiter über E-Mail, Teams, Slack oder Telegram informieren',
      'Freigaben einholen',
      'Daten zwischen Programmen synchronisieren',
      'Übergaben organisieren',
      'Projekt-Checklisten erstellen',
      'Fristen überwachen',
      'Wiederkehrende Aufgaben starten',
    ],
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Reporting & Controlling',
    items: [
      'Tägliche oder wöchentliche Zusammenfassungen erstellen',
      'Daten aus mehreren Programmen zusammenführen',
      'Vertriebskennzahlen aufbereiten',
      'Offene Aufgaben anzeigen',
      'Abweichungen erkennen und melden',
      'Berichte automatisch versenden',
      'Ausgefallene Abläufe protokollieren',
    ],
  },
  {
    icon: <Repeat2 size={20} />,
    title: 'Marketing & Kundenbindung',
    items: [
      'Kontakte in E-Mail-Sequenzen eintragen',
      'Interessenten segmentieren',
      'Bewertungsanfragen versenden',
      'Newsletter-Anmeldungen verarbeiten',
      'Kunden erneut kontaktieren',
      'Werbeanfragen weiterverarbeiten',
    ],
  },
  {
    icon: <UserPlus size={20} />,
    title: 'Personal & Recruiting',
    items: [
      'Bewerbungen zentral erfassen',
      'Eingangsbestätigungen versenden',
      'Bewerbungen vorsortieren',
      'Gesprächstermine koordinieren',
      'Onboarding-Aufgaben erstellen',
      'Unterlagen anfordern',
      'An Fristen und Schulungen erinnern',
    ],
  },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'Müssen wir unsere bisherigen Programme ersetzen?',
    answer: 'In vielen Fällen nicht. Wir prüfen zuerst, welche bestehenden Programme weiter genutzt und miteinander verbunden werden können.',
  },
  {
    question: 'Kann man nur einen einzelnen Ablauf automatisieren?',
    answer: 'Ja. Ein klar abgegrenzter Prozess ist häufig der sinnvollste Einstieg. Weitere Abläufe können später ergänzt werden.',
  },
  {
    question: 'Funktioniert Automatisierung auch ohne künstliche Intelligenz?',
    answer: 'Ja. Viele zuverlässige Automatisierungen basieren auf festen Regeln. KI wird nur dort eingesetzt, wo sie einen echten Vorteil bietet.',
  },
  {
    question: 'Was passiert, wenn ein Ablauf fehlschlägt?',
    answer: 'Für wichtige Prozesse können Fehlerüberwachung, Benachrichtigungen und alternative Abläufe eingerichtet werden.',
  },
  {
    question: 'Können Mitarbeiter einzelne Schritte freigeben?',
    answer: 'Ja. Kritische Aktionen können so eingerichtet werden, dass zunächst ein Mitarbeiter zustimmen muss.',
  },
  {
    question: 'Lohnt sich das auch für kleine Unternehmen?',
    answer: 'Ja, wenn ein Ablauf regelmäßig wiederkehrt oder unnötig viel Zeit kostet.',
  },
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer: 'Das hängt von den beteiligten Programmen, Regeln und Sonderfällen ab. Ein einzelner klar definierter Ablauf lässt sich schneller umsetzen als ein unternehmensweiter Prozess.',
  },
  {
    question: 'Ist eine DSGVO-bewusste Umsetzung möglich?',
    answer: 'Ja. Dabei berücksichtigen wir, welche Daten verarbeitet werden, wo sie gespeichert werden und wer darauf zugreifen kann.',
  },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */
const Automatisierungen: React.FC<AutomatisierungenProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/automatisierungen`
    : `${baseUrl}/automatisierungen`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'automatisierungen', 'Automatisierungen')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];

  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  /* Merge base FAQs with regional FAQs for schema */
  const allFaqsForSchema = [
    ...faqs.map((f) => ({ question: f.question, answer: f.answer })),
    ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
  ];

  const accordionFaqs = [
    ...faqs,
    ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
  ];

  /* ── Render ── */
  return (
    <>
      <div style={{ background: PAPER }}>
        {/* ── Schema ── */}
        <LocalBusinessSchema
          pageType="service"
          customDescription={isRegional
            ? `Prozessautomatisierung für Unternehmen in ${regionName} und Umgebung. Pixel Kraftwerk verbindet bestehende Systeme und entwickelt individuelle Automatisierungen, durch die Informationen automatisch erfasst, verarbeitet und weitergegeben werden.`
            : 'Prozessautomatisierung für Unternehmen: Pixel Kraftwerk verbindet bestehende Systeme und entwickelt individuelle Automatisierungen, durch die Informationen automatisch erfasst, verarbeitet und weitergegeben werden.'}
        />
        {isRegional ? (
          <BreadcrumbSchemaRegionService
            regionName={regionName}
            regionUrl={regionUrl}
            serviceName="Prozessautomatisierung"
            serviceUrl={currentPageUrl}
          />
        ) : (
          <BreadcrumbSchema
            serviceName="Prozessautomatisierung für Unternehmen"
            serviceUrl="https://pixelkraftwerk-ai.com/automatisierungen"
          />
        )}
        <ServiceJsonLd
          name={isRegional ? `Prozessautomatisierung in ${regionName}` : 'Prozessautomatisierung für Unternehmen'}
          serviceType="BusinessProcessAutomation"
          description={isRegional
            ? `Prozessautomatisierung für Unternehmen in ${regionName}. Wiederkehrende Aufgaben erledigen sich von selbst – Pixel Kraftwerk verbindet Ihre bestehenden Programme und automatisiert die Abläufe, die täglich Zeit kosten.`
            : 'Wiederkehrende Aufgaben erledigen sich von selbst: Pixel Kraftwerk verbindet Ihre bestehenden Programme und automatisiert die Abläufe, die täglich Zeit kosten, Fehler verursachen oder immer wieder liegen bleiben.'}
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={allFaqsForSchema}
          pageName={isRegional ? `Prozessautomatisierung in ${regionName}` : 'Prozessautomatisierung'}
        />

        {/* ══════════════════════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          id="prozessautomatisierung-fuer-unternehmen"
          className="relative min-h-[100dvh] md:min-h-screen flex flex-col"
          style={{ background: PAPER }}
        >
          <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
            <BreadcrumbNav items={isRegional ? [
              { label: 'Startseite', href: '/' },
              { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
              { label: regionName!, href: regionUrl },
              { label: 'Automatisierungen' },
            ] : [
              { label: 'Startseite', href: '/' },
              { label: 'Leistungen', href: '/leistungen' },
              { label: 'Automatisierungen' },
            ]} />
          </div>

          <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">

              {/* Left: Copy */}
              <div>
                {/* H1 – SEO-Kicker (klein, uppercase) – identisches Pattern wie alle anderen Seiten */}
                <motion.h1
                  className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3"
                  style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {isRegional
                    ? `Prozessautomatisierung in ${regionName}`
                    : 'Prozessautomatisierung Groitzsch & Leipzig'}
                </motion.h1>

                {/* H2 – visuelle Hauptüberschrift */}
                <motion.h2
                  className="font-heading font-bold tracking-tight mb-3 leading-[1.08]"
                  style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                >
                  {regionContent?.localHook || 'Jede Anfrage findet automatisch ihren Weg – ohne dass jemand daran denken muss.'}
                </motion.h2>

                {/* H3 – Keyword-Zeile (sr-only auf Mobile) */}
                <motion.h3
                  className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-3 leading-snug"
                  style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {SERVICE_TITLE_KEYWORDS['automatisierungen']}
                </motion.h3>

                <motion.p
                  className="text-base md:text-lg max-w-xl mb-2 leading-relaxed"
                  style={{ color: BODY }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Wir verbinden Ihre bestehenden Programme und automatisieren die Abläufe, die täglich Zeit kosten, Fehler verursachen oder immer wieder liegen bleiben.
                </motion.p>

                <motion.p
                  className="text-sm md:text-base max-w-xl mb-5 leading-relaxed"
                  style={{ color: MUTED }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  Von der ersten Kundenanfrage über Termine und Angebote bis zu Dokumenten, Aufgaben und internen Benachrichtigungen.
                </motion.p>

                {/* Primary CTA */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                >
                  <button onClick={scrollToContact} className="btn-primary">
                    Kostenlosen Automations-Check sichern
                    <ArrowRight size={18} />
                  </button>
                </motion.div>

                {/* CTA Erklärzeile */}
                <motion.p
                  className="text-xs mb-4"
                  style={{ color: MUTED }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                >
                  Wir identifizieren gemeinsam die drei Abläufe, bei denen eine Automatisierung in Ihrem Unternehmen den größten Hebel hat.
                </motion.p>

                {/* Trust-Chips */}
                <motion.div
                  className="hidden sm:flex flex-wrap gap-x-4 gap-y-1.5 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 }}
                >
                  {['Persönliche Betreuung', 'Bestehende Tools weiter nutzen', 'Individuell umgesetzt', 'DSGVO-bewusst geplant'].map((item) => (
                    <span key={item} className="flex items-center gap-1 text-xs" style={{ color: MUTED }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke={PETROL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </motion.div>

                <div className="hidden sm:block">
                  <TrustLine />
                </div>
              </div>

              {/* Right: Workflow-Visual */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <AutomationWorkflowVisual
                  steps={heroWorkflowSteps}
                  footerLabel="Automatisierter Ablauf – kein manueller Schritt nötig"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* ══════════════════════════════════════════════════════════════════════
            2. VERTRAUENSLEISTE
        ══════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Vorteile der Automatisierung" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                'Weniger manuelle Arbeit',
                'Schnellere Reaktionszeiten',
                'Weniger Übertragungsfehler',
                'Klare Zuständigkeiten',
                'Bestehende Systeme verbinden',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: MUTED }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6.5" stroke={BORDER} />
                    <path d="M4.5 7l2 2L9.5 5" stroke={PETROL} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            3. PAS-SEKTION
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto mb-14">
              <motion.h2
                className="font-heading font-bold mb-5 leading-snug"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Jeden Tag dieselben Aufgaben – obwohl sie längst automatisch laufen könnten.
              </motion.h2>
              <motion.p
                className="text-base md:text-lg leading-relaxed mb-5"
                style={{ color: BODY }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Eine Anfrage kommt über die Website rein und wird manuell in eine Tabelle übertragen. Ein Mitarbeiter muss daran denken, einen Interessenten zurückzurufen. Daten werden aus einer E-Mail kopiert und in ein anderes Programm eingefügt. Angebote werden verschickt, aber nicht konsequent nachgefasst.
              </motion.p>
              {/* Callout */}
              <motion.div
                className="rounded-xl px-5 py-4 border-l-4 mb-5"
                style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <p className="text-base font-semibold leading-snug" style={{ color: INK }}>
                  Jede einzelne Aufgabe dauert vielleicht nur wenige Minuten. Zusammengerechnet kosten diese Unterbrechungen jedoch jeden Monat viele Arbeitsstunden.
                </p>
              </motion.div>
            </div>

            {/* Agitation */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-6"
                style={{ background: 'rgba(239,68,68,0.06)', color: '#B91C1C', borderColor: 'rgba(239,68,68,0.18)' }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <AlertTriangle size={12} aria-hidden />
                Das eigentliche Problem
              </motion.div>

              <motion.h3
                className="font-heading font-bold mb-8"
                style={{ color: INK, fontSize: 'clamp(1.35rem, 2.5vw, 2rem)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Das eigentliche Problem beginnt dort, wo der Alltag dazwischenkommt.
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'Aufgaben werden vergessen', sub: 'Weil gerade zu viel gleichzeitig passiert.' },
                  { label: 'Kunden warten unnötig lange', sub: 'Weil niemand sofort zuständig ist.' },
                  { label: 'Informationen werden doppelt eingetragen', sub: 'Weil die Systeme nicht miteinander sprechen.' },
                  { label: 'Mitarbeiter suchen nach dem aktuellen Stand', sub: 'Weil Informationen verteilt in Postfächern liegen.' },
                  { label: 'Übergaben funktionieren nicht zuverlässig', sub: 'Weil alles über Zuruf geregelt wird.' },
                  { label: 'Wichtige Anfragen bleiben liegen', sub: 'Weil kein System den Überblick behält.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl p-5 border"
                    style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm font-heading font-bold mb-1" style={{ color: '#B91C1C' }}>
                      {item.label}
                    </p>
                    <p className="text-xs" style={{ color: MUTED }}>{item.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* Solution */}
              <div
                className="rounded-2xl p-6 md:p-8 border"
                style={{ background: 'rgba(14,124,114,0.04)', borderColor: 'rgba(14,124,114,0.2)' }}
              >
                <motion.h3
                  className="font-heading font-bold mb-3"
                  style={{ color: INK, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ihr Unternehmen sollte nicht von manuellen Erinnerungen abhängig sein.
                </motion.h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: BODY }}>
                  Automatisierungen sorgen dafür, dass ein definierter Ablauf selbstständig startet, sobald etwas Bestimmtes passiert. Ihr Team behält die Kontrolle, muss aber nicht mehr jeden einzelnen Schritt selbst ausführen.
                </p>
                <button
                  onClick={scrollToContact}
                  className="btn-primary"
                >
                  Automatisierungsmöglichkeiten besprechen
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            4. WORKFLOW-BEISPIEL (Timeline)
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold mb-3" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                So kann ein automatisierter Ablauf aussehen
              </h2>
              <p className="text-base" style={{ color: MUTED }}>
                Beispiel: Neue Kundenanfrage
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto relative">
              {/* Vertical line */}
              <div
                className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }}
                aria-hidden
              />

              {[
                {
                  step: '01',
                  title: 'Anfrage wird erfasst',
                  desc: 'Eine Anfrage kommt über Ihre Website, eine Werbeanzeige, WhatsApp oder E-Mail rein.',
                },
                {
                  step: '02',
                  title: 'Daten werden geprüft und sortiert',
                  desc: 'Das System erkennt das Anliegen, prüft die Angaben und ordnet die Anfrage der passenden Leistung zu.',
                },
                {
                  step: '03',
                  title: 'Kunde erhält eine direkte Rückmeldung',
                  desc: 'Der Interessent bekommt sofort eine Bestätigung und erfährt, wie es weitergeht.',
                },
                {
                  step: '04',
                  title: 'Anfrage wird zentral gespeichert',
                  desc: 'Die Kontaktdaten werden automatisch in Ihrem CRM, Ihrer Tabelle oder Ihrem gewünschten System angelegt.',
                },
                {
                  step: '05',
                  title: 'Zuständiger Mitarbeiter wird informiert',
                  desc: 'Je nach Anliegen, Standort oder Leistung wird die Anfrage der richtigen Person zugewiesen.',
                },
                {
                  step: '06',
                  title: 'Follow-up wird vorbereitet',
                  desc: 'Wurde die Anfrage noch nicht bearbeitet, erinnert das System Ihr Team oder startet einen festgelegten Nachfassprozess.',
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="relative flex items-start gap-6 bg-white p-5 md:p-6 border rounded-2xl mb-4 group"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ borderColor: `${PETROL}50`, boxShadow: '0 4px 16px rgba(14,124,114,0.1)', transition: { duration: 0.15 } }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border-2 font-heading font-bold text-base"
                    style={{ borderColor: `${PETROL}50`, background: 'rgba(14,124,114,0.07)', color: PETROL }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1" style={{ color: INK, fontSize: '1rem' }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}

              <p className="text-sm text-center mt-2" style={{ color: MUTED }}>
                Aus mehreren manuellen Einzelschritten entsteht ein durchgängiger und nachvollziehbarer Ablauf.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            5. AUTOMATISIERUNGSBEREICHE
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold mb-3" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Was lässt sich in Ihrem Unternehmen automatisieren?
              </h2>
              <p className="text-base" style={{ color: MUTED }}>
                Automatisierung endet nicht bei Kontaktformularen. Nahezu jeder klar definierte und regelmäßig wiederkehrende Ablauf kann überprüft und verbessert werden.
              </p>
            </motion.div>

            {/* Desktop: Sticky-Nav + Content */}
            <div className="hidden md:grid grid-cols-[220px_1fr] gap-8 max-w-5xl mx-auto">
              {/* Nav */}
              <div className="sticky top-24 self-start space-y-1">
                {automationAreas.map((area, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveAreaIndex(i)}
                    className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                    style={{
                      background: activeAreaIndex === i ? 'rgba(14,124,114,0.09)' : 'transparent',
                      color: activeAreaIndex === i ? PETROL : BODY,
                      fontWeight: activeAreaIndex === i ? 600 : 400,
                    }}
                    aria-pressed={activeAreaIndex === i}
                  >
                    <span style={{ color: PETROL, opacity: activeAreaIndex === i ? 1 : 0.5 }}>{area.icon}</span>
                    {area.title}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl border p-6 md:p-8 min-h-[320px]" style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}>
                <motion.div
                  key={activeAreaIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(14,124,114,0.09)', color: PETROL }}
                    >
                      {automationAreas[activeAreaIndex].icon}
                    </span>
                    <h3 className="font-heading font-bold text-lg" style={{ color: INK }}>
                      {automationAreas[activeAreaIndex].title}
                    </h3>
                  </div>
                  <CheckList items={automationAreas[activeAreaIndex].items} />
                </motion.div>
              </div>
            </div>

            {/* Mobile: Accordion */}
            <div className="md:hidden max-w-2xl mx-auto">
              <Accordion
                allowMultiple={false}
                items={automationAreas.map((area) => ({
                  question: area.title,
                  answer: area.items.join(' · '),
                }))}
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            6. VORHER / NACHHER
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was sich durch einen klaren automatisierten Ablauf verändert
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Vorher */}
              <motion.div
                className="bg-white rounded-2xl border p-6"
                style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold mb-4 flex items-center gap-2 text-base" style={{ color: '#B91C1C' }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(239,68,68,0.1)', color: '#B91C1C' }}>✕</span>
                  Bisher
                </h3>
                <CheckList
                  variant="red"
                  items={[
                    'Informationen liegen in E-Mails, Tabellen und Notizen',
                    'Daten werden manuell übertragen',
                    'Aufgaben werden über Zuruf verteilt',
                    'Follow-ups hängen vom Gedächtnis ab',
                    'Kunden warten auf Rückmeldungen',
                    'Fehler fallen erst spät auf',
                  ]}
                />
              </motion.div>

              {/* Nachher */}
              <motion.div
                className="bg-white rounded-2xl border p-6"
                style={{ borderColor: PETROL, boxShadow: `0 0 0 1px ${PETROL}30, 0 4px 20px rgba(14,124,114,0.12)` }}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold mb-4 flex items-center gap-2 text-base" style={{ color: PETROL }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(14,124,114,0.1)', color: PETROL }}>✓</span>
                  Mit Automatisierung
                </h3>
                <CheckList
                  variant="green"
                  items={[
                    'Informationen werden automatisch erfasst',
                    'Daten fließen zwischen den benötigten Systemen',
                    'Aufgaben werden nach klaren Regeln verteilt',
                    'Follow-ups starten zum richtigen Zeitpunkt',
                    'Kunden erhalten sofort eine Rückmeldung',
                    'Fehler werden erkannt und gemeldet',
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            7. NUTZEN
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="font-heading font-bold mb-3"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Automatisierung bedeutet nicht einfach mehr Technik
              </motion.h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: BODY }}>
                Eine gute Automatisierung muss nicht möglichst groß oder kompliziert sein. Sie muss ein konkretes Problem lösen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '⏱', label: 'Weniger wiederkehrende Handarbeit' },
                  { icon: '⚡', label: 'Schnellere Reaktionszeiten' },
                  { icon: '✓', label: 'Weniger Übertragungsfehler' },
                  { icon: '📋', label: 'Nachvollziehbare Abläufe' },
                  { icon: '👤', label: 'Klare Zuständigkeiten' },
                  { icon: '📈', label: 'Bessere Skalierbarkeit' },
                  { icon: '💼', label: 'Mehr Zeit für Kunden und wertschöpfende Aufgaben' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl border p-4"
                    style={{ borderColor: BORDER, boxShadow: '0 1px 3px rgba(12,18,16,0.05)' }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-lg" aria-hidden>{item.icon}</span>
                    <span className="text-sm font-medium leading-snug" style={{ color: BODY }}>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            8. WAS PIXEL KRAFTWERK ÜBERNIMMT
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Von der ersten Analyse bis zum laufenden Ablauf
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  title: 'Analyse Ihrer aktuellen Abläufe',
                  desc: 'Wir betrachten gemeinsam, welche Prozesse aktuell Zeit, Nerven oder Umsatz kosten.',
                },
                {
                  title: 'Klare Prozessdarstellung',
                  desc: 'Sie sehen verständlich, was künftig automatisch passiert und an welchen Stellen Ihr Team eingebunden bleibt.',
                },
                {
                  title: 'Individuelle Umsetzung',
                  desc: 'Wir verbinden die benötigten Formulare, E-Mail-Postfächer, Kalender, CRM-Systeme, Tabellen und weiteren Anwendungen.',
                },
                {
                  title: 'Tests und Fehlerbehandlung',
                  desc: 'Der Ablauf wird mit verschiedenen Situationen getestet. Zusätzlich planen wir Benachrichtigungen und sinnvolle Alternativen für mögliche Fehlerfälle.',
                },
                {
                  title: 'Dokumentation und Einweisung',
                  desc: 'Ihr Team weiß, was automatisch passiert, wo Informationen ankommen und wie der Ablauf genutzt wird.',
                },
                {
                  title: 'Laufende Optimierung',
                  desc: 'Nach dem Start können Prozesse anhand der tatsächlichen Nutzung weiter verbessert und erweitert werden.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl border p-5 hover:-translate-y-1 transition-transform duration-200"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mb-3"
                    style={{ background: 'rgba(14,124,114,0.09)', color: PETROL }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: INK }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            9. VORGEHENSWEISE (5 Schritte)
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-12"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              So starten wir gemeinsam
            </motion.h2>

            <div className="max-w-2xl mx-auto relative">
              <div
                className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }}
                aria-hidden
              />

              {[
                {
                  step: '01',
                  title: 'Kostenloser Automations-Check',
                  desc: 'Wir betrachten Ihre aktuellen Abläufe und identifizieren die sinnvollsten Automatisierungsmöglichkeiten.',
                },
                {
                  step: '02',
                  title: 'Prozess und Lösungskonzept',
                  desc: 'Wir stellen verständlich dar, was den Ablauf auslöst, was automatisch passiert und wann ein Mitarbeiter eingebunden wird.',
                },
                {
                  step: '03',
                  title: 'Umsetzung und Systemverbindung',
                  desc: 'Die benötigten Programme werden verbunden und die einzelnen Schritte eingerichtet.',
                },
                {
                  step: '04',
                  title: 'Tests und Freigabe',
                  desc: 'Wir prüfen unterschiedliche Situationen und mögliche Fehlerfälle, bevor der Ablauf live geschaltet wird.',
                },
                {
                  step: '05',
                  title: 'Einführung und Optimierung',
                  desc: 'Sie erhalten eine verständliche Einweisung. Anschließend kann die Automatisierung erweitert werden.',
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="relative flex items-start gap-6 bg-white p-5 md:p-6 border rounded-2xl mb-4"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border-2 font-heading font-bold text-base"
                    style={{ borderColor: `${PETROL}50`, background: 'rgba(14,124,114,0.07)', color: PETROL }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1 text-base" style={{ color: INK }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            10. KONTROLLE & SICHERHEIT
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Shield size={28} style={{ color: PETROL }} aria-hidden />
                <h2 className="font-heading font-bold" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  Automatisierung bedeutet nicht Kontrollverlust
                </h2>
              </motion.div>

              <p className="text-base leading-relaxed mb-6" style={{ color: BODY }}>
                Nicht jede Entscheidung sollte vollständig automatisch getroffen werden. Wichtige Schritte können weiterhin eine Freigabe durch einen Mitarbeiter benötigen.
              </p>

              <CheckList
                items={[
                  'Welche Schritte automatisch laufen',
                  'Wann eine Freigabe erforderlich ist',
                  'Welche Mitarbeiter informiert werden',
                  'Welche Daten verarbeitet werden',
                  'Was bei einem Fehler passiert',
                  'Welche Aktionen protokolliert werden',
                ]}
                className="mb-6"
              />

              <div
                className="rounded-xl px-5 py-4 border-l-4"
                style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}
              >
                <p className="text-base font-semibold" style={{ color: INK }}>
                  So entsteht keine unkontrollierbare Blackbox, sondern ein klarer und nachvollziehbarer Unternehmensprozess.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            11. ZIELGRUPPEN
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="font-heading font-bold mb-4"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Für welche Unternehmen lohnt sich Prozessautomatisierung?
              </motion.h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: BODY }}>
                Besonders sinnvoll ist sie für Unternehmen, die regelmäßig Kundenanfragen erhalten, wiederkehrende Verwaltungsaufgaben erledigen oder Informationen zwischen mehreren Programmen übertragen.
              </p>

              <CheckList
                items={[
                  'Viele wiederkehrende Aufgaben',
                  'Regelmäßige Kundenanfragen',
                  'Manuelle Datenübertragung zwischen Programmen',
                  'Termin- und Angebotskoordination',
                  'Mehrere Mitarbeiter oder Standorte',
                  'Langsame Reaktionszeiten',
                  'Fehlende Nachverfolgung',
                  'Wachstum ohne mehr Verwaltungsaufwand',
                ]}
                className="mb-6"
              />

              <p className="text-sm" style={{ color: MUTED }}>
                Entscheidend ist nicht die Unternehmensgröße, sondern wie häufig ein Prozess wiederholt wird und wie viel Aufwand er verursacht.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            12. FAQ
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isRegional ? `Häufige Fragen zu Automatisierungen in ${regionName}` : 'Häufige Fragen'}
            </motion.h2>

            <div className="max-w-3xl mx-auto">
              <Accordion items={accordionFaqs} allowMultiple={false} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            13. ABSCHLUSS-CTA
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              className="max-w-2xl mx-auto text-center rounded-2xl border p-8 md:p-12"
              style={{ borderColor: `${PETROL}30`, background: 'rgba(14,124,114,0.03)', boxShadow: `0 0 0 1px rgba(14,124,114,0.12), 0 8px 32px rgba(14,124,114,0.08)` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(14,124,114,0.09)', color: PETROL }}
              >
                Kostenloser Automations-Check
              </span>

              <h2 className="font-heading font-bold mb-4" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Welche Aufgaben kosten Sie jede Woche unnötig Zeit?
              </h2>
              <p className="text-base mb-3 leading-relaxed" style={{ color: BODY }}>
                In einem unverbindlichen Gespräch betrachten wir Ihre aktuellen Abläufe und zeigen Ihnen konkret, welche Prozesse sich sinnvoll automatisieren lassen.
              </p>
              <p className="text-sm mb-8" style={{ color: MUTED }}>
                Sie erhalten keine allgemeine Tool-Präsentation, sondern konkrete Vorschläge passend zu Ihrem Unternehmen.
              </p>

              <button onClick={scrollToContact} className="btn-primary mb-4">
                Kostenlosen Automations-Check sichern
                <ArrowRight size={18} />
              </button>

              <p className="text-xs" style={{ color: MUTED }}>
                Unverbindlich · Persönlich · Verständlich erklärt
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            14. REGIONALE INHALTE
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: INK }}>
                {isRegional
                  ? `Prozessautomatisierung für Unternehmen in ${regionName}`
                  : 'Lokal in Leipzig & Region'}
              </h2>

              {isRegional && regionContent?.localSection ? (
                regionContent.localSection.map((p, i) => (
                  <p key={i} className="max-w-3xl mx-auto mb-4 text-left" style={{ color: BODY }}>{p}</p>
                ))
              ) : isRegional ? (
                <p className="max-w-3xl mx-auto" style={{ color: BODY }}>
                  Als Agentur mit Sitz in Groitzsch kennen wir die Anforderungen von Unternehmen in {regionName} und der Region. Einrichtung und Optimierung Ihrer Automatisierungen erfolgen nah an Ihrem Alltag – persönlich, praxisnah und mit kurzen Wegen.
                </p>
              ) : (
                <p className="max-w-3xl mx-auto" style={{ color: BODY }}>
                  Gerade bei Prozessautomatisierung zählt das Verständnis für den lokalen Alltag: typische Anfragen, Abläufe und Kundenkanäle. Wir unterstützen Unternehmen in{' '}
                  <a href="/leistungsgebiete/leipzig" style={{ color: PETROL }} className="hover:underline">Leipzig</a>,{' '}
                  <a href="/leistungsgebiete/markkleeberg" style={{ color: PETROL }} className="hover:underline">Markkleeberg</a>,{' '}
                  <a href="/leistungsgebiete/zwenkau" style={{ color: PETROL }} className="hover:underline">Zwenkau</a>,{' '}
                  <a href="/leistungsgebiete/groitzsch" style={{ color: PETROL }} className="hover:underline">Groitzsch</a> und weiteren Städten in Mitteldeutschland.
                </p>
              )}
            </div>
          </div>
        </section>

        {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
          <section className="py-16" style={{ background: SURFACE }}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: INK }}>
                  Prozessautomatisierung für Unternehmen in {regionName}
                </h3>
                {regionContent.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed mb-5" style={{ color: BODY }}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {!isRegional && (
          <section className="py-10" style={{ background: SURFACE }}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg leading-relaxed" style={{ color: BODY }}>
                  Unsere Automatisierungslösungen setzen wir besonders häufig für Unternehmen in{' '}
                  <a href="/leistungsgebiete/leipzig" style={{ color: PETROL }} className="hover:underline">Leipzig</a> und{' '}
                  <a href="/leistungsgebiete/zwenkau" style={{ color: PETROL }} className="hover:underline">Zwenkau</a> um.
                  Von <a href="/leistungsgebiete/groitzsch" style={{ color: PETROL }} className="hover:underline">Groitzsch</a> aus arbeiten wir direkt mit Ihrem Team – persönlich, transparent und praxisnah.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════════════════
            15. CROSS-LINKS & KONTAKT
        ══════════════════════════════════════════════════════════════════════ */}
        <SubpageLinksBlock
          serviceSlug="automatisierungen"
          regionSlug={isRegional ? regionSlug : undefined}
          title="Automatisierung im Detail"
        />

        <RelatedServices currentSlug="automatisierungen" />

        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {isRegional ? (
                <div className="mt-10 text-left max-w-2xl mx-auto">
                  <h3 className="font-heading font-bold text-xl mb-4" style={{ color: INK }}>
                    Weitere Leistungen in {regionName}
                  </h3>
                  <p className="mb-3" style={{ color: BODY }}>
                    <a href={regionUrl} className="hover:underline font-heading font-bold" style={{ color: PETROL }}>
                      Alle Leistungen in {regionName}
                    </a>
                    {' – '}Übersicht unserer Angebote in Ihrer Region.
                  </p>
                  <p className="mb-6" style={{ color: BODY }}>
                    <a href="/automatisierungen" className="hover:underline" style={{ color: PETROL }}>
                      Mehr zu Automatisierungen im Überblick
                    </a>
                    {' – '}alle Details auf unserer Service-Seite.
                  </p>
                  <p className="text-sm mb-3" style={{ color: MUTED }}>Automatisierungen in anderen Gebieten:</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {otherRegions.map((city, i) => (
                      <li key={city.slug}>
                        <a
                          href={`/leistungsgebiete/${city.slug}/automatisierungen`}
                          className="hover:underline"
                          style={{ color: PETROL }}
                        >
                          {getRegionServiceLinkText('automatisierungen', city.name, i)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <ServicedRegionsBlock />
                  <RegionServiceLinksBlock serviceSlug="automatisierungen" title="Prozessautomatisierung in Ihrem Gebiet" />
                </>
              )}
            </div>
          </div>
        </section>

        <ContactForm
          service="automatisierungen"
          heading="Kostenlosen Automations-Check sichern"
          subheading="Wir schauen auf Ihre Abläufe und zeigen Ihnen konkret, welche Prozesse sich sinnvoll automatisieren lassen."
        />
        <GoogleMapsSection />

        <StickyCtaBar ctaLabel="Automations-Check sichern" />
      </div>
    </>
  );
};

export default Automatisierungen;
export type { AutomatisierungenProps };
