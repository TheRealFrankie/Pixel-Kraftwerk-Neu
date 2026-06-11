/**
 * CRM-Systeme Content – Tier 1 Städte
 * Halle (Saale), Chemnitz, Jena, Gera, Zwickau, Altenburg,
 * Weißenfels, Merseburg, Zeitz, Grimma
 */
import type { LeistungsgebietSlug } from './leistungsgebiete';
import type { ServiceSlug } from './services';

type RegionServiceKey = `${LeistungsgebietSlug}.${ServiceSlug}`;

type RegionServiceContent = {
  regionSlug: LeistungsgebietSlug;
  regionName: string;
  serviceSlug: ServiceSlug;
  serviceLabel: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  highlights: string[];
};

export const crmTier1ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {

  'halle-saale.crm-systeme': {
    regionSlug: 'halle-saale',
    regionName: 'Halle (Saale)',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Halle (Saale) – Pixel Kraftwerk aus Groitzsch richtet Lead-Management und Kundenverwaltung für Unternehmen in Halle und dem Saalekreis ein.',
    intro: 'Mit rund 240.000 Einwohnern, der Martin-Luther-Universität und einem wachsenden Mittelstand ist Halle (Saale) einer der wichtigsten Wirtschaftsstandorte Mitteldeutschlands. Wer hier wächst, braucht ein CRM, das mithalten kann.',
    paragraphs: [
      'Halle (Saale) bietet Unternehmen ein breites Marktumfeld: Startups aus dem Umfeld der MLU, etablierte Handwerksbetriebe in den Stadtteilen, Gesundheitsdienstleister und Agenturen. Allen gemeinsam ist, dass Anfragen über mehrere Kanäle reinkommen – Website, Telefon, E-Mail, Empfehlung. Ohne zentrales CRM gehen Kontakte verloren, bevor sie zu Aufträgen werden.',
      'Für Hallesche Unternehmen richten wir CRM-Systeme ein, die den schnellen Markt abbilden: kurze Reaktionszeiten, klare Zuständigkeiten, automatische Follow-ups. Ob Vertriebspipeline für ein Beratungsunternehmen in der Innenstadt oder Anfragenmanagement für einen Handwerksbetrieb in Silberhöhe – wir konfigurieren passgenau.',
      'Die Universität und ihre Ausgründungen bringen in Halle eine besondere Dynamik: viele junge Unternehmen, schnelle Wachstumsphasen, hoher Digitalisierungsdruck. Ein CRM schafft die nötige Struktur, damit Wachstum nicht im Chaos endet, sondern in skalierenden Prozessen.',
      'Integration mit vorhandenen Tools ist selbstverständlich: Website-Formulare, E-Mail-Postfächer, Kalender und – falls vorhanden – KI-Chatbot oder Telefonassistent fließen automatisch ins CRM. So entsteht eine durchgängige Anfragen-Pipeline ohne manuelle Dateneingabe.',
      'Pixel Kraftwerk sitzt in Groitzsch, etwa 40 Kilometer von Halle entfernt. Persönliche Beratung und Workshops sind in Halle vor Ort möglich. Laufende Betreuung läuft effizient per Videocall oder persönlichem Termin.',
    ],
    faqs: [
      { q: 'Welches CRM empfehlt ihr für Hallesche Unternehmen?', a: 'Herstellerunabhängig – HubSpot, Pipedrive, Brevo oder andere, je nach Teamgröße und Anforderung. Das klären wir im Erstgespräch.' },
      { q: 'Lohnt sich ein CRM für ein junges Unternehmen in Halle?', a: 'Gerade für wachsende Betriebe ist ein CRM frühzeitig sinnvoll – damit Wachstum in strukturierten Prozessen stattfindet.' },
      { q: 'Kann ich bestehende Kontakte aus Outlook oder Excel übernehmen?', a: 'Ja, Datenmigration ist standardmäßig enthalten.' },
      { q: 'Wie schnell ist ein CRM in Halle live?', a: 'Basis-Setup in 2–4 Wochen. Komplexere Projekte mit Datenmigration in 4–8 Wochen.' },
      { q: 'Gibt es persönliche Beratung in Halle?', a: 'Ja. Wir kommen für Workshops und Schulungen nach Halle oder Sie besuchen uns in Groitzsch.' },
    ],
    highlights: [
      'CRM für den wachsenden Mittelstand in Halle (Saale)',
      'Automatische Anfragen-Pipeline aus allen Kanälen',
      'Herstellerunabhängige Beratung',
      'Persönliche Workshops in Halle möglich',
    ],
  },

  'chemnitz.crm-systeme': {
    regionSlug: 'chemnitz',
    regionName: 'Chemnitz',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Chemnitz – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Industriebetriebe, Dienstleister und den Chemnitzer Mittelstand ein.',
    intro: 'Chemnitz ist Sachsens drittgrößte Stadt – und mit der Transformation zur E-Mobilität im Umbruch. Für Unternehmen, die in diesem Wandel wachsen wollen, ist ein strukturiertes CRM kein Nice-to-have, sondern Grundvoraussetzung.',
    paragraphs: [
      'Die Chemnitzer Wirtschaft ist traditionell industriell geprägt, wandelt sich aber: Automobilzulieferer, IT-Dienstleister, Kreativwirtschaft und Handwerk existieren nebeneinander. Gerade in Transformationsphasen werden Vertriebsprozesse komplexer – mehr Touchpoints, mehr Entscheider, längere Entscheidungswege. Ein CRM macht diese Komplexität beherrschbar.',
      'Für Chemnitzer B2B-Unternehmen konfigurieren wir Pipelines, die den mehrstufigen Vertriebsprozess abbilden: Erstkontakt, Qualifizierung, Angebot, Nachverfolgung, Abschluss. Automatische Erinnerungen stellen sicher, dass kein Interessent in der Pipeline stecken bleibt.',
      'Auch für Handwerksbetriebe und lokale Dienstleister in Chemnitz ist ein CRM wertvoll: Anfragen aus Website, Telefon und Empfehlung werden zentral erfasst und dem richtigen Mitarbeiter zugewiesen. Das spart Zeit und verhindert Kommunikationsfehler.',
      'Integration mit vorhandenen Systemen hat Priorität. Wir verbinden das CRM mit Website-Formularen, E-Mail, Kalender und – bei Bedarf – mit dem KI-Telefonassistenten, damit eingehende Anrufe automatisch als Leads erfasst werden.',
      'Pixel Kraftwerk in Groitzsch, rund 75 Kilometer von Chemnitz entfernt. Workshops in Chemnitz sind möglich; laufende Betreuung per Videocall effizient.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Chemnitzer Industriebetriebe?', a: 'Ja, gerade für B2B mit komplexen Vertriebszyklen ist ein CRM besonders wertvoll.' },
      { q: 'Kann das CRM mehrere Mitarbeiter abbilden?', a: 'Ja, Rollen, Zuständigkeiten und Zugriffsrechte werden konfiguriert.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen für das Basis-Setup.' },
      { q: 'Persönliche Beratung in Chemnitz?', a: 'Ja, Workshops vor Ort sind möglich.' },
    ],
    highlights: [
      'CRM für B2B und Industriemittelstand in Chemnitz',
      'Mehrstufige Vertriebspipelines konfigurierbar',
      'Integration mit KI-Telefonassistent',
      'Workshops in Chemnitz möglich',
    ],
  },

  'jena.crm-systeme': {
    regionSlug: 'jena',
    regionName: 'Jena',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Jena – Pixel Kraftwerk aus Groitzsch richtet Lead-Management und Kundenverwaltung für Tech-Unternehmen, Startups und den Jenaer Mittelstand ein.',
    intro: 'Jena ist Thüringens Technologiestadt – mit der Friedrich-Schiller-Universität, Zeiss und einem starken Startup-Ökosystem. Für Unternehmen, die hier wachsen, ist ein CRM der Grundstein für skalierende Vertriebsprozesse.',
    paragraphs: [
      'Der Jenaer Markt ist schnell und kompetitiv: Startups aus dem Ernst-Abbe-Campus wachsen rasch, etablierte Tech-Unternehmen rund um Zeiss und Schott haben komplexe Vertriebsstrukturen, und innovative Dienstleister konkurrieren um die gleichen Kunden. Wer hier Leads schlecht verwaltet, verliert sie schnell an die Konkurrenz.',
      'Für Jenaer Unternehmen konfigurieren wir CRM-Systeme, die mit dem Wachstum skalieren. Ein Startup-CRM sieht anders aus als das eines etablierten B2B-Unternehmens – wir beraten herstellerunabhängig und finden das passende Setup.',
      'Besonders wertvoll ist die Verbindung von CRM mit automatisierten Prozessen: Wenn ein Interessent das Kontaktformular ausfüllt oder den KI-Chatbot nutzt, landet er automatisch als qualifizierter Lead in der Pipeline. Kein manueller Übertrag, kein Zeitverlust.',
      'Integration mit gängigen Tech-Tools (Slack, Notion, HubSpot, Pipedrive) gehört für Jenaer Unternehmen oft zum Standard. Wir verbinden Ihr CRM mit der bestehenden Tool-Landschaft, statt alles neu aufzubauen.',
      'Pixel Kraftwerk in Groitzsch, rund 75 Kilometer von Jena entfernt. Remote-Zusammenarbeit ist für Tech-affine Jenaer Unternehmen oft effizienter; persönliche Termine sind auf Wunsch möglich.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für ein junges Startup in Jena?', a: 'Ja, besonders frühzeitig eingeführt skaliert ein CRM mit dem Wachstum.' },
      { q: 'Welches CRM empfehlt ihr für Tech-Unternehmen in Jena?', a: 'HubSpot und Pipedrive sind gut geeignet; für spezifische Anforderungen beraten wir individuell.' },
      { q: 'Lässt sich das CRM mit Slack oder anderen Tools verbinden?', a: 'Ja, über native Integrationen oder Automatisierungsplattformen.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: [
      'CRM für Tech-Unternehmen und Startups in Jena',
      'Skalierbar mit dem Wachstum',
      'Integration mit Tech-Tool-Landschaft',
      'Remote-Zusammenarbeit oder persönliche Workshops',
    ],
  },

  'gera.crm-systeme': {
    regionSlug: 'gera',
    regionName: 'Gera',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Gera – Pixel Kraftwerk aus Groitzsch strukturiert Lead-Management und Kundenverwaltung für Dienstleistungsunternehmen in Gera und Ostthüringen.',
    intro: 'Gera ist Thüringens drittgrößte Stadt und ein wichtiges Dienstleistungszentrum in Ostthüringen. Für Betriebe, die hier Kunden aus Gera, Jena und dem Altenburger Land betreuen, ist ein CRM der entscheidende Organisationsschritt.',
    paragraphs: [
      'In Gera findet der Strukturwandel statt: Traditionelle Industrie weicht Dienstleistungen, Gesundheitswirtschaft und regionalem Handel. In dieser Übergangsphase haben Unternehmen oft gewachsene, unstrukturierte Prozesse – ein CRM schafft hier Klarheit und Effizienz.',
      'Für Geraeser Dienstleistungsunternehmen und Handwerksbetriebe konfigurieren wir CRM-Systeme, die den regionalen Markt abbilden. Pipelines, automatische Follow-ups und Integration mit bestehenden Tools stehen im Mittelpunkt.',
      'Besonders für Betriebe, die sowohl in Gera als auch in Altenburg, Jena oder Zwickau tätig sind, ist ein CRM unverzichtbar: Kunden aus verschiedenen Regionen zentral verwalten, Zuständigkeiten klar regeln und kein Lead vergessen.',
      'Integration mit Website-Formularen, E-Mail und Kalender ist Standard. Auf Wunsch verbinden wir das CRM mit einem KI-Chatbot oder Telefonassistenten.',
      'Pixel Kraftwerk in Groitzsch, rund 60 Kilometer entfernt. Workshops in Gera auf Wunsch möglich.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Gera eignet sich ein CRM?', a: 'Dienstleistungen, Gesundheit, Handwerk, Beratungen – überall mit regelmäßigem Anfrageneingang.' },
      { q: 'Kann das CRM Kunden aus verschiedenen Regionen abbilden?', a: 'Ja, regionale Zuordnungen und Filter lassen sich einfach einrichten.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: [
      'CRM für Dienstleistungszentrum Gera',
      'Regionale Kundensegmentierung möglich',
      'Integration mit Website und Chatbot',
      'Workshops in Gera auf Wunsch',
    ],
  },

  'zwickau.crm-systeme': {
    regionSlug: 'zwickau',
    regionName: 'Zwickau',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Zwickau – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Automobilzulieferer, Handwerksbetriebe und Dienstleister in Zwickau ein.',
    intro: 'Zwickau ist bekannt als Automobilstadt – und steht vor einer wirtschaftlichen Transformation. Für Unternehmen, die in dieser Veränderung bestehen und wachsen wollen, ist ein strukturiertes CRM ein wichtiger Baustein.',
    paragraphs: [
      'Die Zwickauer Wirtschaft wandelt sich: Die Elektromobilität verändert Lieferketten und Geschäftsmodelle. Automobilzulieferer erschließen neue Märkte, Dienstleister wachsen, und viele Unternehmen müssen neue Kundengruppen ansprechen. Ein CRM macht diese Entwicklung beherrschbar – alle Kontakte, Anfragen und Angebote an einem Ort.',
      'Für Zwickauer B2B-Unternehmen konfigurieren wir Pipelines, die den industriellen Vertriebsalltag abbilden: längere Entscheidungswege, mehrere Ansprechpartner pro Kunde, komplexe Angebotsprozesse. Automatische Erinnerungen verhindern, dass Interessenten in der Pipeline verschwinden.',
      'Aber auch kleinere Betriebe – Handwerk, lokale Dienstleister, Praxen – profitieren in Zwickau von einem CRM: Anfragen strukturieren, Angebote nachverfolgen, Kundenbindung aufbauen.',
      'Integration mit vorhandenen Tools hat Priorität. Website-Formulare, E-Mail und Kalender fließen automatisch ins CRM; auf Wunsch verbinden wir auch Telefonassistent und KI-Chatbot.',
      'Pixel Kraftwerk in Groitzsch, rund 65 Kilometer entfernt. Workshops und Schulungen in Zwickau auf Wunsch möglich.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Automobilzulieferer in Zwickau?', a: 'Ja, gerade für B2B mit komplexen Vertriebszyklen ist ein CRM besonders wertvoll.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen für das Basis-Setup.' },
      { q: 'Persönliche Beratung in Zwickau?', a: 'Ja, Workshops vor Ort sind möglich.' },
    ],
    highlights: [
      'CRM für Automobilzulieferer und Industriemittelstand',
      'Mehrstufige B2B-Vertriebspipelines',
      'Integration mit Website, E-Mail und Telefon',
      'Workshops in Zwickau möglich',
    ],
  },

  'altenburg.crm-systeme': {
    regionSlug: 'altenburg',
    regionName: 'Altenburg',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Altenburg – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im Altenburger Land ein.',
    intro: 'Altenburg ist Kreisstadt des Altenburger Landes – direkt an der Grenze zwischen Sachsen und Thüringen. Betriebe hier bedienen Kunden aus beiden Bundesländern und brauchen ein System, das alles zentral zusammenhält.',
    paragraphs: [
      'Als Kreisstadt hat Altenburg eine vielfältige Betriebslandschaft: Verwaltungsnahe Dienstleister, Handwerk, Gesundheitswirtschaft, Einzelhandel und lokale Agenturen. Allen gemeinsam ist der Bedarf nach Struktur – Anfragen dokumentieren, Angebote nachverfolgen, Kunden langfristig binden.',
      'Für Altenburger Betriebe konfigurieren wir CRM-Systeme, die zur Kreisstadt-Dynamik passen: regional verwurzelt, persönlich, aber mit professionellen Prozessen. Automatische Follow-ups und klare Pipelines sorgen dafür, dass kein Lead vergessen wird.',
      'Die Nähe zu Lucka, Meuselwitz und Groitzsch macht regionale Kundensegmentierung sinnvoll. Ein CRM bildet diese geographischen Zuordnungen einfach ab.',
      'Pixel Kraftwerk in Groitzsch, rund 25 Kilometer von Altenburg entfernt. Persönliche Beratung und kurze Wege.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Altenburg eignet sich ein CRM?', a: 'Dienstleistungen, Handwerk, Gesundheit, Beratungen – alle mit regelmäßigem Anfrageneingang.' },
      { q: 'Kann das CRM Kunden aus Sachsen und Thüringen unterscheiden?', a: 'Ja, regionale Filter und Zuordnungen sind einfach konfigurierbar.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: [
      'CRM für die Kreisstadt Altenburg',
      'Regionale Segmentierung Sachsen/Thüringen',
      'Persönliche Beratung aus Groitzsch (25 km)',
      'Automatische Follow-ups',
    ],
  },

  'weissenfels.crm-systeme': {
    regionSlug: 'weissenfels',
    regionName: 'Weißenfels',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Weißenfels – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im Burgenlandkreis ein.',
    intro: 'Weißenfels ist die größte Stadt im Burgenlandkreis und ein wichtiges regionales Wirtschaftszentrum an der Saale. Für Betriebe, die hier und im Umland tätig sind, ist ein CRM die Grundlage für strukturierten Vertrieb.',
    paragraphs: [
      'Der Weißenfelser Markt ist geprägt von mittelständischen Betrieben, Gesundheitsversorgung und lokalem Handel. Anfragen kommen über verschiedene Kanäle – und ohne zentrales System gehen Kontakte verloren, bevor sie zu Aufträgen werden.',
      'Wir richten CRM-Systeme ein, die zur regionalen Betriebsstruktur passen: klare Pipelines, automatische Erinnerungen, Integration mit vorhandenen Tools. Für Betriebe, die auch in Merseburg, Naumburg und Zeitz tätig sind, entsteht eine übersichtliche regionale Kontaktstruktur.',
      'Pixel Kraftwerk in Groitzsch, rund 30 Kilometer entfernt. Persönliche Beratung möglich.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Weißenfels?', a: 'Gesundheit, Handwerk, Dienstleistungen, lokaler Handel.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: [
      'CRM für den Burgenlandkreis',
      'Regionale Kundensegmentierung',
      'Integration mit Website und Telefon',
      'Persönliche Betreuung aus Groitzsch',
    ],
  },

  'merseburg.crm-systeme': {
    regionSlug: 'merseburg',
    regionName: 'Merseburg',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Merseburg – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im Saalekreis und am Chemiepark ein.',
    intro: 'Merseburg vereint Industriestandort und Hochschulstadt: der Chemiepark Leuna ist nah, die Hochschule Merseburg produziert Absolventen für technische Berufe. Für Unternehmen in diesem Umfeld ist ein CRM ein zentrales Werkzeug.',
    paragraphs: [
      'Die Merseburger Wirtschaft ist zweigeteilt: industrielle Zulieferer am Chemiepark auf der einen Seite, regionale Dienstleister und Handwerksbetriebe auf der anderen. Beide profitieren von einem CRM – aber mit unterschiedlichen Anforderungen. Wir konfigurieren passend zu Ihrer Branche.',
      'Für B2B-Betriebe rund um den Chemiepark sind mehrstufige Pipelines und strukturiertes Angebotsmanagement wichtig. Für lokale Dienstleister steht die Vereinfachung der täglichen Kundenkommunikation im Vordergrund.',
      'Integration mit vorhandenen Systemen, automatische Follow-ups und klare Zuständigkeiten – das sind die Kernbausteine, die wir für Merseburger Unternehmen einrichten.',
      'Pixel Kraftwerk in Groitzsch, rund 35 Kilometer entfernt. Persönliche Beratung und Workshops in Merseburg möglich.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Chemiepark-Zulieferer in Merseburg?', a: 'Ja, gerade für B2B mit komplexem Angebotsmanagement.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: [
      'CRM für Industrie und Dienstleistung in Merseburg',
      'B2B-Pipelines und einfache KMU-Variante',
      'Integration mit Website und E-Mail',
      'Persönliche Beratung aus Groitzsch',
    ],
  },

  'zeitz.crm-systeme': {
    regionSlug: 'zeitz',
    regionName: 'Zeitz',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Zeitz – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung und Lead-Management für Betriebe im Burgenlandkreis ein.',
    intro: 'Zeitz liegt im südlichen Sachsen-Anhalt, nah an Groitzsch und der sächsischen Grenze. Betriebe hier haben Kunden aus Sachsen und Sachsen-Anhalt – ein CRM bringt Überblick über alle regionalen Kontakte.',
    paragraphs: [
      'Zeitz ist eine historische Industriestadt im Wandel. Lokale Betriebe arbeiten oft mit Kunden aus Weißenfels, Naumburg, Zeitz und Groitzsch – manchmal ohne klares Bild davon, welche Anfragen gerade wo stehen. Ein CRM macht Schluss damit: alle Kontakte, Angebote und Follow-ups zentral.',
      'Wir konfigurieren schlanke CRM-Systeme für kleine und mittelständische Betriebe in Zeitz. Kein Overload, aber volle Kontrolle über den eigenen Vertriebsprozess.',
      'Pixel Kraftwerk in Groitzsch, nur rund 25 Kilometer von Zeitz entfernt. Persönliche Einrichtung und kurze Wege.',
    ],
    faqs: [
      { q: 'Für welche Betriebe in Zeitz?', a: 'Handwerk, Dienstleistung, lokale Händler, Beratungen.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: [
      'CRM für den Burgenlandkreis Zeitz',
      'Schlankes Setup für kleine Teams',
      'Persönliche Betreuung (25 km)',
      'Regionale Kundensegmentierung',
    ],
  },

  'grimma.crm-systeme': {
    regionSlug: 'grimma',
    regionName: 'Grimma',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Grimma – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im östlichen Landkreis Leipzig ein.',
    intro: 'Grimma ist die wichtigste Stadt im östlichen Landkreis Leipzig. Betriebe hier bedienen Kunden aus dem gesamten Landkreis – und brauchen ein System, das alle Kontakte strukturiert zusammenhält.',
    paragraphs: [
      'Grimma liegt an der Mulde, umgeben von mittelständischen Betrieben, Handwerk und lokalem Dienstleistungsgewerbe. Ohne zentrales System verlieren Betriebe Anfragen zwischen E-Mails und Telefon. Ein CRM sorgt dafür, dass kein Lead verloren geht.',
      'Für Grimmaer Betriebe konfigurieren wir CRM-Systeme, die zum regionalen Markt passen: einfach zu bedienen, auf die wichtigsten Pipelines fokussiert, integriert mit vorhandenen Tools.',
      'Pixel Kraftwerk in Groitzsch, rund 35 Kilometer entfernt. Persönliche Beratung und kurze Wege.',
    ],
    faqs: [
      { q: 'Für welche Betriebe in Grimma?', a: 'Handwerk, Dienstleistungen, Handel, Praxen – alle mit regelmäßigem Anfrageneingang.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: [
      'CRM für den östlichen Landkreis Leipzig',
      'Schlankes Setup für KMU',
      'Integration mit Website und E-Mail',
      'Persönliche Betreuung aus Groitzsch',
    ],
  },
};
