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

export const tier2ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  /* ================================================================
   *  NAUMBURG
   * ================================================================ */
  'naumburg.ki-chatbots': {
    regionSlug: 'naumburg',
    regionName: 'Naumburg',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Naumburg – Pixel Kraftwerk automatisiert Kundenkommunikation für Tourismus, Handel und Handwerk im Burgenlandkreis.',
    intro:
      'Naumburg an der Saale begeistert mit dem UNESCO-Welterbe Naumburger Dom und der Weinregion Saale-Unstrut jährlich tausende Gäste. Hotels, Weingüter, Gastronomie und lokale Dienstleister bearbeiten dabei ein hohes Aufkommen an Standardanfragen. Ein KI-Chatbot von Pixel Kraftwerk beantwortet diese Fragen rund um die Uhr und entlastet Ihr Team im Tagesgeschäft.',
    paragraphs: [
      'Die Naumburger Wirtschaft lebt vom Zusammenspiel aus Tourismus, Weinbau und regionaler Nahversorgung. Ob Weingut an der Saale-Unstrut-Straße, Pension nahe dem Dom oder Handwerksbetrieb im Burgenlandkreis – überall gehen täglich Fragen zu Öffnungszeiten, Verfügbarkeiten und Preisen ein. Ein KI-Chatbot beantwortet diese Anfragen sofort, erfasst Kontaktdaten und gibt Ihrem Team strukturierte Gesprächszusammenfassungen.',
      'Für die Tourismusbranche in Naumburg ist ein Chatbot besonders wertvoll: Gäste fragen nach freien Zimmern, Weinproben-Terminen oder Veranstaltungen rund um den Naumburger Dom. Der Chatbot liefert aktuelle Informationen, leitet Buchungsanfragen weiter und empfiehlt passende Angebote – in deutscher und auf Wunsch auch in englischer Sprache für internationale Besucher.',
      'Auch Naumburger Handwerker, Steuerberater und Ärzte profitieren: Anfragen werden vorqualifiziert, Notfälle erkannt und weitergeleitet, Routinefragen automatisch beantwortet. So bleibt mehr Zeit für die eigentliche Arbeit – ob in der Werkstatt, der Praxis oder im Beratungsgespräch.',
      'Technisch integrieren wir den Chatbot nahtlos in Ihre bestehende Webseite und verbinden ihn auf Wunsch mit Buchungssystemen, Praxissoftware oder CRM. Über WhatsApp oder Facebook Messenger erreichen Sie auch Kunden, die nicht über Ihre Website kommen.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 45 Kilometer von Naumburg entfernt. Persönliche Termine – ob in Ihrem Weingut, Ihrer Praxis oder Ihrem Geschäft in der Naumburger Innenstadt – sind jederzeit möglich.',
    ],
    faqs: [
      {
        q: 'Kann ein KI-Chatbot auch Buchungsanfragen für Hotels oder Weingüter in Naumburg bearbeiten?',
        a: 'Ja. Der Chatbot kann Verfügbarkeitsanfragen aufnehmen, in Ihr Buchungssystem weiterleiten und automatische Bestätigungen versenden – ideal für Pensionen und Weingüter an der Saale-Unstrut.',
      },
      {
        q: 'Eignet sich ein Chatbot auch für kleine Betriebe in Naumburg?',
        a: 'Absolut. Gerade kleine Betriebe profitieren stark, weil der Chatbot Routineanfragen auffängt und so die knappe Personalkapazität schont.',
      },
      {
        q: 'Kann der Chatbot auch mehrsprachig für Touristen in Naumburg arbeiten?',
        a: 'Ja. Wir richten den Chatbot auf Wunsch mehrsprachig ein, sodass internationale Gäste des Naumburger Doms und der Weinregion in ihrer Sprache Antworten erhalten.',
      },
      {
        q: 'Wie schnell ist der Chatbot für mein Naumburger Unternehmen einsatzbereit?',
        a: 'Ein erster produktiver Chatbot steht in der Regel innerhalb von zwei bis vier Wochen. Komplexere Anbindungen an Buchungssysteme können etwas länger dauern.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Touristen, Gäste und Kunden in Naumburg',
      'Mehrsprachig einsetzbar – ideal für die UNESCO-Welterbestadt',
      'Integration in Buchungssysteme, CRM und Praxissoftware',
      'Persönliche Betreuung aus Groitzsch – nur ~45 km entfernt',
    ],
  },

  'naumburg.telefonassistenten': {
    regionSlug: 'naumburg',
    regionName: 'Naumburg',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Naumburg – Pixel Kraftwerk sichert die Erreichbarkeit von Praxen, Weingütern und Betrieben im Burgenlandkreis.',
    intro:
      'In Naumburg ist das Telefon für viele Betriebe der wichtigste Draht zur Kundschaft – von der Arztpraxis am Markt über das Weingut an der Saale bis zum Handwerker im Burgenlandkreis. Wer während der Weinlese, im Behandlungszimmer oder auf der Baustelle steckt, verpasst jedoch oft Anrufe. Unser KI-Telefonassistent übernimmt zuverlässig.',
    paragraphs: [
      'Die Mischung aus Tourismus, Gesundheitswesen und Handwerk macht Naumburgs Wirtschaft lebendig – und das Telefonaufkommen unberechenbar. Zur Weinlese, während der Domfestspiele oder in der Erkältungssaison häufen sich Anrufe. Der Telefonassistent nimmt jeden Anruf professionell entgegen, klärt das Anliegen und erfasst die Informationen strukturiert.',
      'Für Arztpraxen in Naumburg bedeutet das: Terminwünsche, Rezeptanfragen und Überweisungsfragen werden automatisch aufgenommen und nach Dringlichkeit priorisiert. Das Praxisteam erhält eine geordnete Übersicht statt chaotischer Notizzettel. Besonders in der Grippesaison reduziert das den Stress am Empfang erheblich.',
      'Hotels und Weingüter profitieren ebenso: Gäste rufen an, um nach Zimmerverfügbarkeit, Weinproben oder Anfahrtswegen zu fragen. Der Telefonassistent beantwortet Standardfragen, nimmt Reservierungen entgegen und leitet komplexe Anliegen an die richtige Person weiter.',
      'Wir konfigurieren den Assistenten passgenau für Ihren Betrieb: Welche Informationen sollen bei Terminanfragen erfasst werden? Welche Anrufe sollen sofort durchgestellt werden? Die Logik definieren wir gemeinsam, abgestimmt auf Ihre Abläufe in Naumburg.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Reservierungen für Naumburger Weingüter aufnehmen?',
        a: 'Ja. Der Assistent kann Datum, Personenzahl und besondere Wünsche erfassen und die Reservierung direkt in Ihr System übertragen.',
      },
      {
        q: 'Wie reagieren Anrufende auf einen automatisierten Assistenten?',
        a: 'Wenn Anrufende schnell eine Antwort oder Bestätigung erhalten, statt in der Warteschlange zu hängen, wird der Assistent durchweg positiv wahrgenommen.',
      },
      {
        q: 'Lässt sich der Telefonassistent mit meiner Praxissoftware in Naumburg verbinden?',
        a: 'Ja. Wir integrieren den Assistenten mit gängiger Praxis- und Kanzleisoftware, damit erfasste Daten direkt im richtigen System landen.',
      },
      {
        q: 'Kommen Sie für die Einrichtung auch nach Naumburg?',
        a: 'Selbstverständlich. Von Groitzsch erreichen wir Naumburg in rund 45 Minuten und sind gerne persönlich bei Ihnen vor Ort.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch während Weinlese, Behandlung oder Außenterminen',
      'Automatische Priorisierung nach Dringlichkeit',
      'Anbindung an Praxis-, Hotel- und CRM-Systeme',
      'Persönliche Betreuung durch Pixel Kraftwerk aus der Region',
    ],
  },

  'naumburg.automatisierungen': {
    regionSlug: 'naumburg',
    regionName: 'Naumburg',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Naumburg – Pixel Kraftwerk eliminiert manuelle Routineaufgaben in Tourismus, Handel und Handwerk.',
    intro:
      'In vielen Naumburger Betrieben werden Gästedaten manuell zwischen E-Mail, Buchungssystem und Tabelle kopiert. Angebote gehen per Hand raus, Follow-ups werden vergessen. Pixel Kraftwerk automatisiert diese Abläufe – abgestimmt auf die Anforderungen von Tourismus, Weinbau und Mittelstand im Burgenlandkreis.',
    paragraphs: [
      'Naumburgs Wirtschaft verbindet Tradition mit modernen Anforderungen: Weingüter verwalten Bestellungen und Weinproben-Buchungen, Hotels koordinieren Reservierungen und Gästebewertungen, Handwerker jonglieren Aufträge aus dem gesamten Burgenlandkreis. Überall entstehen wiederkehrende manuelle Prozesse, die sich zuverlässig automatisieren lassen.',
      'Typische Automatisierungen für Naumburger Betriebe: Buchungsanfragen von der Webseite fließen automatisch ins Reservierungssystem. Gäste erhalten sofort eine Bestätigung per E-Mail. Nach dem Aufenthalt wird automatisch eine Bewertungsanfrage versendet. Für Handwerker gehen Auftragsbestätigungen und Terminerinnerungen ohne manuellen Aufwand raus.',
      'Wir arbeiten mit Ihren vorhandenen Tools: Ob Google Workspace, Buchungssoftware, Branchenlösung oder Excel – wir verbinden die Systeme, statt sie zu ersetzen. Daten fließen automatisch dorthin, wo Ihr Team sie braucht.',
      'In Kombination mit einem KI-Chatbot oder Telefonassistenten entsteht ein durchgängiger Prozess: Anfragen werden erfasst, ins richtige System geleitet, bestätigt und nachverfolgt – kein Lead geht verloren.',
      'Von Groitzsch aus sind wir in rund 45 Minuten in Naumburg – für Workshops, Prozessanalysen oder technische Einrichtung direkt bei Ihnen.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in einem Naumburger Weingut automatisieren?',
        a: 'Bestellabwicklung, Weinproben-Buchungen, Rechnungsversand, Gäste-Follow-ups und Lagerbestandsmeldungen sind typische Einstiegspunkte.',
      },
      {
        q: 'Funktionieren Automatisierungen auch mit älterer Software?',
        a: 'In den meisten Fällen ja. Wir prüfen Ihre bestehenden Systeme und finden Schnittstellen – ob API, E-Mail-Trigger oder Dateiexport.',
      },
      {
        q: 'Wie lange dauert die Einrichtung einer Automatisierung?',
        a: 'Einfache Workflows sind in ein bis zwei Wochen produktiv. Komplexere Anbindungen mit mehreren Systemen benötigen drei bis sechs Wochen.',
      },
      {
        q: 'Können Automatisierungen auch saisonale Schwankungen in Naumburg abfangen?',
        a: 'Ja. Gerade zur Weinsaison oder den Domfestspielen helfen Automatisierungen, das erhöhte Anfragevolumen ohne zusätzliches Personal zu bewältigen.',
      },
    ],
    highlights: [
      'Automatischer Datenfluss zwischen Buchungssystem, E-Mail und CRM',
      'Saisonale Spitzen im Tourismus ohne Mehraufwand bewältigen',
      'Integration in bestehende Software – kein Systemwechsel nötig',
      'Persönliche Prozessanalyse vor Ort in Naumburg',
    ],
  },

  'naumburg.webseiten': {
    regionSlug: 'naumburg',
    regionName: 'Naumburg',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Naumburg – Pixel Kraftwerk erstellt moderne, schnelle Webauftritte für den Burgenlandkreis.',
    intro:
      'Eine professionelle Webseite ist für Naumburger Betriebe die digitale Visitenkarte – ob für das Weingut an der Saale-Unstrut, die Pension nahe dem UNESCO-Welterbe oder den Fachbetrieb im Burgenlandkreis. Pixel Kraftwerk entwickelt moderne, schnelle und mobiloptimierte Webseiten, die Besucher in Kunden verwandeln.',
    paragraphs: [
      'Naumburg lebt vom Tourismus und von regionaler Wirtschaftskraft. Wer nach „Weingut Naumburg", „Pension Saale-Unstrut" oder „Handwerker Burgenlandkreis" sucht, muss Ihr Unternehmen finden – und sofort einen professionellen Eindruck gewinnen. Genau das leistet eine moderne Webseite mit klarer Struktur, schnellen Ladezeiten und überzeugender Gestaltung.',
      'Wir entwickeln Webseiten, die auf die Bedürfnisse Naumburger Branchen zugeschnitten sind: Weingüter erhalten integrierte Weinproben-Buchungen und Shopanbindung. Hotels und Pensionen bekommen eine Galerie mit Zimmerdarstellung und Buchungswidget. Handwerker präsentieren Referenzen und Kontaktformulare, die Anfragen direkt ins richtige System leiten.',
      'Jede Webseite von Pixel Kraftwerk ist mobiloptimiert, barrierefrei und auf Suchmaschinenperformance ausgelegt. Wir setzen auf schnelle Frameworks, optimierte Bilder und sauberen Code – damit Ihre Seite bei Google sichtbar ist und Besucher nicht durch lange Ladezeiten verliert.',
      'Auf Wunsch integrieren wir einen KI-Chatbot direkt in Ihre neue Webseite, sodass Besucher sofort Antworten auf häufige Fragen erhalten. In Kombination mit SEO-Optimierung entsteht ein Webauftritt, der nicht nur gut aussieht, sondern aktiv Kunden gewinnt.',
    ],
    faqs: [
      {
        q: 'Was kostet eine professionelle Webseite für ein Naumburger Unternehmen?',
        a: 'Die Kosten hängen von Umfang und Funktionalität ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot, das zu Ihrem Budget passt.',
      },
      {
        q: 'Können Sie auch bestehende Webseiten von Naumburger Betrieben modernisieren?',
        a: 'Ja. Ob Relaunch oder gezielte Optimierung – wir analysieren Ihre bestehende Seite und entwickeln einen Plan für einen zeitgemäßen Auftritt.',
      },
      {
        q: 'Wird die Webseite auch für Mobilgeräte optimiert?',
        a: 'Selbstverständlich. Alle unsere Webseiten sind responsiv und funktionieren auf Smartphone, Tablet und Desktop gleichermaßen gut.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen?',
        a: 'Ja. Wir richten ein benutzerfreundliches CMS ein und schulen Sie in der Bedienung, damit Sie Texte und Bilder eigenständig aktualisieren können.',
      },
    ],
    highlights: [
      'Moderne, mobiloptimierte Webseiten für Tourismus und Mittelstand in Naumburg',
      'Integrierte Buchungsfunktionen für Weingüter und Hotels',
      'Suchmaschinenoptimiert von Grund auf',
      'Persönliche Betreuung aus Groitzsch – nur ~45 km entfernt',
    ],
  },

  'naumburg.seo-top-3': {
    regionSlug: 'naumburg',
    regionName: 'Naumburg',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Naumburg – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google. Mehr Sichtbarkeit für Tourismus und Gewerbe.',
    intro:
      'Wer in Naumburg nach Dienstleistungen, Gastronomie oder Handwerk sucht, nutzt Google. Wenn Ihr Unternehmen dort nicht auf der ersten Seite erscheint, gehen potenzielle Kunden zur Konkurrenz. Pixel Kraftwerk sorgt dafür, dass Naumburger Betriebe bei relevanten Suchbegriffen in den Top 3 landen.',
    paragraphs: [
      'Naumburg bietet als UNESCO-Welterbestadt ein besonderes SEO-Potenzial: Tausende Touristen recherchieren online nach Unterkünften, Restaurants und Erlebnissen rund um den Naumburger Dom und die Saale-Unstrut-Weinregion. Wer hier sichtbar ist, gewinnt Gäste, die aktiv nach genau Ihrem Angebot suchen.',
      'Unsere SEO-Strategie für Naumburg umfasst drei Säulen: Technische Optimierung Ihrer Webseite (Ladezeit, mobile Performance, strukturierte Daten), inhaltliche Optimierung mit lokal relevanten Texten und gezielter Aufbau lokaler Signale – von Google Unternehmensprofil über Branchenverzeichnisse bis zu regionalen Backlinks.',
      'Für touristische Betriebe optimieren wir gezielt auf Suchbegriffe wie „Weingut Naumburg", „Hotel Saale-Unstrut" oder „Restaurant Naumburger Dom". Für Handwerker und Dienstleister zielen wir auf „Elektriker Naumburg", „Steuerberater Burgenlandkreis" und vergleichbare lokale Suchbegriffe.',
      'SEO ist kein einmaliges Projekt, sondern ein fortlaufender Prozess. Wir überwachen Rankings, analysieren Wettbewerber im Burgenlandkreis und passen die Strategie regelmäßig an. So bleiben Sie dauerhaft sichtbar – nicht nur für eine Saison.',
      'Von unserem Standort in Groitzsch betreuen wir Naumburger Unternehmen persönlich. Ob Erstanalyse, monatliches Reporting oder Strategieworkshop – wir sind in rund 45 Minuten bei Ihnen.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Naumburger Unternehmen bei Google in den Top 3 steht?',
        a: 'Erste Verbesserungen sind oft nach sechs bis acht Wochen sichtbar. Top-3-Platzierungen für lokale Suchbegriffe erreichen wir in der Regel innerhalb von drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO für kleine Betriebe in Naumburg?',
        a: 'Gerade für kleine Betriebe lohnt sich lokales SEO besonders, weil der Wettbewerb in einer Stadt wie Naumburg überschaubar ist und Top-Platzierungen realistisch erreichbar sind.',
      },
      {
        q: 'Optimieren Sie auch das Google-Unternehmensprofil meines Naumburger Betriebs?',
        a: 'Ja. Das Google-Unternehmensprofil ist ein zentraler Baustein lokaler SEO. Wir optimieren Beschreibung, Kategorien, Bilder und sorgen für konsistente Einträge in Branchenverzeichnissen.',
      },
      {
        q: 'Was unterscheidet Ihre SEO-Leistung von anderen Anbietern?',
        a: 'Wir kombinieren technisches SEO mit regionalem Verständnis. Als Unternehmen aus Groitzsch kennen wir den mitteldeutschen Markt und die lokalen Suchgewohnheiten.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie speziell für die UNESCO-Stadt Naumburg',
      'Optimierung für touristische und gewerbliche Suchbegriffe',
      'Google-Unternehmensprofil und Branchenverzeichnisse inklusive',
      'Monatliches Reporting und persönliche Betreuung aus der Region',
    ],
  },

  /* ================================================================
   *  DELITZSCH
   * ================================================================ */
  'delitzsch.ki-chatbots': {
    regionSlug: 'delitzsch',
    regionName: 'Delitzsch',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Delitzsch – Pixel Kraftwerk automatisiert Kundenkommunikation für Mittelstand und Handwerk in Nordsachsen.',
    intro:
      'Delitzsch wächst als attraktiver Wohnstandort nördlich von Leipzig und verbindet historischen Altstadtcharme mit moderner Wirtschaftskraft. Handwerksbetriebe, Einzelhändler und Dienstleister in der Kreisstadt Nordsachsens stehen vor der Herausforderung, steigende Anfragen effizient zu bearbeiten. Ein KI-Chatbot von Pixel Kraftwerk schafft hier Abhilfe.',
    paragraphs: [
      'Die Delitzscher Wirtschaft ist geprägt von einem gesunden Branchenmix: Handwerksbetriebe, Einzelhandel rund um den historischen Marktplatz, Dienstleister und zunehmend auch Unternehmen, die von der Nähe zu Leipzig profitieren. Überall gehen täglich dieselben Fragen ein – zu Leistungen, Preisen, Verfügbarkeiten und Öffnungszeiten. Ein KI-Chatbot beantwortet diese automatisch und entlastet Ihr Team.',
      'Für Handwerksbetriebe in Delitzsch ist ein Chatbot besonders praktisch: Während der Meister auf der Baustelle ist, nimmt der Chatbot Anfragen auf, fragt nach Art und Umfang des Auftrags, erfasst Kontaktdaten und leitet alles strukturiert weiter. Kein verpasster Auftrag, kein Rückruf-Chaos.',
      'Auch Praxen, Kanzleien und Einzelhändler in der Delitzscher Innenstadt profitieren. Der Chatbot beantwortet Fragen zu Sprechzeiten, Sortiment oder Dienstleistungen und übernimmt die Vorqualifikation von Anfragen – sodass sich Ihr Team auf die wirklich wichtigen Gespräche konzentrieren kann.',
      'Technisch integrieren wir den Chatbot in Ihre bestehende Webseite – ob WordPress, Shopify oder individuelles System. Auf Wunsch verbinden wir ihn mit CRM, Kalender oder Branchensoftware, damit Anfragen direkt im richtigen System landen.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 45 Kilometer südlich von Delitzsch. Persönliche Termine in Ihren Geschäftsräumen oder in der Delitzscher Altstadt sind jederzeit möglich.',
    ],
    faqs: [
      {
        q: 'Für welche Branchen in Delitzsch eignet sich ein KI-Chatbot?',
        a: 'Chatbots eignen sich für praktisch alle Branchen mit wiederkehrenden Kundenanfragen – Handwerk, Einzelhandel, Praxen, Kanzleien, Gastronomie und Dienstleister in Delitzsch.',
      },
      {
        q: 'Kann der Chatbot auch Termine für Delitzscher Praxen buchen?',
        a: 'Ja. Wir verbinden den Chatbot mit Ihrem Kalender oder Buchungssystem, sodass Termine direkt im Dialog vereinbart werden.',
      },
      {
        q: 'Wie schnell ist der Chatbot einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel in zwei bis vier Wochen live – inklusive Testphase und Feinabstimmung.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für einen Betrieb in Delitzsch?',
        a: 'Die Kosten richten sich nach Umfang und Funktionalität. Im kostenlosen Erstgespräch klären wir Ihre Anforderungen und erstellen ein transparentes Angebot.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Kunden in Delitzsch und Nordsachsen',
      'Automatische Vorqualifikation von Aufträgen und Anfragen',
      'Nahtlose Integration in bestehende Webseiten und Software',
      'Persönliche Betreuung aus Groitzsch – nur ~45 km entfernt',
    ],
  },

  'delitzsch.telefonassistenten': {
    regionSlug: 'delitzsch',
    regionName: 'Delitzsch',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Delitzsch – Pixel Kraftwerk sichert die telefonische Erreichbarkeit von Betrieben und Praxen in Nordsachsen.',
    intro:
      'In Delitzsch verlassen sich viele Betriebe auf das Telefon als primären Kontaktkanal. Doch wenn der Handwerker auf der Baustelle, die Ärztin im Behandlungszimmer oder der Einzelhändler im Kundengespräch ist, klingelt es oft ins Leere. Unser KI-Telefonassistent stellt sicher, dass kein Anruf mehr verloren geht.',
    paragraphs: [
      'Die Delitzscher Unternehmenslandschaft ist mittelständisch geprägt: Familienbetriebe im Handwerk, Arztpraxen, Einzelhändler und lokale Dienstleister. Ihnen allen gemeinsam ist, dass persönlicher Kontakt zählt – und dass Erreichbarkeit ein entscheidender Wettbewerbsvorteil ist. Unser Telefonassistent nimmt Anrufe professionell entgegen und sorgt dafür, dass kein Auftrag und kein Patient verloren geht.',
      'Der Assistent begrüßt Anrufende freundlich, klärt das Anliegen mit gezielten Rückfragen und erfasst alle relevanten Daten strukturiert. Bei Handwerksbetrieben werden Auftragsdetails und Dringlichkeit ermittelt, bei Praxen Terminwünsche und Symptome aufgenommen, bei Einzelhändlern Produktanfragen dokumentiert.',
      'Die erfassten Informationen werden per E-Mail, SMS oder direkt ins CRM weitergeleitet – je nachdem, wie Sie arbeiten. So können Sie Anrufe gebündelt und priorisiert zurückrufen, statt zwischen Arbeit und Telefon hin- und herzuspringen.',
      'Wir konfigurieren den Assistenten individuell für Ihren Delitzscher Betrieb: Begrüßung, Rückfragen, Eskalationslogik und Weiterleitung – alles passgenau auf Ihren Alltag abgestimmt.',
    ],
    faqs: [
      {
        q: 'Funktioniert der Telefonassistent auch außerhalb der Geschäftszeiten in Delitzsch?',
        a: 'Ja. Der Assistent arbeitet rund um die Uhr und nimmt auch abends, am Wochenende und an Feiertagen Anrufe professionell entgegen.',
      },
      {
        q: 'Können Anrufende den Assistenten auch umgehen und direkt eine Person erreichen?',
        a: 'Selbstverständlich. Für dringende Anliegen oder auf Kundenwunsch leitet der Assistent direkt an Ihre Mobilnummer oder einen Mitarbeitenden weiter.',
      },
      {
        q: 'Wie reagieren ältere Kunden in Delitzsch auf einen automatisierten Assistenten?',
        a: 'Durch eine natürliche, freundliche Gesprächsführung und die zuverlässige Weiterleitung wird der Assistent auch von weniger technikaffinen Anrufenden gut angenommen.',
      },
      {
        q: 'Kommen Sie für die Einrichtung nach Delitzsch?',
        a: 'Ja. Von Groitzsch sind wir in rund 45 Minuten in Delitzsch und richten den Assistenten gerne persönlich bei Ihnen ein.',
      },
    ],
    highlights: [
      'Lückenlose Erreichbarkeit für Delitzscher Betriebe – auch außerhalb der Geschäftszeiten',
      'Strukturierte Erfassung von Aufträgen, Terminen und Anfragen',
      'Individuelle Konfiguration für Handwerk, Praxen und Einzelhandel',
      'Persönliche Einrichtung und Betreuung aus der Region',
    ],
  },

  'delitzsch.automatisierungen': {
    regionSlug: 'delitzsch',
    regionName: 'Delitzsch',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Delitzsch – Pixel Kraftwerk verbindet Ihre Systeme und spart Zeit im Tagesgeschäft in Nordsachsen.',
    intro:
      'In vielen Delitzscher Betrieben werden Kundendaten noch per Hand übertragen, Rechnungen manuell verschickt und Follow-ups auf Zuruf erledigt. Pixel Kraftwerk automatisiert genau diese Routineaufgaben – damit Ihr Team in Delitzsch sich auf das Wesentliche konzentrieren kann.',
    paragraphs: [
      'Delitzsch als wachsende Kreisstadt in Nordsachsen zieht zunehmend Unternehmen an, die von der Nähe zu Leipzig profitieren. Mit dem Wachstum steigt auch die Zahl der Prozesse, die manuell kaum noch zu bewältigen sind: Angebote erstellen, Aufträge bestätigen, Rechnungen versenden, Kundendaten pflegen.',
      'Typische Automatisierungen für Delitzscher Betriebe: Kontaktanfragen von der Webseite werden automatisch ins CRM übertragen und mit einer Eingangsbestätigung versehen. Terminbuchungen lösen Kalendereinträge und Erinnerungen aus. Nach einem Auftrag wird automatisch eine Zufriedenheitsabfrage versendet.',
      'Wir arbeiten mit Ihren bestehenden Werkzeugen. Ob Google Workspace, Microsoft 365, Lexoffice, SevDesk oder branchenspezifische Software – wir verbinden die Systeme, sodass Daten automatisch dort landen, wo sie gebraucht werden.',
      'In Kombination mit einem KI-Chatbot oder Telefonassistenten entsteht ein lückenloser Workflow: Anfragen werden erfasst, bestätigt, ins System überführt und nachverfolgt – ohne manuellen Aufwand.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in einem Delitzscher Handwerksbetrieb automatisieren?',
        a: 'Auftragsannahme, Terminbestätigung, Angebotsversand, Rechnungsstellung und Kundennachfassung sind häufige Einstiegspunkte.',
      },
      {
        q: 'Muss ich für Automatisierungen meine bestehende Software wechseln?',
        a: 'Nein. Wir integrieren die Automatisierung in Ihre vorhandenen Systeme – ein Softwarewechsel ist nicht erforderlich.',
      },
      {
        q: 'Wie aufwendig ist die Einführung von Automatisierungen?',
        a: 'Einfache Workflows stehen in ein bis zwei Wochen. Wir kümmern uns um Einrichtung und Schulung – Sie spüren nur die Entlastung.',
      },
      {
        q: 'Unterstützen Sie auch Betriebe in der Umgebung von Delitzsch?',
        a: 'Ja. Wir betreuen Unternehmen in ganz Nordsachsen – von Delitzsch über Eilenburg bis nach Taucha.',
      },
    ],
    highlights: [
      'Automatischer Datenfluss zwischen Webseite, CRM und Buchhaltung',
      'Zeitersparnis bei Angeboten, Rechnungen und Kundennachfassung',
      'Integration in bestehende Software ohne Systemwechsel',
      'Persönliche Betreuung aus Groitzsch für ganz Nordsachsen',
    ],
  },

  'delitzsch.webseiten': {
    regionSlug: 'delitzsch',
    regionName: 'Delitzsch',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Delitzsch – Pixel Kraftwerk erstellt moderne Webauftritte für Nordsachsen.',
    intro:
      'Delitzsch wächst – und damit steigt der Wettbewerb um Kunden in der Region. Eine professionelle, schnelle und suchmaschinenoptimierte Webseite ist für Delitzscher Betriebe der Schlüssel, um online sichtbar zu sein und neue Kunden zu gewinnen. Pixel Kraftwerk entwickelt Webseiten, die genau das leisten.',
    paragraphs: [
      'Ob Handwerksbetrieb, Arztpraxis, Einzelhändler oder Dienstleister – wer in Delitzsch nach Ihrem Angebot sucht, erwartet eine moderne, ansprechende Webseite. Veraltete Seiten mit langen Ladezeiten und unübersichtlicher Navigation kosten Sie Kunden. Wir entwickeln Webauftritte, die auf den ersten Blick überzeugen und auf allen Geräten perfekt funktionieren.',
      'Für Delitzscher Handwerker erstellen wir Webseiten mit Referenzgalerien, Leistungsübersichten und Kontaktformularen, die Anfragen direkt ins System leiten. Praxen erhalten Online-Terminbuchung und Patienteninformationen. Einzelhändler präsentieren ihr Sortiment mit ansprechendem Design und optionaler Shop-Anbindung.',
      'Jede Webseite wird von Grund auf für Google optimiert: Saubere Seitenstruktur, schnelle Ladezeiten, optimierte Bilder und lokal relevante Inhalte sorgen dafür, dass Sie bei Suchanfragen wie „Handwerker Delitzsch" oder „Arzt Nordsachsen" gefunden werden.',
      'Auf Wunsch integrieren wir einen KI-Chatbot, der Besucher sofort begrüßt und häufige Fragen beantwortet. So wird Ihre Webseite nicht nur zur Visitenkarte, sondern zum aktiven Vertriebskanal.',
    ],
    faqs: [
      {
        q: 'Erstellen Sie auch Online-Shops für Delitzscher Unternehmen?',
        a: 'Ja. Ob kleiner Produktkatalog oder vollständiger Online-Shop – wir setzen das passende System für Ihr Sortiment und Ihre Anforderungen um.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite?',
        a: 'Eine Standard-Webseite ist in vier bis sechs Wochen fertig. Umfangreichere Projekte mit Shop-Integration oder individuellen Funktionen dauern entsprechend länger.',
      },
      {
        q: 'Kann ich die Webseite nach Fertigstellung selbst bearbeiten?',
        a: 'Ja. Wir schulen Sie im Umgang mit dem CMS, sodass Sie Texte, Bilder und Angebote eigenständig aktualisieren können.',
      },
      {
        q: 'Betreuen Sie auch die laufende Wartung und Updates?',
        a: 'Ja. Wir bieten Wartungspakete an, die Sicherheitsupdates, Backups und technischen Support umfassen.',
      },
    ],
    highlights: [
      'Moderne, schnelle Webseiten für Handwerk, Praxen und Handel in Delitzsch',
      'Suchmaschinenoptimiert von Grund auf',
      'Integrierte Kontaktformulare und optionale Chatbot-Anbindung',
      'Persönliche Betreuung aus Groitzsch – nur ~45 km entfernt',
    ],
  },

  'delitzsch.seo-top-3': {
    regionSlug: 'delitzsch',
    regionName: 'Delitzsch',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Delitzsch – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google. Mehr Sichtbarkeit in Nordsachsen.',
    intro:
      'Wenn potenzielle Kunden in Delitzsch nach Handwerkern, Ärzten oder Dienstleistern suchen, nutzen sie Google. Erscheint Ihr Unternehmen nicht auf der ersten Seite, verlieren Sie Aufträge an die Konkurrenz. Pixel Kraftwerk sorgt dafür, dass Delitzscher Betriebe bei lokalen Suchanfragen ganz oben stehen.',
    paragraphs: [
      'Delitzsch bietet als wachsende Stadt in Nordsachsen gute Voraussetzungen für lokales SEO: Der Wettbewerb ist überschaubar, die Nachfrage steigt mit dem Zuzug neuer Einwohner. Wer jetzt in Suchmaschinenoptimierung investiert, sichert sich einen nachhaltigen Vorsprung gegenüber Wettbewerbern, die noch nicht digital aufgestellt sind.',
      'Unsere SEO-Strategie für Delitzsch: Technische Optimierung Ihrer Webseite (Ladezeit, mobile Performance, strukturierte Daten), inhaltliche Optimierung mit lokal relevanten Texten zu Delitzsch und Nordsachsen sowie gezielter Aufbau lokaler Signale über Google Unternehmensprofil, Branchenverzeichnisse und regionale Verlinkungen.',
      'Wir identifizieren die Suchbegriffe, die für Ihr Geschäft in Delitzsch relevant sind – ob „Elektriker Delitzsch", „Zahnarzt Nordsachsen" oder „Friseur Delitzscher Altstadt". Für diese Keywords optimieren wir Ihre Webseite gezielt, sodass Sie dort erscheinen, wo Ihre Kunden suchen.',
      'SEO ist ein kontinuierlicher Prozess. Wir überwachen Rankings, analysieren den Wettbewerb in Delitzsch und Umgebung und passen die Strategie regelmäßig an – damit Sie dauerhaft sichtbar bleiben.',
    ],
    faqs: [
      {
        q: 'Wie schnell sehe ich SEO-Ergebnisse für meinen Betrieb in Delitzsch?',
        a: 'Erste Rankingverbesserungen zeigen sich oft nach sechs bis acht Wochen. Top-3-Platzierungen für lokale Suchbegriffe erreichen wir typischerweise in drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO für einen kleinen Betrieb in Delitzsch?',
        a: 'Ja, besonders. In Delitzsch ist der Wettbewerb bei vielen Suchbegriffen noch gering – das bedeutet, dass Top-Platzierungen mit gezielter Optimierung realistisch erreichbar sind.',
      },
      {
        q: 'Optimieren Sie auch Google Maps für Delitzscher Unternehmen?',
        a: 'Ja. Die Optimierung des Google Unternehmensprofils und die Sichtbarkeit in Google Maps sind fester Bestandteil unserer lokalen SEO-Strategie.',
      },
      {
        q: 'Was kostet SEO für ein Unternehmen in Delitzsch?',
        a: 'Die Kosten richten sich nach Umfang und Wettbewerbsintensität Ihrer Branche. Wir erstellen nach einer kostenlosen Erstanalyse ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für die wachsende Stadt Delitzsch',
      'Optimierung auf relevante Suchbegriffe in Nordsachsen',
      'Google Unternehmensprofil und Maps-Optimierung inklusive',
      'Monatliches Reporting und persönliche Betreuung',
    ],
  },

  /* ================================================================
   *  DÖBELN
   * ================================================================ */
  'doebeln.ki-chatbots': {
    regionSlug: 'doebeln',
    regionName: 'Döbeln',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Döbeln – Pixel Kraftwerk automatisiert Kundenkommunikation für Maschinenbau, Lebensmittel und Handwerk.',
    intro:
      'Döbeln liegt strategisch günstig zwischen Leipzig und Chemnitz an der Freiberger Mulde und ist Heimat einer vielfältigen Wirtschaft aus Maschinenbau, Lebensmittelindustrie und Handwerk. Unternehmen in Mittelsachsen kämpfen mit dem Fachkräftemangel und suchen Wege, Kundenanfragen effizienter zu bearbeiten. Ein KI-Chatbot von Pixel Kraftwerk liefert die Lösung.',
    paragraphs: [
      'Die Döbelner Wirtschaft ist industriell geprägt: Maschinenbauunternehmen, Lebensmittelproduzenten und Zulieferer bilden das Rückgrat der Stadt. Daneben versorgen Handwerker, Praxen und Dienstleister die Bevölkerung in Mittelsachsen. Allen gemeinsam: Wiederkehrende Anfragen zu Produkten, Leistungen und Verfügbarkeiten binden wertvolle Arbeitszeit.',
      'Ein KI-Chatbot auf Ihrer Webseite fängt diese Anfragen auf. Für Industrieunternehmen beantwortet er technische Standardfragen, nimmt Angebotsanfragen mit Spezifikationen entgegen und leitet sie an den richtigen Ansprechpartner weiter. Für Handwerker erfasst er Auftragsdetails, während der Meister auf der Baustelle ist.',
      'Auch Praxen und Dienstleister in Döbeln profitieren: Der Chatbot beantwortet Fragen zu Sprechzeiten und Leistungen, erfasst Terminwünsche und reduziert so das Anrufaufkommen. In einer Region, in der Fachkräfte knapp sind, ist das eine willkommene Entlastung für vorhandenes Personal.',
      'Wir integrieren den Chatbot in Ihre bestehende Webseite und verbinden ihn bei Bedarf mit CRM, ERP oder Branchensoftware. Die Einrichtung erfolgt praxisnah – auf Basis Ihrer realen Anfragen und Abläufe in Döbeln.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 55 Kilometer von Döbeln entfernt. Für Workshops und Einrichtungstermine kommen wir gerne an die Freiberger Mulde.',
    ],
    faqs: [
      {
        q: 'Kann ein Chatbot auch technische Anfragen für Döbelner Industriebetriebe bearbeiten?',
        a: 'Ja. Wir trainieren den Chatbot mit Ihren technischen Datenblättern und Produktinformationen, sodass er Standardfragen kompetent beantwortet und komplexe Anfragen gezielt weiterleitet.',
      },
      {
        q: 'Eignet sich ein Chatbot auch für Lebensmittelbetriebe in Döbeln?',
        a: 'Absolut. Der Chatbot kann Bestellanfragen aufnehmen, Produktinformationen liefern und häufige Fragen zu Inhaltsstoffen oder Lieferzeiten beantworten.',
      },
      {
        q: 'Wie wird der Chatbot an unsere spezifischen Abläufe angepasst?',
        a: 'In einem Workshop analysieren wir Ihre häufigsten Anfragen und Prozesse. Darauf basierend konfigurieren wir den Chatbot individuell für Ihren Betrieb.',
      },
      {
        q: 'Kommen Sie auch nach Döbeln für die Einrichtung?',
        a: 'Ja. Von Groitzsch sind wir in rund einer Stunde in Döbeln und betreuen Sie persönlich vor Ort.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Industrie, Handwerk und Praxen in Döbeln',
      'Technische Anfragen automatisiert vorqualifizieren',
      'Integration in ERP, CRM und Branchensoftware',
      'Persönliche Betreuung aus Groitzsch – ~55 km entfernt',
    ],
  },

  'doebeln.telefonassistenten': {
    regionSlug: 'doebeln',
    regionName: 'Döbeln',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Döbeln – Pixel Kraftwerk sichert die Erreichbarkeit von Industrie, Handwerk und Praxen in Mittelsachsen.',
    intro:
      'In Döbeln ist das Telefon in vielen Betrieben unverzichtbar – ob Auftragseingang im Maschinenbau, Terminvergabe in der Arztpraxis oder Kundenberatung im Handwerk. Doch gerade in Zeiten des Fachkräftemangels fehlt oft das Personal, um jeden Anruf entgegenzunehmen. Unser Telefonassistent schließt diese Lücke.',
    paragraphs: [
      'Döbelns Wirtschaftsstruktur mit Maschinenbau, Lebensmittelindustrie und regionaler Nahversorgung bringt ein vielfältiges Anrufaufkommen mit sich. Industriekunden fragen nach Lieferterminen, Patienten nach Sprechstunden, Auftraggeber nach Verfügbarkeiten. Der Telefonassistent nimmt all diese Anrufe professionell entgegen.',
      'Für Industrieunternehmen an der Freiberger Mulde erfasst der Assistent Bestellnummern, Stückzahlen und technische Anforderungen. Für Praxen werden Terminwünsche, Versicherungsdaten und Symptome dokumentiert. Handwerksbetriebe erhalten strukturierte Auftragsdetails inklusive Dringlichkeitsbewertung.',
      'Die erfassten Informationen gehen per E-Mail, ins CRM oder direkt in Ihr ERP-System. So haben Sie nach einem Außentermin oder einer Behandlung eine geordnete Übersicht aller Anrufe – priorisiert und mit allen relevanten Details.',
      'Wir konfigurieren den Assistenten passgenau für Ihre Branche in Döbeln. Gemeinsam definieren wir Gesprächslogik, Rückfragen und Eskalationsregeln, damit der Assistent nahtlos in Ihren Arbeitsalltag passt.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch technische Rückfragen stellen?',
        a: 'Ja. Wir konfigurieren branchenspezifische Rückfragen – ob Bestellnummern im Maschinenbau oder Schadensbeschreibungen im Handwerk.',
      },
      {
        q: 'Wie wird der Assistent an unser ERP-System in Döbeln angebunden?',
        a: 'Wir prüfen die Schnittstellen Ihres ERP-Systems und richten die automatische Datenübergabe ein – ob über API, E-Mail-Import oder Dateischnittstelle.',
      },
      {
        q: 'Ist der Telefonassistent auch auf Sächsisch verständlich?',
        a: 'Der Assistent versteht verschiedene Dialekte und Sprechweisen zuverlässig. Wir optimieren die Spracherkennung auf die regionalen Besonderheiten in Mittelsachsen.',
      },
      {
        q: 'Was passiert bei dringenden Anrufen?',
        a: 'Dringende Anliegen werden nach von Ihnen definierten Kriterien sofort an Ihre Mobilnummer oder einen Notfallkontakt weitergeleitet.',
      },
    ],
    highlights: [
      'Lückenlose Erreichbarkeit für Industrie und Handwerk in Döbeln',
      'Branchenspezifische Rückfragen für Maschinenbau und Lebensmittelindustrie',
      'Anbindung an ERP, CRM und Praxissoftware',
      'Persönliche Einrichtung durch Pixel Kraftwerk aus der Region',
    ],
  },

  'doebeln.automatisierungen': {
    regionSlug: 'doebeln',
    regionName: 'Döbeln',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Döbeln – Pixel Kraftwerk digitalisiert Abläufe in Maschinenbau, Lebensmittelindustrie und Handwerk.',
    intro:
      'In Döbelner Betrieben werden Auftragsdaten oft noch manuell zwischen Systemen übertragen, Lieferscheine händisch erstellt und Kundennachfassungen auf Zuruf erledigt. Pixel Kraftwerk automatisiert diese wiederkehrenden Prozesse – passend zur industriellen Stärke und den mittelständischen Strukturen in Mittelsachsen.',
    paragraphs: [
      'Döbelns Wirtschaft ist geprägt von produzierendem Gewerbe und regionaler Versorgung. Maschinenbauer koordinieren Aufträge mit Zulieferern, Lebensmittelproduzenten verwalten Bestellungen und Chargen, Handwerker jonglieren Termine im gesamten Landkreis. Überall gibt es Prozesse, die sich automatisieren lassen, ohne die gewachsenen Abläufe zu zerstören.',
      'Typische Automatisierungen für Döbelner Betriebe: Eingehende Bestellungen werden automatisch im ERP erfasst und eine Auftragsbestätigung versendet. Liefertermine lösen automatische Kundenbenachrichtigungen aus. Nach Projektabschluss wird eine Zufriedenheitsumfrage verschickt und der Datensatz im CRM aktualisiert.',
      'Wir arbeiten mit Ihren vorhandenen Systemen: Ob SAP, Sage, Lexoffice oder branchenspezifische Lösungen – wir verbinden die Software, statt sie zu ersetzen. Wo keine API vorhanden ist, finden wir pragmatische Wege über E-Mail-Trigger, Dateischnittstellen oder Webhooks.',
      'In Kombination mit einem KI-Chatbot oder Telefonassistenten entsteht ein durchgängiger Prozess von der Anfrage bis zur Nachbetreuung – ohne manuellen Aufwand in den Routineschritten.',
      'Von Groitzsch aus sind wir in rund einer Stunde in Döbeln – für Prozessanalysen, Workshops und die technische Einrichtung direkt in Ihrem Betrieb.',
    ],
    faqs: [
      {
        q: 'Können auch komplexe Fertigungsprozesse in Döbelner Industriebetrieben automatisiert werden?',
        a: 'Wir konzentrieren uns auf die kaufmännischen und kommunikativen Prozesse rund um die Fertigung – Auftragseingang, Terminkoordination, Kundenkommunikation und Nachbetreuung.',
      },
      {
        q: 'Funktionieren Automatisierungen auch mit älteren ERP-Systemen?',
        a: 'In den meisten Fällen ja. Wir analysieren Ihre bestehende Systemlandschaft und finden die passende Schnittstelle – auch bei älteren Softwareversionen.',
      },
      {
        q: 'Wie schnell amortisiert sich die Investition?',
        a: 'Durch die eingesparte Arbeitszeit und die Vermeidung von Fehlerquellen amortisieren sich Automatisierungen typischerweise innerhalb von drei bis sechs Monaten.',
      },
      {
        q: 'Können Automatisierungen schrittweise eingeführt werden?',
        a: 'Ja. Wir empfehlen den schrittweisen Ansatz: Mit einem kleinen, wirkungsvollen Workflow starten und nach und nach weitere Prozesse automatisieren.',
      },
    ],
    highlights: [
      'Automatisierung von Auftragseingang, Terminkoordination und Kundenkommunikation',
      'Integration in bestehende ERP- und CRM-Systeme',
      'Schrittweise Einführung ohne Betriebsunterbrechung',
      'Persönliche Prozessanalyse vor Ort in Döbeln',
    ],
  },

  'doebeln.webseiten': {
    regionSlug: 'doebeln',
    regionName: 'Döbeln',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Döbeln – Pixel Kraftwerk baut moderne Webauftritte für Mittelsachsen.',
    intro:
      'Für Döbelner Betriebe ist eine professionelle Webseite entscheidend, um Kunden zwischen Leipzig und Chemnitz zu erreichen. Ob Maschinenbauunternehmen, Handwerksbetrieb oder lokaler Dienstleister – Pixel Kraftwerk entwickelt moderne Webseiten, die Ihr Unternehmen an der Freiberger Mulde optimal präsentieren.',
    paragraphs: [
      'In einer Stadt wie Döbeln, die von Industrie und Mittelstand geprägt ist, muss eine Webseite vor allem eines: Kompetenz und Zuverlässigkeit vermitteln. Industriekunden recherchieren online nach Zulieferern und Dienstleistern. Endkunden suchen nach Handwerkern und Praxen in der Region. Ihre Webseite ist dabei oft der erste Kontaktpunkt.',
      'Für Industrieunternehmen in Döbeln erstellen wir Webseiten mit Produktkatalogen, technischen Datenblättern und Angebotsformularen. Handwerker erhalten Referenzgalerien und Kontaktformulare. Praxen bekommen Online-Terminbuchung und Patienteninformationen – alles auf modernstem technischen Stand.',
      'Jede Webseite von Pixel Kraftwerk ist mobiloptimiert und auf schnelle Ladezeiten ausgelegt. Sauberer Code, optimierte Bilder und strukturierte Daten sorgen für gute Sichtbarkeit bei Google – damit Kunden, die nach „Maschinenbau Döbeln" oder „Handwerker Mittelsachsen" suchen, Sie finden.',
      'Auf Wunsch integrieren wir KI-Chatbot, Kontaktformulare mit CRM-Anbindung und Analytics – damit Ihre Webseite nicht nur informiert, sondern aktiv Anfragen generiert.',
    ],
    faqs: [
      {
        q: 'Erstellen Sie auch Webseiten für Industrieunternehmen in Döbeln?',
        a: 'Ja. Wir haben Erfahrung mit B2B-Webseiten inklusive Produktkatalogen, technischen Datenblättern und mehrsprachigen Inhalten.',
      },
      {
        q: 'Wie stellen Sie sicher, dass die Webseite bei Google gefunden wird?',
        a: 'Jede Webseite wird von Grund auf suchmaschinenoptimiert: Seitenstruktur, Metadaten, Ladezeit und lokale Inhalte sind Teil des Entwicklungsprozesses.',
      },
      {
        q: 'Kann die Webseite auch auf Englisch erstellt werden?',
        a: 'Ja. Für Industrieunternehmen mit internationaler Kundschaft setzen wir mehrsprachige Webseiten um.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für ein Döbelner Unternehmen?',
        a: 'Standard-Webseiten sind in vier bis sechs Wochen fertig. Umfangreichere B2B-Portale mit Katalog oder Shop dauern entsprechend länger.',
      },
    ],
    highlights: [
      'B2B- und B2C-Webseiten für Industrie und Handwerk in Döbeln',
      'Produktkataloge, Datenblätter und Angebotsformulare',
      'Mobiloptimiert und suchmaschinenfreundlich',
      'Persönliche Betreuung aus Groitzsch – ~55 km entfernt',
    ],
  },

  'doebeln.seo-top-3': {
    regionSlug: 'doebeln',
    regionName: 'Döbeln',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Döbeln – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google. Mehr Sichtbarkeit in Mittelsachsen.',
    intro:
      'Wer in Döbeln und Mittelsachsen nach Produkten oder Dienstleistungen sucht, nutzt Google. Für Unternehmen zwischen Leipzig und Chemnitz ist lokale Sichtbarkeit in Suchmaschinen entscheidend, um Kunden zu gewinnen. Pixel Kraftwerk sorgt dafür, dass Döbelner Betriebe bei relevanten Suchanfragen in den Top 3 erscheinen.',
    paragraphs: [
      'Döbelns Lage zwischen zwei Großstädten bietet Chancen und Herausforderungen: Einerseits suchen Kunden aus einem weiten Einzugsgebiet nach Angeboten in Mittelsachsen. Andererseits konkurrieren Döbelner Betriebe mit der Leipziger und Chemnitzer Wirtschaft. Gezieltes lokales SEO verschafft Ihnen einen entscheidenden Vorteil.',
      'Unsere SEO-Strategie für Döbeln: Technische Optimierung Ihrer Webseite, inhaltliche Stärkung mit lokal relevanten Texten und systematischer Aufbau lokaler Signale. Wir optimieren Ihr Google Unternehmensprofil, sorgen für konsistente Brancheneinträge und bauen regionale Verlinkungen auf.',
      'Für Industrieunternehmen optimieren wir auf B2B-Suchbegriffe wie „Maschinenbau Mittelsachsen" oder „Zulieferer Döbeln". Für lokale Dienstleister und Handwerker zielen wir auf „Elektriker Döbeln", „Arztpraxis Freiberger Mulde" und vergleichbare Keywords mit hoher lokaler Kaufabsicht.',
      'SEO ist ein kontinuierlicher Prozess. Wir liefern monatliche Reportings mit Ranking-Entwicklung, Traffic-Analyse und konkreten Handlungsempfehlungen. So behalten Sie den Überblick und wir können die Strategie laufend optimieren.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Döbelner Unternehmen in den Top 3 bei Google steht?',
        a: 'Für lokale Suchbegriffe in Mittelsachsen sehen wir erste Verbesserungen nach sechs bis acht Wochen. Top-3-Platzierungen sind in drei bis sechs Monaten realistisch.',
      },
      {
        q: 'Lohnt sich SEO für B2B-Unternehmen in Döbeln?',
        a: 'Ja. Auch B2B-Einkäufer recherchieren online nach Zulieferern und Dienstleistern. Wer bei relevanten Fachbegriffen sichtbar ist, gewinnt Aufträge.',
      },
      {
        q: 'Können Sie SEO und Webseiten-Erstellung kombinieren?',
        a: 'Ja. Die Kombination ist sogar ideal, weil wir SEO-Anforderungen von Anfang an in die Webseiten-Struktur einbauen können.',
      },
      {
        q: 'Betreuen Sie auch Unternehmen in der Umgebung von Döbeln?',
        a: 'Ja. Wir betreuen Unternehmen in ganz Mittelsachsen – von Döbeln über Leisnig bis nach Waldheim und Hartha.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für Döbeln und Mittelsachsen',
      'B2B- und B2C-Suchbegriffe gezielt optimiert',
      'Google Unternehmensprofil und Branchenverzeichnisse inklusive',
      'Monatliches Reporting mit konkreten Handlungsempfehlungen',
    ],
  },

  /* ================================================================
   *  SCHKEUDITZ
   * ================================================================ */
  'schkeuditz.ki-chatbots': {
    regionSlug: 'schkeuditz',
    regionName: 'Schkeuditz',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Schkeuditz – Pixel Kraftwerk automatisiert Kundenkommunikation am Logistikstandort Leipzig/Halle Airport.',
    intro:
      'Schkeuditz ist dank des Flughafens Leipzig/Halle und des DHL-Logistikhubs einer der dynamischsten Wirtschaftsstandorte in Nordsachsen. Die hohe Unternehmensdichte aus Logistik, Gewerbe und Dienstleistung erzeugt ein enormes Volumen an Kundenanfragen. Ein KI-Chatbot von Pixel Kraftwerk bearbeitet diese effizient rund um die Uhr.',
    paragraphs: [
      'Die Schkeuditzer Wirtschaft wird stark von Logistik und Flughafenumfeld geprägt: Speditionen, Lagerbetreiber, Zulieferer und zugehörige Dienstleister wie Reinigungsfirmen, Sicherheitsdienste und Personalvermittler bedienen ein Netzwerk aus nationalen und internationalen Kunden. Standardanfragen zu Leistungen, Preisen und Verfügbarkeiten binden dabei wertvolle Kapazitäten.',
      'Ein KI-Chatbot auf Ihrer Webseite beantwortet diese Anfragen sofort – ob Fragen zu Lagerkapazitäten, Transportoptionen, Dienstleistungspaketen oder Öffnungszeiten. Er erfasst Angebotsanfragen strukturiert und leitet sie an den zuständigen Mitarbeiter weiter, sodass kein potenzieller Auftrag verloren geht.',
      'Auch lokale Handwerker, Praxen und Gastronomiebetriebe in Schkeuditz profitieren: Der Chatbot übernimmt die Erstberatung, beantwortet Routinefragen und qualifiziert Anfragen vor – ideal für Betriebe, deren Teams durch den Schichtbetrieb des Flughafenumfelds zu unregelmäßigen Zeiten erreichbar sein müssen.',
      'Wir integrieren den Chatbot in Ihre bestehende Webseite und verbinden ihn auf Wunsch mit CRM, Logistiksoftware oder Ticketsystem. Auch eine mehrsprachige Konfiguration für internationale Geschäftspartner ist möglich.',
      'Pixel Kraftwerk sitzt in Groitzsch, nur rund 30 Kilometer von Schkeuditz entfernt. Kurze Wege für persönliche Termine – ob in Ihrem Büro am Flughafen oder in der Schkeuditzer Innenstadt.',
    ],
    faqs: [
      {
        q: 'Kann ein Chatbot auch Anfragen von internationalen Geschäftspartnern in Schkeuditz bearbeiten?',
        a: 'Ja. Wir richten den Chatbot mehrsprachig ein – ideal für Logistikunternehmen und Dienstleister im internationalen Flughafenumfeld.',
      },
      {
        q: 'Eignet sich ein Chatbot für Logistikunternehmen in Schkeuditz?',
        a: 'Absolut. Der Chatbot kann Anfragen zu Lagerkapazitäten, Transportoptionen und Preisen beantworten und Angebotsanfragen strukturiert erfassen.',
      },
      {
        q: 'Wie schnell ist der Chatbot für meinen Betrieb in Schkeuditz einsatzbereit?',
        a: 'Ein erster produktiver Chatbot steht in zwei bis vier Wochen. Mehrsprachige Konfigurationen oder ERP-Anbindungen benötigen etwas mehr Zeit.',
      },
      {
        q: 'Kommen Sie auch nach Schkeuditz?',
        a: 'Ja, sehr gerne. Von Groitzsch sind es nur rund 30 Kilometer – wir sind schnell bei Ihnen vor Ort.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit am dynamischen Logistikstandort Schkeuditz',
      'Mehrsprachig für internationale Geschäftspartner',
      'Integration in CRM, Logistiksoftware und Ticketsysteme',
      'Kurze Wege aus Groitzsch – nur ~30 km entfernt',
    ],
  },

  'schkeuditz.telefonassistenten': {
    regionSlug: 'schkeuditz',
    regionName: 'Schkeuditz',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Schkeuditz – Pixel Kraftwerk sichert die Erreichbarkeit am Logistikstandort Leipzig/Halle.',
    intro:
      'Am Wirtschaftsstandort Schkeuditz läuft vieles im Schichtbetrieb – Logistik, Sicherheitsdienste, Facility Management. Telefonische Erreichbarkeit rund um die Uhr ist geschäftskritisch, aber mit begrenztem Personal kaum realisierbar. Unser KI-Telefonassistent löst dieses Problem zuverlässig.',
    paragraphs: [
      'Die Nähe zum Flughafen Leipzig/Halle und zum DHL-Hub macht Schkeuditz zu einem Standort, der nie stillsteht. Anfragen kommen zu jeder Tages- und Nachtzeit – von Logistikpartnern, Endkunden und Geschäftspartnern aus verschiedenen Zeitzonen. Der Telefonassistent nimmt diese Anrufe entgegen, unabhängig von Geschäftszeiten.',
      'Für Logistik- und Transportfirmen erfasst der Assistent Sendungsnummern, Abhol- und Lieferwünsche sowie Reklamationen. Für Sicherheits- und Facility-Management-Unternehmen werden Einsatzmeldungen mit Standort und Dringlichkeit aufgenommen. Für lokale Handwerker und Dienstleister dokumentiert er Auftragsdetails und Kontaktdaten.',
      'Die Informationen werden in Echtzeit per E-Mail, SMS oder direkt in Ihr System weitergeleitet. Dringende Anliegen – etwa Sicherheitsvorfälle oder zeitkritische Logistikanfragen – werden sofort eskaliert und an den Bereitschaftsdienst durchgestellt.',
      'Wir konfigurieren den Assistenten für die besonderen Anforderungen am Standort Schkeuditz: Schichtpläne, Eskalationsstufen und mehrsprachige Gesprächsführung – alles passgenau auf Ihren Betrieb abgestimmt.',
    ],
    faqs: [
      {
        q: 'Funktioniert der Telefonassistent auch nachts für Schichtbetriebe in Schkeuditz?',
        a: 'Ja. Der Assistent arbeitet 24/7 und ist speziell für Betriebe mit Schichtbetrieb und unregelmäßigen Geschäftszeiten ausgelegt.',
      },
      {
        q: 'Kann der Assistent auch englischsprachige Anrufe entgegennehmen?',
        a: 'Ja. Wir konfigurieren den Assistenten mehrsprachig – ideal für internationale Logistikpartner am Flughafen Leipzig/Halle.',
      },
      {
        q: 'Wie werden dringende Anrufe in Schkeuditz behandelt?',
        a: 'Dringende Anliegen werden nach Ihren Kriterien sofort an den Bereitschaftsdienst oder eine Notfallnummer weitergeleitet.',
      },
      {
        q: 'Lässt sich der Assistent an Logistiksoftware anbinden?',
        a: 'Ja. Wir integrieren den Assistenten mit gängigen Transport- und Logistikmanagement-Systemen.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Schichtbetriebe und Logistikunternehmen',
      'Mehrsprachige Anrufannahme für internationale Partner',
      'Sofortige Eskalation bei zeitkritischen Anliegen',
      'Anbindung an Logistik- und Einsatzmanagement-Systeme',
    ],
  },

  'schkeuditz.automatisierungen': {
    regionSlug: 'schkeuditz',
    regionName: 'Schkeuditz',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Schkeuditz – Pixel Kraftwerk optimiert Prozesse für Logistik, Gewerbe und Dienstleister am Flughafen.',
    intro:
      'Am Logistikstandort Schkeuditz zählt Geschwindigkeit. Manuelle Dateneingabe, händische Auftragsbestätigungen und unkoordinierte Informationsflüsse bremsen Betriebe aus, die im Takt des Flughafens arbeiten. Pixel Kraftwerk automatisiert diese Abläufe – für schnellere Prozesse und weniger Fehler.',
    paragraphs: [
      'Schkeuditz als Heimat des Flughafens Leipzig/Halle und des DHL-Drehkreuzes ist ein Standort, an dem Effizienz über Wettbewerbsfähigkeit entscheidet. Logistikunternehmen, Zulieferer und Dienstleister im Flughafenumfeld bearbeiten täglich hunderte von Anfragen, Aufträgen und Statusmeldungen. Manuell ist das kaum noch zu bewältigen.',
      'Typische Automatisierungen für Schkeuditzer Betriebe: Eingehende Auftragsanfragen werden automatisch im System erfasst und mit einer Bestätigung versehen. Statusupdates gehen ohne manuellen Aufwand an Kunden raus. Rechnungen werden nach Leistungserbringung automatisch erstellt und versendet. Schichtpläne und Einsatzmeldungen fließen automatisch an die zuständigen Teams.',
      'Wir arbeiten mit den Systemen, die in Ihrem Betrieb bereits im Einsatz sind – ob Logistiksoftware, ERP, CRM oder einfach Google Workspace. Unser Ziel ist maximale Automatisierung bei minimalem Eingriff in bestehende Strukturen.',
      'In Kombination mit KI-Chatbot und Telefonassistent entsteht ein durchgängiger Workflow: Von der Anfrage über die Auftragsbearbeitung bis zur Nachbetreuung läuft alles automatisiert – Sie greifen nur ein, wo menschliches Urteil gefragt ist.',
      'Von Groitzsch aus sind wir in rund 30 Minuten in Schkeuditz – ideal für persönliche Workshops und technische Einrichtung vor Ort.',
    ],
    faqs: [
      {
        q: 'Können Automatisierungen auch an bestehende Logistiksoftware in Schkeuditz angebunden werden?',
        a: 'Ja. Wir integrieren Automatisierungen in gängige Transport- und Logistikmanagement-Systeme – über API, Webhooks oder Dateischnittstellen.',
      },
      {
        q: 'Wie schnell amortisieren sich Automatisierungen im Logistikumfeld?',
        a: 'Durch die hohe Frequenz von Standardprozessen amortisieren sich Automatisierungen in Schkeuditz oft schon innerhalb der ersten zwei bis drei Monate.',
      },
      {
        q: 'Können auch Schichtpläne und Personalkoordination automatisiert werden?',
        a: 'Ja. Wir automatisieren Schichtplan-Verteilung, Einsatzmeldungen und Abwesenheitsmanagement – angepasst an den Schichtbetrieb am Standort.',
      },
      {
        q: 'Ist eine schrittweise Einführung möglich?',
        a: 'Ja. Wir empfehlen den Start mit einem besonders zeitraubenden Prozess und erweitern die Automatisierung dann schrittweise.',
      },
    ],
    highlights: [
      'Automatisierte Auftragsbearbeitung und Statusupdates für Logistikbetriebe',
      'Integration in bestehende Logistik-, ERP- und CRM-Systeme',
      'Schnelle Amortisierung durch hohe Prozessfrequenz',
      'Persönliche Betreuung aus Groitzsch – nur ~30 km entfernt',
    ],
  },

  'schkeuditz.webseiten': {
    regionSlug: 'schkeuditz',
    regionName: 'Schkeuditz',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Schkeuditz – Pixel Kraftwerk erstellt moderne Webauftritte am Logistikstandort.',
    intro:
      'Schkeuditz ist ein Wirtschaftsstandort mit internationaler Ausstrahlung. Unternehmen am Flughafen Leipzig/Halle und im Gewerbegebiet brauchen Webseiten, die sowohl lokale Kunden als auch internationale Partner überzeugen. Pixel Kraftwerk entwickelt Webauftritte, die diesen Anspruch erfüllen.',
    paragraphs: [
      'Am Logistikstandort Schkeuditz konkurrieren Unternehmen um nationale und internationale Aufträge. Die Webseite ist dabei oft der erste Eindruck, den potenzielle Kunden und Partner gewinnen. Eine veraltete, langsame oder unübersichtliche Seite kostet Sie Geschäft. Wir sorgen dafür, dass Ihr Webauftritt Professionalität und Kompetenz vermittelt.',
      'Für Logistik- und Transportfirmen erstellen wir Webseiten mit Leistungsübersichten, Fuhrparkdarstellungen und Angebotsanfrage-Formularen. Für Dienstleister im Flughafenumfeld entwickeln wir mehrsprachige Seiten mit klarer Servicebeschreibung. Lokale Handwerker und Gastronomiebetriebe erhalten ansprechende Webauftritte mit regionaler Verankerung.',
      'Jede Webseite ist mobiloptimiert, schnell und suchmaschinenfreundlich. Wir setzen auf moderne Frameworks und optimierte Bilder, damit Ihre Seite auch auf dem Smartphone am Logistik-Terminal perfekt funktioniert und bei Google gefunden wird.',
      'Auf Wunsch integrieren wir KI-Chatbot, mehrsprachige Inhalte und Anbindungen an Ihre Branchensoftware – für einen Webauftritt, der nicht nur informiert, sondern aktiv Geschäft generiert.',
    ],
    faqs: [
      {
        q: 'Erstellen Sie auch mehrsprachige Webseiten für Schkeuditzer Unternehmen?',
        a: 'Ja. Für Unternehmen im internationalen Flughafenumfeld erstellen wir Webseiten in Deutsch, Englisch und auf Wunsch weiteren Sprachen.',
      },
      {
        q: 'Können Sie auch Webportale für Logistikdienstleister erstellen?',
        a: 'Ja. Wir entwickeln auch komplexere Weblösungen mit Kundenportalen, Sendungsverfolgung und Angebotsrechnern.',
      },
      {
        q: 'Wie stellen Sie die Auffindbarkeit bei Google sicher?',
        a: 'Jede Webseite wird mit SEO-Grundlagen ausgeliefert: Optimierte Seitenstruktur, Meta-Daten, schnelle Ladezeiten und lokal relevante Inhalte.',
      },
      {
        q: 'Betreuen Sie die Webseite auch nach dem Launch?',
        a: 'Ja. Wir bieten Wartungspakete mit Updates, Backups und technischem Support an.',
      },
    ],
    highlights: [
      'Mehrsprachige Webseiten für den internationalen Logistikstandort',
      'Mobiloptimiert und blitzschnell – auch am Logistik-Terminal',
      'SEO-Grundlagen von Anfang an integriert',
      'Persönliche Betreuung aus Groitzsch – nur ~30 km entfernt',
    ],
  },

  'schkeuditz.seo-top-3': {
    regionSlug: 'schkeuditz',
    regionName: 'Schkeuditz',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Schkeuditz – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google. Mehr Sichtbarkeit am Flughafenstandort.',
    intro:
      'Am Wirtschaftsstandort Schkeuditz entscheidet Google-Sichtbarkeit über Aufträge und Kundenzugang. Ob Logistikdienstleister, Zulieferer oder lokaler Betrieb – wer bei relevanten Suchanfragen nicht auf der ersten Seite steht, verliert Geschäft. Pixel Kraftwerk bringt Schkeuditzer Unternehmen in die Top 3.',
    paragraphs: [
      'Schkeuditz profitiert von der Sogwirkung des Flughafens Leipzig/Halle: Unternehmen und Arbeitnehmer suchen online nach Dienstleistern, Zulieferern und lokalen Angeboten. Die Nachfrage ist hoch – aber nur sichtbare Unternehmen können sie bedienen. Gezieltes SEO macht den Unterschied.',
      'Unsere SEO-Strategie für Schkeuditz kombiniert drei Ansätze: Technische Optimierung Ihrer Webseite für maximale Performance, inhaltliche Optimierung mit Texten, die lokale Relevanz und Branchenkompetenz verbinden, und systematischer Aufbau lokaler Signale über Google Unternehmensprofil und Branchenverzeichnisse.',
      'Für Logistik- und B2B-Unternehmen optimieren wir auf Fachbegriffe wie „Lagerlogistik Schkeuditz", „Transportdienstleister Flughafen Leipzig" oder „Personaldienstleister Nordsachsen". Für lokale Betriebe zielen wir auf „Handwerker Schkeuditz", „Restaurant Schkeuditz" und vergleichbare Suchbegriffe mit hoher Kaufabsicht.',
      'Wir liefern monatliche Reportings mit Ranking-Entwicklung, Wettbewerbsanalyse und konkreten Maßnahmen. So behalten Sie die Kontrolle und sehen transparent, wie sich Ihre Investition in SEO auszahlt.',
      'Von Groitzsch aus betreuen wir Schkeuditzer Unternehmen persönlich – mit nur rund 30 Kilometern Entfernung sind wir schnell bei Ihnen.',
    ],
    faqs: [
      {
        q: 'Wie schnell kann mein Schkeuditzer Unternehmen bei Google in die Top 3 kommen?',
        a: 'Für lokale Suchbegriffe sehen wir erste Verbesserungen nach sechs bis acht Wochen. Top-3-Platzierungen sind je nach Wettbewerb in drei bis sechs Monaten erreichbar.',
      },
      {
        q: 'Lohnt sich SEO auch für B2B-Logistikunternehmen in Schkeuditz?',
        a: 'Ja. Auch im B2B-Bereich beginnt die Lieferantensuche heute bei Google. Wer hier sichtbar ist, gewinnt Aufträge.',
      },
      {
        q: 'Optimieren Sie auch für englischsprachige Suchbegriffe?',
        a: 'Ja. Für Unternehmen im internationalen Flughafenumfeld optimieren wir auch auf englische Keywords.',
      },
      {
        q: 'Was kostet SEO für ein Unternehmen in Schkeuditz?',
        a: 'Die Kosten richten sich nach Branche und Wettbewerbsintensität. Nach einer kostenlosen Erstanalyse erhalten Sie ein transparentes monatliches Angebot.',
      },
    ],
    highlights: [
      'Lokale und überregionale SEO-Strategie für den Flughafenstandort',
      'B2B- und B2C-Keywords gezielt optimiert',
      'Mehrsprachige SEO für internationale Sichtbarkeit',
      'Monatliches Reporting und persönliche Betreuung aus der Region',
    ],
  },

  /* ================================================================
   *  WURZEN
   * ================================================================ */
  'wurzen.ki-chatbots': {
    regionSlug: 'wurzen',
    regionName: 'Wurzen',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Wurzen – Pixel Kraftwerk automatisiert Kundenkommunikation für Mittelstand und Handwerk an der Mulde.',
    intro:
      'Wurzen an der Mulde ist eine Traditionsstadt im Landkreis Leipzig, bekannt durch die Wurzener Nahrungsmittel und als Heimatstadt von Joachim Ringelnatz. Die lokale Wirtschaft aus Lebensmittelproduktion, Handwerk und Dienstleistungen steht vor der Herausforderung, mit begrenztem Personal steigende Kundenanfragen zu bewältigen. Ein KI-Chatbot von Pixel Kraftwerk schafft Abhilfe.',
    paragraphs: [
      'Wurzens Wirtschaft ist geprägt von der traditionsreichen Lebensmittelindustrie rund um die Marke Wurzener, einem lebendigen Handwerkermarkt und lokalen Dienstleistern, die die Stadt und das Umland versorgen. In all diesen Bereichen gehen täglich wiederkehrende Anfragen ein – zu Produkten, Leistungen, Terminen und Verfügbarkeiten.',
      'Ein KI-Chatbot auf Ihrer Webseite beantwortet diese Fragen automatisch und rund um die Uhr. Für Lebensmittelbetriebe liefert er Produktinformationen und nimmt Bestellanfragen entgegen. Handwerker profitieren von der automatisierten Auftragserfassung, während sie auf der Baustelle sind. Praxen und Kanzleien entlasten ihren Empfang bei Terminanfragen und Standardfragen.',
      'Wurzen hat mit dem Ringelnatz-Museum und der historischen Altstadt auch eine touristische Komponente: Der Chatbot kann Besuchern Informationen zu Öffnungszeiten, Veranstaltungen und Anfahrtswegen liefern – und so die lokale Tourismusinfrastruktur stärken.',
      'Technisch integrieren wir den Chatbot in Ihre bestehende Webseite und verbinden ihn bei Bedarf mit CRM, Shop-System oder Branchensoftware. Die Einrichtung erfolgt praxisnah auf Basis Ihrer realen Kundenanfragen.',
      'Von unserem Standort in Groitzsch sind wir in rund 45 Minuten in Wurzen – für persönliche Beratung, Workshops und technische Einrichtung vor Ort.',
    ],
    faqs: [
      {
        q: 'Für welche Branchen in Wurzen ist ein KI-Chatbot besonders sinnvoll?',
        a: 'Besonders wirkungsvoll sind Chatbots für Lebensmittelbetriebe, Handwerker, Praxen, Gastronomie und Dienstleister in Wurzen – überall, wo wiederkehrende Kundenanfragen anfallen.',
      },
      {
        q: 'Kann der Chatbot auch Produktanfragen für Wurzener Lebensmittelbetriebe bearbeiten?',
        a: 'Ja. Wir trainieren den Chatbot mit Ihren Produktdaten, sodass er Fragen zu Sortiment, Inhaltsstoffen, Allergenen und Verfügbarkeiten beantworten kann.',
      },
      {
        q: 'Ist ein Chatbot auch für den Tourismus in Wurzen einsetzbar?',
        a: 'Ja. Der Chatbot kann Besucherinformationen zum Ringelnatz-Museum, zur Altstadt und zu lokalen Veranstaltungen bereitstellen.',
      },
      {
        q: 'Wie wird der Chatbot an unsere Webseite angebunden?',
        a: 'Wir integrieren den Chatbot per Code-Snippet in Ihre bestehende Webseite – unabhängig davon, ob Sie WordPress, Jimdo oder ein anderes System nutzen.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Kunden und Besucher in Wurzen',
      'Automatische Produktanfragen und Auftragserfassung',
      'Einsetzbar für Tourismus, Lebensmittelindustrie und Handwerk',
      'Persönliche Betreuung aus Groitzsch – nur ~45 km entfernt',
    ],
  },

  'wurzen.telefonassistenten': {
    regionSlug: 'wurzen',
    regionName: 'Wurzen',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Wurzen – Pixel Kraftwerk sichert die telefonische Erreichbarkeit von Betrieben an der Mulde.',
    intro:
      'In Wurzen setzen viele Betriebe auf persönlichen Kontakt per Telefon. Doch wenn der Handwerker auf der Baustelle, die Ärztin im Behandlungszimmer oder die Bäckerei im Mittagsrush steckt, gehen Anrufe verloren. Unser KI-Telefonassistent sorgt dafür, dass jeder Anruf in Wurzen beantwortet wird.',
    paragraphs: [
      'Wurzens mittelständische Wirtschaft lebt von persönlichen Beziehungen und Zuverlässigkeit. Wenn ein Kunde anruft und niemanden erreicht, probiert er es beim Wettbewerber – und kommt oft nicht zurück. Der Telefonassistent verhindert genau das: Er nimmt jeden Anruf professionell entgegen, egal ob Sie gerade auf der Baustelle, im Kundengespräch oder in der Produktion sind.',
      'Für Handwerksbetriebe in Wurzen erfasst der Assistent Auftragsdetails, Adresse und Dringlichkeit. Praxen erhalten strukturierte Terminanfragen mit Symptombeschreibung und Versicherungsdaten. Lebensmittelbetriebe bekommen Bestellungen mit Produktwünschen und Lieferadresse dokumentiert.',
      'Die erfassten Informationen werden in Echtzeit per E-Mail oder ins CRM weitergeleitet. So können Sie nach dem Termin, der Behandlung oder der Schicht alle Anrufe gebündelt und priorisiert bearbeiten – ohne dass etwas verloren geht.',
      'Wir passen den Assistenten individuell an Ihren Wurzener Betrieb an: Begrüßungstext, Rückfragen, Weiterleitungsregeln und Eskalationslogik – alles exakt auf Ihren Alltag zugeschnitten.',
    ],
    faqs: [
      {
        q: 'Funktioniert der Telefonassistent auch für Lebensmittelbetriebe in Wurzen?',
        a: 'Ja. Der Assistent kann Bestellungen entgegennehmen, Produktfragen beantworten und Lieferwünsche dokumentieren.',
      },
      {
        q: 'Kann der Assistent bei dringenden Anliegen direkt durchstellen?',
        a: 'Ja. Für dringende Fälle leitet der Assistent sofort an Ihre Mobilnummer oder einen Notfallkontakt weiter.',
      },
      {
        q: 'Wie natürlich klingt der Telefonassistent?',
        a: 'Moderne KI-Sprachmodelle ermöglichen eine natürliche, freundliche Gesprächsführung. Die meisten Anrufenden nehmen den Assistenten positiv auf.',
      },
      {
        q: 'Kommen Sie für die Einrichtung nach Wurzen?',
        a: 'Ja. Von Groitzsch aus sind wir in rund 45 Minuten in Wurzen und richten alles persönlich bei Ihnen ein.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch während Baustelle, Behandlung oder Produktion',
      'Strukturierte Erfassung von Aufträgen, Bestellungen und Terminen',
      'Sofortige Eskalation bei dringenden Anliegen',
      'Persönliche Einrichtung und Betreuung aus der Region',
    ],
  },

  'wurzen.automatisierungen': {
    regionSlug: 'wurzen',
    regionName: 'Wurzen',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Wurzen – Pixel Kraftwerk digitalisiert Routineabläufe im Mittelstand an der Mulde.',
    intro:
      'In vielen Wurzener Betrieben laufen Bestellungen, Terminkoordination und Kundennachfassung noch manuell. Das kostet Zeit, erzeugt Fehler und bremst das Wachstum. Pixel Kraftwerk automatisiert genau diese Routineprozesse – passend zu den Strukturen von Lebensmittelwirtschaft, Handwerk und Dienstleistung in Wurzen.',
    paragraphs: [
      'Wurzens Wirtschaft ist geprägt von Betrieben, die mit überschaubaren Teams viel leisten: Lebensmittelproduzenten koordinieren Bestellungen und Lieferungen, Handwerker verwalten Aufträge im gesamten Landkreis Leipzig, Dienstleister betreuen einen wachsenden Kundenstamm. Manuelle Prozesse stoßen dabei an Grenzen.',
      'Typische Automatisierungen für Wurzener Betriebe: Bestellungen von der Webseite werden automatisch ins System übertragen und bestätigt. Auftragsbestätigungen und Terminbestätigungen gehen ohne manuelles Zutun raus. Nach Abschluss eines Auftrags wird automatisch eine Rechnung erstellt und eine Zufriedenheitsabfrage versendet.',
      'Wir integrieren die Automatisierung in Ihre vorhandenen Werkzeuge: Ob Warenwirtschaft, Buchhaltungssoftware, Google Workspace oder Branchenlösung – wir verbinden die Systeme, statt sie auszutauschen.',
      'In Kombination mit KI-Chatbot und Telefonassistent entsteht ein durchgängiger Workflow: Von der ersten Anfrage über die Auftragsbearbeitung bis zur Nachbetreuung läuft alles automatisiert – Ihr Team greift nur ein, wo menschliches Urteil gefragt ist.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse eignen sich in Wurzener Lebensmittelbetrieben für Automatisierung?',
        a: 'Bestellabwicklung, Lieferavisierung, Rechnungsstellung, Chargen-Dokumentation und Kundennachfassung sind häufige Einstiegspunkte.',
      },
      {
        q: 'Muss ich meine bestehende Software in Wurzen wechseln?',
        a: 'Nein. Wir integrieren die Automatisierung in Ihre vorhandenen Systeme – kein Softwarewechsel erforderlich.',
      },
      {
        q: 'Wie schnell sehe ich Ergebnisse?',
        a: 'Einfache Workflows sind in ein bis zwei Wochen produktiv. Die Zeitersparnis spüren Sie ab dem ersten Tag.',
      },
      {
        q: 'Unterstützen Sie auch kleine Betriebe in Wurzen?',
        a: 'Ja. Gerade kleine Betriebe profitieren stark von Automatisierung, weil jede eingesparte Stunde zählt.',
      },
    ],
    highlights: [
      'Automatisierte Bestell- und Auftragsbearbeitung für Wurzener Betriebe',
      'Integration in Warenwirtschaft, Buchhaltung und CRM',
      'Zeitersparnis ab dem ersten Tag',
      'Persönliche Betreuung aus Groitzsch – nur ~45 km entfernt',
    ],
  },

  'wurzen.webseiten': {
    regionSlug: 'wurzen',
    regionName: 'Wurzen',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Wurzen – Pixel Kraftwerk erstellt moderne Webauftritte für die Traditionsstadt an der Mulde.',
    intro:
      'Wurzen verbindet Tradition mit Zukunft – und genau das sollte auch Ihre Webseite ausstrahlen. Ob Lebensmittelbetrieb, Handwerker oder lokaler Dienstleister: Eine professionelle, schnelle und suchmaschinenoptimierte Webseite ist der Schlüssel, um Kunden im Landkreis Leipzig und darüber hinaus zu erreichen. Pixel Kraftwerk entwickelt Webseiten, die das leisten.',
    paragraphs: [
      'In einer Stadt wie Wurzen, die von Tradition und regionaler Verbundenheit lebt, muss eine Webseite Vertrauen und Kompetenz ausstrahlen. Gleichzeitig erwarten Besucher moderne Technik: Schnelle Ladezeiten, optimale Darstellung auf dem Smartphone und intuitive Navigation sind Pflicht – sonst springen sie ab.',
      'Für Wurzener Lebensmittelbetriebe erstellen wir Webseiten mit Produktpräsentation, Shopanbindung und Bestellformularen. Handwerker erhalten Referenzgalerien und Kontaktformulare mit CRM-Integration. Für kulturelle Einrichtungen wie das Ringelnatz-Haus entwickeln wir ansprechende Webauftritte mit Veranstaltungskalender und Besucherinformationen.',
      'Jede Webseite wird von Grund auf für Suchmaschinen optimiert: Saubere Struktur, lokale Keywords, schnelle Ladezeiten und strukturierte Daten sorgen dafür, dass Sie bei Google-Suchen wie „Handwerker Wurzen" oder „Lebensmittel Landkreis Leipzig" gefunden werden.',
      'Auf Wunsch integrieren wir einen KI-Chatbot, der Webseitenbesucher sofort begrüßt und häufige Fragen beantwortet. So wird Ihre Webseite zum aktiven Vertriebskanal – rund um die Uhr.',
    ],
    faqs: [
      {
        q: 'Erstellen Sie auch Online-Shops für Wurzener Lebensmittelbetriebe?',
        a: 'Ja. Ob kleiner Produktshop oder vollständiger Online-Handel – wir setzen die passende Lösung für Ihr Sortiment und Ihre Abläufe um.',
      },
      {
        q: 'Kann ich die Webseite selbst aktualisieren?',
        a: 'Ja. Wir richten ein benutzerfreundliches CMS ein und schulen Sie, damit Sie Texte, Bilder und Produkte eigenständig pflegen können.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für einen Wurzener Betrieb?',
        a: 'Eine Standard-Webseite ist in vier bis sechs Wochen fertig. Shops und komplexere Projekte benötigen entsprechend mehr Zeit.',
      },
      {
        q: 'Bieten Sie auch Fotografie für die Webseite an?',
        a: 'Wir arbeiten mit regionalen Fotografen zusammen, die professionelle Bilder Ihres Betriebs, Ihrer Produkte und Ihres Teams erstellen.',
      },
    ],
    highlights: [
      'Moderne Webseiten für Lebensmittelindustrie, Handwerk und Kultur in Wurzen',
      'Shopanbindung und Produktpräsentation für regionale Marken',
      'Suchmaschinenoptimiert und mobilfreundlich',
      'Persönliche Betreuung aus Groitzsch – nur ~45 km entfernt',
    ],
  },

  'wurzen.seo-top-3': {
    regionSlug: 'wurzen',
    regionName: 'Wurzen',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Wurzen – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google. Mehr Sichtbarkeit im Landkreis Leipzig.',
    intro:
      'Wenn Menschen in Wurzen nach Handwerkern, Ärzten oder lokalen Produkten suchen, beginnen sie bei Google. Wer dort nicht sichtbar ist, verliert Kunden an die Konkurrenz. Pixel Kraftwerk sorgt dafür, dass Wurzener Betriebe bei lokalen Suchanfragen ganz oben stehen – und dort bleiben.',
    paragraphs: [
      'Wurzen bietet als Traditionsstadt im Landkreis Leipzig gute Voraussetzungen für lokales SEO: Der Wettbewerb ist überschaubar, die lokale Nachfrage stabil. Unternehmen, die jetzt in ihre Google-Sichtbarkeit investieren, sichern sich einen nachhaltigen Vorsprung – insbesondere gegenüber Betrieben, die noch keine Online-Strategie verfolgen.',
      'Unsere SEO-Strategie für Wurzen: Technische Optimierung Ihrer Webseite für maximale Ladegeschwindigkeit und mobile Performance, inhaltliche Stärkung mit lokal relevanten Texten zu Wurzen und dem Muldental, und gezielter Aufbau lokaler Signale über Google Unternehmensprofil, Branchenverzeichnisse und regionale Verlinkungen.',
      'Wir identifizieren die Suchbegriffe, die für Ihr Wurzener Geschäft relevant sind – ob „Bäckerei Wurzen", „Elektriker Muldental", „Lebensmittel Landkreis Leipzig" oder „Restaurant Wurzen Altstadt". Für diese Keywords optimieren wir Ihre Webseite gezielt und messbar.',
      'SEO ist ein kontinuierlicher Prozess. Wir liefern monatliche Reportings, in denen Sie die Ranking-Entwicklung, den organischen Traffic und die gewonnenen Anfragen transparent nachvollziehen können. Bei Bedarf justieren wir die Strategie nach.',
      'Von Groitzsch aus sind wir in rund 45 Minuten in Wurzen – für persönliche Gespräche, Strategieworkshops oder Vor-Ort-Analysen.',
    ],
    faqs: [
      {
        q: 'Wie schnell sehe ich SEO-Ergebnisse für meinen Betrieb in Wurzen?',
        a: 'Erste Rankingverbesserungen zeigen sich oft nach sechs bis acht Wochen. Top-3-Platzierungen für lokale Keywords erreichen wir typischerweise in drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO für einen kleinen Betrieb in Wurzen?',
        a: 'Ja, besonders. In Wurzen ist der Wettbewerb bei vielen Suchbegriffen gering – Top-Platzierungen sind mit gezielter Optimierung realistisch und bezahlbar.',
      },
      {
        q: 'Optimieren Sie auch das Google-Unternehmensprofil meines Wurzener Betriebs?',
        a: 'Ja. Das Google-Unternehmensprofil mit Öffnungszeiten, Fotos, Bewertungen und Beiträgen ist ein zentraler Baustein unserer lokalen SEO-Strategie.',
      },
      {
        q: 'Können Sie SEO auch mit einer neuen Webseite kombinieren?',
        a: 'Ja. Die Kombination aus Webseiten-Erstellung und SEO ist ideal, weil wir die SEO-Struktur von Anfang an optimal aufbauen können.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für Wurzen und das Muldental',
      'Optimierung auf branchenspezifische Suchbegriffe im Landkreis Leipzig',
      'Google Unternehmensprofil und Branchenverzeichnisse inklusive',
      'Monatliches Reporting und persönliche Betreuung aus der Region',
    ],
  },
};
