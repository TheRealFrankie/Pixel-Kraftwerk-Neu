import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'WhatsApp Chatbot für Unternehmen – Groitzsch & Leipzig – Pixel Kraftwerk',
  metaDescription:
    'WhatsApp Chatbot für automatisierte Kundenbetreuung, Terminbuchung und Leaderfassung. Pixel Kraftwerk richtet Ihren WhatsApp-Bot ein – DSGVO-konform.',
  primaryKeyword: 'WhatsApp Chatbot',
  secondaryKeywords: [
    'WhatsApp Business API',
    'WhatsApp Automatisierung',
    'Messenger Bot',
    'WhatsApp Kundenservice',
    'WhatsApp Terminbuchung',
    'Chatbot für Unternehmen',
  ],
  imageAltTexts: [
    'WhatsApp Chatbot beantwortet Kundenanfrage automatisch auf dem Smartphone',
    'Dashboard mit WhatsApp-Chat-Verläufen und automatisierten Antworten',
    'Lokales Unternehmen in Leipzig nutzt WhatsApp Chatbot für Terminvereinbarungen',
  ],

  h1: 'WhatsApp Chatbot für Ihr Unternehmen',
  subheadline: 'Antworten Sie dort, wo Ihre Kunden ohnehin schreiben',
  intro:
    'Ihre Kunden sind längst auf WhatsApp – die Frage ist nur, ob Sie dort auch erreichbar sind. Ein WhatsApp Chatbot beantwortet Anfragen in Sekunden, nimmt Terminwünsche entgegen und erfasst neue Leads, während Sie sich auf Ihr Kerngeschäft konzentrieren. Pixel Kraftwerk aus Groitzsch entwickelt WhatsApp-Chatbots, die zu Ihrem Unternehmen passen – von der Ersteinrichtung über die <a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierung Ihrer Prozesse</a> bis zur laufenden Optimierung.',
  heroCtaText: 'WhatsApp-Bot anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">WhatsApp-Anfragen überfordern Ihr Team</span>',
    lead: 'Kunden schreiben auf WhatsApp – erwarten aber eine Antwort wie live im Laden:',
    bullets: [
      'Nachrichten kommen zu Unzeiten (abends, am Wochenende, mitten im Termin)',
      'Standardfragen zu Öffnungszeiten, Preisen und Verfügbarkeit wiederholen sich ständig',
      'Ein privates Smartphone für Geschäfts-Chats wird schnell unübersichtlich',
      'Ohne Business-API fehlen saubere Weiterleitungen und Automatisierungen',
    ],
    tagline: 'Das Ergebnis: viele Nachrichten, wenig Struktur – und verlorene Aufträge.',
    details: [
      {
        title: 'Warum WhatsApp-Kommunikation oft scheitert',
        body: 'WhatsApp ist schnell – Kunden erwarten Antworten in Minuten, nicht Stunden. Wer manuell antwortet, kann nicht mithalten, sobald das Volumen steigt.',
        bullets: [
          'Nachrichten in mehreren Chats gleichzeitig',
          'Keine Übergabemöglichkeit zwischen Mitarbeitern',
          'Keine Dokumentation oder Wiedervorlage',
          'Kein Anschluss an CRM oder Kalender',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jede Nachricht, die nicht zeitnah beantwortet wird, ist ein potenziell verlorener Auftrag. Gleichzeitig bindet jede Standardfrage Zeit, die Ihr Team für echte Kundenarbeit braucht.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein WhatsApp Chatbot, der mitdenkt</span>',
    lead: 'Der WhatsApp Chatbot beantwortet Anfragen sofort – <strong>24/7, über die offizielle WhatsApp Business API</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Neue Chats werden sofort automatisch begrüßt',
        'Standardfragen werden markenkonform beantwortet',
        'Terminwünsche landen strukturiert in Ihrem Kalender',
        'Relevante Leads werden sauber an Ihr Team übergeben',
      ],
    },
    blocks: [
      {
        title: 'Was der Bot konkret übernimmt',
        intro: 'Je nach Unternehmen konfigurieren wir den Bot so, dass er:',
        bullets: [
          'Begrüßt, qualifiziert und zum passenden Thema führt',
          'Standardanliegen (Preise, Öffnungszeiten, Einzugsgebiet) direkt beantwortet',
          'Terminwünsche abfragt und mit Ihrem Kalender abgleicht',
          'Bilder, Standorte und Dateien entgegennimmt',
          'Auf Wunsch an einen menschlichen Mitarbeiter übergibt',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Statt „Chat-Verlauf irgendwo" bekommt Ihr Team strukturierte Infos:',
        bullets: [
          'Name + Telefonnummer',
          'Anliegen in Klartext',
          'Wunschtermin / Dringlichkeit',
          'Bisheriger Chat-Verlauf als Kontext',
        ],
      },
    ],
    tagline: '➡️ Schnelle Antworten, weniger Chaos, mehr Anfragen – auf dem Kanal, den Ihre Kunden ohnehin nutzen.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein WhatsApp Chatbot?',
    lead: 'Ein WhatsApp Chatbot ist eine automatisierte Geschäfts-Präsenz auf WhatsApp, die auf Basis der <strong>offiziellen WhatsApp Business API</strong> Kundennachrichten entgegennimmt, versteht und beantwortet – DSGVO-konform.',
    examples: [
      '„Haben Sie heute noch einen Termin frei?"',
      '„Was kostet eine Reparatur bei Ihnen ungefähr?"',
      '„Ich schicke Ihnen ein Foto vom Schaden."',
    ],
    blocks: [
      {
        title: 'Für wen sich ein WhatsApp Chatbot lohnt',
        body: 'Besonders sinnvoll für lokale Dienstleister, Handwerk, Einzelhandel und Praxen – überall dort, wo Kunden lieber kurz schreiben als anrufen.',
      },
      {
        title: 'Was der Bot nicht ist',
        body: '<strong>Wichtig:</strong> Der WhatsApp-Bot ersetzt kein Fachpersonal. Er entlastet Ihr Team bei Routine und sorgt für saubere Übergaben bei allem, was individuelle Betreuung braucht.',
      },
    ],
  },

  features: {
    headline: 'Was der WhatsApp Chatbot <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Automatische Begrüßung neuer Chats',
      'Beantwortung häufiger Fragen mit KI',
      'Vorqualifizierung von Anfragen',
      'Terminbuchung mit Kalenderabgleich',
      'Weiterleitung an Mitarbeiter bei Bedarf',
      'Entgegennahme von Bildern, Standorten, Dateien',
      'DSGVO-konform über die offizielle WhatsApp Business API',
    ],
    note: '<strong>Wichtig:</strong> Der Bot läuft über die <strong>offizielle WhatsApp Business API</strong> – keine grauen Lösungen, keine Sperr-Risiken.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup kann der Bot:',
        bullets: [
          'Proaktive Nachrichten (Terminerinnerung, Statusupdate) versenden',
          'Schnellantworten und Buttons nutzen',
          'Anliegen klassifizieren (Support, Angebot, Termin)',
          'Bei Unsicherheit sauber an Menschen übergeben',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbindet der Bot sich mit:',
        bullets: [
          'Ihrem CRM-System (z. B. HubSpot, Pipedrive)',
          'Ihrem Kalender (Google, Microsoft 365)',
          'Tools wie Zapier, Make oder n8n',
          'Ihrer bestehenden Website und FAQ-Datenbank',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum WhatsApp der wichtigste Kundenkanal wird',
      headingLevel: 'h2',
      paragraphs: [
        'Über 60 Millionen Menschen in Deutschland nutzen WhatsApp täglich. Kein anderer Kanal hat eine vergleichbare Öffnungsrate: WhatsApp-Nachrichten werden zu über 90 Prozent innerhalb der ersten drei Minuten gelesen. Im Vergleich dazu liegen E-Mails bei 20 bis 30 Prozent – oft mit stundenlanger Verzögerung.',
        'Für lokale Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung bedeutet das: Wer über WhatsApp erreichbar ist, erreicht seine Kunden dort, wo sie ohnehin kommunizieren. Kein App-Download, kein Login, kein Medienbruch. Der Kunde schreibt einfach eine Nachricht – und bekommt sofort eine Antwort.',
        'Genau hier setzt ein WhatsApp Chatbot an. Er nutzt die WhatsApp Business API, um eingehende Nachrichten automatisch zu verarbeiten, zu beantworten und bei Bedarf an Ihr Team weiterzuleiten.',
      ],
    },
    {
      heading: 'Was ist ein WhatsApp Chatbot – und was kann er?',
      headingLevel: 'h2',
      paragraphs: [
        'Ein WhatsApp Chatbot ist ein KI-gestütztes System, das über die offizielle WhatsApp Business API mit Ihren Kunden kommuniziert. Anders als die kostenlose WhatsApp Business App bietet die API-Lösung echte Automatisierung: mehrere Mitarbeiter können gleichzeitig arbeiten, Template Messages werden vorgenehmigt versendet, und der Bot übernimmt Standardaufgaben rund um die Uhr.',
        'In der Praxis heißt das: Ihr Chatbot beantwortet häufige Fragen zu Öffnungszeiten, Preisen oder Verfügbarkeit. Er nimmt Terminwünsche entgegen und bucht sie direkt in Ihren Kalender. Er erfasst Kontaktdaten neuer Interessenten und legt sie in Ihrem <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-System</a> an. Und wenn eine Anfrage zu komplex für den Bot wird, übergibt er nahtlos an einen Mitarbeiter – mit dem gesamten Gesprächsverlauf.',
      ],
    },
    {
      heading: 'Manuell vs. automatisiert: Der Unterschied im Alltag',
      headingLevel: 'h2',
      paragraphs: [
        'Viele Unternehmen beantworten WhatsApp-Nachrichten noch manuell – oft mit deutlichen Engpässen. Die folgende Tabelle zeigt, was sich mit einem Chatbot konkret verändert:',
      ],
      table: {
        headers: ['Aufgabe', 'Manuell per WhatsApp', 'Mit WhatsApp Chatbot'],
        rows: [
          [
            'Reaktionszeit auf Anfragen',
            '30 Min. bis mehrere Stunden',
            'Unter 5 Sekunden – rund um die Uhr',
          ],
          [
            'Häufige Fragen beantworten',
            'Jede Nachricht einzeln tippen',
            'Automatische Antwort aus Wissensdatenbank',
          ],
          [
            'Terminvereinbarung',
            'Hin- und Herschreiben über freie Zeiten',
            'Kalender-Integration mit direkter Buchung',
          ],
          [
            'Lead-Erfassung',
            'Kontaktdaten manuell in Tabelle eintragen',
            'Automatische Erfassung im CRM',
          ],
          [
            'Nachfass-Nachrichten',
            'Erinnerung vergessen oder zu spät',
            'Template Messages zum geplanten Zeitpunkt',
          ],
          [
            'Verfügbarkeit',
            'Nur während Geschäftszeiten',
            '24/7 – auch an Wochenenden und Feiertagen',
          ],
          [
            'Skalierbarkeit',
            'Begrenzt durch Teamgröße',
            'Hunderte Gespräche gleichzeitig möglich',
          ],
        ],
      },
    },
    {
      heading: 'WhatsApp Business API: Die technische Grundlage',
      headingLevel: 'h2',
      paragraphs: [
        'Die WhatsApp Business API ist die offizielle Schnittstelle von Meta für professionelle Kommunikation. Im Gegensatz zur kostenlosen WhatsApp Business App erlaubt die API den Einsatz von Chatbots, die Integration mit externen Systemen und den Versand von Template Messages – also vorgenehmigten Nachrichtenvorlagen für Bestätigungen, Erinnerungen oder Angebote.',
        'Pixel Kraftwerk übernimmt den gesamten Einrichtungsprozess: von der Verifizierung Ihres Unternehmens bei Meta über die Konfiguration der API bis zur Anbindung an Ihre bestehenden Systeme. Sie müssen sich nicht mit technischen Details beschäftigen – wir sorgen dafür, dass alles reibungslos läuft.',
      ],
      bullets: [
        '<strong>Verifiziertes Unternehmensprofil:</strong> Grüner Haken und vertrauenswürdiger Absendername',
        '<strong>Template Messages:</strong> Vorgenehmte Nachrichten für Bestätigungen, Erinnerungen und Updates',
        '<strong>Multi-Agent-Fähigkeit:</strong> Mehrere Teammitglieder können parallel auf Chats zugreifen',
        '<strong>Webhook-Integration:</strong> Eingehende Nachrichten lösen automatisch Workflows in Ihren Systemen aus',
      ],
    },
    {
      heading: 'Anwendungsfälle: So nutzen Unternehmen den WhatsApp Chatbot',
      headingLevel: 'h2',
      paragraphs: [
        'Ein WhatsApp Chatbot ist kein starres System mit drei vordefinierten Antworten. Je nach Branche und Bedarf setzen wir unterschiedliche Schwerpunkte:',
      ],
      bullets: [
        '<strong>Kundenservice:</strong> Automatische Antworten auf häufige Fragen zu Öffnungszeiten, Preisen, Standort und Ablauf',
        '<strong>Terminbuchung:</strong> Kunden wählen Datum und Uhrzeit direkt im Chat – der Bot prüft Verfügbarkeit und bestätigt',
        '<strong>Leaderfassung:</strong> Neue Interessenten werden im Gespräch qualifiziert und mit allen relevanten Daten im CRM angelegt',
        '<strong>Bestellstatus:</strong> Kunden fragen den aktuellen Status ihrer Bestellung per Nachricht ab',
        '<strong>Angebotserstellung:</strong> Der Bot erfasst die wesentlichen Angaben und erstellt ein Vorab-Angebot oder leitet an den Vertrieb weiter',
        '<strong>Erinnerungen:</strong> Automatische Template Messages vor Terminen, bei offenen Angeboten oder nach dem Kauf',
      ],
    },
    {
      heading: 'DSGVO und Datenschutz: WhatsApp Chatbot rechtskonform betreiben',
      headingLevel: 'h2',
      paragraphs: [
        'Datenschutz ist bei WhatsApp ein berechtigtes Thema – und eines, das wir ernst nehmen. Die WhatsApp Business API unterscheidet sich grundlegend von der privaten WhatsApp-Nutzung: Nachrichten werden über offizielle Meta-Server verarbeitet, die Verarbeitung erfolgt auf Basis der DSGVO, und die Einwilligung des Kunden wird dokumentiert.',
        'Wir setzen auf einen Auftragsverarbeitungsvertrag (AVV) mit dem API-Anbieter, verschlüsselte Datenübertragung und ein klares Opt-in-Verfahren. Kontaktdaten werden nur in Ihren eigenen Systemen gespeichert – nicht auf privaten Geräten. So erfüllen Sie die Anforderungen der DSGVO, ohne auf den wichtigsten Kundenkanal verzichten zu müssen.',
        'Für Unternehmen in <a href="/leistungsgebiete/halle-saale" class="text-primary-400 hover:underline">Halle</a> und der Region beraten wir zusätzlich zur technischen Einrichtung auch zu den organisatorischen Maßnahmen, die für einen DSGVO-konformen Betrieb nötig sind.',
      ],
    },
    {
      heading: 'Integration mit CRM und bestehenden Workflows',
      headingLevel: 'h2',
      paragraphs: [
        'Ein WhatsApp Chatbot entfaltet seinen vollen Nutzen erst, wenn er mit Ihren bestehenden Systemen verbunden ist. Wir integrieren den Bot mit Ihrem <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-System</a>, Ihrem Kalender, Ihrem E-Mail-Tool und Ihren <a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungen</a>.',
        'In der Praxis sieht das so aus: Ein Kunde schreibt per WhatsApp, der Bot qualifiziert die Anfrage, erstellt einen Kontakt im CRM, bucht bei Bedarf einen Termin und informiert den zuständigen Mitarbeiter per E-Mail oder Slack. Alles in einem durchgängigen Prozess, ohne dass jemand manuell eingreifen muss.',
        'Dabei arbeiten wir mit den Tools, die Sie bereits nutzen – ob HubSpot, Pipedrive, Google Calendar, Microsoft 365 oder spezialisierte Branchensoftware. Falls Sie noch kein CRM einsetzen, unterstützen wir Sie bei der Auswahl und Einrichtung.',
      ],
    },
    {
      heading: 'Vorteile für lokale Unternehmen in Leipzig und Umgebung',
      headingLevel: 'h2',
      paragraphs: [
        'Gerade für regionale Unternehmen ist ein WhatsApp Chatbot besonders wirkungsvoll. Ihre Kunden bevorzugen schnelle, unkomplizierte Kommunikation – und genau das bietet WhatsApp. Ob Handwerksbetrieb in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, Dienstleister in <a href="/leistungsgebiete/halle-saale" class="text-primary-400 hover:underline">Halle</a> oder Praxis in der Region: Mit einem Chatbot sind Sie erreichbar, ohne dass Ihr Team dauerhaft am Handy hängen muss.',
      ],
      bullets: [
        'Sofortige Erreichbarkeit ohne zusätzliches Personal',
        'Professioneller Auftritt mit verifiziertem Unternehmensprofil',
        'Mehr gebuchte Termine durch reibungslose Vereinbarung im Chat',
        'Weniger verlorene Leads durch automatische Erfassung und Follow-up',
        'Entlastung Ihres Teams bei wiederkehrenden Standardanfragen',
        'Wettbewerbsvorteil gegenüber Unternehmen, die nur per Telefon oder E-Mail erreichbar sind',
      ],
    },
    {
      heading: 'Unser Prozess: Vom Erstgespräch zum laufenden WhatsApp Chatbot',
      headingLevel: 'h2',
      paragraphs: [
        'Wir arbeiten strukturiert und transparent – damit Sie jederzeit wissen, was passiert und wann Ihr Bot live geht:',
      ],
      bullets: [
        '<strong>1. Analyse:</strong> Wir erfassen Ihre Kommunikationskanäle, häufige Kundenanfragen und bestehende Systeme',
        '<strong>2. Konzeption:</strong> Gemeinsam definieren wir Gesprächsflüsse, Antwortlogik und Integrationen',
        '<strong>3. Einrichtung:</strong> WhatsApp Business API, Bot-Konfiguration, Systemanbindung und Template Messages',
        '<strong>4. Testphase:</strong> Interner Test mit Ihrem Team, Feinschliff an Formulierungen und Abläufen',
        '<strong>5. Go-Live & Optimierung:</strong> Der Bot geht live, wir überwachen die Leistung und optimieren regelmäßig',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein WhatsApp Chatbot?',
      a: 'Die Kosten richten sich nach dem Funktionsumfang: Wie viele Gesprächsflüsse benötigen Sie, welche Systeme sollen angebunden werden, und wie komplex ist die Antwortlogik? Nach einem kostenlosen Erstgespräch erstellen wir ein individuelles Angebot mit transparenten Pauschalpreisen.',
    },
    {
      q: 'Brauche ich die WhatsApp Business API oder reicht die kostenlose App?',
      a: 'Für einen automatisierten Chatbot ist die WhatsApp Business API erforderlich. Die kostenlose App erlaubt keine Bot-Integration, kein Multi-Agent-Zugriff und keine Template Messages. Wir übernehmen die komplette Einrichtung der API für Sie.',
    },
    {
      q: 'Ist ein WhatsApp Chatbot DSGVO-konform?',
      a: 'Ja, wenn er korrekt eingerichtet wird. Wir nutzen ausschließlich die offizielle WhatsApp Business API mit Auftragsverarbeitungsvertrag, dokumentiertem Opt-in und verschlüsselter Übertragung. Kontaktdaten werden in Ihren eigenen Systemen gespeichert – nicht auf privaten Geräten.',
    },
    {
      q: 'Kann der Chatbot an mein CRM angebunden werden?',
      a: 'Ja. Wir integrieren den WhatsApp Chatbot mit gängigen CRM-Systemen wie HubSpot, Pipedrive oder Zoho. Leads und Gesprächsverläufe werden automatisch dort angelegt, wo Ihr Team damit arbeitet.',
    },
    {
      q: 'Was passiert, wenn der Bot eine Frage nicht beantworten kann?',
      a: 'Der Bot erkennt, wenn er an seine Grenzen stößt, und übergibt das Gespräch nahtlos an einen Mitarbeiter – inklusive des bisherigen Chatverlaufs. So muss der Kunde sein Anliegen nicht wiederholen.',
    },
    {
      q: 'Wie schnell ist der WhatsApp Chatbot einsatzbereit?',
      a: 'Ein typisches Projekt dauert zwei bis vier Wochen – von der Analyse über die API-Einrichtung bis zum Go-Live. Bei einfacheren Setups kann es auch schneller gehen, komplexere Integrationen brauchen entsprechend mehr Zeit.',
    },
    {
      q: 'Können Kunden auch Termine über WhatsApp buchen?',
      a: 'Ja. Der Bot fragt die gewünschte Leistung, das bevorzugte Datum und die Uhrzeit ab, prüft die Verfügbarkeit in Ihrem Kalender und bestätigt den Termin direkt im Chat. Optional versendet er vorab eine Erinnerung per Template Message.',
    },
    {
      q: 'Funktioniert der Chatbot auch außerhalb der Geschäftszeiten?',
      a: 'Genau dafür ist er gedacht. Der WhatsApp Chatbot ist 24 Stunden am Tag verfügbar – auch nachts, am Wochenende und an Feiertagen. Anfragen, die menschliche Bearbeitung erfordern, werden gesammelt und Ihrem Team zum nächsten Arbeitstag bereitgestellt.',
    },
  ],

  ctaText: 'Bereit, Ihre Kundenkommunikation per WhatsApp zu automatisieren?',

  parentServiceLink: {
    text: 'KI-Chatbots im Überblick',
    href: '/ki-chatbots',
  },
  siblingSubpageLinks: [
    { text: 'Website Chatbot', href: '/ki-chatbots/website-chatbot' },
    { text: 'Instagram Chatbot', href: '/ki-chatbots/instagram-chatbot' },
    { text: 'Facebook Messenger Chatbot', href: '/ki-chatbots/facebook-chatbot' },
    { text: 'Telegram Chatbot', href: '/ki-chatbots/telegram-chatbot' },
    { text: 'FAQ Automatisierung', href: '/ki-chatbots/faq-automatisierung' },
  ],
  crossServiceLinks: [
    { text: 'Automatisierungen für Anfragen & Termine', href: '/automatisierungen' },
    { text: 'CRM-Systeme', href: '/crm-systeme' },
  ],
  areaLinks: buildTier1AreaLinks('WhatsApp Chatbot'),
};

export default content;
