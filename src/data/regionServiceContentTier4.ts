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

export const tier4ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  /* ================================================================
   *  NAUNHOF
   * ================================================================ */
  'naunhof.ki-chatbots': {
    regionSlug: 'naunhof',
    regionName: 'Naunhof',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Naunhof – Pixel Kraftwerk automatisiert Kundenkommunikation für Handwerk, Gastronomie und Dienstleister am Grillensee im Landkreis Leipzig.',
    intro:
      'Naunhof, die beschauliche Wohnstadt am Grillensee südöstlich von Leipzig, zieht mit ihrem hohen Freizeitwert Familien und Pendler gleichermaßen an. Lokale Betriebe – vom Handwerker über den Gastwirt bis zum Physiotherapeuten – erhalten täglich dieselben Standardfragen. Ein KI-Chatbot von Pixel Kraftwerk beantwortet diese Anfragen rund um die Uhr und entlastet Ihr Team spürbar.',
    paragraphs: [
      'Die Naunhofer Wirtschaft ist geprägt von kleinen Betrieben, die eng mit der Wohnbevölkerung verbunden sind: Handwerker, Ärzte, Gaststätten rund um den Grillensee und Dienstleister entlang der B107. Fragen zu Öffnungszeiten, Preisen, freien Terminen und Leistungsumfang wiederholen sich täglich. Ein KI-Chatbot auf Ihrer Webseite fängt genau diese Routineanfragen ab und liefert Kunden sofort eine Antwort.',
      'Für die Gastronomie- und Freizeitbetriebe am Grillensee ist der Chatbot besonders wertvoll: Gäste fragen nach Tischreservierungen, Öffnungszeiten, Veranstaltungen oder Anfahrtswegen. Der Chatbot beantwortet all das automatisch – auch außerhalb der Geschäftszeiten, wenn niemand am Telefon sitzt.',
      'Handwerksbetriebe in Naunhof profitieren von der Vorqualifizierung: Kunden beschreiben ihr Anliegen im Chat, der Bot stellt gezielte Rückfragen zu Umfang und Dringlichkeit und leitet eine strukturierte Zusammenfassung an Ihr Team weiter. So erhalten Sie statt unübersichtlicher E-Mails sofort verwertbare Informationen.',
      'Die technische Integration erfolgt in Ihre bestehende Webseite – ob WordPress, Jimdo oder ein individuelles System. Auf Wunsch verbinden wir den Chatbot mit Ihrem Kalender oder Buchungstool, sodass Terminanfragen direkt im richtigen System landen.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 30 Kilometer von Naunhof entfernt. Persönliche Beratungstermine vor Ort sind für uns selbstverständlich – ob in Ihrer Werkstatt, Ihrem Restaurant oder Ihrer Praxis.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot auch für kleine Betriebe in Naunhof?',
        a: 'Gerade kleine Betriebe profitieren besonders, weil der Chatbot Routineanfragen automatisch beantwortet und so das knappe Personalbudget entlastet – ob Handwerker, Gastwirt oder Einzelpraxis.',
      },
      {
        q: 'Kann der Chatbot Reservierungen für Gastronomie am Grillensee aufnehmen?',
        a: 'Ja. Der Chatbot kann Tischreservierungen, Veranstaltungsanfragen und Gruppenanmeldungen aufnehmen und direkt in Ihr Buchungssystem weiterleiten.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Naunhofer Unternehmen einsatzbereit?',
        a: 'Ein erster produktiver Chatbot steht in der Regel innerhalb von zwei bis drei Wochen. Einfache Setups können oft noch schneller live gehen.',
      },
      {
        q: 'Kommen Sie für die Einrichtung auch nach Naunhof?',
        a: 'Selbstverständlich. Von Groitzsch erreichen wir Naunhof in rund 30 Minuten. Erstgespräch, Workshop und technische Einrichtung machen wir gern persönlich bei Ihnen.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden in Naunhof und am Grillensee',
      'Vorqualifizierung von Anfragen spart Ihrem Team täglich Zeit',
      'Integration in Kalender, CRM und bestehende Systeme',
      'Persönliche Betreuung aus Groitzsch – nur ~30 km entfernt',
    ],
  },

  'naunhof.telefonassistenten': {
    regionSlug: 'naunhof',
    regionName: 'Naunhof',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Naunhof – Pixel Kraftwerk sichert die Erreichbarkeit von Handwerkern, Praxen und Gastronomen am Grillensee.',
    intro:
      'In Naunhof greifen viele Kunden zum Telefon – ob für den Hausarzt, den Elektriker oder das Ausflugslokal am Grillensee. Doch wenn das Team beim Kunden vor Ort oder im vollen Tagesgeschäft steckt, klingelt das Telefon oft ins Leere. Unser KI-Telefonassistent nimmt jeden Anruf professionell entgegen und sorgt dafür, dass kein Auftrag verloren geht.',
    paragraphs: [
      'Naunhofs Betriebe arbeiten oft mit kleinen Teams: Wenn der Handwerker auf der Baustelle in Brandis oder Grimma ist, bleiben Anrufe unbeantwortet. Der Telefonassistent von Pixel Kraftwerk springt genau dann ein – er begrüßt Anrufende freundlich, klärt das Anliegen und erfasst alle wichtigen Informationen strukturiert.',
      'Für Arztpraxen in Naunhof bedeutet das sofortige Entlastung: Terminwünsche, Rezeptanfragen und organisatorische Fragen werden automatisch aufgenommen und nach Priorität sortiert. Ihr Praxisteam erhält eine geordnete Übersicht statt hektischer Telefonnotizen.',
      'Gastronomiebetriebe am Grillensee profitieren ebenfalls: Reservierungsanfragen, Fragen zu Speisekarte oder Veranstaltungen werden auch abends und am Wochenende entgegengenommen, wenn Küche und Service voll ausgelastet sind.',
      'Der Assistent wird passgenau für Ihr Unternehmen konfiguriert: Welche Informationen sollen erfasst werden? Welche Anrufe werden sofort durchgestellt? Diese Logik stimmen wir gemeinsam ab, sodass der Assistent wie ein echtes Teammitglied agiert.',
    ],
    faqs: [
      {
        q: 'Merken Anrufer in Naunhof, dass sie mit einer KI sprechen?',
        a: 'Der Assistent klingt natürlich und professionell. Die meisten Anrufer empfinden das Gespräch als angenehm – vergleichbar mit einem gut geschulten Mitarbeiter am Empfang.',
      },
      {
        q: 'Kann der Telefonassistent auch außerhalb der Öffnungszeiten arbeiten?',
        a: 'Ja. Der Assistent ist 24/7 erreichbar und nimmt Anrufe auch abends, am Wochenende und an Feiertagen entgegen.',
      },
      {
        q: 'Was passiert bei dringenden Anrufen?',
        a: 'Notfälle erkennt der Assistent anhand definierter Schlüsselwörter und leitet sofort an die hinterlegte Nummer weiter.',
      },
      {
        q: 'Wie wird der Telefonassistent an meine Naunhofer Nummer angebunden?',
        a: 'Wir richten eine Rufumleitung ein, sodass Anrufe bei Nichtannahme automatisch an den Assistenten gehen. Ihre bestehende Nummer bleibt erhalten.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch bei Außenterminen oder Stoßzeiten',
      '24/7-Erreichbarkeit für Kunden in Naunhof und der Grillensee-Region',
      'Dringende Anrufe werden sofort an Sie weitergeleitet',
      'Persönliche Einrichtung vor Ort – Groitzsch ist nur ~30 km entfernt',
    ],
  },

  'naunhof.automatisierungen': {
    regionSlug: 'naunhof',
    regionName: 'Naunhof',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Naunhof – Pixel Kraftwerk digitalisiert Abläufe in Handwerk, Gastronomie und Dienstleistung am Grillensee.',
    intro:
      'Viele Betriebe in Naunhof arbeiten mit bewährten, aber zeitaufwendigen manuellen Prozessen: Rechnungen per Hand, Terminbestätigungen einzeln, Kundendaten in verschiedenen Listen. Pixel Kraftwerk automatisiert genau diese Abläufe – damit Ihr Team sich auf das konzentrieren kann, was wirklich zählt.',
    paragraphs: [
      'Die typischen Automatisierungspotenziale in Naunhofer Betrieben liegen im Alltäglichen: Auftragsbestätigungen, die nach Eingang automatisch versendet werden; Rechnungen, die nach Abschluss eines Auftrags von selbst erstellt und verschickt werden; Kundendaten, die nur einmal erfasst und überall verfügbar sind.',
      'Für Handwerksbetriebe in Naunhof bedeutet das konkret: Nach Auftragsabschluss generiert das System die Rechnung, dokumentiert die Leistung und benachrichtigt den Kunden – kein manuelles Übertragen, kein Vergessen von Nachfassaktionen.',
      'Gastronomiebetriebe am Grillensee nutzen Automatisierungen etwa für die Bestätigung von Reservierungen, die automatische Erinnerung an bevorstehende Veranstaltungen oder die Nachfrage nach Bewertungen nach dem Besuch.',
      'Wir setzen auf Plattformen wie Make und n8n und verbinden Ihre bestehenden Systeme miteinander – ob Buchhaltungssoftware, Kalender, E-Mail oder Warenwirtschaft. Jede Automatisierung wird an Ihre konkreten Abläufe angepasst.',
    ],
    faqs: [
      {
        q: 'Was lässt sich in einem kleinen Naunhofer Betrieb automatisieren?',
        a: 'Typische Einstiegspunkte sind automatische Rechnungsstellung, Terminbestätigungen, Kundennachfass-Mails und die Synchronisation von Kontaktdaten zwischen verschiedenen Tools.',
      },
      {
        q: 'Muss ich meine bestehende Software in Naunhof wechseln?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme miteinander, statt sie zu ersetzen. So arbeiten Ihre Tools endlich zusammen, ohne dass Sie umlernen müssen.',
      },
      {
        q: 'Was kostet eine Automatisierung für meinen Naunhofer Betrieb?',
        a: 'Die Kosten hängen vom Umfang ab. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot, das zu Ihrer Betriebsgröße passt.',
      },
      {
        q: 'Wie lange dauert die Einrichtung?',
        a: 'Einfache Automatisierungen sind in wenigen Tagen live. Komplexere Workflows mit mehreren Systemen benötigen zwei bis vier Wochen.',
      },
    ],
    highlights: [
      'Zeitersparnis durch automatische Rechnungen, Bestätigungen und Follow-ups',
      'Keine Systemwechsel nötig – wir verbinden Ihre vorhandenen Tools',
      'Individuelle Workflows passend zu Ihrem Naunhofer Betrieb',
      'Persönliche Betreuung aus Groitzsch – nur ~30 km entfernt',
    ],
  },

  'naunhof.webseiten': {
    regionSlug: 'naunhof',
    regionName: 'Naunhof',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Naunhof – Pixel Kraftwerk erstellt moderne, schnelle Websites für Betriebe am Grillensee im Landkreis Leipzig.',
    intro:
      'Wer in Naunhof nach einem Handwerker, einer Praxis oder einem Restaurant am Grillensee sucht, beginnt heute online. Eine professionelle Webseite ist damit kein Luxus, sondern Grundvoraussetzung für Sichtbarkeit. Pixel Kraftwerk erstellt Webseiten, die nicht nur gut aussehen, sondern schnell laden, mobiloptimiert sind und bei Google gefunden werden.',
    paragraphs: [
      'Viele Naunhofer Betriebe haben entweder keine eigene Webseite oder eine veraltete Seite, die auf dem Smartphone schlecht funktioniert. Das kostet Kunden: Wer „Elektriker Naunhof" oder „Restaurant Grillensee" googelt und nichts Überzeugendes findet, wählt die Konkurrenz. Eine moderne Webseite sorgt dafür, dass Sie gefunden werden und einen professionellen ersten Eindruck hinterlassen.',
      'Wir entwickeln Webseiten mit klarem Fokus auf Ladegeschwindigkeit und Benutzerfreundlichkeit. Jede Seite wird mobiloptimiert, denn der Großteil der Suchanfragen erfolgt heute über das Smartphone. Kontaktformulare, Anfahrtskarten und Öffnungszeiten sind prominent platziert, damit Interessenten schnell finden, was sie suchen.',
      'Für Dienstleister und Handwerker in Naunhof integrieren wir auf Wunsch Terminbuchung, Angebotsanfrage-Formulare und Referenzgalerien. Gastronomiebetriebe erhalten Speisekarten-Module, Reservierungsformulare und Veranstaltungskalender.',
      'Jede Webseite wird von Anfang an suchmaschinenoptimiert: Lokale Keywords wie „Naunhof", „Grillensee" und „Landkreis Leipzig" werden strategisch eingebaut, Ladezeiten minimiert und strukturierte Daten hinterlegt, damit Google Ihre Leistungen korrekt erfasst.',
    ],
    faqs: [
      {
        q: 'Was kostet eine professionelle Webseite für ein Naunhofer Unternehmen?',
        a: 'Die Kosten richten sich nach Umfang und Funktionen. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot, das zu Ihrem Budget passt.',
      },
      {
        q: 'Kann ich meine Naunhofer Webseite selbst pflegen?',
        a: 'Ja. Wir bauen auf benutzerfreundliche Systeme und schulen Sie in der Pflege. Texte, Bilder und Öffnungszeiten können Sie selbst aktualisieren.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite?',
        a: 'Eine typische Unternehmenswebseite steht in drei bis sechs Wochen. Einfachere Projekte können schneller realisiert werden.',
      },
      {
        q: 'Wird die Webseite auch für Smartphones optimiert?',
        a: 'Selbstverständlich. Mobile Optimierung ist bei uns Standard – über 70 % der Suchanfragen kommen heute vom Smartphone.',
      },
    ],
    highlights: [
      'Moderne, mobiloptimierte Webseite für Ihren Naunhofer Betrieb',
      'Suchmaschinenoptimiert für lokale Keywords rund um Naunhof und den Grillensee',
      'Schnelle Ladezeiten und benutzerfreundliches Design',
      'Persönliche Beratung und Umsetzung aus Groitzsch – nur ~30 km entfernt',
    ],
  },

  'naunhof.seo-top-3': {
    regionSlug: 'naunhof',
    regionName: 'Naunhof',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Naunhof – Pixel Kraftwerk bringt Ihren Betrieb am Grillensee auf die Top-3-Positionen bei Google.',
    intro:
      'Wenn potenzielle Kunden „Friseur Naunhof", „Elektriker Grillensee" oder „Zahnarzt Naunhof" googeln, entscheidet die Position in den Suchergebnissen über den Zuschlag. Pixel Kraftwerk sorgt dafür, dass Ihr Betrieb bei den relevanten lokalen Suchanfragen ganz oben steht – in den Top 3 bei Google.',
    paragraphs: [
      'In einer Kleinstadt wie Naunhof mit rund 9.000 Einwohnern ist der lokale Wettbewerb pro Branche überschaubar. Das bedeutet: Mit gezielter Suchmaschinenoptimierung lassen sich Top-Platzierungen realistisch und nachhaltig erreichen. Genau das nutzen wir für Ihr Unternehmen.',
      'Unsere SEO-Strategie beginnt mit einer Analyse der relevanten Suchbegriffe: Welche Begriffe geben Naunhofer und Menschen aus Leipzig, Brandis oder Grimma ein, wenn sie Ihre Leistung suchen? Darauf optimieren wir Ihre Webseite – von Seitentiteln und Texten über technische Performance bis hin zu Google My Business.',
      'Lokales SEO für Naunhof umfasst auch den Aufbau Ihres Google-Unternehmensprofils: Korrekte Adressdaten, aussagekräftige Fotos, regelmäßige Beiträge und aktives Bewertungsmanagement. So erscheinen Sie nicht nur in der organischen Suche, sondern auch in Google Maps und im Local Pack.',
      'Wir setzen auf nachhaltige Maßnahmen statt kurzfristiger Tricks: Technische Optimierung, hochwertiger Content mit lokalen Bezügen und strategischer Linkaufbau. Die Ergebnisse messen wir monatlich und passen die Strategie laufend an.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Naunhofer Betrieb in den Top 3 steht?',
        a: 'In einer Kleinstadt wie Naunhof sind erste Verbesserungen oft schon nach vier bis acht Wochen sichtbar. Stabile Top-3-Platzierungen erreichen wir in der Regel innerhalb von drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO für einen kleinen Betrieb in Naunhof?',
        a: 'Gerade in Naunhof ist der Wettbewerb überschaubar. Das macht Top-Platzierungen realistisch erreichbar – oft mit weniger Aufwand als in Leipzig oder Halle.',
      },
      {
        q: 'Brauche ich dafür eine neue Webseite?',
        a: 'Nicht unbedingt. Wenn Ihre bestehende Webseite technisch solide ist, optimieren wir sie gezielt. Falls ein Relaunch sinnvoller ist, beraten wir Sie ehrlich.',
      },
      {
        q: 'Wie messen Sie den SEO-Erfolg?',
        a: 'Sie erhalten monatliche Reports mit Keyword-Rankings, Sichtbarkeit, Besucherzahlen und konkreten Handlungsempfehlungen.',
      },
    ],
    highlights: [
      'Top-3-Platzierung bei Google für lokale Suchanfragen in Naunhof',
      'Überschaubarer Wettbewerb – realistische Chancen für Ihren Betrieb',
      'Google My Business-Optimierung inklusive',
      'Monatliche Erfolgsberichte und persönliche Betreuung aus Groitzsch',
    ],
  },

  /* ================================================================
   *  LÜTZEN
   * ================================================================ */
  'luetzen.ki-chatbots': {
    regionSlug: 'luetzen',
    regionName: 'Lützen',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Lützen – Pixel Kraftwerk automatisiert Kundenkommunikation für Betriebe in der historischen Stadt an der B87 im Burgenlandkreis.',
    intro:
      'Lützen, die historische Stadt an der B87 zwischen Weißenfels und Leipzig, verbindet Geschichte mit lebendigem Mittelstand. Mit nur rund 20 Kilometern Entfernung zu Groitzsch ist Pixel Kraftwerk quasi Ihr Nachbar – und liefert KI-Chatbots, die Ihre Kundenkommunikation rund um die Uhr automatisieren.',
    paragraphs: [
      'Die Lützener Wirtschaft lebt von Handwerksbetrieben, Landwirtschaft, Einzelhandel und Dienstleistern entlang der B87. Ob Anfragen zu Lieferzeiten, Öffnungszeiten oder Terminverfügbarkeit – diese Routinefragen binden täglich wertvolle Arbeitszeit. Ein KI-Chatbot auf Ihrer Webseite beantwortet sie sofort und erfasst neue Kontakte strukturiert.',
      'Für Betriebe im Tourismus rund um die Schlacht bei Lützen und das Gustav-Adolf-Denkmal ist der Chatbot besonders nützlich: Besucher fragen nach Führungen, Öffnungszeiten und Anfahrtswegen. Der Chatbot liefert Antworten in Echtzeit, auch wenn gerade niemand erreichbar ist.',
      'Handwerker und Dienstleister in Lützen profitieren von der automatischen Vorqualifizierung: Der Chatbot stellt Rückfragen zu Art und Umfang des Anliegens und übergibt Ihrem Team eine strukturierte Zusammenfassung – statt unübersichtlicher E-Mails.',
      'Die Integration erfolgt nahtlos in Ihre bestehende Webseite. Auf Wunsch verbinden wir den Chatbot mit Ihrem Kalender, CRM oder anderen Tools.',
      'Von Groitzsch nach Lützen sind es gerade einmal 20 Kilometer – persönliche Termine bei Ihnen vor Ort sind jederzeit unkompliziert möglich. Wir kennen die Region und die Bedürfnisse lokaler Betriebe.',
    ],
    faqs: [
      {
        q: 'Wie nah ist Pixel Kraftwerk an Lützen?',
        a: 'Unser Standort Groitzsch liegt nur rund 20 km von Lützen entfernt. Wir sind in weniger als 20 Minuten bei Ihnen – quasi Nachbarn.',
      },
      {
        q: 'Eignet sich ein KI-Chatbot für tourismusbezogene Betriebe in Lützen?',
        a: 'Absolut. Gerade bei saisonalen Besucheranfragen zu Öffnungszeiten, Führungen und Sehenswürdigkeiten entlastet der Chatbot Ihr Team enorm.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Lützener Unternehmen einsatzbereit?',
        a: 'In der Regel innerhalb von zwei bis drei Wochen. Dank der kurzen Wege können wir besonders schnell und unkompliziert zusammenarbeiten.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für einen kleinen Betrieb in Lützen?',
        a: 'Die Kosten hängen vom Umfang ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot, das zu Ihrer Betriebsgröße passt.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden in Lützen und dem Burgenlandkreis',
      'Automatische Vorqualifizierung spart täglich Zeit',
      'Integration in Kalender, CRM und bestehende Tools',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Betreuung aus der direkten Nachbarschaft',
    ],
  },

  'luetzen.telefonassistenten': {
    regionSlug: 'luetzen',
    regionName: 'Lützen',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Lützen – Pixel Kraftwerk sichert die Erreichbarkeit von Handwerkern, Praxen und Dienstleistern im Burgenlandkreis.',
    intro:
      'In Lützen ist das Telefon für Handwerker, Arztpraxen und Dienstleister nach wie vor der wichtigste Draht zum Kunden. Doch wer auf der Baustelle zwischen Weißenfels und Leipzig unterwegs ist, kann nicht gleichzeitig Anrufe annehmen. Unser KI-Telefonassistent übernimmt – und das aus nur 20 km Entfernung.',
    paragraphs: [
      'Lützener Betriebe arbeiten oft mit schlanken Teams: Wenn der Meister beim Kunden in Markranstädt oder Weißenfels ist, klingelt das Telefon ins Leere. Der Telefonassistent von Pixel Kraftwerk nimmt jeden Anruf entgegen, begrüßt Anrufende freundlich und erfasst alle relevanten Informationen – Anliegen, Kontaktdaten, Dringlichkeit.',
      'Für Praxen in Lützen ist die Entlastung direkt spürbar: Terminanfragen, Rezeptwünsche und organisatorische Fragen werden automatisch aufgenommen und sortiert weitergeleitet. Ihr Praxisteam kann sich auf die Patientenversorgung konzentrieren.',
      'Handwerker profitieren besonders: Der Assistent nimmt Auftragsanfragen entgegen, stellt Rückfragen zu Art und Umfang der gewünschten Arbeit und leitet alles per E-Mail oder direkt ins System weiter. Kein verpasster Auftrag mehr.',
      'Die Konfiguration stimmen wir persönlich mit Ihnen ab – bei nur 20 km Entfernung zwischen Groitzsch und Lützen sind persönliche Treffen unkompliziert und kurzfristig möglich.',
    ],
    faqs: [
      {
        q: 'Erkennen Anrufer, dass sie mit einer KI sprechen?',
        a: 'Der Assistent klingt natürlich und professionell. Die Reaktionen sind in aller Regel positiv, weil Anrufer sofort Hilfe erhalten statt auf den Anrufbeantworter zu sprechen.',
      },
      {
        q: 'Kann der Telefonassistent auch am Wochenende Anrufe entgegennehmen?',
        a: 'Ja. Der Assistent arbeitet 24/7 – auch an Feiertagen und am Wochenende.',
      },
      {
        q: 'Wie schnell kann der Telefonassistent für mein Lützener Unternehmen starten?',
        a: 'Dank der kurzen Wege zwischen Groitzsch und Lützen können wir besonders schnell loslegen – in der Regel innerhalb weniger Tage nach dem Erstgespräch.',
      },
      {
        q: 'Was passiert bei Notfällen?',
        a: 'Dringende Anrufe erkennt der Assistent an definierten Schlüsselwörtern und leitet sofort an Ihre hinterlegte Mobilnummer weiter.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – ob auf der Baustelle oder im Behandlungszimmer',
      '24/7-Erreichbarkeit für Ihre Kunden in Lützen und Umgebung',
      'Notfall-Weiterleitung an Ihre Mobilnummer',
      'Pixel Kraftwerk nur ~20 km entfernt – schnelle persönliche Betreuung',
    ],
  },

  'luetzen.automatisierungen': {
    regionSlug: 'luetzen',
    regionName: 'Lützen',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Lützen – Pixel Kraftwerk digitalisiert Abläufe in Handwerk, Landwirtschaft und Dienstleistung im Burgenlandkreis.',
    intro:
      'In Lützen werden viele Geschäftsprozesse noch manuell erledigt: Rechnungen einzeln erstellt, Termine per Telefon koordiniert, Kundendaten in Excel-Listen gepflegt. Pixel Kraftwerk automatisiert diese zeitfressenden Abläufe – als Ihr Partner aus der direkten Nachbarschaft, nur 20 km entfernt.',
    paragraphs: [
      'Die Betriebe in Lützen und entlang der B87 sind oft handwerklich oder landwirtschaftlich geprägt. Gerade hier liegen große Automatisierungspotenziale: Auftragsbestätigungen, die automatisch versendet werden; Rechnungen, die nach Auftragsabschluss ohne manuelles Zutun erstellt werden; Erinnerungen an offene Zahlungen.',
      'Für landwirtschaftliche Betriebe im Burgenlandkreis automatisieren wir etwa die Dokumentation von Lieferungen, die Kommunikation mit Abnehmern oder die Bestellverwaltung bei Zulieferern. So sparen Sie nicht nur Zeit, sondern reduzieren auch Fehler.',
      'Dienstleister in Lützen profitieren von automatisierten Kundennachfass-Prozessen: Nach einem Angebot erinnert das System automatisch, nach einem Auftrag wird eine Bewertung angefragt, bei Inaktivität wird ein Reaktivierungsangebot versendet.',
      'Wir arbeiten mit Make, n8n und API-Integrationen, um Ihre bestehenden Systeme zu verbinden – kein Systemwechsel nötig. Die Einrichtung erfolgt persönlich, und bei nur 20 km Entfernung sind wir schnell bei Ihnen.',
    ],
    faqs: [
      {
        q: 'Was lässt sich in einem Lützener Handwerksbetrieb automatisieren?',
        a: 'Typische Einstiegspunkte sind automatische Rechnungsstellung, Auftragsbestätigungen, Terminplanung und die Synchronisation von Kundendaten.',
      },
      {
        q: 'Muss ich meine bestehende Software wechseln?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Werkzeuge miteinander, sodass Daten automatisch fließen – ohne Umstellung.',
      },
      {
        q: 'Wie schnell kann eine Automatisierung starten?',
        a: 'Einfache Automatisierungen sind in wenigen Tagen live. Komplexere Workflows benötigen zwei bis vier Wochen.',
      },
      {
        q: 'Kommen Sie auch für die Einrichtung nach Lützen?',
        a: 'Selbstverständlich – mit nur 20 km Entfernung sind wir praktisch Nachbarn. Persönliche Termine sind jederzeit kurzfristig möglich.',
      },
    ],
    highlights: [
      'Zeitersparnis durch automatische Rechnungen, Bestätigungen und Follow-ups',
      'Verbindung bestehender Systeme ohne Softwarewechsel',
      'Individuelle Workflows für Handwerk, Landwirtschaft und Dienstleistung',
      'Pixel Kraftwerk nur ~20 km entfernt – Ihr Automatisierungspartner vor Ort',
    ],
  },

  'luetzen.webseiten': {
    regionSlug: 'luetzen',
    regionName: 'Lützen',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Lützen – Pixel Kraftwerk erstellt moderne, schnelle Websites für Betriebe im Burgenlandkreis an der B87.',
    intro:
      'Wer in Lützen nach einem Handwerker, einer Praxis oder einem Gasthaus sucht, beginnt meist bei Google. Ohne professionelle Webseite gehen Sie in den Suchergebnissen unter. Pixel Kraftwerk erstellt Webseiten, die überzeugen, schnell laden und Ihre Lützener Kunden dort abholen, wo sie suchen.',
    paragraphs: [
      'Viele Betriebe in Lützen haben keine eigene Webseite oder nutzen veraltete Seiten, die auf dem Smartphone kaum bedienbar sind. Dabei entscheidet die Online-Präsenz heute maßgeblich darüber, ob ein Kunde anruft oder zur Konkurrenz wechselt.',
      'Wir entwickeln Webseiten mit klarem Fokus auf Benutzerfreundlichkeit und Geschwindigkeit. Jede Seite ist mobiloptimiert, lädt in unter zwei Sekunden und ist von Anfang an für lokale Suchmaschinenoptimierung ausgelegt – damit Sie bei „Handwerker Lützen" oder „Arzt Lützen" gefunden werden.',
      'Für historisch und touristisch orientierte Betriebe in Lützen integrieren wir spezielle Module: Veranstaltungskalender, Bildergalerien der Sehenswürdigkeiten, Anfahrtsbeschreibungen und Buchungsformulare für Führungen.',
      'Jede Webseite wird mit strukturierten Daten versehen, sodass Google Ihre Leistungen, Öffnungszeiten und Standort korrekt darstellt. In Kombination mit Google My Business maximieren wir Ihre lokale Sichtbarkeit.',
      'Bei nur 20 km Entfernung zwischen Groitzsch und Lützen sind Abstimmungstermine, Fotoshootings vor Ort und persönliche Übergaben unkompliziert möglich.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite für einen Lützener Betrieb?',
        a: 'Die Kosten richten sich nach Umfang und Funktionen. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen?',
        a: 'Ja. Wir setzen auf benutzerfreundliche Systeme und schulen Sie in der Pflege von Texten, Bildern und Terminen.',
      },
      {
        q: 'Wird die Webseite auch auf dem Smartphone gut aussehen?',
        a: 'Selbstverständlich. Responsive Design ist bei uns Standard – über 70 % der Suchanfragen kommen heute mobil.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Eine typische Unternehmenswebseite steht in drei bis sechs Wochen. Die kurzen Wege zwischen Groitzsch und Lützen beschleunigen den Prozess zusätzlich.',
      },
    ],
    highlights: [
      'Moderne, mobiloptimierte Webseite für Ihren Lützener Betrieb',
      'Suchmaschinenoptimiert für lokale Suchanfragen im Burgenlandkreis',
      'Spezialmodule für Tourismus und historische Betriebe',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Betreuung garantiert',
    ],
  },

  'luetzen.seo-top-3': {
    regionSlug: 'luetzen',
    regionName: 'Lützen',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Lützen – Pixel Kraftwerk bringt Ihren Betrieb im Burgenlandkreis auf die Top-3-Positionen bei Google.',
    intro:
      'In Lützen mit rund 9.000 Einwohnern ist der lokale Wettbewerb in den meisten Branchen überschaubar – eine ideale Ausgangslage für Top-Platzierungen bei Google. Pixel Kraftwerk nutzt diese Chance für Ihren Betrieb und sorgt dafür, dass Sie bei relevanten Suchanfragen ganz oben stehen.',
    paragraphs: [
      'Wenn jemand „Friseur Lützen", „Installateur Lützen" oder „Pension Lützen" googelt, erscheinen oft nur wenige Ergebnisse. Mit gezielter Suchmaschinenoptimierung positionieren wir Ihr Unternehmen zuverlässig in den Top 3 – dort, wo die meisten Klicks stattfinden.',
      'Unsere SEO-Strategie für Lützen umfasst die Recherche relevanter Suchbegriffe, die On-Page-Optimierung Ihrer Webseite, den Aufbau Ihres Google-Unternehmensprofils und die Erstellung hochwertiger lokaler Inhalte. So erreichen wir Kunden aus Lützen, Weißenfels, Leipzig und dem gesamten Burgenlandkreis.',
      'Lokales SEO bedeutet auch: Korrekte Einträge in Online-Verzeichnissen, aktives Bewertungsmanagement und regelmäßige Updates Ihres Google-My-Business-Profils. Wir kümmern uns um all das, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
      'Die Ergebnisse messen wir monatlich: Keyword-Rankings, Sichtbarkeit, Besucherzahlen und Anfragen. Bei nur 20 km Entfernung besprechen wir die Reports gern persönlich bei Ihnen.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Lützener Betrieb bei Google ganz oben steht?',
        a: 'In einer Kleinstadt wie Lützen sind erste Verbesserungen oft schon nach vier bis acht Wochen sichtbar. Top-3-Platzierungen erreichen wir typischerweise innerhalb von drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO bei so wenigen Einwohnern in Lützen?',
        a: 'Gerade weil der Wettbewerb gering ist, sind Top-Platzierungen mit überschaubarem Aufwand erreichbar. Zudem erreichen Sie auch Kunden aus den umliegenden Städten.',
      },
      {
        q: 'Was ist im SEO-Service enthalten?',
        a: 'Keyword-Analyse, On-Page-Optimierung, Google My Business, lokaler Linkaufbau, monatliches Reporting und persönliche Beratung.',
      },
      {
        q: 'Brauche ich eine neue Webseite für SEO?',
        a: 'Nicht zwingend. Wenn Ihre bestehende Seite technisch solide ist, optimieren wir sie gezielt. Falls ein Relaunch sinnvoller ist, sagen wir Ihnen das ehrlich.',
      },
    ],
    highlights: [
      'Top-3-Platzierung bei Google für lokale Suchanfragen in Lützen',
      'Geringer Wettbewerb – realistische Chancen mit überschaubarem Aufwand',
      'Google My Business-Optimierung und lokaler Linkaufbau inklusive',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Betreuung aus der Nachbarschaft',
    ],
  },

  /* ================================================================
   *  COLDITZ
   * ================================================================ */
  'colditz.ki-chatbots': {
    regionSlug: 'colditz',
    regionName: 'Colditz',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Colditz – Pixel Kraftwerk automatisiert Kundenkommunikation für Tourismus, Handwerk und Dienstleister an der Zwickauer Mulde.',
    intro:
      'Colditz, bekannt durch das berühmte Schloss Colditz an der Zwickauer Mulde, verbindet Tourismus mit einer lebendigen lokalen Wirtschaft. Vom Hotel über den Handwerksbetrieb bis zur Praxis – ein KI-Chatbot von Pixel Kraftwerk beantwortet wiederkehrende Kundenfragen automatisch und verschafft Ihrem Team Luft für das Wesentliche.',
    paragraphs: [
      'Die Colditzer Wirtschaft profitiert stark vom Tourismus rund um Schloss Colditz: Hotels, Pensionen, Gaststätten und Führungsanbieter erhalten täglich Anfragen zu Verfügbarkeit, Preisen, Anfahrt und Programm. Ein KI-Chatbot beantwortet all das sofort – auch nachts und am Wochenende, wenn der Ansturm am größten ist.',
      'Auch für Handwerker und Dienstleister in Colditz ist der Chatbot wertvoll: Kunden beschreiben ihr Anliegen im Chat, der Bot qualifiziert vor und übergibt Ihrem Team eine strukturierte Zusammenfassung. So erhalten Sie verwertbare Informationen statt unübersichtlicher E-Mails.',
      'Für touristisch orientierte Betriebe bieten wir mehrsprachige Chatbot-Optionen: Viele Besucher des Colditz Castle kommen aus dem englischsprachigen Raum. Der Chatbot kann Anfragen auf Deutsch und Englisch beantworten und so die internationale Kundschaft bedienen.',
      'Technisch integrieren wir den Chatbot nahtlos in Ihre bestehende Webseite und verbinden ihn auf Wunsch mit Buchungssystemen, Kalender und CRM.',
      'Pixel Kraftwerk in Groitzsch liegt rund 40 Kilometer von Colditz entfernt. Persönliche Beratung vor Ort – ob im Schlossumfeld, in Ihrer Werkstatt oder Ihrer Pension – ist selbstverständlich.',
    ],
    faqs: [
      {
        q: 'Kann der Chatbot auch auf Englisch für Colditzer Tourismusbetriebe arbeiten?',
        a: 'Ja. Wir konfigurieren den Chatbot mehrsprachig, sodass er sowohl deutsche als auch internationale Gäste des Schloss Colditz bedienen kann.',
      },
      {
        q: 'Eignet sich ein KI-Chatbot für Hotels und Pensionen in Colditz?',
        a: 'Absolut. Gerade bei wiederkehrenden Fragen zu Verfügbarkeit, Check-in-Zeiten, Ausstattung und Anfahrt entlastet der Chatbot Ihr Team erheblich.',
      },
      {
        q: 'Wie schnell ist der Chatbot für mein Colditzer Unternehmen bereit?',
        a: 'Innerhalb von zwei bis drei Wochen steht ein erster produktiver Chatbot. Komplexere mehrsprachige Setups können etwas länger dauern.',
      },
      {
        q: 'Kommen Sie auch nach Colditz?',
        a: 'Selbstverständlich. Von Groitzsch erreichen wir Colditz in rund 40 Minuten. Persönliche Termine vor Ort sind jederzeit möglich.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Touristen und lokale Kunden in Colditz',
      'Mehrsprachige Chatbot-Option für internationale Schloss-Besucher',
      'Vorqualifizierung von Anfragen spart täglich wertvolle Zeit',
      'Persönliche Betreuung aus Groitzsch – rund 40 km entfernt',
    ],
  },

  'colditz.telefonassistenten': {
    regionSlug: 'colditz',
    regionName: 'Colditz',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Colditz – Pixel Kraftwerk sichert die Erreichbarkeit von Tourismusbetrieben, Handwerkern und Praxen an der Zwickauer Mulde.',
    intro:
      'In Colditz greifen Kunden und Touristen regelmäßig zum Telefon – ob für die Tischreservierung, den Handwerkertermin oder die Arztpraxis. Doch wenn alle Hände voll zu tun sind, klingelt das Telefon ins Leere. Unser KI-Telefonassistent sorgt dafür, dass kein Anruf verloren geht.',
    paragraphs: [
      'Colditzer Betriebe kennen das Dilemma: In der Hochsaison häufen sich Anrufe von Touristen und Einheimischen, während das Team in Küche, Werkstatt oder Behandlungszimmer gebunden ist. Der Telefonassistent von Pixel Kraftwerk nimmt jeden Anruf professionell entgegen und erfasst alle relevanten Informationen.',
      'Für Hotels und Pensionen rund um Schloss Colditz ist die Erreichbarkeit ein direkter Umsatzfaktor: Wer nicht ans Telefon geht, verliert die Buchung an die Konkurrenz. Unser Assistent beantwortet Verfügbarkeitsanfragen, nimmt Reservierungswünsche auf und leitet dringende Anliegen direkt weiter.',
      'Handwerker an der Zwickauer Mulde profitieren ebenfalls: Der Assistent erfasst Auftragsanfragen mit allen Details, während Sie auf der Baustelle in Leisnig, Grimma oder Rochlitz unterwegs sind.',
      'Den Assistenten passen wir an Ihre spezifischen Abläufe an: Welche Fragen soll er beantworten? Wann wird durchgestellt? Welche Notfälle haben Priorität? Diese Logik definieren wir gemeinsam.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Reservierungen für Colditzer Hotels aufnehmen?',
        a: 'Ja. Der Assistent erfasst Datum, Personenzahl, Sonderwünsche und Kontaktdaten und leitet alles strukturiert an Ihr Buchungssystem oder per E-Mail weiter.',
      },
      {
        q: 'Funktioniert der Assistent auch in der touristischen Hochsaison?',
        a: 'Gerade dann zeigt er seine Stärke: Der Assistent bewältigt beliebig viele parallele Anfragen, ohne dass Anrufer in der Warteschlange hängen.',
      },
      {
        q: 'Wie reagieren Touristen auf einen automatisierten Telefonassistenten?',
        a: 'Sehr positiv, weil sie sofort Hilfe erhalten, statt auf den Anrufbeantworter zu sprechen oder in der Warteschlange zu hängen.',
      },
      {
        q: 'Was kostet der Telefonassistent für einen Betrieb in Colditz?',
        a: 'Die Kosten richten sich nach Umfang und Anforderungen. Ein kostenloses Erstgespräch klärt Ihren Bedarf.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch in der touristischen Hochsaison',
      '24/7-Erreichbarkeit für Gäste, Kunden und Patienten in Colditz',
      'Strukturierte Erfassung von Reservierungen und Anfragen',
      'Persönliche Einrichtung durch Pixel Kraftwerk – rund 40 km aus Groitzsch',
    ],
  },

  'colditz.automatisierungen': {
    regionSlug: 'colditz',
    regionName: 'Colditz',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Colditz – Pixel Kraftwerk digitalisiert Abläufe in Tourismus, Handwerk und Dienstleistung an der Zwickauer Mulde.',
    intro:
      'In Colditz werden viele Geschäftsabläufe noch per Hand erledigt: Buchungsbestätigungen einzeln verschickt, Rechnungen manuell erstellt, Gästedaten in verschiedenen Listen gepflegt. Pixel Kraftwerk automatisiert diese Routineaufgaben – damit sich Ihr Team auf Gäste und Kunden konzentrieren kann.',
    paragraphs: [
      'Tourismusbetriebe in Colditz profitieren besonders von Automatisierungen: Buchungsbestätigungen werden automatisch versendet, Erinnerungen vor der Anreise gehen per E-Mail raus, nach dem Aufenthalt wird eine Bewertungsanfrage verschickt. All das spart Stunden pro Woche und reduziert Fehler.',
      'Für Handwerker in Colditz automatisieren wir die Auftragsabwicklung: Nach dem Auftrag erstellt das System die Rechnung, versendet sie und erinnert bei offenen Zahlungen. Dokumentation und Nachfassaktionen laufen im Hintergrund.',
      'Wir verbinden Ihre bestehenden Werkzeuge miteinander: Buchungssoftware, Buchhaltung, Kalender und E-Mail arbeiten zusammen, ohne dass Sie Systeme wechseln müssen. Die Plattformen Make und n8n ermöglichen flexible Integrationen.',
      'In Kombination mit Chatbot oder Telefonassistent entsteht ein nahtloser Prozess: Anfragen werden erfasst, bestätigt, ins richtige System geleitet und nachverfolgt – automatisch und zuverlässig.',
    ],
    faqs: [
      {
        q: 'Was lässt sich in einem Colditzer Tourismusbetrieb automatisieren?',
        a: 'Typische Ansatzpunkte: Buchungsbestätigungen, Anreise-Erinnerungen, Check-in-Informationen, Bewertungsanfragen, Rechnungserstellung und Belegungsstatistiken.',
      },
      {
        q: 'Muss ich meine bestehende Buchungssoftware wechseln?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme miteinander, statt sie zu ersetzen.',
      },
      {
        q: 'Was kostet eine Automatisierung für meinen Colditzer Betrieb?',
        a: 'Abhängig vom Umfang. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.',
      },
      {
        q: 'Wie lange dauert die Einrichtung?',
        a: 'Einfache Automatisierungen stehen in wenigen Tagen, komplexe Workflows in zwei bis vier Wochen.',
      },
    ],
    highlights: [
      'Zeitersparnis durch automatische Buchungsbestätigungen und Rechnungen',
      'Bestehende Systeme werden verbunden – kein Softwarewechsel nötig',
      'Individuelle Workflows für Tourismus, Handwerk und Dienstleistung',
      'Persönliche Betreuung aus Groitzsch – rund 40 km entfernt',
    ],
  },

  'colditz.webseiten': {
    regionSlug: 'colditz',
    regionName: 'Colditz',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Colditz – Pixel Kraftwerk erstellt moderne Websites für Tourismus, Handwerk und Gewerbe an der Zwickauer Mulde.',
    intro:
      'Colditz lebt vom Tourismus rund um das berühmte Schloss und die Zwickauer Mulde. Eine professionelle Webseite ist hier nicht nur Visitenkarte, sondern aktiver Vertriebskanal: Sie entscheidet, ob Besucher buchen oder zur Konkurrenz weiterklicken. Pixel Kraftwerk erstellt Webseiten, die überzeugen und konvertieren.',
    paragraphs: [
      'Viele Colditzer Betriebe – Pensionen, Gaststätten, Handwerker – haben keine moderne Webseite oder nutzen veraltete Auftritte, die auf dem Smartphone schlecht funktionieren. Gerade im Tourismus ist das fatal: Gäste recherchieren mobil und buchen dort, wo die Online-Präsenz überzeugt.',
      'Wir entwickeln schnelle, mobiloptimierte Webseiten mit besonderem Augenmerk auf die Bedürfnisse des Colditzer Marktes: Bildergalerien des Schlosses und der Mulde-Landschaft, Buchungsmodule für Unterkünfte und Führungen, Veranstaltungskalender und mehrsprachige Inhalte für internationale Besucher.',
      'Jede Seite wird von Anfang an suchmaschinenoptimiert: Lokale Keywords, strukturierte Daten und optimierte Ladezeiten sorgen dafür, dass Ihr Betrieb bei „Hotel Colditz", „Pension Zwickauer Mulde" oder „Handwerker Colditz" gefunden wird.',
      'Für Handwerker und Dienstleister integrieren wir Angebotsanfrage-Formulare, Referenzgalerien und Kontaktmodule, die Anfragen direkt in Ihr E-Mail-Postfach oder CRM leiten.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite für ein Colditzer Tourismusunternehmen?',
        a: 'Die Kosten richten sich nach Umfang und Funktionen wie Buchungsmodul oder Mehrsprachigkeit. Ein kostenloses Erstgespräch klärt Ihren Bedarf.',
      },
      {
        q: 'Kann die Webseite auch auf Englisch erstellt werden?',
        a: 'Ja. Gerade für Tourismusbetriebe rund um Schloss Colditz empfehlen wir eine zweisprachige Webseite, um internationale Gäste zu erreichen.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Eine typische Unternehmenswebseite steht in drei bis sechs Wochen. Mit Buchungsmodulen oder Mehrsprachigkeit kann es etwas länger dauern.',
      },
      {
        q: 'Kann ich die Webseite selbst aktualisieren?',
        a: 'Ja. Wir bauen auf benutzerfreundliche Systeme und schulen Sie in der Pflege von Texten, Bildern und Veranstaltungen.',
      },
    ],
    highlights: [
      'Moderne, mobiloptimierte Webseite für Ihren Colditzer Betrieb',
      'Spezialmodule für Tourismus: Buchung, Galerie, Veranstaltungen',
      'Mehrsprachige Optionen für internationale Schloss-Besucher',
      'Persönliche Beratung und Umsetzung aus Groitzsch',
    ],
  },

  'colditz.seo-top-3': {
    regionSlug: 'colditz',
    regionName: 'Colditz',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Colditz – Pixel Kraftwerk bringt Tourismusbetriebe, Handwerker und Dienstleister an die Spitze der Google-Suchergebnisse.',
    intro:
      'Colditz hat durch das berühmte Schloss internationale Bekanntheit – aber bei lokalen Suchanfragen entscheidet die Google-Position über den Erfolg. Pixel Kraftwerk bringt Ihren Betrieb bei „Hotel Colditz", „Restaurant Zwickauer Mulde" oder „Handwerker Colditz" in die Top 3.',
    paragraphs: [
      'Colditz ist eine Kleinstadt mit rund 9.000 Einwohnern, aber einem überproportionalen Tourismusaufkommen. Das bedeutet: Die Suchvolumina für touristische Keywords sind höher, als man bei der Einwohnerzahl vermuten würde. Genau das macht SEO hier besonders lohnend.',
      'Unsere SEO-Strategie für Colditz umfasst zwei Dimensionen: erstens die Optimierung für touristische Suchanfragen (Schloss Colditz, Unterkunft, Führungen) und zweitens die Positionierung für lokale Alltagsbegriffe (Handwerker, Arzt, Dienstleister). Beide Bereiche erfordern unterschiedliche Keywords, aber dieselbe technische Exzellenz.',
      'Wir optimieren Ihre Webseite technisch, erstellen lokale Inhalte mit Bezug zu Colditz und der Mulde-Region, bauen Ihr Google-Unternehmensprofil aus und sorgen für konsistente Einträge in relevanten Verzeichnissen.',
      'Das Ergebnis messen wir monatlich: Keyword-Rankings, Sichtbarkeit, Besucherzahlen und Buchungsanfragen. Sie sehen schwarz auf weiß, wie sich Ihre Investition auszahlt.',
    ],
    faqs: [
      {
        q: 'Kann SEO auch internationale Touristen nach Colditz bringen?',
        a: 'Ja. Mit englischsprachigen Inhalten und internationaler SEO-Strategie erreichen wir auch Besucher aus Großbritannien, den USA und den Niederlanden, die nach Colditz Castle suchen.',
      },
      {
        q: 'Wie lange dauert es bis zur Top-3-Platzierung in Colditz?',
        a: 'Für lokale Suchanfragen sind erste Verbesserungen oft nach vier bis acht Wochen sichtbar. Stabile Top-Platzierungen erreichen wir in drei bis sechs Monaten.',
      },
      {
        q: 'Was unterscheidet Ihre SEO-Strategie von anderen Anbietern?',
        a: 'Wir kombinieren technische Optimierung mit echtem Lokalwissen. Als Partner aus der Region kennen wir die Zielgruppen und Suchgewohnheiten im Raum Colditz.',
      },
      {
        q: 'Brauche ich eine neue Webseite für gutes SEO?',
        a: 'Nicht unbedingt. Wenn Ihre bestehende Seite technisch solide ist, optimieren wir sie gezielt. Falls ein Relaunch sinnvoller wäre, beraten wir Sie ehrlich.',
      },
    ],
    highlights: [
      'Top-3-Platzierung bei Google für touristische und lokale Suchanfragen',
      'Zweisprachige SEO-Strategie für deutschen und internationalen Markt',
      'Google My Business-Optimierung und lokaler Linkaufbau',
      'Monatliche Erfolgsberichte und persönliche Betreuung',
    ],
  },

  /* ================================================================
   *  BAD LAUSICK
   * ================================================================ */
  'bad-lausick.ki-chatbots': {
    regionSlug: 'bad-lausick',
    regionName: 'Bad Lausick',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Bad Lausick – Pixel Kraftwerk automatisiert Kundenkommunikation für Gesundheit, Kur und Dienstleister in der Kurstadt im Landkreis Leipzig.',
    intro:
      'Bad Lausick, die Kurstadt mit MEDIAN Klinik im Landkreis Leipzig, ist geprägt von Gesundheitswirtschaft und einem lebhaften Dienstleistungssektor. Mit nur rund 20 Kilometern Entfernung zu Groitzsch ist Pixel Kraftwerk Ihr direkter Nachbar – und liefert KI-Chatbots, die Patientenanfragen, Terminwünsche und Kundenfragen rund um die Uhr beantworten.',
    paragraphs: [
      'In Bad Lausick dreht sich vieles um Gesundheit und Kur: Praxen, Physiotherapeuten, Rehabilitationseinrichtungen und Wellnessanbieter erhalten täglich wiederkehrende Fragen zu Behandlungen, Terminen, Kostenübernahme und Anfahrt. Ein KI-Chatbot beantwortet diese Routinefragen automatisch und entlastet Ihr Empfangspersonal.',
      'Für Praxen und Therapieeinrichtungen ist der Chatbot besonders wertvoll: Patienten fragen nach freien Terminen, benötigten Unterlagen oder Behandlungsabläufen. Der Chatbot liefert sofort Antworten, stellt Rückfragen zur Versicherung und leitet dringende Anliegen direkt weiter.',
      'Auch Handwerker, Einzelhändler und Gastronomen in Bad Lausick profitieren: Der Chatbot beantwortet Fragen zu Leistungen und Verfügbarkeit, nimmt Anfragen auf und qualifiziert sie vor – rund um die Uhr.',
      'Die Integration erfolgt in Ihre bestehende Webseite. Auf Wunsch verbinden wir den Chatbot mit Praxisverwaltungssystemen, Buchungstools oder CRM.',
      'Mit nur 20 km Entfernung zwischen Groitzsch und Bad Lausick sind wir praktisch Nachbarn. Persönliche Termine bei Ihnen in der Kurstadt sind jederzeit kurzfristig möglich.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für Praxen und Therapieeinrichtungen in Bad Lausick?',
        a: 'Besonders gut sogar. Gerade im Gesundheitsbereich entlastet der Chatbot das Empfangsteam von wiederkehrenden Fragen zu Terminen, Unterlagen und Behandlungsabläufen.',
      },
      {
        q: 'Wie nah ist Pixel Kraftwerk an Bad Lausick?',
        a: 'Nur rund 20 km – wir sind in weniger als 20 Minuten bei Ihnen. Persönliche Beratung und schnelle Reaktionszeiten sind garantiert.',
      },
      {
        q: 'Kann der Chatbot auch Kurgäste und Rehabilitationspatienten bedienen?',
        a: 'Ja. Der Chatbot beantwortet Fragen zu Kur-Programmen, Unterkunft, Anreise und organisatorischen Abläufen – auch außerhalb der Geschäftszeiten.',
      },
      {
        q: 'Wie schnell ist ein Chatbot einsatzbereit?',
        a: 'In der Regel innerhalb von zwei bis drei Wochen. Dank der kurzen Wege können wir besonders schnell und unkompliziert zusammenarbeiten.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Patienten und Kurgäste in Bad Lausick',
      'Entlastung von Empfangspersonal in Praxen und Therapieeinrichtungen',
      'Integration in Praxissoftware und Buchungssysteme',
      'Pixel Kraftwerk nur ~20 km entfernt – Ihr direkter Nachbar',
    ],
  },

  'bad-lausick.telefonassistenten': {
    regionSlug: 'bad-lausick',
    regionName: 'Bad Lausick',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Bad Lausick – Pixel Kraftwerk sichert die Erreichbarkeit von Praxen, Therapieeinrichtungen und Betrieben in der Kurstadt.',
    intro:
      'In Bad Lausick ist das Telefon gerade im Gesundheitsbereich der wichtigste Kontaktkanal: Patienten rufen an, um Termine zu vereinbaren, Kurgäste fragen nach Abläufen, Handwerker erhalten Aufträge per Telefon. Doch wenn alle im Einsatz sind, klingelt es oft vergeblich. Unser KI-Telefonassistent löst dieses Problem – aus nur 20 km Entfernung.',
    paragraphs: [
      'Praxen in Bad Lausick erleben täglich hohes Telefonaufkommen: Terminwünsche, Rezeptanfragen, Fragen zu Behandlungen und Versicherungen. Unser Telefonassistent nimmt jeden Anruf professionell entgegen, klärt das Anliegen und erfasst alle relevanten Daten strukturiert – damit Ihr Praxisteam die Informationen geordnet abarbeiten kann.',
      'Für Rehabilitations- und Kureinrichtungen ist die Erreichbarkeit existenziell: Verpasste Anrufe bedeuten verlorene Patienten. Der Assistent beantwortet organisatorische Fragen, nimmt Anmeldungen auf und leitet dringende medizinische Anliegen sofort weiter.',
      'Auch Handwerker und Dienstleister in Bad Lausick profitieren: Auftragsanfragen werden erfasst, während Sie beim Kunden in Borna, Grimma oder Groitzsch unterwegs sind.',
      'Die Konfiguration erfolgt persönlich: Welche Fragen beantwortet der Assistent? Wann wird durchgestellt? Bei nur 20 km Entfernung sind Abstimmungstermine besonders unkompliziert.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent medizinische Erstfragen für Bad Lausicker Praxen übernehmen?',
        a: 'Der Assistent kann Symptome, Versicherungsstatus und Terminwünsche strukturiert erfassen. Medizinische Beratung bleibt dem Fachpersonal vorbehalten.',
      },
      {
        q: 'Arbeitet der Assistent auch außerhalb der Sprechzeiten?',
        a: 'Ja. Gerade für Kur- und Rehabilitationseinrichtungen ist die 24/7-Erreichbarkeit ein großer Vorteil – Patienten können jederzeit anrufen.',
      },
      {
        q: 'Wie schnell kann der Telefonassistent starten?',
        a: 'Dank der kurzen Wege zwischen Groitzsch und Bad Lausick in der Regel innerhalb weniger Tage nach dem Erstgespräch.',
      },
      {
        q: 'Was passiert bei medizinischen Notfällen?',
        a: 'Notfälle erkennt der Assistent anhand definierter Schlüsselwörter und leitet sofort an die hinterlegte Nummer oder den Notdienst weiter.',
      },
    ],
    highlights: [
      'Zuverlässige Anrufannahme für Praxen und Kureinrichtungen in Bad Lausick',
      '24/7-Erreichbarkeit – auch außerhalb der Sprechzeiten',
      'Notfall-Weiterleitung für medizinische Dringlichkeiten',
      'Pixel Kraftwerk nur ~20 km entfernt – schnelle persönliche Betreuung',
    ],
  },

  'bad-lausick.automatisierungen': {
    regionSlug: 'bad-lausick',
    regionName: 'Bad Lausick',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Bad Lausick – Pixel Kraftwerk digitalisiert Abläufe in Gesundheit, Kur und Dienstleistung in der Kurstadt.',
    intro:
      'In Bad Lausick arbeiten viele Praxen und Betriebe noch mit manuellen Abläufen: Terminerinnerungen per Hand, Patientendaten in verschiedenen Systemen, Rechnungen einzeln erstellt. Pixel Kraftwerk automatisiert diese Prozesse – als Ihr direkter Partner aus nur 20 km Entfernung.',
    paragraphs: [
      'Im Gesundheitsbereich von Bad Lausick steckt enormes Automatisierungspotenzial: Terminerinnerungen per SMS oder E-Mail, automatische Bestätigung von Kur-Anmeldungen, strukturierte Weitergabe von Patientendaten zwischen Systemen und automatisierte Rechnungsstellung nach Behandlungsabschluss.',
      'Für Handwerker in Bad Lausick automatisieren wir die Auftragsabwicklung: Von der automatischen Auftragsbestätigung über die Rechnungsstellung bis zum Follow-up – alles läuft im Hintergrund, während Sie beim Kunden arbeiten.',
      'Wir verbinden Ihre vorhandenen Systeme – ob Praxisverwaltung, Buchhaltungssoftware, Kalender oder E-Mail – miteinander. Daten fließen automatisch dorthin, wo sie gebraucht werden, ohne doppelte Eingabe und ohne Medienbrüche.',
      'Die kurze Distanz von nur 20 km zwischen Groitzsch und Bad Lausick ermöglicht intensive, persönliche Zusammenarbeit: Prozessanalyse vor Ort, gemeinsame Workshops und schnelle Anpassungen.',
    ],
    faqs: [
      {
        q: 'Was lässt sich in einer Bad Lausicker Praxis automatisieren?',
        a: 'Typische Einstiegspunkte: Terminerinnerungen, Anmeldebestätigungen, Befundweiterleitung, Rechnungserstellung und Patientennachfass-Kommunikation.',
      },
      {
        q: 'Muss ich meine Praxissoftware wechseln?',
        a: 'Nein. Wir integrieren Automatisierungen in Ihre bestehende Software – kein Umlernen, kein Datenverlust.',
      },
      {
        q: 'Wie schnell amortisiert sich eine Automatisierung?',
        a: 'Die meisten Betriebe berichten von spürbarer Zeitersparnis ab der ersten Woche. Die Kosten amortisieren sich typischerweise innerhalb weniger Monate.',
      },
      {
        q: 'Wie lange dauert die Einrichtung?',
        a: 'Einfache Automatisierungen stehen in wenigen Tagen, komplexere Workflows in zwei bis vier Wochen.',
      },
    ],
    highlights: [
      'Zeitersparnis durch automatische Termine, Erinnerungen und Rechnungen',
      'Integration in Praxisverwaltung und bestehende Systeme',
      'Individuelle Workflows für Gesundheit, Kur und Handwerk',
      'Pixel Kraftwerk nur ~20 km entfernt – Ihr direkter Automatisierungspartner',
    ],
  },

  'bad-lausick.webseiten': {
    regionSlug: 'bad-lausick',
    regionName: 'Bad Lausick',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Bad Lausick – Pixel Kraftwerk erstellt moderne Websites für Praxen, Kureinrichtungen und Betriebe in der Kurstadt.',
    intro:
      'Patienten, Kurgäste und Kunden suchen heute online nach Praxen, Therapieeinrichtungen und Dienstleistern in Bad Lausick. Eine professionelle, schnelle Webseite ist damit unverzichtbar. Pixel Kraftwerk erstellt Webseiten, die Vertrauen aufbauen, Patienten informieren und neue Kunden gewinnen.',
    paragraphs: [
      'Gerade im Gesundheitsbereich ist die Webseite oft der erste Kontaktpunkt: Patienten informieren sich über Behandlungsangebote, Therapeuten und Kur-Programme, bevor sie anrufen. Eine veraltete oder fehlende Webseite kostet hier direkt Patienten und Kurgäste.',
      'Wir entwickeln Webseiten mit besonderem Fokus auf die Bedürfnisse des Gesundheitssektors in Bad Lausick: Übersichtliche Darstellung von Leistungen und Behandlungsmethoden, Online-Terminbuchung, Teamvorstellung, Anfahrtskarte und Barrierefreiheit.',
      'Für Handwerker und Dienstleister in Bad Lausick integrieren wir Angebotsanfrage-Formulare, Referenzgalerien und Kontaktmodule. Jede Seite ist mobiloptimiert und lädt schnell – entscheidend für gute Google-Platzierungen.',
      'Die Suchmaschinenoptimierung ist von Anfang an integriert: Lokale Keywords wie „Physiotherapie Bad Lausick", „Arzt Kurstadt" oder „Handwerker Bad Lausick" werden strategisch eingebaut.',
      'Bei nur 20 km Entfernung sind Abstimmungstermine, Fotoshootings und persönliche Übergaben besonders unkompliziert.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite für eine Praxis in Bad Lausick?',
        a: 'Die Kosten richten sich nach Umfang und Funktionen wie Online-Terminbuchung oder Mehrsprachigkeit. Ein kostenloses Erstgespräch klärt Ihren Bedarf.',
      },
      {
        q: 'Kann die Webseite eine Online-Terminbuchung enthalten?',
        a: 'Ja. Wir integrieren Buchungsmodule, die Patienten direkt auf der Webseite Termine buchen lassen – eine enorme Entlastung für Ihr Empfangsteam.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Eine Praxis-Webseite steht in der Regel in drei bis fünf Wochen. Die kurzen Wege beschleunigen den Prozess.',
      },
      {
        q: 'Wird die Webseite barrierefrei?',
        a: 'Wir achten auf Barrierefreiheit nach aktuellen Standards – besonders wichtig im Gesundheitsbereich, wo auch ältere oder eingeschränkte Patienten die Webseite nutzen.',
      },
    ],
    highlights: [
      'Moderne Webseite speziell für Gesundheit und Kur in Bad Lausick',
      'Online-Terminbuchung und Barrierefreiheit als Standard',
      'Suchmaschinenoptimiert für lokale Gesundheits-Keywords',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Betreuung garantiert',
    ],
  },

  'bad-lausick.seo-top-3': {
    regionSlug: 'bad-lausick',
    regionName: 'Bad Lausick',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Bad Lausick – Pixel Kraftwerk bringt Praxen, Kureinrichtungen und Betriebe in der Kurstadt auf die Top-3-Positionen bei Google.',
    intro:
      'Wenn Patienten „Physiotherapie Bad Lausick", „Kureinrichtung Bad Lausick" oder „Zahnarzt Bad Lausick" googeln, entscheidet die Google-Position über den Zuschlag. Pixel Kraftwerk sorgt dafür, dass Ihr Betrieb in der Kurstadt ganz oben steht – mit nur 20 km Entfernung sind wir Ihr SEO-Partner vor Ort.',
    paragraphs: [
      'Bad Lausick hat als Kurstadt ein besonderes SEO-Potenzial: Neben lokalen Suchanfragen gibt es überregionale Suchvolumina für Kur- und Gesundheitsthemen. Wer bei „Reha Bad Lausick" oder „Kur Sachsen" gefunden wird, gewinnt Patienten aus ganz Deutschland.',
      'Unsere SEO-Strategie für Bad Lausick ist zweigleisig: Wir optimieren für lokale Suchanfragen (Praxis, Handwerker, Dienstleister) und für überregionale Gesundheits-Keywords, die Kurgäste und Rehabilitationspatienten anziehen.',
      'Das umfasst die technische Optimierung Ihrer Webseite, hochwertigen Content mit Bezug zur Kurstadt, den Aufbau Ihres Google-Unternehmensprofils und konsistente Einträge in Gesundheitsverzeichnissen wie Jameda, DocInsider und Gelbe Seiten.',
      'Die Ergebnisse messen wir monatlich und besprechen sie gern persönlich bei Ihnen – bei nur 20 km Entfernung ist das ein kurzer Weg.',
    ],
    faqs: [
      {
        q: 'Kann SEO auch überregionale Patienten nach Bad Lausick bringen?',
        a: 'Ja. Mit gezielter Optimierung für Kur- und Reha-Keywords erreichen wir Patienten, die deutschlandweit nach Kureinrichtungen suchen.',
      },
      {
        q: 'Wie lange dauert es bis zur Top-3-Platzierung?',
        a: 'Für lokale Keywords sind erste Verbesserungen oft nach vier bis acht Wochen sichtbar. Stabile Top-Platzierungen erreichen wir in drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO für eine kleine Praxis in Bad Lausick?',
        a: 'Absolut. Der lokale Wettbewerb ist überschaubar, und durch den Kurort-Status gibt es zusätzliches Suchvolumen, das sich gezielt nutzen lässt.',
      },
      {
        q: 'Was kostet SEO für meinen Bad Lausicker Betrieb?',
        a: 'Die Kosten hängen vom Umfang ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.',
      },
      {
        q: 'Optimieren Sie auch Einträge in Gesundheitsverzeichnissen?',
        a: 'Ja. Konsistente und vollständige Einträge in Jameda, DocInsider und anderen Verzeichnissen gehören zu unserer lokalen SEO-Strategie.',
      },
    ],
    highlights: [
      'Top-3-Platzierung bei Google für lokale und überregionale Gesundheits-Keywords',
      'Zweigleisige Strategie: lokal und Kur-/Reha-überregional',
      'Optimierung in Gesundheitsverzeichnissen inklusive',
      'Pixel Kraftwerk nur ~20 km entfernt – Ihr SEO-Partner in der Nachbarschaft',
    ],
  },

  /* ================================================================
   *  GEITHAIN
   * ================================================================ */
  'geithain.ki-chatbots': {
    regionSlug: 'geithain',
    regionName: 'Geithain',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Geithain – Pixel Kraftwerk automatisiert Kundenkommunikation für Handwerk, Handel und Dienstleister in der historischen Altstadt im Landkreis Leipzig.',
    intro:
      'Geithain, die Stadt mit gut erhaltener mittelalterlicher Altstadt im Landkreis Leipzig, verbindet Tradition mit einem aktiven Mittelstand. Mit nur rund 20 Kilometern Entfernung zu Groitzsch ist Pixel Kraftwerk Ihr Partner in der direkten Nachbarschaft – und liefert KI-Chatbots, die Kundenfragen automatisch und rund um die Uhr beantworten.',
    paragraphs: [
      'Die Geithainer Wirtschaft lebt von Handwerksbetrieben, Einzelhändlern in der historischen Altstadt und Dienstleistern: Jeden Tag gehen Fragen zu Leistungen, Preisen, Öffnungszeiten und Terminen ein. Ein KI-Chatbot auf Ihrer Webseite fängt diese Routineanfragen auf und verschafft Ihrem Team Luft für das Wesentliche.',
      'Für den Einzelhandel in der Geithainer Altstadt ist der Chatbot besonders nützlich: Kunden fragen nach Produktverfügbarkeit, Öffnungszeiten und Sonderaktionen – der Chatbot antwortet sofort, auch wenn das Geschäft gerade geschlossen ist oder alle Mitarbeiter im Verkaufsgespräch sind.',
      'Handwerker profitieren von der automatischen Vorqualifizierung: Kunden beschreiben ihr Anliegen, der Chatbot stellt Rückfragen und übergibt eine strukturierte Zusammenfassung. So erhalten Sie statt unklarer E-Mails sofort verwertbare Informationen.',
      'Technisch integrieren wir den Chatbot in Ihre bestehende Webseite und verbinden ihn auf Wunsch mit Kalender, CRM oder Buchungssystem.',
      'Von Groitzsch nach Geithain sind es nur 20 Kilometer – persönliche Termine in Ihrer Werkstatt, Ihrem Laden oder Ihrer Praxis in der Altstadt sind für uns selbstverständlich.',
    ],
    faqs: [
      {
        q: 'Wie nah ist Pixel Kraftwerk an Geithain?',
        a: 'Nur rund 20 km – wir sind in weniger als 20 Minuten bei Ihnen. Das ermöglicht schnelle, persönliche Betreuung.',
      },
      {
        q: 'Lohnt sich ein KI-Chatbot für kleine Altstadtgeschäfte in Geithain?',
        a: 'Gerade für kleine Betriebe mit begrenztem Personal ist der Chatbot besonders wertvoll – er beantwortet Kundenanfragen automatisch, auch wenn Sie gerade nicht erreichbar sind.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Geithainer Unternehmen bereit?',
        a: 'Innerhalb von zwei bis drei Wochen. Dank der kurzen Wege können wir schnell und unkompliziert zusammenarbeiten.',
      },
      {
        q: 'Kann der Chatbot auch Terminvereinbarungen übernehmen?',
        a: 'Ja. Der Chatbot kann Terminwünsche erfassen, freie Slots prüfen und Bestätigungen versenden – ideal für Praxen und Dienstleister.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden in Geithain und der Altstadt',
      'Vorqualifizierung von Anfragen spart Ihrem Team täglich Zeit',
      'Integration in Kalender, CRM und bestehende Systeme',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Betreuung aus der Nachbarschaft',
    ],
  },

  'geithain.telefonassistenten': {
    regionSlug: 'geithain',
    regionName: 'Geithain',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Geithain – Pixel Kraftwerk sichert die Erreichbarkeit von Handwerkern, Praxen und Einzelhändlern in der historischen Altstadt.',
    intro:
      'In Geithain ist das Telefon für viele Kunden der bevorzugte Kontaktweg – ob beim Handwerker, in der Praxis oder im Fachgeschäft in der Altstadt. Doch wenn alle Hände voll zu tun sind, klingelt es oft vergeblich. Unser KI-Telefonassistent nimmt jeden Anruf entgegen – und das aus nur 20 km Entfernung.',
    paragraphs: [
      'Geithains Betriebe arbeiten oft mit kleinen Teams: Wenn der Handwerker auf der Baustelle in Borna oder Rochlitz ist, bleiben Anrufe unbeantwortet. Der Telefonassistent von Pixel Kraftwerk springt genau dann ein – er begrüßt Anrufende, klärt das Anliegen und erfasst alle Informationen strukturiert.',
      'Für Arztpraxen in Geithain ist die Entlastung unmittelbar: Terminwünsche, Rezeptanfragen und organisatorische Fragen werden sortiert erfasst. Das Praxisteam erhält eine klare Übersicht statt hektischer Zettelwirtschaft.',
      'Einzelhändler in der Altstadt profitieren ebenfalls: Anfragen zu Produktverfügbarkeit und Öffnungszeiten werden automatisch beantwortet, auch wenn gerade Kundschaft im Laden ist.',
      'Die Konfiguration stimmen wir persönlich mit Ihnen ab. Bei nur 20 km Entfernung ist das besonders unkompliziert – kurzfristige Termine sind jederzeit möglich.',
    ],
    faqs: [
      {
        q: 'Erkennen Anrufer in Geithain, dass sie mit einer KI sprechen?',
        a: 'Der Assistent klingt natürlich und professionell. Die Reaktionen sind positiv, weil Anrufer sofort Hilfe erhalten statt auf den Anrufbeantworter zu sprechen.',
      },
      {
        q: 'Kann der Telefonassistent auch am Wochenende arbeiten?',
        a: 'Ja. Der Assistent ist 24/7 im Einsatz – auch abends, am Wochenende und an Feiertagen.',
      },
      {
        q: 'Wie wird der Assistent an meine Geithainer Festnetznummer angebunden?',
        a: 'Über eine Rufumleitung bei Nichtannahme. Ihre bestehende Nummer bleibt erhalten.',
      },
      {
        q: 'Was passiert bei dringenden Anrufen?',
        a: 'Dringende Anrufe erkennt der Assistent anhand definierter Schlüsselwörter und leitet sofort an Ihre Mobilnummer weiter.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch bei Außenterminen oder Stoßzeiten',
      '24/7-Erreichbarkeit für Kunden in Geithain und Umgebung',
      'Notfall-Weiterleitung an Ihre Mobilnummer',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Einrichtung garantiert',
    ],
  },

  'geithain.automatisierungen': {
    regionSlug: 'geithain',
    regionName: 'Geithain',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Geithain – Pixel Kraftwerk digitalisiert Abläufe in Handwerk, Handel und Dienstleistung in der historischen Altstadt.',
    intro:
      'Viele Geithainer Betriebe arbeiten noch mit zeitaufwendigen manuellen Prozessen: Rechnungen einzeln erstellt, Termine telefonisch koordiniert, Kundendaten in verschiedenen Listen gepflegt. Pixel Kraftwerk automatisiert diese Abläufe – als Ihr direkter Nachbar aus nur 20 km Entfernung.',
    paragraphs: [
      'Typische Automatisierungspotenziale in Geithainer Betrieben: Auftragsbestätigungen, die nach Eingang automatisch versendet werden; Rechnungen nach Abschluss von selbst erstellt und verschickt; Erinnerungen an offene Zahlungen; Kundendaten, die nur einmal erfasst und überall verfügbar sind.',
      'Für Handwerker bedeutet das konkret: Nach der Arbeit beim Kunden generiert das System die Rechnung, dokumentiert den Auftrag und informiert den Kunden – ohne manuelles Übertragen oder Nachfassen.',
      'Einzelhändler in der Geithainer Altstadt nutzen Automatisierungen für Bestellerinnerungen bei niedrigem Lagerbestand, automatische Kundenbewertungsanfragen nach dem Kauf und die Synchronisation von Online- und Offline-Beständen.',
      'Wir setzen auf Make, n8n und API-Integrationen und verbinden Ihre bestehenden Werkzeuge miteinander. Die Einrichtung erfolgt persönlich – bei 20 km Entfernung sind wir schnell bei Ihnen.',
    ],
    faqs: [
      {
        q: 'Was lässt sich in einem Geithainer Handwerksbetrieb automatisieren?',
        a: 'Automatische Rechnungsstellung, Auftragsbestätigungen, Terminplanung, Kundennachfass-Mails und die Synchronisation von Kontaktdaten sind typische Einstiegspunkte.',
      },
      {
        q: 'Muss ich meine bestehende Software wechseln?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme miteinander – kein Umlernen nötig.',
      },
      {
        q: 'Wie schnell kann eine Automatisierung starten?',
        a: 'Einfache Automationen stehen in wenigen Tagen, komplexere in zwei bis vier Wochen.',
      },
      {
        q: 'Was kostet das?',
        a: 'Abhängig vom Umfang. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Zeitersparnis durch automatische Rechnungen, Bestätigungen und Follow-ups',
      'Verbindung bestehender Systeme ohne Softwarewechsel',
      'Individuelle Workflows für Handwerk, Handel und Dienstleistung',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Betreuung garantiert',
    ],
  },

  'geithain.webseiten': {
    regionSlug: 'geithain',
    regionName: 'Geithain',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Geithain – Pixel Kraftwerk erstellt moderne, schnelle Websites für Betriebe in der historischen Altstadt im Landkreis Leipzig.',
    intro:
      'Wer in Geithain nach einem Handwerker, einer Praxis oder einem Laden in der Altstadt sucht, beginnt bei Google. Ohne professionelle Webseite ist Ihr Betrieb für diese Kunden unsichtbar. Pixel Kraftwerk erstellt Webseiten, die gefunden werden, überzeugen und Anfragen generieren.',
    paragraphs: [
      'Viele Betriebe in Geithain haben keine eigene Webseite oder nutzen veraltete Seiten aus der Baukastenzeit. Das kostet Kunden: Wer „Elektriker Geithain" oder „Friseur Geithain" googelt und nichts Überzeugendes findet, entscheidet sich für die Konkurrenz.',
      'Wir entwickeln Webseiten, die schnell laden, auf dem Smartphone perfekt funktionieren und von Anfang an suchmaschinenoptimiert sind. Kontaktformulare, Öffnungszeiten und Anfahrtskarten sind prominent platziert.',
      'Für Betriebe in der historischen Altstadt integrieren wir auf Wunsch besondere Module: Fotogalerien der Altstadtkulisse, Veranstaltungshinweise, Referenzprojekte und Angebotsanfrage-Formulare.',
      'Jede Webseite wird mit strukturierten Daten versehen, damit Google Ihren Betrieb, Ihre Leistungen und Ihren Standort korrekt erfasst. In Kombination mit Google My Business maximieren wir Ihre lokale Sichtbarkeit.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite für ein Geithainer Unternehmen?',
        a: 'Die Kosten richten sich nach Umfang und Funktionen. Ein kostenloses Erstgespräch klärt Ihren Bedarf.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen?',
        a: 'Ja. Wir setzen auf benutzerfreundliche Systeme und schulen Sie in der Pflege.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Drei bis sechs Wochen – bei den kurzen Wegen zwischen Groitzsch und Geithain geht es besonders schnell.',
      },
      {
        q: 'Wird die Seite mobiloptimiert?',
        a: 'Selbstverständlich. Mobile Optimierung ist bei uns Standard.',
      },
    ],
    highlights: [
      'Moderne, mobiloptimierte Webseite für Ihren Geithainer Betrieb',
      'Suchmaschinenoptimiert für lokale Keywords im Landkreis Leipzig',
      'Schnelle Ladezeiten und benutzerfreundliches Design',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Beratung inklusive',
    ],
  },

  'geithain.seo-top-3': {
    regionSlug: 'geithain',
    regionName: 'Geithain',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Geithain – Pixel Kraftwerk bringt Ihren Betrieb in der historischen Altstadt auf die Top-3-Positionen bei Google.',
    intro:
      'In Geithain mit rund 7.000 Einwohnern ist der Wettbewerb in den meisten Branchen gering – eine hervorragende Ausgangslage für Top-Platzierungen bei Google. Pixel Kraftwerk nutzt dieses Potenzial für Ihren Betrieb und sorgt dafür, dass Sie bei lokalen Suchanfragen ganz oben erscheinen.',
    paragraphs: [
      'Wer „Dachdecker Geithain", „Friseur Geithain" oder „Arzt Geithain" googelt, findet oft nur wenige Ergebnisse. Mit gezielter Suchmaschinenoptimierung positionieren wir Ihr Unternehmen zuverlässig in den Top 3 – dort, wo die Klicks stattfinden.',
      'Unsere SEO-Strategie für Geithain umfasst die Recherche relevanter lokaler Keywords, die On-Page-Optimierung Ihrer Webseite, den Aufbau Ihres Google-Unternehmensprofils und die Erstellung hochwertiger Inhalte mit lokalem Bezug zur Altstadt und zum Landkreis Leipzig.',
      'Wir kümmern uns auch um Ihren Eintrag in wichtigen Online-Verzeichnissen und um aktives Bewertungsmanagement. Positive Google-Bewertungen sind ein starkes Ranking-Signal – wir zeigen Ihnen, wie Sie mehr davon erhalten.',
      'Die Ergebnisse messen wir monatlich: Keyword-Rankings, Sichtbarkeit, Besucherzahlen und Anfragen. Bei nur 20 km Entfernung besprechen wir die Reports gern persönlich.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es bis zu Top-3 in Geithain?',
        a: 'In einer Kleinstadt wie Geithain sind erste Verbesserungen oft nach vier bis sechs Wochen sichtbar. Stabile Top-Platzierungen in drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO bei nur 7.000 Einwohnern?',
        a: 'Ja. Der geringe Wettbewerb macht Top-Platzierungen besonders leicht erreichbar. Zudem erfassen Sie Kunden aus Borna, Rochlitz und dem gesamten Landkreis.',
      },
      {
        q: 'Was ist im SEO-Service enthalten?',
        a: 'Keyword-Analyse, On-Page-Optimierung, Google My Business, lokaler Linkaufbau, Bewertungsmanagement und monatliches Reporting.',
      },
      {
        q: 'Brauche ich eine neue Webseite?',
        a: 'Nicht zwingend. Wenn Ihre bestehende Seite technisch solide ist, optimieren wir sie. Falls ein Relaunch sinnvoller ist, beraten wir Sie ehrlich.',
      },
    ],
    highlights: [
      'Top-3-Platzierung bei Google für lokale Suchanfragen in Geithain',
      'Minimaler Wettbewerb – maximale Chancen für Ihren Betrieb',
      'Google My Business und Bewertungsmanagement inklusive',
      'Pixel Kraftwerk nur ~20 km entfernt – persönliche Betreuung aus der Nachbarschaft',
    ],
  },

  /* ================================================================
   *  ROCHLITZ
   * ================================================================ */
  'rochlitz.ki-chatbots': {
    regionSlug: 'rochlitz',
    regionName: 'Rochlitz',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Rochlitz – Pixel Kraftwerk automatisiert Kundenkommunikation für Handwerk, Tourismus und Dienstleister am Schloss Rochlitz an der Zwickauer Mulde.',
    intro:
      'Rochlitz, geprägt von Schloss Rochlitz, dem berühmten Rochlitzer Porphyr und der Zwickauer Mulde, verbindet Handwerkstradition mit Tourismus. Lokale Betriebe erhalten täglich wiederkehrende Anfragen – ein KI-Chatbot von Pixel Kraftwerk beantwortet sie automatisch und rund um die Uhr.',
    paragraphs: [
      'Die Rochlitzer Wirtschaft ist vielfältig: Steinmetze arbeiten mit dem legendären Rochlitzer Porphyr, Tourismusbetriebe bedienen Besucher von Schloss Rochlitz, Handwerker und Dienstleister versorgen die Region an der Zwickauer Mulde. All diese Betriebe erhalten täglich dieselben Standardfragen – zu Preisen, Verfügbarkeit, Anfahrt und Leistungen.',
      'Ein KI-Chatbot auf Ihrer Webseite fängt genau diese Routineanfragen ab: Besucher erhalten sofort Antworten, neue Kontaktdaten werden strukturiert erfasst, und Ihr Team wird von wiederkehrenden Fragen befreit.',
      'Für touristisch orientierte Betriebe rund um Schloss Rochlitz ist der Chatbot besonders wertvoll: Fragen zu Führungen, Öffnungszeiten, Eintrittspreisen und Veranstaltungen werden automatisch beantwortet – auch abends und am Wochenende.',
      'Handwerksbetriebe, die mit dem Rochlitzer Porphyr arbeiten, nutzen den Chatbot zur Vorqualifizierung von Projektanfragen: Der Bot fragt nach Art des Vorhabens, gewünschtem Material und Budget und liefert dem Team eine strukturierte Übersicht.',
      'Pixel Kraftwerk in Groitzsch liegt rund 45 Kilometer von Rochlitz entfernt. Persönliche Beratungstermine vor Ort sind selbstverständlich – ob am Schloss, in Ihrer Werkstatt oder Ihrem Büro.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein Chatbot für Steinmetz- und Porphyr-Betriebe in Rochlitz?',
        a: 'Ja. Der Chatbot kann Projektanfragen mit Rückfragen zu Material, Umfang und Budget vorqualifizieren – ideal für die spezialisierten Steinmetzbetriebe der Region.',
      },
      {
        q: 'Kann der Chatbot auch Touristen bedienen?',
        a: 'Absolut. Fragen zu Schlossführungen, Veranstaltungen und Anfahrt werden automatisch beantwortet – auch in englischer Sprache, wenn gewünscht.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Rochlitzer Unternehmen einsatzbereit?',
        a: 'Innerhalb von zwei bis drei Wochen steht ein erster produktiver Chatbot.',
      },
      {
        q: 'Kommen Sie auch nach Rochlitz?',
        a: 'Selbstverständlich. Von Groitzsch erreichen wir Rochlitz in rund 45 Minuten. Persönliche Termine sind jederzeit möglich.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden und Touristen in Rochlitz',
      'Vorqualifizierung von Projekt- und Auftragsanfragen',
      'Besonders geeignet für Porphyr-Handwerk und Tourismus',
      'Persönliche Betreuung aus Groitzsch – rund 45 km entfernt',
    ],
  },

  'rochlitz.telefonassistenten': {
    regionSlug: 'rochlitz',
    regionName: 'Rochlitz',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Rochlitz – Pixel Kraftwerk sichert die Erreichbarkeit von Steinmetzen, Handwerkern und Tourismusbetrieben an der Zwickauer Mulde.',
    intro:
      'In Rochlitz greifen Kunden und Auftraggeber zum Telefon – ob für den Steinmetz, den Installateur oder das Hotel am Schloss. Doch wer mit dem Rochlitzer Porphyr arbeitet oder Gäste bewirtet, kann nicht ständig ans Telefon gehen. Unser KI-Telefonassistent übernimmt zuverlässig.',
    paragraphs: [
      'Rochlitzer Betriebe kennen das Problem: Der Steinmetz ist in der Werkstatt, der Handwerker auf der Baustelle in Mittweida oder Geithain, und das Telefon klingelt ins Leere. Der Telefonassistent nimmt jeden Anruf professionell entgegen und erfasst alle relevanten Informationen – Anliegen, Kontaktdaten, Dringlichkeit.',
      'Für Tourismusbetriebe rund um Schloss Rochlitz bedeutet das: Buchungsanfragen, Fragen zu Veranstaltungen und Anfahrtshinweise werden auch während der Stoßzeiten zuverlässig aufgenommen.',
      'Handwerker profitieren besonders: Auftragsanfragen werden mit allen Details erfasst – Art der Arbeit, gewünschtes Material (etwa Rochlitzer Porphyr für Restaurierungen), Zeitrahmen und Budget. So erhalten Sie alle Informationen strukturiert, ohne ein einziges Telefonat verpasst zu haben.',
      'Den Assistenten passen wir an Ihre spezifischen Abläufe an – gemeinsam in einem persönlichen Workshop vor Ort oder per Videocall.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch fachliche Rückfragen zu Porphyr-Projekten stellen?',
        a: 'Ja. Wir konfigurieren den Assistenten mit branchenspezifischen Rückfragen, sodass er beispielsweise nach Materialwunsch, Projektumfang und Zeitrahmen fragt.',
      },
      {
        q: 'Funktioniert der Assistent auch bei hohem Anrufaufkommen?',
        a: 'Der Assistent kann beliebig viele Anrufe parallel bearbeiten – kein Anrufer muss warten oder wird abgewiesen.',
      },
      {
        q: 'Arbeitet der Assistent auch abends und am Wochenende?',
        a: 'Ja. 24/7-Betrieb ist Standard – ideal für Tourismusbetriebe mit Gästen, die außerhalb der Bürozeiten anrufen.',
      },
      {
        q: 'Kommen Sie für die Einrichtung nach Rochlitz?',
        a: 'Selbstverständlich. Von Groitzsch sind es rund 45 Kilometer – persönliche Termine vor Ort sind jederzeit möglich.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch in der Werkstatt oder auf der Baustelle',
      '24/7-Erreichbarkeit für Kunden und Touristen in Rochlitz',
      'Branchenspezifische Rückfragen für Steinmetz- und Handwerksbetriebe',
      'Persönliche Einrichtung durch Pixel Kraftwerk aus Groitzsch',
    ],
  },

  'rochlitz.automatisierungen': {
    regionSlug: 'rochlitz',
    regionName: 'Rochlitz',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Rochlitz – Pixel Kraftwerk digitalisiert Abläufe in Steinmetzhandwerk, Tourismus und Dienstleistung an der Zwickauer Mulde.',
    intro:
      'In Rochlitz werden viele Abläufe noch manuell erledigt: Angebote einzeln geschrieben, Aufträge per Telefon bestätigt, Materialbestellungen händisch ausgelöst. Pixel Kraftwerk automatisiert genau diese zeitfressenden Prozesse – damit Ihr Team sich auf Handwerk und Kunden konzentrieren kann.',
    paragraphs: [
      'Für Steinmetzbetriebe in Rochlitz bieten wir spezialisierte Automatisierungen: Projektanfragen werden automatisch erfasst, mit einer Eingangsbestätigung versehen und in Ihr Kalkulationstool oder CRM übertragen. Nach Angebotsversand erinnert das System automatisch an den Follow-up.',
      'Tourismusbetriebe am Schloss Rochlitz profitieren von automatisierten Buchungsbestätigungen, Anreise-Informationen per E-Mail und Bewertungsanfragen nach dem Aufenthalt – alles ohne manuelles Eingreifen.',
      'Handwerker in der Region nutzen Automatisierungen für die gesamte Auftragsabwicklung: Von der automatischen Auftragsbestätigung über die Rechnungsstellung bis zur Zahlungserinnerung läuft alles im Hintergrund.',
      'Wir verbinden Ihre vorhandenen Werkzeuge miteinander – Buchhaltung, Kalender, E-Mail und Branchensoftware. Die Plattformen Make und n8n ermöglichen flexible Integrationen ohne Systemwechsel.',
    ],
    faqs: [
      {
        q: 'Was lässt sich in einem Rochlitzer Steinmetzbetrieb automatisieren?',
        a: 'Projekterfassung, Angebotsversand, Follow-up-Erinnerungen, Rechnungsstellung und Materialbestellungen bei Zulieferern sind typische Einstiegspunkte.',
      },
      {
        q: 'Muss ich meine bestehenden Werkzeuge ersetzen?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme – kein Umlernen, kein Datenverlust.',
      },
      {
        q: 'Wie lange dauert die Einrichtung?',
        a: 'Einfache Automatisierungen stehen in wenigen Tagen, komplexere Workflows in zwei bis vier Wochen.',
      },
      {
        q: 'Wie hoch ist die Zeitersparnis?',
        a: 'Die meisten Betriebe sparen mehrere Stunden pro Woche – je nach Auftragsvolumen und Anzahl der automatisierten Prozesse.',
      },
    ],
    highlights: [
      'Spezialisierte Automatisierungen für Steinmetzhandwerk und Tourismus',
      'Zeitersparnis durch automatische Angebote, Rechnungen und Follow-ups',
      'Verbindung bestehender Systeme ohne Softwarewechsel',
      'Persönliche Betreuung aus Groitzsch – rund 45 km entfernt',
    ],
  },

  'rochlitz.webseiten': {
    regionSlug: 'rochlitz',
    regionName: 'Rochlitz',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Rochlitz – Pixel Kraftwerk erstellt moderne Websites für Steinmetze, Tourismusbetriebe und Handwerker an der Zwickauer Mulde.',
    intro:
      'Rochlitz bietet mit Schloss, Porphyr und der Zwickauer Mulde einzigartiges Potenzial – doch ohne professionelle Webseite bleibt dieses Potenzial online unsichtbar. Pixel Kraftwerk erstellt Webseiten, die die Stärken Ihres Rochlitzer Betriebs ins Netz bringen und Kunden überzeugen.',
    paragraphs: [
      'Viele Betriebe in Rochlitz – Steinmetze, Pensionen, Handwerker – haben keine moderne Webseite oder nutzen veraltete Auftritte. Gerade für die Vermarktung des einzigartigen Rochlitzer Porphyrs oder touristischer Angebote am Schloss ist eine ansprechende Online-Präsenz unverzichtbar.',
      'Wir entwickeln schnelle, mobiloptimierte Webseiten mit besonderem Augenmerk auf die Rochlitzer Alleinstellungsmerkmale: Hochwertige Bildergalerien von Porphyr-Arbeiten, Referenzprojekte, virtuelle Schlossrundgänge, Buchungsmodule für Unterkünfte und Veranstaltungskalender.',
      'Jede Seite ist von Anfang an suchmaschinenoptimiert: Lokale Keywords wie „Steinmetz Rochlitz", „Rochlitzer Porphyr" oder „Hotel Zwickauer Mulde" werden strategisch platziert. Strukturierte Daten helfen Google, Ihre Leistungen korrekt darzustellen.',
      'Für Handwerker integrieren wir Angebotsanfrage-Formulare und Referenzgalerien. Gastronomiebetriebe erhalten Speisekarten-Module und Reservierungsformulare.',
    ],
    faqs: [
      {
        q: 'Kann die Webseite meine Porphyr-Arbeiten besonders gut präsentieren?',
        a: 'Ja. Wir erstellen hochwertige Bildergalerien mit Vorher-Nachher-Vergleichen, Materialdetails und Referenzprojekten – perfekt für die Vermarktung von Porphyr-Handwerk.',
      },
      {
        q: 'Was kostet eine Webseite für ein Rochlitzer Unternehmen?',
        a: 'Abhängig von Umfang und Funktionen. Ein kostenloses Erstgespräch klärt Ihren Bedarf.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Drei bis sechs Wochen je nach Umfang. Portfolioseiten mit umfangreichen Galerien können etwas länger dauern.',
      },
      {
        q: 'Kann ich die Webseite selbst aktualisieren?',
        a: 'Ja. Wir setzen auf benutzerfreundliche Systeme und schulen Sie in der Pflege.',
      },
    ],
    highlights: [
      'Moderne Webseite mit Fokus auf Porphyr-Handwerk und Tourismus',
      'Hochwertige Bildergalerien und Referenzprojekt-Darstellung',
      'Suchmaschinenoptimiert für Rochlitz und die Mulde-Region',
      'Persönliche Beratung und Umsetzung aus Groitzsch',
    ],
  },

  'rochlitz.seo-top-3': {
    regionSlug: 'rochlitz',
    regionName: 'Rochlitz',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Rochlitz – Pixel Kraftwerk bringt Steinmetze, Tourismusbetriebe und Handwerker an die Spitze der Google-Suchergebnisse.',
    intro:
      'Rochlitz hat mit dem berühmten Porphyr und dem Schloss überregionale Bekanntheit – doch bei Google entscheidet die Position über den Erfolg. Pixel Kraftwerk bringt Ihren Betrieb bei lokalen und fachspezifischen Suchanfragen in die Top 3.',
    paragraphs: [
      'In Rochlitz mit rund 6.000 Einwohnern ist der lokale Wettbewerb gering – eine ideale Ausgangslage für Top-Platzierungen. Gleichzeitig gibt es für spezialisierte Suchbegriffe wie „Rochlitzer Porphyr Steinmetz" überregionales Suchvolumen, das sich gezielt nutzen lässt.',
      'Unsere SEO-Strategie für Rochlitz ist zweigleisig: Wir positionieren Sie für lokale Alltagsbegriffe (Handwerker, Arzt, Restaurant) und für überregionale Fachbegriffe rund um Porphyr und Schloss-Tourismus.',
      'Das umfasst die technische Optimierung Ihrer Webseite, die Erstellung hochwertiger Inhalte mit Bezug zu Rochlitz und der Mulde-Region, den Aufbau Ihres Google-Unternehmensprofils und strategischen Linkaufbau in Fachverzeichnissen und Tourismusportalen.',
      'Monatliche Reports zeigen Ihnen den Fortschritt: Rankings, Sichtbarkeit, Besucherzahlen und Anfragen – transparent und nachvollziehbar.',
    ],
    faqs: [
      {
        q: 'Kann SEO auch überregionale Aufträge für Rochlitzer Steinmetze bringen?',
        a: 'Ja. Mit Optimierung für Fachbegriffe wie „Rochlitzer Porphyr" oder „Porphyr Restaurierung" erreichen wir Auftraggeber aus ganz Deutschland.',
      },
      {
        q: 'Wie lange dauert es bis zur Top-3-Platzierung?',
        a: 'Für lokale Keywords oft schon nach vier bis acht Wochen sichtbare Verbesserungen. Stabile Top-Platzierungen in drei bis sechs Monaten.',
      },
      {
        q: 'Was kostet SEO für meinen Rochlitzer Betrieb?',
        a: 'Abhängig vom Umfang. Ein kostenloses Erstgespräch klärt Ihren Bedarf und Ihr Budget.',
      },
      {
        q: 'Kann SEO auch für touristische Angebote in Rochlitz eingesetzt werden?',
        a: 'Absolut. Wir optimieren für Keywords wie „Schloss Rochlitz", „Pension Zwickauer Mulde" oder „Wandern Rochlitz", um Touristen gezielt anzusprechen.',
      },
    ],
    highlights: [
      'Top-3-Platzierung für lokale und überregionale Fach-Suchanfragen',
      'Zweigleisige Strategie: lokal und Porphyr-/Tourismus-überregional',
      'Google My Business und Fachverzeichnis-Optimierung inklusive',
      'Monatliche Erfolgsberichte und persönliche Betreuung',
    ],
  },

  /* ================================================================
   *  KITZSCHER
   * ================================================================ */
  'kitzscher.ki-chatbots': {
    regionSlug: 'kitzscher',
    regionName: 'Kitzscher',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Kitzscher – Pixel Kraftwerk automatisiert Kundenkommunikation für Betriebe zwischen Borna und Groitzsch im Landkreis Leipzig.',
    intro:
      'Kitzscher, die Gemeinde zwischen Borna und Groitzsch mit rund 5.000 Einwohnern, ist unser nächster Nachbar – nur etwa 10 Kilometer von unserem Standort in Groitzsch entfernt. Diese extreme Nähe macht uns zum idealen Partner für KI-Chatbots, die Ihre Kundenkommunikation rund um die Uhr automatisieren.',
    paragraphs: [
      'In Kitzscher sind vor allem kleine Handwerksbetriebe, Dienstleister und Einzelhändler ansässig. Trotz der überschaubaren Größe gibt es dieselben Herausforderungen wie in größeren Städten: Kundenanfragen zu Öffnungszeiten, Preisen und Verfügbarkeiten binden täglich Arbeitszeit. Ein KI-Chatbot löst genau dieses Problem.',
      'Der Chatbot auf Ihrer Webseite beantwortet wiederkehrende Fragen sofort – auch abends, am Wochenende und an Feiertagen. Neue Kontakte werden strukturiert erfasst und an Ihr Team weitergeleitet. So verpassen Sie keine Anfrage, auch wenn Sie gerade beim Kunden in Borna, Groitzsch oder Regis-Breitingen unterwegs sind.',
      'Für Handwerker in Kitzscher ist die Vorqualifizierung besonders wertvoll: Kunden beschreiben ihr Anliegen, der Chatbot fragt nach Details und übergibt eine strukturierte Zusammenfassung. Ihr Team kann sofort einschätzen, ob und wie der Auftrag passt.',
      'Die technische Einrichtung übernehmen wir komplett – von der Integration in Ihre Webseite bis zur Anbindung an Kalender und CRM. Und bei nur 10 km Entfernung sind wir im Handumdrehen bei Ihnen.',
    ],
    faqs: [
      {
        q: 'Wie nah ist Pixel Kraftwerk an Kitzscher?',
        a: 'Nur rund 10 km – wir sind in weniger als 10 Minuten bei Ihnen. Näher geht es kaum. Persönliche Betreuung ist damit quasi ein Katzensprung.',
      },
      {
        q: 'Lohnt sich ein KI-Chatbot für kleine Betriebe in Kitzscher?',
        a: 'Gerade für kleine Betriebe mit begrenztem Personal ist der Chatbot Gold wert: Er beantwortet Anfragen automatisch und spart Ihnen täglich Zeit.',
      },
      {
        q: 'Wie schnell ist ein Chatbot einsatzbereit?',
        a: 'Innerhalb von zwei bis drei Wochen – bei der kurzen Distanz können wir besonders schnell und unkompliziert zusammenarbeiten.',
      },
      {
        q: 'Kann der Chatbot auch Terminbuchungen übernehmen?',
        a: 'Ja. Terminwünsche erfassen, freie Slots prüfen, Bestätigungen versenden – das übernimmt der Chatbot automatisch.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden in Kitzscher und Umgebung',
      'Automatische Vorqualifizierung spart täglich wertvolle Zeit',
      'Integration in Kalender, CRM und bestehende Systeme',
      'Pixel Kraftwerk nur ~10 km entfernt – Ihr nächster Nachbar',
    ],
  },

  'kitzscher.telefonassistenten': {
    regionSlug: 'kitzscher',
    regionName: 'Kitzscher',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Kitzscher – Pixel Kraftwerk sichert die Erreichbarkeit von Handwerkern und Dienstleistern zwischen Borna und Groitzsch.',
    intro:
      'In Kitzscher ist das Telefon für viele Kunden der erste Griff – ob für den Elektriker, den Friseur oder die Arztpraxis. Doch wenn Sie beim Kunden in Borna oder Regis-Breitingen sind, klingelt das Telefon ins Leere. Unser KI-Telefonassistent löst dieses Problem – und wir sind mit nur 10 km Entfernung praktisch nebenan.',
    paragraphs: [
      'Kitzschers Betriebe arbeiten mit besonders schlanken Teams – oft ist es ein Einzelunternehmer oder ein Kleinbetrieb mit zwei bis drei Mitarbeitenden. Jeder verpasste Anruf kann einen verlorenen Auftrag bedeuten. Der Telefonassistent von Pixel Kraftwerk stellt sicher, dass kein Anruf verloren geht.',
      'Der Assistent begrüßt Anrufende freundlich, klärt das Anliegen und erfasst alle relevanten Informationen: Name, Kontaktdaten, Art der Anfrage und Dringlichkeit. Sie erhalten alles strukturiert per E-Mail oder direkt in Ihrem System – bereit zur Bearbeitung.',
      'Für Arztpraxen und Gesundheitsdienstleister in Kitzscher nimmt der Assistent Terminwünsche, Rezeptanfragen und organisatorische Fragen auf. Dringende Anliegen werden sofort an Ihre Mobilnummer weitergeleitet.',
      'Die Konfiguration erfolgt persönlich – und bei 10 km Entfernung ist das ein Katzensprung. Kurzfristige Anpassungen oder Änderungen setzen wir schnell um.',
    ],
    faqs: [
      {
        q: 'Wie schnell kann der Telefonassistent für meinen Kitzscher Betrieb starten?',
        a: 'Dank der extremen Nähe von nur 10 km können wir besonders schnell zusammenarbeiten. Der Assistent ist oft innerhalb weniger Tage betriebsbereit.',
      },
      {
        q: 'Ist der Telefonassistent rund um die Uhr aktiv?',
        a: 'Ja. 24/7-Betrieb ist Standard – auch abends, am Wochenende und an Feiertagen.',
      },
      {
        q: 'Wie wird der Assistent an meine Kitzscher Telefonnummer angebunden?',
        a: 'Über eine Rufumleitung bei Nichtannahme. Ihre bestehende Nummer bleibt erhalten, und der Assistent springt automatisch ein.',
      },
      {
        q: 'Was passiert bei Notfällen?',
        a: 'Dringende Anrufe werden sofort an Ihre hinterlegte Mobilnummer durchgestellt.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch als Einzelunternehmer oder Kleinbetrieb',
      '24/7-Erreichbarkeit für Ihre Kunden in Kitzscher, Borna und Umgebung',
      'Sofortige Weiterleitung bei dringenden Anrufen',
      'Pixel Kraftwerk nur ~10 km entfernt – Ihr direkter Nachbar in Groitzsch',
    ],
  },

  'kitzscher.automatisierungen': {
    regionSlug: 'kitzscher',
    regionName: 'Kitzscher',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Betriebe in Kitzscher – Pixel Kraftwerk digitalisiert Abläufe in Handwerk und Dienstleistung zwischen Borna und Groitzsch.',
    intro:
      'In Kitzscher arbeiten viele Betriebe noch mit manuellen Prozessen, die wertvolle Zeit kosten: Rechnungen per Hand, Termine telefonisch, Kundendaten in Excel. Pixel Kraftwerk automatisiert diese Abläufe – und als Ihr nächster Nachbar mit nur 10 km Entfernung sind wir jederzeit persönlich erreichbar.',
    paragraphs: [
      'In Kitzschers kleinen Betrieben steckt großes Automatisierungspotenzial, weil hier besonders knappe Personalressourcen auf dieselben Routineaufgaben treffen wie in größeren Unternehmen: Rechnungsstellung, Auftragsbestätigungen, Terminkoordination und Kundenkommunikation.',
      'Typische Automatisierungen für Kitzscher Betriebe: Auftragsbestätigungen werden automatisch verschickt, Rechnungen nach Abschluss erstellt und versendet, Zahlungserinnerungen gehen ohne manuelles Zutun raus, und Kundenbewertungen werden nach dem Auftrag automatisch angefragt.',
      'Wir verbinden Ihre vorhandenen Werkzeuge miteinander – ob Lexoffice, sevDesk, Google Kalender oder E-Mail. Kein Systemwechsel, kein Umlernen. Die Daten fließen automatisch dorthin, wo sie gebraucht werden.',
      'Die Einrichtung erfolgt persönlich, und bei nur 10 Kilometern sind Abstimmungen und Anpassungen besonders schnell und unkompliziert möglich.',
    ],
    faqs: [
      {
        q: 'Was lässt sich in einem Kitzscher Kleinbetrieb automatisieren?',
        a: 'Rechnungsstellung, Auftragsbestätigungen, Terminplanung, Zahlungserinnerungen und Kundennachfass – alles, was regelmäßig anfällt und Zeit kostet.',
      },
      {
        q: 'Muss ich dafür neue Software kaufen?',
        a: 'Nein. Wir verbinden Ihre bestehenden Werkzeuge. Wenn Sie bereits mit Lexoffice, sevDesk oder Google-Tools arbeiten, knüpfen wir genau dort an.',
      },
      {
        q: 'Wie schnell amortisiert sich die Investition?',
        a: 'Die meisten Betriebe berichten von spürbarer Zeitersparnis ab der ersten Woche. Typische Amortisation innerhalb weniger Monate.',
      },
      {
        q: 'Wie schnell kann es losgehen?',
        a: 'Bei nur 10 km Entfernung können wir besonders schnell starten. Einfache Automatisierungen stehen oft in wenigen Tagen.',
      },
    ],
    highlights: [
      'Enorme Zeitersparnis für Kitzscher Kleinbetriebe',
      'Verbindung bestehender Tools ohne Softwarewechsel',
      'Individuelle Workflows passend zu Ihrem Betrieb',
      'Pixel Kraftwerk nur ~10 km entfernt – schnellste Reaktionszeit garantiert',
    ],
  },

  'kitzscher.webseiten': {
    regionSlug: 'kitzscher',
    regionName: 'Kitzscher',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Kitzscher – Pixel Kraftwerk erstellt moderne Websites für Betriebe zwischen Borna und Groitzsch im Landkreis Leipzig.',
    intro:
      'Auch in Kitzscher beginnt die Kundensuche online: Wer „Handwerker Kitzscher", „Friseur Borna" oder „Dienstleister Landkreis Leipzig" googelt, erwartet eine professionelle Webseite. Pixel Kraftwerk erstellt genau solche Webseiten – und als Ihr Nachbar aus nur 10 km Entfernung sind wir der naheste Webdesign-Partner, den Sie finden können.',
    paragraphs: [
      'Viele Betriebe in Kitzscher haben keine eigene Webseite – oder eine veraltete Seite, die auf dem Smartphone nicht funktioniert. Gerade in einer Gemeinde zwischen Borna und Groitzsch ist eine professionelle Online-Präsenz wichtig, um Kunden aus der gesamten Region zu erreichen.',
      'Wir entwickeln schnelle, mobiloptimierte Webseiten mit klarem Design: Kontaktinformationen, Leistungen und Öffnungszeiten sind auf den ersten Blick sichtbar. Kunden finden sofort, was sie suchen, und können direkt Kontakt aufnehmen.',
      'Für Handwerker in Kitzscher integrieren wir Referenzgalerien, Angebotsanfrage-Formulare und Bewertungsmodule. Dienstleister erhalten Terminbuchungsfunktionen und übersichtliche Leistungsdarstellungen.',
      'Jede Webseite ist von Anfang an suchmaschinenoptimiert: Lokale Keywords, strukturierte Daten und schnelle Ladezeiten sorgen dafür, dass Sie bei Google gefunden werden – nicht nur in Kitzscher, sondern in Borna, Groitzsch und dem gesamten Landkreis Leipzig.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite für einen Kitzscher Betrieb?',
        a: 'Die Kosten richten sich nach Umfang und Funktionen. Ein kostenloses Erstgespräch bei Ihnen vor Ort – bei nur 10 km Entfernung – klärt Ihren Bedarf.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen?',
        a: 'Ja. Wir setzen auf benutzerfreundliche Systeme und schulen Sie persönlich – gern direkt bei Ihnen in Kitzscher.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Drei bis sechs Wochen. Die extrem kurzen Wege zwischen Groitzsch und Kitzscher beschleunigen den gesamten Prozess.',
      },
      {
        q: 'Wird die Seite auch für die Region Borna/Groitzsch sichtbar sein?',
        a: 'Ja. Wir optimieren nicht nur für Kitzscher, sondern auch für Borna, Groitzsch und den gesamten Landkreis Leipzig.',
      },
    ],
    highlights: [
      'Moderne, mobiloptimierte Webseite für Ihren Kitzscher Betrieb',
      'Suchmaschinenoptimiert für Kitzscher, Borna und den Landkreis Leipzig',
      'Schnelle Ladezeiten und klares, benutzerfreundliches Design',
      'Pixel Kraftwerk nur ~10 km entfernt – der naheste Webdesign-Partner',
    ],
  },

  'kitzscher.seo-top-3': {
    regionSlug: 'kitzscher',
    regionName: 'Kitzscher',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Kitzscher – Pixel Kraftwerk bringt Ihren Betrieb zwischen Borna und Groitzsch auf die Top-3-Positionen bei Google.',
    intro:
      'In Kitzscher mit rund 5.000 Einwohnern ist der lokale Google-Wettbewerb minimal – eine perfekte Ausgangslage für Top-3-Platzierungen. Pixel Kraftwerk als Ihr direkter Nachbar aus nur 10 km Entfernung sorgt dafür, dass Ihr Betrieb bei relevanten Suchanfragen ganz oben steht.',
    paragraphs: [
      'Wer „Elektriker Kitzscher", „Friseur Kitzscher" oder „Maler Kitzscher" googelt, findet oft kaum Ergebnisse. Das ist Ihre Chance: Mit gezielter Suchmaschinenoptimierung besetzen wir diese Keywords und positionieren Ihren Betrieb zuverlässig in den Top 3.',
      'Unsere SEO-Strategie für Kitzscher geht über die Gemeindegrenze hinaus: Wir optimieren auch für Suchanfragen aus Borna, Groitzsch, Regis-Breitingen und dem gesamten Landkreis Leipzig. So erreichen Sie nicht nur die 5.000 Einwohner von Kitzscher, sondern ein Vielfaches davon.',
      'Das umfasst die technische Optimierung Ihrer Webseite, die Erstellung lokaler Inhalte, den Aufbau Ihres Google-Unternehmensprofils mit Fotos und regelmäßigen Beiträgen sowie aktives Bewertungsmanagement.',
      'Die Ergebnisse messen wir monatlich – und bei nur 10 km Entfernung besprechen wir sie gern bei einem Kaffee bei Ihnen in Kitzscher.',
    ],
    faqs: [
      {
        q: 'Lohnt sich SEO in einer so kleinen Gemeinde wie Kitzscher?',
        a: 'Absolut. Der minimale Wettbewerb macht Top-Platzierungen besonders leicht erreichbar. Zudem optimieren wir für die gesamte Region – Borna, Groitzsch und den Landkreis Leipzig.',
      },
      {
        q: 'Wie schnell sehe ich Ergebnisse?',
        a: 'In Kitzscher sind erste Ranking-Verbesserungen oft schon nach drei bis sechs Wochen sichtbar – schneller als in größeren Städten mit mehr Wettbewerb.',
      },
      {
        q: 'Was kostet SEO für meinen Kitzscher Betrieb?',
        a: 'Die Kosten hängen vom Umfang ab. Ein kostenloses Erstgespräch bei Ihnen vor Ort klärt alles.',
      },
      {
        q: 'Kann SEO auch Kunden aus Borna und Groitzsch anziehen?',
        a: 'Ja. Wir optimieren gezielt für die gesamte Region, sodass Sie Kunden aus einem Umkreis von 15–20 km erreichen.',
      },
      {
        q: 'Was ist im SEO-Service enthalten?',
        a: 'Keyword-Analyse, On-Page-Optimierung, Google My Business, Bewertungsmanagement, lokaler Content und monatliches Reporting.',
      },
    ],
    highlights: [
      'Top-3-Platzierung bei Google mit minimalem Wettbewerb',
      'Regionale SEO-Strategie für Kitzscher, Borna und den Landkreis Leipzig',
      'Google My Business und Bewertungsmanagement inklusive',
      'Pixel Kraftwerk nur ~10 km entfernt – der naheste SEO-Partner überhaupt',
    ],
  },
};
