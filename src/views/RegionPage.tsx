'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Workflow,
  Globe,
  Zap,
  Search,
  Users,
  ChevronDown,
  Minus,
  MapPin,
  Phone,
  PhoneOff,
  Clock,
  TrendingDown,
  Building2,
  Navigation,
  Landmark,
} from 'lucide-react';
import { getRegionContent, getValidRegionSlug } from '../data/regionContent';
import { getNeighborCities } from '../data/leistungsgebiete';
import { SERVICES, getRegionServiceLinkText } from '../data/services';
import { businessInfo } from '../data/businessInfo';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbSchemaRegion from '../components/BreadcrumbSchemaRegion';
import BreadcrumbNav from '../components/BreadcrumbNav';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import HeroScrollIndicator from '../components/HeroScrollIndicator';
import { buildFaqSchema } from '../lib/jsonld';

/** Variierende Ankertexte für Nachbarstadt-Links */
const neighborLinkLabels: Array<(name: string) => string> = [
  (name) => `KI-Agentur ${name}`,
  (name) => `KI-Lösungen in ${name}`,
  (name) => `Unsere Leistungen in ${name}`,
  (name) => `${name} entdecken`,
  (name) => `Automatisierung für ${name}`,
  (name) => `Mehr zu ${name}`,
];

