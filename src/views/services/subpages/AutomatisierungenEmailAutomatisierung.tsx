'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, AlertTriangle, Shield,
  Mail, SlidersHorizontal, AlertCircle, UserCheck, FileDown, MessageSquare, Eye,
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
  { icon: <Mail size={18} />, title: 'Nachricht empfangen', badge: 'Postfach überwacht' },
  { icon: <SlidersHorizontal size={18} />, title: 'Inhalt einordnen', badge: 'Kategorie erkannt' },
  { icon: <AlertCircle size={18} />, title: 'Priorität bestimmen', badge: 'Dringlichkeit gesetzt' },
  { icon: <UserCheck size={18} />, title: 'Zuständigkeit zuweisen', badge: 'Weitergeleitet' },
  { icon: <FileDown size={18} />, title: 'Informationen verarbeiten', badge: 'Daten gespeichert' },
  { icon: <MessageSquare size={18} />, title: 'Antwort vorbereiten', badge: 'Entwurf erstellt' },
  { icon: <Eye size={18} />, title: 'Bearbeitung überwachen', badge: 'Status verfolgt' },
];

const faqs = [
  { question: 'Welche E-Mail-Anbieter können verbunden werden?', answer: 'Gmail, Microsoft 365 / Outlook, IMAP-/SMTP-fähige Postfächer und weitere gängige Anbieter. Welche Anbindung für Ihre Infrastruktur geeignet ist, klären wir im ersten Gespräch.' },
  { question: 'Können mehrere Postfächer verarbeitet werden?', answer: 'Ja. Mehrere Postfächer – zum Beispiel info@, support@ und vertrieb@ – können gleichzeitig überwacht und verarbeitet werden.' },
  { question: 'Können Nachrichten automatisch beantwortet werden?', answer: 'Für wiederkehrende Anfragen kann eine passende Antwort vorbereitet werden. Der Versand kann automatisch oder – wenn Sie das bevorzugen – erst nach Freigabe durch einen Mitarbeiter erfolgen.' },
  { question: 'Kann vor dem Versand eine Freigabe verlangt werden?', answer: 'Ja. Wichtige Antworten können als Entwurf erstellt und einem Mitarbeiter zur Prüfung vorgelegt werden, bevor sie versendet werden.' },
  { question: 'Können Anhänge automatisch abgelegt werden?', answer: 'Ja. Anhänge können anhand von Dateiname, Absender oder Betreff erkannt und in festgelegte Ordner oder Systeme abgelegt werden.' },
  { question: 'Lassen sich Rechnungen oder Bewerbungen erkennen?', answer: 'Ja. Das System kann bestimmte E-Mail-Typen anhand von Merkmalen identifizieren und gesondert verarbeiten – etwa Rechnungen an die Buchhaltung weiterleiten oder Bewerbungen in einem separaten System ablegen.' },
  { question: 'Was passiert bei nicht eindeutig zuordenbaren Nachrichten?', answer: 'Solche Nachrichten können an eine Standardadresse oder eine verantwortliche Person weitergeleitet werden, anstatt verloren zu gehen. Die Entscheidung, wie mit unklaren Fällen umgegangen wird, legen Sie fest.' },
  { question: 'Können unbeantwortete E-Mails automatisch gemeldet werden?', answer: 'Ja. Wenn eine Nachricht nach einer festgelegten Zeit keine Antwort erhalten hat, kann eine Erinnerung an den zuständigen Mitarbeiter oder an eine Gruppe versendet werden.' },
];

