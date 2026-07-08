'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, AlertTriangle, Shield,
  Calendar, Clock, CheckCircle2, Send, Bell, ClipboardList, Star,
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
  { icon: <Star size={18} />, title: 'Leistung auswählen', badge: 'Wunsch erfasst' },
  { icon: <Calendar size={18} />, title: 'Verfügbarkeit anzeigen', badge: 'Kalender geprüft' },
  { icon: <CheckCircle2 size={18} />, title: 'Termin buchen', badge: 'Buchung gespeichert' },
  { icon: <Clock size={18} />, title: 'Kalender aktualisieren', badge: 'Eintrag erstellt' },
  { icon: <Send size={18} />, title: 'Bestätigung versenden', badge: 'Nachricht versendet' },
  { icon: <ClipboardList size={18} />, title: 'Termin vorbereiten', badge: 'Daten abgefragt' },
  { icon: <Bell size={18} />, title: 'Erinnern & nachbereiten', badge: 'Erinnerung geplant' },
];

const faqs = [
  { question: 'Welche Kalender können verbunden werden?', answer: 'Google Calendar, Microsoft Outlook/Exchange, Apple Calendar und andere Kalender, die über iCal oder API zugänglich sind. Welche Verbindungen in Ihrem Fall sinnvoll sind, klären wir im ersten Gespräch.' },
  { question: 'Können mehrere Mitarbeiter oder Ressourcen eingebunden werden?', answer: 'Ja. Kunden können zwischen verschiedenen Mitarbeitern, Teams oder Standorten wählen. Das System zeigt jeweils nur die tatsächlich verfügbaren Zeiten.' },
  { question: 'Lassen sich unterschiedliche Standorte abbilden?', answer: 'Ja. Jeder Standort kann eigene Verfügbarkeiten, Leistungen und Kalender haben. Buchungen werden automatisch dem richtigen Ort zugeordnet.' },
  { question: 'Können Kunden selbst umbuchen oder absagen?', answer: 'Ja. Über einen Link in der Bestätigung oder Erinnerung können Kunden Termine eigenständig verschieben oder stornieren – innerhalb der von Ihnen definierten Regeln.' },
  { question: 'Wie werden Doppelbuchungen verhindert?', answer: 'Das Buchungssystem zeigt nur verfügbare Zeiten. Ist ein Slot belegt, ist er nicht buchbar. Puffer- und Blockzeiten lassen sich flexibel einrichten.' },
  { question: 'Können Erinnerungen automatisch verschickt werden?', answer: 'Ja. Erinnerungen können per E-Mail oder Nachricht zu einem frei wählbaren Zeitpunkt vor dem Termin versendet werden. Mehrere Erinnerungen sind ebenfalls möglich.' },
  { question: 'Lassen sich Formulare oder Informationen vor einem Termin abfragen?', answer: 'Ja. Nach der Buchung oder als Teil des Buchungsprozesses können Formulare, Fragebögen oder benötigte Dokumente automatisch angefordert werden.' },
  { question: 'Können telefonische und online gebuchte Termine zusammengeführt werden?', answer: 'Ja. Telefonisch vereinbarte Termine können manuell in denselben Kalender eingetragen werden. Alternativ kann ein einfaches Formular bereitgestellt werden, das der Mitarbeiter beim Telefonieren ausfüllt.' },
];

