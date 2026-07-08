'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  AlertTriangle,
  Shield,
  Smartphone,
  Search,
  LayoutGrid,
  FileText,
  Palette,
  Code2,
  Link2,
  MousePointerClick,
  Award,
  Plug,
  Building2,
  Wrench,
  Briefcase,
  Stethoscope,
  UtensilsCrossed,
  TrendingUp,
} from 'lucide-react';

import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import BreadcrumbSchemaRegionService from '../../components/BreadcrumbSchemaRegionService';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TrustLine from '../../components/TrustLine';
import StickyCtaBar from '../../components/StickyCtaBar';
import ServiceJsonLd from '../../components/ServiceJsonLd';
import CheckList from '../../components/ui/CheckList';
import Accordion from '../../components/Accordion';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

// ─── Design-Tokens (identisch mit /automatisierungen) ───────────────────────
const INK = '#0C1210';
const BODY = '#404B48';
const MUTED = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const SURFACE = '#F3F5F4';
const PAPER = '#FAFAF9';

interface WebsiteProps {
  regionSlug?: string;
  regionName?: string;
}

const faqs = [
  {
    question: 'Was kostet eine professionelle Website?',
    answer: 'Die Kosten hängen vom Umfang, der Anzahl der Seiten, den benötigten Funktionen und den vorhandenen Inhalten ab. Nach dem Erstgespräch erhalten Sie ein Angebot passend zu Ihrem Projekt.',
  },
  {
    question: 'Wie lange dauert die Erstellung?',
    answer: 'Die Projektdauer hängt vom Umfang, den benötigten Inhalten und den Abstimmungen ab. Vor dem Projektstart erhalten Sie einen nachvollziehbaren Zeitrahmen.',
  },
  {
    question: 'Werden die Texte ebenfalls erstellt?',
    answer: 'Ja. Auf Wunsch entwickeln und überarbeiten wir die Seitenstruktur und die benötigten Texte, damit das Angebot verständlich und überzeugend dargestellt wird.',
  },
  {
    question: 'Ist die Website für Smartphones optimiert?',
    answer: 'Ja. Die Darstellung und Nutzerführung werden für Smartphone, Tablet und Desktop entwickelt.',
  },
  {
    question: 'Ist Suchmaschinenoptimierung enthalten?',
    answer: 'Die Website erhält eine saubere technische und inhaltliche SEO-Grundlage. Weiterführende laufende SEO-Maßnahmen können abhängig von Ziel und Wettbewerb zusätzlich sinnvoll sein.',
  },
  {
    question: 'Können bestehende Inhalte übernommen werden?',
    answer: 'Ja. Vorhandene Texte, Bilder und Strukturen werden geprüft und dort übernommen, wo sie weiterhin sinnvoll und hochwertig sind.',
  },
  {
    question: 'Können Kontaktformulare oder Terminbuchungen integriert werden?',
    answer: 'Ja. Je nach Projekt können Formulare, Kalender, Buchungssysteme und weitere Kontaktwege eingebunden werden.',
  },
  {
    question: 'Kann meine bestehende Website überarbeitet werden?',
    answer: 'Ja. Zunächst wird geprüft, ob eine gezielte Überarbeitung sinnvoll ist oder ob eine neue technische und inhaltliche Grundlage langfristig die bessere Lösung darstellt.',
  },
  {
    question: 'Kann die Website später erweitert werden?',
    answer: 'Die Website kann so geplant werden, dass zusätzliche Leistungen, Standorte, Inhalte oder Funktionen später ergänzt werden können.',
  },
  {
    question: 'Gibt es ein Mietmodell?',
    answer: 'Der Schwerpunkt dieser Leistung liegt auf individuell geplanten Website-Projekten. Umfang, Umsetzung und mögliche spätere Betreuung werden passend zum jeweiligen Projekt vereinbart.',
  },
];

