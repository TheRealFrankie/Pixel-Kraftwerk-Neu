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
};

type RegionServiceKey = `${LeistungsgebietSlug}.${ServiceSlug}`;

const customRegionServiceContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  'leipzig.telefonassistenten': {
    regionSlug: 'leipzig',
    regionName: 'Leipzig',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Automatisierte Telefonassistenten in Leipzig – Pixel Kraftwerk entlastet Ihr Team bei der Anrufannahme, Terminplanung und Vorqualifizierung von Anfragen.',
    intro:
      'In Leipzig gehen viele Anrufe genau dann ein, wenn im Betrieb am meisten los ist – ob Praxis, Handwerksunternehmen, Dienstleister oder Agentur. Unser Telefonassistent nimmt Anrufe automatisch entgegen, beantwortet Standardfragen und erfasst Anliegen strukturiert, damit kein Kontakt verloren geht.',
    paragraphs: [
      'Gerade in einer wachsenden Stadt wie Leipzig ist das Telefon oft der erste Kontaktpunkt neuer Kundinnen und Kunden. Wenn das Team ausgelastet ist oder die Öffnungszeiten begrenzt sind, bleiben Anrufe jedoch leicht unbeantwortet. Ein automatisierter Telefonassistent hilft hier, die Erreichbarkeit zu sichern, ohne zusätzliches Personal aufbauen zu müssen: Er begrüßt Anrufende freundlich, stellt gezielte Fragen und dokumentiert alle wichtigen Informationen.',
      'Für Leipziger Unternehmen richten wir den Assistenten so ein, dass er zu Ihren Abläufen passt: Welche Informationen müssen bei einer Terminanfrage erfasst werden? Welche Notfälle sollen direkt weitergeleitet werden? Welche Rückrufzeiten sind realistisch? Auf dieser Basis erstellen wir dialogbasierte Abläufe, die professionell wirken und Ihr Team entlasten.',
      'Die Integration mit Ihrem Kalender, Ihrer Terminsoftware oder Ihrem CRM sorgt dafür, dass Daten nicht irgendwo „versanden“. Anfragen werden direkt im richtigen System abgelegt, mit Notizen versehen und – wenn gewünscht – automatisch mit Bestätigungen oder Follow-ups kombiniert. So entsteht aus einem simplen Anruf ein sauber dokumentierter Lead, dem Ihr Team in Ruhe nachgehen kann.',
    ],
    faqs: [
      {
        q: 'Ersetzt der Telefonassistent in Leipzig meine Mitarbeitenden am Telefon?',
        a: 'Nein. Der Assistent übernimmt vor allem wiederkehrende Standardaufgaben wie Begrüßung, Erfassung von Kontaktdaten und Basisfragen. Ihr Team bleibt für Beratung, komplexe Gespräche und persönliche Abstimmungen zuständig – aber mit deutlich weniger Unterbrechungen.',
      },
      {
        q: 'Wie reagieren Leipziger Kundinnen und Kunden auf einen Telefonassistenten?',
        a: 'Wichtig ist eine klare, wertschätzende Ansprache und ein professioneller Auftritt. Wenn Anrufende merken, dass ihr Anliegen ernst genommen wird und sie schnell eine Rückmeldung bekommen, wird der Assistent in der Regel gut angenommen – oft besser, als mehrfach in der Warteschlange zu hängen.',
      },
      {
        q: 'Kann der Telefonassistent auch Termine für Leipziger Standorte vereinbaren?',
        a: 'Ja. In vielen Projekten verbinden wir den Assistenten mit einem Online-Kalender oder einer Terminanwendung. So können direkt im Gespräch freie Slots angezeigt, gebucht und bestätigt werden – inklusive Erinnerungen für beide Seiten.',
      },
      {
        q: 'Wie aufwendig ist die Einführung eines Telefonassistenten in Leipzig?',
        a: 'Der größte Aufwand liegt in der gemeinsamen Definition der Abläufe: Welche Fälle gibt es, welche Informationen werden benötigt, was passiert bei Notfällen? Die technische Einrichtung übernehmen wir. In der Regel ist ein erster produktiver Assistent in wenigen Wochen einsatzbereit.',
      },
    ],
    highlights: [
      'Bessere Erreichbarkeit für Leipziger Kundinnen und Kunden',
      'Strukturierte Erfassung von Anfragen und Leads',
      'Entlastung Ihres Teams zu Stoßzeiten',
      'Optionale Anbindung an Kalender, CRM und Terminsoftware',
    ],
  },
};

function buildKey(regionSlug: LeistungsgebietSlug, serviceSlug: ServiceSlug): RegionServiceKey {
  return `${regionSlug}.${serviceSlug}`;
}

