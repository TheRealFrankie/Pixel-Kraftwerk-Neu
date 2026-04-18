import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'FAQ Automatisierung mit KI – Groitzsch & Leipzig – Pixel Kraftwerk richtet Ihre intelligente Wissensdatenbank ein',
  metaDescription:
    'FAQ Automatisierung mit KI: Kundenanfragen rund um die Uhr beantworten, Support entlasten und Servicequalität steigern. Pixel Kraftwerk aus Groitzsch.',
  primaryKeyword: 'FAQ Automatisierung',
  secondaryKeywords: [
    'KI-gestützte Wissensdatenbank',
    'automatische FAQ',
    'Self-Service-Portal',
    'FAQ Chatbot',
    'intelligente Fragenbeantwortung',
  ],
  imageAltTexts: [
    'KI-gestütztes FAQ-System beantwortet Kundenanfrage automatisch auf einem Laptop-Bildschirm',
    'Self-Service-Portal mit intelligenter Suchfunktion auf einem Smartphone',
    'Dashboard mit Auswertung der häufigsten Kundenfragen und Antwortquoten',
  ],

  h1: 'FAQ Automatisierung mit KI',
  subheadline: 'Standardfragen beantworten sich ab sofort von selbst',
  intro:
    'Immer dieselben Fragen – zu Öffnungszeiten, Preisen, Lieferzeiten oder Abläufen. Ihr Team beantwortet sie täglich per Telefon, E-Mail und Chat. Das kostet Zeit, bindet Kapazitäten und frustriert beide Seiten. Mit einer KI-gestützten FAQ Automatisierung erhalten Ihre Kunden sofort die richtige Antwort – rund um die Uhr, auf jedem Kanal. Und Ihr Team kann sich auf die Anfragen konzentrieren, die wirklich individuelle Betreuung brauchen.',
  heroCtaText: 'FAQ-Automatisierung anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Immer die gleichen Fragen, jeden Tag</span>',
    lead: 'Ihr Team verbringt einen großen Teil des Arbeitstags mit Fragen, die eigentlich schon lange beantwortet sind:',
    bullets: [
      '„Wann habt ihr auf?" – zum hundertsten Mal',
      '„Was kostet das ungefähr?" – obwohl es auf der Website steht',
      '„Wie lange dauert das?" – identische Antwort wie gestern',
      '„Kommt ihr auch nach …?" – selber Ort, andere Person',
    ],
    tagline: 'Das frisst Zeit, zermürbt Ihr Team – und bringt Kunden kein bisschen schneller ans Ziel.',
    details: [
      {
        title: 'Warum klassische FAQ-Seiten nicht helfen',
        body: 'Niemand liest sich seitenweise FAQ durch. Kunden wollen ihre konkrete Frage stellen – und sofort eine konkrete Antwort bekommen.',
        bullets: [
          'Statische FAQ-Seiten sind schwer auffindbar',
          'Antworten sind oft zu allgemein oder veraltet',
          'Suchfunktion findet nicht den passenden Eintrag',
          'Keine Anbindung an Telefon, Chat oder Messenger',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jede Standardfrage bindet Ihr Team für 2–5 Minuten. Multipliziert über einen Monat sind das schnell mehrere Arbeitstage pro Mitarbeiter – nur für Routine.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">KI-gestützte FAQ-Automatisierung</span>',
    lead: 'Eine KI-gestützte Wissensdatenbank versteht echte Kundenfragen und liefert sofort präzise Antworten – <strong>auf jedem Kanal gleichzeitig</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Kunden stellen ihre Frage in natürlicher Sprache',
        'Die KI findet die passende Antwort aus Ihrer Wissensbasis',
        'Auf Website, Chatbot, Telefon und Messenger gleichermaßen',
        'Bei Unklarheit wird an Ihr Team übergeben – mit Kontext',
      ],
    },
    blocks: [
      {
        title: 'Was die FAQ-Automatisierung konkret übernimmt',
        intro: 'Typische Anwendungsfälle:',
        bullets: [
          'Öffnungszeiten, Erreichbarkeit, Standorte',
          'Preise, Angebote, Pakete',
          'Ablauf, Dauer, Verfügbarkeiten',
          'Einzugsgebiete und Serviceregionen',
          'Zahlungsarten, Lieferbedingungen, Garantien',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Statt Standardfragen bekommt Ihr Team nur noch Anfragen mit echtem Klärungsbedarf:',
        bullets: [
          'Bereits geklärter Kontext (Name, Ort, Anliegen)',
          'Bereits gestellte Fragen + Antworten im Verlauf',
          'Kategorisierung der Anfrage (Beratung, Angebot, Termin)',
          'Priorisierung nach Dringlichkeit',
        ],
      },
    ],
    tagline: '➡️ Ihr Team entscheidet wieder – und erklärt nicht.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist eine KI-FAQ-Automatisierung?',
    lead: 'Eine KI-gestützte FAQ-Automatisierung ist eine <strong>zentrale Wissensbasis</strong>, die Ihre wichtigsten Fragen und Antworten enthält – und dank KI versteht, was Kunden eigentlich meinen, auch wenn sie anders formulieren.',
    examples: [
      '„Habt ihr heute noch offen?" → Öffnungszeiten-Antwort',
      '„Was zahle ich ungefähr?" → Preis-Range-Antwort',
      '„Kommt ihr bis nach Leipzig?" → Einzugsgebiet-Antwort',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für alle Unternehmen mit wiederkehrenden Kundenfragen: Handwerk, Praxen, Dienstleister, E-Commerce, Gastro, Bildung, Kanzleien. Überall dort, wo Service-Zeit Mangelware ist.',
      },
      {
        title: 'Was die Automatisierung nicht ersetzt',
        body: '<strong>Wichtig:</strong> Komplexe Beratung bleibt Sache Ihres Teams. Die KI übernimmt die Routine – und sortiert bei allem darüber hinaus sauber aus.',
      },
    ],
  },

  features: {
    headline: 'Was die FAQ-Automatisierung <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Antworten auf natürliche Kundenfragen',
      'Einsatz auf Website, Chat, Telefon, Messenger',
      'Zentrale Pflege aller Antworten an einem Ort',
      'Sofortige Aktualisierung auf allen Kanälen',
      'Analyse der häufigsten Fragen',
      'Saubere Übergabe bei komplexen Fällen',
    ],
    note: '<strong>Wichtig:</strong> Einmal gepflegte Antworten werden <strong>automatisch überall ausgespielt</strong> – Website, Chatbot, Telefonassistent und Messenger.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet die Lösung:',
        bullets: [
          'Eigene Wissensbasis aus Ihren Inhalten',
          'KI-Antworten mit Quellen-Nachweis',
          'Mehrsprachigkeit auf Wunsch',
          'Versionierung + Redaktion durch Ihr Team',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'Ihre Website-FAQ und Blogartikel',
          'Ihre Produktdatenbank',
          'Helpdesk-Systeme (z. B. Zendesk, Freshdesk)',
          'CRM und Ticket-Systeme',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist FAQ Automatisierung?',
      headingLevel: 'h2',
      paragraphs: [
        'FAQ Automatisierung bedeutet, dass wiederkehrende Kundenfragen nicht mehr von Ihrem Team manuell beantwortet werden, sondern von einem KI-gestützten System – automatisch, präzise und in natürlicher Sprache. Im Unterschied zu einer klassischen FAQ-Seite, auf der Kunden selbst nach der passenden Frage suchen müssen, versteht ein automatisiertes FAQ-System die Absicht hinter einer Frage und liefert die relevante Antwort direkt.',
        'Im Kern handelt es sich um eine intelligente Wissensdatenbank, die mit dem Fachwissen Ihres Unternehmens trainiert wird. Kunden stellen ihre Frage in eigenen Worten – per Chat, auf Ihrer <a href="/webseite" class="text-primary-400 hover:underline">Webseite</a>, über WhatsApp oder am Telefon – und erhalten in Sekundenbruchteilen eine fundierte Antwort.',
        'Für Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig und der Region</a> ist das besonders wertvoll: Wer mit kleinem Team viele Kundenanfragen bearbeitet, gewinnt durch automatisierte FAQ-Systeme spürbar Zeit zurück, ohne die Servicequalität zu senken.',
      ],
    },
    {
      heading: 'KI-gestützte Wissensdatenbanken: Mehr als eine FAQ-Seite',
      headingLevel: 'h2',
      paragraphs: [
        'Eine statische FAQ-Seite ist eine Liste von Fragen und Antworten. Kunden müssen scrollen, suchen und hoffen, dass ihre spezifische Frage dabei ist. Häufig finden sie nichts Passendes und greifen trotzdem zum Telefon. Eine KI-gestützte Wissensdatenbank funktioniert grundlegend anders.',
        'Die KI analysiert die gesamte Frage, erkennt Zusammenhänge und liefert eine maßgeschneiderte Antwort – auch wenn die Frage so noch nie gestellt wurde. Fragt ein Kunde beispielsweise „Kann ich samstags vorbeikommen?", versteht das System, dass es um Öffnungszeiten geht, und antwortet mit den Samstagszeiten, inklusive Hinweis auf abweichende Zeiten an Feiertagen.',
        'Das System lernt kontinuierlich dazu. Fragen, die es noch nicht beantworten kann, werden protokolliert und dienen als Grundlage, um die Wissensdatenbank gezielt zu erweitern. So wird Ihr FAQ-System mit jeder Woche besser.',
      ],
    },
    {
      heading: 'Statische FAQ-Seite vs. KI-gestützte FAQ Automatisierung',
      headingLevel: 'h2',
      paragraphs: [
        'Die folgende Tabelle zeigt, wo die entscheidenden Unterschiede zwischen einer herkömmlichen FAQ-Seite und einem intelligenten, KI-gestützten FAQ-System liegen:',
      ],
      table: {
        headers: ['Kriterium', 'Statische FAQ-Seite', 'KI-gestützte FAQ Automatisierung'],
        rows: [
          [
            'Suchmethode',
            'Kunde scrollt und sucht manuell',
            'Kunde stellt Frage in eigenen Worten',
          ],
          [
            'Antwortqualität',
            'Nur exakt vordefinierte Antworten',
            'Kontextbezogene, natürlich formulierte Antworten',
          ],
          [
            'Verfügbare Kanäle',
            'Nur auf der FAQ-Unterseite',
            'Website, Chat, WhatsApp, Telefon und mehr',
          ],
          [
            'Lernfähigkeit',
            'Keine – bleibt statisch',
            'Lernt aus unbeantworteten Fragen und Nutzerfeedback',
          ],
          [
            'Aktualisierung',
            'Manuell durch Redakteur',
            'Zentrale Wissensdatenbank, sofort auf allen Kanälen aktiv',
          ],
          [
            'Personalisierung',
            'Keine – alle sehen dasselbe',
            'Antworten können kontextbezogen variieren',
          ],
          [
            'Supportentlastung',
            'Gering – Kunden finden Antwort oft nicht',
            'Hoch – 60–80 % der Standardfragen automatisch gelöst',
          ],
          [
            'Analytics',
            'Kaum – nur Seitenaufrufe',
            'Detaillierte Auswertung: häufige Fragen, Lücken, Zufriedenheit',
          ],
        ],
      },
    },
    {
      heading: 'Self-Service-Portale: Kunden helfen sich selbst',
      headingLevel: 'h2',
      paragraphs: [
        'Moderne Kunden erwarten schnelle Antworten – und viele suchen diese lieber selbst, als auf eine Rückmeldung zu warten. Ein Self-Service-Portal mit integrierter FAQ Automatisierung gibt ihnen genau diese Möglichkeit.',
        'Stellen Sie sich ein Portal vor, in dem Ihre Kunden nicht nur Fragen stellen können, sondern auch Anleitungen finden, den Status einer Bestellung prüfen oder ein Formular ausfüllen – alles geführt durch eine intelligente KI. Das Portal kennt Ihr Angebot, Ihre Prozesse und Ihre Konditionen. Es antwortet so, wie es Ihr bester Mitarbeiter tun würde.',
        'Das Ergebnis: Weniger eingehende Anrufe und E-Mails, kürzere Wartezeiten für die Kunden, die tatsächlich individuellen Support benötigen, und ein professioneller Auftritt, der Vertrauen schafft.',
      ],
    },
    {
      heading: 'Support-Volumen reduzieren, Servicequalität steigern',
      headingLevel: 'h2',
      paragraphs: [
        'Der größte Hebel einer FAQ Automatisierung ist die Entlastung Ihres Teams. In den meisten Unternehmen machen Standardfragen 60–80 % aller Supportanfragen aus. Wenn diese automatisch beantwortet werden, sinkt das Ticket-Volumen deutlich – ohne dass ein einziger Kunde unzufrieden bleibt.',
        'Gleichzeitig steigt die Qualität für die verbleibenden Anfragen. Ihr Team hat mehr Zeit für komplexe Anliegen, kann ausführlicher beraten und schneller reagieren. Die Kundenzufriedenheit steigt auf beiden Seiten: Wer eine einfache Frage hat, bekommt sofort eine Antwort. Wer ein echtes Problem hat, erreicht einen Mitarbeiter, der sich Zeit nehmen kann.',
      ],
      bullets: [
        '60–80 % der Standardanfragen werden automatisch beantwortet',
        'Durchschnittliche Antwortzeit sinkt von Stunden auf Sekunden',
        'Mitarbeiter werden für beratungsintensive Aufgaben frei',
        'Konsistente Antwortqualität – unabhängig von Tageszeit oder Personalverfügbarkeit',
        'Skalierbar ohne zusätzliches Personal, auch bei steigendem Anfragevolumen',
      ],
    },
    {
      heading: 'KI auf Ihre Inhalte trainieren',
      headingLevel: 'h3',
      paragraphs: [
        'Damit Ihr FAQ-System präzise und vertrauenswürdig antwortet, wird die KI gezielt auf Ihre Unternehmensinhalte trainiert. Das bedeutet: Wir füttern das System mit Ihren bestehenden Materialien – Webseiten-Texten, Produktbeschreibungen, AGB, Preislisten, internen Leitfäden und häufig gestellten Fragen aus der Praxis.',
        'Die KI greift ausschließlich auf diese geprüfte Wissensbasis zurück und erfindet keine Antworten. Wenn eine Frage nicht abgedeckt ist, leitet das System den Kunden an Ihr Team weiter – mit dem vollständigen Gesprächsverlauf, sodass niemand von vorn anfangen muss.',
        'Das Training selbst ist kein einmaliger Vorgang. Wir richten einen Prozess ein, mit dem Sie neue Inhalte jederzeit ergänzen können – etwa wenn ein neues Produkt hinzukommt, sich Preise ändern oder eine neue Frage häufig gestellt wird.',
      ],
    },
    {
      heading: 'Multi-Channel FAQ: Website, Chat, WhatsApp und Telefon',
      headingLevel: 'h2',
      paragraphs: [
        'Ihre Kunden stellen Fragen dort, wo sie sich gerade befinden – auf der Website, im WhatsApp-Chat, per Instagram-Nachricht oder am Telefon. Eine moderne FAQ Automatisierung beschränkt sich nicht auf einen einzigen Kanal, sondern beantwortet Fragen überall.',
        'Die zentrale Wissensdatenbank ist der Kern. Von dort aus speist sie alle angebundenen Kanäle: den <a href="/ki-chatbots/website-chatbot" class="text-primary-400 hover:underline">Website Chatbot</a>, den <a href="/ki-chatbots/whatsapp-chatbot" class="text-primary-400 hover:underline">WhatsApp Chatbot</a>, den <a href="/ki-chatbots/instagram-chatbot" class="text-primary-400 hover:underline">Instagram Chatbot</a> und sogar einen KI-Telefonassistenten. Egal, über welchen Kanal die Frage kommt – die Antwort ist konsistent, aktuell und fundiert.',
        'Das vereinfacht auch die Pflege enorm: Wenn Sie eine Antwort aktualisieren, ist sie sofort auf allen Kanälen verfügbar. Kein manuelles Kopieren, kein Vergessen eines Kanals.',
      ],
    },
    {
      heading: 'Wissensdatenbank pflegen und aktuell halten',
      headingLevel: 'h3',
      paragraphs: [
        'Eine FAQ Automatisierung ist kein Projekt, das man einmal aufsetzt und dann vergisst. Ihr Unternehmen verändert sich – neue Angebote, geänderte Öffnungszeiten, saisonale Besonderheiten. Die Wissensdatenbank muss das widerspiegeln.',
        'Wir richten ein einfaches Pflegesystem ein, über das Sie oder Ihr Team Inhalte ergänzen und ändern können – ohne technisches Wissen. Zusätzlich zeigt Ihnen das System regelmäßig, welche Fragen unbeantwortet geblieben sind. So wissen Sie genau, wo Ihre Wissensdatenbank Lücken hat, und können gezielt nacharbeiten.',
        'Auf Wunsch übernehmen wir die laufende Pflege und optimieren die Wissensdatenbank monatlich anhand der Nutzungsdaten.',
      ],
    },
    {
      heading: 'Analyse und Auswertung: Verstehen, was Ihre Kunden wirklich fragen',
      headingLevel: 'h2',
      paragraphs: [
        'Ein KI-gestütztes FAQ-System liefert Ihnen wertvolle Einblicke in das Verhalten und die Bedürfnisse Ihrer Kunden. Jede Frage, jede Interaktion wird anonymisiert erfasst und ausgewertet.',
        'Im Dashboard sehen Sie auf einen Blick: Welche Fragen werden am häufigsten gestellt? Wo gibt es Wissenslücken? Wie hoch ist die automatische Lösungsquote? Wie zufrieden sind die Kunden mit den Antworten? Diese Daten sind Gold wert – nicht nur für die Optimierung des FAQ-Systems, sondern auch für Ihr Marketing und Ihre Produktentwicklung.',
        'Wenn etwa plötzlich viele Kunden nach einer bestimmten Dienstleistung fragen, die Sie noch nicht prominent bewerben, wissen Sie: Hier gibt es Nachfrage, die Sie stärker bedienen sollten.',
      ],
    },
    {
      heading: 'Für welche Unternehmen lohnt sich FAQ Automatisierung?',
      headingLevel: 'h2',
      paragraphs: [
        'Grundsätzlich profitiert jedes Unternehmen, das regelmäßig wiederkehrende Fragen beantwortet. Besonders lohnt sich eine FAQ Automatisierung in folgenden Fällen:',
      ],
      bullets: [
        '<strong>Dienstleister mit erklärungsbedürftigen Angeboten:</strong> Steuerberater, Rechtsanwälte, Versicherungsmakler – deren Kunden haben häufig ähnliche Grundlagenfragen',
        '<strong>Handwerksbetriebe:</strong> Fragen zu Verfügbarkeit, Ablauf, Material und Kosten lassen sich hervorragend automatisieren',
        '<strong>Online-Shops und E-Commerce:</strong> Versand, Retoure, Zahlungsmethoden, Verfügbarkeit – das FAQ-Volumen ist oft enorm',
        '<strong>Arztpraxen und Gesundheitsdienstleister:</strong> Sprechzeiten, Vorbereitung auf Untersuchungen, Kassenabrechnung – alles typische FAQ-Themen',
        '<strong>Bildungseinrichtungen:</strong> Kursbuchung, Teilnahmebedingungen, Zertifikate – strukturierte Informationen, die sich ideal automatisieren lassen',
        '<strong>Regionale Unternehmen in <a href="/leistungsgebiete/zwickau" class="text-primary-400 hover:underline">Zwickau</a> und Umgebung:</strong> Wer lokal viele Kunden betreut, spart mit FAQ Automatisierung wertvolle Teamkapazitäten',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was genau ist der Unterschied zwischen einer FAQ-Seite und FAQ Automatisierung?',
      a: 'Eine FAQ-Seite ist eine statische Liste mit Fragen und Antworten, durch die Kunden selbst scrollen müssen. FAQ Automatisierung nutzt KI, um Fragen in natürlicher Sprache zu verstehen und die passende Antwort automatisch zu liefern – über Website-Chat, WhatsApp, Telefon und weitere Kanäle.',
    },
    {
      q: 'Wie wird die KI auf mein Unternehmen trainiert?',
      a: 'Wir füttern das System mit Ihren bestehenden Inhalten: Webseiten-Texte, Produktbeschreibungen, Preislisten, AGB und häufig gestellte Fragen. Die KI greift ausschließlich auf diese geprüfte Wissensbasis zurück und erfindet keine Informationen.',
    },
    {
      q: 'Was passiert, wenn die KI eine Frage nicht beantworten kann?',
      a: 'Wenn das System keine passende Antwort findet, leitet es den Kunden automatisch an Ihr Team weiter – inklusive des bisherigen Gesprächsverlaufs. Die unbeantwortete Frage wird protokolliert, damit Sie die Wissensdatenbank gezielt ergänzen können.',
    },
    {
      q: 'Auf welchen Kanälen funktioniert die FAQ Automatisierung?',
      a: 'Die zentrale Wissensdatenbank speist alle angebundenen Kanäle gleichzeitig: Website-Chatbot, WhatsApp, Instagram, E-Mail-Autoresponder und KI-Telefonassistent. Eine Aktualisierung in der Wissensdatenbank ist sofort auf allen Kanälen aktiv.',
    },
    {
      q: 'Wie aufwendig ist die Pflege der Wissensdatenbank?',
      a: 'Wir richten ein einfaches Pflegesystem ein, das ohne technische Kenntnisse bedienbar ist. Neue Inhalte lassen sich in wenigen Minuten ergänzen. Zusätzlich zeigt das System, welche Fragen unbeantwortet blieben, sodass Sie gezielt nacharbeiten können.',
    },
    {
      q: 'Wie lange dauert die Einrichtung einer FAQ Automatisierung?',
      a: 'Ein typisches Setup ist in 2–4 Wochen betriebsbereit. Die Dauer hängt davon ab, wie umfangreich Ihre bestehenden Inhalte sind und wie viele Kanäle angebunden werden sollen. Einfache Setups mit einem Kanal können auch schneller stehen.',
    },
    {
      q: 'Erfindet die KI Antworten oder bleibt sie bei meinen Inhalten?',
      a: 'Die KI antwortet ausschließlich auf Basis Ihrer geprüften Wissensdatenbank. Wenn keine passende Information vorhanden ist, gibt sie das offen zu und verweist an Ihr Team. So vermeiden wir falsche oder irreführende Antworten.',
    },
    {
      q: 'Welche Auswertungen bietet ein KI-gestütztes FAQ-System?',
      a: 'Sie sehen im Dashboard die häufigsten Fragen, die automatische Lösungsquote, unbeantwortete Fragen und die Kundenzufriedenheit pro Antwort. Diese Daten helfen Ihnen, die Wissensdatenbank zu optimieren und Trends bei Kundenanfragen frühzeitig zu erkennen.',
    },
  ],

  ctaText: 'Bereit, Ihre häufigsten Kundenfragen automatisch beantworten zu lassen?',

  parentServiceLink: {
    text: 'KI-Chatbots im Überblick',
    href: '/ki-chatbots',
  },
  siblingSubpageLinks: [
    { text: 'Website Chatbot', href: '/ki-chatbots/website-chatbot' },
    { text: 'WhatsApp Chatbot', href: '/ki-chatbots/whatsapp-chatbot' },
    { text: 'Instagram Chatbot', href: '/ki-chatbots/instagram-chatbot' },
    { text: 'Facebook Messenger Chatbot', href: '/ki-chatbots/facebook-chatbot' },
    { text: 'Telegram Chatbot', href: '/ki-chatbots/telegram-chatbot' },
  ],
  crossServiceLinks: [
    { text: 'Webseiten im Mietmodell', href: '/webseite' },
    { text: 'Automatisierungen', href: '/automatisierungen' },
  ],
  areaLinks: buildTier1AreaLinks('FAQ Automatisierung'),
};

export default content;
