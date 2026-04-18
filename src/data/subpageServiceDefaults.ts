/**
 * Pro Service (KI-Chatbots, Telefonassistenten, Automatisierungen, CRM, SEO)
 * definieren wir wiederverwendbare Inhalte für die generischen Sektionen
 * jeder Subpage (4-Schritt-Prozess, 5 Gründe, Zielgruppen, Mietmodell, Cross-Sell).
 *
 * Jede Subpage kann diese Defaults im eigenen Content pro Feld überschreiben.
 */

import type {
  SubpageAudienceSection,
  SubpageBenefitsSection,
  SubpageCrossSell,
  SubpageMiniCta,
  SubpageProcessSection,
  SubpageRentalSection,
} from './serviceSubpages';

export interface SubpageServiceDefaults {
  serviceLabel: string;
  /** Short nice label for "für {subpage} {articleText}" style sentences. */
  articleText: string;
  process: SubpageProcessSection;
  benefits: SubpageBenefitsSection;
  audiences: SubpageAudienceSection;
  rental: SubpageRentalSection;
  miniCta: SubpageMiniCta;
  crossSell: SubpageCrossSell;
  /** Optional pre-built extra sections unique to that service. */
  extraSections?: { headline: string; body: string; bullets?: string[] }[];
}

/* ──────────────────────────────────────────────────────────────────────────
   KI-Chatbots
   ──────────────────────────────────────────────────────────────────────── */
