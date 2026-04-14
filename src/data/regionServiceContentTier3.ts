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

export const tier3ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  /* ================================================================
   *  SCHMÖLLN
   * ================================================================ */
  'schmoelln.ki-chatbots': {
    regionSlug: 'schmoelln',
    regionName: 'Schmölln',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Schmölln – Pixel Kraftwerk automatisiert Kundenkommunikation für Handwerk, Handel und Dienstleister in der Knopfstadt im Altenburger Land.',
    intro:
      'Schmölln, die traditionsreiche Knopfstadt im Altenburger Land, verbindet industrielle Geschichte mit lebhaftem Mittelstand. Ob Handwerksbetrieb, Einzelhändler oder Dienstleister – wiederkehrende Kundenanfragen kosten wertvolle Zeit. Ein KI-Chatbot von Pixel Kraftwerk beantwortet diese Fragen rund um die Uhr und verschafft Ihrem Team Luft für das Wesentliche.',
    paragraphs: [
      'Die Schmöllner Wirtschaft lebt von kleinen und mittelständischen Betrieben: Handwerker, Einzelhändler auf dem Markt, Arztpraxen und Dienstleister entlang der Achse Altenburg–Gera. Täglich gehen Fragen zu Öffnungszeiten, Preisen, Verfügbarkeiten und Terminen ein. Ein KI-Chatbot auf Ihrer Webseite fängt genau diese Routineanfragen auf, beantwortet sie sofort und erfasst Kontaktdaten strukturiert für Ihr Team.',
      'Für Schmöllner Handwerksbetriebe ist der Chatbot besonders nützlich: Kunden schildern ihr Anliegen – ob Heizungswartung, Dachschaden oder Renovierungswunsch – und der Chatbot stellt gezielte Rückfragen, um das Anliegen vorzuqualifizieren. Ihr Team erhält eine strukturierte Zusammenfassung statt unübersichtlicher E-Mails oder verpasster Anrufe.',
      'Auch der Einzelhandel in Schmölln profitiert: Der Chatbot informiert über Produktverfügbarkeit, Sonderaktionen und Ladenöffnungszeiten. Kunden erhalten sofort eine Antwort, auch wenn das Geschäft gerade geschlossen ist oder alle Mitarbeiter im Verkaufsgespräch sind.',
      'Technisch integrieren wir den Chatbot nahtlos in Ihre bestehende Webseite – ob WordPress, Baukasten oder individuelles System. Auf Wunsch verbinden wir ihn mit Ihrem Kalender, CRM oder Warenwirtschaftssystem, sodass Anfragen direkt im richtigen System ankommen.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 35 Kilometer von Schmölln entfernt. Persönliche Termine vor Ort in der Knopfstadt – ob in Ihrer Werkstatt, Ihrem Geschäft oder Ihrer Praxis – sind jederzeit möglich.',
    ],
    faqs: [
      {
        q: 'Lohnt sich ein KI-Chatbot auch für kleine Betriebe in Schmölln?',
        a: 'Gerade für kleine Betriebe ist der Chatbot besonders wertvoll, weil er Routineanfragen automatisch beantwortet und so die knappe Personalkapazität schont – ob Handwerksbetrieb, Ladengeschäft oder Einzelpraxis.',
      },
      {
        q: 'Kann der Chatbot auch Terminanfragen für Schmöllner Betriebe bearbeiten?',
        a: 'Ja. Der Chatbot kann Terminwünsche aufnehmen, freie Slots prüfen und Bestätigungen versenden – ideal für Praxen, Werkstätten und Dienstleister.',
      },
      {
        q: 'Wie schnell ist der Chatbot für mein Schmöllner Unternehmen einsatzbereit?',
        a: 'Ein erster produktiver Chatbot steht in der Regel innerhalb von zwei bis drei Wochen. Einfachere Setups sind oft noch schneller live.',
      },
      {
        q: 'Kommen Sie auch nach Schmölln für die Einrichtung?',
        a: 'Selbstverständlich. Von Groitzsch erreichen wir Schmölln in rund 30 Minuten. Erstgespräch, Workshop und technische Einrichtung machen wir gern persönlich vor Ort.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden in Schmölln und dem Altenburger Land',
      'Vorqualifizierung von Anfragen spart Ihrem Team täglich Zeit',
      'Integration in Kalender, CRM und bestehende Systeme',
      'Persönliche Betreuung aus Groitzsch – nur ~35 km entfernt',
    ],
  },

  'schmoelln.telefonassistenten': {
    regionSlug: 'schmoelln',
    regionName: 'Schmölln',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Schmölln – Pixel Kraftwerk sichert die Erreichbarkeit von Handwerkern, Praxen und Dienstleistern im Altenburger Land.',
    intro:
      'In Schmölln greifen viele Kunden noch zum Telefon – ob für die Werkstatt, die Arztpraxis oder den Friseur. Doch wer auf der Baustelle zwischen Altenburg und Gera unterwegs ist oder Patienten behandelt, verpasst oft wichtige Anrufe. Unser KI-Telefonassistent nimmt jeden Anruf professionell entgegen.',
    paragraphs: [
      'Die Betriebe in Schmölln und dem Altenburger Land arbeiten oft mit schlanken Teams. Wenn das Telefon klingelt und alle Hände voll zu tun haben, gehen Aufträge verloren. Der Telefonassistent von Pixel Kraftwerk springt ein: Er begrüßt Anrufende freundlich, klärt das Anliegen und erfasst alle relevanten Informationen strukturiert.',
      'Für Arztpraxen in Schmölln ist die Entlastung unmittelbar spürbar: Terminwünsche, Rezeptanfragen und organisatorische Fragen werden automatisch aufgenommen und nach Dringlichkeit sortiert. Das Praxisteam erhält eine klare Übersicht statt hektischer Zettelwirtschaft.',
      'Handwerker auf der Baustelle profitieren ebenso: Der Telefonassistent nimmt Aufträge entgegen, fragt nach Art und Umfang der gewünschten Arbeit und leitet die Informationen per E-Mail oder direkt ins System weiter. So verpassen Sie keinen Auftrag, auch wenn Sie gerade beim Kunden in Altenburg oder Gera sind.',
      'Wir konfigurieren den Assistenten passgenau für Ihr Unternehmen: Welche Informationen sollen erfasst werden? Welche Anrufe werden sofort durchgestellt? Die Logik stimmen wir gemeinsam ab, damit der Assistent wie ein echtes Teammitglied agiert.',
    ],
    faqs: [
      {
        q: 'Erkennen Anrufer, dass sie mit einer KI sprechen?',
        a: 'Der Assistent klingt natürlich und professionell. Die meisten Anrufer empfinden das Gespräch als angenehm und hilfreich – vergleichbar mit einem gut geschulten Mitarbeiter am Empfang.',
      },
      {
        q: 'Was passiert bei Notfällen oder dringenden Anrufen in Schmölln?',
        a: 'Notfälle erkennt der Assistent anhand definierter Schlüsselwörter und leitet sofort an die hinterlegte Nummer weiter – damit keine zeitkritische Anfrage verloren geht.',
      },
      {
        q: 'Kann der Telefonassistent auch außerhalb der Geschäftszeiten arbeiten?',
        a: 'Ja. Der Assistent ist 24/7 im Einsatz und nimmt Anrufe auch abends, am Wochenende und an Feiertagen entgegen.',
      },
      {
        q: 'Wie wird der Telefonassistent an meine Schmöllner Festnetznummer angebunden?',
        a: 'Wir richten eine Rufumleitung ein, sodass Anrufe bei Nichtannahme automatisch an den Assistenten weitergeleitet werden. Ihre bestehende Nummer bleibt erhalten.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch auf der Baustelle oder im Behandlungszimmer',
      '24/7-Erreichbarkeit für Ihre Kunden in Schmölln und Umgebung',
      'Dringende Anrufe werden sofort weitergeleitet',
      'Persönliche Einrichtung vor Ort – Groitzsch ist nur ~35 km entfernt',
    ],
  },

  'schmoelln.automatisierungen': {
    regionSlug: 'schmoelln',
    regionName: 'Schmölln',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Schmölln – Pixel Kraftwerk digitalisiert Abläufe in Handwerk, Handel und Verwaltung im Altenburger Land.',
    intro:
      'Viele Betriebe in Schmölln arbeiten noch mit manuellen Prozessen: Rechnungen werden von Hand erstellt, Termine per Telefon koordiniert, Kundendaten in verschiedenen Listen gepflegt. Pixel Kraftwerk automatisiert genau diese Abläufe – damit Ihr Team sich auf das Kerngeschäft in der Knopfstadt konzentrieren kann.',
    paragraphs: [
      'Die typischen Automatisierungspotenziale in Schmöllner Betrieben liegen im Alltäglichen: Auftragsbestätigungen, die automatisch verschickt werden; Rechnungen, die nach Auftragsabschluss von selbst erstellt und versendet werden; Kundendaten, die nur einmal erfasst und überall verfügbar sind. Klingt einfach – spart aber Stunden pro Woche.',
      'Für Handwerksbetriebe im Altenburger Land bedeutet das konkret: Wenn ein Auftrag abgeschlossen ist, generiert das System automatisch die Rechnung, dokumentiert die Arbeit und benachrichtigt den Kunden. Kein manuelles Übertragen von Daten, kein Vergessen von Nachfassaktionen.',
      'Auch Praxen und Einzelhändler in Schmölln profitieren: Terminerinnerungen werden automatisch per SMS oder E-Mail verschickt, Bestellungen bei Lieferanten werden ausgelöst, wenn Bestände unter einen definierten Schwellenwert fallen, und Kundenbewertungen werden nach dem Besuch automatisch angefragt.',
      'Wir setzen auf bewährte Automatisierungsplattformen wie Make und n8n und verbinden Ihre bestehenden Systeme miteinander – ob Buchhaltungssoftware, Kalender, E-Mail oder Warenwirtschaft. Jede Automatisierung wird an Ihre konkreten Abläufe angepasst.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in meinem Schmöllner Betrieb am besten automatisieren?',
        a: 'Am meisten profitieren Sie bei wiederkehrenden Aufgaben: Rechnungsstellung, Terminerinnerungen, Angebotsnachfass, Bestandsmeldungen und Kundenkommunikation sind typische Einstiegspunkte.',
      },
      {
        q: 'Muss ich meine bestehende Software in Schmölln wechseln?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme miteinander und automatisieren die Übergaben zwischen ihnen – ohne Softwarewechsel.',
      },
      {
        q: 'Wie aufwändig ist die Einrichtung?',
        a: 'Eine erste Automatisierung ist oft in ein bis zwei Wochen produktiv. Wir starten mit dem Prozess, der Ihnen am meisten Zeit spart, und erweitern schrittweise.',
      },
      {
        q: 'Was kostet eine Automatisierung für einen kleinen Betrieb in Schmölln?',
        a: 'Die Kosten hängen vom Umfang ab. Wir starten mit einem kostenlosen Erstgespräch und zeigen transparent, welche Einsparungen realistisch sind – oft amortisiert sich die Investition innerhalb weniger Monate.',
      },
    ],
    highlights: [
      'Manuelle Routineaufgaben werden vollständig automatisiert',
      'Bestehende Software bleibt erhalten – wir verbinden Ihre Systeme',
      'Spürbare Zeitersparnis ab der ersten Automatisierung',
      'Persönliche Beratung in Schmölln – Groitzsch ist nur ~35 km entfernt',
    ],
  },

  'schmoelln.webseiten': {
    regionSlug: 'schmoelln',
    regionName: 'Schmölln',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Schmölln – Pixel Kraftwerk erstellt schnelle, mobiloptimierte Internetauftritte für Betriebe in der Knopfstadt.',
    intro:
      'Eine professionelle Webseite ist für Schmöllner Unternehmen die digitale Visitenkarte – und oft der erste Eindruck, den potenzielle Kunden gewinnen. Pixel Kraftwerk erstellt moderne, schnelle und mobiloptimierte Webseiten, die Ihr Unternehmen in der Knopfstadt überzeugend präsentieren.',
    paragraphs: [
      'Viele Betriebe in Schmölln haben entweder keine eigene Webseite oder eine veraltete Seite, die auf Smartphones kaum nutzbar ist. In Zeiten, in denen über 70 Prozent der lokalen Suchen mobil stattfinden, ist das ein spürbarer Nachteil. Wir erstellen Webseiten, die auf allen Geräten perfekt funktionieren und Ihre Leistungen klar kommunizieren.',
      'Für Handwerker im Altenburger Land bedeutet das: Eine übersichtliche Darstellung Ihrer Leistungen, Referenzprojekte mit Bildergalerie, ein einfaches Kontaktformular und klare Informationen zu Ihrem Einzugsgebiet zwischen Schmölln, Altenburg und Gera. Kunden finden sofort, was sie suchen.',
      'Einzelhändler und Gastronomen in Schmölln erhalten Webseiten mit aktuellen Öffnungszeiten, Anfahrtsbeschreibung, Speisekarten oder Produktübersichten – alles leicht selbst aktualisierbar. Über eine Google-Maps-Einbindung finden Besucher den Weg zu Ihrem Geschäft auf dem Schmöllner Markt.',
      'Technisch setzen wir auf moderne Frameworks, die Ladezeiten unter zwei Sekunden garantieren – ein entscheidender Faktor für Google-Rankings und Nutzerzufriedenheit. Dazu kommt eine saubere SEO-Grundstruktur, damit Ihr Betrieb bei lokalen Suchanfragen in Schmölln und dem Altenburger Land gefunden wird.',
    ],
    faqs: [
      {
        q: 'Kann ich meine Schmöllner Webseite selbst aktualisieren?',
        a: 'Ja. Wir richten ein einfaches Content-Management ein, mit dem Sie Texte, Bilder und Öffnungszeiten selbst ändern können – ohne technische Vorkenntnisse.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für mein Schmöllner Unternehmen?',
        a: 'Eine typische Unternehmenswebseite ist in drei bis fünf Wochen fertig. Bei dringendem Bedarf sind auch schnellere Timelines möglich.',
      },
      {
        q: 'Wird die Webseite auch für Google optimiert?',
        a: 'Ja. Jede Webseite enthält eine saubere SEO-Grundstruktur mit lokalen Keywords, optimierten Ladezeiten und strukturierten Daten für Schmölln und das Altenburger Land.',
      },
      {
        q: 'Was passiert nach dem Launch – bieten Sie auch Wartung an?',
        a: 'Ja. Wir bieten laufende Wartung, Sicherheitsupdates und inhaltliche Anpassungen an, damit Ihre Webseite dauerhaft aktuell und sicher bleibt.',
      },
    ],
    highlights: [
      'Moderne, mobiloptimierte Webseite für Ihren Schmöllner Betrieb',
      'Ladezeiten unter 2 Sekunden – gut für Nutzer und Google',
      'SEO-Grundstruktur für lokale Sichtbarkeit im Altenburger Land',
      'Persönliche Betreuung aus Groitzsch – nur ~35 km entfernt',
    ],
  },

  'schmoelln.seo-top-3': {
    regionSlug: 'schmoelln',
    regionName: 'Schmölln',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Schmölln – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google für lokale Suchanfragen in der Knopfstadt und im Altenburger Land.',
    intro:
      'Wenn Kunden in Schmölln nach einem Handwerker, einer Praxis oder einem Dienstleister suchen, entscheiden die ersten drei Google-Ergebnisse über den Zuschlag. Pixel Kraftwerk sorgt dafür, dass Ihr Unternehmen genau dort steht – mit gezielter lokaler Suchmaschinenoptimierung für Schmölln und das Altenburger Land.',
    paragraphs: [
      'Lokale SEO in einer Kleinstadt wie Schmölln folgt eigenen Regeln: Die Konkurrenz ist überschaubar, aber oft sind die Top-Positionen von überregionalen Portalen besetzt. Wir analysieren die Suchanfragen rund um Schmölln, Altenburg und das Altenburger Land und entwickeln eine Strategie, die Ihr Unternehmen sichtbar nach oben bringt.',
      'Ein zentraler Baustein ist Ihr Google-Unternehmensprofil: Vollständige Angaben, aktuelle Öffnungszeiten, regelmäßige Beiträge und echte Kundenbewertungen sind die Basis für lokale Rankings. Wir optimieren Ihr Profil und zeigen Ihnen, wie Sie systematisch Bewertungen gewinnen.',
      'Auf Ihrer Webseite optimieren wir Inhalte, Seitenstruktur und technische Faktoren: Lokale Keywords wie „Elektriker Schmölln" oder „Zahnarzt Altenburger Land" werden strategisch eingebaut, Ladezeiten minimiert und strukturierte Daten hinterlegt, damit Google Ihr Unternehmen richtig einordnet.',
      'Durch gezielte lokale Verlinkungen – etwa in Branchenverzeichnissen des Altenburger Landes, der IHK Ostthüringen oder regionalen Portalen – stärken wir die Autorität Ihrer Webseite. Diese Signale sind für Google ein klarer Hinweis, dass Ihr Betrieb in Schmölln relevant ist.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Schmöllner Betrieb in den Top 3 steht?',
        a: 'Erste Verbesserungen sind oft nach vier bis acht Wochen sichtbar. Top-3-Positionen für lokale Keywords in Schmölln erreichen wir erfahrungsgemäß innerhalb von drei bis sechs Monaten.',
      },
      {
        q: 'Ist SEO für eine kleine Stadt wie Schmölln überhaupt sinnvoll?',
        a: 'Gerade in kleineren Städten ist SEO besonders effektiv, weil die Konkurrenz geringer ist. Oft reichen gezielte Maßnahmen, um schnell auf die Top-Positionen zu kommen.',
      },
      {
        q: 'Was kostet SEO für mein Unternehmen in Schmölln?',
        a: 'Die Kosten richten sich nach Umfang und Wettbewerb. In einem kostenlosen Erstgespräch analysieren wir Ihre aktuelle Sichtbarkeit und erstellen ein transparentes Angebot.',
      },
      {
        q: 'Bekomme ich regelmäßige Berichte über die SEO-Ergebnisse?',
        a: 'Ja. Sie erhalten monatliche Reports mit aktuellen Rankings, Traffic-Entwicklung und den nächsten Optimierungsschritten – verständlich aufbereitet, ohne SEO-Fachchinesisch.',
      },
    ],
    highlights: [
      'Top-3-Rankings für lokale Suchanfragen in Schmölln und Umgebung',
      'Google-Unternehmensprofil-Optimierung inklusive',
      'Transparente monatliche Reports zu Rankings und Traffic',
      'Persönliche Betreuung aus Groitzsch – nur ~35 km entfernt',
    ],
  },

  /* ================================================================
   *  BAD DÜRRENBERG
   * ================================================================ */
  'bad-duerrenberg.ki-chatbots': {
    regionSlug: 'bad-duerrenberg',
    regionName: 'Bad Dürrenberg',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Bad Dürrenberg – Pixel Kraftwerk automatisiert Kundenkommunikation für Gesundheitswesen, Kurbetriebe und Dienstleister im Saalekreis.',
    intro:
      'Bad Dürrenberg, die Kurstadt mit dem historischen Gradierwerk im Saalekreis, ist ein Standort mit starkem Gesundheitsfokus. Kliniken, Reha-Einrichtungen, Therapiepraxen und lokale Dienstleister bearbeiten täglich zahlreiche Patientenanfragen. Ein KI-Chatbot von Pixel Kraftwerk übernimmt die Routinekommunikation und entlastet Ihr Team spürbar.',
    paragraphs: [
      'Das Gesundheitswesen prägt Bad Dürrenberg: Rehabilitationskliniken, Physiotherapiepraxen, Arztpraxen und Apotheken bilden das wirtschaftliche Rückgrat der Kurstadt. Patienten und Kurgäste fragen nach Terminen, Therapieangeboten, Anfahrtswegen und Behandlungskosten. Ein KI-Chatbot beantwortet diese Standardfragen rund um die Uhr – auch abends und am Wochenende.',
      'Für Reha-Einrichtungen und Kurkliniken in Bad Dürrenberg bietet der Chatbot besonderen Mehrwert: Interessenten erhalten sofort Auskunft zu Behandlungsangeboten, Kostenübernahme durch Krankenkassen und freien Plätzen. Kontaktdaten werden strukturiert erfasst und direkt an die Patientenaufnahme weitergeleitet.',
      'Auch die übrigen Dienstleister im Saalekreis profitieren: Handwerker, Gastronomen und Einzelhändler in Bad Dürrenberg können den Chatbot nutzen, um Kundenanfragen zu Öffnungszeiten, Preisen und Verfügbarkeiten automatisiert zu beantworten. So bleibt mehr Zeit für die persönliche Beratung vor Ort.',
      'Technisch integrieren wir den Chatbot in Ihre Webseite und verbinden ihn auf Wunsch mit Praxisverwaltungssystemen, Buchungssoftware oder CRM. Über WhatsApp erreichen Sie auch Patienten und Kunden, die nicht über Ihre Website kommen.',
      'Pixel Kraftwerk ist in Groitzsch ansässig, nur rund 25 Kilometer von Bad Dürrenberg entfernt. Für Erstgespräch, Workshop oder technische Einrichtung kommen wir schnell und unkompliziert zu Ihnen.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für Kliniken und Praxen in Bad Dürrenberg?',
        a: 'Besonders gut sogar. Der Chatbot beantwortet häufige Patientenfragen zu Terminen, Therapieangeboten und Kostenübernahme – und entlastet Empfang und Telefonzentrale erheblich.',
      },
      {
        q: 'Kann der Chatbot auch Informationen zum Gradierwerk und Kurbetrieb liefern?',
        a: 'Ja. Wir trainieren den Chatbot mit den Inhalten, die Sie bereitstellen – ob Kurangebote, Veranstaltungshinweise oder touristische Informationen rund um Bad Dürrenberg.',
      },
      {
        q: 'Wie schnell ist der Chatbot für meinen Betrieb in Bad Dürrenberg einsatzbereit?',
        a: 'In der Regel steht ein produktiver Chatbot innerhalb von zwei bis drei Wochen. Für Praxen mit einfachem FAQ-Bedarf kann es auch schneller gehen.',
      },
      {
        q: 'Werden Patientendaten sicher verarbeitet?',
        a: 'Ja. Wir setzen auf DSGVO-konforme Systeme mit Hosting in Deutschland. Sensible Gesundheitsdaten werden verschlüsselt übertragen und gespeichert.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Patienten, Kurgäste und Kunden in Bad Dürrenberg',
      'DSGVO-konform – ideal für Gesundheitswesen und Praxen',
      'Integration in Praxissoftware, Buchungssysteme und CRM',
      'Persönliche Betreuung aus Groitzsch – nur ~25 km entfernt',
    ],
  },

  'bad-duerrenberg.telefonassistenten': {
    regionSlug: 'bad-duerrenberg',
    regionName: 'Bad Dürrenberg',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Bad Dürrenberg – Pixel Kraftwerk sichert die Erreichbarkeit von Praxen, Kliniken und Dienstleistern in der Kurstadt im Saalekreis.',
    intro:
      'In Bad Dürrenberg ist das Telefon gerade im Gesundheitswesen unverzichtbar: Patienten rufen an, um Termine zu vereinbaren, Therapiefragen zu klären oder Rezepte nachzubestellen. Wenn Praxisteam und Empfang im Behandlungsalltag gebunden sind, übernimmt unser KI-Telefonassistent zuverlässig.',
    paragraphs: [
      'Arztpraxen und Therapieeinrichtungen in Bad Dürrenberg kennen das Problem: In Stoßzeiten klingelt das Telefon ununterbrochen, während das Team Patienten versorgt. Unser Telefonassistent nimmt jeden Anruf professionell entgegen, klärt das Anliegen – Terminwunsch, Rezeptbestellung, Rückrufbitte – und erfasst alle Informationen strukturiert.',
      'Für die Kurkliniken und Reha-Einrichtungen der Stadt bietet der Telefonassistent zusätzlichen Nutzen: Anfragen zur Aufnahme, zu freien Plätzen und zu Therapieangeboten werden automatisch erfasst und an die zuständige Abteilung weitergeleitet. Warteschleifen und besetzte Leitungen gehören der Vergangenheit an.',
      'Auch andere Branchen in Bad Dürrenberg profitieren: Handwerker, die beim Kunden sind, verpassen keine Anrufe mehr. Gastronomiebetriebe nehmen Reservierungen auch während des Mittagsgeschäfts zuverlässig entgegen. Der Telefonassistent agiert wie ein zuverlässiger Mitarbeiter am Empfang.',
      'Wir passen den Assistenten an die Besonderheiten Ihres Betriebs an: Welche Fragen stellen Patienten am häufigsten? Welche Anrufe müssen sofort durchgestellt werden? Welche Informationen sollen bei Erstanfragen erfasst werden? All das definieren wir gemeinsam.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent medizinische Anfragen in Bad Dürrenberg priorisieren?',
        a: 'Ja. Wir definieren gemeinsam Dringlichkeitsstufen: Notfälle werden sofort weitergeleitet, Routineanfragen wie Rezeptbestellungen strukturiert erfasst.',
      },
      {
        q: 'Funktioniert der Telefonassistent auch am Wochenende und an Feiertagen?',
        a: 'Ja. Der Assistent ist rund um die Uhr aktiv und nimmt Anrufe auch dann entgegen, wenn Ihre Praxis oder Ihr Betrieb geschlossen ist.',
      },
      {
        q: 'Wie klingt der Telefonassistent – merken Patienten, dass es KI ist?',
        a: 'Der Assistent spricht natürlich und freundlich. Viele Anrufer empfinden das Gespräch als angenehm – vergleichbar mit einer gut geschulten Empfangskraft.',
      },
      {
        q: 'Muss ich meine Telefonnummer in Bad Dürrenberg wechseln?',
        a: 'Nein. Wir richten eine Rufumleitung auf Ihre bestehende Nummer ein. Für Ihre Patienten und Kunden ändert sich nichts.',
      },
    ],
    highlights: [
      'Kein verpasster Patientenanruf – auch während der Behandlung',
      '24/7-Erreichbarkeit speziell für Praxen und Kliniken in Bad Dürrenberg',
      'Dringlichkeitserkennung mit sofortiger Weiterleitung',
      'Schnelle Einrichtung – Groitzsch liegt nur ~25 km entfernt',
    ],
  },

  'bad-duerrenberg.automatisierungen': {
    regionSlug: 'bad-duerrenberg',
    regionName: 'Bad Dürrenberg',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Bad Dürrenberg – Pixel Kraftwerk digitalisiert Abläufe in Gesundheitswesen, Kurbetrieb und Dienstleistung im Saalekreis.',
    intro:
      'In Bad Dürrenberg steckt viel Potenzial in der Digitalisierung: Patientenaufnahme, Terminverwaltung, Rezeptanforderungen und Abrechnungen laufen in vielen Praxen und Betrieben noch manuell. Pixel Kraftwerk automatisiert diese Abläufe, damit Ihr Team sich auf Patienten und Kunden konzentrieren kann.',
    paragraphs: [
      'Das Gesundheitswesen in Bad Dürrenberg bietet besonders viele Automatisierungspotenziale: Terminerinnerungen per SMS reduzieren Ausfallquoten, automatische Anamnesebögen vor dem Erstbesuch sparen Zeit in der Praxis, und digitale Rezeptanforderungen beschleunigen den Workflow zwischen Patient, Praxis und Apotheke.',
      'Für Kurkliniken und Reha-Einrichtungen automatisieren wir Aufnahmeprozesse: Patientendaten werden vorab digital erfasst, Dokumente automatisch zusammengestellt und Bestätigungen verschickt. Das verkürzt die Wartezeit bei Ankunft und reduziert den Verwaltungsaufwand erheblich.',
      'Auch Handwerker, Einzelhändler und Gastronomen in Bad Dürrenberg profitieren: Rechnungen werden nach Auftragsabschluss automatisch erstellt, Bestandsmeldungen bei Lieferanten ausgelöst, wenn Waren knapp werden, und Kundenfeedback nach dem Besuch automatisch eingeholt.',
      'Technisch nutzen wir bewährte Plattformen wie Make und n8n und verbinden Ihre bestehenden Systeme miteinander. Ob Praxissoftware, Buchhaltung, Kalender oder Warenwirtschaft – wir schaffen nahtlose Übergänge zwischen Ihren Tools.',
    ],
    faqs: [
      {
        q: 'Welche Automatisierungen sind für Praxen in Bad Dürrenberg am sinnvollsten?',
        a: 'Terminerinnerungen, digitale Anamnesebögen, Rezeptanforderungen und automatische Patientenkommunikation bieten den größten Hebel – mit sofort spürbarer Entlastung.',
      },
      {
        q: 'Muss ich meine Praxissoftware in Bad Dürrenberg wechseln?',
        a: 'Nein. Wir integrieren die Automatisierungen in Ihre bestehende Software und verknüpfen Systeme miteinander, ohne dass Sie umstellen müssen.',
      },
      {
        q: 'Wie schnell sind erste Automatisierungen produktiv?',
        a: 'Einfache Automatisierungen wie Terminerinnerungen stehen oft innerhalb einer Woche. Komplexere Abläufe benötigen zwei bis vier Wochen.',
      },
      {
        q: 'Sind die Automatisierungen DSGVO-konform?',
        a: 'Ja. Alle Systeme werden DSGVO-konform eingerichtet, mit verschlüsselter Datenübertragung und Hosting in Deutschland – besonders wichtig für das Gesundheitswesen.',
      },
    ],
    highlights: [
      'Terminerinnerungen reduzieren Ausfallquoten in Praxen und Kliniken',
      'Digitale Patientenaufnahme spart Verwaltungszeit',
      'Bestehende Software bleibt erhalten – wir verknüpfen Ihre Systeme',
      'DSGVO-konforme Umsetzung – ideal für das Gesundheitswesen',
    ],
  },

  'bad-duerrenberg.webseiten': {
    regionSlug: 'bad-duerrenberg',
    regionName: 'Bad Dürrenberg',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Bad Dürrenberg – Pixel Kraftwerk erstellt schnelle, mobiloptimierte Internetauftritte für die Kurstadt im Saalekreis.',
    intro:
      'Eine professionelle Webseite ist für Betriebe in Bad Dürrenberg der wichtigste digitale Touchpoint – ob Patienten nach einer Praxis suchen, Kurgäste sich über Angebote informieren oder Kunden einen Handwerker finden wollen. Pixel Kraftwerk erstellt Webseiten, die überzeugen und gefunden werden.',
    paragraphs: [
      'Viele Praxen und Betriebe in Bad Dürrenberg haben Webseiten, die technisch veraltet oder auf Smartphones schlecht nutzbar sind. Das kostet Patienten und Kunden: Wer bei Google nach „Physiotherapie Bad Dürrenberg" sucht und auf eine langsame, unübersichtliche Seite trifft, wählt den nächsten Treffer. Wir erstellen Webseiten, die schnell laden, klar strukturiert sind und auf jedem Gerät perfekt funktionieren.',
      'Für Gesundheitsdienstleister in der Kurstadt gestalten wir Webseiten mit besonderem Augenmerk: Übersichtliche Darstellung von Therapieangeboten, Online-Terminbuchung, Anfahrtskarten zum Gradierwerk-Areal und barrierefreie Navigation. Patienten finden sofort, was sie suchen, und können direkt Kontakt aufnehmen.',
      'Handwerker und Dienstleister im Saalekreis erhalten Webseiten mit Referenzprojekten, klarem Leistungsüberblick und eingebettetem Kontaktformular. Die Seite kommuniziert Ihr Einzugsgebiet – Bad Dürrenberg, Merseburg, Leuna und Umgebung – und spricht gezielt lokale Kunden an.',
      'Jede Webseite wird mit SEO-Grundstruktur ausgeliefert: Lokale Keywords, schnelle Ladezeiten, strukturierte Daten und eine saubere technische Basis sorgen dafür, dass Google Ihr Unternehmen für Suchanfragen aus Bad Dürrenberg und dem Saalekreis findet.',
    ],
    faqs: [
      {
        q: 'Kann die Webseite auch Online-Terminbuchung für Praxen in Bad Dürrenberg bieten?',
        a: 'Ja. Wir integrieren ein Buchungssystem direkt in die Webseite, sodass Patienten rund um die Uhr Termine vereinbaren können.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für mein Unternehmen in Bad Dürrenberg?',
        a: 'Eine typische Unternehmenswebseite ist in drei bis fünf Wochen fertig. Bei dringendem Bedarf finden wir schnellere Lösungen.',
      },
      {
        q: 'Ist die Webseite barrierefrei?',
        a: 'Wir achten auf barrierefreie Gestaltung nach WCAG-Standards – besonders wichtig für Praxen und Kliniken in einer Kurstadt wie Bad Dürrenberg.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen?',
        a: 'Ja. Sie erhalten ein einfaches Content-Management-System, mit dem Sie Texte, Bilder und Öffnungszeiten eigenständig aktualisieren können.',
      },
    ],
    highlights: [
      'Mobiloptimierte Webseite mit Ladezeiten unter 2 Sekunden',
      'Online-Terminbuchung für Praxen und Therapieeinrichtungen',
      'SEO-Grundstruktur für lokale Sichtbarkeit im Saalekreis',
      'Persönliche Betreuung aus Groitzsch – nur ~25 km entfernt',
    ],
  },

  'bad-duerrenberg.seo-top-3': {
    regionSlug: 'bad-duerrenberg',
    regionName: 'Bad Dürrenberg',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Bad Dürrenberg – Pixel Kraftwerk bringt Praxen, Kliniken und Dienstleister in die Top 3 bei Google im Saalekreis.',
    intro:
      'Wenn Patienten und Kunden in Bad Dürrenberg nach einer Praxis, einer Therapieeinrichtung oder einem Dienstleister suchen, entscheiden die ersten Google-Ergebnisse. Pixel Kraftwerk sorgt dafür, dass Ihr Unternehmen dort ganz oben steht – mit gezielter lokaler SEO für Bad Dürrenberg und den Saalekreis.',
    paragraphs: [
      'Bad Dürrenberg hat als Kurstadt ein besonderes SEO-Profil: Suchbegriffe wie „Reha Bad Dürrenberg", „Physiotherapie Saalekreis" oder „Arzt Bad Dürrenberg" haben ein relevantes Suchvolumen, sind aber oft noch nicht optimal besetzt. Hier liegt Ihre Chance: Mit gezielter Optimierung sichern Sie sich Top-Positionen, bevor Wettbewerber es tun.',
      'Wir beginnen mit einer detaillierten Keyword-Analyse für Bad Dürrenberg und Umgebung: Welche Begriffe suchen Patienten und Kunden? Wie stark ist die Konkurrenz? Daraus entwickeln wir eine Strategie, die On-Page-Optimierung, Google-Unternehmensprofil und lokale Verlinkungen kombiniert.',
      'Ihr Google-Unternehmensprofil ist der Dreh- und Angelpunkt für lokale Sichtbarkeit: Vollständige Angaben, professionelle Fotos vom Gradierwerk-Viertel oder Ihrer Praxis, regelmäßige Beiträge und echte Bewertungen signalisieren Google Relevanz und Vertrauenswürdigkeit.',
      'Auf Ihrer Webseite optimieren wir Inhalte und Technik: Lokale Keywords werden strategisch in Texte, Überschriften und Meta-Tags eingebaut, Ladezeiten minimiert und strukturierte Daten für Praxen und Gesundheitsdienstleister hinterlegt. So versteht Google genau, was Sie anbieten und wo Sie es anbieten.',
      'Ergänzend bauen wir lokale Verlinkungen auf: Einträge in Branchenverzeichnissen des Saalekreises, auf Gesundheitsportalen und in regionalen Medien stärken die Autorität Ihrer Webseite und verbessern Ihr Ranking nachhaltig.',
    ],
    faqs: [
      {
        q: 'Wie schnell sehe ich SEO-Ergebnisse für meine Praxis in Bad Dürrenberg?',
        a: 'Erste Ranking-Verbesserungen sind oft nach vier bis sechs Wochen sichtbar. Top-3-Positionen für lokale Keywords erreichen wir erfahrungsgemäß innerhalb von drei bis fünf Monaten.',
      },
      {
        q: 'Lohnt sich SEO für das Gesundheitswesen in Bad Dürrenberg?',
        a: 'Sehr sogar. Patienten suchen aktiv online nach Praxen und Therapieangeboten. Wer in den Top 3 steht, erhält den Großteil der Klicks und Anrufe.',
      },
      {
        q: 'Können Sie auch Bewertungen für meine Praxis in Bad Dürrenberg aufbauen?',
        a: 'Wir unterstützen Sie mit einer Bewertungsstrategie: automatisierte Anfragen nach dem Praxisbesuch, einfache Bewertungslinks und Antwortvorlagen für Rezensionen.',
      },
      {
        q: 'Was unterscheidet lokale SEO von normaler SEO?',
        a: 'Lokale SEO fokussiert auf geografische Suchbegriffe und Google Maps – entscheidend, wenn Patienten und Kunden in Bad Dürrenberg und Umgebung nach Ihnen suchen.',
      },
    ],
    highlights: [
      'Top-3-Rankings für Gesundheits- und Dienstleistungsbegriffe in Bad Dürrenberg',
      'Google-Unternehmensprofil-Optimierung mit Bewertungsstrategie',
      'Lokale Verlinkungen im Saalekreis und auf Gesundheitsportalen',
      'Monatliche Reports mit verständlicher Auswertung',
    ],
  },

  /* ================================================================
   *  SCHKOPAU
   * ================================================================ */
  'schkopau.ki-chatbots': {
    regionSlug: 'schkopau',
    regionName: 'Schkopau',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Schkopau – Pixel Kraftwerk automatisiert Kundenkommunikation für Industriebetriebe, Zulieferer und Dienstleister am Chemiepark Buna.',
    intro:
      'Schkopau im Saalekreis ist geprägt vom Chemiepark Buna und einer starken industriellen B2B-Landschaft. Unternehmen hier bearbeiten komplexe Anfragen von Geschäftskunden, Zulieferern und Partnern. Ein KI-Chatbot von Pixel Kraftwerk übernimmt die Routinekommunikation und hält Ihrem Team den Rücken frei.',
    paragraphs: [
      'Die Wirtschaft rund um Schkopau ist industriell geprägt: Chemiebetriebe, technische Dienstleister, Zulieferer und Logistikunternehmen am Chemiepark Buna kommunizieren intensiv mit Geschäftspartnern, Bewerbern und Kunden. Viele dieser Anfragen sind wiederkehrend: Produktspezifikationen, Lieferzeiten, Ansprechpartner, Zertifikate. Ein KI-Chatbot beantwortet diese Fragen sofort und rund um die Uhr.',
      'Für B2B-Unternehmen in Schkopau ist der Chatbot besonders wertvoll: Geschäftskunden erhalten sofort Auskunft zu technischen Datenblättern, Mindestbestellmengen oder Lieferbedingungen. Der Chatbot leitet komplexe Anfragen mit allen erfassten Details an den richtigen Ansprechpartner weiter – strukturiert und vollständig.',
      'Auch für den Bereich Recruiting am Chemiepark bietet ein Chatbot Vorteile: Bewerber erhalten Informationen zu offenen Stellen, Anforderungsprofilen und dem Bewerbungsprozess. Häufig gestellte Fragen zu Arbeitsbedingungen, Schichtmodellen und Benefits werden automatisch beantwortet.',
      'Technisch integrieren wir den Chatbot in Ihre bestehende Webseite oder Ihr Intranet. Auf Wunsch verbinden wir ihn mit ERP-Systemen, Produktdatenbanken oder HR-Software, sodass der Chatbot stets aktuelle Informationen liefert.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 35 Kilometer von Schkopau entfernt. Persönliche Termine – ob in Ihrem Büro am Chemiepark oder in Ihrem Betrieb in Schkopau – sind kurzfristig möglich.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für B2B-Unternehmen am Chemiepark Buna?',
        a: 'Hervorragend. Der Chatbot beantwortet technische Standardfragen, liefert Produktinformationen und qualifiziert Anfragen vor – ideal für den industriellen Kontext.',
      },
      {
        q: 'Kann der Chatbot auch mit ERP-Systemen in Schkopau verknüpft werden?',
        a: 'Ja. Wir verbinden den Chatbot über Schnittstellen mit gängigen ERP-Systemen wie SAP, so dass Verfügbarkeiten und Lieferdaten in Echtzeit abgerufen werden können.',
      },
      {
        q: 'Funktioniert der Chatbot auch mehrsprachig für internationale Geschäftspartner?',
        a: 'Ja. Wir richten den Chatbot auf Wunsch mehrsprachig ein – Englisch, Französisch oder andere Sprachen für internationale B2B-Kommunikation.',
      },
      {
        q: 'Wie sicher ist der Chatbot im industriellen Umfeld?',
        a: 'Der Chatbot wird DSGVO-konform mit Hosting in Deutschland betrieben. Zugriffsrechte und Datenfreigaben konfigurieren wir individuell für Ihr Unternehmen.',
      },
    ],
    highlights: [
      'B2B-taugliche Chatbots für Industrie und Chemiebranche in Schkopau',
      'Integration in ERP-Systeme und Produktdatenbanken',
      'Mehrsprachig einsetzbar für internationale Geschäftspartner',
      'Persönliche Betreuung aus Groitzsch – nur ~35 km entfernt',
    ],
  },

  'schkopau.telefonassistenten': {
    regionSlug: 'schkopau',
    regionName: 'Schkopau',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Schkopau – Pixel Kraftwerk sichert die Erreichbarkeit von Industriebetrieben, Zulieferern und Dienstleistern am Chemiepark Buna.',
    intro:
      'In Schkopau und am Chemiepark Buna sind viele Unternehmen im Schichtbetrieb oder Außendienst unterwegs. Anrufe von Geschäftspartnern, Kunden und Bewerbern gehen oft ins Leere, wenn Ansprechpartner in Meetings, im Labor oder auf dem Werksgelände sind. Unser KI-Telefonassistent sorgt für lückenlose Erreichbarkeit.',
    paragraphs: [
      'Der Chemiepark Buna ist ein industrielles Zentrum mit komplexen Kommunikationsanforderungen: Zulieferer fragen nach Lieferterminen, Kunden melden technische Probleme, Bewerber erkundigen sich nach offenen Stellen. Wenn der zuständige Ansprechpartner gerade im Werk oder im Meeting ist, nimmt der Telefonassistent den Anruf professionell entgegen.',
      'Für Industriebetriebe in Schkopau konfigurieren wir den Assistenten branchenspezifisch: Technische Anfragen werden mit den richtigen Rückfragen erfasst – Artikelnummer, Charge, Art des Problems. Dringende Meldungen zu Produktionsstörungen werden sofort an den Bereitschaftsdienst weitergeleitet.',
      'Auch für Dienstleister und Handwerker im Umfeld des Chemieparks ist der Telefonassistent wertvoll: Auftragsanfragen werden strukturiert erfasst, Rückrufbitten priorisiert und Routinefragen wie Anfahrtswege oder Geschäftszeiten automatisch beantwortet.',
      'Der Assistent lässt sich nahtlos in Ihre bestehende Telefonanlage integrieren. Bei Nichtannahme wird automatisch umgeleitet, Ihre Geschäftsnummer bleibt unverändert. Die erfassten Informationen erhalten Sie per E-Mail, SMS oder direkt im CRM.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch technische Anfragen am Chemiepark erfassen?',
        a: 'Ja. Wir konfigurieren branchenspezifische Gesprächsleitfäden, die technische Details wie Artikelnummern, Chargen und Fehlerbeschreibungen strukturiert erfassen.',
      },
      {
        q: 'Wie werden dringende Anrufe im Schichtbetrieb behandelt?',
        a: 'Notfälle und Störungsmeldungen erkennt der Assistent anhand definierter Kriterien und leitet sofort an die hinterlegte Bereitschaftsnummer weiter.',
      },
      {
        q: 'Funktioniert der Assistent auch bei hohem Anrufaufkommen?',
        a: 'Ja. Der Assistent kann mehrere Anrufe gleichzeitig annehmen – es gibt keine Besetztzeichen und keine Wartemusik.',
      },
      {
        q: 'Kann der Assistent auch auf Englisch für internationale Partner arbeiten?',
        a: 'Ja. Wir richten den Assistenten mehrsprachig ein, sodass internationale Geschäftspartner in ihrer Sprache betreut werden.',
      },
    ],
    highlights: [
      'Lückenlose Erreichbarkeit – auch im Schichtbetrieb und auf dem Werksgelände',
      'Branchenspezifische Gesprächsleitfäden für Industrieumfeld',
      'Sofortige Weiterleitung bei Störungen und Notfällen',
      'Persönliche Einrichtung vor Ort – Groitzsch liegt nur ~35 km entfernt',
    ],
  },

  'schkopau.automatisierungen': {
    regionSlug: 'schkopau',
    regionName: 'Schkopau',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Schkopau – Pixel Kraftwerk digitalisiert Abläufe in Industrie, Zulieferwesen und technischem Service am Chemiepark Buna.',
    intro:
      'Im industriellen Umfeld von Schkopau und dem Chemiepark Buna gibt es zahlreiche Prozesse, die von Automatisierung profitieren: Auftragsabwicklung, Qualitätsberichte, Lieferantenkommunikation und interne Freigabeprozesse. Pixel Kraftwerk macht diese Abläufe effizienter.',
    paragraphs: [
      'Industrieunternehmen in Schkopau arbeiten häufig mit komplexen Prozessketten: Bestellungen werden erfasst, Liefertermine abgestimmt, Qualitätsnachweise dokumentiert und Rechnungen versendet. Viele dieser Schritte laufen noch manuell – mit entsprechendem Zeitaufwand und Fehlerrisiko. Wir automatisieren die Übergaben zwischen den Systemen.',
      'Ein typisches Beispiel aus dem Chemiepark-Umfeld: Eingehende Bestellungen werden automatisch im ERP-System erfasst, Auftragsbestätigungen an den Kunden verschickt, die Produktion benachrichtigt und nach Versand die Rechnung generiert. Statt manueller Dateneingabe an vier Stellen passiert alles automatisch.',
      'Für technische Dienstleister in Schkopau automatisieren wir Wartungsmeldungen, Prüfprotokolle und Einsatzplanung: Wenn eine Anlage einen definierten Betriebsstundenwert erreicht, wird automatisch ein Wartungsauftrag erstellt und der zuständige Techniker informiert.',
      'Wir setzen auf bewährte Automatisierungsplattformen und verbinden Ihre bestehenden Systeme – ob ERP, CRM, Ticketsystem oder E-Mail. Jede Automatisierung wird an Ihre konkreten Prozesse im industriellen Umfeld angepasst.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in Schkopauer Industriebetrieben am besten automatisieren?',
        a: 'Auftragsabwicklung, Qualitätsdokumentation, Wartungsplanung, Lieferantenkommunikation und Berichtswesen bieten den größten Hebel.',
      },
      {
        q: 'Können Sie auch an SAP-Systeme anbinden?',
        a: 'Ja. Wir haben Erfahrung mit SAP-Schnittstellen und verbinden Automatisierungen über APIs oder Middleware mit Ihrem ERP-System.',
      },
      {
        q: 'Wie sicher sind automatisierte Prozesse in der Industrie?',
        a: 'Alle Automatisierungen werden mit Fehlerbehandlung und Logging eingerichtet. Bei Störungen werden Sie sofort benachrichtigt, und manuelle Eingriffe bleiben jederzeit möglich.',
      },
      {
        q: 'Wie aufwändig ist die Einführung im laufenden Betrieb?',
        a: 'Wir integrieren Automatisierungen schrittweise und parallel zum laufenden Betrieb. Produktionsunterbrechungen gibt es nicht – neue Prozesse werden erst nach Testphase aktiviert.',
      },
    ],
    highlights: [
      'Industrietaugliche Automatisierungen für Chemiepark-Umfeld',
      'ERP- und SAP-Anbindung für durchgängige Prozessketten',
      'Automatische Wartungsplanung und Qualitätsdokumentation',
      'Schrittweise Einführung ohne Produktionsunterbrechung',
    ],
  },

  'schkopau.webseiten': {
    regionSlug: 'schkopau',
    regionName: 'Schkopau',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Schkopau – Pixel Kraftwerk erstellt leistungsstarke Internetauftritte für Industriebetriebe und Dienstleister am Chemiepark Buna.',
    intro:
      'Im B2B-Umfeld von Schkopau ist die Webseite oft der erste Kontaktpunkt für Geschäftspartner, Einkäufer und potenzielle Mitarbeiter. Pixel Kraftwerk erstellt professionelle Webseiten, die Ihr Industrieunternehmen oder Ihren Dienstleistungsbetrieb am Chemiepark Buna überzeugend präsentieren.',
    paragraphs: [
      'Viele Industrieunternehmen in Schkopau haben Webseiten, die technisch veraltet sind und die Kompetenz des Unternehmens nicht widerspiegeln. Für B2B-Kunden, die Produktinformationen suchen, Zertifikate prüfen oder den richtigen Ansprechpartner finden wollen, ist das ein Problem. Wir erstellen Webseiten, die professionell aussehen und funktional überzeugen.',
      'Für Industriebetriebe am Chemiepark gestalten wir Webseiten mit klarer Produktstruktur: Technische Datenblätter zum Download, Zertifikatsübersichten, Ansprechpartner nach Fachgebiet und ein übersichtliches Leistungsportfolio. Geschäftspartner finden sofort, was sie suchen.',
      'Im Bereich Recruiting setzen wir auf ansprechende Karriereseiten: Offene Stellen, Arbeitgebervorteile, Einblicke in den Arbeitsalltag am Chemiepark und einfache Online-Bewerbungsformulare helfen Ihnen, Fachkräfte für Schkopau zu gewinnen.',
      'Technisch setzen wir auf Ladezeiten unter zwei Sekunden, Mobiloptimierung und eine SEO-Grundstruktur, die Ihr Unternehmen bei relevanten B2B-Suchbegriffen sichtbar macht. Dazu gehört auch eine mehrsprachige Option für internationale Geschäftspartner.',
    ],
    faqs: [
      {
        q: 'Können technische Datenblätter auf der Webseite zum Download bereitstehen?',
        a: 'Ja. Wir richten einen strukturierten Downloadbereich ein, wahlweise öffentlich oder mit Zugangsschutz für registrierte Geschäftspartner.',
      },
      {
        q: 'Kann die Webseite auch mehrsprachig für internationale B2B-Kunden sein?',
        a: 'Selbstverständlich. Wir erstellen die Webseite auf Wunsch in Deutsch und Englisch – weitere Sprachen sind ebenfalls möglich.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer B2B-Webseite für Schkopau?',
        a: 'Eine umfassende B2B-Webseite mit Produktkatalog und Karrierebereich ist in vier bis sechs Wochen fertig. Einfachere Auftritte schneller.',
      },
      {
        q: 'Unterstützen Sie auch bei der Pflege der Webseite nach dem Launch?',
        a: 'Ja. Wir bieten laufende Wartung, Sicherheitsupdates und inhaltliche Anpassungen an – von der Produktergänzung bis zur neuen Stellenanzeige.',
      },
    ],
    highlights: [
      'Professionelle B2B-Webseite für Industrie und Chemiebranche',
      'Produktkatalog mit Download-Bereich und Zertifikatsübersicht',
      'Karriereseite für Fachkräftegewinnung am Chemiepark Buna',
      'Persönliche Betreuung aus Groitzsch – nur ~35 km entfernt',
    ],
  },

  'schkopau.seo-top-3': {
    regionSlug: 'schkopau',
    regionName: 'Schkopau',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Schkopau – Pixel Kraftwerk bringt Industriebetriebe und Dienstleister am Chemiepark Buna in die Top 3 bei Google.',
    intro:
      'Auch B2B-Unternehmen in Schkopau profitieren von lokaler Suchmaschinenoptimierung: Einkäufer suchen nach Zulieferern, Unternehmen nach technischen Dienstleistern und Fachkräfte nach Arbeitgebern am Chemiepark Buna. Pixel Kraftwerk bringt Ihr Unternehmen auf die Top-Positionen.',
    paragraphs: [
      'SEO im B2B-Kontext funktioniert anders als im Endkundengeschäft: Die Suchvolumen sind geringer, aber jeder einzelne Klick kann einen hochwertigen Lead bedeuten. Wer bei Google nach „Chemiedienstleister Saalekreis" oder „Zulieferer Chemiepark Buna" ganz oben steht, erhält die wertvollsten Anfragen.',
      'Wir beginnen mit einer B2B-Keyword-Analyse für Schkopau und den Saalekreis: Welche Fachbegriffe suchen Einkäufer? Welche Begriffe nutzen Bewerber? Daraus entwickeln wir eine SEO-Strategie, die Ihre spezifischen Zielgruppen adressiert.',
      'Auf Ihrer Webseite optimieren wir Produktseiten, Leistungsbeschreibungen und Karrierebereiche: Technische Keywords werden strategisch eingebaut, Seitenstruktur und interne Verlinkung verbessert, strukturierte Daten für Unternehmen und Stellenangebote hinterlegt.',
      'Im B2B-Bereich spielen Branchenverzeichnisse, Lieferantenportale und IHK-Einträge eine wichtige Rolle für die Suchmaschinenoptimierung. Wir sorgen dafür, dass Ihr Unternehmen auf den relevanten Plattformen vollständig und korrekt gelistet ist – das stärkt sowohl die direkte Auffindbarkeit als auch das Google-Ranking.',
    ],
    faqs: [
      {
        q: 'Lohnt sich SEO für B2B-Unternehmen in Schkopau?',
        a: 'Auf jeden Fall. Auch wenn die Suchvolumen kleiner sind als im B2C-Bereich: Ein einzelner B2B-Lead aus organischer Suche kann einen Auftragswert im fünf- oder sechsstelligen Bereich haben.',
      },
      {
        q: 'Welche Keywords sind für Industriebetriebe am Chemiepark relevant?',
        a: 'Das hängt von Ihrem Angebot ab. Typische Keywords sind Fachbegriffe kombiniert mit Regionsbezug – etwa „Industriereinigung Saalekreis" oder „Chemie-Zulieferer Halle". Wir analysieren das individuell.',
      },
      {
        q: 'Können Sie auch die Sichtbarkeit auf Branchenportalen verbessern?',
        a: 'Ja. Vollständige und optimierte Einträge auf wlw, Europages, IHK-Portalen und Branchenverzeichnissen gehören zu unserer SEO-Strategie.',
      },
      {
        q: 'Wie messen Sie den SEO-Erfolg im B2B-Bereich?',
        a: 'Neben Rankings und Traffic messen wir qualifizierte Leads: Kontaktanfragen, Angebotsanforderungen und Bewerbungen, die über organische Suche eingehen.',
      },
    ],
    highlights: [
      'B2B-SEO für Industrie und Zulieferer am Chemiepark Buna',
      'Keyword-Strategie für Einkäufer, Partner und Fachkräfte',
      'Optimierung auf Branchenportalen und Lieferantenplattformen',
      'Monatliche Reports mit Lead-Tracking und Ranking-Entwicklung',
    ],
  },

  /* ================================================================
   *  HOHENMÖLSEN
   * ================================================================ */
  'hohenmoelsen.ki-chatbots': {
    regionSlug: 'hohenmoelsen',
    regionName: 'Hohenmölsen',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Hohenmölsen – Pixel Kraftwerk automatisiert Kundenkommunikation für Betriebe im Strukturwandel des Burgenlandkreises.',
    intro:
      'Hohenmölsen im Burgenlandkreis befindet sich mitten im Strukturwandel: Wo einst der Braunkohletagebau die Wirtschaft bestimmte, entstehen neue Unternehmen und Dienstleister. Ein KI-Chatbot von Pixel Kraftwerk hilft diesen Betrieben, von Anfang an effizient zu kommunizieren und Kundenanfragen professionell zu beantworten.',
    paragraphs: [
      'Der Strukturwandel bringt Chancen für Hohenmölsen: Neue Gewerbegebiete, Förderprogramme und eine wachsende Dienstleistungslandschaft ziehen Gründer und Investoren an. Gleichzeitig müssen etablierte Betriebe – vom Handwerker bis zum Einzelhändler – mit begrenzten Teams möglichst effizient arbeiten. Ein KI-Chatbot fängt Routineanfragen auf und verschafft Ihrem Team Zeit für das Wesentliche.',
      'Für Handwerker und Dienstleister in Hohenmölsen bedeutet das konkret: Anfragen zu Verfügbarkeiten, Preisen und Leistungen werden automatisch beantwortet. Kunden, die abends oder am Wochenende Ihre Webseite besuchen, erhalten sofort Auskunft statt eines leeren Kontaktformulars.',
      'Auch Unternehmen im Bereich erneuerbare Energien und Strukturwandelprojekte profitieren: Der Chatbot informiert über Leistungsangebote, beantwortet Fragen zu Förderprogrammen und sammelt Kontaktdaten von Interessenten – strukturiert und jederzeit abrufbar.',
      'Die Nähe zwischen Hohenmölsen und Groitzsch – nur rund 20 Kilometer – macht die Zusammenarbeit besonders unkompliziert. Persönliche Treffen, ob bei Ihnen vor Ort oder in unserem Büro, sind schnell organisiert.',
    ],
    faqs: [
      {
        q: 'Lohnt sich ein KI-Chatbot auch für junge Unternehmen in Hohenmölsen?',
        a: 'Gerade für junge Betriebe ist der Chatbot ideal: Sie wirken von Anfang an professionell, beantworten Anfragen rund um die Uhr und können sich aufs Kerngeschäft konzentrieren.',
      },
      {
        q: 'Kann der Chatbot Informationen zu Förderprogrammen im Strukturwandel liefern?',
        a: 'Ja. Wir trainieren den Chatbot mit den Inhalten, die Sie bereitstellen – ob zu Fördermitteln, Dienstleistungen oder Projektangeboten.',
      },
      {
        q: 'Wie schnell ist der Chatbot für mein Hohenmölsener Unternehmen einsatzbereit?',
        a: 'Ein erster produktiver Chatbot steht in der Regel innerhalb von zwei bis drei Wochen. Die kurze Distanz macht Abstimmungen besonders schnell.',
      },
      {
        q: 'Wie nah ist Pixel Kraftwerk an Hohenmölsen?',
        a: 'Wir sitzen in Groitzsch, nur rund 20 Kilometer entfernt. Persönliche Termine sind kurzfristig und unkompliziert möglich.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Kunden in Hohenmölsen und dem Burgenlandkreis',
      'Ideal für Betriebe im Strukturwandel – professionell ab Tag eins',
      'Schnelle Abstimmungen dank nur ~20 km Entfernung',
      'Integration in Webseite, WhatsApp und bestehende Systeme',
    ],
  },

  'hohenmoelsen.telefonassistenten': {
    regionSlug: 'hohenmoelsen',
    regionName: 'Hohenmölsen',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Hohenmölsen – Pixel Kraftwerk sichert die Erreichbarkeit von Handwerkern, Dienstleistern und neuen Betrieben im Burgenlandkreis.',
    intro:
      'In Hohenmölsen arbeiten viele Betriebe mit kleinen Teams – da geht ein verpasster Anruf schnell auf Kosten eines Auftrags. Unser KI-Telefonassistent stellt sicher, dass jeder Anruf angenommen wird, egal ob Sie auf der Baustelle, im Kundengespräch oder im Feierabend sind.',
    paragraphs: [
      'Die Betriebe in Hohenmölsen und dem umliegenden Burgenlandkreis sind oft Ein-Mann- oder Kleinstbetriebe: Handwerker, Hausmeisterservices, mobile Pflegedienste, Energieberater. Wenn das Telefon klingelt und niemand abnimmt, springt der Kunde zum Wettbewerber. Der Telefonassistent verhindert genau das.',
      'Der Assistent begrüßt Anrufende freundlich, fragt nach dem Anliegen und erfasst alle wichtigen Details: Name, Rückrufnummer, Art des Auftrags, gewünschter Termin. Sie erhalten die Information per E-Mail, SMS oder direkt in Ihrem System – übersichtlich und vollständig.',
      'Für Betriebe im Strukturwandel bietet der Telefonassistent einen professionellen Eindruck ab dem ersten Tag: Auch wenn Sie noch kein Büro mit Empfang haben, nimmt der Assistent Anrufe zuverlässig entgegen und vermittelt Seriosität und Erreichbarkeit.',
      'Die Einrichtung ist unkompliziert: Wir richten eine Rufumleitung ein, konfigurieren den Assistenten nach Ihren Vorgaben und sind bei Anpassungswünschen dank der Nähe zwischen Groitzsch und Hohenmölsen schnell vor Ort.',
    ],
    faqs: [
      {
        q: 'Wie hilft ein Telefonassistent kleinen Betrieben in Hohenmölsen?',
        a: 'Kein verpasster Anruf mehr, professionelle Erreichbarkeit ohne eigene Empfangskraft – besonders für Ein-Mann-Betriebe und Handwerker ein enormer Vorteil.',
      },
      {
        q: 'Was kostet der Telefonassistent für einen kleinen Betrieb?',
        a: 'Die Kosten richten sich nach Anrufvolumen und gewünschten Funktionen. Für Kleinstbetriebe gibt es besonders kosteneffiziente Einstiegsmodelle.',
      },
      {
        q: 'Kann der Assistent auch dringende Anrufe sofort weiterleiten?',
        a: 'Ja. Notfälle und eilige Anfragen werden anhand definierter Kriterien erkannt und sofort an Ihre Mobilnummer weitergeleitet.',
      },
      {
        q: 'Wie schnell ist der Telefonassistent einsatzbereit?',
        a: 'Die Einrichtung dauert in der Regel nur wenige Tage. Da wir nur 20 Kilometer entfernt sitzen, geht alles besonders schnell.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch für Ein-Mann-Betriebe in Hohenmölsen',
      'Professionelle Erreichbarkeit ohne eigenes Sekretariat',
      'Dringende Anrufe werden sofort an Ihr Handy weitergeleitet',
      'Kürzeste Wege – Groitzsch liegt nur ~20 km von Hohenmölsen entfernt',
    ],
  },

  'hohenmoelsen.automatisierungen': {
    regionSlug: 'hohenmoelsen',
    regionName: 'Hohenmölsen',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Hohenmölsen – Pixel Kraftwerk digitalisiert Abläufe für Betriebe im Strukturwandel des Burgenlandkreises.',
    intro:
      'Hohenmölsen befindet sich im Umbruch: Neue Unternehmen entstehen, bestehende Betriebe modernisieren sich. Pixel Kraftwerk unterstützt diesen Wandel mit intelligenten Automatisierungen, die Abläufe effizienter machen und begrenzte Ressourcen optimal nutzen.',
    paragraphs: [
      'Gerade in einer Region im Strukturwandel ist Effizienz entscheidend: Betriebe in Hohenmölsen müssen mit schlanken Teams viel bewegen. Automatisierungen helfen, Verwaltungsaufgaben zu minimieren – von der Rechnungsstellung über die Kundenkommunikation bis zur Einsatzplanung.',
      'Für Handwerksbetriebe im Burgenlandkreis automatisieren wir typische Abläufe: Nach Auftragsabschluss wird die Rechnung automatisch erstellt, der Kunde erhält eine Zufriedenheitsanfrage, und offene Posten werden termingerecht gemahnt. Das spart Stunden pro Woche, die sonst in Papierkram fließen.',
      'Unternehmen im Bereich erneuerbare Energien und Strukturwandelprojekte profitieren von automatisierten Berichterstattungen: Fördermittelabrechnungen, Projektfortschrittsberichte und Dokumentenmanagement laufen digital und nachvollziehbar – ein großer Vorteil bei der Zusammenarbeit mit Behörden und Fördermittelgebern.',
      'Wir verbinden Ihre bestehenden Tools miteinander: Buchhaltungssoftware, Kalender, E-Mail, Projektmanagement. Die Automatisierungen wachsen mit Ihrem Unternehmen – vom ersten einfachen Workflow bis zur umfassenden Prozessdigitalisierung.',
    ],
    faqs: [
      {
        q: 'Welche Automatisierungen sind für Betriebe in Hohenmölsen besonders nützlich?',
        a: 'Rechnungsstellung, Auftragsbestätigungen, Terminerinnerungen und Kundennachfass bieten den schnellsten Return – mit minimalem Einrichtungsaufwand.',
      },
      {
        q: 'Können Automatisierungen auch bei Fördermittel-Dokumentation helfen?',
        a: 'Ja. Wir automatisieren Berichtserstellung, Dokumentensammlung und Fristenüberwachung – besonders nützlich für Strukturwandelprojekte mit Fördermittelbezug.',
      },
      {
        q: 'Wachsen die Automatisierungen mit meinem Unternehmen mit?',
        a: 'Ja. Wir starten mit den dringendsten Prozessen und erweitern schrittweise. Die Plattformen sind skalierbar und wachsen problemlos mit.',
      },
      {
        q: 'Brauche ich technische Vorkenntnisse?',
        a: 'Nein. Wir richten alles ein, schulen Sie im Umgang und stehen für Anpassungen bereit. Sie müssen keine Automatisierung selbst programmieren.',
      },
    ],
    highlights: [
      'Effizienzsteigerung für Betriebe im Strukturwandel des Burgenlandkreises',
      'Automatisierte Rechnungsstellung und Kundenkommunikation',
      'Unterstützung bei Fördermittel-Dokumentation und Reporting',
      'Wir sitzen nur ~20 km entfernt – schnelle Reaktionszeiten garantiert',
    ],
  },

  'hohenmoelsen.webseiten': {
    regionSlug: 'hohenmoelsen',
    regionName: 'Hohenmölsen',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Hohenmölsen – Pixel Kraftwerk erstellt moderne Internetauftritte für Betriebe im Burgenlandkreis.',
    intro:
      'Für Unternehmen in Hohenmölsen ist eine professionelle Webseite besonders wichtig: Im Strukturwandel entstehen neue Betriebe, die sich von Anfang an sichtbar und überzeugend präsentieren müssen. Pixel Kraftwerk erstellt Webseiten, die Vertrauen schaffen und Kunden gewinnen.',
    paragraphs: [
      'Viele Betriebe in Hohenmölsen starten gerade erst oder modernisieren sich. Eine zeitgemäße Webseite ist dabei essenziell: Potenzielle Kunden, Geschäftspartner und Fachkräfte googeln Ihr Unternehmen, bevor sie Kontakt aufnehmen. Was sie finden, entscheidet über den ersten Eindruck.',
      'Wir erstellen Webseiten, die Ihr Unternehmen im Burgenlandkreis professionell darstellen: Klare Leistungsübersicht, Referenzen, Team-Vorstellung und einfache Kontaktmöglichkeiten. Die Seite lädt in unter zwei Sekunden und funktioniert auf Smartphone, Tablet und Desktop gleichermaßen.',
      'Für Unternehmen im Bereich Strukturwandel und erneuerbare Energien gestalten wir Webseiten, die auch Fördermittelgeber und Investoren ansprechen: Projektübersichten, Nachhaltigkeitsberichte und Partnernetzwerke werden übersichtlich dargestellt.',
      'Jede Webseite enthält eine SEO-Grundstruktur: Lokale Keywords wie „Elektriker Hohenmölsen" oder „Energieberater Burgenlandkreis" sind eingebaut, Ladezeiten optimiert und Google-Unternehmensprofil verknüpft. So werden Sie bei lokalen Suchen gefunden.',
      'Die räumliche Nähe macht den Prozess besonders effizient: Zwischen Groitzsch und Hohenmölsen liegen nur rund 20 Kilometer. Abstimmungen, Foto-Termine und Workshops sind kurzfristig möglich.',
    ],
    faqs: [
      {
        q: 'Braucht mein junges Unternehmen in Hohenmölsen gleich eine professionelle Webseite?',
        a: 'Gerade als neues Unternehmen profitieren Sie enorm: Eine professionelle Webseite schafft Vertrauen, bevor Kunden Sie persönlich kennen – das beschleunigt die Kundengewinnung.',
      },
      {
        q: 'Kann ich die Webseite später selbst aktualisieren?',
        a: 'Ja. Sie erhalten ein einfaches CMS, mit dem Sie Texte, Bilder und Neuigkeiten eigenständig pflegen können – ohne technische Vorkenntnisse.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Eine typische Unternehmenswebseite ist in drei bis vier Wochen fertig. Die kurze Distanz zwischen Groitzsch und Hohenmölsen beschleunigt Abstimmungen.',
      },
      {
        q: 'Bieten Sie auch Fotografie für die Webseite an?',
        a: 'Wir arbeiten mit regionalen Fotografen zusammen und koordinieren professionelle Aufnahmen von Ihrem Betrieb, Ihrem Team und Ihren Projekten in Hohenmölsen.',
      },
    ],
    highlights: [
      'Professioneller Internetauftritt für Betriebe im Strukturwandel',
      'Mobiloptimiert mit Ladezeiten unter 2 Sekunden',
      'SEO-Grundstruktur für lokale Sichtbarkeit im Burgenlandkreis',
      'Nur ~20 km entfernt – schnelle Abstimmungen und persönliche Treffen',
    ],
  },

  'hohenmoelsen.seo-top-3': {
    regionSlug: 'hohenmoelsen',
    regionName: 'Hohenmölsen',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Hohenmölsen – Pixel Kraftwerk bringt Handwerker, Dienstleister und neue Betriebe in die Top 3 bei Google im Burgenlandkreis.',
    intro:
      'In Hohenmölsen suchen Kunden lokal: nach Handwerkern, Dienstleistern, Energieberatern und mehr. Wer in den Top 3 bei Google steht, bekommt die meisten Anfragen. Pixel Kraftwerk bringt Ihr Unternehmen dorthin – mit gezielter lokaler SEO für Hohenmölsen und den Burgenlandkreis.',
    paragraphs: [
      'Der Strukturwandel in Hohenmölsen bedeutet auch eine Verschiebung der Wettbewerbslandschaft: Neue Betriebe drängen auf den Markt, etablierte Anbieter müssen ihre Sichtbarkeit verteidigen. Wer bei Google auf Seite 2 steht, existiert für viele Kunden nicht. Lokale SEO ist der Hebel, um dauerhaft sichtbar zu bleiben.',
      'Wir starten mit einer Analyse des lokalen Suchverhaltens: Was suchen Menschen in Hohenmölsen und dem Burgenlandkreis? Welche Begriffe nutzen sie? Wie stark ist die Konkurrenz? Daraus entwickeln wir eine maßgeschneiderte SEO-Strategie für Ihren Betrieb.',
      'Ihr Google-Unternehmensprofil optimieren wir vollständig: Aktuelle Angaben, ansprechende Fotos, regelmäßige Beiträge und eine systematische Bewertungsstrategie. In einer kleineren Stadt wie Hohenmölsen machen schon wenige gute Bewertungen einen großen Unterschied.',
      'Auf Ihrer Webseite optimieren wir Inhalte, Struktur und Technik: Lokale Keywords, interne Verlinkung, strukturierte Daten und schnelle Ladezeiten sorgen dafür, dass Google Ihr Unternehmen als relevantestes Ergebnis für Hohenmölsen einstuft.',
    ],
    faqs: [
      {
        q: 'Ist SEO in einer kleinen Stadt wie Hohenmölsen wirklich wichtig?',
        a: 'Gerade hier ist SEO besonders effektiv: Weniger Konkurrenz bedeutet, dass Sie mit gezielten Maßnahmen schnell auf die Top-Positionen kommen.',
      },
      {
        q: 'Wie schnell sehe ich Ergebnisse?',
        a: 'Erste Verbesserungen sind oft nach drei bis sechs Wochen sichtbar. In kleineren Städten wie Hohenmölsen erreichen wir Top-3-Positionen häufig schon innerhalb von zwei bis vier Monaten.',
      },
      {
        q: 'Wie wichtig sind Google-Bewertungen für mein Hohenmölsener Unternehmen?',
        a: 'Sehr wichtig. In kleineren Märkten haben Bewertungen überproportional viel Einfluss auf das Ranking und die Entscheidung potenzieller Kunden.',
      },
      {
        q: 'Betreuen Sie die SEO fortlaufend?',
        a: 'Ja. SEO ist ein kontinuierlicher Prozess. Wir überwachen Rankings, passen die Strategie an und liefern monatliche Reports – alles transparent und verständlich.',
      },
    ],
    highlights: [
      'Schnelle Top-3-Rankings dank geringem Wettbewerb in Hohenmölsen',
      'Google-Unternehmensprofil-Optimierung mit Bewertungsstrategie',
      'Monatliche Reports mit Rankings und Traffic-Entwicklung',
      'Nur ~20 km entfernt – persönliche Betreuung aus Groitzsch',
    ],
  },

  /* ================================================================
   *  EISENBERG
   * ================================================================ */
  'eisenberg.ki-chatbots': {
    regionSlug: 'eisenberg',
    regionName: 'Eisenberg',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Eisenberg – Pixel Kraftwerk automatisiert Kundenkommunikation für Keramikbranche, Handwerk und Dienstleister im Saale-Holzland-Kreis.',
    intro:
      'Eisenberg, Kreisstadt des Saale-Holzland-Kreises in Thüringen, ist bekannt für seine Keramiktradition und eine lebendige Mischung aus Handwerk, Handel und Dienstleistung. Ein KI-Chatbot von Pixel Kraftwerk beantwortet Kundenanfragen rund um die Uhr und gibt Eisenberger Betrieben den digitalen Vorsprung.',
    paragraphs: [
      'Die Eisenberger Wirtschaft ist vielfältig: Keramikmanufakturen mit langer Tradition, Handwerksbetriebe, Einzelhändler am Markt und Dienstleister im gesamten Saale-Holzland-Kreis bilden ein dichtes Netz an Unternehmen. Gemeinsam haben sie, dass täglich Routineanfragen eingehen: Öffnungszeiten, Preise, Produktverfügbarkeit, Terminwünsche. Ein KI-Chatbot übernimmt diese Anfragen zuverlässig.',
      'Für die Eisenberger Keramikbranche bietet ein Chatbot besonderen Mehrwert: Kunden und Händler fragen nach Produktsortimenten, Sonderanfertigungen, Lieferzeiten und Preisen. Der Chatbot liefert sofort Antworten, zeigt Produktkataloge und leitet Bestellanfragen an den Vertrieb weiter – auch am Wochenende und nach Geschäftsschluss.',
      'Handwerker und Praxen in Eisenberg profitieren ebenso: Anfragen werden vorqualifiziert, Kontaktdaten erfasst und dringende Anliegen markiert. Das Team kann sich auf die Arbeit konzentrieren, während der Chatbot die Kommunikation managt.',
      'Technisch integrieren wir den Chatbot in Ihre Webseite und verbinden ihn auf Wunsch mit Ihrem Warenwirtschaftssystem, CRM oder Onlineshop. Auch WhatsApp und Facebook Messenger sind möglich, um Kunden dort zu erreichen, wo sie aktiv sind.',
      'Pixel Kraftwerk ist in Groitzsch ansässig, rund 50 Kilometer von Eisenberg entfernt. Trotz der etwas größeren Distanz sind persönliche Termine – ob in Ihrer Manufaktur, Ihrer Praxis oder Ihrem Geschäft – selbstverständlich.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein Chatbot auch für Keramikmanufakturen in Eisenberg?',
        a: 'Hervorragend. Der Chatbot beantwortet Fragen zu Sortiment, Sonderanfertigungen und Lieferzeiten und leitet qualifizierte Anfragen an Ihren Vertrieb weiter.',
      },
      {
        q: 'Kann der Chatbot auch Bestellungen aufnehmen?',
        a: 'Ja. Der Chatbot kann Bestellwünsche erfassen und an Ihr Warenwirtschaftssystem oder per E-Mail weiterleiten – inklusive aller Details wie Produktauswahl und Mengen.',
      },
      {
        q: 'Wie schnell ist der Chatbot für mein Eisenberger Unternehmen einsatzbereit?',
        a: 'In der Regel innerhalb von zwei bis vier Wochen. Ein einfacher FAQ-Chatbot kann auch schneller live gehen.',
      },
      {
        q: 'Kommen Sie auch nach Eisenberg in Thüringen?',
        a: 'Ja. Von Groitzsch erreichen wir Eisenberg in rund 45 Minuten. Persönliche Termine vor Ort sind jederzeit möglich.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Kunden, Händler und Partner in Eisenberg',
      'Ideal für Keramikbranche – Produktanfragen automatisiert beantworten',
      'Integration in Warenwirtschaft, CRM und Onlineshop',
      'Persönliche Betreuung aus Groitzsch – ~50 km entfernt',
    ],
  },

  'eisenberg.telefonassistenten': {
    regionSlug: 'eisenberg',
    regionName: 'Eisenberg',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'KI-Telefonassistenten für Eisenberg – Pixel Kraftwerk sichert die Erreichbarkeit von Handwerkern, Manufakturen und Praxen im Saale-Holzland-Kreis.',
    intro:
      'In Eisenberg ist das Telefon für viele Betriebe der direkteste Weg zum Kunden – ob Keramikmanufaktur, Handwerksbetrieb oder Arztpraxis. Doch wenn in der Werkstatt Hochbetrieb herrscht oder das Praxisteam Patienten versorgt, klingelt das Telefon oft vergeblich. Unser KI-Telefonassistent ändert das.',
    paragraphs: [
      'Eisenberger Betriebe kennen das Problem: Ein Kunde ruft an, während der Meister in der Keramikwerkstatt steht, der Handwerker beim Kunden in Hermsdorf ist oder die Sprechstundenhilfe Patienten einweist. Der Telefonassistent nimmt den Anruf professionell entgegen, klärt das Anliegen und erfasst alle Informationen.',
      'Für Keramikmanufakturen und Produktionsbetriebe in Eisenberg ist der Assistent besonders wertvoll: Händleranfragen zu Lieferzeiten und Bestellstatus werden aufgenommen, Endkunden erhalten Auskunft zu Produkten und Öffnungszeiten des Werksverkaufs. Dringende Reklamationen werden sofort an den Verantwortlichen weitergeleitet.',
      'Arztpraxen und Therapeuten im Saale-Holzland-Kreis profitieren von automatisierter Terminvergabe und Rezeptanfragen. Das Praxisteam arbeitet die gesammelten Anfragen geordnet ab, statt ständig zwischen Behandlung und Telefon zu wechseln.',
      'Wir konfigurieren den Assistenten individuell für Ihren Betrieb: Begrüßung, Fragelogik, Weiterleitung und Dringlichkeitsstufen werden an Ihre konkreten Abläufe in Eisenberg angepasst.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Bestellanfragen für Eisenberger Manufakturen aufnehmen?',
        a: 'Ja. Der Assistent erfasst Produktwünsche, Mengen und Lieferdetails und leitet die Informationen strukturiert an Ihren Vertrieb weiter.',
      },
      {
        q: 'Funktioniert der Assistent auch außerhalb der Geschäftszeiten?',
        a: 'Ja. Er ist rund um die Uhr aktiv und nimmt Anrufe auch abends, am Wochenende und an Feiertagen entgegen.',
      },
      {
        q: 'Kann der Assistent auch Anrufer auf Englisch betreuen?',
        a: 'Ja. Für Keramikmanufakturen mit internationalen Kunden richten wir den Assistenten auf Wunsch mehrsprachig ein.',
      },
      {
        q: 'Was passiert bei technischen Störungen des Telefonassistenten?',
        a: 'Der Assistent läuft auf hochverfügbarer Infrastruktur. Bei seltenen Störungen werden Anrufe automatisch an Ihre hinterlegte Nummer zurückgeleitet.',
      },
    ],
    highlights: [
      'Kein verpasster Anruf – auch während der Produktion oder Behandlung',
      'Bestellanfragen und Reklamationen werden strukturiert erfasst',
      'Mehrsprachig einsetzbar für internationale Kunden',
      'Individuelle Konfiguration für Ihren Eisenberger Betrieb',
    ],
  },

  'eisenberg.automatisierungen': {
    regionSlug: 'eisenberg',
    regionName: 'Eisenberg',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Eisenberg – Pixel Kraftwerk digitalisiert Abläufe in Keramikbranche, Handwerk und Verwaltung im Saale-Holzland-Kreis.',
    intro:
      'Ob Keramikmanufaktur, Handwerksbetrieb oder Dienstleister – in Eisenberg steckt viel Potenzial in der Automatisierung manueller Abläufe. Pixel Kraftwerk digitalisiert Ihre Prozesse, damit Ihre Mitarbeiter sich auf Handwerk, Produktion und Kundenbetreuung konzentrieren können.',
    paragraphs: [
      'In der Eisenberger Keramikbranche gibt es zahlreiche Automatisierungspotenziale: Bestelleingänge können automatisch ins System übernommen, Auftragsbestätigungen verschickt und Lieferscheine generiert werden. Nach dem Versand wird die Rechnung automatisch erstellt und der Kunde über den Lieferstatus informiert.',
      'Für Handwerksbetriebe im Saale-Holzland-Kreis automatisieren wir typische Verwaltungsaufgaben: Angebote werden aus Vorlagen generiert, nach Auftragsabschluss folgen Rechnung und Zufriedenheitsanfrage automatisch, offene Posten werden termingerecht nachgefasst.',
      'Praxen in Eisenberg profitieren von automatisierten Terminerinnerungen, digitalen Anamnesebögen und automatischer Patientenkommunikation. Ausfallquoten sinken, und das Praxisteam spart täglich wertvolle Minuten.',
      'Technisch verbinden wir Ihre bestehenden Werkzeuge: Buchhaltungssoftware, Kalender, E-Mail, Warenwirtschaft und CRM. Wir nutzen Plattformen wie Make und n8n, die sich flexibel an Ihre Prozesse anpassen und mit Ihrem Betrieb mitwachsen.',
    ],
    faqs: [
      {
        q: 'Welche Automatisierungen sind für die Keramikbranche in Eisenberg sinnvoll?',
        a: 'Bestellabwicklung, Lieferscheinerstellung, Rechnungsversand und Lagerbestandsmeldungen bieten den größten Hebel – mit sofort spürbarer Entlastung.',
      },
      {
        q: 'Muss ich meine bestehende Software wechseln?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme und automatisieren die Übergaben. Ein Softwarewechsel ist nicht nötig.',
      },
      {
        q: 'Wie schnell amortisiert sich die Investition?',
        a: 'In der Regel innerhalb weniger Monate. Die gesparte Arbeitszeit und die Reduktion von Fehlern machen den Unterschied schnell spürbar.',
      },
      {
        q: 'Kann ich die Automatisierungen später erweitern?',
        a: 'Ja. Wir starten mit den dringendsten Prozessen und erweitern schrittweise – passend zum Wachstum Ihres Eisenberger Betriebs.',
      },
    ],
    highlights: [
      'Bestellabwicklung und Rechnungsversand vollständig automatisiert',
      'Bestehende Software bleibt erhalten – wir verbinden Ihre Systeme',
      'Skalierbare Lösung, die mit Ihrem Betrieb wächst',
      'Persönliche Betreuung aus Groitzsch – ~50 km entfernt',
    ],
  },

  'eisenberg.webseiten': {
    regionSlug: 'eisenberg',
    regionName: 'Eisenberg',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Eisenberg – Pixel Kraftwerk erstellt moderne Internetauftritte für Keramikbranche, Handwerk und Dienstleister im Saale-Holzland-Kreis.',
    intro:
      'Eisenberg als Kreisstadt des Saale-Holzland-Kreises verdient Webseiten, die der Qualität des lokalen Handwerks und der Keramiktradition gerecht werden. Pixel Kraftwerk erstellt professionelle, schnelle und mobiloptimierte Webseiten, die Eisenberger Unternehmen überzeugend ins Netz bringen.',
    paragraphs: [
      'Die Keramiktradition Eisenbergs ist weit über Thüringen hinaus bekannt – doch viele Manufakturen und Betriebe haben online noch nicht die Sichtbarkeit, die ihrer Qualität entspricht. Eine moderne Webseite mit ansprechender Produktpräsentation, Bildergalerien und Onlineshop-Anbindung ändert das grundlegend.',
      'Für Keramikmanufakturen gestalten wir Webseiten, die Handwerkskunst digital erlebbar machen: Hochauflösende Produktfotos, Sortierfunktionen, Storytelling zur Firmengeschichte und ein übersichtlicher Weg zur Bestellung – ob direkt über einen integrierten Shop oder per Kontaktanfrage.',
      'Handwerker, Arztpraxen und Dienstleister in Eisenberg erhalten Webseiten mit klarer Leistungsübersicht, Google-Maps-Einbindung, Online-Terminbuchung und einer Gestaltung, die auf Smartphone und Desktop gleichermaßen überzeugt.',
      'Technisch setzen wir auf Ladezeiten unter zwei Sekunden und eine SEO-Grundstruktur mit lokalen Keywords. Strukturierte Daten helfen Google, Ihr Unternehmen für Suchanfragen aus Eisenberg und dem Saale-Holzland-Kreis richtig einzuordnen.',
      'Trotz der rund 50 Kilometer Entfernung zwischen Groitzsch und Eisenberg sind persönliche Abstimmungen, Foto-Termine und Workshops vor Ort selbstverständlich.',
    ],
    faqs: [
      {
        q: 'Können Sie eine Webseite mit Onlineshop für meine Eisenberger Manufaktur erstellen?',
        a: 'Ja. Wir integrieren einen Onlineshop in Ihre Webseite – mit Produktkatalog, Warenkorbfunktion und sicherer Bezahlung.',
      },
      {
        q: 'Wie werden Eisenberger Keramikprodukte auf der Webseite am besten präsentiert?',
        a: 'Mit hochwertigen Produktfotos, Filterfunktionen nach Kategorie und Verwendungszweck sowie Storytelling-Elementen, die die Handwerkskunst erlebbar machen.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen?',
        a: 'Ja. Sie erhalten ein benutzerfreundliches CMS, mit dem Sie Produkte, Texte und Bilder eigenständig aktualisieren können.',
      },
      {
        q: 'Wie lange dauert die Erstellung?',
        a: 'Eine Webseite mit Onlineshop-Anbindung ist in vier bis sechs Wochen fertig. Einfachere Unternehmensseiten sind schneller live.',
      },
    ],
    highlights: [
      'Webseite mit Onlineshop-Option für Eisenberger Manufakturen',
      'Produktpräsentation, die Handwerkskunst digital erlebbar macht',
      'Mobiloptimiert mit Ladezeiten unter 2 Sekunden',
      'SEO-Grundstruktur für Sichtbarkeit im Saale-Holzland-Kreis',
    ],
  },

  'eisenberg.seo-top-3': {
    regionSlug: 'eisenberg',
    regionName: 'Eisenberg',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Eisenberg – Pixel Kraftwerk bringt Keramikmanufakturen, Handwerker und Dienstleister in die Top 3 bei Google im Saale-Holzland-Kreis.',
    intro:
      'Ob „Keramik Eisenberg", „Handwerker Saale-Holzland-Kreis" oder „Zahnarzt Eisenberg" – wer bei diesen Suchanfragen auf Position 1 bis 3 steht, bekommt den Großteil der Klicks und Anrufe. Pixel Kraftwerk bringt Ihr Eisenberger Unternehmen dorthin.',
    paragraphs: [
      'Eisenberg als Kreisstadt hat ein gutes lokales Suchvolumen: Menschen suchen aktiv nach Produkten, Dienstleistungen und Handwerkern im Saale-Holzland-Kreis. Gleichzeitig ist die SEO-Konkurrenz in Eisenberg noch überschaubar – ideale Voraussetzungen, um mit gezielten Maßnahmen schnell auf die Top-Positionen zu kommen.',
      'Für die Eisenberger Keramikbranche bietet SEO überregionales Potenzial: Begriffe wie „Keramik kaufen Thüringen" oder „Keramikmanufaktur Eisenberg" werden deutschlandweit gesucht. Wir optimieren Ihre Webseite sowohl für lokale als auch für überregionale Suchbegriffe – damit Sie nicht nur in Eisenberg, sondern in ganz Deutschland gefunden werden.',
      'Ihr Google-Unternehmensprofil ist die Basis: Wir optimieren alle Angaben, hinterlegen professionelle Fotos, erstellen regelmäßige Beiträge und entwickeln eine Bewertungsstrategie. In einer Kreisstadt wie Eisenberg haben Bewertungen besonders großen Einfluss auf das Ranking.',
      'Ergänzend bauen wir lokale und branchenspezifische Verlinkungen auf: Einträge in Handwerkskammern, IHK-Portalen, Thüringer Branchenverzeichnissen und keramikspezifischen Portalen stärken die Autorität Ihrer Webseite nachhaltig.',
      'Sie erhalten monatliche Reports mit aktuellen Rankings, Traffic-Daten und konkreten Handlungsempfehlungen – transparent und verständlich, ohne SEO-Fachchinesisch.',
    ],
    faqs: [
      {
        q: 'Kann SEO die Eisenberger Keramikbranche auch überregional sichtbar machen?',
        a: 'Ja. Neben lokalen Keywords optimieren wir auch für überregionale Suchbegriffe wie „Keramik kaufen" oder „handgemachte Keramik Thüringen" – für Reichweite weit über Eisenberg hinaus.',
      },
      {
        q: 'Wie lange dauert es bis zu messbaren Ergebnissen?',
        a: 'Lokale Rankings verbessern sich oft nach vier bis sechs Wochen. Überregionale Keywords brauchen etwas mehr Geduld – in der Regel drei bis sechs Monate.',
      },
      {
        q: 'Was unterscheidet Ihre SEO-Strategie für Eisenberg?',
        a: 'Wir kombinieren lokale SEO für den Saale-Holzland-Kreis mit branchenspezifischer Optimierung für die Keramikbranche – ein Ansatz, der in Eisenberg besonders gut funktioniert.',
      },
      {
        q: 'Betreuen Sie die SEO auch langfristig?',
        a: 'Ja. SEO ist ein fortlaufender Prozess. Wir überwachen Rankings, passen die Strategie an Marktveränderungen an und liefern monatliche Reports.',
      },
    ],
    highlights: [
      'Lokale UND überregionale SEO für Eisenberger Unternehmen',
      'Branchenspezifische Optimierung für die Keramikbranche',
      'Google-Unternehmensprofil-Optimierung mit Bewertungsstrategie',
      'Monatliche Reports mit Rankings, Traffic und Handlungsempfehlungen',
    ],
  },
};
