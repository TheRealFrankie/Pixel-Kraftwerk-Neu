'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  AlertTriangle,
  Search,
  MapPin,
  Star,
  Globe,
  BarChart2,
  Target,
  Wrench,
  FileText,
  Shield,
  TrendingUp,
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
import VorherNachherSection from '../../components/VorherNachherSection';
import WieFunktioniertEsSection from '../../components/WieFunktioniertEsSection';
import CheckList from '../../components/ui/CheckList';
import Accordion from '../../components/Accordion';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import SubpageLinksBlock from '../../components/SubpageLinksBlock';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

// ─── Design-Tokens (identisch mit /automatisierungen & /webseite) ────────────
const INK = '#0C1210';
const BODY = '#404B48';
const MUTED = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const SURFACE = '#F3F5F4';
const PAPER = '#FAFAF9';

interface SeoTop3Props {
  regionSlug?: string;
  regionName?: string;
}

const faqs = [
  {
    question: 'Können Sie eine Top-3-Platzierung garantieren?',
    answer:
      'Nein. Eine konkrete Platzierung kann seriös nicht garantiert werden. Wir verbessern jedoch systematisch die technischen, inhaltlichen und lokalen Voraussetzungen für mehr Sichtbarkeit – und priorisieren Suchbegriffe, die für Ihr Unternehmen realistisch erreichbar und geschäftlich relevant sind.',
  },
  {
    question: 'Für wen lohnt sich dieses SEO-Angebot?',
    answer:
      'Für lokale Unternehmen, die regelmäßig Anfragen über Google gewinnen möchten – besonders: Dienstleister, Handwerk, Praxen, Kanzleien, Beratungsunternehmen und lokale Betriebe mit klaren Leistungen und einem definierten Einzugsgebiet.',
  },
  {
    question: 'Was ist Local SEO?',
    answer:
      'Local SEO konzentriert sich auf Suchanfragen mit regionalem Bezug, Google Maps, das Google-Unternehmensprofil, lokale Leistungsseiten und Standortinformationen. Ziel ist es, bei Suchanfragen sichtbar zu werden, die einen geografischen Bezug zur Region haben.',
  },
  {
    question: 'Wie lange dauert es, bis Ergebnisse sichtbar werden?',
    answer:
      'Das hängt von Ausgangslage, Wettbewerb, Standort, Website und Suchbegriffen ab. Erste Veränderungen können nach einigen Wochen sichtbar werden. Stark umkämpfte Suchbegriffe benötigen häufig mehr Zeit und eine kontinuierliche Strategie.',
  },
  {
    question: 'Brauche ich eine neue Website?',
    answer:
      'Nicht zwingend. Zunächst prüfen wir, ob die bestehende Website sinnvoll optimiert werden kann. Wenn die Website langsam ist, keine klaren Leistungsseiten hat oder technische Fehler aufweist, können gezielte Verbesserungen oft ausreichen.',
  },
  {
    question: 'Optimieren Sie auch das Google-Unternehmensprofil?',
    answer:
      'Ja. Abhängig vom Auftrag können Kategorien, Leistungen, Beschreibung, Bilder, Kontaktdaten und weitere Profilbereiche geprüft und verbessert werden.',
  },
  {
    question: 'Wie misst Pixel Kraftwerk den Erfolg?',
    answer:
      'Wir betrachten mehrere Kennzahlen: Entwicklung relevanter Suchbegriffe, lokale Sichtbarkeit, Impressionen, Website-Klicks, Anrufe, Routenanfragen und Kontaktanfragen. Entscheidend ist nicht möglichst viel Traffic, sondern ob die richtigen Menschen Ihre Leistungen finden.',
  },
  {
    question: 'Muss SEO dauerhaft betreut werden?',
    answer:
      'Viele Grundlagen können einmalig verbessert werden. Wettbewerb, Inhalte und Suchverhalten verändern sich jedoch. Eine regelmäßige Überprüfung und Anpassung der Strategie ist deshalb häufig sinnvoll.',
  },
];

