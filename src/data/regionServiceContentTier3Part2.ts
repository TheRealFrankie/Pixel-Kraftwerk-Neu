import type { LeistungsgebietSlug } from './leistungsgebiete';
import type { ServiceSlug } from './services';

export type RegionServiceContent = {
  regionSlug: LeistungsgebietSlug;
  regionName: string;
  serviceSlug: ServiceSlug;
  serviceLabel: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  highlights: string[];
  localHook?: string;
  localSection?: string[];
  localFaqs?: { q: string; a: string }[];
};

type RegionServiceKey = `${LeistungsgebietSlug}.${ServiceSlug}`;

export const tier3ServiceContentPart2: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  /* ================================================================
   *  FROHBURG
   * ================================================================ */
  'frohburg.ki-chatbots': {
    regionSlug: 'frohburg',
    regionName: 'Frohburg',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Frohburg – Pixel Kraftwerk aus dem Nachbarort Groitzsch automatisiert Ihre Kundenkommunikation im Landkreis Leipzig.',
    intro:
      'Frohburg liegt im Landkreis Leipzig und zählt rund 10.000 Einwohner. Die Kleinstadt ist geprägt durch Landwirtschaft, Handwerk und eine enge Verbindung zur Nachbarstadt Groitzsch – gerade einmal 15 Kilometer entfernt. Ein KI-Chatbot von Pixel Kraftwerk beantwortet die Fragen Ihrer Kunden rund um die Uhr und verschafft Ihrem Team mehr Zeit für das Wesentliche.',
    paragraphs: [
      'In Frohburg kennt man sich – und genau das erwarten Kundinnen und Kunden auch online: schnelle, persönliche Antworten. Ein KI-Chatbot auf Ihrer Webseite liefert diese Erreichbarkeit, ohne dass jemand ständig am Bildschirm sitzen muss. Ob Anfrage zu Öffnungszeiten, Produktverfügbarkeit oder Terminvereinbarung – der Chatbot reagiert in Sekunden und greift dabei auf Ihre individuellen Inhalte zurück.',
      'Landwirtschaftliche Betriebe und Direktvermarkter rund um Frohburg erhalten häufig saisonale Anfragen: Wann startet die Erdbeersaison? Gibt es Kartoffeln ab Hof? Welche Mengen sind lieferbar? Der Chatbot beantwortet diese Fragen zuverlässig und kann Bestellwünsche vorqualifizieren, sodass Sie Ihre Abholtermine besser planen können.',
      'Auch Frohburger Handwerksbetriebe, Friseure und Gesundheitsdienstleister profitieren: Terminanfragen werden automatisch entgegengenommen, häufig gestellte Fragen zu Leistungen und Preisen beantwortet und Rückrufwünsche strukturiert an Ihr Team weitergeleitet.',
      'Pixel Kraftwerk sitzt in Groitzsch – Ihrem direkten Nachbarort. Kürzere Wege gibt es kaum: In wenigen Minuten sind wir bei Ihnen vor Ort, kennen die Region und die Menschen hier. Diese Nähe macht die Zusammenarbeit unkompliziert und persönlich.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot auch für kleine Betriebe in Frohburg?',
        a: 'Gerade für kleine Betriebe ist ein Chatbot besonders wertvoll, weil er die begrenzte Personalkapazität entlastet. Schon ab wenigen wiederkehrenden Fragen pro Tag rechnet sich der Einsatz.',
      },
      {
        q: 'Kann der Chatbot auch saisonale Angebote für Frohburger Direktvermarkter abbilden?',
        a: 'Ja. Wir pflegen saisonale Inhalte ein, die der Chatbot automatisch ausspielt – etwa Hinweise zur Erntezeit, Verfügbarkeiten oder Öffnungszeiten des Hofladens.',
      },
      {
        q: 'Wie nah ist Pixel Kraftwerk an Frohburg?',
        a: 'Unser Büro in Groitzsch liegt nur rund 15 Kilometer von Frohburg entfernt. Wir sind in wenigen Minuten bei Ihnen – ob für ein Erstgespräch, einen Workshop oder die technische Einrichtung.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Frohburger Unternehmen einsatzbereit?',
        a: 'In der Regel steht ein erster produktiver Chatbot innerhalb von zwei bis drei Wochen. Da wir direkt nebenan sitzen, können wir die Abstimmung besonders zügig gestalten.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Kunden in Frohburg und Umgebung',
      'Saisonale Inhalte für Landwirtschaft und Direktvermarktung',
      'Persönliche Betreuung aus Groitzsch – nur ~15 km entfernt',
    ],
  },

  'frohburg.telefonassistenten': {
    regionSlug: 'frohburg',
    regionName: 'Frohburg',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Frohburg – Pixel Kraftwerk aus Groitzsch sichert Ihre telefonische Erreichbarkeit im Landkreis Leipzig.',
    intro:
      'In Frohburg ist das Telefon für viele Betriebe noch der wichtigste Kontaktkanal – vom Landmaschinenhändler über die Arztpraxis bis zum Dachdecker. Wenn Ihr Team auf dem Feld, in der Werkstatt oder beim Kunden ist, springt unser Telefonassistent ein und nimmt jeden Anruf zuverlässig entgegen.',
    paragraphs: [
      'Handwerksbetriebe in Frohburg und den umliegenden Ortsteilen sind häufig unterwegs – auf Baustellen in Geithain, Borna oder im Groitzscher Umland. In dieser Zeit gehen Anrufe verloren, die potenzielle Aufträge bedeuten. Unser Telefonassistent beantwortet Anrufe sofort, fragt gezielt nach Art und Dringlichkeit des Anliegens und leitet alle Informationen strukturiert an Sie weiter.',
      'Für Arztpraxen und Pflegedienste in Frohburg löst der Telefonassistent ein alltägliches Problem: Patientinnen und Patienten rufen an, während das Team in der Sprechstunde oder auf Tour ist. Der Assistent erfasst Terminwünsche, klärt erste Angaben und informiert über Sprechzeiten – professionell und rund um die Uhr.',
      'Auch landwirtschaftliche Betriebe profitieren: Während der Ernte oder bei Feldarbeit ist telefonische Erreichbarkeit schwierig. Der Assistent nimmt Bestellungen und Anfragen entgegen und leitet sie per E-Mail oder SMS weiter, damit nichts untergeht.',
      'Als direkter Nachbar aus Groitzsch kennen wir die Frohburger Betriebsstrukturen aus erster Hand. Die Einrichtung erfolgt unkompliziert und persönlich – kurze Wege, schnelle Abstimmung.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Anrufe für Frohburger Handwerksbetriebe priorisieren?',
        a: 'Ja. Wir definieren gemeinsam Regeln für dringende Fälle – etwa Rohrbrüche oder Heizungsausfälle – die sofort per Push-Nachricht weitergeleitet werden. Weniger dringende Anfragen werden als E-Mail oder CRM-Eintrag erfasst.',
      },
      {
        q: 'Funktioniert der Telefonassistent auch am Wochenende und an Feiertagen?',
        a: 'Absolut. Der Assistent ist rund um die Uhr aktiv – auch samstags, sonntags und an Feiertagen, wenn Ihr Büro nicht besetzt ist.',
      },
      {
        q: 'Wird der Assistent als Roboter wahrgenommen?',
        a: 'Wir gestalten die Gesprächsführung natürlich und freundlich. Die meisten Anrufenden empfinden den Assistenten als angenehme Alternative zu einer nicht beantworteten Leitung.',
      },
      {
        q: 'Was kostet ein Telefonassistent für einen Frohburger Betrieb?',
        a: 'Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot, das zu Ihrem Anrufvolumen und Ihrer Betriebsgröße passt. Wir kommen dafür gern die 15 Minuten zu Ihnen nach Frohburg.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch während Ernte, Baustelle oder Sprechstunde',
      'Dringlichkeitsbasierte Weiterleitung per Push, E-Mail oder CRM',
      'Rund-um-die-Uhr-Erreichbarkeit inkl. Wochenende',
      'Direkter Nachbar: Pixel Kraftwerk aus Groitzsch (~15 km)',
    ],
  },

  'frohburg.automatisierungen': {
    regionSlug: 'frohburg',
    regionName: 'Frohburg',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Frohburg – Pixel Kraftwerk aus Groitzsch verbindet Ihre Systeme und eliminiert manuelle Routineaufgaben.',
    intro:
      'In vielen Frohburger Betrieben werden Bestellungen noch per Hand in Tabellen übertragen, Terminbestätigungen einzeln geschrieben und Rechnungen manuell erstellt. Pixel Kraftwerk automatisiert genau diese wiederkehrenden Abläufe – abgestimmt auf die Anforderungen von Landwirtschaft, Handwerk und Dienstleistung im Landkreis Leipzig.',
    paragraphs: [
      'Frohburger Direktvermarkter und Hofläden stehen vor einer typischen Herausforderung: Bestellungen kommen per Telefon, WhatsApp und E-Mail – und müssen manuell zusammengeführt werden. Automatisierungen sammeln diese Anfragen aus verschiedenen Kanälen, tragen sie in eine zentrale Liste ein und versenden automatisch eine Auftragsbestätigung an den Kunden.',
      'Handwerksbetriebe profitieren von automatisierten Prozessen rund um die Angebotserstellung: Nach einem Erstgespräch oder einer Chatbot-Anfrage wird ein Angebotsentwurf automatisch erstellt und Ihnen zur Freigabe vorgelegt. Follow-up-Mails gehen nach definierten Fristen ohne manuelles Zutun raus, sodass kein Auftrag durch verspätete Nachfassung verloren geht.',
      'Auch die Terminverwaltung lässt sich für Frohburger Praxen und Dienstleister automatisieren: Buchungen lösen Kalendereinträge, Erinnerungen und ggf. Wegbeschreibungen aus. Stornierungen setzen den Termin automatisch frei und benachrichtigen Wartelistenpatienten.',
      'Wir arbeiten mit Plattformen wie Make und n8n sowie individuellen API-Anbindungen. Die Einführung erfolgt schrittweise – vom ersten Quick Win bis zur voll integrierten Prozesskette. Von Groitzsch aus begleiten wir Sie persönlich durch jeden Schritt.',
    ],
    faqs: [
      {
        q: 'Welche Abläufe lassen sich für Frohburger Betriebe am schnellsten automatisieren?',
        a: 'Kontaktanfragen ins CRM übertragen, Terminbestätigungen versenden und Angebote nach dem Erstgespräch erstellen – das sind typische Quick Wins, die innerhalb weniger Tage umgesetzt werden können.',
      },
      {
        q: 'Brauche ich spezielle Software für die Automatisierungen?',
        a: 'Nein. Wir arbeiten mit Ihren vorhandenen Werkzeugen – ob Google Workspace, Excel, Outlook oder Branchensoftware. Zusätzlich benötigte Plattformen wie Make sind kostengünstig und einfach zu bedienen.',
      },
      {
        q: 'Kann ich die Automatisierungen später selbst anpassen?',
        a: 'Ja. Wir schulen Sie oder Ihr Team, sodass einfache Anpassungen – etwa neue E-Mail-Vorlagen oder geänderte Fristen – eigenständig möglich sind.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit mit Pixel Kraftwerk aus Groitzsch ab?',
        a: 'Wir starten mit einer Prozessanalyse bei Ihnen vor Ort, definieren die wichtigsten Automatisierungen und setzen sie schrittweise um. Die kurze Distanz von nur 15 km ermöglicht schnelle Abstimmungen.',
      },
    ],
    highlights: [
      'Bestellungen aus Telefon, WhatsApp und E-Mail zentral zusammenführen',
      'Automatische Angebotserstellung und Follow-up-Mails',
      'Schrittweise Einführung – vom Quick Win zur Prozesskette',
      'Persönliche Betreuung aus dem Nachbarort Groitzsch',
    ],
  },

  'frohburg.webseiten': {
    regionSlug: 'frohburg',
    regionName: 'Frohburg',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Frohburg – Pixel Kraftwerk aus Groitzsch gestaltet Ihren modernen Internetauftritt im Landkreis Leipzig.',
    intro:
      'Wer in Frohburg nach einem Handwerker, einem Hofladen oder einer Arztpraxis sucht, greift zum Smartphone. Eine professionelle, mobiloptimierte Webseite ist deshalb keine Kür, sondern Pflicht. Pixel Kraftwerk gestaltet Webseiten, die Frohburger Betriebe sichtbar machen – technisch einwandfrei, optisch ansprechend und inhaltlich auf Ihre Region zugeschnitten.',
    paragraphs: [
      'Viele Betriebe in Frohburg haben noch keine eigene Webseite oder arbeiten mit veralteten Seiten, die auf dem Smartphone kaum bedienbar sind. Das kostet Kunden: Wer online nicht gefunden wird, existiert für viele potenzielle Kundinnen und Kunden schlicht nicht. Wir erstellen moderne Webseiten, die schnell laden, auf jedem Gerät funktionieren und die Stärken Ihres Betriebs in den Vordergrund stellen.',
      'Für Frohburger Direktvermarkter und Hofläden gestalten wir Webseiten mit saisonalen Angeboten, Produktübersichten und Anfahrtsbeschreibungen. Kunden sehen auf einen Blick, was verfügbar ist, und können direkt Kontakt aufnehmen oder eine Bestellung vormerken lassen.',
      'Handwerksbetriebe erhalten einen Internetauftritt, der ihre Referenzen, Leistungen und Einzugsgebiete klar kommuniziert. Mit integrierten Kontaktformularen und optionaler Chatbot-Anbindung werden aus Webseitenbesuchern direkt Anfragen.',
      'Wir setzen auf schnelle Ladezeiten, saubere Suchmaschinenoptimierung und barrierefreie Gestaltung. Jede Seite wird so gebaut, dass Google sie versteht und Frohburger Kunden sie finden – ob sie nach „Dachdecker Frohburg" oder „Hofladen Landkreis Leipzig" suchen.',
    ],
    faqs: [
      {
        q: 'Warum braucht mein Frohburger Betrieb eine eigene Webseite?',
        a: 'Weil die Mehrheit Ihrer Kunden online sucht – auch im ländlichen Raum. Ohne Webseite verlieren Sie Sichtbarkeit an Wettbewerber, die online präsent sind.',
      },
      {
        q: 'Kann ich die Webseite selbst aktualisieren?',
        a: 'Ja. Wir richten ein benutzerfreundliches CMS ein, mit dem Sie Texte, Bilder und Angebote eigenständig pflegen können – ohne Programmierkenntnisse.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für Frohburg?',
        a: 'Je nach Umfang zwischen drei und sechs Wochen. Dank der kurzen Wege zwischen Groitzsch und Frohburg sind Abstimmungen besonders schnell.',
      },
      {
        q: 'Wird die Webseite auch für Suchmaschinen optimiert?',
        a: 'Grundlegende SEO-Maßnahmen sind bei jeder Webseite inklusive – schnelle Ladezeiten, saubere Struktur, lokale Keywords und Google Business-Verknüpfung.',
      },
      {
        q: 'Kann die Webseite später mit einem Chatbot oder Online-Shop erweitert werden?',
        a: 'Absolut. Wir bauen die Seite so auf, dass Erweiterungen wie Chatbots, Telefonassistenten oder ein einfacher Shop jederzeit integriert werden können.',
      },
    ],
    highlights: [
      'Mobiloptimierte Webseiten für Handwerk, Landwirtschaft und Dienstleistung',
      'Saisonale Inhalte und Produktübersichten für Direktvermarkter',
      'Suchmaschinenoptimierung für lokale Sichtbarkeit in Frohburg',
      'Persönliche Betreuung aus dem Nachbarort Groitzsch (~15 km)',
    ],
  },

  'frohburg.seo-top-3': {
    regionSlug: 'frohburg',
    regionName: 'Frohburg',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Frohburg – Pixel Kraftwerk aus Groitzsch bringt Ihr Unternehmen in die Top 3 der Google-Ergebnisse im Landkreis Leipzig.',
    intro:
      'Wenn jemand in Frohburg oder Umgebung nach einer Dienstleistung sucht, entscheiden die ersten drei Google-Ergebnisse, wer den Auftrag bekommt. Mit gezielter Suchmaschinenoptimierung sorgt Pixel Kraftwerk dafür, dass Ihr Frohburger Betrieb genau dort erscheint – sichtbar, vertrauenswürdig und mit einem klaren Angebot.',
    paragraphs: [
      'Frohburg ist eine Kleinstadt, in der lokale Suchbegriffe weniger umkämpft sind als in Leipzig oder Halle. Das ist ein Vorteil: Mit einer durchdachten SEO-Strategie können Sie sich vergleichsweise schnell gegen wenige Wettbewerber durchsetzen. Wir identifizieren die Suchbegriffe, die Ihre Zielgruppe tatsächlich nutzt – von „Heizungsbauer Frohburg" bis „Biohofladen Landkreis Leipzig".',
      'Wir optimieren Ihre Webseite technisch und inhaltlich: Schnelle Ladezeiten, saubere Seitenstruktur und einzigartige Texte, die sowohl für Google als auch für Ihre Kunden geschrieben sind. Lokale Signale wie ein gepflegtes Google Business-Profil, einheitliche Adressdaten und regionale Verlinkungen stärken Ihre Position zusätzlich.',
      'Für Frohburger Betriebe setzen wir auf eine Kombination aus On-Page-Optimierung und lokaler SEO: Wir erstellen standortbezogene Inhalte, bauen relevante lokale Verzeichniseinträge auf und sorgen dafür, dass Ihr Unternehmen bei Google Maps prominent erscheint.',
      'Die Ergebnisse sind messbar: Sie erhalten regelmäßige Reports zu Ihren Rankings, organischem Traffic und Anfragen. So sehen Sie transparent, wie sich Ihre Sichtbarkeit in Frohburg und Umgebung entwickelt.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Frohburger Unternehmen in den Top 3 bei Google steht?',
        a: 'Bei lokalen Suchbegriffen in einer Kleinstadt wie Frohburg sind erste Rankings oft schon nach vier bis acht Wochen sichtbar. Stabile Top-3-Platzierungen entwickeln sich über drei bis sechs Monate.',
      },
      {
        q: 'Lohnt sich SEO auch für sehr kleine Betriebe in Frohburg?',
        a: 'Gerade für kleine Betriebe, denn lokale Suchbegriffe sind weniger umkämpft. Schon mit grundlegender Optimierung können Sie Wettbewerber ohne SEO-Strategie überholen.',
      },
      {
        q: 'Was kostet SEO für einen Betrieb in Frohburg?',
        a: 'Wir bieten transparente Monatspakete an, die zur Betriebsgröße passen. In einem kostenlosen Erstgespräch analysieren wir Ihre aktuelle Sichtbarkeit und zeigen das Potenzial auf.',
      },
      {
        q: 'Kann Pixel Kraftwerk auch mein Google Business-Profil für Frohburg optimieren?',
        a: 'Ja. Die Optimierung Ihres Google Business-Profils ist ein zentraler Bestandteil unserer lokalen SEO-Strategie – von vollständigen Angaben über Kategorien bis hin zu regelmäßigen Beiträgen.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für geringe Wettbewerbsdichte in Frohburg',
      'Google Business-Profil optimiert für regionale Sichtbarkeit',
      'Messbare Ergebnisse mit regelmäßigen Ranking-Reports',
      'Betreuung aus dem Nachbarort Groitzsch – maximale Nähe',
    ],
  },

  /* ================================================================
   *  BRANDIS
   * ================================================================ */
  'brandis.ki-chatbots': {
    regionSlug: 'brandis',
    regionName: 'Brandis',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Brandis – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation am östlichen Rand von Leipzig.',
    intro:
      'Brandis liegt im Landkreis Leipzig, östlich der Messestadt, und zählt rund 10.000 Einwohner. Die Nähe zu Leipzig-Ost bringt wirtschaftliche Dynamik, zugleich bewahrt Brandis seinen Kleinstadtcharakter mit lokalen Handwerkern, Dienstleistern und Gewerbetreibenden. Ein KI-Chatbot von Pixel Kraftwerk gibt diesen Betrieben eine digitale Stimme – rund um die Uhr.',
    paragraphs: [
      'In Brandis sind viele Betriebe inhabergeführt: Kfz-Werkstätten, Physiotherapie-Praxen, Bäckereien und Elektroinstallationsbetriebe. Die Mitarbeiterzahl ist überschaubar, die Arbeitstage lang. Ein KI-Chatbot auf der Webseite fängt Kundenanfragen auf, während das Team in der Werkstatt, am Patienten oder auf der Baustelle arbeitet – ohne dass eine Anfrage unbeantwortet bleibt.',
      'Für Brandiser Dienstleister mit Leipziger Kundschaft bietet ein Chatbot einen besonderen Vorteil: Potenzielle Kunden aus Leipzig suchen online nach Alternativen im Umland – oft günstiger und mit kürzeren Wartezeiten. Der Chatbot präsentiert Ihr Angebot, beantwortet Fragen zu Anfahrt und Leistungen und qualifiziert Anfragen vor, bevor Sie zurückrufen.',
      'Die technische Einrichtung ist unkompliziert: Wir integrieren den Chatbot in Ihre bestehende Webseite, verbinden ihn bei Bedarf mit Ihrem Kalender oder CRM und trainieren ihn mit Ihren individuellen Inhalten. So antwortet er nicht generisch, sondern genau so, wie Sie es Ihren Kunden auch persönlich erklären würden.',
      'Pixel Kraftwerk in Groitzsch liegt rund 35 Kilometer westlich von Brandis. Persönliche Treffen, ob in Brandis oder bei uns, sind jederzeit möglich. Wir betreuen Sie von der ersten Idee bis zum laufenden Chatbot.',
    ],
    faqs: [
      {
        q: 'Kann ein KI-Chatbot auch Kunden aus Leipzig für meinen Brandiser Betrieb gewinnen?',
        a: 'Ja. Der Chatbot kann gezielt auf Vorteile Ihres Standorts hinweisen – etwa kürzere Wartezeiten, Parkmöglichkeiten oder persönlichen Service. So werden Leipziger Suchende auf Ihr Angebot in Brandis aufmerksam.',
      },
      {
        q: 'Mein Betrieb in Brandis hat nur eine einfache Webseite – reicht das für einen Chatbot?',
        a: 'Absolut. Wir integrieren den Chatbot in jede Webseite – ob einfacher Onepager, WordPress oder Baukasten. Eine aufwendige Seite ist keine Voraussetzung.',
      },
      {
        q: 'Wie viele Anfragen pro Tag sollte ein Chatbot in Brandis bearbeiten, damit er sich lohnt?',
        a: 'Schon ab drei bis fünf Anfragen pro Tag entlastet der Chatbot spürbar. Bei kleinen Betrieben mit begrenztem Personal macht sich das besonders bemerkbar.',
      },
      {
        q: 'Kommt Pixel Kraftwerk für die Einrichtung auch nach Brandis?',
        a: 'Ja, von Groitzsch erreichen wir Brandis in rund 30 Minuten. Persönliche Einrichtung, Schulung und Workshops vor Ort sind selbstverständlich.',
      },
    ],
    highlights: [
      '24/7-Kundenkommunikation für inhabergeführte Betriebe in Brandis',
      'Leipziger Kundschaft gezielt ansprechen und qualifizieren',
      'Integration in jede bestehende Webseite – auch einfache Seiten',
      'Persönliche Betreuung aus Groitzsch (~35 km entfernt)',
    ],
  },

  'brandis.telefonassistenten': {
    regionSlug: 'brandis',
    regionName: 'Brandis',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Brandis – Pixel Kraftwerk sichert Ihre Erreichbarkeit für Handwerk und Dienstleistung am Leipziger Ostrand.',
    intro:
      'In Brandis ist das Telefon der direkteste Weg zum Kunden – ob Kfz-Werkstatt, Zahnarztpraxis oder Elektrobetrieb. Doch wer schraubt, behandelt oder installiert, kann nicht gleichzeitig ans Telefon gehen. Unser Telefonassistent übernimmt genau das und sorgt dafür, dass kein Anruf ins Leere läuft.',
    paragraphs: [
      'Brandiser Handwerksbetriebe sind oft in einem großen Einzugsgebiet unterwegs – von Wurzen über Machern bis nach Leipzig. Während der Meister auf Montage ist, klingelt im Büro das Telefon. Unser Telefonassistent beantwortet Anrufe professionell, stellt gezielte Rückfragen zur Art des Auftrags und leitet alle relevanten Informationen per E-Mail oder direkt ins CRM weiter.',
      'Für Gesundheitsdienstleister in Brandis – Zahnärzte, Physiotherapeuten, Heilpraktiker – löst der Assistent ein tägliches Dilemma: Patienten rufen an, während die Praxis voll ist. Der Assistent nimmt Terminwünsche auf, informiert über Sprechzeiten und leitet dringende Anliegen sofort weiter, ohne den Behandlungsablauf zu stören.',
      'Da viele Brandiser Betriebe auch Kunden aus dem Leipziger Osten bedienen, ist eine professionelle telefonische Erreichbarkeit besonders wichtig. Leipziger Anrufende erwarten schnelle Reaktionen – der Assistent liefert genau das, auch wenn Ihr Team gerade nicht erreichbar ist.',
      'Die Einrichtung erfolgt in enger Abstimmung mit Ihnen: Wir definieren Gesprächsabläufe, Weiterleitungsregeln und die Informationen, die erfasst werden sollen. So wird der Assistent zur nahtlosen Verlängerung Ihres Teams in Brandis.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent Anrufe von Leipziger Kunden professionell für Brandiser Betriebe entgegennehmen?',
        a: 'Ja. Der Assistent begrüßt Anrufende in Ihrem Firmennamen, erfasst das Anliegen professionell und weist bei Bedarf auf Ihren Standortvorteil in Brandis hin – z. B. kostenlose Parkplätze oder kurze Wartezeiten.',
      },
      {
        q: 'Funktioniert der Assistent auch für Brandiser Betriebe mit wenigen Anrufen pro Tag?',
        a: 'Gerade dann ist der Assistent wertvoll: Jeder einzelne verpasste Anruf kann einen Auftrag bedeuten. Unsere Lösung ist auch für kleine Anrufvolumen wirtschaftlich sinnvoll.',
      },
      {
        q: 'Kann der Assistent an mein bestehendes Telefonsystem angebunden werden?',
        a: 'Ja. Wir binden den Assistenten über eine Rufumleitung an Ihre bestehende Nummer an – ohne Hardware-Änderung oder Providerwechsel.',
      },
      {
        q: 'Was kostet die Lösung für einen Betrieb in Brandis?',
        a: 'Die Kosten richten sich nach Funktionsumfang und Anrufvolumen. In einem kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein individuelles Angebot.',
      },
    ],
    highlights: [
      'Professionelle Anrufannahme auch während Montage und Behandlung',
      'Gezielte Erfassung von Aufträgen und Terminwünschen',
      'Nahtlose Anbindung an bestehende Telefonnummer und CRM',
      'Aus Groitzsch persönlich für Brandis erreichbar (~35 km)',
    ],
  },

  'brandis.automatisierungen': {
    regionSlug: 'brandis',
    regionName: 'Brandis',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Brandis – Pixel Kraftwerk verbindet Ihre Systeme und reduziert manuelle Routinearbeit am Leipziger Ostrand.',
    intro:
      'In Brandis arbeiten viele Betriebe mit einer Mischung aus digitalen und analogen Prozessen: Anfragen kommen per E-Mail, Termine werden per Telefon bestätigt, Rechnungen in Excel erstellt. Pixel Kraftwerk verbindet diese Insellösungen zu einem durchgängigen Workflow – ohne Ihre bewährten Werkzeuge zu ersetzen.',
    paragraphs: [
      'Kfz-Werkstätten in Brandis bearbeiten täglich Terminanfragen, Kostenvoranschläge und Rückmeldungen. Automatisierungen übernehmen den gesamten Ablauf: Die Online-Anfrage landet direkt im Werkstattkalender, der Kunde erhält eine automatische Bestätigung und eine Erinnerung am Vortag. Nach der Reparatur wird ein Feedback-Formular versendet, ohne dass jemand manuell eingreift.',
      'Für Dienstleister in Brandis – etwa Physiotherapeuten, Steuerberater oder Reinigungsfirmen – lassen sich Kundenprozesse von der Anfrage bis zur Rechnung automatisieren: Kontaktformulardaten fließen ins CRM, nach dem Erstgespräch wird automatisch ein Angebot erstellt und Follow-up-Mails gehen termingerecht raus.',
      'Die Nähe zu Leipzig bedeutet für viele Brandiser Betriebe auch: mehr Anfragen, aber gleich viel Personal. Automatisierungen helfen, dieses Wachstum zu bewältigen, ohne sofort neue Mitarbeitende einstellen zu müssen. Prozesse skalieren mit, während Ihr Team sich auf die wertschöpfende Arbeit konzentriert.',
      'Wir setzen auf Make, n8n oder individuelle API-Lösungen – je nachdem, was zu Ihrer IT-Infrastruktur passt. Die Einführung erfolgt schrittweise und wird durch persönliche Betreuung aus Groitzsch begleitet.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse sollte ein Brandiser Betrieb zuerst automatisieren?',
        a: 'Starten Sie mit den Abläufen, die am häufigsten vorkommen und am meisten Zeit kosten: Terminbestätigungen, Kontaktanfragen ins CRM übertragen und automatische Angebotserstellung nach dem Erstgespräch.',
      },
      {
        q: 'Kann ich meine vorhandenen Tools in Brandis weiterverwenden?',
        a: 'Ja. Wir arbeiten mit Google Workspace, Microsoft 365, Branchensoftware und Buchhaltungslösungen zusammen. Automatisierungen verbinden diese Systeme, statt sie zu ersetzen.',
      },
      {
        q: 'Ist die Einführung kompliziert für ein kleines Team?',
        a: 'Nein. Wir führen Automatisierungen schrittweise ein und schulen Ihr Team. Einfache Anpassungen können Sie danach selbst vornehmen.',
      },
      {
        q: 'Wie schnell amortisiert sich die Investition?',
        a: 'In der Regel sparen automatisierte Prozesse bereits im ersten Monat mehrere Stunden pro Woche. Bei steigendem Anfragevolumen wächst der Effekt überproportional.',
      },
    ],
    highlights: [
      'Automatisierter Terminprozess: Anfrage → Bestätigung → Erinnerung → Feedback',
      'Wachstum bewältigen ohne zusätzliches Personal',
      'Schrittweise Einführung mit Schulung für Ihr Team',
      'Persönliche Betreuung aus Groitzsch (~35 km)',
    ],
  },

  'brandis.webseiten': {
    regionSlug: 'brandis',
    regionName: 'Brandis',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Brandis – Pixel Kraftwerk gestaltet Ihren Internetauftritt mit lokaler Sichtbarkeit am Leipziger Ostrand.',
    intro:
      'Brandis profitiert von der Nähe zu Leipzig – viele Kunden aus dem Osten der Messestadt suchen online nach Alternativen im Umland. Eine professionelle Webseite ist der Schlüssel, damit Ihr Brandiser Betrieb bei dieser Suche gefunden wird. Pixel Kraftwerk baut Webseiten, die überzeugen und konvertieren.',
    paragraphs: [
      'Wer in Brandis oder Umgebung nach Handwerkern, Praxen oder Dienstleistern sucht, landet in den meisten Fällen bei Google. Betriebe ohne professionelle Webseite tauchen dort nicht auf – oder hinterlassen mit einer veralteten Seite einen schlechten ersten Eindruck. Wir erstellen Webseiten, die modern aussehen, schnell laden und auf jedem Gerät perfekt funktionieren.',
      'Für Brandiser Betriebe, die auch Leipziger Kundschaft ansprechen wollen, gestalten wir Inhalte, die beide Zielgruppen abholen: Lokale Verankerung in Brandis kombiniert mit einer professionellen Außenwirkung, die auch Leipziger Ansprüchen genügt. So wird Ihr Standortvorteil – Nähe, Erreichbarkeit, persönlicher Service – online sichtbar.',
      'Jede Webseite enthält grundlegende SEO-Maßnahmen: Lokale Keywords, schnelle Ladezeiten, mobile Optimierung und eine saubere Seitenstruktur. Dazu integrieren wir Kontaktformulare, Google Maps, Bewertungseinbindung und bei Bedarf einen KI-Chatbot oder Terminbuchungsfunktion.',
      'Wir arbeiten mit bewährten CMS-Lösungen und erstellen Seiten, die Sie selbst pflegen können. Texte, Bilder und Angebote lassen sich ohne technisches Vorwissen aktualisieren – und bei Fragen sind wir aus Groitzsch schnell erreichbar.',
    ],
    faqs: [
      {
        q: 'Kann meine neue Webseite auch Kunden aus Leipzig nach Brandis locken?',
        a: 'Ja. Wir erstellen Inhalte, die gezielt Leipziger Suchende ansprechen – etwa mit Hinweisen auf kostenlose Parkplätze, kurze Wartezeiten und persönlichen Service.',
      },
      {
        q: 'Was kostet eine professionelle Webseite für einen Betrieb in Brandis?',
        a: 'Die Kosten richten sich nach Umfang und Funktionalität. In einem kostenlosen Erstgespräch ermitteln wir Ihren Bedarf und erstellen ein transparentes Angebot.',
      },
      {
        q: 'Kann ich die Webseite selbst aktualisieren?',
        a: 'Ja. Wir richten ein benutzerfreundliches Content-Management-System ein und schulen Sie, sodass Sie Texte und Bilder eigenständig pflegen können.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Eine professionelle Webseite ist in der Regel in drei bis sechs Wochen fertiggestellt – je nach Umfang und Abstimmungsbedarf.',
      },
    ],
    highlights: [
      'Webseiten, die Brandiser und Leipziger Kunden gleichermaßen ansprechen',
      'Mobile Optimierung und schnelle Ladezeiten als Standard',
      'Integrierte Kontaktformulare, Google Maps und Chatbot-Anbindung',
      'Selbst pflegbar dank benutzerfreundlichem CMS',
    ],
  },

  'brandis.seo-top-3': {
    regionSlug: 'brandis',
    regionName: 'Brandis',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Brandis – Pixel Kraftwerk bringt Ihren Betrieb in die Top 3 bei Google und macht Sie für Kunden aus Brandis und Leipzig sichtbar.',
    intro:
      'Brandis liegt im Einzugsgebiet von Leipzig – und genau das ist Ihre Chance: Wer als Handwerker oder Dienstleister in Brandis bei Google ganz oben steht, fängt auch Suchanfragen aus dem Leipziger Osten ab. Pixel Kraftwerk entwickelt eine SEO-Strategie, die Ihren Betrieb in den Top 3 positioniert.',
    paragraphs: [
      'Die Suchlandschaft rund um Brandis bietet eine besondere Konstellation: Lokale Begriffe wie „Physiotherapie Brandis" oder „Elektriker Brandis" haben moderaten Wettbewerb, lassen sich also gezielt besetzen. Gleichzeitig suchen Leipziger nach Alternativen im Umland – und wer bei „Zahnarzt bei Leipzig" oder „Werkstatt östlich Leipzig" rankt, gewinnt neue Kundschaft.',
      'Unsere SEO-Strategie für Brandiser Betriebe kombiniert lokale und regionale Optimierung: Wir erstellen standortspezifische Inhalte, optimieren Ihr Google Business-Profil für Brandis und bauen relevante Einträge in regionalen Verzeichnissen auf. Gleichzeitig positionieren wir Sie für Suchbegriffe, die Leipziger Kunden ins Umland führen.',
      'Technische SEO-Grundlagen stellen wir sicher: Schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und eine saubere interne Verlinkung. Diese Faktoren bilden das Fundament, auf dem Ihre Rankings stabil wachsen.',
      'Sie erhalten monatliche Reports mit konkreten Zahlen: Ranking-Positionen, organischer Traffic und Anfragen aus der Suche. So sehen Sie transparent, wie sich Ihre Investition in SEO für Brandis auszahlt.',
    ],
    faqs: [
      {
        q: 'Kann ich mit SEO in Brandis auch Kunden aus Leipzig erreichen?',
        a: 'Ja. Wir optimieren nicht nur für lokale Brandiser Begriffe, sondern auch für regionale Suchbegriffe, die Leipziger ins Umland führen – etwa „Handwerker bei Leipzig" oder „Praxis östlich Leipzig".',
      },
      {
        q: 'Wie lange dauert es, bis man für Brandis in den Top 3 rankt?',
        a: 'Für lokale Begriffe mit moderatem Wettbewerb sind erste Top-3-Platzierungen oft nach sechs bis zwölf Wochen erreichbar. Regionale Begriffe mit Leipziger Bezug können etwas länger dauern.',
      },
      {
        q: 'Brauche ich eine neue Webseite für gutes SEO?',
        a: 'Nicht unbedingt. Wir optimieren auch bestehende Webseiten. Falls die technische Basis zu veraltet ist, empfehlen wir einen Relaunch – den wir ebenfalls übernehmen.',
      },
      {
        q: 'Was beinhaltet die monatliche SEO-Betreuung?',
        a: 'Keyword-Monitoring, Content-Optimierung, technische Verbesserungen, Google Business-Pflege und ein transparenter Report mit allen relevanten Kennzahlen.',
      },
    ],
    highlights: [
      'Doppelte Sichtbarkeit: lokale Brandiser und regionale Leipziger Suchanfragen',
      'Google Business-Profil optimiert für maximale Reichweite',
      'Transparente monatliche Reports mit konkreten Kennzahlen',
      'SEO-Strategie aus Groitzsch – persönlich und regional verwurzelt',
    ],
  },

  /* ================================================================
   *  MITTWEIDA
   * ================================================================ */
  'mittweida.ki-chatbots': {
    regionSlug: 'mittweida',
    regionName: 'Mittweida',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Mittweida – Pixel Kraftwerk bringt KI-gestützte Kundenkommunikation in die Hochschulstadt Mittelsachsen.',
    intro:
      'Mittweida ist mit rund 15.000 Einwohnern eine Hochschulstadt in Mittelsachsen. Die Hochschule Mittweida mit ihren Schwerpunkten in Medien und IT prägt das Stadtbild und sorgt für eine überdurchschnittliche Technikaffinität. Unternehmen in Mittweida können diese Offenheit nutzen – mit einem KI-Chatbot von Pixel Kraftwerk, der Kundenkommunikation auf ein neues Niveau hebt.',
    paragraphs: [
      'Die Mittweidaer Wirtschaft vereint traditionelles Handwerk mit einer jungen, technikaffinen Community rund um die Hochschule. Ob Ingenieurbüro, IT-Dienstleister oder Handwerksbetrieb – ein KI-Chatbot beantwortet Kundenanfragen sofort und in der Qualität, die Ihre Zielgruppe erwartet. Studierende und Hochschulangehörige sind digitale Kommunikation gewohnt und bewerten einen Chatbot als positives Signal moderner Unternehmensführung.',
      'Für Mittweidaer Dienstleister, die Fachkräfte oder Studierende als Kunden ansprechen, bietet der Chatbot einen Wettbewerbsvorteil: Er ist rund um die Uhr verfügbar, beantwortet Fragen in Echtzeit und kann mehrsprachig agieren – relevant für internationale Studierende an der Hochschule.',
      'Auch klassische Betriebe in Mittweida profitieren: Ein Friseursalon nimmt über den Chatbot Terminbuchungen entgegen, eine Fahrschule beantwortet Fragen zu Kurszeiten und Preisen, ein Restaurant in der Innenstadt managt Reservierungen automatisch. Der Chatbot passt sich an jede Branche an.',
      'Pixel Kraftwerk in Groitzsch liegt rund 65 Kilometer nordwestlich von Mittweida. Persönliche Termine vor Ort oder per Videocall sind jederzeit möglich. Wir verbinden unsere Expertise in KI mit dem Verständnis für mittelsächsische Betriebsstrukturen.',
      'Auf Wunsch binden wir den Chatbot in Ihre bestehende IT-Landschaft ein: CRM, Kalender, Ticketsystem oder Buchungsplattform. Für IT-affine Betriebe in Mittweida bieten wir auch erweiterte Optionen wie API-Zugriff und individuelle Dialoglogik.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot besonders gut für technikaffine Kunden in Mittweida?',
        a: 'Ja. Die Hochschulstadt Mittweida hat eine überdurchschnittlich digital affine Bevölkerung. Ein Chatbot wird hier nicht als Fremdkörper, sondern als zeitgemäßer Service wahrgenommen.',
      },
      {
        q: 'Kann der Chatbot mehrsprachig für internationale Studierende funktionieren?',
        a: 'Absolut. Wir richten den Chatbot auf Wunsch mehrsprachig ein – etwa Deutsch und Englisch – sodass auch internationale Hochschulangehörige problemlos kommunizieren können.',
      },
      {
        q: 'Bietet Pixel Kraftwerk auch erweiterte KI-Lösungen für IT-Betriebe in Mittweida?',
        a: 'Ja. Für technisch versierte Unternehmen bieten wir API-Zugang, individuelle Dialoglogik und Anbindungen an Ticketsysteme oder eigene Datenbanken.',
      },
      {
        q: 'Wie funktioniert die Zusammenarbeit über die Entfernung von 65 km?',
        a: 'Wir arbeiten mit einer Kombination aus Vor-Ort-Terminen und Videocalls. Die Einrichtung und Erstschulung erfolgt persönlich, laufende Betreuung flexibel per Fernzugriff.',
      },
    ],
    highlights: [
      'KI-Chatbot passend zur technikaffinen Hochschulstadt Mittweida',
      'Mehrsprachige Dialogführung für internationale Zielgruppen',
      'Erweiterte Optionen: API-Zugang und individuelle Dialoglogik',
      'Persönliche Betreuung aus Groitzsch (~65 km)',
    ],
  },

  'mittweida.telefonassistenten': {
    regionSlug: 'mittweida',
    regionName: 'Mittweida',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Mittweida – Pixel Kraftwerk sichert Ihre telefonische Erreichbarkeit in der Hochschulstadt Mittelsachsen.',
    intro:
      'Mittweida verbindet Hochschulflair mit mittelständischer Wirtschaftskraft. Vom Ingenieurbüro über den Handwerksbetrieb bis zur studentischen Dienstleistung – wenn das Telefon klingelt und niemand abnehmen kann, gehen Aufträge verloren. Unser Telefonassistent sorgt dafür, dass jeder Anruf professionell entgegengenommen wird.',
    paragraphs: [
      'In Mittweida arbeiten viele Betriebe mit kleinen Teams: Der Geschäftsführer ist gleichzeitig Projektleiter, Berater und Vertriebler. Wenn er im Kundentermin oder auf der Baustelle ist, klingelt das Telefon ungehört. Unser Telefonassistent übernimmt diese Situation: Er begrüßt Anrufende professionell in Ihrem Firmennamen, erfasst das Anliegen und leitet es strukturiert weiter.',
      'Für Praxen und Bildungseinrichtungen in Mittweida bietet der Assistent eine spürbare Entlastung: Terminanfragen, Kursanmeldungen und allgemeine Informationswünsche werden automatisch aufgenommen und sortiert – das Empfangsteam kann sich auf die Betreuung vor Ort konzentrieren.',
      'Die Mittweidaer Wirtschaft profitiert von der Hochschule: Ausgründungen, Start-ups und junge Unternehmen wachsen schnell und brauchen skalierbare Lösungen. Unser Telefonassistent wächst mit – ohne dass Sie eine Telefonzentrale aufbauen müssen.',
      'Wir passen den Assistenten an Ihre Branche und Ihre Abläufe an. Ob technische Rückfragen eines Ingenieurbüros oder Kursanfragen einer Fahrschule – die Gesprächslogik wird individuell auf Ihr Geschäft zugeschnitten.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch für Start-ups und junge Unternehmen in Mittweida sinnvoll sein?',
        a: 'Besonders sinnvoll. Junge Unternehmen haben oft noch kein Empfangsteam, aber bereits Kundenanfragen. Der Assistent gibt Ihnen eine professionelle telefonische Präsenz ab Tag eins.',
      },
      {
        q: 'Lässt sich der Assistent mit meiner Bürosoftware in Mittweida verbinden?',
        a: 'Ja. Wir binden den Assistenten an gängige CRM-Systeme, Ticketlösungen und Kalender an – auch an spezialisierte Software, die in Ingenieurbüros oder IT-Unternehmen üblich ist.',
      },
      {
        q: 'Wie klingt der Telefonassistent für Anrufende?',
        a: 'Professionell und freundlich. Wir gestalten die Begrüßung und den Gesprächsfluss so, dass Anrufende sich gut aufgehoben fühlen – angepasst an den Ton Ihres Unternehmens.',
      },
      {
        q: 'Betreut Pixel Kraftwerk Mittweidaer Kunden persönlich vor Ort?',
        a: 'Ja. Für die Ersteinrichtung und Workshops kommen wir persönlich nach Mittweida. Im laufenden Betrieb arbeiten wir flexibel per Videocall und Fernzugriff.',
      },
    ],
    highlights: [
      'Professionelle Anrufannahme für wachsende Betriebe und Start-ups',
      'Skalierbare Lösung ohne eigene Telefonzentrale',
      'Integration in CRM, Ticketsysteme und Branchensoftware',
      'Persönliche Einrichtung vor Ort in Mittweida',
    ],
  },

  'mittweida.automatisierungen': {
    regionSlug: 'mittweida',
    regionName: 'Mittweida',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Mittweida – Pixel Kraftwerk verbindet Ihre Systeme und eliminiert Routineaufgaben in der Hochschulstadt.',
    intro:
      'Mittweida steht für Technikaffinität und Innovation. Doch selbst in einer Hochschulstadt werden viele Geschäftsprozesse noch manuell abgewickelt: Daten werden kopiert, E-Mails einzeln geschrieben, Follow-ups vergessen. Pixel Kraftwerk automatisiert diese Abläufe – mit Tools und Methoden, die zur IT-kompetenten Unternehmenslandschaft Mittweidas passen.',
    paragraphs: [
      'In Mittweidaer Ingenieurbüros und IT-Dienstleistern sind die Systeme oft schon digital – aber nicht verbunden. Projektanfragen kommen per E-Mail, werden manuell ins Projekttool übertragen, Angebote einzeln erstellt und Statusupdates per Hand verschickt. Automatisierungen verknüpfen diese Schritte: Anfrage → Projekterstellung → Angebot → Statusupdate – alles automatisch und nachvollziehbar.',
      'Für Handwerksbetriebe und Dienstleister in Mittweida bieten Automatisierungen handfeste Vorteile: Terminbestätigungen und Erinnerungen laufen automatisch, Kontaktanfragen von der Webseite landen direkt im CRM, und After-Sales-Mails werden termingerecht versendet. Das spart wöchentlich mehrere Stunden manueller Arbeit.',
      'Ausgründungen und Start-ups rund um die Hochschule Mittweida wachsen oft schnell. Automatisierungen ermöglichen es, dieses Wachstum zu bewältigen, ohne jeden neuen Prozess mit zusätzlichem Personal abzudecken. Die Infrastruktur skaliert mit dem Geschäft.',
      'Wir arbeiten mit Make, n8n und individuellen API-Anbindungen. Für IT-affine Unternehmen in Mittweida bieten wir auch die Möglichkeit, Workflows gemeinsam zu entwickeln und anzupassen – mit voller Transparenz über die technische Umsetzung.',
    ],
    faqs: [
      {
        q: 'Können Mittweidaer IT-Unternehmen die Automatisierungen selbst erweitern?',
        a: 'Ja. Wir setzen auf offene Plattformen wie Make und n8n mit vollständiger Dokumentation. Technisch versierte Teams können Workflows eigenständig anpassen und erweitern.',
      },
      {
        q: 'Welche Automatisierungen empfehlen Sie für ein Ingenieurbüro in Mittweida?',
        a: 'Projektanfragen automatisch ins Tool übertragen, Angebote nach dem Erstgespräch generieren, Statusupdates an Kunden versenden und Nachfass-Mails terminieren – das sind die wirkungsvollsten Einstiegspunkte.',
      },
      {
        q: 'Wie unterscheidet sich Ihr Ansatz von Standard-Automatisierungstools?',
        a: 'Wir liefern nicht nur das Tool, sondern die komplette Prozessanalyse und -umsetzung. Wir verstehen Ihre Abläufe und bauen Automatisierungen, die exakt dazu passen – nicht andersherum.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit zwischen Groitzsch und Mittweida?',
        a: 'Prozessanalyse und Ersteinrichtung erfolgen persönlich vor Ort. Die laufende Betreuung, Anpassungen und Erweiterungen wickeln wir effizient per Videocall und Fernzugriff ab.',
      },
    ],
    highlights: [
      'Automatisierte Prozessketten für Ingenieurbüros und IT-Dienstleister',
      'Skalierbare Workflows für wachsende Start-ups',
      'Offene Plattformen mit voller Transparenz für technikaffine Teams',
      'Persönliche Prozessanalyse vor Ort in Mittweida',
    ],
  },

  'mittweida.webseiten': {
    regionSlug: 'mittweida',
    regionName: 'Mittweida',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Mittweida – Pixel Kraftwerk erstellt moderne Internetauftritte für die Hochschulstadt in Mittelsachsen.',
    intro:
      'In einer Hochschulstadt wie Mittweida ist die digitale Erwartungshaltung besonders hoch: Studierende, Hochschulangehörige und technikaffine Kunden erwarten schnelle, moderne und mobiloptimierte Webseiten. Pixel Kraftwerk erstellt Internetauftritte, die diesem Anspruch gerecht werden und Ihren Betrieb professionell repräsentieren.',
    paragraphs: [
      'Mittweida hat eine junge, digital versierte Zielgruppe. Eine veraltete oder langsam ladende Webseite wird hier schneller wahrgenommen – und abgestraft – als anderswo. Wir erstellen Webseiten mit modernem Design, exzellenter Performance und einer Benutzererfahrung, die auch anspruchsvolle Besucher überzeugt.',
      'Für Unternehmen, die mit der Hochschule kooperieren oder Studierende als Zielgruppe haben, gestalten wir Seiten, die relevante Informationen prominent platzieren: Praktikumsangebote, Werkstudentenstellen, studentische Rabatte oder Kooperationsmöglichkeiten. So nutzen Sie die Hochschulnähe als Wettbewerbsvorteil.',
      'Handwerksbetriebe und lokale Dienstleister in Mittweida erhalten einen Internetauftritt, der Referenzen, Leistungen und Kontaktmöglichkeiten klar kommuniziert. Integrierte Formulare, Chatbot-Anbindung und Terminbuchungsfunktionen verwandeln Besucher in Anfragen.',
      'Technisch setzen wir auf schnelle Ladezeiten, responsives Design und saubere Suchmaschinenoptimierung. Jede Seite wird so gebaut, dass Google sie versteht und Mittweidaer Kunden sie finden.',
    ],
    faqs: [
      {
        q: 'Warum ist eine moderne Webseite in Mittweida besonders wichtig?',
        a: 'Weil die Hochschulstadt eine überdurchschnittlich technikaffine Bevölkerung hat. Veraltete Webseiten fallen hier stärker auf und kosten Vertrauen – und damit Kunden.',
      },
      {
        q: 'Kann die Webseite auch Stellenangebote und Praktikumsplätze für Studierende anzeigen?',
        a: 'Ja. Wir integrieren eine Stellenseite oder einen Bereich für Kooperationsangebote, der einfach aktualisierbar ist und gezielt Studierende der Hochschule Mittweida anspricht.',
      },
      {
        q: 'Welche Technologien nutzt Pixel Kraftwerk für Webseiten?',
        a: 'Wir setzen auf moderne Frameworks mit schnellen Ladezeiten und erstellen auf Wunsch auch Seiten mit bewährten CMS-Lösungen, die Sie selbst pflegen können.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für Mittweida?',
        a: 'Je nach Umfang zwischen drei und acht Wochen. Komplexere Projekte mit individueller Programmierung oder Shopfunktionen benötigen etwas mehr Zeit.',
      },
    ],
    highlights: [
      'Moderne Webseiten für die technikaffine Zielgruppe in Mittweida',
      'Integration von Stellenangeboten und Hochschul-Kooperationen',
      'Exzellente Performance und mobiles Design als Standard',
      'Selbst pflegbar mit benutzerfreundlichem CMS',
    ],
  },

  'mittweida.seo-top-3': {
    regionSlug: 'mittweida',
    regionName: 'Mittweida',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Mittweida – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google und nutzt die Hochschulstadt als SEO-Hebel.',
    intro:
      'In Mittweida suchen Studierende, Hochschulangehörige und Bürger gleichermaßen online nach lokalen Angeboten. Wer in den Top 3 bei Google steht, bekommt den Großteil der Klicks. Pixel Kraftwerk entwickelt eine SEO-Strategie, die Ihren Mittweidaer Betrieb dorthin bringt – und dort hält.',
    paragraphs: [
      'Die Suchlandschaft in Mittweida bietet ein interessantes Profil: Durch die Hochschule gibt es eine konstante Fluktuation an neuen Einwohnern, die alle lokal suchen – nach Ärzten, Friseuren, Restaurants, Fahrschulen. Wer bei diesen Suchanfragen ganz oben steht, gewinnt jedes Semester neue Kunden.',
      'Wir entwickeln eine SEO-Strategie, die sowohl auf etablierte Mittweidaer als auch auf neu zugezogene Studierende abzielt. Das bedeutet: Lokale Keywords wie „Zahnarzt Mittweida" werden ebenso bedient wie informationsgetriebene Suchanfragen wie „günstige Fahrschule bei Chemnitz".',
      'Technische SEO bildet die Grundlage: Schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und eine saubere Seitenarchitektur. Darauf aufbauend erstellen wir standortspezifische Inhalte, optimieren Ihr Google Business-Profil und bauen lokale Verzeichniseinträge auf.',
      'Die Ergebnisse dokumentieren wir monatlich: Ranking-Positionen, Suchvolumen, organischer Traffic und Kontaktanfragen. So können Sie nachvollziehen, wie Ihre Sichtbarkeit in Mittweida Schritt für Schritt wächst.',
    ],
    faqs: [
      {
        q: 'Warum ist die Hochschule Mittweida ein SEO-Vorteil?',
        a: 'Weil jedes Semester neue Menschen nach Mittweida kommen, die lokal suchen. Diese ständige Nachfrage nach lokalen Dienstleistungen schafft ein zuverlässiges Suchvolumen für gut optimierte Webseiten.',
      },
      {
        q: 'Wie schnell kann ich für „Friseur Mittweida" auf Platz 1 kommen?',
        a: 'Das hängt vom aktuellen Wettbewerb ab. Bei lokalen Begriffen in einer Kleinstadt wie Mittweida sind erste Top-3-Ergebnisse oft nach sechs bis zehn Wochen erreichbar.',
      },
      {
        q: 'Betreut Pixel Kraftwerk auch die Google Business-Seite?',
        a: 'Ja. Die Optimierung Ihres Google Business-Profils ist zentraler Bestandteil unserer lokalen SEO-Strategie – von vollständigen Angaben über Fotos bis zu regelmäßigen Beiträgen.',
      },
      {
        q: 'Was kostet SEO für einen Betrieb in Mittweida?',
        a: 'Wir bieten monatliche Pakete an, die zur Betriebsgröße und zum Wettbewerbsumfeld passen. Ein kostenloses Erstgespräch mit Sichtbarkeitsanalyse zeigt Ihnen Ihr Potenzial.',
      },
    ],
    highlights: [
      'SEO-Strategie für konstante Studentennachfrage in Mittweida',
      'Lokale und regionale Keywords für maximale Sichtbarkeit',
      'Google Business-Profil optimiert für Hochschulstadt-Dynamik',
      'Monatliche Transparenz-Reports mit konkreten Kennzahlen',
    ],
  },

  /* ================================================================
   *  QUERFURT
   * ================================================================ */
  'querfurt.ki-chatbots': {
    regionSlug: 'querfurt',
    regionName: 'Querfurt',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Querfurt – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation im Saalekreis.',
    intro:
      'Querfurt im Saalekreis zählt rund 11.000 Einwohner und ist überregional bekannt für die imposante Burg Querfurt. Die Wirtschaft ist geprägt durch Landwirtschaft, Handwerk und einen wachsenden Tourismussektor rund um die Burg. Ein KI-Chatbot von Pixel Kraftwerk beantwortet die Fragen Ihrer Kunden und Gäste rund um die Uhr – auch wenn Ihr Team anderweitig beschäftigt ist.',
    paragraphs: [
      'Querfurter Betriebe stehen vor einer typischen Herausforderung ländlicher Regionen: Die Personaldecke ist dünn, die Anfragen vielfältig. Ein KI-Chatbot auf Ihrer Webseite fängt diese Anfragen zuverlässig auf – ob Fragen zu Öffnungszeiten, Produktverfügbarkeit oder Anfahrtswegen. Die Antworten sind sofort da, auch abends, am Wochenende und an Feiertagen.',
      'Für tourismusnahe Betriebe rund um die Burg Querfurt ist der Chatbot besonders wertvoll: Pensionen, Gaststätten und Führungsanbieter erhalten saisonale Anfragen zu Verfügbarkeiten, Preisen und Veranstaltungen. Der Chatbot beantwortet diese sofort, nimmt Reservierungswünsche entgegen und leitet komplexe Anfragen an Ihr Team weiter.',
      'Landwirtschaftliche Betriebe und Agrarhändler in Querfurt und Umgebung nutzen den Chatbot, um Bestellanfragen, Lieferzeitenanfragen und technische Fragen zu Produkten automatisiert zu beantworten. Gerade während der Erntezeit, wenn das Team auf dem Feld ist, stellt der Chatbot die Erreichbarkeit sicher.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 50 Kilometer östlich von Querfurt. Persönliche Termine in Querfurt – ob im Betrieb oder in der Nähe der Burg – sind jederzeit möglich. Wir kennen die Herausforderungen ländlicher Standorte und entwickeln Lösungen, die zu Ihrer Betriebsrealität passen.',
    ],
    faqs: [
      {
        q: 'Kann ein KI-Chatbot auch Touristen und Gästen in Querfurt helfen?',
        a: 'Ja. Der Chatbot beantwortet Fragen zu Sehenswürdigkeiten, Öffnungszeiten, Übernachtungsmöglichkeiten und Veranstaltungen – auch in Englisch, wenn gewünscht.',
      },
      {
        q: 'Eignet sich ein Chatbot für landwirtschaftliche Betriebe im Saalekreis?',
        a: 'Absolut. Gerade in der Landwirtschaft gibt es viele wiederkehrende Anfragen zu Produkten, Preisen und Lieferzeiten. Der Chatbot beantwortet diese auch dann, wenn Sie auf dem Feld oder im Stall sind.',
      },
      {
        q: 'Wie schnell ist der Chatbot für mein Querfurter Unternehmen einsatzbereit?',
        a: 'In der Regel innerhalb von zwei bis vier Wochen. Wir starten mit einer Analyse Ihrer häufigsten Anfragen und bauen darauf den Chatbot auf.',
      },
      {
        q: 'Kommt Pixel Kraftwerk auch persönlich nach Querfurt?',
        a: 'Ja, von Groitzsch erreichen wir Querfurt in rund 45 Minuten. Persönliche Erstgespräche, Workshops und Einrichtung vor Ort sind selbstverständlich.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Kunden, Gäste und Geschäftspartner',
      'Tourismusfähig: Chatbot beantwortet Fragen rund um Burg Querfurt',
      'Ideal für landwirtschaftliche Betriebe mit saisonalen Anfragen',
      'Persönliche Betreuung aus Groitzsch (~50 km entfernt)',
    ],
  },

  'querfurt.telefonassistenten': {
    regionSlug: 'querfurt',
    regionName: 'Querfurt',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Querfurt – Pixel Kraftwerk sichert Ihre telefonische Erreichbarkeit für Landwirtschaft, Handwerk und Tourismus im Saalekreis.',
    intro:
      'In Querfurt ist das Telefon für viele Betriebe der wichtigste Kontaktweg – vom Agrarbetrieb auf dem Feld über den Handwerker auf der Baustelle bis zum Gastgeber, der gerade Gäste empfängt. Wenn niemand abnimmt, geht ein Auftrag oder eine Buchung verloren. Unser Telefonassistent stellt sicher, dass das nicht passiert.',
    paragraphs: [
      'Landwirtschaftliche Betriebe rund um Querfurt sind während der Saat- und Erntezeit praktisch ganztägig auf dem Feld. In dieser Phase klingelt das Bürotelefon oft ungehört. Unser Telefonassistent nimmt Anrufe entgegen, erfasst Bestellungen, Lieferterminanfragen und technische Rückfragen und leitet sie als strukturierte Nachricht weiter – per E-Mail, SMS oder ins CRM.',
      'Für tourismusnahe Betriebe in Querfurt – Pensionen, Ferienwohnungen, Gaststätten – ist die telefonische Erreichbarkeit in der Saison entscheidend. Gäste rufen an, um Zimmer zu erfragen, Anreiseinformationen zu bekommen oder Reservierungen vorzunehmen. Der Assistent nimmt diese Anliegen professionell auf und sorgt dafür, dass keine Buchung verloren geht.',
      'Handwerksbetriebe in Querfurt und den umliegenden Ortschaften profitieren von der Priorisierungsfunktion: Dringende Notfälle wie ein Wasserrohrbruch werden sofort per Push-Nachricht weitergeleitet, reguläre Anfragen als E-Mail zusammengefasst. So behalten Sie auch unterwegs den Überblick.',
      'Die Einrichtung erfolgt in enger Abstimmung mit Ihren Abläufen. Wir definieren gemeinsam, welche Informationen erfasst werden, wann direkt durchgestellt wird und wie die Weiterleitung erfolgt. Von Groitzsch aus betreuen wir Sie persönlich.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Buchungsanfragen für Querfurter Pensionen aufnehmen?',
        a: 'Ja. Der Assistent erfasst gewünschte An- und Abreisedaten, Personenanzahl und Sonderwünsche und leitet alles strukturiert an Sie weiter – oder bucht direkt in Ihrem Buchungssystem.',
      },
      {
        q: 'Ist der Telefonassistent auch während der Erntesaison rund um die Uhr erreichbar?',
        a: 'Ja, der Assistent arbeitet 24 Stunden am Tag, 7 Tage die Woche – auch in der Hochsaison, wenn Ihr Team auf dem Feld gebunden ist.',
      },
      {
        q: 'Kann der Assistent zwischen dringenden und normalen Anrufen unterscheiden?',
        a: 'Absolut. Wir definieren gemeinsam Regeln: Notfälle werden sofort weitergeleitet, reguläre Anfragen als zusammengefasste Nachricht zugestellt.',
      },
      {
        q: 'Was kostet ein Telefonassistent für einen Querfurter Betrieb?',
        a: 'Die Kosten richten sich nach Umfang und Anrufvolumen. In einem kostenlosen Erstgespräch ermitteln wir Ihren Bedarf und erstellen ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Zuverlässige Erreichbarkeit auch während Ernte und Saisonbetrieb',
      'Buchungsanfragen für Tourismus und Gastronomie automatisiert erfassen',
      'Intelligente Priorisierung: Notfälle sofort, Routine gesammelt',
      'Persönliche Betreuung aus Groitzsch (~50 km)',
    ],
  },

  'querfurt.automatisierungen': {
    regionSlug: 'querfurt',
    regionName: 'Querfurt',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Querfurt – Pixel Kraftwerk verbindet Ihre Systeme und spart Zeit in Landwirtschaft, Handwerk und Tourismus.',
    intro:
      'In Querfurt werden viele Geschäftsabläufe noch manuell erledigt: Bestellungen per Fax, Buchungsbestätigungen per einzelner E-Mail, Abrechnungen in Excel. Pixel Kraftwerk automatisiert diese Routinen – zugeschnitten auf die Anforderungen von Agrarbetrieben, Handwerkern und touristischen Anbietern im Saalekreis.',
    paragraphs: [
      'Agrarbetriebe und Landhandelsunternehmen in Querfurt verarbeiten täglich Bestellungen, Lieferscheine und Rechnungen. Automatisierungen übernehmen die gesamte Kette: Eingehende Bestellungen werden automatisch erfasst, Lieferscheine generiert, Rechnungen erstellt und Zahlungseingänge überwacht. Manuelle Übertragungsfehler gehören damit der Vergangenheit an.',
      'Für Pensionen, Ferienwohnungen und Gaststätten rund um die Burg Querfurt automatisieren wir den Buchungsprozess: Von der Anfrage über die Bestätigung bis zur Check-in-Information und der Bewertungsanfrage nach dem Aufenthalt – alles läuft automatisch und hinterlässt bei Ihren Gästen einen professionellen Eindruck.',
      'Handwerksbetriebe profitieren von automatisierten Angebots- und Rechnungsprozessen: Nach der Aufmaßnahme wird das Angebot automatisch erstellt, nach Auftragsabschluss die Rechnung generiert und bei ausbleibender Zahlung eine Erinnerung versendet. Das spart pro Vorgang erheblich Zeit.',
      'Wir setzen auf bewährte Plattformen wie Make und n8n sowie individuelle Anbindungen. Die Einführung erfolgt schrittweise – wir starten mit den dringendsten Zeitfressern und bauen die Automatisierung kontinuierlich aus.',
    ],
    faqs: [
      {
        q: 'Können auch Fax-Bestellungen für Querfurter Agrarbetriebe automatisiert verarbeitet werden?',
        a: 'Ja. Wir richten eine digitale Fax-Lösung ein, die eingehende Faxe automatisch als digitale Dokumente erfasst und in Ihr System überträgt. Langfristig begleiten wir Sie bei der Umstellung auf digitale Bestellwege.',
      },
      {
        q: 'Lohnt sich die Automatisierung für eine kleine Pension in Querfurt?',
        a: 'Gerade kleine Unterkünfte profitieren stark, weil der administrative Aufwand pro Buchung bei wenigen Zimmern anteilig höher ist. Automatische Bestätigungen und Check-in-Mails sparen pro Buchung 15-20 Minuten.',
      },
      {
        q: 'Kann ich bestehende Branchensoftware in die Automatisierung einbinden?',
        a: 'Ja. Wir arbeiten mit Ihren vorhandenen Tools und verbinden sie über Schnittstellen. Wo keine Standard-API existiert, finden wir individuelle Lösungen.',
      },
      {
        q: 'Wie schnell sehe ich Ergebnisse nach der Einführung?',
        a: 'Die ersten Quick Wins – etwa automatische Terminbestätigungen oder Bestellerfassungen – sind innerhalb weniger Tage spürbar. Komplexere Prozessketten bauen wir schrittweise auf.',
      },
    ],
    highlights: [
      'Automatisierte Bestell- und Lieferketten für Agrarbetriebe',
      'Buchungsprozess für Tourismus: Anfrage bis Bewertung automatisiert',
      'Angebots- und Rechnungserstellung für Handwerksbetriebe',
      'Schrittweise Einführung mit persönlicher Betreuung aus Groitzsch',
    ],
  },

  'querfurt.webseiten': {
    regionSlug: 'querfurt',
    regionName: 'Querfurt',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Querfurt – Pixel Kraftwerk gestaltet Ihren Internetauftritt mit lokaler Sichtbarkeit im Saalekreis.',
    intro:
      'Querfurt zieht mit seiner imposanten Burg jährlich tausende Besucher an – und viele davon suchen vorher online nach Unterkünften, Gaststätten und lokalen Angeboten. Eine professionelle Webseite ist deshalb nicht nur Visitenkarte, sondern aktives Akquise-Werkzeug. Pixel Kraftwerk erstellt Webseiten, die Querfurter Betriebe sichtbar und buchbar machen.',
    paragraphs: [
      'Touristische Anbieter in Querfurt brauchen Webseiten, die Besucher überzeugen: Ansprechende Bilder der Burg und Umgebung, klare Informationen zu Angebot und Preisen, einfache Kontakt- und Buchungsmöglichkeiten. Wir gestalten Seiten, die genau das leisten – mobiloptimiert, schnell ladend und mit Bildern, die die Schönheit der Region einfangen.',
      'Für landwirtschaftliche Betriebe und Direktvermarkter rund um Querfurt erstellen wir Webseiten mit Produktübersichten, saisonalen Angeboten und Anfahrtskarten. Kunden sehen sofort, was verfügbar ist, wie sie zum Hofladen kommen und wie sie bestellen können.',
      'Handwerksbetriebe in Querfurt erhalten einen Internetauftritt, der Kompetenz und Vertrauen ausstrahlt: Referenzen, Leistungsübersicht, Einzugsgebiet und Kontaktmöglichkeiten – klar strukturiert und auf lokale Suchbegriffe optimiert.',
      'Jede Webseite beinhaltet grundlegende SEO-Maßnahmen, mobile Optimierung und ein benutzerfreundliches CMS. So können Sie Texte, Bilder und Angebote selbst aktualisieren – und wir aus Groitzsch sind bei Fragen nur einen Anruf entfernt.',
    ],
    faqs: [
      {
        q: 'Kann die Webseite auch Buchungen für Querfurter Pensionen entgegennehmen?',
        a: 'Ja. Wir integrieren ein Buchungssystem oder Kontaktformular, über das Gäste direkt anfragen oder buchen können – inklusive automatischer Bestätigung.',
      },
      {
        q: 'Wird die Webseite auch bei Google für Touristen sichtbar?',
        a: 'Ja. Wir optimieren die Seite für touristische Suchbegriffe wie „Pension Querfurt" oder „Übernachtung Burg Querfurt" und verknüpfen sie mit Ihrem Google Business-Profil.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen?',
        a: 'Ja. Wir richten ein benutzerfreundliches CMS ein und schulen Sie, sodass Sie saisonale Angebote, Bilder und Texte eigenständig aktualisieren können.',
      },
      {
        q: 'Was kostet eine professionelle Webseite für Querfurt?',
        a: 'Die Kosten richten sich nach Umfang und Funktionalität. In einem kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein transparentes Angebot.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'In der Regel drei bis sechs Wochen – je nach Umfang, Bildmaterial und Abstimmungsbedarf.',
      },
    ],
    highlights: [
      'Webseiten für Tourismus: Burg Querfurt als Ankerpunkt nutzen',
      'Produktübersichten und saisonale Angebote für Direktvermarkter',
      'Integrierte Buchungs- und Kontaktfunktionen',
      'Selbst pflegbar mit benutzerfreundlichem CMS',
    ],
  },

  'querfurt.seo-top-3': {
    regionSlug: 'querfurt',
    regionName: 'Querfurt',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Querfurt – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google und nutzt das touristische Suchvolumen rund um die Burg.',
    intro:
      'Querfurt profitiert von einem besonderen SEO-Vorteil: Die Burg Querfurt generiert ein konstantes Suchvolumen, das auch lokalen Betrieben zugutekommt. Wer bei Google für „Pension Querfurt", „Restaurant Querfurt" oder „Handwerker Saalekreis" ganz oben steht, profitiert direkt von dieser Bekanntheit. Pixel Kraftwerk macht Ihren Betrieb dort sichtbar.',
    paragraphs: [
      'Die Burg Querfurt zieht Suchende an, die nicht nur nach der Burg selbst suchen, sondern auch nach Übernachtungsmöglichkeiten, Restaurants und lokalen Dienstleistungen. Dieses touristische Suchvolumen können Sie als Querfurter Unternehmen für sich nutzen – mit einer SEO-Strategie, die lokale und touristische Keywords verbindet.',
      'Wir optimieren Ihre Webseite für Suchbegriffe, die Ihre Zielgruppe tatsächlich nutzt: Von „Hofladen Querfurt" über „Dachdecker Saalekreis" bis hin zu „Ferienwohnung Burg Querfurt". Für jeden Suchbegriff analysieren wir Wettbewerb und Potenzial, bevor wir die Optimierung starten.',
      'Lokale SEO-Signale sind in Querfurt besonders wirkungsvoll: Ein gepflegtes Google Business-Profil, konsistente Adressdaten in Online-Verzeichnissen und positive Bewertungen machen den Unterschied. Wir kümmern uns um alle diese Faktoren systematisch.',
      'Sie erhalten monatliche Reports, die zeigen, wie sich Ihre Rankings, Ihr Traffic und Ihre Anfragen entwickeln. So wird der Erfolg Ihrer SEO-Investition in Querfurt messbar und nachvollziehbar.',
    ],
    faqs: [
      {
        q: 'Wie profitiert mein Betrieb in Querfurt vom touristischen Suchvolumen?',
        a: 'Touristen suchen nicht nur nach der Burg, sondern auch nach Unterkünften, Gastronomie und lokalen Angeboten. Wenn Ihre Webseite für diese Begriffe rankt, gewinnen Sie Kunden, die sonst nie von Ihnen erfahren hätten.',
      },
      {
        q: 'Lohnt sich SEO für einen Agrarbetrieb in Querfurt?',
        a: 'Ja, besonders für Direktvermarkter und Hofläden. Begriffe wie „Hofladen Querfurt" oder „regionale Produkte Saalekreis" haben relevantes Suchvolumen und oft wenig Wettbewerb.',
      },
      {
        q: 'Wie lange dauert es, bis Ergebnisse sichtbar sind?',
        a: 'Für lokale Suchbegriffe in Querfurt sind erste Rankings meist nach sechs bis zehn Wochen sichtbar. Stabile Top-3-Platzierungen bauen sich über drei bis sechs Monate auf.',
      },
      {
        q: 'Umfasst die SEO-Betreuung auch mein Google Business-Profil?',
        a: 'Ja. Die Pflege und Optimierung Ihres Google Business-Profils ist fester Bestandteil unserer lokalen SEO-Strategie – inklusive regelmäßiger Beiträge und Bewertungsmanagement.',
      },
    ],
    highlights: [
      'Touristisches Suchvolumen der Burg Querfurt für Ihren Betrieb nutzen',
      'Lokale und touristische Keywords strategisch kombinieren',
      'Google Business-Profil als zentraler Sichtbarkeitshebel',
      'Monatliche Reports mit messbaren Ergebnissen',
    ],
  },

  /* ================================================================
   *  PENIG
   * ================================================================ */
  'penig.ki-chatbots': {
    regionSlug: 'penig',
    regionName: 'Penig',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Penig – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation an der Zwickauer Mulde in Mittelsachsen.',
    intro:
      'Penig liegt an der Zwickauer Mulde zwischen Leipzig und Chemnitz und zählt rund 9.000 Einwohner. Die Kleinstadt verbindet ländlichen Charme mit einer verkehrsgünstigen Lage an der A72. Handwerk, Gewerbe und Dienstleistung prägen die lokale Wirtschaft. Ein KI-Chatbot von Pixel Kraftwerk gibt Peniger Betrieben eine digitale Stimme – rund um die Uhr erreichbar.',
    paragraphs: [
      'In Penig sind die meisten Betriebe inhabergeführt – vom Tischler über den Installateur bis zur Physiotherapie. Die Teams sind klein, die Tage voll. Ein KI-Chatbot auf der Webseite beantwortet Kundenanfragen automatisch: Öffnungszeiten, Leistungsübersichten, Terminwünsche und Anfahrtsfragen – ohne dass jemand am Computer sitzen muss.',
      'Die Lage zwischen Leipzig und Chemnitz bringt Peniger Betrieben ein erweitertes Einzugsgebiet. Kunden aus beiden Großstädten suchen online nach Alternativen im Umland. Der Chatbot kann gezielt darauf eingehen: Er beantwortet Fragen zur Anfahrt, hebt Standortvorteile hervor und qualifiziert Anfragen vor, bevor Ihr Team zurückruft.',
      'Auch Gastronomiebetriebe und Freizeitanbieter an der Zwickauer Mulde nutzen den Chatbot effektiv: Reservierungsanfragen, Informationen zu Veranstaltungen und Fragen zu Gruppenangeboten werden automatisch bearbeitet. Gerade in der Wander- und Radsaison entlastet das spürbar.',
      'Pixel Kraftwerk in Groitzsch liegt rund 50 Kilometer nördlich von Penig. Persönliche Termine vor Ort, ob in Ihrem Betrieb oder an der Mulde, sind jederzeit möglich. Wir verstehen die Bedürfnisse kleiner Betriebe und liefern Lösungen, die genau dazu passen.',
    ],
    faqs: [
      {
        q: 'Lohnt sich ein KI-Chatbot für einen kleinen Betrieb in Penig?',
        a: 'Gerade für kleine Betriebe mit begrenztem Personal ist der Chatbot besonders wertvoll. Schon wenige automatisch beantwortete Anfragen pro Tag entlasten spürbar und verhindern verpasste Kontakte.',
      },
      {
        q: 'Kann der Chatbot auch Kunden aus Leipzig und Chemnitz für meinen Peniger Betrieb gewinnen?',
        a: 'Ja. Der Chatbot kann Standortvorteile wie gute Erreichbarkeit über die A72, kostenlose Parkplätze und persönlichen Service aktiv kommunizieren und so Kunden aus den Großstädten überzeugen.',
      },
      {
        q: 'Wie wird der Chatbot auf meiner Webseite eingebunden?',
        a: 'Wir integrieren den Chatbot als Widget in Ihre bestehende Webseite – ob WordPress, Baukasten oder individuelle Seite. Die Installation dauert in der Regel weniger als eine Stunde.',
      },
      {
        q: 'Kommt Pixel Kraftwerk für die Einrichtung auch nach Penig?',
        a: 'Ja, von Groitzsch erreichen wir Penig in rund 40 Minuten. Persönliche Erstgespräche, Schulungen und technische Einrichtung vor Ort sind selbstverständlich.',
      },
    ],
    highlights: [
      'Digitale Erreichbarkeit für inhabergeführte Betriebe in Penig',
      'Kunden aus Leipzig und Chemnitz über die A72 gezielt ansprechen',
      'Einsatzfertig auf jeder Webseite – auch einfache Seiten',
      'Persönliche Betreuung aus Groitzsch (~50 km)',
    ],
  },

  'penig.telefonassistenten': {
    regionSlug: 'penig',
    regionName: 'Penig',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Penig – Pixel Kraftwerk sichert Ihre telefonische Erreichbarkeit an der Zwickauer Mulde in Mittelsachsen.',
    intro:
      'In Penig ist das Telefon für viele Kunden der bevorzugte Weg, einen Betrieb zu kontaktieren – ob Handwerksanfrage, Praxistermin oder Tischreservierung. Wenn Ihr Team auf der Baustelle, beim Patienten oder in der Küche ist, übernimmt unser Telefonassistent und sorgt dafür, dass kein Anruf verloren geht.',
    paragraphs: [
      'Peniger Handwerksbetriebe – Tischler, Elektriker, Dachdecker – sind oft im gesamten Gebiet zwischen Leipzig und Chemnitz unterwegs. Während der Meister auf Montage in Rochlitz oder Burgstädt ist, klingelt das Bürotelefon. Unser Telefonassistent beantwortet den Anruf professionell, erfasst Art und Umfang des Anliegens und leitet alles strukturiert weiter.',
      'Für Arztpraxen und Gesundheitsdienstleister in Penig ist der Assistent eine tägliche Entlastung: Terminwünsche, Rezeptanfragen und Überweisungsfragen werden automatisch aufgenommen und sortiert. Das Praxisteam kann sich auf Behandlung und Betreuung konzentrieren, ohne ständig zwischen Patient und Telefon zu wechseln.',
      'Gastronomie und Freizeitanbieter an der Zwickauer Mulde nutzen den Assistenten, um Reservierungen und Gruppenanfragen entgegenzunehmen – besonders in der Saison, wenn gleichzeitig Gäste vor Ort bedient werden müssen.',
      'Die Einrichtung passen wir exakt an Ihre Abläufe an: Welche Informationen werden bei welchem Anruftyp erfasst? Wann wird direkt durchgestellt? Welche Anliegen haben Priorität? Diese Regeln entwickeln wir gemeinsam, damit der Assistent nahtlos in Ihren Alltag in Penig passt.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent zwischen privaten und gewerblichen Anrufen unterscheiden?',
        a: 'Ja. Wir programmieren Rückfragen, die den Anruftyp identifizieren, und leiten die Informationen entsprechend weiter – z. B. gewerbliche Anfragen an den Vertrieb, private an den Empfang.',
      },
      {
        q: 'Funktioniert der Assistent auch, wenn ich nur wenige Anrufe pro Tag bekomme?',
        a: 'Gerade dann ist er wertvoll: Jeder einzelne verpasste Anruf kann einen Auftrag bedeuten. Der Assistent stellt sicher, dass auch bei niedrigem Volumen kein Kontakt verloren geht.',
      },
      {
        q: 'Wie schnell ist der Telefonassistent für meinen Betrieb in Penig einsatzbereit?',
        a: 'In der Regel innerhalb von ein bis zwei Wochen. Wir definieren Ihre Gesprächsabläufe, richten den Assistenten ein und testen ihn gemeinsam, bevor er live geht.',
      },
      {
        q: 'Kann der Assistent auch Reservierungen für Restaurants in Penig aufnehmen?',
        a: 'Ja. Der Assistent erfasst Datum, Uhrzeit, Personenanzahl und Sonderwünsche und leitet alles als strukturierte Nachricht oder direkt in Ihr Buchungssystem weiter.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch auf Montage zwischen Leipzig und Chemnitz',
      'Automatisierte Terminerfassung für Praxen und Gastronomie',
      'Intelligente Weiterleitung nach Anruftyp und Dringlichkeit',
      'Schnelle Einrichtung in ein bis zwei Wochen',
    ],
  },

  'penig.automatisierungen': {
    regionSlug: 'penig',
    regionName: 'Penig',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Penig – Pixel Kraftwerk verbindet Ihre Systeme und reduziert manuelle Routinearbeit an der Zwickauer Mulde.',
    intro:
      'In Penig arbeiten viele Betriebe noch mit einer Mischung aus Papier, Telefon und einzelnen digitalen Werkzeugen. Bestellungen werden manuell erfasst, Terminbestätigungen einzeln verschickt, Rechnungen in Excel erstellt. Pixel Kraftwerk verbindet diese Insellösungen zu durchgängigen Workflows – abgestimmt auf die Betriebsgrößen und Branchen in Penig.',
    paragraphs: [
      'Handwerksbetriebe in Penig verarbeiten täglich Anfragen, Kostenvoranschläge und Rechnungen. Automatisierungen übernehmen den wiederkehrenden Teil: Eine Anfrage von der Webseite oder vom Telefonassistenten wird automatisch im System erfasst, ein Angebotsentwurf erstellt und dem Kunden zugesendet. Nach Auftragsabschluss wird die Rechnung generiert und bei ausbleibender Zahlung eine Erinnerung versendet.',
      'Für Dienstleister in Penig – Friseure, Physiotherapeuten, Steuerberater – automatisieren wir den Terminprozess: Buchung, Bestätigung, Erinnerung, Nachfassung. Das spart pro Termin mehrere Minuten manueller Arbeit und reduziert Ausfalltermine durch rechtzeitige Erinnerungen.',
      'Gastronomie und Freizeitanbieter an der Mulde profitieren von automatisierten Reservierungsprozessen: Die Buchung löst eine Bestätigung, eine Erinnerung und nach dem Besuch eine Bewertungsanfrage aus – alles ohne manuelles Zutun.',
      'Wir setzen auf Make, n8n und individuelle API-Anbindungen. Die Einführung erfolgt schrittweise: Wir beginnen mit dem Prozess, der am meisten Zeit frisst, und erweitern die Automatisierung nach und nach. Von Groitzsch aus betreuen wir Sie persönlich durch jeden Schritt.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse sollte ein Peniger Betrieb zuerst automatisieren?',
        a: 'Starten Sie dort, wo am meisten Zeit verloren geht: Terminbestätigungen, Kontaktanfragen erfassen und automatische Angebotserstellung sind typische Einstiegspunkte mit sofortiger Wirkung.',
      },
      {
        q: 'Brauche ich besondere IT-Kenntnisse für die automatisierten Workflows?',
        a: 'Nein. Wir richten alles ein und schulen Sie in der Bedienung. Einfache Anpassungen – etwa neue E-Mail-Vorlagen – können Sie danach eigenständig vornehmen.',
      },
      {
        q: 'Kann ich meine bestehende Software in Penig weiterverwenden?',
        a: 'Ja. Automatisierungen verbinden Ihre vorhandenen Werkzeuge – ob Google Workspace, Outlook, Excel oder Branchensoftware. Wir ersetzen nichts, sondern verknüpfen.',
      },
      {
        q: 'Wie schnell amortisiert sich die Automatisierung?',
        a: 'In der Regel sparen automatisierte Prozesse bereits im ersten Monat mehrere Stunden pro Woche. Bei einem typischen Handwerksbetrieb in Penig rechnet sich die Investition innerhalb von zwei bis drei Monaten.',
      },
    ],
    highlights: [
      'Automatisierte Angebots- und Rechnungsprozesse für Handwerksbetriebe',
      'Terminmanagement: Buchung → Bestätigung → Erinnerung → Nachfassung',
      'Schrittweise Einführung ohne IT-Vorkenntnisse',
      'Persönliche Betreuung aus Groitzsch (~50 km)',
    ],
  },

  'penig.webseiten': {
    regionSlug: 'penig',
    regionName: 'Penig',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Penig – Pixel Kraftwerk gestaltet Ihren Internetauftritt an der Zwickauer Mulde in Mittelsachsen.',
    intro:
      'Penig liegt verkehrsgünstig an der A72 zwischen Leipzig und Chemnitz – und genau dieses Einzugsgebiet können Sie mit einer professionellen Webseite ansprechen. Pixel Kraftwerk erstellt Internetauftritte, die Peniger Betriebe für lokale und regionale Kunden sichtbar machen.',
    paragraphs: [
      'Viele Betriebe in Penig haben noch keine eigene Webseite oder nutzen veraltete Seiten, die auf dem Smartphone kaum bedienbar sind. In einer Region zwischen zwei Großstädten ist das besonders nachteilig: Kunden aus Leipzig und Chemnitz suchen online nach Angeboten im Umland – und finden nur die Betriebe, die online präsent sind.',
      'Wir erstellen Webseiten, die Ihren Betrieb in Penig professionell repräsentieren: Modernes Design, schnelle Ladezeiten, mobile Optimierung und Inhalte, die sowohl lokale als auch regionale Kunden ansprechen. Kontaktformulare, Anfahrtskarten und bei Bedarf Chatbot-Integration machen aus Besuchern Anfragen.',
      'Für Gastronomiebetriebe und Freizeitanbieter an der Zwickauer Mulde gestalten wir Seiten, die die landschaftliche Attraktivität der Region nutzen: Bilder, Routenvorschläge und Veranstaltungshinweise machen Ihre Webseite zum Anlaufpunkt für Tagesausflügler und Wanderer.',
      'Jede Webseite wird mit einem benutzerfreundlichen CMS ausgeliefert, das Sie selbst pflegen können. Texte, Bilder und Angebote lassen sich ohne technisches Vorwissen aktualisieren – und bei Fragen sind wir aus Groitzsch schnell erreichbar.',
    ],
    faqs: [
      {
        q: 'Kann meine Webseite auch Kunden aus Leipzig und Chemnitz ansprechen?',
        a: 'Ja. Wir erstellen Inhalte, die gezielt auf das Einzugsgebiet der A72 abzielen – mit Hinweisen auf gute Erreichbarkeit, ländliche Ruhe und persönlichen Service.',
      },
      {
        q: 'Wird die Webseite auch für Mobilgeräte optimiert?',
        a: 'Selbstverständlich. Mobile Optimierung ist bei jeder Webseite Standard – die Mehrheit Ihrer Kunden sucht heute über das Smartphone.',
      },
      {
        q: 'Kann ich auf der Webseite auch Veranstaltungen und saisonale Angebote bewerben?',
        a: 'Ja. Wir richten einen einfach pflegbaren Bereich für Veranstaltungen und aktuelle Angebote ein, den Sie selbst aktualisieren können.',
      },
      {
        q: 'Was kostet eine professionelle Webseite für Penig?',
        a: 'Die Kosten hängen von Umfang und Funktionalität ab. In einem kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Webseiten für das Einzugsgebiet Leipzig–Chemnitz entlang der A72',
      'Gastronomiefähig: Bilder, Routen und Veranstaltungen integriert',
      'Mobile Optimierung und schnelle Ladezeiten als Standard',
      'Selbst pflegbar mit benutzerfreundlichem CMS',
    ],
  },

  'penig.seo-top-3': {
    regionSlug: 'penig',
    regionName: 'Penig',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Penig – Pixel Kraftwerk bringt Ihren Betrieb in die Top 3 bei Google und nutzt die Lage zwischen Leipzig und Chemnitz als Reichweiten-Hebel.',
    intro:
      'Penig liegt strategisch zwischen Leipzig und Chemnitz an der A72. Mit gezielter Suchmaschinenoptimierung können Sie nicht nur für lokale Begriffe in Penig ranken, sondern auch Suchanfragen aus dem weiteren Einzugsgebiet abfangen. Pixel Kraftwerk entwickelt eine SEO-Strategie, die diese geografische Chance voll ausschöpft.',
    paragraphs: [
      'Die Suchlandschaft rund um Penig bietet eine doppelte Chance: Lokale Begriffe wie „Tischler Penig" oder „Friseur Penig" haben wenig Wettbewerb und lassen sich schnell besetzen. Gleichzeitig suchen Menschen zwischen Leipzig und Chemnitz nach regionalen Angeboten – und wer für „Handwerker Mittelsachsen" oder „Restaurant an der Mulde" rankt, gewinnt Kunden aus einem großen Einzugsgebiet.',
      'Unsere SEO-Strategie für Peniger Betriebe kombiniert lokale Präzision mit regionaler Reichweite: Wir erstellen standortbezogene Inhalte, die sowohl Google als auch Ihre Zielgruppe überzeugen. Ihr Google Business-Profil wird optimiert, lokale Verzeichniseinträge gepflegt und relevante regionale Keywords systematisch bedient.',
      'Technische SEO stellen wir als Grundlage sicher: Schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und eine saubere interne Verlinkung. Auf diesem Fundament wachsen Ihre Rankings stabil und nachhaltig.',
      'Monatliche Reports dokumentieren Ihre Fortschritte: Ranking-Positionen, organischer Traffic und eingegangene Anfragen aus der Suche. So sehen Sie genau, wie Ihre Investition in SEO für Penig wirkt.',
      'Von Groitzsch aus betreuen wir Peniger Unternehmen persönlich – für die initiale Analyse kommen wir gern zu Ihnen, die laufende Optimierung erfolgt effizient per Fernbetreuung.',
    ],
    faqs: [
      {
        q: 'Kann ich mit SEO in Penig auch Kunden aus Leipzig und Chemnitz erreichen?',
        a: 'Ja. Wir optimieren nicht nur für lokale Peniger Begriffe, sondern auch für regionale Suchbegriffe wie „Handwerker Mittelsachsen" oder „Dienstleister an der A72", die Kunden aus beiden Großstädten anziehen.',
      },
      {
        q: 'Wie schnell bin ich für „Tischler Penig" auf Seite 1?',
        a: 'Bei lokalen Begriffen mit geringem Wettbewerb sind Seite-1-Platzierungen oft schon nach vier bis acht Wochen erreichbar. Top-3-Positionen stabilisieren sich über drei bis sechs Monate.',
      },
      {
        q: 'Was beinhaltet die monatliche SEO-Betreuung?',
        a: 'Keyword-Monitoring, Content-Optimierung, technische Verbesserungen, Google Business-Pflege, Verzeichniseinträge und ein transparenter Report mit allen wichtigen Kennzahlen.',
      },
      {
        q: 'Lohnt sich SEO auch für Gastronomie und Freizeitanbieter in Penig?',
        a: 'Besonders. Touristische und gastronomische Suchbegriffe rund um die Zwickauer Mulde haben relevantes Volumen und oft erstaunlich wenig Wettbewerb online.',
      },
    ],
    highlights: [
      'Doppelte Reichweite: lokale Peniger und regionale Leipzig-Chemnitz-Suchanfragen',
      'Google Business-Profil optimiert für maximale Sichtbarkeit',
      'Geringe Wettbewerbsdichte für schnelle Ranking-Erfolge',
      'Monatliche Transparenz-Reports mit messbaren Ergebnissen',
    ],
  },
};
