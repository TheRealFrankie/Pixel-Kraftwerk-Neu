import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'KI Telefonassistent für Inbound-Anrufe – Groitzsch & Leipzig | Pixel Kraftwerk',
  metaDescription:
    'KI Telefonassistent für eingehende Anrufe: automatische Anrufannahme, Anliegen-Erkennung und Weiterleitung. Pixel Kraftwerk richtet Ihren Inbound-Assistenten ein.',
  primaryKeyword: 'KI Telefonassistent Inbound',
  secondaryKeywords: [
    'KI Telefonassistent',
    'automatische Anrufannahme',
    'Inbound Anrufe KI',
    'Telefon-KI für Unternehmen',
    'intelligente Anrufannahme',
  ],
  imageAltTexts: [
    'KI Telefonassistent nimmt eingehenden Anruf automatisch entgegen',
    'Dashboard zeigt eingehende Anrufe mit KI-Klassifizierung und Gesprächsprotokollen',
    'Lokales Unternehmen in Leipzig nutzt KI-Telefonassistent für Inbound-Anrufe',
  ],

  h1: 'KI Telefonassistent für Inbound-Anrufe – Kein Anruf bleibt unbeantwortet',
  subheadline: 'Jeder Anrufer bekommt sofort eine freundliche Stimme ans Ohr',
  intro:
    'Jeder verpasste Anruf ist ein potenziell verlorener Kunde. Besonders für kleine und mittelständische Unternehmen ist das ein echtes Problem: Das Team steckt im Kundentermin, die Werkstatt ist laut, oder es ist schlicht Feierabend. Ein KI Telefonassistent für Inbound-Anrufe ändert das grundlegend. Er nimmt jeden Anruf entgegen, versteht das Anliegen, beantwortet Standardfragen und leitet qualifizierte Anfragen strukturiert an Ihr Team weiter. Pixel Kraftwerk aus Groitzsch entwickelt KI-Telefonassistenten, die sich wie ein echtes Gespräch anfühlen – für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, <a href="/leistungsgebiete/chemnitz" class="text-primary-400 hover:underline">Chemnitz</a> und der gesamten Region.',
  heroCtaText: 'Inbound-Assistent anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Anrufe gehen verloren – jeden Tag</span>',
    lead: 'Ihr Telefon klingelt – und niemand kann rangehen. Die Gründe sind vielfältig:',
    bullets: [
      'Team ist im Kundentermin oder auf der Baustelle',
      'Mittagspause, Feierabend, Wochenende',
      'Alle Leitungen besetzt – Anrufer legt auf',
      'Werkstattlärm oder laute Umgebung verhindern Annahme',
    ],
    tagline: 'Jeder dieser Anrufe kann ein neuer Kunde sein. Oder ein Auftrag, der nie zustande kommt.',
    details: [
      {
        title: 'Warum Mailbox keine Lösung ist',
        body: 'Kaum jemand spricht noch auf eine Mailbox. Die meisten Anrufer legen auf und wählen sofort die nächste Nummer – von der Konkurrenz.',
        bullets: [
          'Keine persönliche Begrüßung',
          'Keine direkten Antworten',
          'Keine Vorqualifizierung',
          'Keine Dokumentation',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Ein verpasster Anruf pro Tag bedeutet über das Jahr hunderte verlorene Kontakte – darunter viele, die konkret kaufen, buchen oder anfragen wollten.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein KI-Assistent, der immer rangeht</span>',
    lead: 'Der KI Telefonassistent nimmt <strong>jeden Anruf entgegen – 24/7, freundlich, strukturiert</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Anrufer wird freundlich begrüßt und nach Anliegen gefragt',
        'Standardfragen werden direkt beantwortet',
        'Termine, Rückrufe oder Anfragen werden strukturiert erfasst',
        'Ihr Team bekommt alle Infos kompakt übergeben',
      ],
    },
    blocks: [
      {
        title: 'Was der Assistent konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Begrüßung mit Ihrer Unternehmensstimme',
          'Klärung: Neukunde / Bestandskunde / Anliegen',
          'Beantwortung der häufigsten Fragen',
          'Termin- oder Rückruferfassung',
          'Weiterleitung oder Mail an das richtige Team',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Statt „Mailbox später abhören" bekommt Ihr Team:',
        bullets: [
          'Name + Rufnummer',
          'Anliegen in Klartext',
          'Priorität und Kategorie',
          'Gesprächs-Transkript auf Wunsch',
        ],
      },
    ],
    tagline: '➡️ Kein Anruf geht mehr verloren – auch wenn alle gerade zu tun haben.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein KI Inbound-Telefonassistent?',
    lead: 'Ein KI Inbound-Telefonassistent ist eine <strong>natürliche Stimme</strong>, die Anrufe Ihres Unternehmens entgegennimmt und mit dem Anrufer spricht wie ein echter Mitarbeiter: zuhört, versteht, antwortet und dokumentiert.',
    examples: [
      '„Ich hätte gern einen Termin – geht das nächste Woche?"',
      '„Wie lange habt ihr heute noch geöffnet?"',
      '„Ich habe einen Wasserschaden – wann kann jemand kommen?"',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Handwerksbetriebe, Dienstleister, Praxen, Kanzleien, Servicefirmen – überall dort, wo Anrufe häufig unterwegs oder außerhalb der Kernzeiten ankommen.',
      },
      {
        title: 'Was der Assistent nicht ist',
        body: '<strong>Wichtig:</strong> Der Assistent ersetzt kein Fachpersonal. Er filtert, beantwortet Standardfragen und sorgt dafür, dass nur die wirklich relevanten Anliegen Ihr Team erreichen – mit vollem Kontext.',
      },
    ],
  },

  features: {
    headline: 'Was der Inbound-Assistent <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Entgegennahme aller eingehenden Anrufe – 24/7',
      'Natürliches Sprachverständnis',
      'Beantwortung häufiger Fragen',
      'Terminbuchung und Rückruferfassung',
      'Intelligente Weiterleitung',
      'Transkription + Zusammenfassung',
      'Übergabe an Team via Mail, CRM oder App',
    ],
    note: '<strong>Wichtig:</strong> Der Assistent wird <strong>vollständig auf Ihr Unternehmen trainiert</strong> – Tonalität, Wissen, Prozesse.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet der Assistent:',
        bullets: [
          'Zeitzonen- und Öffnungszeitenlogik',
          'Mehrsprachigkeit',
          'Priorisierung nach Anliegen',
          'Notfall- und Eskalationsregeln',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch binden wir an:',
        bullets: [
          'CRM & Helpdesk',
          'Kalender (Google, Microsoft 365)',
          'Ticket-Systeme',
          'Bestehende Telefonanlagen (SIP)',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist ein KI Telefonassistent für Inbound-Anrufe?',
      headingLevel: 'h2',
      paragraphs: [
        'Ein KI Telefonassistent ist ein sprachgesteuertes System, das eingehende Anrufe automatisch entgegennimmt und verarbeitet. Anders als klassische Telefonanlagen mit starren Menüs („Drücken Sie die 1 für …") versteht der KI-Assistent natürliche Sprache. Der Anrufer spricht sein Anliegen einfach aus – und das System erkennt, worum es geht.',
        'Technisch basiert der Assistent auf modernen Sprachmodellen (Large Language Models) in Kombination mit Spracherkennung (Speech-to-Text) und Sprachsynthese (Text-to-Speech). Das Ergebnis ist ein Telefongespräch, das sich natürlich anfühlt – keine Roboterstimme, kein umständliches Menü, kein Frust.',
        'Für den Anrufer bedeutet das: Er wird sofort begrüßt, sein Anliegen wird verstanden, und er bekommt entweder direkt eine Antwort oder wird gezielt an die richtige Person weitergeleitet. Für Ihr Unternehmen bedeutet das: kein verpasster Anruf mehr, strukturierte Gesprächsdaten und ein professioneller erster Eindruck – rund um die Uhr.',
      ],
    },
    {
      heading: 'Warum verpasste Anrufe Ihr Unternehmen Geld kosten',
      headingLevel: 'h2',
      paragraphs: [
        'Studien zeigen: Über 60 Prozent der Anrufer, die beim ersten Versuch niemanden erreichen, rufen nicht ein zweites Mal an. Sie gehen zur Konkurrenz. Gerade bei Dienstleistern, Handwerksbetrieben und Praxen ist das Telefon nach wie vor der wichtigste Erstkontaktkanal.',
        'Das Problem ist nicht mangelnder Wille – sondern fehlende Kapazität. Wenn drei Anrufe gleichzeitig eingehen, Ihr Team aber nur eine Leitung hat, gehen zwei Anrufe verloren. Wenn ein Kunde abends um 19 Uhr anruft, ist niemand mehr da. Wenn der Meister auf der Baustelle ist, geht niemand ran.',
      ],
      bullets: [
        'Über 60 % der Anrufer rufen bei Nichterreichbarkeit nicht erneut an',
        'Durchschnittlich 4–7 verpasste Anrufe pro Woche bei KMU',
        'Jeder verpasste Anruf = ein potenzieller Auftrag im Wert von mehreren hundert bis tausend Euro',
        'Rückrufe nach Stunden haben deutlich niedrigere Erfolgsquoten',
      ],
    },
    {
      heading: 'Klassische Telefonanlage vs. KI Telefonassistent',
      headingLevel: 'h2',
      paragraphs: [
        'Der Unterschied zwischen einer klassischen Telefonanlage und einem KI-Assistenten ist fundamental. Die folgende Tabelle zeigt, was sich konkret ändert:',
      ],
      table: {
        headers: ['Kriterium', 'Klassische Telefonanlage', 'KI Telefonassistent'],
        rows: [
          ['Begrüßung', 'Standardansage oder Besetztzeichen', 'Persönliche, natürliche Begrüßung'],
          ['Verständnis', 'Tastenmenü (IVR)', 'Natürliche Sprache – Anrufer spricht frei'],
          ['Verfügbarkeit', 'Nur während Geschäftszeiten', '24/7, auch Feiertage und Wochenenden'],
          ['Gleichzeitige Anrufe', 'Begrenzt durch Leitungen', 'Unbegrenzt parallel'],
          ['Anliegen-Erkennung', 'Keine – nur Weiterleitung', 'KI erkennt und klassifiziert das Anliegen'],
          ['Gesprächsprotokoll', 'Keines', 'Automatische Zusammenfassung per E-Mail/CRM'],
          ['Skalierung', 'Neue Hardware nötig', 'Ohne zusätzliche Kosten skalierbar'],
          ['Kosten', 'Hohe Anschaffung + Wartung', 'Monatliche Miete, keine Hardware'],
        ],
      },
    },
    {
      heading: 'Wie funktioniert die KI-Anrufannahme in der Praxis?',
      headingLevel: 'h2',
      paragraphs: [
        'Der Ablauf ist für den Anrufer denkbar einfach – und für Ihr Unternehmen maximal effizient:',
      ],
      bullets: [
        '<strong>1. Anrufannahme:</strong> Der KI-Assistent nimmt den Anruf sofort entgegen und begrüßt den Anrufer persönlich – mit Ihrem Firmennamen und in Ihrem Tonfall',
        '<strong>2. Anliegen-Erkennung:</strong> Der Anrufer schildert sein Anliegen in eigenen Worten. Die KI versteht die Absicht, auch bei umgangssprachlichen Formulierungen',
        '<strong>3. Informationsgabe:</strong> Standardfragen zu Öffnungszeiten, Leistungen, Preisen oder Ablauf beantwortet der Assistent direkt aus Ihrer Wissensbasis',
        '<strong>4. Datenerfassung:</strong> Bei Anfragen, die menschliche Bearbeitung erfordern, erfasst der Assistent Name, Telefonnummer, Anliegen und gewünschten Rückrufzeitpunkt',
        '<strong>5. Weiterleitung:</strong> Das strukturierte Gesprächsprotokoll wird sofort per E-Mail, SMS oder direkt in Ihr <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-System</a> übermittelt',
      ],
    },
    {
      heading: 'Integration mit CRM, Kalender und bestehenden Workflows',
      headingLevel: 'h2',
      paragraphs: [
        'Ein KI Telefonassistent entfaltet seinen vollen Nutzen erst, wenn er in Ihre bestehenden Geschäftsprozesse eingebunden ist. Wir verbinden den Assistenten mit Ihren Tools.',
        'Ein typischer Workflow: Der Anrufer nennt sein Anliegen, der Assistent erstellt einen Kontakt im CRM, bucht bei Terminwünschen direkt einen Slot im Kalender und benachrichtigt den zuständigen Mitarbeiter per E-Mail oder Slack. Alles automatisch, in Echtzeit.',
      ],
      bullets: [
        'CRM-Systeme wie HubSpot, Pipedrive oder Zoho – automatische Kontakt- und Lead-Erstellung',
        'Kalender-Integration – freie Termine prüfen und direkt buchen',
        '<a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungen</a> – Follow-up-Mails, Aufgabenzuweisung, Angebotserstellung',
        'Benachrichtigungen – Ihr Team wird in Echtzeit per E-Mail, SMS oder Slack informiert',
      ],
    },
    {
      heading: 'Für welche Unternehmen eignet sich ein Inbound-Telefonassistent?',
      headingLevel: 'h2',
      paragraphs: [
        'Grundsätzlich profitiert jedes Unternehmen, das regelmäßig Anrufe erhält und nicht immer erreichbar ist. Besonders großes Potenzial sehen wir bei:',
      ],
      bullets: [
        'Handwerksbetrieben in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung, deren Team tagsüber auf Baustellen ist',
        'Arztpraxen und Kanzleien mit hohem Anrufaufkommen und begrenzter Telefonkapazität',
        'Dienstleistern, die Terminanfragen, Preisfragen und Verfügbarkeitsanfragen telefonisch erhalten',
        'Unternehmen mit saisonalem Anrufaufkommen, das manuelle Kapazitäten übersteigt',
        'Firmen, die außerhalb der Geschäftszeiten erreichbar sein möchten, ohne Nachtschicht',
        'Unternehmen mit mehreren Standorten, die eine zentrale Anrufannahme benötigen',
      ],
    },
    {
      heading: 'Individualisierung: Ihr Assistent, Ihre Regeln',
      headingLevel: 'h2',
      paragraphs: [
        'Kein Telefonassistent von der Stange. Wir konfigurieren jeden Assistenten individuell:',
      ],
      bullets: [
        '<strong>Stimme und Tonfall:</strong> Sie wählen die Stimme und entscheiden, ob der Assistent per Du oder per Sie kommuniziert',
        '<strong>Wissensbasis:</strong> Ihre Leistungen, Preise, Öffnungszeiten, Einzugsgebiete und FAQ werden eintrainiert',
        '<strong>Gesprächslogik:</strong> Für zentrale Szenarien definieren wir optimale Dialogpfade – von der Begrüßung bis zur Verabschiedung',
        '<strong>Eskalationsregeln:</strong> Wann soll der Assistent an einen Menschen übergeben? Wir legen klare Schwellen fest',
        '<strong>Mehrsprachigkeit:</strong> Optional kann der Assistent mehrere Sprachen verstehen und sprechen',
      ],
    },
    {
      heading: 'So läuft die Zusammenarbeit mit Pixel Kraftwerk',
      headingLevel: 'h2',
      paragraphs: [
        'Wir arbeiten strukturiert und transparent:',
      ],
      bullets: [
        '<strong>1. Analyse:</strong> Wir erfassen Ihr Anrufaufkommen, typische Anliegen und bestehende Telefon-Infrastruktur',
        '<strong>2. Konzept:</strong> Gemeinsam definieren wir Gesprächsflüsse, Wissensbasis und Integrationen',
        '<strong>3. Aufbau & Training:</strong> Der Assistent wird eingerichtet, mit Ihren Inhalten trainiert und an Ihre Telefonanlage angebunden',
        '<strong>4. Testphase:</strong> Wir testen gemeinsam unter realen Bedingungen und optimieren Formulierungen und Abläufe',
        '<strong>5. Go-Live & Optimierung:</strong> Nach dem Start analysieren wir die Gespräche regelmäßig und verbessern die Qualität kontinuierlich',
      ],
    },
    {
      heading: 'Datenschutz und DSGVO-Konformität',
      headingLevel: 'h3',
      paragraphs: [
        'Der Schutz personenbezogener Daten hat für uns oberste Priorität. Der KI Telefonassistent informiert den Anrufer zu Beginn transparent über die automatisierte Verarbeitung. Gesprächsdaten werden nur so lange gespeichert, wie es für die Bearbeitung notwendig ist. Die Verarbeitung erfolgt DSGVO-konform auf europäischen Servern. Auftragsverarbeitungsverträge mit allen beteiligten Dienstleistern sind selbstverständlich.',
        'Auf Wunsch implementieren wir zusätzliche Sicherheitsmechanismen: Opt-in-Abfrage vor der Datenerfassung, automatische Löschfristen und verschlüsselte Speicherung der Gesprächsprotokolle.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein KI Telefonassistent?',
      a: 'Die Kosten richten sich nach dem Funktionsumfang: Wie viele Anrufe pro Monat, welche Integrationen und wie komplex sind die Gesprächsflüsse? Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot.',
    },
    {
      q: 'Klingt der KI-Assistent wie ein Roboter?',
      a: 'Nein. Moderne Sprachsynthese erzeugt natürlich klingende Stimmen. Viele Anrufer bemerken nicht, dass sie mit einer KI sprechen. Die Stimme, Sprechgeschwindigkeit und Tonalität passen wir an Ihr Unternehmen an.',
    },
    {
      q: 'Kann der Assistent auch Anrufe weiterleiten?',
      a: 'Ja. Bei dringenden Anliegen oder auf Wunsch des Anrufers kann der Assistent das Gespräch live an einen Mitarbeiter weiterleiten – inklusive Kontextübergabe.',
    },
    {
      q: 'Was passiert, wenn der Assistent eine Frage nicht beantworten kann?',
      a: 'Der Assistent erkennt seine Grenzen und bietet eine saubere Übergabe an: Er erfasst die Kontaktdaten, dokumentiert das Anliegen und informiert Ihr Team sofort per E-Mail oder CRM.',
    },
    {
      q: 'Wie schnell ist der Telefonassistent einsatzbereit?',
      a: 'Ein typisches Projekt dauert 2–4 Wochen von der Analyse bis zum Go-Live. Bei einfacheren Setups kann es auch schneller gehen.',
    },
    {
      q: 'Funktioniert das mit meiner bestehenden Telefonanlage?',
      a: 'Ja. Wir binden den KI-Assistenten an Ihre bestehende Telefonnummer an – ob Festnetz, VoIP oder Mobilfunk. Ihre Kunden merken keinen Unterschied.',
    },
    {
      q: 'Ist der KI Telefonassistent DSGVO-konform?',
      a: 'Ja. Der Anrufer wird transparent informiert, die Verarbeitung erfolgt auf europäischen Servern, und es gibt klare Löschfristen für Gesprächsdaten.',
    },
    {
      q: 'Kann der Assistent auch außerhalb der Geschäftszeiten Anrufe annehmen?',
      a: 'Genau dafür ist er gemacht. Der KI Telefonassistent ist 24/7 verfügbar – auch nachts, am Wochenende und an Feiertagen.',
    },
  ],

  ctaText: 'Bereit, keinen Anruf mehr zu verpassen?',

  parentServiceLink: {
    text: 'Telefonassistenten im Überblick',
    href: '/telefonassistenten',
  },
  siblingSubpageLinks: [
    { text: 'KI Anrufsystem', href: '/telefonassistenten/ki-anrufsystem' },
    { text: 'KI Terminassistent', href: '/telefonassistenten/ki-terminassistent' },
    { text: 'KI Lead-Qualifizierung per Telefon', href: '/telefonassistenten/ki-lead-qualifizierung-telefon' },
    { text: 'Automatische Rückrufsysteme', href: '/telefonassistenten/automatische-rueckrufsysteme' },
    { text: 'KI Telefon-Kundenservice', href: '/telefonassistenten/ki-telefon-kundenservice' },
  ],
  crossServiceLinks: [
    { text: 'KI-Chatbots für Ihre Website', href: '/ki-chatbots' },
    { text: 'Automatisierungen für Anfragen & Termine', href: '/automatisierungen' },
  ],
  areaLinks: buildTier1AreaLinks('KI Telefonassistent'),
};

export default content;
