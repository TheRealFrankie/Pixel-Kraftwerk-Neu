import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'Automatische Rückrufsysteme mit KI – Groitzsch & Leipzig | Pixel Kraftwerk',
  metaDescription:
    'Automatische Rückrufsysteme mit KI: Rückrufwünsche erfassen, priorisieren und zum optimalen Zeitpunkt ausführen. Pixel Kraftwerk richtet Ihr System ein.',
  primaryKeyword: 'Automatische Rückrufsysteme',
  secondaryKeywords: [
    'Rückruf-Automatisierung',
    'Callback-System',
    'automatischer Rückruf',
    'Rückrufmanagement KI',
    'intelligentes Rückrufsystem',
  ],
  imageAltTexts: [
    'Automatisches Rückrufsystem plant Rückruf zum Wunschzeitpunkt des Kunden',
    'Dashboard zeigt Rückruf-Warteschlange mit Prioritäten und geplanten Zeitfenstern',
    'Kunde erhält automatischen Rückruf vom KI-System zum vereinbarten Zeitpunkt',
  ],

  h1: 'Automatische Rückrufsysteme – Kein Kunde wartet vergeblich',
  subheadline: 'Rückrufwünsche werden erfasst, priorisiert und zuverlässig ausgeführt',
  intro:
    'Ein verpasster Anruf muss kein verlorener Kunde sein – vorausgesetzt, der Rückruf kommt zuverlässig und zeitnah. Genau hier scheitern viele Unternehmen: Rückrufzettel gehen unter, Prioritäten sind unklar, und am Ende wird zu spät oder gar nicht zurückgerufen. Ein automatisches Rückrufsystem mit KI ändert das: Es erfasst Rückrufwünsche strukturiert, priorisiert sie intelligent und sorgt dafür, dass Ihr Team zum optimalen Zeitpunkt zurückruft. Pixel Kraftwerk aus Groitzsch entwickelt Rückrufsysteme für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und der Region.',
  heroCtaText: 'Rückrufsystem anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Rückrufe gehen im Alltag unter</span>',
    lead: 'Auch wenn ein Rückruf versprochen wurde – häufig passiert Folgendes:',
    bullets: [
      'Rückrufzettel landet auf dem Stapel und bleibt liegen',
      'Rückruf kommt, wenn der Kunde gerade unterwegs ist',
      'Keiner weiß, wer zuletzt mit dem Kunden gesprochen hat',
      'Priorität und Dringlichkeit sind unklar',
    ],
    tagline: 'Jeder vergessene oder zu spät ausgeführte Rückruf kostet Vertrauen – und oft den Auftrag.',
    details: [
      {
        title: 'Warum manuelle Rückrufverwaltung scheitert',
        body: 'Post-its, E-Mail-Betreffzeilen und „Ich kümmere mich gleich darum" – das sind typische Muster, die im Stress nicht zuverlässig funktionieren.',
        bullets: [
          'Keine zentrale Liste offener Rückrufe',
          'Keine Reminder und Eskalation',
          'Keine Zuordnung zu Teammitgliedern',
          'Keine Auswertung, warum Rückrufe scheitern',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Schon ein einziger vergessener Rückruf pro Tag summiert sich im Jahr zu hunderten verlorenen Kontakten – oft genau die, die zum Abschluss bereit waren.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein KI-gesteuertes Rückrufsystem</span>',
    lead: 'Das System erfasst jeden Rückrufwunsch strukturiert – mit <strong>Thema, Priorität, Wunschzeit und Kontext</strong> – und sorgt dafür, dass er zuverlässig ausgeführt wird.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Rückrufwunsch entsteht automatisch aus Anruf, Chat, Formular oder Messenger',
        'Das System priorisiert nach Ihren Kriterien',
        'Der Rückruf wird für den optimalen Zeitpunkt geplant',
        'Ihr Team ruft vorbereitet und mit vollem Kontext zurück',
      ],
    },
    blocks: [
      {
        title: 'Was das System konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Rückrufwunsch-Aufnahme in verschiedenen Kanälen',
          'Automatische Priorisierung (Hot Lead, Bestandskunde, Notfall)',
          'Terminierung nach Wunschzeitfenster',
          'Reminder an Teammitglieder',
          'Automatischer Outbound-Call durch KI (optional)',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Strukturierte Rückrufaufgaben statt chaotischer Zettel:',
        bullets: [
          'Name + Rufnummer + Anliegen',
          'Gewünschtes Zeitfenster',
          'Kanal / Quelle des Wunsches',
          'Kontext aus früheren Kontakten',
        ],
      },
    ],
    tagline: '➡️ Rückrufe verlieren ihren Stressfaktor – Ihr Team ruft zur richtigen Zeit zurück.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein automatisches Rückrufsystem?',
    lead: 'Ein automatisches Rückrufsystem ist eine <strong>zentrale Schaltstelle für alle Rückrufwünsche</strong>, die per Telefon, Chat oder Formular eingehen – mit Priorisierung, Zeitfenster-Logik und optionalem KI-gesteuerten Rückruf.',
    examples: [
      '„Bitte rufen Sie mich morgen zwischen 14 und 16 Uhr zurück."',
      '„Können Sie am Freitag kurz durchklingeln?"',
      '„Ich bin zwischen Meetings – versuchen Sie es ab 17 Uhr."',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Dienstleister, Handwerk, Praxen, Vertriebsteams und alle Unternehmen, bei denen ein Großteil der Kundenbeziehung telefonisch läuft.',
      },
      {
        title: 'Was das System nicht ist',
        body: '<strong>Wichtig:</strong> Es ersetzt keine persönliche Beziehung – es sorgt nur dafür, dass diese Beziehung nicht an Organisationschaos scheitert.',
      },
    ],
  },

  features: {
    headline: 'Was das Rückrufsystem <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Zentrale Rückrufliste aus allen Kanälen',
      'Intelligente Priorisierung',
      'Wunschzeitfenster + Zeitzonen',
      'Automatische Reminder & Eskalation',
      'Optional: KI-gesteuerter Outbound-Call',
      'Statistiken & Reporting',
    ],
    note: '<strong>Wichtig:</strong> Das System arbeitet <strong>mit Ihrem Telefonie-Setup zusammen</strong> – egal ob Cloud-Anlage, Mobilfunk oder Softphone.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das System:',
        bullets: [
          'Priorisierung nach Leads, Beschwerden, Terminen',
          'Integration mit Kalender & Team',
          'Gesprächsleitfäden für den Rückruf',
          'Callback-Conversion-Tracking',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch ergänzen wir:',
        bullets: [
          'CRM (HubSpot, Pipedrive)',
          'Helpdesk / Ticket-Systeme',
          'Cloud-Telefonanlagen (z. B. 3CX, Placetel)',
          'Messenger & Formulare Ihrer Website',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum Rückrufe so oft scheitern',
      headingLevel: 'h2',
      paragraphs: [
        'Die Idee klingt einfach: Anruf verpasst, später zurückrufen. In der Praxis ist es das größte Leck im Vertriebstrichter vieler Unternehmen. Die Gründe sind immer dieselben:',
        'Ein automatisches Rückrufsystem beseitigt all diese Schwachstellen – und macht aus verpassten Anrufen gewonnene Kunden.',
      ],
      bullets: [
        'Rückrufnotizen auf Zetteln, die auf dem Schreibtisch verschwinden',
        'Keine klare Priorisierung – alle Rückrufe werden gleich behandelt',
        'Zu viel Zeit zwischen Erstanruf und Rückruf – der Kunde hat inzwischen woanders gebucht',
        'Kein System, das nachverfolgt, ob der Rückruf tatsächlich stattgefunden hat',
        'Rückrufe während der Stoßzeiten werden aufgeschoben und dann vergessen',
      ],
    },
    {
      heading: 'Wie funktioniert ein automatisches Rückrufsystem?',
      headingLevel: 'h2',
      paragraphs: [
        'Das System arbeitet in mehreren Schritten, die nahtlos ineinandergreifen:',
      ],
      bullets: [
        '<strong>1. Rückrufwunsch erfassen:</strong> Wenn niemand erreichbar ist, nimmt der KI-Assistent den Anruf entgegen, erfasst Name, Nummer, Anliegen und gewünschten Rückrufzeitpunkt',
        '<strong>2. Priorisierung:</strong> Das System bewertet die Dringlichkeit anhand des Anliegens und ordnet den Rückruf entsprechend ein',
        '<strong>3. Zuweisung:</strong> Der Rückruf wird dem richtigen Mitarbeiter oder Team zugewiesen – basierend auf Zuständigkeit und Verfügbarkeit',
        '<strong>4. Erinnerung:</strong> Der zuständige Mitarbeiter erhält eine Benachrichtigung mit allen relevanten Informationen zum optimalen Zeitpunkt',
        '<strong>5. Nachverfolgung:</strong> Das System überprüft, ob der Rückruf stattgefunden hat. Falls nicht, wird eskaliert',
        '<strong>6. Automatischer Rückruf:</strong> Optional kann das System den Rückruf auch selbst durchführen – der KI-Assistent ruft den Kunden zum Wunschzeitpunkt an',
      ],
    },
    {
      heading: 'Manuelles vs. automatisches Rückrufmanagement',
      headingLevel: 'h2',
      paragraphs: [
        'Der Unterschied im Arbeitsalltag ist erheblich:',
      ],
      table: {
        headers: ['Aspekt', 'Manuelles Rückrufmanagement', 'Automatisches Rückrufsystem'],
        rows: [
          ['Erfassung', 'Zettel, Notizen, Gedächtnis', 'Strukturiert mit allen Daten im CRM'],
          ['Priorisierung', 'Bauchgefühl', 'Automatisch nach definierten Kriterien'],
          ['Zuweisung', 'Wer gerade Zeit hat', 'Automatisch an zuständigen Mitarbeiter'],
          ['Timing', 'Wenn man dran denkt', 'Zum Wunschzeitpunkt des Kunden'],
          ['Nachverfolgung', 'Keine', 'Automatische Überprüfung und Eskalation'],
          ['Ausfallsicherheit', 'Fehleranfällig', 'System vergisst nie'],
          ['Reporting', 'Keines', 'Volle Transparenz über Rückrufquoten und -zeiten'],
        ],
      },
    },
    {
      heading: 'Intelligente Rückruf-Logik: Mehr als nur eine Erinnerung',
      headingLevel: 'h2',
      paragraphs: [
        'Unser Rückrufsystem geht weit über eine einfache Erinnerungsfunktion hinaus:',
      ],
      bullets: [
        '<strong>Wunschzeitpunkt:</strong> Der Anrufer gibt an, wann er am besten erreichbar ist – das System plant entsprechend',
        '<strong>Eskalationslogik:</strong> Wenn ein Rückruf nicht innerhalb eines definierten Zeitfensters erfolgt, wird er automatisch eskaliert',
        '<strong>Wiederholungsversuche:</strong> Bei Nichterreichbarkeit versucht das System es automatisch erneut – zu einem anderen Zeitpunkt',
        '<strong>Kontextübergabe:</strong> Der Mitarbeiter sieht vor dem Rückruf alle relevanten Informationen: Anliegen, Gesprächshistorie, Lead-Score',
        '<strong>Automatischer KI-Rückruf:</strong> Für Standardanliegen kann das System den Rückruf auch selbst durchführen – der KI-Assistent ruft an und bearbeitet das Anliegen',
      ],
    },
    {
      heading: 'Integration mit CRM und bestehenden Systemen',
      headingLevel: 'h2',
      paragraphs: [
        'Rückrufwünsche müssen dort landen, wo Ihr Team arbeitet. Wir integrieren das Rückrufsystem nahtlos in Ihre bestehende Infrastruktur.',
        'Jeder Rückrufwunsch wird automatisch in Ihrem <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-System</a> als Aufgabe angelegt – mit Kontaktdaten, Anliegen, Priorität und geplantem Zeitfenster. Ihre <a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungen</a> greifen nahtlos.',
      ],
      bullets: [
        'CRM-Integration (HubSpot, Pipedrive, Zoho) – Rückrufe als Aufgaben mit allen Details',
        'Kalender-Synchronisation – Rückrufslots werden als Termine eingetragen',
        'Team-Benachrichtigungen per E-Mail, SMS, Slack oder Teams',
        'Reporting-Dashboard – Rückrufquoten, durchschnittliche Rückrufzeit, Erfolgsquoten',
      ],
    },
    {
      heading: 'Für welche Unternehmen eignen sich automatische Rückrufsysteme?',
      headingLevel: 'h2',
      paragraphs: [
        'Überall dort, wo Anrufe verpasst werden und Rückrufe zum Tagesgeschäft gehören:',
      ],
      bullets: [
        'Handwerksbetriebe, deren Team tagsüber auf Baustellen ist und nicht ans Telefon gehen kann',
        'Praxen und Kanzleien mit hohem Anrufaufkommen und begrenzter Telefonkapazität',
        'Dienstleister, die viele After-Hours-Anrufe erhalten',
        'Vertriebsteams, die Rückrufe zuverlässig nachverfolgen müssen',
        'Unternehmen in <a href="/leistungsgebiete/chemnitz" class="text-primary-400 hover:underline">Chemnitz</a> und Leipzig, die professionellen Service bieten wollen, ohne rund um die Uhr erreichbar zu sein',
      ],
    },
    {
      heading: 'Implementierung und Zusammenarbeit',
      headingLevel: 'h2',
      paragraphs: [
        'Wir richten Ihr automatisches Rückrufsystem strukturiert ein:',
      ],
      bullets: [
        '<strong>1. Analyse:</strong> Wie viele Anrufe werden verpasst, wann kommen sie, wie werden Rückrufe aktuell gehandhabt?',
        '<strong>2. Konzept:</strong> Priorisierungslogik, Eskalationsregeln, Zuweisungsmatrix und Integrationen definieren',
        '<strong>3. Aufbau:</strong> Technische Einrichtung, CRM-Anbindung, Benachrichtigungskonfiguration',
        '<strong>4. Test & Go-Live:</strong> Gemeinsamer Test, dann Freischaltung für den Livebetrieb',
        '<strong>5. Optimierung:</strong> Laufende Analyse der Rückrufquoten und Anpassung der Logik',
      ],
    },
    {
      heading: 'Datenschutz und DSGVO-Konformität',
      headingLevel: 'h3',
      paragraphs: [
        'Rückrufwünsche enthalten personenbezogene Daten. Alle unsere Systeme sind DSGVO-konform: Anrufer werden transparent über die Datenerfassung informiert, Daten werden verschlüsselt übertragen und ausschließlich in Ihren eigenen Systemen auf europäischen Servern gespeichert. Klare Löschfristen sorgen dafür, dass erledigte Rückrufwünsche nicht unbegrenzt gespeichert bleiben.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein automatisches Rückrufsystem?',
      a: 'Die Kosten richten sich nach dem Anrufvolumen, der Komplexität der Priorisierungslogik und den gewünschten Integrationen. Wir erstellen nach einem Erstgespräch ein individuelles Angebot.',
    },
    {
      q: 'Kann das System auch selbst Rückrufe tätigen?',
      a: 'Ja. Für Standardanliegen kann der KI-Assistent den Kunden zum Wunschzeitpunkt selbst anrufen und das Anliegen bearbeiten – zum Beispiel Terminbestätigungen oder Informationsauskünfte.',
    },
    {
      q: 'Was passiert, wenn der Kunde beim Rückruf nicht erreichbar ist?',
      a: 'Das System versucht es automatisch erneut – zu einem anderen Zeitpunkt. Optional wird eine SMS gesendet, dass ein Rückrufversuch stattgefunden hat.',
    },
    {
      q: 'Wie wird priorisiert?',
      a: 'Die Priorisierung basiert auf von Ihnen definierten Kriterien: Art des Anliegens, Dringlichkeit, Kundenstatus, Uhrzeit des Erstanrufs und weitere Faktoren.',
    },
    {
      q: 'Kann ich die Eskalationsregeln selbst anpassen?',
      a: 'Ja. Sie definieren, nach wie viel Zeit ein nicht erledigter Rückruf eskaliert wird und an wen die Eskalation geht.',
    },
    {
      q: 'Funktioniert das auch am Wochenende?',
      a: 'Ja. Der KI-Assistent erfasst Rückrufwünsche rund um die Uhr. Die Rückrufe selbst werden zu Ihren Geschäftszeiten geplant – oder per KI auch am Wochenende ausgeführt.',
    },
    {
      q: 'Ist das Rückrufsystem DSGVO-konform?',
      a: 'Ja. Anrufer werden transparent informiert, alle Daten werden auf europäischen Servern gespeichert, und erledigte Rückrufwünsche werden nach definierten Fristen gelöscht.',
    },
    {
      q: 'Wie schnell ist das System einsatzbereit?',
      a: 'Ein typisches Projekt dauert 2–3 Wochen. Bei einfachen Setups ohne komplexe Priorisierung kann es auch schneller gehen.',
    },
  ],

  ctaText: 'Bereit, aus verpassten Anrufen gewonnene Kunden zu machen?',

  parentServiceLink: {
    text: 'Telefonassistenten im Überblick',
    href: '/telefonassistenten',
  },
  siblingSubpageLinks: [
    { text: 'KI Telefonassistent (Inbound)', href: '/telefonassistenten/ki-telefonassistent-inbound' },
    { text: 'KI Anrufsystem', href: '/telefonassistenten/ki-anrufsystem' },
    { text: 'KI Terminassistent', href: '/telefonassistenten/ki-terminassistent' },
    { text: 'KI Lead-Qualifizierung per Telefon', href: '/telefonassistenten/ki-lead-qualifizierung-telefon' },
    { text: 'KI Telefon-Kundenservice', href: '/telefonassistenten/ki-telefon-kundenservice' },
  ],
  crossServiceLinks: [
    { text: 'Automatisierungen für Anfragen & Termine', href: '/automatisierungen' },
    { text: 'KI-Chatbots', href: '/ki-chatbots' },
  ],
  areaLinks: buildTier1AreaLinks('Rückrufsysteme'),
};

export default content;
