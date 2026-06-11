/**
 * CRM-Systeme Content – Tier 2 Städte
 * Naumburg, Delitzsch, Döbeln, Schkeuditz, Wurzen,
 * Eilenburg, Taucha, Markranstädt, Leuna, Oschatz
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

export const crmTier2ServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {

  'naumburg.crm-systeme': {
    regionSlug: 'naumburg',
    regionName: 'Naumburg',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Naumburg – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Tourismus- und Dienstleistungsbetriebe im Burgenlandkreis ein.',
    intro: 'Naumburg ist UNESCO-Weltkulturerbe und Weinregion – mit einem starken Tourismussektor und regionalem Mittelstand. Für Betriebe, die Gäste und Stammkunden betreuen, ist ein CRM der Schlüssel zu strukturiertem Beziehungsmanagement.',
    paragraphs: [
      'In Naumburg sind Gastronomie, Hotellerie, Weingüter und lokale Dienstleister stark vertreten. Gerade wenn Anfragen saisonal schwanken oder Stammkunden regelmäßig kontaktiert werden sollen, ist ein CRM unverzichtbar. Automatische Follow-ups halten Kontakte warm, auch wenn das Tagesgeschäft viel Aufmerksamkeit beansprucht.',
      'Wir konfigurieren CRM-Systeme für Naumburger Betriebe, die den touristischen und regionalen Markt abbilden: Segmentierung nach Gästetyp, automatische Buchungsanfragen-Erfassung und strukturierte Kundenpflege.',
      'Pixel Kraftwerk in Groitzsch, rund 45 Kilometer entfernt. Persönliche Beratung und kurze Wege.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Tourismusbetriebe in Naumburg?', a: 'Ja, gerade für saisonale Betriebe hilft systematisches Nachfassen und Stammkundenpflege.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Tourismus und Gastgewerbe', 'Saisonales Nachfassen', 'Stammkundenpflege automatisiert', 'Persönliche Betreuung aus Groitzsch'],
  },

  'delitzsch.crm-systeme': {
    regionSlug: 'delitzsch',
    regionName: 'Delitzsch',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Delitzsch – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe in Nordsachsen ein.',
    intro: 'Delitzsch liegt im nördlichen Speckgürtel von Leipzig – nah an der Großstadt, aber mit eigenem Marktcharakter. Für Betriebe, die sowohl lokale als auch Leipziger Kunden betreuen, ist ein CRM die nötige Struktur.',
    paragraphs: [
      'Die Nähe zu Leipzig sorgt dafür, dass Delitzscher Betriebe oft in zwei Märkten gleichzeitig aktiv sind: lokal und in der Großstadt. Ein CRM hilft, beide Kundensegmente übersichtlich zu verwalten und gezielt nachzufassen.',
      'Wir konfigurieren CRM-Systeme mit klaren Segmentierungen und automatischen Follow-ups. Integration mit Website-Formularen und E-Mail ist Standard.',
      'Pixel Kraftwerk in Groitzsch, rund 45 Kilometer von Delitzsch entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Delitzsch?', a: 'Handwerk, Dienstleistungen, Handel, Praxen.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Nordsachsen', 'Segmentierung lokale vs. Leipziger Kunden', 'Integration mit Website', 'Persönliche Betreuung aus Groitzsch'],
  },

  'doebeln.crm-systeme': {
    regionSlug: 'doebeln',
    regionName: 'Döbeln',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Döbeln – Pixel Kraftwerk aus Groitzsch strukturiert Lead-Management für Betriebe in Mittelsachsen.',
    intro: 'Döbeln liegt zwischen Leipzig und Chemnitz – ein Wirtschaftsstandort in Mittelsachsen mit einer breiten Branchenstruktur. Für wachsende Betriebe ist ein CRM der nächste konsequente Schritt.',
    paragraphs: [
      'In Döbeln sind Handwerk, Industrie und Dienstleistungen vertreten. Wer Kunden aus dem gesamten Mittelsachsen-Raum betreut, verliert ohne System schnell den Überblick. Ein CRM bringt Struktur: alle Anfragen, Angebote und Follow-ups zentral.',
      'Wir konfigurieren praxisnahe Pipelines, die zum Döbelner Betriebsalltag passen. Integration mit vorhandenen Tools gehört dazu.',
      'Pixel Kraftwerk in Groitzsch, rund 55 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Döbeln?', a: 'Handwerk, Industrie, Dienstleistungen, Handel.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Mittelsachsen', 'Kanalübergreifende Erfassung', 'Einfache Bedienung', 'Persönliche Betreuung aus Groitzsch'],
  },

  'schkeuditz.crm-systeme': {
    regionSlug: 'schkeuditz',
    regionName: 'Schkeuditz',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Schkeuditz – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Logistik- und Gewerbebetriebe am Flughafen Leipzig/Halle ein.',
    intro: 'Schkeuditz beherbergt den Flughafen Leipzig/Halle und den DHL-Hub – eine der höchsten Unternehmensdichten Mitteldeutschlands. Für B2B-Betriebe in diesem Umfeld ist ein CRM unerlässlich.',
    paragraphs: [
      'Rund um den Flughafen Leipzig/Halle hat sich ein dichtes Gewerbenetz entwickelt: Logistik, Spedition, technische Dienstleister, Catering, Sicherheitsdienste. Viele dieser Betriebe haben komplexe Kundenbeziehungen mit langen Vertragslaufzeiten. Ein CRM bildet diese Strukturen ab und macht Verlängerungen und Follow-ups planbar.',
      'Für Schkeuditzer Gewerbebetriebe konfigurieren wir CRM-Systeme mit B2B-Fokus: Unternehmenshierarchien abbilden, mehrere Ansprechpartner verwalten, langfristige Kundenbeziehungen dokumentieren.',
      'Die Nähe zu Leipzig und Halle macht eine breite Zielgruppenstruktur möglich. Ein CRM segmentiert sauber nach Region, Branche und Kontaktstatus.',
      'Pixel Kraftwerk in Groitzsch, rund 30 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Logistikbetriebe in Schkeuditz?', a: 'Ja, gerade für B2B mit langen Vertragslaufzeiten und mehreren Ansprechpartnern.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für B2B am Flughafen Leipzig/Halle', 'Unternehmenshierarchien und mehrere Kontakte', 'Langfristige Kundenbeziehungen', 'Persönliche Betreuung aus Groitzsch'],
  },

  'wurzen.crm-systeme': {
    regionSlug: 'wurzen',
    regionName: 'Wurzen',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Wurzen – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im Landkreis Leipzig ein.',
    intro: 'Wurzen liegt im östlichen Landkreis Leipzig an der Mulde – mit einer aktiven Wirtschaft aus Handwerk, Industrie und Dienstleistungen. Ein CRM bringt Struktur in den täglichen Anfragenfluss.',
    paragraphs: [
      'Betriebe in Wurzen haben oft Kunden aus dem Landkreis Leipzig und dem angrenzenden Nordsachsen. Ohne zentrales System verlieren Anfragen zwischen Kanälen. Ein CRM sammelt alles und macht Nachfassen einfach.',
      'Wir konfigurieren Pipelines und automatische Follow-ups für Wurzener Betriebe – passend zu Ihrer Branche und Teamgröße.',
      'Pixel Kraftwerk in Groitzsch, rund 45 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Wurzen?', a: 'Handwerk, Dienstleistungen, Industrie, Handel.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für den östlichen Landkreis Leipzig', 'Automatische Follow-ups', 'Integration mit Website', 'Persönliche Betreuung aus Groitzsch'],
  },

  'eilenburg.crm-systeme': {
    regionSlug: 'eilenburg',
    regionName: 'Eilenburg',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Eilenburg – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe in Nordsachsen ein.',
    intro: 'Eilenburg an der Mulde ist eine der größten Kreisstädte in Nordsachsen. Für Betriebe mit regionalem Einzugsgebiet ist ein CRM der Schlüssel zu strukturiertem Vertrieb.',
    paragraphs: [
      'Eilenburger Betriebe bedienen Kunden aus dem Landkreis Leipzig, aus Nordsachsen und angrenzenden Regionen. Ein CRM bündelt alle Kontakte und ermöglicht gezieltes Nachfassen – unabhängig davon, über welchen Kanal die Anfrage kam.',
      'Wir richten Pipelines ein, die zum Eilenburger Betriebsalltag passen. Integration mit Website-Formular und E-Mail ist Standard.',
      'Pixel Kraftwerk in Groitzsch, rund 50 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Eilenburg?', a: 'Handwerk, Dienstleistungen, Gesundheit, Handel.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Nordsachsen', 'Kanalübergreifende Erfassung', 'Einfache Bedienung', 'Persönliche Betreuung aus Groitzsch'],
  },

  'taucha.crm-systeme': {
    regionSlug: 'taucha',
    regionName: 'Taucha',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Taucha – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im Leipziger Nordosten ein.',
    intro: 'Taucha liegt im Nordosten von Leipzig – eine wachsende Stadt mit zunehmend Gewerbeansiedlungen. Für Betriebe, die lokale und Leipziger Kunden bedienen, ist ein CRM die nötige Struktur.',
    paragraphs: [
      'Die Nähe zu Leipzig macht Taucha zu einem attraktiven Gewerbestandort. Betriebe hier bedienen oft einen gemischten Kundenstamm – lokal und aus der Großstadt. Ein CRM segmentiert sauber und hält alle Kontakte im Blick.',
      'Wir konfigurieren praxisnahe CRM-Systeme für Tauchaer Betriebe. Integration mit Website und Kalender ist Standard.',
      'Pixel Kraftwerk in Groitzsch, rund 35 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Taucha?', a: 'Handwerk, Dienstleistungen, Handel, Gewerbe.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für den Leipziger Nordosten', 'Segmentierung lokal vs. Leipzig', 'Integration mit Website', 'Persönliche Betreuung aus Groitzsch'],
  },

  'markranstaedt.crm-systeme': {
    regionSlug: 'markranstaedt',
    regionName: 'Markranstädt',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Markranstädt – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe im direkten Einzugsbereich von Leipzig ein.',
    intro: 'Markranstädt liegt direkt westlich von Leipzig – eine der nächsten Städte im Einzugsbereich der Metropole. Betriebe hier profitieren vom Großstadtmarkt und brauchen ein System, das mit dem Wachstum Schritt hält.',
    paragraphs: [
      'Die Lage zwischen Leipzig und Groitzsch macht Markranstädt zu einem attraktiven Standort für Betriebe, die beide Märkte bedienen. Ein CRM hilft, alle Kontakte übersichtlich zu verwalten und kein Follow-up zu vergessen.',
      'Wir richten CRM-Systeme ein, die zur Markranstädter Betriebsstruktur passen: einfach bedienbar, fokussiert auf die wichtigsten Pipelines.',
      'Pixel Kraftwerk in Groitzsch, rund 20 Kilometer entfernt – direkter Nachbarschaftsservice.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Markranstädt?', a: 'Alle mit regelmäßigem Anfrageneingang: Handwerk, Dienstleistungen, Handel.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für den Leipziger Westen', 'Einfach bedienbar', 'Persönliche Betreuung (20 km)', 'Schneller Nutzen von Tag 1'],
  },

  'leuna.crm-systeme': {
    regionSlug: 'leuna',
    regionName: 'Leuna',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Leuna – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für B2B-Betriebe am Chemiepark Leuna ein.',
    intro: 'Der Chemiepark Leuna ist einer der größten Industrieparks Europas. Betriebe im Umfeld haben oft komplexe B2B-Strukturen – ein CRM ist kein Luxus, sondern Grundlage für professionellen Vertrieb.',
    paragraphs: [
      'Am Chemiepark Leuna sind Zulieferer, technische Dienstleister und Spezialisten tätig, die häufig mit mehreren Ansprechpartnern pro Kunde arbeiten. Ein CRM bildet diese Komplexität ab: Unternehmenshierarchien, Kontakthistorien, Angebotsstatus und Vertragslaufzeiten.',
      'Für Leunaer B2B-Betriebe konfigurieren wir mehrstufige Vertriebspipelines und automatische Erinnerungen für Verlängerungen und Follow-ups. Integration mit E-Mail und CRM-Schnittstellen zu branchenspezifischen Systemen auf Anfrage.',
      'Pixel Kraftwerk in Groitzsch, rund 30 Kilometer von Leuna entfernt.',
    ],
    faqs: [
      { q: 'Eignet sich ein CRM für Chemieparkzulieferer?', a: 'Ja, gerade für komplexe B2B-Strukturen mit mehreren Ansprechpartnern.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen für Basis-Setup, mehr bei komplexen Anforderungen.' },
    ],
    highlights: ['CRM für B2B am Chemiepark Leuna', 'Unternehmenshierarchien abbilden', 'Automatische Verlängerungserinnerungen', 'Persönliche Betreuung aus Groitzsch'],
  },

  'oschatz.crm-systeme': {
    regionSlug: 'oschatz',
    regionName: 'Oschatz',
    serviceSlug: 'crm-systeme',
    serviceLabel: 'CRM-Systeme',
    metaDescription: 'CRM-Systeme für Oschatz – Pixel Kraftwerk aus Groitzsch richtet Lead-Management für Betriebe in Nordsachsen ein.',
    intro: 'Oschatz ist ein regionales Zentrum in Nordsachsen mit einem aktiven Mittelstand. Für Betriebe, die in der Region wachsen wollen, ist ein CRM der Grundstein für strukturierten Vertrieb.',
    paragraphs: [
      'Oschatzer Betriebe bedienen Kunden aus Nordsachsen und dem angrenzenden Landkreis Leipzig. Ohne zentrales System verlieren Anfragen zwischen Kanälen. Ein CRM hält alles zusammen und macht Nachfassen einfach.',
      'Wir konfigurieren praxisnahe Pipelines und automatische Follow-ups. Integration mit Website und E-Mail ist Standard.',
      'Pixel Kraftwerk in Groitzsch, rund 60 Kilometer entfernt.',
    ],
    faqs: [
      { q: 'Für welche Branchen in Oschatz?', a: 'Handwerk, Dienstleistungen, Handel, Industrie.' },
      { q: 'Wie schnell einsatzbereit?', a: '2–4 Wochen.' },
    ],
    highlights: ['CRM für Nordsachsen', 'Strukturierter Vertrieb', 'Integration mit Website', 'Persönliche Betreuung aus Groitzsch'],
  },
};
