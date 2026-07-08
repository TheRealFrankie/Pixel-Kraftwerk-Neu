'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, AlertTriangle, Shield,
  FileText, Search, Database, FilePen, CheckSquare, Send, BarChart2,
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
  { icon: <FileText size={18} />, title: 'Anfrage erfassen', badge: 'Eingang gesichert' },
  { icon: <Search size={18} />, title: 'Angaben vervollständigen', badge: 'Daten geprüft' },
  { icon: <Database size={18} />, title: 'Daten zusammenführen', badge: 'CRM abgeglichen' },
  { icon: <FilePen size={18} />, title: 'Angebot vorbereiten', badge: 'Entwurf erstellt' },
  { icon: <CheckSquare size={18} />, title: 'Freigabe einholen', badge: 'Genehmigt' },
  { icon: <Send size={18} />, title: 'Angebot versenden', badge: 'Dokument versendet' },
  { icon: <BarChart2 size={18} />, title: 'Status nachverfolgen', badge: 'Follow-up geplant' },
];

const faqs = [
  { question: 'Kann jedes Angebot vollständig automatisch erstellt werden?', answer: 'Nicht jedes. Komplexe oder individuelle Angebote benötigen weiterhin menschliches Urteil. Automatisierung hilft vor allem bei den wiederkehrenden Schritten: Daten erfassen, Vorlagen befüllen, Dokumente versenden und nachfassen – damit Ihr Team sich auf die Inhalte konzentrieren kann.' },
  { question: 'Können individuelle Preise und Sonderleistungen berücksichtigt werden?', answer: 'Ja. Das System kann flexible Felder und Sonderpositions-Optionen abbilden. Preise, Rabatte oder Sonderbedingungen lassen sich als Freigabeschritte einrichten, bei denen ein Mitarbeiter vor dem Versand prüft.' },
  { question: 'Wie funktionieren interne Freigaben?', answer: 'Freigaben können als einfache Bestätigungsschritte eingerichtet werden. Ein Mitarbeiter sieht den Entwurf, prüft Positionen und Preis, und gibt per Klick den Versand frei. Erst danach wird das Dokument versendet.' },
  { question: 'Können vorhandene Angebotsvorlagen verwendet werden?', answer: 'Ja. Bestehende Word-, Google-Docs- oder PDF-Vorlagen können als Basis verwendet werden. Das System befüllt die variablen Felder automatisch mit den erfassten Kundendaten.' },
  { question: 'Lassen sich CRM und Buchhaltung anbinden?', answer: 'Ja. Wir können vorhandene CRM-Systeme (z. B. HubSpot, Pipedrive, Zoho) und Buchhaltungssoftware (z. B. Lexoffice, sevDesk) anbinden, sodass Angebote automatisch dokumentiert und weiterverarbeitet werden.' },
  { question: 'Können Angebote automatisch nachgefasst werden?', answer: 'Ja. Nach einer festgelegten Anzahl von Tagen ohne Rückmeldung kann automatisch eine freundliche Erinnerung oder eine Aufgabe für einen Mitarbeiter erstellt werden.' },
  { question: 'Was passiert bei fehlenden Kundenangaben?', answer: 'Das System erkennt fehlende Pflichtangaben und kann automatisch eine Rückfrage an den Interessenten oder eine interne Aufgabe erstellen, bevor der Angebotsprozess fortgesetzt wird.' },
  { question: 'Können angenommene Angebote direkt in ein Projekt überführt werden?', answer: 'Ja. Bei Annahme eines Angebots kann automatisch ein Projekt oder ein Auftrag im Projektmanagement- oder CRM-System angelegt werden – inklusive relevanter Kundendaten und Leistungsangaben.' },
];

