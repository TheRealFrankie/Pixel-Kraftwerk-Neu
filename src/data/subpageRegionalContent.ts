/**
 * Regionaler Zusatz-Content fuer Service-Subpages.
 *
 * Drei Ebenen:
 *   1. Handgeschriebener Custom-Content fuer Leipzig (Core)
 *   2. Template-Content fuer Tier 1-2 Staedte (mit {regionName} Platzhaltern)
 *   3. Minimaler Fallback fuer alle restlichen Staedte
 *
 * Die regionale Route ruft getRegionalSubpageContent() auf.
 */

import type { RegionalSubpageContent } from './serviceSubpages';
import { LEISTUNGSGEBIETE_CITIES, getNeighborCities } from './leistungsgebiete';
import type { LeistungsgebietSlug } from './leistungsgebiete';

type ContentKey = `${string}.${string}.${string}`;

const TIER_BOUNDARIES = { core: 13, tier1: 23, tier2: 33 };

function getCityName(regionSlug: string): string {
  return LEISTUNGSGEBIETE_CITIES.find((c) => c.slug === regionSlug)?.name ?? regionSlug;
}

function getCityIndex(regionSlug: string): number {
  return LEISTUNGSGEBIETE_CITIES.findIndex((c) => c.slug === regionSlug);
}

// ---------------------------------------------------------------------------
// Custom content for Leipzig (Core city)
// ---------------------------------------------------------------------------

