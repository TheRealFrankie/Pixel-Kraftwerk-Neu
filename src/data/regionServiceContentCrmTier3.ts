/**
 * CRM-Systeme Content – Tier 3 Städte
 * Schmölln, Bad Dürrenberg, Schkopau, Hohenmölsen, Eisenberg,
 * Frohburg, Brandis, Mittweida, Querfurt, Penig
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

export const crmTier3ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {

  'schmoelln.crm-systeme': {
    regionSlug: 'schmoelln',
    regionName: 'Schmölln',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Schmölln – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im Altenburger Land ein.',
    intro: 'Schmölln liegt zwischen Altenburg und Gera – ein Kleinstadt-Markt mit überschaubarem Wettbewerb und treuen Kundenbeziehungen. Ein CRM sorgt dafür, dass keine dieser Beziehungen dem Zufall überlassen wird.',
    paragraphs: [
      'In Schmölln kennt man sich – persönliche Empfehlungen sind das wichtigste Marketinginstrument. Umso wichtiger ist es, Kontakte sorgfältig zu dokumentieren und nachzuverfolgen. Ein CRM macht genau das, ohne den Betrieb zu verkomplizieren.',
      'Wir richten schlanke, intuitive Systeme ein, die zu kleinen Teams passen. Keine unnötige Komplexität, aber volle Kontrolle über Anfragen, Angebote und Follow-ups.',
      'Pixel Kraftwerk in Groitzsch, rund 35 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Lohnt sich ein CRM für einen kleinen Betrieb in Schmölln?', a: 'Ja. Gerade wenn Empfehlungen wichtig sind, darf kein Kontakt vergessen werden.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für empfehlungsbasierte Kleinstadt-Märkte', 'Schlankes Setup', 'Keine unnötige Komplexität', 'Persönliche Betreuung aus Groitzsch'],
  },

  'bad-duerrenberg.crm-systeme': {
    regionSlug: 'bad-duerrenberg',
    regionName: 'Bad Dürrenberg',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Bad Dürrenberg – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Kurort-Betriebe und Dienstleister im Saalekreis ein.',
    intro: 'Bad Dürrenberg ist Kurort im Saalekreis – mit Gesundheitswirtschaft, Tourismus und lokalem Gewerbe. Für Betriebe, die Gäste und Patienten langfristig binden wollen, ist ein CRM unerlässlich.',
    paragraphs: [
      'Kurbetriebe, Gesundheitsdienstleister und Tourismusanbieter in Bad Dürrenberg haben einen gemeinsamen Bedarf: Wiederkehrer systematisch ansprechen und Stammkunden pflegen. Ein CRM dokumentiert alle Kontakte und ermöglicht gezielte Nachfass-Aktionen.',
      'Wir konfigurieren Pipelines für die Kurort-Spezifika: Aufenthaltshistorie, Behandlungspräferenzen, saisonale Anfragenmuster. Automatische Follow-ups nach dem Aufenthalt stärken die Kundenbindung.',
      'Pixel Kraftwerk in Groitzsch, rund 25 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Kurbetriebe?', a: 'Ja, gerade für Wiederkehrermarketing und systematische Stammkundenpflege.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Kurort und Gesundheitswirtschaft', 'Wiederkehrermarketing', 'Stammkundenpflege automatisiert', 'Persönliche Betreuung aus Groitzsch'],
  },

  'schkopau.crm-systeme': {
    regionSlug: 'schkopau',
    regionName: 'Schkopau',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Schkopau – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe am Buna-Chemiestandort ein.',
    intro: 'Schkopau ist geprägt durch den Chemiestandort Buna – mit vielen Industriebetrieben und technischen Dienstleistern. Für B2B-Unternehmen in diesem Umfeld ist ein strukturiertes CRM Voraussetzung für professionellen Vertrieb.',
    paragraphs: [
      'Am Buna-Standort in Schkopau sind zahlreiche Zulieferer und Dienstleister tätig. Viele haben komplexe Kundenbeziehungen mit langen Vertragslaufzeiten und mehreren Ansprechpartnern. Ein CRM hält diese Strukturen übersichtlich und stellt sicher, dass Verlängerungen und Follow-ups nicht vergessen werden.',
      'Wir konfigurieren B2B-orientierte CRM-Systeme mit Unternehmenshierarchien, Kontakthistorien und automatischen Erinnerungen.',
      'Pixel Kraftwerk in Groitzsch, rund 35 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für B2B am Chemiestandort?', a: 'Ja, besonders für mehrere Ansprechpartner und lange Vertragslaufzeiten.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für B2B am Buna-Standort', 'Unternehmenshierarchien', 'Verlängerungserinnerungen', 'Persönliche Betreuung aus Groitzsch'],
  },

  'hohenmoelsen.crm-systeme': {
    regionSlug: 'hohenmoelsen',
    regionName: 'Hohenmölsen',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Hohenmölsen – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im Burgenlandkreis ein.',
    intro: 'Hohenmölsen liegt sehr nah an Groitzsch – an der Grenze zwischen Sachsen und Sachsen-Anhalt. Betriebe hier haben oft grenzüberschreitende Kundenbeziehungen, die ein CRM übersichtlich hält.',
    paragraphs: [
      'In Hohenmölsen und der direkten Umgebung sind kleinere Handwerks- und Dienstleistungsbetriebe tätig. Ohne System gehen Anfragen unter. Ein schlankes, intuitives CRM bringt Ordnung ohne Mehraufwand.',
      'Wir richten CRM-Systeme ein, die zu kleinen Teams passen. Persönliche Einrichtung aus dem Nachbarort Groitzsch.',
      'Pixel Kraftwerk in Groitzsch, nur rund 20 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Lohnt sich ein CRM für kleine Betriebe?', a: 'Ja. Jeder verpasste Lead kostet mehr als das CRM.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für grenznahe Region', 'Schlankes Setup', 'Persönliche Einrichtung (20 km)', 'Automatische Follow-ups'],
  },

  'eisenberg.crm-systeme': {
    regionSlug: 'eisenberg',
    regionName: 'Eisenberg',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Eisenberg – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im Saale-Holzland-Kreis ein.',
    intro: 'Eisenberg ist Kreisstadt des Saale-Holzland-Kreises – bekannt für seine Keramikindustrie und mittelständische Betriebe. Ein CRM bringt Struktur in den regionalen Vertrieb.',
    paragraphs: [
      'In Eisenberg und dem Saale-Holzland-Kreis sind Handwerk, Keramikindustrie und Dienstleistungen vertreten. Betriebe hier bedienen Kunden aus dem Kreis und den angrenzenden Regionen. Ein CRM hält alle Kontakte zentral und macht Nachfassen verlässlich.',
      'Wir konfigurieren praxisnahe Pipelines für Eisenberger Betriebe. Integration mit Website und E-Mail ist Standard.',
      'Pixel Kraftwerk in Groitzsch, rund 50 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Eisenberg?', a: 'Handwerk, Industrie, Dienstleistungen, Gesundheit.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für den Saale-Holzland-Kreis', 'Strukturierter Vertrieb', 'Integration mit Website', 'Persönliche Betreuung aus Groitzsch'],
  },

  'frohburg.crm-systeme': {
    regionSlug: 'frohburg',
    regionName: 'Frohburg',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Frohburg – Pixel Kraftwerk aus dem Nachbarort Groitzsch richtet Kundenverwaltung für Betriebe im Landkreis Leipzig ein.',
    intro: 'Frohburg liegt direkt neben Groitzsch – ein direkter Nachbar mit eigenem Marktcharakter. Für Betriebe hier ist ein CRM der Schritt zu professionellem Vertrieb mit minimalem Aufwand.',
    paragraphs: [
      'Als direkter Nachbar von Groitzsch kennen wir Frohburg aus dem täglichen Betrieb. Viele Betriebe hier sind in der gesamten Region aktiv – ein CRM hilft, alle Kontakte übersichtlich zu verwalten und kein Follow-up zu vergessen.',
      'Wir richten CRM-Systeme persönlich ein – im Büro in Groitzsch oder direkt bei Ihnen in Frohburg.',
    ],
    faqs: [
      { q: 'Persönliche Einrichtung möglich?', a: 'Ja, direkt bei Ihnen oder bei uns in Groitzsch.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM vom direkten Nachbarn', 'Persönliche Einrichtung', 'Schlankes Setup für kleine Teams', 'Schneller Nutzen'],
  },

  'brandis.crm-systeme': {
    regionSlug: 'brandis',
    regionName: 'Brandis',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Brandis – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im östlichen Landkreis Leipzig ein.',
    intro: 'Brandis liegt östlich von Leipzig im Landkreis – eine wachsende Gemeinde mit Betrieben, die sowohl lokale als auch Leipziger Kunden bedienen. Ein CRM schafft die nötige Übersicht.',
    paragraphs: [
      'Brandiser Betriebe profitieren von der Nähe zu Leipzig, haben aber auch eine starke lokale Kundenbasis. Ein CRM bildet beide Segmente ab und ermöglicht gezieltes Nachfassen.',
      'Wir richten Pipelines und automatische Erinnerungen ein. Integration mit Website-Formular und Kalender inklusive.',
      'Pixel Kraftwerk in Groitzsch, rund 35 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Brandis?', a: 'Handwerk, Dienstleistungen, Handel, Gewerbe.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für den Leipziger Osten', 'Lokal + Leipzig segmentiert', 'Integration mit Website', 'Persönliche Betreuung aus Groitzsch'],
  },

  'mittweida.crm-systeme': {
    regionSlug: 'mittweida',
    regionName: 'Mittweida',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Mittweida – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Hochschulstadt-Betriebe in Mittelsachsen ein.',
    intro: 'Mittweida ist Hochschulstadt mit einer tech-affinen Unternehmerkultur. Für Startups und innovative Betriebe ist ein CRM der Grundstein für skalierende Vertriebsprozesse.',
    paragraphs: [
      'Die Hochschule Mittweida bringt eine tech-affine Atmosphäre: Betriebe hier sind offen für digitale Lösungen und haben hohe Ansprüche an Effizienz. Ein CRM passt perfekt in dieses Umfeld.',
      'Wir konfigurieren CRM-Systeme, die mit dem Wachstum skalieren – ob junges Startup oder etablierter Dienstleister.',
      'Pixel Kraftwerk in Groitzsch, rund 65 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Hochschul-Startups?', a: 'Ja, besonders frühzeitig eingeführt skaliert es mit dem Wachstum.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für tech-affine Betriebe', 'Skalierbar mit dem Wachstum', 'Integration mit modernen Tools', 'Persönliche Betreuung aus Groitzsch'],
  },

  'querfurt.crm-systeme': {
    regionSlug: 'querfurt',
    regionName: 'Querfurt',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Querfurt – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe im Saalekreis ein.',
    intro: 'Querfurt ist ein regionales Zentrum im Saalekreis mit einer breiten Betriebslandschaft. Für Betriebe, die regionale Kunden langfristig binden wollen, ist ein CRM unverzichtbar.',
    paragraphs: [
      'In Querfurt und dem Saalekreis sind Landwirtschaft, Handwerk und regionale Dienstleistungen stark vertreten. Ein CRM hilft, alle Kundenbeziehungen strukturiert zu dokumentieren und regelmäßig nachzufassen.',
      'Wir richten schlanke, praxisnahe Systeme ein. Integration mit Website und E-Mail ist Standard.',
      'Pixel Kraftwerk in Groitzsch, rund 50 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Querfurt?', a: 'Handwerk, Dienstleistungen, Landwirtschaft, regionale Betriebe.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für den Saalekreis', 'Schlankes Setup', 'Integration mit Website', 'Persönliche Betreuung aus Groitzsch'],
  },

  'penig.crm-systeme': {
    regionSlug: 'penig',
    regionName: 'Penig',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Penig – Pixel Kraftwerk aus Groitzsch richtet Kundenverwaltung für Betriebe in Mittelsachsen ein.',
    intro: 'Penig liegt zwischen Leipzig und Chemnitz in Mittelsachsen – eine Region mit aktiven kleinen und mittelständischen Betrieben. Ein CRM bringt Struktur in den täglichen Anfragenfluss.',
    paragraphs: [
      'Betriebe in Penig bedienen Kunden aus Mittelsachsen und angrenzenden Regionen. Ohne zentrales System verlieren Anfragen zwischen Kanälen. Ein CRM hält alles zusammen.',
      'Wir konfigurieren Pipelines und automatische Follow-ups für Peniger Betriebe.',
      'Pixel Kraftwerk in Groitzsch, rund 50 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Penig?', a: 'Handwerk, Dienstleistungen, Handel, Industrie.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Mittelsachsen', 'Strukturierter Vertrieb', 'Automatische Follow-ups', 'Persönliche Betreuung aus Groitzsch'],
  },
};
