'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Target,
  FileText,
  Layers,
  ListChecks,
  Settings2,
  Zap,
  LayoutGrid,
  Link2,
  ShieldCheck,
  Eye,
  Expand,
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
import Accordion from '../../components/Accordion';
import CrmCustomerFileVisual from '../../components/CrmCustomerFileVisual';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

/* ─── Design Tokens ─────────────────────────────────────────────────────────── */
const INK     = '#0C1210';
const BODY    = '#404B48';
const MUTED   = '#68746F';
const PETROL  = '#0E7C72';
const BORDER  = '#E4E9E7';
const SURFACE = '#F3F5F4';
const PAPER   = '#FAFAF9';

/* ─── Props ──────────────────────────────────────────────────────────────────── */
interface CrmSystemeProps {
  regionSlug?: string;
  regionName?: string;
}

/* ─── Data ───────────────────────────────────────────────────────────────────── */
const FUNKTIONSBEREICHE = [
  {
    icon: Users,
    title: 'Kunden und Kontakte',
    description:
      'Alle Kontaktdaten, Gespräche, Dokumente, Termine und Vorgänge zentral verwalten.',
  },
  {
    icon: Target,
    title: 'Anfragen und Leads',
    description:
      'Neue Anfragen erfassen, qualifizieren, zuweisen und bis zum Abschluss verfolgen.',
  },
  {
    icon: FileText,
    title: 'Angebote und Aufträge',
    description:
      'Angebote, Status, Aufträge, Fristen und nächste Schritte übersichtlich steuern.',
  },
  {
    icon: Layers,
    title: 'Projekte und Vorgänge',
    description:
      'Projektstände, Zuständigkeiten, Dateien, Notizen und Termine nachvollziehbar abbilden.',
  },
  {
    icon: ListChecks,
    title: 'Aufgaben und Termine',
    description:
      'Wiedervorlagen, Erinnerungen und Aufgaben zentral planen und automatisch verteilen.',
  },
  {
    icon: Settings2,
    title: 'Individuelle Prozesse',
    description:
      'Auch Abläufe außerhalb des klassischen Vertriebs können digital abgebildet werden.',
  },
];

const EINSATZBEREICHE = [
  'Projektmanagement',
  'Angebotsverwaltung',
  'Auftragsverwaltung',
  'Einsatzplanung',
  'Terminplanung',
  'Immobilienverwaltung',
  'Mitgliederverwaltung',
  'Bewerbermanagement',
  'Reklamationsbearbeitung',
  'Wartungsprozesse',
  'Dokumentenverwaltung',
  'Interne Freigaben',
];

const VORHER = [
  'Daten in Excel, E-Mails und Notizen',
  'Manuelle Wiedervorlagen',
  'Unklare Zuständigkeiten',
  'Unterschiedliche Informationsstände',
  'Wenig Transparenz über laufende Vorgänge',
];

const NACHHER = [
  'Alle wichtigen Informationen an einem Ort',
  'Klare Status und Verantwortlichkeiten',
  'Automatische Erinnerungen',
  'Nachvollziehbare Prozesse',
  'Individuelle Ansichten für unterschiedliche Mitarbeiter',
];

const VORTEILE = [
  {
    icon: LayoutGrid,
    title: 'Genau passende Funktionen',
    description:
      'Keine überladene Software mit Funktionen, die niemand nutzt.',
  },
  {
    icon: Zap,
    title: 'Weniger manuelle Arbeit',
    description:
      'Wiederkehrende Aufgaben und Datenübertragungen können automatisiert werden.',
  },
  {
    icon: Eye,
    title: 'Mehr Überblick',
    description:
      'Kunden, Projekte, Aufgaben und Vorgänge bleiben jederzeit nachvollziehbar.',
  },
  {
    icon: Users,
    title: 'Bessere Zusammenarbeit',
    description:
      'Alle Mitarbeiter arbeiten mit denselben aktuellen Informationen.',
  },
  {
    icon: Expand,
    title: 'Flexibel erweiterbar',
    description:
      'Neue Funktionen und Prozesse können später ergänzt werden.',
  },
  {
    icon: Link2,
    title: 'Bestehende Systeme anbinden',
    description:
      'E-Mail, Kalender, Formulare und vorhandene Software können integriert werden.',
  },
];