const leipzigContent: Record<string, RegionalSubpageContent> = {
  'automatisierungen.leadgenerierung': {
    localHook: 'Für wachsende Unternehmen in Leipzig und der Metropolregion',
    localSection: [
      'Leipzig ist eine der am schnellsten wachsenden Städte Deutschlands – und mit dem Wachstum steigt auch die Zahl eingehender Anfragen. Für Unternehmen in der Innenstadt, im Leipziger Westen oder in Plagwitz bedeutet das: Wer Leads nicht sofort erfasst und qualifiziert, verliert sie an die Konkurrenz.',
      'Unsere Automatisierungslösungen für Leipziger Unternehmen berücksichtigen die besondere Marktdynamik der Region – von der lebendigen Startup-Szene in der Spinnerei bis zu den etablierten Handwerksbetrieben in Connewitz und Schleußig.',
    ],
    localFaqs: [
      { q: 'Bieten Sie persönliche Beratung zur Leadgenerierung in Leipzig an?', a: 'Ja. Unser Büro in Groitzsch liegt nur 30 Minuten südlich von Leipzig. Wir kommen gerne zu Ihnen oder treffen uns in der Stadt – persönliche Beratung gehört für uns dazu.' },
      { q: 'Kennen Sie die typischen Branchen in Leipzig, die von automatisierter Leadgenerierung profitieren?', a: 'Absolut. Wir arbeiten mit Leipziger Handwerksbetrieben, IT-Dienstleistern, Agenturen, Gastronomen und Gesundheitsdienstleistern. Die Anforderungen kennen wir aus erster Hand.' },
    ],
  },
  'automatisierungen.terminbuchung': {
    localHook: 'Terminbuchung automatisieren für Unternehmen in Leipzig',
    localSection: [
      'In einer Stadt wie Leipzig, in der Praxen, Salons und Dienstleister oft ausgelastet sind, ist eine reibungslose Terminplanung Gold wert. Ob in der Südvorstadt, in Lindenau oder im Zentrum – automatisierte Terminbuchung sorgt dafür, dass Kunden auch außerhalb der Öffnungszeiten Termine buchen können.',
    ],
    localFaqs: [
      { q: 'Können Sie die Terminbuchung an bestehende Leipziger Praxissoftware anbinden?', a: 'Ja. Wir haben Erfahrung mit gängigen Praxis- und Terminverwaltungssystemen und finden eine passende Anbindung für Ihr Setup.' },
    ],
  },
  'automatisierungen.angebotsprozesse': {
    localHook: 'Angebote schneller raus – für Unternehmen in Leipzig und Umgebung',
    localSection: [
      'In der wettbewerbsintensiven Leipziger Wirtschaft zählt Geschwindigkeit: Wer sein Angebot als Erster schickt, bekommt oft den Zuschlag. Automatisierte Angebotsprozesse verschaffen Leipziger Handwerksbetrieben und Dienstleistern genau diesen Vorsprung.',
    ],
  },
  'automatisierungen.email-automatisierung': {
    localHook: 'E-Mail-Workflows für Leipziger Unternehmen',
    localSection: [
      'Von der Bestätigungsmail nach einer Online-Buchung bis zur Erinnerung an den nächsten Wartungstermin – Leipziger Unternehmen profitieren von automatisierten E-Mail-Workflows, die Kunden binden und das Team entlasten.',
    ],
  },
  'ki-chatbots.website-chatbot': {
    localHook: 'Website-Chatbots für Unternehmen in Leipzig',
    localSection: [
      'Leipzig wächst, und mit der Stadt wachsen die Erwartungen der Kunden: Schnelle Antworten, rund um die Uhr. Ein Website-Chatbot sorgt dafür, dass Besucher Ihrer Leipziger Unternehmensseite sofort Hilfe bekommen – ob Sonntagabend oder während der Leipziger Buchmesse.',
      'Wir passen den Chatbot an die Sprache und den Ton Ihres Unternehmens an. Ob formell für eine Kanzlei im Zentrum oder locker für ein Café in Connewitz – die KI kommuniziert so, wie Ihre Kunden es erwarten.',
    ],
    localFaqs: [
      { q: 'Kann der Chatbot auch auf Leipziger Besonderheiten eingehen?', a: 'Ja. Wir trainieren den Bot mit Ihren Inhalten, dazu gehören auch standortspezifische Informationen wie Anfahrt, Parkmöglichkeiten oder regionale Angebote.' },
    ],
  },
  'ki-chatbots.whatsapp-chatbot': {
    localHook: 'WhatsApp-Automatisierung für Leipziger Unternehmen',
    localSection: [
      'WhatsApp ist in Leipzig einer der beliebtesten Kanäle für Kundenanfragen. Ob Handwerker, Gastronomie oder Dienstleister – viele Leipziger Kunden schreiben lieber eine WhatsApp-Nachricht als eine E-Mail. Ein automatisierter Chatbot fängt diese Anfragen auf und reagiert sofort.',
    ],
  },
  'ki-chatbots.instagram-chatbot': {
    localHook: 'Instagram-Automatisierung für Leipziger Unternehmen',
    localSection: [
      'Leipzig hat eine lebendige Social-Media-Szene. Unternehmen in der Südvorstadt, in Plagwitz oder am Karl-Liebknecht-Straßen-Korridor nutzen Instagram intensiv für Kundengewinnung. Ein Instagram-Chatbot sorgt dafür, dass keine DM unbeantwortet bleibt.',
    ],
  },
  'ki-chatbots.faq-automatisierung': {
    localHook: 'Automatisierte FAQ für Unternehmen in Leipzig',
    localSection: [
      'Leipziger Unternehmen kennen das: Dieselben Fragen – zu Öffnungszeiten, Preisen, Anfahrt oder Verfügbarkeit – kommen immer wieder. Eine KI-gestützte FAQ-Automatisierung beantwortet diese Fragen sofort und gibt Ihrem Team Zeit für die wirklich wichtigen Anliegen.',
    ],
  },
  'crm-systeme.crm-fuer-handwerker': {
    localHook: 'CRM-Systeme für Handwerksbetriebe in Leipzig und Region',
    localSection: [
      'Die Handwerksbranche in Leipzig boomt – und mit ihr die Zahl der Aufträge, die koordiniert werden müssen. Ein CRM hilft Leipziger Handwerksbetrieben dabei, den Überblick zu behalten: von der ersten Anfrage über das Angebot bis zur Rechnungsstellung.',
      'Ob Sanitärbetrieb in Grünau, Elektrofirma in Stötteritz oder Tischlerei in Leutzsch – wir richten das CRM so ein, dass es zu Ihren Abläufen passt und auch auf der Baustelle funktioniert.',
    ],
  },
  'crm-systeme.crm-fuer-vermietung': {
    localHook: 'Mietverwaltung digital – für Vermieter in Leipzig',
    localSection: [
      'Der Leipziger Immobilienmarkt ist dynamisch: steigende Nachfrage, häufige Mieterwechsel in beliebten Vierteln wie Connewitz, Lindenau oder der Südvorstadt. Ein CRM-System speziell für Vermietung hilft Ihnen, Mietverhältnisse, Wartungsanfragen und Kommunikation zentral zu verwalten.',
      'Als Agentur aus der Region kennen wir die Herausforderungen des Leipziger Mietmarkts und berücksichtigen diese bei der Einrichtung Ihres Systems.',
    ],
    localFaqs: [
      { q: 'Unterstützen Sie Vermieter mit mehreren Objekten in verschiedenen Leipziger Stadtteilen?', a: 'Ja. Das CRM bildet Ihr gesamtes Portfolio ab – egal ob Sie Wohnungen in Plagwitz, Büros in der City oder Gewerbeeinheiten in Lindenau verwalten.' },
    ],
  },
  'crm-systeme.crm-fuer-dienstleister': {
    localHook: 'CRM für Dienstleister in Leipzig',
    localSection: [
      'Leipzig ist ein Hotspot für Dienstleister: Agenturen, Beratungen, IT-Firmen und Kreative sind in der Stadt stark vertreten. Ein CRM hilft, die Kundenbeziehungen professionell zu verwalten – von der ersten Anfrage bis zur langfristigen Betreuung.',
    ],
  },
  'seo-top-3.local-seo': {
    localHook: 'Local SEO für Unternehmen in Leipzig und Umgebung',
    localSection: [
      'Leipzig ist mit über 600.000 Einwohnern einer der größten lokalen Märkte in Ostdeutschland. Wer hier bei Google sichtbar sein will, braucht eine durchdachte Local-SEO-Strategie: vom optimierten Google Business Profil über konsistente NAP-Daten bis hin zu lokalen Backlinks.',
      'Wir optimieren Ihre lokale Sichtbarkeit speziell für den Leipziger Markt – inklusive Stadtteil-spezifischer Keywords und Verzeichniseinträge.',
    ],
  },
  'seo-top-3.google-maps-ranking': {
    localHook: 'Google Maps Ranking verbessern – in Leipzig sichtbar werden',
    localSection: [
      'In Leipzig suchen täglich tausende Menschen über Google Maps nach lokalen Anbietern. Wer im 3er-Pack erscheint, bekommt die meisten Klicks und Anrufe. Wir optimieren Ihr Google Maps Ranking gezielt für den Leipziger Markt.',
    ],
  },
  'seo-top-3.seo-fuer-handwerker': {
    localHook: 'SEO für Handwerksbetriebe in Leipzig und Region',
    localSection: [
      'Handwerksbetriebe in Leipzig stehen vor besonderer Konkurrenz: Wer bei „Elektriker Leipzig" oder „Sanitär Notdienst Leipzig" nicht auf Seite 1 steht, wird nicht gefunden. Wir sorgen dafür, dass Ihr Handwerksbetrieb genau dort erscheint, wo Leipziger Kunden suchen.',
    ],
  },
  'seo-top-3.seo-fuer-dienstleister': {
    localHook: 'SEO für Dienstleister in Leipzig',
    localSection: [
      'Der Leipziger Markt für Dienstleistungen wächst rasant. Ob Beratung, Coaching, IT-Service oder Kreativbranche – wer online nicht sichtbar ist, verliert potenzielle Kunden an die Konkurrenz. Wir machen Ihr Dienstleistungsunternehmen in Leipzig und Umgebung sichtbar.',
    ],
  },
};

