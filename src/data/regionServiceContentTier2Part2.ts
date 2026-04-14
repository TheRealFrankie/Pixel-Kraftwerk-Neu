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

export const tier2ServiceContentPart2: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  /* ================================================================
   *  EILENBURG
   * ================================================================ */
  'eilenburg.ki-chatbots': {
    regionSlug: 'eilenburg',
    regionName: 'Eilenburg',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Eilenburg – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation an der Mulde.',
    intro:
      'Eilenburg, die Große Kreisstadt an der Mulde mit rund 16.000 Einwohnern, ist ein wichtiger Industriestandort in Nordsachsen. Chemie- und Kunststoffunternehmen, Zulieferbetriebe und Dienstleister bilden das Rückgrat der lokalen Wirtschaft. Ein KI-Chatbot von Pixel Kraftwerk beantwortet Kundenanfragen rund um die Uhr und entlastet Ihr Team im Tagesgeschäft.',
    paragraphs: [
      'Die Eilenburger Wirtschaft ist stark durch die Chemie- und Kunststoffindustrie geprägt. Betriebe in diesen Branchen erhalten regelmäßig technische Anfragen zu Produktspezifikationen, Lieferzeiten und Mindestmengen. Ein KI-Chatbot auf Ihrer Webseite beantwortet diese Standardfragen sofort, erfasst individuelle Anforderungen strukturiert und leitet komplexe Anliegen an Ihren Vertrieb weiter – ohne Wartezeit für den Kunden.',
      'Auch Eilenburger Dienstleister, Handwerksbetriebe und Einzelhändler in der Innenstadt profitieren: Ein Friseur am Marktplatz kann über den Chatbot Terminanfragen automatisch entgegennehmen, ein Installateur im Gewerbegebiet an der B87 lässt Schadensmeldungen vorqualifizieren und ein Gastronomiebetrieb nahe dem Stadtpark beantwortet Reservierungsfragen automatisch.',
      'Die technische Integration erfolgt reibungslos in Ihre bestehende Website – ob WordPress, Jimdo oder ein individuelles System. Auf Wunsch verbinden wir den Chatbot mit Ihrem CRM, Ihrem Warenwirtschaftssystem oder Ihrem Kalender, damit Anfragen direkt im richtigen System erfasst werden.',
      'Pixel Kraftwerk sitzt in Groitzsch, rund 50 Kilometer südwestlich von Eilenburg. Trotz der Entfernung sind persönliche Termine selbstverständlich möglich – ob bei Ihnen im Betrieb, per Videocall oder in unseren Räumen. Wir kennen die Strukturen nordsächsischer Unternehmen und entwickeln Lösungen, die zu Ihrer Betriebsgröße passen.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für Industrieunternehmen in Eilenburg?',
        a: 'Absolut. Gerade in der Chemie- und Kunststoffindustrie fallen viele Standardanfragen zu Produkten, Lieferzeiten und Zertifikaten an. Ein Chatbot beantwortet diese rund um die Uhr und qualifiziert Anfragen für Ihren Vertrieb vor.',
      },
      {
        q: 'Kann der Chatbot auch auf Deutsch und Englisch für Eilenburger Exportbetriebe arbeiten?',
        a: 'Ja. Wir richten den Chatbot mehrsprachig ein, sodass er internationale Anfragen in der jeweiligen Sprache bearbeiten kann – ideal für exportorientierte Eilenburger Unternehmen.',
      },
      {
        q: 'Wie schnell kann ein Chatbot für mein Eilenburger Unternehmen live gehen?',
        a: 'In der Regel ist ein erster produktiver Chatbot innerhalb von zwei bis vier Wochen einsatzbereit. Wir starten mit einer Analyse Ihrer häufigsten Anfragen und bauen darauf die Dialogstruktur auf.',
      },
      {
        q: 'Kommt Pixel Kraftwerk auch nach Eilenburg für die Einrichtung?',
        a: 'Ja, von Groitzsch erreichen wir Eilenburg in rund einer Stunde. Persönliche Erstgespräche, Workshops und technische Einrichtung vor Ort sind jederzeit möglich.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Industrie- und Gewerbekunden in Eilenburg',
      'Mehrsprachige Dialogführung für exportorientierte Betriebe',
      'Integration in CRM, Warenwirtschaft und Kalender',
      'Persönliche Betreuung aus Groitzsch – rund 50 km entfernt',
    ],
  },

  'eilenburg.telefonassistenten': {
    regionSlug: 'eilenburg',
    regionName: 'Eilenburg',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Eilenburg – Pixel Kraftwerk sichert Ihre telefonische Erreichbarkeit in Industrie und Gewerbe.',
    intro:
      'In Eilenburg ist das Telefon für viele Betriebe der wichtigste Draht zum Kunden – ob Zulieferer an der Mulde, Arztpraxis in der Innenstadt oder Handwerksbetrieb im Gewerbegebiet. Wenn Ihr Team in Produktion, Behandlung oder auf der Baustelle gebunden ist, übernimmt unser Telefonassistent zuverlässig jeden Anruf.',
    paragraphs: [
      'Die Eilenburger Chemie- und Kunststoffbranche arbeitet oft im Schichtbetrieb – Anrufe kommen nicht nur zwischen 9 und 17 Uhr. Unser Telefonassistent ist auch außerhalb der Bürozeiten erreichbar, erfasst Bestellanfragen, Reklamationen und technische Rückfragen und leitet sie als strukturierte Nachricht an die zuständige Abteilung weiter.',
      'Für Arztpraxen und Gesundheitsdienstleister in Eilenburg löst der Telefonassistent ein vertrautes Problem: Patientinnen und Patienten rufen an, während das Praxisteam in der Sprechstunde ist. Der Assistent nimmt Terminwünsche auf, klärt den Versicherungsstatus und informiert über Sprechzeiten – freundlich und zuverlässig.',
      'Handwerksbetriebe in Eilenburg und Umgebung profitieren ebenfalls: Wenn der Meister auf der Baustelle in Delitzsch oder Bad Düben ist, geht kein Auftrag verloren. Der Assistent erfasst Art und Dringlichkeit des Anliegens und leitet die Informationen per E-Mail oder ins CRM weiter.',
      'Wir passen den Telefonassistenten exakt an Ihre Gesprächsabläufe an. Gemeinsam definieren wir, welche Fragen beantwortet werden, wann direkt weitergeleitet wird und welche Informationen erfasst werden sollen. So wird der Assistent zu einer echten Erweiterung Ihres Teams.',
    ],
    faqs: [
      {
        q: 'Funktioniert der Telefonassistent auch außerhalb der Geschäftszeiten für Eilenburger Betriebe?',
        a: 'Ja, der Assistent ist rund um die Uhr erreichbar. Gerade für Schichtbetriebe in der Eilenburger Industrie ist das ein großer Vorteil, weil Anfragen auch nachts oder am Wochenende erfasst werden.',
      },
      {
        q: 'Kann der Telefonassistent mit meiner Branchensoftware in Eilenburg zusammenarbeiten?',
        a: 'Wir binden den Assistenten an gängige CRM-Systeme, Praxissoftware und Warenwirtschaftslösungen an. Erfasste Daten landen direkt im System, das Ihr Team bereits nutzt.',
      },
      {
        q: 'Wie reagieren Anrufende auf einen automatisierten Assistenten?',
        a: 'Wenn der Assistent professionell und freundlich agiert, nehmen Anrufende ihn sehr gut an – insbesondere wenn die Alternative ein unbeantworteter Anruf oder eine Warteschleife wäre.',
      },
      {
        q: 'Was kostet ein Telefonassistent für einen Betrieb in Eilenburg?',
        a: 'Die Kosten richten sich nach Umfang und Komplexität. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot, das zu Ihrer Betriebsgröße und Ihrem Anrufvolumen passt.',
      },
    ],
    highlights: [
      '24/7-Anrufannahme für Schichtbetriebe und Gewerbe in Eilenburg',
      'Strukturierte Erfassung von Aufträgen und Terminwünschen',
      'Anbindung an CRM, Praxissoftware und Warenwirtschaft',
      'Individuelle Gesprächslogik für Ihre Branche',
    ],
  },

  'eilenburg.automatisierungen': {
    regionSlug: 'eilenburg',
    regionName: 'Eilenburg',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Eilenburg – Pixel Kraftwerk verbindet Ihre Systeme und eliminiert Routineaufgaben.',
    intro:
      'In vielen Eilenburger Betrieben werden Daten noch manuell zwischen E-Mail, Tabelle und Branchensoftware übertragen. Bestellbestätigungen gehen per Hand raus, Lagerbestände werden manuell abgeglichen und Follow-ups geraten in Vergessenheit. Pixel Kraftwerk automatisiert genau diese Abläufe – abgestimmt auf die Anforderungen der Chemie-, Kunststoff- und Zulieferindustrie an der Mulde.',
    paragraphs: [
      'Die Eilenburger Wirtschaft ist geprägt von produzierenden Unternehmen, die mit verschiedenen Systemen arbeiten: Warenwirtschaft, Produktionsplanung, CRM und Buchhaltung laufen oft nebeneinander her. Automatisierungen verbinden diese Systeme, sodass Daten automatisch fließen – ohne doppelte Eingabe, ohne Übertragungsfehler.',
      'Typische Einsatzfelder für Eilenburger Unternehmen: Bestelleingänge werden automatisch ins Warenwirtschaftssystem übertragen und lösen eine Auftragsbestätigung aus. Lieferstatus-Updates gehen ohne manuelles Zutun an den Kunden. Lagerbestandsmeldungen bei Unterschreitung von Mindestmengen werden automatisch generiert und an den Einkauf weitergeleitet.',
      'Auch Dienstleister und Handwerksbetriebe in Eilenburg profitieren: Kontaktanfragen von der Webseite landen automatisch im CRM, Terminbestätigungen und Erinnerungen werden ohne Zutun versendet und Angebote nach dem Erstgespräch automatisch erstellt.',
      'Wir arbeiten mit bewährten Plattformen wie Make, n8n oder individuellen API-Anbindungen – je nachdem, was zu Ihrer bestehenden IT-Infrastruktur passt. Die Einführung erfolgt schrittweise, damit Ihr Team sich an die neuen Prozesse gewöhnen kann.',
      'Von Groitzsch aus betreuen wir Eilenburger Unternehmen persönlich. Für Prozessanalysen, Workshops oder technische Einrichtung kommen wir direkt zu Ihnen in den Betrieb.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in einem Eilenburger Industriebetrieb automatisieren?',
        a: 'Typische Einsatzfelder sind Bestellverarbeitung, Auftragsbestätigungen, Lieferstatus-Updates, Lagermeldungen, Rechnungsversand und Kundenkommunikation. Grundsätzlich eignet sich jeder wiederkehrende Prozess mit klaren Regeln.',
      },
      {
        q: 'Muss ich meine bestehende Software in Eilenburg ersetzen?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme – ob Warenwirtschaft, CRM oder Buchhaltung – und automatisieren den Datenaustausch. Niemand muss sich in neue Software einarbeiten.',
      },
      {
        q: 'Wie schnell amortisiert sich eine Automatisierung?',
        a: 'Das hängt vom Prozessvolumen ab. Viele Eilenburger Unternehmen sparen bereits im ersten Monat mehrere Arbeitsstunden pro Woche – die Investition rechnet sich oft innerhalb weniger Wochen.',
      },
      {
        q: 'Bietet Pixel Kraftwerk auch Schulungen für unser Team in Eilenburg an?',
        a: 'Ja. Wir schulen Ihr Team in der Nutzung der neuen Automatisierungen und stehen auch nach der Einrichtung für Anpassungen und Fragen zur Verfügung.',
      },
    ],
    highlights: [
      'Nahtlose Verbindung von Warenwirtschaft, CRM und Buchhaltung',
      'Automatische Bestellverarbeitung und Statusbenachrichtigungen',
      'Schrittweise Einführung ohne Betriebsunterbrechung',
      'Persönliche Betreuung und Schulung aus der Region',
    ],
  },

  'eilenburg.webseiten': {
    regionSlug: 'eilenburg',
    regionName: 'Eilenburg',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Eilenburg – Pixel Kraftwerk erstellt moderne Internetauftritte für den Mittelstand an der Mulde.',
    intro:
      'Für Unternehmen in Eilenburg ist eine professionelle Webseite die digitale Visitenkarte – ob Chemiebetrieb mit internationaler Kundschaft, Handwerker vor Ort oder Dienstleister in der Innenstadt. Pixel Kraftwerk entwickelt schnelle, mobiloptimierte Webseiten, die bei Google gefunden werden und Besucher in Kunden verwandeln.',
    paragraphs: [
      'Die Eilenburger Wirtschaftsstruktur ist vielfältig: Industrieunternehmen brauchen technische Produktseiten mit Datenblättern und Zertifikaten, Handwerksbetriebe benötigen eine klare Leistungsübersicht mit Kontaktmöglichkeit und Einzelhändler in der Innenstadt wollen ihre Angebote online sichtbar machen. Wir entwickeln für jede Branche den passenden Internetauftritt.',
      'Unsere Webseiten sind von Grund auf für Suchmaschinen optimiert. Wer in Eilenburg nach einem Dienstleister, Handwerker oder Spezialisten sucht, soll Ihr Unternehmen finden – nicht die Konkurrenz. Dafür setzen wir auf schnelle Ladezeiten, saubere Seitenstruktur und lokale SEO-Optimierung für den Raum Nordsachsen.',
      'Jede Webseite ist mobiloptimiert und barrierefrei gestaltet. Ob Tablet auf der Baustelle, Smartphone im Wartezimmer oder Desktop im Büro – Ihre Seite funktioniert auf jedem Gerät einwandfrei. Auf Wunsch integrieren wir Kontaktformulare, Terminbuchung, einen KI-Chatbot oder eine Anbindung an Ihre Warenwirtschaft.',
      'Von Groitzsch aus betreuen wir Eilenburger Unternehmen persönlich. Wir kommen zu Ihnen für Briefings, präsentieren Entwürfe vor Ort und begleiten den Launch. Auch nach der Veröffentlichung stehen wir für Wartung, Updates und Weiterentwicklungen bereit.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für ein Eilenburger Unternehmen?',
        a: 'Eine professionelle Webseite ist in der Regel innerhalb von vier bis acht Wochen fertiggestellt – je nach Umfang und Komplexität. Einfachere Seiten können auch schneller live gehen.',
      },
      {
        q: 'Kann die Webseite auch zweisprachig für Eilenburger Exportbetriebe erstellt werden?',
        a: 'Ja, wir erstellen mehrsprachige Webseiten mit sauberer Sprachumschaltung – ideal für Eilenburger Chemie- und Kunststoffunternehmen mit internationalen Geschäftspartnern.',
      },
      {
        q: 'Wird die Webseite für Suchmaschinen im Raum Eilenburg optimiert?',
        a: 'Ja. Wir optimieren Ihre Seite gezielt für lokale Suchanfragen in Eilenburg und Nordsachsen – von den Meta-Daten über die Seitenstruktur bis zum Google-Unternehmensprofil.',
      },
      {
        q: 'Bieten Sie auch Wartung und Pflege nach dem Launch an?',
        a: 'Ja, wir bieten Wartungspakete an, die regelmäßige Updates, Sicherheitsprüfungen und inhaltliche Aktualisierungen umfassen. So bleibt Ihre Seite dauerhaft aktuell und sicher.',
      },
    ],
    highlights: [
      'Suchmaschinenoptimierte Webseiten für den Raum Eilenburg',
      'Mobiloptimiert und barrierefrei auf allen Geräten',
      'Integration von Chatbot, Terminbuchung und Warenwirtschaft',
      'Persönliche Betreuung von Konzept bis Wartung',
    ],
  },

  'eilenburg.seo-top-3': {
    regionSlug: 'eilenburg',
    regionName: 'Eilenburg',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Eilenburg – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google für lokale Suchanfragen in Nordsachsen.',
    intro:
      'Wer in Eilenburg nach einem Dienstleister, Handwerker oder Fachbetrieb sucht, beginnt bei Google. Wenn Ihr Unternehmen dort nicht auf den ersten Plätzen erscheint, gewinnt die Konkurrenz den Auftrag. Pixel Kraftwerk bringt Eilenburger Unternehmen gezielt in die Top 3 der Google-Suchergebnisse.',
    paragraphs: [
      'Eilenburg mit rund 16.000 Einwohnern ist groß genug für relevantes Suchvolumen, aber klein genug, um mit gezielter SEO-Arbeit schnell sichtbare Erfolge zu erzielen. Für Suchbegriffe wie „Handwerker Eilenburg", „Arztpraxis Eilenburg" oder „Kunststoffverarbeitung Nordsachsen" lassen sich mit der richtigen Strategie Top-Platzierungen erreichen.',
      'Unsere SEO-Strategie für Eilenburger Unternehmen umfasst drei Säulen: Erstens technische Optimierung – schnelle Ladezeiten, saubere URL-Struktur und mobile Darstellung. Zweitens inhaltliche Optimierung – relevante Texte, die Ihre Expertise und Ihren Standort in Eilenburg klar kommunizieren. Drittens lokale SEO – Optimierung Ihres Google-Unternehmensprofils, lokale Verzeichniseinträge und Bewertungsmanagement.',
      'Für die Chemie- und Kunststoffindustrie in Eilenburg optimieren wir auch Fachbegriffe und B2B-Suchanfragen: Produktnamen, technische Spezifikationen und Branchenverzeichnisse werden gezielt eingebunden, um auch überregionale Sichtbarkeit zu erreichen.',
      'Als regionale Agentur aus Groitzsch kennen wir den nordsächsischen Markt. Wir analysieren Ihre Wettbewerber in Eilenburg und Umgebung, identifizieren Keyword-Chancen und setzen eine Strategie um, die messbare Ergebnisse liefert – mit monatlichem Reporting und transparenter Erfolgskontrolle.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Eilenburger Unternehmen bei Google in den Top 3 steht?',
        a: 'In einer Stadt wie Eilenburg sind erste Verbesserungen oft nach vier bis acht Wochen sichtbar. Stabile Top-3-Platzierungen erreichen wir in der Regel innerhalb von drei bis sechs Monaten.',
      },
      {
        q: 'Lohnt sich SEO für ein kleines Unternehmen in Eilenburg?',
        a: 'Gerade in Eilenburg lohnt sich SEO besonders: Der Wettbewerb ist überschaubar und mit gezielter Arbeit können Sie schnell die ersten Google-Plätze besetzen. Schon wenige zusätzliche Anfragen pro Monat amortisieren die Investition.',
      },
      {
        q: 'Welche Suchbegriffe optimiert Pixel Kraftwerk für Eilenburger Betriebe?',
        a: 'Wir recherchieren die relevantesten Keywords für Ihre Branche und Ihren Standort – von lokalen Suchbegriffen wie „Fachbetrieb Eilenburg" bis zu Branchen-Keywords mit regionalem Bezug.',
      },
      {
        q: 'Erhalte ich regelmäßige Berichte zur SEO-Entwicklung?',
        a: 'Ja. Sie erhalten monatliche Reports mit Ranking-Entwicklung, Sichtbarkeitsindex und Handlungsempfehlungen – transparent und nachvollziehbar.',
      },
    ],
    highlights: [
      'Gezielte lokale SEO für den Raum Eilenburg und Nordsachsen',
      'Technische, inhaltliche und lokale Optimierung aus einer Hand',
      'Monatliches Reporting mit transparenter Erfolgskontrolle',
      'Regionale Expertise aus dem nahen Groitzsch',
    ],
  },

  /* ================================================================
   *  TAUCHA
   * ================================================================ */
  'taucha.ki-chatbots': {
    regionSlug: 'taucha',
    regionName: 'Taucha',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Taucha – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation im Leipziger Nordosten.',
    intro:
      'Taucha, die wachsende Stadt nordöstlich von Leipzig mit rund 16.000 Einwohnern, hat sich als attraktiver Wohn- und Gewerbestandort in Nordsachsen etabliert. Lokale Dienstleister, Einzelhändler und Handwerksbetriebe bedienen sowohl Tauchaer Bürger als auch Pendler aus dem Großraum Leipzig. Ein KI-Chatbot von Pixel Kraftwerk beantwortet Kundenanfragen automatisch und lässt kein Geschäft unbearbeitet.',
    paragraphs: [
      'Taucha profitiert von seiner Nähe zu Leipzig: Viele Bewohner pendeln in die Großstadt und suchen vor Ort nach verlässlichen Dienstleistern – vom Zahnarzt über den Elektriker bis zum Steuerberater. Ein KI-Chatbot auf Ihrer Webseite beantwortet häufige Fragen zu Leistungen, Verfügbarkeiten und Preisen rund um die Uhr, sodass Sie auch Anfragen von Berufspendlern außerhalb der Geschäftszeiten nicht verlieren.',
      'Für Tauchaer Einzelhändler, etwa in der Leipziger Straße, ist der Chatbot ein digitaler Verkaufsassistent: Er informiert über Sortiment und Öffnungszeiten, nimmt Bestellungen entgegen und leitet Kundenwünsche an Ihr Team weiter. Für Handwerksbetriebe erfasst er Auftragsanfragen mit Details zu Umfang und Dringlichkeit.',
      'Technisch integrieren wir den Chatbot nahtlos in Ihre bestehende Website – unabhängig vom CMS. Auf Wunsch verbinden wir ihn mit Ihrem Kalender, CRM oder Buchungssystem, sodass Daten direkt dort landen, wo Ihr Team arbeitet. Auch WhatsApp und Messenger sind als Kanäle möglich.',
      'Pixel Kraftwerk in Groitzsch liegt rund 35 Kilometer südwestlich von Taucha. Persönliche Termine vor Ort, bei Ihnen im Geschäft oder per Videocall, sind selbstverständlich. Wir verstehen die Dynamik einer wachsenden Pendlerstadt und richten Ihren Chatbot auf genau diese Zielgruppe aus.',
    ],
    faqs: [
      {
        q: 'Warum ist ein KI-Chatbot für Dienstleister in Taucha besonders sinnvoll?',
        a: 'Taucha ist eine Pendlerstadt – viele potenzielle Kunden suchen abends oder am Wochenende nach lokalen Anbietern. Ein Chatbot beantwortet Anfragen auch außerhalb der Geschäftszeiten und sichert so Aufträge, die sonst verloren gehen.',
      },
      {
        q: 'Kann der Chatbot auch Termine für Tauchaer Praxen und Betriebe buchen?',
        a: 'Ja. Wir verbinden den Chatbot mit Ihrem Buchungssystem oder Kalender, sodass Terminbuchungen direkt im Dialog erfolgen – inklusive Bestätigung und Erinnerung.',
      },
      {
        q: 'Wie aufwendig ist die Einrichtung für ein kleines Tauchaer Unternehmen?',
        a: 'Wir übernehmen die komplette Einrichtung. Für Sie entsteht minimaler Aufwand – in der Regel genügen ein bis zwei Abstimmungsgespräche, den Rest erledigen wir.',
      },
      {
        q: 'Wie weit ist Pixel Kraftwerk von Taucha entfernt?',
        a: 'Unser Büro in Groitzsch liegt rund 35 Kilometer von Taucha entfernt. Über die A38 und A14 sind wir schnell bei Ihnen vor Ort.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Pendler und Tauchaer Kunden',
      'Automatische Terminbuchung und Anfragenerfassung',
      'Nahtlose Integration in Webseite, Kalender und CRM',
      'Persönliche Betreuung aus Groitzsch – nur ~35 km entfernt',
    ],
  },

  'taucha.telefonassistenten': {
    regionSlug: 'taucha',
    regionName: 'Taucha',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Taucha – Pixel Kraftwerk sichert Ihre Erreichbarkeit für Kunden im Leipziger Nordosten.',
    intro:
      'In Taucha ist telefonische Erreichbarkeit für lokale Betriebe entscheidend – denn wer einen Handwerker, Arzt oder Dienstleister sucht, greift oft zum Telefon. Doch wenn Ihr Team im Kundengespräch, in der Behandlung oder unterwegs ist, bleiben Anrufe unbeantwortet. Unser Telefonassistent sorgt dafür, dass in Taucha kein Anruf mehr verloren geht.',
    paragraphs: [
      'Taucha ist eine Stadt mit gewachsener Infrastruktur: Arztpraxen, Zahnarztpraxen, Physiotherapeuten, Handwerksbetriebe und Einzelhändler bilden das lokale Versorgungsnetz. Für all diese Betriebe ist das Telefon ein zentraler Kontaktkanal. Unser Telefonassistent nimmt Anrufe entgegen, erfasst Anliegen und Terminwünsche und leitet dringende Fälle sofort weiter.',
      'Für Tauchaer Handwerksbetriebe ist der Vorteil unmittelbar spürbar: Wenn der Monteur beim Kunden in Leipzig oder Schkeuditz ist, geht kein Auftrag verloren. Der Assistent erfasst Art und Dringlichkeit des Anliegens und sendet die Informationen per E-Mail oder direkt ins CRM.',
      'Auch Praxen in Taucha profitieren: Terminanfragen, Rezeptbestellungen und organisatorische Fragen werden vom Assistenten aufgenommen und strukturiert ans Praxisteam weitergeleitet. So kann sich das Team auf die Patientenversorgung konzentrieren, statt zwischen Telefon und Behandlungszimmer zu pendeln.',
      'Wir konfigurieren den Assistenten individuell für Ihre Abläufe. Gemeinsam legen wir fest, welche Fragen beantwortet, welche Daten erfasst und wann direkt an einen Mitarbeitenden weitergeleitet werden soll. Die Anbindung an Kalender und CRM sorgt dafür, dass alle Informationen sofort im richtigen System landen.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Terminbuchungen für Tauchaer Praxen vornehmen?',
        a: 'Ja. Wir binden den Assistenten an Ihren Online-Kalender oder Ihre Praxissoftware an, sodass Termine direkt im Gespräch gebucht werden können.',
      },
      {
        q: 'Wie schnell ist der Telefonassistent für meinen Betrieb in Taucha einsatzbereit?',
        a: 'In der Regel ist der Assistent innerhalb von zwei bis drei Wochen live. Die Einrichtung umfasst die Definition der Gesprächsabläufe, die technische Integration und einen Testlauf.',
      },
      {
        q: 'Wird der Assistent als „Roboter" wahrgenommen?',
        a: 'Ein gut konfigurierter Assistent klingt professionell und natürlich. Die meisten Anrufenden schätzen die schnelle Erreichbarkeit – besonders wenn die Alternative ein unbeantworteter Anruf wäre.',
      },
      {
        q: 'Können Sie den Assistenten auch nachträglich anpassen?',
        a: 'Selbstverständlich. Wir passen die Gesprächslogik jederzeit an veränderte Anforderungen an – sei es ein neues Leistungsangebot, geänderte Öffnungszeiten oder zusätzliche Standorte.',
      },
    ],
    highlights: [
      'Keine verpassten Anrufe mehr für Tauchaer Betriebe',
      'Terminbuchung und Anliegen-Erfassung im Gespräch',
      'Anbindung an Kalender, CRM und Praxissoftware',
      'Flexible Anpassung an Ihre individuellen Abläufe',
    ],
  },

  'taucha.automatisierungen': {
    regionSlug: 'taucha',
    regionName: 'Taucha',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Taucha – Pixel Kraftwerk digitalisiert Ihre Geschäftsprozesse effizient.',
    intro:
      'In Taucha betreiben viele kleine und mittlere Unternehmen ihr Tagesgeschäft mit einer Mischung aus E-Mail, Tabellen und Branchensoftware. Daten werden manuell übertragen, Bestätigungen per Hand verschickt, Follow-ups vergessen. Pixel Kraftwerk verbindet Ihre Systeme und automatisiert wiederkehrende Abläufe – damit Ihr Team in Taucha sich auf das Wesentliche konzentrieren kann.',
    paragraphs: [
      'Taucha wächst – und mit der Stadt wachsen die Anforderungen an lokale Betriebe. Mehr Einwohner bedeuten mehr Anfragen, mehr Termine, mehr administrative Arbeit. Automatisierungen helfen Tauchaer Unternehmen, dieses Wachstum zu bewältigen, ohne proportional mehr Personal einsetzen zu müssen.',
      'Typische Automatisierungen für Tauchaer Betriebe: Kontaktanfragen von der Webseite werden automatisch im CRM erfasst und mit einer Eingangsbestätigung versehen. Terminbuchungen erzeugen Kalendereinträge und Erinnerungen. Angebote werden nach dem Erstgespräch automatisch erstellt und zur Freigabe vorgelegt. Rechnungen nach Auftragsabschluss automatisch generiert und versendet.',
      'Wir arbeiten mit Ihren vorhandenen Werkzeugen: Google Workspace, Microsoft 365, Branchensoftware oder spezialisierte Lösungen – wir verbinden die Systeme, statt sie zu ersetzen. So profitiert Ihr Team vom Automatisierungseffekt, ohne sich in neue Tools einarbeiten zu müssen.',
      'In Kombination mit einem KI-Chatbot oder Telefonassistenten entsteht ein durchgängiger Prozess: Anfragen werden erfasst, ins CRM geleitet, bestätigt und nachverfolgt. Kein Lead geht verloren, kein Follow-up wird vergessen.',
      'Von Groitzsch aus betreuen wir Tauchaer Unternehmen persönlich – für Prozessanalysen, Workshops und technische Einrichtung.',
    ],
    faqs: [
      {
        q: 'Welche Abläufe kann Pixel Kraftwerk für mein Tauchaer Unternehmen automatisieren?',
        a: 'Typische Einsatzfelder sind Kundenkommunikation, Terminmanagement, Angebotsversand, Rechnungsstellung und Datensynchronisation. Grundsätzlich eignet sich jeder wiederkehrende Prozess mit klaren Regeln.',
      },
      {
        q: 'Brauche ich für Automatisierungen eine neue Software?',
        a: 'Nein. Wir verbinden Ihre bestehenden Systeme miteinander – kein Wechsel, kein Mehraufwand für Ihr Team.',
      },
      {
        q: 'Wie schnell sehe ich Ergebnisse nach der Einführung?',
        a: 'Viele Tauchaer Unternehmen spüren die Entlastung bereits in der ersten Woche: weniger manuelle Arbeit, weniger Fehler, schnellere Reaktionszeiten.',
      },
      {
        q: 'Ist die Automatisierung auch für sehr kleine Betriebe in Taucha geeignet?',
        a: 'Gerade kleine Betriebe profitieren am meisten, weil hier oft eine Person mehrere Aufgaben gleichzeitig erledigt. Automatisierungen schaffen den Freiraum, der für Wachstum nötig ist.',
      },
    ],
    highlights: [
      'Verbindung bestehender Systeme ohne Softwarewechsel',
      'Automatische Kundenkommunikation und Terminverwaltung',
      'Skalierbare Prozesse für wachsende Tauchaer Betriebe',
      'Persönliche Betreuung aus dem nahen Groitzsch',
    ],
  },

  'taucha.webseiten': {
    regionSlug: 'taucha',
    regionName: 'Taucha',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Taucha – Pixel Kraftwerk erstellt moderne Internetauftritte im Leipziger Umland.',
    intro:
      'Taucha wächst – und mit der Stadt wächst die Konkurrenz unter lokalen Anbietern. Eine professionelle Webseite ist für Tauchaer Unternehmen längst kein Nice-to-have mehr, sondern entscheidend für die Kundengewinnung. Pixel Kraftwerk entwickelt schnelle, suchmaschinenoptimierte Webseiten, die Ihr Unternehmen in Taucha sichtbar machen.',
    paragraphs: [
      'Wer in Taucha nach einem Dienstleister sucht, googelt – und erwartet eine professionelle Webseite. Ob Arztpraxis, Handwerksbetrieb, Gastronomie oder Einzelhandel: Ihr Internetauftritt ist oft der erste Eindruck. Wir sorgen dafür, dass dieser Eindruck überzeugt – mit klarer Struktur, ansprechendem Design und relevanten Inhalten.',
      'Unsere Webseiten sind von Anfang an für lokale Suchanfragen optimiert. Begriffe wie „Zahnarzt Taucha", „Elektriker Taucha" oder „Restaurant Taucha" werden strategisch eingebunden, damit Ihr Unternehmen bei Google ganz oben erscheint. Die Nähe zu Leipzig bietet zusätzliches Potenzial: Viele Leipziger suchen bewusst nach Anbietern im Umland.',
      'Jede Webseite ist mobiloptimiert und lädt schnell – ein entscheidender Rankingfaktor bei Google und wichtig für die Nutzererfahrung. Auf Wunsch integrieren wir Kontaktformulare, Online-Terminbuchung, einen KI-Chatbot oder eine Anbindung an Ihren Online-Shop.',
      'Von Groitzsch aus begleiten wir Tauchaer Unternehmen durch den gesamten Prozess: vom Erstgespräch über Konzept und Design bis zum Launch und der laufenden Wartung. Wir sind Ihr verlässlicher Partner für den digitalen Auftritt.',
    ],
    faqs: [
      {
        q: 'Was kostet eine professionelle Webseite für ein Tauchaer Unternehmen?',
        a: 'Die Kosten hängen vom Umfang ab. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot. Grundsätzlich sind professionelle Webseiten auch für kleinere Budgets realisierbar.',
      },
      {
        q: 'Wird die Webseite für Suchanfragen in Taucha und Leipzig optimiert?',
        a: 'Ja. Wir optimieren Ihre Seite für lokale Suchanfragen in Taucha, im Leipziger Umland und – je nach Branche – auch für den gesamten Raum Nordsachsen.',
      },
      {
        q: 'Kann ich die Webseite selbst aktualisieren?',
        a: 'Ja. Wir schulen Sie im Umgang mit dem Content-Management-System, sodass Sie Texte, Bilder und Angebote jederzeit eigenständig ändern können.',
      },
      {
        q: 'Bieten Sie auch laufende Wartung für Tauchaer Webseiten an?',
        a: 'Ja. Unsere Wartungspakete umfassen Updates, Sicherheitsprüfungen und inhaltliche Anpassungen – damit Ihre Seite dauerhaft aktuell und sicher bleibt.',
      },
    ],
    highlights: [
      'Lokale SEO-Optimierung für Taucha und den Großraum Leipzig',
      'Mobiloptimiert und schnell auf allen Geräten',
      'Integration von Chatbot, Terminbuchung und Online-Shop',
      'Persönliche Betreuung vom Konzept bis zur Wartung',
    ],
  },

  'taucha.seo-top-3': {
    regionSlug: 'taucha',
    regionName: 'Taucha',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Taucha – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google für den Leipziger Nordosten.',
    intro:
      'In einer wachsenden Stadt wie Taucha entscheidet die Google-Platzierung darüber, wer den Auftrag bekommt. Wer bei lokalen Suchanfragen nicht auf der ersten Seite erscheint, wird von potenziellen Kunden schlicht nicht gefunden. Pixel Kraftwerk bringt Tauchaer Unternehmen gezielt in die Top 3 der Google-Ergebnisse.',
    paragraphs: [
      'Tauchas Nähe zu Leipzig ist ein Vorteil – aber auch eine Herausforderung: Lokale Anbieter konkurrieren bei Google nicht nur untereinander, sondern auch mit Leipziger Unternehmen. Umso wichtiger ist eine gezielte lokale SEO-Strategie, die Tauchaer Betriebe für Suchanfragen mit Ortsbezug nach vorne bringt.',
      'Unsere SEO-Strategie umfasst drei Bereiche: Technische Optimierung – schnelle Ladezeiten, saubere Struktur, Mobilfreundlichkeit. Inhaltliche Optimierung – relevante Texte, die Ihre Kompetenz und Ihren Standort in Taucha klar kommunizieren. Lokale SEO – Optimierung Ihres Google-Unternehmensprofils, Aufbau lokaler Verzeichniseinträge und aktives Bewertungsmanagement.',
      'Für Tauchaer Unternehmen identifizieren wir die Keywords mit dem größten Potenzial: „Handwerker Taucha", „Arzt Taucha", „Physiotherapie Taucha" – aber auch umlandübergreifende Begriffe wie „Dienstleister Leipzig Nordost". So gewinnen Sie Kunden aus Taucha und dem gesamten Leipziger Umland.',
      'Als regionale Agentur aus Groitzsch kennen wir den Markt in Nordsachsen und dem Leipziger Umland. Wir liefern keine Standardlösungen, sondern eine Strategie, die auf Ihre Branche und Ihren Standort in Taucha zugeschnitten ist – mit monatlichem Reporting und messbaren Ergebnissen.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Tauchaer Unternehmen in den Google-Top-3 steht?',
        a: 'Erste Verbesserungen sind oft nach vier bis acht Wochen sichtbar. Für stabile Top-3-Platzierungen planen wir in der Regel drei bis sechs Monate – abhängig von Branche und Wettbewerb.',
      },
      {
        q: 'Kann ich mit SEO in Taucha auch Leipziger Kunden gewinnen?',
        a: 'Ja. Wir optimieren Ihre Sichtbarkeit nicht nur für Taucha, sondern auch für den gesamten Leipziger Nordosten. So erreichen Sie Kunden, die gezielt nach Anbietern im Umland suchen.',
      },
      {
        q: 'Was unterscheidet lokale SEO von allgemeiner Suchmaschinenoptimierung?',
        a: 'Lokale SEO fokussiert auf ortsbezogene Suchanfragen, Google Maps und Ihr Unternehmensprofil. Für Tauchaer Betriebe, die vor allem regionale Kunden bedienen, ist das der effektivste Ansatz.',
      },
      {
        q: 'Erhalte ich regelmäßige Berichte zum SEO-Fortschritt?',
        a: 'Ja. Sie erhalten monatliche Reports mit Ranking-Entwicklung, Sichtbarkeit und konkreten Handlungsempfehlungen.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für Taucha und den Leipziger Nordosten',
      'Google-Unternehmensprofil-Optimierung und Bewertungsmanagement',
      'Monatliches Reporting mit messbaren Ergebnissen',
      'Regionale Marktkenntnis aus dem nahen Groitzsch',
    ],
  },

  /* ================================================================
   *  MARKRANSTÄDT
   * ================================================================ */
  'markranstaedt.ki-chatbots': {
    regionSlug: 'markranstaedt',
    regionName: 'Markranstädt',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Markranstädt – Pixel Kraftwerk automatisiert Kundenkommunikation westlich von Leipzig.',
    intro:
      'Markranstädt, mit rund 15.000 Einwohnern westlich von Leipzig im Landkreis Leipzig gelegen, ist ein wachsender Wohn- und Gewerbestandort. Handwerksbetriebe, Einzelhändler und Dienstleister bedienen eine zunehmend anspruchsvolle Kundschaft. Ein KI-Chatbot von Pixel Kraftwerk beantwortet Anfragen rund um die Uhr und verschafft Ihrem Team den nötigen Freiraum.',
    paragraphs: [
      'Markranstädt entwickelt sich dynamisch: Neue Wohngebiete, wachsende Gewerbegebiete und die Nähe zu Leipzig machen die Stadt attraktiv für Familien und Unternehmen gleichermaßen. Für lokale Betriebe bedeutet das mehr Kunden, aber auch mehr Anfragen. Ein KI-Chatbot fängt die wiederkehrenden Fragen auf – zu Öffnungszeiten, Leistungen, Verfügbarkeiten und Preisen – und leitet qualifizierte Anfragen an Ihr Team weiter.',
      'Ob Immobilienmakler im Zentrum, Physiotherapiepraxis in der Leipziger Straße oder Elektrobetrieb im Gewerbegebiet – der Chatbot wird individuell auf Ihre Branche und Ihre häufigsten Kundenanfragen zugeschnitten. Ein Makler kann Objektanfragen vorqualifizieren lassen, eine Praxis Terminbuchungen automatisieren und ein Handwerker Auftragsdetails erfassen.',
      'Die Integration in Ihre bestehende Website erfolgt unkompliziert. Auf Wunsch verbinden wir den Chatbot mit Ihrem CRM, Kalender oder Buchungssystem, damit Anfragen direkt im richtigen System landen. Auch mobile Kanäle wie WhatsApp und Facebook Messenger sind möglich.',
      'Pixel Kraftwerk sitzt in Groitzsch – nur rund 20 Kilometer von Markranstädt entfernt. Persönliche Termine bei Ihnen vor Ort sind in wenigen Minuten erreichbar. Wir kennen die lokale Wirtschaft im Landkreis Leipzig und entwickeln Lösungen, die genau zu Ihrem Betrieb passen.',
    ],
    faqs: [
      {
        q: 'Für welche Branchen in Markranstädt eignet sich ein KI-Chatbot?',
        a: 'Besonders wirkungsvoll sind Chatbots für Handwerksbetriebe, Arztpraxen, Immobilienmakler, Einzelhändler und Dienstleister – überall dort, wo regelmäßig dieselben Fragen eingehen.',
      },
      {
        q: 'Kann der Chatbot auch für Neubürger in Markranstädt nützlich sein?',
        a: 'Absolut. Neubürger suchen aktiv nach lokalen Dienstleistern und haben viele Fragen. Ein Chatbot gibt sofort Auskunft und hinterlässt einen professionellen ersten Eindruck.',
      },
      {
        q: 'Wie weit ist Pixel Kraftwerk von Markranstädt entfernt?',
        a: 'Unser Büro in Groitzsch liegt nur rund 20 Kilometer südlich von Markranstädt. Persönliche Treffen und Vor-Ort-Termine sind kurzfristig möglich.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Unternehmen in Markranstädt einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel innerhalb von zwei bis drei Wochen live. Für Betriebe in Markranstädt können wir dank der kurzen Distanz besonders agil arbeiten.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für die wachsende Markranstädter Kundschaft',
      'Individuelle Chatbot-Konfiguration für Ihre Branche',
      'Integration in CRM, Kalender und Buchungssysteme',
      'Persönliche Betreuung aus Groitzsch – nur ~20 km entfernt',
    ],
  },

  'markranstaedt.telefonassistenten': {
    regionSlug: 'markranstaedt',
    regionName: 'Markranstädt',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Markranstädt – Pixel Kraftwerk sichert Ihre Erreichbarkeit im Landkreis Leipzig.',
    intro:
      'In Markranstädt setzen viele Betriebe auf telefonische Erreichbarkeit als primären Kontaktkanal. Doch wenn das Team in der Werkstatt, beim Kunden oder in der Behandlung ist, klingelt das Telefon ins Leere. Unser Telefonassistent übernimmt zuverlässig jeden Anruf und sorgt dafür, dass kein Auftrag verloren geht.',
    paragraphs: [
      'Die wachsende Bevölkerung in Markranstädt bedeutet für lokale Betriebe mehr Anrufe: Terminanfragen bei Ärzten, Kostenvoranschläge bei Handwerkern, Verfügbarkeitsanfragen bei Einzelhändlern. Unser Telefonassistent begrüßt Anrufende professionell, erfasst deren Anliegen und leitet dringende Fälle direkt weiter – 24 Stunden am Tag, 7 Tage die Woche.',
      'Für Markranstädter Handwerksbetriebe ist der Nutzen sofort spürbar: Wenn der Meister auf der Baustelle in Lützen, Zwenkau oder Leipzig ist, nimmt der Assistent den Anruf entgegen, fragt nach Art und Umfang des Auftrags und sendet eine strukturierte Zusammenfassung per E-Mail oder ins CRM.',
      'Arztpraxen und Gesundheitsdienstleister in Markranstädt entlasten ihr Empfangspersonal: Terminwünsche, Rezeptanfragen und organisatorische Fragen werden vom Assistenten aufgenommen und ans Team weitergeleitet. So bleibt mehr Zeit für die eigentliche Patientenversorgung.',
      'Von Groitzsch aus sind wir in rund 20 Minuten in Markranstädt. Die kurze Distanz ermöglicht schnelle Einrichtungstermine, Anpassungen und persönliche Betreuung – ein Vorteil, den überregionale Anbieter nicht bieten können.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent Termine für Markranstädter Praxen buchen?',
        a: 'Ja. Wir verbinden den Assistenten mit Ihrem Kalender oder Ihrer Praxissoftware, sodass im Gespräch direkt freie Termine gebucht werden können.',
      },
      {
        q: 'Wie individuell lässt sich der Assistent für meinen Markranstädter Betrieb anpassen?',
        a: 'Vollständig individuell. Wir definieren gemeinsam die Gesprächsabläufe, erfassten Daten und Weiterleitungsregeln – exakt abgestimmt auf Ihre Bedürfnisse.',
      },
      {
        q: 'Ist der Telefonassistent auch am Wochenende erreichbar?',
        a: 'Ja, der Assistent arbeitet rund um die Uhr – auch abends, am Wochenende und an Feiertagen. Ideal für Notdienste oder Betriebe mit erweiterten Servicezeiten.',
      },
      {
        q: 'Was kostet ein Telefonassistent für einen Betrieb in Markranstädt?',
        a: 'Die Kosten richten sich nach Funktionsumfang und Anrufvolumen. Nach einem kostenlosen Erstgespräch erstellen wir ein individuelles Angebot.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Markranstädter Betriebe und Praxen',
      'Strukturierte Anliegen-Erfassung und Terminbuchung',
      'Anbindung an Kalender, CRM und Praxissoftware',
      'Persönliche Betreuung aus dem nur 20 km entfernten Groitzsch',
    ],
  },

  'markranstaedt.automatisierungen': {
    regionSlug: 'markranstaedt',
    regionName: 'Markranstädt',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Markranstädt – Pixel Kraftwerk optimiert Ihre Geschäftsprozesse im Landkreis Leipzig.',
    intro:
      'Markranstädts Wirtschaft wächst – und damit auch die administrativen Anforderungen an lokale Betriebe. Viele Unternehmen arbeiten noch mit manuellen Prozessen, die bei steigendem Geschäftsvolumen an ihre Grenzen stoßen. Pixel Kraftwerk automatisiert Ihre wiederkehrenden Abläufe und macht Ihr Unternehmen fit für weiteres Wachstum.',
    paragraphs: [
      'In Markranstädt siedeln sich zunehmend Handwerksbetriebe, Dienstleister und kleine Gewerbeunternehmen an. Was sie eint: Viele Routineaufgaben – Angebote erstellen, Termine bestätigen, Rechnungen versenden, Kundendaten pflegen – werden noch manuell erledigt. Das kostet Zeit, ist fehleranfällig und skaliert nicht mit dem Wachstum.',
      'Unsere Automatisierungen für Markranstädter Unternehmen setzen genau hier an: Kontaktanfragen von der Webseite landen automatisch im CRM, Terminbuchungen erzeugen Kalendereinträge und Erinnerungen, Angebote werden nach dem Erstgespräch automatisch generiert und Rechnungen nach Auftragsabschluss versendet.',
      'Wir verbinden Ihre bestehenden Werkzeuge – ob Google Workspace, Microsoft 365, Lexoffice oder Branchensoftware – und sorgen dafür, dass Daten automatisch fließen. Kein Systemwechsel, keine Einarbeitungszeit für Ihr Team.',
      'Die Nähe zwischen Groitzsch und Markranstädt macht die Zusammenarbeit besonders effizient: Prozessanalysen, Workshops und Feinabstimmungen finden direkt bei Ihnen vor Ort statt. Wir sprechen Ihre Sprache und kennen die Herausforderungen wachsender Betriebe im Landkreis Leipzig.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich für Markranstädter Unternehmen typischerweise automatisieren?',
        a: 'Häufige Einsatzfelder sind Kundenkommunikation, Terminverwaltung, Angebots- und Rechnungserstellung, Datensynchronisation und Reporting. Grundsätzlich eignet sich jeder wiederkehrende Prozess mit klaren Regeln.',
      },
      {
        q: 'Wie aufwendig ist die Einführung von Automatisierungen?',
        a: 'Wir führen Automatisierungen schrittweise ein, damit Ihr Team sich an die neuen Abläufe gewöhnen kann. Die meisten Projekte starten mit ein bis zwei Kernprozessen und werden dann erweitert.',
      },
      {
        q: 'Muss ich meine bestehende Software wechseln?',
        a: 'Nein. Wir arbeiten mit Ihren vorhandenen Tools und verbinden sie intelligent miteinander. Ihr Team arbeitet weiter in den gewohnten Systemen.',
      },
      {
        q: 'Wie schnell amortisiert sich die Investition?',
        a: 'Die meisten Markranstädter Unternehmen sparen bereits in den ersten Wochen mehrere Stunden pro Woche. Die Investition rechnet sich oft innerhalb des ersten Monats.',
      },
    ],
    highlights: [
      'Automatisierung ohne Softwarewechsel oder Einarbeitungszeit',
      'Schrittweise Einführung mit sofortiger Wirkung',
      'Maßgeschneidert für wachsende Betriebe im Landkreis Leipzig',
      'Persönliche Prozessanalyse und Betreuung vor Ort',
    ],
  },

  'markranstaedt.webseiten': {
    regionSlug: 'markranstaedt',
    regionName: 'Markranstädt',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Markranstädt – Pixel Kraftwerk erstellt moderne Internetauftritte im Landkreis Leipzig.',
    intro:
      'In einer wachsenden Stadt wie Markranstädt ist eine professionelle Webseite entscheidend, um neue Kunden zu gewinnen. Neubürger, Pendler und Bestandskunden suchen online nach lokalen Anbietern. Pixel Kraftwerk entwickelt Webseiten, die bei Google gefunden werden und einen überzeugenden ersten Eindruck hinterlassen.',
    paragraphs: [
      'Markranstädt liegt nur wenige Kilometer westlich von Leipzig und zieht kontinuierlich Neubürger an. Diese neuen Einwohner suchen aktiv nach Ärzten, Handwerkern, Restaurants und Dienstleistern vor Ort – und der erste Kontakt findet fast immer über Google statt. Eine professionelle Webseite ist Ihre Chance, diesen ersten Eindruck zu nutzen.',
      'Wir entwickeln Webseiten, die nicht nur gut aussehen, sondern auch funktionieren: Schnelle Ladezeiten, klare Navigation, mobiloptimiertes Design und eine Seitenstruktur, die Google versteht. Jede Seite wird von Anfang an für lokale Suchanfragen im Raum Markranstädt und Landkreis Leipzig optimiert.',
      'Je nach Branche integrieren wir die passenden Funktionen: Online-Terminbuchung für Praxen, Kontaktformulare mit automatischer CRM-Anbindung für Dienstleister, Produktkataloge für Einzelhändler oder einen KI-Chatbot für alle, die rund um die Uhr erreichbar sein wollen.',
      'Von Groitzsch nach Markranstädt sind es nur rund 20 Kilometer. Wir begleiten Sie persönlich – vom Erstgespräch über Design-Entwürfe bis zum Launch und der laufenden Wartung. Schnelle Abstimmungswege und lokale Verfügbarkeit machen die Zusammenarbeit besonders effizient.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für mein Markranstädter Unternehmen?',
        a: 'Je nach Umfang ist Ihre Webseite in vier bis acht Wochen fertig. Einfachere Seiten können auch in kürzerer Zeit realisiert werden.',
      },
      {
        q: 'Wird die Webseite für lokale Suchanfragen in Markranstädt optimiert?',
        a: 'Ja. Lokale SEO ist bei jeder unserer Webseiten Standard – von der Meta-Beschreibung über die Seitenstruktur bis zum Google-Unternehmensprofil.',
      },
      {
        q: 'Kann ich Inhalte selbst aktualisieren?',
        a: 'Ja. Wir setzen auf benutzerfreundliche Content-Management-Systeme und schulen Sie in der Handhabung, sodass Sie Texte und Bilder jederzeit eigenständig ändern können.',
      },
      {
        q: 'Bieten Sie Wartungspakete für die Webseite an?',
        a: 'Ja. Unsere Wartungspakete umfassen technische Updates, Sicherheitsprüfungen und inhaltliche Anpassungen – für eine dauerhaft aktuelle und sichere Webseite.',
      },
    ],
    highlights: [
      'Lokale SEO-Optimierung für Markranstädt und den Landkreis Leipzig',
      'Mobiloptimiert, schnell und barrierefrei',
      'Integration von Chatbot, Terminbuchung und CRM-Anbindung',
      'Persönliche Begleitung aus dem nahen Groitzsch',
    ],
  },

  'markranstaedt.seo-top-3': {
    regionSlug: 'markranstaedt',
    regionName: 'Markranstädt',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Markranstädt – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google im Landkreis Leipzig.',
    intro:
      'In Markranstädt entscheidet die Google-Platzierung über neue Kunden. Wer bei lokalen Suchanfragen nicht sichtbar ist, verliert Geschäft an die Konkurrenz. Pixel Kraftwerk bringt Markranstädter Unternehmen mit gezielter SEO-Arbeit in die Top 3 der Google-Ergebnisse.',
    paragraphs: [
      'Markranstädt profitiert vom Wachstum im Leipziger Westen – aber dieses Wachstum bedeutet auch mehr Wettbewerb unter lokalen Anbietern. Wer bei Suchanfragen wie „Handwerker Markranstädt", „Zahnarzt Markranstädt" oder „Dienstleister Landkreis Leipzig" ganz oben steht, gewinnt den Kunden. Genau dafür sorgt unsere SEO-Strategie.',
      'Wir optimieren auf drei Ebenen: Technisch – schnelle Ladezeiten, saubere Seitenstruktur und Mobilfreundlichkeit. Inhaltlich – relevante, keywordoptimierte Texte, die Ihre Expertise und Ihren Standort klar kommunizieren. Lokal – Optimierung Ihres Google-Unternehmensprofils, lokale Verzeichniseinträge und Bewertungsmanagement.',
      'Die Kombination aus wachsender Nachfrage und überschaubarem Wettbewerb macht Markranstädt zu einem idealen Markt für lokale SEO. Mit gezielter Arbeit lassen sich hier oft schneller Top-Platzierungen erreichen als in der Großstadt Leipzig – bei gleichzeitig relevantem Suchvolumen.',
      'Als Agentur aus Groitzsch, nur 20 Kilometer entfernt, kennen wir den lokalen Markt im Landkreis Leipzig. Wir analysieren Ihre Wettbewerber, identifizieren die Keywords mit dem größten Potenzial und setzen eine Strategie um, die messbar funktioniert.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Unternehmen in Markranstädt bei Google in den Top 3 steht?',
        a: 'In einem Markt wie Markranstädt sind erste Verbesserungen oft nach vier bis sechs Wochen sichtbar. Stabile Top-3-Platzierungen erreichen wir typischerweise innerhalb von drei bis fünf Monaten.',
      },
      {
        q: 'Kann ich durch SEO in Markranstädt auch Kunden aus Leipzig gewinnen?',
        a: 'Ja. Wir optimieren Ihre Sichtbarkeit über Markranstädt hinaus – für den gesamten Landkreis Leipzig und den Leipziger Westen, um ein möglichst großes Einzugsgebiet abzudecken.',
      },
      {
        q: 'Lohnt sich SEO für ein kleines Unternehmen in Markranstädt?',
        a: 'Gerade in Markranstädt lohnt sich SEO besonders: Der Wettbewerb ist geringer als in Leipzig, das Suchvolumen wächst mit der Stadt. Schon wenige Top-Platzierungen bringen spürbar mehr Kundenanfragen.',
      },
      {
        q: 'Was kostet SEO für mein Markranstädter Unternehmen?',
        a: 'Die Kosten hängen vom Umfang ab. Nach einer kostenlosen Erstanalyse erstellen wir ein transparentes Angebot mit klar definierten Leistungen und Zielen.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für Markranstädt und den Landkreis Leipzig',
      'Schnelle Ergebnisse dank überschaubarem Wettbewerb',
      'Google-Unternehmensprofil und Bewertungsmanagement',
      'Regionale Marktkenntnis aus dem nahen Groitzsch',
    ],
  },

  /* ================================================================
   *  LEUNA
   * ================================================================ */
  'leuna.ki-chatbots': {
    regionSlug: 'leuna',
    regionName: 'Leuna',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Leuna – Pixel Kraftwerk automatisiert Kundenkommunikation am Chemiestandort.',
    intro:
      'Leuna im Saalekreis ist untrennbar mit dem Chemiepark Leuna verbunden – einem der größten Industriestandorte Mitteldeutschlands. Rund um den Chemiepark hat sich ein dichtes Netz aus Zulieferern, Dienstleistern und B2B-Unternehmen etabliert. Ein KI-Chatbot von Pixel Kraftwerk beantwortet technische und kaufmännische Anfragen automatisch und qualifiziert Leads für Ihren Vertrieb.',
    paragraphs: [
      'Am Chemiepark Leuna arbeiten tausende Menschen in Schichtbetrieb – und die Zulieferer und Dienstleister rund um den Standort bedienen einen Markt, der nie stillsteht. Kundenanfragen kommen rund um die Uhr: zu technischen Spezifikationen, Lieferzeiten, Zertifizierungen und Verfügbarkeiten. Ein KI-Chatbot beantwortet diese Standardfragen sofort und erfasst individuelle Anforderungen für Ihren Vertrieb.',
      'Für B2B-Unternehmen in Leuna ist der Chatbot besonders wertvoll: Er kann technische Datenblätter bereitstellen, Anfragen nach Mindestmengen und Lieferkonditionen beantworten und komplexe Anfragen mit allen relevanten Details an den Innendienst weiterleiten. So verkürzen Sie die Reaktionszeit und erhöhen die Abschlusswahrscheinlichkeit.',
      'Auch Dienstleister und Handwerksbetriebe in der Stadt Leuna profitieren: Ein Gastronomiebetrieb, der die Schichtarbeiter des Chemieparks bedient, kann über den Chatbot Speisepläne und Bestellmöglichkeiten anbieten. Ein Reinigungsunternehmen kann Angebotsanfragen mit Details zu Fläche und Anforderungen automatisch erfassen.',
      'Pixel Kraftwerk in Groitzsch liegt rund 30 Kilometer von Leuna entfernt. Wir kennen die B2B-orientierte Wirtschaftsstruktur im Saalekreis und entwickeln Chatbot-Lösungen, die zu den Anforderungen industrienaher Unternehmen passen – technisch fundiert und auf Effizienz ausgelegt.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für B2B-Unternehmen am Chemiepark Leuna?',
        a: 'Absolut. Gerade im B2B-Bereich fallen viele Standardanfragen zu Produkten, Zertifikaten und Lieferbedingungen an. Ein Chatbot beantwortet diese sofort und qualifiziert komplexe Anfragen für Ihren Vertrieb vor.',
      },
      {
        q: 'Kann der Chatbot auch technische Datenblätter für Leuna-Unternehmen bereitstellen?',
        a: 'Ja. Der Chatbot kann Dokumente wie Datenblätter, Zertifikate oder Preislisten auf Anfrage bereitstellen – direkt im Dialog, ohne dass der Kunde lange suchen muss.',
      },
      {
        q: 'Ist der Chatbot auch außerhalb der Bürozeiten für Schichtbetriebe verfügbar?',
        a: 'Ja. Der Chatbot ist rund um die Uhr aktiv – ideal für die Schichtstruktur am Chemiepark Leuna, wo Anfragen auch nachts oder am Wochenende eingehen.',
      },
      {
        q: 'Wie weit ist Pixel Kraftwerk von Leuna entfernt?',
        a: 'Unser Büro in Groitzsch liegt rund 30 Kilometer von Leuna entfernt. Persönliche Termine vor Ort sind kurzfristig möglich.',
      },
    ],
    highlights: [
      'B2B-optimierte Chatbot-Lösung für den Industriestandort Leuna',
      '24/7-Verfügbarkeit für Schichtbetriebe und Zulieferer',
      'Automatische Bereitstellung von Datenblättern und Dokumenten',
      'Persönliche Betreuung aus Groitzsch – nur ~30 km entfernt',
    ],
  },

  'leuna.telefonassistenten': {
    regionSlug: 'leuna',
    regionName: 'Leuna',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Leuna – Pixel Kraftwerk sichert Ihre Erreichbarkeit am Chemiestandort im Saalekreis.',
    intro:
      'Am Industriestandort Leuna ist telefonische Erreichbarkeit geschäftskritisch: Zulieferer, Dienstleister und Partnerunternehmen müssen schnell reagieren können – auch wenn das Team in der Produktion, auf dem Werksgelände oder im Kundengespräch ist. Unser Telefonassistent sorgt dafür, dass in Leuna kein Anruf unbeantwortet bleibt.',
    paragraphs: [
      'Die Arbeit rund um den Chemiepark Leuna folgt dem Schichtrhythmus: Anfragen kommen nicht nur zwischen 8 und 17 Uhr, sondern auch abends, nachts und am Wochenende. Unser Telefonassistent ist rund um die Uhr erreichbar, nimmt Anrufe professionell entgegen und erfasst Bestellungen, Störungsmeldungen oder technische Anfragen strukturiert.',
      'Für B2B-Dienstleister in Leuna ist die sofortige Erreichbarkeit oft ein Wettbewerbsvorteil: Wer bei einer Störmeldung oder Eilbestellung schneller reagiert als die Konkurrenz, bekommt den Auftrag. Der Telefonassistent erfasst die Dringlichkeit, leitet kritische Anrufe sofort weiter und dokumentiert alle anderen für die strukturierte Nachbearbeitung.',
      'Auch lokale Dienstleister und Gesundheitseinrichtungen in Leuna profitieren: Arztpraxen können Terminwünsche und Rezeptanfragen automatisch erfassen lassen, Handwerksbetriebe erhalten strukturierte Auftragsanfragen und Gastronomen nehmen Reservierungen entgegen – alles ohne zusätzliches Personal.',
      'Von Groitzsch aus betreuen wir Unternehmen in Leuna persönlich. Die rund 30 Kilometer Entfernung ermöglichen schnelle Vor-Ort-Termine für Einrichtung, Anpassung und Schulung. Wir kennen die industrielle Prägung des Saalekreises und konfigurieren den Assistenten passend zu Ihren Abläufen.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Störungsmeldungen für Leuna-Betriebe priorisieren?',
        a: 'Ja. Wir definieren gemeinsam Eskalationsregeln: Bei kritischen Meldungen wird sofort an den Bereitschaftsdienst weitergeleitet, alle anderen Anfragen werden dokumentiert und priorisiert.',
      },
      {
        q: 'Funktioniert der Assistent auch im Schichtbetrieb rund um den Chemiepark?',
        a: 'Absolut. Der Assistent ist 24/7 aktiv und kann an verschiedene Schichten angepasst werden – mit unterschiedlichen Weiterleitungsregeln je nach Tageszeit.',
      },
      {
        q: 'Lässt sich der Telefonassistent mit unserem ERP-System verbinden?',
        a: 'Ja. Wir binden den Assistenten an gängige ERP-, CRM- und Ticketsysteme an, damit erfasste Daten direkt im richtigen System landen.',
      },
      {
        q: 'Wie schnell kann der Assistent für unseren Betrieb in Leuna eingerichtet werden?',
        a: 'In der Regel ist der Assistent innerhalb von zwei bis drei Wochen einsatzbereit – inklusive Definition der Gesprächsabläufe und technischer Integration.',
      },
    ],
    highlights: [
      '24/7-Erreichbarkeit für Schichtbetriebe und Industriedienstleister',
      'Priorisierung und Eskalation von Störungsmeldungen',
      'Anbindung an ERP, CRM und Ticketsysteme',
      'Persönliche Einrichtung und Betreuung aus der Region',
    ],
  },

  'leuna.automatisierungen': {
    regionSlug: 'leuna',
    regionName: 'Leuna',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Leuna – Pixel Kraftwerk optimiert Ihre B2B-Prozesse am Chemiestandort.',
    intro:
      'Am Chemiepark Leuna sind effiziente Prozesse kein Luxus, sondern Voraussetzung für Wettbewerbsfähigkeit. Zulieferer, Dienstleister und Partnerunternehmen im Saalekreis arbeiten mit komplexen Abläufen, die oft noch manuell gesteuert werden. Pixel Kraftwerk automatisiert diese Prozesse und schafft Kapazitäten für Ihr Kerngeschäft.',
    paragraphs: [
      'Die Unternehmen rund um den Chemiepark Leuna arbeiten mit einer Vielzahl von Systemen: ERP, Warenwirtschaft, Qualitätsmanagement, Kundendatenbanken und Schichtplanungssoftware. Wenn Daten zwischen diesen Systemen manuell übertragen werden, entstehen Fehler, Verzögerungen und unnötige Kosten. Automatisierungen verbinden diese Systeme und sorgen für einen reibungslosen Datenfluss.',
      'Typische Automatisierungen für Leuna-Unternehmen: Bestelleingänge werden automatisch ins ERP übertragen und lösen Produktionsaufträge aus. Lieferscheine und Rechnungen werden automatisch generiert. Qualitätsprotokolle werden nach Prüfung automatisch archiviert und bei Abweichungen Alarme ausgelöst. Schichtübergabeprotokolle werden digital erfasst und verteilt.',
      'Auch kaufmännische Prozesse profitieren: Angebote werden nach der Konfiguration automatisch erstellt, Auftragsbestätigungen versendet und offene Posten nachverfolgt. So reduzieren Sie den Verwaltungsaufwand und beschleunigen den Zahlungseingang.',
      'Wir setzen auf bewährte Automatisierungsplattformen und individuelle API-Anbindungen – je nachdem, was zu Ihrer IT-Landschaft passt. Die Einführung erfolgt schrittweise, um den laufenden Betrieb nicht zu stören.',
      'Von Groitzsch aus sind wir schnell in Leuna und begleiten Ihr Team durch den gesamten Prozess – von der Analyse über die Implementierung bis zur Schulung.',
    ],
    faqs: [
      {
        q: 'Welche B2B-Prozesse lassen sich am Standort Leuna automatisieren?',
        a: 'Typische Einsatzfelder sind Bestellverarbeitung, Lieferscheinerstellung, Qualitätsprotokolle, Schichtübergaben, Angebotserstellung und Rechnungsmanagement. Grundsätzlich eignet sich jeder wiederkehrende Prozess mit definierten Regeln.',
      },
      {
        q: 'Können Sie unsere bestehenden ERP- und QM-Systeme einbinden?',
        a: 'Ja. Wir verbinden gängige ERP-, QM- und Warenwirtschaftssysteme über APIs oder Middleware. Ihr Team arbeitet weiterhin in den gewohnten Systemen.',
      },
      {
        q: 'Wie wird der laufende Betrieb während der Einführung sichergestellt?',
        a: 'Wir führen Automatisierungen schrittweise ein und testen jeden Prozess gründlich, bevor er live geht. Der laufende Betrieb wird zu keinem Zeitpunkt beeinträchtigt.',
      },
      {
        q: 'Bieten Sie auch Wartung und Support nach der Einführung?',
        a: 'Ja. Wir bieten laufende Betreuung, Monitoring und Anpassungen an, damit Ihre Automatisierungen dauerhaft reibungslos funktionieren.',
      },
    ],
    highlights: [
      'B2B-Prozessautomatisierung für den Industriestandort Leuna',
      'Nahtlose Integration in ERP, QM und Warenwirtschaft',
      'Schrittweise Einführung ohne Betriebsunterbrechung',
      'Laufende Betreuung und Anpassung aus der Region',
    ],
  },

  'leuna.webseiten': {
    regionSlug: 'leuna',
    regionName: 'Leuna',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Leuna – Pixel Kraftwerk erstellt B2B-taugliche Internetauftritte im Saalekreis.',
    intro:
      'Für Unternehmen in Leuna ist die Webseite mehr als eine digitale Visitenkarte – sie ist ein Vertriebsinstrument. Zulieferer und Dienstleister am Chemiepark brauchen einen professionellen Internetauftritt, der technische Kompetenz vermittelt und Geschäftskunden überzeugt. Pixel Kraftwerk entwickelt Webseiten, die genau das leisten.',
    paragraphs: [
      'Die B2B-Landschaft rund um den Chemiepark Leuna stellt besondere Anforderungen an Webseiten: Technische Produktseiten mit Datenblättern, Zertifizierungsnachweise, Referenzprojekte und klare Kontaktmöglichkeiten für Einkäufer und Projektleiter. Wir entwickeln Webseiten, die diese Anforderungen erfüllen und gleichzeitig bei Google für relevante Fachbegriffe gefunden werden.',
      'Unsere Webseiten für Leuna-Unternehmen sind von Grund auf für Suchmaschinen optimiert: Technische SEO, Ladegeschwindigkeit, mobile Darstellung und strukturierte Daten sorgen dafür, dass Ihr Unternehmen bei Suchanfragen wie „Industrieservice Leuna" oder „Zulieferer Chemiepark Saalekreis" sichtbar ist.',
      'Je nach Bedarf integrieren wir erweiterte Funktionen: Produktkonfiguratoren, Download-Bereiche für technische Dokumentation, Kontaktformulare mit CRM-Anbindung oder einen KI-Chatbot für die automatische Beantwortung technischer Anfragen.',
      'Von Groitzsch aus betreuen wir Leuna-Unternehmen persönlich: Briefings vor Ort, Design-Präsentationen beim Kunden und eine enge Abstimmung über den gesamten Projektverlauf. Nach dem Launch übernehmen wir auf Wunsch die laufende Wartung und Weiterentwicklung.',
    ],
    faqs: [
      {
        q: 'Können Sie technische Produktseiten für B2B-Unternehmen in Leuna erstellen?',
        a: 'Ja. Wir erstellen detaillierte Produktseiten mit Datenblättern, Zertifikaten, technischen Spezifikationen und Download-Bereichen – professionell und suchmaschinenoptimiert.',
      },
      {
        q: 'Wird die Webseite für Fachbegriffe und B2B-Suchanfragen optimiert?',
        a: 'Ja. Neben lokaler SEO optimieren wir auch für branchenspezifische Suchbegriffe, die Einkäufer und Projektleiter verwenden – für maximale Sichtbarkeit im B2B-Bereich.',
      },
      {
        q: 'Kann die Webseite mehrsprachig für internationale Geschäftskunden sein?',
        a: 'Ja. Wir erstellen mehrsprachige Webseiten mit sauberer Sprachumschaltung – ideal für Leuna-Unternehmen mit internationaler Kundschaft.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer B2B-Webseite?',
        a: 'Je nach Umfang und Komplexität rechnen wir mit sechs bis zehn Wochen. Bei umfangreichen Produktkatalogen oder speziellen Funktionen kann es etwas länger dauern.',
      },
    ],
    highlights: [
      'B2B-optimierte Webseiten für den Industriestandort Leuna',
      'Technische Produktseiten mit Datenblättern und Downloads',
      'Lokale und branchenspezifische Suchmaschinenoptimierung',
      'Persönliche Betreuung vom Konzept bis zur Wartung',
    ],
  },

  'leuna.seo-top-3': {
    regionSlug: 'leuna',
    regionName: 'Leuna',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Leuna – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google für den Chemiestandort im Saalekreis.',
    intro:
      'Wer am Chemiepark Leuna nach Zulieferern, Dienstleistern oder Fachbetrieben sucht, beginnt bei Google. Wenn Ihr Unternehmen dort nicht prominent erscheint, geht der Auftrag an einen Wettbewerber. Pixel Kraftwerk sorgt dafür, dass Leuna-Unternehmen für relevante Suchanfragen in den Top 3 stehen.',
    paragraphs: [
      'Der Wirtschaftsstandort Leuna bietet ein besonderes SEO-Potenzial: Die Suchbegriffe sind spezifisch – „Industrieservice Leuna", „Rohrleitungsbau Saalekreis", „Wartung Chemiepark" – und der Wettbewerb in diesen Nischen ist überschaubar. Mit gezielter Optimierung lassen sich hier schnell Top-Platzierungen erreichen, die qualifizierte B2B-Anfragen generieren.',
      'Unsere SEO-Strategie für Leuna umfasst drei Säulen: Technische Optimierung – schnelle Ladezeiten, saubere Seitenstruktur und strukturierte Daten für Suchmaschinen. Inhaltliche Optimierung – Fachtexte, die Ihre Kompetenz belegen und die richtigen Keywords enthalten. Lokale SEO – Optimierung Ihres Google-Unternehmensprofils und Aufbau von Branchenverzeichnis-Einträgen.',
      'Für B2B-Unternehmen in Leuna optimieren wir nicht nur lokale Suchbegriffe, sondern auch überregionale Fachtermini: Produktnamen, DIN-Normen, Zertifizierungen und branchenspezifische Begriffe, die Einkäufer und Projektleiter in Suchmaschinen eingeben.',
      'Wir liefern messbare Ergebnisse: Monatliche Reports zeigen Ihnen Ranking-Entwicklung, Sichtbarkeit und den daraus resultierenden Traffic. So sehen Sie transparent, wie sich Ihre Investition in SEO auszahlt.',
    ],
    faqs: [
      {
        q: 'Lohnt sich SEO für ein B2B-Unternehmen am Chemiepark Leuna?',
        a: 'Ja. Gerade im B2B-Bereich sind Suchanfragen oft sehr spezifisch und mit hoher Kaufabsicht verbunden. Eine Top-Platzierung für „Industriereinigung Leuna" oder „Anlagenwartung Saalekreis" generiert qualifizierte Anfragen.',
      },
      {
        q: 'Wie lange dauert es, bis mein Leuna-Unternehmen bei Google in den Top 3 steht?',
        a: 'Für spezifische B2B-Suchbegriffe sind erste Erfolge oft nach sechs bis acht Wochen sichtbar. Stabile Top-Platzierungen erreichen wir in der Regel innerhalb von drei bis sechs Monaten.',
      },
      {
        q: 'Können Sie auch überregionale Fachbegriffe für unser Leuna-Unternehmen optimieren?',
        a: 'Ja. Neben lokaler SEO optimieren wir auch für branchenspezifische Suchbegriffe, die über den Standort Leuna hinaus relevant sind – für maximale Sichtbarkeit bei Ihrer Zielgruppe.',
      },
      {
        q: 'Erhalte ich regelmäßige Berichte zur SEO-Entwicklung?',
        a: 'Ja. Sie erhalten monatliche Reports mit Ranking-Positionen, Sichtbarkeitsindex und konkreten Handlungsempfehlungen.',
      },
    ],
    highlights: [
      'B2B-fokussierte SEO-Strategie für den Chemiestandort Leuna',
      'Optimierung für lokale und branchenspezifische Suchbegriffe',
      'Monatliches Reporting mit messbaren Ergebnissen',
      'Regionale Expertise aus dem nahen Groitzsch',
    ],
  },

  /* ================================================================
   *  OSCHATZ
   * ================================================================ */
  'oschatz.ki-chatbots': {
    regionSlug: 'oschatz',
    regionName: 'Oschatz',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Oschatz – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation in Nordsachsen.',
    intro:
      'Oschatz, das regionale Zentrum an der B6 zwischen Leipzig und Dresden, ist Anlaufpunkt für Handel, Handwerk und Dienstleistungen in Nordsachsen. Mit rund 14.000 Einwohnern und einem großen Einzugsgebiet bedienen Oschatzer Betriebe Kunden aus der ganzen Region. Ein KI-Chatbot von Pixel Kraftwerk beantwortet Anfragen automatisch und sorgt dafür, dass kein Geschäft verloren geht.',
    paragraphs: [
      'Als regionales Zentrum in Nordsachsen hat Oschatz eine Versorgungsfunktion für das Umland: Menschen aus Mügeln, Dahlen, Wermsdorf und den umliegenden Gemeinden kommen zum Einkaufen, für Arztbesuche und Dienstleistungen nach Oschatz. Viele suchen vorher online – und erwarten sofortige Antworten. Ein KI-Chatbot auf Ihrer Webseite liefert genau das.',
      'Für Oschatzer Einzelhändler in der Sporerstraße oder am Neumarkt ist der Chatbot ein digitaler Verkaufsberater: Er informiert über Sortiment, Öffnungszeiten und aktuelle Angebote. Für Handwerksbetriebe erfasst er Auftragsanfragen mit Details zu Umfang und Standort. Für Arztpraxen übernimmt er Terminanfragen und Vorabklärungen.',
      'Oschatz liegt strategisch an der B6 – einer wichtigen Verbindungsachse zwischen Leipzig und Dresden. Unternehmen, die Kunden entlang dieser Achse bedienen, profitieren von einem Chatbot, der regionale Anfragen aus dem gesamten nordsächsischen Raum bearbeiten kann.',
      'Pixel Kraftwerk in Groitzsch liegt rund 60 Kilometer von Oschatz entfernt. Dank guter Anbindung über die B6 und A14 sind persönliche Termine problemlos möglich. Wir betreuen Sie von der Konzeption bis zum laufenden Betrieb – remote und vor Ort.',
    ],
    faqs: [
      {
        q: 'Eignet sich ein KI-Chatbot für den Einzelhandel in Oschatz?',
        a: 'Ja. Ein Chatbot informiert Kunden über Sortiment, Verfügbarkeiten und Öffnungszeiten – besonders wertvoll für Kunden aus dem Umland, die ihren Besuch in Oschatz vorab planen.',
      },
      {
        q: 'Kann der Chatbot auch Kunden aus dem Oschatzer Umland bedienen?',
        a: 'Selbstverständlich. Der Chatbot steht allen Besuchern Ihrer Webseite zur Verfügung – unabhängig davon, ob sie aus Oschatz, Mügeln, Dahlen oder dem weiteren Umland kommen.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Oschatzer Unternehmen einsatzbereit?',
        a: 'In der Regel ist ein erster produktiver Chatbot innerhalb von zwei bis vier Wochen live. Die Einrichtung umfasst die Analyse Ihrer häufigsten Anfragen und den Aufbau der Dialogstruktur.',
      },
      {
        q: 'Kommt Pixel Kraftwerk für die Einrichtung auch nach Oschatz?',
        a: 'Ja. Von Groitzsch erreichen wir Oschatz in rund einer Stunde. Erstgespräche, Workshops und technische Einrichtung vor Ort sind selbstverständlich möglich.',
      },
    ],
    highlights: [
      'Rund-um-die-Uhr-Erreichbarkeit für Kunden aus Oschatz und Umland',
      'Individuelle Dialoggestaltung für Handel, Handwerk und Dienstleistung',
      'Integration in Webseite, Kalender und CRM',
      'Persönliche Betreuung aus Groitzsch – rund 60 km entfernt',
    ],
  },

  'oschatz.telefonassistenten': {
    regionSlug: 'oschatz',
    regionName: 'Oschatz',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Oschatz – Pixel Kraftwerk sichert Ihre Erreichbarkeit im regionalen Zentrum Nordsachsens.',
    intro:
      'In Oschatz als regionalem Versorgungszentrum ist telefonische Erreichbarkeit besonders wichtig: Kunden aus dem gesamten Umland rufen an, um Termine zu vereinbaren, Verfügbarkeiten zu prüfen oder Aufträge zu erteilen. Wenn Ihr Team gerade gebunden ist, übernimmt unser Telefonassistent – professionell und zuverlässig.',
    paragraphs: [
      'Oschatz hat eine Versorgungsfunktion für einen großen ländlichen Raum: Patienten, Kunden und Auftraggeber kommen aus Mügeln, Dahlen, Wermsdorf und den umliegenden Gemeinden. Viele greifen zuerst zum Telefon – und erwarten, dass jemand abnimmt. Wenn das nicht der Fall ist, rufen sie beim nächsten Anbieter an. Unser Telefonassistent verhindert genau das.',
      'Für Arztpraxen in Oschatz ist die Entlastung unmittelbar spürbar: Terminwünsche, Rezeptanfragen und Überweisungsfragen werden vom Assistenten aufgenommen und strukturiert ans Praxisteam weitergeleitet. So kann sich das Team auf die Behandlung konzentrieren, statt ständig zwischen Telefon und Sprechzimmer zu wechseln.',
      'Handwerksbetriebe in Oschatz, die Kunden im gesamten nordsächsischen Raum bedienen, profitieren ebenfalls: Wenn der Meister auf der Baustelle in Riesa oder Grimma ist, nimmt der Assistent den Anruf entgegen, erfasst Art und Dringlichkeit des Auftrags und sendet eine strukturierte Zusammenfassung.',
      'Wir konfigurieren den Assistenten individuell für Ihre Abläufe: Welche Fragen werden beantwortet? Wann wird weitergeleitet? Welche Daten werden erfasst? Diese Regeln definieren wir gemeinsam – praxisnah und auf Ihre spezifischen Anforderungen zugeschnitten.',
    ],
    faqs: [
      {
        q: 'Kann der Telefonassistent auch Patienten aus dem Oschatzer Umland bedienen?',
        a: 'Ja. Der Assistent nimmt alle Anrufe professionell entgegen – unabhängig davon, ob der Anrufende aus Oschatz, Mügeln oder einer anderen Gemeinde der Region kommt.',
      },
      {
        q: 'Wie reagieren ältere Anrufende auf einen automatisierten Assistenten?',
        a: 'Ein gut konfigurierter Assistent führt klar und geduldig durch das Gespräch. Gerade ältere Anrufende schätzen es, dass überhaupt jemand antwortet – statt ins Leere zu rufen.',
      },
      {
        q: 'Lässt sich der Assistent an meine Praxissoftware in Oschatz anbinden?',
        a: 'Ja. Wir integrieren den Assistenten mit gängiger Praxissoftware und Kalenderlösungen, damit erfasste Daten direkt dort landen, wo sie gebraucht werden.',
      },
      {
        q: 'Was kostet ein Telefonassistent für einen Betrieb in Oschatz?',
        a: 'Die Kosten richten sich nach Funktionsumfang und Anrufvolumen. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes, auf Ihren Betrieb zugeschnittenes Angebot.',
      },
    ],
    highlights: [
      'Zuverlässige Erreichbarkeit für Kunden aus Oschatz und dem Umland',
      'Strukturierte Erfassung von Terminen und Aufträgen',
      'Anbindung an Praxissoftware, CRM und Kalender',
      'Individuelle Gesprächsabläufe für Ihre Branche',
    ],
  },

  'oschatz.automatisierungen': {
    regionSlug: 'oschatz',
    regionName: 'Oschatz',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Oschatz – Pixel Kraftwerk digitalisiert Geschäftsprozesse in Nordsachsen.',
    intro:
      'In Oschatz arbeiten viele kleine und mittlere Unternehmen mit bewährten, aber manuellen Abläufen. Auftragszettel, Excel-Listen und handschriftliche Notizen bestimmen den Alltag. Pixel Kraftwerk automatisiert diese Prozesse und macht Oschatzer Betriebe fit für die Zukunft – ohne alles auf den Kopf zu stellen.',
    paragraphs: [
      'Oschatz ist ein regionales Zentrum mit einem starken Mittelstand: Handwerksbetriebe, Einzelhändler, Arztpraxen und Dienstleister bilden das wirtschaftliche Rückgrat. Was viele dieser Betriebe eint: Wiederkehrende Aufgaben wie Terminbestätigungen, Angebotserstellung, Rechnungsversand und Kundennachfassaktionen werden noch manuell erledigt. Das bindet wertvolle Arbeitszeit.',
      'Unsere Automatisierungen für Oschatzer Unternehmen setzen genau hier an: Kontaktanfragen von der Webseite landen automatisch im CRM. Terminbuchungen erzeugen Kalendereinträge und Erinnerungs-SMS. Angebote werden nach dem Erstgespräch automatisch generiert. Rechnungen nach Auftragsabschluss versendet. Follow-up-Mails gehen termingerecht raus – ohne manuelles Zutun.',
      'Wir arbeiten mit Ihren vorhandenen Werkzeugen: Ob Google Workspace, Microsoft 365, Lexoffice, Datev oder Branchensoftware – wir verbinden die Systeme, die Sie bereits nutzen. Kein Wechsel, keine neue Software, keine Einarbeitungszeit.',
      'Als regionale Agentur aus Groitzsch verstehen wir die Realität kleinerer Betriebe: begrenzte IT-Budgets, wenig Zeit für Projekte und der Wunsch nach pragmatischen Lösungen. Genau das liefern wir – schrittweise Automatisierungen, die sofort Wirkung zeigen und sich schnell amortisieren.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in einem Oschatzer Handwerksbetrieb automatisieren?',
        a: 'Typische Einsatzfelder sind Angebotserstellung, Auftragsbestätigungen, Terminverwaltung, Rechnungsversand und Kundenkommunikation. Grundsätzlich eignet sich jeder wiederkehrende Prozess mit klaren Regeln.',
      },
      {
        q: 'Brauche ich IT-Kenntnisse für die Nutzung der Automatisierungen?',
        a: 'Nein. Wir richten alles so ein, dass es im Hintergrund läuft. Ihr Team bemerkt vor allem eines: weniger manuelle Arbeit und weniger Fehler.',
      },
      {
        q: 'Wie schnell sehe ich Ergebnisse nach der Einführung?',
        a: 'Viele Oschatzer Unternehmen berichten bereits in der ersten Woche von einer spürbaren Entlastung – weniger Zettelwirtschaft, schnellere Reaktionszeiten und weniger vergessene Aufgaben.',
      },
      {
        q: 'Kommt Pixel Kraftwerk für die Einrichtung nach Oschatz?',
        a: 'Ja. Von Groitzsch erreichen wir Oschatz in rund einer Stunde. Prozessanalysen, Workshops und Einrichtungstermine finden direkt bei Ihnen statt.',
      },
    ],
    highlights: [
      'Pragmatische Automatisierungen für den Oschatzer Mittelstand',
      'Verbindung bestehender Systeme ohne Softwarewechsel',
      'Sofortige Entlastung bei wiederkehrenden Routineaufgaben',
      'Persönliche Betreuung und Schulung aus der Region',
    ],
  },

  'oschatz.webseiten': {
    regionSlug: 'oschatz',
    regionName: 'Oschatz',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Professionelle Webseiten für Unternehmen in Oschatz – Pixel Kraftwerk erstellt moderne Internetauftritte für Nordsachsen.',
    intro:
      'Für Unternehmen in Oschatz ist eine professionelle Webseite der Schlüssel zur regionalen Sichtbarkeit. Kunden aus dem gesamten nordsächsischen Umland suchen online nach Anbietern – wer keine überzeugende Webseite hat, wird übersehen. Pixel Kraftwerk entwickelt Webseiten, die gefunden werden und Besucher in Kunden verwandeln.',
    paragraphs: [
      'Oschatz liegt strategisch an der B6 zwischen Leipzig und Dresden und ist ein zentraler Anlaufpunkt in Nordsachsen. Kunden aus einem großen Einzugsgebiet suchen online nach lokalen Anbietern – vom Handwerker über den Arzt bis zum Einzelhändler. Eine professionelle Webseite sorgt dafür, dass Ihr Unternehmen bei diesen Suchanfragen sichtbar ist.',
      'Wir entwickeln Webseiten, die auf den regionalen Markt zugeschnitten sind: Klare Darstellung Ihres Leistungsgebiets, lokale Referenzen, optimierte Texte für Suchbegriffe wie „Handwerker Oschatz", „Zahnarzt Oschatz" oder „Elektroinstallation Nordsachsen". Jede Seite wird von Anfang an für Google optimiert.',
      'Technisch setzen wir auf schnelle Ladezeiten, mobiloptimiertes Design und eine intuitive Navigation. Auf Wunsch integrieren wir Online-Terminbuchung, Kontaktformulare mit CRM-Anbindung, einen KI-Chatbot oder einen Download-Bereich für Kataloge und Preislisten.',
      'Von Groitzsch aus begleiten wir Oschatzer Unternehmen durch den gesamten Prozess – vom Erstgespräch über Konzept und Design bis zum Launch. Auch nach der Veröffentlichung stehen wir für Wartung, Updates und Weiterentwicklungen zur Verfügung.',
    ],
    faqs: [
      {
        q: 'Wird die Webseite für Suchanfragen in Oschatz und Nordsachsen optimiert?',
        a: 'Ja. Lokale SEO ist bei jeder unserer Webseiten Standard – von den Meta-Daten über die Seitenstruktur bis zum Google-Unternehmensprofil.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Webseite für mein Oschatzer Unternehmen?',
        a: 'Je nach Umfang ist Ihre Webseite in vier bis acht Wochen fertig. Einfachere Seiten können auch schneller realisiert werden.',
      },
      {
        q: 'Kann ich die Webseite selbst pflegen und aktualisieren?',
        a: 'Ja. Wir schulen Sie im Umgang mit dem Content-Management-System, sodass Sie Texte, Bilder und Angebote eigenständig ändern können.',
      },
      {
        q: 'Bieten Sie auch Wartung für die Webseite nach dem Launch an?',
        a: 'Ja. Unsere Wartungspakete umfassen technische Updates, Sicherheitsprüfungen und inhaltliche Aktualisierungen – für eine dauerhaft aktuelle Webseite.',
      },
    ],
    highlights: [
      'Lokale SEO-Optimierung für Oschatz und Nordsachsen',
      'Mobiloptimiert, schnell und barrierefrei',
      'Integration von Chatbot, Terminbuchung und CRM',
      'Persönliche Betreuung vom Konzept bis zur laufenden Wartung',
    ],
  },

  'oschatz.seo-top-3': {
    regionSlug: 'oschatz',
    regionName: 'Oschatz',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'SEO für Oschatz – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google für Nordsachsen.',
    intro:
      'In Oschatz entscheidet die Google-Platzierung, ob Ihr Unternehmen von Kunden aus der Region gefunden wird. Als zentraler Standort in Nordsachsen bedienen Oschatzer Betriebe ein großes Einzugsgebiet – aber nur, wenn sie bei Google sichtbar sind. Pixel Kraftwerk bringt Ihr Unternehmen gezielt in die Top 3.',
    paragraphs: [
      'Oschatz mit seinem regionalen Einzugsgebiet bietet ideale Voraussetzungen für lokale SEO: Das Suchvolumen für Begriffe wie „Handwerker Oschatz", „Arzt Oschatz" oder „Einkaufen Nordsachsen" ist relevant, der Wettbewerb aber überschaubar. Mit gezielter Optimierung lassen sich hier schnell Top-Platzierungen erreichen, die einen echten Unterschied für Ihr Geschäft machen.',
      'Unsere SEO-Strategie für Oschatzer Unternehmen umfasst drei Bereiche: Technische Optimierung – schnelle Ladezeiten, saubere URL-Struktur und Mobilfreundlichkeit. Inhaltliche Optimierung – relevante Texte, die Ihre Kompetenz und Ihren Standort klar kommunizieren. Lokale SEO – Google-Unternehmensprofil, Verzeichniseinträge und Bewertungsmanagement.',
      'Die Lage an der B6 zwischen Leipzig und Dresden verschafft Oschatzer Unternehmen ein besonderes Potenzial: Durchreisende und Kunden entlang der Achse suchen gezielt nach Anbietern an dieser Route. Wir optimieren Ihre Sichtbarkeit nicht nur für Oschatz selbst, sondern für den gesamten nordsächsischen Korridor.',
      'Als Agentur aus Groitzsch kennen wir den nordsächsischen Markt und die lokale Wettbewerbslandschaft. Wir liefern keine Standardlösung, sondern eine Strategie, die auf Ihre Branche, Ihren Standort und Ihre Zielgruppe in Oschatz zugeschnitten ist – mit monatlichem Reporting und messbaren Ergebnissen.',
    ],
    faqs: [
      {
        q: 'Wie lange dauert es, bis mein Oschatzer Unternehmen bei Google in den Top 3 steht?',
        a: 'In einem Markt wie Oschatz sind erste Verbesserungen oft nach vier bis sechs Wochen sichtbar. Stabile Top-3-Platzierungen erreichen wir typischerweise innerhalb von drei bis fünf Monaten.',
      },
      {
        q: 'Kann ich durch SEO in Oschatz auch Kunden aus dem weiteren Umland gewinnen?',
        a: 'Ja. Wir optimieren Ihre Sichtbarkeit für den gesamten nordsächsischen Raum – von Mügeln und Dahlen bis Riesa und Grimma. So maximieren Sie Ihr Einzugsgebiet.',
      },
      {
        q: 'Lohnt sich SEO für einen kleinen Betrieb in Oschatz?',
        a: 'Gerade für kleine Betriebe in Oschatz lohnt sich SEO: Der Wettbewerb ist gering, und schon eine Top-3-Platzierung für wenige relevante Keywords bringt regelmäßig neue Kundenanfragen.',
      },
      {
        q: 'Erhalte ich regelmäßige Berichte zum SEO-Fortschritt?',
        a: 'Ja. Sie erhalten monatliche Reports mit Ranking-Entwicklung, Sichtbarkeitsindex und konkreten Handlungsempfehlungen – transparent und nachvollziehbar.',
      },
    ],
    highlights: [
      'Lokale SEO-Strategie für Oschatz und den nordsächsischen Korridor',
      'Google-Unternehmensprofil und Bewertungsmanagement',
      'Monatliches Reporting mit messbaren Ergebnissen',
      'Regionale Marktkenntnis aus dem nahen Groitzsch',
    ],
  },
};