export default function AutomatisierungenEmailAutomatisierung({ regionSlug, regionName }: Props) {
  const isRegional = !!regionSlug && !!regionName;
  const regionalContent = isRegional
    ? getRegionalSubpageContent(regionSlug as LeistungsgebietSlug, 'automatisierungen', 'email-automatisierung')
    : null;

  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/automatisierungen/email-automatisierung`
    : `${baseUrl}/automatisierungen/email-automatisierung`;

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
        { label: 'E-Mail-Automatisierung' },
      ]
    : [
        { label: 'Startseite', href: '/' },
        { label: 'Automatisierungen', href: '/automatisierungen' },
        { label: 'E-Mail-Automatisierung' },
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
          ? `E-Mail-Automatisierung für Unternehmen in ${regionName}. E-Mails automatisch sortieren, zuweisen und weiterverarbeiten – von Pixel Kraftwerk.`
          : 'E-Mail-Automatisierung für Unternehmen: E-Mails automatisch sortieren, zuweisen und weiterverarbeiten. Pixel Kraftwerk entwickelt individuelle E-Mail-Workflows.'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <ServiceJsonLd
          name={isRegional ? `E-Mail-Automatisierung in ${regionName}` : 'E-Mail-Automatisierung für Unternehmen'}
          serviceType="EmailAutomation"
          description="E-Mails automatisch sortieren, zuweisen und weiterverarbeiten. Pixel Kraftwerk entwickelt individuelle E-Mail-Workflows für Unternehmen."
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          pageName="E-Mail-Automatisierung für Unternehmen"
        />

        {/* ══ HERO ══ */}
        <section className="relative flex flex-col" style={{ background: PAPER, minHeight: 'calc(100dvh - 36px)' }}>
          <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
          <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
              <div>
                <motion.h1 className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  {isRegional ? `E-Mail-Automatisierung für Unternehmen in ${regionName}` : 'E-Mail-Automatisierung für Unternehmen – Groitzsch & Leipzig'}
                </motion.h1>

                <motion.h2 className="font-heading font-bold tracking-tight mb-3 leading-[1.08]"
                  style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                  {regionalContent?.localHook || 'Wichtige E-Mails erreichen automatisch die richtige Stelle.'}
                </motion.h2>

                <motion.h3 className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-3 leading-snug" style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  E-Mail-Automatisierung, Postfach automatisieren oder E-Mail-Workflows
                </motion.h3>

                <motion.p className="text-base md:text-lg max-w-xl mb-2 leading-relaxed" style={{ color: BODY }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  Wir automatisieren die wiederkehrenden Schritte zwischen eingehender Nachricht, Einordnung, Zuständigkeit, Antwort und weiterer Verarbeitung.
                </motion.p>
                <motion.p className="text-sm md:text-base max-w-xl mb-5 leading-relaxed" style={{ color: MUTED }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                  Für Kundenanfragen, Support, Dokumente, Bestellungen, Bewerbungen und interne Kommunikation.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-3 mb-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                  <button onClick={scrollToContact} className="btn-primary">
                    Kostenlosen Automations-Check sichern <ArrowRight size={18} />
                  </button>
                </motion.div>
                <motion.p className="text-xs mb-4" style={{ color: MUTED }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
                  Wir prüfen, welche E-Mail-Aufgaben heute Zeit kosten oder regelmäßig liegen bleiben.
                </motion.p>
                <div className="hidden sm:block"><TrustLine /></div>
              </div>
              <motion.div className="w-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                <AutomationWorkflowVisual steps={workflowSteps} footerLabel="E-Mail-Workflow – vom Eingang bis zur Bearbeitung" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ VERTRAUENSLEISTE ══ */}
        <section aria-label="Vorteile" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {['Klare Zuständigkeiten', 'Kein E-Mail geht verloren', 'Automatische Einordnung', 'Weniger manuelle Weiterleitung', 'Offene Nachrichten im Blick'].map((item) => (
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
                Das Postfach ist häufig der unsichtbare Mittelpunkt des Unternehmens.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: BODY }}>
                Kundenanfragen, Rechnungen, Bewerbungen, Bestellungen, Terminwünsche, Beschwerden und interne Rückfragen – alles trifft im selben oder in mehreren Postfächern ein. Mitarbeiter lesen, sortieren, leiten weiter und übertragen Informationen manuell in andere Programme. Jeden Tag aufs Neue.
              </p>
              <div className="rounded-xl px-5 py-4 border-l-4 mb-5" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold leading-snug" style={{ color: INK }}>
                  Das kostet Zeit, erhöht die Fehlerquote – und führt dazu, dass wichtige Nachrichten zu spät oder gar nicht bearbeitet werden.
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
                Wenn der Posteingang zum Aufgabenmanager wird, fehlt schnell der Überblick.
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'Wichtige Nachrichten werden übersehen', sub: 'Zu viele Mails, zu wenig Struktur.' },
                  { label: 'Kunden warten zu lange', sub: 'Keine automatische Weiterleitung, kein klarer Zuständiger.' },
                  { label: 'E-Mails werden mehrfach weitergeleitet', sub: 'Niemand fühlt sich endgültig zuständig.' },
                  { label: 'Anhänge werden falsch abgelegt', sub: 'Manuelle Ablage ist fehleranfällig.' },
                  { label: 'Daten müssen manuell kopiert werden', sub: 'Informationen aus E-Mails in andere Systeme übertragen.' },
                  { label: 'Standardanfragen kosten täglich Zeit', sub: 'Dieselben Fragen, dieselben Antworten – jeden Tag.' },
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
                  Eingehende Nachrichten können automatisch in klare Prozesse überführt werden.
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: BODY }}>
                  Neue E-Mails werden anhand von Absender, Inhalt, Anhängen oder bestimmten Merkmalen eingeordnet. Anschließend können sie weitergeleitet, priorisiert, zusammengefasst oder als Aufgabe im passenden System angelegt werden.
                </p>
                <p className="text-sm mb-3" style={{ color: MUTED }}>
                  Bei wiederkehrenden Anfragen kann eine Antwort vorbereitet werden. Der endgültige Versand kann automatisch oder nach Freigabe durch einen Mitarbeiter erfolgen.
                </p>
                <p className="text-xs mb-6 leading-relaxed" style={{ color: MUTED }}>
                  Bei der Umsetzung berücksichtigen wir, welche Daten verarbeitet werden, welche Systeme beteiligt sind, wo Informationen gespeichert werden und wer darauf zugreifen darf. Rechtliche Anforderungen hängen vom konkreten Einsatzfall und den verwendeten Diensten ab.
                </p>
                <button onClick={scrollToContact} className="btn-primary">
                  E-Mail-Abläufe prüfen lassen <ArrowRight size={18} />
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
                So wird aus einer E-Mail ein bearbeitbarer Vorgang
              </h2>
            </motion.div>
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }} aria-hidden />
              {[
                { step: '01', title: 'Nachricht empfangen', desc: 'Eine neue E-Mail trifft in einem angebundenen Postfach ein.' },
                { step: '02', title: 'Inhalt einordnen', desc: 'Das System erkennt beispielsweise Kundenanfrage, Rechnung, Bewerbung, Terminwunsch oder Beschwerde.' },
                { step: '03', title: 'Priorität bestimmen', desc: 'Dringende oder besonders wichtige Nachrichten werden hervorgehoben und vorrangig behandelt.' },
                { step: '04', title: 'Zuständigkeit zuweisen', desc: 'Die Nachricht wird an die passende Person, Abteilung oder ein externes Ticket-System übergeben.' },
                { step: '05', title: 'Informationen verarbeiten', desc: 'Daten und Anhänge können gespeichert oder in ein anderes System übernommen werden.' },
                { step: '06', title: 'Antwort vorbereiten', desc: 'Für wiederkehrende Anfragen wird eine passende Antwort oder ein Entwurf erstellt.' },
                { step: '07', title: 'Bearbeitung überwachen', desc: 'Bleibt eine wichtige Nachricht unbeantwortet, wird eine Erinnerung an den zuständigen Mitarbeiter ausgelöst.' },
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
              Was sich im E-Mail-Prozess automatisieren lässt
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <CheckList items={[
                'E-Mails nach Typ, Absender oder Inhalt kategorisieren',
                'Dringlichkeit erkennen und priorisieren',
                'Nachrichten an Mitarbeiter oder Abteilungen zuweisen',
                'Support-Tickets aus E-Mails erstellen',
                'Antwortentwürfe für häufige Anfragen vorbereiten',
                'Standardanfragen mit Freigabe automatisch beantworten',
                'Inhaltliche Zusammenfassungen langer E-Mails erstellen',
                'Anhänge automatisch ablegen und benennen',
                'Rechnungen erkennen und an Buchhaltung weiterleiten',
                'Daten aus E-Mails oder Anhängen übernehmen',
                'Bewerbungen sortieren und ablegen',
                'Terminwünsche weiterverarbeiten',
                'Kunden im CRM suchen oder neu anlegen',
                'Unbeantwortete wichtige Nachrichten überwachen und melden',
              ]} />
            </div>
          </div>
        </section>

        {/* ══ ZWISCHEN-CTA ══ */}
        <section className="py-14" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <p className="text-lg font-heading font-semibold mb-4" style={{ color: INK }}>
              Welche Aufgaben entstehen täglich durch Ihren Posteingang?
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
              Was sich durch einen automatisierten E-Mail-Prozess verändert
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
                  'Nachrichten in verschiedenen Postfächern verteilt',
                  'Mitarbeiter sortieren alles von Hand',
                  'E-Mails werden mehrfach weitergeleitet',
                  'Anhänge werden manuell gespeichert',
                  'Antworten hängen von einzelnen Personen ab',
                  'Wichtige Nachrichten bleiben liegen',
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
                  'Nachrichten werden automatisch eingeordnet',
                  'Zuständigkeiten werden nach Regeln vergeben',
                  'Wichtige Inhalte werden hervorgehoben',
                  'Anhänge und Daten werden weiterverarbeitet',
                  'Antworten können vorbereitet werden',
                  'Offene Vorgänge werden überwacht',
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
              Von der Analyse bis zum laufenden E-Mail-Workflow
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { n: '01', title: 'Analyse Ihrer E-Mail-Prozesse', desc: 'Wir betrachten, welche Postfächer heute wie viele Nachrichten erhalten und welche Schritte manuell erledigt werden.' },
                { n: '02', title: 'Klare Ablaufdefinition', desc: 'Sie sehen, was automatisch erkannt wird, welche Regeln gelten und wann ein Mitarbeiter eingreift.' },
                { n: '03', title: 'Systemverbindung', desc: 'Wir verbinden Postfächer, CRM-System, Ticket-Tool, Ablageordner und interne Benachrichtigungskanäle.' },
                { n: '04', title: 'Umsetzung und Tests', desc: 'Kategorien, Weiterleitungen und Antwortvorlagen werden eingerichtet und mit echten Szenarien geprüft.' },
                { n: '05', title: 'Einweisung Ihres Teams', desc: 'Ihr Team weiß, was automatisch passiert, wie Ausnahmen behandelt werden und wo manuelle Eingriffe möglich sind.' },
                { n: '06', title: 'Laufende Optimierung', desc: 'Kategorien, Regeln und Vorlagen können anhand der tatsächlichen E-Mail-Flüsse angepasst werden.' },
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
                { step: '01', title: 'Kostenloser Automations-Check', desc: 'Wir betrachten Ihre E-Mail-Prozesse und identifizieren die sinnvollsten Verbesserungsmöglichkeiten.' },
                { step: '02', title: 'Ablauf und Lösungskonzept', desc: 'Wir legen fest, was automatisch erkannt und verarbeitet wird und wann ein Mitarbeiter entscheidet.' },
                { step: '03', title: 'Umsetzung', desc: 'Die benötigten Systeme werden verbunden und die Regeln, Kategorien und Weiterleitungen eingerichtet.' },
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
                Nicht jede E-Mail soll automatisch beantwortet oder weitergeleitet werden. Das System handelt nach Regeln, die Sie festlegen. Ausnahmen, unklare Fälle und sensible Nachrichten landen weiterhin bei einem Mitarbeiter.
              </p>
              <CheckList items={[
                'Welche E-Mail-Typen automatisch verarbeitet werden',
                'Bei welchen Nachrichten eine Freigabe nötig ist',
                'Wer bei welchen Inhalten informiert wird',
                'Wo Daten gespeichert werden und wer darauf zugreifen darf',
                'Wie mit nicht eindeutig zuordenbaren E-Mails umgegangen wird',
                'Was passiert, wenn ein automatischer Schritt fehlschlägt',
              ]} className="mb-6" />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  So entsteht kein unkontrollierbares System, sondern ein klarer und nachvollziehbarer E-Mail-Prozess.
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
                Für welche Unternehmen lohnt sich E-Mail-Automatisierung?
              </motion.h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: BODY }}>
                Sinnvoll für alle, die täglich Zeit damit verbringen, E-Mails zu lesen, einzuordnen und weiterzuleiten.
              </p>
              <CheckList items={[
                'Unternehmen mit hohem täglichem E-Mail-Aufkommen',
                'Betriebe mit mehreren Postfächern und mehreren Mitarbeitern',
                'Dienstleister mit häufig wiederkehrenden Standardanfragen',
                'Unternehmen mit Dokumenten-Eingang per E-Mail (Rechnungen, Bewerbungen)',
                'Teams, die E-Mails als Grundlage für andere Prozesse nutzen',
                'Unternehmen, bei denen Antwortzeiten auf Kundenanfragen kritisch sind',
              ]} className="mb-6" />
              <p className="text-sm" style={{ color: MUTED }}>
                Entscheidend ist, wie viel Zeit täglich für manuelle Sortier- und Weiterleitungsaufgaben verwendet wird – und ob dieser Aufwand durch klare Regeln reduziert werden kann.
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
                { title: 'Leadgenerierung automatisieren', desc: 'Eingehende Anfragen per E-Mail strukturiert erfassen und als qualifizierte Leads weiterverarbeiten.', href: '/automatisierungen/leadgenerierung' },
                { title: 'Terminbuchung automatisieren', desc: 'Terminwünsche per E-Mail direkt in den automatisierten Buchungsprozess überführen.', href: '/automatisierungen/terminbuchung' },
                { title: 'Angebotsprozesse automatisieren', desc: 'Angebotsanfragen per E-Mail erfassen, strukturieren und zum fertigen Angebot weiterverarbeiten.', href: '/automatisierungen/angebotsprozesse' },
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
              {isRegional ? `Häufige Fragen zur E-Mail-Automatisierung in ${regionName}` : 'Häufige Fragen'}
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
                  E-Mail-Automatisierung für Unternehmen in {regionName}
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
                Welche Aufgaben entstehen täglich durch Ihren Posteingang?
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

        <ContactForm service="automatisierungen" heading="Kostenlosen Automations-Check sichern" subheading="Wir analysieren Ihre E-Mail-Prozesse und zeigen, welche Abläufe sich strukturiert automatisieren lassen." />
        <GoogleMapsSection />
        <StickyCtaBar ctaLabel="Automations-Check sichern" />
      </div>
    </>
  );
}
