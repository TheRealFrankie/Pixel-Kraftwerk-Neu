'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, AlertTriangle, Shield,
  FileText, Users, Filter, Database, Bell, Send, CalendarClock, Mail,
} from 'lucide-react';

import ContactForm from '../../../components/ContactForm';
import GoogleMapsSection from '../../../components/GoogleMapsSection';
import BreadcrumbNav from '../../../components/BreadcrumbNav';
import TrustLine from '../../../components/TrustLine';
import StickyCtaBar from '../../../components/StickyCtaBar';
import ServiceJsonLd from '../../../components/ServiceJsonLd';
import LocalBusinessSchema from '../../../components/LocalBusinessSchema';
import CheckList from '../../../components/ui/CheckList';
import Accordion from '../../../components/Accordion';
import AutomationWorkflowVisual from '../../../components/AutomationWorkflowVisual';
import { businessInfo } from '../../../data/businessInfo';
import { getRegionalSubpageContent } from '../../../data/subpageRegionalContent';
import type { LeistungsgebietSlug } from '../../../data/leistungsgebiete';

const INK = '#0C1210';
const BODY = '#404B48';
const MUTED = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const SURFACE = '#F3F5F4';
const PAPER = '#FAFAF9';

const baseUrl = businessInfo.url;

interface Props { regionSlug?: string; regionName?: string; }

const workflowSteps = [
  { icon: <FileText size={18} />, title: 'Neue Anfrage eingeht', badge: 'Kanal erkannt' },
  { icon: <Filter size={18} />, title: 'Angaben prüfen', badge: 'Daten geprüft' },
  { icon: <Users size={18} />, title: 'Lead qualifizieren', badge: 'eingeordnet' },
  { icon: <Database size={18} />, title: 'Im System speichern', badge: 'CRM aktualisiert' },
  { icon: <Bell size={18} />, title: 'Zuständigkeit bestimmen', badge: 'Mitarbeiter informiert' },
  { icon: <Send size={18} />, title: 'Direkte Rückmeldung', badge: 'Nachricht versendet' },
  { icon: <CalendarClock size={18} />, title: 'Follow-up überwachen', badge: 'Aufgabe erstellt' },
];

const faqs = [
  { question: 'Welche Kanäle können angebunden werden?', answer: 'Kontaktformulare auf Ihrer Website, E-Mail-Postfächer, Werbekampagnen (z. B. Meta oder Google Ads), WhatsApp-Nachrichten, Calendly-Anfragen und weitere Quellen, die sich technisch verbinden lassen. Welche Kanäle für Sie sinnvoll sind, besprechen wir im ersten Gespräch.' },
  { question: 'Brauchen wir bereits ein CRM?', answer: 'Nicht zwingend. Wir können vorhandene Systeme anbinden oder eine einfache, übersichtliche Lösung einrichten, die zu Ihren Abläufen passt. Entscheidend ist, dass neue Kontakte zentral ankommen und nicht verloren gehen.' },
  { question: 'Können Leads automatisch qualifiziert werden?', answer: 'Ja. Das System kann Angaben prüfen, Kontakte nach Leistung, Dringlichkeit oder Unternehmensgröße einordnen und nur passende Anfragen direkt an Ihr Team weitergeben. Wie streng die Kriterien sind, legen Sie fest.' },
  { question: 'Können verschiedene Standorte oder Mitarbeiter berücksichtigt werden?', answer: 'Ja. Anfragen können automatisch nach Region, Leistung oder anderen Kriterien an den richtigen Standort oder die passende Person weitergeleitet werden.' },
  { question: 'Was passiert bei unvollständigen Angaben?', answer: 'Das System kann fehlende Informationen erkennen und gezielt nachfragen, bevor ein Lead weitergegeben wird. So vermeiden Sie unvollständige Datensätze in Ihrem CRM.' },
  { question: 'Kann ein Mitarbeiter vor dem Versand einer Nachricht zustimmen?', answer: 'Ja. Wichtige Schritte wie das Versenden von Angeboten oder Rückrufen können so eingerichtet werden, dass ein Mitarbeiter zuerst zustimmt. Nicht jeder Schritt muss vollständig automatisch ablaufen.' },
  { question: 'Lassen sich bestehende Kontakte reaktivieren?', answer: 'Ja. Kontakte, die eine Anfrage gestellt, aber nie eine Rückmeldung erhalten haben, können gezielt angeschrieben werden – sobald ein festgelegter Zeitraum ohne Reaktion vergangen ist.' },
  { question: 'Können Werbekampagnen direkt angebunden werden?', answer: 'Ja. Lead-Formulare aus Kampagnen können so verbunden werden, dass neue Kontakte sofort in Ihrem System ankommen – ohne manuelle Übertragung aus einer externen Tabelle.' },
];

