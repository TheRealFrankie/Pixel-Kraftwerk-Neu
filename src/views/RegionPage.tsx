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
  MapPin,
  Phone,
  PhoneOff,
  Clock,
  TrendingDown,
  Building2,
  Navigation,
  Landmark,
  Database,
} from 'lucide-react';
import { getRegionContent, getValidRegionSlug } from '../data/regionContent';
import { getNeighborCities } from '../data/leistungsgebiete';
import { getRegionServiceLinkText } from '../data/services';
import type { ServiceSlug } from '../data/services';
import { businessInfo } from '../data/businessInfo';
import AboutTeamSection from '../components/AboutTeamSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbSchemaRegion from '../components/BreadcrumbSchemaRegion';
import BreadcrumbNav from '../components/BreadcrumbNav';
import TrustLine from '../components/TrustLine';
import Accordion from '../components/Accordion';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import { buildFaqSchema } from '../lib/jsonld';

/* ─── Design Tokens ─────────────────────────────────────────────────────────── */
const INK     = '#0C1210';
const BODY    = '#404B48';
const MUTED   = '#68746F';
const PETROL  = '#0E7C72';
const BORDER  = '#E4E9E7';
const SURFACE = '#F3F5F4';

/* ─── Nachbarstadt-Link-Labels ───────────────────────────────────────────────── */
const neighborLinkLabels: Array<(name: string) => string> = [
  (name) => `KI-Agentur ${name}`,
  (name) => `KI-Lösungen in ${name}`,
  (name) => `Unsere Leistungen in ${name}`,
  (name) => `${name} entdecken`,
  (name) => `Automatisierung für ${name}`,
  (name) => `Mehr zu ${name}`,
];

/* ─── Service-Kacheln (analog Home's serviceCards) ───────────────────────────── */
interface ServiceCardDef {
  slug: ServiceSlug;
  img: string;
  alt: string;
  objectPosition: string;
  badge: string;
  desc: string;
  delay: number;
}

const SERVICE_CARDS: ServiceCardDef[] = [
  {
    slug: 'ki-chatbots',
    img: '/images/ki-chatbot-digitale-kundenassistenz-hero.png',
    alt: 'Digitale Kundenassistenz auf Laptop und Smartphone – KI-Chatbot Hero',
    objectPosition: 'center',
    badge: 'Rund um die Uhr',
    desc: 'Eine digitale Assistenz, die Kundenanfragen beantwortet, Nachrichten entgegennimmt und Anliegen automatisch verarbeitet – auf Ihrer Website und in Messengern, rund um die Uhr.',
    delay: 0.1,
  },
  {
    slug: 'telefonassistenten',
    img: '/images/ki-telefonassistent-hero.png',
    alt: 'KI-Telefonassistent – professionelle Anrufannahme rund um die Uhr',
    objectPosition: '55% center',
    badge: 'Nie wieder verpasste Anrufe',
    desc: 'Eine telefonische Assistenz, die für Sie ans Telefon geht, Fragen beantwortet und Termine annimmt – auch dann, wenn gerade niemand erreichbar ist.',
    delay: 0.2,
  },
  {
    slug: 'webseiten',
    img: '/images/webseiten-hero-mockup-laptop-handy.png',
    alt: 'Moderne responsive Website auf Laptop und Smartphone',
    objectPosition: '78% center',
    badge: 'In Tagen statt Wochen',
    desc: 'Moderne Webseiten, die leicht verständlich sind und bei Suchmaschinen sichtbar werden, damit Kunden Sie schneller finden und direkt Kontakt aufnehmen können.',
    delay: 0.3,
  },
  {
    slug: 'automatisierungen',
    img: '/images/automatisierungen-anfragen-vertrieb-terminplanung.webp',
    alt: 'Automatisierungen: Anfrage, Sortierung, Zuweisung, Follow-up, Termin und CRM',
    objectPosition: 'center',
    badge: 'Abläufe laufen von selbst',
    desc: 'Anfragen automatisch erfassen, sortieren und zuweisen. Termine buchen, bestätigen und erinnern – ohne Hin-und-Her. Damit Abläufe von selbst laufen.',
    delay: 0.35,
  },
  {
    slug: 'seo-top-3',
    img: '/images/seo-top3-in-google.webp',
    alt: 'Top 3 in Google – lokale Sichtbarkeit und Google-Rankings',
    objectPosition: 'center',
    badge: 'Top 3 in 90 Tagen',
    desc: 'Lokales SEO mit Fokus auf Top-Platzierungen für die Suchbegriffe, die Ihnen wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.',
    delay: 0.4,
  },
  {
    slug: 'crm-systeme',
    img: '/images/crm-systeme-kundenverwaltung.webp',
    alt: 'CRM-System für Kundenverwaltung und Lead-Management',
    objectPosition: 'center',
    badge: 'Kein Lead geht verloren',
    desc: 'Alle Anfragen, Angebote und Kundenkontakte zentral verwalten. Automatische Follow-ups, transparente Pipeline und Auswertungen – damit aus Interessenten Aufträge werden.',
    delay: 0.45,
  },
];