const STANDARD_PUNKTE = [
  'Allgemeine Prozesse',
  'Unnötige Funktionen',
  'Starre Benutzeroberflächen',
  'Anpassung der Mitarbeiter an die Software',
  'Wichtige Sonderfälle fehlen',
];

const INDIVIDUELL_PUNKTE = [
  'Auf interne Abläufe zugeschnitten',
  'Nur relevante Funktionen',
  'Individuelle Ansichten und Rollen',
  'Vorhandene Systeme integrierbar',
  'Langfristig erweiterbar',
];

const ANWENDUNGSBEISPIELE = [
  {
    title: 'Handwerksbetrieb',
    description:
      'Anfragen, Besichtigungen, Angebote, Aufträge, Termine und Projektdokumente zentral verwalten.',
    href: '/crm-systeme/crm-fuer-handwerker',
  },
  {
    title: 'Dienstleistungsunternehmen',
    description:
      'Leads, Kundengespräche, Verträge, Projekte und Follow-ups strukturiert abbilden.',
    href: '/crm-systeme/crm-fuer-dienstleister',
  },
  {
    title: 'Immobilienverwaltung',
    description:
      'Objekte, Eigentümer, Mieter, Schäden, Dokumente und offene Vorgänge organisieren.',
    href: '/crm-systeme/crm-fuer-vermietung',
  },
  {
    title: 'Interne Unternehmensprozesse',
    description:
      'Anträge, Freigaben, Aufgaben, Dokumente und Zuständigkeiten digital steuern.',
    href: null,
  },
];

const ABLAUF_SCHRITTE = [
  {
    step: '01',
    title: 'Analyse',
    description: 'Wir besprechen Ihre Abläufe, Probleme und Anforderungen.',
  },
  {
    step: '02',
    title: 'Konzeption',
    description: 'Wir planen Struktur, Ansichten, Rollen und Funktionen.',
  },
  {
    step: '03',
    title: 'Entwicklung',
    description:
      'Das System wird individuell umgesetzt und mit vorhandenen Tools verbunden.',
  },
  {
    step: '04',
    title: 'Einführung',
    description:
      'Daten, Nutzer und Prozesse werden sauber in das neue System überführt.',
  },
  {
    step: '05',
    title: 'Betreuung',
    description: 'Das System kann laufend optimiert und erweitert werden.',
  },
];

const INTEGRATIONEN = [
  'E-Mail',
  'Kalender',
  'Website-Formulare',
  'Telefonassistenten',
  'Chatbots',
  'Buchungssysteme',
  'Bestehende CRM- oder ERP-Systeme',
  'Dokumentenspeicher',
  'Schnittstellen und APIs',
];

const BASE_FAQS = [
  {
    question: 'Was kostet ein individuelles CRM-System?',
    answer:
      'Die Kosten hängen von Funktionen, Nutzerzahl, Integrationen und Umfang ab. Nach der Analyse erhalten Sie ein transparentes Angebot.',
  },
  {
    question: 'Wie lange dauert die Entwicklung?',
    answer:
      'Kleinere Systeme können innerhalb weniger Wochen umgesetzt werden. Umfangreichere Lösungen benötigen entsprechend mehr Zeit.',
  },
  {
    question: 'Können bestehende Daten übernommen werden?',
    answer:
      'In vielen Fällen können Daten aus Excel, Formularen oder vorhandenen Systemen übernommen werden. Die genaue Vorgehensweise prüfen wir vor Projektstart.',
  },
  {
    question: 'Müssen wir unsere bisherigen Programme ersetzen?',
    answer:
      'Nicht zwingend. Bestehende Systeme können häufig angebunden oder schrittweise ersetzt werden.',
  },
  {
    question: 'Kann das System später erweitert werden?',
    answer:
      'Ja. Das System wird so geplant, dass zusätzliche Funktionen, Nutzer und Prozesse ergänzt werden können.',
  },
  {
    question: 'Ist ein individuelles CRM nur für große Unternehmen sinnvoll?',
    answer:
      'Nein. Auch kleinere Unternehmen profitieren, wenn Informationen verteilt sind oder Standardsoftware die tatsächlichen Abläufe nicht sinnvoll abbildet.',
  },
];