export default function AutomatisierungenLeadgenerierung({ regionSlug, regionName }: Props) {
  const isRegional = !!regionSlug && !!regionName;
  const regionalContent = isRegional
    ? getRegionalSubpageContent(regionSlug as LeistungsgebietSlug, 'automatisierungen', 'leadgenerierung')
    : null;

  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/automatisierungen/leadgenerierung`
    : `${baseUrl}/automatisierungen/leadgenerierung`;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const allFaqs = [
    ...faqs,
    ...(regionalContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) ?? []),
  ];

  const breadcrumbItems = isRegional
    ? [
        { label: 'Startseite', href: '/' },
        { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
        { label: regionName, href: regionUrl },
        { label: 'Automatisierungen', href: `${regionUrl}/automatisierungen` },
        { label: 'Leadgenerierung automatisieren' },
      ]
    : [
        { label: 'Startseite', href: '/' },
        { label: 'Automatisierungen', href: '/automatisierungen' },
        { label: 'Leadgenerierung automatisieren' },
      ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: breadcrumbItems.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: item.href.startsWith('http') ? item.href : baseUrl + item.href } : {}),
    })),
  };

  return (
    <>
      <div style={{ background: PAPER }}>
        <LocalBusinessSchema pageType="service" customDescription={isRegional
          ? `Leadgenerierung automatisieren für Unternehmen in ${regionName}. Neue Anfragen automatisch erfassen, qualifizieren und nachverfolgen – von Pixel Kraftwerk aus Groitzsch.`
          : 'Leadgenerierung automatisieren: Neue Anfragen automatisch erfassen, qualifizieren und nachverfolgen. Pixel Kraftwerk entwickelt individuelle Lead-Automatisierungen für Unternehmen.'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <ServiceJsonLd
          name={isRegional ? `Leadgenerierung automatisieren in ${regionName}` : 'Leadgenerierung automatisieren'}
          serviceType="LeadManagement"
          description="Neue Anfragen automatisch erfassen, qualifizieren und nachverfolgen. Pixel Kraftwerk entwickelt individuelle Lead-Automatisierungen für Unternehmen."
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          pageName="Leadgenerierung automatisieren"
        />

        {/* ══ HERO ══ */}
        <section className="relative min-h-[100dvh] md:min-h-screen flex flex-col" style={{ background: PAPER }}>
          <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
          <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
              <div>
                {/* H1 – SEO-Kicker */}
                <motion.h1 className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  {isRegional ? `Automatisierte Leadgenerierung in ${regionName}` : 'Automatisierte Leadgenerierung – Groitzsch & Leipzig'}
                </motion.h1>

                {/* H2 – visuelle Headline */}
                <motion.h2 className="font-heading font-bold tracking-tight mb-3 leading-[1.08]"
                  style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                  {regionalContent?.localHook || 'Aus neuen Anfragen werden strukturierte Vertriebsprozesse.'}
                </motion.h2>

                {/* H3 – Keywords (sr-only auf Mobile) */}
                <motion.h3 className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-3 leading-snug" style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  Leadgenerierung, automatische Lead-Erfassung oder Lead-Qualifizierung
                </motion.h3>

                <motion.p className="text-base md:text-lg max-w-xl mb-2 leading-relaxed" style={{ color: BODY }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  Wir sorgen dafür, dass neue Interessenten automatisch erfasst, vorqualifiziert und dem richtigen Mitarbeiter zugewiesen werden – inklusive schneller Rückmeldung und zuverlässigem Follow-up.
                </motion.p>
                <motion.p className="text-sm md:text-base max-w-xl mb-5 leading-relaxed" style={{ color: MUTED }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                  Für Anfragen aus Website, Werbekampagnen, E-Mail, WhatsApp und weiteren Kanälen.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-3 mb-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                  <button onClick={scrollToContact} className="btn-primary">
                    Kostenlosen Automations-Check sichern <ArrowRight size={18} />
                  </button>
                </motion.div>
                <motion.p className="text-xs mb-4" style={{ color: MUTED }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
                  Wir prüfen, an welcher Stelle Interessenten aktuell warten, verloren gehen oder manuell übertragen werden.
                </motion.p>
                <div className="hidden sm:block"><TrustLine /></div>
              </div>
              <motion.div className="w-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                <AutomationWorkflowVisual steps={workflowSteps} footerLabel="Lead-Prozess – von der Anfrage bis zum Follow-up" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ VERTRAUENSLEISTE ══ */}
        <section aria-label="Vorteile" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {['Keine Anfrage geht verloren', 'Sofortige Rückmeldung an Interessenten', 'Klare Zuständigkeiten', 'Zuverlässiges Follow-up', 'Alle Kanäle zentral erfassen'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: MUTED }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6.5" stroke={BORDER} /><path d="M4.5 7l2 2L9.5 5" stroke={PETROL} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PAS ══ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto mb-14">
              <motion.h2 className="font-heading font-bold mb-5 leading-snug"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                Interessenten melden sich – aber der Prozess dahinter bleibt manuell.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: BODY }}>
                Website-Anfragen landen im E-Mail-Postfach und müssen manuell in eine Tabelle übertragen werden. Kontakte aus Werbekampagnen kommen in einer separaten Liste an. Rückrufwünsche stehen auf Notizzetteln oder in Chat-Nachrichten. Wer gerade Zeit hat, kümmert sich – wer beschäftigt ist, schiebt die Bearbeitung auf später.
              </p>
              <div className="rounded-xl px-5 py-4 border-l-4 mb-5" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold leading-snug" style={{ color: INK }}>
                  Das Ergebnis: Interessenten, die sich gemeldet haben, warten zu lange auf eine Antwort – und entscheiden sich inzwischen für einen anderen Anbieter.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-6"
                style={{ background: 'rgba(239,68,68,0.06)', color: '#B91C1C', borderColor: 'rgba(239,68,68,0.18)' }}
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                <AlertTriangle size={12} aria-hidden /> Das eigentliche Problem
              </motion.div>

              <motion.h3 className="font-heading font-bold mb-8" style={{ color: INK, fontSize: 'clamp(1.35rem, 2.5vw, 2rem)' }}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                Je länger ein Interessent wartet, desto geringer wird die Chance auf ein Gespräch.
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'Warme Leads verlieren Interesse', sub: 'Wer lange wartet, meldet sich beim nächsten Anbieter.' },
                  { label: 'Anfragen werden vergessen', sub: 'Kein System – kein zuverlässiges Nachfassen.' },
                  { label: 'Mehrere Mitarbeiter bearbeiten denselben Kontakt', sub: 'Doppelte Arbeit und unprofessioneller Eindruck.' },
                  { label: 'Niemand fühlt sich zuständig', sub: 'Besonders bei Anfragen ohne klare Kategorie.' },
                  { label: 'Daten fehlen später im CRM', sub: 'Manuelle Übertragung ist fehleranfällig.' },
                  { label: 'Werbebudget erzeugt Anfragen ohne Ergebnis', sub: 'Leads kommen an – aber der Prozess dahinter fehlt.' },
                ].map((item, i) => (
                  <motion.div key={i} className="bg-white rounded-2xl p-5 border"
                    style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}>
                    <p className="text-sm font-heading font-bold mb-1" style={{ color: '#B91C1C' }}>{item.label}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{item.sub}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl p-6 md:p-8 border" style={{ background: 'rgba(14,124,114,0.04)', borderColor: 'rgba(14,124,114,0.2)' }}>
                <h3 className="font-heading font-bold mb-3" style={{ color: INK, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
                  Jede neue Anfrage startet automatisch den passenden Vertriebsprozess.
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: BODY }}>
                  Sobald sich ein Interessent meldet, werden die Angaben automatisch erfasst, geprüft und anhand festgelegter Kriterien eingeordnet. Der Kontakt wird im gewünschten System angelegt, die zuständige Person wird informiert und der Interessent erhält direkt eine professionelle Rückmeldung.
                </p>
                <p className="text-sm mb-6" style={{ color: MUTED }}>
                  Bleibt die Bearbeitung aus, kann automatisch eine Erinnerung oder ein definierter Nachfassprozess gestartet werden.
                </p>
                <button onClick={scrollToContact} className="btn-primary">
                  Lead-Prozess prüfen lassen <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══ WORKFLOW ══ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div className="text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold mb-3" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                So wird aus einer Anfrage ein klarer nächster Schritt
              </h2>
            </motion.div>
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }} aria-hidden />
              {[
                { step: '01', title: 'Anfrage erfassen', desc: 'Der Kontakt meldet sich über Website, Formular, Werbung, E-Mail oder einen anderen angebundenen Kanal.' },
                { step: '02', title: 'Angaben prüfen', desc: 'Pflichtangaben werden kontrolliert und Informationen vereinheitlicht. Fehlende Angaben werden gezielt nachgefordert.' },
                { step: '03', title: 'Lead qualifizieren', desc: 'Der Kontakt wird nach Leistung, Region, Dringlichkeit oder anderen festgelegten Kriterien eingeordnet.' },
                { step: '04', title: 'Im System speichern', desc: 'Der neue Kontakt wird automatisch im CRM, einer Tabelle oder einem anderen gewünschten System angelegt.' },
                { step: '05', title: 'Zuständigkeit bestimmen', desc: 'Je nach Anfrage wird der passende Mitarbeiter, Standort oder Vertriebsbereich informiert.' },
                { step: '06', title: 'Direkte Rückmeldung senden', desc: 'Der Interessent erhält eine Bestätigung und erfährt, wie es weitergeht.' },
                { step: '07', title: 'Follow-up überwachen', desc: 'Wurde der Kontakt noch nicht bearbeitet, startet eine Erinnerung oder ein festgelegter Nachfassprozess.' },
              ].map((s, i) => (
                <motion.div key={i} className="relative flex items-start gap-6 bg-white p-5 md:p-6 border rounded-2xl mb-4"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.08 }} viewport={{ once: true }}
                  whileHover={{ borderColor: `${PETROL}50`, boxShadow: '0 4px 16px rgba(14,124,114,0.1)', transition: { duration: 0.15 } }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border-2 font-heading font-bold text-base"
                    style={{ borderColor: `${PETROL}50`, background: 'rgba(14,124,114,0.07)', color: PETROL }}>
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1" style={{ color: INK, fontSize: '1rem' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ AUTOMATISIERUNGSMÖGLICHKEITEN ══ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2 className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Was lässt sich bei der Leadgenerierung automatisieren?
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <CheckList items={[
                'Leads aus mehreren Kanälen zentral zusammenführen',
                'Doppelte Kontakte (Dubletten) erkennen und zusammenführen',
                'Kontaktdaten standardisieren und vervollständigen',
                'Leads automatisch kategorisieren und priorisieren',
                'Kontakte nach Region, Leistung oder Mitarbeiter zuweisen',
                'Leads in CRM-Systemen anlegen oder aktualisieren',
                'Rückrufaufgaben mit Frist erstellen',
                'Zuständige Mitarbeiter per Nachricht oder Aufgabe informieren',
                'Eingangsbestätigungen an Interessenten versenden',
                'Follow-up-Sequenzen nach festgelegtem Zeitplan starten',
                'Unbearbeitete Anfragen erkennen und melden',
                'Inaktive Kontakte reaktivieren',
              ]} />
            </div>
          </div>
        </section>

        {/* ══ ZWISCHEN-CTA ══ */}
        <section className="py-14" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <p className="text-lg font-heading font-semibold mb-4" style={{ color: INK }}>
              Interessenten, die warten, verliert man schneller als gedacht.
            </p>
            <button onClick={scrollToContact} className="btn-primary">
              Kostenlosen Automations-Check sichern <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* ══ VORHER / NACHHER ══ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2 className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Was sich durch einen automatisierten Lead-Prozess verändert
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div className="bg-white rounded-2xl border p-6"
                style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h3 className="font-heading font-bold mb-4 flex items-center gap-2 text-base" style={{ color: '#B91C1C' }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(239,68,68,0.1)', color: '#B91C1C' }}>✕</span>
                  Bisher
                </h3>
                <CheckList variant="red" items={[
                  'Anfragen liegen in verschiedenen Postfächern',
                  'Daten werden manuell übertragen',
                  'Zuständigkeiten sind unklar',
                  'Follow-ups werden vergessen',
                  'Interessenten warten ohne Rückmeldung',
                  'Bearbeitungsstand ist nicht nachvollziehbar',
                ]} />
              </motion.div>
              <motion.div className="bg-white rounded-2xl border p-6"
                style={{ borderColor: PETROL, boxShadow: `0 0 0 1px ${PETROL}30, 0 4px 20px rgba(14,124,114,0.12)` }}
                initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                <h3 className="font-heading font-bold mb-4 flex items-center gap-2 text-base" style={{ color: PETROL }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(14,124,114,0.1)', color: PETROL }}>✓</span>
                  Mit Automatisierung
                </h3>
                <CheckList variant="green" items={[
                  'Alle Anfragen werden zentral erfasst',
                  'Daten werden automatisch übernommen',
                  'Leads werden klar zugeordnet',
                  'Follow-ups starten nach festen Regeln',
                  'Interessenten erhalten sofort eine Rückmeldung',
                  'Bearbeitungsstand bleibt nachvollziehbar',
                ]} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ WAS PIXEL KRAFTWERK ÜBERNIMMT ══ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2 className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Von der ersten Analyse bis zum laufenden Lead-Prozess
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { n: '01', title: 'Analyse Ihrer aktuellen Abläufe', desc: 'Wir betrachten, über welche Kanäle Anfragen eingehen, wie sie heute verarbeitet werden und wo Kontakte verloren gehen.' },
                { n: '02', title: 'Klare Prozessdarstellung', desc: 'Sie sehen verständlich, was automatisch passiert: Auslöser, Qualifizierungsregeln, Zuständigkeiten und Freigabeschritte.' },
                { n: '03', title: 'Systemverbindung', desc: 'Wir verbinden Formulare, E-Mail-Postfächer, Werbekampagnen, CRM-System und interne Kommunikationskanäle.' },
                { n: '04', title: 'Umsetzung und Tests', desc: 'Die Schritte werden eingerichtet, mit verschiedenen Szenarien geprüft und mit Fehlerbenachrichtigungen abgesichert.' },
                { n: '05', title: 'Einweisung Ihres Teams', desc: 'Ihr Team weiß, wo neue Leads ankommen, wie sie bearbeitet werden und wann ein manueller Schritt erforderlich ist.' },
                { n: '06', title: 'Laufende Optimierung', desc: 'Nach dem Start können Qualifizierungsregeln, Zuweisungen und Nachfasssequenzen anhand der tatsächlichen Nutzung verbessert werden.' },
              ].map((item, i) => (
                <motion.div key={i} className="bg-white rounded-2xl border p-5 hover:-translate-y-1 transition-transform duration-200"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.07 }} viewport={{ once: true }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mb-3" style={{ background: 'rgba(14,124,114,0.09)', color: PETROL }} aria-hidden>{item.n}</div>
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: INK }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VORGEHENSWEISE ══ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2 className="font-heading font-bold text-center mb-12"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              So starten wir gemeinsam
            </motion.h2>
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }} aria-hidden />
              {[
                { step: '01', title: 'Kostenloser Automations-Check', desc: 'Wir betrachten Ihren aktuellen Lead-Prozess und identifizieren die sinnvollsten Verbesserungsmöglichkeiten.' },
                { step: '02', title: 'Ablauf und Lösungskonzept', desc: 'Wir legen fest, was automatisch passiert, welche Systeme beteiligt sind und wann ein Mitarbeiter entscheidet.' },
                { step: '03', title: 'Umsetzung', desc: 'Die benötigten Systeme werden verbunden und die einzelnen Schritte eingerichtet.' },
                { step: '04', title: 'Tests und Freigabe', desc: 'Wir prüfen unterschiedliche Situationen und mögliche Fehlerfälle.' },
                { step: '05', title: 'Einführung und Optimierung', desc: 'Nach der Einweisung kann der Ablauf schrittweise erweitert und verbessert werden.' },
              ].map((s, i) => (
                <motion.div key={i} className="relative flex items-start gap-6 bg-white p-5 md:p-6 border rounded-2xl mb-4"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.08 }} viewport={{ once: true }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border-2 font-heading font-bold text-base"
                    style={{ borderColor: `${PETROL}50`, background: 'rgba(14,124,114,0.07)', color: PETROL }}>{s.step}</div>
                  <div>
                    <h3 className="font-heading font-bold mb-1 text-base" style={{ color: INK }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ KONTROLLE & SICHERHEIT ══ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <Shield size={28} style={{ color: PETROL }} aria-hidden />
                <h2 className="font-heading font-bold" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  Automatisierung bedeutet nicht Kontrollverlust
                </h2>
              </motion.div>
              <p className="text-base leading-relaxed mb-6" style={{ color: BODY }}>
                Nicht jeder Schritt muss vollständig ohne Zustimmung ablaufen. Wichtige Schritte – wie das Versenden eines Angebots oder das Anlegen eines Kontakts in einem kritischen System – können so eingerichtet werden, dass ein Mitarbeiter zuerst bestätigt.
              </p>
              <CheckList items={[
                'Welche Schritte automatisch laufen',
                'Wann eine Freigabe durch einen Mitarbeiter nötig ist',
                'Welche Mitarbeiter bei welchen Anfragen informiert werden',
                'Welche Daten erfasst und wo sie gespeichert werden',
                'Was bei einem fehlerhaften Ablauf passiert',
                'Welche Aktionen protokolliert werden',
              ]} className="mb-6" />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  So entsteht keine unkontrollierbare Blackbox, sondern ein klarer und nachvollziehbarer Vertriebsprozess.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ZIELGRUPPEN ══ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.h2 className="font-heading font-bold mb-4"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                Für welche Unternehmen lohnt sich automatisierte Leadgenerierung?
              </motion.h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: BODY }}>
                Besonders sinnvoll ist sie für Unternehmen, die regelmäßig neue Anfragen erhalten und sichergehen möchten, dass keine davon verloren geht oder zu lange ohne Reaktion bleibt.
              </p>
              <CheckList items={[
                'Unternehmen mit regelmäßigem Neukundengeschäft',
                'Dienstleister, die auf Anfragen per Website reagieren müssen',
                'Handwerksbetriebe mit Anfragen aus mehreren Quellen',
                'Agenturen und Beratungsunternehmen mit Erstkontaktprozess',
                'Unternehmen, die Werbung schalten und Leads schnell bearbeiten müssen',
                'Teams mit mehreren Mitarbeitern, die Anfragen verteilen',
              ]} className="mb-6" />
              <p className="text-sm" style={{ color: MUTED }}>
                Entscheidend ist nicht die Branche, sondern wie häufig Anfragen eingehen und ob die Reaktionszeit heute noch verbessert werden kann.
              </p>
            </div>
          </div>
        </section>

        {/* ══ VERWANDTE AUTOMATISIERUNGEN ══ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2 className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Passende Automatisierungen für den nächsten Schritt
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { title: 'Terminbuchung automatisieren', desc: 'Qualifizierte Interessenten direkt in Ihren Kalender bringen – ohne Hin-und-Her per Telefon.', href: '/automatisierungen/terminbuchung' },
                { title: 'E-Mail-Automatisierung', desc: 'Eingehende Nachrichten sortieren, zuweisen und weiterverarbeiten – ohne manuellen Aufwand.', href: '/automatisierungen/email-automatisierung' },
                { title: 'Angebotsprozesse automatisieren', desc: 'Vom qualifizierten Lead zum professionellen Angebot – schneller und strukturierter.', href: '/automatisierungen/angebotsprozesse' },
              ].map((item, i) => (
                <motion.a key={i} href={item.href} className="block bg-white rounded-2xl border p-5 group hover:-translate-y-1 transition-transform duration-200"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.08 }} viewport={{ once: true }}>
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: INK }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: MUTED }}>{item.desc}</p>
                  <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: PETROL }}>
                    Mehr erfahren <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2 className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              {isRegional ? `Häufige Fragen zur automatisierten Leadgenerierung in ${regionName}` : 'Häufige Fragen'}
            </motion.h2>
            <div className="max-w-3xl mx-auto"><Accordion items={allFaqs} allowMultiple={false} /></div>
          </div>
        </section>

        {/* ══ REGIONALER CONTENT ══ */}
        {isRegional && regionalContent?.localSection && (
          <section className="py-16" style={{ background: SURFACE }}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading font-bold text-2xl mb-6" style={{ color: INK }}>
                  Automatisierte Leadgenerierung für Unternehmen in {regionName}
                </h2>
                {regionalContent.localSection.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed mb-5" style={{ color: BODY }}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══ ABSCHLUSS-CTA ══ */}
        <section className="section-padding" style={{ background: isRegional && regionalContent?.localSection ? PAPER : SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div className="max-w-2xl mx-auto text-center rounded-2xl border p-8 md:p-12"
              style={{ borderColor: `${PETROL}30`, background: 'rgba(14,124,114,0.03)', boxShadow: `0 0 0 1px rgba(14,124,114,0.12), 0 8px 32px rgba(14,124,114,0.08)` }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(14,124,114,0.09)', color: PETROL }}>
                Kostenloser Automations-Check
              </span>
              <h2 className="font-heading font-bold mb-4" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Wie viele Anfragen bleiben heute unnötig lange unbearbeitet?
              </h2>
              <p className="text-base mb-3 leading-relaxed" style={{ color: BODY }}>
                In einem unverbindlichen Gespräch betrachten wir Ihren aktuellen Ablauf und zeigen Ihnen konkret, welche Schritte sich sinnvoll automatisieren lassen.
              </p>
              <p className="text-sm mb-8" style={{ color: MUTED }}>
                Sie erhalten keine allgemeine Tool-Präsentation, sondern konkrete Vorschläge passend zu Ihrem Unternehmen.
              </p>
              <button onClick={scrollToContact} className="btn-primary mb-4">
                Kostenlosen Automations-Check sichern <ArrowRight size={18} />
              </button>
              <p className="text-xs" style={{ color: MUTED }}>Unverbindlich · Persönlich · Verständlich erklärt</p>
            </motion.div>
          </div>
        </section>

        <ContactForm service="automatisierungen" heading="Kostenlosen Automations-Check sichern" subheading="Wir analysieren Ihren Lead-Prozess und zeigen Ihnen, wo Automatisierung den größten Hebel hat." />
        <GoogleMapsSection />
        <StickyCtaBar ctaLabel="Automations-Check sichern" />
      </div>
    </>
  );
}