/* ─── Badge-Icons pro Service (JSX innerhalb Komponente) ───────────────────── */
const SERVICE_BADGE_ICONS: Record<ServiceSlug, React.ReactNode> = {
  'ki-chatbots':       <MessageCircle size={18} strokeWidth={1.5} />,
  telefonassistenten:  <Workflow size={18} strokeWidth={1.5} />,
  webseiten:           <Globe size={18} strokeWidth={1.5} />,
  automatisierungen:   <Zap size={18} strokeWidth={1.5} />,
  'seo-top-3':         <Search size={18} strokeWidth={1.5} />,
  'crm-systeme':       <Users size={18} strokeWidth={1.5} />,
};

/* ─── Komponente ─────────────────────────────────────────────────────────────── */
const RegionPage: React.FC<{ region: string }> = ({ region }) => {
  const slug = getValidRegionSlug(region);
  const content = getRegionContent(slug);
  const neighborCities = getNeighborCities(slug, 6);

  const [openExample, setOpenExample] = React.useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── Praxisbeispiele ──────────────────────────────────────────────────── */
  const practiceExamples = [
    {
      icon: <MessageCircle size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Digitale Kundenassistenz',
      vorher:
        'Kunden stellen immer wieder dieselben Fragen per Website, E-Mail oder Social Media. Außerhalb der Öffnungszeiten bleiben Anfragen unbeantwortet.',
      nachher:
        'Die digitale Kundenassistenz beantwortet Fragen automatisch, nimmt Anliegen auf und reagiert individuell auf Nachrichten – rund um die Uhr.',
      ergebnis: 'Schnellere Antworten für Kunden. Weniger Unterbrechungen im Arbeitsalltag.',
    },
    {
      icon: <Workflow size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Telefonische Kundenassistenz',
      vorher:
        'Anrufe gehen verloren oder unterbrechen ständig die Arbeit. Außerhalb der Geschäftszeiten ist niemand erreichbar.',
      nachher:
        'Die telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet Fragen und nimmt Termine automatisch an.',
      ergebnis: 'Keine verpassten Anrufe mehr. Ruhigerer Arbeitsalltag.',
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Automatisierungen für Anfragen, Vertrieb & Terminplanung',
      vorher:
        'Anfragen gehen unter, Termine werden per Hin-und-Her koordiniert, Follow-ups werden vergessen. Alles verteilt in E-Mails, Notizen und Excel.',
      nachher:
        'Anfragen werden automatisch erfasst, sortiert und zugewiesen. Termine buchen Kunden selbst, Bestätigung und Reminder laufen automatisch. Nichts geht mehr verloren.',
      ergebnis: 'Mehr Überblick, weniger Stress, schnelle Reaktion – ohne dass jemand dran denken muss.',
    },
    {
      icon: <Globe size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Websites & SEO',
      vorher:
        'Die Website ist online, bringt aber kaum Anfragen. Viele Kunden finden das Unternehmen nicht.',
      nachher:
        'Eine moderne Website, die verständlich aufgebaut ist und bei Suchmaschinen besser sichtbar wird.',
      ergebnis: 'Mehr Besucher. Mehr Anfragen.',
    },
    {
      icon: <Database size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'CRM-Systeme & Lead-Management',
      vorher:
        'Anfragen, Angebote und Kundenkontakte liegen verteilt in E-Mails, Excel-Listen und Notizblöcken. Niemand weiß, welcher Lead schon nachgefasst wurde.',
      nachher:
        'Alle Kontakte, Anfragen und Aufträge sind zentral erfasst. Automatische Follow-ups und eine klare Pipeline sorgen dafür, dass aus Interessenten Aufträge werden.',
      ergebnis: 'Kein Lead geht verloren. Vertrieb läuft strukturiert und messbar.',
    },
  ];

  /* ── Bento-Grid Meta ─────────────────────────────────────────────────────── */
  const paragraphMeta: Array<{ icon: React.ElementType; headline: string; span: string; featured: boolean }> = [
    { icon: Building2,  headline: `Stadtpuls ${content.name}`,                          span: 'md:col-span-6 lg:col-span-4', featured: true },
    { icon: Workflow,   headline: `Vom Leistungs- zum Systemproblem`,                   span: 'md:col-span-6 lg:col-span-2', featured: false },
    { icon: Navigation, headline: `Anfahrt & Nähe zu ${content.name}`,                  span: 'md:col-span-6 lg:col-span-3', featured: false },
    { icon: Users,      headline: `Kleine Teams, große Last in ${content.name}`,        span: 'md:col-span-6 lg:col-span-3', featured: false },
    { icon: Landmark,   headline: `Historie trifft Digitalisierung in ${content.name}`, span: 'md:col-span-6',               featured: true },
  ];

  return (
    <div style={{ background: '#FAFAF9' }}>
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

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        data-section-label="Start"
        className="relative flex flex-col"
        style={{ background: '#FAFAF9', minHeight: 'calc(100dvh - 36px)' }}
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
            style={{
              background:
                'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)',
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav
            items={[
              { label: 'Startseite', href: '/' },
              { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
              { label: content.name },
            ]}
          />
        </div>

        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <motion.h1
                className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3"
                style={{ color: PETROL }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                KI-Agentur {content.name}
              </motion.h1>

              <motion.h2
                className="font-heading font-bold tracking-tight mb-2 leading-[1.08]"
                style={{ color: INK, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Klare Abläufe. Mehr Anfragen.{' '}
                <span style={{ color: PETROL }}>Weniger Stress.</span>
              </motion.h2>

              <motion.h3
                className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-3 leading-snug"
                style={{ color: PETROL }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                KI-Chatbots, Telefonassistenten, Automatisierungen, Webdesign, SEO &amp; CRM-Systeme in{' '}
                {content.name}
              </motion.h3>

              <motion.p
                className="text-base md:text-lg max-w-xl mb-5 leading-relaxed"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Wir automatisieren Kundenkommunikation, Terminbuchung und interne Abläufe mit KI für
                Unternehmen in {content.name} – damit Ihr Team wieder Luft zum Arbeiten hat.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <button onClick={scrollToContact} className="btn-primary">
                  <ArrowRight size={18} />
                  Kostenloses Erstgespräch sichern
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <TrustLine className="mb-3" />
                <div
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
                  style={{ color: MUTED }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} style={{ color: PETROL }} className="flex-shrink-0" />
                    {businessInfo.address.addressLocality}
                  </span>
                  <span style={{ color: BORDER }}>|</span>
                  <a
                    href={`tel:${businessInfo.contact.telephoneE164}`}
                    className="inline-flex items-center gap-1.5 hover:underline transition-colors"
                    style={{ color: MUTED }}
                  >
                    <Phone size={13} style={{ color: PETROL }} className="flex-shrink-0" />
                    {businessInfo.contact.telephone}
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN / SERVICE HUB ──────────────────────────────────────── */}
      <section data-section-label="Leistungen" className="section-padding" style={{ background: SURFACE }}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold mb-4" style={{ color: INK }}>
              Leistungen in {content.name}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: MUTED }}>
              Digitale Lösungen, die Ihr Unternehmen entlasten und den Arbeitsalltag deutlich
              vereinfachen.
            </p>
          </motion.div>

          {/* Kachel-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {SERVICE_CARDS.map((s, i) => (
              <motion.a
                key={s.slug}
                href={`/leistungsgebiete/${slug}/${s.slug}`}
                className="group block rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: `1px solid ${BORDER}`,
                  boxShadow: '0 1px 3px rgba(12,18,16,0.06)',
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: s.delay }}
                viewport={{ once: true }}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ background: SURFACE }}
                >
                  <Image
                    src={s.img}
                    alt={
                      content.serviceCardAltTexts?.[s.slug] ?? s.alt
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: s.objectPosition }}
                  />
                  <div
                    className="absolute bottom-3 left-4 right-4 flex items-center gap-2"
                    style={{ color: PETROL }}
                  >
                    {SERVICE_BADGE_ICONS[s.slug]}
                    <span className="text-sm font-heading font-semibold">{s.badge}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                    {s.desc}
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm font-heading font-semibold"
                    style={{ color: PETROL }}
                  >
                    {getRegionServiceLinkText(s.slug, content.name, i)}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <p className="text-center text-sm" style={{ color: MUTED }}>
            <a
              href="/leistungen"
              className="font-semibold hover:underline"
              style={{ color: PETROL }}
            >
              Alle Leistungen ansehen
            </a>
            {' · '}
            <a
              href="/leistungsgebiete"
              className="font-semibold hover:underline"
              style={{ color: PETROL }}
            >
              Alle Leistungsgebiete
            </a>
          </p>
        </div>
      </section>

      {/* ── ÜBER UNS / TEAM ───────────────────────────────────────────────── */}
      <AboutTeamSection />

      {/* ── ABLAUF ────────────────────────────────────────────────────────── */}
      <section data-section-label="Ablauf" className="section-padding" style={{ background: SURFACE }}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold" style={{ color: INK }}>
              So läuft die Zusammenarbeit mit Pixel Kraftwerk in {content.name} ab
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { num: '01', title: 'Erstgespräch', desc: 'Ziele und Potenziale klären – kostenlos und unverbindlich.' },
              { num: '02', title: 'Planung',       desc: 'Individuelles Konzept entwickeln, passend zu Ihrem Betrieb.' },
              { num: '03', title: 'Umsetzung',     desc: 'Saubere technische Integration in Ihre bestehenden Systeme.' },
              { num: '04', title: 'Betreuung',     desc: 'Langfristige Unterstützung und Optimierung im Betrieb.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="bg-white rounded-2xl p-6"
                style={{
                  border: `1px solid ${BORDER}`,
                  boxShadow: '0 1px 3px rgba(12,18,16,0.05)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-heading font-bold mb-2" style={{ color: PETROL }}>
                  {step.num}
                </div>
                <div
                  className="h-0.5 w-8 mb-4 rounded-full"
                  style={{ background: PETROL }}
                />
                <h3 className="font-heading font-bold text-base mb-2" style={{ color: INK }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRAXISBEISPIELE ────────────────────────────────────────────────── */}
      <section
        data-section-label="Praxisbeispiele"
        className="section-padding"
        style={{ background: '#FAFAF9' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold" style={{ color: INK }}>
              Praxisbeispiele aus dem Unternehmensalltag
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-2">
            {practiceExamples.map((ex, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl overflow-hidden"
                style={{
                  border: `1px solid ${BORDER}`,
                  boxShadow: '0 1px 3px rgba(12,18,16,0.05)',
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenExample(openExample === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200 min-h-[56px]"
                  aria-expanded={openExample === i}
                >
                  <span
                    className="font-heading font-semibold flex items-center gap-3 pr-4"
                    style={{ color: INK }}
                  >
                    {ex.icon}
                    {ex.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openExample === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} style={{ color: PETROL }} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openExample === i ? 'auto' : 0,
                    opacity: openExample === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-5 pb-5 space-y-4"
                    style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '1rem' }}
                  >
                    <div>
                      <p className="font-semibold mb-1 text-sm" style={{ color: INK }}>
                        Vorher:
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                        {ex.vorher}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-sm" style={{ color: INK }}>
                        Nachher:
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                        {ex.nachher}
                      </p>
                    </div>
                    <div className="pl-3" style={{ borderLeft: `4px solid ${PETROL}` }}>
                      <p className="font-semibold mb-1 text-sm" style={{ color: INK }}>
                        Ergebnis:
                      </p>
                      <p className="font-medium text-sm leading-relaxed" style={{ color: INK }}>
                        {ex.ergebnis}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── REZENSIONEN ─────────────────────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ── PROBLEM / HERAUSFORDERUNG ─────────────────────────────────────── */}
      <section
        data-section-label="Herausforderung"
        className="section-padding"
        style={{ background: SURFACE }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl md:text-3xl font-heading font-bold mb-10"
                style={{ color: INK }}
              >
                So sieht der Alltag vieler Unternehmen in {content.name}{' '}
                <span style={{ color: PETROL }}>heute aus:</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                {[
                  'Kundenanfragen kommen unregelmäßig und ungeordnet rein.',
                  'Termine müssen ständig manuell abgestimmt werden.',
                  'E-Mails, Telefonate und Rückfragen unterbrechen die Arbeit.',
                  'Viele Aufgaben bleiben direkt beim Inhaber hängen.',
                  'Organisation und Marketing fühlen sich chaotisch an.',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-white p-5"
                    style={{
                      border: `1px solid ${BORDER}`,
                      boxShadow: '0 1px 3px rgba(12,18,16,0.05)',
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(239,68,68,0.07)' }}
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AGITATION / KOSTEN ────────────────────────────────────────────── */}
      <section
        data-section-label="Kosten"
        className="section-padding"
        style={{ background: '#FAFAF9' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center"
              style={{ color: INK }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was Sie das{' '}
              <span style={{ color: '#B91C1C' }}>jede Woche</span> kostet – in {content.name}
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-center mb-12 max-w-2xl mx-auto"
              style={{ color: MUTED }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Jeder Tag ohne saubere Abläufe hat einen Preis. Hier sind drei davon – schwarz auf weiß.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <PhoneOff size={26} strokeWidth={1.5} />,
                  kicker: 'Entgangener Umsatz',
                  big: 'Verpasst.',
                  text: (
                    <>
                      Jeder verpasste Anruf ist ein möglicher Auftrag. Schon zwei verpasste Anrufe pro
                      Woche summieren sich übers Jahr zu{' '}
                      <span className="font-bold" style={{ color: INK }}>
                        über 100 verlorenen Chancen
                      </span>
                      .
                    </>
                  ),
                },
                {
                  icon: <Clock size={26} strokeWidth={1.5} />,
                  kicker: 'Dienstag, 08:47',
                  big: 'Verloren.',
                  text: (
                    <>
                      Ein Anruf kommt rein, während Sie im Termin sind. Keine Mailbox. Der Kunde in{' '}
                      {content.name} wählt den nächsten Treffer auf Google –{' '}
                      <span className="font-bold" style={{ color: INK }}>
                        und ruft nie zurück
                      </span>
                      .
                    </>
                  ),
                },
                {
                  icon: <TrendingDown size={26} strokeWidth={1.5} />,
                  kicker: 'Der Wettbewerb',
                  big: '< 5 Min',
                  text: (
                    <>
                      Reaktionszeit, mit der Ihre Konkurrenz in {content.name} gerade Anfragen gewinnt.{' '}
                      <span className="font-bold" style={{ color: INK }}>
                        Wer langsamer ist, taucht im Kopf des Kunden nicht mehr auf.
                      </span>
                    </>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl bg-white flex flex-col p-6 md:p-7"
                  style={{
                    border: `1px solid ${BORDER}`,
                    boxShadow: '0 1px 6px rgba(12,18,16,0.07)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 flex-shrink-0"
                    style={{
                      background: 'rgba(239,68,68,0.08)',
                      color: '#B91C1C',
                      border: '1px solid rgba(239,68,68,0.20)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="text-xs uppercase tracking-wide font-heading font-bold mb-2"
                    style={{ color: '#B91C1C' }}
                  >
                    {item.kicker}
                  </p>
                  <p
                    className="text-3xl md:text-4xl font-heading font-extrabold mb-4 leading-none"
                    style={{ color: INK }}
                  >
                    {item.big}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-xl md:text-2xl font-heading font-bold text-center max-w-3xl mx-auto"
              style={{ color: INK }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Jede Woche ohne klare Abläufe kostet Sie{' '}
              <span style={{ color: '#B91C1C' }}>Umsatz, Zeit und Nerven</span>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── LÖSUNG ────────────────────────────────────────────────────────── */}
      <section data-section-label="Lösung" className="section-padding" style={{ background: SURFACE }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p
                className="text-sm md:text-base font-heading font-bold uppercase tracking-wide mb-4"
                style={{ color: PETROL }}
              >
                Sie müssen das nicht länger akzeptieren.
              </p>
              <h2
                className="text-2xl md:text-3xl font-heading font-bold mb-10"
                style={{ color: INK }}
              >
                So arbeitet ein{' '}
                <span style={{ color: PETROL }}>sauber automatisierter</span> Betrieb in{' '}
                {content.name}:
              </h2>

              <div className="space-y-3 text-left max-w-2xl mx-auto mb-14">
                {[
                  'Kundenanfragen werden automatisch entgegengenommen und beantwortet.',
                  'Termine werden selbstständig gebucht, bestätigt und erinnert.',
                  'Mitarbeiter arbeiten mit klaren, verlässlichen Abläufen.',
                  'Der Betrieb läuft ruhiger, strukturierter und planbarer.',
                  'Der Inhaber gewinnt Zeit und Fokus für das Kerngeschäft zurück.',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-4"
                    style={{
                      border: `1px solid ${BORDER}`,
                      boxShadow: '0 1px 3px rgba(12,18,16,0.04)',
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle
                      size={20}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: PETROL }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                {[
                  { big: '24/7', label: 'Erreichbarkeit rund um die Uhr' },
                  { big: '< 5 Min', label: 'Reaktionszeit auf neue Anfragen' },
                  { big: '2–8 Wo.', label: 'Bis die erste Lösung live ist' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl bg-white p-5 md:p-6"
                    style={{
                      border: `1px solid ${BORDER}`,
                      borderTop: `3px solid ${PETROL}`,
                      boxShadow: '0 1px 6px rgba(12,18,16,0.07)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p
                      className="text-3xl md:text-4xl font-heading font-extrabold mb-2 leading-none"
                      style={{ color: PETROL }}
                    >
                      {stat.big}
                    </p>
                    <p className="text-sm leading-snug" style={{ color: MUTED }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ÜBER DIE REGION – BENTO-GRID ──────────────────────────────────── */}
      <section
        data-section-label={`Über ${content.name}`}
        className="py-20 md:py-24"
        style={{ background: '#FAFAF9' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12 md:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-heading font-bold tracking-wide mb-5"
                style={{
                  background: 'rgba(14,124,114,0.08)',
                  color: PETROL,
                  border: `1px solid rgba(14,124,114,0.20)`,
                }}
              >
                Regional verankert
              </span>
              <h2
                className="text-2xl md:text-3xl font-heading font-bold mb-5"
                style={{ color: INK }}
              >
                Pixel Kraftwerk in {content.name}
              </h2>
              <div
                className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm"
                style={{ color: MUTED }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: PETROL }} className="flex-shrink-0" />
                  {businessInfo.address.streetAddress} · {businessInfo.address.postalCode}{' '}
                  {businessInfo.address.addressLocality}
                </span>
                <span className="hidden sm:inline" style={{ color: BORDER }}>
                  ·
                </span>
                <a
                  href={`tel:${businessInfo.contact.telephoneE164}`}
                  className="inline-flex items-center gap-1.5 hover:underline transition-colors"
                  style={{ color: MUTED }}
                >
                  <Phone size={14} style={{ color: PETROL }} className="flex-shrink-0" />
                  {businessInfo.contact.telephone}
                </a>
              </div>
            </motion.div>

            {/* Bento-Grid */}
            {content.paragraphs.length > 0 && (
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
                      className={`${meta.span} group relative overflow-hidden rounded-2xl bg-white`}
                      style={{
                        border: `1px solid ${BORDER}`,
                        boxShadow: '0 1px 6px rgba(12,18,16,0.07)',
                        transition: 'box-shadow 0.3s, border-color 0.3s',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    >
                      <div className="p-7 md:p-9 relative">
                        {meta.featured && (
                          <div
                            className="absolute inset-0 pointer-events-none rounded-2xl"
                            style={{
                              background:
                                'linear-gradient(135deg, rgba(14,124,114,0.04) 0%, transparent 60%)',
                            }}
                            aria-hidden
                          />
                        )}
                        <div
                          className="absolute -top-4 -right-2 md:-top-6 md:-right-4 text-[7rem] md:text-[9rem] font-heading font-black leading-none select-none pointer-events-none"
                          style={{ color: 'rgba(14,124,114,0.05)' }}
                          aria-hidden
                        >
                          {numberStr}
                        </div>
                        <div className="relative">
                          <div className="flex items-center gap-3 mb-5">
                            <div
                              className="inline-flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                              style={{
                                background: 'rgba(14,124,114,0.09)',
                                border: `1px solid rgba(14,124,114,0.20)`,
                              }}
                            >
                              <Icon size={20} strokeWidth={1.75} style={{ color: PETROL }} />
                            </div>
                            <span
                              className="text-xs uppercase tracking-[0.18em] font-heading font-bold"
                              style={{ color: PETROL }}
                            >
                              {numberStr}
                              <span
                                className="mx-2"
                                style={{ color: 'rgba(14,124,114,0.35)' }}
                              >
                                /
                              </span>
                              {String(content.paragraphs.length).padStart(2, '0')}
                            </span>
                          </div>
                          <h3
                            className="text-lg md:text-xl font-heading font-bold mb-3 leading-snug"
                            style={{ color: INK }}
                          >
                            {meta.headline}
                          </h3>
                          <p className="text-base leading-relaxed" style={{ color: BODY }}>
                            {p}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            )}

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200"
                style={{
                  color: PETROL,
                  borderColor: 'rgba(14,124,114,0.30)',
                  background: 'rgba(14,124,114,0.06)',
                }}
              >
                Kostenloses Erstgespräch anfragen
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section
        data-section-label="Jetzt anfragen"
        className="section-padding"
        style={{ background: '#0B1512' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="font-heading font-bold mb-6"
              style={{ color: '#E7F4F2' }}
            >
              Jetzt unverbindlich anfragen für Ihr Unternehmen in {content.name} –{' '}
              wir melden uns innerhalb von 24 Stunden
            </h2>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 min-h-[48px]"
              style={{
                background: PETROL,
                color: '#FAFAF9',
                boxShadow: '0 4px 16px rgba(14,124,114,0.25)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <ArrowRight size={22} />
              Jetzt unverbindlich anfragen
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      {content.faqs.length > 0 && (
        <section
          id="faq"
          data-section-label="FAQ"
          className="section-padding"
          style={{ background: SURFACE }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="font-heading font-bold mb-8 text-center"
                style={{ color: INK }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Häufige Fragen – {content.name}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                viewport={{ once: true }}
              >
                <Accordion
                  items={content.faqs.map((f) => ({ question: f.q, answer: f.a }))}
                />
              </motion.div>

              <p className="text-center mt-8 text-sm" style={{ color: MUTED }}>
                Noch mehr Antworten finden Sie auf unserer{' '}
                <a
                  href="/haeufige-fragen"
                  className="font-semibold hover:underline"
                  style={{ color: PETROL }}
                >
                  FAQ-Seite
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── NACHBARSTÄDTE ─────────────────────────────────────────────────── */}
      {neighborCities.length > 0 && (
        <section
          data-section-label="Nachbarstädte"
          className="py-16"
          style={{ background: '#FAFAF9' }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center"
                style={{ color: INK }}
              >
                Weitere Städte in der Nähe von{' '}
                <span style={{ color: PETROL }}>{content.name}</span>
              </h2>
              <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: MUTED }}>
                Pixel Kraftwerk betreut auch Unternehmen in den umliegenden Städten – mit denselben
                KI-Lösungen, kurzen Wegen und persönlicher Beratung.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborCities.map((city, i) => (
                  <a
                    key={city.slug}
                    href={`/leistungsgebiete/${city.slug}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl group transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      border: `1px solid ${BORDER}`,
                      boxShadow: '0 1px 3px rgba(12,18,16,0.05)',
                    }}
                  >
                    <MapPin size={18} style={{ color: PETROL }} className="flex-shrink-0" />
                    <span
                      className="font-heading text-sm transition-colors duration-200 group-hover:underline"
                      style={{ color: INK }}
                    >
                      {neighborLinkLabels[i % neighborLinkLabels.length](city.name)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <ContactForm
        service="leistungsgebiet"
        heading={`Kostenloses Erstgespräch für Ihr Unternehmen in ${content.name}`}
        subheading="Wir analysieren Ihre Situation und zeigen, wie KI und Automatisierung Ihren Arbeitsalltag entlasten können. Antwort innerhalb von 24 Stunden."
      />
      <GoogleMapsSection />
    </div>
  );
};

export default RegionPage;