const Website: React.FC<WebsiteProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/webseiten`
    : `${baseUrl}/webseite`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'webseiten', 'Webseiten')
    : null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        { label: regionName, href: regionUrl },
        { label: 'Webseiten' },
      ]
    : [
        { label: 'Startseite', href: '/' },
        { label: 'Leistungen', href: '/leistungen' },
        { label: 'Webseiten' },
      ];

  return (
    <>
      <div style={{ background: PAPER }}>
        {/* ── Schema ─────────────────────────────────────────────────────── */}
        <LocalBusinessSchema
          pageType="service"
          customDescription={isRegional
            ? `Professionelle Webseiten für Unternehmen in ${regionName}. Individuelles Design, mobile Optimierung und SEO-freundliche Grundlage – von Pixel Kraftwerk aus Groitzsch.`
            : 'Professionelle Unternehmenswebseiten mit klarer Nutzerführung, individuellem Design, mobiler Optimierung und SEO-freundlicher Grundlage. Von Pixel Kraftwerk aus Groitzsch.'}
        />
        {isRegional ? (
          <BreadcrumbSchemaRegionService
            regionName={regionName!}
            regionUrl={`/leistungsgebiete/${regionSlug}`}
            serviceName="Webseiten"
            serviceUrl={`/leistungsgebiete/${regionSlug}/webseiten`}
          />
        ) : (
          <BreadcrumbSchema serviceName="Webseiten" serviceUrl={`${baseUrl}/webseite`} />
        )}
        <ServiceJsonLd
          name={isRegional ? `Webseiten für Unternehmen in ${regionName}` : 'Professionelle Webseiten für Unternehmen'}
          serviceType="WebDesign"
          description="Moderne Unternehmenswebseiten mit klarer Nutzerführung, individuellem Design, mobiler Optimierung und SEO-freundlicher Grundlage."
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          pageName="Professionelle Webseiten für Unternehmen"
        />

        {/* ══════════════════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="webseiten-fuer-unternehmen"
          className="relative min-h-[100dvh] md:min-h-screen flex flex-col"
          style={{ background: PAPER }}
        >
          {/* Vollbild-Hintergrundbild */}
          <div className="absolute inset-0">
            <Image
              src="/images/webseiten-hero-mockup-laptop-handy.png"
              alt="Professionelle Unternehmenswebseite auf Laptop und Smartphone – responsives Webdesign von Pixel Kraftwerk"
              fill
              className="object-cover"
              style={{ objectPosition: '70% center' }}
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(95deg, rgba(250,250,249,0.98) 0%, rgba(250,250,249,0.94) 32%, rgba(250,250,249,0.55) 52%, rgba(250,250,249,0.05) 70%, rgba(250,250,249,0.0) 82%)' }}
              aria-hidden
            />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>

          <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10 pb-10">
            <div className="max-w-xl lg:max-w-2xl">
              {/* H1 – SEO-Kicker */}
              <motion.h1
                className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3"
                style={{ color: PETROL }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {isRegional
                  ? `Moderne Webseiten für Unternehmen in ${regionName}`
                  : 'Moderne Webseiten für Unternehmen – Groitzsch & Leipzig'}
              </motion.h1>

              {/* H2 – visuelle Headline */}
              <motion.h2
                className="font-heading font-bold tracking-tight mb-3 leading-[1.08]"
                style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                {regionContent?.localHook || 'Ihre Website sollte nicht nur gut aussehen. Sie sollte Kunden überzeugen.'}
              </motion.h2>

              {/* H3 – Keywords, sr-only auf Mobile */}
              <motion.h3
                className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-3 leading-snug"
                style={{ color: PETROL }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Professionelle Website, modernes Webdesign oder Unternehmenswebsite erstellen lassen
              </motion.h3>

              <motion.p
                className="text-base md:text-lg max-w-xl mb-2 leading-relaxed"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Wir entwickeln moderne Unternehmenswebseiten, die Ihr Angebot verständlich präsentieren, Vertrauen aufbauen und Besucher gezielt zur Kontaktaufnahme führen.
              </motion.p>

              <motion.p
                className="text-sm md:text-base max-w-xl mb-5 leading-relaxed"
                style={{ color: MUTED }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                Individuell gestaltet, mobil optimiert, schnell und mit einer sauberen Grundlage für Suchmaschinen.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <button onClick={scrollToContact} className="btn-primary">
                  Kostenloses Webseiten-Erstgespräch sichern
                  <ArrowRight size={18} />
                </button>
              </motion.div>

              <motion.p
                className="text-xs mb-4"
                style={{ color: MUTED }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                Wir prüfen gemeinsam, was Ihre neue Website leisten muss und welche Inhalte Ihre Kunden wirklich benötigen.
              </motion.p>

              <motion.div
                className="hidden sm:flex flex-wrap gap-x-4 gap-y-1.5 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
              >
                {['Individuelles Design', 'Mobil optimiert', 'SEO-technisch vorbereitet', 'Klare Nutzerführung', 'Persönliche Umsetzung'].map((item) => (
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
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            2. VERTRAUENSLEISTE
        ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Stärken unserer Webseiten"
          style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                'Individuell statt von der Stange',
                'Für Smartphone, Tablet und Desktop',
                'Verständliche Inhalte',
                'SEO-freundliche Struktur',
                'Klare Kontaktwege',
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

        {/* ══════════════════════════════════════════════════════════════════
            3. PROBLEM-SEKTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto mb-12">
              <motion.p
                className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3"
                style={{ color: PETROL }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Der erste Eindruck entscheidet
              </motion.p>
              <motion.h2
                className="font-heading font-bold mb-5 leading-snug"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Bevor ein Kunde anruft, hat er Ihre Website längst bewertet.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Lange bevor jemand anruft, eine Anfrage schreibt oder Ihr Geschäft betritt, wirft er einen Blick auf Ihre Website. In wenigen Sekunden entscheidet sich dabei, wie professionell, vertrauenswürdig und passend Ihr Unternehmen wirkt.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: BODY }}>
                Wirkt die Seite veraltet, unübersichtlich oder lässt sie sich auf dem Smartphone kaum bedienen, ist das keine Detailfrage. Es entscheidet direkt darüber, ob ein Besucher bleibt, Vertrauen aufbaut – und den Kontakt sucht.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { label: 'Das Angebot ist nicht sofort verständlich', sub: 'Besucher verstehen nicht, was angeboten wird.' },
                { label: 'Die Website wirkt technisch veraltet', sub: 'Optik und Technik vermitteln keinen professionellen Eindruck.' },
                { label: 'Auf dem Smartphone schwer nutzbar', sub: 'Texte und Buttons sind zu klein oder überlagern sich.' },
                { label: 'Leistungen sind schwer zu finden', sub: 'Besucher scrollen und suchen – ohne Ergebnis.' },
                { label: 'Es fehlt ein klarer nächster Schritt', sub: 'Was soll der Besucher als Nächstes tun?' },
                { label: 'Die Website lädt zu langsam', sub: 'Besonders auf mobilen Verbindungen bricht man frühzeitig ab.' },
                { label: 'Vertrauenselemente fehlen', sub: 'Keine Referenzen, kein Team, keine Bewertungen sichtbar.' },
                { label: 'Bei relevanten Suchanfragen kaum gefunden', sub: 'Ohne SEO-Grundlage bleibt die Sichtbarkeit begrenzt.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-5 border"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm font-heading font-bold mb-1" style={{ color: INK }}>{item.label}</p>
                  <p className="text-xs" style={{ color: MUTED }}>{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            4. AGITATION-SEKTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-6"
                style={{ background: 'rgba(239,68,68,0.06)', color: '#B91C1C', borderColor: 'rgba(239,68,68,0.18)' }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <AlertTriangle size={12} aria-hidden /> Das eigentliche Problem
              </motion.div>

              <motion.h2
                className="font-heading font-bold mb-5"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Eine schwache Website kostet nicht nur Besucher. Sie kostet mögliche Kunden.
              </motion.h2>

              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: BODY }}>
                Besucher vergleichen Ihr Unternehmen nicht nur mit Ihren direkten Wettbewerbern. Sie vergleichen den digitalen Auftritt mit allen modernen Webseiten, die sie täglich nutzen.
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: BODY }}>
                Wirkt ein Wettbewerber übersichtlicher, professioneller und leichter erreichbar, fällt die Entscheidung häufig, bevor ein persönliches Gespräch überhaupt stattfindet.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Interessenten springen frühzeitig ab', sub: 'Der erste Eindruck reicht für eine Entscheidung.' },
                  { label: 'Vertrauen entsteht nicht', sub: 'Ohne Referenzen und klare Botschaft bleibt Skepsis.' },
                  { label: 'Leistungen werden übersehen', sub: 'Besucher finden nicht, was sie suchen.' },
                  { label: 'Mobile Besucher geben auf', sub: 'Mehr als die Hälfte aller Aufrufe kommt vom Smartphone.' },
                  { label: 'Werbung führt auf eine schwache Seite', sub: 'Anzeigenbudget ohne überzeugende Landingpage verpufft.' },
                  { label: 'Suchmaschinen ordnen Inhalte nicht klar zu', sub: 'Ohne Struktur bleibt die organische Sichtbarkeit begrenzt.' },
                  { label: 'Kontaktformulare werden nicht ausgefüllt', sub: 'Zu viele Hürden oder keine klare Aufforderung.' },
                  { label: 'Empfehlungen führen auf einen schwachen Auftritt', sub: 'Ein Mundpropaganda-Hinweis löst sich in nichts auf.' },
                  { label: 'Die Website unterstützt den Vertrieb nicht', sub: 'Online-Präsenz und Vertriebsprozess sind entkoppelt.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl p-5 border"
                    style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm font-heading font-bold mb-1" style={{ color: '#B91C1C' }}>{item.label}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{item.sub}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold leading-snug" style={{ color: INK }}>
                  Eine Website ohne klare Nutzerführung ist online – arbeitet aber nicht aktiv für Ihr Unternehmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            5. SOLUTION-SEKTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="font-heading font-bold mb-5"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Wir entwickeln eine Website, die Ihre Kunden versteht.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Eine professionelle Website beginnt nicht mit Farben oder Animationen. Sie beginnt mit der Frage, was Ihre Besucher suchen, welche Informationen sie benötigen und welcher nächste Schritt für sie sinnvoll ist.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: BODY }}>
                Auf dieser Grundlage entwickeln wir eine klare Seitenstruktur, überzeugende Inhalte und ein individuelles Design, das zu Ihrem Unternehmen passt.
              </p>
              <CheckList
                items={[
                  'Angebot klar positionieren',
                  'Zielgruppe verständlich ansprechen',
                  'Inhalte sinnvoll strukturieren',
                  'Vertrauen aufbauen',
                  'Leistungen überzeugend darstellen',
                  'Kontaktaufnahme vereinfachen',
                  'Mobile Nutzung optimieren',
                  'Suchmaschinen eine klare Struktur bieten',
                ]}
                className="mb-8"
              />
              <button onClick={scrollToContact} className="btn-primary">
                Webseiten-Projekt unverbindlich besprechen <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            6. VORHER / NACHHER
        ══════════════════════════════════════════════════════════════════ */}
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
              Was sich durch einen professionellen Webauftritt verändert
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                    'Besucher suchen lange nach Informationen',
                    'Das Angebot ist nicht sofort verständlich',
                    'Mobile Darstellung wirkt gequetscht',
                    'Kontaktmöglichkeiten sind schwer zu finden',
                    'Texte beschreiben nur das Unternehmen',
                    'Die Seite wirkt austauschbar',
                    'Suchbegriffe und Seitenstruktur fehlen',
                    'Die Website erzeugt kaum Anfragen',
                  ]}
                />
              </motion.div>
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
                  Mit professioneller Website
                </h3>
                <CheckList
                  variant="green"
                  items={[
                    'Besucher verstehen das Angebot innerhalb von Sekunden',
                    'Leistungen sind klar strukturiert',
                    'Die Website funktioniert auf jedem Gerät',
                    'Handlungsaufforderungen führen zum nächsten Schritt',
                    'Inhalte beantworten die wichtigsten Kundenfragen',
                    'Das Design stärkt die Wahrnehmung des Unternehmens',
                    'Suchmaschinen können Inhalte besser einordnen',
                    'Die Website unterstützt Kontaktaufnahme und Vertrieb',
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            7. LEISTUNGSUMFANG
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was Ihre neue Website enthalten kann
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { icon: <LayoutGrid size={22} />, title: 'Strategie und Seitenstruktur', desc: 'Wir planen, welche Seiten und Inhalte Ihre Besucher wirklich benötigen und wie sie sinnvoll miteinander verbunden werden.' },
                { icon: <FileText size={22} />, title: 'Conversion-orientierte Texte', desc: 'Wir formulieren verständliche Inhalte, die Probleme, Leistungen und Vorteile klar erklären und Besucher zum nächsten Schritt führen.' },
                { icon: <Palette size={22} />, title: 'Individuelles Webdesign', desc: 'Das Design orientiert sich an Ihrem Unternehmen, Ihrer Zielgruppe und Ihrer Positionierung – nicht an einem austauschbaren Standard-Template.' },
                { icon: <Smartphone size={22} />, title: 'Responsive Design', desc: 'Ihre Website wird für Smartphone, Tablet und Desktop entwickelt und auf unterschiedlichen Bildschirmgrößen geprüft.' },
                { icon: <Code2 size={22} />, title: 'Technische Umsetzung', desc: 'Wir setzen die Seite sauber, schnell und wartbar innerhalb der passenden technischen Umgebung um.' },
                { icon: <Search size={22} />, title: 'Suchmaschinenoptimierte Grundlage', desc: 'Überschriften, Seitenstruktur, Metadaten, interne Links und technische Grundlagen werden sinnvoll für Suchmaschinen vorbereitet.' },
                { icon: <MousePointerClick size={22} />, title: 'Conversion-Elemente', desc: 'Kontaktformulare, Buttons, Terminbuchungen, Telefonnummern oder weitere Kontaktwege werden gezielt in die Nutzerführung eingebunden.' },
                { icon: <Award size={22} />, title: 'Vertrauen und Referenzen', desc: 'Bewertungen, Projekte, Zertifikate, Teamvorstellungen und weitere Vertrauenselemente werden an den passenden Stellen eingesetzt.' },
                { icon: <Plug size={22} />, title: 'Integrationen auf Wunsch', desc: 'Formulare, Kalender, CRM-Systeme, Chatbots, Telefonassistenten oder weitere Prozesse können auf Wunsch eingebunden werden.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl border p-5 hover:-translate-y-1 transition-transform duration-200"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(14,124,114,0.08)', color: PETROL }} aria-hidden>
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: INK }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            8. BEISPIEL VERKAUFSSTARKE SEITENSTRUKTUR
        ══════════════════════════════════════════════════════════════════ */}
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
                Eine gute Website führt Besucher Schritt für Schritt zur Entscheidung.
              </h2>
            </motion.div>
            <div className="max-w-2xl mx-auto relative">
              <div
                className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }}
                aria-hidden
              />
              {[
                { step: '01', title: 'Klare Einstiegsbotschaft', desc: 'Der Besucher erkennt sofort, was angeboten wird und für wen die Leistung gedacht ist.' },
                { step: '02', title: 'Problem und Bedarf', desc: 'Die Website greift eine konkrete Situation aus dem Alltag der Zielgruppe auf.' },
                { step: '03', title: 'Leistung und Lösung', desc: 'Das Angebot wird verständlich und ohne unnötige Fachbegriffe erklärt.' },
                { step: '04', title: 'Vertrauen', desc: 'Referenzen, Erfahrungen, Bewertungen und echte Einblicke reduzieren Unsicherheit.' },
                { step: '05', title: 'Ablauf', desc: 'Der Besucher erfährt, wie die Zusammenarbeit funktioniert.' },
                { step: '06', title: 'Einwände und Fragen', desc: 'Häufige Fragen werden beantwortet, bevor sie eine Anfrage verhindern.' },
                { step: '07', title: 'Klare Kontaktaufnahme', desc: 'Ein passender CTA führt zum Gespräch, Formular, Anruf oder Termin.' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="relative flex items-start gap-6 bg-white p-5 md:p-6 border rounded-2xl mb-4"
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
                    <h3 className="font-heading font-bold mb-1" style={{ color: INK, fontSize: '1rem' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            9. SEO-SEKTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="font-heading font-bold mb-5"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Eine moderne Website muss nicht nur Menschen überzeugen.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Damit Suchmaschinen Ihre Inhalte verstehen können, benötigt die Website eine klare technische und inhaltliche Struktur.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: BODY }}>
                Wir berücksichtigen die Grundlagen der Suchmaschinenoptimierung bereits bei Planung, Text und Umsetzung – statt SEO erst nach dem Livegang hinzuzufügen.
              </p>
              <CheckList
                items={[
                  'Logische Seitenstruktur',
                  'Klare Überschriftenhierarchie',
                  'Individuelle Seitentitel und Meta-Descriptions',
                  'Verständliche URLs',
                  'Interne Verlinkungen',
                  'Mobile Optimierung',
                  'Schnelle Ladezeiten',
                  'Strukturierte Inhalte',
                  'Lokale Leistungs- und Standortbezüge',
                  'Alt-Texte für relevante Bilder',
                  'Indexierbarkeit und technische Grundlagen',
                  'Strukturierte Daten, sofern sinnvoll',
                ]}
                className="mb-8"
              />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  Eine SEO-optimierte Grundlage verbessert die Voraussetzungen für Sichtbarkeit. Konkrete Platzierungen in Suchmaschinen können jedoch nicht pauschal garantiert werden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            10. MOBILE & PERFORMANCE
        ══════════════════════════════════════════════════════════════════ */}
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
                <Smartphone size={28} style={{ color: PETROL }} aria-hidden />
                <h2 className="font-heading font-bold" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  Der erste Besuch findet häufig auf dem Smartphone statt.
                </h2>
              </motion.div>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: BODY }}>
                Eine Website darf mobil nicht einfach nur kleiner dargestellt werden. Inhalte, Navigation, Buttons und Formulare müssen speziell für kleine Bildschirme funktionieren.
              </p>
              <CheckList
                items={[
                  'Gut lesbare Schriftgrößen auf allen Geräten',
                  'Klare Navigation, die auf kleinen Bildschirmen funktioniert',
                  'Große Touch-Flächen für Buttons und Links',
                  'Kurze Wege zum Kontakt',
                  'Optimierte Bilder für schnelle Ladezeiten',
                  'Stabile Darstellung ohne horizontale Überläufe',
                  'Schnelle Ladezeiten auch auf mobilen Verbindungen',
                  'Verständliche Formulare mit sinnvoller Tastaturbelegung',
                  'Keine überladenen Animationen auf Mobilgeräten',
                  'Klare Handlungsaufforderungen ohne Ablenkung',
                ]}
                className="mb-6"
              />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  Deshalb wird die mobile Darstellung nicht als Nebenprodukt, sondern als zentraler Bestandteil des Projekts entwickelt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            11. ZIELGRUPPEN
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Für Unternehmen, deren Website mehr leisten soll
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { icon: <Building2 size={24} />, title: 'Lokale Unternehmen', desc: 'Werden Sie in Ihrer Region professionell wahrgenommen und präsentieren Sie Leistungen und Kontaktmöglichkeiten klar.' },
                { icon: <Wrench size={24} />, title: 'Handwerksbetriebe', desc: 'Zeigen Sie Leistungen, Referenzen und Einsatzgebiete so, dass Interessenten schnell Vertrauen entwickeln.' },
                { icon: <Briefcase size={24} />, title: 'Dienstleister und Beratungen', desc: 'Erklären Sie komplexe Leistungen verständlich und führen Sie Interessenten gezielt zur Anfrage.' },
                { icon: <Stethoscope size={24} />, title: 'Praxen und Studios', desc: 'Bieten Sie Patienten oder Mitgliedern einen übersichtlichen Zugang zu Leistungen, Informationen und Terminen.' },
                { icon: <UtensilsCrossed size={24} />, title: 'Restaurants und Hotels', desc: 'Präsentieren Sie Angebot, Atmosphäre, Reservierung und Kontaktwege auf jedem Gerät überzeugend.' },
                { icon: <TrendingUp size={24} />, title: 'Wachsende Unternehmen', desc: 'Schaffen Sie einen Webauftritt, der neue Leistungen, Standorte und digitale Prozesse aufnehmen kann.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl border p-5"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(14,124,114,0.08)', color: PETROL }} aria-hidden>
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: INK }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            12. PROJEKTABLAUF
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-12"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              So entsteht Ihre neue Unternehmenswebsite
            </motion.h2>
            <div className="max-w-2xl mx-auto relative">
              <div
                className="absolute left-[27px] top-4 bottom-4 w-0.5 hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${PETROL}99, rgba(14,124,114,0.1))` }}
                aria-hidden
              />
              {[
                { step: '01', title: 'Erstgespräch', desc: 'Wir besprechen Ihr Unternehmen, Ihre Zielgruppe, Ihre Leistungen und das konkrete Ziel der neuen Website.' },
                { step: '02', title: 'Strategie und Struktur', desc: 'Wir entwickeln die Seitenstruktur, Nutzerführung und inhaltlichen Schwerpunkte.' },
                { step: '03', title: 'Texte und Design', desc: 'Die Inhalte werden verständlich formuliert und in ein individuelles visuelles Konzept übertragen.' },
                { step: '04', title: 'Technische Umsetzung', desc: 'Die Website wird responsive, schnell und auf einer sauberen technischen Grundlage umgesetzt.' },
                { step: '05', title: 'Prüfung und Abstimmung', desc: 'Inhalte, Darstellung, Formulare, Links und mobile Nutzung werden geprüft und gemeinsam abgestimmt.' },
                { step: '06', title: 'Veröffentlichung', desc: 'Nach der finalen Freigabe wird die Website veröffentlicht und technisch kontrolliert.' },
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

        {/* ══════════════════════════════════════════════════════════════════
            13. REFERENZEN (neutral)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold mb-4" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Webdesign passend zu Unternehmen, Zielgruppe und Angebot
              </h2>
              <p className="text-base leading-relaxed" style={{ color: BODY }}>
                Jede Website benötigt eine andere Struktur. Ein Handwerksbetrieb muss Leistungen und Referenzen anders präsentieren als eine Praxis, ein Restaurant oder ein Beratungsunternehmen.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { title: 'Handwerksbetrieb', desc: 'Leistungsseiten mit Einsatzgebiet, Referenzgalerie und direktem Rückruf-CTA – damit Interessenten schnell Vertrauen entwickeln und unkompliziert Kontakt aufnehmen.' },
                { title: 'Praxis oder Studio', desc: 'Übersichtliche Leistungsdarstellung, Infos zum Ablauf, Terminbuchung und FAQs – auf jedem Gerät klar lesbar und ohne Ablenkung.' },
                { title: 'Dienstleister oder Beratung', desc: 'Verständliche Erklärung komplexer Leistungen, Prozessdarstellung, Vertrauenselemente und gezielte Kontaktführung für qualifizierte Anfragen.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl border p-5"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="h-8 w-8 rounded-lg mb-3" style={{ background: 'rgba(14,124,114,0.08)' }} aria-hidden />
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: INK }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            14. FAQ
        ══════════════════════════════════════════════════════════════════ */}
        <section id="faq" className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isRegional
                ? `Häufige Fragen zu Webseiten in ${regionName}`
                : 'Häufige Fragen'}
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <Accordion items={faqs} allowMultiple={false} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            15. VERWANDTE LEISTUNGEN
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Passende Leistungen für Ihren digitalen Auftritt
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                {
                  title: 'Suchmaschinenoptimierung',
                  desc: 'Verbessern Sie die Sichtbarkeit Ihrer Website für relevante Suchanfragen in Ihrer Region.',
                  href: '/seo-top-3-in-google',
                },
                {
                  title: 'Digitale Kundenassistenz',
                  desc: 'Beantworten Sie wiederkehrende Fragen und nehmen Sie Anfragen direkt auf Ihrer Website entgegen.',
                  href: '/ki-chatbots',
                },
                {
                  title: 'Prozessautomatisierung',
                  desc: 'Übergeben Sie neue Anfragen automatisch an CRM, E-Mail, Kalender oder zuständige Mitarbeiter.',
                  href: '/automatisierungen',
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="block bg-white rounded-2xl border p-5 group hover:-translate-y-1 transition-transform duration-200"
                  style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
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

        {/* ══════════════════════════════════════════════════════════════════
            REGIONALER DEEP-DIVE (nur wenn regionaler Aufruf)
        ══════════════════════════════════════════════════════════════════ */}
        {isRegional && regionContent && (
          <section className="section-padding" style={{ background: SURFACE }}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading font-bold text-2xl mb-6" style={{ color: INK }}>
                  {regionContent.serviceLabel} in {regionContent.regionName}
                </h2>
                <p className="text-lg leading-relaxed mb-5" style={{ color: BODY }}>
                  {regionContent.intro}
                </p>
                {regionContent.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed mb-5" style={{ color: BODY }}>{p}</p>
                ))}
                {regionContent.faqs && regionContent.faqs.length > 0 && (
                  <>
                    <h3 className="font-heading font-bold text-xl mb-4 mt-8" style={{ color: INK }}>
                      Häufige Fragen aus {regionContent.regionName}
                    </h3>
                    <Accordion
                      items={regionContent.faqs.map((f) => ({ question: f.q, answer: f.a }))}
                      allowMultiple={false}
                    />
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            16. ABSCHLUSS-CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: isRegional && regionContent ? PAPER : SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              className="max-w-2xl mx-auto text-center rounded-2xl border p-8 md:p-12"
              style={{
                borderColor: `${PETROL}30`,
                background: 'rgba(14,124,114,0.03)',
                boxShadow: `0 0 0 1px rgba(14,124,114,0.12), 0 8px 32px rgba(14,124,114,0.08)`,
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(14,124,114,0.09)', color: PETROL }}
              >
                Ihre neue Unternehmenswebsite
              </span>
              <h2
                className="font-heading font-bold mb-4"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Wirkt Ihre Website so professionell wie Ihr Unternehmen?
              </h2>
              <p className="text-base mb-3 leading-relaxed" style={{ color: BODY }}>
                In einem unverbindlichen Erstgespräch besprechen wir, was Ihre neue Website leisten soll, welche Inhalte Ihre Kunden benötigen und wie daraus ein klarer digitaler Auftritt entsteht.
              </p>
              <p className="text-sm mb-8" style={{ color: MUTED }}>
                Sie erhalten keine allgemeine Design-Präsentation, sondern eine erste Einschätzung passend zu Ihrem Unternehmen und Ihrem Ziel.
              </p>
              <button onClick={scrollToContact} className="btn-primary mb-4">
                Kostenloses Webseiten-Erstgespräch sichern <ArrowRight size={18} />
              </button>
              <p className="text-xs" style={{ color: MUTED }}>Unverbindlich · Persönlich · Verständlich erklärt</p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            17. KONTAKT & KARTE
        ══════════════════════════════════════════════════════════════════ */}
        <ContactForm
          service="website"
          heading="Kostenloses Webseiten-Erstgespräch sichern"
          subheading="Erzählen Sie uns, was Ihre neue Website leisten soll – wir melden uns und besprechen gemeinsam den nächsten Schritt."
        />
        <GoogleMapsSection />

        {/* ══════════════════════════════════════════════════════════════════
            18. STICKY CTA (mobil)
        ══════════════════════════════════════════════════════════════════ */}
        <StickyCtaBar ctaLabel="Webseiten-Projekt besprechen" />
      </div>
    </>
  );
};

export default Website;
