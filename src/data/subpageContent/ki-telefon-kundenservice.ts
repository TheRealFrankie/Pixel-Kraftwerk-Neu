import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'KI Telefon-Kundenservice – Groitzsch & Leipzig | Pixel Kraftwerk',
  metaDescription:
    'KI Telefon-Kundenservice für automatisierten Support am Telefon: Anfragen beantworten, Tickets erstellen und Kunden betreuen – rund um die Uhr. Von Pixel Kraftwerk.',
  primaryKeyword: 'KI Telefon-Kundenservice',
  secondaryKeywords: [
    'automatischer Kundenservice Telefon',
    'KI Support Telefon',
    'Telefonischer Kundenservice automatisieren',
    'KI Hotline',
    'automatische Telefonbetreuung',
  ],
  imageAltTexts: [
    'KI-Telefon-Kundenservice beantwortet Kundenanfrage automatisch am Telefon',
    'Support-Dashboard zeigt bearbeitete Kundenanfragen und erstellte Tickets',
    'Zufriedener Kunde erhält schnelle telefonische Hilfe durch KI-Kundenservice',
  ],

  h1: 'KI Telefon-Kundenservice – Support, der nie Pause macht',
  subheadline: 'Ihre Kunden bekommen sofort Hilfe – nicht erst am nächsten Werktag',
  intro:
    'Ihre Kunden erwarten schnelle Hilfe – und zwar dann, wenn sie sie brauchen. Nicht erst am nächsten Werktag, nicht nach 20 Minuten Warteschleife. Ein KI Telefon-Kundenservice beantwortet Anfragen sofort, löst Standardprobleme eigenständig und erstellt Tickets für komplexere Anliegen. 24 Stunden am Tag, 7 Tage die Woche. Pixel Kraftwerk entwickelt KI-gestützte Kundenservice-Lösungen für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, <a href="/leistungsgebiete/halle-saale" class="text-primary-400 hover:underline">Halle</a> und der Region – maßgeschneidert auf Ihre Serviceprozesse.',
  heroCtaText: 'Kundenservice anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Kundenservice skaliert nicht mit dem Wachstum</span>',
    lead: 'Je mehr Kunden, desto mehr Supportanfragen – aber das Team wächst selten im gleichen Tempo:',
    bullets: [
      'Wartezeiten in Warteschleifen werden länger',
      'Support-Mitarbeiter erklären immer wieder dasselbe',
      'Erreichbarkeit außerhalb der Kernzeiten fehlt',
      'Tickets werden doppelt angelegt oder verloren',
    ],
    tagline: 'Das Ergebnis: unzufriedene Kunden und überforderte Teams.',
    details: [
      {
        title: 'Warum klassischer Support an seine Grenzen kommt',
        body: 'Ein Mitarbeiter kann nicht 24/7, in mehreren Sprachen und ohne Wartezeit parallel helfen. Ohne Automatisierung ist das Support-Erlebnis zwangsläufig inkonsistent.',
        bullets: [
          'Keine konsistente Antwortqualität',
          'Keine Skalierung bei Peaks',
          'Keine Auswertung nach Themen',
          'Hohe Personalkosten bei repetitiven Fragen',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jeder genervte Kunde ist ein potenzieller Abgang. Und jedes Ticket, das zu lange liegt, wird teurer – sowohl in Arbeitszeit als auch in Reputation.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein KI-gestützter Telefon-Kundenservice</span>',
    lead: 'Der KI-Telefon-Kundenservice beantwortet Anfragen sofort und erstellt strukturierte Tickets für alles, was darüber hinausgeht – <strong>rund um die Uhr</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Anrufer bekommen Standardinfos direkt',
        'Häufige Probleme werden eigenständig gelöst',
        'Komplexe Anliegen landen als qualifiziertes Ticket im Support',
        'Ihr Team kümmert sich nur noch um echte Fachfälle',
      ],
    },
    blocks: [
      {
        title: 'Was der Service konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Identifizierung & Authentifizierung des Kunden',
          'Erste Hilfe bei Standardproblemen',
          'Status-Abfragen (Bestellung, Auftrag, Liefertermin)',
          'Ticket-Anlage + Priorisierung',
          'Weiterleitung an den passenden Agenten',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Vorbereitete Tickets statt unsortierter Anrufe:',
        bullets: [
          'Kundenstammdaten',
          'Anliegen in Klartext + Kategorie',
          'Bereits geprüfte Lösungsansätze',
          'Gesprächsprotokoll / Transkript',
        ],
      },
    ],
    tagline: '➡️ Ihr Team kümmert sich um Kunden – nicht um Ticket-Erfassung.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein KI-Telefon-Kundenservice?',
    lead: 'Ein KI-Telefon-Kundenservice ist eine <strong>sprachgeführte Supportinstanz</strong>, die Anfragen entgegennimmt, analysiert und entweder eigenständig löst oder strukturiert an Ihr Team übergibt – in natürlicher Sprache.',
    examples: [
      '„Wo ist meine Bestellung gerade?"',
      '„Ich kann mich nicht einloggen."',
      '„Wie storniere ich meinen Auftrag?"',
    ],
    blocks: [
      {
        title: 'Für wen sich das lohnt',
        body: 'Für Unternehmen mit laufendem Kundensupport: E-Commerce, Versorger, SaaS, Dienstleister, Versicherungen, Abo-Modelle. Überall, wo viele Standardfragen parallel zu Individualfällen laufen.',
      },
      {
        title: 'Was der Service nicht ist',
        body: '<strong>Wichtig:</strong> Ein Ersatz für komplexe Fachberatung ist er nicht – aber er ist ein perfekter „Level 1"-Support, der Ihr Team auf Level 2 und 3 fokussiert.',
      },
    ],
  },

  features: {
    headline: 'Was der Telefon-Kundenservice <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Anrufannahme 24/7',
      'Automatische Status-Auskünfte',
      'Ticket-Anlage mit voller Vorqualifizierung',
      'Authentifizierung via Kundennummer / Stammdaten',
      'Intelligente Priorisierung',
      'Integration in Helpdesk & CRM',
      'Transkripte + Analysen',
    ],
    note: '<strong>Wichtig:</strong> Der Service wird <strong>auf Ihre Support-Prozesse trainiert</strong> – inkl. Wissensbasis, SLAs und Eskalationslogik.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet der Service:',
        bullets: [
          'Mehrsprachigkeit',
          'Produktbezogene Antworten',
          'Notfall- und VIP-Routing',
          'Call-Back-Planung',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch binden wir an:',
        bullets: [
          'Helpdesk (Zendesk, Freshdesk, HubSpot)',
          'CRM und ERP',
          'Tracking- und Versandsysteme',
          'Eigene APIs und Datenbanken',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum Kundenservice am Telefon nach wie vor entscheidend ist',
      headingLevel: 'h2',
      paragraphs: [
        'Trotz Chatbots, E-Mail und Self-Service-Portalen: Das Telefon bleibt der bevorzugte Kanal für dringende Anliegen. Wenn etwas nicht funktioniert, wenn eine Bestellung fehlt oder ein Termin platzt, greifen die meisten Menschen zum Hörer.',
        'Das Problem: Manueller Kundenservice am Telefon ist teuer und schlecht skalierbar. Stoßzeiten führen zu Warteschleifen, außerhalb der Geschäftszeiten geht niemand ran, und bei Personalengpass bleiben Kunden auf der Strecke.',
        'Ein KI Telefon-Kundenservice löst genau diese Engpässe – ohne dass Sie dafür ein Call-Center aufbauen müssen.',
      ],
    },
    {
      heading: 'Was ein KI Telefon-Kundenservice leisten kann',
      headingLevel: 'h2',
      paragraphs: [
        'Je nach Konfiguration übernimmt der KI-Kundenservice verschiedene Aufgaben:',
      ],
      bullets: [
        '<strong>FAQ-Beantwortung:</strong> Häufige Fragen zu Produkten, Dienstleistungen, Lieferzeiten, Preisen und Öffnungszeiten werden sofort beantwortet',
        '<strong>Statusabfragen:</strong> Kunden fragen den Stand ihrer Bestellung, ihres Auftrags oder ihres Anliegens ab',
        '<strong>Ticket-Erstellung:</strong> Komplexere Anfragen werden als strukturiertes Ticket erfasst und dem richtigen Team zugewiesen',
        '<strong>Reklamationsannahme:</strong> Beschwerden werden professionell entgegengenommen, dokumentiert und priorisiert',
        '<strong>Terminkoordination:</strong> Servicetermine werden direkt im Gespräch vereinbart oder verschoben',
        '<strong>Eskalation:</strong> Bei kritischen Anliegen wird sofort an einen Mitarbeiter übergeben – mit vollständigem Gesprächskontext',
        '<strong>Follow-up:</strong> Nach der Bearbeitung kann das System automatisch nachfassen und die Kundenzufriedenheit abfragen',
      ],
    },
    {
      heading: 'Manueller vs. KI-gestützter Telefon-Kundenservice',
      headingLevel: 'h2',
      paragraphs: [
        'Die Unterschiede im täglichen Betrieb sind erheblich:',
      ],
      table: {
        headers: ['Kriterium', 'Manueller Support', 'KI Telefon-Kundenservice'],
        rows: [
          ['Verfügbarkeit', 'Begrenzt auf Geschäftszeiten', '24/7 ohne Unterbrechung'],
          ['Reaktionszeit', 'Warteschleife, oft Minuten', 'Sofort, unter 2 Sekunden'],
          ['Gleichzeitige Anfragen', 'Begrenzt durch Teamgröße', 'Unbegrenzt parallel'],
          ['Konsistenz', 'Abhängig vom Mitarbeiter', 'Einheitlich, markenkonform'],
          ['Standardfragen', 'Jede manuell beantwortet', 'Automatisch aus Wissensbasis'],
          ['Ticket-Erstellung', 'Manuell ins System tippen', 'Automatisch, strukturiert, sofort'],
          ['Kosten pro Anfrage', 'Hoch (Personalkosten)', 'Niedrig nach Ersteinrichtung'],
          ['Skalierung', 'Mehr Personal nötig', 'Ohne zusätzliche Kosten skalierbar'],
        ],
      },
    },
    {
      heading: 'Die Wissensbasis: Das Herzstück des KI-Kundenservice',
      headingLevel: 'h2',
      paragraphs: [
        'Die Qualität der Antworten steht und fällt mit der Wissensbasis. Wir füllen sie mit allem, was Ihr Kundenservice wissen muss:',
        'Die Wissensbasis wird kontinuierlich erweitert und optimiert. Jede Kundenanfrage, die der Bot nicht beantworten kann, wird analysiert und für zukünftige Gespräche eingepflegt.',
      ],
      bullets: [
        'Produkt- und Leistungsbeschreibungen mit allen relevanten Details',
        'Häufig gestellte Fragen und die dazugehörigen Antworten',
        'Abläufe und Prozesse – wie funktioniert eine Bestellung, Reklamation, Terminbuchung?',
        'Preise, Konditionen und aktuelle Aktionen',
        'Kontaktinformationen, Öffnungszeiten und Standortdaten',
        'Interne Richtlinien für Eskalation und Weiterleitung',
      ],
    },
    {
      heading: 'Integration mit Ticket-System, CRM und Support-Tools',
      headingLevel: 'h2',
      paragraphs: [
        'Der KI-Kundenservice arbeitet nicht isoliert, sondern ist Teil Ihres gesamten Support-Ökosystems. Wir integrieren ihn mit Ihren bestehenden Tools.',
      ],
      bullets: [
        '<a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-Systeme</a> – Kundenhistorie einsehen, neue Tickets erstellen, bestehende aktualisieren',
        'Ticket-Systeme – Zendesk, Freshdesk, Jira Service Management oder eigene Lösungen',
        '<a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungen</a> – Follow-up-Mails, Eskalations-Workflows, Zufriedenheitsbefragungen',
        'E-Mail und SMS – Bestätigungen und Updates an den Kunden senden',
        'Benachrichtigungen – Ihr Team wird bei kritischen Anfragen sofort informiert',
      ],
    },
    {
      heading: 'Für welche Unternehmen eignet sich ein KI Telefon-Kundenservice?',
      headingLevel: 'h2',
      paragraphs: [
        'Besonders sinnvoll ist der KI-Kundenservice für:',
      ],
      bullets: [
        'Unternehmen mit wiederkehrenden Standardanfragen, die manuell zu viel Zeit kosten',
        'Firmen, die außerhalb der Geschäftszeiten erreichbar sein möchten',
        'Dienstleister mit hohem Serviceanspruch, die Wartezeiten eliminieren wollen',
        'E-Commerce-Unternehmen mit Fragen zu Bestellungen, Retouren und Versand',
        'Lokale Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, die professionellen Support bieten wollen, ohne ein eigenes Call-Center zu betreiben',
        'Unternehmen, die ihre Supportkosten senken und gleichzeitig die Kundenzufriedenheit steigern wollen',
      ],
    },
    {
      heading: 'Unser Implementierungsprozess',
      headingLevel: 'h2',
      paragraphs: [
        'Wir setzen Ihren KI Telefon-Kundenservice strukturiert auf:',
      ],
      bullets: [
        '<strong>1. Support-Analyse:</strong> Welche Anfragen kommen am häufigsten, wie werden sie aktuell bearbeitet, wo sind die Engpässe?',
        '<strong>2. Wissensaufbau:</strong> Wir befüllen die Wissensbasis mit Ihren FAQ, Produktinfos und Prozessbeschreibungen',
        '<strong>3. Systemkonfiguration:</strong> Gesprächsflüsse, Eskalationsregeln, Ticket-Logik und Integrationen einrichten',
        '<strong>4. Test:</strong> Realistische Testszenarien mit Ihrem Team, Feinschliff an Antworten und Abläufen',
        '<strong>5. Go-Live & Optimierung:</strong> Laufende Analyse der Gesprächsqualität, Kundenzufriedenheit und Lösungsquoten',
      ],
    },
    {
      heading: 'Datenschutz und DSGVO-Konformität',
      headingLevel: 'h3',
      paragraphs: [
        'Kundenservice-Gespräche enthalten oft sensible Informationen. Alle unsere Lösungen sind DSGVO-konform: Anrufer werden transparent über die KI-gestützte Verarbeitung informiert. Gesprächsdaten werden verschlüsselt auf europäischen Servern verarbeitet. Personenbezogene Daten werden nur in Ihren eigenen Systemen gespeichert. Klare Löschfristen und Zugriffskontrollen sind selbstverständlich.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein KI Telefon-Kundenservice?',
      a: 'Die Kosten hängen vom Anrufvolumen, der Größe der Wissensbasis und den gewünschten Integrationen ab. Wir erstellen nach einem Erstgespräch ein transparentes Angebot mit monatlicher Pauschale.',
    },
    {
      q: 'Kann der KI-Kundenservice auch an Mitarbeiter übergeben?',
      a: 'Ja. Bei komplexen oder sensiblen Anliegen übergibt der Assistent das Gespräch nahtlos an einen Mitarbeiter – inklusive vollständigem Gesprächskontext.',
    },
    {
      q: 'Wie gut sind die Antworten im Vergleich zu menschlichem Support?',
      a: 'Für Standardfragen sind die Antworten konsistent und oft schneller als menschlicher Support. Für komplexe Fälle wird an Menschen übergeben. Die Kombination aus beidem liefert das beste Ergebnis.',
    },
    {
      q: 'Kann der Bot auch Tickets erstellen?',
      a: 'Ja. Der KI-Kundenservice erstellt automatisch strukturierte Tickets in Ihrem Support-System – mit Kontaktdaten, Anliegen, Gesprächsverlauf und Priorität.',
    },
    {
      q: 'Wie schnell ist der KI-Kundenservice einsatzbereit?',
      a: 'Ein typisches Projekt dauert 3–4 Wochen, abhängig von der Größe der Wissensbasis und der Anzahl der Integrationen.',
    },
    {
      q: 'Kann ich die Wissensbasis selbst aktualisieren?',
      a: 'Ja. Wir richten das System so ein, dass Sie grundlegende Anpassungen – neue FAQ, geänderte Informationen – eigenständig vornehmen können. Für größere Änderungen stehen wir zur Verfügung.',
    },
    {
      q: 'Ist der KI Telefon-Kundenservice DSGVO-konform?',
      a: 'Ja. Anrufer werden transparent informiert, die Datenverarbeitung erfolgt auf europäischen Servern, und alle Daten werden in Ihren eigenen Systemen gespeichert.',
    },
    {
      q: 'Funktioniert das auch mehrsprachig?',
      a: 'Ja. Der KI-Kundenservice kann mehrere Sprachen unterstützen und erkennt die Sprache des Anrufers automatisch.',
    },
  ],

  ctaText: 'Bereit für Kundenservice, der nie schläft?',

  parentServiceLink: {
    text: 'Telefonassistenten im Überblick',
    href: '/telefonassistenten',
  },
  siblingSubpageLinks: [
    { text: 'KI Telefonassistent (Inbound)', href: '/telefonassistenten/ki-telefonassistent-inbound' },
    { text: 'KI Anrufsystem', href: '/telefonassistenten/ki-anrufsystem' },
    { text: 'KI Terminassistent', href: '/telefonassistenten/ki-terminassistent' },
    { text: 'KI Lead-Qualifizierung per Telefon', href: '/telefonassistenten/ki-lead-qualifizierung-telefon' },
    { text: 'Automatische Rückrufsysteme', href: '/telefonassistenten/automatische-rueckrufsysteme' },
  ],
  crossServiceLinks: [
    { text: 'KI-Chatbots für Website & Messenger', href: '/ki-chatbots' },
    { text: 'CRM-Systeme', href: '/crm-systeme' },
  ],
  areaLinks: buildTier1AreaLinks('KI Telefon-Kundenservice'),
};

export default content;
