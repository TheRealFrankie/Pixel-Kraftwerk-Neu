'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  ListChecks,
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
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import SubpageLinksBlock from '../../components/SubpageLinksBlock';
import HeroScrollIndicator from '../../components/HeroScrollIndicator';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

interface AutomatisierungenProps {
  regionSlug?: string;
  regionName?: string;
}

const Automatisierungen: React.FC<AutomatisierungenProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/automatisierungen`
    : `${baseUrl}/automatisierungen`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'automatisierungen', 'Automatisierungen')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const processSteps = [
    {
      title: 'Anfragen automatisch erfassen (alle Kanäle)',
      description:
        'Egal ob Anfrage über Kontaktformular, E-Mail, Telefonnotiz oder WhatsApp – das System sorgt dafür, dass alles zentral ankommt und nicht in Einzelkanälen versackt. Typische Kanäle: Website-Formulare, E-Mail, Telefon, WhatsApp/Messenger, Ads-Leads, Google Business Profile. Ergebnis: Jede Anfrage wird als „Fall“ oder „Lead“ angelegt – mit Name, Kontakt, Anliegen, Quelle.',
    },
    {
      title: 'Automatisch sortieren, priorisieren & zuständig zuweisen',
      description:
        'Statt „alle bekommen alles“ entscheidet ein Workflow automatisch: Worum geht es? Wie dringend? Wer ist zuständig? Das kann simpel sein (Regeln & Tags) oder smarter mit künstlicher Intelligenz zur Klassifizierung. Beispiel: „Angebot Photovoltaik“ → Tag „PV“ → Zuständig: Max → Aufgabe: Rückruf heute → optional Terminlink schicken.',
    },
    {
      title: 'Nachfassen & Erinnern – ohne dass jemand dran denken muss',
      description:
        'Viele Deals sterben nicht wegen Preis – sondern wegen fehlendem Follow-up. Automatisierungen übernehmen das: Nach 24h keine Antwort → Erinnerung an Team + Follow-up-Mail; Angebot raus → Nachfass-Aufgabe nach 2 Tagen; Lead „warm“ → automatisch Terminoptionen schicken; Kunde reagiert nicht → freundliche Sequenz (2–3 Nachrichten). Sauber getaktet wirkt es professionell.',
    },
    {
      title: 'Terminplanung, Bestätigung, Reminder – ohne Hin-und-Her',
      description:
        'Kunden buchen selbst (24/7), nur freie Zeiten werden angezeigt, Pufferzeiten & Terminarten sind geregelt, Bestätigung und Reminder laufen automatisch, Umbuchung/Storno ohne Telefonstress. Intern: Kalender synchronisiert, Zuständigkeiten fest, Infos am Termin.',
    },
  ];

  const practiceExamples = [
    {
      title: 'Kontaktformular → automatische Lead-Anlage + Sofortantwort',
      points: ['Anfrage kommt rein', 'Lead wird angelegt', 'Kunde bekommt sofort Bestätigung + „Nächster Schritt“', 'Zuständiger wird benachrichtigt'],
    },
    {
      title: 'Angebotsanfrage → Qualifizierung + Terminlink',
      points: ['System erkennt: „Angebot“', '3–5 kurze Rückfragen (Mail/Formular)', 'Wenn passend: Terminlink anbieten', 'Wenn unklar: Rückruf-Aufgabe erstellen'],
    },
    {
      title: 'Rückruf-Workflow',
      points: ['Telefonnotiz / verpasster Anruf wird erfasst', 'Aufgabe „Rückruf“ mit Deadline', 'Wenn nicht erledigt: Reminder an Team/Owner'],
    },
    {
      title: 'Follow-up nach Angebot',
      points: ['Angebot gesendet → Status „Angebot raus“', 'Nach 48h: freundliche Nachfrage', 'Nach 5 Tagen: „Soll ich\'s für Sie parken?“ (sauberer Exit)'],
    },
    {
      title: 'Terminbuchung mit Regeln (Puffer, Dauer, Mitarbeiter)',
      points: ['Terminarten: Erstgespräch/Bestand/Notfall', 'Pufferzeiten, Urlaubszeiten, Ausnahmen', 'Mitarbeiter & Ressourcen (Räume/Geräte) berücksichtigt'],
    },
    {
      title: 'Termin → automatische Vorbereitung intern',
      points: ['Bei Buchung: interner Hinweis (Slack/Teams/WhatsApp)', 'Checkliste wird erstellt (z. B. Unterlagen anfordern)', 'Kalendertermin enthält alle Infos'],
    },
    {
      title: 'No-Show senken mit Erinnerungen',
      points: ['24h vorher: Reminder', '2h vorher: kurze Erinnerung', 'Optional: „Bitte bestätigen“ bei kritischen Terminen'],
    },
    {
      title: 'Nach Termin: Bewertung / nächste Schritte',
      points: ['Nach dem Termin: Follow-up Mail', 'Optional: Bewertungslink', 'Falls „nicht abgeschlossen“: nächster Schritt als Aufgabe'],
    },
  ];

  const ourApproachSteps = [
    { step: '01', title: 'Bedarfsanalyse', description: 'Welche Anfragen kommen rein? Was kostet am meisten Zeit? Wo geht Umsatz verloren?' },
    { step: '02', title: 'Ablauf-Design', description: 'Wir skizzieren den Prozess in Kundensprache: „Wenn X passiert, dann Y“.' },
    { step: '03', title: 'Umsetzung & Anbindung', description: 'Formulare, E-Mail, Kalender, ggf. CRM – alles sauber verbunden und getestet.' },
    { step: '04', title: 'Go-Live + Team-Einweisung', description: 'Kurz und pragmatisch: Was sieht wer, wo sind Aufgaben, was passiert automatisch?' },
    { step: '05', title: 'Optimierung', description: 'Automatisierung ist nie „fertig“. Kleine Verbesserungen bringen oft den größten ROI.' },
  ];

  const checklistItems = [
    'Ihr habt wiederkehrende Abläufe (Anfragen, Termine, Angebote, Rückrufe)',
    'Es gibt klare Zuständigkeiten (oder ihr wollt sie endlich sauber machen)',
    'Ihr nutzt E-Mail & Kalender verlässlich',
    'Ihr wollt weniger „Kopfchaos“ und mehr System',
    'Ihr seid offen für einen schlanken, pragmatischen Start (1–2 Workflows zuerst)',
  ];

  const faqs = [
    {
      q: 'Was kostet so eine Automatisierung?',
      a: 'Das hängt davon ab, wie viele Kanäle, Regeln und Integrationen nötig sind. Oft starten Unternehmen mit einem Kernprozess (z. B. Anfrage → Follow-up → Termin) und erweitern dann Schritt für Schritt.',
    },
    {
      q: 'Muss ich dafür ein neues CRM nutzen?',
      a: 'Nicht zwingend. Man kann bestehende Systeme oft anbinden oder eine einfache Pipeline aufsetzen. Entscheidend ist: Übersicht + Verbindlichkeit.',
    },
    {
      q: 'Funktioniert das auch mit mehreren Mitarbeitern oder Standorten?',
      a: 'Ja – genau dann lohnt es sich besonders. Zuständigkeiten, Ressourcen und Kalender können sauber abgebildet werden.',
    },
    {
      q: 'Können Kunden wirklich selbst Termine buchen?',
      a: 'Ja – und es reduziert extrem viel Hin-und-Her. Du legst Regeln fest (Dauer, Puffer, Zeiten, Leistungen), und Kunden sehen nur verfügbare Slots.',
    },
    {
      q: 'Was ist, wenn jemand nicht erscheint?',
      a: 'Automatische Erinnerungen (E-Mail/SMS) senken No-Shows deutlich. Zusätzlich kann man Bestätigungen oder Storno-Regeln integrieren.',
    },
    {
      q: 'Wie schnell kann das live gehen?',
      a: 'Ein schlanker erster Workflow ist oft schnell umgesetzt – wichtig ist aber, dass es sauber getestet wird und dein Team weiß, wie es damit arbeitet.',
    },
    {
      q: 'Ist das DSGVO-konform möglich?',
      a: 'Ja, wenn man es korrekt aufsetzt: klare Datenflüsse, Zugriffsrechte, AVVs, Datensparsamkeit und Dokumentation.',
    },
    {
      q: 'Was, wenn unsere Prozesse aktuell „chaotisch“ sind?',
      a: 'Dann ist Automatisierung sogar besonders wertvoll. Wir starten mit einem klaren, einfachen Ablauf und bauen Struktur auf – ohne Overengineering.',
    },
  ];

  return (
    <>
      <div style={{ background: '#FAFAF9' }}>
        <LocalBusinessSchema
          pageType="service"
          customDescription={isRegional
            ? `Automatisierungen für Anfragen, Vertrieb & Terminplanung in ${regionName} und Umgebung. Pixel Kraftwerk aus Groitzsch baut Workflows, die Anfragen sortieren, Termine buchen und Follow-ups automatisch auslösen.`
            : 'Automatisierungen für Anfragen, Vertrieb & Terminplanung. Pixel Kraftwerk aus Groitzsch baut Workflows, die Anfragen sortieren, Termine buchen und Follow-ups automatisch auslösen.'}
        />
        {isRegional ? (
          <BreadcrumbSchemaRegionService
            regionName={regionName}
            regionUrl={regionUrl}
            serviceName="Automatisierungen"
            serviceUrl={currentPageUrl}
          />
        ) : (
          <BreadcrumbSchema
            serviceName="Automatisierungen für Anfragen, Vertrieb & Terminplanung"
            serviceUrl="https://pixelkraftwerk-ai.com/automatisierungen"
          />
        )}
        <ServiceJsonLd
          name={isRegional ? `Automatisierungen in ${regionName}` : 'Automatisierungen für Anfragen, Vertrieb & Terminplanung'}
          serviceType="BusinessProcessAutomation"
          description={isRegional
            ? `Automatisierungen für Anfragen, Vertrieb & Terminplanung in ${regionName} und Umgebung. Mehr Überblick, weniger Stress – von Pixel Kraftwerk aus Groitzsch.`
            : 'Anfragen erfassen, sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress und klarere Abläufe für Vertrieb und Service-Teams.'}
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={[
            ...faqs.map((item) => ({
              question: item.q,
              answer: item.a,
            })),
            ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
          ]}
          pageName={isRegional ? `Automatisierungen in ${regionName}` : 'Automatisierungen'}
        />
      {/* HERO */}
      <section
        id="ki-automatisierung-fur-anfragen-termine"
        className="relative min-h-[100dvh] md:min-h-screen flex flex-col"
        style={{ background: '#FAFAF9' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/automatisierungen-anfragen-vertrieb-terminplanung.webp"
            alt="Automatisierungen für Anfragen, Vertrieb und Terminplanung"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)' }} aria-hidden />
        </div>
        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav items={isRegional ? [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
            { label: regionName!, href: regionUrl },
            { label: 'Automatisierungen' },
          ] : [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'Automatisierungen' },
          ]} />
        </div>
        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <motion.h1 className="text-xs md:text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: '#0E7C72' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {isRegional ? `Automatisierungen in ${regionName}` : 'Automatisierungen Groitzsch & Leipzig'}
              </motion.h1>
              <motion.h2 className="font-heading font-bold tracking-tight mb-2 leading-[1.08]" style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                {regionContent?.localHook || 'Damit Abläufe automatisch laufen'}
              </motion.h2>
              <motion.h3 className="sr-only md:not-sr-only text-sm md:text-base max-w-xl mb-3 leading-snug font-semibold" style={{ color: '#0E7C72' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                {SERVICE_TITLE_KEYWORDS['automatisierungen']}
              </motion.h3>
              <motion.p className="text-base md:text-lg max-w-xl mb-4 leading-relaxed" style={{ color: '#404B48' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                Wir bauen Abläufe, die Arbeit abnehmen, Fehler reduzieren und für Überblick sorgen – ohne dass Ihr Team ständig manuell nachhaken muss.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                <button onClick={scrollToContact} className="btn-primary">
                  Kostenlosen Automations-Check anfragen
                  <ArrowRight size={18} />
                </button>
                <a href="tel:+491785844460" className="inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold underline underline-offset-4 sm:no-underline sm:justify-start sm:px-6 sm:py-3 sm:rounded-xl sm:border" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Jetzt anrufen
                </a>
              </motion.div>
              <div className="hidden sm:block">
                <TrustLine className="mt-5" />
              </div>
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Kurz erklärt: Was wir mit „KI-Automatisierung“ wirklich meinen
            </motion.h2>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Wenn wir von <strong style={{ color: '#0C1210' }}>KI-Automatisierung</strong> sprechen, geht es nicht um „noch ein Tool“. Es geht darum, dass eure Systeme so miteinander verbunden sind, dass Abläufe automatisch passieren.
            </motion.p>
            <p className="mb-2" style={{ color: '#404B48' }}>Typisch ist ein Setup wie:</p>
            <ul className="space-y-2 text-light-200 mb-6">
              <li><strong style={{ color: '#0C1210' }}>Eingänge</strong> (Website, E-Mail, Telefonnotiz, WhatsApp, Ads, Google Business Profile)</li>
              <li><strong style={{ color: '#0C1210' }}>Logik</strong> (Regeln, Prioritäten, Zuständigkeiten – optional mit künstlicher Intelligenz zur Klassifizierung)</li>
              <li><strong style={{ color: '#0C1210' }}>Aktionen</strong> (Sofortantwort, Aufgaben, CRM-Eintrag, Terminbuchung, Follow-up, Reminder)</li>
            </ul>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Technisch bauen wir das häufig mit <strong style={{ color: '#0C1210' }}>n8n</strong>, APIs und Webhooks. Für dich zählt aber nur: Anfragen werden erfasst, sortiert, bearbeitet und nachverfolgt – automatisch.
            </motion.p>
            <motion.p
              className="text-light-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <strong style={{ color: '#0C1210' }}>Wichtig:</strong> Sobald es um komplexe Integrationen (CRM, Kalenderlogik, mehrere Standorte, Datenqualität) geht, ist ein <strong style={{ color: '#0C1210' }}>Software-Entwickler</strong> ein echter Hebel: stabiler, sauberer, weniger Fehler.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Für wen lohnt sich das – und was wird konkret automatisiert?
            </motion.h2>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Automatisierungen lohnen sich besonders, wenn mindestens einer dieser Punkte zutrifft:
            </motion.p>
            <ul className="space-y-2 text-light-200 mb-8">
              {[
                'Ihr bekommt regelmäßig Anfragen (Website, E-Mail, Telefon, WhatsApp, Social Media, Ads)',
                'Reaktionszeiten schwanken, weil „der Alltag dazwischen kommt“',
                'Follow-ups passieren unregelmäßig (und Umsatz bleibt liegen)',
                'Termine werden manuell koordiniert und kosten unnötig Zeit',
                'Informationen liegen verteilt in Postfächern, Notizen oder Excel-Listen',
                'Mehrere Mitarbeiter/Standorte müssen koordiniert werden',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={18} />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="text-light-100 font-heading font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Was wird automatisiert?
            </motion.p>
            <p className="mb-2" style={{ color: '#404B48' }}>
              Nicht „alles auf einmal“, sondern genau die Schritte, die euch heute Zeit, Nerven und Umsatz kosten – z. B.:
            </p>
            <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Anfragen automatisch erfassen &amp; ordnen</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Zuständigkeiten zuweisen</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Nachfassen, Erinnern, Aufgaben erstellen</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Termine buchen, bestätigen, umbuchen, erinnern</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Daten zwischen Systemen synchronisieren (z. B. Website → CRM → Kalender → Team)</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Die 3 häufigsten Probleme (und wie Automatisierungen sie lösen)
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  problem: '„Anfragen gehen unter.“',
                  solution:
                    'Passiert schneller als man denkt: ein volles Postfach, ein stressiger Tag, mehrere Kanäle. Automatisierung sorgt dafür, dass jede Anfrage ankommt, korrekt gespeichert wird und nicht mehr „verloren“ geht.',
                },
                {
                  problem: '„Wir sind zu langsam – und verlieren Kunden.“',
                  solution:
                    'Viele Kunden schreiben mehrere Anbieter gleichzeitig. Wer schnell und strukturiert reagiert, gewinnt. Automatisierung sorgt für Sofort-Reaktion, klare Zuständigkeit und konsequentes Nachfassen.',
                },
                {
                  problem: '„Terminplanung frisst Zeit.“',
                  solution:
                    'Hin-und-Her, Rückfragen, Ausfälle, Doppelbuchungen. Automatisierung bringt eine Logik rein: nur freie Slots anzeigen, Bestätigung automatisch, Reminder automatisch, Umbuchung möglich.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-primary-500 mb-2">{item.problem}</h3>
                  <p className="" style={{ color: '#404B48' }}>{item.solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              So sieht ein automatisierter Ablauf aus: Anfrage → Termin → Umsetzung
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ihr baut nicht „ein Tool“, sondern einen durchgehenden Ablauf. Kunden erleben es wie einen „professionellen Prozess“, bei euch intern fühlt es sich an wie: weniger Arbeit.
            </motion.p>
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 bg-white p-6 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-heading font-bold text-primary-500 flex-shrink-0">
                    Schritt {i + 1}:
                  </span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{step.title}</h3>
                    <p className="text-light-200 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Passt das zu Ihrem Alltag?
            </motion.h2>
            <motion.p
              className="text-light-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              In einem kurzen Gespräch prüfen wir gemeinsam, welche 1–2 Automatisierungen bei Ihnen den größten Hebel haben – konkret, ohne Technik-Geschwurbel.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300 rounded-xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Welche Abläufe kosten Sie die meiste Zeit? In 15 Min klären.
              <ArrowRight className="ml-2" size={22} />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Vorher vs. Nachher (typischer Alltag)
            </motion.h2>
            <div className="overflow-x-auto rounded-2xl border shadow-card" style={{ borderColor: '#E4E9E7' }}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Bereich</th>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Manuell (vorher)</th>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Automatisiert (nachher)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Anfragen</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>verteilt in E-Mail/WhatsApp/Notizen</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>zentral erfasst & sauber sortiert</td></tr>
                    <tr style={{ background: '#FAFAF9' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Reaktion</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>abhängig von Zeit/Stress</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>Sofort-Bestätigung + klare Zuständigkeit</td></tr>
                    <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Follow-ups</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>„machen wir später“ → oft vergessen</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>automatisch geplant + Aufgaben erstellt</td></tr>
                    <tr style={{ background: '#FAFAF9' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Termine</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Hin-und-Her am Telefon</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>self-service Buchung + Regeln + Reminder</td></tr>
                    <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Überblick</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>„Wo stehen wir gerade?“</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>Pipeline/Status auf einen Blick</td></tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Beispiele aus der Praxis: 8 typische Automatisierungen
            </motion.h2>
            <p className="mb-8" style={{ color: '#404B48' }}>
              {isRegional
                ? `Damit du ein Gefühl bekommst, was realistisch ist – gerade für Unternehmen in ${regionName} und Umgebung.`
                : 'Damit du ein Gefühl bekommst, was realistisch ist – gerade für Unternehmen in Leipzig, Markkleeberg, Borna, Zwenkau, Groitzsch & Umgebung.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practiceExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-primary-500 mb-3">{i + 1}) {ex.title}</h3>
                  <ul className="space-y-1 text-light-200 text-sm">
                    {ex.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Welche Automatisierung passt zu welchem Kanal?
            </motion.h2>
            <div className="overflow-x-auto rounded-2xl border shadow-card" style={{ borderColor: '#E4E9E7' }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Kanal</th>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Typische Automatisierung</th>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Ergebnis</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Website</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Formular → Lead + Sofortantwort + Zuweisung</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>schnellerer Erstkontakt</td></tr>
                  <tr style={{ background: '#FAFAF9' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>E-Mail</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Mails taggen/sortieren → Aufgaben & Status</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>weniger Chaos im Postfach</td></tr>
                  <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Telefon</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>verpasster Anruf → Rückruf-Task + Reminder</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>keine verpassten Chancen</td></tr>
                  <tr style={{ background: '#FAFAF9' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Ads</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Leadform → Quali-Fragen → Terminlink</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>bessere Lead-Qualität</td></tr>
                  <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Kalender</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Buchung → Termin + Vorbereitung + Reminder</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>weniger No-Shows</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was braucht man dafür? (Tools, Schnittstellen, Voraussetzungen)
            </motion.h2>
            <p className="mb-4" style={{ color: '#404B48' }}>
              Viele denken bei Automatisierung an „neues CRM“ oder „noch ein Tool“. In der Praxis geht es um drei Bausteine:
            </p>
            <ul className="space-y-2 text-light-200 mb-6">
              <li><strong style={{ color: '#0C1210' }}>Eingänge</strong> – wo Anfragen herkommen</li>
              <li><strong style={{ color: '#0C1210' }}>Logik</strong> – Regeln, Zuständigkeiten, Priorisierung</li>
              <li><strong style={{ color: '#0C1210' }}>Aktionen</strong> – Benachrichtigen, Aufgaben erstellen, buchen, erinnern</li>
            </ul>
            <p className="mb-4" style={{ color: '#404B48' }}>
              Im Hintergrund werden dafür Tools über Schnittstellen verbunden (APIs). Für dich als Kunde zählt aber nur: Es läuft automatisch und dein Team hat Überblick.
            </p>
            <p className="mb-6" style={{ color: '#404B48' }}>
              Gute Automatisierungen müssen: stabil laufen, verständlich für dein Team sein, sauber dokumentiert sein und skalieren können (wenn mehr Anfragen kommen).
            </p>
            <motion.h3
              className="text-lg font-heading font-bold text-light-100 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Wann ein Software-Entwickler sinnvoll ist
            </motion.h3>
            <p className="mb-2" style={{ color: '#404B48' }}>
              Ein MVP kann schlank starten. Aber sobald ihr:
            </p>
            <ul className="space-y-2.5 mb-3">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>mehrere Systeme sauber synchronisieren wollt,</span></li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>komplexe Regeln (Teams, Standorte, Kalender) habt,</span></li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Datenqualität wichtig ist (Dubletten, Felder, Validierung),</span></li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>oder Monitoring/Fehler-Handling braucht,</span></li>
            </ul>
            <p className="" style={{ color: '#404B48' }}>
              … ist ein <strong style={{ color: '#0C1210' }}>Software-Entwickler</strong> (bzw. Softwareentwickler) extrem wertvoll, weil der Unterschied dann im Detail steckt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Shield className="text-primary-500" size={28} />
              Sicherheit & Datenschutz (DSGVO) – was wichtig ist
            </motion.h2>
            <p className="mb-4" style={{ color: '#404B48' }}>
              Automatisierung heißt nicht „Daten wild rumschieben“. Saubere Umsetzung beinhaltet:
            </p>
            <ul className="space-y-2 text-light-200">
              <li>klare Datenflüsse (was geht wohin, warum)</li>
              <li>Zugriffskonzepte (wer darf was sehen)</li>
              <li>Auftragsverarbeitung (AVV) mit relevanten Tools</li>
              <li>Datensparsamkeit (nur speichern, was nötig ist)</li>
              <li>Logging & Dokumentation (für Nachvollziehbarkeit)</li>
            </ul>
            <p className="mt-4" style={{ color: '#404B48' }}>
              Wenn ihr sensible Daten verarbeitet (z. B. Gesundheitsdaten), planen wir die Architektur entsprechend konservativ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unser Vorgehen: In 5 Schritten zur funktionierenden Automatisierung
            </motion.h2>
            <div className="space-y-6">
              {ourApproachSteps.map((s, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 bg-white p-6 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-heading font-bold text-primary-500 flex-shrink-0">{s.step}</span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-1">{s.title}</h3>
                    <p className="text-light-200 text-sm">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ListChecks className="text-primary-500" size={28} />
              Mini-Checkliste: Ist Ihr Betrieb bereit für Automatisierung?
            </motion.h2>
            <p className="mb-4" style={{ color: '#404B48' }}>
              Haken dran = perfekt. Wenn nicht, kein Problem – dann starten wir eben kleiner.
            </p>
            <ul className="space-y-3">
              {checklistItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-light-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={18} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isRegional ? `FAQ – Automatisierungen in ${regionName}` : 'FAQs'}
            </motion.h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl border bg-white p-5 shadow-card" style={{ borderColor: '#E4E9E7' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base font-heading font-bold mb-2 flex items-start gap-2"><span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72' }}>?</span>{faq.q}</h3>
                  <p className="text-sm mt-2" style={{ color: '#404B48' }}>{faq.a}</p>
                </motion.div>
              ))}
              {regionContent?.localFaqs?.map((faq, index) => (
                <motion.div
                  key={`local-${index}`}
                  className="rounded-2xl border bg-white p-5 shadow-card" style={{ borderColor: '#E4E9E7' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (faqs.length + index) * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base font-heading font-bold mb-2 flex items-start gap-2"><span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72' }}>?</span>{faq.q}</h3>
                  <p className="" style={{ color: '#404B48' }}>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Fazit: Wenn Abläufe automatisch laufen, wird der Alltag leichter
            </motion.h2>
            <motion.p
              className="text-light-200 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Automatisierungen sind kein Luxus. Sie sind der schnellste Weg zu: weniger Stress im Tagesgeschäft, schnelleren Reaktionen, mehr Terminen und weniger verpassten Chancen, klaren Zuständigkeiten statt Chaos.
            </motion.p>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Wenn du willst, schauen wir gemeinsam auf deinen aktuellen Ablauf und sagen dir ehrlich, welche 1–2 Automatisierungen bei euch am meisten bringen.
            </motion.p>
            <p className="text-light-300 text-sm mb-6">
              Passend dazu: <a href="/ki-chatbots" className="text-primary-400 hover:underline">KI-Chatbot integrieren</a>,{' '}
              <a href="/telefonassistenten" className="text-primary-400 hover:underline">Telefonassistent einrichten</a>,{' '}
              <a href="/webseite" className="text-primary-400 hover:underline">Website erstellen lassen</a>,{' '}
              <a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">lokales SEO Leipzig</a>,{' '}
              <a href="/kontakt" className="text-primary-400 hover:underline">Erstgespräch anfragen</a>.
            </p>
            <p className="text-xs font-semibold mb-4 flex items-center gap-1.5" style={{ color: '#0E7C72' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Wir nehmen maximal 3 Neukunden pro Monat an
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button onClick={scrollToContact} className="btn-primary">
                Kostenlosen Automations-Check anfragen
                <ArrowRight size={18} />
              </button>
              <a href="tel:+491785844460" className="btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Jetzt anrufen
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {(isRegional || true) && (
        <section className="py-16" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                  {isRegional
                    ? `Automatisierungen für Unternehmen in ${regionName}`
                    : 'Lokal in Leipzig & Region: Warum das bei Automatisierungen hilft'}
                </h2>
                {isRegional && regionContent?.localSection ? (
                  regionContent.localSection.map((p, i) => (
                    <motion.p
                      key={i}
                      className="text-light-200 max-w-3xl mx-auto mb-4 text-left"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {p}
                    </motion.p>
                  ))
                ) : isRegional ? (
                  <p className="text-light-200 max-w-3xl mx-auto">
                    Gerade bei Prozessautomatisierung zählt das Verständnis für den lokalen Alltag: typische Anfragen, Abläufe und Kundenkanäle. Als Agentur mit Sitz in Groitzsch kennen wir die Anforderungen von Unternehmen in {regionName} und der Region. Einrichtung und Optimierung Ihrer Automatisierungen erfolgen nah an Ihrem Alltag – persönlich, praxisnah und mit kurzen Wegen.
                  </p>
                ) : (
                  <p className="text-light-200 max-w-3xl mx-auto">
                    Gerade bei Prozessautomatisierung zählt das Verständnis für den lokalen Alltag: typische Anfragen, Abläufe und Kundenkanäle. Deshalb ist es ein Vorteil, wenn Einrichtung und Optimierung nah am Alltag lokaler Unternehmen passieren.
                  </p>
                )}
              </motion.div>
              {!isRegional && (
                <motion.p
                  className="text-light-200 text-center mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Wir unterstützen Unternehmen in Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz und Groitzsch – und kennen die typischen Anforderungen in der Region.
                </motion.p>
              )}
            </div>
          </div>
        </section>
      )}

      {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
        <section className="py-16" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}>
                Automatisierungen für Unternehmen in {regionName}
              </h2>
              {regionContent.paragraphs.map((p, i) => (
                <p key={i} className="text-light-200 text-lg leading-relaxed mb-5">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isRegional && (
        <section className="py-12" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-light-200 text-lg leading-relaxed">
                Unsere Automatisierungslösungen setzen wir besonders häufig für Unternehmen in{' '}
                <a href="/leistungsgebiete/leipzig" className="text-primary-400 hover:underline">Leipzig</a> und{' '}
                <a href="/leistungsgebiete/zwenkau" className="text-primary-400 hover:underline">Zwenkau</a> um.
                Von <a href="/leistungsgebiete/groitzsch" className="text-primary-400 hover:underline">Groitzsch</a> aus arbeiten wir direkt mit Ihrem Team – persönlich, transparent und praxisnah.
              </p>
            </div>
          </div>
        </section>
      )}

      <SubpageLinksBlock
        serviceSlug="automatisierungen"
        regionSlug={isRegional ? regionSlug : undefined}
        title="Automatisierung im Detail"
      />

      <RelatedServices currentSlug="automatisierungen" />

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {isRegional ? (
              <div className="mt-10 text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                  Weitere Leistungen in {regionName}
                </h3>
                <p className="text-light-200 mb-3">
                  <a href={regionUrl} className="text-primary-400 hover:underline font-heading font-bold">
                    Alle Leistungen in {regionName}
                  </a>
                  {' – '}Übersicht unserer Angebote in Ihrer Region.
                </p>
                <p className="mb-6" style={{ color: '#404B48' }}>
                  <a href="/automatisierungen" className="text-primary-400 hover:underline">
                    Mehr zu Automatisierungen im Überblick
                  </a>
                  {' – '}alle Details auf unserer Service-Seite.
                </p>
                <p className="text-light-300 text-sm mb-3">Automatisierungen in anderen Gebieten:</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {otherRegions.map((city, i) => (
                    <li key={city.slug}>
                      <a
                        href={`/leistungsgebiete/${city.slug}/automatisierungen`}
                        className="text-primary-400 hover:underline"
                      >
                        {getRegionServiceLinkText('automatisierungen', city.name, i)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <ServicedRegionsBlock />
                <RegionServiceLinksBlock serviceSlug="automatisierungen" title="Automatisierungen in Ihrem Gebiet" />
              </>
            )}
          </div>
        </div>
      </section>

      <ContactForm service="automatisierungen" heading="Kostenlosen Automations-Check anfragen" subheading="Wir schauen auf Ihre Abläufe und sagen Ihnen ehrlich, welche 1–2 Automatisierungen am meisten bringen." />
      <GoogleMapsSection />

      <StickyCtaBar ctaLabel="Automations-Check anfragen" />
    </div>
  </>
  );
};

export default Automatisierungen;
export type { AutomatisierungenProps };