export default function AutomatisierungenTerminbuchung({ regionSlug, regionName }: Props) {
  const isRegional = !!regionSlug && !!regionName;
  const regionalContent = isRegional
    ? getRegionalSubpageContent(regionSlug as LeistungsgebietSlug, 'automatisierungen', 'terminbuchung')
    : null;

  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/automatisierungen/terminbuchung`
    : `${baseUrl}/automatisierungen/terminbuchung`;

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
        { label: 'Terminbuchung automatisieren' },
      ]
    : [
        { label: 'Startseite', href: '/' },
        { label: 'Automatisierungen', href: '/automatisierungen' },
        { label: 'Terminbuchung automatisieren' },
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
          ? `Terminbuchung automatisieren für Unternehmen in ${regionName}. Termine automatisch buchen, bestätigen und vorbereiten – von Pixel Kraftwerk.`
          : 'Terminbuchung automatisieren: Termine automatisch buchen, bestätigen und vorbereiten. Pixel Kraftwerk verbindet Kalender, Kundendaten und interne Abläufe.'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <ServiceJsonLd
          name={isRegional ? `Terminbuchung automatisieren in ${regionName}` : 'Terminbuchung automatisieren'}
          serviceType="SchedulingAutomation"
          description="Termine automatisch buchen, bestätigen und vorbereiten. Pixel Kraftwerk verbindet Kalender, Kundendaten und interne Abläufe."
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          pageName="Terminbuchung automatisieren"
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
                  {isRegional ? `Automatisierte Terminbuchung in ${regionName}` : 'Automatisierte Terminbuchung – Groitzsch & Leipzig'}
                </motion.h1>

                <motion.h2 className="font-heading font-bold tracking-tight mb-3 leading-[1.08]"
                  style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                  {regionalContent?.localHook || 'Termine buchen, bestätigen und vorbereiten – ohne ständiges Hin und Her.'}
                </motion.h2>

                <motion.h3 className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-3 leading-snug" style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  Terminbuchung, automatische Terminvereinbarung oder Kalender automatisieren
                </motion.h3>

                <motion.p className="text-base md:text-lg max-w-xl mb-2 leading-relaxed" style={{ color: BODY }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  Ihre Kunden wählen selbst einen passenden Termin. Bestätigungen, Erinnerungen, benötigte Angaben und interne Aufgaben werden automatisch ausgelöst.
                </motion.p>
                <motion.p className="text-sm md:text-base max-w-xl mb-5 leading-relaxed" style={{ color: MUTED }}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                  Für Beratungen, Praxen, Dienstleister, Studios und weitere terminbasierte Unternehmen.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-3 mb-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                  <button onClick={scrollToContact} className="btn-primary">
                    Kostenlosen Automations-Check sichern <ArrowRight size={18} />
                  </button>
                </motion.div>
                <motion.p className="text-xs mb-4" style={{ color: MUTED }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
                  Wir prüfen, welche Schritte rund um Ihre Termine heute noch manuell erledigt werden.
                </motion.p>
                <div className="hidden sm:block"><TrustLine /></div>
              </div>
              <motion.div className="w-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                <AutomationWorkflowVisual steps={workflowSteps} footerLabel="Terminprozess – von der Auswahl bis zur Nachbereitung" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ VERTRAUENSLEISTE ══ */}
        <section aria-label="Vorteile" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {['Buchung rund um die Uhr', 'Keine Doppelbuchungen', 'Automatische Bestätigungen', 'Erinnerungen ohne Mehraufwand', 'Kalender immer aktuell'].map((item) => (
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
                Terminvereinbarungen kosten oft mehr Zeit als der eigentliche Termin.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: BODY }}>
                Kunden rufen während der Arbeitszeit an. Niemand ist erreichbar. Eine E-Mail mit drei Terminvorschlägen geht raus. Zwei Tage später kommt eine Rückmeldung – einer der Vorschläge ist noch frei. Der Eintrag wird manuell in den Kalender getippt. Die Bestätigung wird per Hand geschrieben. Kurz vor dem Termin erinnert sich niemand, den Kunden rechtzeitig auf benötigte Unterlagen hinzuweisen.
              </p>
              <div className="rounded-xl px-5 py-4 border-l-4 mb-5" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold leading-snug" style={{ color: INK }}>
                  Jede dieser Abstimmungsrunden kostet Zeit – und kostet Ihnen manchmal den Termin, weil der Kunde in der Zwischenzeit woanders gebucht hat.
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
                Jeder zusätzliche Abstimmungsschritt belastet Kunden und Mitarbeiter gleichermaßen.
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'Anrufe werden verpasst', sub: 'Kunden, die nicht erreichbar sind, buchen woanders.' },
                  { label: 'Kalender stimmen nicht überein', sub: 'Doppelbuchungen entstehen durch manuelle Einträge.' },
                  { label: 'Termine werden vergessen', sub: 'Kein automatisches Erinnerungssystem.' },
                  { label: 'Benötigte Angaben fehlen beim Termin', sub: 'Mitarbeiter sind nicht vorbereitet.' },
                  { label: 'Umbuchungen verursachen Aufwand', sub: 'Mehrere Nachrichten, neuer Eintrag, neue Bestätigung.' },
                  { label: 'Nachbereitung bleibt liegen', sub: 'Bewertungsanfragen und Folgeaufgaben werden vergessen.' },
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
                  Ein klarer Buchungsprozess übernimmt die Koordination.
                </h2>
                <p className="text-base leading-relaxed mb-3" style={{ color: BODY }}>
                  Kunden wählen eine Leistung und einen verfügbaren Termin. Nach der Buchung werden Bestätigung, Kalendereintrag, Erinnerung und interne Benachrichtigung automatisch erstellt.
                </p>
                <p className="text-sm mb-6" style={{ color: MUTED }}>
                  Vor dem Termin können Formulare, Hinweise oder benötigte Dokumente automatisch versendet und eingesammelt werden.
                </p>
                <button onClick={scrollToContact} className="btn-primary">
                  Terminprozess besprechen <ArrowRight size={18} />
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
                So läuft eine automatisierte Terminbuchung ab
              </h2>
            </motion.div>
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }} aria-hidden />
              {[
                { step: '01', title: 'Leistung auswählen', desc: 'Der Kunde wählt die gewünschte Beratung, Behandlung oder Dienstleistung.' },
                { step: '02', title: 'Verfügbarkeit anzeigen', desc: 'Es werden nur tatsächlich verfügbare Termine angezeigt – keine manuell zu prüfenden Vorschläge.' },
                { step: '03', title: 'Termin buchen', desc: 'Der Kunde trägt Kontaktdaten ein und bestätigt die Buchung. Der Slot wird sofort reserviert.' },
                { step: '04', title: 'Kalender aktualisieren', desc: 'Der Termin wird in den angebundenen Kalendern aller Beteiligten eingetragen.' },
                { step: '05', title: 'Bestätigung versenden', desc: 'Kunde und zuständiger Mitarbeiter erhalten alle relevanten Informationen.' },
                { step: '06', title: 'Termin vorbereiten', desc: 'Formulare, Anfahrtsbeschreibung oder benötigte Unterlagen werden automatisch verschickt.' },
                { step: '07', title: 'Erinnern und nachbereiten', desc: 'Vor dem Termin wird erinnert. Nach dem Termin können Folgeaufgaben oder Bewertungsanfragen ausgelöst werden.' },
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
              Was rund um Ihre Termine automatisiert werden kann
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <CheckList items={[
                'Online-Buchung rund um die Uhr ermöglichen',
                'Kalender und Verfügbarkeiten synchronisieren',
                'Unterschiedliche Leistungen und Dauern berücksichtigen',
                'Mehrere Mitarbeiter oder Standorte abbilden',
                'Pufferzeiten automatisch einplanen',
                'Buchungsbestätigungen per E-Mail oder Nachricht versenden',
                'Erinnerungen zu frei wählbarem Zeitpunkt vor dem Termin',
                'Umbuchungen und Stornierungen durch Kunden ermöglichen',
                'Wartelisten einrichten und bei Absagen automatisch befüllen',
                'Kundendaten und Angaben vorab abfragen',
                'Benötigte Dokumente vor dem Termin anfordern',
                'Nachfassaktionen und Bewertungsanfragen automatisch starten',
              ]} />
            </div>
          </div>
        </section>

        {/* ══ ZWISCHEN-CTA ══ */}
        <section className="py-14" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <p className="text-lg font-heading font-semibold mb-4" style={{ color: INK }}>
              Wie viel Zeit kostet Ihre Terminorganisation jede Woche?
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
              Was sich durch automatisierte Terminbuchung verändert
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
                  'Terminabsprachen per Telefon und E-Mail',
                  'Wiederholte Rückfragen und Gegenfragen',
                  'Manuelle Kalendereinträge',
                  'Vergessene Bestätigungen',
                  'Fehlende Kundendaten beim Termin',
                  'Unnötige Leerlaufzeiten',
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
                  'Kunden buchen verfügbare Termine selbst',
                  'Kalender werden automatisch aktualisiert',
                  'Bestätigungen und Erinnerungen laufen automatisch',
                  'Benötigte Informationen werden vorab erfasst',
                  'Mitarbeiter werden rechtzeitig informiert',
                  'Gesamter Ablauf bleibt nachvollziehbar',
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
              Von der Analyse bis zur laufenden Terminautomatisierung
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { n: '01', title: 'Analyse Ihrer Terminprozesse', desc: 'Wir betrachten, wie Termine heute vereinbart werden, welche Schritte manuell sind und wo Fehler oder Lücken entstehen.' },
                { n: '02', title: 'Klares Ablaufkonzept', desc: 'Sie sehen, wie die Buchung startet, welche Schritte automatisch laufen und wann Ihr Team eingebunden wird.' },
                { n: '03', title: 'Systemverbindung', desc: 'Wir verbinden Kalender, Buchungsformular, CRM-System und interne Benachrichtigungskanäle.' },
                { n: '04', title: 'Umsetzung und Tests', desc: 'Schritte werden eingerichtet und mit verschiedenen Szenarien – Buchung, Umbuchung, Stornierung – geprüft.' },
                { n: '05', title: 'Einweisung Ihres Teams', desc: 'Ihr Team weiß, was automatisch passiert und wo es manuell eingreifen kann oder muss.' },
                { n: '06', title: 'Laufende Optimierung', desc: 'Nach dem Start können Zeiten, Erinnerungen und Formulare anhand der tatsächlichen Nutzung angepasst werden.' },
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
                { step: '01', title: 'Kostenloser Automations-Check', desc: 'Wir betrachten Ihren aktuellen Terminprozess und identifizieren die sinnvollsten Verbesserungsmöglichkeiten.' },
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
                Nicht jeder Schritt muss automatisch ablaufen. Buchungszeiten, Puffer und Leistungsangebote legen Sie fest. Das System handelt nach Ihren Regeln – und bei Ausnahmen können Mitarbeiter jederzeit manuell eingreifen.
              </p>
              <CheckList items={[
                'Welche Leistungen buchbar sind',
                'Zu welchen Zeiten Buchungen möglich sind',
                'Welche Vorlaufzeit vor einem Termin nötig ist',
                'Wer bei welchen Buchungsarten informiert wird',
                'Welche Daten vorab abgefragt werden',
                'Was bei einer Absage oder Umbuchung passiert',
              ]} className="mb-6" />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  So entsteht kein unkontrollierbares System, sondern ein klarer und nachvollziehbarer Buchungsprozess.
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
                Für welche Unternehmen lohnt sich automatisierte Terminbuchung?
              </motion.h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: BODY }}>
                Sinnvoll für alle, die regelmäßig Termine vergeben und dafür heute noch mehrere manuelle Schritte erledigen.
              </p>
              <CheckList items={[
                'Praxen, Therapeuten, Gesundheitsdienstleister',
                'Friseure, Kosmetikstudios, Massagepraxen',
                'Beratungsunternehmen und Coaches',
                'Werkstätten und Handwerksbetriebe mit Terminpflicht',
                'Restaurants und Veranstaltungsorte',
                'Unternehmen mit mehreren Standorten und Mitarbeitern',
              ]} className="mb-6" />
              <p className="text-sm" style={{ color: MUTED }}>
                Entscheidend ist, wie viele Termine pro Woche vereinbart werden und wie viel Zeit die Koordination heute kostet.
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
                { title: 'Leadgenerierung automatisieren', desc: 'Interessenten strukturiert erfassen und qualifizieren – damit Ihr Kalender nur mit passenden Kunden gefüllt wird.', href: '/automatisierungen/leadgenerierung' },
                { title: 'E-Mail-Automatisierung', desc: 'Eingehende Terminanfragen per E-Mail automatisch einordnen und weiterleiten.', href: '/automatisierungen/email-automatisierung' },
                { title: 'KI-Telefonassistenten', desc: 'Telefonische Terminwünsche aufnehmen und direkt in den Buchungsprozess einbinden.', href: '/telefonassistenten' },
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
              {isRegional ? `Häufige Fragen zur automatisierten Terminbuchung in ${regionName}` : 'Häufige Fragen'}
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
                  Automatisierte Terminbuchung für Unternehmen in {regionName}
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
                Wie viel Zeit kostet Ihre Terminorganisation jede Woche?
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

        <ContactForm service="automatisierungen" heading="Kostenlosen Automations-Check sichern" subheading="Wir analysieren Ihren Terminprozess und zeigen, wo Automatisierung den größten Unterschied macht." />
        <GoogleMapsSection />
        <StickyCtaBar ctaLabel="Automations-Check sichern" />
      </div>
    </>
  );
}
