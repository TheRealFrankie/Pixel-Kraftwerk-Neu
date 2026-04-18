import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'Terminbuchung automatisieren – Groitzsch & Leipzig – Pixel Kraftwerk richtet Ihr Online-Buchungssystem ein',
  metaDescription:
    'Terminbuchung automatisieren: Online-Kalender, Erinnerungen und Kalendersync für KMU in Leipzig & Region. Pixel Kraftwerk baut Ihr Buchungssystem.',
  primaryKeyword: 'Terminbuchung automatisieren',
  secondaryKeywords: [
    'Online-Terminbuchung',
    'automatische Terminplanung',
    'Kalender-Automatisierung',
    'Buchungssystem',
    'Terminerinnerung automatisch',
  ],
  imageAltTexts: [
    'Online-Terminbuchung: Kunde wählt freien Termin im digitalen Kalender aus',
    'Automatische Terminerinnerung per SMS und E-Mail auf Smartphone-Display',
    'Dashboard mit Kalenderübersicht und synchronisierten Buchungen aus verschiedenen Kanälen',
  ],

  h1: 'Terminbuchung automatisieren',
  subheadline: 'Ihre Kunden buchen online – Ihr Kalender bleibt sauber',
  intro:
    'Verpasste Anrufe, doppelt belegte Zeitfenster und endloses Hin-und-her per Telefon – manuelle Terminplanung frisst Zeit und kostet Kunden. Mit einer automatisierten Terminbuchung können Ihre Kunden rund um die Uhr online buchen, erhalten automatische Erinnerungen und Ihr Kalender bleibt stets aktuell. Schluss mit Terminchaos.',
  heroCtaText: 'Buchungssystem anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Manuelle Terminplanung ist ein Zeitfresser</span>',
    lead: 'Jeder, der Termine manuell vergibt, kennt diese Situationen:',
    bullets: [
      'Anrufer will einen Termin – Kalender muss erst gesucht werden',
      'Doppelbuchungen, weil mehrere Kanäle parallel laufen',
      'Kunden rufen an, obwohl Informationen schon mehrfach gegeben wurden',
      'No-Shows, weil keine Erinnerung verschickt wurde',
    ],
    tagline: 'Terminverwaltung bindet täglich Zeit, die für echtes Kundengeschäft fehlt.',
    details: [
      {
        title: 'Warum manuelle Terminvergabe nicht mehr zeitgemäß ist',
        body: 'Kunden erwarten, Termine online zu buchen – wie bei Arztpraxen oder Friseuren. Wer das nicht bietet, wirkt altmodisch und verliert Kunden an Wettbewerber mit schlankeren Prozessen.',
        bullets: [
          'Keine 24/7-Verfügbarkeit',
          'Kein paralleler Zugriff auf den Kalender',
          'Keine automatischen Bestätigungen',
          'Keine Statistiken über Auslastung',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'No-Shows, Doppelbuchungen und manuelle Pflegezeit summieren sich zu echten Produktivitätsverlusten – oft mehrere Stunden pro Woche.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Automatisierte Online-Terminbuchung</span>',
    lead: 'Kunden buchen selbstständig online – Sie bekommen <strong>saubere Termine in Ihrem Kalender</strong>, inkl. Erinnerung und Bestätigung.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Buchungs-Widget auf Ihrer Website, in E-Mails oder per Link',
        'Nur wirklich freie Zeiten werden angezeigt',
        'Bestätigung und Erinnerung laufen automatisch',
        'Umbuchungen und Stornos sind per Link möglich',
      ],
    },
    blocks: [
      {
        title: 'Was das System konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Abfrage von Leistung, Dauer, Präferenzen',
          'Anzeige freier Zeitfenster in Echtzeit',
          'Berücksichtigung von Puffer-, Fahr- und Vorbereitungszeiten',
          'Automatische Kalendereinträge in Google / Outlook',
          'Erinnerungen per E-Mail, SMS oder WhatsApp',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Klare Kalenderansicht statt Post-Its:',
        bullets: [
          'Termin mit Leistung + Dauer',
          'Kontaktdaten des Kunden',
          'Notizen zur Anfrage',
          'Status (gebucht / abgesagt / verschoben)',
        ],
      },
    ],
    tagline: '➡️ Weniger Telefonate, weniger No-Shows, mehr Tagesplanung.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist automatisierte Terminbuchung?',
    lead: 'Ein <strong>digitales Buchungssystem</strong>, das freie Termine in Echtzeit anzeigt, Kunden selbstständig buchen lässt und die Termine direkt in Ihren Kalender schreibt – inklusive Bestätigung und Erinnerung.',
    examples: [
      'Online-Kalender auf Ihrer Website',
      'Buchungslink in Signatur, SMS oder WhatsApp',
      'Widget auf einer Landingpage',
    ],
    blocks: [
      {
        title: 'Für wen sich das lohnt',
        body: 'Für Friseure, Praxen, Coaches, Beratungen, Werkstätten, Beauty-Studios, Reinigungsdienste – überall dort, wo Termine das Herzstück sind.',
      },
      {
        title: 'Was das System nicht ist',
        body: '<strong>Wichtig:</strong> Es ersetzt keine individuelle Beratung – aber es sorgt dafür, dass Ihr Kalender keine Chaos-Zone mehr ist.',
      },
    ],
  },

  features: {
    headline: 'Was die Terminbuchung <span class="text-primary-500">leistet</span>',
    primaryList: [
      '24/7 Online-Buchung ohne Anruf',
      'Live-Abgleich mit Ihrem Kalender',
      'Automatische Bestätigungen',
      'Erinnerungen per E-Mail, SMS, WhatsApp',
      'Stornos und Umbuchungen per Link',
      'Zahlung / Anzahlung auf Wunsch',
    ],
    note: '<strong>Wichtig:</strong> Das Buchungssystem wird <strong>individuell auf Ihre Leistungen, Regeln und Zeiten angepasst</strong>.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das System:',
        bullets: [
          'Mehrere Mitarbeiter / Ressourcen',
          'Mehrere Standorte',
          'Regelwerke für Vorlauf, Puffer, Dauer',
          'Integration in Ihre Website',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'Google Calendar, Outlook, iCloud',
          'Stripe / PayPal für Anzahlungen',
          'CRM und Kundenkonten',
          'SMS-Provider & WhatsApp Business API',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist automatisierte Terminbuchung?',
      headingLevel: 'h2',
      paragraphs: [
        'Automatisierte Terminbuchung bedeutet, dass Ihre Kunden Termine selbstständig über eine Online-Oberfläche buchen können – ohne Anruf, ohne E-Mail-Ping-Pong, ohne Wartezeit. Das System zeigt nur verfügbare Zeitfenster an, synchronisiert sich mit Ihrem Kalender und verschickt Bestätigungen sowie Erinnerungen vollautomatisch.',
        'Im Kern ersetzt die Automatisierung den manuellen Vorgang: Kunde ruft an, Mitarbeiter prüft den Kalender, schlägt Zeiten vor, notiert den Termin, schickt eine Bestätigung. Stattdessen passiert das alles in Sekunden – und zwar 24 Stunden am Tag, 7 Tage die Woche.',
        'Für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig und Umgebung</a>, die mit kleinem Team viele Kundentermine koordinieren, ist das ein echter Produktivitätsgewinn.',
      ],
    },
    {
      heading: 'Typische Probleme ohne automatisierte Terminbuchung',
      headingLevel: 'h2',
      paragraphs: [
        'In vielen kleinen und mittelständischen Unternehmen läuft die Terminplanung noch komplett manuell. Das Ergebnis: Doppelbuchungen, vergessene Termine und Kunden, die beim dritten Versuch aufgeben, einen passenden Termin zu finden.',
      ],
      bullets: [
        'Kunden erreichen Sie nur während der Geschäftszeiten – abends und am Wochenende gehen potenzielle Buchungen verloren',
        'Telefonische Terminabsprachen binden Mitarbeiter für durchschnittlich 5–8 Minuten pro Vorgang',
        'Doppelbuchungen entstehen, weil mehrere Personen parallel in denselben Kalender eintragen',
        'Terminerinnerungen werden vergessen – No-Show-Raten von 15–30 % sind keine Seltenheit',
        'Änderungen und Absagen erzeugen erneuten Koordinationsaufwand',
        'Es fehlt ein Überblick, wie ausgelastet das Team wirklich ist',
      ],
    },
    {
      heading: 'Manuell vs. automatisiert: Der direkte Vergleich',
      headingLevel: 'h2',
      paragraphs: [
        'Die folgende Tabelle zeigt, wie sich manuelle Terminplanung und ein automatisiertes Buchungssystem in der Praxis unterscheiden:',
      ],
      table: {
        headers: ['Kriterium', 'Manuelle Buchung', 'Automatisierte Buchung'],
        rows: [
          ['Erreichbarkeit', 'Nur während Geschäftszeiten', '24/7 online buchbar'],
          ['Zeitaufwand pro Termin', '5–8 Minuten (Telefon/E-Mail)', 'Unter 1 Minute (Self-Service)'],
          ['Doppelbuchungen', 'Häufig bei parallelem Zugriff', 'Technisch ausgeschlossen'],
          ['Terminerinnerungen', 'Manuell oder gar nicht', 'Automatisch per E-Mail und SMS'],
          ['No-Show-Rate', '15–30 %', '5–10 % dank Erinnerungen'],
          ['Kalender-Synchronisation', 'Manueller Abgleich nötig', 'Echtzeit-Sync mit Google, Outlook & Co.'],
          ['Umbuchungen/Absagen', 'Erneuter Telefonat-Aufwand', 'Kunde ändert selbst online'],
          ['Auswertung & Statistik', 'Kaum möglich', 'Buchungsdaten sofort auswertbar'],
        ],
      },
    },
    {
      heading: 'So funktioniert die automatisierte Terminbuchung',
      headingLevel: 'h2',
      paragraphs: [
        'Das Prinzip ist einfach: Ihre Kunden sehen online die verfügbaren Zeitfenster, wählen einen Termin und buchen ihn direkt. Im Hintergrund passiert deutlich mehr – damit alles reibungslos läuft.',
      ],
      bullets: [
        '<strong>Verfügbarkeit in Echtzeit:</strong> Das Buchungssystem liest Ihren Kalender aus und zeigt nur freie Slots an',
        '<strong>Buchungsformular:</strong> Der Kunde wählt Datum, Uhrzeit und Leistung, gibt seine Kontaktdaten ein und bestätigt',
        '<strong>Sofortige Bestätigung:</strong> Kunde und Sie erhalten eine automatische Bestätigungs-E-Mail mit allen Details',
        '<strong>Kalendereintrag:</strong> Der Termin wird automatisch in Ihrem Kalender eingetragen – Google Calendar, Outlook oder Apple',
        '<strong>Erinnerungen:</strong> 24 Stunden und 1 Stunde vor dem Termin erhält der Kunde eine Erinnerung per E-Mail oder SMS',
        '<strong>Umbuchung & Absage:</strong> Über einen Link in der Bestätigung kann der Kunde den Termin selbstständig verschieben oder absagen',
      ],
    },
    {
      heading: 'Kalender-Integrationen und technische Anbindung',
      headingLevel: 'h3',
      paragraphs: [
        'Ein Buchungssystem ist nur so gut wie seine Integration in Ihren Arbeitsalltag. Deshalb verbinden wir Ihr System mit den Kalendern und Tools, die Sie bereits nutzen. Google Calendar, Microsoft Outlook, Apple iCal – die gängigen Plattformen werden per Zwei-Wege-Sync angebunden, sodass Änderungen in Echtzeit übertragen werden.',
        'Darüber hinaus lässt sich die Terminbuchung mit weiteren Systemen verbinden: Ihr <a href="/ki-chatbots" class="text-primary-400 hover:underline">KI-Chatbot auf der Website</a> kann Kunden direkt zur Buchung führen, ein CRM-System dokumentiert den Termin als Aktivität beim Kontakt, und Ihr Rechnungstool erstellt nach dem Termin automatisch die Rechnung.',
        'Auch Videokonferenz-Tools wie Zoom oder Google Meet lassen sich anbinden – bei Online-Terminen wird der Meeting-Link automatisch generiert und in die Bestätigung eingefügt.',
      ],
    },
    {
      heading: 'Automatische Erinnerungen und No-Show-Reduktion',
      headingLevel: 'h2',
      paragraphs: [
        'Vergessene Termine kosten Sie doppelt: Sie verlieren die eingeplante Zeit und den Umsatz. Automatische Erinnerungen sind einer der wirkungsvollsten Hebel gegen No-Shows.',
        'Wir richten ein mehrstufiges Erinnerungssystem ein: Eine E-Mail am Vortag, eine SMS oder Push-Nachricht eine Stunde vor dem Termin. Der Kunde kann den Termin per Klick bestätigen, verschieben oder absagen. So wird der Zeitslot rechtzeitig frei und kann neu vergeben werden.',
        'In der Praxis reduzieren automatische Erinnerungen die No-Show-Rate um 50–70 %. Bei einem Unternehmen mit 20 Terminen pro Woche und einer bisherigen Ausfallquote von 20 % bedeutet das: Statt 4 ausgefallener Termine pro Woche sind es nur noch 1–2.',
      ],
    },
    {
      heading: 'Terminbuchung für verschiedene Branchen',
      headingLevel: 'h2',
      paragraphs: [
        'Automatisierte Terminbuchung lohnt sich für jedes Unternehmen, das regelmäßig Kundentermine koordiniert. Die konkreten Anforderungen unterscheiden sich jedoch je nach Branche:',
      ],
      bullets: [
        '<strong>Handwerksbetriebe:</strong> Kunden buchen Besichtigungs- oder Beratungstermine online, Ihr Außendienst sieht die Termine direkt im Kalender',
        '<strong>Praxen & Therapeuten:</strong> Patienten buchen Behandlungstermine selbst, inklusive Auswahl der Leistung und des Therapeuten',
        '<strong>Friseursalons & Kosmetikstudios:</strong> Buchung mit Mitarbeiter- und Dienstleistungsauswahl, automatische Lückenoptimierung',
        '<strong>Berater & Coaches:</strong> Erstgespräche und Folgetermine online buchbar, mit Zoom-Link-Generierung',
        '<strong>Fahrschulen:</strong> Theorieprüfungstermine und Fahrstunden per Kalender buchbar, mit Zuordnung zum Fahrlehrer',
        '<strong>Immobilienmakler:</strong> Besichtigungstermine für Objekte in <a href="/leistungsgebiete/zwenkau" class="text-primary-400 hover:underline">Zwenkau und der Region</a> direkt über die Exposé-Seite buchbar',
      ],
    },
    {
      heading: 'Unser Einrichtungsprozess: In 4 Schritten zum Buchungssystem',
      headingLevel: 'h2',
      paragraphs: [
        'Wir setzen Ihre automatisierte Terminbuchung strukturiert und transparent um:',
      ],
      bullets: [
        '<strong>1. Bestandsaufnahme:</strong> Wir analysieren Ihren aktuellen Terminprozess – welche Terminarten gibt es, wer ist beteiligt, welche Kalender werden genutzt?',
        '<strong>2. Konzeption:</strong> Gemeinsam definieren wir Buchungsregeln: Vorlaufzeit, Pufferzeiten zwischen Terminen, maximale Buchungen pro Tag, Stornierungsfristen',
        '<strong>3. Umsetzung:</strong> Wir richten das Buchungssystem ein, integrieren Ihre Kalender, gestalten das Buchungsformular und konfigurieren die Erinnerungen',
        '<strong>4. Feinschliff & Schulung:</strong> Nach dem Start optimieren wir anhand der ersten Buchungen und zeigen Ihrem Team, wie alles funktioniert',
      ],
    },
    {
      heading: 'Messbare Vorteile der automatisierten Terminbuchung',
      headingLevel: 'h2',
      paragraphs: [
        'Die Ergebnisse, die unsere Kunden nach der Einführung einer automatisierten Terminbuchung sehen, sind konkret und messbar. Weniger Aufwand, weniger Ausfälle, zufriedenere Kunden.',
      ],
      bullets: [
        'Zeitersparnis von 5–10 Stunden pro Woche durch Wegfall telefonischer Terminabsprachen',
        'No-Show-Rate sinkt typischerweise von 20–30 % auf 5–10 %',
        'Buchungen außerhalb der Geschäftszeiten machen 30–40 % aller Termine aus',
        'Kundenzufriedenheit steigt – kein Warten in der Telefonschleife, sofortige Bestätigung',
        'Bessere Planbarkeit durch Echtzeit-Auslastungsübersicht',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein automatisiertes Buchungssystem?',
      a: 'Die Kosten richten sich nach dem Umfang: Wie viele Terminarten, Mitarbeiterkalender und Integrationen benötigt werden. Wir arbeiten mit transparenten Pauschalpreisen und erstellen nach einem kostenlosen Erstgespräch ein individuelles Angebot.',
    },
    {
      q: 'Wie lange dauert die Einrichtung?',
      a: 'Ein typisches Buchungssystem ist in 1–3 Wochen einsatzbereit. Bei einfachen Setups mit einem Kalender und wenigen Terminarten kann es auch in wenigen Tagen stehen. Komplexere Projekte mit mehreren Standorten oder Mitarbeitern brauchen entsprechend mehr Zeit.',
    },
    {
      q: 'Können meine Kunden auch telefonisch Termine buchen?',
      a: 'Ja. Die Online-Buchung ersetzt das Telefon nicht, sie ergänzt es. Wenn Sie möchten, können Sie oder Ihr Team weiterhin telefonisch Termine eintragen – sie erscheinen im selben Kalender. Zusätzlich kann ein KI-Telefonassistent Buchungen entgegennehmen und automatisch ins System eintragen.',
    },
    {
      q: 'Funktioniert das mit meinem bestehenden Kalender?',
      a: 'In der Regel ja. Wir unterstützen Google Calendar, Microsoft Outlook, Apple iCal und viele weitere Kalender über die CalDAV-Schnittstelle. Der Abgleich erfolgt in Echtzeit per Zwei-Wege-Sync.',
    },
    {
      q: 'Was passiert bei Doppelbuchungen?',
      a: 'Doppelbuchungen sind technisch ausgeschlossen. Das System prüft bei jeder Buchung in Echtzeit, ob der Slot noch verfügbar ist. Wird ein Termin gerade von jemand anderem gebucht, wird der Slot sofort als belegt markiert.',
    },
    {
      q: 'Wie werden Absagen und Umbuchungen gehandhabt?',
      a: 'Kunden erhalten in der Bestätigungs-E-Mail einen Link, über den sie den Termin selbstständig verschieben oder absagen können. Sie legen fest, bis wann Änderungen möglich sind – zum Beispiel bis 24 Stunden vor dem Termin.',
    },
    {
      q: 'Ist das System DSGVO-konform?',
      a: 'Ja. Alle Daten werden DSGVO-konform auf europäischen Servern verarbeitet. Wir implementieren die nötigen Einwilligungsmechanismen, Datenschutzhinweise und Löschfristen. Details besprechen wir im Erstgespräch.',
    },
    {
      q: 'Kann ich verschiedene Terminarten mit unterschiedlichen Dauern anlegen?',
      a: 'Ja. Sie können beliebig viele Terminarten definieren – zum Beispiel Erstberatung (60 Min.), Folgetermin (30 Min.) oder Kurzcheck (15 Min.). Jede Terminart kann eigene Pufferzeiten, Verfügbarkeiten und Erinnerungen haben.',
    },
  ],

  ctaText: 'Bereit, Ihre Terminplanung auf Autopilot zu setzen?',

  parentServiceLink: {
    text: 'Automatisierungen im Überblick',
    href: '/automatisierungen',
  },
  siblingSubpageLinks: [
    { text: 'Leadgenerierung automatisieren', href: '/automatisierungen/leadgenerierung' },
    { text: 'Angebotsprozesse automatisieren', href: '/automatisierungen/angebotsprozesse' },
    { text: 'E-Mail Automatisierung', href: '/automatisierungen/email-automatisierung' },
  ],
  crossServiceLinks: [
    { text: 'KI-Telefonassistenten', href: '/telefonassistenten' },
    { text: 'Webseiten im Mietmodell', href: '/webseite' },
  ],
  areaLinks: buildTier1AreaLinks('Terminbuchung'),
};

export default content;
