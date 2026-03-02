'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Workflow,
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
import ServiceJsonLd from '../../components/ServiceJsonLd';

const Automatisierungen: React.FC = () => {
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

  const canonicalUrl = 'https://pixelkraftwerk-ai.com/automatisierungen';

  return (
    <>
      <Head>
        <ServiceJsonLd
          name="Automatisierungen für Anfragen, Vertrieb & Terminplanung"
          serviceType="BusinessProcessAutomation"
          description="Anfragen erfassen, sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress und klarere Abläufe für Vertrieb und Service-Teams."
          url={canonicalUrl}
          pageName="Automatisierungen"
          faqs={faqs.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />
      </Head>
      <div className="bg-dark-500">
        <BreadcrumbSchema
          serviceName="Automatisierungen für Anfragen, Vertrieb & Terminplanung"
          serviceUrl={canonicalUrl}
        />

      {/* Hero mit Premium-Hintergrundbild – Bild unterhalb der Header-Leiste */}
      <section id="ki-automatisierung-fur-anfragen-termine" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-500">
        <div className="absolute top-20 left-0 right-0 bottom-0 md:top-24">
          <Image
            src="/images/automtatisierung.png"
            alt="Automatisierungen für Anfragen, Vertrieb und Terminplanung"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/50 to-dark-500/95" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-500/30 via-transparent to-dark-500/40" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500/15 to-transparent" aria-hidden />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 border border-primary-500/40 backdrop-blur-sm mb-8 shadow-primary-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Workflow size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 leading-tight"
              style={{
                color: '#F5F7FA',
                textShadow: '0 10px 30px rgba(0,0,0,0.65)',
                WebkitTextStroke: '1px rgba(0,0,0,0.25)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Automatisierungen für Anfragen, Vertrieb & Terminplanung
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-400 mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Damit Abläufe automatisch laufen
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed"
              style={{
                color: '#F5F7FA',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stell dir vor, neue Anfragen gehen nicht mehr im E-Mail-Chaos unter. Niemand muss mehr „irgendwann mal“ zurückrufen. Und Termine laufen sauber, automatisch und zuverlässig im Hintergrund.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{
                color: '#E8EAED',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Wir bauen Abläufe, die Arbeit abnehmen, Fehler reduzieren und für Überblick sorgen – <strong style={{ color: '#F5F7FA' }}>ohne dass dein Team ständig manuell nachhaken muss</strong>.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kostenlosen Automations-Check anfragen
              <ArrowRight className="ml-2" size={24} />
            </motion.button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
      </section>

      <section className="py-20 bg-dark-500">
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
              Wenn wir von <strong className="text-light-100">KI-Automatisierung</strong> sprechen, geht es nicht um „noch ein Tool“. Es geht darum, dass eure Systeme so miteinander verbunden sind, dass Abläufe automatisch passieren.
            </motion.p>
            <p className="text-light-200 mb-2">Typisch ist ein Setup wie:</p>
            <ul className="space-y-2 text-light-200 mb-6">
              <li><strong className="text-light-100">Eingänge</strong> (Website, E-Mail, Telefonnotiz, WhatsApp, Ads, Google Business Profile)</li>
              <li><strong className="text-light-100">Logik</strong> (Regeln, Prioritäten, Zuständigkeiten – optional mit künstlicher Intelligenz zur Klassifizierung)</li>
              <li><strong className="text-light-100">Aktionen</strong> (Sofortantwort, Aufgaben, CRM-Eintrag, Terminbuchung, Follow-up, Reminder)</li>
            </ul>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Technisch bauen wir das häufig mit <strong className="text-light-100">n8n</strong>, APIs und Webhooks. Für dich zählt aber nur: Anfragen werden erfasst, sortiert, bearbeitet und nachverfolgt – automatisch.
            </motion.p>
            <motion.p
              className="text-light-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <strong className="text-light-100">Wichtig:</strong> Sobald es um komplexe Integrationen (CRM, Kalenderlogik, mehrere Standorte, Datenqualität) geht, ist ein <strong className="text-light-100">Software-Entwickler</strong> ein echter Hebel: stabiler, sauberer, weniger Fehler.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
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
            <p className="text-light-200 mb-2">
              Nicht „alles auf einmal“, sondern genau die Schritte, die euch heute Zeit, Nerven und Umsatz kosten – z. B.:
            </p>
            <ul className="space-y-1 text-light-200 list-disc list-inside">
              <li>Anfragen automatisch erfassen & ordnen</li>
              <li>Zuständigkeiten zuweisen</li>
              <li>Nachfassen, Erinnern, Aufgaben erstellen</li>
              <li>Termine buchen, bestätigen, umbuchen, erinnern</li>
              <li>Daten zwischen Systemen synchronisieren (z. B. Website → CRM → Kalender → Team)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
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
                  className="bg-dark-400 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-primary-500 mb-2">{item.problem}</h3>
                  <p className="text-light-200">{item.solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
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
                  className="flex gap-4 bg-dark-500 p-6 border border-dark-100"
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

      <section className="py-20 bg-dark-500">
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-dark-400 border border-dark-100">
                <thead>
                  <tr>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Bereich</th>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Manuell (vorher)</th>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Automatisiert (nachher)</th>
                  </tr>
                </thead>
                <tbody className="text-light-200 text-sm">
                  <tr><td className="border border-dark-100 p-3">Anfragen</td><td className="border border-dark-100 p-3">verteilt in E-Mail/WhatsApp/Notizen</td><td className="border border-dark-100 p-3">zentral erfasst & sauber sortiert</td></tr>
                  <tr><td className="border border-dark-100 p-3">Reaktion</td><td className="border border-dark-100 p-3">abhängig von Zeit/Stress</td><td className="border border-dark-100 p-3">Sofort-Bestätigung + klare Zuständigkeit</td></tr>
                  <tr><td className="border border-dark-100 p-3">Follow-ups</td><td className="border border-dark-100 p-3">„machen wir später“ → oft vergessen</td><td className="border border-dark-100 p-3">automatisch geplant + Aufgaben erstellt</td></tr>
                  <tr><td className="border border-dark-100 p-3">Termine</td><td className="border border-dark-100 p-3">Hin-und-Her am Telefon</td><td className="border border-dark-100 p-3">self-service Buchung + Regeln + Reminder</td></tr>
                  <tr><td className="border border-dark-100 p-3">Überblick</td><td className="border border-dark-100 p-3">„Wo stehen wir gerade?“</td><td className="border border-dark-100 p-3">Pipeline/Status auf einen Blick</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
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
            <p className="text-light-200 mb-8">
              Damit du ein Gefühl bekommst, was realistisch ist – gerade für Unternehmen in Leipzig, Markkleeberg, Borna, Zwenkau, Groitzsch & Umgebung.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practiceExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  className="bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-primary-500 mb-3">{i + 1}) {ex.title}</h3>
                  <ul className="space-y-1 text-light-200 text-sm">
                    {ex.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-primary-500">•</span>
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

      <section className="py-20 bg-dark-500">
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-dark-400 border border-dark-100">
                <thead>
                  <tr>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Kanal</th>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Typische Automatisierung</th>
                    <th className="border border-dark-100 p-3 text-left font-heading font-bold text-light-100">Ergebnis</th>
                  </tr>
                </thead>
                <tbody className="text-light-200 text-sm">
                  <tr><td className="border border-dark-100 p-3">Website</td><td className="border border-dark-100 p-3">Formular → Lead + Sofortantwort + Zuweisung</td><td className="border border-dark-100 p-3">schnellerer Erstkontakt</td></tr>
                  <tr><td className="border border-dark-100 p-3">E-Mail</td><td className="border border-dark-100 p-3">Mails taggen/sortieren → Aufgaben & Status</td><td className="border border-dark-100 p-3">weniger Chaos im Postfach</td></tr>
                  <tr><td className="border border-dark-100 p-3">Telefon</td><td className="border border-dark-100 p-3">verpasster Anruf → Rückruf-Task + Reminder</td><td className="border border-dark-100 p-3">keine verpassten Chancen</td></tr>
                  <tr><td className="border border-dark-100 p-3">Ads</td><td className="border border-dark-100 p-3">Leadform → Quali-Fragen → Terminlink</td><td className="border border-dark-100 p-3">bessere Lead-Qualität</td></tr>
                  <tr><td className="border border-dark-100 p-3">Kalender</td><td className="border border-dark-100 p-3">Buchung → Termin + Vorbereitung + Reminder</td><td className="border border-dark-100 p-3">weniger No-Shows</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
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
            <p className="text-light-200 mb-4">
              Viele denken bei Automatisierung an „neues CRM“ oder „noch ein Tool“. In der Praxis geht es um drei Bausteine:
            </p>
            <ul className="space-y-2 text-light-200 mb-6">
              <li><strong className="text-light-100">Eingänge</strong> – wo Anfragen herkommen</li>
              <li><strong className="text-light-100">Logik</strong> – Regeln, Zuständigkeiten, Priorisierung</li>
              <li><strong className="text-light-100">Aktionen</strong> – Benachrichtigen, Aufgaben erstellen, buchen, erinnern</li>
            </ul>
            <p className="text-light-200 mb-4">
              Im Hintergrund werden dafür Tools über Schnittstellen verbunden (APIs). Für dich als Kunde zählt aber nur: Es läuft automatisch und dein Team hat Überblick.
            </p>
            <p className="text-light-200 mb-6">
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
            <p className="text-light-200 mb-2">
              Ein MVP kann schlank starten. Aber sobald ihr:
            </p>
            <ul className="space-y-2 text-light-200 mb-3 list-disc list-inside">
              <li>mehrere Systeme sauber synchronisieren wollt,</li>
              <li>komplexe Regeln (Teams, Standorte, Kalender) habt,</li>
              <li>Datenqualität wichtig ist (Dubletten, Felder, Validierung),</li>
              <li>oder Monitoring/Fehler-Handling braucht,</li>
            </ul>
            <p className="text-light-200">
              … ist ein <strong className="text-light-100">Software-Entwickler</strong> (bzw. Softwareentwickler) extrem wertvoll, weil der Unterschied dann im Detail steckt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
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
            <p className="text-light-200 mb-4">
              Automatisierung heißt nicht „Daten wild rumschieben“. Saubere Umsetzung beinhaltet:
            </p>
            <ul className="space-y-2 text-light-200">
              <li>klare Datenflüsse (was geht wohin, warum)</li>
              <li>Zugriffskonzepte (wer darf was sehen)</li>
              <li>Auftragsverarbeitung (AVV) mit relevanten Tools</li>
              <li>Datensparsamkeit (nur speichern, was nötig ist)</li>
              <li>Logging & Dokumentation (für Nachvollziehbarkeit)</li>
            </ul>
            <p className="text-light-200 mt-4">
              Wenn ihr sensible Daten verarbeitet (z. B. Gesundheitsdaten), planen wir die Architektur entsprechend konservativ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
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
                  className="flex gap-4 bg-dark-500 p-6 border border-dark-100"
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

      <section className="py-20 bg-dark-500">
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
            <p className="text-light-200 mb-4">
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

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              FAQs
            </motion.h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="border-b border-dark-100 pb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{faq.q}</h3>
                  <p className="text-light-200">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
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
              <a href="/contact" className="text-primary-400 hover:underline">Erstgespräch anfragen</a>.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Kostenlosen Automations-Check anfragen (15 Min, konkret, ohne BlaBla)
              <ArrowRight className="ml-2" size={24} />
            </motion.a>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="automatisierungen" />

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ServicedRegionsBlock />
            <RegionServiceLinksBlock serviceSlug="automatisierungen" title="Automatisierungen in Ihrem Gebiet" />
          </div>
        </div>
      </section>

      <ContactForm />
      <GoogleMapsSection />
    </div>
  </>
  );
};

export default Automatisierungen;
