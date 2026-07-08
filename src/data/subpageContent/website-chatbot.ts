import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'Website Chatbot für Unternehmen – Groitzsch & Leipzig – Pixel Kraftwerk',
  metaDescription:
    'KI-gestützter Website Chatbot für Ihr Unternehmen. Pixel Kraftwerk entwickelt intelligente Chatbots, die Besucher beraten, Leads erfassen und FAQ beantworten.',
  primaryKeyword: 'Website Chatbot',
  secondaryKeywords: [
    'KI-Chatbot Website',
    'Chatbot für Unternehmen',
    'Homepage Chatbot',
    'Live-Chat mit KI',
    'automatisierter Kundensupport',
  ],
  imageAltTexts: [
    'Website Chatbot beantwortet Besucherfrage in Echtzeit auf einer Unternehmensseite',
    'Dashboard mit Chatbot-Konversationen und erfassten Leads',
    'KI-Chatbot-Widget auf einer modernen Unternehmenswebsite im Chat-Fenster',
  ],

  h1: 'Website Chatbot – Ihr digitaler Assistent, der nie schläft',
  subheadline: 'Ihre Website spricht mit Besuchern – auch wenn Sie gerade nicht können',
  intro:
    'Ihre Website ist rund um die Uhr erreichbar – Ihr Team aber nicht. Genau hier setzt ein KI-gestützter Website Chatbot an. Er begrüßt Besucher, beantwortet häufige Fragen, erfasst Kontaktdaten und leitet qualifizierte Anfragen an Sie weiter. Ohne Wartezeiten, ohne verpasste Chancen. Für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, <a href="/leistungsgebiete/chemnitz" class="text-primary-400 hover:underline">Chemnitz</a> und der Region entwickeln wir Chatbots, die sich anfühlen wie ein echtes Gespräch – und gleichzeitig messbare Ergebnisse liefern.',
  heroCtaText: 'Chatbot-Demo ansehen und Erstgespräch sichern',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Besucher kommen – aber konvertieren nicht</span>',
    lead: 'Jeden Tag gehen potenzielle Kunden auf Ihrer Website verloren, weil …',
    bullets: [
      'Besucher keine schnelle Antwort auf ihre Frage bekommen',
      'Standardfragen zu Preisen, Ablauf und Verfügbarkeit unbeantwortet bleiben',
      'Anfragen außerhalb der Geschäftszeiten im Leeren hängen',
      'Interessenten zur Konkurrenz wechseln, weil es dort schneller geht',
    ],
    tagline: 'Das kostet Zeit, Geld und verlorene Aufträge.',
    details: [
      {
        title: 'Warum Besucher abspringen',
        body: 'Viele Website-Besucher haben eine konkrete Frage im Kopf. Finden sie nicht innerhalb weniger Sekunden eine Antwort, schließen sie den Tab. Das passiert besonders häufig bei:',
        bullets: [
          'Preis-/Kostenfragen („Was kostet das ungefähr?")',
          'Verfügbarkeiten („Wann wäre der nächste Termin?")',
          'Einzugsgebiet/Ort („Kommt ihr auch nach …?")',
          'Ablauf („Wie läuft das ab?")',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jede unbeantwortete Frage ist ein möglicher Auftrag, der nie in Ihrem Posteingang ankommt. Und jede Standardfrage, die Sie selbst beantworten müssen, bindet Zeit, die Sie eigentlich für Kunden und Projekte brauchen.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein Chatbot, der für Sie arbeitet</span>',
    lead: 'Der Website Chatbot übernimmt die erste Kommunikation mit Besuchern – <strong>ohne zusätzliches Personal</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Besucher werden aktiv angesprochen, auch auf Unterseiten',
        'Standardfragen werden selbstständig und markenkonform beantwortet',
        'Termine und Anfragen werden strukturiert erfasst',
        'Nur relevante Anliegen landen bei Ihrem Team – mit allen Infos',
      ],
    },
    blocks: [
      {
        title: 'Was der Chatbot konkret übernimmt',
        intro: 'Je nach Unternehmen konfigurieren wir den Bot so, dass er:',
        bullets: [
          'Erste Fragen klärt (Ort, Anliegen, Dringlichkeit)',
          'Infos gibt (Ablauf, Verfügbarkeit, Einzugsgebiet)',
          'Kontaktdaten erfasst (Name, Telefon, E-Mail)',
          'Terminwünsche abfragt oder direkt zur Buchung führt',
          'Die Anfrage sauber an Ihr Team übergibt (E-Mail / CRM / Übersicht)',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt (nur relevante Anliegen)',
        intro: 'Statt „Hi, ich hab da mal ne Frage…" bekommt Ihr Team strukturierte Infos, z. B.:',
        bullets: [
          'Name + Telefonnummer',
          'Anliegen in Klartext',
          'Ort / Einsatzgebiet',
          'Wunschzeitpunkt / Dringlichkeit',
          'Kontext (welche Seite besucht wurde, welche Auswahl getroffen wurde)',
        ],
        footnote: 'So können Sie schneller entscheiden, wer wann zurückruft – und verlieren weniger Leads.',
      },
    ],
    tagline: '➡️ Weniger Unterbrechungen. Mehr qualifizierte Anfragen.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein Website Chatbot?',
    lead: 'Ein Website Chatbot ist ein KI-gestützter Chat direkt auf Ihrer Seite, der Besucher:innen <strong>sofort</strong> hilft – auch abends, am Wochenende oder wenn Ihr Team gerade im Termin steckt. Statt „Schreiben Sie uns eine Mail" bekommen Besucher direkt Antworten wie:',
    examples: [
      '„Ja, wir sind in Ihrem Gebiet unterwegs."',
      '„So läuft der Ablauf – in 3 Schritten."',
      '„Ich nehme kurz die Infos auf und melde mich mit einem Terminvorschlag."',
    ],
    blocks: [
      {
        title: 'Für wen ein Website Chatbot sinnvoll ist',
        body: 'Besonders lohnend für Unternehmen mit regelmäßig wiederkehrenden Kundenfragen, vielen Kontaktanfragen über die Website, hohem „Orga"-Anteil (Terminabsprachen, Rückrufwünsche, Vorqualifizierung) und mehreren Leistungen/Standorten/Einsatzgebieten.',
      },
      {
        title: 'Was ein Chatbot nicht ist (kein Ersatz für Fachpersonal)',
        body: '<strong>Wichtig:</strong> Der Website Chatbot ersetzt kein Fachpersonal – er entlastet, filtert und strukturiert. Bei komplexen Fällen wird sauber an Ihr Team übergeben.',
      },
    ],
  },

  features: {
    headline: 'Was der Website Chatbot <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Automatische Begrüßung von Website-Besuchern',
      'Beantwortung häufig gestellter Fragen',
      'Vorqualifizierung von Anfragen',
      'Erfassung von Kontaktdaten und Anliegen',
      'Weiterleitung relevanter Anfragen an Ihr Team',
      'Termin- und Anfrageerfassung nach definierten Regeln',
      'Optional mehrsprachig einsetzbar',
    ],
    note: '<strong>Wichtig:</strong> Der Chatbot ersetzt kein Fachpersonal – er <strong>entlastet</strong>, filtert und strukturiert die Kommunikation.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup kann der Chatbot:',
        bullets: [
          'Antworten aus Ihrer Wissensbasis geben (FAQ, Leistungen, Ablauf)',
          'Besucher durch klare Optionen führen (Buttons statt Textwände)',
          'bei Unsicherheit nachfragen (statt irgendwas zu erfinden)',
          'bei „kritischen" Anliegen an Menschen übergeben',
        ],
      },
      {
        title: 'Optional: Mehrsprachigkeit & Regeln',
        intro: 'Optional kann der Chatbot:',
        bullets: [
          'mehrere Sprachen sprechen',
          'feste Regeln berücksichtigen (z. B. Einzugsgebiet, Öffnungszeiten, Terminlogik)',
          'Anfragen nach Kategorien sortieren (Support, Angebot, Termin, Rückruf)',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist ein Website Chatbot?',
      headingLevel: 'h2',
      paragraphs: [
        'Ein Website Chatbot ist ein dialogbasiertes Element auf Ihrer Internetseite, das Besuchern automatisiert Antworten gibt, durch Angebote führt oder Kontaktdaten erfasst. Moderne Chatbots arbeiten nicht mehr mit starren Entscheidungsbäumen, sondern nutzen künstliche Intelligenz, um natürliche Sprache zu verstehen und kontextbezogen zu antworten.',
        'Konkret bedeutet das: Ein Besucher stellt eine Frage in eigenen Worten – und der Chatbot versteht die Absicht, auch wenn die Formulierung nicht exakt einem vordefinierten Muster entspricht. Das Ergebnis ist ein Gesprächserlebnis, das sich natürlich anfühlt und Vertrauen schafft.',
        'Für kleine und mittelständische Unternehmen ist ein Website Chatbot besonders wertvoll. Er übernimmt Aufgaben, die sonst manuell erledigt werden müssten – und das 24 Stunden am Tag, 7 Tage die Woche. Kein Besucher bleibt ohne Antwort, kein Lead geht verloren.',
      ],
    },
    {
      heading: 'Website Chatbot vs. klassischer Live-Chat: Wo liegt der Unterschied?',
      headingLevel: 'h2',
      paragraphs: [
        'Viele Unternehmen kennen Live-Chat-Widgets, bei denen ein Mitarbeiter in Echtzeit antwortet. Das funktioniert – solange jemand da ist. Außerhalb der Geschäftszeiten, in Stoßzeiten oder bei Krankheit bleibt der Chat stumm. Ein KI-gestützter Chatbot löst genau dieses Problem.',
      ],
      table: {
        headers: ['Kriterium', 'Klassischer Live-Chat', 'KI-Website-Chatbot'],
        rows: [
          ['Verfügbarkeit', 'Nur während Geschäftszeiten', '24/7 ohne Unterbrechung'],
          ['Reaktionszeit', 'Abhängig von Auslastung (Sekunden bis Minuten)', 'Sofort, unter 1 Sekunde'],
          ['Gleichzeitige Gespräche', 'Begrenzt durch Mitarbeiteranzahl', 'Unbegrenzt parallel'],
          ['Konsistenz der Antworten', 'Variiert je nach Mitarbeiter', 'Einheitlich und markenkonform'],
          ['Skalierung', 'Erfordert mehr Personal', 'Ohne zusätzliche Kosten skalierbar'],
          ['Lernfähigkeit', 'Abhängig von Schulung', 'Verbessert sich durch jede Interaktion'],
          ['Kosten pro Gespräch', 'Hoch (Personalkosten)', 'Niedrig nach Ersteinrichtung'],
          ['Übergabe an Mitarbeiter', 'Nicht nötig – ist bereits ein Mitarbeiter', 'Nahtlos möglich bei komplexen Anliegen'],
        ],
      },
    },
    {
      heading: 'Die Vorteile eines Website Chatbots für Ihr Unternehmen',
      headingLevel: 'h2',
      paragraphs: [
        'Ein gut konfigurierter Chatbot ist weit mehr als ein technisches Spielzeug. Er wird zum festen Bestandteil Ihres Vertriebs- und Serviceprozesses:',
      ],
      bullets: [
        '<strong>24/7-Erreichbarkeit:</strong> Ihr Chatbot beantwortet Fragen auch nachts, am Wochenende und an Feiertagen – genau dann, wenn potenzielle Kunden recherchieren',
        '<strong>Automatische Lead-Erfassung:</strong> Der Chatbot sammelt Kontaktdaten, Anliegen und Präferenzen strukturiert und leitet sie an Ihr <a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungssystem</a> oder CRM weiter',
        '<strong>FAQ-Handling:</strong> Wiederkehrende Fragen zu Öffnungszeiten, Preisen, Leistungen oder Abläufen werden sofort beantwortet – Ihr Team wird entlastet',
        '<strong>Höhere Verweildauer:</strong> Besucher, die interagieren, bleiben länger auf Ihrer Seite und konvertieren häufiger',
        '<strong>Qualifizierung von Anfragen:</strong> Durch gezielte Rückfragen erkennt der Chatbot, ob ein Besucher kaufbereit ist oder nur informiert werden möchte',
        '<strong>Konsistente Markenkommunikation:</strong> Jeder Besucher erhält dieselbe Qualität an Antworten – unabhängig von Tageszeit oder Auslastung',
      ],
    },
    {
      heading: 'Wie funktioniert die KI hinter dem Chatbot?',
      headingLevel: 'h2',
      paragraphs: [
        'Unser Website Chatbot basiert auf modernen Sprachmodellen (Large Language Models), die natürliche Sprache verstehen und kontextbezogen antworten. Anders als regelbasierte Bots, die nur vordefinierte Antworten wiedergeben, erfasst die KI die Absicht hinter einer Frage.',
        'Dazu wird der Chatbot mit Ihren spezifischen Inhalten trainiert: Leistungsbeschreibungen, Preislisten, FAQ-Kataloge, interne Richtlinien. So antwortet er nicht allgemein, sondern mit exakt den Informationen, die zu Ihrem Unternehmen passen. Halluzinationen – also erfundene Antworten – werden durch klare Grenzen und Fallback-Mechanismen minimiert.',
        'Wenn der Chatbot an seine Grenzen stößt, eskaliert er das Gespräch transparent: Er bietet an, die Anfrage an einen Mitarbeiter weiterzuleiten, erfasst die Kontaktdaten und dokumentiert den bisherigen Gesprächsverlauf. So geht keine Information verloren.',
      ],
    },
    {
      heading: 'Integration in Ihre Website und bestehende Systeme',
      headingLevel: 'h2',
      paragraphs: [
        'Ein Chatbot bringt nur dann echten Mehrwert, wenn er nahtlos in Ihre bestehende Infrastruktur eingebunden ist. Wir integrieren den Chatbot direkt in Ihre <a href="/webseite" class="text-primary-400 hover:underline">Website</a> – egal ob WordPress, Webflow, individuelle Lösung oder eine von uns professionell entwickelte Webseite.',
        'Die technische Einbindung erfolgt über ein leichtgewichtiges Widget, das Ihre Ladezeiten nicht beeinträchtigt. Design, Farben und Tonalität passen wir an Ihr Corporate Design an, sodass der Chatbot wie ein natürlicher Teil Ihrer Seite wirkt.',
        'Darüber hinaus verbinden wir den Chatbot mit Ihren bestehenden Tools: CRM-System, E-Mail-Marketing, Kalender für Terminbuchungen oder Projektmanagement. Erfasste Leads und Gesprächsprotokolle landen automatisch dort, wo Ihr Team damit arbeitet.',
      ],
    },
    {
      heading: 'Individualisierung und Training des Chatbots',
      headingLevel: 'h2',
      paragraphs: [
        'Kein Chatbot von der Stange. Wir konfigurieren jeden Bot individuell für Ihr Unternehmen:',
      ],
      bullets: [
        '<strong>Wissensbasis:</strong> Wir füttern den Chatbot mit Ihren Leistungen, Produkten, Preisen und internen Abläufen',
        '<strong>Tonalität:</strong> Sie entscheiden, ob der Bot per Du oder per Sie kommuniziert, ob er locker oder formell ist',
        '<strong>Gesprächsflüsse:</strong> Für zentrale Szenarien (z. B. Angebotsanfrage, Terminvereinbarung) definieren wir optimale Dialogpfade',
        '<strong>Eskalationsregeln:</strong> Wann soll der Bot an einen Menschen übergeben? Wir legen klare Schwellen fest',
        '<strong>Kontinuierliches Lernen:</strong> Anhand realer Gespräche verbessern wir die Antwortqualität laufend',
      ],
    },
    {
      heading: 'Welche Unternehmen profitieren besonders?',
      headingLevel: 'h2',
      paragraphs: [
        'Ein Website Chatbot lohnt sich für jedes Unternehmen, das regelmäßig Besucherverkehr auf seiner Website hat und Anfragen effizient bearbeiten möchte. Besonders großes Potenzial sehen wir bei:',
      ],
      bullets: [
        'Handwerksbetrieben mit wiederkehrenden Anfragen zu Leistungen und Verfügbarkeit',
        'Dienstleistern, die Beratungsgespräche oder Termine online vereinbaren möchten',
        'Praxen und Kanzleien, die außerhalb der Sprechzeiten erreichbar sein wollen',
        'Online-Shops mit Fragen zu Versand, Retouren und Produkten',
        'Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und <a href="/leistungsgebiete/chemnitz" class="text-primary-400 hover:underline">Chemnitz</a>, die mit begrenztem Team wachsen möchten',
      ],
    },
    {
      heading: 'So läuft die Implementierung ab',
      headingLevel: 'h2',
      paragraphs: [
        'Wir arbeiten strukturiert und transparent – Sie wissen jederzeit, wo wir stehen und was als Nächstes kommt:',
      ],
      bullets: [
        '<strong>1. Erstgespräch & Analyse:</strong> Wir verstehen Ihr Geschäftsmodell, Ihre häufigsten Kundenanfragen und Ihre Ziele für den Chatbot',
        '<strong>2. Konzeption:</strong> Wir definieren Gesprächsflüsse, Wissensbasis und Integrationen – abgestimmt auf Ihre Prozesse',
        '<strong>3. Aufbau & Training:</strong> Der Chatbot wird eingerichtet, mit Ihren Inhalten trainiert und technisch in Ihre Website integriert',
        '<strong>4. Testphase:</strong> In einem geschützten Zeitraum testen wir gemeinsam mit Ihnen den Bot unter realen Bedingungen',
        '<strong>5. Go-Live & Optimierung:</strong> Nach dem Start analysieren wir die Gespräche regelmäßig und verbessern die Antwortqualität kontinuierlich',
      ],
    },
    {
      heading: 'Datenschutz und DSGVO-Konformität',
      headingLevel: 'h3',
      paragraphs: [
        'Der Schutz personenbezogener Daten hat für uns oberste Priorität. Unser Chatbot speichert nur die Daten, die für die Bearbeitung der Anfrage notwendig sind. Die Verarbeitung erfolgt DSGVO-konform auf europäischen Servern. Besucher werden transparent über die Datenerhebung informiert und können jederzeit das Gespräch beenden. Auf Wunsch implementieren wir ein Opt-in vor dem Chat-Start.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein Website Chatbot?',
      a: 'Die Kosten richten sich nach dem Funktionsumfang: Wie viele Themen soll der Bot abdecken? Welche Systeme werden angebunden? Wie individuell soll die Konfiguration sein? Nach einem kostenlosen Erstgespräch erstellen wir Ihnen ein transparentes Angebot ohne versteckte Kosten.',
    },
    {
      q: 'Wie lange dauert es, bis mein Chatbot live ist?',
      a: 'Ein typisches Projekt dauert 2–4 Wochen von der Konzeption bis zum Go-Live. Bei einfacheren Setups mit einer überschaubaren Wissensbasis kann es auch schneller gehen. Komplexe Projekte mit mehreren Integrationen benötigen entsprechend mehr Zeit.',
    },
    {
      q: 'Kann der Chatbot auch Termine buchen?',
      a: 'Ja. Wir können den Chatbot direkt mit Ihrem Kalender verbinden, sodass Besucher freie Termine sehen und direkt buchen können – ganz ohne dass Sie eingreifen müssen. Das ist besonders für Dienstleister und Praxen ein enormer Zeitgewinn.',
    },
    {
      q: 'Was passiert, wenn der Chatbot eine Frage nicht beantworten kann?',
      a: 'Der Bot erkennt seine Grenzen und bietet eine transparente Übergabe an: Er kann die Anfrage an einen Mitarbeiter weiterleiten, ein Kontaktformular einblenden oder die Frage mit Kontaktdaten an Ihr Team senden. Kein Besucher wird im Regen stehen gelassen.',
    },
    {
      q: 'Funktioniert der Chatbot auch auf dem Smartphone?',
      a: 'Selbstverständlich. Das Chat-Widget ist vollständig responsive und funktioniert auf allen Endgeräten – Desktop, Tablet und Smartphone. Das Design passt sich automatisch an die Bildschirmgröße an.',
    },
    {
      q: 'Kann ich die Antworten des Chatbots selbst anpassen?',
      a: 'Ja. Wir richten den Bot so ein, dass Sie grundlegende Anpassungen – zum Beispiel neue FAQ-Einträge oder geänderte Öffnungszeiten – eigenständig vornehmen können. Für größere Änderungen stehen wir Ihnen jederzeit zur Seite.',
    },
    {
      q: 'Verlangsamt der Chatbot meine Website?',
      a: 'Nein. Das Chat-Widget wird asynchron geladen und hat keinen messbaren Einfluss auf die Ladezeit Ihrer Seite. Wir achten bei der Integration besonders auf die Performance, damit Ihre Core Web Vitals nicht beeinträchtigt werden.',
    },
    {
      q: 'Ist der Chatbot DSGVO-konform?',
      a: 'Ja. Die gesamte Datenverarbeitung erfolgt auf europäischen Servern. Besucher werden vor dem Chat über die Datenerhebung informiert, und es werden nur die Daten gespeichert, die für die Bearbeitung der Anfrage tatsächlich notwendig sind.',
    },
  ],

  ctaText: 'Bereit für einen Chatbot, der Ihre Besucher begeistert?',

  parentServiceLink: {
    text: 'KI-Chatbots im Überblick',
    href: '/ki-chatbots',
  },
  siblingSubpageLinks: [
    { text: 'WhatsApp Chatbot', href: '/ki-chatbots/whatsapp-chatbot' },
    { text: 'Instagram Chatbot', href: '/ki-chatbots/instagram-chatbot' },
    { text: 'Facebook Messenger Chatbot', href: '/ki-chatbots/facebook-chatbot' },
    { text: 'Telegram Chatbot', href: '/ki-chatbots/telegram-chatbot' },
    { text: 'FAQ Automatisierung', href: '/ki-chatbots/faq-automatisierung' },
  ],
  crossServiceLinks: [
    { text: 'Automatisierungen für Anfragen & Termine', href: '/automatisierungen' },
    { text: 'Professionelle Webseiten', href: '/webseite' },
  ],
  areaLinks: buildTier1AreaLinks('Website Chatbot'),
};

export default content;
