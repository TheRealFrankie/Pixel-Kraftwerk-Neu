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

export const tier1ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  /* ================================================================
   *  HALLE (SAALE)
   * ================================================================ */
  'halle-saale.ki-chatbots': {
    regionSlug: 'halle-saale',
    regionName: 'Halle (Saale)',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Halle (Saale) – Pixel Kraftwerk automatisiert Kundenkommunikation für Praxen, Kanzleien und den Mittelstand an der Saale.',
    intro:
      'Halle (Saale) ist mit rund 240.000 Einwohnern die größte Stadt Sachsen-Anhalts und ein Standort mit starker Gesundheitswirtschaft, Chemiebranche und einer lebendigen Universitätslandschaft rund um die Martin-Luther-Universität. Unternehmen in Halle stehen vor der Aufgabe, steigende Kundenanfragen effizient zu bewältigen – ob im Gesundheitswesen, in der Forschung oder im Dienstleistungssektor. Ein KI-Chatbot von Pixel Kraftwerk beantwortet wiederkehrende Fragen rund um die Uhr und schafft Freiräume für Ihr Kerngeschäft.',
    paragraphs: [
      'Die Hallenser Wirtschaft ist vielfältig: Vom Universitätsklinikum über Chemieunternehmen im Saalekreis bis hin zu Start-ups im Technologiepark Weinberg Campus – überall häufen sich Standardanfragen, die wertvolle Arbeitszeit binden. Ein KI-Chatbot auf Ihrer Webseite fängt diese Anfragen auf, beantwortet Fragen zu Leistungen, Öffnungszeiten und Verfügbarkeit und erfasst Kontaktdaten strukturiert für Ihr Team.',
      'Für Arztpraxen und Kliniken in Halle ist die Entlastung besonders spürbar: Patientinnen und Patienten fragen nach freien Terminen, Sprechzeiten oder benötigten Unterlagen. Der Chatbot beantwortet diese Fragen sofort, stellt Rückfragen zu Symptomen oder Versicherungsstatus und leitet dringende Anliegen direkt weiter. So reduzieren Sie das Telefonaufkommen am Empfang deutlich.',
      'Auch Hallenser Dienstleister, Kanzleien und Handwerksbetriebe profitieren: Ein Steuerberater in der Großen Ulrichstraße kann den Chatbot nutzen, um Mandantenanfragen vorzuqualifizieren. Ein Sanitärbetrieb in Halle-Neustadt lässt den Chatbot Schadensmeldungen mit Fotos aufnehmen. Die Einsatzmöglichkeiten sind so vielfältig wie die Hallenser Unternehmenslandschaft.',
      'Technisch integrieren wir den Chatbot in Ihre bestehende Website – ob WordPress, Jimdo oder individuelles CMS. Auf Wunsch verbinden wir ihn mit Ihrem Praxisverwaltungssystem, CRM oder Kalender, sodass Anfragen direkt im richtigen System landen. Über WhatsApp oder Facebook Messenger erreichen Sie auch Kundinnen und Kunden, die nicht über die Website kommen.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 40 Kilometer südlich von Halle. Persönliche Termine in Halle, ob am Marktplatz, am Weinberg Campus oder in Ihren Geschäftsräumen, sind jederzeit möglich. Wir kennen den Hallenser Markt und betreuen Sie von der ersten Idee bis zum laufenden Betrieb.',
    ],
    faqs: [
      {
        q: 'Für welche Branchen in Halle (Saale) eignet sich ein KI-Chatbot besonders?',
        a: 'Besonders wirkungsvoll sind Chatbots für Arztpraxen, Kliniken, Kanzleien, Bildungseinrichtungen, Handwerksbetriebe und Dienstleister in Halle – überall dort, wo regelmäßig dieselben Fragen eingehen.',
      },
      {
        q: 'Kann der Chatbot auch Termine für Hallenser Praxen und Kanzleien buchen?',
        a: 'Ja. Wir verbinden den Chatbot mit Ihrem Kalender oder Buchungssystem, sodass Termine direkt im Dialog vereinbart werden können – inklusive Bestätigung und Erinnerung.',
      },
      {
        q: 'Wie schnell ist ein KI-Chatbot für mein Unternehmen in Halle einsatzbereit?',
        a: 'Ein erster produktiver Chatbot mit den wichtigsten Dialogen ist in der Regel innerhalb von zwei bis vier Wochen live. Komplexere Anbindungen an Praxissoftware oder CRM benötigen etwas mehr Zeit.',
      },
      {
        q: 'Kommen Sie für die Einrichtung auch nach Halle (Saale)?',
        a: 'Selbstverständlich. Von Groitzsch erreichen wir Halle in rund 40 Minuten. Ob Erstgespräch, Workshop oder technische Einrichtung – wir sind persönlich vor Ort.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Patienten, Mandanten und Kunden in Halle',
      'Nahtlose Integration in Praxissoftware, CRM und Kalender',
      'Einsetzbar auf Webseite, WhatsApp und Messenger',
      'Persönliche Betreuung aus Groitzsch – nur ~40 km entfernt',
    ],
  },

  'halle-saale.telefonassistenten': {
    regionSlug: 'halle-saale',
    regionName: 'Halle (Saale)',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Halle (Saale) – Pixel Kraftwerk sichert Ihre Erreichbarkeit in Praxis, Kanzlei und Mittelstand an der Saale.',
    intro:
      'In Halle (Saale) ist das Telefon für viele Betriebe noch der wichtigste Kontaktkanal – von Arztpraxen am Riebeckplatz über Handwerker in Halle-Neustadt bis zu Kanzleien in der Innenstadt. Doch wer im Behandlungszimmer, auf der Baustelle oder im Mandantengespräch steckt, kann nicht gleichzeitig Anrufe entgegennehmen. Unser Telefonassistent übernimmt genau das.',
    paragraphs: [
      'Die Gesundheitswirtschaft ist einer der größten Arbeitgeber in Halle. Praxen und MVZ erleben täglich ein hohes Anrufaufkommen: Terminwünsche, Rezeptanfragen, Überweisungsfragen. Unser Telefonassistent begrüßt Anrufende, klärt das Anliegen und erfasst alle relevanten Daten strukturiert – sodass Ihr Praxisteam die Informationen geordnet abarbeiten kann, statt zwischen Behandlung und Telefon hin- und herzuwechseln.',
      'Auch im Hallenser Handwerk und bei technischen Dienstleistern ist die Situation vertraut: Kunden rufen an, während der Meister auf der Baustelle in Merseburg oder Weißenfels ist. Der Telefonassistent nimmt den Anruf entgegen, stellt gezielte Rückfragen zu Art und Dringlichkeit des Auftrags und leitet die Information per E-Mail oder ins CRM weiter. Kein verpasster Auftrag, kein Rückruf-Chaos.',
      'Wir passen den Assistenten exakt an Ihre Abläufe an: Welche Informationen werden bei Terminanfragen benötigt? Wann soll direkt an einen Mitarbeitenden weitergeleitet werden? Welche Notfälle erfordern sofortige Reaktion? Diese Logik definieren wir gemeinsam – auf Basis Ihres realen Alltags in Halle.',
      'In Kombination mit einem KI-Chatbot entsteht ein System, das Telefon und digitale Kanäle gleichermaßen abdeckt. So erreichen Sie Patienten, Mandanten und Kunden dort, wo sie sich am wohlsten fühlen – am Telefon genauso wie per Chat.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch medizinische Erstfragen für Praxen in Halle übernehmen?',
        a: 'Der Assistent kann Symptome, Versicherungsstatus und Terminwünsche strukturiert erfassen. Medizinische Beratung bleibt selbstverständlich Ihrem Fachpersonal vorbehalten.',
      },
      {
        q: 'Wie reagieren Anrufende in Halle auf einen automatisierten Telefonassistenten?',
        a: 'Entscheidend ist eine professionelle, freundliche Ansprache. Wenn Anrufende schnell eine Rückmeldung erhalten, statt in der Warteschlange zu hängen, wird der Assistent positiv aufgenommen.',
      },
      {
        q: 'Lässt sich der Telefonassistent mit Praxissoftware oder CRM verbinden?',
        a: 'Ja. Wir integrieren den Assistenten mit gängiger Praxissoftware, CRM-Systemen und Kalenderlösungen, damit erfasste Daten direkt dort landen, wo sie gebraucht werden.',
      },
      {
        q: 'Was kostet ein Telefonassistent für einen Betrieb in Halle (Saale)?',
        a: 'Die Kosten hängen von Umfang und Komplexität ab. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot, das zu Ihrer Betriebsgröße passt.',
      },
    ],
    highlights: [
      'Zuverlässige Anrufannahme für Praxen, Kanzleien und Betriebe in Halle',
      'Strukturierte Erfassung von Terminwünschen und Anliegen',
      'Anbindung an Praxissoftware, CRM und Kalender',
      'Persönliche Einrichtung und Betreuung aus der Region',
    ],
  },

  'halle-saale.automatisierungen': {
    regionSlug: 'halle-saale',
    regionName: 'Halle (Saale)',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Halle (Saale) – Pixel Kraftwerk verbindet Ihre Tools und eliminiert manuelle Routineaufgaben im Saalekreis.',
    intro:
      'In vielen Hallenser Betrieben werden Kundendaten noch manuell zwischen E-Mail, Tabelle und Branchensoftware hin- und herkopiert. Terminbestätigungen gehen per Hand raus, Angebote werden einzeln verschickt, Follow-ups vergessen. Pixel Kraftwerk automatisiert genau diese Abläufe – passend zu den Anforderungen von Gesundheitswesen, Chemiebranche und Mittelstand an der Saale.',
    paragraphs: [
      'Halle (Saale) ist ein Wirtschaftsstandort mit großer Branchenvielfalt: Chemieunternehmen im Saalekreis, Forschungseinrichtungen am Weinberg Campus, Praxen rund um das Universitätsklinikum, Handwerksbetriebe im gesamten Stadtgebiet. Überall entstehen wiederkehrende Prozesse, die wertvolle Arbeitszeit binden – und die sich zuverlässig automatisieren lassen.',
      'Typische Einstiegspunkte für Hallenser Unternehmen: Kontaktanfragen von der Webseite werden automatisch ins CRM übertragen und mit einer Eingangsbestätigung versehen. Terminbuchungen lösen Kalendereinträge und Erinnerungen aus. Nach einem Erstgespräch wird ein Angebotsentwurf automatisch erstellt und zur Freigabe vorgelegt. Follow-up-Mails gehen ohne manuelles Zutun nach definierten Fristen raus.',
      'Wir arbeiten mit Ihren vorhandenen Werkzeugen: Ob Google Workspace, Microsoft 365, Branchensoftware oder spezialisierte Praxisverwaltung – wir verbinden die Systeme, statt sie zu ersetzen. Daten fließen automatisch dorthin, wo sie gebraucht werden, ohne doppelte Eingabe.',
      'In Kombination mit einem KI-Chatbot oder Telefonassistenten entsteht ein durchgängiger Prozess: Anfragen werden erfasst, ins richtige System geleitet, bestätigt und nachverfolgt. So gehen keine Leads verloren – und Ihr Team hat den Kopf frei für die Arbeit, die wirklich zählt.',
      'Von unserem Standort in Groitzsch sind wir schnell in Halle – für Workshops, Prozessanalysen oder technische Einrichtung direkt bei Ihnen vor Ort.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in Hallenser Unternehmen am schnellsten automatisieren?',
        a: 'Typische Quick Wins sind die automatische Weiterleitung von Kontaktanfragen, Terminbestätigungen mit Erinnerungen, Angebotsversand nach Erstgespräch und Follow-up-Mails bei offenen Angeboten.',
      },
      {
        q: 'Muss ich meine bestehende Software in Halle wechseln?',
        a: 'Nein. Wir integrieren Ihre vorhandenen Systeme – ob Praxissoftware, CRM, Google Workspace oder Branchenlösung. Es geht um Verbindung, nicht um Ablösung.',
      },
      {
        q: 'Wie aufwendig ist die Einführung von Automatisierungen?',
        a: 'Wir starten mit einer gemeinsamen Analyse Ihrer Abläufe und setzen dann schrittweise um. Ein erster automatisierter Prozess kann oft innerhalb von ein bis zwei Wochen produktiv laufen.',
      },
      {
        q: 'Eignen sich Automatisierungen auch für kleine Betriebe in Halle?',
        a: 'Gerade kleine Teams profitieren am meisten, weil jede eingesparte Stunde direkt spürbar ist. Automatisierungen skalieren von einem einzelnen Workflow bis zum durchgängigen Prozess.',
      },
    ],
    highlights: [
      'Sofortige Entlastung bei Routineaufgaben in Praxis, Kanzlei und Handwerk',
      'Integration bestehender Systeme – kein Softwarewechsel nötig',
      'Durchgängige Prozesse von Anfrage bis Follow-up',
      'Persönliche Betreuung aus Groitzsch – rund 40 km von Halle',
    ],
  },

  'halle-saale.webseiten': {
    regionSlug: 'halle-saale',
    regionName: 'Halle (Saale)',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Halle (Saale) – Pixel Kraftwerk erstellt schnelle, suchmaschinenoptimierte Websites für den Mittelstand an der Saale.',
    intro:
      'Eine professionelle Webseite ist in Halle (Saale) längst kein Luxus mehr, sondern Grundvoraussetzung: Patienten suchen online nach Ärzten, Mandanten vergleichen Kanzleien, Auftraggeber aus der Chemiebranche prüfen Referenzen. Pixel Kraftwerk entwickelt Websites, die in Halle gefunden werden, Vertrauen aufbauen und Anfragen generieren.',
    paragraphs: [
      'Der Hallenser Markt ist wettbewerbsintensiv: Über 240.000 Einwohner, eine starke Universitäts- und Forschungslandschaft und eine diversifizierte Wirtschaft sorgen dafür, dass Kunden Anbieter online vergleichen, bevor sie den Hörer in die Hand nehmen. Ihre Webseite muss deshalb nicht nur gut aussehen, sondern auch schnell laden, mobil funktionieren und bei Google sichtbar sein.',
      'Wir entwickeln Webseiten, die exakt auf Ihre Zielgruppe in Halle zugeschnitten sind: Für eine Zahnarztpraxis am Rannischen Platz bedeutet das eine klare Terminbuchung, vertrauensbildende Elemente und lokale Sichtbarkeit. Für ein Ingenieurbüro am Weinberg Campus zählen Referenzprojekte, technische Kompetenz und eine professionelle Darstellung für Auftraggeber aus der Industrie.',
      'Technisch setzen wir auf moderne Frameworks, die Geschwindigkeit und Suchmaschinenfreundlichkeit von Grund auf mitbringen. Jede Seite wird mit strukturierten Daten (Schema.org), sauberem HTML und optimierten Ladezeiten ausgeliefert. Das Ergebnis: bessere Rankings in Google, schnellere Ladezeiten und mehr Anfragen aus Halle und dem Saalekreis.',
      'Auf Wunsch integrieren wir einen KI-Chatbot, ein Terminbuchungstool oder ein Kontaktformular mit Automatisierung – so wird Ihre Webseite nicht nur zur digitalen Visitenkarte, sondern zum aktiven Vertriebskanal.',
      'Von unserem Standort in Groitzsch betreuen wir zahlreiche Unternehmen in der Region. Ob Erstgespräch in Ihrem Büro in Halle, Content-Workshop per Videocall oder Übergabe mit Schulung – wir begleiten Sie persönlich durch den gesamten Prozess.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für ein Unternehmen in Halle?',
        a: 'Eine professionelle Unternehmenswebseite ist in der Regel innerhalb von vier bis acht Wochen fertig. Der genaue Zeitrahmen hängt von Umfang, Inhalten und gewünschten Funktionen ab.',
      },
      {
        q: 'Wird die Webseite auch für „Halle (Saale)" in Google gefunden?',
        a: 'Ja. Wir optimieren jede Seite gezielt für lokale Suchanfragen in Halle und im Saalekreis – mit passenden Keywords, strukturierten Daten und einem Google-Unternehmensprofil.',
      },
      {
        q: 'Kann ich die Webseite selbst bearbeiten?',
        a: 'Ja. Wir richten ein benutzerfreundliches CMS ein und schulen Sie in der Bedienung, sodass Sie Texte, Bilder und Angebote eigenständig pflegen können.',
      },
      {
        q: 'Was unterscheidet Pixel Kraftwerk von Webagenturen in Halle?',
        a: 'Wir kombinieren Webentwicklung mit KI-Chatbots, Telefonassistenten und Automatisierungen. So entsteht nicht nur eine Webseite, sondern ein digitaler Vertriebskanal, der Anfragen generiert und verarbeitet.',
      },
    ],
    highlights: [
      'Schnelle, mobiloptimierte Webseiten mit Top-Ladezeiten',
      'Lokale SEO-Optimierung für Halle (Saale) und den Saalekreis',
      'Optionale Integration von Chatbot, Terminbuchung und Automatisierung',
      'Persönliche Betreuung und Schulung aus der Region',
    ],
  },

  'halle-saale.seo-top-3': {
    regionSlug: 'halle-saale',
    regionName: 'Halle (Saale)',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Halle (Saale) – Pixel Kraftwerk bringt Ihre Webseite in die Top 3 bei Google für lokale Suchanfragen im Saalekreis.',
    intro:
      'Wer in Halle (Saale) nach einem Arzt, Handwerker oder Dienstleister sucht, beginnt bei Google. Die ersten drei Ergebnisse erhalten den Großteil der Klicks – wer dort nicht auftaucht, verliert potenzielle Kunden an die Konkurrenz. Pixel Kraftwerk bringt Hallenser Unternehmen gezielt in diese Top-Positionen.',
    paragraphs: [
      'Halle ist ein hart umkämpfter lokaler Markt: Mit über 240.000 Einwohnern und einer starken Unternehmenslandschaft konkurrieren viele Anbieter um dieselben Suchanfragen. „Zahnarzt Halle", „Steuerberater Halle Saale", „Elektriker Halle Neustadt" – wer bei diesen Begriffen nicht auf Seite 1 steht, existiert für viele Suchende schlicht nicht.',
      'Unsere SEO-Strategie für Hallenser Unternehmen beginnt mit einer fundierten Analyse: Welche Suchbegriffe nutzen Ihre potenziellen Kunden? Wie stark ist die Konkurrenz? Wo liegen schnelle Chancen? Darauf aufbauend optimieren wir Ihre Webseite technisch und inhaltlich – von der Seitenstruktur über Meta-Daten bis zu lokal relevantem Content.',
      'Ein zentraler Baustein ist Ihr Google-Unternehmensprofil. Wir optimieren es so, dass Sie im Local Pack (den drei Karteneinträgen über den organischen Ergebnissen) sichtbar werden. Bewertungen, Fotos, Öffnungszeiten und regelmäßige Updates sorgen dafür, dass Google Ihr Profil als relevant und aktuell einstuft.',
      'Für Hallenser Praxen und Kanzleien erstellen wir gezielt Inhalte, die Vertrauen aufbauen und Suchanfragen beantworten: Ratgebertexte, FAQ-Seiten und Leistungsbeschreibungen, die genau auf die Fragen Ihrer Zielgruppe zugeschnitten sind. So gewinnen Sie nicht nur Rankings, sondern auch qualifizierte Anfragen.',
      'SEO ist kein einmaliges Projekt, sondern ein fortlaufender Prozess. Wir begleiten Sie mit monatlichen Reports, Keyword-Monitoring und laufender Optimierung – damit Ihre Position in den Google-Ergebnissen stabil bleibt und weiter wächst.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Unternehmen in Halle in den Top 3 bei Google steht?',
        a: 'Erste Verbesserungen sind oft innerhalb von vier bis acht Wochen sichtbar. Top-3-Platzierungen bei wettbewerbsintensiven Begriffen wie „Zahnarzt Halle" können drei bis sechs Monate dauern.',
      },
      {
        q: 'Was kostet SEO für ein Unternehmen in Halle (Saale)?',
        a: 'Die Kosten richten sich nach Wettbewerbsumfeld und Umfang. Nach einer kostenlosen Erstanalyse erstellen wir ein transparentes Angebot mit klaren Leistungen und Zielen.',
      },
      {
        q: 'Kann ich SEO auch mit einer neuen Webseite von Pixel Kraftwerk kombinieren?',
        a: 'Ja, das ist sogar ideal. Wenn wir die Webseite von Anfang an suchmaschinenoptimiert aufbauen, erzielen Sie schneller Ergebnisse als bei nachträglicher Optimierung.',
      },
      {
        q: 'Funktioniert SEO auch für Nischenbranchen in Halle?',
        a: 'Gerade in Nischen sind die Chancen oft besonders gut, weil die Konkurrenz kleiner ist. Wir identifizieren die relevanten Suchbegriffe und positionieren Sie gezielt.',
      },
    ],
    highlights: [
      'Gezielte lokale SEO-Strategie für Halle (Saale) und den Saalekreis',
      'Optimierung von Google-Unternehmensprofil und Local Pack',
      'Monatliche Reports und kontinuierliche Optimierung',
      'Kombination mit Webseite, Chatbot und Automatisierung möglich',
    ],
  },

  /* ================================================================
   *  CHEMNITZ
   * ================================================================ */
  'chemnitz.ki-chatbots': {
    regionSlug: 'chemnitz',
    regionName: 'Chemnitz',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Chemnitz – Pixel Kraftwerk automatisiert Kundenkommunikation für Automotive-Zulieferer, Mittelstand und Kulturhauptstadt 2025.',
    intro:
      'Chemnitz, die Kulturhauptstadt Europas 2025, verbindet Industrietradition mit Aufbruchsstimmung. Rund 245.000 Einwohner, ein starker Automotive-Sektor und ein wachsender Mittelstand prägen die Stadt. Pixel Kraftwerk unterstützt Chemnitzer Unternehmen mit KI-Chatbots, die Kundenanfragen automatisiert beantworten und Vertriebsprozesse beschleunigen.',
    paragraphs: [
      'Die Chemnitzer Wirtschaft ist stark industriell geprägt: Zahlreiche Zulieferer der Automobilbranche, Maschinenbauer und Technologieunternehmen haben hier ihren Sitz. Gleichzeitig wächst der Dienstleistungssektor – Agenturen, Berater, Praxen und Handwerksbetriebe profitieren vom Aufschwung rund um den Kulturhauptstadt-Titel. Überall dort entstehen Anfragen, die ein KI-Chatbot zuverlässig bearbeiten kann.',
      'Für Automotive-Zulieferer in Chemnitz kann ein Chatbot Anfragen zu Lieferzeiten, Produktspezifikationen und Kontaktdaten automatisiert beantworten – intern wie extern. Für eine Physiotherapie-Praxis in Bernsdorf oder einen Friseursalon am Brühl übernimmt der Chatbot die Terminvereinbarung. Das spart Zeit und verbessert die Erreichbarkeit.',
      'Wir richten den Chatbot individuell ein: Tonalität, Dialoge und Anbindungen passen wir an Ihr Unternehmen an. Ob formeller B2B-Ton für ein Maschinenbauunternehmen oder lockere Ansprache für ein Café am Kaßberg – der Chatbot spricht die Sprache Ihrer Kunden.',
      'Die technische Integration erfolgt auf Ihrer bestehenden Website. Auf Wunsch verbinden wir den Chatbot mit CRM, ERP oder Kalender, sodass erfasste Daten ohne Medienbruch weiterverarbeitet werden. WhatsApp- und Messenger-Anbindung sind ebenfalls möglich.',
      'Von Groitzsch aus erreichen wir Chemnitz in rund einer Stunde. Persönliche Termine für Workshops, Einrichtung oder Schulung sind jederzeit möglich – ob in Ihrem Büro, im Technologiezentrum oder per Videocall.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot auch für Industrieunternehmen in Chemnitz?',
        a: 'Ja. Chatbots können sowohl externe Kundenanfragen als auch interne Prozesse unterstützen – etwa bei der Vorqualifizierung von Angebotsanfragen oder der Bereitstellung technischer Produktinformationen.',
      },
      {
        q: 'Kann der Chatbot auf Deutsch und Englisch kommunizieren?',
        a: 'Ja. Für Chemnitzer Unternehmen mit internationalen Kunden richten wir den Chatbot mehrsprachig ein.',
      },
      {
        q: 'Wie schnell ist ein KI-Chatbot für mein Unternehmen in Chemnitz einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel innerhalb von zwei bis vier Wochen live. Die genaue Dauer hängt von Umfang und Integrationen ab.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für einen Betrieb in Chemnitz?',
        a: 'Die Kosten richten sich nach Umfang und gewünschten Anbindungen. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Automatisierte Kundenkommunikation für Industrie und Mittelstand in Chemnitz',
      'Mehrsprachig einsetzbar – ideal für Automotive-Zulieferer',
      'Integration in CRM, ERP und Kalender',
      'Persönliche Betreuung aus Groitzsch – rund 75 km entfernt',
    ],
  },

  'chemnitz.telefonassistenten': {
    regionSlug: 'chemnitz',
    regionName: 'Chemnitz',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Chemnitz – Pixel Kraftwerk sichert Ihre Erreichbarkeit im Automotive-Mittelstand und Dienstleistungssektor.',
    intro:
      'Im Chemnitzer Mittelstand ist das Telefon weiterhin ein zentraler Kontaktkanal. Ob Automotive-Zulieferer mit Anfragen zu Lieferterminen, Handwerksbetrieb mit Auftragsanfragen oder Praxis mit Terminwünschen – verpasste Anrufe bedeuten verpasste Chancen. Unser Telefonassistent sorgt dafür, dass kein Anruf ins Leere läuft.',
    paragraphs: [
      'Chemnitz ist eine Stadt des produzierenden Gewerbes: VW-Zulieferer, Maschinenbauer und Werkzeughersteller bilden das wirtschaftliche Rückgrat. Diese Unternehmen erhalten oft Anfragen, die schnell bearbeitet werden müssen – Liefertermine, Reklamationen, technische Rückfragen. Der Telefonassistent erfasst diese Anliegen strukturiert und leitet sie an die richtige Ansprechperson weiter.',
      'Für Dienstleister und Handwerksbetriebe im Chemnitzer Stadtgebiet – vom Sanitärbetrieb auf dem Sonnenberg bis zum Steuerberater am Markt – bedeutet der Telefonassistent vor allem eines: Entlastung. Anrufe werden professionell angenommen, auch wenn das Team in Terminen oder auf Baustellen gebunden ist.',
      'Wir definieren gemeinsam mit Ihnen die Gesprächslogik: Welche Informationen müssen erfasst werden? Wann wird weitergeleitet? Wie werden dringende Fälle priorisiert? Der Assistent arbeitet nach genau diesen Regeln – verlässlich und konsistent.',
      'Optional kombinieren wir den Telefonassistenten mit einem KI-Chatbot, der digitale Anfragen bearbeitet. So decken Sie alle Kontaktkanäle ab – ohne zusätzliches Personal.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch technische Anfragen für Chemnitzer Industrieunternehmen aufnehmen?',
        a: 'Ja. Wir konfigurieren den Assistenten so, dass er branchenspezifische Rückfragen stellt und alle relevanten Details erfasst – von Artikelnummern bis zu Dringlichkeitsstufen.',
      },
      {
        q: 'Funktioniert der Telefonassistent auch außerhalb der Geschäftszeiten?',
        a: 'Ja, rund um die Uhr. Gerade für Handwerksbetriebe in Chemnitz, die tagsüber auf Baustellen sind, ist die 24/7-Erreichbarkeit ein großer Vorteil.',
      },
      {
        q: 'Wie aufwendig ist die Einrichtung eines Telefonassistenten in Chemnitz?',
        a: 'Der größte Aufwand liegt im gemeinsamen Definieren der Abläufe. Die technische Einrichtung übernehmen wir – ein erster Assistent ist in zwei bis drei Wochen einsatzbereit.',
      },
      {
        q: 'Lässt sich der Telefonassistent mit unserer ERP-Software verbinden?',
        a: 'Ja. Wir integrieren den Assistenten mit ERP, CRM und Kalendersystemen, damit Daten ohne Medienbruch weiterverarbeitet werden.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Industrie und Handwerk in Chemnitz',
      'Strukturierte Erfassung auch bei technischen Anfragen',
      'Integration in ERP, CRM und Branchensoftware',
      'Persönliche Einrichtung und Support aus Groitzsch',
    ],
  },

  'chemnitz.automatisierungen': {
    regionSlug: 'chemnitz',
    regionName: 'Chemnitz',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Chemnitz – Pixel Kraftwerk digitalisiert manuelle Prozesse im Automotive-Mittelstand und Dienstleistungssektor.',
    intro:
      'Chemnitzer Unternehmen – ob Automotive-Zulieferer, Maschinenbauer oder Dienstleister – kämpfen mit denselben Zeitfressern: manuelle Dateneingaben, händische Angebotsversendung und unkoordinierte Follow-ups. Pixel Kraftwerk automatisiert diese Abläufe und gibt Ihrem Team die Zeit zurück, die für wertschöpfende Arbeit fehlt.',
    paragraphs: [
      'Im Chemnitzer Mittelstand sind Prozesse oft historisch gewachsen: Eine Excel-Tabelle hier, eine E-Mail dort, Zwischenstände im Kopf des Inhabers. Das funktioniert – bis ein Mitarbeiter krank wird, die Auftragslage anzieht oder ein neuer Kunde schnell ein Angebot braucht. Automatisierungen schaffen hier belastbare Strukturen, ohne dass Sie alles auf einmal umstellen müssen.',
      'Typische Anwendungsfälle für Chemnitzer Unternehmen: Eingehende Angebotsanfragen werden automatisch im CRM erfasst und dem Vertrieb zugewiesen. Auftragsbestätigungen gehen per Mail raus, sobald der Status im ERP wechselt. Offene Angebote erhalten nach definierten Fristen automatische Nachfass-Mails. Kundenbewertungen werden nach Projektabschluss automatisch angefragt.',
      'Wir arbeiten mit Ihren bestehenden Systemen: ERP, CRM, Mailprogramm, Kalender – wir verbinden diese Tools, statt sie zu ersetzen. Die Integration erfolgt über standardisierte Schnittstellen und wird von uns eingerichtet und getestet.',
      'In Kombination mit einem KI-Chatbot oder Telefonassistenten entsteht ein durchgängiger Prozess: Anfrage erfassen, zuweisen, bestätigen, nachfassen – ohne manuellen Zwischenschritt.',
      'Von Groitzsch aus betreuen wir Chemnitzer Unternehmen persönlich. Ob Prozessanalyse in Ihrem Büro oder Remote-Workshop – wir finden die passende Form der Zusammenarbeit.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in Chemnitzer Industrieunternehmen am besten automatisieren?',
        a: 'Besonders wirksam sind Automatisierungen bei Angebotsworkflows, Auftragsbestätigungen, Follow-ups, Kundenfeedback und der Synchronisation zwischen CRM und ERP.',
      },
      {
        q: 'Funktioniert die Automatisierung auch mit unserer Branchensoftware?',
        a: 'In den meisten Fällen ja. Wir integrieren gängige ERP-, CRM- und Branchenlösungen über APIs oder Middleware-Plattformen.',
      },
      {
        q: 'Wie lange dauert die Einführung einer Automatisierung?',
        a: 'Ein erster automatisierter Workflow kann oft innerhalb von ein bis zwei Wochen produktiv laufen. Komplexere Prozesse benötigen entsprechend mehr Zeit.',
      },
      {
        q: 'Eignen sich Automatisierungen auch für kleine Betriebe in Chemnitz?',
        a: 'Ja. Gerade kleine Teams profitieren am meisten, weil eingesparte Stunden sofort spürbar sind.',
      },
      {
        q: 'Können wir mit einem einzelnen Workflow starten und später erweitern?',
        a: 'Genau so empfehlen wir es. Starten Sie mit dem Prozess, der am meisten Zeit kostet, und erweitern Sie schrittweise.',
      },
    ],
    highlights: [
      'Automatisierung von Angebots-, Auftrags- und Follow-up-Prozessen',
      'Integration bestehender ERP- und CRM-Systeme',
      'Schrittweise Einführung – vom einzelnen Workflow bis zum durchgängigen Prozess',
      'Persönliche Betreuung aus Groitzsch für Chemnitzer Unternehmen',
    ],
  },

  'chemnitz.webseiten': {
    regionSlug: 'chemnitz',
    regionName: 'Chemnitz',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Chemnitz – Pixel Kraftwerk erstellt schnelle, SEO-optimierte Websites für die Kulturhauptstadt Europas.',
    intro:
      'Als Kulturhauptstadt Europas 2025 rückt Chemnitz in den internationalen Fokus – und mit der Stadt auch die lokalen Unternehmen. Eine professionelle, schnelle Webseite ist jetzt wichtiger denn je: Sie repräsentiert Ihr Unternehmen gegenüber Kunden aus der Region, aus ganz Deutschland und aus Europa.',
    paragraphs: [
      'Der Kulturhauptstadt-Titel bringt Aufmerksamkeit – und neue Anforderungen an die digitale Präsenz. Touristen, Kulturinteressierte und potenzielle Geschäftspartner informieren sich online über Chemnitzer Unternehmen. Eine Webseite, die langsam lädt, nicht mobiloptimiert ist oder bei Google nicht gefunden wird, verschenkt dieses Potenzial.',
      'Wir entwickeln Webseiten, die zum Chemnitzer Auftritt passen: Für ein Maschinenbauunternehmen in Siegmar zählen technische Kompetenz und klare Referenzdarstellung. Für ein Restaurant am Kaßberg sind ansprechende Bilder, die Speisekarte und eine einfache Reservierung entscheidend. Für einen Handwerksbetrieb in Schönau geht es um Vertrauensaufbau und schnelle Kontaktaufnahme.',
      'Technisch setzen wir auf moderne Frameworks mit integrierten Performance- und SEO-Vorteilen. Strukturierte Daten, sauberes HTML und optimierte Bilder sorgen dafür, dass Ihre Webseite bei Google für relevante Chemnitzer Suchanfragen erscheint.',
      'Auf Wunsch integrieren wir einen KI-Chatbot für automatisierte Kundenkommunikation, ein Terminbuchungstool oder Automatisierungen, die Anfragen direkt ins richtige System leiten. So wird Ihre Webseite zum aktiven Vertriebskanal.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 75 Kilometer von Chemnitz entfernt. Ob Erstgespräch in Chemnitz, Konzeptworkshop per Videocall oder Vor-Ort-Termin – wir sind flexibel und persönlich erreichbar.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für ein Chemnitzer Unternehmen?',
        a: 'Eine professionelle Unternehmenswebseite ist in der Regel innerhalb von vier bis acht Wochen fertig. Komplexere Projekte mit Shop oder Mehrsprachigkeit benötigen entsprechend mehr Zeit.',
      },
      {
        q: 'Wird meine Webseite für Chemnitzer Suchanfragen optimiert?',
        a: 'Ja. Wir optimieren jede Seite für lokale Keywords wie „Zahnarzt Chemnitz", „Maschinenbau Chemnitz" oder ähnliche Begriffe, die Ihre Zielgruppe nutzt.',
      },
      {
        q: 'Kann die Webseite auch mehrsprachig sein – passend zur Kulturhauptstadt?',
        a: 'Ja. Wir erstellen auf Wunsch mehrsprachige Webseiten, beispielsweise Deutsch und Englisch, um auch internationale Besucher und Geschäftspartner anzusprechen.',
      },
      {
        q: 'Was passiert nach dem Launch – betreuen Sie die Webseite auch danach?',
        a: 'Ja. Wir bieten laufende Betreuung mit Updates, Sicherheit und Content-Pflege an. Auf Wunsch übernehmen wir auch die fortlaufende SEO-Optimierung.',
      },
    ],
    highlights: [
      'Moderne, schnelle Webseiten für den Chemnitzer Mittelstand',
      'Lokale SEO-Optimierung für Chemnitz und Umgebung',
      'Optionale Integration von Chatbot, Terminbuchung und Automatisierung',
      'Mehrsprachig möglich – ideal für die Kulturhauptstadt Europas',
    ],
  },

  'chemnitz.seo-top-3': {
    regionSlug: 'chemnitz',
    regionName: 'Chemnitz',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Chemnitz – Pixel Kraftwerk bringt Ihren Betrieb in die Top 3 bei Google. Mehr Sichtbarkeit in der Kulturhauptstadt Europas.',
    intro:
      'In Chemnitz suchen potenzielle Kunden online – ob nach Handwerkern, Ärzten, Restaurants oder Industriedienstleistern. Die ersten drei Google-Ergebnisse erhalten den Großteil der Klicks. Mit dem Kulturhauptstadt-Titel wächst die Aufmerksamkeit – und damit die Chance, über Google neue Kunden zu gewinnen.',
    paragraphs: [
      'Chemnitz bietet für lokale SEO ein interessantes Umfeld: groß genug für signifikantes Suchvolumen, aber weniger hart umkämpft als Leipzig oder Dresden. Das bedeutet: Mit der richtigen Strategie können Chemnitzer Unternehmen vergleichsweise schnell Top-Positionen erobern.',
      'Unsere SEO-Strategie beginnt mit einer Analyse des Chemnitzer Suchmarkts: Welche Begriffe nutzen Ihre Kunden? Wie positioniert sich die Konkurrenz? Wo liegen Lücken, die Sie besetzen können? Darauf aufbauend optimieren wir Ihre Webseite technisch und inhaltlich.',
      'Das Google-Unternehmensprofil ist für lokale Sichtbarkeit in Chemnitz zentral. Wir optimieren es für das Local Pack – die prominenten Karteneinträge über den organischen Suchergebnissen. Bewertungsmanagement, regelmäßige Beiträge und aktuelle Informationen stärken Ihr Profil.',
      'Für Chemnitzer Unternehmen erstellen wir gezielt Inhalte, die lokale Suchanfragen beantworten: Ratgebertexte, Leistungsseiten und FAQ-Bereiche, die sowohl Nutzer als auch Google überzeugen. Lokale Signale – Erwähnungen in Chemnitzer Medien, Branchenverzeichnissen und Partnerseiten – stärken Ihre Autorität zusätzlich.',
      'SEO ist ein Marathon, kein Sprint. Wir begleiten Sie mit monatlichen Reports, laufender Optimierung und strategischer Beratung, damit Ihre Position in den Suchergebnissen langfristig stabil bleibt.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis ich in Chemnitz bei Google auf Seite 1 stehe?',
        a: 'Erste Verbesserungen sehen wir oft innerhalb von vier bis acht Wochen. Top-3-Platzierungen bei umkämpften Begriffen können drei bis sechs Monate dauern.',
      },
      {
        q: 'Lohnt sich SEO für kleine Betriebe in Chemnitz?',
        a: 'Gerade für kleine Betriebe: In Nischenbranchen ist die Konkurrenz oft gering, sodass Top-Platzierungen schnell erreichbar sind.',
      },
      {
        q: 'Kann ich SEO mit dem Kulturhauptstadt-Effekt kombinieren?',
        a: 'Ja. Der erhöhte Suchverkehr rund um die Kulturhauptstadt bietet eine hervorragende Gelegenheit, lokale Sichtbarkeit aufzubauen und neue Kundengruppen zu erreichen.',
      },
      {
        q: 'Was passiert, wenn ich mit SEO aufhöre?',
        a: 'Rankings sind nicht sofort weg, können aber über Monate sinken, wenn die Konkurrenz aktiv bleibt. Deshalb empfehlen wir eine laufende Betreuung.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie speziell für den Chemnitzer Markt',
      'Optimierung von Google-Unternehmensprofil und Local Pack',
      'Content-Erstellung mit lokalem Bezug zu Chemnitz',
      'Monatliche Reports und laufende Optimierung',
    ],
  },

  /* ================================================================
   *  JENA
   * ================================================================ */
  'jena.ki-chatbots': {
    regionSlug: 'jena',
    regionName: 'Jena',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Jena – Pixel Kraftwerk automatisiert Kundenkommunikation für Optik, Technologie, Start-ups und den Mittelstand an der Saale.',
    intro:
      'Jena ist Deutschlands Optik- und Photonik-Hauptstadt: Carl Zeiss, Schott und eine lebendige Start-up-Szene rund um die Friedrich-Schiller-Universität prägen die Stadt. Rund 110.000 Einwohner, eine hohe Innovationsdichte und ein wachsender Dienstleistungssektor sorgen dafür, dass digitale Effizienz kein Nice-to-have ist, sondern Wettbewerbsvorteil.',
    paragraphs: [
      'In Jena trifft Hightech auf Mittelstand: Neben den Großunternehmen der Optikbranche gibt es zahlreiche Tech-Start-ups, Ingenieurbüros, Praxen und Handwerksbetriebe. Allen gemeinsam ist ein hoher Anspruch an Qualität – auch in der Kundenkommunikation. Ein KI-Chatbot unterstützt genau hier: Er beantwortet Standardanfragen sofort, qualifiziert Leads vor und gibt Ihrem Team Raum für die Aufgaben, die menschliches Know-how erfordern.',
      'Für Jenaer Tech-Unternehmen und Start-ups kann der Chatbot Produktfragen beantworten, Demo-Termine vorschlagen und technische Dokumentation bereitstellen. Für eine Augenarztpraxis am Holzmarkt übernimmt er Terminanfragen und klärt Versicherungsfragen. Für ein Café am Paradies-Ufer nimmt er Reservierungen entgegen.',
      'Die Jenaer Start-up-Szene schätzt schnelle Umsetzung: Deshalb starten wir mit einem fokussierten Use Case und erweitern iterativ. Kein überladenes Projekt, sondern ein Chatbot, der in zwei bis vier Wochen produktiv arbeitet und danach wächst.',
      'Technisch lässt sich der Chatbot in jede Website einbinden und mit CRM, Kalender oder Ticketsystem verbinden. Für internationale Kunden – in der Optikbranche keine Seltenheit – ist auch eine mehrsprachige Konfiguration möglich.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 75 Kilometer von Jena entfernt. Persönliche Termine in Jena – ob am Campus, im Technologie- und Innovationspark oder in Ihrem Büro – sind problemlos möglich.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für Tech-Start-ups in Jena?',
        a: 'Gerade für Start-ups ist ein Chatbot wertvoll: Er skaliert die Kundenkommunikation, ohne dass Sie sofort ein Support-Team aufbauen müssen. Und er liefert Daten darüber, welche Fragen Ihre Kunden bewegen.',
      },
      {
        q: 'Kann der Chatbot technische Produktanfragen für Jenaer Optik-Unternehmen bearbeiten?',
        a: 'Ja. Wir trainieren den Chatbot mit Ihrer Produktdokumentation, sodass er technische Basisanfragen selbstständig beantwortet und komplexe Fälle an Ihr Fachteam weiterleitet.',
      },
      {
        q: 'Wie schnell ist ein KI-Chatbot für mein Unternehmen in Jena einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel innerhalb von zwei bis vier Wochen live.',
      },
      {
        q: 'Unterstützt der Chatbot auch Englisch für internationale Kunden?',
        a: 'Ja. Wir richten den Chatbot mehrsprachig ein, sodass er sowohl deutsche als auch englischsprachige Anfragen bearbeiten kann.',
      },
    ],
    highlights: [
      'KI-Chatbots für Optik, Tech-Start-ups und Mittelstand in Jena',
      'Schnelle Umsetzung im Start-up-Modus – produktiv in 2–4 Wochen',
      'Mehrsprachig für internationale Kunden der Jenaer Hightech-Branche',
      'Persönliche Betreuung aus Groitzsch – rund 75 km entfernt',
    ],
  },

  'jena.telefonassistenten': {
    regionSlug: 'jena',
    regionName: 'Jena',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Jena – Pixel Kraftwerk sichert Ihre Erreichbarkeit in Praxis, Start-up und Mittelstand der Optik-Stadt.',
    intro:
      'In Jena verbinden sich universitäres Umfeld, Hightech-Industrie und gewachsener Mittelstand. Ob Forschungsinstitut, Start-up oder Handwerksbetrieb – Anrufe kommen oft genau dann, wenn keine Hand frei ist. Unser Telefonassistent nimmt zuverlässig ab, erfasst Anliegen und leitet sie strukturiert weiter.',
    paragraphs: [
      'Jenaer Praxen im Zentrum, rund um den Holzmarkt oder in Lobeda, erleben täglich ein hohes Telefonaufkommen. Patientinnen und Patienten fragen nach freien Terminen, Rezepten oder Überweisungen. Der Telefonassistent erfasst diese Anliegen strukturiert, sodass Ihr Praxisteam sie geordnet abarbeiten kann, ohne zwischen Behandlung und Telefon wechseln zu müssen.',
      'Für Jenaer Start-ups, die noch kein dediziertes Sekretariat haben, ist der Telefonassistent besonders wertvoll: Er projiziert Professionalität nach außen, während das kleine Team intern an Produktentwicklung oder Kundengewinnung arbeitet. Investoren- und Partnermanfragen werden zuverlässig erfasst.',
      'Handwerksbetriebe und technische Dienstleister in Jena profitieren von der 24/7-Erreichbarkeit: Wer tagsüber auf Montage in Weimar oder Erfurt ist, verpasst keinen Auftrag mehr. Der Assistent dokumentiert alles und leitet Dringendes sofort per Push-Nachricht weiter.',
      'In Kombination mit einem KI-Chatbot auf Ihrer Website entsteht ein System, das alle Kontaktkanäle abdeckt – Telefon, Web und Messenger. Automatisierungen sorgen dafür, dass erfasste Daten ins richtige System fließen.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent Anrufe auf Englisch entgegennehmen?',
        a: 'Ja. Für Jenaer Unternehmen mit internationalen Kontakten konfigurieren wir den Assistenten mehrsprachig.',
      },
      {
        q: 'Wie reagieren Anrufende auf den Telefonassistenten?',
        a: 'Entscheidend ist ein professioneller, freundlicher Auftritt. Wenn Anrufende schnell eine Rückmeldung erhalten, wird der Assistent in der Regel positiv aufgenommen.',
      },
      {
        q: 'Lässt sich der Telefonassistent mit unserer Praxissoftware verbinden?',
        a: 'Ja. Wir integrieren den Assistenten mit gängiger Praxis- und Branchensoftware sowie Kalender- und CRM-Systemen.',
      },
      {
        q: 'Was kostet ein Telefonassistent für ein Start-up in Jena?',
        a: 'Die Kosten richten sich nach Umfang und Anforderungen. Wir bieten flexible Modelle, die auch für junge Unternehmen passen.',
      },
    ],
    highlights: [
      'Professionelle Erreichbarkeit für Start-ups ohne eigenes Sekretariat',
      'Strukturierte Anruferfassung für Praxen und Kanzleien in Jena',
      '24/7-Erreichbarkeit für Handwerk und technische Dienstleister',
      'Mehrsprachig konfigurierbar für internationale Kontakte',
    ],
  },

  'jena.automatisierungen': {
    regionSlug: 'jena',
    regionName: 'Jena',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Jena – Pixel Kraftwerk beseitigt manuelle Routineaufgaben in Start-ups, Praxen und Technologieunternehmen.',
    intro:
      'Jenaer Unternehmen sind innovativ – doch in vielen Büros laufen Routineprozesse noch manuell: Anfragen werden kopiert, Termine händisch bestätigt, Follow-ups vergessen. Pixel Kraftwerk automatisiert genau diese Abläufe, damit Ihr Team sich auf das konzentrieren kann, was Jena stark macht: Innovation und Qualität.',
    paragraphs: [
      'In der Jenaer Hightech-Landschaft zählt Geschwindigkeit: Start-ups müssen Leads schnell qualifizieren, Ingenieurbüros Angebote zeitnah versenden, Praxen Terminbestätigungen effizient abwickeln. Überall dort, wo Standardprozesse manuell laufen, entstehen Verzögerungen, die im Wettbewerb den Unterschied machen können.',
      'Typische Automatisierungen für Jenaer Unternehmen: Kontaktanfragen von der Website werden sofort im CRM erfasst und dem richtigen Ansprechpartner zugewiesen. Demo-Anfragen bei Tech-Start-ups lösen automatisch eine Kalenderbuchung und eine Willkommens-Mail aus. Offene Angebote erhalten nach drei Tagen ein automatisches Follow-up.',
      'Wir arbeiten mit Ihren bestehenden Tools: Ob Notion, HubSpot, Google Workspace, Branchensoftware oder eine individuelle Tech-Stack – wir verbinden die Systeme über APIs und Middleware, ohne dass Sie etwas ablösen müssen.',
      'In Kombination mit KI-Chatbot und Telefonassistent entsteht ein durchgängiger Prozess: Anfrage erfassen, zuweisen, bestätigen, nachfassen – alles automatisch und transparent.',
      'Von Groitzsch aus sind wir in rund einer Stunde in Jena. Prozessanalysen, Workshops und Einrichtung machen wir gern persönlich – ob bei Ihnen im Büro am Beutenberg Campus oder im Technologie- und Innovationspark.',
    ],
    faqs: [
      {
        q: 'Welche Automatisierungen eignen sich für Jenaer Start-ups?',
        a: 'Besonders wertvoll sind Lead-Qualifizierung, Demo-Buchung, Onboarding-Sequenzen und automatisiertes Kundenfeedback – alles, was den Vertrieb ohne zusätzliches Personal skaliert.',
      },
      {
        q: 'Funktionieren Automatisierungen auch mit unserem individuellen Tech-Stack?',
        a: 'In den meisten Fällen ja. Wir integrieren über APIs, Webhooks und Middleware-Plattformen wie Make oder n8n.',
      },
      {
        q: 'Wie schnell ist eine erste Automatisierung einsatzbereit?',
        a: 'Ein erster automatisierter Workflow kann oft innerhalb von ein bis zwei Wochen produktiv laufen.',
      },
      {
        q: 'Kann ich Automatisierungen schrittweise einführen?',
        a: 'Ja. Wir empfehlen, mit dem Prozess zu starten, der am meisten Zeit frisst, und dann schrittweise zu erweitern.',
      },
    ],
    highlights: [
      'Automatisierung von Lead-Qualifizierung und Vertriebsprozessen',
      'Integration bestehender Tools – kein Systemwechsel nötig',
      'Schnelle Umsetzung im agilen Start-up-Tempo',
      'Persönliche Betreuung aus Groitzsch für Jenaer Unternehmen',
    ],
  },

  'jena.webseiten': {
    regionSlug: 'jena',
    regionName: 'Jena',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Jena – Pixel Kraftwerk erstellt schnelle, SEO-optimierte Websites für Optik-Stadt und Tech-Standort.',
    intro:
      'Jena ist ein Standort, der Innovation ausstrahlt – und das sollte auch Ihre Webseite tun. Ob Start-up aus dem Ernst-Abbe-Hochschulumfeld, Ingenieurbüro im Technologiepark oder Praxis im Stadtzentrum: Ihre Website ist oft der erste Kontaktpunkt für Kunden, Partner und Investoren.',
    paragraphs: [
      'In einer Stadt mit hoher Innovationsdichte wie Jena erwarten Besucher eine professionelle digitale Präsenz. Eine langsame, veraltete oder schlecht auffindbare Website wirkt wie ein Widerspruch zum Standortimage. Wir entwickeln Webseiten, die technisch auf der Höhe sind und inhaltlich überzeugen.',
      'Für Jenaer Tech-Unternehmen zählen klare Produktkommunikation, technische Glaubwürdigkeit und internationale Ansprache. Für eine Arztpraxis am Teichgraben sind Vertrauen, Erreichbarkeit und einfache Terminbuchung entscheidend. Für ein Café am Markt geht es um Atmosphäre, Speisekarte und Öffnungszeiten. Wir passen jede Website exakt an die Anforderungen an.',
      'Technisch setzen wir auf Frameworks, die Performance und SEO von Grund auf mitbringen. Jede Seite wird mit strukturierten Daten, optimierten Bildern und sauberem Code ausgeliefert. Das Ergebnis: schnelle Ladezeiten, gute Rankings und eine professionelle Nutzererfahrung auf allen Geräten.',
      'Auf Wunsch integrieren wir KI-Chatbot, Terminbuchung oder Kontaktformulare mit Automatisierung – damit Ihre Webseite nicht nur informiert, sondern aktiv Anfragen generiert und verarbeitet.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für ein Jenaer Unternehmen?',
        a: 'Eine professionelle Unternehmenswebseite ist in vier bis acht Wochen fertig. Für Start-ups mit MVP-Ansatz geht es oft schneller.',
      },
      {
        q: 'Wird die Webseite für Jenaer Suchanfragen optimiert?',
        a: 'Ja. Wir optimieren für lokale Keywords wie „Optiker Jena", „Zahnarzt Jena" oder branchenspezifische Begriffe.',
      },
      {
        q: 'Kann die Webseite auch Englisch sein – für internationale Kunden?',
        a: 'Ja. Gerade für Jenaer Tech-Unternehmen und die Optikbranche ist eine englischsprachige oder zweisprachige Website oft sinnvoll.',
      },
      {
        q: 'Kann ich die Webseite danach selbst pflegen?',
        a: 'Ja. Wir richten ein benutzerfreundliches CMS ein und schulen Sie. Auf Wunsch übernehmen wir die laufende Pflege.',
      },
    ],
    highlights: [
      'Moderne, performante Webseiten für den Jenaer Tech-Standort',
      'Lokale SEO-Optimierung für Jena und Umgebung',
      'Mehrsprachig möglich für internationale Zielgruppen',
      'Integration von Chatbot, Terminbuchung und Automatisierung',
    ],
  },

  'jena.seo-top-3': {
    regionSlug: 'jena',
    regionName: 'Jena',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Jena – Pixel Kraftwerk bringt Ihre Webseite in die Top 3 bei Google. Mehr Sichtbarkeit in der Optik- und Technologiestadt.',
    intro:
      'Jena ist kompakt, aber wettbewerbsintensiv: In einer Stadt mit 110.000 Einwohnern und hoher Innovationsdichte suchen Kunden gezielt online nach Anbietern. Wer bei Google nicht auf Seite 1 steht, verliert potenzielle Kunden an die Konkurrenz – ob im Gesundheitswesen, der Techbranche oder im Handwerk.',
    paragraphs: [
      'Die Besonderheit des Jenaer Markts: Kompakte Stadtgröße bedeutet überschaubaren Wettbewerb bei vielen lokalen Suchbegriffen. Gleichzeitig ist die Zielgruppe technikaffin und recherchiert online gründlich. Wer hier mit gutem Content und technisch sauberer Website antritt, kann schnell Top-Positionen erreichen.',
      'Unsere SEO-Strategie für Jenaer Unternehmen beginnt mit einer Keyword-Analyse: Welche Begriffe nutzen Ihre potenziellen Kunden? „Augenarzt Jena", „IT-Dienstleister Jena", „Friseur Jena Zentrum" – wir identifizieren die relevanten Suchbegriffe und die dahinterstehenden Suchintentionen.',
      'Ihr Google-Unternehmensprofil ist der Schlüssel zur lokalen Sichtbarkeit. Wir optimieren es für das Local Pack und sorgen mit Bewertungsmanagement, aktuellen Fotos und regelmäßigen Updates dafür, dass Google Ihr Unternehmen als relevant einstuft.',
      'Für Jenaer Tech-Unternehmen mit überregionalem Einzugsgebiet erweitern wir die SEO-Strategie über den lokalen Fokus hinaus: Fachcontent, der branchenspezifische Fragen beantwortet, stärkt Ihre Sichtbarkeit auch bei deutschlandweiten oder internationalen Suchanfragen.',
      'Wir begleiten Sie mit monatlichen Reports, Ranking-Monitoring und laufender Optimierung. SEO ist ein fortlaufender Prozess – und wir sorgen dafür, dass Ihre Position stabil bleibt.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Unternehmen in Jena bei Google in den Top 3 steht?',
        a: 'Bei moderatem Wettbewerb sehen wir oft innerhalb von sechs bis zwölf Wochen deutliche Verbesserungen. Top-3-Platzierungen bei umkämpfteren Begriffen können drei bis sechs Monate dauern.',
      },
      {
        q: 'Lohnt sich SEO für Jenaer Start-ups?',
        a: 'Ja. Gerade in der Frühphase hilft SEO, organisch Sichtbarkeit aufzubauen, statt sich ausschließlich auf bezahlte Werbung zu verlassen.',
      },
      {
        q: 'Kann ich lokales SEO mit überregionaler Sichtbarkeit kombinieren?',
        a: 'Ja. Für Tech-Unternehmen und Optik-Zulieferer in Jena kombinieren wir lokale und überregionale SEO-Strategien.',
      },
      {
        q: 'Was kostet SEO für ein Unternehmen in Jena?',
        a: 'Die Kosten hängen von Wettbewerbsumfeld und Zielsetzung ab. Nach einer kostenlosen Erstanalyse erstellen wir ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für den kompakten, wettbewerbsintensiven Jenaer Markt',
      'Optimierung von Google-Unternehmensprofil und Local Pack',
      'Kombinierbar mit überregionaler SEO für Tech- und Optik-Branche',
      'Monatliche Reports und laufende Optimierung',
    ],
  },

  /* ================================================================
   *  GERA
   * ================================================================ */
  'gera.ki-chatbots': {
    regionSlug: 'gera',
    regionName: 'Gera',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Gera – Pixel Kraftwerk automatisiert Kundenkommunikation für Dienstleister, Praxen und Mittelstand in Ostthüringen.',
    intro:
      'Gera ist mit rund 93.000 Einwohnern das wirtschaftliche Zentrum Ostthüringens. Als Dienstleistungs- und Versorgungsstadt für die Region stehen Geraer Unternehmen vor der Herausforderung, mit begrenzten Ressourcen ein breites Einzugsgebiet zu bedienen. Ein KI-Chatbot von Pixel Kraftwerk hilft, Anfragen rund um die Uhr zu bearbeiten, ohne zusätzliches Personal einzustellen.',
    paragraphs: [
      'Die digitale Wettbewerbsdichte in Gera ist moderat – das ist eine Chance. Viele Unternehmen in der Stadt setzen noch auf klassische Kommunikationswege. Wer jetzt einen KI-Chatbot einsetzt, verschafft sich einen spürbaren Vorsprung: schnellere Reaktionszeiten, professionellere Erstansprache und eine Erreichbarkeit, die rund um die Uhr funktioniert.',
      'Für Arztpraxen und MVZ in Gera – ob am Markt, in Lusan oder in Bieblach – übernimmt der Chatbot Terminanfragen, klärt Versicherungsfragen und erfasst Symptome vorab. Für Handwerksbetriebe, die Kunden von Gera bis Altenburg und Greiz bedienen, qualifiziert er Auftragsanfragen und dokumentiert Schadensmeldungen.',
      'Die Einrichtung ist unkompliziert: Wir analysieren Ihre häufigsten Kundenanfragen, definieren gemeinsam die Dialogabläufe und integrieren den Chatbot in Ihre bestehende Webseite. In zwei bis vier Wochen ist er produktiv.',
      'Auf Wunsch verbinden wir den Chatbot mit Ihrem Kalender, CRM oder Branchensoftware. In Kombination mit einem Telefonassistenten decken Sie alle Kontaktkanäle ab.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 60 Kilometer von Gera entfernt. Persönliche Termine in Gera sind jederzeit möglich – ob in Ihrem Büro, am Kultur- und Kongresszentrum oder per Videocall.',
    ],
    faqs: [
      {
        q: 'Lohnt sich ein KI-Chatbot für ein Unternehmen in Gera bei moderater digitaler Konkurrenz?',
        a: 'Gerade deshalb: Bei geringer digitaler Konkurrenz können Sie sich mit einem Chatbot schnell und sichtbar von Mitbewerbern abheben und den First-Mover-Vorteil nutzen.',
      },
      {
        q: 'Für welche Branchen in Gera eignet sich ein KI-Chatbot?',
        a: 'Für Praxen, Kanzleien, Handwerksbetriebe, Pflegedienste, Gastronomie und Dienstleister jeder Art – überall, wo regelmäßig dieselben Fragen eingehen.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für meinen Betrieb in Gera einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel innerhalb von zwei bis vier Wochen live.',
      },
      {
        q: 'Kann der Chatbot auch Kunden aus dem Umland von Gera bedienen?',
        a: 'Ja. Der Chatbot ist online erreichbar – für Kunden aus Gera, Greiz, Altenburg und der gesamten Region Ostthüringen.',
      },
    ],
    highlights: [
      'First-Mover-Vorteil bei moderater digitaler Konkurrenz in Gera',
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden aus ganz Ostthüringen',
      'Unkomplizierte Einrichtung in 2–4 Wochen',
      'Persönliche Betreuung aus Groitzsch – rund 60 km entfernt',
    ],
  },

  'gera.telefonassistenten': {
    regionSlug: 'gera',
    regionName: 'Gera',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Gera – Pixel Kraftwerk sichert Ihre Erreichbarkeit als Versorgungszentrum Ostthüringens.',
    intro:
      'Als zentraler Dienstleistungsstandort Ostthüringens bedienen Geraer Unternehmen Kunden aus einem weiten Einzugsgebiet – von Greiz über Altenburg bis Jena. Das Telefon bleibt dabei ein wichtiger Kanal, aber oft fehlt die Kapazität für lückenlose Erreichbarkeit. Unser Telefonassistent löst genau dieses Problem.',
    paragraphs: [
      'Geraer Praxen, Pflegedienste und medizinische Einrichtungen erleben ein hohes Anrufaufkommen: Terminwünsche, Rezeptanfragen und organisatorische Fragen binden viel Zeit am Empfang. Der Telefonassistent nimmt Anrufe entgegen, klärt das Anliegen und erfasst alle Informationen, die Ihr Team für die Weiterbearbeitung braucht.',
      'Handwerksbetriebe in Gera, die Kunden in der ganzen Region bedienen, sind tagsüber oft auf Montage. Der Telefonassistent sorgt dafür, dass kein Anruf verloren geht: Er erfasst Art und Dringlichkeit des Anliegens und leitet alles per E-Mail oder ins CRM weiter. Dringende Fälle werden sofort als Push-Nachricht signalisiert.',
      'Die Einrichtung erfolgt in enger Abstimmung mit Ihnen: Wir definieren die Gesprächslogik, die zu Ihrem Betrieb passt – welche Fragen gestellt werden, wann weitergeleitet wird, wie Notfälle behandelt werden. Der Assistent arbeitet danach verlässlich nach diesen Regeln.',
      'In Kombination mit einem KI-Chatbot entsteht ein System, das Telefon und digitale Kanäle gleichermaßen abdeckt. So erreichen Sie Kunden aus ganz Ostthüringen auf dem Kanal ihrer Wahl.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent Anrufe von Kunden aus dem gesamten Einzugsgebiet um Gera bearbeiten?',
        a: 'Ja. Der Assistent ist nicht auf Gera beschränkt – er nimmt alle eingehenden Anrufe entgegen, unabhängig vom Standort der Anrufenden.',
      },
      {
        q: 'Funktioniert der Telefonassistent auch außerhalb der Geschäftszeiten?',
        a: 'Ja, rund um die Uhr. Das ist gerade für Praxen und Pflegedienste in Gera ein großer Vorteil.',
      },
      {
        q: 'Wie aufwendig ist die Einrichtung eines Telefonassistenten?',
        a: 'Der größte Aufwand liegt im gemeinsamen Definieren der Abläufe. Die Technik übernehmen wir – ein erster Assistent ist in zwei bis drei Wochen einsatzbereit.',
      },
      {
        q: 'Was kostet ein Telefonassistent für einen Betrieb in Gera?',
        a: 'Die Kosten hängen von Umfang und Anforderungen ab. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot.',
      },
      {
        q: 'Kann der Telefonassistent auch an Pflegesoftware angebunden werden?',
        a: 'Ja. Wir integrieren den Assistenten mit gängiger Branchen- und Praxissoftware.',
      },
    ],
    highlights: [
      'Lückenlose Erreichbarkeit für Praxen, Pflegedienste und Handwerk in Gera',
      'Zuverlässige Anruferfassung auch bei hohem Aufkommen',
      'Rund-um-die-Uhr-Verfügbarkeit ohne zusätzliches Personal',
      'Persönliche Einrichtung und Betreuung aus der Region',
    ],
  },

  'gera.automatisierungen': {
    regionSlug: 'gera',
    regionName: 'Gera',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Gera – Pixel Kraftwerk beseitigt manuelle Routineaufgaben und schafft Freiräume im Ostthüringer Mittelstand.',
    intro:
      'In vielen Geraer Betrieben werden Routineaufgaben noch von Hand erledigt: Anfragen abtippen, Bestätigungen einzeln verschicken, Termine manuell koordinieren. Das kostet Zeit und ist fehleranfällig. Pixel Kraftwerk automatisiert diese Prozesse – passend zur Betriebsgröße und Arbeitsweise Ihres Unternehmens in Gera.',
    paragraphs: [
      'Gera ist als Versorgungszentrum Ostthüringens ein Standort mit vielen kleinen und mittleren Betrieben: Praxen, Pflegedienste, Kanzleien, Handwerker, Einzelhändler. In diesen Unternehmen zählt jede eingesparte Stunde. Automatisierungen setzen genau dort an, wo die größten Zeitfresser lauern.',
      'Typische Einstiegspunkte für Geraer Unternehmen: Kontaktanfragen von der Website werden automatisch ins CRM übertragen. Terminbestätigungen gehen per Mail und SMS raus, ohne dass jemand tippen muss. Offene Angebote erhalten nach definierten Fristen ein automatisches Follow-up. Kundenbewertungen werden nach Projektabschluss angefragt.',
      'Wir arbeiten mit Ihren bestehenden Werkzeugen: Google Workspace, Microsoft 365, Praxissoftware, Branchenlösung – wir verbinden, statt zu ersetzen. Die Integration erfolgt über standardisierte Schnittstellen.',
      'In Kombination mit KI-Chatbot und Telefonassistent entsteht ein durchgängiger Prozess: Anfragen werden erfasst, weitergeleitet, bestätigt und nachverfolgt – automatisch und zuverlässig.',
      'Von Groitzsch aus erreichen wir Gera in rund einer Stunde. Für Prozessanalysen und Einrichtung kommen wir gern persönlich zu Ihnen.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in Geraer Betrieben am schnellsten automatisieren?',
        a: 'Typische Quick Wins: Weiterleitung von Kontaktanfragen, Terminbestätigungen, Follow-up-Mails und automatische Bewertungsanfragen.',
      },
      {
        q: 'Müssen wir unsere bestehende Software wechseln?',
        a: 'Nein. Wir integrieren Ihre vorhandenen Tools miteinander.',
      },
      {
        q: 'Eignen sich Automatisierungen auch für sehr kleine Betriebe in Gera?',
        a: 'Gerade kleine Teams profitieren am meisten. Schon ein einziger automatisierter Workflow kann pro Woche mehrere Stunden sparen.',
      },
      {
        q: 'Wie schnell ist eine erste Automatisierung produktiv?',
        a: 'Ein erster Workflow kann oft innerhalb von ein bis zwei Wochen live gehen.',
      },
    ],
    highlights: [
      'Sofortige Entlastung bei Routineaufgaben für Geraer KMU',
      'Integration bestehender Systeme ohne Softwarewechsel',
      'Skalierbar vom einzelnen Workflow bis zum Gesamtprozess',
      'Persönliche Betreuung aus Groitzsch – rund 60 km entfernt',
    ],
  },

  'gera.webseiten': {
    regionSlug: 'gera',
    regionName: 'Gera',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Gera – Pixel Kraftwerk erstellt schnelle, suchmaschinenoptimierte Websites für Ostthüringens Zentrum.',
    intro:
      'Eine professionelle Webseite ist auch in Gera kein Luxus, sondern entscheidender Wettbewerbsfaktor. Kunden aus Gera und dem weiten Einzugsgebiet Ostthüringens suchen online nach Anbietern – wer dann mit einer veralteten oder langsamen Seite auftritt, verliert Vertrauen und Anfragen.',
    paragraphs: [
      'Der Vorteil für Geraer Unternehmen: Die digitale Konkurrenz in vielen Branchen ist noch überschaubar. Eine professionelle, suchmaschinenoptimierte Website kann Sie schnell an die Spitze der lokalen Suchergebnisse bringen – und dort halten.',
      'Wir entwickeln Webseiten, die zum Geraer Markt passen: Für einen Pflegedienst bedeutet das klare Leistungsbeschreibungen, Vertrauenselemente und einfache Kontaktaufnahme. Für einen Handwerksbetrieb zählen Referenzfotos, Erreichbarkeit und eine mobile-optimierte Darstellung. Für ein Restaurant am Geraer Markt sind Speisekarte, Öffnungszeiten und Reservierung entscheidend.',
      'Technisch setzen wir auf moderne Frameworks mit eingebauter Performance und SEO-Optimierung. Strukturierte Daten, schnelle Ladezeiten und sauberer Code sind Standard – nicht Aufpreis.',
      'Auf Wunsch integrieren wir KI-Chatbot, Telefonassistent oder Automatisierungen, damit Ihre Website nicht nur informiert, sondern aktiv Anfragen generiert und weiterverarbeitet.',
      'Von Groitzsch erreichen wir Gera in rund einer Stunde. Persönliche Gespräche, ob bei Ihnen vor Ort oder per Videocall, gehören für uns zum Standard.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für ein Unternehmen in Gera?',
        a: 'Eine professionelle Unternehmenswebseite ist in der Regel innerhalb von vier bis acht Wochen fertig.',
      },
      {
        q: 'Wird die Webseite für lokale Suchanfragen in Gera optimiert?',
        a: 'Ja. Wir optimieren jede Seite für Begriffe wie „Arzt Gera", „Handwerker Gera" oder branchenspezifische Keywords.',
      },
      {
        q: 'Kann ich die Webseite danach selbst bearbeiten?',
        a: 'Ja. Wir richten ein benutzerfreundliches CMS ein und schulen Sie in der Bedienung.',
      },
      {
        q: 'Was unterscheidet Pixel Kraftwerk von lokalen Webagenturen in Gera?',
        a: 'Wir kombinieren Webentwicklung mit KI-Chatbots, Telefonassistenten und Automatisierungen. Das Ergebnis ist nicht nur eine Website, sondern ein digitaler Vertriebskanal.',
      },
    ],
    highlights: [
      'Professionelle Webseiten mit Wettbewerbsvorsprung im Geraer Markt',
      'Lokale SEO-Optimierung für Gera und Ostthüringen',
      'Integration von Chatbot, Telefon und Automatisierung möglich',
      'Persönliche Betreuung und Schulung aus der Region',
    ],
  },

  'gera.seo-top-3': {
    regionSlug: 'gera',
    regionName: 'Gera',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Gera – Pixel Kraftwerk bringt Ihren Betrieb in die Top 3 bei Google. Nutzen Sie die moderate Konkurrenz in Ostthüringen.',
    intro:
      'In Gera suchen Kunden online nach Dienstleistern, Ärzten und Handwerkern – genau wie in jeder anderen Stadt. Der Unterschied: Die digitale Konkurrenz in vielen Branchen ist moderater als in Großstädten. Das macht Gera zu einem idealen Markt für gezielte SEO-Maßnahmen mit schnellen Ergebnissen.',
    paragraphs: [
      'Die SEO-Chance in Gera: Bei vielen lokalen Suchbegriffen wie „Friseur Gera", „Steuerberater Gera" oder „Sanitär Gera" ist die Konkurrenz überschaubar. Unternehmen, die jetzt in Suchmaschinenoptimierung investieren, können sich schnell Top-Positionen sichern – bevor die Konkurrenz aufholt.',
      'Unsere Strategie beginnt mit einer Analyse: Welche Suchbegriffe nutzen Ihre Kunden in Gera und Ostthüringen? Wie ist die aktuelle Wettbewerbslage? Wo liegen die schnellsten Chancen? Auf dieser Basis optimieren wir Ihre Website technisch und inhaltlich.',
      'Das Google-Unternehmensprofil ist für lokale Sichtbarkeit in Gera zentral: Wir optimieren es für das Local Pack, pflegen Bewertungen, laden aktuelle Fotos hoch und sorgen mit regelmäßigen Updates für Relevanz.',
      'Für Geraer Unternehmen, die Kunden aus dem gesamten Ostthüringer Raum ansprechen, erweitern wir den SEO-Fokus auf umliegende Städte wie Altenburg, Greiz und Zeitz. So maximieren Sie Ihre Reichweite über Gera hinaus.',
      'Mit monatlichen Reports und laufender Optimierung stellen wir sicher, dass Ihre Position in den Suchergebnissen langfristig stabil bleibt und weiter wächst.',
    ],
    faqs: [
      {
        q: 'Wie schnell kann ich in Gera bei Google in die Top 3 kommen?',
        a: 'Bei moderater Konkurrenz in Gera sehen wir oft innerhalb von vier bis acht Wochen deutliche Verbesserungen. Top-3-Platzierungen sind je nach Branche in zwei bis vier Monaten realistisch.',
      },
      {
        q: 'Lohnt sich SEO auch für Betriebe, die Kunden außerhalb von Gera bedienen?',
        a: 'Ja. Wir optimieren nicht nur für Gera, sondern auch für umliegende Städte wie Greiz, Altenburg oder Zeitz.',
      },
      {
        q: 'Was kostet SEO für ein Unternehmen in Gera?',
        a: 'Die Kosten hängen von Branche und Zielsetzung ab. Nach einer kostenlosen Erstanalyse erstellen wir ein transparentes Angebot.',
      },
      {
        q: 'Kann ich SEO mit einer neuen Webseite von Pixel Kraftwerk kombinieren?',
        a: 'Ja, das ist ideal. Wenn wir die Website von Anfang an SEO-optimiert aufbauen, erzielen Sie schneller Ergebnisse.',
      },
    ],
    highlights: [
      'Schnelle Ergebnisse dank moderater digitaler Konkurrenz in Gera',
      'SEO-Optimierung für Gera und das gesamte Ostthüringer Einzugsgebiet',
      'Optimierung von Google-Unternehmensprofil und Local Pack',
      'Monatliche Reports und laufende Betreuung',
    ],
  },

  /* ================================================================
   *  ZWICKAU
   * ================================================================ */
  'zwickau.ki-chatbots': {
    regionSlug: 'zwickau',
    regionName: 'Zwickau',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Zwickau – Pixel Kraftwerk automatisiert Kundenkommunikation für Automotive-Zulieferer, Handwerk und Mittelstand.',
    intro:
      'Zwickau ist untrennbar mit der Automobilindustrie verbunden: Das Volkswagen-Werk und eine Vielzahl von Zulieferern prägen die Stadt mit rund 90.000 Einwohnern. Mit dem Wandel zur E-Mobilität verändern sich auch die Geschäftsmodelle – und damit der Bedarf an effizienter, digitaler Kundenkommunikation. Ein KI-Chatbot von Pixel Kraftwerk unterstützt Zwickauer Unternehmen genau dabei.',
    paragraphs: [
      'Die Zwickauer Wirtschaft befindet sich im Umbruch: Die Transformation zur E-Mobilität stellt Zulieferer vor neue Herausforderungen, gleichzeitig wachsen neue Branchen und Dienstleistungen. In dieser Phase ist digitale Effizienz besonders wichtig. Ein KI-Chatbot auf Ihrer Website beantwortet Standardanfragen sofort und gibt Ihrem Team Freiraum für strategische Aufgaben.',
      'Für Automotive-Zulieferer in Zwickau kann der Chatbot technische Anfragen zu Produkten und Lieferzeiten beantworten, Angebotsanfragen aufnehmen und Ansprechpartner zuordnen. Für einen Friseur in der Zwickauer Innenstadt oder eine Praxis in Marienthal übernimmt er Terminbuchungen und beantwortet häufige Fragen zu Leistungen und Öffnungszeiten.',
      'Die Einrichtung ist pragmatisch: Wir identifizieren die häufigsten Anfragen, definieren Dialoge und integrieren den Chatbot in Ihre Website. In zwei bis vier Wochen ist er produktiv. Danach erweitern wir schrittweise – neue Themen, neue Kanäle, tiefere Integrationen.',
      'Technisch verbinden wir den Chatbot mit CRM, ERP oder Kalender, damit erfasste Daten ohne Umweg im richtigen System landen. WhatsApp- und Messenger-Anbindung sind ebenfalls möglich.',
      'Pixel Kraftwerk in Groitzsch ist rund 65 Kilometer von Zwickau entfernt. Persönliche Termine in Zwickau – ob am Hauptmarkt, im Gewerbegebiet oder bei Ihnen im Betrieb – sind jederzeit möglich.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für Automotive-Zulieferer in Zwickau?',
        a: 'Ja. Der Chatbot kann Produktanfragen beantworten, Angebotsanfragen aufnehmen und technische Basisinformationen bereitstellen – sowohl für Kunden als auch für interne Zwecke.',
      },
      {
        q: 'Kann der Chatbot auch bei der Transformation zur E-Mobilität helfen?',
        a: 'Indirekt: Er entlastet Ihr Team bei Routineanfragen, sodass mehr Kapazität für strategische Aufgaben rund um neue Geschäftsmodelle und Produkte bleibt.',
      },
      {
        q: 'Wie schnell ist ein KI-Chatbot für meinen Betrieb in Zwickau einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel innerhalb von zwei bis vier Wochen live.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für ein Unternehmen in Zwickau?',
        a: 'Die Kosten richten sich nach Umfang und Anbindungen. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.',
      },
    ],
    highlights: [
      'KI-Chatbots für Automotive-Zulieferer und Mittelstand in Zwickau',
      'Unterstützung im wirtschaftlichen Transformationsprozess',
      'Integration in CRM, ERP und Kalender',
      'Persönliche Betreuung aus Groitzsch – rund 65 km entfernt',
    ],
  },

  'zwickau.telefonassistenten': {
    regionSlug: 'zwickau',
    regionName: 'Zwickau',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Zwickau – Pixel Kraftwerk sichert Ihre Erreichbarkeit im Automotive-Umfeld und regionalen Mittelstand.',
    intro:
      'In Zwickau ist das Telefon gerade für Handwerksbetriebe, Praxen und Dienstleister nach wie vor der Hauptkanal für Kundenanfragen. Doch wer in der Produktion steht, auf Montage ist oder Patienten behandelt, kann nicht gleichzeitig telefonieren. Unser Telefonassistent übernimmt die Anrufannahme – professionell, zuverlässig und rund um die Uhr.',
    paragraphs: [
      'Zwickau und sein Umland sind stark vom produzierenden Gewerbe geprägt: VW-Zulieferer, Werkzeugbauer, Metallverarbeiter. In diesen Betrieben sind die Teams tagsüber oft in Produktion und Montage gebunden. Der Telefonassistent stellt sicher, dass trotzdem kein Anruf verloren geht: Er erfasst Art und Dringlichkeit des Anliegens und leitet alles an die richtige Stelle weiter.',
      'Für Praxen in Zwickau – ob am Hauptmarkt, in Schedewitz oder in Eckersbach – bedeutet der Assistent Entlastung am Empfang: Terminwünsche, Rezeptanfragen und Überweisungsfragen werden strukturiert aufgenommen und nach Priorität sortiert.',
      'Die Gesprächslogik passen wir gemeinsam an Ihren Betrieb an: Welche Informationen werden erfasst? Wann wird direkt weitergeleitet? Wie werden dringende Fälle behandelt? Der Assistent arbeitet konsistent nach diesen Regeln – auch bei hohem Anrufaufkommen.',
      'In Kombination mit einem KI-Chatbot entsteht ein Mehrkanalkonzept: Der Chatbot bearbeitet digitale Anfragen, der Telefonassistent kümmert sich um Anrufe. Automatisierungen sorgen dafür, dass alle Daten im richtigen System landen.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Anfragen für mehrere Standorte in Zwickau und Umgebung bearbeiten?',
        a: 'Ja. Wir können den Assistenten so konfigurieren, dass er Anrufe je nach Standort oder Zuständigkeit unterschiedlich behandelt.',
      },
      {
        q: 'Funktioniert der Telefonassistent auch im Schichtbetrieb?',
        a: 'Ja, rund um die Uhr. Das ist gerade für Betriebe mit Schichtarbeit in der Automobilzulieferung ein großer Vorteil.',
      },
      {
        q: 'Wie aufwendig ist die Einrichtung?',
        a: 'Der größte Aufwand liegt in der Abstimmung der Abläufe. Die Technik übernehmen wir – ein erster Assistent ist in zwei bis drei Wochen einsatzbereit.',
      },
      {
        q: 'Lässt sich der Telefonassistent mit unserer Produktionssoftware verbinden?',
        a: 'Ja, wir integrieren den Assistenten über APIs mit ERP-, CRM- und Branchensystemen.',
      },
    ],
    highlights: [
      'Zuverlässige Anrufannahme für Produktion, Handwerk und Praxen in Zwickau',
      '24/7-Erreichbarkeit – auch im Schichtbetrieb',
      'Integration in ERP, CRM und Branchensoftware',
      'Persönliche Einrichtung und Support aus Groitzsch',
    ],
  },

  'zwickau.automatisierungen': {
    regionSlug: 'zwickau',
    regionName: 'Zwickau',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Zwickau – Pixel Kraftwerk digitalisiert manuelle Prozesse im Automotive-Umfeld und regionalen Mittelstand.',
    intro:
      'Zwickaus Wirtschaft ist im Wandel: Die Transformation zur E-Mobilität verändert Lieferketten, Geschäftsmodelle und Kundenbeziehungen. In dieser Phase zählt Effizienz doppelt. Pixel Kraftwerk automatisiert manuelle Routineprozesse in Zwickauer Unternehmen und schafft Freiräume für strategische Aufgaben.',
    paragraphs: [
      'In vielen Zwickauer Betrieben – ob Automotive-Zulieferer, Handwerker oder Dienstleister – laufen Prozesse noch manuell: Auftragsbestätigungen werden einzeln getippt, Angebote händisch nachverfolgt, Kundendaten zwischen Systemen kopiert. Diese Routinearbeiten binden Kapazitäten, die gerade in der Transformationsphase woanders gebraucht werden.',
      'Typische Automatisierungen für Zwickauer Unternehmen: Angebotsanfragen werden automatisch im CRM erfasst und dem Vertrieb zugewiesen. Auftragsbestätigungen gehen raus, sobald der Status im ERP wechselt. Offene Angebote erhalten nach definierten Fristen ein Follow-up. Qualitätsprotokolle werden automatisch archiviert und verteilt.',
      'Wir arbeiten mit Ihren bestehenden Systemen: ERP, CRM, E-Mail, Kalender, Branchensoftware. Die Integration erfolgt über APIs und Middleware – wir verbinden, statt zu ersetzen.',
      'In Kombination mit KI-Chatbot und Telefonassistent entsteht ein durchgängiger Prozess von der Anfrage bis zum Abschluss – ohne manuelle Zwischenschritte und ohne Informationsverlust.',
      'Von Groitzsch sind wir in rund einer Stunde in Zwickau. Für Prozessanalysen und Workshops kommen wir gern zu Ihnen – ob ins Büro, in die Produktionshalle oder ins Gewerbegebiet.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse eignen sich in Zwickauer Industrieunternehmen am besten für Automatisierung?',
        a: 'Besonders wirksam: Angebotsworkflows, Auftragsbestätigungen, Follow-ups, Qualitätsdokumentation und die Synchronisation zwischen CRM und ERP.',
      },
      {
        q: 'Funktioniert die Automatisierung mit unserem ERP-System?',
        a: 'In den meisten Fällen ja. Wir integrieren gängige ERP- und CRM-Lösungen über APIs oder Middleware.',
      },
      {
        q: 'Können wir mit einem einzelnen Workflow starten?',
        a: 'Ja, genau so empfehlen wir es. Starten Sie mit dem Prozess, der am meisten Zeit kostet, und erweitern Sie schrittweise.',
      },
      {
        q: 'Unterstützen Automatisierungen auch den Wandel zur E-Mobilität?',
        a: 'Indirekt: Sie schaffen die nötigen Freiräume, damit Ihr Team sich auf neue Geschäftsfelder, Produktentwicklung und Kundenbeziehungen konzentrieren kann.',
      },
    ],
    highlights: [
      'Automatisierung von Angebots-, Auftrags- und Qualitätsprozessen',
      'Integration bestehender ERP- und CRM-Systeme',
      'Freiräume für die strategische Transformation zur E-Mobilität',
      'Persönliche Betreuung aus Groitzsch für Zwickauer Unternehmen',
    ],
  },

  'zwickau.webseiten': {
    regionSlug: 'zwickau',
    regionName: 'Zwickau',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Zwickau – Pixel Kraftwerk erstellt schnelle, SEO-optimierte Websites für die Automobilstadt im Wandel.',
    intro:
      'Zwickau wandelt sich – und mit der Stadt verändern sich auch die Anforderungen an die digitale Präsenz. Ob etablierter Zulieferer, der neue Geschäftsfelder erschließt, oder Handwerksbetrieb, der online Kunden gewinnen will: Eine professionelle Webseite ist der erste Schritt.',
    paragraphs: [
      'Viele Zwickauer Unternehmen haben Webseiten, die in die Jahre gekommen sind: langsam, nicht mobiloptimiert, kaum bei Google sichtbar. In einer Stadt, die sich gerade neu erfindet, wirkt das wie ein Widerspruch. Wir entwickeln Webseiten, die zum Aufbruch passen – technisch modern, inhaltlich überzeugend und für Suchmaschinen optimiert.',
      'Für einen Automotive-Zulieferer in Zwickau zählen Referenzprojekte, technische Kompetenz und internationale Ansprache. Für einen Bäcker am Hauptmarkt sind Standort, Öffnungszeiten und Sortiment wichtig. Für eine Physiotherapie in Planitz geht es um Vertrauen, Leistungsübersicht und einfache Terminbuchung. Wir passen jede Webseite exakt an die Zielgruppe an.',
      'Technisch setzen wir auf moderne Frameworks mit integrierten Performance- und SEO-Vorteilen. Strukturierte Daten, optimierte Bilder und sauberer Code sorgen dafür, dass Ihre Webseite bei Google für relevante Zwickauer Suchanfragen erscheint.',
      'Auf Wunsch integrieren wir einen KI-Chatbot für automatisierte Kundenkommunikation, eine Terminbuchung oder Automatisierungen, die Anfragen direkt ins CRM leiten.',
      'Von unserem Standort in Groitzsch erreichen wir Zwickau in rund einer Stunde. Persönliche Gespräche sind jederzeit möglich – ob bei Ihnen vor Ort, per Videocall oder in unserem Büro.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für ein Zwickauer Unternehmen?',
        a: 'Eine professionelle Unternehmenswebseite ist in vier bis acht Wochen fertig. Komplexere Projekte mit Mehrsprachigkeit oder Shop benötigen mehr Zeit.',
      },
      {
        q: 'Wird die Webseite für Zwickauer Suchanfragen optimiert?',
        a: 'Ja. Wir optimieren für lokale Keywords wie „Zahnarzt Zwickau", „KFZ-Werkstatt Zwickau" oder branchenspezifische Begriffe.',
      },
      {
        q: 'Kann die Webseite auch mehrsprachig sein – für internationale Kunden?',
        a: 'Ja. Gerade für Automotive-Zulieferer mit internationaler Kundschaft ist eine englischsprachige oder mehrsprachige Website sinnvoll.',
      },
      {
        q: 'Was passiert nach dem Launch?',
        a: 'Wir bieten laufende Betreuung mit Updates, Sicherheit und Content-Pflege an. Auf Wunsch übernehmen wir auch die fortlaufende SEO-Optimierung.',
      },
    ],
    highlights: [
      'Moderne Webseiten für Zwickauer Unternehmen im Wandel',
      'Lokale SEO-Optimierung für Zwickau und Umgebung',
      'Mehrsprachig möglich für internationale Geschäftsbeziehungen',
      'Integration von Chatbot, Terminbuchung und Automatisierung',
    ],
  },

  'zwickau.seo-top-3': {
    regionSlug: 'zwickau',
    regionName: 'Zwickau',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Unternehmen in Zwickau – Pixel Kraftwerk bringt Ihren Betrieb in die Top 3 bei Google. Mehr Sichtbarkeit in der Automobilstadt Sachsens.',
    intro:
      'Auch in Zwickau beginnt die Kundensuche bei Google: „Zahnarzt Zwickau", „Elektriker Zwickau", „Restaurant Hauptmarkt" – wer bei diesen Anfragen nicht auf Seite 1 steht, wird von vielen potenziellen Kunden nicht wahrgenommen. Pixel Kraftwerk bringt Zwickauer Unternehmen gezielt in die Top-Positionen.',
    paragraphs: [
      'Zwickau bietet für lokale SEO ein vielversprechendes Umfeld: groß genug für relevantes Suchvolumen, aber bei vielen Branchen mit moderatem Online-Wettbewerb. Unternehmen, die jetzt in SEO investieren, können sich schnell an der Spitze positionieren.',
      'Unsere SEO-Strategie für Zwickauer Unternehmen: Wir analysieren den lokalen Suchmarkt, identifizieren die wichtigsten Keywords und optimieren Ihre Website technisch und inhaltlich. Von der Seitenstruktur über Meta-Daten bis zu lokal relevantem Content – alles aus einer Hand.',
      'Ihr Google-Unternehmensprofil ist der Schlüssel zum Local Pack – den prominenten Karteneinträgen über den organischen Suchergebnissen. Wir optimieren Ihr Profil, managen Bewertungen und sorgen mit regelmäßigen Updates für Relevanz.',
      'Für Zwickauer Unternehmen mit überregionalem Einzugsgebiet – etwa Automotive-Zulieferer oder spezialisierte Dienstleister – erweitern wir den SEO-Fokus über die Stadt hinaus. So gewinnen Sie Sichtbarkeit in Zwickau und darüber hinaus.',
      'Wir begleiten Sie mit monatlichen Reports, Ranking-Monitoring und fortlaufender Optimierung. SEO ist ein laufender Prozess – und wir stellen sicher, dass Ihre Ergebnisse nachhaltig bleiben.',
    ],
    faqs: [
      {
        q: 'Wie schnell kann ich in Zwickau bei Google in die Top 3 kommen?',
        a: 'Erste Verbesserungen sehen wir oft innerhalb von vier bis acht Wochen. Top-3-Platzierungen sind je nach Branche in zwei bis fünf Monaten realistisch.',
      },
      {
        q: 'Lohnt sich SEO auch für Zwickauer Betriebe mit überregionaler Kundschaft?',
        a: 'Ja. Wir kombinieren lokale SEO für Zwickau mit überregionalen Strategien, um beide Zielgruppen zu erreichen.',
      },
      {
        q: 'Was kostet SEO für ein Unternehmen in Zwickau?',
        a: 'Die Kosten hängen von Branche und Zielsetzung ab. Nach einer kostenlosen Erstanalyse erstellen wir ein transparentes Angebot.',
      },
      {
        q: 'Kann ich SEO mit einer neuen Webseite kombinieren?',
        a: 'Ja. Eine von Anfang an SEO-optimierte Website erzielt schneller Ergebnisse als eine nachträglich optimierte.',
      },
      {
        q: 'Hilft SEO auch beim wirtschaftlichen Wandel in Zwickau?',
        a: 'Indirekt: Unternehmen, die neue Geschäftsfelder erschließen, brauchen dafür online Sichtbarkeit. SEO sorgt dafür, dass potenzielle Kunden Sie finden – auch für neue Leistungen.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für den Zwickauer Markt mit moderatem Wettbewerb',
      'Optimierung von Google-Unternehmensprofil und Local Pack',
      'Kombinierbar mit überregionaler SEO für Automotive-Zulieferer',
      'Monatliche Reports und laufende Optimierung',
    ],
  },
};
