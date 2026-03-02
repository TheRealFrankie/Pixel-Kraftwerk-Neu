/**
 * Inhalte für Leistungsgebiete-Seiten (Stadt-Seiten).
 * Shared für generateMetadata (Server) und RegionPage (Client).
 */
import { LEISTUNGSGEBIETE_SLUGS } from './leistungsgebiete';
import type { LeistungsgebietSlug } from './leistungsgebiete';
import type { ServiceSlug } from './services';

export type RegionContent = {
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  servicesHighlight: string[];
  /** Optionale, regionsspezifische Alt-Texte für Service-Kacheln */
  serviceCardAltTexts?: Partial<Record<ServiceSlug, string>>;
};

const customRegionContent: Partial<Record<string, RegionContent>> = {
  leipzig: {
    name: 'Leipzig',
    title: 'KI-Agentur Leipzig – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Leipzig. Pixel Kraftwerk aus Groitzsch – regional, verständlich, messbar.',
    intro:
      'Für Unternehmen in Leipzig entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Fokus ist immer derselbe: wiederkehrende Aufgaben reduzieren, Anfragen sauber erfassen und schneller zu Abschlüssen oder Terminen führen – ohne dass Ihr Team permanent unter Strom steht.',
    paragraphs: [
      'Leipzig ist lebendig. In der Innenstadt, in den kreativen Vierteln und im Umland sind viele Betriebe in einem Umfeld unterwegs, das schnell ist und wenig verzeiht: Wenn eine Anfrage spät beantwortet wird, ist der Kunde häufig schon beim nächsten Anbieter. Gleichzeitig laufen in vielen Unternehmen noch dieselben Zeitfresser wie vor fünf Jahren: Anrufe entgegennehmen und Rückrufe organisieren, Termine koordinieren und wieder verschieben, Standardfragen immer wieder neu beantworten und Leads aus Website, Social und Telefon an verschiedenen Stellen „verlieren“.',
      'Genau hier setzen wir an: Mit KI-Chatbots auf Ihrer Website und in Messengern, automatisierten Telefonassistenten und smarten Buchungssystemen, die rund um die Uhr verfügbar sind und standardisierte Abläufe zuverlässig übernehmen. So entstehen kürzere Reaktionszeiten, strukturierte Leads, weniger manuelle Arbeit und eine professionellere Außenwirkung gegenüber Ihren Kundinnen und Kunden – spürbar im Alltag, ohne Ihr Team mit zusätzlicher Komplexität zu belasten.',
      'Pixel Kraftwerk arbeitet regional verankert. Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Viele unserer Kundinnen und Kunden sitzen in Leipzig, im Umland und im Landkreis Leipzig. Das hat einen Vorteil: Wir denken nicht „irgendwo remote“, sondern kennen die Anforderungen regionaler Betriebe – pragmatisch, ergebnisorientiert und mit Blick auf den tatsächlichen Arbeitsalltag in Leipziger Unternehmen.',
      'Die Zusammenarbeit kann je nach Bedarf flexibel ablaufen: Erstgespräch online oder bei Ihnen in Leipzig, Workshops bei Ihnen, bei uns in Groitzsch oder remote, Umsetzung und Optimierung überwiegend remote – schnell und effizient. Wir verzichten auf technische Buzzwords und bauen Lösungen, die Sie im Tagesgeschäft wirklich entlasten und die Sie nachvollziehen und selbst bedienen können.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Leipzig?',
        a: 'Ja. Wir betreuen Unternehmen in der gesamten Stadt Leipzig und der Region – von der Innenstadt über angrenzende Viertel bis ins Umland. Erstgespräche und Workshops können bei Ihnen vor Ort oder remote stattfinden.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit aus Groitzsch für Leipziger Unternehmen konkret ab?',
        a: 'Das Erstgespräch kann online oder bei Ihnen in Leipzig stattfinden. Danach planen wir das Projekt gemeinsam, setzen die Lösung in enger Abstimmung um und begleiten Sie im laufenden Betrieb. Umsetzung und Optimierungen laufen überwiegend remote, bei Bedarf kommen wir für Workshops oder Abstimmungen nach Leipzig.',
      },
      {
        q: 'Für welche Branchen in Leipzig eignen sich eure KI-Lösungen besonders?',
        a: 'Typisch sind Praxen, Handwerk, Beratungen, Agenturen, Dienstleister, Studios, Kanzleien, Hotels und andere serviceorientierte Betriebe – überall dort, wo viele wiederkehrende Anfragen eingehen und zuverlässig bearbeitet werden müssen.',
      },
      {
        q: 'Muss mein Unternehmen in Leipzig eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Gerade kleine Teams in Leipzig profitieren, wenn täglich Anrufe, E‑Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen. Wir starten meist mit einem klar umrissenen Use Case und bauen die Automatisierung dann Schritt für Schritt mit Ihnen aus.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Leipzig live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen nach Projektstart. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt, komplexere CRM- und Prozessautomatisierungen brauchen etwas mehr Abstimmung.',
      },
      {
        q: 'Könnt ihr bestehende Systeme in Leipzig integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo immer möglich, binden wir vorhandene Systeme an – etwa CRM-Lösungen, Terminbuchungs-Tools oder Branchensoftware. So entstehen keine Insellösungen, sondern Abläufe, die sauber zusammenspielen und Ihre Daten an einem zentralen Ort halten.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenten in Leipzig?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ihre Ziele und erstellen ein transparentes Angebot mit klaren monatlichen und einmaligen Kosten – von Einstiegsprojekten bis hin zu umfassenden Automatisierungen.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung für Leipziger Unternehmen an?',
        a: 'Ja. Viele unserer Kundinnen und Kunden in Leipzig nutzen laufende Betreuungspakete, in denen wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern. So bleibt Ihre Lösung aktuell und entwickelt sich mit Ihrem Unternehmen weiter.',
      },
      {
        q: 'Kann ich mir Beispiele oder Demos für Leipzig ansehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert, um die Vertraulichkeit unserer Kunden zu wahren.',
      },
      {
        q: 'Wie startet man am besten?',
        a: 'Am einfachsten mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen – zum Beispiel einen Chatbot, eine telefonische Kundenassistenz oder einen konkreten Automatisierungs-Workflow für Ihr Leipziger Unternehmen.',
      },
    ],
    servicesHighlight: [
      'KI-Chatbots für Website, Messenger & typische Leipziger Use Cases',
      'Automatisierte Telefonassistenten, die Anrufe strukturiert aufnehmen und qualifizieren',
      'Intelligente Terminbuchungssysteme, die Kalender, Erinnerungen und Nachfass-Prozesse übernehmen',
      'CRM- und Lead-Management-Automatisierungen, die Anfragen sauber erfassen und nachverfolgen',
      'Websites & SEO mit Fokus auf lokale Sichtbarkeit und Top-3-Platzierungen in Leipzig',
    ],
  },
  markkleeberg: {
    name: 'Markkleeberg',
    title: 'KI-Agentur Markkleeberg – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Markkleeberg. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt.',
    intro:
      'Für Unternehmen in Markkleeberg entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Fokus ist immer derselbe: wiederkehrende Aufgaben reduzieren, Anfragen strukturiert erfassen und Reaktionszeiten verbessern – damit aus Sichtbarkeit verlässlich neue Termine und Aufträge entstehen.',
    paragraphs: [
      'Markkleeberg ist als „Vorstadtperle“ am Rand von Leipzig stark angebunden – und gleichzeitig eigenständig: mit Ortsteilen wie Gaschwitz, Wachau (mit Auenhain), Zöbigker, Oetzsch/Markkleeberg-Mitte und dem direkten Bezug zum Leipziger Neuseenland. Dazu kommen starke Freizeit- und Eventpunkte wie der Markkleeberger See, der Kanupark Markkleeberg, der agra-Park und der agra Messepark. Genau in solchen Regionen steigen Anfragen oft in Wellen – und wiederkehrende Fragen werden schnell zur Dauerbelastung.',
      'Viele Betriebe arbeiten noch mit „Nebenbei-Prozessen“: Das Telefon klingelt während Terminen und Anrufe werden verpasst, die Website ist zwar online, doch Anfragen kommen unstrukturiert an, E-Mails bleiben liegen und das Nachfassen fehlt, während Social Media oder WhatsApp zwar Leads erzeugen, diese aber an verschiedenen Stellen verstreut sind. Das Ergebnis ist selten ein Leistungsproblem, sondern ein Systemproblem – die Abläufe dahinter sind nicht dafür gebaut, viele Anfragen parallel sauber zu verarbeiten.',
      'Genau hier setzen wir an: Wir bauen Systeme, die diese Lücke schließen – mit einer Kombination aus Chatbot, Telefonassistenz, Terminlogik und CRM-Workflows. Standardfragen werden beantwortet, Anfragen strukturiert aufgenommen, priorisiert und an die richtigen nächsten Schritte übergeben. So entsteht eine Kundenkommunikation, die auch bei Peaks rund um Markkleeberger See, Hafen Zöbigker oder agra-Park zuverlässig funktioniert – ohne dass Ihr Team permanent „auf Abruf“ sein muss.',
      'Pixel Kraftwerk arbeitet bewusst regional verankert. Unser Standort ist Neuer Weg 9a, 04539 Groitzsch – etwa 20,4 km Straßenentfernung von Markkleeberg, mit praktikablen Verbindungen auch ohne Auto (z. B. Direktverbindungen per Bus mit Fahrzeiten um 43–44 Minuten). Für Sie heißt das: Erstgespräch online oder bei Ihnen in Markkleeberg, Workshops bei Ihnen, bei uns in Groitzsch oder remote und eine Umsetzung, die überwiegend remote läuft – schnell, effizient und ohne technische Buzzwords oder Black Boxes, sondern mit Lösungen, die Sie nachvollziehen und selbst bedienen können.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Kunden in Markkleeberg und den Ortsteilen?',
        a: 'Ja. Wir betreuen Unternehmen in Markkleeberg sowie in Ortsteilen wie Gaschwitz, Wachau/Auenhain, Zöbigker oder Markkleeberg-Mitte – und in der gesamten Region.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit aus Groitzsch für Markkleeberger Unternehmen konkret ab?',
        a: 'Das Erstgespräch kann online oder vor Ort in Markkleeberg stattfinden. Umsetzung und Optimierung laufen überwiegend remote. Für Workshops oder engere Abstimmungen kommen wir nach Markkleeberg.',
      },
      {
        q: 'Für welche Branchen in Markkleeberg eignen sich eure KI-Lösungen besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Agenturen, Beratungen, Kanzleien, Studios, Hotels sowie Freizeit- und Tourismusbetriebe rund um das Leipziger Neuseenland – überall dort, wo viele wiederkehrende Anfragen eingehen und zuverlässig bearbeitet werden müssen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Schon kleine Teams profitieren, wenn täglich wiederkehrende Anfragen eingehen und Erreichbarkeit ein Engpass ist. Wir starten meist mit einem klar umrissenen Use Case und bauen Ihre Automatisierung Schritt für Schritt aus.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Markkleeberg live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen nach Projektstart. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt, komplexere CRM- und Prozessautomatisierungen brauchen etwas mehr Abstimmung.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme an – etwa CRM-Lösungen, Terminbuchungs-Tools oder Branchensoftware. So entstehen keine Insellösungen, sondern Abläufe, die sauber zusammenspielen und Ihre Daten an einem zentralen Ort halten.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenten in Markkleeberg?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele, Kanäle und typische Abläufe in Ihrem Unternehmen in Markkleeberg und erstellen ein transparentes Angebot mit klaren monatlichen und einmaligen Kosten.',
      },
      {
        q: 'Bietet ihr auch langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuungspakete, in denen wir Dialoge, Automatisierungen und Inhalte regelmäßig überprüfen, anpassen und erweitern – damit Ihre Lösung mit Ihrem Unternehmen in Markkleeberg mitwächst.',
      },
      {
        q: 'Kann ich mir Beispiele oder Demos ansehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert, um die Vertraulichkeit unserer Kunden zu wahren.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Am einfachsten mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt – zum Beispiel einen Chatbot, eine telefonische Kundenassistenz oder einen konkreten Automatisierungs-Workflow –, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'KI-Chatbots für Website & Messenger in Markkleeberg',
      'Telefonische Kundenassistenz für Unternehmen in Markkleeberg',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Markkleeberg',
      'Webseiten im Mietmodell für Unternehmen in Markkleeberg',
      'SEO: Top 3 in Google für Markkleeberg',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'KI-Chatbot für Website in Markkleeberg',
      telefonassistenten: 'Telefonische Kundenassistenz für Unternehmen in Markkleeberg',
      automatisierungen: 'Automatisierung von Terminbuchung und Lead-Workflows in Markkleeberg',
      webseiten: 'Webseite im Mietmodell für Markkleeberg – schnell online',
      'seo-top-3': 'Local SEO Markkleeberg – Google-Sichtbarkeit und Top-3-Setup',
    },
  },
  zwenkau: {
    name: 'Zwenkau',
    title: 'KI-Agentur Zwenkau – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Zwenkau. Pixel Kraftwerk aus Groitzsch – sehr nah, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Zwenkau entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Fokus ist immer derselbe: wiederkehrende Aufgaben reduzieren, Anfragen strukturiert erfassen und Reaktionszeiten verbessern – damit aus Sichtbarkeit verlässlich neue Termine und Aufträge entstehen.',
    paragraphs: [
      'Zwenkau ist in der Region stark vernetzt – und gleichzeitig besonders: Mit dem Zwenkauer See und dem Kap Zwenkau kommt neben klassischem Alltag auch Freizeit- und Saisonbetrieb dazu. Genau das merkt man in vielen Betrieben an der Art der Anfragen: häufiger spontan, häufiger außerhalb typischer Bürozeiten, häufig mit wiederkehrenden Fragen zu Verfügbarkeit, Preisen, Ablauf oder „Geht das heute noch?“. Wenn solche Anfragen zu spät beantwortet werden, ist es selten ein Leistungsproblem – sondern fast immer ein Systemproblem.',
      'Viele Unternehmen in Zwenkau arbeiten noch mit „Nebenbei-Prozessen“: Das Telefon klingelt während Terminen und Anrufe werden verpasst, die Website ist zwar online, doch Anfragen kommen unstrukturiert an, E-Mails bleiben liegen und das Nachfassen fehlt, während Messenger wie WhatsApp zwar Kontakte erzeugen, diese aber an verschiedenen Stellen verstreut sind und nicht sauber dokumentiert werden. Das kostet Zeit, Nerven und am Ende Aufträge, weil Interessenten zu lange auf eine klare Antwort warten müssen.',
      'Genau hier setzen wir an: Wir bauen Systeme, die diese Lücke schließen – mit einer Kombination aus Chatbot, Telefonassistenz, Terminlogik und CRM-Workflows. Standardfragen werden beantwortet, Anfragen strukturiert aufgenommen, priorisiert und in einen klaren Ablauf überführt – zum Beispiel Terminbuchung, Rückruf, Angebot oder strukturierte Anfrage. So entsteht eine Kundenkommunikation, die auch bei Peaks rund um den Zwenkauer See, das Kap Zwenkau oder lokale Veranstaltungen zuverlässig funktioniert, ohne dass Ihr Team permanent „auf Abruf“ sein muss.',
      'Pixel Kraftwerk arbeitet bewusst regional verankert. Unser Standort ist Neuer Weg 9a, 04539 Groitzsch – mit rund 9,4 km Straßenentfernung nach Zwenkau und Direktbus-Verbindungen, die in etwa 15 Minuten in der Stadt sind. Für Sie heißt das: Erstgespräch online oder bei Ihnen in Zwenkau, Workshops bei Ihnen, bei uns in Groitzsch oder remote und eine Umsetzung, die überwiegend remote läuft – schnell, effizient und ohne technische Buzzwords oder Black Boxes, sondern mit Lösungen, die Sie nachvollziehen und selbst bedienen können. Gerade weil in Deutschland bereits rund jedes dritte Unternehmen KI einsetzt, ist jetzt ein guter Zeitpunkt, Prozesse sauber aufzubauen, bevor Schattenlösungen entstehen, die später schwerer zu kontrollieren sind.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Kunden in Zwenkau und Umgebung?',
        a: 'Ja. Wir betreuen Unternehmen in Zwenkau und in der Region rund um Leipzig bzw. den Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir sehr schnell in Zwenkau – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Zwenkau stattfinden. Die technische Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir nach Zwenkau, wenn es sinnvoll ist.',
      },
      {
        q: 'Für welche Branchen in Zwenkau eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Beratungen, Kanzleien, Studios sowie Betriebe im Freizeit- und Gastronomie-Umfeld rund um den Zwenkauer See und das Kap Zwenkau – überall dort, wo viele wiederkehrende Fragen und regelmäßige Terminprozesse anfallen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Gerade kleine Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen. Wir starten meist mit einem klar umrissenen Use Case, der schnell entlastet, und bauen die Automatisierung dann Schritt für Schritt mit Ihnen aus.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen nach Projektstart. Einfache Chatbots oder Telefonassistenten sind in der Regel schneller umgesetzt als komplexe CRM- und Prozessautomatisierungen.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben. So lassen sich Anfragen, Termine und Leads aus Zwenkau an einem Ort bündeln.',
      },
      {
        q: 'Wie hoch sind die Kosten?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele, Kanäle und typische Abläufe in Ihrem Unternehmen in Zwenkau und erstellen auf dieser Basis ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern. So wächst Ihre Lösung mit Ihrem Unternehmen in Zwenkau mit und bleibt aktuell.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert, um die Vertraulichkeit unserer Kunden zu wahren.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Am einfachsten mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt – zum Beispiel einen Chatbot, eine telefonische Kundenassistenz oder einen konkreten Automatisierungs-Workflow –, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Zwenkau',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Zwenkau – auch bei Peaks rund um See & Kap',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung, die Telefon, Website, E-Mail und Messenger zusammenführen',
      'Webseiten im Mietmodell für Zwenkauer Betriebe, die schnell professionell online sein wollen',
      'SEO: Top 3 in Google für Zwenkau – lokale Sichtbarkeit für „KI-Agentur Zwenkau“ und verwandte Suchbegriffe',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Zwenkau',
      telefonassistenten: 'Telefonische Kundenassistenz in Zwenkau – Anrufe & Termine automatisieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Zwenkau',
      webseiten: 'Webseite im Mietmodell für Zwenkau – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Zwenkau – Google-Sichtbarkeit und Top-3-Setup',
    },
  },
  boehlen: {
    name: 'Böhlen',
    title: 'KI-Agentur Böhlen – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Böhlen. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Böhlen und im Landkreis Leipzig entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Ziel ist es, wiederkehrende Aufgaben zu reduzieren, Anfragen strukturiert zu erfassen und Reaktionszeiten zu verbessern – damit aus Sichtbarkeit verlässlich neue Termine und Aufträge entstehen.',
    paragraphs: [
      'Böhlen ist geprägt von Industrie, Energie und Dienstleistung – und gleichzeitig ein Alltag mit vielen kurzen Kontakten: im Zentrum, rund um den Marktplatz, an der S-Bahn oder auf dem Weg Richtung Leipzig. Gerade Betriebe mit kleinem Team merken, wie schnell Telefon, E-Mail und Website-Anfragen parallel auflaufen: „Haben Sie kurzfristig Zeit?“, „Was kostet das?“, „Wie läuft das ab?“. Wenn diese Anfragen nur nebenbei bearbeitet werden, bleiben Rückrufe liegen, Termine überschneiden sich und potenzielle Aufträge versanden.',
      'Das ist selten ein Leistungsproblem, sondern fast immer ein Systemproblem. Wenn Anrufe, E-Mails und Formularanfragen nicht strukturiert erfasst werden, fehlt der Überblick: Wer wartet noch auf Rückmeldung? Welche Anfrage ist wirklich dringend? Mit KI-Chatbots auf Ihrer Website und in Messengern, telefonischen Assistenten und smarten Buchungssystemen sorgen wir dafür, dass Standardfragen sofort beantwortet werden, die wichtigsten Daten aufgenommen werden und Anfragen in klare nächste Schritte übergehen – Termin, Rückruf oder Angebot.',
      'Pixel Kraftwerk sitzt in Groitzsch, Neuer Weg 9a, 04539 Groitzsch. Böhlen liegt in realistischer Distanz: Die Fahrt dauert je nach Route nur wenige Minuten mit dem Auto, hinzu kommen verlässliche Verbindungen über Bus und Bahn in der Region. Für Sie heißt das: Erstgespräch online oder bei Ihnen in Böhlen, Workshops bei Ihnen, bei uns in Groitzsch oder remote – und eine Umsetzung, die überwiegend remote läuft, damit Sie schnell Ergebnisse sehen.',
      'Gerade in Böhlen arbeiten viele Betriebe in Schichten oder mit klar getakteten Abläufen. Wenn das Telefon während der Arbeit ständig klingelt oder E-Mails zwischendurch beantwortet werden müssen, leidet die Konzentration – und trotzdem gehen Chancen verloren, weil Interessenten zu lange auf eine Antwort warten. Automatisierung sorgt dafür, dass Erreichbarkeit nicht vom Zufall abhängt: Anfragen werden zu jeder Zeit angenommen, strukturiert erfasst und in definierte Prozesse überführt, während Ihr Team sich auf die eigentliche Arbeit konzentrieren kann.',
      'Für Böhlen ist die Kombination aus lokaler Nähe und digitaler Struktur entscheidend: Kunden kommen aus der Region, sind oft unterwegs zwischen Wohnort, Betrieb und Leipzig und erwarten klare, schnelle Antworten. Mit Website, lokaler Google-Sichtbarkeit, Chatbot, Telefonassistenz und durchdachten Workflows schaffen wir ein System, das diese Erwartungen abholt – ohne künstliche „Fake-Adressen“, sondern mit ehrlicher Verankerung in Groitzsch und kurzen Wegen nach Böhlen.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Böhlen und im Umland?',
        a: 'Ja. Wir betreuen Unternehmen in Böhlen und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir schnell vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Böhlen stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Böhlen.',
      },
      {
        q: 'Für welche Branchen in Böhlen eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, lokale Händler sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen. Überall dort, wo viele Standardanfragen eingehen, lassen sich Chatbots und Telefonassistenz sinnvoll einsetzen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Gerade kleine Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen. Wir starten meist mit einem klar umrissenen Use Case, der schnell entlastet, und bauen die Automatisierung dann Schritt für Schritt mit Ihnen aus.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Böhlen live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen nach Projektstart. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt, komplexere CRM- und Prozessautomatisierungen brauchen etwas mehr Abstimmung.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben. So lassen sich Anfragen, Termine und Leads aus Böhlen an einem Ort bündeln.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Böhlen?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele, Kanäle und typische Abläufe in Ihrem Unternehmen in Böhlen und erstellen auf dieser Basis ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern. So wächst Ihre Lösung mit Ihrem Unternehmen in Böhlen mit und bleibt aktuell.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert, um die Vertraulichkeit unserer Kunden zu wahren.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Am einfachsten mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt – zum Beispiel einen Chatbot, eine telefonische Kundenassistenz oder einen konkreten Automatisierungs-Workflow –, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Böhlen',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Böhlen',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung – vom Erstkontakt bis zur Buchung in Böhlen',
      'Webseiten im Mietmodell für Unternehmen in Böhlen – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Böhlen – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Böhlen',
      telefonassistenten: 'Telefonische Kundenassistenz in Böhlen – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Böhlen',
      webseiten: 'Webseite im Mietmodell für Böhlen – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Böhlen – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  roetha: {
    name: 'Rötha',
    title: 'KI-Agentur Rötha – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Rötha. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Rötha und den umliegenden Ortsteilen entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Fokus liegt darauf, wiederkehrende Aufgaben zu reduzieren, Anfragen strukturiert zu erfassen und Reaktionszeiten zu verbessern.',
    paragraphs: [
      'Rötha liegt strategisch zwischen Leipzig, Böhlen und dem südlichen Umland. Viele Betriebe bedienen Kundschaft aus mehreren Orten gleichzeitig – und erleben im Alltag dasselbe Muster: Das Telefon klingelt während Terminen, E-Mails sammeln sich im Postfach und Website-Anfragen bleiben liegen, weil sie „nebenbei“ bearbeitet werden. Gleichzeitig stellen Interessenten immer wieder ähnliche Fragen zu Verfügbarkeit, Preisen, Ablauf und „Wie schnell geht das?“.',
      'Wenn alle Kanäle manuell bedient werden, entsteht schnell ein Systemproblem: Anfragen werden nicht einheitlich erfasst, Rückrufe geraten in Vergessenheit und interne Abläufe hängen von einzelnen Personen ab. Mit KI-Chatbots, die Standardfragen auf Ihrer Website beantworten, telefonischen Assistenten, die Anrufe annehmen und strukturieren, sowie automatisierten Workflows für Terminbuchung und Lead-Nachverfolgung bauen wir in Rötha Strukturen, die entlasten – ohne Ihren Betrieb unnötig zu verkomplizieren.',
      'Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Rötha ist von dort aus gut erreichbar: Die Entfernung ist überschaubar, die Fahrzeit liegt je nach Route im Bereich weniger Fahrminuten; hinzu kommen Bus- und Bahnverbindungen innerhalb des Landkreises. Für Sie bedeutet das: Erstgespräch online oder bei Ihnen in Rötha, Workshops vor Ort oder bei uns in Groitzsch und eine technische Umsetzung, die überwiegend remote läuft.',
      'Gerade in Rötha sind viele Betriebe tief in der Region verwurzelt – vom Handwerk über Dienstleister bis hin zu Praxen und Beratungen. Diese Unternehmen brauchen keine Spielereien, sondern verlässliche Systeme: Anfragen sollen ankommen, strukturiert werden und zu klaren nächsten Schritten führen. Automatisierung hilft dabei, aus gelegentlicher Sichtbarkeit kontinuierliche, nachvollziehbare Anfragen zu machen – mit Fokus auf Alltagstauglichkeit statt auf Buzzwords.',
      'Mit einer Kombination aus lokaler Sichtbarkeit in Google, einer klar strukturierten Website, Chatbot, Telefonassistenz und Automatisierungen für Anfragen und Termine schaffen wir in Rötha eine digitale Basis, die zu Ihren Abläufen passt. Die Nähe zu Groitzsch macht Abstimmungen einfach – ob online, telefonisch oder persönlich vor Ort.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Rötha und Umgebung?',
        a: 'Ja. Wir betreuen Unternehmen in Rötha und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir schnell vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Rötha stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Rötha.',
      },
      {
        q: 'Für welche Branchen in Rötha eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, lokale Händler sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Gerade kleinere Teams in Rötha profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Rötha?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und erstellen ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Rötha',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Rötha',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Rötha',
      'Webseiten im Mietmodell für Unternehmen in Rötha – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Rötha – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Rötha',
      telefonassistenten: 'Telefonische Kundenassistenz in Rötha – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Rötha',
      webseiten: 'Webseite im Mietmodell für Rötha – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Rötha – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  neukieritzsch: {
    name: 'Neukieritzsch',
    title: 'KI-Agentur Neukieritzsch – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Neukieritzsch. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Neukieritzsch und den umliegenden Ortsteilen entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Unser Ziel: wiederkehrende Aufgaben reduzieren, Anfragen strukturiert erfassen und Reaktionszeiten verbessern.',
    paragraphs: [
      'Neukieritzsch ist als Bahnknoten und Wohnort stark mit der Region vernetzt. Viele Betriebe betreuen Kundschaft aus den umliegenden Orten und pendelnden Menschen, die schnelle, verlässliche Antworten erwarten – egal ob es um Termine, Verfügbarkeiten oder Abläufe geht. Gleichzeitig laufen in vielen Unternehmen Telefon, E-Mail und Website-Anfragen noch wie früher: alles manuell, alles „nebenbei“. Das kostet Zeit und sorgt dafür, dass Chancen unbemerkt verloren gehen.',
      'Wenn Standardfragen immer wieder aufs Neue beantwortet werden müssen und es kein einheitliches System für Anfragen gibt, entsteht schnell Unordnung: Rückrufe werden vergessen, Informationen werden mehrfach abgefragt und niemand hat den vollständigen Überblick. Mit KI-Chatbots, die auf Ihrer Website erste Fragen beantworten und Daten strukturiert erfassen, telefonischen Assistenten, die Anrufe annehmen und sortieren, sowie automatisierten Workflows für Terminbuchung und Lead-Nachverfolgung schaffen wir in Neukieritzsch Klarheit.',
      'Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Neukieritzsch ist von dort aus gut zu erreichen – mit dem Auto über die regionale Straßenanbindung oder per ÖPNV über Bus- und Bahnlinien in der Region. Für Sie heißt das: persönliche Termine sind unkompliziert möglich, gleichzeitig läuft der Großteil der Umsetzung effizient remote.',
      'Gerade kleinere Teams in Neukieritzsch profitieren davon, wenn wiederkehrende Abläufe automatisiert werden: Standardfragen werden automatisiert beantwortet, Termine werden sauber geplant und Anfragen landen an einem zentralen Ort. So entsteht mehr Ruhe im Alltag, ohne dass Sie auf persönliche Beratung verzichten müssen – im Gegenteil: Ihr Team gewinnt wieder mehr Zeit für die Gespräche, in denen es wirklich auf Fachwissen ankommt.',
      'Mit Website, lokaler Google-Sichtbarkeit, Chatbot, Telefonassistenz und durchdachten Prozessen sorgen wir dafür, dass Neukieritzscher Betriebe nicht nur gefunden werden, sondern Anfragen auch strukturiert weiterverarbeitet werden – vom ersten Kontakt bis zum Termin oder Angebot.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Neukieritzsch und Umgebung?',
        a: 'Ja. Wir betreuen Unternehmen in Neukieritzsch und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir schnell vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Neukieritzsch stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Neukieritzsch.',
      },
      {
        q: 'Für welche Branchen in Neukieritzsch eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, lokale Händler sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Schon kleine Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Neukieritzsch?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und erstellen ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Neukieritzsch',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Neukieritzsch',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Neukieritzsch',
      'Webseiten im Mietmodell für Unternehmen in Neukieritzsch – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Neukieritzsch – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Neukieritzsch',
      telefonassistenten: 'Telefonische Kundenassistenz in Neukieritzsch – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Neukieritzsch',
      webseiten: 'Webseite im Mietmodell für Neukieritzsch – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Neukieritzsch – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  'regis-breitingen': {
    name: 'Regis-Breitingen',
    title: 'KI-Agentur Regis-Breitingen – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Regis-Breitingen. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Regis-Breitingen entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Fokus: wiederkehrende Aufgaben reduzieren, Anfragen strukturiert erfassen und Reaktionszeiten verbessern.',
    paragraphs: [
      'Regis-Breitingen liegt südlich von Leipzig, mit Nähe zu Borna und weiteren Orten im Landkreis. Viele Betriebe bedienen Kundschaft aus einem weiten Einzugsgebiet und erleben im Alltag: Anrufe kommen zu Stoßzeiten gebündelt, E-Mails werden abends bearbeitet, Website-Anfragen geraten zwischen Tür und Angel in Vergessenheit. Gleichzeitig sind viele Fragen standardisiert – zu Öffnungszeiten, Verfügbarkeiten, Preisen oder Abläufen.',
      'Wenn es für diese Standardanfragen kein System gibt, entstehen Lücken: Interessenten warten zu lange, werden mehrfach um dieselben Informationen gebeten oder springen ganz ab. Mit KI-Chatbots auf Ihrer Website und in Messengern, telefonischen Assistenten für eingehende Anrufe und automatisierten Abläufen für Terminbuchung, Rückruf und Follow-up bauen wir in Regis-Breitingen Strukturen, die Ihre Erreichbarkeit verbessern und den Alltag entlasten.',
      'Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Regis-Breitingen ist von hier aus in sinnvoller Fahrzeit erreichbar; dazu kommen Bus- und Bahnverbindungen innerhalb des Landkreises. Für Sie heißt das: persönliche Treffen in Regis-Breitingen oder bei uns in Groitzsch sind problemlos möglich, während die eigentliche technische Umsetzung überwiegend remote läuft.',
      'Gerade kleine und mittlere Betriebe in Regis-Breitingen – vom Handwerk über Dienstleister bis hin zu Praxen und Beratungen – profitieren davon, wenn Kundenkommunikation nicht mehr ausschließlich „nebenbei“ laufen muss. Automatisierung sorgt für weniger Stress im Tagesgeschäft, mehr Struktur in der Lead-Verarbeitung und eine professionellere Außenwirkung nach außen.',
      'Mit einer durchdachten Kombination aus Website, lokaler Google-Sichtbarkeit, Chatbot, Telefonassistenz und automatisierten Prozessen machen wir aus Sichtbarkeit verlässlichere Anfragen – ohne künstliche Versprechen, sondern mit einem klaren Plan, der sich an den Abläufen in Ihrem Betrieb orientiert.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Regis-Breitingen und Umgebung?',
        a: 'Ja. Wir betreuen Unternehmen in Regis-Breitingen und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir schnell vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Regis-Breitingen stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Regis-Breitingen.',
      },
      {
        q: 'Für welche Branchen in Regis-Breitingen eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, lokale Händler sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Schon kleinere Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Regis-Breitingen?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und erstellen ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Regis-Breitingen',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Regis-Breitingen',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Regis-Breitingen',
      'Webseiten im Mietmodell für Unternehmen in Regis-Breitingen – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Regis-Breitingen – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Regis-Breitingen',
      telefonassistenten: 'Telefonische Kundenassistenz in Regis-Breitingen – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Regis-Breitingen',
      webseiten: 'Webseite im Mietmodell für Regis-Breitingen – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Regis-Breitingen – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  pegau: {
    name: 'Pegau',
    title: 'KI-Agentur Pegau – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Pegau. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Pegau und dem Umland entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Unser Ziel ist es, wiederkehrende Aufgaben zu reduzieren, Anfragen strukturiert zu erfassen und Reaktionszeiten zu verbessern.',
    paragraphs: [
      'Pegau ist eine typische Kleinstadt mit starkem regionalem Bezug: Viele Entscheidungen fallen rund um den Marktplatz, in Geschäften, Praxen und Betrieben, die sich seit Jahren kennen. Gleichzeitig haben sich die Erwartungen der Kundschaft verändert – Anfragen kommen heute über Telefon, E-Mail, Website und teils Messenger-Kanäle. Wenn diese Kanäle nur nebenbei betreut werden, bleiben Rückrufe liegen, Antworten dauern zu lange und Interessenten orientieren sich weiter.',
      'Viele Fragen wiederholen sich täglich: Öffnungszeiten, Verfügbarkeit, Kostenrahmen, Ablauf – immer wieder in leicht unterschiedlichen Varianten. Wenn diese Standardanfragen jedes Mal manuell beantwortet werden, kostet das Zeit und Energie, ohne dass wirklich Wert geschaffen wird. Mit KI-Chatbots auf Ihrer Website, telefonischen Assistenten, die Anrufe annehmen und strukturieren, sowie automatisierten Workflows für Terminbuchung und Nachverfolgung schaffen wir in Pegau Entlastung im Alltag.',
      'Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Pegau ist von Groitzsch aus schnell erreichbar – mit dem Auto in kurzer Fahrzeit, hinzu kommen regionale Busverbindungen. Persönliche Treffen vor Ort sind daher unkompliziert möglich, während die technische Umsetzung und Optimierung überwiegend remote laufen und so wenig Zeit bei Ihnen im Betrieb binden.',
      'Gerade für Pegauer Betriebe mit kleinen Teams – Handwerk, Praxen, Dienstleister, Beratungen, lokale Händler – ist es entscheidend, dass Anfragen nicht verloren gehen, wenn es gerade stressig ist. Automatisierung stellt sicher, dass Kontaktaufnahmen sauber erfasst werden, Standardfragen automatisch beantwortet werden und Leads in klare nächste Schritte übergehen, ohne dass jemand permanent „am Telefon hängen“ muss.',
      'Mit einer Kombination aus lokaler Google-Sichtbarkeit, einer strukturierten Website, Chatbot, Telefonassistenz und durchdachten Prozessen helfen wir Unternehmen in Pegau, ihre Nähe zu Kundinnen und Kunden auch digital sichtbar zu machen – ohne künstlichen „Großstadt-Sprech“, sondern bodenständig und nachvollziehbar.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Pegau und Umgebung?',
        a: 'Ja. Wir betreuen Unternehmen in Pegau und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir schnell vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Pegau stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Pegau.',
      },
      {
        q: 'Für welche Branchen in Pegau eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, lokale Händler sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Auch kleinere Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Pegau live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Pegau?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und erstellen ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Pegau',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Pegau',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Pegau',
      'Webseiten im Mietmodell für Unternehmen in Pegau – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Pegau – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Pegau',
      telefonassistenten: 'Telefonische Kundenassistenz in Pegau – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Pegau',
      webseiten: 'Webseite im Mietmodell für Pegau – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Pegau – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  lucka: {
    name: 'Lucka',
    title: 'KI-Agentur Lucka – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Lucka. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Lucka und im Umfeld des Altenburger Lands entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Fokus liegt darauf, wiederkehrende Aufgaben zu reduzieren und Anfragen sauber zu strukturieren.',
    paragraphs: [
      'Lucka verbindet kleinstädtischen Alltag mit regionalen Pendel- und Fahrbeziehungen Richtung Altenburg, Zeitz und Leipzig. Viele Betriebe arbeiten mit kleinen Teams, die tagsüber stark eingebunden sind – sei es in Werkstatt, Praxis, Laden oder Büro. Wenn dann Telefon, E-Mail und Website-Anfragen parallel reinkommen, wird schnell klar: Es fehlt nicht an Nachfrage, sondern an System.',
      'Oft wiederholen sich dieselben Fragen: „Haben Sie kurzfristig Termine frei?“, „Was kostet das?“, „Wie läuft das ab?“. Wenn diese Standardanfragen jedes Mal manuell beantwortet werden müssen, bleibt wenig Zeit für die eigentliche Arbeit. Mit KI-Chatbots, die auf Ihrer Website antworten und die wichtigsten Daten aufnehmen, mit telefonischer Assistenz, die Anrufe annimmt und strukturiert, sowie mit automatisierten Workflows für Terminbuchung und Nachverfolgung schaffen wir in Lucka klare Prozesse.',
      'Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Lucka ist von hier aus gut zu erreichen – mit dem Auto über die regionalen Verbindungen zwischen Groitzsch, Pegau und Altenburger Land. Persönliche Treffen vor Ort sind damit ohne großen Aufwand möglich, während die technische Umsetzung überwiegend remote läuft.',
      'Gerade in ländlich geprägten Regionen wie rund um Lucka ist Vertrauen entscheidend. Wir arbeiten ohne künstliche Versprechungen oder Black Boxes, sondern mit nachvollziehbaren Systemen: Sie sehen, welche Fragen der Chatbot beantwortet, welche Daten aufgenommen werden und wie Leads in Ihr System gelangen. So entsteht mehr Sichtbarkeit bei Google – und gleichzeitig mehr Ruhe im Alltag, weil Anfragen strukturiert ankommen.',
      'Mit einer Kombination aus Website, lokaler Sichtbarkeit, Chatbot, Telefonassistenz und sinnvollen Automatisierungen helfen wir Betrieben in Lucka, ihre Stärken digital zu verlängern – ohne den persönlichen Charakter vor Ort zu verlieren.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Lucka und im Altenburger Land?',
        a: 'Ja. Wir betreuen Unternehmen in Lucka, im Altenburger Land und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir schnell vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Lucka stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Lucka.',
      },
      {
        q: 'Für welche Branchen in Lucka eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, lokale Händler sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Auch kleinere Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Lucka live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Lucka?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und erstellen ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Lucka',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Lucka',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Lucka',
      'Webseiten im Mietmodell für Unternehmen in Lucka – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Lucka – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Lucka',
      telefonassistenten: 'Telefonische Kundenassistenz in Lucka – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Lucka',
      webseiten: 'Webseite im Mietmodell für Lucka – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Lucka – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  meuselwitz: {
    name: 'Meuselwitz',
    title: 'KI-Agentur Meuselwitz – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Meuselwitz. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Meuselwitz entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Schwerpunkt: wiederkehrende Aufgaben reduzieren, Anfragen strukturiert erfassen und Reaktionszeiten verbessern.',
    paragraphs: [
      'Meuselwitz liegt im Dreieck zwischen Altenburger Land, Leipziger Raum und Thüringen. Viele Betriebe bedienen Kundschaft aus mehreren Landkreisen zugleich – und merken im Alltag, dass gerade in Stoßzeiten die Erreichbarkeit zum Engpass wird. Anrufe während laufender Termine, E-Mails außerhalb der Öffnungszeiten und Website-Anfragen, die erst Tage später beantwortet werden, kosten Nerven und Aufträge.',
      'Gleichzeitig sind viele dieser Anfragen wiederkehrend: Informationen zu Öffnungszeiten, Verfügbarkeit, Kosten, Ablauf oder Terminoptionen. Wenn es dafür keine klaren Prozesse gibt, entstehen Brüche – Interessenten warten, Nachfragen werden doppelt gestellt, interne Notizen sind verstreut. Mit KI-Chatbots, die Standardfragen auf Ihrer Website beantworten, mit telefonischen Assistenten, die Anrufe annehmen und strukturieren, und mit Automatisierungen für Terminbuchung und Follow-up schaffen wir in Meuselwitz eine stabile Grundlage für moderne Kundenkommunikation.',
      'Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Meuselwitz ist von dort aus über die regionale Straßenanbindung gut erreichbar. Persönliche Treffen vor Ort sind also problemlos möglich; gleichzeitig laufen Konzeption, Umsetzung und Optimierung vor allem remote, damit Sie im Alltag möglichst wenig Aufwand haben.',
      'Gerade kleinere und mittelständische Betriebe in Meuselwitz – Handwerk, Praxen, Dienstleister, Beratungen, lokale Anbieter – profitieren davon, wenn sie nicht mehr auf jedem Kanal gleichzeitig „Feuer löschen“ müssen. Automatisierung sorgt dafür, dass Anfragen sauber erfasst, priorisiert und an die richtigen Stellen weitergeleitet werden. So werden aus Sichtbarkeit und laufendem Betrieb planbare Anfragen und Termine.',
      'Mit Website, SEO-Fokus auf Meuselwitz, Chatbot, Telefonassistenz und durchdachten Workflows bauen wir ein System, das zu Ihrem Betrieb passt – mit klarer regionaler Verankerung und ohne überzogene Technikversprechen.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Meuselwitz und Umgebung?',
        a: 'Ja. Wir betreuen Unternehmen in Meuselwitz und im weiteren Umland. Unser Standort ist Groitzsch, von dort aus sind wir gut erreichbar – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Meuselwitz stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Meuselwitz.',
      },
      {
        q: 'Für welche Branchen in Meuselwitz eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, lokale Händler sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Auch kleinere Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Meuselwitz live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Meuselwitz?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und erstellen ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Meuselwitz',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Meuselwitz',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Meuselwitz',
      'Webseiten im Mietmodell für Unternehmen in Meuselwitz – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Meuselwitz – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Meuselwitz',
      telefonassistenten: 'Telefonische Kundenassistenz in Meuselwitz – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Meuselwitz',
      webseiten: 'Webseite im Mietmodell für Meuselwitz – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Meuselwitz – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  elstertrebnitz: {
    name: 'Elstertrebnitz',
    title: 'KI-Agentur Elstertrebnitz – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Elstertrebnitz. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Elstertrebnitz und entlang der Weißen Elster entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Ziel ist es, wiederkehrende Aufgaben zu reduzieren und Anfragen zuverlässig zu strukturieren.',
    paragraphs: [
      'Elstertrebnitz liegt ländlich, aber verkehrsgünstig in der Region zwischen Leipzig und Zeitz. Viele Betriebe hier sind eng mit der Umgebung verbunden – Kundschaft kennt man oft persönlich, Entscheidungen fallen auf kurzen Wegen. Gleichzeitig steigen die Erwartungen an digitale Erreichbarkeit: Interessenten informieren sich online, erwarten schnelle Antworten und möchten unkompliziert Termine vereinbaren oder Rückrufe anfragen.',
      'Wenn Telefon, E-Mail und Website-Anfragen neben dem Tagesgeschäft laufen, werden gerade in kleineren Teams schnell Anrufe verpasst oder Rückrufe verschoben. Standardfragen wiederholen sich, Formulareingänge landen im Postfach und geraten im Alltag aus dem Blick. Mit KI-Chatbots, die häufige Fragen direkt auf Ihrer Website beantworten und die wichtigsten Daten erfassen, mit telefonischen Assistenten, die Anrufe annehmen und strukturieren, sowie mit automatisierten Workflows für Terminplanung und Follow-up unterstützen wir Betriebe in Elstertrebnitz ganz konkret.',
      'Pixel Kraftwerk sitzt in Groitzsch, Neuer Weg 9a, 04539 Groitzsch – nur wenige Kilometer entfernt. Die Strecke lässt sich in kurzer Zeit mit dem Auto zurücklegen; auch Busverbindungen im Landkreis machen persönliche Termine einfach. So verbinden wir lokale Nähe mit moderner, remote umgesetzter Technik.',
      'Gerade im ländlichen Raum ist es wichtig, dass Technik verständlich bleibt. Wir bauen keine undurchsichtigen Black-Box-Systeme, sondern Lösungen, die Sie nachvollziehen können: Sie sehen, welche Fragen der Chatbot beantwortet, wie Telefonassistenz arbeitet und wie Anfragen in Ihre Prozesse übergehen. So entsteht eine moderne, verlässliche Kundenkommunikation, ohne dass Ihre regionale Handschrift verloren geht.',
      'Mit Website, lokaler Sichtbarkeit, Chatbot, Telefonassistenz und passenden Automatisierungen sorgen wir dafür, dass Betriebe in Elstertrebnitz online so professionell wirken, wie sie vor Ort bereits arbeiten – mit klarer Ausrichtung auf mehr Anfragen und weniger Stress im Alltag.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Unternehmen direkt in Elstertrebnitz und Umgebung?',
        a: 'Ja. Wir betreuen Unternehmen in Elstertrebnitz und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir in kurzer Zeit vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Elstertrebnitz stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Elstertrebnitz.',
      },
      {
        q: 'Für welche Branchen in Elstertrebnitz eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Handwerksbetriebe, Dienstleister, Praxen, Beratungen, landwirtschaftsnahe Betriebe und lokale Anbieter mit wiederkehrenden Fragen und Terminprozessen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Auch kleinere Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Elstertrebnitz live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Elstertrebnitz?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und erstellen ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Elstertrebnitz',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Elstertrebnitz',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Elstertrebnitz',
      'Webseiten im Mietmodell für Unternehmen in Elstertrebnitz – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Elstertrebnitz – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Elstertrebnitz',
      telefonassistenten: 'Telefonische Kundenassistenz in Elstertrebnitz – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Elstertrebnitz',
      webseiten: 'Webseite im Mietmodell für Elstertrebnitz – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Elstertrebnitz – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  borna: {
    name: 'Borna',
    title: 'KI-Agentur Borna – Automatisierung, Chatbots & SEO',
    metaDescription:
      'KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Borna. Pixel Kraftwerk aus Groitzsch – regional erreichbar, verständlich umgesetzt, messbar im Alltag.',
    intro:
      'Für Unternehmen in Borna und im Landkreis Leipzig entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Der Fokus ist immer derselbe: wiederkehrende Aufgaben reduzieren, Anfragen strukturiert erfassen und Reaktionszeiten verbessern – damit aus Sichtbarkeit verlässlich neue Termine und Aufträge entstehen.',
    paragraphs: [
      'Borna hat einen lebendigen Stadtkern, in dem man sieht, wie lokal Geschäft heute funktioniert: Rund um Marktplatz, Reichstor und Wochenmarkt treffen viele kurze Kontaktmomente aufeinander – „Haben Sie kurzfristig Zeit?“, „Was kostet das?“, „Wie läuft das ab?“. Der Wochenmarkt findet laut Stadtinformation Dienstag, Donnerstag und Samstag statt – genau an solchen Tagen steigen Anrufe und Rückfragen bei vielen Betrieben spürbar. Gleichzeitig laufen Telefon, E-Mail und Website-Anfragen in vielen Unternehmen noch „nebenbei“, sodass Rückrufe vergessen werden, Termine doppelt vergeben werden oder Leads versanden.',
      'Das ist selten ein Leistungsproblem – meistens ist es ein Systemproblem. Wenn alles manuell und neben dem Tagesgeschäft passiert, werden Anfragen nicht immer strukturiert erfasst und nachverfolgt. Genau hier setzen wir an: Mit KI-Chatbots auf Ihrer Website und in Messengern, automatisierten Telefonassistenten und smarten Buchungssystemen, die Standardfragen sofort beantworten, die wichtigsten Daten aufnehmen und Anfragen in klare nächste Schritte überführen – Termin, Rückruf oder Angebot.',
      'Unser Standort ist Neuer Weg 9a, 04539 Groitzsch. Borna liegt von hier aus nah: Die Strecke liegt bei ungefähr 20 Kilometern, die Fahrtzeit liegt bei rund 20 Minuten – je nach Route. Auch ohne Auto ist die Anbindung realistisch: Laut Routenübersicht gibt es einen Direktbus (Linie 271) mit einer Fahrzeit von etwa 32 Minuten. Für Sie heißt das: Erstgespräch online oder bei Ihnen in Borna, Workshops bei Ihnen, bei uns in Groitzsch oder remote – die technische Umsetzung und Optimierung läuft überwiegend remote, damit wir schnell und effizient reagieren können.',
      'In Borna arbeiten viele Betriebe mit kleinen Teams. Wenn Anrufaufkommen, E-Mails und Website-Anfragen steigen, wird es schnell unübersichtlich: Anrufe gehen in Terminen unter, Rückrufe werden vergessen, Formulareingänge landen im Postfach, ohne System fürs Nachfassen, Informationen werden doppelt erfragt und Interessenten springen ab, weil Antworten zu lange dauern. Automatisierung sorgt dafür, dass diese wiederkehrenden Aufgaben nicht mehr an einzelnen Personen hängen, sondern zuverlässig von Systemen übernommen werden – verständlich aufgebaut, ohne Technik für die Technik.',
      'Borna ist historisch sichtbar und gut wiederzuerkennen – zum Beispiel durch das Reichstor mit dem Museum der Stadt Borna, den Marktplatz mit Wochenmarkt (Di/Do/Sa) und den Historischen Weg bzw. Lutherweg. Genau diese Bezugspunkte stehen für Stadtkern, Laufwege und kurze Wege – dort, wo viele lokale Entscheidungen fallen. Von hier aus ist Groitzsch in etwa 20 Minuten erreichbar. Mit einem klaren Setup aus Website, Google-Sichtbarkeit, Chatbot, Telefonassistenz und Automatisierungen schaffen wir die digitale Verlängerung dieser Nähe: Anfragen aus Borna werden zuverlässig angenommen, strukturiert erfasst und in geordnete Prozesse überführt.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Kunden direkt in Borna und im Umland?',
        a: 'Ja. Wir betreuen Unternehmen in Borna und im Landkreis Leipzig. Unser Standort ist Groitzsch, von dort aus sind wir schnell vor Ort – für Erstgespräche, Workshops und Abstimmungen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit konkret ab, wenn ihr in Groitzsch sitzt?',
        a: 'Das Erstgespräch kann online oder vor Ort in Borna stattfinden. Umsetzung und Optimierung laufen überwiegend remote, damit wir schnell reagieren können. Für Workshops oder engere Abstimmungen kommen wir bei Bedarf nach Borna.',
      },
      {
        q: 'Für welche Branchen in Borna eignen sich KI-Chatbots und Telefonassistenz besonders?',
        a: 'Typisch sind Praxen, Handwerksbetriebe, Dienstleister, Kanzleien, Beratungen, Studios sowie Betriebe mit wiederkehrenden Fragen und Terminprozessen. Überall dort, wo viele Standardanfragen eingehen, lassen sich Chatbots und Telefonassistenz sinnvoll einsetzen.',
      },
      {
        q: 'Muss mein Unternehmen eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Gerade kleine Teams profitieren, wenn täglich Anrufe, E-Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen. Wir starten meist mit einem klar umrissenen Use Case, der schnell entlastet, und bauen die Automatisierung dann Schritt für Schritt mit Ihnen aus.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme live sind?',
        a: 'Je nach Umfang liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen nach Projektstart. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt, komplexere CRM- und Prozessautomatisierungen brauchen etwas mehr Abstimmung.',
      },
      {
        q: 'Könnt ihr bestehende Systeme integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo möglich, binden wir vorhandene Systeme wie CRM, Kalender- oder Terminsoftware an, damit keine Insellösungen entstehen und Daten zentral bleiben. So lassen sich Anfragen, Termine und Leads aus Borna an einem Ort bündeln.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenz in Borna?',
        a: 'Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele, Kanäle und typische Abläufe in Ihrem Unternehmen in Borna und erstellen auf dieser Basis ein transparentes Angebot mit klaren einmaligen und monatlichen Kosten.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung und Optimierung an?',
        a: 'Ja. Viele Kundinnen und Kunden nutzen laufende Betreuung, in der wir Dialoge, Automatisierungen und Inhalte regelmäßig prüfen, anpassen und erweitern. So wächst Ihre Lösung mit Ihrem Unternehmen in Borna mit und bleibt aktuell.',
      },
      {
        q: 'Kann ich Beispiele oder Demos sehen?',
        a: 'Im Erstgespräch zeigen wir passende Demos und Beispiel-Workflows. Konkrete Referenzen besprechen wir je nach Projekt individuell und teilweise anonymisiert, um die Vertraulichkeit unserer Kunden zu wahren.',
      },
      {
        q: 'Wie starte ich am besten?',
        a: 'Am einfachsten mit einem kurzen, unverbindlichen Erstgespräch. Wir definieren ein erstes, klar umrissenes Projekt – zum Beispiel einen Chatbot, eine telefonische Kundenassistenz oder einen konkreten Automatisierungs-Workflow –, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'Digitale Kundenassistenz / KI-Chatbot für Websites von Betrieben in Borna',
      'Telefonische Kundenassistenz / KI-Telefonassistenz für bessere Erreichbarkeit in Borna',
      'Automatisierungen für Anfragen, Vertrieb & Terminplanung – vom Erstkontakt bis zur Buchung',
      'Webseiten im Mietmodell für Unternehmen in Borna – schnell, professionell, mobil optimiert',
      'SEO: Top 3 in Google für Borna – lokale Sichtbarkeit, die Anfragen bringt',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Borna',
      telefonassistenten: 'Telefonische Kundenassistenz in Borna – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Borna',
      webseiten: 'Webseite im Mietmodell für Borna – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Borna – Google Sichtbarkeit und Top-3-Setup',
    },
  },
  groitzsch: {
    name: 'Groitzsch',
    title: 'KI-Agentur Groitzsch – Automatisierung, Chatbots & SEO',
    metaDescription:
      'Pixel Kraftwerk mit Sitz in Groitzsch – KI-Chatbots, Telefonassistenz, Automatisierungen, Websites und SEO für Unternehmen in Groitzsch und dem Landkreis Leipzig.',
    intro:
      'Pixel Kraftwerk hat seinen Hauptsitz in Groitzsch. Von hier aus entwickeln wir KI-gestützte Lösungen für Unternehmen in Groitzsch, im Landkreis Leipzig und der gesamten Region: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Unser Fokus: wiederkehrende Aufgaben reduzieren, Anfragen strukturiert erfassen und Reaktionszeiten verbessern.',
    paragraphs: [
      'Viele Betriebe in Groitzsch sind tief in der Region verwurzelt: Handwerksunternehmen, Dienstleister, Praxen, lokale Händler und produzierende Betriebe. Gleichzeitig steigen die Erwartungen der Kundschaft an Erreichbarkeit und digitale Abläufe. Anrufe wollen angenommen, Anfragen beantwortet und Termine koordiniert werden – auch dann, wenn gerade eigentlich keine Zeit dafür ist.',
      'Im Alltag sieht das oft so aus: Das Telefon klingelt während eines Termins, E-Mails werden abends beantwortet und Website-Anfragen geraten in Vergessenheit, weil sie „nebenbei“ reingekommen sind. Viele Fragen wiederholen sich – zu Öffnungszeiten, Ablauf, Verfügbarkeit oder Kosten. Das ist selten ein Leistungsproblem, sondern ein Systemproblem. Mit KI-Chatbots auf Ihrer Website und in Messengern, telefonischen Assistenten und smarten Buchungssystemen sorgen wir dafür, dass diese Standardanfragen automatisiert beantwortet und strukturiert erfasst werden.',
      'Sie finden uns am Neuer Weg 9a in Groitzsch. Viele Projekte starten mit einem persönlichen Gespräch bei uns im Büro oder bei Ihnen im Unternehmen. In diesem Rahmen analysieren wir gemeinsam Ihre Prozesse, identifizieren wiederkehrende Aufgaben und entscheiden, welche Teile sich sinnvoll mit KI und Automatisierung unterstützen lassen – immer mit Blick auf Ihren konkreten Arbeitsalltag in Groitzsch.',
      'Nach dem Go übernehmen wir die technische Umsetzung, testen die Lösung mit echten Szenarien aus Ihrem Betrieb und begleiten den Rollout. Anschließend kümmern wir uns auf Wunsch um laufende Optimierungen, neue Anwendungsfälle und die Erweiterung auf weitere Standorte oder Leistungsgebiete. So bleibt Ihre Automatisierung nicht bei einem einmaligen Projekt stehen, sondern entwickelt sich mit Ihrem Unternehmen weiter.',
    ],
    faqs: [
      {
        q: 'Wo genau sitzt Pixel Kraftwerk in Groitzsch?',
        a: 'Unser Sitz ist am Neuer Weg 9a, 04539 Groitzsch. Nach Terminvereinbarung können Sie uns dort besuchen – für ein Erstgespräch, eine Demo oder Workshops zur gemeinsamen Planung Ihrer Automatisierung.',
      },
      {
        q: 'Arbeitet ihr nur in Groitzsch oder auch im Landkreis Leipzig und in Leipzig selbst?',
        a: 'Unser Hauptsitz ist in Groitzsch, wir betreuen jedoch Unternehmen im gesamten Landkreis Leipzig, in Leipzig und in den angrenzenden Leistungsgebieten. Viele Projekte kombinieren lokale Zusammenarbeit in Groitzsch mit Einsätzen in umliegenden Städten.',
      },
      {
        q: 'Welche Unternehmen in Groitzsch profitieren besonders von euren KI-Lösungen?',
        a: 'Vor allem Betriebe mit vielen Anrufen oder wiederkehrenden Anfragen – etwa Handwerksbetriebe, Praxen, lokale Dienstleister, Beratungen oder kleinere Industriebetriebe. Überall dort, wo regelmäßig dieselben Fragen gestellt werden oder Termine vereinbart werden müssen, kann Automatisierung spürbar entlasten.',
      },
      {
        q: 'Müssen wir in Groitzsch eine bestimmte IT-Infrastruktur mitbringen?',
        a: 'Nein. Viele Lösungen lassen sich unabhängig von Ihrer aktuellen IT-Landschaft aufbauen. Wo sinnvoll, binden wir bestehende Systeme wie Terminbuchung, E‑Mail oder CRM an. Wichtig ist vor allem die Bereitschaft, Prozesse offen anzuschauen und gemeinsam zu vereinfachen.',
      },
      {
        q: 'Wie läuft ein typisches Projekt mit einem Unternehmen aus Groitzsch ab?',
        a: 'Wir starten mit einem kompakten Analyse- und Konzepttermin, in dem wir Ihre Prozesse verstehen und priorisieren. Anschließend setzen wir eine erste, klar umrissene Lösung auf – etwa einen Chatbot oder Telefonassistenten für ein konkretes Einsatzgebiet. Nach Tests und Feinschliff gehen wir live und begleiten Sie bei der Nutzung im Alltag.',
      },
      {
        q: 'Könnt ihr auch vor Ort in Groitzsch schulen und beraten?',
        a: 'Ja. Gerade für Unternehmen in Groitzsch ist der Vor-Ort-Austausch ein Vorteil. Wir kombinieren persönliche Termine bei Ihnen oder bei uns mit digitalen Meetings, damit Ihr Team sicher im Umgang mit den neuen Systemen wird.',
      },
      {
        q: 'Wie sicher sind die Daten, die über Chatbots und Telefonassistenten laufen?',
        a: 'Datenschutz und sichere Verarbeitung sind bei all unseren Lösungen ein zentraler Bestandteil. Wir achten auf DSGVO-konforme Prozesse, transparente Datenflüsse und rollen nur Lösungen aus, die den Anforderungen Ihres Unternehmens gerecht werden.',
      },
      {
        q: 'Unterstützt ihr auch kleine Betriebe oder nur größere Unternehmen?',
        a: 'Gerade kleinere und mittelständische Betriebe in Groitzsch profitieren stark von Automatisierung, weil sie mit begrenzten Ressourcen arbeiten. Wir bieten passende Einstiegspakete und skalieren die Lösung mit Ihnen, wenn der Bedarf wächst.',
      },
      {
        q: 'Kann ich mir ohne Verpflichtung einen Überblick über Möglichkeiten in Groitzsch verschaffen?',
        a: 'Ja. Im kostenlosen Erstgespräch zeigen wir Ihnen praxisnahe Beispiele und skizzieren, wie Automatisierung in Ihrem Betrieb aussehen könnte. Auf dieser Basis entscheiden Sie in Ruhe, ob und wie Sie mit uns starten möchten.',
      },
      {
        q: 'Welche nächsten Schritte empfehlt ihr für Unternehmen aus Groitzsch?',
        a: 'Sammeln Sie intern ein bis zwei typische Situationen, in denen Anfragen oder Aufgaben immer wieder auftreten, und bringen Sie diese ins Erstgespräch mit. Gemeinsam prüfen wir, wie sich genau diese Punkte mit KI-Chatbots, Telefonassistenten oder Automatisierungen entlasten lassen.',
      },
    ],
    servicesHighlight: [
      'KI-Chatbots & digitale Kundenassistenz für Betriebe in Groitzsch',
      'Automatisierte Telefonassistenz für Anrufannahme und Vorqualifizierung in Groitzsch',
      'Terminbuchung und smarte Kalenderlösungen für lokale Dienstleister in Groitzsch',
      'CRM- und Lead-Management-Automatisierung für mehr Struktur im Vertrieb',
      'Websites & SEO für Unternehmen in Groitzsch und den Landkreis Leipzig',
    ],
    serviceCardAltTexts: {
      'ki-chatbots': 'Digitale Kundenassistenz Website – KI-Chatbot in Groitzsch',
      telefonassistenten: 'Telefonische Kundenassistenz in Groitzsch – Anrufe & Termine strukturieren',
      automatisierungen: 'Automatisierung für Anfragen und Terminplanung in Groitzsch',
      webseiten: 'Webseite im Mietmodell für Groitzsch – mobil & SEO-ready',
      'seo-top-3': 'Local SEO Groitzsch – Google Sichtbarkeit und Top-3-Setup',
    },
  },
};

const SLUG_TO_NAME: Record<string, string> = {
  leipzig: 'Leipzig',
  markkleeberg: 'Markkleeberg',
  zwenkau: 'Zwenkau',
  borna: 'Borna',
  boehlen: 'Böhlen',
  roetha: 'Rötha',
  neukieritzsch: 'Neukieritzsch',
  pegau: 'Pegau',
  lucka: 'Lucka',
  meuselwitz: 'Meuselwitz',
  'regis-breitingen': 'Regis-Breitingen',
  elstertrebnitz: 'Elstertrebnitz',
  groitzsch: 'Groitzsch',
};

function getTemplateRegionContent(cityName: string): RegionContent {
  return {
    name: cityName,
    title: `KI-Agentur ${cityName} – Automatisierung, Chatbots & SEO`,
    metaDescription: `Pixel Kraftwerk – KI-Automatisierung, Chatbots, Terminbuchung, CRM und SEO für Unternehmen in ${cityName}. Aus Groitzsch für die Region Leipzig.`,
    intro: `Für Unternehmen in ${cityName} und Umgebung entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Von unserem Sitz in Groitzsch aus sind wir schnell in der Region und verbinden lokale Nähe mit moderner Technologie.`,
    paragraphs: [
      `In ${cityName} sind viele Unternehmen stark im Tagesgeschäft eingebunden – Anrufe, E‑Mails, Formulareingänge und persönliche Anfragen laufen parallel. Oft bleibt wenig Zeit, um jede Anfrage sofort zu beantworten oder strukturiert nachzuverfolgen. Mit KI-Chatbots auf Ihrer Website und in Messengern, Telefonassistenten für eingehende Anrufe und smarten Buchungssystemen schaffen wir hier Entlastung: wiederkehrende Fragen werden automatisch beantwortet, Termine koordiniert und Anfragen sauber dokumentiert.`,
      `Besonders Unternehmen aus Handwerk, Gesundheitswesen, Dienstleistung, Beratung und Handel in ${cityName} profitieren davon, wenn Standardanliegen automatisch abgefangen werden. Statt ständig „im Postfach zu leben“, kann sich Ihr Team auf wertschöpfende Aufgaben konzentrieren – Gespräche mit Interessentinnen und Interessenten, individuelle Angebote oder Projektarbeit. Gleichzeitig erleben Ihre Kundinnen und Kunden eine moderne, jederzeit erreichbare Kommunikation.`,
      `Unsere Projekte starten immer mit einem klar umrissenen Anwendungsfall aus Ihrem Alltag in ${cityName}: zum Beispiel Terminvereinbarung, erste Qualifizierung von Anfragen oder die Entlastung Ihres Empfangs. Auf dieser Basis entwickeln wir ein System, das zu Ihren bestehenden Abläufen passt, anstatt alles auf den Kopf zu stellen. Wo sinnvoll, binden wir vorhandene Tools wie CRM, Terminsoftware oder Newsletter-Systeme an, damit Daten nicht doppelt gepflegt werden müssen.`,
      `Nach dem Go begleiten wir Sie über den Start hinaus: Wir beobachten gemeinsam, welche Fragen in ${cityName} besonders häufig auftauchen, wie Kundinnen und Kunden mit dem Chatbot oder Telefonassistenten interagieren und wo weitere Automatisierung sinnvoll ist. So wächst Ihre Lösung Schritt für Schritt – vom ersten Use Case hin zu einer ganzheitlichen, aber gut verständlichen Automatisierung Ihrer Kommunikations- und Vertriebsprozesse.`,
    ],
    faqs: [
      {
        q: `Betreut Pixel Kraftwerk auch Unternehmen direkt in ${cityName}?`,
        a: `Ja. Wir betreuen Unternehmen in ${cityName} und der gesamten Region – von Groitzsch über Leipzig bis in die umliegenden Städte. Termine können bei Ihnen vor Ort, bei uns in Groitzsch oder online stattfinden.`,
      },
      {
        q: 'Wo sitzt Pixel Kraftwerk genau?',
        a: 'Unser Sitz ist Neuer Weg 9a, 04539 Groitzsch. Von dort aus bedienen wir Leipzig, Markkleeberg, Zwenkau, Borna und alle weiteren Leistungsgebiete im Landkreis Leipzig und darüber hinaus.',
      },
      {
        q: `Für welche Branchen in ${cityName} eignen sich eure Lösungen?`,
        a: `Typische Branchen sind Praxen, Handwerksbetriebe, lokale Dienstleister, Agenturen, Beratungen, Kanzleien, Fitness- und Gesundheitsangebote, Hotels sowie andere serviceorientierte Unternehmen. Überall dort, wo viele wiederkehrende Anfragen eingehen, lohnt sich Automatisierung.`,
      },
      {
        q: 'Brauchen wir spezielle Vorkenntnisse in KI oder Automatisierung?',
        a: 'Nein. Wir holen Sie genau dort ab, wo Sie aktuell stehen, erklären unsere Vorschläge verständlich und bauen Systeme, die Ihr Team ohne Spezialwissen nutzen kann. Technische Komplexität kapseln wir so, dass sie im Hintergrund bleibt.',
      },
      {
        q: `Wie läuft ein Projekt mit einem Unternehmen aus ${cityName} ab?`,
        a: `Zu Beginn klären wir in einem Erstgespräch Ihre Ziele und typischen Abläufe in ${cityName}. Danach definieren wir einen konkreten Einstieg (z. B. Chatbot oder Telefonassistent für einen klaren Use Case), setzen die Lösung auf, testen sie mit realen Szenarien und begleiten den Start im Alltag.`,
      },
      {
        q: 'Welche Leistungen bietet ihr insgesamt an?',
        a: 'Wir kombinieren KI-Chatbots, Telefonassistenten, Terminbuchung, CRM- und Lead-Management-Automatisierung sowie Website-Entwicklung mit SEO. So lassen sich Kundenkommunikation, Vertrieb und Außenwirkung ganzheitlich weiterentwickeln.',
      },
      {
        q: 'Wie stellt ihr Datenschutz und Sicherheit sicher?',
        a: 'Datenschutz und sichere Verarbeitung sind fester Bestandteil jedes Projekts. Wir achten auf DSGVO-konforme Prozesse, transparente Datenflüsse und wählen nur Lösungen, die zu den Anforderungen Ihres Unternehmens passen.',
      },
      {
        q: `Können wir klein starten und später in ${cityName} ausbauen?`,
        a: 'Ja. Viele unserer Kundinnen und Kunden starten mit einem überschaubaren Projekt und erweitern die Automatisierung schrittweise. So behalten Sie Kontrolle über Aufwand, Budget und Wirkung und können auf Basis echter Erfahrungen entscheiden, wie es weitergeht.',
      },
      {
        q: 'Wie bekomme ich ein Angebot?',
        a: 'Im kostenlosen Erstgespräch besprechen wir Ihre Situation und Ziele. Darauf basierend erstellen wir ein transparentes Angebot – mit klar beschriebenem Leistungsumfang, einmaligen Kosten und eventuellen laufenden Gebühren.',
      },
      {
        q: 'Wie schnell sehen wir Ergebnisse?',
        a: 'Je nach Umfang kann die erste Lösung in wenigen Wochen live gehen. Viele Unternehmen spüren bereits kurz nach dem Start, dass Anfragen strukturierter eingehen, weniger verloren gehen und interne Abläufe entspannter werden.',
      },
    ],
    servicesHighlight: [
      'KI-Chatbots für Website & Messenger in der Region',
      'Automatisierte Telefonassistenten für Anrufannahme und Vorqualifizierung',
      'Intelligente Terminbuchungs- und Planungssysteme',
      'CRM- und Lead-Management-Automatisierung für Vertriebsteams',
      'Websites & SEO mit Fokus auf regionale Sichtbarkeit',
    ],
  };
}

export function getRegionContent(slug: string): RegionContent {
  if (customRegionContent[slug]) return customRegionContent[slug]!;
  const name = SLUG_TO_NAME[slug] ?? slug;
  return getTemplateRegionContent(name);
}

export function getValidRegionSlug(region: string): LeistungsgebietSlug {
  return LEISTUNGSGEBIETE_SLUGS.includes(region as LeistungsgebietSlug)
    ? (region as LeistungsgebietSlug)
    : 'leipzig';
}