function getTemplateRegionServiceContent(
  regionSlug: LeistungsgebietSlug,
  regionName: string,
  serviceSlug: ServiceSlug,
  serviceLabel: string
): RegionServiceContent {
  const baseMeta = `${serviceLabel} in ${regionName}`;

  const serviceFocus =
    serviceSlug === 'ki-chatbots'
      ? 'KI-Chatbots und digitale Kundenassistenz'
      : serviceSlug === 'telefonassistenten'
        ? 'automatisierte Telefonassistenten und Anrufannahme'
        : serviceSlug === 'webseiten'
          ? 'moderne Webseiten im Mietmodell und lokale Präsenz'
          : serviceSlug === 'seo-top-3'
            ? 'SEO und Top-3-Platzierung in Google für lokale Sichtbarkeit'
            : serviceSlug === 'automatisierungen'
              ? 'Automatisierungen für Anfragen, Vertrieb und Terminplanung'
              : 'maßgeschneiderte digitale Lösungen';

  // Service-spezifische Inhalte für Webseiten (ohne Anruf-/Anfragen-Automatisierung)
  if (serviceSlug === 'webseiten') {
    return {
      regionSlug,
      regionName,
      serviceSlug,
      serviceLabel,
      metaDescription: `${baseMeta} – ${serviceFocus} für Unternehmen in ${regionName} und Umgebung durch Pixel Kraftwerk aus Groitzsch.`,
      intro: `${baseMeta} für Unternehmen in ${regionName} und der Region: Wir erstellen und betreuen moderne, mobiloptimierte Webseiten – im Mietmodell ohne hohe Startkosten. So haben Sie eine professionelle Präsenz und bleiben für Kundinnen und Kunden in Ihrer Region sichtbar.`,
      paragraphs: [
        `In ${regionName} und Umgebung suchen Kunden zunehmend online nach lokalen Anbietern. Eine klare, moderne Webseite ist oft der erste Eindruck Ihres Unternehmens. ${baseMeta} hilft Ihnen dabei, sich professionell zu präsentieren: mit übersichtlicher Struktur, schneller Ladezeit und Darstellung auf allen Geräten – ohne dass Sie sich um Technik oder Hosting kümmern müssen.`,
        `Gemeinsam mit Ihnen entwickeln wir Konzept und Design für Ihre Webseite: Welche Inhalte sind wichtig? Wen wollen Sie erreichen? Auf dieser Basis setzen wir Ihre Seite um – mit optionaler Anbindung an Formulare, Kalender oder Buchungssysteme. Das Mietmodell ermöglicht planbare monatliche Kosten und laufende Betreuung inklusive.`,
        `Nach dem Launch bleiben wir an Ihrer Seite. Änderungen an Texten, Bildern oder Angeboten erledigen wir auf Wunsch in kurzer Frist. So bleibt Ihre Webseite aktuell und unterstützt Ihre Sichtbarkeit in ${regionName} und der Region dauerhaft.`,
      ],
      faqs: [
        {
          q: `Für welche Unternehmen in ${regionName} eignet sich eine Webseite im Mietmodell?`,
          a: `Vor allem für Praxen, Handwerksbetriebe, Dienstleister, Agenturen und lokale Händler in ${regionName}, die eine professionelle Präsenz ohne hohe Einmalkosten wünschen. Das Mietmodell enthält Hosting, Sicherheit, Updates und auf Wunsch regelmäßige Anpassungen.`,
        },
        {
          q: `Müssen wir für eine neue Webseite unsere bestehende Domain oder E-Mails aufgeben?`,
          a: 'Nein. Bestehende Domains und E-Mail-Adressen können übernommen werden. Wir kümmern uns um den technischen Wechsel, sodass Ihre Kommunikation weiterläuft.',
        },
        {
          q: `Wie schnell ist eine Webseite für ${regionName} live?`,
          a: 'Je nach Umfang und gewünschten Inhalten meist innerhalb von wenigen Wochen. Ein klar definierter Startumfang beschleunigt die Umsetzung; Erweiterungen sind später jederzeit möglich.',
        },
        {
          q: 'Was passiert bei Änderungswünschen nach dem Launch?',
          a: 'Im Mietmodell sind regelmäßige Anpassungen eingeplant. Texte, Bilder oder neue Seiten können wir schrittweise ergänzen – ohne dass Sie in Technik investieren müssen.',
        },
        {
          q: 'Gibt es laufende Kosten für Hosting und Betreuung?',
          a: 'Ja. Das Mietmodell umfasst Hosting, Sicherheit, Backups und auf Wunsch inhaltliche Betreuung. Die monatlichen Kosten sind planbar; das genaue Modell klären wir im Angebot.',
        },
      ],
      highlights: [
        `${serviceLabel} speziell für Unternehmen in ${regionName}`,
        'Mietmodell ohne hohe Startkosten',
        'Mobiloptimiert, schnell und sicher',
        'Laufende Betreuung und Anpassungen auf Wunsch',
      ],
    };
  }

  // Service-spezifische Inhalte für SEO / Top 3 in Google
  if (serviceSlug === 'seo-top-3') {
    return {
      regionSlug,
      regionName,
      serviceSlug,
      serviceLabel,
      metaDescription: `${baseMeta} – ${serviceFocus} für Unternehmen in ${regionName} und Umgebung durch Pixel Kraftwerk aus Groitzsch.`,
      intro: `${baseMeta} für Unternehmen in ${regionName} und der Region: Wir optimieren Ihre Sichtbarkeit in Suchmaschinen – mit Fokus auf lokale Suchanfragen und die wichtigsten Suchbegriffe für Ihr Geschäft. Ziel ist, dass Sie gefunden werden, wenn Kundinnen und Kunden in Ihrer Region suchen.`,
      paragraphs: [
        `In ${regionName} und Umgebung suchen potenzielle Kunden bei Google nach Leistungen wie den Ihren. Wer oben in den Suchergebnissen steht, erhält die meisten Anfragen. ${baseMeta} hilft Ihnen, Ihre Webseite und Ihre lokalen Signale so zu stärken, dass Sie für relevante Suchbegriffe sichtbar werden – mit transparentem Vorgehen und Fokus auf messbare Verbesserungen.`,
        `Gemeinsam analysieren wir, wonach in Ihrer Branche und Region gesucht wird, wie Ihre Konkurrenz dasteht und wo Ihre Stärken liegen. Darauf aufbauend optimieren wir Ihre Webseite, lokale Einträge und Inhalte. Das Ziel sind bessere Platzierungen für die Begriffe, die für Ihr Geschäft wirklich zählen – ohne leere Versprechen, aber mit klarem Fokus auf die Top 3, wo es realistisch ist.`,
        `SEO ist kein einmaliges Projekt, sondern ein laufender Prozess. Wir begleiten Sie über mindestens 90 Tage mit Monitoring und Feintuning, damit die Verbesserungen nachhaltig wirken. Auf Wunsch erweitern wir die Optimierung schrittweise auf weitere Suchbegriffe oder Regionen.`,
      ],
      faqs: [
        {
          q: `Für welche Unternehmen in ${regionName} lohnt sich SEO / Top 3 in Google?`,
          a: `Vor allem für lokale Dienstleister, Praxen, Handwerksbetriebe und Händler in ${regionName}, bei denen Kunden gezielt nach Leistungen vor Ort suchen. In einem kurzen Gespräch prüfen wir, ob und für welche Suchbegriffe Potenzial besteht.`,
        },
        {
          q: 'Ist eine Top-3-Platzierung garantiert?',
          a: 'Wir arbeiten mit klarem Fokus auf Ihre wichtigsten Keywords; das Ziel ist die Top 3, wo es wettbewerbs- und technisch realistisch ist. Vorab sprechen wir offen über Ausgangslage, Konkurrenz und erwartbare Zeiträume.',
        },
        {
          q: `Brauche ich für SEO in ${regionName} eine neue Webseite?`,
          a: 'Nicht zwingend. Oft lässt sich mit der bestehenden Webseite arbeiten. Bei ungünstiger Struktur oder Technik empfehlen wir eine Anpassung oder Modernisierung – die setzen wir auf Wunsch mit um.',
        },
        {
          q: 'Wie lange dauert es, bis sich SEO auswirkt?',
          a: 'Sichtbare Verbesserungen zeigen sich typischerweise über mehrere Wochen bis wenige Monate. Wir begleiten Sie mindestens 90 Tage mit Analyse, Optimierung und Monitoring, damit die Maßnahmen greifen.',
        },
        {
          q: 'Gibt es laufende Kosten für Betreuung und Optimierung?',
          a: 'Ja. Für nachhaltige Ergebnisse ist ein laufendes Betreuungspaket sinnvoll – mit regelmäßigem Monitoring, Anpassungen und technischem Support. Das genaue Modell klären wir im Angebot.',
        },
      ],
      highlights: [
        `${serviceLabel} speziell für Unternehmen in ${regionName}`,
        'Fokus auf lokale Suchanfragen und relevante Keywords',
        'Transparentes Vorgehen, keine leeren Versprechen',
        'Monitoring und Feintuning über mindestens 90 Tage',
      ],
    };
  }

  // Generisches Template für ki-chatbots, telefonassistenten, automatisierungen
  return {
    regionSlug,
    regionName,
    serviceSlug,
    serviceLabel,
    metaDescription: `${baseMeta} – ${serviceFocus} für Unternehmen in ${regionName} und Umgebung durch Pixel Kraftwerk aus Groitzsch.`,
    intro: `${baseMeta} für Unternehmen in ${regionName} und der Region: Wir kombinieren ${serviceFocus} mit praxisnaher Prozessautomatisierung, damit wiederkehrende Aufgaben zuverlässig im Hintergrund laufen und Ihr Team mehr Zeit für wichtige Gespräche und Projekte gewinnt.`,
    paragraphs: [
      `In ${regionName} treffen wachsende Kundenerwartungen an Erreichbarkeit und digitale Abläufe auf begrenzte Zeit im Tagesgeschäft. ${baseMeta} hilft Ihnen, diesen Spagat zu meistern: wiederkehrende Fragen werden automatisch beantwortet, Anfragen sauber erfasst und an die richtigen Stellen weitergeleitet. So bleibt Ihr Unternehmen erreichbar – auch dann, wenn gerade niemand direkt ans Telefon gehen oder E‑Mails sofort beantworten kann.`,
      `Gemeinsam schauen wir uns Ihre bestehenden Prozesse in ${regionName} an: Wo entstehen Engpässe? Welche Aufgaben wiederholen sich täglich? Auf dieser Basis planen wir eine Lösung, die zu Ihrer Realität passt – mit klar definierten Dialogen, sinnvollen Übergaben an Ihr Team und Integration in vorhandene Systeme wie CRM, Kalender oder Website. Ziel ist kein technisches Prestigeprojekt, sondern spürbare Entlastung im Alltag.`,
      `Nach der Einführung bleiben wir an Ihrer Seite. Wir beobachten mit Ihnen, wie ${serviceLabel} in ${regionName} genutzt wird, welche Fragen besonders häufig auftreten und wo Optimierungspotenzial liegt. Auf Wunsch erweitern wir die Lösung Schritt für Schritt – etwa um zusätzliche Standorte, weitere Services oder tiefergehende Automatisierungsschritte im Hintergrund.`,
    ],
    faqs: [
      {
        q: `Für welche Unternehmen in ${regionName} eignet sich ${serviceLabel} besonders?`,
        a: `Vor allem Betriebe mit vielen Anfragen und wiederkehrenden Aufgaben profitieren – etwa Praxen, Handwerksbetriebe, Dienstleister, Agenturen, Beratungen und lokale Händler in ${regionName}. Überall dort, wo Standardanliegen häufig auftreten, schafft Automatisierung spürbare Entlastung.`,
      },
      {
        q: `Müssen wir für ${serviceLabel} in ${regionName} unsere komplette IT umstellen?`,
        a: 'Nein. Wir arbeiten bevorzugt mit den Systemen, die bereits im Einsatz sind, und ergänzen sie sinnvoll. Wo nötig, integrieren wir Schnittstellen oder wählen pragmatische Lösungen, die zu Ihrem Setup passen, statt alles neu aufzubauen.',
      },
      {
        q: `Wie schnell kann ${serviceLabel} in ${regionName} live gehen?`,
        a: 'Je nach Komplexität liegt der Zeitrahmen meist zwischen wenigen Wochen und zwei Monaten. Ein klar abgegrenzter erster Use Case beschleunigt die Einführung und sorgt dafür, dass Sie früh konkrete Ergebnisse sehen.',
      },
      {
        q: 'Wie stellt ihr sicher, dass Kundinnen und Kunden die Lösung akzeptieren?',
        a: 'Wir achten auf eine wertschätzende Tonalität, klare Erklärungen und einfache Wege zu einer persönlichen Ansprechperson. Ziel ist nicht, Menschen zu verstecken, sondern sie zu entlasten und gleichzeitig eine moderne, gut erreichbare Kommunikation anzubieten.',
      },
      {
        q: 'Gibt es laufende Kosten für Betreuung und Optimierung?',
        a: 'Ja, für viele Unternehmen ist ein laufendes Betreuungspaket sinnvoll. Darin sind regelmäßige Optimierungen, Anpassungen an neue Angebote oder Prozesse und technischer Support enthalten. Das genaue Modell klären wir im Angebot.',
      },
    ],
    highlights: [
      `${serviceLabel} speziell für Unternehmen in ${regionName}`,
      'Praxisnahe Abläufe statt abstrakter KI-Experimente',
      'Integration in bestehende Systeme, wo immer möglich',
      'Laufende Betreuung und Weiterentwicklung auf Wunsch',
    ],
  };
}

export function getRegionServiceContent(
  regionSlug: LeistungsgebietSlug,
  regionName: string,
  serviceSlug: ServiceSlug,
  serviceLabel: string
): RegionServiceContent {
  const key = buildKey(regionSlug, serviceSlug);
  const custom = customRegionServiceContent[key];
  if (custom) return custom;
  return getTemplateRegionServiceContent(regionSlug, regionName, serviceSlug, serviceLabel);
}