const kiChatbots: SubpageServiceDefaults = {
  serviceLabel: 'KI-Chatbots',
  articleText: 'die digitale Kundenassistenz',
  process: {
    headline: 'So starten wir gemeinsam',
    steps: [
      { step: '01', title: 'Live-Demo erleben', description: 'Testen Sie die digitale Kundenassistenz direkt auf unserer Website.' },
      { step: '02', title: 'Unverbindliches Gespräch', description: 'Wir besprechen kurz Ihre Anforderungen und Ziele.' },
      { step: '03', title: 'Individuelle Einrichtung', description: 'Die digitale Kundenassistenz wird speziell auf Ihr Unternehmen angepasst.' },
      { step: '04', title: 'Live-Schaltung & Optimierung', description: 'Wir begleiten den laufenden Betrieb und optimieren kontinuierlich.' },
    ],
  },
  benefits: {
    headline: '5 schnelle Gründe, warum Unternehmen das lieben',
    benefits: [
      { icon: 'clock', title: '24/7 erreichbar', description: 'Ohne „abends noch Mails beantworten".' },
      { icon: 'zap', title: 'Sofort Antworten', description: 'Statt Wartezeit für jede Anfrage.' },
      { icon: 'shield', title: 'Weniger Unterbrechungen', description: 'Standardfragen landen nicht mehr bei Ihnen.' },
      { icon: 'target', title: 'Bessere Leads', description: 'Sauber vorqualifiziert, mit den richtigen Infos.' },
      { icon: 'layers', title: 'Weniger Chaos', description: 'Anfragen kommen strukturiert und sortiert an.' },
    ],
  },
  audiences: {
    headline: 'Für welche Unternehmen ist das sinnvoll?',
    criteria: [
      'regelmäßig Kundenanfragen erhalten',
      'einen hohen Kommunikationsaufwand haben',
      'Anfragen strukturierter erfassen möchten',
      'ihre Erreichbarkeit über die Website verbessern wollen',
    ],
    audiences: [
      { icon: 'building', title: 'Dienstleister & Agenturen' },
      { icon: 'briefcase', title: 'Handwerk & lokale Betriebe' },
      { icon: 'stethoscope', title: 'Praxen, Kanzleien & Beratungen' },
      { icon: 'shopping', title: 'E-Commerce & Service-Websites' },
    ],
  },
  rental: {
    headline: 'Mieten statt kaufen – volle Transparenz',
    lead: 'Unsere digitale Kundenassistenz wird monatlich gemietet, nicht verkauft.',
    points: [
      'Keine hohen Einmalkosten',
      'Keine Mindestlaufzeit',
      'Kündigungsfrist: 3 Monate zum Monatsende',
      'Betrieb, Wartung und laufende Optimierung inklusive',
    ],
    additional: [
      {
        title: 'Ihre Vorteile im Mietmodell',
        bullets: [
          'laufende Anpassungen an echte Kundenfragen',
          'Verbesserungen anhand der Chat-Auswertung',
          'klare Weiterentwicklung statt Stillstand',
        ],
      },
      {
        title: 'Laufende Optimierung inklusive',
        bullets: [
          'Welche Fragen kommen am häufigsten?',
          'Wo brechen Besucher ab?',
          'Welche Einstiegsfrage konvertiert besser?',
          'Welche Übergabe bringt die meisten Termine?',
        ],
      },
    ],
  },
  miniCta: {
    headline: 'Passt eine digitale Kundenassistenz zu Ihrem Alltag?',
    body: 'In einem kurzen Gespräch schauen wir gemeinsam, ob ein KI-Chatbot auf Ihrer Website wirklich hilft – oder ob an anderer Stelle mehr Hebel liegt.',
    buttonText: 'Passt ein Chatbot zu Ihrem Unternehmen? In 15 Minuten klären.',
  },
  crossSell: {
    kicker: 'Viele Anfragen kommen auch per Telefon.',
    title: 'Telefonische Kundenassistenz',
    body: 'Unsere telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet häufige Fragen und erfasst Anliegen automatisch.',
    ctaText: 'Mehr zur telefonischen Kundenassistenz',
    ctaHref: '/telefonassistenten',
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   Telefonassistenten
   ──────────────────────────────────────────────────────────────────────── */
const telefonassistenten: SubpageServiceDefaults = {
  serviceLabel: 'Telefonassistenten',
  articleText: 'die telefonische Kundenassistenz',
  process: {
    headline: 'So starten wir gemeinsam',
    steps: [
      { step: '01', title: 'Testanruf erleben', description: 'Rufen Sie unsere Demo-Nummer an und erleben Sie die KI-Telefonassistenz live.' },
      { step: '02', title: 'Unverbindliches Gespräch', description: 'Wir besprechen, welche Anrufsituationen Sie heute belasten.' },
      { step: '03', title: 'Individuelle Einrichtung', description: 'Begrüßung, Fragen, Weiterleitungen und Öffnungszeiten werden auf Sie zugeschnitten.' },
      { step: '04', title: 'Go-Live & Optimierung', description: 'Wir begleiten die ersten Wochen eng und schärfen Dialoge nach realen Anrufen.' },
    ],
  },
  benefits: {
    headline: '5 schnelle Gründe, warum Unternehmen das lieben',
    benefits: [
      { icon: 'phone', title: 'Kein Anruf geht verloren', description: 'Auch abends, am Wochenende oder wenn Sie im Termin sind.' },
      { icon: 'zap', title: 'Sofortige Annahme', description: 'Kein Warten, keine Ansage-Schleife – freundlich und direkt.' },
      { icon: 'shield', title: 'Weniger Unterbrechungen', description: 'Standardanrufe werden komplett abgefangen.' },
      { icon: 'target', title: 'Strukturierte Leads', description: 'Anliegen werden sauber erfasst und an Ihr Team übergeben.' },
      { icon: 'clock', title: 'Entlastung rund um die Uhr', description: 'Auch in Spitzenzeiten bleibt Ihr Team handlungsfähig.' },
    ],
  },
  audiences: {
    headline: 'Für welche Unternehmen ist das sinnvoll?',
    criteria: [
      'viele Anrufe mit wiederkehrenden Fragen erhalten',
      'häufig im Termin oder unterwegs sind',
      'keinen dedizierten Empfang haben',
      'auch außerhalb der Geschäftszeiten erreichbar sein möchten',
    ],
    audiences: [
      { icon: 'briefcase', title: 'Handwerksbetriebe & Bauunternehmen' },
      { icon: 'stethoscope', title: 'Praxen & Kanzleien' },
      { icon: 'building', title: 'Hausverwaltungen & Dienstleister' },
      { icon: 'shopping', title: 'Einzelhandel & lokale Betriebe' },
    ],
  },
  rental: {
    headline: 'Mieten statt kaufen – volle Transparenz',
    lead: 'Die telefonische Kundenassistenz wird monatlich gemietet, nicht verkauft.',
    points: [
      'Keine hohen Einmalkosten',
      'Keine Mindestlaufzeit',
      'Kündigungsfrist: 3 Monate zum Monatsende',
      'Betrieb, Wartung und laufende Optimierung inklusive',
    ],
    additional: [
      {
        title: 'Ihre Vorteile im Mietmodell',
        bullets: [
          'laufende Anpassungen anhand echter Anrufe',
          'Verbesserungen durch regelmäßige Auswertung',
          'klare Weiterentwicklung statt Stillstand',
        ],
      },
      {
        title: 'Laufende Optimierung inklusive',
        bullets: [
          'Welche Anliegen kommen am häufigsten?',
          'Wo bricht das Gespräch ab?',
          'Welche Begrüßung konvertiert besser?',
          'Wie lassen sich Weiterleitungen sauberer steuern?',
        ],
      },
    ],
  },
  miniCta: {
    headline: 'Passt eine KI-Telefonassistenz zu Ihrem Alltag?',
    body: 'In einem kurzen Gespräch klären wir, welche Anrufsituationen sich bei Ihnen sinnvoll automatisieren lassen.',
    buttonText: 'Passt eine Telefonassistenz zu Ihrem Unternehmen? In 15 Minuten klären.',
  },
  crossSell: {
    kicker: 'Viele Anfragen kommen auch über die Website.',
    title: 'Digitale Kundenassistenz (Chatbot)',
    body: 'Unsere digitale Kundenassistenz antwortet Besuchern auf Ihrer Website rund um die Uhr – ergänzt die Telefonassistenz perfekt.',
    ctaText: 'Mehr zur digitalen Kundenassistenz',
    ctaHref: '/ki-chatbots',
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   Automatisierungen
   ──────────────────────────────────────────────────────────────────────── */
const automatisierungen: SubpageServiceDefaults = {
  serviceLabel: 'Automatisierungen',
  articleText: 'die Automatisierungen',
  process: {
    headline: 'So starten wir gemeinsam',
    steps: [
      { step: '01', title: 'Analyse Ihrer Abläufe', description: 'Wir schauen uns gemeinsam die heutigen Prozesse an und finden die größten Zeitfresser.' },
      { step: '02', title: 'Konzeption', description: 'Wir entwickeln ein schlankes Automatisierungskonzept, das zu Ihren Tools passt.' },
      { step: '03', title: 'Umsetzung & Integration', description: 'Wir integrieren Kalender, CRM, E-Mail und Messenger sauber zusammen.' },
      { step: '04', title: 'Optimierung', description: 'Wir begleiten den Betrieb und schärfen Abläufe anhand realer Daten nach.' },
    ],
  },
  benefits: {
    headline: '5 schnelle Gründe, warum Unternehmen das lieben',
    benefits: [
      { icon: 'zap', title: 'Abläufe laufen von selbst', description: 'Keine manuellen Schritte mehr bei Standardprozessen.' },
      { icon: 'target', title: 'Nichts geht mehr verloren', description: 'Jede Anfrage, jeder Termin, jedes Follow-up ist erfasst.' },
      { icon: 'clock', title: 'Massiv Zeit zurück', description: 'Stunden manueller Arbeit werden auf Minuten reduziert.' },
      { icon: 'layers', title: 'Mehr Überblick', description: 'Eine zentrale Sicht statt zehn Excel-Listen.' },
      { icon: 'shield', title: 'Planbare Qualität', description: 'Prozesse laufen konsistent – unabhängig von Auslastung.' },
    ],
  },
  audiences: {
    headline: 'Für welche Unternehmen ist das sinnvoll?',
    criteria: [
      'viele wiederkehrende manuelle Schritte haben',
      'Leads oder Termine häufig „verlieren"',
      'mit mehreren Tools parallel arbeiten',
      'skalieren wollen, ohne mehr Personal',
    ],
    audiences: [
      { icon: 'building', title: 'Dienstleister & Agenturen' },
      { icon: 'briefcase', title: 'Handwerk & Betriebe' },
      { icon: 'stethoscope', title: 'Praxen & Kanzleien' },
      { icon: 'shopping', title: 'E-Commerce & lokale Händler' },
    ],
  },
  rental: {
    headline: 'Mieten statt kaufen – volle Transparenz',
    lead: 'Unsere Automatisierungen werden monatlich betreut, nicht „einmal gebaut und vergessen".',
    points: [
      'Keine hohen Einmalkosten',
      'Keine Mindestlaufzeit',
      'Kündigungsfrist: 3 Monate zum Monatsende',
      'Betrieb, Monitoring und laufende Optimierung inklusive',
    ],
    additional: [
      {
        title: 'Ihre Vorteile im Mietmodell',
        bullets: [
          'laufende Anpassungen an neue Prozesse',
          'Monitoring statt Blackbox',
          'schnelle Fehlerbehebung bei Tool-Updates',
        ],
      },
    ],
  },
  miniCta: {
    headline: 'Passen Automatisierungen zu Ihrem Alltag?',
    body: 'In einem kurzen Gespräch prüfen wir, welche Prozesse sich bei Ihnen am schnellsten automatisieren lassen.',
    buttonText: 'Passt eine Automatisierung zu Ihrem Unternehmen? In 15 Minuten klären.',
  },
  crossSell: {
    kicker: 'Brauchen Sie zusätzlich Kundenansprache?',
    title: 'Digitale Kundenassistenz (Chatbot)',
    body: 'Unsere digitale Kundenassistenz ergänzt Ihre Automatisierungen – sie erfasst Anfragen und übergibt sie direkt in den automatisierten Workflow.',
    ctaText: 'Mehr zur digitalen Kundenassistenz',
    ctaHref: '/ki-chatbots',
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   CRM-Systeme
   ──────────────────────────────────────────────────────────────────────── */
const crmSysteme: SubpageServiceDefaults = {
  serviceLabel: 'CRM-Systeme',
  articleText: 'das CRM-System',
  process: {
    headline: 'So starten wir gemeinsam',
    steps: [
      { step: '01', title: 'Analyse', description: 'Wir schauen, wie Sie heute Kontakte, Leads und Projekte verwalten.' },
      { step: '02', title: 'Konzept', description: 'Wir schlagen ein schlankes CRM-Setup vor, das zu Ihrem Team passt.' },
      { step: '03', title: 'Einrichtung', description: 'Pipeline, Felder, Automatisierungen und Schnittstellen werden sauber aufgebaut.' },
      { step: '04', title: 'Go-Live & Betreuung', description: 'Wir begleiten die Einführung und optimieren laufend.' },
    ],
  },
  benefits: {
    headline: '5 schnelle Gründe, warum Unternehmen das lieben',
    benefits: [
      { icon: 'layers', title: 'Alle Infos an einem Ort', description: 'Schluss mit verteilten Excel-Listen und Notizen.' },
      { icon: 'target', title: 'Kein Lead geht verloren', description: 'Jede Anfrage, jedes Angebot wird erfasst.' },
      { icon: 'zap', title: 'Automatische Follow-ups', description: 'Erinnerungen und Mails laufen ohne dass jemand dran denken muss.' },
      { icon: 'clock', title: 'Transparente Pipeline', description: 'Sie sehen auf einen Blick, wo jedes Projekt steht.' },
      { icon: 'shield', title: 'Saubere Übergaben', description: 'Urlaub, Krankheit, neue Mitarbeiter – alles weiterhin dokumentiert.' },
    ],
  },
  audiences: {
    headline: 'Für welche Unternehmen ist das sinnvoll?',
    criteria: [
      'regelmäßig Angebote schreiben und nachfassen',
      'mit einem Team von 2–20 Personen arbeiten',
      'Vertriebschancen strukturiert verfolgen wollen',
      'Kundenhistorie nachvollziehen müssen',
    ],
    audiences: [
      { icon: 'briefcase', title: 'Dienstleister & Berater' },
      { icon: 'building', title: 'Hausverwaltungen & Makler' },
      { icon: 'stethoscope', title: 'Kanzleien & Praxen' },
      { icon: 'shopping', title: 'Vertriebsorganisationen' },
    ],
  },
  rental: {
    headline: 'Mieten statt kaufen – volle Transparenz',
    lead: 'Unsere CRM-Lösung wird monatlich gemietet, nicht als großes Projekt verkauft.',
    points: [
      'Keine hohen Einmalkosten',
      'Keine Mindestlaufzeit',
      'Kündigungsfrist: 3 Monate zum Monatsende',
      'Betrieb, Anpassungen und laufende Optimierung inklusive',
    ],
    additional: [
      {
        title: 'Ihre Vorteile im Mietmodell',
        bullets: [
          'laufende Anpassungen an Ihre Prozesse',
          'Schulung und Support inklusive',
          'neue Features ohne Extra-Projekt',
        ],
      },
    ],
  },
  miniCta: {
    headline: 'Passt ein CRM zu Ihrem Alltag?',
    body: 'In einem kurzen Gespräch prüfen wir, ob und wie ein CRM Ihren Vertrieb und Ihre Kundenbetreuung vereinfachen kann.',
    buttonText: 'Passt ein CRM zu Ihrem Unternehmen? In 15 Minuten klären.',
  },
  crossSell: {
    kicker: 'Automatisierung macht Ihr CRM noch stärker.',
    title: 'Automatisierungen für Anfragen & Termine',
    body: 'Mit Automatisierungen füllen sich Pipeline, Kontakte und Follow-ups von selbst – Ihr CRM wird zum echten Wachstumsmotor.',
    ctaText: 'Mehr zu Automatisierungen',
    ctaHref: '/automatisierungen',
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   SEO Top 3
   ──────────────────────────────────────────────────────────────────────── */
const seoTop3: SubpageServiceDefaults = {
  serviceLabel: 'SEO',
  articleText: 'die SEO-Optimierung',
  process: {
    headline: 'So starten wir gemeinsam',
    steps: [
      { step: '01', title: 'Audit & Keyword-Check', description: 'Wir analysieren Ihre Sichtbarkeit und die wichtigsten Suchbegriffe.' },
      { step: '02', title: 'Strategie', description: 'Wir priorisieren Maßnahmen nach Aufwand und Impact.' },
      { step: '03', title: 'Umsetzung', description: 'On-Page, Technik, Content und Local-SEO – sauber Schritt für Schritt.' },
      { step: '04', title: 'Monitoring', description: 'Monatliche Reports und laufende Optimierung – transparent nachvollziehbar.' },
    ],
  },
  benefits: {
    headline: '5 schnelle Gründe, warum Unternehmen das lieben',
    benefits: [
      { icon: 'target', title: 'Sichtbar bei echten Kunden', description: 'Ranking für die Suchbegriffe, die Kunden wirklich eingeben.' },
      { icon: 'zap', title: 'Mehr Anfragen', description: 'Höhere Rankings = mehr Klicks = mehr Anfragen.' },
      { icon: 'shield', title: 'Nachhaltig', description: 'Keine laufenden Werbekosten – Sichtbarkeit, die bleibt.' },
      { icon: 'layers', title: 'Transparenz', description: 'Monatliche Reports zeigen, was passiert ist.' },
      { icon: 'clock', title: 'Klare Roadmap', description: 'Kein SEO-Blackbox – Sie wissen immer, was gerade läuft.' },
    ],
  },
  audiences: {
    headline: 'Für welche Unternehmen ist das sinnvoll?',
    criteria: [
      'auf lokale Kundschaft angewiesen sind',
      'über Google Anfragen generieren wollen',
      'eine bestehende Website haben, die zu wenig liefert',
      'nicht dauerhaft in Anzeigen investieren möchten',
    ],
    audiences: [
      { icon: 'briefcase', title: 'Handwerk & Dienstleister' },
      { icon: 'stethoscope', title: 'Praxen & Kanzleien' },
      { icon: 'building', title: 'Lokale Filialen & Ketten' },
      { icon: 'shopping', title: 'Service-Unternehmen' },
    ],
  },
  rental: {
    headline: 'Transparent im Monatsmodell',
    lead: 'SEO ist kein Projekt, sondern ein Prozess. Deshalb arbeiten wir im monatlichen Modell.',
    points: [
      'Keine hohen Einmalkosten',
      'Keine Mindestlaufzeit',
      'Kündigungsfrist: 3 Monate zum Monatsende',
      'Monitoring, Reports und laufende Optimierung inklusive',
    ],
    additional: [
      {
        title: 'Ihre Vorteile im Monatsmodell',
        bullets: [
          'laufende Anpassungen an Google-Updates',
          'klare monatliche Reports',
          'kontinuierliche Content-Verbesserungen',
        ],
      },
    ],
  },
  miniCta: {
    headline: 'Passt SEO zu Ihrem Unternehmen?',
    body: 'In einem kurzen Gespräch prüfen wir, welche Rankings realistisch erreichbar sind – und wie schnell.',
    buttonText: 'SEO-Potenzial in 15 Minuten prüfen lassen',
  },
  crossSell: {
    kicker: 'Eine moderne Website ist die Basis für gutes SEO.',
    title: 'Webseiten im Mietmodell',
    body: 'Schnelle, saubere Webseiten, die technisch fürs Ranking optimiert sind – die perfekte Basis für Ihre SEO-Strategie.',
    ctaText: 'Mehr zu Webseiten im Mietmodell',
    ctaHref: '/webseite',
  },
};

export const SERVICE_DEFAULTS: Record<string, SubpageServiceDefaults> = {
  'ki-chatbots': kiChatbots,
  telefonassistenten,
  automatisierungen,
  'crm-systeme': crmSysteme,
  'seo-top-3': seoTop3,
};

export const getServiceDefaults = (slug: string): SubpageServiceDefaults | null =>
  SERVICE_DEFAULTS[slug] ?? null;
