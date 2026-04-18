import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'KI Terminassistent per Telefon – Groitzsch & Leipzig | Pixel Kraftwerk',
  metaDescription:
    'KI Terminassistent für telefonische Terminbuchung: Anrufer buchen Termine direkt im Gespräch, der Kalender wird automatisch aktualisiert. Von Pixel Kraftwerk.',
  primaryKeyword: 'KI Terminassistent Telefon',
  secondaryKeywords: [
    'telefonische Terminbuchung KI',
    'automatische Terminvereinbarung',
    'KI Terminplanung',
    'Telefonassistent Terminbuchung',
    'Kalender-Integration Telefon',
  ],
  imageAltTexts: [
    'KI Terminassistent vereinbart telefonisch einen Termin und aktualisiert den Kalender automatisch',
    'Kalender-Dashboard mit automatisch gebuchten Terminen durch KI-Telefonassistent',
    'Smartphone zeigt Terminbestätigung nach automatischer telefonischer Buchung',
  ],

  h1: 'KI Terminassistent – Telefonische Terminbuchung, die funktioniert',
  subheadline: 'Anrufer buchen ihren Termin direkt im Gespräch',
  intro:
    'Terminvereinbarungen per Telefon kosten Zeit: Hin- und Herfragen nach freien Zeitfenstern, manueller Kalenderabgleich, Bestätigungs-E-Mails. Für viele Unternehmen ist das ein täglicher Zeitfresser. Ein KI Terminassistent übernimmt den gesamten Prozess am Telefon: Der Anrufer nennt seinen Wunschtermin, der Assistent prüft die Verfügbarkeit, bucht den Slot und bestätigt – alles im gleichen Gespräch. Pixel Kraftwerk entwickelt KI-Terminassistenten für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung.',
  heroCtaText: 'Terminassistent anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Terminbuchung am Telefon kostet Nerven</span>',
    lead: 'In vielen Betrieben läuft jede Terminvergabe nach dem gleichen zeitraubenden Schema:',
    bullets: [
      'Anrufer nennt Wunschtermin → Team sucht im Kalender → keiner frei',
      'Zweiter Vorschlag → passt beim Anrufer nicht → dritter Vorschlag …',
      'Endlose Verfügbarkeits-Pingpongs pro Anruf',
      'Doppelbuchungen durch parallele Kanäle (Telefon / Online / Walk-in)',
    ],
    tagline: 'Je voller der Kalender, desto schlimmer wird es – und desto mehr Anrufer legen vorher genervt auf.',
    details: [
      {
        title: 'Warum manuelle Terminvergabe nicht skaliert',
        body: 'Solange Menschen den Kalender bedienen, gilt: Je mehr Termine, desto mehr Chaos. Die Fehlerquote steigt, die Geduld sinkt.',
        bullets: [
          'Kein paralleler Zugriff auf den Kalender',
          'Keine Pufferzeiten, keine Fahrtzeiten, keine Regeln',
          'Keine automatischen Erinnerungen',
          'Kein Umgang mit Absagen oder Verschiebungen',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jede Terminbuchung bindet leicht 3–8 Minuten pro Anruf – und trotzdem landen Anrufer regelmäßig bei der Konkurrenz, weil beim ersten Anlauf „gerade nichts frei" ist.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein KI-Terminassistent am Telefon</span>',
    lead: 'Der Terminassistent übernimmt den gesamten Buchungsprozess – <strong>im laufenden Gespräch, in Echtzeit</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Der Assistent fragt nach Anliegen, Ort und Wunschzeitpunkt',
        'Er prüft live Ihren Kalender mit allen Regeln (Dauer, Puffer, Öffnungszeiten)',
        'Er schlägt passende Slots vor und bestätigt direkt',
        'Er verschickt Bestätigung + Erinnerung automatisch',
      ],
    },
    blocks: [
      {
        title: 'Was der Assistent konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Terminvergabe nach Leistung / Dauer',
          'Berücksichtigung von Räumen, Ressourcen, Teammitgliedern',
          'Umgang mit Wiederholungsterminen',
          'Verschiebungen und Stornos',
          'Bestätigungen per SMS, WhatsApp oder E-Mail',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Saubere Kalender-Einträge statt Zettel-Chaos:',
        bullets: [
          'Name, Nummer, Anliegen',
          'Gebuchter Slot mit allen Parametern',
          'Transkript / Zusammenfassung des Gesprächs',
          'Automatische Erinnerungen',
        ],
      },
    ],
    tagline: '➡️ Ihr Kalender befüllt sich selbst – mit echten, bestätigten Terminen.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein KI Terminassistent?',
    lead: 'Ein KI Terminassistent ist ein <strong>sprachbasierter KI-Assistent</strong>, der telefonische Terminanfragen versteht, Verfügbarkeiten prüft und Buchungen direkt in Ihrem Kalendersystem durchführt – in natürlicher Sprache, ohne Menü-Tastenquälerei.',
    examples: [
      '„Ich hätte gerne einen Termin nächste Woche, möglichst dienstags."',
      '„Geht es auch nachmittags?"',
      '„Bitte mir eine Erinnerung per SMS schicken."',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Praxen, Friseure, Beauty, Handwerk, Werkstätten, Dienstleister – überall dort, wo Termine den Tag strukturieren und Telefonbuchungen zeitraubend sind.',
      },
      {
        title: 'Was der Assistent nicht ist',
        body: '<strong>Wichtig:</strong> Der Assistent ersetzt keine persönliche Beratung. Er übernimmt die Buchung – nicht die Entscheidung, ob eine Leistung sinnvoll ist.',
      },
    ],
  },

  features: {
    headline: 'Was der KI Terminassistent <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Terminvergabe direkt am Telefon',
      'Live-Kalender-Abgleich',
      'Bestätigung per SMS, WhatsApp oder E-Mail',
      'Automatische Erinnerungen',
      'Umbuchung und Stornierung',
      'Berücksichtigung von Puffer- und Fahrtzeiten',
      'Umgang mit Ressourcen & Mitarbeitern',
    ],
    note: '<strong>Wichtig:</strong> Der Assistent ist <strong>vollständig individualisiert</strong> – mit Ihren Leistungen, Öffnungszeiten und Regeln.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet der Assistent:',
        bullets: [
          'Mehrsprachigkeit',
          'Priorisierung (z. B. Notfälle, Stammkunden)',
          'Wiederholungs- und Kettentermine',
          'Statistiken zu Auslastung und Absagen',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'Google Calendar, Microsoft 365',
          'Praxis- / Branchensoftware',
          'CRM und Kundenkonten',
          'SMS- und E-Mail-Provider',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum Terminvereinbarungen per Telefon so viel Zeit kosten',
      headingLevel: 'h2',
      paragraphs: [
        'Eine einzelne Terminvereinbarung per Telefon dauert im Schnitt 3–5 Minuten. Bei 15 Terminen pro Tag sind das bis zu 75 Minuten – nur für die Koordination. Dazu kommen Rückrufe bei Änderungen, No-Shows ohne Erinnerung und doppelt gebuchte Slots.',
        'Für Praxen, Handwerksbetriebe und Dienstleister ist das ein echter Engpass. Das Telefon klingelt, der Mitarbeiter unterbricht seine Arbeit, blättert durch den Kalender, fragt Verfügbarkeiten ab und tippt die Buchung ein. Währenddessen gehen andere Anrufe verloren.',
        'Ein KI Terminassistent eliminiert diese Ineffizienz komplett. Er ist nie beschäftigt, kennt den Kalender in Echtzeit und braucht keine Pause.',
      ],
    },
    {
      heading: 'Wie funktioniert der KI Terminassistent?',
      headingLevel: 'h2',
      paragraphs: [
        'Der Ablauf ist für den Anrufer natürlich und schnell:',
      ],
      bullets: [
        '<strong>1. Anruf entgegennehmen:</strong> Der KI-Assistent begrüßt den Anrufer und erkennt den Terminwunsch',
        '<strong>2. Leistung erfragen:</strong> Falls nötig, fragt der Assistent nach der gewünschten Leistung oder dem Anlass',
        '<strong>3. Verfügbarkeit prüfen:</strong> In Echtzeit wird der Kalender abgefragt und freie Slots angeboten',
        '<strong>4. Termin buchen:</strong> Der Anrufer bestätigt, der Termin wird im Kalender eingetragen',
        '<strong>5. Bestätigung senden:</strong> Eine Bestätigung per SMS oder E-Mail wird automatisch versendet',
        '<strong>6. Erinnerung:</strong> Optional wird 24 Stunden vor dem Termin eine Erinnerung gesendet',
      ],
    },
    {
      heading: 'Manuelle vs. KI-gestützte Terminbuchung im Vergleich',
      headingLevel: 'h2',
      paragraphs: [
        'Der Unterschied wird im Alltag sofort spürbar:',
      ],
      table: {
        headers: ['Aspekt', 'Manuelle Terminbuchung', 'KI Terminassistent'],
        rows: [
          ['Dauer pro Buchung', '3–5 Minuten', 'Unter 90 Sekunden'],
          ['Verfügbarkeit', 'Nur während Geschäftszeiten', '24/7, auch Wochenende und Feiertage'],
          ['Doppelbuchungen', 'Risiko bei manueller Pflege', 'Ausgeschlossen – Echtzeit-Kalenderprüfung'],
          ['Bestätigung', 'Manuell per E-Mail oder Telefon', 'Automatisch per SMS und E-Mail'],
          ['Erinnerungen', 'Oft vergessen', 'Automatisch 24h vorher'],
          ['No-Show-Rate', 'Hoch ohne Erinnerung', 'Deutlich reduziert durch automatische Reminder'],
          ['Gleichzeitige Buchungen', 'Begrenzt durch Personal', 'Unbegrenzt parallel möglich'],
          ['Kalender-Synchronisation', 'Manueller Abgleich', 'Echtzeit-Sync mit Google, Outlook, etc.'],
        ],
      },
    },
    {
      heading: 'Kalender-Integration: Echtzeit-Synchronisation mit Ihren Tools',
      headingLevel: 'h2',
      paragraphs: [
        'Der KI Terminassistent ist direkt mit Ihrem Kalender verbunden. Unterstützt werden alle gängigen Systeme: Google Calendar, Microsoft Outlook/365, Apple Calendar und spezialisierte Branchensoftware.',
        'Die Synchronisation erfolgt in Echtzeit – bidirektional. Wenn ein Mitarbeiter manuell einen Termin einträgt, weiß der Assistent das sofort. Und wenn der Assistent einen Termin bucht, erscheint er sofort im Kalender des zuständigen Mitarbeiters.',
        'Zusätzlich lassen sich Pufferzeiten zwischen Terminen, maximale Termine pro Tag und individuelle Verfügbarkeiten pro Mitarbeiter konfigurieren.',
      ],
    },
    {
      heading: 'Anwendungsfälle: Wer profitiert am meisten?',
      headingLevel: 'h2',
      paragraphs: [
        'Der KI Terminassistent ist überall sinnvoll, wo regelmäßig Termine telefonisch vereinbart werden:',
      ],
      bullets: [
        '<strong>Handwerksbetriebe:</strong> Kunden buchen Vor-Ort-Termine für Aufmaß, Reparatur oder Beratung – der Meister muss nicht vom Gerüst steigen',
        '<strong>Arztpraxen:</strong> Patienten vereinbaren Termine ohne Warteschleife – die Sprechstundenhilfe wird entlastet',
        '<strong>Friseure und Kosmetikstudios:</strong> Buchungen rund um die Uhr, auch wenn der Salon voll ist',
        '<strong>Beratungen und Kanzleien:</strong> Erstgespräch-Termine werden automatisiert koordiniert',
        '<strong>Fahrschulen:</strong> Fahrstunden-Buchungen ohne Telefonchaos',
        '<strong>Dienstleister in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung:</strong> Professionelle Terminkoordination ohne zusätzliches Personal',
      ],
    },
    {
      heading: 'Intelligente Terminlogik: Mehr als nur Slots vergeben',
      headingLevel: 'h2',
      paragraphs: [
        'Unser KI Terminassistent kann mehr als nur den nächsten freien Slot nennen:',
      ],
      bullets: [
        '<strong>Leistungsabhängige Dauer:</strong> Verschiedene Leistungen haben verschiedene Zeitfenster – der Bot berücksichtigt das automatisch',
        '<strong>Mitarbeiter-Zuordnung:</strong> Je nach Leistung wird der richtige Mitarbeiter oder die richtige Ressource gebucht',
        '<strong>Pufferzeiten:</strong> Zwischen Terminen werden automatisch Fahrtzeiten oder Vorbereitungszeiten eingeplant',
        '<strong>Prioritäten:</strong> Dringende Anliegen können bevorzugt behandelt werden',
        '<strong>Warteliste:</strong> Bei ausgebuchten Tagen kann der Anrufer auf die Warteliste gesetzt und bei Absagen automatisch benachrichtigt werden',
      ],
    },
    {
      heading: 'So läuft die Einrichtung',
      headingLevel: 'h2',
      paragraphs: [
        'Wir setzen Ihren KI Terminassistenten strukturiert auf:',
      ],
      bullets: [
        '<strong>1. Analyse:</strong> Welche Terminarten gibt es, welche Kalender werden genutzt, wie sieht die aktuelle Buchungslogik aus?',
        '<strong>2. Konfiguration:</strong> Terminarten, Zeitfenster, Pufferzeiten, Mitarbeiter-Zuordnung und Verfügbarkeiten werden definiert',
        '<strong>3. Integration:</strong> Anbindung an Kalender, <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM</a> und Benachrichtigungssysteme',
        '<strong>4. Test & Go-Live:</strong> Gemeinsamer Test unter realen Bedingungen, dann Freischaltung',
        '<strong>5. Optimierung:</strong> Laufende Analyse der Buchungsquoten und Gesprächsqualität',
      ],
    },
    {
      heading: 'Datenschutz und DSGVO-Konformität',
      headingLevel: 'h3',
      paragraphs: [
        'Bei Terminbuchungen werden personenbezogene Daten verarbeitet – Name, Telefonnummer, ggf. Anliegen. Wir stellen sicher, dass die gesamte Verarbeitung DSGVO-konform erfolgt: Anrufer werden transparent informiert, Daten werden verschlüsselt übertragen und nur in Ihren eigenen Systemen auf europäischen Servern gespeichert.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein KI Terminassistent?',
      a: 'Die Kosten hängen vom Umfang ab: Anzahl der Terminarten, Kalender-Integrationen und gewünschte Features. Wir erstellen nach einem Erstgespräch ein transparentes Angebot.',
    },
    {
      q: 'Kann der Assistent auch Termine verschieben oder absagen?',
      a: 'Ja. Anrufer können bestehende Termine im Gespräch verschieben oder absagen. Der Kalender wird in Echtzeit aktualisiert und frei gewordene Slots stehen sofort zur Verfügung.',
    },
    {
      q: 'Funktioniert das mit meinem bestehenden Kalender?',
      a: 'Ja. Wir unterstützen Google Calendar, Microsoft Outlook/365, Apple Calendar und viele Branchenlösungen. Die Synchronisation erfolgt in Echtzeit.',
    },
    {
      q: 'Was passiert, wenn alle Termine ausgebucht sind?',
      a: 'Der Assistent informiert den Anrufer und bietet Alternativen an: den nächsten freien Termin, eine Warteliste oder die Erfassung einer Rückrufbitte.',
    },
    {
      q: 'Kann ich unterschiedliche Terminarten mit verschiedenen Dauern anlegen?',
      a: 'Ja. Jede Terminart kann eine eigene Dauer, eigene Verfügbarkeiten und eine eigene Mitarbeiter-Zuordnung haben.',
    },
    {
      q: 'Werden Erinnerungen automatisch versendet?',
      a: 'Ja. Der Assistent versendet automatisch Terminbestätigungen und Erinnerungen per SMS oder E-Mail – typischerweise 24 Stunden vor dem Termin.',
    },
    {
      q: 'Ist der KI Terminassistent DSGVO-konform?',
      a: 'Ja. Die Datenverarbeitung erfolgt auf europäischen Servern, Anrufer werden transparent informiert, und Daten werden nur so lange gespeichert, wie es für die Terminverwaltung nötig ist.',
    },
    {
      q: 'Wie schnell ist der Terminassistent einsatzbereit?',
      a: 'Ein typisches Projekt dauert 2–3 Wochen. Bei einfacheren Setups mit einem Kalender und wenigen Terminarten kann es auch schneller gehen.',
    },
  ],

  ctaText: 'Bereit für Terminbuchung, die sich um sich selbst kümmert?',

  parentServiceLink: {
    text: 'Telefonassistenten im Überblick',
    href: '/telefonassistenten',
  },
  siblingSubpageLinks: [
    { text: 'KI Telefonassistent (Inbound)', href: '/telefonassistenten/ki-telefonassistent-inbound' },
    { text: 'KI Anrufsystem', href: '/telefonassistenten/ki-anrufsystem' },
    { text: 'KI Lead-Qualifizierung per Telefon', href: '/telefonassistenten/ki-lead-qualifizierung-telefon' },
    { text: 'Automatische Rückrufsysteme', href: '/telefonassistenten/automatische-rueckrufsysteme' },
    { text: 'KI Telefon-Kundenservice', href: '/telefonassistenten/ki-telefon-kundenservice' },
  ],
  crossServiceLinks: [
    { text: 'Automatisierungen für Terminbuchung', href: '/automatisierungen/terminbuchung' },
    { text: 'KI-Chatbots', href: '/ki-chatbots' },
  ],
  areaLinks: buildTier1AreaLinks('KI Terminassistent'),
};

export default content;
