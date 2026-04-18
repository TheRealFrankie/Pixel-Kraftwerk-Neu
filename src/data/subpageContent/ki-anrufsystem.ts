import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'KI Anrufsystem für Unternehmen – Groitzsch & Leipzig | Pixel Kraftwerk',
  metaDescription:
    'KI Anrufsystem für automatisierte Telefonie: intelligente Anrufsteuerung, Spracherkennung und nahtlose Integration. Pixel Kraftwerk richtet Ihr KI-Telefonsystem ein.',
  primaryKeyword: 'KI Anrufsystem',
  secondaryKeywords: [
    'KI Telefonsystem',
    'automatisches Anrufsystem',
    'KI-Telefonanlage',
    'intelligente Anrufsteuerung',
    'Telefon-Automatisierung',
  ],
  imageAltTexts: [
    'KI Anrufsystem verarbeitet eingehende und ausgehende Anrufe automatisch',
    'Dashboard mit Anrufstatistiken und KI-gestützter Gesprächsanalyse',
    'Modernes KI-Anrufsystem für lokales Unternehmen in Leipzig',
  ],

  h1: 'KI Anrufsystem – Intelligente Telefonie für Ihr Unternehmen',
  subheadline: 'Moderne Telefoninfrastruktur, die für Sie mitdenkt',
  intro:
    'Telefonie ist für viele Unternehmen nach wie vor der wichtigste Kommunikationskanal – aber auch der ineffizienteste. Verpasste Anrufe, lange Warteschleifen, manuelles Weiterleiten: All das kostet Zeit und Kunden. Ein KI Anrufsystem modernisiert Ihre gesamte Telefon-Infrastruktur. Es versteht Anrufer, steuert Gespräche intelligent und integriert sich nahtlos in Ihre bestehenden Systeme. Pixel Kraftwerk aus Groitzsch entwickelt KI-Anrufsysteme für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, <a href="/leistungsgebiete/halle-saale" class="text-primary-400 hover:underline">Halle</a> und der Region – maßgeschneidert auf Ihre Anforderungen.',
  heroCtaText: 'KI-Anrufsystem anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Klassische Telefonanlagen sind nicht mehr zeitgemäß</span>',
    lead: 'Die meisten Unternehmen telefonieren 2025 noch wie 2005 – und verlieren genau deshalb Kunden:',
    bullets: [
      'Anrufe klingeln bei jedem durch, bis zufällig jemand rangeht',
      'Lange Warteschleifen, ohne Orientierung und Alternative',
      'Manuelle Weiterleitung über mehrere Mitarbeiter',
      'Kein Protokoll, keine Auswertung, keine Lern-Effekte',
    ],
    tagline: 'Das Ergebnis: genervte Kunden, gestresstes Team und ein unklares Bild über das, was am Telefon tatsächlich passiert.',
    details: [
      {
        title: 'Warum klassische Telefonie Sie ausbremst',
        body: 'Ohne intelligente Steuerung läuft Ihre Telefonie auf Zufall. Wer rangeht, wer zuständig ist und wie das Anliegen später dokumentiert wird – alles improvisiert.',
        bullets: [
          'Keine Vorqualifizierung der Anrufer',
          'Keine Zuordnung nach Thema oder Priorität',
          'Keine Anbindung an CRM oder Kalender',
          'Kein Überblick über Spitzen, Ausfälle oder Lücken',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jeder verpasste oder falsch geroutete Anruf ist ein Kunde, der weniger zufrieden ist – oder im Zweifel direkt zur Konkurrenz weiterwählt.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein KI-gestütztes Anrufsystem</span>',
    lead: 'Ein KI Anrufsystem übernimmt die gesamte Anrufsteuerung – <strong>intelligent, transparent und ohne zusätzliches Personal</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Anrufer werden automatisch begrüßt und nach Anliegen gefragt',
        'Gespräche werden thematisch und nach Priorität geroutet',
        'Standardinformationen werden direkt gegeben',
        'Komplexe Fälle landen gezielt beim richtigen Ansprechpartner',
      ],
    },
    blocks: [
      {
        title: 'Was das System konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Begrüßung + Anliegen-Klärung',
          'FAQ-Antworten direkt am Telefon',
          'Terminbuchung im Gespräch',
          'Weiterleitung mit vollständigem Kontext',
          'Rückrufmanagement außerhalb der Sprechzeiten',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Nicht einfach „Anruf klingelt" – sondern vollständige Info:',
        bullets: [
          'Name, Rufnummer, Anliegen',
          'Kategorisierung (Support, Vertrieb, Termin)',
          'Aufnahme oder Transkript (auf Wunsch)',
          'Priorität und Dringlichkeit',
        ],
      },
    ],
    tagline: '➡️ Telefonie mit Struktur – statt Zufall.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein KI Anrufsystem?',
    lead: 'Ein KI Anrufsystem ist eine moderne, <strong>cloudbasierte Telefonie-Infrastruktur mit KI-Komponenten</strong>. Es beantwortet, routet und dokumentiert Anrufe – statt nur durchzuklingeln.',
    examples: [
      'Intelligente Anrufannahme mit Spracherkennung',
      'Automatisches Routing nach Thema',
      'Transkription und Analyse aller Gespräche',
    ],
    blocks: [
      {
        title: 'Für wen sich ein KI Anrufsystem lohnt',
        body: 'Für Unternehmen mit hohem Anrufaufkommen: Handwerk, Praxen, Dienstleister, Vermietung, Service-Firmen. Besonders dort, wo viele Standardfragen parallel zu Fachthemen laufen.',
      },
      {
        title: 'Was das System nicht ist',
        body: '<strong>Wichtig:</strong> Ein KI-Anrufsystem ersetzt kein Fachpersonal – es filtert, strukturiert und entlastet. Komplexe Themen gehen weiterhin ans Team, aber mit vollem Kontext.',
      },
    ],
  },

  features: {
    headline: 'Was das KI Anrufsystem <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Intelligente Anrufannahme rund um die Uhr',
      'Spracherkennung & Intent-Analyse',
      'Automatisches Routing nach Thema',
      'Direkte FAQ-Antworten am Telefon',
      'Terminbuchung im Gespräch',
      'Rückrufmanagement',
      'Integration mit CRM, Kalender, Helpdesk',
    ],
    note: '<strong>Wichtig:</strong> Das System wird <strong>individuell auf Ihr Unternehmen konfiguriert</strong> – keine Telefon-„Ansage von der Stange".',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das System:',
        bullets: [
          'Mehrsprachigkeit',
          'Nebenstellen mit intelligentem Routing',
          'Statistiken und Reports',
          'Aufnahmen & Transkripte',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch ergänzen wir:',
        bullets: [
          'CRM (HubSpot, Pipedrive, eigenes)',
          'Kalender (Google, Microsoft 365)',
          'Ticket-/Helpdesk-Systeme',
          'Telefonanlagen, die Sie bereits nutzen',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist ein KI Anrufsystem?',
      headingLevel: 'h2',
      paragraphs: [
        'Ein KI Anrufsystem ist eine intelligente Telefonlösung, die eingehende und ausgehende Anrufe automatisiert verarbeitet. Anders als herkömmliche Telefonanlagen mit starren Menüs nutzt ein KI-System natürliche Sprachverarbeitung, um Anrufer zu verstehen, Anliegen zu klassifizieren und Gespräche intelligent zu steuern.',
        'Das System kombiniert mehrere Technologien: Spracherkennung (ASR) wandelt gesprochene Sprache in Text um, Sprachmodelle (LLMs) verstehen den Kontext und generieren passende Antworten, und Sprachsynthese (TTS) erzeugt eine natürlich klingende Ausgabe. Das Ergebnis ist ein Telefonsystem, das sich wie ein echtes Gespräch mit einem kompetenten Mitarbeiter anfühlt.',
        'Im Kern ersetzt das KI Anrufsystem die gesamte Eingangslogik Ihrer Telefonie: von der Begrüßung über die Anliegen-Erkennung bis zur Weiterleitung oder eigenständigen Bearbeitung.',
      ],
    },
    {
      heading: 'Herkömmliche Telefonanlage vs. KI Anrufsystem',
      headingLevel: 'h2',
      paragraphs: [
        'Die Unterschiede zwischen einer traditionellen Telefonanlage und einem KI-gestützten System sind erheblich:',
      ],
      table: {
        headers: ['Kriterium', 'Herkömmliche Telefonanlage', 'KI Anrufsystem'],
        rows: [
          ['Anrufsteuerung', 'Tastenmenü (IVR) oder manuell', 'Sprachgesteuert, kontextabhängig'],
          ['Sprachverständnis', 'Keines – nur Tasteneingabe', 'Natürliche Sprache, Dialekte, Umgangssprache'],
          ['Skalierung', 'Begrenzt durch Leitungen/Hardware', 'Cloud-basiert, unbegrenzt skalierbar'],
          ['Wartung', 'Vor-Ort-Techniker nötig', 'Fernwartung, automatische Updates'],
          ['Gesprächsanalyse', 'Keine', 'Automatische Transkription und Klassifizierung'],
          ['Integration', 'Begrenzt (oft proprietär)', 'CRM, Kalender, E-Mail, Ticket-Systeme'],
          ['Verfügbarkeit', 'Abhängig von Mitarbeitern', '24/7 ohne Unterbrechung'],
          ['Investition', 'Hohe Anschaffungskosten', 'Monatliche Miete, keine Hardware'],
        ],
      },
    },
    {
      heading: 'Die Kernfunktionen eines KI Anrufsystems',
      headingLevel: 'h2',
      paragraphs: [
        'Ein modernes KI Anrufsystem bietet weit mehr als nur automatische Anrufannahme:',
      ],
      bullets: [
        '<strong>Intelligente Anrufsteuerung:</strong> Das System erkennt das Anliegen und leitet den Anruf an die richtige Abteilung oder Person weiter – ohne Tastenmenü',
        '<strong>Automatische Anrufannahme:</strong> Jeder Anruf wird sofort entgegengenommen, auch bei mehreren gleichzeitigen Anrufen',
        '<strong>Sprachbasierte FAQ:</strong> Häufige Fragen zu Öffnungszeiten, Preisen, Verfügbarkeit werden direkt beantwortet',
        '<strong>Kontextübergabe:</strong> Bei Weiterleitung an einen Mitarbeiter erhält dieser eine Zusammenfassung des bisherigen Gesprächs',
        '<strong>Gesprächsprotokollierung:</strong> Jedes Gespräch wird automatisch transkribiert, zusammengefasst und im CRM dokumentiert',
        '<strong>Anrufanalyse:</strong> Auswertung der häufigsten Anliegen, Anrufzeiten und Gesprächsdauer für datenbasierte Optimierung',
        '<strong>Outbound-Fähigkeit:</strong> Das System kann auch ausgehende Anrufe tätigen – für Terminbestätigungen, Erinnerungen oder Follow-ups',
      ],
    },
    {
      heading: 'Integration in Ihre bestehende Infrastruktur',
      headingLevel: 'h2',
      paragraphs: [
        'Ein KI Anrufsystem wird nur dann zum echten Produktivitätshebel, wenn es nahtlos in Ihre bestehenden Systeme eingebunden ist. Wir verbinden das System mit allem, was Sie bereits nutzen.',
        'Die Anbindung erfolgt über Ihre bestehende Telefonnummer – ob Festnetz, VoIP oder Cloud-Telefonie. Ihre Kunden merken keinen technischen Unterschied. Intern verbinden wir das System mit Ihrem <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM</a>, Ihrem Kalender und Ihren <a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungs-Workflows</a>.',
      ],
      bullets: [
        'VoIP-Anbindung an bestehende Rufnummern (SIP-Trunk, Festnetz-Portierung)',
        'CRM-Integration für automatische Kontakt- und Lead-Erstellung',
        'Kalender-Synchronisation für Terminbuchungen und Verfügbarkeitsprüfung',
        'E-Mail- und SMS-Benachrichtigungen an Ihr Team in Echtzeit',
        'Webhook-basierte Workflows für komplexe Automatisierungsketten',
      ],
    },
    {
      heading: 'Anwendungsfälle: Wo ein KI Anrufsystem den Unterschied macht',
      headingLevel: 'h2',
      paragraphs: [
        'Die Einsatzmöglichkeiten sind vielfältig. Je nach Branche und Unternehmensgröße setzen wir unterschiedliche Schwerpunkte:',
      ],
      bullets: [
        '<strong>Handwerksbetriebe:</strong> Anrufannahme während der Arbeit auf der Baustelle, Terminkoordination, Angebotsvorbereitung',
        '<strong>Arztpraxen:</strong> Terminvereinbarung, Rezeptanfragen, Überweisungsstatus – ohne dass die Sprechstundenhilfe ans Telefon muss',
        '<strong>Dienstleister:</strong> Erstqualifizierung von Anfragen, Weiterleitung an Fachabteilungen, After-Hours-Support',
        '<strong>Makler und Vermietungen:</strong> Besichtigungstermine koordinieren, Objektinformationen bereitstellen',
        '<strong>Kanzleien:</strong> Mandantenanfragen klassifizieren, Rückrufwünsche erfassen, dringende Fälle priorisieren',
      ],
    },
    {
      heading: 'Für welche Unternehmen lohnt sich ein KI Anrufsystem?',
      headingLevel: 'h2',
      paragraphs: [
        'Ein KI Anrufsystem lohnt sich für jedes Unternehmen, das regelmäßig telefonisch erreichbar sein muss und gleichzeitig andere Aufgaben hat. Besonders sinnvoll ist es für:',
      ],
      bullets: [
        'Unternehmen mit 20+ eingehenden Anrufen pro Tag',
        'Betriebe, deren Team nicht dauerhaft am Telefon sitzen kann',
        'Firmen mit mehreren Standorten oder Abteilungen',
        'Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung, die professionell wirken und trotzdem schlank aufgestellt sein möchten',
        'Wachsende Unternehmen, die ohne zusätzliches Personal skalieren wollen',
      ],
    },
    {
      heading: 'Unser Implementierungsprozess',
      headingLevel: 'h2',
      paragraphs: [
        'Wir setzen Ihr KI Anrufsystem strukturiert und transparent um:',
      ],
      bullets: [
        '<strong>1. Bestandsaufnahme:</strong> Analyse Ihres Anrufaufkommens, der häufigsten Anliegen und der bestehenden Telefon-Infrastruktur',
        '<strong>2. Systemdesign:</strong> Definition der Gesprächsflüsse, Weiterleitungslogik und Integrationen',
        '<strong>3. Aufbau:</strong> Technische Einrichtung, Anbindung an Ihre Rufnummer und Systemintegration',
        '<strong>4. Training:</strong> Befüllung der Wissensbasis mit Ihren Inhalten und Feintuning der Spracherkennung',
        '<strong>5. Go-Live & Monitoring:</strong> Laufende Überwachung, Gesprächsanalyse und kontinuierliche Optimierung',
      ],
    },
    {
      heading: 'Datenschutz und DSGVO-Konformität',
      headingLevel: 'h3',
      paragraphs: [
        'Telefongespräche enthalten oft sensible Informationen. Deshalb nehmen wir Datenschutz besonders ernst. Anrufer werden zu Beginn transparent über die KI-gestützte Verarbeitung informiert. Gesprächsdaten werden verschlüsselt auf europäischen Servern verarbeitet und nur so lange gespeichert, wie es für die Bearbeitung notwendig ist.',
        'Auftragsverarbeitungsverträge mit allen beteiligten Dienstleistern sind selbstverständlich. Auf Wunsch implementieren wir zusätzliche Sicherheitsmechanismen wie automatische Löschfristen und Opt-in-Abfragen.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein KI Anrufsystem?',
      a: 'Die Kosten richten sich nach dem Umfang: Anrufvolumen, Anzahl der Gesprächsflüsse, gewünschte Integrationen und Komplexität der Antwortlogik. Wir arbeiten mit transparenten monatlichen Pauschalen.',
    },
    {
      q: 'Kann ich meine bestehende Telefonnummer behalten?',
      a: 'Ja. Das KI Anrufsystem wird an Ihre bestehende Rufnummer angebunden. Ihre Kunden merken keinen Unterschied – außer dass jetzt immer jemand abnimmt.',
    },
    {
      q: 'Wie schnell ist das System einsatzbereit?',
      a: 'Ein typisches Projekt dauert 2–4 Wochen. Bei einfacheren Setups kann es auch schneller gehen. Komplexe Systeme mit mehreren Abteilungen und tiefen Integrationen brauchen entsprechend mehr Zeit.',
    },
    {
      q: 'Erkennt das System verschiedene Sprachen?',
      a: 'Ja. Das KI Anrufsystem kann mehrsprachig konfiguriert werden und erkennt die Sprache des Anrufers automatisch. Deutsch ist Standard, weitere Sprachen werden auf Wunsch ergänzt.',
    },
    {
      q: 'Was passiert bei einem Stromausfall oder Systemfehler?',
      a: 'Das System läuft cloud-basiert und ist redundant aufgebaut. Bei einem lokalen Stromausfall funktioniert es weiter. Für den unwahrscheinlichen Fall eines Systemfehlers lässt sich ein Fallback auf eine alternative Nummer oder Mailbox konfigurieren.',
    },
    {
      q: 'Kann das System auch Anrufe tätigen?',
      a: 'Ja. Für Terminbestätigungen, Erinnerungen oder Follow-up-Anrufe kann das System auch ausgehende Anrufe automatisiert durchführen.',
    },
    {
      q: 'Ist das KI Anrufsystem DSGVO-konform?',
      a: 'Ja. Anrufer werden transparent informiert, die Datenverarbeitung erfolgt auf europäischen Servern, und es gibt klare Regelungen zu Speicherdauer und Löschfristen.',
    },
    {
      q: 'Brauche ich neue Hardware?',
      a: 'Nein. Das KI Anrufsystem ist cloud-basiert und wird an Ihre bestehende Telefonnummer angebunden. Es ist keine neue Hardware erforderlich.',
    },
  ],

  ctaText: 'Bereit für ein Telefonsystem, das mitdenkt?',

  parentServiceLink: {
    text: 'Telefonassistenten im Überblick',
    href: '/telefonassistenten',
  },
  siblingSubpageLinks: [
    { text: 'KI Telefonassistent (Inbound)', href: '/telefonassistenten/ki-telefonassistent-inbound' },
    { text: 'KI Terminassistent', href: '/telefonassistenten/ki-terminassistent' },
    { text: 'KI Lead-Qualifizierung per Telefon', href: '/telefonassistenten/ki-lead-qualifizierung-telefon' },
    { text: 'Automatische Rückrufsysteme', href: '/telefonassistenten/automatische-rueckrufsysteme' },
    { text: 'KI Telefon-Kundenservice', href: '/telefonassistenten/ki-telefon-kundenservice' },
  ],
  crossServiceLinks: [
    { text: 'KI-Chatbots für Ihre Website', href: '/ki-chatbots' },
    { text: 'CRM-Systeme', href: '/crm-systeme' },
  ],
  areaLinks: buildTier1AreaLinks('KI Anrufsystem'),
};

export default content;
