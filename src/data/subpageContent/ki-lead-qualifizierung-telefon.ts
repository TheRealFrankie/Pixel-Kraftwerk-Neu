import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'KI Lead-Qualifizierung per Telefon – Groitzsch & Leipzig | Pixel Kraftwerk',
  metaDescription:
    'KI Lead-Qualifizierung per Telefon: Anrufer automatisch qualifizieren, bewerten und an Ihren Vertrieb weiterleiten. Pixel Kraftwerk baut Ihr System.',
  primaryKeyword: 'KI Lead-Qualifizierung Telefon',
  secondaryKeywords: [
    'telefonische Lead-Qualifizierung',
    'Anruf-Qualifizierung KI',
    'automatische Lead-Erfassung Telefon',
    'Vertriebsassistent Telefon',
    'Lead Scoring Anrufe',
  ],
  imageAltTexts: [
    'KI-System qualifiziert eingehenden Anruf und erstellt Lead-Profil automatisch',
    'CRM-Dashboard zeigt telefonisch qualifizierte Leads mit Score und Anliegen',
    'Vertriebsmitarbeiter erhält vorqualifizierten Lead vom KI-Telefonassistenten',
  ],

  h1: 'KI Lead-Qualifizierung per Telefon – Vom Anruf zum qualifizierten Lead',
  subheadline: 'Ihr Vertrieb bekommt nur noch Anrufe, die sich wirklich lohnen',
  intro:
    'Nicht jeder Anruf ist ein potenzieller Auftrag – aber jeder könnte einer sein. Die Herausforderung: Ohne Qualifizierung behandelt Ihr Team alle Anrufe gleich. Wertvolle Vertriebszeit geht für unpassende Anfragen verloren, während echte Chancen nicht erkannt werden. Ein KI-System für telefonische Lead-Qualifizierung ändert das: Es stellt die richtigen Fragen, bewertet das Potenzial und liefert Ihrem Vertrieb fertig qualifizierte Leads – mit allen relevanten Informationen. Pixel Kraftwerk entwickelt diese Systeme für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und der Region.',
  heroCtaText: 'Lead-Qualifizierung anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Vertriebszeit versickert in unpassenden Anfragen</span>',
    lead: 'Ihre Vertriebsmitarbeiter nehmen jeden Anruf ernst – doch die Realität zeigt:',
    bullets: [
      'Viele Anrufer sind „nur am Vergleichen"',
      'Manche passen gar nicht ins Zielprofil',
      'Andere sind weit entfernt von einer Kaufentscheidung',
      'Echte Hot Leads gehen in der Masse unter',
    ],
    tagline: 'Das Ergebnis: teure Vertriebszeit fließt ins Niemandsland, während qualifizierte Leads warten müssen.',
    details: [
      {
        title: 'Warum Vertrieb ohne Qualifizierung ineffizient ist',
        body: 'Jeder Anruf bindet 10–30 Minuten – unabhängig davon, ob ein echter Auftrag dahintersteht. Ohne Vorqualifizierung kostet jeder Fehltreffer bares Geld.',
        bullets: [
          'Keine Priorisierung nach Potenzial',
          'Keine einheitlichen Qualifizierungsfragen',
          'Keine Weitergabe klarer Kriterien',
          'Kein Scoring-System für Leads',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Wenn 50 % der Anrufe keine Leads sind, verlieren Sie täglich zig Stunden Vertriebszeit – die Sie für echte Abschlüsse bräuchten.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">KI-gestützte telefonische Qualifizierung</span>',
    lead: 'Die KI führt ein kurzes, freundliches Vorgespräch, stellt die richtigen Fragen und leitet <strong>nur qualifizierte Leads an Ihren Vertrieb</strong> weiter.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Jeder Anrufer wird strukturiert qualifiziert',
        'Die KI ermittelt Bedarf, Budget, Zeitrahmen und Entscheidung',
        'Hot Leads werden sofort priorisiert',
        'Nicht passende Anrufer werden freundlich abgefangen',
      ],
    },
    blocks: [
      {
        title: 'Was das System konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'BANT-Qualifizierung (Budget, Authority, Need, Timing)',
          'Branchen- und Zielgruppen-Check',
          'Standort / Einsatzgebiet',
          'Bedarf und Volumen',
          'Lead-Scoring mit klarer Priorität',
        ],
      },
      {
        title: 'Was bei Ihrem Vertrieb ankommt',
        intro: 'Statt „Rohmaterial" gibt es vorsortierte Leads:',
        bullets: [
          'Kontaktdaten + Unternehmen',
          'Anliegen + potenzielles Auftragsvolumen',
          'Lead-Score (kalt / warm / heiß)',
          'Gesprächsprotokoll / Transkript',
        ],
      },
    ],
    tagline: '➡️ Ihr Vertrieb ruft nur noch zurück, wenn sich die Zeit lohnt.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist KI Lead-Qualifizierung am Telefon?',
    lead: 'Ein <strong>sprachgeführter KI-Assistent</strong>, der Anrufer strukturiert befragt, bewertet und nur dann weiterleitet, wenn die Anfrage zu Ihrem Angebot und Ihrer Zielgruppe passt.',
    examples: [
      '„In welcher Stadt / Region sind Sie?"',
      '„Was genau suchen Sie?"',
      '„Wann soll es idealerweise starten?"',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Unternehmen mit hohem Anrufvolumen, definierter Zielgruppe und klaren Vertriebskriterien: Dienstleister, Agenturen, Handwerk mit Einzugsgebiet, B2B-Vertrieb.',
      },
      {
        title: 'Was das System nicht ist',
        body: '<strong>Wichtig:</strong> Es ersetzt keinen Vertriebsabschluss. Es sorgt dafür, dass Ihr Team nur dort spricht, wo sich ein Abschluss wirklich lohnt.',
      },
    ],
  },

  features: {
    headline: 'Was die Lead-Qualifizierung <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Strukturierte Qualifikationsfragen',
      'Lead-Scoring nach Ihren Kriterien',
      'Bedarfsanalyse im Gespräch',
      'Priorisierung nach Abschlusspotenzial',
      'Übergabe an den passenden Vertriebsmitarbeiter',
      'CRM-Eintrag mit allen Infos',
    ],
    note: '<strong>Wichtig:</strong> Die Qualifikationslogik wird <strong>auf Ihre Zielgruppe und Ihr Angebot trainiert</strong> – keine generischen Fragen.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet die Lösung:',
        bullets: [
          'Scoring-Modelle (z. B. BANT, MEDDIC)',
          'Priorisierung nach Auftragsvolumen',
          'Weiche Absagen für unpassende Leads',
          'Statistiken zu Conversion & Ablehnung',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch binden wir an:',
        bullets: [
          'CRM (HubSpot, Pipedrive, Salesforce)',
          'Marketing-Automation',
          'Kalender & Routing-Tools',
          'Business Intelligence / Reporting',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum telefonische Lead-Qualifizierung so wichtig ist',
      headingLevel: 'h2',
      paragraphs: [
        'Die meisten Unternehmen unterscheiden nicht zwischen einem Informationssucher und einem kaufbereiten Interessenten. Beide bekommen denselben Aufwand – obwohl der eine nur eine schnelle Antwort braucht und der andere bereit ist, einen Auftrag zu erteilen.',
        'Telefonische Lead-Qualifizierung löst genau dieses Problem. Durch gezielte Fragen im Gespräch erkennt das System, wie ernst die Anfrage ist, welches Budget dahintersteckt und wie dringend der Bedarf ist. Ihr Vertrieb bekommt nur noch die Anrufe, die wirklich Potenzial haben – vorqualifiziert und mit strukturierten Informationen.',
        'Für Unternehmen in <a href="/leistungsgebiete/halle-saale" class="text-primary-400 hover:underline">Halle</a> und Leipzig, die mit begrenztem Team wachsen möchten, ist das ein entscheidender Hebel.',
      ],
    },
    {
      heading: 'Wie funktioniert die KI-gestützte Lead-Qualifizierung am Telefon?',
      headingLevel: 'h2',
      paragraphs: [
        'Der Prozess läuft für den Anrufer natürlich und unaufdringlich ab:',
      ],
      bullets: [
        '<strong>1. Begrüßung & Anliegen:</strong> Der KI-Assistent nimmt den Anruf entgegen und erkennt, dass es sich um eine potenzielle Geschäftsanfrage handelt',
        '<strong>2. Qualifizierungsfragen:</strong> Anhand vordefinierter Kriterien stellt der Assistent gezielte Fragen – zum Beispiel: Art der gewünschten Leistung, Zeitrahmen, Standort, Budgetrahmen',
        '<strong>3. Scoring:</strong> Basierend auf den Antworten bewertet das System den Lead automatisch – von „Informationssucher" bis „kaufbereit"',
        '<strong>4. Datenerfassung:</strong> Kontaktdaten, Anliegen und alle Qualifizierungsinformationen werden strukturiert erfasst',
        '<strong>5. Routing:</strong> Hochqualifizierte Leads werden sofort an den Vertrieb weitergeleitet, weniger dringende in eine Nurturing-Sequenz eingespeist',
      ],
    },
    {
      heading: 'Ohne vs. mit KI-Lead-Qualifizierung',
      headingLevel: 'h2',
      paragraphs: [
        'Der Unterschied im Vertriebsalltag ist erheblich:',
      ],
      table: {
        headers: ['Situation', 'Ohne Qualifizierung', 'Mit KI-Qualifizierung'],
        rows: [
          ['Anruf kommt rein', 'Mitarbeiter nimmt ab, stellt selbst Fragen', 'KI qualifiziert vor, Mitarbeiter erhält fertiges Profil'],
          ['Zeitaufwand pro Lead', '10–15 Minuten', 'Unter 3 Minuten für den Mitarbeiter'],
          ['Lead-Qualität', 'Unklar bis zum Erstgespräch', 'Score und Profil vor dem ersten Kontakt'],
          ['Priorisierung', 'Bauchgefühl', 'Datenbasiert nach definierten Kriterien'],
          ['Follow-up', 'Manuell, oft verspätet', 'Automatisch, zeitnah, personalisiert'],
          ['Vertriebseffizienz', 'Team verbringt Zeit mit unpassenden Leads', 'Team fokussiert auf kaufbereite Interessenten'],
          ['Verfügbarkeit', 'Nur während Arbeitszeiten', '24/7 – auch Leads aus Abendstunden und Wochenenden'],
        ],
      },
    },
    {
      heading: 'Qualifizierungskriterien: Was genau wird abgefragt?',
      headingLevel: 'h2',
      paragraphs: [
        'Die Qualifizierungskriterien werden individuell auf Ihr Unternehmen zugeschnitten. Typische Kriterien, die wir im Telefongespräch abfragen:',
      ],
      bullets: [
        '<strong>Bedarf:</strong> Welche Leistung oder welches Produkt wird gesucht?',
        '<strong>Zeitrahmen:</strong> Wie dringend ist der Bedarf? Sofort, in den nächsten Wochen, langfristig?',
        '<strong>Standort:</strong> Liegt der Anrufer in Ihrem Einzugsgebiet?',
        '<strong>Entscheidungsbefugnis:</strong> Ist der Anrufer Entscheider oder Informationssammler?',
        '<strong>Budget:</strong> Gibt es eine Vorstellung zum Budget oder Rahmen?',
        '<strong>Vorwissen:</strong> Hat der Anrufer bereits mit Wettbewerbern gesprochen?',
      ],
    },
    {
      heading: 'Integration mit CRM und Vertriebsprozessen',
      headingLevel: 'h2',
      paragraphs: [
        'Qualifizierte Leads sind nur dann wertvoll, wenn sie sofort dort landen, wo Ihr Vertrieb arbeitet. Wir integrieren die telefonische Lead-Qualifizierung nahtlos in Ihre bestehenden Systeme.',
        'Jeder qualifizierte Lead wird automatisch in Ihrem <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-System</a> angelegt – mit allen erfassten Informationen, dem Qualifizierungs-Score und dem Gesprächsprotokoll. Von dort greifen Ihre bestehenden <a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungen</a>.',
      ],
      bullets: [
        'CRM-Integration (HubSpot, Pipedrive, Zoho) – automatische Lead-Erstellung mit Score und Tags',
        'Vertriebsbenachrichtigung – sofortige Alerts bei hochqualifizierten Leads',
        'E-Mail-Nurturing – nicht-kaufbereite Leads werden automatisch nachgefasst',
        'Reporting – Auswertung der Lead-Qualität, Conversion-Raten und häufigsten Anfragen',
      ],
    },
    {
      heading: 'Für welche Unternehmen eignet sich die telefonische Lead-Qualifizierung?',
      headingLevel: 'h2',
      paragraphs: [
        'Besonders wertvoll ist die KI-gestützte Lead-Qualifizierung per Telefon für:',
      ],
      bullets: [
        'Dienstleister mit beratungsintensivem Erstgespräch – der Bot übernimmt die Vorqualifizierung',
        'Handwerksbetriebe, die viele Anfragen erhalten, aber nicht alle annehmen können',
        'Unternehmen mit mehrstufigem Vertriebsprozess, bei dem die Erstqualifizierung zeitaufwändig ist',
        'Firmen, die Leads aus verschiedenen Kanälen (Telefon, <a href="/ki-chatbots" class="text-primary-400 hover:underline">Chatbot</a>, Formular) einheitlich qualifizieren möchten',
        'Wachsende Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, die ihren Vertrieb skalieren wollen, ohne mehr Personal einzustellen',
      ],
    },
    {
      heading: 'Unser Implementierungsprozess',
      headingLevel: 'h2',
      paragraphs: [
        'Wir setzen Ihr Lead-Qualifizierungssystem strukturiert auf:',
      ],
      bullets: [
        '<strong>1. Vertriebsanalyse:</strong> Wir verstehen Ihren Vertriebsprozess, Ihre Zielkunden und Ihre Qualifizierungskriterien',
        '<strong>2. Fragebogen-Design:</strong> Gemeinsam entwickeln wir die optimale Fragenreihenfolge und Scoring-Logik',
        '<strong>3. Systemaufbau:</strong> Technische Einrichtung, CRM-Anbindung und Workflow-Konfiguration',
        '<strong>4. Test:</strong> Testanrufe mit Ihrem Team, Feinschliff an Formulierungen und Schwellenwerten',
        '<strong>5. Go-Live & Optimierung:</strong> Laufende Analyse der Lead-Qualität und Anpassung der Kriterien',
      ],
    },
    {
      heading: 'Datenschutz und DSGVO-Konformität',
      headingLevel: 'h3',
      paragraphs: [
        'Bei der Lead-Qualifizierung werden geschäftsrelevante personenbezogene Daten erhoben. Wir stellen sicher, dass dies DSGVO-konform geschieht: transparente Information des Anrufers, verschlüsselte Übertragung, Speicherung ausschließlich in Ihren eigenen Systemen auf europäischen Servern und klare Löschfristen.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet die telefonische Lead-Qualifizierung per KI?',
      a: 'Die Kosten hängen vom Anrufvolumen, der Anzahl der Qualifizierungskriterien und den gewünschten Integrationen ab. Wir erstellen nach einem Erstgespräch ein individuelles Angebot.',
    },
    {
      q: 'Merkt der Anrufer, dass er mit einer KI spricht?',
      a: 'Die Qualifizierungsfragen sind in ein natürliches Gespräch eingebettet. Die KI-Stimme klingt natürlich und die Fragen wirken wie ein professionelles Erstgespräch. Der Anrufer wird transparent darüber informiert, dass ein KI-Assistent das Gespräch führt.',
    },
    {
      q: 'Kann ich die Qualifizierungskriterien selbst anpassen?',
      a: 'Ja. Die Kriterien, Scoring-Schwellen und Routing-Regeln können jederzeit angepasst werden – zum Beispiel bei neuen Leistungen oder veränderten Zielgruppen.',
    },
    {
      q: 'Was passiert mit Leads, die nicht qualifiziert sind?',
      a: 'Auch nicht qualifizierte Leads werden erfasst. Sie können automatisch in eine Nurturing-Sequenz eingespeist werden oder erhalten zumindest eine freundliche Antwort auf ihre Anfrage.',
    },
    {
      q: 'Wie hoch ist die Qualifizierungsgenauigkeit?',
      a: 'Die Genauigkeit hängt von der Qualität der Kriterien und der Gesprächsqualität ab. In der Praxis erreichen wir Trefferquoten von über 85 Prozent. Durch laufende Optimierung verbessert sich die Genauigkeit kontinuierlich.',
    },
    {
      q: 'Kann die KI auch Outbound-Qualifizierung machen?',
      a: 'Ja. Das System kann auch ausgehende Anrufe tätigen, um bestehende Leads nachzuqualifizieren oder Kontakte aus Formularen und Chatbots telefonisch zu verifizieren.',
    },
    {
      q: 'Funktioniert das auch für komplexe B2B-Anfragen?',
      a: 'Ja. Wir konfigurieren die Qualifizierungslogik individuell – von einfachen B2C-Anfragen bis hin zu mehrstufigen B2B-Qualifizierungen mit BANT-Kriterien.',
    },
    {
      q: 'Ist die telefonische Lead-Qualifizierung DSGVO-konform?',
      a: 'Ja. Anrufer werden transparent informiert, die Datenverarbeitung erfolgt auf europäischen Servern, und alle erfassten Daten werden in Ihren eigenen Systemen gespeichert.',
    },
  ],

  ctaText: 'Bereit, nur noch mit den richtigen Leads zu sprechen?',

  parentServiceLink: {
    text: 'Telefonassistenten im Überblick',
    href: '/telefonassistenten',
  },
  siblingSubpageLinks: [
    { text: 'KI Telefonassistent (Inbound)', href: '/telefonassistenten/ki-telefonassistent-inbound' },
    { text: 'KI Anrufsystem', href: '/telefonassistenten/ki-anrufsystem' },
    { text: 'KI Terminassistent', href: '/telefonassistenten/ki-terminassistent' },
    { text: 'Automatische Rückrufsysteme', href: '/telefonassistenten/automatische-rueckrufsysteme' },
    { text: 'KI Telefon-Kundenservice', href: '/telefonassistenten/ki-telefon-kundenservice' },
  ],
  crossServiceLinks: [
    { text: 'Leadgenerierung automatisieren', href: '/automatisierungen/leadgenerierung' },
    { text: 'CRM-Systeme', href: '/crm-systeme' },
  ],
  areaLinks: buildTier1AreaLinks('KI Lead-Qualifizierung'),
};

export default content;
