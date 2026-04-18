import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'CRM für Vermietung – Mietverwaltung digitalisieren – Pixel Kraftwerk Groitzsch & Leipzig',
  metaDescription:
    'CRM für Vermietung: Mieterdaten, Mietverträge, Zahlungseingänge und Wartungsanfragen zentral verwalten. Pixel Kraftwerk richtet Ihr Vermieter-CRM ein.',
  primaryKeyword: 'CRM für Vermietung',
  secondaryKeywords: [
    'Vermieter-CRM',
    'Mietverwaltung Software',
    'Immobilienverwaltung CRM',
    'Mieterkommunikation',
    'Leerstandsmanagement',
  ],
  imageAltTexts: [
    'CRM-Dashboard mit Übersicht aller Mietobjekte, Mietverträgen und offenen Wartungsanfragen',
    'Vermieter prüft Zahlungseingänge und Mieterdaten auf dem Laptop im Büro',
    'Automatische Erinnerung an auslaufenden Mietvertrag im CRM-System auf dem Smartphone',
  ],

  h1: 'CRM für Vermietung – Ihre Objekte, Mieter und Verträge an einem Ort',
  subheadline: 'Mietverwaltung ohne Excel-Chaos und verlegte Papier-Ordner',
  intro:
    'Wer Immobilien vermietet, jongliert täglich mit Mietverträgen, Zahlungseingängen, Reparaturanfragen und Mieterkommunikation. Je mehr Objekte es werden, desto schneller verliert man den Überblick – vor allem, wenn alles in Excel-Tabellen, E-Mail-Postfächern und Papierordnern verstreut ist. Ein CRM für Vermietung bündelt alle Informationen an einem Ort: Mieterdaten, Vertragslaufzeiten, offene Posten, Wartungshistorie und Kommunikationsverläufe. Damit Sie jederzeit wissen, was bei welchem Objekt los ist – ohne erst drei Ordner durchsuchen zu müssen.',
  heroCtaText: 'Vermieter-CRM anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Mietverwaltung verteilt sich auf zu viele Orte</span>',
    lead: 'Typische Situation bei Vermietern:',
    bullets: [
      'Mieterdaten in Excel, Papierordner und Notion gleichzeitig',
      'Vertragslaufzeiten werden vergessen → Automatische Verlängerung',
      'Zahlungseingänge nur über den Kontoauszug nachverfolgt',
      'Wartungsanfragen versanden zwischen E-Mail und Telefon',
    ],
    tagline: 'Je mehr Objekte, desto größer die Gefahr von Fehlern und entgangenen Einnahmen.',
    details: [
      {
        title: 'Warum Excel nicht mehr reicht',
        body: 'Excel-Tabellen werden mit der Zeit zu Mini-Datenbanken – nur ohne Rechte, ohne Versionskontrolle und ohne Erinnerungen. Jeder Fehler kann teuer werden.',
        bullets: [
          'Keine automatischen Erinnerungen',
          'Keine Übersicht über offene Posten',
          'Keine Historie pro Mieter/Objekt',
          'Keine sichere Mehrbenutzung',
        ],
      },
      {
        title: 'Was das Sie monatlich kostet',
        body: 'Ein vergessener Mieterhöhungstermin, eine verspätete Mahnung oder eine übersehene Wartung kann schnell mehrere Hundert bis mehrere Tausend Euro kosten.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein CRM für Mietverwaltung</span>',
    lead: 'Ein CRM für Vermietung bündelt <strong>Objekte, Mieter, Verträge, Zahlungen und Kommunikation</strong> an einem Ort – strukturiert, sicher und jederzeit abrufbar.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Jedes Objekt hat eine vollständige digitale Akte',
        'Mieter, Verträge und Zahlungen verknüpft auf einen Blick',
        'Automatische Erinnerungen bei Fristen und Mieterhöhungen',
        'Wartungsanfragen strukturiert erfasst und zugeordnet',
      ],
    },
    blocks: [
      {
        title: 'Was das CRM konkret bündelt',
        intro: 'Pro Objekt sehen Sie:',
        bullets: [
          'Stammdaten (Adresse, Größe, Ausstattung)',
          'Aktuelle und frühere Mieter',
          'Vertragslaufzeiten + Kündigungsfristen',
          'Zahlungseingänge & offene Forderungen',
          'Wartungs- und Instandhaltungshistorie',
        ],
      },
      {
        title: 'Wie das Ihren Alltag verändert',
        intro: 'Überblick statt Suchen:',
        bullets: [
          'Sofortige Antwort auf „Wie ist der Stand?"-Fragen',
          'Keine verpassten Fristen',
          'Saubere Kommunikation mit Mietern',
          'Klare Übergabe bei Verwalter-Wechsel',
        ],
      },
    ],
    tagline: '➡️ Weniger Verwaltungsaufwand, mehr Kontrolle über Ihre Objekte.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein CRM für Vermietung?',
    lead: 'Ein CRM für Vermietung ist ein <strong>zentrales System für Immobilien, Mieter, Verträge und Kommunikation</strong> – speziell auf die Anforderungen von Vermietern und Verwaltern zugeschnitten.',
    examples: [
      'Private Vermieter mit 3–30 Wohnungen',
      'Hausverwaltungen mit mehreren Portfolios',
      'Betriebe mit Gewerbe- und Wohnobjekten',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für private Vermieter, Hausverwaltungen, Bestandshalter, WEG-Verwalter – überall dort, wo mehrere Objekte und Mieter parallel betreut werden.',
      },
      {
        title: 'Was das CRM nicht ist',
        body: '<strong>Wichtig:</strong> Es ersetzt keinen Steuerberater und keine Buchhaltung – aber es liefert all die Daten, die beide brauchen, ohne Extra-Aufwand.',
      },
    ],
  },

  features: {
    headline: 'Was das Vermieter-CRM <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Objekt- und Mieterverwaltung',
      'Vertrags- und Fristenmanagement',
      'Zahlungseingänge & Mahnwesen',
      'Wartungs- und Reparaturanfragen',
      'Dokumentenablage pro Objekt/Mieter',
      'Auswertungen zu Leerstand, Einnahmen, Rentabilität',
    ],
    note: '<strong>Wichtig:</strong> Das System wird <strong>auf Ihre Portfolio-Größe und Ihre Prozesse</strong> zugeschnitten – vom Einzel-Vermieter bis zur Hausverwaltung.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das CRM:',
        bullets: [
          'Mieterportal auf Wunsch',
          'Automatische Rechnungs- und Mahnschreiben',
          'Reporting zu Leerstand und Rendite',
          'Dokumentenmanagement',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'Buchhaltung (lexoffice, sevDesk, DATEV)',
          'Banking-APIs für Zahlungsabgleich',
          'E-Mail + Kalender',
          'Handwerker- und Servicefirmen',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum Vermieter ein eigenes CRM brauchen',
      headingLevel: 'h2',
      paragraphs: [
        'Klassische CRM-Systeme sind für Vertrieb und Marketing konzipiert. Sie verwalten Leads, Deals und Umsatzprognosen. Das ist sinnvoll – aber an der Realität eines Vermieters vorbei. Wer Wohnungen, Gewerbeeinheiten oder Ferienwohnungen vermietet, braucht andere Funktionen: Mietvertragsverwaltung, Zahlungsüberwachung, Wartungsmanagement und eine strukturierte Mieterkommunikation.',
        'Ein CRM für Vermietung bildet genau diese Prozesse ab. Es ist kein Buchhaltungsprogramm und kein Hausverwaltungs-Moloch, sondern eine schlanke, zentrale Plattform, die Ihnen den Überblick über Ihr Portfolio gibt und wiederkehrende Aufgaben automatisiert.',
        'Gerade für Vermieter in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung, die ihr Portfolio ohne große Hausverwaltung betreuen, ist ein solches System Gold wert: Sie behalten die Kontrolle, ohne im Verwaltungsaufwand unterzugehen.',
      ],
    },
    {
      heading: 'Excel und Papierordner vs. CRM – der Unterschied in der Praxis',
      headingLevel: 'h2',
      paragraphs: [
        'Viele Vermieter starten mit einer Excel-Tabelle. Das funktioniert bei zwei oder drei Einheiten. Aber ab einer gewissen Größe wird die Tabelle zum Risiko: Formeln gehen kaputt, Daten sind veraltet, und wer wann was geändert hat, lässt sich nicht nachvollziehen. Die folgende Tabelle zeigt, wo die Unterschiede liegen:',
      ],
      table: {
        headers: ['Aufgabe', 'Excel / manuelle Verwaltung', 'CRM für Vermietung'],
        rows: [
          [
            'Mieterdaten pflegen',
            'Verstreut in Tabellen, E-Mails und Ordnern',
            'Zentrale digitale Mieterakte mit Kontaktdaten, Dokumenten und Verlauf',
          ],
          [
            'Mietverträge überwachen',
            'Kalendereinträge oder Erinnerungszettel für Fristen',
            'Automatische Benachrichtigung bei Vertragsverlängerung, Kündigungsfrist oder Mietanpassung',
          ],
          [
            'Zahlungseingänge prüfen',
            'Manueller Kontoauszug-Abgleich, oft wöchentlich',
            'Automatische Zuordnung von Zahlungen zu Mietern, offene Posten auf einen Blick',
          ],
          [
            'Reparaturen und Wartung',
            'Anfragen per Telefon oder E-Mail, keine zentrale Dokumentation',
            'Wartungstickets mit Status, Zuständigkeit und Verlauf pro Objekt',
          ],
          [
            'Mieterkommunikation',
            'Einzelne E-Mails, WhatsApp-Nachrichten, Telefonate ohne Protokoll',
            'Komplette Kommunikationshistorie pro Mieter, abrufbar mit einem Klick',
          ],
          [
            'Leerstandsmanagement',
            'Im Kopf oder auf einer separaten Liste',
            'Übersichtliches Dashboard mit aktueller Belegung und geplanten Auszügen',
          ],
        ],
      },
    },
    {
      heading: 'Mietverträge und Fristen im Griff',
      headingLevel: 'h2',
      paragraphs: [
        'Ein vergessener Kündigungstermin kann teuer werden – für beide Seiten. Im CRM werden alle Vertragsdaten hinterlegt: Beginn, Laufzeit, Kündigungsfristen, Staffelmieten und Sondervereinbarungen. Rechtzeitig vor relevanten Terminen erhalten Sie automatische Erinnerungen.',
        'Das betrifft nicht nur die klassische Kündigung. Auch Mietanpassungen nach Mietspiegel, auslaufende Befristungen oder anstehende Indexanpassungen lassen sich so zuverlässig im Blick behalten. Sie handeln proaktiv, statt erst dann zu reagieren, wenn es eigentlich schon zu spät ist.',
      ],
    },
    {
      heading: 'Zahlungseingänge überwachen und Mahnwesen automatisieren',
      headingLevel: 'h2',
      paragraphs: [
        'Wer 10 oder 20 Mieteinheiten verwaltet, verbringt schnell Stunden damit, Kontoauszüge mit Mieter-Sollstellungen abzugleichen. Im CRM sehen Sie auf einen Blick, wer gezahlt hat und wer nicht. Offene Posten werden automatisch markiert.',
        'Bei Zahlungsverzug kann das System automatisch eine freundliche Zahlungserinnerung per <a href="/automatisierungen/email-automatisierung" class="text-primary-400 hover:underline">E-Mail-Automatisierung</a> versenden – abgestuft und DSGVO-konform. Erst eine höfliche Erinnerung, dann eine formelle Mahnung. Sie legen den Eskalationspfad einmal fest, der Rest läuft automatisch.',
        'Das spart nicht nur Zeit, sondern reduziert auch unangenehme Gespräche: Die meisten Mieter reagieren auf die erste automatische Erinnerung, bevor es zur echten Mahnung kommt.',
      ],
    },
    {
      heading: 'Wartungsanfragen strukturiert bearbeiten',
      headingLevel: 'h3',
      paragraphs: [
        'Die Heizung tropft, der Wasserrohrbruch im Bad, ein defekter Rollladen – Wartungsanfragen gehören zum Vermieter-Alltag. Ohne System landen sie in E-Mails, WhatsApp-Chats und Anrufbeantworter-Nachrichten. Im CRM werden Wartungsanfragen als Tickets erfasst: mit Objekt, Mieter, Beschreibung, Fotos, zuständigem Handwerker und aktuellem Status.',
        'Ihr Mieter meldet einen Schaden? Er erhält automatisch eine Bestätigung, dass die Anfrage eingegangen ist. Sie weisen den Handwerker zu, der den Status aktualisiert. Der Mieter wird informiert, sobald ein Termin steht. Alles dokumentiert, alles nachvollziehbar.',
        'Diese Transparenz stärkt das Vertrauen Ihrer Mieter – und reduziert Rückfragen erheblich.',
      ],
    },
    {
      heading: 'Leerstandsmanagement und Neuvermietung',
      headingLevel: 'h2',
      paragraphs: [
        'Jeder Tag Leerstand kostet Geld. Ein CRM für Vermietung zeigt Ihnen frühzeitig, welche Einheiten demnächst frei werden – basierend auf Kündigungseingängen und Vertragslaufzeiten. So können Sie rechtzeitig mit der Neuvermietung starten, noch bevor der aktuelle Mieter ausgezogen ist.',
        'Interessenten für freie Wohnungen werden ebenfalls im CRM erfasst: Kontaktdaten, Besichtigungstermine, Unterlagen und Rückmeldungen. So behalten Sie auch bei mehreren gleichzeitigen Neuvermietungen den Überblick, wer sich für welches Objekt interessiert und in welchem Stadium die Gespräche sind.',
        'In Kombination mit einer <a href="/webseite" class="text-primary-400 hover:underline">modernen Webseite</a> lassen sich Exposés direkt online bereitstellen und Interessenten-Anfragen automatisch ins CRM übernehmen.',
      ],
    },
    {
      heading: 'Kommunikation mit Mietern professionell organisieren',
      headingLevel: 'h2',
      paragraphs: [
        'Gute Mieterkommunikation ist der Schlüssel zu langfristigen, stabilen Mietverhältnissen. Im CRM haben Sie die gesamte Kommunikationshistorie pro Mieter im Blick – egal ob E-Mail, Telefon oder persönliches Gespräch. Notizen, Vereinbarungen und Absprachen sind zentral dokumentiert.',
        'Serienbriefe und Rundschreiben – etwa die jährliche Nebenkostenabrechnung oder Informationen zu geplanten Sanierungen – lassen sich direkt aus dem CRM heraus versenden. Personalisiert, mit korrekter Anrede und den richtigen Objektdaten.',
      ],
      bullets: [
        'Zentrale Kommunikationshistorie pro Mieter und Objekt',
        'Vorlagen für Serienbriefe, Mieterhöhungen und Betriebskostenabrechnungen',
        'Automatische Benachrichtigungen bei eingehenden Mieteranfragen',
        'Verknüpfung von Dokumenten wie Übergabeprotokollen und Mietverträgen',
        'Notizen und Gesprächsprotokolle direkt am Mieterkontakt',
      ],
    },
    {
      heading: 'Dokumentenmanagement für Vermieter',
      headingLevel: 'h3',
      paragraphs: [
        'Mietverträge, Übergabeprotokolle, Nebenkostenabrechnungen, Handwerkerrechnungen, Energieausweise – die Dokumentenflut in der Vermietung ist enorm. Im CRM werden alle Dokumente digital hinterlegt und dem jeweiligen Objekt und Mieter zugeordnet.',
        'Kein Suchen in Aktenordnern mehr, kein „Wo war nochmal die letzte Nebenkostenabrechnung?". Sie finden jedes Dokument in Sekunden – sortiert nach Objekt, Mieter oder Dokumententyp. Und wenn der Steuerberater die Unterlagen braucht, exportieren Sie alles mit wenigen Klicks.',
      ],
    },
    {
      heading: 'Integration mit Buchhaltung und Bankkonten',
      headingLevel: 'h2',
      paragraphs: [
        'Ein CRM für Vermietung ersetzt keine Buchhaltungssoftware – aber es arbeitet nahtlos mit ihr zusammen. Zahlungseingänge, Ausgaben für Instandhaltung und Mieterlöse fließen strukturiert in Ihr Buchhaltungssystem. Doppelte Dateneingabe gehört der Vergangenheit an.',
        'Wir richten die Schnittstellen so ein, dass Ihr Steuerberater die Daten bekommt, die er braucht – ohne dass Sie Stunden mit manueller Aufbereitung verbringen. In <a href="/leistungsgebiete/markkleeberg" class="text-primary-400 hover:underline">Markkleeberg</a> und der Region Leipzig setzen viele unserer Kunden auf DATEV-kompatible Exporte, die wir direkt im System konfigurieren.',
      ],
    },
    {
      heading: 'Unser Ablauf: Vom Erstgespräch zum laufenden Vermieter-CRM',
      headingLevel: 'h2',
      paragraphs: [
        'Vermietung ist Vertrauenssache – das gilt auch für die Einführung eines neuen Systems. Wir gehen strukturiert vor, damit Sie jederzeit wissen, was passiert:',
      ],
      bullets: [
        '<strong>1. Bestandsaufnahme:</strong> Wie verwalten Sie Ihre Objekte heute? Welche Daten existieren bereits? Wo liegen die größten Zeitfresser?',
        '<strong>2. Systemauswahl:</strong> Wir empfehlen ein CRM, das zu Ihrer Portfoliogröße und Ihren Anforderungen passt – kein überdimensioniertes Enterprise-Tool',
        '<strong>3. Einrichtung und Datenmigration:</strong> Bestehende Mieterdaten, Verträge und Objektdaten werden sauber ins neue System überführt',
        '<strong>4. Automatisierungen konfigurieren:</strong> Erinnerungen, Zahlungsüberwachung, Wartungstickets und Vorlagen werden eingerichtet',
        '<strong>5. Schulung:</strong> Ihr Team lernt das System in einer praxisnahen Einweisung kennen – keine theoretischen Vorträge, sondern Arbeiten am echten Datenbestand',
        '<strong>6. Begleitung nach Go-Live:</strong> In den ersten Wochen stehen wir für Rückfragen bereit und optimieren bei Bedarf nach',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein CRM für Vermietung?',
      a: 'Die Kosten setzen sich aus dem einmaligen Setup (Einrichtung, Datenmigration, Automatisierungen, Schulung) und den monatlichen Tool-Kosten zusammen. Das Setup liegt je nach Portfoliogröße zwischen 1.200 und 4.000 Euro. Die monatlichen Kosten für das CRM-Tool starten bei vielen Anbietern ab 20–50 Euro.',
    },
    {
      q: 'Ab wie vielen Mieteinheiten lohnt sich ein CRM?',
      a: 'Schon ab 5–10 Einheiten zeigt sich der Mehrwert deutlich. Je mehr Objekte und Mieter Sie verwalten, desto größer wird der Zeitgewinn. Aber auch bei einem kleineren Portfolio profitieren Sie von automatischen Erinnerungen und einer sauberen Dokumentation.',
    },
    {
      q: 'Kann ich meine bestehenden Daten aus Excel übernehmen?',
      a: 'Ja. Wir migrieren Ihre vorhandenen Mieterdaten, Vertragsinformationen und Objektdaten ins neue System. Dabei bereinigen wir die Daten gleich mit – doppelte Einträge, fehlende Felder und veraltete Informationen werden korrigiert.',
    },
    {
      q: 'Ersetzt das CRM eine Hausverwaltungssoftware?',
      a: 'Nicht vollständig. Ein CRM für Vermietung ist keine Buchhaltungssoftware und kein WEG-Verwaltungstool. Es ergänzt Ihre bestehende Infrastruktur um eine zentrale Plattform für Mieterdaten, Kommunikation, Vertragsfristen und Wartungsmanagement – und lässt sich mit Ihrer Buchhaltung verbinden.',
    },
    {
      q: 'Ist das System DSGVO-konform?',
      a: 'Ja. Wir setzen auf Tools mit Serverstandorten in der EU und richten Löschfristen, Zugriffsrechte und Datenschutzprozesse ein. Mieterdaten sind sensible personenbezogene Daten – wir behandeln sie entsprechend.',
    },
    {
      q: 'Wie lange dauert die Einrichtung?',
      a: 'Ein typisches Projekt dauert 2–4 Wochen. Bei kleinerem Bestand und überschaubarer Datenmenge kann es auch schneller gehen. Bei größeren Portfolios mit komplexen Integrationen rechnen wir mit 4–6 Wochen.',
    },
    {
      q: 'Können mehrere Personen gleichzeitig im CRM arbeiten?',
      a: 'Ja. Die Systeme, die wir einsetzen, sind mandantenfähig und unterstützen mehrere Nutzer mit individuellen Rollen und Zugriffsrechten. So können Vermieter, Hausmeister und Buchhalter jeweils nur die Bereiche sehen, die für sie relevant sind.',
    },
    {
      q: 'Kann ich das CRM auch für Ferienwohnungen nutzen?',
      a: 'Absolut. Gerade bei Ferienwohnungen mit häufigem Mieterwechsel ist ein CRM besonders wertvoll: Buchungsübersichten, Check-in-Kommunikation, Reinigungskoordination und Gästebewertungen lassen sich strukturiert verwalten.',
    },
  ],

  ctaText: 'Bereit, Ihre Vermietung professionell zu digitalisieren?',

  parentServiceLink: {
    text: 'CRM-Systeme im Überblick',
    href: '/crm-systeme',
  },
  siblingSubpageLinks: [
    { text: 'CRM für Handwerker', href: '/crm-systeme/crm-fuer-handwerker' },
    { text: 'CRM für Dienstleister', href: '/crm-systeme/crm-fuer-dienstleister' },
  ],
  crossServiceLinks: [
    { text: 'E-Mail Automatisierung', href: '/automatisierungen/email-automatisierung' },
    { text: 'Webseiten im Mietmodell', href: '/webseite' },
  ],
  areaLinks: buildTier1AreaLinks('CRM für Vermietung'),
};

export default content;