const TRUST_CHIPS = [
  'Individuell entwickelt',
  'Erweiterbar',
  'Bestehende Systeme integrierbar',
];

/* ─── Component ──────────────────────────────────────────────────────────────── */
const CrmSysteme: React.FC<CrmSystemeProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/crm-systeme`
    : `${baseUrl}/crm-systeme`;

  const regionContent = isRegional
    ? getRegionServiceContent(
        regionSlug as LeistungsgebietSlug,
        regionName,
        'crm-systeme',
        'CRM-Systeme',
      )
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

  const allFaqs = [
    ...BASE_FAQS,
    ...(regionContent?.faqs?.map((f) => ({ question: f.q, answer: f.a })) ?? []),
  ];

  return (
    <>
      {/* ── Schema ─────────────────────────────────────────────────────────── */}
      <LocalBusinessSchema
        pageType="service"
        customDescription={
          isRegional
            ? `Individuelle CRM-Systeme und Unternehmenssoftware für Unternehmen in ${regionName}. Pixel Kraftwerk entwickelt maßgeschneiderte Softwarelösungen für Kunden, Projekte, Aufträge und interne Abläufe.`
            : 'Individuelle CRM-Systeme und Unternehmenssoftware. Pixel Kraftwerk entwickelt maßgeschneiderte Softwarelösungen für Kundenverwaltung, Lead-Management und Prozessdigitalisierung.'
        }
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
        name={isRegional ? `Individuelles CRM-System ${regionName}` : 'Individuelles CRM-System'}
        serviceType="Individuelle CRM-Systeme & Unternehmenssoftware"
        description={
          isRegional
            ? `Individuelle CRM-Systeme und Unternehmenssoftware für Unternehmen in ${regionName}. Kundenverwaltung, Lead-Management und Prozessdigitalisierung – maßgeschneidert.`
            : 'Individuelle CRM-Systeme und Unternehmenssoftware für Kunden, Projekte, Aufträge, Termine und interne Abläufe. Pixel Kraftwerk entwickelt Software, die sich an Ihre Prozesse anpasst.'
        }
        url={currentPageUrl}
        areaServed={isRegional ? [regionName!] : undefined}
        faqs={allFaqs.map((f) => ({ question: f.question, answer: f.answer }))}
        pageName="CRM-Systeme"
      />

      <div style={{ background: PAPER }}>
        {/* ── HERO ───────────────────────────────────────────────────────────── */}
        <section
          id="crm-systeme"
          className="relative pt-16 md:pt-20 pb-16 md:pb-20"
          style={{ background: PAPER }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <BreadcrumbNav items={breadcrumbItems} />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
              {/* Left column: copy */}
              <div>
                {/* H1 – Category + City (SEO-Schema) */}
                <motion.h1
                  className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3"
                  style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  CRM-Agentur Groitzsch & Leipzig
                </motion.h1>

                {/* H2 – Benefit subheadline */}
                <motion.h2
                  className="font-heading font-bold tracking-tight mb-4 leading-[1.08] max-w-xl"
                  style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                >
                  Kein Lead geht mehr verloren – jede Anfrage landet automatisch am richtigen Ort.
                </motion.h2>

                {/* H3 – Agitation / SEO keyword line */}
                <motion.h3
                  className="text-base md:text-lg font-semibold leading-snug mb-4 max-w-xl"
                  style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38 }}
                >
                  Beenden Sie das tägliche Durcheinander aus Excel-Listen, E-Mails, Notizen und unpassender Standardsoftware.
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-base md:text-lg max-w-xl mb-6 leading-relaxed"
                  style={{ color: BODY }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.44 }}
                >
                  Wir entwickeln individuelle CRM-Systeme und Unternehmenssoftware, die Kunden, Vorgänge und interne Abläufe zentral zusammenführen – exakt passend zu Ihrem Unternehmen.
                </motion.p>

                {/* Trust chips */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  aria-label="Leistungsmerkmale"
                >
                  {TRUST_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: SURFACE, color: MUTED, border: `1px solid ${BORDER}` }}
                    >
                      {chip}
                    </span>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.58 }}
                >
                  <button onClick={scrollToContact} className="btn-primary">
                    Individuelles CRM planen
                    <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="btn-secondary"
                  >
                    Kostenloses Erstgespräch sichern
                  </button>
                </motion.div>

                <div className="hidden sm:block mt-5">
                  <TrustLine />
                </div>
              </div>

              {/* Right column: hero visual */}
              <motion.div
                className="hidden lg:flex items-center justify-center py-8 px-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.65 }}
                aria-hidden
              >
                <CrmCustomerFileVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── VERTRAUENSLEISTE ───────────────────────────────────────────────── */}
        <section
          className="py-5 border-y"
          style={{ background: SURFACE, borderColor: BORDER }}
          aria-label="Leistungsmerkmale"
        >
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[
                'Individuell entwickelt',
                'Erweiterbar',
                'Bestehende Systeme integrierbar',
                'Keine Standardlösung von der Stange',
                'Auf Ihre Prozesse zugeschnitten',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: BODY }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7.5l3 3 6-6" stroke={PETROL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── PROBLEMSEKTION ──────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-5"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ihre Daten sind vorhanden. Der Überblick fehlt.
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed mb-5"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                viewport={{ once: true }}
              >
                Kundenanfragen liegen im E-Mail-Postfach. Angebote werden in Word erstellt. Aufgaben stehen in Notizen. Kundendaten werden in Excel gepflegt – und wichtige Informationen befinden sich häufig nur in den Köpfen einzelner Mitarbeiter.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                viewport={{ once: true }}
              >
                {[
                  'Informationen werden mehrfach gepflegt',
                  'Rückmeldungen und Follow-ups werden vergessen',
                  'Zuständigkeiten sind unklar',
                  'Mitarbeiter arbeiten mit unterschiedlichen Datenständen',
                  'Vorgänge lassen sich nur schwer nachvollziehen',
                  'Standardsoftware passt nicht zu den tatsächlichen Abläufen',
                ].map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4"
                    style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 4px rgba(12,18,16,0.05)' }}
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(239,68,68,0.07)' }}
                      aria-hidden
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2.5 5h5" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: BODY }}>
                      {point}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── AGITATION ──────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: PAPER }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-5"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Je mehr Ihr Unternehmen wächst, desto größer wird das Chaos.
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed mb-7"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                viewport={{ once: true }}
              >
                Was bei wenigen Kunden noch irgendwie funktioniert, kostet mit wachsender Auslastung immer mehr Zeit. Fehlende Informationen führen zu Rückfragen. Vergessene Wiedervorlagen kosten Chancen. Unklare Prozesse verursachen Fehler.
              </motion.p>

              {/* Callout */}
              <motion.div
                className="rounded-2xl px-6 py-5"
                style={{
                  borderLeft: `4px solid ${PETROL}`,
                  background: `rgba(14,124,114,0.05)`,
                  border: `1px solid rgba(14,124,114,0.18)`,
                  borderLeftWidth: '4px',
                }}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                viewport={{ once: true }}
              >
                <p className="text-base font-semibold leading-snug" style={{ color: INK }}>
                  Noch eine weitere Standardsoftware löst das Problem häufig nicht – weil sich Ihr Unternehmen erneut an das Programm anpassen muss.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── LÖSUNGSSEKTION ──────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-5"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Wir entwickeln das System, das Ihr Unternehmen wirklich braucht.
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed mb-7"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                viewport={{ once: true }}
              >
                Wir analysieren Ihre tatsächlichen Abläufe und entwickeln daraus eine individuelle Softwarelösung. Sie erhalten genau die Funktionen, Ansichten und Automatisierungen, die im Alltag benötigt werden – ohne unnötige Menüs und komplizierte Umwege.
              </motion.p>

              <motion.div
                className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl"
                style={{ background: `rgba(14,124,114,0.07)`, border: `1px solid rgba(14,124,114,0.20)` }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <ShieldCheck size={20} style={{ color: PETROL, flexShrink: 0 }} aria-hidden />
                <span className="text-base font-semibold" style={{ color: PETROL }}>
                  Ihre Prozesse bestimmen die Software. Nicht umgekehrt.
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FUNKTIONSBEREICHE ───────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: PAPER }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Was Ihr individuelles CRM-System abbilden kann
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {FUNKTIONSBEREICHE.map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl p-6"
                    style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 6px rgba(12,18,16,0.07)' }}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `rgba(14,124,114,0.09)` }}
                      aria-hidden
                    >
                      <item.icon size={20} style={{ color: PETROL }} />
                    </div>
                    <h3 className="font-heading font-bold text-base mb-2" style={{ color: INK }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NICHT NUR VERTRIEBS-CRM ─────────────────────────────────────────── */}
        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Nicht nur für Vertrieb und Kundenverwaltung
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed mb-8"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                viewport={{ once: true }}
              >
                Ein individuelles CRM-System kann viele wiederkehrende Unternehmensprozesse zentral abbilden.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-7"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                viewport={{ once: true }}
              >
                {EINSATZBEREICHE.map((bereich) => (
                  <span
                    key={bereich}
                    className="text-sm font-medium px-3 py-1.5 rounded-full"
                    style={{ background: PAPER, color: BODY, border: `1px solid ${BORDER}` }}
                  >
                    {bereich}
                  </span>
                ))}
              </motion.div>

              <motion.p
                className="text-sm italic"
                style={{ color: MUTED }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Welche Bereiche sinnvoll sind, hängt von den tatsächlichen Abläufen Ihres Unternehmens ab.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── VORHER / NACHHER ────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: PAPER }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-10 text-center"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Von verteilten Informationen zu klaren Abläufen
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vorher */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{ background: '#FEF2F2', border: '1px solid rgba(239,68,68,0.20)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'rgba(239,68,68,0.12)', color: '#B91C1C' }}
                      aria-hidden
                    >
                      ✕
                    </span>
                    <span className="font-heading font-bold text-base" style={{ color: '#B91C1C' }}>
                      Bisher
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {VORHER.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: BODY }}>
                        <div
                          className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: 'rgba(239,68,68,0.10)' }}
                          aria-hidden
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                            <path d="M1.5 4h5" stroke="#B91C1C" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Nachher */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{ background: 'rgba(14,124,114,0.05)', border: '1px solid rgba(14,124,114,0.20)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'rgba(14,124,114,0.14)', color: PETROL }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="font-heading font-bold text-base" style={{ color: PETROL }}>
                      Mit individuellem CRM
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {NACHHER.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: BODY }}>
                        <div
                          className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: 'rgba(14,124,114,0.12)' }}
                          aria-hidden
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                            <path d="M1 4.5l2 2L7 1.5" stroke={PETROL} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VORTEILE ────────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-10 text-center"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Eine Software, die für Sie arbeitet
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {VORTEILE.map((v, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl p-6"
                    style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 6px rgba(12,18,16,0.07)' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `rgba(14,124,114,0.09)` }}
                      aria-hidden
                    >
                      <v.icon size={20} style={{ color: PETROL }} />
                    </div>
                    <h3 className="font-heading font-bold text-base mb-2" style={{ color: INK }}>
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                      {v.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STANDARD-SOFTWARE VS. INDIVIDUELLES CRM ──────────────────────────── */}
        <section className="py-20" style={{ background: PAPER }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-10 text-center"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Warum kein gewöhnliches CRM von der Stange?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Standard */}
                <motion.div
                  className="rounded-2xl p-6 bg-white"
                  style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 4px rgba(12,18,16,0.05)' }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.04 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(239,68,68,0.08)', color: '#B91C1C' }}
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6h7" stroke="#B91C1C" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="font-heading font-bold text-base" style={{ color: INK }}>
                      Standardsoftware
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {STANDARD_PUNKTE.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: BODY }}>
                        <div
                          className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: 'rgba(239,68,68,0.08)' }}
                          aria-hidden
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                            <path d="M1.5 4h5" stroke="#B91C1C" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Individuell */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{
                    background: 'rgba(14,124,114,0.04)',
                    border: `1px solid rgba(14,124,114,0.22)`,
                    boxShadow: '0 1px 4px rgba(14,124,114,0.06)',
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(14,124,114,0.12)', color: PETROL }}
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6.5l3 3 5-6" stroke={PETROL} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-heading font-bold text-base" style={{ color: PETROL }}>
                      Individuelles CRM
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {INDIVIDUELL_PUNKTE.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: BODY }}>
                        <div
                          className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: 'rgba(14,124,114,0.10)' }}
                          aria-hidden
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                            <path d="M1 4.5l2 2L7 1.5" stroke={PETROL} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANWENDUNGSBEISPIELE ──────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                So kann Ihre individuelle Software eingesetzt werden
              </motion.h2>
              <motion.p
                className="text-base text-center mb-10 max-w-2xl mx-auto"
                style={{ color: MUTED }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                viewport={{ once: true }}
              >
                Diese Beispiele dienen zur Orientierung. Sie zeigen mögliche Einsatzbereiche – keine konkreten Kundenprojekte.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ANWENDUNGSBEISPIELE.map((bsp, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl p-6 flex flex-col"
                    style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 6px rgba(12,18,16,0.07)' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-heading font-bold text-base mb-2" style={{ color: INK }}>
                      {bsp.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: BODY }}>
                      {bsp.description}
                    </p>
                    {bsp.href && (
                      <a
                        href={
                          isRegional
                            ? `/leistungsgebiete/${regionSlug}/crm-systeme/${bsp.href.split('/').pop()}`
                            : bsp.href
                        }
                        className="text-sm font-semibold inline-flex items-center gap-1"
                        style={{ color: PETROL }}
                        aria-label={`Mehr zu: ${bsp.title}`}
                      >
                        Mehr erfahren
                        <ArrowRight size={13} aria-hidden />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABLAUF ──────────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: PAPER }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-10"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                So entsteht Ihr individuelles CRM-System
              </motion.h2>

              <div className="space-y-4">
                {ABLAUF_SCHRITTE.map((s, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 bg-white rounded-2xl p-5"
                    style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 4px rgba(12,18,16,0.05)' }}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl"
                      style={{ background: `rgba(14,124,114,0.08)`, border: `1px solid rgba(14,124,114,0.18)` }}
                      aria-hidden
                    >
                      <span className="font-heading font-bold text-sm" style={{ color: PETROL }}>
                        {s.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base mb-1" style={{ color: INK }}>
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONEN ────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ihre bestehenden Systeme müssen nicht ersetzt werden
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed mb-8"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                viewport={{ once: true }}
              >
                Das individuelle CRM kann bestehende Programme sinnvoll ergänzen und Daten zentral zusammenführen. Mögliche Anbindungen:
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                viewport={{ once: true }}
              >
                {INTEGRATIONEN.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium px-3 py-1.5 rounded-full"
                    style={{ background: PAPER, color: BODY, border: `1px solid ${BORDER}` }}
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* Internal links */}
              <motion.p
                className="text-sm"
                style={{ color: MUTED }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Mehr zu passenden Erweiterungen:{' '}
                <a href="/automatisierungen" style={{ color: PETROL }} className="hover:underline font-medium">
                  Prozessautomatisierungen
                </a>
                {', '}
                <a href="/ki-chatbots" style={{ color: PETROL }} className="hover:underline font-medium">
                  KI-Chatbots
                </a>
                {' und '}
                <a href="/telefonassistenten" style={{ color: PETROL }} className="hover:underline font-medium">
                  Telefonassistenten
                </a>
                .
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── REGIONALE INHALTE ────────────────────────────────────────────────── */}
        {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
          <section className="py-16" style={{ background: PAPER }}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <motion.h2
                  className="text-2xl md:text-3xl font-heading font-bold mb-6"
                  style={{ color: INK }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Individuelle CRM-Systeme für Unternehmen in {regionName}
                </motion.h2>
                {regionContent.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    className="text-lg leading-relaxed mb-5"
                    style={{ color: BODY }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
        <section id="faq" className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-8"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Häufige Fragen zum individuellen CRM{isRegional ? ` in ${regionName}` : ''}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                viewport={{ once: true }}
              >
                <Accordion items={allFaqs} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ABSCHLUSS-CTA ────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: PAPER }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ihre Abläufe passen in keine Standardsoftware?
              </motion.h2>
              <motion.p
                className="text-lg mb-8 max-w-xl mx-auto leading-relaxed"
                style={{ color: BODY }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                viewport={{ once: true }}
              >
                Dann entwickeln wir ein System, das zu Ihrem Unternehmen passt. Im kostenlosen Erstgespräch analysieren wir, welche Prozesse zentralisiert, vereinfacht oder automatisiert werden können.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 }}
                viewport={{ once: true }}
              >
                <button onClick={scrollToContact} className="btn-primary">
                  Individuelles CRM besprechen
                  <ArrowRight size={18} />
                </button>
                <button onClick={scrollToContact} className="btn-secondary">
                  Kostenloses Erstgespräch sichern
                </button>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-x-6 gap-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {['Kostenlos und unverbindlich', 'Persönliche Beratung', 'Rückmeldung innerhalb von 24 Stunden'].map(
                  (chip) => (
                    <span key={chip} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: PETROL }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6.5l3 3 5-5.5" stroke={PETROL} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {chip}
                    </span>
                  ),
                )}
              </motion.div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a href="/automatisierungen" style={{ color: PETROL }} className="hover:underline">
                  Prozessautomatisierungen
                </a>
                <a href="/ki-chatbots" style={{ color: PETROL }} className="hover:underline">
                  KI-Chatbots
                </a>
                <a href="/telefonassistenten" style={{ color: PETROL }} className="hover:underline">
                  Telefonassistenten
                </a>
                <a href="/individuelle-softwareloesungen" style={{ color: PETROL }} className="hover:underline">
                  Individuelle Software
                </a>
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

        {/* ── REGION LINKS ─────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {isRegional ? (
                <div className="text-left max-w-2xl mx-auto">
                  <h3 className="text-xl font-heading font-bold mb-4" style={{ color: INK }}>
                    Weitere Leistungen in {regionName}
                  </h3>
                  <p className="mb-3" style={{ color: BODY }}>
                    <a href={regionUrl} className="hover:underline font-heading font-bold" style={{ color: PETROL }}>
                      Alle Leistungen in {regionName}
                    </a>{' '}
                    – Übersicht unserer Angebote in Ihrer Region.
                  </p>
                  <p className="mb-6" style={{ color: BODY }}>
                    <a href="/crm-systeme" className="hover:underline" style={{ color: PETROL }}>
                      Mehr zu individuellen CRM-Systemen im Überblick
                    </a>{' '}
                    – alle Details auf unserer Service-Seite.
                  </p>
                  <p className="text-sm mb-3" style={{ color: MUTED }}>
                    Individuelle CRM-Systeme in anderen Gebieten:
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {otherRegions.map((city, i) => (
                      <li key={city.slug}>
                        <a
                          href={`/leistungsgebiete/${city.slug}/crm-systeme`}
                          className="hover:underline"
                          style={{ color: PETROL }}
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
                  <RegionServiceLinksBlock serviceSlug="crm-systeme" title="Individuelles CRM in Ihrem Gebiet" />
                </>
              )}
            </div>
          </div>
        </section>

        <ContactForm
          service="crm-systeme"
          heading="Individuelles CRM besprechen"
          subheading="Wir analysieren Ihre Abläufe und zeigen, welche Prozesse sich sinnvoll digitalisieren lassen."
        />
        <GoogleMapsSection />
      </div>

      <StickyCtaBar ctaLabel="Kostenloses Erstgespräch sichern" />
    </>
  );
};

export default CrmSysteme;
export type { CrmSystemeProps };