// ---------------------------------------------------------------------------
// Template content for Tier 1-2 cities
// ---------------------------------------------------------------------------

function buildTemplateContent(
  regionName: string,
  topicLabel: string,
  parentLabel: string,
): RegionalSubpageContent {
  return {
    localHook: `Für Unternehmen in ${regionName} und Umgebung`,
    localSection: [
      `${topicLabel} ist auch für Unternehmen in ${regionName} ein relevantes Thema. Als Agentur mit Sitz in Groitzsch betreuen wir Kunden in der gesamten Region – persönlich und mit kurzen Wegen.`,
      `Die Anforderungen in ${regionName} kennen wir aus der Zusammenarbeit mit lokalen Betrieben. Ob ${parentLabel} oder ergänzende Leistungen – wir passen die Lösung an Ihre Situation vor Ort an.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Minimal fallback for Tier 3-4 cities – with regional context paragraph
// ---------------------------------------------------------------------------

function buildMinimalContent(
  regionName: string,
  topicLabel: string,
  regionSlug: string,
): RegionalSubpageContent {
  const cityData = LEISTUNGSGEBIETE_CITIES.find((c) => c.slug === regionSlug);
  const regionLabel = cityData?.subtitle && cityData.subtitle !== 'Hauptsitz' ? cityData.subtitle : 'der Region';
  const neighbors = getNeighborCities(regionSlug as LeistungsgebietSlug, 2).map((c) => c.name);
  const n1 = neighbors[0] ?? 'Leipzig';
  const n2 = neighbors[1] ?? 'Groitzsch';

  return {
    localHook: `Auch in ${regionName} (${regionLabel}) verfügbar`,
    localSection: [
      `Wir unterstützen Unternehmen in ${regionName} bei ${topicLabel}. Von unserem Standort in Groitzsch aus sind wir schnell bei Ihnen – für persönliche Beratung und praxisnahe Umsetzung.`,
      `Als Betrieb in ${regionLabel} sind Sie häufig mit Kunden und Partnern aus ${n1} und ${n2} vernetzt. Unsere Lösungen berücksichtigen diese regionale Vernetzung: Prozesse werden so aufgesetzt, dass eingehende Anfragen aus der gesamten ${regionLabel} zuverlässig erfasst, beantwortet und weitergeleitet werden. So profitieren Unternehmen in ${regionName} von denselben strukturierten Abläufen wie Betriebe in größeren Städten – ohne Abstriche bei Qualität oder Reaktionsgeschwindigkeit.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Subpage label lookup
// ---------------------------------------------------------------------------

import { SERVICE_SUBPAGES, type ServiceWithSubpages } from './serviceSubpages';
import { getServiceBySlug } from './services';

function getTopicLabel(serviceSlug: string, topicSlug: string): string {
  const subpages = SERVICE_SUBPAGES[serviceSlug as ServiceWithSubpages];
  if (!subpages) return topicSlug;
  return subpages.find((s) => s.slug === topicSlug)?.label ?? topicSlug;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getRegionalSubpageContent(
  regionSlug: string,
  serviceSlug: string,
  topicSlug: string,
): RegionalSubpageContent | null {
  const key = `${serviceSlug}.${topicSlug}`;

  if (regionSlug === 'leipzig' && leipzigContent[key]) {
    return leipzigContent[key];
  }

  const cityIndex = getCityIndex(regionSlug);
  if (cityIndex < 0) return null;

  const regionName = getCityName(regionSlug);
  const topicLabel = getTopicLabel(serviceSlug, topicSlug);
  const parentLabel = getServiceBySlug(serviceSlug)?.label ?? serviceSlug;

  if (cityIndex < TIER_BOUNDARIES.tier2) {
    return buildTemplateContent(regionName, topicLabel, parentLabel);
  }

  return buildMinimalContent(regionName, topicLabel, regionSlug);
}