export default function AutomatisierungenAngebotsprozesse({ regionSlug, regionName }: Props) {
  const isRegional = !!regionSlug && !!regionName;
  const regionalContent = isRegional
    ? getRegionalSubpageContent(regionSlug as LeistungsgebietSlug, 'automatisierungen', 'angebotsprozesse')
    : null;

  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/automatisierungen/angebotsprozesse`
    : `${baseUrl}/automatisierungen/angebotsprozesse`;

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
        { label: 'Angebotsprozesse automatisieren' },
      ]
    : [
        { label: 'Startseite', href: '/' },
        { label: 'Automatisierungen', href: '/automatisierungen' },
        { label: 'Angebotsprozesse automatisieren' },
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
          ? `Angebotsprozesse automatisieren für Unternehmen in ${regionName}. Vom Kundenwunsch zum professionellen Angebot – Pixel Kraftwerk automatisiert Datenerfassung, Freigaben, Versand und Follow-ups.`
          : 'Angebotsprozesse automatisieren: Vom Kundenwunsch zum professionellen Angebot. Pixel Kraftwerk automatisiert Datenerfassung, Freigaben, Versand und Follow-ups.'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <ServiceJsonLd
          name={isRegional ? `Angebotsprozesse automatisieren in ${regionName}` : 'Angebotsprozesse automatisieren'}
          serviceType="BusinessProcessAutomation"
          description="Vom Kundenwunsch zum professionellen Angebot: Pixel Kraftwerk automatisiert Datenerfassung, Freigaben, Versand und Follow-ups."
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          pageName="Angebotsprozesse automatisieren"
        />

        {/* ══ HERO ══ */}
        <section className="relative min-h-[100dvh] md:min-h-screen flex flex-col" style={{ background: PAPER }}>
          <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
          <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
              <div>
                <motion.h1 className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  {isRegional ? `Automatisierte Angebotsprozesse in ${regionName}` : 'Automatisierte Angebotsprozesse – Groitzsch & Leipzig'}
                </motion.h1>

                <motion.h2 className="font-heading font-bold tracking-tight mb-3 leading-[1.08]"
                  style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                  {regionalContent?.localHook || 'Schneller vom Kundenwunsch zum professionellen Angebot.'}
                </motion.h2>

                <motion.h3 className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-3 leading-snug" style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  Angebotserstellung, Angebotsprozess oder Angebotsautomatisierung
                </motion.h3>

                <motion.p className="text-base md:text-lg max-w-xl mb-2 leading-relaxed" style={{ color: BODY }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  Wir automatisieren die wiederkehrenden Schritte zwischen Anfrage, Datenerfassung, Angebotserstellung, Freigabe und Follow-up.
                </motion.p>
                <motion.p className="text-sm md:text-base max-w-xl mb-5 leading-relaxed" style={{ color: MUTED }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                  Ihr Team behält die Kontrolle über Preise und Entscheidungen – der administrative Aufwand wird deutlich reduziert.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-3 mb-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                  <button onClick={scrollToContact} className="btn-primary">
                    Kostenlosen Automations-Check sichern <ArrowRight size={18} />
                  </button>
                </motion.div>
                <motion.p className="text-xs mb-4" style={{ color: MUTED }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
                  Wir prüfen, an welchen Stellen Ihr Angebotsprozess heute unnötig Zeit verliert.
                </motion.p>
                <div className="hidden sm:block"><TrustLine /></div>
              </div>
              <motion.div className="w-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                <AutomationWorkflowVisual steps={workflowSteps} footerLabel="Angebotsprozess – von der Anfrage bis zum Follow-up" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ VERTRAUENSLEISTE ══ */}
        <section aria-label="Vorteile" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {['Schnellere Reaktionszeit', 'Strukturierte Datenerfassung', 'Klare Freigabeprozesse', 'Kein vergessenes Nachfassen', 'Offene Angebote im Blick'].map((item) => (
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
                Viele Angebote beginnen mit Suchen, Kopieren und Rückfragen.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: BODY }}>
                Die Anfrage kommt per E-Mail. Kundendaten werden mühsam aus dem Text kopiert. Preise stehen in einer Excel-Datei, die sich jemand anders zuletzt geöffnet hat. Eine alte Vorlage wird aufgerufen, manuell angepasst und intern zum Gegenlesen weitergeleitet – per Chat, per Mail oder mündlich. Ob das Angebot schon versendet wurde, weiß im Zweifelsfall nur eine Person.
              </p>
              <div className="rounded-xl px-5 py-4 border-l-4 mb-5" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold leading-snug" style={{ color: INK }}>
                  Das kostet Zeit – und während das Angebot vorbereitet wird, wartet der Interessent.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-6"
                style={{ background: 'rgba(239,68,68,0.06)', color: '#B91C1C', borderColor: 'rgba(239,68,68,0.18)' }}
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                <AlertTriangle size={12} aria-hidden /> Das eigentliche Problem
              </motion.div>
              <motion.h2 className="font-heading font-bold mb-8" style={{ color: INK, fontSize: 'clamp(1.35rem, 2.5vw, 2rem)' }}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                Während das Angebot vorbereitet wird, wartet der Interessent – und vergleicht bereits woanders.
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'Lange Reaktionszeiten', sub: 'Jede Stunde ohne Angebot senkt die Abschlusswahrscheinlichkeit.' },
                  { label: 'Falsche oder widersprüchliche Angaben', sub: 'Daten aus mehreren Quellen erzeugen Fehler.' },
                  { label: 'Unklare Zuständigkeiten', sub: 'Wer prüft, wer genehmigt, wer versendet?' },
                  { label: 'Vergessene Follow-ups', sub: 'Offene Angebote bleiben ohne Rückmeldung liegen.' },
                  { label: 'Versionschaos bei Vorlagen', sub: 'Welche Version ist die aktuell gültige?' },
                  { label: 'Kein Überblick über offene Angebote', sub: 'Niemand weiß, welche Angebote noch offen sind.' },
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
                <h2 className="font-heading font-bold mb-3" style={{ color: INK, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
                  Wiederkehrende Schritte werden automatisiert – wichtige Entscheidungen bleiben bei Ihrem Team.
                </h2>
                <p className="text-base leading-relaxed mb-3" style={{ color: BODY }}>
                  Benötigte Kundendaten und Anforderungen werden strukturiert erfasst. Anschließend können Angebotsdokumente aus geprüften Vorlagen vorbereitet, intern freigegeben und an den Interessenten versendet werden.
                </p>
                <p className="text-sm mb-6" style={{ color: MUTED }}>
                  Nach dem Versand wird der Status dokumentiert. Bleibt eine Rückmeldung aus, kann automatisch eine Aufgabe oder ein abgestimmtes Follow-up ausgelöst werden.
                </p>
                <button onClick={scrollToContact} className="btn-primary">
                  Angebotsprozess analysieren <ArrowRight size={18} />
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
                So entsteht ein klarer Angebotsprozess
              </h2>
            </motion.div>
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }} aria-hidden />
              {[
                { step: '01', title: 'Anfrage erfassen', desc: 'Kundendaten, gewünschte Leistung und wichtige Anforderungen werden zentral aufgenommen – aus Formular, E-Mail oder CRM.' },
                { step: '02', title: 'Angaben vervollständigen', desc: 'Fehlende Informationen werden erkannt und gezielt nachgefordert, bevor der Prozess weiterläuft.' },
                { step: '03', title: 'Daten zusammenführen', desc: 'Kunden-, Leistungs- und Projektdaten werden an einer Stelle bereitgestellt.' },
                { step: '04', title: 'Angebot vorbereiten', desc: 'Ein Angebotsentwurf wird aus einer freigegebenen Vorlage erstellt und mit den erfassten Daten befüllt.' },
                { step: '05', title: 'Interne Freigabe einholen', desc: 'Preise, Rabatte oder Sonderbedingungen können vor dem Versand von einem Mitarbeiter geprüft und freigegeben werden.' },
                { step: '06', title: 'Angebot versenden', desc: 'Das fertige Dokument wird professionell an den Interessenten versendet und im System gespeichert.' },
                { step: '07', title: 'Status nachverfolgen', desc: 'Offene Angebote werden überwacht und zum passenden Zeitpunkt nachgefasst – automatisch oder per Aufgabe.' },
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
              Was sich im Angebotsprozess automatisieren lässt
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <CheckList items={[
                'Angebotsanfragen strukturiert aus verschiedenen Quellen erfassen',
                'Fehlende Angaben automatisch erkennen und nachfordern',
                'Produkt- und Leistungsdaten automatisch übernehmen',
                'Kundendaten aus dem CRM einbinden',
                'Angebotsdokumente aus genehmigten Vorlagen erstellen',
                'Individuelle Textbausteine einfügen',
                'Interne Freigaben für Preise und Sonderbedingungen einholen',
                'Angebote mit Versionierung automatisch versenden',
                'Versand im CRM oder einer Tabelle dokumentieren',
                'Offene Angebote überwachen und erinnern',
                'Angenommene Angebote an Projektmanagement übergeben',
                'Abgelehnte Angebote mit Grunddaten archivieren',
              ]} />
            </div>
          </div>
        </section>

        {/* ══ ZWISCHEN-CTA ══ */}
        <section className="py-14" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <p className="text-lg font-heading font-semibold mb-4" style={{ color: INK }}>
              Wo verliert Ihr Angebotsprozess heute unnötig Zeit?
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
              Was sich durch einen automatisierten Angebotsprozess verändert
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
                  'Daten werden aus mehreren Quellen kopiert',
                  'Vorlagen sind uneinheitlich und veraltet',
                  'Freigaben erfolgen unstrukturiert',
                  'Angebote werden verspätet versendet',
                  'Aktueller Status unklar',
                  'Nachfassaktionen werden vergessen',
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
                  'Angaben werden strukturiert erfasst',
                  'Angebotsentwürfe aus geprüften Vorlagen',
                  'Freigaben laufen über einen klaren Prozess',
                  'Dokumente werden automatisch gespeichert',
                  'Offene Angebote bleiben sichtbar',
                  'Follow-ups starten nach festgelegten Regeln',
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
              Von der Analyse bis zum laufenden Angebotsprozess
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { n: '01', title: 'Analyse Ihres Angebotsprozesses', desc: 'Wir schauen, wie Anfragen eingehen, wie Angebote entstehen, wo Zeit verloren geht und welche Schritte sich wiederholen.' },
                { n: '02', title: 'Klare Prozessdarstellung', desc: 'Sie sehen, was automatisch passiert: Datenerfassung, Vorlagenbefüllung, Freigabeweg, Versand und Nachverfolgung.' },
                { n: '03', title: 'Systemverbindung', desc: 'Wir verbinden Eingangsformular, CRM, Dokumentensystem, E-Mail und Freigabeprozess.' },
                { n: '04', title: 'Umsetzung und Tests', desc: 'Die Schritte werden eingerichtet und mit verschiedenen Angebotstypen und Sonderfällen geprüft.' },
                { n: '05', title: 'Einweisung Ihres Teams', desc: 'Ihr Team weiß, wie Anfragen eingehen, wo Freigaben stattfinden und wie offene Angebote verwaltet werden.' },
                { n: '06', title: 'Laufende Optimierung', desc: 'Vorlagen, Freigaberegeln und Nachfasszeiten können anhand der tatsächlichen Nutzung angepasst werden.' },
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
                { step: '01', title: 'Kostenloser Automations-Check', desc: 'Wir betrachten Ihren aktuellen Angebotsprozess und identifizieren die sinnvollsten Verbesserungsmöglichkeiten.' },
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
                Angebote werden nicht ohne Wissen Ihres Teams versendet. Preise, Positionen und Sonderkonditionen können weiterhin menschlich geprüft werden. Das System übernimmt die Vorbereitungsarbeit – die Entscheidung bleibt bei Ihnen.
              </p>
              <CheckList items={[
                'Welche Angebotstypen automatisch vorbereitet werden',
                'Wann eine manuelle Freigabe vor dem Versand nötig ist',
                'Wer über neue Anfragen informiert wird',
                'Wo Dokumente gespeichert werden',
                'Wie lange auf eine Antwort gewartet wird, bevor nachgefasst wird',
                'Was bei einem Fehler im Ablauf passiert',
              ]} className="mb-6" />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  So entsteht kein unkontrollierbares System, sondern ein strukturierter und nachvollziehbarer Angebotsprozess.
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
                Für welche Unternehmen lohnt sich automatisierter Angebotsprozess?
              </motion.h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: BODY }}>
                Besonders hilfreich für Unternehmen, die regelmäßig Angebote erstellen und dabei immer wieder dieselben manuellen Schritte wiederholen.
              </p>
              <CheckList items={[
                'Handwerksbetriebe mit wiederkehrenden Leistungspositionen',
                'Agenturen und Dienstleister mit ähnlichen Projektangeboten',
                'IT-Unternehmen mit standardisierten Service-Paketen',
                'Unternehmen mit mehreren Mitarbeitern, die Angebote erstellen',
                'Betriebe, bei denen Angebote intern freigegeben werden müssen',
                'Unternehmen, bei denen angenommene Angebote Projekte auslösen',
              ]} className="mb-6" />
              <p className="text-sm" style={{ color: MUTED }}>
                Wenn Sie pro Woche mehr als zwei bis drei Angebote erstellen und dafür wiederholt dieselben Schritte erledigen, ist eine Automatisierung sinnvoll.
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
                { title: 'Leadgenerierung automatisieren', desc: 'Bevor ein Angebot entsteht, muss der Lead strukturiert erfasst sein. Das geht einfacher als gedacht.', href: '/automatisierungen/leadgenerierung' },
                { title: 'E-Mail-Automatisierung', desc: 'Eingehende Angebotsanfragen per E-Mail automatisch erkennen, einordnen und weiterleiten.', href: '/automatisierungen/email-automatisierung' },
                { title: 'Prozessautomatisierung', desc: 'Alle Automatisierungsmöglichkeiten im Überblick – vom ersten Kontakt bis zur Rechnungsstellung.', href: '/automatisierungen' },
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
              {isRegional ? `Häufige Fragen zu Angebotsprozessen in ${regionName}` : 'Häufige Fragen'}
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
                  Automatisierte Angebotsprozesse für Unternehmen in {regionName}
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
                Wo verliert Ihr Angebotsprozess heute unnötig Zeit?
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

        <ContactForm service="automatisierungen" heading="Kostenlosen Automations-Check sichern" subheading="Wir analysieren Ihren Angebotsprozess und zeigen, welche Schritte sich strukturiert automatisieren lassen." />
        <GoogleMapsSection />
        <StickyCtaBar ctaLabel="Automations-Check sichern" />
      </div>
    </>
  );
}
