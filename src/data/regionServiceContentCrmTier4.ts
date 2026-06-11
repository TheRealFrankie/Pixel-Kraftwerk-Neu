/**
 * CRM-Systeme Content – Tier 4 Städte
 * Naunhof, Lützen, Colditz, Bad Lausick, Geithain, Rochlitz, Kitzscher
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

export const crmTier4ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {

  'naunhof.crm-systeme': {
    regionSlug: 'naunhof',
    regionName: 'Naunhof',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Naunhof – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im Landkreis Leipzig ein.',
    intro: 'Naunhof liegt östlich von Leipzig in der Muldenaue – ein ruhiger Ort mit aktiven kleinen Betrieben. Ein CRM schafft die Struktur, damit keine Anfrage verloren geht.',
    paragraphs: [
      'Betriebe in Naunhof haben oft persönliche Kundenbeziehungen und arbeiten auf Empfehlungsbasis. Ein CRM dokumentiert genau diese Kontakte und stellt sicher, dass jedes Gespräch nachverfolgt wird.',
      'Wir richten ein schlankes, intuitives System ein – kein Overload, aber volle Kontrolle. Persönliche Einrichtung aus dem Nachbarort Groitzsch.',
    ],
    faqs: [
      { q: 'Lohnt sich ein CRM für einen kleinen Betrieb in Naunhof?', a: 'Ja. Jede dokumentierte Anfrage kann ein Auftrag werden.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für empfehlungsbasierte Betriebe', 'Schlankes Setup', 'Persönliche Einrichtung aus Groitzsch', 'Automatische Follow-ups'],
  },

  'luetzen.crm-systeme': {
    regionSlug: 'luetzen',
    regionName: 'Lützen',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Lützen – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im Burgenlandkreis ein.',
    intro: 'Lützen liegt zwischen Weißenfels und Leipzig – eine Region mit kleinen Betrieben und enger regionaler Vernetzung. Ein CRM sorgt dafür, dass alle Kontakte strukturiert gepflegt werden.',
    paragraphs: [
      'In Lützen und der direkten Umgebung sind Handwerk, Landwirtschaft und lokale Dienstleister tätig. Ohne zentrales System verlieren Betriebe Anfragen. Ein CRM schafft Ordnung mit minimalem Aufwand.',
      'Wir richten praxisnahe Systeme ein, die zu kleinen Teams passen. Pixel Kraftwerk in Groitzsch, rund 25 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Betriebe in Lützen?', a: 'Handwerk, Landwirtschaft, Dienstleistungen.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für kleine Betriebe im Burgenlandkreis', 'Minimaler Aufwand', 'Strukturierte Kontaktpflege', 'Persönliche Betreuung aus Groitzsch'],
  },

  'colditz.crm-systeme': {
    regionSlug: 'colditz',
    regionName: 'Colditz',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Colditz – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im östlichen Landkreis Leipzig ein.',
    intro: 'Colditz ist bekannt für sein Schloss und liegt im östlichen Landkreis Leipzig. Betriebe hier – Tourismus, Handwerk, Dienstleistungen – profitieren von einem CRM, das alle Kontakte zentral hält.',
    paragraphs: [
      'Tourismus und regionale Wirtschaft gehen in Colditz Hand in Hand. Ob Schloss-Besucher oder lokale Stammkunden – ein CRM dokumentiert alle Kontakte und ermöglicht systematisches Nachfassen.',
      'Wir richten Pipelines ein, die zum Colditzer Betriebsalltag passen. Persönliche Betreuung aus Groitzsch.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Tourismus-Betriebe in Colditz?', a: 'Ja, gerade für Wiederkehrermarketing und Stammkundenpflege.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Tourismus und Handwerk', 'Wiederkehrermarketing', 'Strukturierte Kontaktpflege', 'Persönliche Betreuung aus Groitzsch'],
  },

  'bad-lausick.crm-systeme': {
    regionSlug: 'bad-lausick',
    regionName: 'Bad Lausick',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Bad Lausick – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Kurbetriebe und Dienstleister im Landkreis Leipzig ein.',
    intro: 'Bad Lausick ist anerkannter Kurort im Landkreis Leipzig. Gesundheitsbetriebe, Wellnessanbieter und lokale Dienstleister profitieren hier besonders von einem CRM, das Stammkunden systematisch pflegt.',
    paragraphs: [
      'Kurbetriebe in Bad Lausick haben einen konstanten Strom an Gästen, die zu Stammkunden werden können. Ein CRM dokumentiert alle Aufenthalte und ermöglicht automatisches Nachfassen vor der nächsten Saison.',
      'Auch für lokale Handwerks- und Dienstleistungsbetriebe in Bad Lausick bringt ein CRM klare Struktur. Pixel Kraftwerk in Groitzsch, rund 20 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Kurbetriebe?', a: 'Ja, gerade für Wiederkehrermarketing.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Kurort und Gesundheitswirtschaft', 'Wiederkehrermarketing', 'Persönliche Betreuung (20 km)', 'Automatische Follow-ups'],
  },

  'geithain.crm-systeme': {
    regionSlug: 'geithain',
    regionName: 'Geithain',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Geithain – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im Landkreis Leipzig ein.',
    intro: 'Geithain liegt südlich von Leipzig zwischen Borna und Frohburg. Betriebe hier bedienen Kunden aus dem gesamten südlichen Landkreis – ein CRM hält alle Kontakte übersichtlich.',
    paragraphs: [
      'In Geithain sind Handwerk, regionale Dienstleistungen und Gesundheitsversorgung präsent. Ohne System verlieren Betriebe Anfragen. Ein CRM schafft Ordnung und macht Nachfassen verlässlich.',
      'Wir richten schlanke Systeme ein, die sofort Nutzen bringen. Pixel Kraftwerk in Groitzsch, rund 20 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Betriebe in Geithain?', a: 'Handwerk, Gesundheit, Dienstleistungen, lokaler Handel.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für den südlichen Landkreis Leipzig', 'Schneller Nutzen', 'Persönliche Betreuung (20 km)', 'Automatische Follow-ups'],
  },

  'rochlitz.crm-systeme': {
    regionSlug: 'rochlitz',
    regionName: 'Rochlitz',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Rochlitz – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe in Mittelsachsen ein.',
    intro: 'Rochlitz liegt im Herzen von Mittelsachsen an der Mulde. Für Betriebe, die hier regional tätig sind, bringt ein CRM Struktur und Übersicht über alle Kundenbeziehungen.',
    paragraphs: [
      'Rochlitzer Betriebe sind oft Familienbetriebe oder KMU mit persönlichen Kundenbeziehungen. Ein CRM dokumentiert diese Beziehungen sorgfältig und verhindert, dass Anfragen im Alltag untergehen.',
      'Wir richten intuitive Systeme ein, die zu kleinen Teams passen. Pixel Kraftwerk in Groitzsch, rund 45 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Lohnt sich ein CRM für kleine Familienbetriebe?', a: 'Ja. Strukturierte Kontaktpflege zahlt sich aus.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Mittelsachsen', 'Für Familienbetriebe und KMU', 'Strukturierte Kontaktpflege', 'Persönliche Betreuung aus Groitzsch'],
  },

  'kitzscher.crm-systeme': {
    regionSlug: 'kitzscher',
    regionName: 'Kitzscher',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Kitzscher – Pixel Kraftwerk aus dem Nachbarort Groitzsch richtet Kundenverwaltung für Betriebe in der Region ein.',
    intro: 'Kitzscher liegt direkt neben Groitzsch – ein direkter Nachbar. Für Betriebe hier ist ein CRM der einfachste Weg, Anfragen strukturiert zu erfassen und kein Follow-up zu vergessen.',
    paragraphs: [
      'Als Nachbarort kennen wir Kitzscher aus dem täglichen Betrieb. Betriebe hier schätzen persönliche Beratung und kurze Wege – beides bieten wir aus unserem Büro in Groitzsch.',
      'Wir richten schlanke CRM-Systeme ein, die sofort einsatzbereit sind und echten Nutzen bringen. Kein Overload, aber volle Kontrolle über den eigenen Vertrieb.',
    ],
    faqs: [
      { q: 'Persönliche Einrichtung in Kitzscher?', a: 'Ja, wir kommen direkt zu Ihnen – Kitzscher ist unser Nachbarort.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM vom direkten Nachbarn', 'Persönliche Einrichtung vor Ort', 'Schlankes Setup', 'Kein Lead vergessen'],
  },
};