const RegionPage: React.FC<{ region: string }> = ({ region }) => {
  const slug = getValidRegionSlug(region);
  const content = getRegionContent(slug);
  const neighborCities = getNeighborCities(slug, 6);

  const [openExample, setOpenExample] = React.useState<number | null>(null);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const practiceExamples = [
    {
      icon: <MessageCircle size={32} strokeWidth={1.5} />,
      title: 'Digitale Kundenassistenz',
      vorher:
        'Kunden stellen immer wieder dieselben Fragen per Website, E-Mail oder Social Media. Außerhalb der Öffnungszeiten bleiben Anfragen unbeantwortet.',
      nachher:
        'Die digitale Kundenassistenz beantwortet Fragen automatisch, nimmt Anliegen auf und reagiert individuell auf Nachrichten – rund um die Uhr.',
      ergebnis: 'Schnellere Antworten für Kunden. Weniger Unterbrechungen im Arbeitsalltag.',
    },
    {
      icon: <Workflow size={32} strokeWidth={1.5} />,
      title: 'Telefonische Kundenassistenz',
      vorher:
        'Anrufe gehen verloren oder unterbrechen ständig die Arbeit. Außerhalb der Geschäftszeiten ist niemand erreichbar.',
      nachher:
        'Die telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet Fragen und nimmt Termine automatisch an.',
      ergebnis: 'Keine verpassten Anrufe mehr. Ruhigerer Arbeitsalltag.',
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: 'Automatisierungen für Anfragen, Vertrieb & Terminplanung',
      vorher:
        'Anfragen gehen unter, Termine werden per Hin-und-Her koordiniert, Follow-ups werden vergessen. Alles verteilt in E-Mails, Notizen und Excel.',
      nachher:
        'Anfragen werden automatisch erfasst, sortiert und zugewiesen. Termine buchen Kunden selbst, Bestätigung und Reminder laufen automatisch. Nichts geht mehr verloren.',
      ergebnis: 'Mehr Überblick, weniger Stress, schnelle Reaktion – ohne dass jemand dran denken muss.',
    },
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: 'Websites & SEO',
      vorher:
        'Die Website ist online, bringt aber kaum Anfragen. Viele Kunden finden das Unternehmen nicht.',
      nachher:
        'Eine moderne Website, die verständlich aufgebaut ist und bei Suchmaschinen besser sichtbar wird.',
      ergebnis: 'Mehr Besucher. Mehr Anfragen.',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Erstgespräch', desc: 'Ziele und Potenziale klären' },
    { num: '02', title: 'Planung', desc: 'Individuelles Konzept entwickeln' },
    { num: '03', title: 'Umsetzung', desc: 'Saubere technische Integration' },
    { num: '04', title: 'Betreuung', desc: 'Langfristige Unterstützung' },
  ];

  const toggleExample = (index: number) => {
    setOpenExample(openExample === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchemaRegion regionName={content.name} regionSlug={slug} />
      <LocalBusinessSchema pageType="homepage" customDescription={content.metaDescription} />
      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildFaqSchema({
                url: `https://pixelkraftwerk-ai.com/leistungsgebiete/${slug}`,
                faqs: content.faqs.map((f) => ({ question: f.q, answer: f.a })),
              })
            ),
          }}
        />
      )}

      {/* HERO SECTION */}
      <section
        data-section-label="Start"
        className="relative h-screen flex flex-col overflow-hidden"
        style={{ background: '#FAFAF9' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero-startseite-ki-agentur-v2.webp"
            alt={`KI-Agentur Pixel Kraftwerk in ${content.name} – Chatbots, Automatisierungen und SEO für Unternehmen`}
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)' }}
            aria-hidden
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav items={[
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
            { label: content.name },
          ]} />
        </div>

        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-5"
              >
                <span className="pill-badge">
                  <MapPin size={12} className="flex-shrink-0" />
                  Ihre lokale KI-Agentur
                </span>
              </motion.div>

              <motion.h1
                className="font-heading font-bold tracking-tight mb-4 leading-[1.08]"
                style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                KI-Agentur {content.name}
              </motion.h1>

              <motion.h2
                className="text-lg max-w-xl mb-3 leading-relaxed"
                style={{ color: '#0E7C72', fontWeight: 600 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                KI-Chatbots, Telefonassistenten, Automatisierungen, Webdesign, SEO &amp; CRM-Systeme in {content.name}
              </motion.h2>

              <motion.p
                className="text-lg max-w-xl mb-5 leading-relaxed"
                style={{ color: '#404B48' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Klare Abläufe. Mehr Anfragen. Weniger Stress. Wir automatisieren Kundenkommunikation, Terminbuchung und interne Abläufe mit KI für Unternehmen in {content.name} – damit Ihr Team wieder Luft zum Arbeiten hat.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <button onClick={scrollToContactForm} className="btn-primary">
                  <ArrowRight size={18} />
                  Kostenloses Erstgespräch sichern
                </button>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
                style={{ color: '#68746F' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} style={{ color: '#0E7C72' }} className="flex-shrink-0" />
                  {businessInfo.address.addressLocality}
                </span>
                <span style={{ color: '#E4E9E7' }}>|</span>
                <a
                  href={`tel:${businessInfo.contact.telephoneE164}`}
                  className="inline-flex items-center gap-1.5 hover:underline transition-colors"
                  style={{ color: '#68746F' }}
                >
                  <Phone size={13} style={{ color: '#0E7C72' }} className="flex-shrink-0" />
                  {businessInfo.contact.telephone}
                </a>
              </motion.div>
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section
        data-section-label="Herausforderung"
        className="section-padding bg-dark-400 relative"
      >
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
          aria-hidden
        />
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100">
                So sieht der Alltag vieler Unternehmen in {content.name}{' '}
                <span className="text-primary-500">heute aus:</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                {[
                  'Kundenanfragen kommen unregelmäßig und ungeordnet rein.',
                  'Termine müssen ständig manuell abgestimmt werden.',
                  'E-Mails, Telefonate und Rückfragen unterbrechen die Arbeit.',
                  'Viele Aufgaben bleiben direkt beim Inhaber hängen.',
                  'Organisation und Marketing fühlen sich chaotisch an.',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-white border p-5 shadow-card"
                    style={{ borderColor: '#E4E9E7' }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5" style={{ background: 'rgba(239,68,68,0.07)', color: '#B91C1C' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AGITATION SECTION */}
      <section
        data-section-label="Kosten"
        className="section-padding bg-dark-400 relative overflow-hidden"
      >
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="container mx-auto px-6 md:px-12 relative">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-4 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was Sie das <span className="text-red-400">jede Woche</span> kostet – in{' '}
              {content.name}
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-light-300 text-center mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Jeder Tag ohne saubere Abläufe hat einen Preis. Hier sind drei davon – schwarz auf
              weiß.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {[
                {
                  icon: <PhoneOff size={28} strokeWidth={1.5} />,
                  kicker: 'Entgangener Umsatz',
                  big: 'Verpasst.',
                  text: (
                    <>
                      Jeder verpasste Anruf ist ein möglicher Auftrag. Schon zwei verpasste Anrufe
                      pro Woche summieren sich übers Jahr zu{' '}
                      <span className="text-light-100 font-bold">
                        über 100 verlorenen Chancen
                      </span>
                      .
                    </>
                  ),
                },
                {
                  icon: <Clock size={28} strokeWidth={1.5} />,
                  kicker: 'Dienstag, 08:47',
                  big: 'Verloren.',
                  text: (
                    <>
                      Ein Anruf kommt rein, während Sie im Termin sind. Keine Mailbox. Der Kunde
                      in {content.name} wählt den nächsten Treffer auf Google –{' '}
                      <span className="text-light-100 font-bold">
                        und ruft nie zurück
                      </span>
                      .
                    </>
                  ),
                },
                {
                  icon: <TrendingDown size={28} strokeWidth={1.5} />,
                  kicker: 'Der Wettbewerb',
                  big: '< 5 Min',
                  text: (
                    <>
                      Reaktionszeit, mit der Ihre Konkurrenz in {content.name} gerade Anfragen
                      gewinnt.{' '}
                      <span className="text-light-100 font-bold">
                        Wer langsamer ist, taucht im Kopf des Kunden nicht mehr auf.
                      </span>
                    </>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-red-500/30 shadow-card p-6 md:p-7 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 mb-5">
                    {item.icon}
                  </div>
                  <p className="text-xs uppercase tracking-wide text-red-400 font-heading font-bold mb-2">
                    {item.kicker}
                  </p>
                  <p className="text-3xl md:text-4xl font-heading font-extrabold text-light-100 mb-4 leading-none">
                    {item.big}
                  </p>
                  <p className="text-light-300 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-xl md:text-2xl text-light-100 font-bold text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Jede Woche ohne klare Abläufe kostet Sie{' '}
              <span className="text-red-400">Umsatz, Zeit und Nerven</span>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FUTURE / LÖSUNG SECTION */}
      <section data-section-label="Lösung" className="section-padding bg-dark-500 relative">
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
          aria-hidden
        />
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-sm md:text-base text-primary-400 font-heading font-bold uppercase tracking-wide mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Sie müssen das nicht länger akzeptieren.
              </motion.p>
              <p className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100">
                So arbeitet ein <span className="text-primary-500">sauber automatisierter</span>{' '}
                Betrieb in {content.name}:
              </p>

              <div className="space-y-4 text-left max-w-2xl mx-auto mb-14">
                {[
                  'Kundenanfragen werden automatisch entgegengenommen und beantwortet.',
                  'Termine werden selbstständig gebucht, bestätigt und erinnert.',
                  'Mitarbeiter arbeiten mit klaren, verlässlichen Abläufen.',
                  'Der Betrieb läuft ruhiger, strukturierter und planbarer.',
                  'Der Inhaber gewinnt Zeit und Fokus für das Kerngeschäft zurück.',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle
                      className="text-primary-500 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-light-200 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                {[
                  { big: '24/7', label: 'Erreichbarkeit rund um die Uhr' },
                  { big: '< 5 Min', label: 'Reaktionszeit auf neue Anfragen' },
                  { big: '2–8 Wo.', label: 'Bis die erste Lösung live ist' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="rounded-2xl bg-dark-400/80 backdrop-blur-sm border border-primary-500/20 shadow-card p-5 md:p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-3xl md:text-4xl font-heading font-extrabold text-primary-400 mb-2 leading-none">
                      {stat.big}
                    </p>
                    <p className="text-sm text-light-300 leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ÜBER DIE REGION */}
      <section data-section-label={`Über ${content.name}`} className="py-20 md:py-24 bg-dark-400 relative">
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
          aria-hidden
        />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header-Block */}
            <motion.div
              className="text-center mb-12 md:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30 px-3 py-1.5 text-xs font-heading font-bold tracking-wide mb-5">
                Regional verankert
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-light-100">
                Pixel Kraftwerk in {content.name}
              </h2>
              <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-light-300">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary-500 flex-shrink-0" />
                  {businessInfo.address.streetAddress} · {businessInfo.address.postalCode}{' '}
                  {businessInfo.address.addressLocality}
                </span>
                <span className="hidden sm:inline text-light-400/60">·</span>
                <a
                  href={`tel:${businessInfo.contact.telephoneE164}`}
                  className="inline-flex items-center gap-1.5 hover:text-primary-400 transition-colors"
                >
                  <Phone size={14} className="text-primary-500 flex-shrink-0" />
                  {businessInfo.contact.telephone}
                </a>
              </div>
            </motion.div>

            {/* Paragraph-Bento-Grid */}
            {content.paragraphs.length > 0 && (() => {
              const paragraphMeta: Array<{
                icon: React.ElementType;
                headline: string;
                span: string;
                featured: boolean;
              }> = [
                {
                  icon: Building2,
                  headline: `Stadtpuls ${content.name}`,
                  span: 'md:col-span-6 lg:col-span-4',
                  featured: true,
                },
                {
                  icon: Workflow,
                  headline: `Vom Leistungs- zum Systemproblem`,
                  span: 'md:col-span-6 lg:col-span-2',
                  featured: false,
                },
                {
                  icon: Navigation,
                  headline: `Anfahrt & Nähe zu ${content.name}`,
                  span: 'md:col-span-6 lg:col-span-3',
                  featured: false,
                },
                {
                  icon: Users,
                  headline: `Kleine Teams, große Last in ${content.name}`,
                  span: 'md:col-span-6 lg:col-span-3',
                  featured: false,
                },
                {
                  icon: Landmark,
                  headline: `Historie trifft Digitalisierung in ${content.name}`,
                  span: 'md:col-span-6',
                  featured: true,
                },
              ];

              return (
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5 lg:gap-6 mb-14 md:mb-16">
                  {content.paragraphs.map((p, i) => {
                    const meta = paragraphMeta[i] ?? {
                      icon: CheckCircle,
                      headline: `Punkt ${i + 1}`,
                      span: 'md:col-span-6 lg:col-span-3',
                      featured: false,
                    };
                    const Icon = meta.icon;
                    const numberStr = String(i + 1).padStart(2, '0');

                    return (
                      <motion.article
                        key={i}
                        className={`${meta.span} group relative overflow-hidden rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 transition-all duration-500 p-7 md:p-9`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.06 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                      >
                        {meta.featured && (
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.06] via-transparent to-transparent pointer-events-none"
                            aria-hidden
                          />
                        )}
                        <div
                          className="absolute -top-4 -right-2 md:-top-6 md:-right-4 text-[7rem] md:text-[9rem] font-heading font-black leading-none select-none pointer-events-none text-primary-500/[0.07] group-hover:text-primary-500/[0.12] transition-colors duration-500"
                          aria-hidden
                        >
                          {numberStr}
                        </div>
                        <div className="relative">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-500/15 text-primary-400 border border-primary-500/25 shadow-inner flex-shrink-0">
                              <Icon size={20} strokeWidth={1.75} />
                            </div>
                            <span className="text-xs uppercase tracking-[0.18em] text-primary-400 font-heading font-bold">
                              {numberStr}
                              <span className="mx-2 text-primary-500/40">/</span>
                              {String(content.paragraphs.length).padStart(2, '0')}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-heading font-bold text-light-100 mb-3 leading-snug">
                            {meta.headline}
                          </h3>
                          <p className="text-light-200 text-base leading-relaxed">{p}</p>
                        </div>
                        <div
                          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          aria-hidden
                        />
                      </motion.article>
                    );
                  })}
                </div>
              );
            })()}

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 hover:underline font-heading font-bold"
              >
                Kostenloses Erstgespräch anfragen
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES HUB SECTION */}
      <section
        data-section-label="Leistungen"
        className="section-padding relative bg-dark-500 overflow-hidden"
      >
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-primary-500/5 pointer-events-none"
          aria-hidden
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-100 mb-4">
                Leistungen in {content.name}
              </h2>
              <p className="text-lg text-light-200 max-w-3xl mx-auto">
                Digitale Lösungen, die Ihr Unternehmen entlasten und den Arbeitsalltag deutlich
                vereinfachen.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto mb-12 rounded-2xl border bg-white p-6 shadow-card"
              style={{ borderColor: '#E4E9E7' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-2">
                {content.servicesHighlight.map((s, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ background: 'rgba(14,124,114,0.06)', color: '#0E7C72', borderColor: 'rgba(14,124,114,0.2)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map((s, i) => {
                const altMap: Record<string, string> = {
                  'ki-chatbots':
                    'Digitale Kundenassistenz: KI-Chatbot auf Laptop und Smartphone, Kundenanfragen in Sekunden beantworten',
                  telefonassistenten:
                    'KI-Telefonassistent: Anrufe entgegennehmen, Leads qualifizieren, Termine buchen – 24/7',
                  automatisierungen:
                    'Automatisierungen: Anfrage, Sortierung, Zuweisung, Follow-up, Termin und CRM – durchgängige Prozessautomatisierung',
                  webseiten:
                    'Moderne Websites: verkaufsstark, suchmaschinenoptimiert, in Tagen statt Wochen',
                  'seo-top-3':
                    'Top 3 in Google: Google-Suchergebnisse mit lokalen Einträgen und Karte – Ihr Unternehmen sichtbar vorne',
                  'crm-systeme':
                    'CRM-System: Zentrale Kundenverwaltung und Lead-Pipeline für kleine Unternehmen',
                };

                const altText = content.serviceCardAltTexts?.[s.slug] ?? altMap[s.slug];

                if (s.slug === 'ki-chatbots') {
                  return (
                    <div key={`card-${s.slug}`} className="flex flex-col">
                      <h2 className="text-lg md:text-xl font-heading font-bold text-light-100 mb-3 leading-snug">
                        KI-Chatbots für digitale Kundenassistenz in {content.name}
                      </h2>
                      <motion.a
                        href={`/leistungsgebiete/${slug}/${s.slug}`}
                        className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                          <Image
                            src="/images/ki-chatbot-digitale-kundenassistenz.webp"
                            alt={altText}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none"
                            aria-hidden
                          />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                            <MessageCircle size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">Rund um die Uhr</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-light-300 text-base leading-relaxed mb-4">
                            Eine digitale Assistenz, die Kundenanfragen beantwortet, Nachrichten
                            entgegennimmt und Anliegen automatisch verarbeitet – auf Ihrer Website
                            und in Messengern, rund um die Uhr.
                          </p>
                          <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            KI-Chatbots für Ihre Website
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </div>
                        </div>
                      </motion.a>
                    </div>
                  );
                }

                if (s.slug === 'telefonassistenten') {
                  return (
                    <div key={`card-${s.slug}`} className="flex flex-col">
                      <h2 className="text-lg md:text-xl font-heading font-bold text-light-100 mb-3 leading-snug">
                        KI-Telefonassistenten für Anrufannahme & Terminbuchung in {content.name}
                      </h2>
                      <motion.a
                        href={`/leistungsgebiete/${slug}/${s.slug}`}
                        className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                          <Image
                            src="/images/ki-telefonassistent.webp"
                            alt={altText}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none"
                            aria-hidden
                          />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                            <Workflow size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">
                              Nie wieder verpasste Anrufe
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-light-300 text-base leading-relaxed mb-4">
                            Eine telefonische Assistenz, die für Sie ans Telefon geht, Fragen
                            beantwortet und Termine annimmt – auch dann, wenn gerade niemand
                            erreichbar ist.
                          </p>
                          <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            Telefonassistenz rund um die Uhr
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </div>
                        </div>
                      </motion.a>
                    </div>
                  );
                }

                if (s.slug === 'webseiten') {
                  return (
                    <div key={`card-${s.slug}`} className="flex flex-col">
                      <h2 className="text-lg md:text-xl font-heading font-bold text-light-100 mb-3 leading-snug">
                        Webseiten für Unternehmen in {content.name} mit klarer Nutzerführung
                      </h2>
                      <motion.a
                        href={`/leistungsgebiete/${slug}/${s.slug}`}
                        className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                          <Image
                            src="/images/webseiten-mietmodell-agentur.webp"
                            alt={altText}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none"
                            aria-hidden
                          />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                            <Globe size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">
                              In Tagen statt Wochen
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-light-300 text-base leading-relaxed mb-4">
                            Moderne Webseiten, die leicht verständlich sind und bei Suchmaschinen
                            sichtbar werden, damit Kunden Sie schneller finden und direkt Kontakt
                            aufnehmen können.
                          </p>
                          <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            Moderne Webseiten im Mietmodell
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </div>
                        </div>
                      </motion.a>
                    </div>
                  );
                }

                if (s.slug === 'automatisierungen') {
                  return (
                    <div key={`card-${s.slug}`} className="flex flex-col">
                      <h2 className="text-lg md:text-xl font-heading font-bold text-light-100 mb-3 leading-snug">
                        Automatisierungen für Anfragen, Vertrieb & Termine in {content.name}
                      </h2>
                      <motion.a
                        href={`/leistungsgebiete/${slug}/${s.slug}`}
                        className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                          <Image
                            src="/images/automatisierungen-anfragen-vertrieb-terminplanung.webp"
                            alt={altText}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none"
                            aria-hidden
                          />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                            <Zap size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">
                              Abläufe laufen von selbst
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-light-300 text-base leading-relaxed mb-4">
                            Anfragen automatisch erfassen, sortieren und zuweisen. Termine buchen,
                            bestätigen und erinnern – ohne Hin-und-Her. Damit Abläufe von selbst
                            laufen.
                          </p>
                          <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            Automatisierungen für Anfragen &amp; Termine
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </div>
                        </div>
                      </motion.a>
                    </div>
                  );
                }

                if (s.slug === 'seo-top-3') {
                  return (
                    <div key={`card-${s.slug}`} className="flex flex-col">
                      <h2 className="text-lg md:text-xl font-heading font-bold text-light-100 mb-3 leading-snug">
                        Lokales SEO: Top 3 in Google für {content.name}
                      </h2>
                      <motion.a
                        href={`/leistungsgebiete/${slug}/${s.slug}`}
                        className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                          <Image
                            src="/images/seo-top-3-google-local-pack.webp"
                            alt={altText}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none"
                            aria-hidden
                          />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                            <Search size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">
                              Top 3 in 90 Tagen
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-light-300 text-base leading-relaxed mb-4">
                            Lokales SEO mit Fokus auf Top-Platzierungen für die Suchbegriffe, die
                            Ihnen wirklich Kunden bringen – mit klarer Strategie und transparenten
                            Ergebnissen.
                          </p>
                          <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            In 90 Tagen in die Top 3 bei Google
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </div>
                        </div>
                      </motion.a>
                    </div>
                  );
                }

                if (s.slug === 'crm-systeme') {
                  return (
                    <div key={`card-${s.slug}`} className="flex flex-col">
                      <h2 className="text-lg md:text-xl font-heading font-bold text-light-100 mb-3 leading-snug">
                        CRM-Systeme für strukturiertes Lead-Management in {content.name}
                      </h2>
                      <motion.a
                        href={`/leistungsgebiete/${slug}/${s.slug}`}
                        className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                          <Image
                            src="/images/crm-systeme-kundenverwaltung.webp"
                            alt={altText ?? 'CRM-System für Kundenverwaltung und Lead-Management'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none"
                            aria-hidden
                          />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                            <Users size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">
                              Kein Lead geht verloren
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-light-300 text-base leading-relaxed mb-4">
                            Zentrale Kundenverwaltung, automatisierte Follow-ups und transparente
                            Vertriebspipeline – damit kein Lead untergeht.
                          </p>
                          <span className="inline-flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            {getRegionServiceLinkText('crm-systeme', content.name, i)}
                            <ArrowRight
                              size={16}
                              className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </span>
                        </div>
                      </motion.a>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            <p className="text-center mt-10 text-light-200">
              <a
                href="/leistungen"
                className="text-primary-400 hover:underline font-heading font-bold"
              >
                Alle Leistungen ansehen
              </a>
              {' · '}
              <a
                href="/leistungsgebiete"
                className="text-primary-400 hover:underline font-heading font-bold"
              >
                Alle Leistungsgebiete
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICE EXAMPLES SECTION */}
      <section
        data-section-label="Praxisbeispiele"
        className="section-padding bg-dark-400 relative"
      >
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
          aria-hidden
        />
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-light-100 text-center">
              Praxisbeispiele aus dem Unternehmensalltag
            </h2>

            <div className="space-y-3">
              {practiceExamples.map((example, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => toggleExample(index)}
                    className="w-full flex items-center justify-between py-5 text-left border-b border-dark-200 hover:border-primary-500/50 transition-all duration-300 rounded-lg"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-lg font-heading font-bold text-light-100 flex items-center">
                      <motion.div
                        animate={{ rotate: openExample === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mr-4"
                      >
                        <ChevronDown className="text-primary-500" size={24} />
                      </motion.div>
                      <span className="text-primary-500 mr-3">{example.icon}</span>
                      {example.title}
                    </span>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openExample === index ? 'auto' : 0,
                      opacity: openExample === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 pl-12 space-y-6">
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Vorher:</p>
                        <p className="text-light-200 text-sm leading-relaxed">{example.vorher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Nachher:</p>
                        <p className="text-light-200 text-sm leading-relaxed">{example.nachher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Ergebnis:</p>
                        <p className="text-light-100 font-bold border-l-4 border-primary-500 pl-3 text-sm leading-relaxed">
                          {example.ergebnis}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section data-section-label="Ablauf" className="section-padding bg-dark-500 relative">
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
          aria-hidden
        />
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-20 text-light-100 text-center">
              So läuft die Zusammenarbeit mit Pixel Kraftwerk in {content.name} ab
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div className="text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-5xl font-heading font-bold mb-2">{step.num}</div>
                      <div className="h-1 w-16 bg-primary-500"></div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-light-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-light-200 text-base leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        data-section-label="Jetzt anfragen"
        className="section-padding bg-gradient-to-b from-dark-500 via-dark-500 to-primary-500/10 relative overflow-hidden"
      >
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
          aria-hidden
        />
        <div className="container mx-auto px-6 md:px-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-light-100">
              Jetzt unverbindlich anfragen für Ihr Unternehmen in {content.name} – wir melden uns
              innerhalb von 24 Stunden
            </h2>

            <motion.button
              onClick={scrollToContactForm}
              className="inline-flex items-center px-10 py-4 rounded-xl bg-primary-500 text-dark-500 font-heading font-bold text-lg shadow-lg shadow-primary-500/20 hover:bg-primary-400 hover:shadow-primary-glow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 min-h-[44px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Jetzt unverbindlich anfragen
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {content.faqs.length > 0 && (
        <section id="faq" data-section-label="FAQ" className="section-padding bg-dark-400 relative">
          <div
            className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
            aria-hidden
          />
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Häufige Fragen – {content.name}
              </motion.h2>

              <div className="space-y-4">
                {content.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-dark-200/70 rounded-xl overflow-hidden shadow-card"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-300/50 transition-colors duration-200"
                    >
                      <span className="text-base font-heading font-bold text-light-100 pr-4">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="text-primary-500" size={20} />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? 'auto' : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-light-200 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <p className="text-center mt-8 text-light-300 text-sm">
                Noch mehr Antworten finden Sie auf unserer{' '}
                <a
                  href="/haeufige-fragen"
                  className="text-primary-400 hover:underline font-heading font-bold"
                >
                  FAQ-Seite
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      )}

      {neighborCities.length > 0 && (
        <section data-section-label="Nachbarstädte" className="py-16 bg-dark-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4 text-center">
                Weitere Städte in der Nähe von <span className="text-primary-500">{content.name}</span>
              </h2>
              <p className="text-light-200 text-center mb-10 max-w-2xl mx-auto">
                Pixel Kraftwerk betreut auch Unternehmen in den umliegenden Städten – mit denselben
                KI-Lösungen, kurzen Wegen und persönlicher Beratung.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborCities.map((city, i) => (
                  <a
                    key={city.slug}
                    href={`/leistungsgebiete/${city.slug}`}
                    className="flex items-center gap-3 p-4 bg-white border border-dark-200 hover:border-primary-500/50 transition-colors group rounded-2xl shadow-card"
                  >
                    <MapPin size={18} className="text-primary-500 flex-shrink-0" />
                    <span className="text-light-100 font-heading text-sm group-hover:text-primary-400 transition-colors">
                      {neighborLinkLabels[i % neighborLinkLabels.length](city.name)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <ContactForm />
      <GoogleMapsSection />
    </div>
  );
};

export default RegionPage;
