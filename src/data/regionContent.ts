/**
 * Inhalte für Leistungsgebiete-Seiten (Stadt-Seiten).
 * Shared für generateMetadata (Server) und RegionPage (Client).
 */
import { LEISTUNGSGEBIETE_SLUGS } from './leistungsgebiete';

export type RegionContent = {
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  servicesHighlight: string[];
};

const customRegionContent: Partial<Record<string, RegionContent>> = {
  leipzig: {
    name: 'Leipzig',
    title: 'KI-Agentur Leipzig – Automatisierung, Chatbots & SEO',
    metaDescription:
      'Pixel Kraftwerk – KI-Chatbots, Telefonassistenten, Terminbuchung, CRM und SEO für Unternehmen in Leipzig. Aus Groitzsch für die Metropolregion Leipzig.',
    intro:
      'Für Unternehmen in Leipzig und der Metropolregion entwickeln wir KI-gestützte Lösungen für Kundenkommunikation und Vertrieb: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM-Workflows und Websites mit SEO. Von Groitzsch aus sind wir schnell vor Ort und verbinden regionale Nähe mit moderner Technologie.',
    paragraphs: [
      'Leipzig wächst – mit neuen Unternehmen, starkem Dienstleistungssektor und einem intensiven Wettbewerb um Aufmerksamkeit. Gleichzeitig kosten wiederkehrende Aufgaben wie Anrufe entgegennehmen, Termine koordinieren und Anfragen nachfassen in vielen Betrieben immer noch sehr viel Zeit. Genau hier setzen wir an: Mit KI-Chatbots auf Ihrer Website und in Messengern, automatisierten Telefonassistenten und smarten Buchungssystemen, die rund um die Uhr verfügbar sind und standardisierte Abläufe für Sie übernehmen.',
      'Besonders in Branchen wie Praxen, Handwerk, Beratungsunternehmen, Agenturen, E‑Commerce und Dienstleistung zeigt sich, wie stark Automatisierung entlasten kann. Statt Anrufe zu verpassen oder E‑Mails manuell zu beantworten, werden Anfragen strukturiert erfasst, priorisiert und an die richtigen Stellen weitergeleitet. Das sorgt in Leipzigs dynamischem Markt für kürzere Reaktionszeiten, mehr gewonnene Anfragen und eine professionellere Außenwirkung gegenüber Ihren Kundinnen und Kunden.',
      'Pixel Kraftwerk arbeitet bewusst regional verankert. Viele unserer Kundinnen und Kunden sitzen in Leipzig, dem Umland und im Landkreis Leipzig. Wir sprechen mit Ihnen in klarer, verständlicher Sprache, verzichten auf technische Buzzwords und bauen keine Black Boxes, sondern Lösungen, die Sie nachvollziehen und selbst bedienen können. Workshops finden bei Ihnen in Leipzig, bei uns in Groitzsch oder remote statt – je nachdem, was besser zu Ihrem Alltag passt.',
      'Nach der Einführung lassen wir Sie nicht allein: Wir begleiten Sie bei der laufenden Optimierung Ihrer KI-Systeme, passen Dialoge und Workflows an neue Angebote oder Prozesse an und binden weitere Kanäle wie WhatsApp, Facebook Messenger oder weitere Standorte in Leipzig und Region ein. So wächst Ihre Automatisierung Schritt für Schritt mit Ihrem Unternehmen mit.',
    ],
    faqs: [
      {
        q: 'Betreut Pixel Kraftwerk auch Kunden in Leipzig-Mitte und den Stadtteilen?',
        a: 'Ja. Wir betreuen Unternehmen in der gesamten Stadt Leipzig und der Metropolregion – von der Innenstadt über Plagwitz, Südvorstadt und Gohlis bis in die Randlagen und das Umland.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit aus Groitzsch für Leipziger Unternehmen konkret ab?',
        a: 'Das Erstgespräch kann online oder vor Ort in Leipzig stattfinden. Danach planen wir das Projekt gemeinsam, setzen die Lösung in enger Abstimmung um und begleiten Sie im laufenden Betrieb. Technische Umsetzung und Optimierungen laufen überwiegend remote, bei Bedarf kommen wir für Workshops oder Abstimmungen nach Leipzig.',
      },
      {
        q: 'Für welche Branchen in Leipzig eignen sich eure KI-Lösungen besonders?',
        a: 'Typische Branchen sind Arzt- und Therapiepraxen, Handwerksbetriebe, Dienstleister, Agenturen, Beratungen, Kanzleien, Fitnessstudios, Hotels und andere serviceorientierte Unternehmen. Überall dort, wo viele wiederkehrende Anfragen eingehen, können KI-Chatbots, Telefonassistenten und Automatisierungen stark entlasten.',
      },
      {
        q: 'Muss mein Unternehmen in Leipzig eine bestimmte Größe haben, damit sich Automatisierung lohnt?',
        a: 'Nein. Schon kleine Teams profitieren, wenn täglich Anrufe, E‑Mails oder Website-Anfragen eingehen, die strukturiert erfasst und beantwortet werden sollen. Wir starten oft mit einem klar abgegrenzten Use Case und bauen die Automatisierung dann gemeinsam mit Ihnen aus.',
      },
      {
        q: 'Wie lange dauert es, bis erste Systeme in Leipzig live sind?',
        a: 'Je nach Umfang und Komplexität liegen die ersten einsatzfähigen Lösungen meist zwischen zwei und acht Wochen nach Projektstart. Einfache Chatbots oder Telefonassistenten sind schneller umgesetzt, komplexere CRM- und Prozessautomatisierungen brauchen etwas mehr Abstimmung.',
      },
      {
        q: 'Könnt ihr bestehende Systeme in Leipzig integrieren (z. B. CRM, Terminsoftware)?',
        a: 'Ja. Wo immer möglich, binden wir vorhandene Systeme an – etwa CRM-Lösungen, Terminbuchungs-Tools oder Branchensoftware. Dadurch entstehen keine Insellösungen, sondern Abläufe, die sauber zusammenspielen und Ihre Daten an einem zentralen Ort halten.',
      },
      {
        q: 'Wie hoch sind die Kosten für KI-Chatbots und Telefonassistenten in Leipzig?',
        a: 'Die Kosten hängen vom Umfang der gewünschten Lösung ab – von einfachen Einstiegsprojekten bis zu umfassenden Automatisierungen. Im Erstgespräch klären wir Ihre Ziele und erstellen ein transparentes Angebot mit klaren monatlichen und einmaligen Kosten.',
      },
      {
        q: 'Bietet ihr auch langfristige Betreuung und Optimierung für Leipziger Kunden an?',
        a: 'Ja. Viele unserer Kundinnen und Kunden in Leipzig nutzen laufende Betreuungspakete, in denen wir Dialoge, Automatisierungen und Inhalte regelmäßig überprüfen, anpassen und erweitern. So bleibt Ihre Lösung aktuell und entwickelt sich mit Ihrem Unternehmen weiter.',
      },
      {
        q: 'Kann ich mir Beispiele oder Demos für Leipzig ansehen?',
        a: 'Im Rahmen eines Erstgesprächs zeigen wir Ihnen gerne Demos und Beispiel-Workflows, die zu Ihrer Branche und Situation in Leipzig passen. Konkrete Referenzen besprechen wir individuell, teilweise anonymisiert, um die Vertraulichkeit unserer Kunden zu wahren.',
      },
      {
        q: 'Wie startet man am besten mit Pixel Kraftwerk in Leipzig?',
        a: 'Am einfachsten mit einem kurzen, unverbindlichen Erstgespräch. Wir schauen gemeinsam, welche Prozesse sich in Ihrem Leipziger Unternehmen sinnvoll automatisieren lassen, und definieren ein erstes, klar umrissenes Projekt, mit dem Sie in wenigen Wochen Ergebnisse sehen.',
      },
    ],
    servicesHighlight: [
      'KI-Chatbots für Website, Messenger & Leipzig-spezifische Use Cases',
      'Automatisierte Telefonassistenten für Leipziger Unternehmen',
      'Intelligente Terminbuchungssysteme und Online-Terminvergabe',
      'CRM- und Lead-Management-Automatisierung für Vertriebsteams',
      'Websites & SEO mit Fokus auf regionale Sichtbarkeit in Leipzig',
    ],
  },
  groitzsch: {
    name: 'Groitzsch',
    title: 'KI-Automatisierung & Chatbots in Groitzsch – Ihr Partner vor Ort',
    metaDescription:
      'Pixel Kraftwerk mit Sitz in Groitzsch – KI-Chatbots, Telefonassistenten, Terminbuchung, CRM und SEO für Unternehmen in Groitzsch und dem Landkreis Leipzig.',
    intro:
      'Pixel Kraftwerk hat seinen Hauptsitz in Groitzsch. Von hier aus entwickeln wir KI-Lösungen für Unternehmen in Groitzsch, im Landkreis Leipzig und der gesamten Region – mit kurzen Wegen, persönlicher Betreuung und dem Fokus auf praxisnahe Automatisierung statt Spielerei.',
    paragraphs: [
      'Viele Betriebe in Groitzsch sind stark in der Region verwurzelt: Handwerksunternehmen, Dienstleister, Praxen, lokale Händler und produzierende Betriebe. Gleichzeitig steigen die Erwartungen der Kundschaft an Erreichbarkeit und digitale Abläufe. Anrufe wollen angenommen, Anfragen beantwortet und Termine koordiniert werden – auch außerhalb klassischer Öffnungszeiten. Unsere KI-Chatbots und Telefonassistenten helfen dabei, diese Aufgaben zuverlässig zu übernehmen, ohne dass Ihr Team permanent erreichbar sein muss.',
      'Als Unternehmen direkt vor Ort kennen wir die Wege, die Kunden aus Groitzsch, dem Umland und aus Leipzig zu Ihnen finden. Wir entwickeln keine abstrakten Konzepte, sondern konkrete Lösungen, die zu Ihrem Tagesgeschäft passen: vom einfachen Anfrage-Chatbot über automatisierte Terminvereinbarung bis hin zur Anbindung an Ihr CRM oder bestehende Branchen-Software.',
      'Sie finden uns am Neuer Weg 9a in Groitzsch. Viele Projekte starten mit einem persönlichen Gespräch bei uns im Büro oder bei Ihnen im Unternehmen. In diesem Rahmen analysieren wir gemeinsam Ihre Prozesse, identifizieren wiederkehrende Aufgaben und entscheiden, welche Teile sich sinnvoll mit KI und Automatisierung unterstützen lassen – immer mit Blick auf Ihre Mitarbeiterinnen und Mitarbeiter vor Ort.',
      'Nach dem Go übernehmen wir die technische Umsetzung, testen die Lösung mit echten Szenarien aus Ihrem Alltag und begleiten den Rollout. Anschließend kümmern wir uns auf Wunsch um laufende Optimierungen, neue Anwendungsfälle und die Erweiterung auf weitere Standorte oder Leistungsgebiete. So bleibt Ihre Automatisierung nicht bei einem einmaligen Projekt stehen, sondern entwickelt sich mit Ihrem Betrieb weiter.',
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
      'Automatisierte Telefonassistenten für Anrufannahme und Vorqualifizierung',
      'Terminbuchung und smarte Kalenderlösungen für lokale Dienstleister',
      'CRM- und Lead-Management-Automatisierung für mehr Struktur im Vertrieb',
      'Websites & SEO für Unternehmen in Groitzsch und Landkreis Leipzig',
    ],
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

export function getValidRegionSlug(region: string): string {
  return (LEISTUNGSGEBIETE_SLUGS as readonly string[]).includes(region) ? region : 'leipzig';
}