const SeoTop3: React.FC<SeoTop3Props> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/seo-top-3`
    : `${baseUrl}/seo-top-3-in-google`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'seo-top-3', 'SEO Top 3')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const allFaqs = [
    ...faqs,
    ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
  ];

  return (
    <>
      <div style={{ background: PAPER }}>
        {/* ── Schema ──────────────────────────────────────────────────────── */}
        <LocalBusinessSchema
          pageType="service"
          customDescription={isRegional
            ? `Lokales SEO für Unternehmen in ${regionName} und Umgebung. Pixel Kraftwerk aus Groitzsch unterstützt Ihr Unternehmen auf dem Weg zu besserer lokaler Sichtbarkeit bei Google und Google Maps.`
            : 'Lokales SEO für Unternehmen aus Leipzig, Groitzsch und Region. Pixel Kraftwerk unterstützt Ihr Unternehmen auf dem Weg zu besserer lokaler Sichtbarkeit bei Google – mit klarer Strategie und transparenten Maßnahmen.'}
        />
        <ServiceJsonLd
          name={isRegional ? `SEO: Top 3 in Google in ${regionName}` : 'SEO: Top 3 in Google'}
          serviceType="SEO"
          description={isRegional
            ? `Lokale Suchmaschinenoptimierung für Unternehmen in ${regionName} – mehr Sichtbarkeit bei relevanten lokalen Suchanfragen in Google und Google Maps. Pixel Kraftwerk aus Groitzsch.`
            : 'Lokale Suchmaschinenoptimierung mit Fokus auf bessere Sichtbarkeit in Google und Google Maps – speziell für Unternehmen aus Leipzig, Groitzsch, Markkleeberg und der Region.'}
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          pageName={isRegional ? `SEO Top 3 in ${regionName}` : 'SEO Top 3 in Google'}
          faqs={allFaqs.map((item) => ({ question: item.question, answer: item.answer }))}
        />
        {isRegional ? (
          <BreadcrumbSchemaRegionService
            regionName={regionName}
            regionUrl={regionUrl}
            serviceName="SEO Top 3"
            serviceUrl={currentPageUrl}
          />
        ) : (
          <BreadcrumbSchema
            serviceName="Top 3 in Google"
            serviceUrl={currentPageUrl}
          />
        )}

        {/* ══════════════════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="lokale-sichtbarkeit-ausbauen"
          className="relative min-h-[100dvh] md:min-h-screen flex flex-col"
          style={{ background: PAPER }}
        >
          <div className="relative z-20 container mx-auto px-4 md:px-8 pt-16 md:pt-20">
            <BreadcrumbNav items={isRegional ? [
              { label: 'Startseite', href: '/' },
              { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
              { label: regionName!, href: regionUrl },
              { label: 'SEO: Top 3 in Google' },
            ] : [
              { label: 'Startseite', href: '/' },
              { label: 'Leistungen', href: '/leistungen' },
              { label: 'SEO: Top 3 in Google' },
            ]} />
          </div>
          <div className="flex-1 flex items-center lg:items-start container mx-auto px-4 md:px-8 relative z-10 py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">

              {/* Left: Copy */}
              <div>
                <motion.h1
                  className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-2"
                  style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {isRegional ? `SEO-Agentur in ${regionName}` : 'SEO-Agentur Groitzsch & Leipzig'}
                </motion.h1>

                <motion.h2
                  className="font-heading font-bold tracking-tight mb-2 leading-[1.08]"
                  style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                >
                  {regionContent?.localHook || 'Top 3 bei Google als Ziel: Mehr lokale Sichtbarkeit für Ihr Unternehmen.'}
                </motion.h2>

                <motion.h3
                  className="sr-only md:not-sr-only text-sm md:text-base max-w-xl mb-2 leading-snug font-semibold"
                  style={{ color: PETROL }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {SERVICE_TITLE_KEYWORDS['seo-top-3']}
                </motion.h3>

                <motion.p
                  className="text-base md:text-lg max-w-xl mb-3 leading-relaxed"
                  style={{ color: BODY }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Wir optimieren Website und Google-Unternehmensprofil, damit Ihre Leistungen bei relevanten lokalen Suchanfragen besser gefunden werden können.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                  <button onClick={scrollToContact} className="btn-primary">
                    Kostenlose SEO-Potenzialanalyse sichern
                    <ArrowRight size={18} />
                  </button>
                  <a href="tel:+491785844460" className="btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    Jetzt anrufen
                  </a>
                </motion.div>
                <TrustLine className="mt-4" />
              </div>

              {/* Right: Premium Bild-Visual */}
              <motion.div
                className="hidden lg:flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <div className="relative w-full max-w-[500px] select-none">
                  {/* Hintergrund-Aura */}
                  <div
                    className="absolute inset-0 rounded-[2.5rem] pointer-events-none scale-110"
                    style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(14,124,114,0.14) 0%, transparent 70%)' }}
                    aria-hidden
                  />

                  {/* Bildkarte */}
                  <div
                    className="relative rounded-[2rem] overflow-hidden"
                    style={{
                      border: `1px solid ${BORDER}`,
                      boxShadow: '0 20px 50px rgba(12,18,16,0.16), 0 4px 16px rgba(12,18,16,0.08)',
                      aspectRatio: '819 / 772',
                    }}
                  >
                    <Image
                      src="/images/seo-top3-google-suche-maps-mockup.webp"
                      alt="Beispielhafte Google-Suche und Google-Maps-Ergebnis für eine lokale Suchanfrage – Local Pack und Google-Unternehmensprofil als Beispiel für lokale Sichtbarkeit"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 0px, 500px"
                    />
                  </div>

                  {/* Schwebende Badges */}
                  <motion.div
                    className="absolute -top-3 -left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white"
                    style={{ border: `1px solid ${BORDER}`, boxShadow: '0 2px 10px rgba(12,18,16,0.10)', color: PETROL }}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.4 }}
                  >
                    <MapPin size={12} aria-hidden />
                    Google Maps
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 -right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white"
                    style={{ border: `1px solid ${BORDER}`, boxShadow: '0 2px 10px rgba(12,18,16,0.10)', color: PETROL }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 6l3 3 5-5" stroke={PETROL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Lokale Sichtbarkeit
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            2. VORHER / NACHHER
        ══════════════════════════════════════════════════════════════════ */}
        <VorherNachherSection />

        {/* ══════════════════════════════════════════════════════════════════
            3. VERTRAUENSLEISTE
        ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Schwerpunkte unserer lokalen SEO-Arbeit"
          style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                'Website & Google Maps gemeinsam optimieren',
                'Relevante lokale Suchbegriffe',
                'Klare Prioritäten',
                'Messbare Entwicklung',
                'Keine kurzfristigen Ranking-Tricks',
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
                Das Problem
              </motion.p>
              <motion.h2
                className="font-heading font-bold mb-5 leading-snug"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ihre Kunden suchen bereits – aber finden sie auch Ihr Unternehmen?
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Viele potenzielle Kunden beginnen ihre Suche bei Google. Sie suchen nach einer konkreten Leistung, einem Problem oder einem Anbieter in ihrer Nähe.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: BODY }}>
                Erscheint Ihr Unternehmen bei diesen Suchanfragen nicht oder nur sehr weit unten, wird häufig zuerst ein Wettbewerber kontaktiert.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { label: 'Nur für den Firmennamen sichtbar', sub: 'Wer Sie noch nicht kennt, findet Sie nicht.' },
                { label: 'Wichtige Leistungen ohne eigene Seiten', sub: 'Google kann Ihr Angebot nicht eindeutig zuordnen.' },
                { label: 'Standort und Einsatzgebiet unklar', sub: 'Lokale Suchanfragen erreichen Sie kaum.' },
                { label: 'Google-Unternehmensprofil unvollständig', sub: 'Fehlende Informationen kosten Vertrauen und Klicks.' },
                { label: 'Lokale Suchbegriffe fehlen', sub: 'Die Sprache Ihrer Kunden spiegelt sich nicht wider.' },
                { label: 'Inhalte sind zu allgemein', sub: 'Ohne konkreten Bezug keine lokale Relevanz.' },
                { label: 'Technische Indexierungsfehler', sub: 'Google kann Seiten nicht korrekt erfassen.' },
                { label: 'Wettbewerber wirken digital relevanter', sub: 'Professionellerer Auftritt wird häufig zuerst gewählt.' },
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
                <AlertTriangle size={12} aria-hidden /> Die Folgen
              </motion.div>

              <motion.h2
                className="font-heading font-bold mb-5"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Wer nicht sichtbar ist, wird häufig nicht in die engere Auswahl aufgenommen.
              </motion.h2>

              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: BODY }}>
                Potenzielle Kunden vergleichen meist nur wenige Anbieter. Wer dort nicht erscheint oder keinen überzeugenden Eindruck hinterlässt, verliert möglicherweise den Kontakt noch vor dem ersten Gespräch.
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: BODY }}>
                Auch Empfehlungen prüfen ein Unternehmen häufig online, bevor sie anrufen oder eine Anfrage senden.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { label: 'Weniger passende Websitebesucher', sub: 'Hoher Traffic, aber kaum qualifizierte Anfragen.' },
                  { label: 'Weniger Anrufe und Kontaktanfragen', sub: 'Wer Sie nicht findet, kann nicht anfragen.' },
                  { label: 'Stärkere Abhängigkeit von bezahlter Werbung', sub: 'Kein organischer Ausgleich ohne Sichtbarkeit.' },
                  { label: 'Wettbewerber besetzen wichtige Suchbegriffe', sub: 'Die Lücke wird mit der Zeit schwerer zu schließen.' },
                  { label: 'Leistungen werden nicht klar verstanden', sub: 'Unklare Seiten überzeugen nicht.' },
                  { label: 'Gute Referenzen bleiben unsichtbar', sub: 'Leistungen und Bewertungen werden nicht gefunden.' },
                  { label: 'Der Unternehmensauftritt wirkt unvollständig', sub: 'Fehlende Informationen erzeugen Skepsis.' },
                  { label: 'Kunden entscheiden sich für die Konkurrenz', sub: 'Noch bevor ein Gespräch stattfindet.' },
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
                  Eine gute Leistung allein sorgt nicht dafür, dass Google sie den richtigen Menschen zeigt.
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
                Wir machen verständlich, was Sie anbieten, wo Sie tätig sind und warum Ihr Unternehmen relevant ist.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Lokale Suchmaschinenoptimierung besteht nicht aus einem einzelnen Trick. Website, Inhalte, Standortinformationen, Unternehmensprofil und Vertrauenssignale müssen zusammenpassen.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: BODY }}>
                Wir analysieren Ihre Ausgangslage, priorisieren relevante Suchbegriffe und verbessern schrittweise die technischen, inhaltlichen und lokalen Voraussetzungen für bessere Sichtbarkeit.
              </p>
              <CheckList
                items={[
                  'Leistungen klar beschreiben',
                  'Relevante Suchbegriffe auswählen',
                  'Standort und Einsatzgebiet darstellen',
                  'Google-Unternehmensprofil verbessern',
                  'Technische Fehler erkennen und beheben',
                  'Seitenstruktur optimieren',
                  'Lokale Inhalte entwickeln',
                  'Interne Links verbessern',
                  'Bewertungen und Referenzen einsetzen',
                  'Entwicklung nachvollziehbar messen',
                ]}
                className="mb-8"
              />
              <button onClick={scrollToContact} className="btn-primary">
                SEO-Potenzial unverbindlich prüfen lassen <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            6. WAS TOP 3 BEI GOOGLE BEDEUTET
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="section-padding"
          style={{ background: SURFACE }}
          aria-labelledby="top3-bedeutung-heading"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                id="top3-bedeutung-heading"
                className="font-heading font-bold mb-8"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Was „Top 3 bei Google" für lokale Unternehmen wirklich bedeutet
              </motion.h2>
              <motion.div
                className="space-y-6 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p style={{ color: BODY }}>
                  Wenn Ihr Unternehmen in den relevanten lokalen Ergebnissen (Google Maps / Local Pack) erscheint, passiert etwas Entscheidendes: Kunden sehen Ihr Unternehmen genau dann, wenn sie aktiv nach Ihrer Leistung suchen.
                </p>
                <CheckList
                  items={[
                    'Kunden können sofort anrufen oder eine Route starten',
                    'Mehr qualifizierte Anfragen durch bessere lokale Sichtbarkeit',
                    'Geringere Abhängigkeit von bezahlter Werbung',
                    'Lokale Relevanz und Vertrauen werden langfristig gestärkt',
                  ]}
                  className="mb-4"
                />
                <div className="rounded-xl bg-white border px-5 py-4" style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}>
                  <p className="font-semibold" style={{ color: INK }}>
                    Es geht nicht um möglichst viel Traffic, sondern um Sichtbarkeit bei Suchanfragen, die zu Ihrem Angebot passen.
                  </p>
                </div>
                <p style={{ color: BODY }}>
                  Statt kurzfristiger Tricks setzen wir auf die Faktoren, die Google langfristig berücksichtigt: lokale Relevanz, Vertrauen und Bewertungen sowie konsistente regionale Signale.
                </p>
                <div
                  className="flex flex-wrap items-center gap-2 font-heading font-bold rounded-xl border bg-white px-5 py-4"
                  style={{ color: INK, borderColor: `${PETROL}30`, boxShadow: `0 0 0 1px ${PETROL}15` }}
                >
                  <span>Mehr Sichtbarkeit</span>
                  <span style={{ color: PETROL }} aria-hidden>→</span>
                  <span>mehr Anfragen</span>
                  <span style={{ color: PETROL }} aria-hidden>→</span>
                  <span>mehr Aufträge.</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            7. WAS LOKALE SICHTBARKEIT UMFASST
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
              Lokale Sichtbarkeit besteht aus mehreren Bereichen.
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
              {[
                { icon: <MapPin size={22} />, title: 'Google Maps', desc: 'Ihr Unternehmensprofil kann bei standortbezogenen Suchanfragen in Maps und den lokalen Ergebnissen erscheinen.' },
                { icon: <Search size={22} />, title: 'Organische Suchergebnisse', desc: 'Leistungs-, Standort- und Informationsseiten können für passende Suchanfragen sichtbar werden.' },
                { icon: <Globe size={22} />, title: 'Suche nach dem Firmennamen', desc: 'Menschen, die Ihr Unternehmen bereits kennen, sollen vollständige und vertrauenswürdige Informationen finden.' },
                { icon: <Target size={22} />, title: 'Problemorientierte Suchanfragen', desc: 'Hilfreiche Inhalte können Menschen erreichen, die zunächst nach einer Lösung und noch nicht nach einem bestimmten Anbieter suchen.' },
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
            <div className="max-w-3xl mx-auto rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
              <p className="text-base font-semibold" style={{ color: INK }}>
                Entscheidend ist nicht, bei jedem Begriff sichtbar zu sein, sondern bei Suchanfragen, die zu Ihrem Angebot passen.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            9. SEO-POTENZIALANALYSE
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
                Wir prüfen zuerst, wo echtes Potenzial besteht.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Nicht jeder Suchbegriff bringt automatisch passende Anfragen. Deshalb betrachten wir Suchabsicht, Wettbewerb, lokale Relevanz und die wirtschaftliche Bedeutung Ihrer Leistungen.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: BODY }}>
                Die Analyse hilft dabei, kurzfristige Verbesserungsmöglichkeiten von langfristigen Themen zu unterscheiden und Maßnahmen in der richtigen Reihenfolge umzusetzen.
              </p>
              <CheckList
                items={[
                  'Aktuelle Rankings und Sichtbarkeit',
                  'Relevante Suchbegriffe und Suchabsichten',
                  'Google-Unternehmensprofil',
                  'Technische Website-Grundlagen',
                  'Vorhandene Leistungsseiten',
                  'Standortbezüge und Einsatzgebiete',
                  'Lokale Wettbewerber',
                  'Interne Links und Seitenstruktur',
                  'Metadaten und Überschriftenhierarchie',
                  'Mobile Darstellung und Ladeverhalten',
                  'Bewertungen und Referenzen',
                  'Kurzfristige Verbesserungsmöglichkeiten',
                ]}
                className="mb-8"
              />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  Sie erhalten keine allgemeine Checkliste, sondern priorisierte Empfehlungen für Ihr Unternehmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            10. MID-CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              className="max-w-2xl mx-auto rounded-2xl border p-8 md:p-10 text-center"
              style={{
                borderColor: `${PETROL}30`,
                background: 'rgba(14,124,114,0.03)',
                boxShadow: `0 0 0 1px rgba(14,124,114,0.12), 0 8px 32px rgba(14,124,114,0.08)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: PETROL }}>Jetzt prüfen lassen</p>
              <h2
                className="font-heading font-bold mb-4"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Passt lokale SEO zu Ihrem Geschäft?
              </h2>
              <p className="text-sm md:text-base mb-6 leading-relaxed" style={{ color: BODY }}>
                In einem kurzen Gespräch betrachten wir, für welche Suchbegriffe sich lokale SEO-Maßnahmen bei Ihnen lohnen – und wo der Wettbewerb realistisch einzuschätzen ist.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-4 font-heading font-bold text-base rounded-lg transition-all duration-300 group"
                style={{ background: PETROL, color: '#FFFFFF' }}
              >
                Kostenlose SEO-Potenzialanalyse sichern
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <p className="text-xs mt-4" style={{ color: MUTED }}>Unverbindlich · Persönlich · Transparent erklärt</p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            11. LEISTUNGSUMFANG
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
              Was wir für Ihre lokale Sichtbarkeit optimieren
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { icon: <Target size={22} />, title: 'Lokale Keyword-Strategie', desc: 'Wir identifizieren Suchbegriffe, die zu Ihren Leistungen, Ihrer Region und der tatsächlichen Suchabsicht passen.' },
                { icon: <BarChart2 size={22} />, title: 'Wettbewerbsanalyse', desc: 'Wir prüfen, welche Anbieter bereits sichtbar sind und wo realistische Chancen bestehen.' },
                { icon: <Star size={22} />, title: 'Google-Unternehmensprofil', desc: 'Kategorien, Leistungen, Beschreibung, Bilder, Kontaktdaten und weitere Profilinformationen werden geprüft.' },
                { icon: <FileText size={22} />, title: 'Onpage-SEO', desc: 'Seitentitel, Überschriften, Inhalte und interne Links werden klarer aufgebaut und optimiert.' },
                { icon: <Wrench size={22} />, title: 'Technische SEO', desc: 'Wir prüfen Indexierbarkeit, mobile Nutzung, Ladeverhalten, Canonicals und Weiterleitungen.' },
                { icon: <Globe size={22} />, title: 'Leistungsseiten', desc: 'Wichtige Leistungen erhalten klare Seiten mit passender Suchintention und Kontaktmöglichkeit.' },
                { icon: <MapPin size={22} />, title: 'Lokale Seiten', desc: 'Standort- und Einsatzgebietsseiten werden dort eingesetzt, wo sie einen echten Mehrwert bieten.' },
                { icon: <Shield size={22} />, title: 'Vertrauenssignale', desc: 'Echte Bewertungen, Referenzen und Projekte werden sinnvoll in den Auftritt eingebunden.' },
                { icon: <TrendingUp size={22} />, title: 'Monitoring', desc: 'Die Entwicklung relevanter Suchbegriffe und Nutzeraktionen wird nachvollziehbar beobachtet.' },
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
            12. DIE 3 HEBEL
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="section-padding"
          style={{ background: SURFACE }}
          aria-labelledby="top3-veraendert-heading"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: PETROL }}>Die 3 Hebel</p>
                <h2
                  id="top3-veraendert-heading"
                  className="font-heading font-bold mb-3"
                  style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  Was in den Top 3 wirklich zählt
                </h2>
                <p className="text-base" style={{ color: BODY }}>Damit Google Sie oben zeigt, braucht es vor allem drei Dinge:</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    num: '01',
                    title: 'Relevanz',
                    text: 'Ihr Profil und Ihre Website müssen klar signalisieren, welche Leistungen Sie anbieten – und in welchem Gebiet.',
                  },
                  {
                    num: '02',
                    title: 'Vertrauen',
                    text: 'Bewertungen, Referenzen, echte Aktivität, starke Inhalte – damit Google und Kunden Ihnen glauben.',
                  },
                  {
                    num: '03',
                    title: 'Konsistenz',
                    text: 'Daten, Standortsignale, Inhalte und Verlinkungen müssen zusammenpassen – ohne Widersprüche.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.num}
                    className="bg-white p-6 rounded-2xl border hover:-translate-y-1 transition-transform duration-200"
                    style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-mono font-bold text-3xl leading-none mb-3 block" style={{ color: `${PETROL}66` }}>{item.num}</span>
                    <h3 className="font-heading font-bold text-base mb-2" style={{ color: INK }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-6 rounded-xl border px-5 py-4 text-center"
                style={{ background: 'rgba(14,124,114,0.03)', borderColor: `${PETROL}20` }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                viewport={{ once: true }}
              >
                <p className="text-sm" style={{ color: BODY }}>
                  Genau diese drei Punkte bilden die Grundlage unserer Optimierung – systematisch und nachvollziehbar.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            13. GOOGLE-UNTERNEHMENSPROFIL
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Star size={28} style={{ color: PETROL }} aria-hidden />
                <h2 className="font-heading font-bold" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  Ihr Google-Unternehmensprofil ist häufig der erste Kontaktpunkt.
                </h2>
              </motion.div>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Noch bevor jemand Ihre Website besucht, sieht er möglicherweise Bewertungen, Bilder, Öffnungszeiten, Leistungen und Kontaktdaten. Ein vollständiges und gepflegtes Profil verbessert den ersten Eindruck und die Ausgangslage für bessere Sichtbarkeit.
              </p>
              <CheckList
                items={[
                  'Passende Kategorien auswählen',
                  'Korrekte Kontaktdaten hinterlegen',
                  'Aktuelle Öffnungszeiten angeben',
                  'Verständliche Unternehmensbeschreibung formulieren',
                  'Leistungen im Profil hinterlegen',
                  'Relevante Bilder hinzufügen',
                  'Website korrekt verlinken',
                  'Bewertungsprozess etablieren',
                  'Profil regelmäßig aktualisieren',
                  'Einheitliche Unternehmensdaten sicherstellen',
                ]}
                className="mb-8"
              />
              <div className="rounded-xl px-5 py-4 border-l-4" style={{ background: 'rgba(14,124,114,0.05)', borderLeftColor: PETROL }}>
                <p className="text-base font-semibold" style={{ color: INK }}>
                  Ein optimiertes Profil verbessert die Ausgangslage. Eine bestimmte Platzierung kann daraus jedoch nicht garantiert werden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            14. WEBSITE & ONPAGE-SEO
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: SURFACE }}>
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
                Jede wichtige Leistung benötigt einen klaren thematischen Schwerpunkt.
              </motion.h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BODY }}>
                Wenn viele Leistungen nur kurz auf einer einzigen Seite genannt werden, kann Google sie häufig nicht eindeutig zuordnen. Eine klare Seitenstruktur mit eigenen Schwerpunkten verbessert die inhaltliche Relevanz für Suchmaschinen.
              </p>
              <CheckList
                items={[
                  'Klare H1 pro Seite',
                  'Logische Überschriftenhierarchie',
                  'Individuelle Seitentitel und Meta-Descriptions',
                  'Verständliche URLs',
                  'Eindeutige Einleitung pro Leistung',
                  'Konkrete Leistungsbeschreibung',
                  'Lokaler Bezug und Einsatzgebiet',
                  'Häufige Kundenfragen beantworten',
                  'Interne Links zu verwandten Seiten',
                  'Bilder mit aussagekräftigen Alt-Texten',
                  'Klare Kontaktmöglichkeiten',
                  'Strukturierte Daten, sofern sinnvoll',
                ]}
                className="mb-8"
              />

              {/* Website-Crosslink Callout */}
              <motion.div
                className="rounded-xl border bg-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold mb-0.5" style={{ color: INK }}>Starke Rankings brauchen eine starke Website.</p>
                  <p className="text-xs" style={{ color: MUTED }}>Ohne saubere technische Basis bremst Ihre Website das SEO aus.</p>
                </div>
                <a
                  href="/webseite"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 border transition-all duration-300"
                  style={{ color: PETROL, borderColor: `${PETROL}25` }}
                >
                  Professionelle Unternehmenswebseiten
                  <ArrowRight size={13} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            15. KEYWORD-STRATEGIE
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: PETROL }}>Keyword-Strategie</p>
                <h2 className="font-heading font-bold mb-3" style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  Wie wir Keywords auswählen
                </h2>
                <p className="text-base" style={{ color: BODY }}>Damit es wirklich Kunden bringt – nicht nur Traffic.</p>
              </motion.div>
              <motion.div
                className="space-y-6 text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p style={{ color: BODY }}>
                  Viele SEO-Anbieter optimieren auf Begriffe mit möglichst hohem Suchvolumen. Wir konzentrieren uns auf Suchbegriffe, die zu qualifizierten Anfragen führen.
                </p>
                <div className="rounded-xl bg-white border p-5" style={{ borderColor: BORDER, boxShadow: '0 1px 4px rgba(12,18,16,0.06)' }}>
                  <p className="font-semibold text-sm mb-4" style={{ color: INK }}>Unsere Auswahlkriterien:</p>
                  <CheckList
                    items={[
                      'Leistung + Ort (z. B. „Dachdecker Leipzig")',
                      'Suchabsicht mit klarem Kundenbedarf',
                      'Longtail-Begriffe mit hoher Qualifikation',
                      'Realistische Chance im lokalen Wettbewerb',
                    ]}
                  />
                </div>
                <p style={{ color: BODY }}>
                  So entsteht ein Keyword-Set, das realistisch zu verbessern ist und gleichzeitig qualifizierte Anfragen erzeugt. Wir priorisieren klare Verbesserungsmöglichkeiten und bauen die Sichtbarkeit schrittweise aus.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            16. PROJEKTABLAUF (WieFunktioniertEsSection)
        ══════════════════════════════════════════════════════════════════ */}
        <WieFunktioniertEsSection onCtaClick={scrollToContact} ctaLabel="SEO-Potenzial unverbindlich prüfen lassen" />

        {/* ══════════════════════════════════════════════════════════════════
            17. ZIELGRUPPEN
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
              Für Unternehmen, die Kunden in einer klaren Region erreichen möchten
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { title: 'Handwerksbetriebe', desc: 'Zeigen Sie Leistungen und Einsatzgebiete so, dass Interessenten in Ihrer Region Sie zuerst finden.' },
                { title: 'Dienstleister', desc: 'Erklären Sie Ihr Angebot verständlich und werden Sie bei relevanten lokalen Suchanfragen sichtbar.' },
                { title: 'Praxen und Studios', desc: 'Helfen Sie Patienten und Interessenten, Ihre Leistungen und Ihren Standort schnell zu finden.' },
                { title: 'Beratungsunternehmen', desc: 'Bauen Sie lokale Sichtbarkeit auf und gewinnen Sie Anfragen aus Ihrer Region.' },
                { title: 'Restaurants und Hotels', desc: 'Erscheinen Sie bei lokalen Suchen und auf Google Maps mit vollständigen, überzeugenden Informationen.' },
                { title: 'Unternehmen mit mehreren Standorten', desc: 'Stellen Sie sicher, dass jeder Standort lokal gefunden wird – mit individuellen Seiten und Profilen.' },
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
                  <div className="h-8 w-8 rounded-lg mb-3" style={{ background: 'rgba(14,124,114,0.08)' }} aria-hidden />
                  <h3 className="font-heading font-bold text-sm mb-2" style={{ color: INK }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            18. STANDORT-ABSATZ (nur global)
        ══════════════════════════════════════════════════════════════════ */}
        {!isRegional && (
          <section className="py-12" style={{ background: SURFACE }}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: BODY }}>
                  Lokales SEO funktioniert dann am besten, wenn es auf Ihren Standort zugeschnitten ist. Wir unterstützen Unternehmen in{' '}
                  <a href="/leistungsgebiete/leipzig" style={{ color: PETROL }} className="hover:underline">Leipzig</a>,{' '}
                  <a href="/leistungsgebiete/markkleeberg" style={{ color: PETROL }} className="hover:underline">Markkleeberg</a> und{' '}
                  <a href="/leistungsgebiete/borna" style={{ color: PETROL }} className="hover:underline">Borna</a>{' '}
                  dabei, bei relevanten lokalen Suchanfragen besser gefunden zu werden – mit einer klaren Strategie direkt aus{' '}
                  <a href="/leistungsgebiete/groitzsch" style={{ color: PETROL }} className="hover:underline">Groitzsch</a>.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Lokaler Abschnitt (nur regional) */}
        {isRegional && (
          <section className="section-padding" style={{ background: SURFACE }}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading font-bold text-2xl mb-6" style={{ color: INK }}>
                    SEO für Unternehmen in {regionName}
                  </h2>
                  {regionContent?.localSection ? (
                    regionContent.localSection.map((p, i) => (
                      <motion.p
                        key={i}
                        className="text-base md:text-lg leading-relaxed mb-4"
                        style={{ color: BODY }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {p}
                      </motion.p>
                    ))
                  ) : (
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: BODY }}>
                      Als Agentur mit Sitz in Groitzsch kennen wir die Anforderungen von Unternehmen in {regionName} und der Region. Wir wissen, welche Suchbegriffe vor Ort zählen, wie die Konkurrenzsituation aussieht und wie wir Ihre lokale Sichtbarkeit gezielt stärken.
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
          <section className="py-16" style={{ background: PAPER }}>
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading font-bold text-2xl mb-6" style={{ color: INK }}>
                  Lokales SEO für Unternehmen in {regionName}
                </h2>
                {regionContent.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed mb-5" style={{ color: BODY }}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            19. FAQ
        ══════════════════════════════════════════════════════════════════ */}
        <section id="faq" className="section-padding" style={{ background: SURFACE }} aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              id="faq-heading"
              className="font-heading font-bold text-center mb-10"
              style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isRegional
                ? <span>FAQ – SEO Top 3 in <span style={{ color: PETROL }}>{regionName}</span></span>
                : 'Häufige Fragen zum SEO-Angebot'}
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <Accordion items={allFaqs} allowMultiple={false} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            20. SUBPAGE LINKS & RELATED SERVICES
        ══════════════════════════════════════════════════════════════════ */}
        <SubpageLinksBlock
          serviceSlug="seo-top-3"
          regionSlug={isRegional ? regionSlug : undefined}
          title="SEO-Themen im Detail"
        />

        <RelatedServices
          currentSlug="seo-top-3-in-google"
          anchorBySlug={{
            'ki-chatbots': '#ki-chatbot-fur-website-anfragen',
            'telefonassistenten': '#ki-telefonagent-fur-anrufe',
            'automatisierungen': '#automatisierungen-fur-follow-ups-terminplanung',
            'webseite': '#website-als-seo-basis',
          }}
        />

        {/* ══════════════════════════════════════════════════════════════════
            21. FINAL CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: PAPER }}>
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
                Kostenlose SEO-Potenzialanalyse
              </span>
              <h2
                className="font-heading font-bold mb-4"
                style={{ color: INK, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Bei welchen lokalen Suchanfragen werden Sie{isRegional ? ` in ${regionName}` : ''} heute noch übersehen?
              </h2>
              <p className="text-base mb-3 leading-relaxed" style={{ color: BODY }}>
                {isRegional
                  ? `Wir betrachten Ihre Website, Ihr Google-Unternehmensprofil und die wichtigsten Suchbegriffe für Ihre Leistungen in ${regionName}.`
                  : 'Wir betrachten Ihre Website, Ihr Google-Unternehmensprofil und die wichtigsten Suchbegriffe für Ihre Leistungen und Ihre Region.'}
              </p>
              <p className="text-sm mb-8" style={{ color: MUTED }}>
                Sie erhalten eine erste Einschätzung, welche Maßnahmen sinnvoll sind und wo realistisches Potenzial besteht.
              </p>
              <button onClick={scrollToContact} className="btn-primary mb-4">
                Kostenlose SEO-Potenzialanalyse sichern <ArrowRight size={18} />
              </button>
              <p className="text-xs mb-2" style={{ color: MUTED }}>Unverbindlich · Persönlich · Transparent erklärt</p>
              <p className="text-xs" style={{ color: MUTED }}>
                Noch Fragen?{' '}
                <a href="/haeufige-fragen" style={{ color: PETROL }} className="hover:underline">
                  Häufig gestellte Fragen
                </a>
              </p>
              {isRegional ? (
                <div className="mt-10 text-left max-w-2xl mx-auto">
                  <h3 className="font-heading font-bold text-xl mb-4" style={{ color: INK }}>
                    Weitere Leistungen in {regionName}
                  </h3>
                  <p className="mb-3 text-sm" style={{ color: BODY }}>
                    <a href={regionUrl} style={{ color: PETROL }} className="hover:underline font-heading font-bold">
                      Alle Leistungen in {regionName}
                    </a>
                    {' – '}Übersicht unserer Angebote in Ihrer Region.
                  </p>
                  <p className="mb-6 text-sm" style={{ color: BODY }}>
                    <a href="/seo-top-3-in-google" style={{ color: PETROL }} className="hover:underline">
                      SEO Top 3 im Überblick
                    </a>
                    {' – '}alle Details auf unserer Service-Seite.
                  </p>
                  <p className="text-sm mb-3" style={{ color: MUTED }}>SEO Top 3 in anderen Gebieten:</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {otherRegions.map((city, i) => (
                      <li key={city.slug}>
                        <a
                          href={`/leistungsgebiete/${city.slug}/seo-top-3`}
                          style={{ color: PETROL }}
                          className="hover:underline"
                        >
                          {getRegionServiceLinkText('seo-top-3', city.name, i)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <ServicedRegionsBlock />
                  <RegionServiceLinksBlock
                    serviceSlug="seo-top-3"
                    title="SEO: Top 3 in Google in Ihrem Gebiet"
                  />
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            22. KONTAKT & KARTE
        ══════════════════════════════════════════════════════════════════ */}
        <ContactForm
          service="seo"
          heading="Kostenlose SEO-Potenzialanalyse anfragen"
          subheading="Wir zeigen Ihnen, wo Verbesserungsmöglichkeiten bestehen und welche lokalen Suchbegriffe für Ihr Unternehmen relevant sind."
        />

        <GoogleMapsSection />
      </div>
      <StickyCtaBar ctaLabel="SEO-Potenzial prüfen lassen" />
    </>
  );
};

export default SeoTop3;
export type { SeoTop3Props };
