'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight, Zap, MessageCircle, ChevronDown,
  Globe, Search, Users, Database, Phone, MapPin,
  Mail, Clock, Star, Workflow,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import AboutTeamSection from '../components/AboutTeamSection';
import GoogleMapsSection from '../components/GoogleMapsSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import WebSiteSchema from '../components/WebSiteSchema';
import { businessInfo } from '@/data/businessInfo';
import { buildFaqSchema } from '@/lib/jsonld';

/* ─── constants ─── */
const INK = '#0C1210';
const BODY = '#404B48';
const MUTED = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';
const SURFACE = '#F3F5F4';

/* ─── Main ─── */
const Home: React.FC = () => {
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);

  const toggleAccordion = (i: number) => setOpenAccordion(openAccordion === i ? null : i);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const practiceExamples = [
    {
      icon: <MessageCircle size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Digitale Kundenassistenz',
      vorher: 'Kunden stellen immer wieder dieselben Fragen per Website, E-Mail oder Social Media. Außerhalb der Öffnungszeiten bleiben Anfragen unbeantwortet.',
      nachher: 'Die digitale Kundenassistenz beantwortet Fragen automatisch, nimmt Anliegen auf und reagiert individuell auf Nachrichten – rund um die Uhr.',
      ergebnis: 'Schnellere Antworten für Kunden. Weniger Unterbrechungen im Arbeitsalltag.',
    },
    {
      icon: <Workflow size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Telefonische Kundenassistenz',
      vorher: 'Anrufe gehen verloren oder unterbrechen ständig die Arbeit. Außerhalb der Geschäftszeiten ist niemand erreichbar.',
      nachher: 'Die telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet Fragen und nimmt Termine automatisch an.',
      ergebnis: 'Keine verpassten Anrufe mehr. Ruhigerer Arbeitsalltag.',
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Automatisierungen für Anfragen, Vertrieb & Terminplanung',
      vorher: 'Anfragen gehen unter, Termine werden per Hin-und-Her koordiniert, Follow-ups werden vergessen. Alles verteilt in E-Mails, Notizen und Excel.',
      nachher: 'Anfragen werden automatisch erfasst, sortiert und zugewiesen. Termine buchen Kunden selbst, Bestätigung und Reminder laufen automatisch. Nichts geht mehr verloren.',
      ergebnis: 'Mehr Überblick, weniger Stress, schnelle Reaktion – ohne dass jemand dran denken muss.',
    },
    {
      icon: <Globe size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'Websites & SEO',
      vorher: 'Die Website ist online, bringt aber kaum Anfragen. Viele Kunden finden das Unternehmen nicht.',
      nachher: 'Eine moderne Website, die verständlich aufgebaut ist und bei Suchmaschinen besser sichtbar wird.',
      ergebnis: 'Mehr Besucher. Mehr Anfragen.',
    },
    {
      icon: <Database size={28} strokeWidth={1.5} style={{ color: PETROL }} />,
      title: 'CRM-Systeme & Lead-Management',
      vorher: 'Anfragen, Angebote und Kundenkontakte liegen verteilt in E-Mails, Excel-Listen und Notizblöcken. Niemand weiß, welcher Lead schon nachgefasst wurde.',
      nachher: 'Alle Kontakte, Anfragen und Aufträge sind zentral erfasst. Automatische Follow-ups und eine klare Pipeline sorgen dafür, dass aus Interessenten Aufträge werden.',
      ergebnis: 'Kein Lead geht verloren. Vertrieb läuft strukturiert und messbar.',
    },
  ];

  const faqs = [
    {
      q: 'Für welche Unternehmen sind eure Lösungen gedacht?',
      a: 'Wir arbeiten vor allem mit kleinen und mittelständischen Unternehmen in der Region Leipzig und Mitteldeutschland – Handwerksbetriebe, Praxen, Dienstleister, Agenturen und lokale Händler. Überall dort, wo wiederkehrende Aufgaben den Arbeitsalltag belasten.',
    },
    {
      q: 'Wie läuft die Zusammenarbeit ab?',
      a: 'Wir starten mit einem kostenlosen Erstgespräch, in dem wir Ihre Situation analysieren. Danach erstellen wir ein individuelles Konzept, setzen die Lösung um und bleiben für Optimierung und Betreuung an Ihrer Seite. Keine Standardlösungen von der Stange.',
    },
    {
      q: 'Was kostet das?',
      a: 'Die Kosten hängen vom Umfang ab. Wir arbeiten mit transparenten Preismodellen – kein Kleingedrucktes, keine versteckten Kosten. Im Erstgespräch klären wir den Bedarf und Sie erhalten ein konkretes Angebot, bevor wir starten.',
    },
    {
      q: 'Muss ich meine bestehenden Systeme komplett umstellen?',
      a: 'Nein. Wir arbeiten bevorzugt mit den Tools, die bei Ihnen bereits laufen – ob CRM, Kalender, Branchensoftware oder E-Mail. Unsere Lösungen ergänzen Ihre Infrastruktur, statt alles neu aufzubauen.',
    },
    {
      q: 'Wie schnell kann eine Lösung live gehen?',
      a: 'Je nach Komplexität zwischen wenigen Tagen und einigen Wochen. Ein klar abgegrenztes erstes Projekt (z.B. ein Chatbot oder eine automatische Terminbuchung) kann oft schon in der ersten Woche Ergebnisse liefern.',
    },
    {
      q: 'Betreut ihr auch Unternehmen außerhalb von Leipzig?',
      a: 'Ja. Unser Sitz ist in Groitzsch bei Leipzig, aber wir betreuen Unternehmen in der gesamten Region – von Halle über Chemnitz bis Jena. Persönliche Treffen sind genauso möglich wie Zusammenarbeit per Videocall.',
    },
    {
      q: 'Was unterscheidet euch von anderen Agenturen?',
      a: 'Wir liefern keine PowerPoint-Präsentationen, sondern funktionierende Systeme. Als Software-Entwickler mit KI-Fokus setzen wir Lösungen selbst um – von der Planung bis zur Integration. Keine Subunternehmer, keine Blackbox.',
    },
    {
      q: 'Bietet ihr laufende Betreuung an?',
      a: 'Ja, und für die meisten Kunden ist das sinnvoll. Automatisierungen brauchen Feintuning, wenn sich Abläufe ändern. Wir bieten Betreuungspakete mit regelmäßiger Optimierung, Anpassungen und technischem Support.',
    },
  ];

  const serviceCards = [
    {
      img: '/images/ki-chatbot-digitale-kundenassistenz-hero.png',
      alt: 'Digitale Kundenassistenz auf Laptop und Smartphone – KI-Chatbot Hero',
      objectPosition: 'center',
      badgeIcon: <MessageCircle size={18} strokeWidth={1.5} />,
      badge: 'Rund um die Uhr',
      h2: 'KI-Chatbots für digitale Kundenassistenz und automatische Anfragenbearbeitung',
      desc: 'Eine digitale Assistenz, die Kundenanfragen beantwortet, Nachrichten entgegennimmt und Anliegen automatisch verarbeitet – auf Ihrer Website und in sozialen Netzwerken, rund um die Uhr.',
      cta: 'KI-Chatbots für Ihre Website',
      href: '/ki-chatbots',
      delay: 0.1,
    },
    {
      img: '/images/ki-telefonassistent-hero.png',
      alt: 'KI-Telefonassistent – professionelle Anrufannahme rund um die Uhr',
      objectPosition: '55% center',
      badgeIcon: <Workflow size={18} strokeWidth={1.5} />,
      badge: 'Nie wieder verpasste Anrufe',
      h2: 'KI-Telefonassistenten für Anrufannahme, Terminbuchung und Leadqualifizierung',
      desc: 'Eine telefonische Assistenz, die für Sie ans Telefon geht, Fragen beantwortet und Termine annimmt – auch dann, wenn gerade niemand erreichbar ist.',
      cta: 'Telefonassistenz rund um die Uhr',
      href: '/telefonassistenten',
      delay: 0.2,
    },
    {
      img: '/images/webseiten-hero-mockup-laptop-handy.png',
      alt: 'Moderne responsive Website auf Laptop und Smartphone',
      objectPosition: '78% center',
      badgeIcon: <Globe size={18} strokeWidth={1.5} />,
      badge: 'In Tagen statt Wochen',
      h2: 'Webseiten für lokale Unternehmen mit klarer Nutzerführung',
      desc: 'Moderne Webseiten, die leicht verständlich sind und bei Suchmaschinen sichtbar werden, damit Kunden Sie schneller finden und direkt Kontakt aufnehmen können.',
      cta: 'Moderne Unternehmenswebseiten',
      href: '/webseite',
      delay: 0.3,
    },
    {
      img: '/images/automatisierungen-anfragen-vertrieb-terminplanung.webp',
      alt: 'Automatisierungen: Anfrage, Sortierung, Zuweisung, Follow-up, Termin und CRM',
      objectPosition: 'center',
      badgeIcon: <Zap size={18} strokeWidth={1.5} />,
      badge: 'Abläufe laufen von selbst',
      h2: 'Automatisierungen für Anfragen, Vertrieb, Terminplanung und CRM',
      desc: 'Anfragen automatisch erfassen, sortieren und zuweisen. Termine buchen, bestätigen und erinnern – ohne Hin-und-Her. Damit Abläufe von selbst laufen.',
      cta: 'Automatisierungen für Anfragen & Termine',
      href: '/automatisierungen',
      delay: 0.35,
    },
    {
      img: '/images/seo-top3-google-suche-maps-mockup.webp',
      alt: 'Beispielhafte Google-Suche und Google-Maps-Ergebnis für eine lokale Suchanfrage – Local Pack und Google-Unternehmensprofil',
      objectPosition: 'top center',
      badgeIcon: <Search size={18} strokeWidth={1.5} />,
      badge: 'Top 3 in 90 Tagen',
      h2: 'Lokales SEO für mehr Sichtbarkeit bei Google',
      desc: 'Lokales SEO mit Fokus auf Top-Platzierungen für die Suchbegriffe, die Ihnen wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.',
      cta: 'In 90 Tagen in die Top 3 bei Google',
      href: '/seo-top-3-in-google',
      delay: 0.4,
    },
    {
      img: '/images/crm-systeme-kundenverwaltung.webp',
      alt: 'CRM-System für Kundenverwaltung und Lead-Management',
      objectPosition: 'center',
      badgeIcon: <Users size={18} strokeWidth={1.5} />,
      badge: 'Kein Lead geht verloren',
      h2: 'CRM-Systeme für strukturiertes Lead-Management und Kundenverwaltung',
      desc: 'Alle Anfragen, Angebote und Kundenkontakte zentral verwalten. Automatische Follow-ups, transparente Pipeline und Auswertungen – damit aus Interessenten Aufträge werden.',
      cta: 'CRM-System einrichten lassen',
      href: '/crm-systeme',
      delay: 0.45,
    },
  ];

  const faqSchema = buildFaqSchema({
    url: businessInfo.url,
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  });

  return (
    <div style={{ background: '#FAFAF9' }}>
      <LocalBusinessSchema pageType="homepage" />
      <WebSiteSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section
        data-section-label="Start"
        className="relative flex items-center"
        style={{ minHeight: 'calc(100dvh - 36px)' }}
      >
        {/* Vollbild-Hintergrundbild */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-startseite-mann-laptop.png"
            alt="Unternehmer am Laptop – KI-Agentur Pixel Kraftwerk in Leipzig und Groitzsch"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          {/* Heller Gradient: links Text-Lesbarkeit, rechts Bild sichtbar */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)',
            }}
            aria-hidden
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-8 md:pt-28 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <motion.h1
                className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-2"
                style={{ color: PETROL }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                KI-Agentur Groitzsch &amp; Leipzig
              </motion.h1>

              <motion.h2
                className="font-heading font-bold tracking-tight mb-2 leading-[1.08]"
                style={{ color: INK, fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Hast du ein Unternehmen?<br />
                <span style={{ color: PETROL }}>Dann können wir dir mit Sicherheit helfen.</span>
              </motion.h2>

              <motion.h3
                className="sr-only md:not-sr-only text-sm md:text-base font-heading font-semibold mb-2 leading-snug"
                style={{ color: PETROL }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                KI-Chatbots, Telefonassistenten, Automatisierungen, Webdesign, SEO &amp; CRM-Systeme
              </motion.h3>

              <motion.p
                className="text-base md:text-lg max-w-xl mb-5 leading-relaxed"
                style={{ color: BODY }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
              >
                Wir helfen Unternehmen dabei, mehr Kunden zu gewinnen, ihre Abläufe zu vereinfachen und im Alltag spürbar Zeit zu sparen. Dafür entwickeln wir moderne Webseiten, KI-Chatbots, Telefonagenten und individuelle Softwarelösungen, die mehr Kundenanfragen erzeugen und wiederkehrende Aufgaben automatisch übernehmen.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 min-h-[48px]"
                  style={{ background: PETROL, color: '#FAFAF9', boxShadow: '0 1px 3px rgba(14,124,114,0.3), 0 4px 12px rgba(14,124,114,0.15)' }}
                >
                  <ArrowRight size={18} />
                  Kostenloses Erstgespräch sichern
                </button>
                <a
                  href="/leistungen"
                  className="inline-flex items-center justify-center gap-2 py-3 text-base font-semibold underline underline-offset-4 sm:no-underline sm:justify-start sm:px-7 sm:py-3.5 sm:rounded-xl sm:border sm:bg-white sm:min-h-[48px] transition-all duration-200"
                  style={{ color: INK, borderColor: BORDER }}
                >
                  Leistungen ansehen
                </a>
              </motion.div>

              {/* Trust row */}
              <motion.div
                className="flex flex-wrap items-center gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <a
                  href={businessInfo.socialMedia.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  aria-label="Unsere Google-Bewertungen ansehen"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={PETROL} color={PETROL} />
                    ))}
                  </div>
                  <span className="text-sm font-medium" style={{ color: MUTED }}>5,0 auf Google</span>
                </a>
                <span style={{ color: BORDER }} className="hidden sm:block">·</span>
                <span className="text-sm" style={{ color: MUTED }}>Antwort binnen 24 Stunden</span>
              </motion.div>
            </div>

            {/* Leere rechte Spalte – Bild füllt den Hintergrund */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>


      {/* ─── SERVICES ─── */}
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
              Digitale Lösungen für Ihren Betrieb
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: MUTED }}>
              Digitale Lösungen, die Ihr Unternehmen entlasten und den Arbeitsalltag deutlich vereinfachen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {serviceCards.map((s, i) => (
              <div key={s.href} className="flex flex-col">
                <h3 className="text-base font-heading font-semibold mb-3 leading-snug" style={{ color: BODY }}>
                  {s.h2}
                </h3>
                <motion.a
                  href={s.href}
                  className="group block rounded-2xl bg-white overflow-hidden flex-1 transition-all duration-300 hover:-translate-y-1"
                  style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 3px rgba(12,18,16,0.06)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: s.delay }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ background: SURFACE }}>
                    <Image
                      src={s.img}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ objectPosition: s.objectPosition }}
                    />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2" style={{ color: PETROL }}>
                      {s.badgeIcon}
                      <span className="text-sm font-heading font-semibold">{s.badge}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{s.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-heading font-semibold" style={{ color: PETROL }}>
                      {s.cta}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm" style={{ color: MUTED }}>
            <a href="/leistungen" className="font-semibold hover:underline" style={{ color: PETROL }}>Alle Leistungen ansehen</a>
            {' · '}
            <a href="/leistungsgebiete" className="font-semibold hover:underline" style={{ color: PETROL }}>Unsere Leistungsgebiete</a>
          </p>
        </div>
      </section>

      {/* ─── TEAM / REGION ─── */}
      <AboutTeamSection />

      {/* ─── PROCESS ─── */}
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
              So läuft die Zusammenarbeit mit Pixel Kraftwerk ab
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { num: '01', title: 'Erstgespräch', desc: 'Ziele und Potenziale klären – kostenlos und unverbindlich.' },
              { num: '02', title: 'Planung', desc: 'Individuelles Konzept entwickeln, passend zu Ihrem Betrieb.' },
              { num: '03', title: 'Umsetzung', desc: 'Saubere technische Integration in Ihre bestehenden Systeme.' },
              { num: '04', title: 'Betreuung', desc: 'Langfristige Unterstützung und Optimierung im Betrieb.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="bg-white rounded-2xl p-6"
                style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 3px rgba(12,18,16,0.05)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-heading font-bold mb-2" style={{ color: PETROL }}>{step.num}</div>
                <div className="h-0.5 w-8 mb-4 rounded-full" style={{ background: PETROL }} />
                <h3 className="font-heading font-bold text-base mb-2" style={{ color: INK }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRACTICE EXAMPLES ─── */}
      <section data-section-label="Praxisbeispiele" className="section-padding" style={{ background: '#FAFAF9' }}>
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
                style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 3px rgba(12,18,16,0.05)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200 min-h-[56px]"
                  aria-expanded={openAccordion === i}
                >
                  <span className="font-heading font-semibold flex items-center gap-3 pr-4" style={{ color: INK }}>
                    {ex.icon}
                    {ex.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openAccordion === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} style={{ color: PETROL }} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openAccordion === i ? 'auto' : 0, opacity: openAccordion === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 space-y-4" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '1rem' }}>
                    <div>
                      <p className="font-semibold mb-1 text-sm" style={{ color: INK }}>Vorher:</p>
                      <p className="text-sm leading-relaxed" style={{ color: BODY }}>{ex.vorher}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-sm" style={{ color: INK }}>Nachher:</p>
                      <p className="text-sm leading-relaxed" style={{ color: BODY }}>{ex.nachher}</p>
                    </div>
                    <div className="pl-3" style={{ borderLeft: `4px solid ${PETROL}` }}>
                      <p className="font-semibold mb-1 text-sm" style={{ color: INK }}>Ergebnis:</p>
                      <p className="font-medium text-sm leading-relaxed" style={{ color: INK }}>{ex.ergebnis}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REZENSIONEN ─── */}
      <GoogleReviewsSection />

      {/* ─── CTA BAND ─── */}
      <section data-section-label="Jetzt anfragen" className="section-padding" style={{ background: '#0B1512' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold mb-4" style={{ color: '#E7F4F2' }}>
              Jetzt unverbindlich anfragen
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(231,244,242,0.75)' }}>
              Wir melden uns innerhalb von 24 Stunden – kein Spam, kein Druck.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-bold text-base transition-all duration-200 min-h-[48px]"
              style={{ background: PETROL, color: '#FAFAF9' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ArrowRight size={20} />
              Jetzt unverbindlich anfragen
            </motion.button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" data-section-label="FAQ" className="section-padding" style={{ background: SURFACE }}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold" style={{ color: INK }}>
              Häufige Fragen
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl overflow-hidden"
                style={{ border: `1px solid ${BORDER}`, boxShadow: '0 1px 3px rgba(12,18,16,0.04)' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleAccordion(i + 100)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200 min-h-[56px]"
                  aria-expanded={openAccordion === i + 100}
                >
                  <span className="text-sm font-heading font-semibold pr-4" style={{ color: INK }}>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openAccordion === i + 100 ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} style={{ color: PETROL }} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openAccordion === i + 100 ? 'auto' : 0, opacity: openAccordion === i + 100 ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '1rem', color: MUTED }}>{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: MUTED }}>
            Noch mehr Antworten finden Sie auf unserer{' '}
            <a href="/haeufige-fragen" className="font-semibold hover:underline" style={{ color: PETROL }}>FAQ-Seite</a>.
          </p>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section data-section-label="Kontakt" className="section-padding" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold mb-4" style={{ color: INK }}>
              Lassen Sie uns unverbindlich sprechen
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: MUTED }}>
              Erzählen Sie uns kurz, wo bei Ihnen der Schuh drückt. Wir melden uns zeitnah und vereinbaren ein kostenloses Erstgespräch – ganz ohne Verpflichtung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm mb-4" style={{ color: BODY }}>
              <a href={`tel:${businessInfo.contact.telephoneE164}`} className="flex items-center gap-2 hover:underline" style={{ color: BODY }}>
                <Phone size={16} style={{ color: PETROL }} />
                {businessInfo.contact.telephone}
              </a>
              <a href={`mailto:${businessInfo.contact.email}`} className="flex items-center gap-2 hover:underline" style={{ color: BODY }}>
                <Mail size={16} style={{ color: PETROL }} />
                {businessInfo.contact.email}
              </a>
              <span className="flex items-center gap-2">
                <Clock size={16} style={{ color: PETROL }} />
                {businessInfo.openingHoursDisplay}
              </span>
            </div>
            <p className="flex items-center justify-center gap-1.5 text-xs" style={{ color: MUTED }}>
              <MapPin size={13} style={{ color: PETROL }} />
              {businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality}
            </p>
          </motion.div>
        </div>
        <ContactForm />
      </section>

      <GoogleMapsSection />
    </div>
  );
};

export default Home;
