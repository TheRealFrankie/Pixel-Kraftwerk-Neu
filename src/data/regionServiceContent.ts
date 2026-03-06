import type { LeistungsgebietSlug } from './leistungsgebiete';
import type { ServiceSlug } from './services';
import { additionalCustomContent } from './regionServiceContentCustom';

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

  'leipzig.ki-chatbots': {
    regionSlug: 'leipzig',
    regionName: 'Leipzig',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Leipzig – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation auf Webseite, Messenger und in internen Prozessen.',
    intro:
      'Leipziger Unternehmen – ob Agentur in Plagwitz, Praxis in der Südvorstadt oder Handwerksbetrieb in Gohlis – verlieren täglich Zeit mit denselben Kundenanfragen: Öffnungszeiten, Preise, Verfügbarkeit. Ein KI-Chatbot beantwortet diese Fragen rund um die Uhr, erfasst Kontaktdaten und leitet komplexe Anliegen direkt an Ihr Team weiter.',
    paragraphs: [
      'Leipzig wächst – und damit die Erwartungen an schnelle, digitale Kommunikation. Gerade im Leipziger Wettbewerbsumfeld entscheidet oft die Reaktionszeit darüber, ob aus einem Webseitenbesuch eine Anfrage wird. Ein KI-Chatbot auf Ihrer Website gibt Besuchenden sofort Orientierung: Er beantwortet häufige Fragen, führt durch Ihr Leistungsangebot und sammelt strukturiert die Informationen, die Ihr Team für eine qualifizierte Rückmeldung braucht.',
      'Anders als starre FAQ-Seiten reagiert der Chatbot auf individuelle Eingaben und führt natürliche Dialoge – in einer Tonalität, die zu Ihrem Unternehmen passt. Für eine Physiotherapie-Praxis in Connewitz kann das bedeuten: Kassenleistungen erklären, freie Termine zeigen und direkt zur Buchung weiterleiten. Für eine Kreativagentur am Spinnereigelände: Projektanfragen vorqualifizieren, Portfolio-Bereiche empfehlen und einen Rückruf-Termin vorschlagen.',
      'Die Einrichtung beginnt mit einer Analyse Ihrer häufigsten Kundenanliegen. Wir identifizieren gemeinsam, welche Fragen sich automatisieren lassen und wo der Übergang an eine menschliche Ansprechperson sinnvoll ist. Darauf aufbauend erstellen wir dialogbasierte Abläufe, die wir iterativ mit Ihnen testen und verfeinern – bis der Chatbot zuverlässig in Ihrem Alltag funktioniert.',
      'Technisch lässt sich der Chatbot nahtlos in Ihre bestehende Website einbinden – egal ob WordPress, Shopify oder ein individuelles System. Auf Wunsch verbinden wir ihn mit Ihrem CRM, Kalender oder Ticketsystem, damit Anfragen nicht in einem separaten Tool versanden, sondern direkt dort landen, wo Ihr Team bereits arbeitet. Für Leipziger Unternehmen mit mehreren Standorten oder Filialen ist auch eine standortbezogene Weiterleitung möglich.',
      'Die meisten Leipziger Betriebe starten mit einem klar umrissenen Use Case – etwa der Beantwortung der zehn häufigsten Kundenfragen oder der automatisierten Terminbuchung. Von dort aus erweitern wir den Chatbot schrittweise: um neue Themenfelder, Messenger-Kanäle wie WhatsApp oder interne Prozesse wie die Vorqualifizierung von Bewerbungen. So wächst die Lösung mit Ihrem Unternehmen mit, ohne dass Sie alles auf einmal umstellen müssen.',
      'Als Agentur aus Groitzsch betreuen wir zahlreiche Unternehmen in Leipzig und kennen die Anforderungen der Leipziger Geschäftswelt aus erster Hand. Ob Erstgespräch bei Ihnen im Büro am Augustusplatz, Workshop in unserem Büro in Groitzsch oder Abstimmung per Videocall – wir sind in unter 30 Minuten bei Ihnen und begleiten Sie persönlich durch den gesamten Prozess.',
    ],
    faqs: [
      {
        q: 'Für welche Branchen in Leipzig eignen sich KI-Chatbots besonders?',
        a: 'Besonders gut funktionieren Chatbots für Praxen, Kanzleien, Agenturen, Gastronomie, Handwerk, Studios und E-Commerce-Unternehmen in Leipzig – überall dort, wo regelmäßig dieselben Fragen eingehen und schnelle Reaktionszeiten den Unterschied machen.',
      },
      {
        q: 'Klingt der Chatbot wie ein Roboter?',
        a: 'Nein. Wir gestalten die Dialoge so, dass sie zu Ihrem Unternehmen passen – locker und direkt für ein Café in der Südvorstadt, fachlich und seriös für eine Kanzlei im Zentrum. Tonalität, Ansprache und Inhalt stimmen wir gemeinsam ab.',
      },
      {
        q: 'Kann der Chatbot auch auf WhatsApp oder Instagram eingesetzt werden?',
        a: 'Ja. Neben der Website lässt sich der Chatbot auf Messenger-Kanäle erweitern. Gerade für Leipziger Betriebe mit jüngerer Zielgruppe ist WhatsApp oft der wichtigere Kontaktkanal als ein klassisches Kontaktformular.',
      },
      {
        q: 'Was passiert, wenn der Chatbot eine Frage nicht beantworten kann?',
        a: 'In solchen Fällen leitet der Chatbot das Gespräch an Ihr Team weiter – per E-Mail, Ticket oder Benachrichtigung. Die bis dahin erfassten Informationen gehen dabei nicht verloren, sodass Ihr Team direkt einsteigen kann.',
      },
      {
        q: 'Wie schnell ist ein KI-Chatbot für mein Leipziger Unternehmen einsatzbereit?',
        a: 'Ein erster produktiver Chatbot mit den wichtigsten Dialogen ist in der Regel innerhalb von zwei bis vier Wochen live. Erweiterungen und Optimierungen erfolgen dann im laufenden Betrieb.',
      },
      {
        q: 'Wie unterscheidet sich euer Chatbot von fertigen Baukastenlösungen?',
        a: 'Baukastenlösungen decken Standardfälle ab, stoßen aber schnell an Grenzen. Wir bauen den Chatbot passgenau für Ihre Abläufe, Ihre Branche und Ihre Sprache – inklusive Anbindung an Ihre bestehenden Systeme und persönlicher Betreuung.',
      },
    ],
    highlights: [
      'Sofortige Beantwortung häufiger Kundenfragen – rund um die Uhr',
      'Passgenau für Leipziger Branchen und Zielgruppen',
      'Integration in Website, Messenger, CRM und Kalender',
      'Persönliche Betreuung aus Groitzsch – in 30 Minuten bei Ihnen',
    ],
  },

  'leipzig.automatisierungen': {
    regionSlug: 'leipzig',
    regionName: 'Leipzig',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Leipziger Unternehmen – Pixel Kraftwerk verbindet Ihre Tools, automatisiert Anfragen und bringt Ordnung in wiederkehrende Abläufe.',
    intro:
      'In vielen Leipziger Unternehmen laufen Prozesse noch über manuelle Zwischenschritte: Anfragen aus dem Kontaktformular werden in eine Tabelle kopiert, Terminbestätigungen einzeln verschickt, Daten zwischen CRM und Kalender hin und her übertragen. Wir automatisieren genau diese Abläufe – zuverlässig, nachvollziehbar und ohne Ihr bestehendes System auf den Kopf zu stellen.',
    paragraphs: [
      'Leipzig ist geprägt von kleinen und mittelständischen Betrieben, die mit begrenzten Ressourcen ein hohes Serviceniveau halten. Ob Handwerksbetrieb in Lindenau, Beratungsagentur in Plagwitz oder Arztpraxis in Schleußig – überall entstehen im Alltag Engpässe, wenn Standardaufgaben manuell abgearbeitet werden: Follow-up-Mails vergessen, Leads nicht nachverfolgt, Termine doppelt vergeben. Automatisierungen beseitigen diese Fehlerquellen, indem sie Abläufe standardisieren und im Hintergrund zuverlässig ausführen.',
      'Am Anfang steht bei uns keine Software-Demo, sondern ein Gespräch über Ihren Arbeitsalltag. Welche Aufgaben wiederholen sich täglich? Wo gehen Informationen verloren? Was kostet Ihr Team die meiste Zeit? Auf dieser Basis identifizieren wir gemeinsam zwei bis drei Prozesse, bei denen Automatisierung den größten Hebel hat – und setzen dort zuerst an. Typische Einstiegspunkte für Leipziger Betriebe sind die automatische Erfassung und Weiterleitung von Website-Anfragen, die Terminbuchung mit Kalenderanbindung und das automatisierte Nachfassen bei offenen Angeboten.',
      'Technisch verbinden wir Ihre vorhandenen Tools miteinander: CRM-System, E-Mail-Postfach, Kalender, Branchensoftware, Formular-Builder. Daten fließen automatisch dorthin, wo sie gebraucht werden – ohne Copy-Paste, ohne Medienbrüche. Falls eine direkte Schnittstelle fehlt, nutzen wir Automatisierungsplattformen als Brücke. Das Ergebnis: durchgängige Prozesse statt isolierter Insellösungen, die Ihr Team wirklich entlasten.',
      'Automatisierungen entfalten ihre volle Wirkung, wenn sie mit anderen digitalen Bausteinen verzahnt werden. Ein KI-Chatbot auf Ihrer Website erfasst Anfragen, die Automatisierung leitet sie ins CRM und versendet eine Bestätigung, der Telefonassistent übernimmt Rückrufe außerhalb der Geschäftszeiten. Für Leipziger Unternehmen, die mehrere dieser Bausteine kombinieren, entsteht ein System, das von der ersten Kundenanfrage bis zur Terminbestätigung durchgängig funktioniert – ohne manuelles Zutun.',
      'Nach der Einführung optimieren wir gemeinsam: Welche Automatisierung läuft rund? Wo gibt es Sonderfälle, die eine Anpassung brauchen? Über regelmäßige Check-ins stellen wir sicher, dass die Lösung mit Ihrem Unternehmen mitwächst – ob neue Standorte in Leipzig, zusätzliche Services oder veränderte Abläufe. Viele unserer Leipziger Kunden starten mit einem einzelnen Workflow und erweitern nach wenigen Wochen auf drei bis fünf weitere.',
      'Pixel Kraftwerk sitzt in Groitzsch – knapp südlich von Leipzig. Das bedeutet kurze Wege, persönliche Ansprechpartner und ein echtes Verständnis für den Leipziger Markt. Ob Workshop bei Ihnen im Büro, Abstimmung per Videocall oder gemeinsamer Vor-Ort-Termin: Wir sind nah dran und reagieren schnell, wenn sich Anforderungen ändern.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich für Leipziger Unternehmen am schnellsten automatisieren?',
        a: 'Typische Quick Wins sind die automatische Weiterleitung von Kontaktformularen ins CRM, Terminbestätigungen mit Kalenderanbindung, Follow-up-E-Mails nach Erstkontakt und die Synchronisierung von Kundendaten zwischen verschiedenen Tools.',
      },
      {
        q: 'Müssen wir unsere bestehende Software in Leipzig dafür wechseln?',
        a: 'Nein. Wir arbeiten mit Ihren vorhandenen Systemen und verbinden sie sinnvoll. Ein Wechsel ist nur dann empfehlenswert, wenn das bestehende Tool technisch veraltet ist oder keine Schnittstellen bietet.',
      },
      {
        q: 'Wie aufwendig ist die Einführung von Automatisierungen?',
        a: 'Der erste Workflow ist in der Regel innerhalb von zwei bis drei Wochen produktiv. Der Aufwand auf Ihrer Seite beschränkt sich auf die gemeinsame Analyse der Abläufe und kurze Abstimmungsrunden – die technische Umsetzung übernehmen wir.',
      },
      {
        q: 'Funktionieren Automatisierungen auch für sehr kleine Teams in Leipzig?',
        a: 'Gerade kleine Teams profitieren am meisten, weil jede eingesparte Stunde direkt spürbar ist. Ob Ein-Personen-Betrieb oder Team mit fünf Leuten – die Automatisierung passt sich dem Umfang an.',
      },
      {
        q: 'Kann ich Automatisierungen mit einem Chatbot oder Telefonassistenten kombinieren?',
        a: 'Ja, genau das ist unsere Stärke. Chatbot, Telefonassistent und Automatisierungen greifen ineinander: Anfragen werden erfasst, weitergeleitet, bestätigt und nachverfolgt – alles automatisch und ohne Medienbrüche.',
      },
      {
        q: 'Was kostet eine Automatisierungslösung für ein Leipziger Unternehmen?',
        a: 'Die Kosten richten sich nach Umfang und Komplexität. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot, das genau auf Ihre Anforderungen zugeschnitten ist – ohne versteckte Gebühren.',
      },
    ],
    highlights: [
      'Sofort spürbare Entlastung bei wiederkehrenden Aufgaben',
      'Integration in Ihre vorhandenen Tools – kein Systemwechsel nötig',
      'Skalierbar von einem Workflow bis zum vollständigen Prozess-Setup',
      'Persönliche Betreuung aus Groitzsch für den Leipziger Markt',
    ],
  },

  'leipzig.webseiten': {
    regionSlug: 'leipzig',
    regionName: 'Leipzig',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Moderne Webseiten für Leipziger Unternehmen im Mietmodell – Pixel Kraftwerk erstellt schnelle, mobiloptimierte Seiten ohne hohe Startkosten.',
    intro:
      'Wer in Leipzig nach einem Dienstleister, Handwerker oder Geschäft sucht, landet fast immer zuerst auf der Webseite. Wenn die veraltet wirkt, langsam lädt oder auf dem Handy kaum bedienbar ist, klicken Besuchende weiter – zur Konkurrenz in Connewitz, Plagwitz oder Zentrum-Süd. Wir erstellen moderne, schnelle Webseiten im Mietmodell, die zu Ihrem Leipziger Unternehmen passen.',
    paragraphs: [
      'Der Leipziger Markt ist kompetitiv – ob Gastronomie rund um die Karl-Liebknecht-Straße, Kreativwirtschaft im Westen oder Gesundheitsdienstleister in den Wohnvierteln. Eine professionelle Webseite ist dabei kein Nice-to-have, sondern Ihr wichtigstes Schaufenster. Sie entscheidet darüber, ob ein potenzieller Kunde Vertrauen fasst und Kontakt aufnimmt oder innerhalb von Sekunden zur nächsten Option weiterzieht.',
      'Unser Mietmodell macht den Einstieg einfach: Statt einer hohen Einmalinvestition zahlen Sie einen planbaren monatlichen Betrag, der Design, Entwicklung, Hosting, Sicherheitsupdates und laufende Betreuung umfasst. Für viele Leipziger Gründer, Freiberufler und Kleinunternehmer ist das der entscheidende Unterschied – kein finanzielles Risiko, aber eine Webseite, die professionell aussieht und technisch auf dem neuesten Stand ist.',
      'Jede Webseite wird individuell konzipiert. Gemeinsam klären wir, was Ihr Leipziger Publikum erwartet, welche Informationen auf der Startseite stehen müssen und wie der Weg von der ersten Impression zur Kontaktaufnahme möglichst kurz und überzeugend wird. Dabei achten wir auf saubere Struktur, schnelle Ladezeiten und eine Darstellung, die auf Smartphone, Tablet und Desktop gleichermaßen funktioniert.',
      'Auf Wunsch integrieren wir direkt einen KI-Chatbot, ein Terminbuchungssystem oder automatisierte Kontaktformulare. So wird Ihre Webseite nicht nur Visitenkarte, sondern ein aktiver Vertriebskanal, der Anfragen erfasst, vorqualifiziert und an Ihr Team weiterleitet. Für Leipziger Unternehmen mit saisonalem Geschäft – etwa Eventlocations oder Gastronomie – lassen sich Inhalte und Angebote flexibel anpassen, ohne dass Sie selbst Hand an den Code legen müssen.',
      'Bereits bei der Erstellung legen wir das Fundament für gute Auffindbarkeit bei Google: saubere URL-Strukturen, Meta-Tags, strukturierte Daten und optimierte Ladegeschwindigkeit. Für Leipziger Unternehmen, die lokal gefunden werden wollen, bieten wir ergänzend gezielte SEO-Pakete an – damit Ihre Webseite nicht nur gut aussieht, sondern auch bei Suchanfragen wie „Friseur Leipzig Südvorstadt" oder „Steuerberater Leipzig Zentrum" sichtbar wird.',
      'Von unserem Standort in Groitzsch betreuen wir Leipziger Unternehmen persönlich. Änderungswünsche an Texten, Bildern oder Seitenstruktur setzen wir in kurzer Frist um. Kein Ticketsystem, kein Warten – ein Anruf oder eine kurze Nachricht genügt. Viele unserer Leipziger Kunden schätzen genau diese Verbindung aus professioneller Webentwicklung und persönlicher Erreichbarkeit.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite im Mietmodell für ein Leipziger Unternehmen?',
        a: 'Die monatlichen Kosten hängen vom Umfang ab – Anzahl der Seiten, gewünschte Funktionen, Integrationen. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot. Typische Leipziger Kunden starten mit Paketen, die Hosting, Design und laufende Betreuung enthalten.',
      },
      {
        q: 'Kann ich meine bestehende Domain und E-Mail-Adresse behalten?',
        a: 'Ja, selbstverständlich. Wir übernehmen den technischen Umzug Ihrer Domain und stellen sicher, dass Ihre E-Mail-Kommunikation unterbrechungsfrei weiterläuft.',
      },
      {
        q: 'Wie lange dauert es, bis meine neue Webseite online ist?',
        a: 'In der Regel ist eine Webseite innerhalb von drei bis sechs Wochen live – je nach Umfang und Geschwindigkeit bei der inhaltlichen Abstimmung. Eilige Projekte können wir nach Absprache priorisieren.',
      },
      {
        q: 'Kann ich Inhalte selbst ändern?',
        a: 'Ja, wenn gewünscht richten wir ein einfaches Content-Management ein. Alternativ übernehmen wir Anpassungen für Sie – im Mietmodell sind regelmäßige Änderungen bereits enthalten.',
      },
      {
        q: 'Wird meine Webseite auch für Google optimiert?',
        a: 'Grundlegende SEO-Maßnahmen wie saubere Technik, Meta-Tags und schnelle Ladezeiten sind bei jeder Webseite dabei. Für eine gezielte lokale SEO-Strategie mit Keyword-Optimierung und laufendem Monitoring bieten wir ergänzende Pakete an.',
      },
      {
        q: 'Lässt sich ein Chatbot oder eine Terminbuchung in die Webseite einbauen?',
        a: 'Ja, das ist eine unserer Kernkompetenzen. Chatbot, Terminbuchung oder automatisierte Formulare lassen sich nahtlos integrieren, sodass Ihre Webseite aktiv Anfragen generiert – auch außerhalb der Geschäftszeiten.',
      },
    ],
    highlights: [
      'Individuelles Design für den Leipziger Markt',
      'Mietmodell ohne hohe Einmalkosten – planbar und flexibel',
      'Mobiloptimiert, schnell und suchmaschinenfreundlich',
      'Persönliche Betreuung mit kurzen Reaktionszeiten aus Groitzsch',
    ],
  },

  'leipzig.seo-top-3': {
    regionSlug: 'leipzig',
    regionName: 'Leipzig',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'Lokale SEO-Optimierung für Leipzig – Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google für die Suchbegriffe, die wirklich Kunden bringen.',
    intro:
      'Wenn jemand in Leipzig „Physiotherapie Südvorstadt", „Maler Plagwitz" oder „Steuerberater Leipzig" googelt, entscheiden die ersten drei Ergebnisse über den Großteil der Anfragen. Wer dort nicht steht, wird übersehen – egal wie gut die Leistung ist. Wir bringen Leipziger Unternehmen gezielt in die Top-3-Positionen bei Google, mit einer Strategie, die auf lokale Suchanfragen zugeschnitten ist.',
    paragraphs: [
      'Leipzig hat über 600.000 Einwohner und einen vielfältigen lokalen Markt. Entsprechend hoch ist der Wettbewerb um Sichtbarkeit in Google – besonders in Branchen wie Gesundheit, Handwerk, Gastronomie und professionelle Dienstleistungen. Wer bei lokalen Suchanfragen auf Seite zwei steht, verliert rund 90 % des potenziellen Traffics. Genau hier setzen wir an: mit datenbasierter Keyword-Analyse, technischer Optimierung und dem systematischen Aufbau lokaler Autoritätssignale.',
      'Am Anfang steht eine ehrliche Bestandsaufnahme: Wo steht Ihr Unternehmen aktuell in den Leipziger Suchergebnissen? Welche Suchbegriffe nutzen Ihre potenziellen Kunden wirklich? Wie stark ist die Konkurrenz in Ihrem Stadtteil oder Ihrer Branche? Auf dieser Basis entwickeln wir eine SEO-Strategie, die realistische Ziele setzt – mit Fokus auf die Keywords, die tatsächlich zu Anfragen führen, nicht auf abstrakte Ranking-Zahlen.',
      'Die Umsetzung umfasst drei Säulen: technische Onpage-Optimierung Ihrer Webseite (Ladezeit, Struktur, Meta-Daten, strukturierte Daten), Optimierung Ihres Google-Business-Profils (Kategorien, Beschreibung, Fotos, Beiträge, Bewertungsstrategie) und den Aufbau lokaler Autorität durch konsistente Einträge in Branchenverzeichnissen, relevante Verlinkungen und zielgerichteten Content. Alle drei Säulen greifen ineinander und verstärken sich gegenseitig.',
      'Für Leipziger Unternehmen ist das Google-Business-Profil besonders entscheidend – es bestimmt, ob Sie im Local Pack (die Karte mit drei Ergebnissen) erscheinen, wenn jemand in Ihrer Nähe sucht. Wir optimieren Ihr Profil vollständig: korrekte Kategorien, überzeugende Beschreibung, regelmäßige Beiträge und eine nachhaltige Bewertungsstrategie. Dazu gehört auch die Optimierung für Stadtteil-spezifische Suchen wie „Zahnarzt Leipzig Gohlis" oder „Friseur Leipzig Schleußig".',
      'SEO ist kein Einmal-Projekt. Google ändert laufend seinen Algorithmus, Mitbewerber optimieren ebenfalls und Ihr Unternehmen entwickelt sich weiter. Deshalb begleiten wir Sie über mindestens 90 Tage mit Monitoring, monatlichen Reports und laufender Feinjustierung. Sie sehen transparent, wie sich Ihre Rankings für Leipziger Suchbegriffe entwickeln, welche Maßnahmen wirken und wo wir nachsteuern.',
      'Die stärksten Ergebnisse erzielen wir, wenn SEO mit einer modernen Webseite und intelligenter Automatisierung zusammenspielt. Mehr Sichtbarkeit bei Google bringt mehr Besucher – aber erst ein überzeugender Webauftritt mit Chatbot oder automatisierter Anfragenerfassung macht aus Besuchern echte Anfragen. Pixel Kraftwerk liefert alle Bausteine aus einer Hand: SEO, Webseite und Automatisierung für Ihr Leipziger Unternehmen.',
    ],
    faqs: [
      {
        q: 'Ist eine Top-3-Platzierung in Leipzig realistisch?',
        a: 'Für viele lokale Suchbegriffe in Leipzig ja – besonders in Nischen und Stadtteilen, wo der Wettbewerb überschaubar ist. Vorab analysieren wir ehrlich, wo Top-3-Positionen realistisch sind und wo der Wettbewerb mehr Zeit oder Budget erfordert.',
      },
      {
        q: 'Wie lange dauert es, bis sich SEO in Leipzig auswirkt?',
        a: 'Erste messbare Verbesserungen sehen wir typischerweise nach vier bis acht Wochen. Stabile Top-3-Positionen für kompetitive Leipziger Keywords können drei bis sechs Monate dauern. Wir setzen auf nachhaltige Maßnahmen statt kurzfristiger Tricks.',
      },
      {
        q: 'Optimiert ihr auch mein Google-Business-Profil?',
        a: 'Ja, das ist ein zentraler Bestandteil unserer lokalen SEO-Strategie. Wir optimieren Kategorien, Beschreibung, Fotos und Beiträge und helfen beim Aufbau einer positiven Bewertungsbasis – damit Sie im Local Pack für Leipzig sichtbar werden.',
      },
      {
        q: 'Brauche ich für SEO eine neue Webseite?',
        a: 'Nicht zwingend. Oft lässt sich mit der bestehenden Seite arbeiten. Falls die Technik veraltet oder die Struktur ungünstig ist, empfehlen wir eine Modernisierung – die können wir im Mietmodell gleich miterledigen.',
      },
      {
        q: 'Für welche Branchen in Leipzig macht SEO Sinn?',
        a: 'Grundsätzlich für jedes Unternehmen, das lokal gefunden werden will: Handwerk, Praxen, Gastronomie, Rechts- und Steuerberatung, Immobilien, Agenturen, Studios, Coaches. Entscheidend ist, dass potenzielle Kunden in Leipzig aktiv nach Ihrem Angebot googeln.',
      },
      {
        q: 'Was unterscheidet eure SEO-Arbeit von großen Agenturen?',
        a: 'Wir sind lokal verwurzelt, kennen den Leipziger Markt und arbeiten persönlich mit Ihnen – nicht über Projektmanager-Ketten. Sie haben einen direkten Ansprechpartner, transparente Reports und eine Strategie, die auf Ihren konkreten Markt zugeschnitten ist, nicht auf Agentur-Standardpakete.',
      },
    ],
    highlights: [
      'Fokus auf Leipziger Suchbegriffe mit echtem Anfragenpotenzial',
      'Google-Business-Profil-Optimierung inkl. Local Pack',
      'Transparentes Monitoring mit monatlichen Reports',
      'Lokale Expertise aus Groitzsch – persönlich und direkt',
    ],
  },

  'groitzsch.ki-chatbots': {
    regionSlug: 'groitzsch',
    regionName: 'Groitzsch',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Groitzsch – direkt vom Hauptsitz von Pixel Kraftwerk. Automatisierte Kundenkommunikation für Handwerk, Praxen und Dienstleister.',
    intro:
      'Unser Büro ist am Neuer Weg 9a in Groitzsch – und genau hier entwickeln wir die KI-Chatbots, die Unternehmen in Groitzsch und dem Landkreis Leipzig bei der täglichen Kundenkommunikation entlasten. Ob Handwerksbetrieb, Arztpraxis oder lokaler Dienstleister: Standardfragen laufen automatisch, damit Ihr Team sich auf die eigentliche Arbeit konzentrieren kann.',
    paragraphs: [
      'Groitzsch ist geprägt von Betrieben, die ihre Arbeit ernst nehmen – Handwerk, Dienstleistung, Gesundheitsversorgung, lokaler Handel. Die Kundschaft erwartet schnelle Antworten, ob es um Verfügbarkeit, Öffnungszeiten oder Terminanfragen geht. Gleichzeitig ist das Team oft unterwegs, im Einsatz oder im Gespräch. Ein KI-Chatbot auf Ihrer Website fängt genau diese Standardanfragen ab: Er beantwortet häufige Fragen sofort, erfasst Kontaktdaten und leitet komplexe Anliegen an Ihr Team weiter.',
      'Der Vorteil für Groitzscher Unternehmen: Wir sind direkt vor Ort. Das Erstgespräch kann bei Ihnen im Betrieb oder bei uns am Neuer Weg stattfinden. Gemeinsam analysieren wir, welche Fragen Ihre Kunden am häufigsten stellen, wo Engpässe in der Kommunikation entstehen und welche Abläufe sich automatisieren lassen – ohne dass der persönliche Kontakt zu Ihren Kunden darunter leidet.',
      'Technisch passt sich der Chatbot an Ihre bestehende Website an – unabhängig davon, ob Sie WordPress, einen Baukasten oder ein individuelles System nutzen. Die Dialoge werden in Ihrem Ton gehalten: sachlich und klar für einen Handwerksbetrieb, freundlich und informativ für eine Praxis. Auf Wunsch verbinden wir den Chatbot mit Ihrem Kalender oder CRM, sodass Terminanfragen direkt im richtigen System landen.',
      'Für viele Betriebe in Groitzsch und den umliegenden Orten wie Pegau, Rötha oder Zwenkau beginnt die Zusammenarbeit mit einem einzigen Use Case – etwa der Beantwortung der zehn häufigsten Kundenfragen. Von dort aus erweitern wir Schritt für Schritt: zusätzliche Themenfelder, WhatsApp-Integration, automatisierte Terminbuchung oder die Vorqualifizierung von Anfragen für Ihr Vertriebsteam.',
      'Als Unternehmen mit Hauptsitz in Groitzsch kennen wir die Strukturen vor Ort und die Anforderungen regionaler Betriebe. Wir denken nicht in abstrakten KI-Projekten, sondern in konkreten Lösungen für Ihren Arbeitsalltag. Kurze Wege, direkte Kommunikation und eine Betreuung, die über das Go-live hinausgeht – das ist unser Ansatz für Unternehmen direkt hier in Groitzsch.',
    ],
    faqs: [
      {
        q: 'Kann ich mir den Chatbot bei euch im Büro in Groitzsch zeigen lassen?',
        a: 'Ja, gerne. Vereinbaren Sie einen Termin bei uns am Neuer Weg 9a – wir zeigen Ihnen live, wie ein Chatbot für Ihr Unternehmen aussehen und funktionieren kann.',
      },
      {
        q: 'Eignet sich ein KI-Chatbot auch für kleine Betriebe in Groitzsch?',
        a: 'Gerade kleine Betriebe profitieren besonders, weil jede eingesparte Stunde direkt spürbar ist. Ein Chatbot übernimmt Standardfragen, damit Sie und Ihr Team sich auf die eigentliche Arbeit konzentrieren können.',
      },
      {
        q: 'Wie schnell ist ein Chatbot für mein Groitzscher Unternehmen einsatzbereit?',
        a: 'Ein erster produktiver Chatbot mit den wichtigsten Dialogen ist in der Regel innerhalb von zwei bis drei Wochen live. Da wir vor Ort sind, geht die Abstimmung besonders schnell.',
      },
      {
        q: 'Funktioniert der Chatbot auch außerhalb der Geschäftszeiten?',
        a: 'Ja, rund um die Uhr. Gerade abends und am Wochenende gehen viele Anfragen ein – der Chatbot beantwortet sie sofort und dokumentiert alles für Ihr Team.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für ein Unternehmen in Groitzsch?',
        a: 'Die Kosten hängen vom Umfang ab. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein transparentes Angebot – ohne versteckte Kosten.',
      },
    ],
    highlights: [
      'Direkt vom Hauptsitz in Groitzsch – persönliche Betreuung vor Ort',
      'Automatische Beantwortung häufiger Kundenfragen rund um die Uhr',
      'Integration in Website, Kalender und CRM',
      'Schrittweise Erweiterung nach Ihrem Bedarf',
    ],
  },

  'groitzsch.telefonassistenten': {
    regionSlug: 'groitzsch',
    regionName: 'Groitzsch',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Groitzsch – Pixel Kraftwerk sorgt direkt vom Hauptsitz dafür, dass kein Anruf mehr verloren geht.',
    intro:
      'Das Telefon klingelt, aber Sie sind gerade beim Kunden, auf der Baustelle oder im Behandlungszimmer – eine Situation, die viele Betriebe in Groitzsch täglich erleben. Unser Telefonassistent nimmt Anrufe automatisch entgegen, erfasst Anliegen und dokumentiert alles strukturiert, damit Sie in Ruhe zurückrufen können, ohne Informationen zu verlieren.',
    paragraphs: [
      'In Groitzsch und dem Umland sind viele Unternehmen so aufgestellt, dass eine dauerhafte Telefonbesetzung schlicht unrealistisch ist. Der Chef ist gleichzeitig Handwerker, Berater und Ansprechpartner für alles. Wenn dann ein Neukunde anruft und niemand rangeht, ist die Chance oft vertan. Ein automatisierter Telefonassistent löst dieses Problem, ohne dass Sie jemanden einstellen müssen: Er nimmt Anrufe professionell entgegen, stellt die richtigen Fragen und leitet die Informationen direkt an Sie weiter.',
      'Die Einrichtung beginnt mit einem persönlichen Gespräch – bei uns am Neuer Weg oder bei Ihnen im Betrieb. Wir klären gemeinsam: Welche Arten von Anrufen kommen rein? Was muss sofort weitergeleitet werden, was kann warten? Welche Informationen brauchen Sie für einen qualifizierten Rückruf? Auf dieser Basis erstellen wir einen dialogbasierten Ablauf, der zu Ihrem Betrieb passt.',
      'Der Assistent lässt sich mit Ihrem Kalender, Ihrer Branchensoftware oder Ihrem CRM verbinden. Termine werden direkt gebucht, Rückrufwünsche mit allen relevanten Details dokumentiert und bei Bedarf Bestätigungen an Ihre Kunden verschickt. So entsteht aus einem verpassten Anruf ein sauber erfasster Lead, dem Sie gezielt nachgehen können.',
      'Für Groitzscher Betriebe, die auch Kunden in Pegau, Rötha, Böhlen oder Zwenkau bedienen, kann der Assistent standortbezogene Informationen geben – etwa Anfahrtsbeschreibungen, Verfügbarkeit an verschiedenen Einsatzorten oder spezifische Leistungen je nach Region. So wirkt Ihr Unternehmen auch am Telefon professionell und gut organisiert.',
      'Da wir selbst in Groitzsch sitzen, sind Anpassungen und Optimierungen besonders unkompliziert. Wenn sich Ihre Abläufe ändern – neue Öffnungszeiten, ein zusätzlicher Service, eine saisonale Aktion – passen wir den Assistenten zeitnah an. Viele unserer Groitzscher Kunden schätzen diese direkte, schnelle Zusammenarbeit ohne lange Ticket-Schleifen.',
    ],
    faqs: [
      {
        q: 'Ersetzt der Telefonassistent meine persönliche Erreichbarkeit in Groitzsch?',
        a: 'Nein. Der Assistent übernimmt Standardanfragen und dokumentiert Anliegen. Für persönliche Beratung, Notfälle oder komplexe Gespräche bleibt Ihr Team zuständig – aber ohne ständig durch Routineanrufe unterbrochen zu werden.',
      },
      {
        q: 'Wie reagieren Kunden auf einen automatisierten Telefonassistenten?',
        a: 'Positiv, wenn die Ansprache professionell und wertschätzend ist. Kunden schätzen es, dass ihr Anliegen sofort aufgenommen wird – das ist besser, als gar nicht durchzukommen oder in der Warteschlange zu hängen.',
      },
      {
        q: 'Kann der Assistent auch Termine für mein Groitzscher Unternehmen vereinbaren?',
        a: 'Ja. Wir verbinden den Assistenten mit Ihrem Kalender, sodass direkt im Gespräch freie Slots angeboten und gebucht werden können – inklusive automatischer Bestätigungen.',
      },
      {
        q: 'Was passiert bei einem echten Notfall – wird der Anruf dann weitergeleitet?',
        a: 'Ja. Im Dialog legen wir gemeinsam fest, welche Fälle eine sofortige Weiterleitung erfordern. Der Assistent erkennt diese Situationen und verbindet direkt durch oder benachrichtigt Sie umgehend.',
      },
      {
        q: 'Wie schnell kann der Telefonassistent in Groitzsch live gehen?',
        a: 'In der Regel innerhalb von zwei bis drei Wochen. Da wir direkt vor Ort sind, geht die Abstimmung schnell und unkompliziert.',
      },
    ],
    highlights: [
      'Keine verpassten Anrufe mehr – auch bei Abwesenheit',
      'Persönliche Einrichtung direkt vor Ort in Groitzsch',
      'Anbindung an Kalender, CRM und Branchensoftware',
      'Schnelle Anpassungen bei Änderungen im Betriebsablauf',
    ],
  },

  'groitzsch.automatisierungen': {
    regionSlug: 'groitzsch',
    regionName: 'Groitzsch',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Groitzsch – Pixel Kraftwerk verbindet Ihre Tools und automatisiert wiederkehrende Abläufe direkt vom Hauptsitz.',
    intro:
      'Viele Unternehmen in Groitzsch arbeiten mit einem Mix aus Werkzeugen: Kalender, E-Mail, vielleicht ein CRM, dazu Branchensoftware und Excel-Tabellen. Daten werden zwischen diesen Systemen manuell hin und her kopiert – zeitaufwendig und fehleranfällig. Wir automatisieren genau diese Zwischenschritte, direkt von unserem Standort am Neuer Weg.',
    paragraphs: [
      'Groitzsch ist ein Ort, an dem viele Betriebe mit schlanken Teams hohe Qualität liefern. Umso mehr fällt ins Gewicht, wenn Arbeitszeit für Verwaltungsaufgaben draufgeht, die eigentlich automatisch laufen könnten: Anfragen aus dem Kontaktformular manuell ins CRM übertragen, Terminbestätigungen einzeln versenden, Angebote per Copy-Paste zusammenstellen. Automatisierungen beseitigen diese Reibungsverluste und schaffen Kapazität für die Arbeit, die wirklich zählt.',
      'Im Erstgespräch – bei uns am Neuer Weg oder bei Ihnen im Betrieb – schauen wir gemeinsam auf Ihren Arbeitsalltag: Welche Aufgaben wiederholen sich täglich? Wo gehen Informationen verloren? Was nervt Ihr Team am meisten? Daraus identifizieren wir zwei bis drei Prozesse mit dem größten Hebel und setzen dort zuerst an. Typische Startpunkte: automatische Weiterleitung von Website-Anfragen, Terminbuchung mit Kalenderanbindung, Follow-up-Mails nach Erstkontakt.',
      'Technisch verbinden wir die Tools, die Sie bereits nutzen. CRM, Kalender, Branchensoftware, E-Mail-Postfach – wir schaffen Brücken, damit Daten automatisch dorthin fließen, wo sie gebraucht werden. Kein Copy-Paste, keine Medienbrüche. Falls eine direkte Schnittstelle fehlt, nutzen wir Automatisierungsplattformen als Zwischenlösung. Das Ergebnis: durchgängige Abläufe statt isolierter Tools.',
      'Automatisierungen wirken am stärksten im Zusammenspiel mit anderen Bausteinen. Wenn ein Chatbot auf Ihrer Website Anfragen erfasst, die Automatisierung diese ins CRM weiterleitet und gleichzeitig eine Bestätigung verschickt, entsteht ein System, das vom ersten Kontakt bis zur Terminbestätigung ohne manuellen Eingriff funktioniert. Für Groitzscher Betriebe, die auch Kunden im Landkreis Leipzig oder in Leipzig selbst betreuen, lassen sich standortbezogene Abläufe einbauen.',
      'Als direkter Nachbar profitieren Sie von besonders kurzen Kommunikationswegen. Anpassungen besprechen wir bei einem Kaffee im Büro, neue Workflows testen wir gemeinsam in Echtzeit, und wenn sich Ihre Anforderungen ändern, reagieren wir schnell – ohne Wartezeiten auf Support-Tickets. Viele Groitzscher Unternehmen starten mit einem einzelnen Workflow und erweitern nach wenigen Wochen auf drei bis fünf weitere, weil der Nutzen sofort spürbar ist.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in Groitzsch am schnellsten automatisieren?',
        a: 'Typische Quick Wins: automatische Weiterleitung von Kontaktformularen ins CRM, Terminbestätigungen mit Kalenderanbindung, Follow-up-Mails nach Erstkontakt und die Synchronisierung von Kundendaten zwischen verschiedenen Tools.',
      },
      {
        q: 'Muss ich meine Software wechseln?',
        a: 'Nein. Wir arbeiten mit Ihren vorhandenen Systemen und verbinden sie sinnvoll. Ein Wechsel ist nur dann nötig, wenn das bestehende Tool keine Schnittstellen bietet oder technisch veraltet ist.',
      },
      {
        q: 'Wie schnell sind erste Automatisierungen produktiv?',
        a: 'Der erste Workflow ist in der Regel innerhalb von zwei Wochen live. Da wir direkt in Groitzsch sitzen, entfallen lange Abstimmungsschleifen.',
      },
      {
        q: 'Lohnt sich Automatisierung auch für einen Ein-Personen-Betrieb?',
        a: 'Gerade dann. Jede automatisch erledigte Aufgabe gibt Ihnen direkt Zeit zurück. Ob automatische Antwort auf Website-Anfragen oder Terminbuchung ohne Telefonat – die Wirkung ist sofort spürbar.',
      },
      {
        q: 'Kann ich Automatisierungen mit einem Chatbot kombinieren?',
        a: 'Ja, und genau das empfehlen wir. Chatbot, Telefonassistent und Automatisierungen greifen ineinander und schaffen ein System, das Anfragen von der Erfassung bis zur Nachverfolgung durchgängig abwickelt.',
      },
    ],
    highlights: [
      'Direkte Betreuung vom Hauptsitz in Groitzsch – keine Umwege',
      'Integration in Ihre vorhandenen Tools ohne Systemwechsel',
      'Sofort spürbare Entlastung bei wiederkehrenden Aufgaben',
      'Skalierbar vom ersten Workflow bis zum vollständigen Prozess-Setup',
    ],
  },

  'groitzsch.webseiten': {
    regionSlug: 'groitzsch',
    regionName: 'Groitzsch',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Moderne Webseiten für Unternehmen in Groitzsch im Mietmodell – direkt von Pixel Kraftwerk vor Ort. Schnell, mobiloptimiert und ohne hohe Startkosten.',
    intro:
      'Wenn Kunden in Groitzsch oder dem Landkreis Leipzig nach einem Anbieter suchen, landen sie fast immer zuerst auf der Webseite. Ist die veraltet, langsam oder auf dem Handy kaum nutzbar, geht der Kontakt verloren. Wir erstellen direkt von unserem Standort am Neuer Weg moderne Webseiten im Mietmodell – professionell, schnell und ohne große Einmalinvestition.',
    paragraphs: [
      'Viele Betriebe in Groitzsch haben eine Webseite, die irgendwann mal „gemacht wurde" und seitdem kaum angefasst wird. Die Folge: veraltetes Design, fehlende mobile Optimierung, keine Kontaktmöglichkeiten außer einer E-Mail-Adresse – und Kunden, die stattdessen beim Mitbewerber landen. Unser Mietmodell macht es einfach, das zu ändern: planbare monatliche Kosten statt hoher Einmalzahlung, inklusive Design, Hosting, Sicherheit und laufender Betreuung.',
      'Jede Webseite wird individuell für Ihr Unternehmen konzipiert. In einem persönlichen Gespräch – direkt bei uns in Groitzsch oder bei Ihnen – klären wir, was Ihre Kunden erwarten, welche Informationen auf die Startseite gehören und wie der Weg vom ersten Eindruck zur Kontaktaufnahme möglichst kurz wird. Dabei achten wir auf saubere Struktur, schnelle Ladezeit und eine Darstellung, die auf jedem Gerät funktioniert.',
      'Auf Wunsch integrieren wir direkt einen KI-Chatbot, ein Terminbuchungssystem oder automatisierte Kontaktformulare. So wird Ihre Webseite nicht nur Visitenkarte, sondern ein aktiver Kanal für Anfragen – auch abends und am Wochenende, wenn Ihr Betrieb geschlossen ist. Für Groitzscher Unternehmen mit saisonalem Geschäft lassen sich Inhalte und Angebote flexibel anpassen, ohne dass Sie an den Code müssen.',
      'Schon bei der Erstellung legen wir das Fundament für gute Auffindbarkeit bei Google: saubere URLs, Meta-Tags, strukturierte Daten und optimierte Ladegeschwindigkeit. Für Betriebe in Groitzsch, die bei Suchanfragen wie „Elektriker Groitzsch" oder „Physiotherapie Groitzsch" gefunden werden wollen, bieten wir ergänzend gezielte lokale SEO-Pakete an.',
      'Der größte Vorteil für Groitzscher Unternehmen: Wir sind Ihr Nachbar. Änderungswünsche besprechen wir persönlich, Anpassungen setzen wir in kurzer Frist um. Kein Ticketsystem, kein anonymer Support – ein Anruf oder eine Nachricht genügt. Viele unserer Groitzscher Kunden schätzen genau diese Kombination aus professioneller Webentwicklung und der Erreichbarkeit eines lokalen Partners.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite im Mietmodell für ein Groitzscher Unternehmen?',
        a: 'Die monatlichen Kosten richten sich nach Umfang und Funktionen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein transparentes Angebot – direkt bei uns am Neuer Weg oder bei Ihnen.',
      },
      {
        q: 'Kann ich meine bestehende Domain behalten?',
        a: 'Ja. Wir übernehmen den technischen Umzug Ihrer Domain und stellen sicher, dass E-Mail und Erreichbarkeit durchgehend funktionieren.',
      },
      {
        q: 'Wie lange dauert es, bis die Webseite online ist?',
        a: 'Typischerweise drei bis fünf Wochen. Da wir direkt vor Ort sind, geht die Abstimmung zu Inhalten und Design besonders schnell.',
      },
      {
        q: 'Wird meine Webseite auch für Google optimiert?',
        a: 'Grundlegende SEO-Maßnahmen sind bei jeder Webseite dabei. Für eine gezielte lokale SEO-Strategie bieten wir ergänzende Pakete an – ideal, wenn Sie in Groitzsch und dem Landkreis Leipzig besser gefunden werden wollen.',
      },
      {
        q: 'Kann ich selbst Inhalte ändern?',
        a: 'Wenn gewünscht, ja. Alternativ übernehmen wir Anpassungen für Sie – im Mietmodell sind regelmäßige Änderungen bereits enthalten. Die meisten Groitzscher Kunden nutzen diesen Service.',
      },
    ],
    highlights: [
      'Persönliche Beratung und Betreuung direkt in Groitzsch',
      'Mietmodell ohne hohe Einmalkosten – planbar und flexibel',
      'Mobiloptimiert, schnell und suchmaschinenfreundlich',
      'Schnelle Anpassungen durch kurze Wege vom Hauptsitz',
    ],
  },

  'groitzsch.seo-top-3': {
    regionSlug: 'groitzsch',
    regionName: 'Groitzsch',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'Lokale SEO für Unternehmen in Groitzsch – Pixel Kraftwerk bringt Sie direkt vom Hauptsitz in die Top 3 bei Google für Ihre wichtigsten Suchbegriffe.',
    intro:
      'Wenn jemand „Dachdecker Groitzsch", „Friseur Groitzsch" oder „Physiotherapie Groitzsch" googelt, entscheiden die ersten Ergebnisse, wer den Auftrag bekommt. Wer nicht auf Seite eins steht, existiert für viele Suchende nicht. Wir bringen Groitzscher Unternehmen gezielt in die Top-3-Positionen – mit einer Strategie, die auf lokale Suchbegriffe und den Wettbewerb im Landkreis Leipzig abgestimmt ist.',
    paragraphs: [
      'Groitzsch ist eine Kleinstadt, aber die Google-Suche funktioniert hier genauso wie in der Großstadt: Wer oben steht, bekommt die Anfragen. Für viele lokale Suchbegriffe in Groitzsch und dem Landkreis Leipzig ist der Wettbewerb überschaubar – das bedeutet realistische Chancen auf eine Top-3-Platzierung, wenn die richtigen Maßnahmen ergriffen werden. Genau hier setzen wir an.',
      'Am Anfang steht eine Analyse: Welche Suchbegriffe nutzen Ihre potenziellen Kunden wirklich? Wie steht Ihre aktuelle Webseite da? Wer sind Ihre Mitbewerber in Groitzsch und den Nachbarorten? Auf dieser Basis entwickeln wir eine SEO-Strategie, die realistische Ziele setzt – mit Fokus auf die Keywords, die tatsächlich zu Anfragen und Aufträgen führen.',
      'Die Umsetzung umfasst drei Säulen: technische Optimierung Ihrer Webseite (Ladezeit, Struktur, Meta-Daten), Optimierung Ihres Google-Business-Profils (Kategorien, Beschreibung, Fotos, Bewertungsstrategie) und den Aufbau lokaler Autorität durch konsistente Einträge in Branchenverzeichnissen und zielgerichteten Content. Für Groitzscher Unternehmen ist das Google-Business-Profil besonders wichtig, weil es bestimmt, ob Sie im Local Pack – der Karte mit drei Ergebnissen – erscheinen.',
      'Als Unternehmen mit Hauptsitz in Groitzsch haben wir einen einzigartigen Vorteil: Wir kennen den lokalen Markt aus erster Hand, wissen welche Branchen hier aktiv sind und wie die Wettbewerbslandschaft aussieht. Das fließt direkt in die Keyword-Strategie ein. Statt generischer SEO-Maßnahmen setzen wir auf hyperlocale Optimierung – für Groitzsch, den Landkreis Leipzig und die angrenzenden Gebiete.',
      'SEO ist kein Einmal-Projekt. Über mindestens 90 Tage begleiten wir Sie mit Monitoring, monatlichen Reports und laufender Feinjustierung. Sie sehen transparent, wie sich Ihre Rankings entwickeln und welche Maßnahmen wirken. Da wir direkt vor Ort sind, können wir Änderungen und Anpassungen ohne Verzögerung umsetzen – ein Anruf genügt.',
      'Die stärksten Ergebnisse erzielen wir, wenn SEO, Webseite und Automatisierung zusammenspielen. Mehr Sichtbarkeit bei Google bringt mehr Besucher – aber erst ein überzeugender Webauftritt mit Chatbot oder automatisierter Anfragenerfassung macht aus Besuchern echte Kunden. Pixel Kraftwerk liefert alle Bausteine aus einer Hand, direkt aus Groitzsch.',
    ],
    faqs: [
      {
        q: 'Ist eine Top-3-Platzierung in Groitzsch realistisch?',
        a: 'Für die meisten lokalen Suchbegriffe ja. Der Wettbewerb in Groitzsch und dem Landkreis Leipzig ist geringer als in Großstädten, was die Chancen auf eine schnelle Top-Platzierung deutlich erhöht.',
      },
      {
        q: 'Wie lange dauert es, bis sich SEO in Groitzsch auswirkt?',
        a: 'Erste messbare Verbesserungen sehen wir typischerweise nach drei bis sechs Wochen. Für weniger umkämpfte Begriffe in Groitzsch geht es oft schneller als in Leipzig.',
      },
      {
        q: 'Optimiert ihr auch mein Google-Business-Profil?',
        a: 'Ja, das ist ein zentraler Bestandteil. Wir optimieren Kategorien, Beschreibung, Fotos und Beiträge und helfen beim Aufbau positiver Bewertungen – damit Sie im Local Pack für Groitzsch sichtbar werden.',
      },
      {
        q: 'Brauche ich dafür eine neue Webseite?',
        a: 'Nicht zwingend. Oft reicht die Optimierung der bestehenden Seite. Falls die Technik veraltet ist, können wir im Mietmodell eine neue Webseite gleich mit aufsetzen.',
      },
      {
        q: 'Was kostet lokales SEO für ein Groitzscher Unternehmen?',
        a: 'Die Kosten richten sich nach Umfang und Wettbewerb. Im kostenlosen Erstgespräch bei uns am Neuer Weg analysieren wir Ihre Ausgangslage und erstellen ein transparentes Angebot.',
      },
      {
        q: 'Können auch Nachbarorte wie Pegau oder Rötha mit optimiert werden?',
        a: 'Ja. Viele Groitzscher Betriebe bedienen auch Kunden in Pegau, Rötha, Böhlen und Zwenkau. Wir optimieren für alle relevanten Orte gleichzeitig, damit Sie im gesamten Landkreis gefunden werden.',
      },
    ],
    highlights: [
      'Hyperlocale SEO-Strategie direkt vom Hauptsitz in Groitzsch',
      'Google-Business-Profil-Optimierung für das Local Pack',
      'Transparente Reports und persönliche Betreuung vor Ort',
      'Erweiterbar auf Nachbarorte im Landkreis Leipzig',
    ],
  },

  'borna.ki-chatbots': {
    regionSlug: 'borna',
    regionName: 'Borna',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Borna – Pixel Kraftwerk automatisiert die Kundenkommunikation auf Website und Messenger für Handwerk, Praxen und Dienstleister im Landkreis Leipzig.',
    intro:
      'Rund um den Bornaer Marktplatz, das Reichstor und in den Gewerbegebieten am Stadtrand arbeiten Betriebe, die täglich mit denselben Fragen konfrontiert werden: Öffnungszeiten, Preise, Verfügbarkeit, Terminanfragen. Ein KI-Chatbot auf Ihrer Website beantwortet diese Fragen sofort – rund um die Uhr – und gibt Ihrem Team die Zeit zurück, die es für die eigentliche Arbeit braucht.',
    paragraphs: [
      'Borna ist die Kreisstadt des Landkreises Leipzig und ein wichtiger Anlaufpunkt für Handwerk, Gesundheitsversorgung, Einzelhandel und Dienstleistungen. Kunden erwarten schnelle Antworten – ob sie über Google, Social Media oder direkt auf Ihrer Website landen. Wenn niemand antwortet, klicken sie zum nächsten Anbieter. Ein KI-Chatbot schließt diese Lücke: Er reagiert in Sekunden, führt natürliche Dialoge und erfasst strukturiert alle Informationen, die Ihr Team für eine qualifizierte Rückmeldung braucht.',
      'Anders als ein statisches Kontaktformular führt der Chatbot ein echtes Gespräch: Er versteht Rückfragen, gibt passende Antworten und leitet komplexe Anliegen an die richtige Person weiter. Für eine Arztpraxis in Borna kann das bedeuten: Kassenleistungen erklären, freie Termine anzeigen und zur Online-Buchung weiterleiten. Für einen Handwerksbetrieb: Verfügbarkeit prüfen, Projektdetails aufnehmen und einen Rückruf-Termin vorschlagen.',
      'Die Einrichtung beginnt mit einer Analyse Ihrer häufigsten Kundenanfragen. Gemeinsam identifizieren wir, welche Fragen sich automatisieren lassen und wo der Übergang an eine menschliche Ansprechperson sinnvoll ist. Darauf aufbauend erstellen wir dialogbasierte Abläufe, die wir iterativ mit Ihnen testen – bis der Chatbot zuverlässig im Bornaer Arbeitsalltag funktioniert.',
      'Technisch lässt sich der Chatbot in jede bestehende Website einbinden. Auf Wunsch verbinden wir ihn mit Ihrem CRM, Kalender oder Ticketsystem. Für Bornaer Betriebe, die auch Kunden in Deutzen, Kitzscher, Regis-Breitingen oder Neukieritzsch bedienen, kann der Chatbot standortbezogene Informationen ausgeben – Anfahrt, Zuständigkeit, regionale Besonderheiten.',
      'Von unserem Standort in Groitzsch sind wir in rund 20 Minuten bei Ihnen in Borna. Das Erstgespräch kann bei Ihnen im Betrieb, bei uns am Neuer Weg oder per Videocall stattfinden. Viele Bornaer Unternehmen starten mit einem einzigen Use Case – den zehn häufigsten Kundenfragen oder der automatisierten Terminbuchung – und erweitern den Chatbot dann schrittweise um neue Themen und Kanäle.',
    ],
    faqs: [
      {
        q: 'Für welche Branchen in Borna eignen sich KI-Chatbots besonders?',
        a: 'Praxen, Handwerksbetriebe, Kanzleien, Einzelhändler, Gastronomie und Dienstleister in Borna – überall, wo regelmäßig dieselben Fragen eingehen und schnelle Reaktionszeiten den Unterschied machen.',
      },
      {
        q: 'Kann der Chatbot auch auf WhatsApp eingesetzt werden?',
        a: 'Ja. Neben der Website lässt sich der Chatbot auf Messenger-Kanäle wie WhatsApp erweitern – besonders sinnvoll für Bornaer Betriebe mit Kunden, die lieber per Nachricht als per Telefon kommunizieren.',
      },
      {
        q: 'Was passiert, wenn der Chatbot eine Frage nicht beantworten kann?',
        a: 'Er leitet das Gespräch an Ihr Team weiter – per E-Mail, Ticket oder Benachrichtigung. Die bis dahin erfassten Informationen gehen nicht verloren.',
      },
      {
        q: 'Wie schnell ist ein KI-Chatbot für mein Bornaer Unternehmen einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel innerhalb von zwei bis vier Wochen live. Die Abstimmung geht durch unsere Nähe besonders schnell.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für ein Unternehmen in Borna?',
        a: 'Die Kosten hängen vom Umfang ab. Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot ohne versteckte Gebühren.',
      },
    ],
    highlights: [
      'Sofortige Beantwortung häufiger Kundenfragen rund um die Uhr',
      'Passgenau für Bornaer Branchen und regionale Anforderungen',
      'Integration in Website, Messenger, CRM und Kalender',
      'Persönliche Betreuung aus Groitzsch – in 20 Minuten bei Ihnen',
    ],
  },

  'borna.telefonassistenten': {
    regionSlug: 'borna',
    regionName: 'Borna',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Borna – Pixel Kraftwerk sorgt dafür, dass kein Anruf mehr verloren geht. Automatische Anrufannahme für Handwerk, Praxen und Dienstleister.',
    intro:
      'An Markttagen – Dienstag, Donnerstag und Samstag – und in den Stoßzeiten des Tagesgeschäfts klingelt bei vielen Bornaer Betrieben das Telefon, während das Team voll ausgelastet ist. Unser Telefonassistent nimmt Anrufe automatisch entgegen, erfasst Anliegen strukturiert und dokumentiert alles für einen qualifizierten Rückruf.',
    paragraphs: [
      'In Borna sind viele Unternehmen so aufgestellt, dass das Telefon „nebenbei" laufen muss: Der Chef ist gleichzeitig auf der Baustelle, am Behandlungsstuhl oder im Kundengespräch. Wenn dann ein Neukunde anruft und niemand rangeht, ist der Kontakt oft verloren. Ein automatisierter Telefonassistent löst dieses Problem zuverlässig: Er nimmt Anrufe professionell entgegen, stellt gezielte Fragen und leitet alle Informationen direkt an Sie weiter.',
      'Die Einrichtung beginnt mit einem persönlichen Gespräch – bei Ihnen in Borna oder bei uns in Groitzsch. Gemeinsam klären wir: Welche Arten von Anrufen kommen typischerweise rein? Was muss sofort weitergeleitet werden? Welche Informationen brauchen Sie für einen Rückruf? Daraus erstellen wir einen dialogbasierten Ablauf, der zu Ihrem Betrieb passt – sachlich für einen Handwerksbetrieb, freundlich-informativ für eine Praxis.',
      'Der Assistent lässt sich mit Ihrem Kalender, Ihrer Branchensoftware oder Ihrem CRM verbinden. Termine werden direkt gebucht, Rückrufwünsche mit allen Details dokumentiert und bei Bedarf Bestätigungen verschickt. So wird aus einem verpassten Anruf ein sauber erfasster Lead, dem Sie in Ruhe nachgehen können.',
      'Für Bornaer Betriebe, die auch Kunden in Deutzen, Kitzscher, Regis-Breitingen oder Neukieritzsch bedienen, kann der Assistent standortbezogene Informationen geben – Einsatzgebiete, Verfügbarkeit vor Ort, Anfahrtshinweise. So wirkt Ihr Unternehmen auch am Telefon gut organisiert und professionell.',
      'Von Groitzsch nach Borna sind es rund 20 Minuten. Wenn sich Ihre Abläufe ändern – neue Öffnungszeiten, ein zusätzlicher Service, eine saisonale Aktion – passen wir den Assistenten zeitnah an. Viele unserer Bornaer Kunden schätzen diese kurzen Wege und die direkte, unkomplizierte Zusammenarbeit.',
    ],
    faqs: [
      {
        q: 'Ersetzt der Telefonassistent meine persönliche Erreichbarkeit in Borna?',
        a: 'Nein. Der Assistent übernimmt Standardanfragen und dokumentiert Anliegen. Für persönliche Beratung und komplexe Gespräche bleibt Ihr Team zuständig – aber ohne ständige Unterbrechungen durch Routineanrufe.',
      },
      {
        q: 'Kann der Assistent auch Termine für meinen Bornaer Betrieb vereinbaren?',
        a: 'Ja. Wir verbinden den Assistenten mit Ihrem Kalender, sodass direkt im Gespräch freie Slots angeboten und gebucht werden – inklusive automatischer Bestätigungen.',
      },
      {
        q: 'Wie reagieren Kunden auf einen automatisierten Telefonassistenten?',
        a: 'Positiv, wenn die Ansprache professionell ist. Kunden schätzen es, dass ihr Anliegen sofort aufgenommen wird – das ist besser, als gar nicht durchzukommen.',
      },
      {
        q: 'Was passiert bei einem echten Notfall?',
        a: 'Im Dialog legen wir fest, welche Fälle sofort weitergeleitet werden. Der Assistent erkennt diese Situationen und verbindet direkt oder benachrichtigt Sie umgehend.',
      },
      {
        q: 'Wie schnell kann der Telefonassistent in Borna live gehen?',
        a: 'In der Regel innerhalb von zwei bis drei Wochen. Durch unsere Nähe geht die Abstimmung schnell und unkompliziert.',
      },
    ],
    highlights: [
      'Keine verpassten Anrufe mehr – auch bei Stoßzeiten und Markttagen',
      'Professionelle Anrufannahme rund um die Uhr',
      'Anbindung an Kalender, CRM und Branchensoftware',
      'Persönliche Einrichtung und Betreuung aus Groitzsch',
    ],
  },

  'borna.automatisierungen': {
    regionSlug: 'borna',
    regionName: 'Borna',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Borna – Pixel Kraftwerk verbindet Ihre Tools und bringt Ordnung in wiederkehrende Abläufe im Landkreis Leipzig.',
    intro:
      'In vielen Bornaer Betrieben laufen Prozesse noch über manuelle Zwischenschritte: Website-Anfragen werden in eine Tabelle kopiert, Terminbestätigungen einzeln getippt, Kundendaten zwischen verschiedenen Tools hin und her übertragen. Wir automatisieren genau diese Abläufe – zuverlässig, nachvollziehbar und ohne Ihr bestehendes System umzukrempeln.',
    paragraphs: [
      'Borna als Kreisstadt hat eine vielfältige Unternehmenslandschaft: vom Handwerksbetrieb über die Arztpraxis bis zum lokalen Dienstleister. Allen gemeinsam ist, dass im Alltag wiederkehrende Aufgaben Zeit und Nerven kosten: Follow-up-Mails vergessen, Leads nicht nachverfolgt, Angebote per Copy-Paste zusammengestellt. Automatisierungen beseitigen diese Fehlerquellen und schaffen Kapazität für die Arbeit, die wirklich zählt.',
      'Am Anfang steht kein technisches Konzept, sondern ein Gespräch über Ihren Arbeitsalltag. Welche Aufgaben wiederholen sich? Wo gehen Informationen verloren? Was kostet Ihr Team die meiste Zeit? Daraus identifizieren wir zwei bis drei Prozesse mit dem größten Hebel. Typische Einstiegspunkte für Bornaer Betriebe: automatische Weiterleitung von Kontaktformularen ins CRM, Terminbuchung mit Kalenderanbindung, Follow-up-Mails nach Erstkontakt.',
      'Technisch verbinden wir die Tools, die Sie bereits nutzen – CRM, Kalender, Branchensoftware, E-Mail. Daten fließen automatisch dorthin, wo sie gebraucht werden. Kein Copy-Paste, keine Medienbrüche. Das Ergebnis: durchgängige Abläufe statt isolierter Tools, die Ihr Team wirklich entlasten.',
      'Die stärkste Wirkung entsteht, wenn Automatisierungen mit anderen Bausteinen zusammenspielen: Ein Chatbot erfasst Anfragen auf der Website, die Automatisierung leitet sie ins CRM weiter und versendet eine Bestätigung, der Telefonassistent übernimmt Rückrufe außerhalb der Geschäftszeiten. Für Bornaer Unternehmen, die auch Kunden in Deutzen, Kitzscher oder Regis-Breitingen betreuen, lassen sich standortbezogene Abläufe einbauen.',
      'Von Groitzsch nach Borna sind es rund 20 Minuten. Anpassungen besprechen wir persönlich, neue Workflows testen wir gemeinsam und wenn sich Ihre Anforderungen ändern, reagieren wir schnell. Viele Bornaer Unternehmen starten mit einem einzigen Workflow und erweitern nach wenigen Wochen auf drei bis fünf weitere.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in Borna am schnellsten automatisieren?',
        a: 'Typische Quick Wins: automatische Weiterleitung von Kontaktformularen ins CRM, Terminbestätigungen, Follow-up-Mails und die Synchronisierung von Kundendaten zwischen verschiedenen Tools.',
      },
      {
        q: 'Muss ich meine Software dafür wechseln?',
        a: 'Nein. Wir arbeiten mit Ihren vorhandenen Systemen und verbinden sie sinnvoll. Ein Wechsel ist nur nötig, wenn das bestehende Tool keine Schnittstellen bietet.',
      },
      {
        q: 'Wie schnell sind erste Automatisierungen produktiv?',
        a: 'Der erste Workflow ist in der Regel innerhalb von zwei bis drei Wochen live. Durch unsere Nähe entfallen lange Abstimmungsschleifen.',
      },
      {
        q: 'Lohnt sich Automatisierung auch für kleine Bornaer Betriebe?',
        a: 'Gerade dann. Jede automatisch erledigte Aufgabe gibt Ihnen direkt Zeit zurück – ob automatische Antworten auf Anfragen oder Terminbuchung ohne Telefonat.',
      },
      {
        q: 'Was kostet eine Automatisierungslösung?',
        a: 'Die Kosten richten sich nach Umfang und Komplexität. Im kostenlosen Erstgespräch erstellen wir ein transparentes, individuelles Angebot.',
      },
    ],
    highlights: [
      'Sofort spürbare Entlastung bei wiederkehrenden Aufgaben',
      'Integration in vorhandene Tools – kein Systemwechsel nötig',
      'Skalierbar vom ersten Workflow bis zum vollständigen Prozess-Setup',
      'Persönliche Betreuung aus Groitzsch – in 20 Minuten bei Ihnen in Borna',
    ],
  },

  'borna.webseiten': {
    regionSlug: 'borna',
    regionName: 'Borna',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Moderne Webseiten für Unternehmen in Borna im Mietmodell – Pixel Kraftwerk erstellt schnelle, mobiloptimierte Seiten ohne hohe Startkosten.',
    intro:
      'Wer in Borna oder im Landkreis Leipzig nach einem Handwerker, einer Praxis oder einem Dienstleister sucht, landet fast immer zuerst auf der Webseite. Wenn die veraltet wirkt oder auf dem Handy kaum bedienbar ist, klicken Besuchende weiter. Wir erstellen moderne, schnelle Webseiten im Mietmodell – professionell, planbar und ohne hohe Einmalinvestition.',
    paragraphs: [
      'Viele Betriebe rund um den Bornaer Marktplatz und in den Gewerbegebieten haben Webseiten, die irgendwann „gemacht wurden" und seitdem kaum aktualisiert werden. Das Problem: veraltetes Design, keine mobile Optimierung, kaum Möglichkeiten zur Kontaktaufnahme außer einer E-Mail-Adresse – und potenzielle Kunden, die stattdessen beim Mitbewerber landen.',
      'Unser Mietmodell macht den Einstieg einfach: planbare monatliche Kosten statt hoher Einmalzahlung, inklusive Design, Hosting, Sicherheitsupdates und laufende Betreuung. Für Bornaer Betriebe – vom Handwerker bis zur Praxis – ist das oft der entscheidende Unterschied: professioneller Webauftritt ohne finanzielles Risiko.',
      'Jede Webseite wird individuell konzipiert. Im persönlichen Gespräch – bei Ihnen in Borna oder bei uns in Groitzsch – klären wir, was Ihre Kunden erwarten und wie der Weg vom ersten Eindruck zur Kontaktaufnahme möglichst kurz wird. Saubere Struktur, schnelle Ladezeit und eine Darstellung, die auf Smartphone, Tablet und Desktop gleichermaßen funktioniert.',
      'Auf Wunsch integrieren wir direkt einen KI-Chatbot, ein Terminbuchungssystem oder automatisierte Kontaktformulare. So wird Ihre Webseite zum aktiven Vertriebskanal, der Anfragen erfasst und weiterleitet – auch abends und am Wochenende. Bereits bei der Erstellung legen wir das Fundament für gute Google-Auffindbarkeit: saubere URLs, Meta-Tags, strukturierte Daten und optimierte Ladegeschwindigkeit.',
      'Von Groitzsch nach Borna sind es rund 20 Minuten. Änderungswünsche an Texten, Bildern oder Seitenstruktur setzen wir in kurzer Frist um – ein Anruf oder eine Nachricht genügt. Kein Ticketsystem, kein anonymer Support, sondern persönliche Betreuung für Ihr Bornaer Unternehmen.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite im Mietmodell für ein Bornaer Unternehmen?',
        a: 'Die monatlichen Kosten hängen vom Umfang ab. Im kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot, das Hosting, Design und Betreuung umfasst.',
      },
      {
        q: 'Kann ich meine bestehende Domain behalten?',
        a: 'Ja. Wir übernehmen den technischen Umzug und stellen sicher, dass E-Mail und Erreichbarkeit unterbrechungsfrei funktionieren.',
      },
      {
        q: 'Wie lange dauert es, bis die Webseite online ist?',
        a: 'Typischerweise drei bis sechs Wochen. Durch unsere Nähe geht die inhaltliche Abstimmung besonders schnell.',
      },
      {
        q: 'Wird meine Webseite auch für Google optimiert?',
        a: 'Grundlegende SEO-Maßnahmen sind bei jeder Webseite dabei. Für eine gezielte lokale SEO-Strategie bieten wir ergänzende Pakete an.',
      },
      {
        q: 'Kann ich einen Chatbot oder Terminbuchung einbauen lassen?',
        a: 'Ja, das ist eine unserer Kernkompetenzen. Chatbot, Terminbuchung oder automatisierte Formulare lassen sich nahtlos integrieren.',
      },
    ],
    highlights: [
      'Individuelles Design für Bornaer Unternehmen',
      'Mietmodell ohne hohe Einmalkosten – planbar und flexibel',
      'Mobiloptimiert, schnell und suchmaschinenfreundlich',
      'Persönliche Betreuung aus Groitzsch – kurze Wege, schnelle Anpassungen',
    ],
  },

  'borna.seo-top-3': {
    regionSlug: 'borna',
    regionName: 'Borna',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'Lokale SEO für Unternehmen in Borna – Pixel Kraftwerk bringt Sie in die Top 3 bei Google für die Suchbegriffe, die im Landkreis Leipzig wirklich Kunden bringen.',
    intro:
      'Wenn jemand „Elektriker Borna", „Zahnarzt Borna" oder „Friseur Borna" googelt, entscheiden die ersten drei Ergebnisse, wer den Auftrag bekommt. Wer dort nicht steht, wird übersehen. Wir bringen Bornaer Unternehmen gezielt in die Top-3-Positionen bei Google – mit einer Strategie, die auf lokale Suchanfragen im Landkreis Leipzig zugeschnitten ist.',
    paragraphs: [
      'Als Kreisstadt des Landkreises Leipzig ist Borna ein zentraler Anlaufpunkt für viele Branchen. Der Wettbewerb um lokale Google-Sichtbarkeit ist hier moderater als in Leipzig selbst – das bedeutet realistische Chancen auf eine Top-3-Platzierung, wenn die richtigen Maßnahmen ergriffen werden. Genau hier setzen wir an: mit datenbasierter Keyword-Analyse, technischer Optimierung und dem Aufbau lokaler Autoritätssignale.',
      'Am Anfang steht eine ehrliche Bestandsaufnahme: Wo steht Ihr Unternehmen in den Bornaer Suchergebnissen? Welche Keywords nutzen Ihre Kunden wirklich? Wie stark ist die Konkurrenz? Darauf aufbauend entwickeln wir eine SEO-Strategie mit Fokus auf die Suchbegriffe, die tatsächlich zu Anfragen führen – nicht auf abstrakte Ranking-Zahlen.',
      'Die Umsetzung umfasst drei Säulen: technische Onpage-Optimierung (Ladezeit, Struktur, Meta-Daten), Optimierung Ihres Google-Business-Profils (Kategorien, Fotos, Bewertungsstrategie) und den Aufbau lokaler Autorität durch konsistente Branchenverzeichnis-Einträge und zielgerichteten Content. Für Bornaer Unternehmen ist das Google-Business-Profil besonders entscheidend – es bestimmt, ob Sie im Local Pack erscheinen.',
      'Viele Bornaer Betriebe bedienen auch Kunden in Deutzen, Kitzscher, Regis-Breitingen und Neukieritzsch. Wir optimieren nicht nur für „Borna", sondern für alle relevanten Orte in Ihrem Einzugsgebiet. So werden Sie im gesamten südlichen Landkreis Leipzig gefunden, wenn potenzielle Kunden nach Ihren Leistungen suchen.',
      'SEO ist kein Einmal-Projekt. Über mindestens 90 Tage begleiten wir Sie mit Monitoring, monatlichen Reports und laufender Feinjustierung. Die stärksten Ergebnisse erzielen wir, wenn SEO, Webseite und Automatisierung zusammenspielen: Mehr Sichtbarkeit bringt mehr Besucher, ein Chatbot oder automatisierte Anfragenerfassung macht aus Besuchern echte Kunden. Pixel Kraftwerk liefert alles aus einer Hand.',
    ],
    faqs: [
      {
        q: 'Ist eine Top-3-Platzierung in Borna realistisch?',
        a: 'Für die meisten lokalen Suchbegriffe ja. Der Wettbewerb in Borna und dem Landkreis Leipzig ist geringer als in Leipzig selbst, was die Chancen deutlich erhöht.',
      },
      {
        q: 'Wie lange dauert es, bis sich SEO in Borna auswirkt?',
        a: 'Erste Verbesserungen zeigen sich typischerweise nach vier bis sechs Wochen. Für weniger umkämpfte Begriffe geht es oft schneller.',
      },
      {
        q: 'Optimiert ihr auch mein Google-Business-Profil?',
        a: 'Ja, das ist ein zentraler Bestandteil. Wir optimieren Kategorien, Fotos, Beiträge und helfen beim Aufbau positiver Bewertungen.',
      },
      {
        q: 'Können auch Nachbarorte wie Deutzen oder Kitzscher mit optimiert werden?',
        a: 'Ja. Wir optimieren für alle relevanten Orte in Ihrem Einzugsgebiet, damit Sie im gesamten Landkreis gefunden werden.',
      },
      {
        q: 'Was kostet lokales SEO für ein Bornaer Unternehmen?',
        a: 'Die Kosten richten sich nach Umfang und Wettbewerb. Im kostenlosen Erstgespräch analysieren wir Ihre Ausgangslage und erstellen ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Fokus auf Bornaer Suchbegriffe mit echtem Anfragenpotenzial',
      'Google-Business-Profil-Optimierung für das Local Pack',
      'Erweiterbar auf den gesamten Landkreis Leipzig',
      'Transparente Reports und persönliche Betreuung aus Groitzsch',
    ],
  },

  'markkleeberg.ki-chatbots': {
    regionSlug: 'markkleeberg',
    regionName: 'Markkleeberg',
    serviceSlug: 'ki-chatbots',
    serviceLabel: 'KI-Chatbots',
    metaDescription:
      'KI-Chatbots für Unternehmen in Markkleeberg – Pixel Kraftwerk automatisiert Ihre Kundenkommunikation auf Website und Messenger. Ideal für Dienstleister, Praxen und Tourismus am Neuseenland.',
    intro:
      'Markkleeberg liegt direkt am Leipziger Neuseenland und zieht ganzjährig Kunden und Besucher an – ob rund um den Markkleeberger See, den Kanupark oder den agra-Park. Für Unternehmen hier bedeutet das: Anfragen kommen in Wellen, oft zu Zeiten, in denen das Team ausgelastet ist. Ein KI-Chatbot fängt diese Anfragen sofort ab und gibt Ihrem Team den nötigen Freiraum.',
    paragraphs: [
      'Markkleeberg vereint Wohnqualität, Naherholung und eine lebendige Geschäftswelt. In den Ortsteilen Gaschwitz, Wachau, Zöbigker und Oetzsch sind Dienstleister, Praxen, Gastronomie und Freizeitbetriebe ansässig, die täglich mit wiederkehrenden Fragen konfrontiert werden: Öffnungszeiten, Verfügbarkeit, Preise, Anfahrt, Buchungsoptionen. Ein KI-Chatbot auf Ihrer Website beantwortet diese Fragen in Sekunden – professionell und rund um die Uhr.',
      'Anders als ein statisches FAQ passt sich der Chatbot an individuelle Eingaben an: Er führt natürliche Dialoge, versteht Rückfragen und leitet komplexe Anliegen an Ihr Team weiter. Für einen Gastronomiebetrieb am Markkleeberger See kann das bedeuten: Reservierungen aufnehmen, Speisekarten-Infos geben und Anfahrtswege beschreiben. Für eine Praxis in Markkleeberg-Mitte: Kassenleistungen erklären und zur Online-Terminbuchung weiterleiten.',
      'Die Einrichtung beginnt mit einer Analyse Ihrer häufigsten Kundenanliegen. Wir identifizieren gemeinsam, welche Fragen automatisiert beantwortet werden können und wo der persönliche Kontakt wichtig bleibt. Darauf aufbauend erstellen wir dialogbasierte Abläufe, die zu Ihrem Unternehmen und Ihrem Markkleeberger Publikum passen – in Tonalität, Inhalt und Tiefe.',
      'Technisch lässt sich der Chatbot in jede Website einbinden und auf Wunsch mit CRM, Kalender oder Buchungssystem verbinden. Für Markkleeberger Betriebe mit saisonalen Schwankungen – etwa Tourismus, Gastronomie oder Eventlocations am Kanupark – lassen sich Inhalte und Dialogpfade flexibel an die Saison anpassen.',
      'Von Groitzsch nach Markkleeberg sind es rund 20 Kilometer. Das Erstgespräch kann bei Ihnen vor Ort, bei uns am Neuer Weg oder per Videocall stattfinden. Viele Markkleeberger Unternehmen starten mit einem klar umrissenen Use Case und erweitern den Chatbot dann schrittweise um neue Themen, WhatsApp-Integration oder automatisierte Buchungsprozesse.',
    ],
    faqs: [
      {
        q: 'Für welche Branchen in Markkleeberg eignen sich KI-Chatbots besonders?',
        a: 'Gastronomie, Tourismus, Praxen, Dienstleister, Studios und Einzelhandel in Markkleeberg – besonders dort, wo saisonale Schwankungen und viele Erstanfragen zusammenkommen.',
      },
      {
        q: 'Kann der Chatbot auch Buchungen für Veranstaltungen oder Kurse aufnehmen?',
        a: 'Ja. Wir verbinden den Chatbot mit Ihrem Buchungs- oder Kalendersystem, sodass Reservierungen, Kursbuchungen oder Eventanfragen direkt im Dialog abgewickelt werden.',
      },
      {
        q: 'Lässt sich der Chatbot saisonal anpassen?',
        a: 'Ja. Für Betriebe am Markkleeberger See oder im Eventbereich passen wir Inhalte und Dialogpfade an die Saison an – mehr Outdoor-Infos im Sommer, andere Angebote im Winter.',
      },
      {
        q: 'Wie schnell ist ein KI-Chatbot für Markkleeberg einsatzbereit?',
        a: 'Ein erster produktiver Chatbot ist in der Regel innerhalb von zwei bis vier Wochen live.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für ein Markkleeberger Unternehmen?',
        a: 'Die Kosten hängen vom Umfang ab. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Sofortige Beantwortung von Kundenanfragen – auch in Stoßzeiten',
      'Saisonal anpassbar für Tourismus und Gastronomie am Neuseenland',
      'Integration in Website, Messenger, Kalender und Buchungssysteme',
      'Persönliche Betreuung aus Groitzsch für Markkleeberger Betriebe',
    ],
  },

  'markkleeberg.telefonassistenten': {
    regionSlug: 'markkleeberg',
    regionName: 'Markkleeberg',
    serviceSlug: 'telefonassistenten',
    serviceLabel: 'Telefonassistenten',
    metaDescription:
      'Telefonassistenten für Unternehmen in Markkleeberg – Pixel Kraftwerk sorgt für professionelle Anrufannahme, wenn Ihr Team ausgelastet ist.',
    intro:
      'In Markkleeberg gehen viele Anrufe genau dann ein, wenn es im Betrieb am vollsten ist – ob Praxis am Morgen, Gastronomie zur Mittagszeit oder Dienstleister mit vollem Kalender. Unser Telefonassistent nimmt Anrufe automatisch entgegen, erfasst alle Anliegen und dokumentiert sie strukturiert für Ihr Team.',
    paragraphs: [
      'Markkleeberg ist ein attraktiver Standort mit hoher Lebensqualität – und entsprechend vielen Dienstleistern, die um Kunden konkurrieren. Wer Anrufe verpasst, verliert potenzielle Aufträge an Mitbewerber. Ein automatisierter Telefonassistent stellt sicher, dass jeder Anruf professionell angenommen wird – auch außerhalb der Geschäftszeiten, in der Mittagspause oder wenn alle Leitungen belegt sind.',
      'Gemeinsam definieren wir den Ablauf: Welche Fragen werden gestellt? Welche Informationen brauchen Sie für einen Rückruf? Wann muss sofort durchgestellt werden? Daraus erstellen wir einen dialogbasierten Ablauf, der zu Ihrem Betrieb passt. Für Praxen in Markkleeberg-Mitte kann das Terminbuchung bedeuten, für einen Handwerksbetrieb in Gaschwitz die Erfassung von Projektanfragen.',
      'Der Assistent lässt sich mit Ihrem Kalender oder CRM verbinden. Terminanfragen werden direkt gebucht, Rückrufwünsche mit allen Details dokumentiert und bei Bedarf Bestätigungen an Ihre Kunden verschickt. Kein Zettelchaos, kein Vergessen – ein sauberer Prozess, der im Hintergrund läuft.',
      'Für Markkleeberger Betriebe mit touristischem Bezug – Gastronomie am See, Veranstaltungslocations im agra-Park, Bootsverleih am Kanupark – kann der Assistent saisonale Informationen geben: aktuelle Öffnungszeiten, Verfügbarkeit, Veranstaltungshinweise. So bleiben Sie auch in Spitzenzeiten professionell erreichbar.',
      'Von Groitzsch aus sind wir in rund 25 Minuten bei Ihnen in Markkleeberg. Anpassungen – neue Öffnungszeiten, zusätzliche Services, saisonale Änderungen – setzen wir schnell und unkompliziert um. Persönliche Betreuung statt anonymer Support-Hotline.',
    ],
    faqs: [
      {
        q: 'Ersetzt der Telefonassistent mein Empfangsteam in Markkleeberg?',
        a: 'Nein. Er übernimmt wiederkehrende Standardaufgaben und dokumentiert Anliegen. Für persönliche Gespräche und komplexe Beratung bleibt Ihr Team zuständig.',
      },
      {
        q: 'Kann der Assistent auch Reservierungen für Gastronomie am Markkleeberger See aufnehmen?',
        a: 'Ja. Wir verbinden den Assistenten mit Ihrem Buchungssystem, sodass Reservierungen direkt im Gespräch bestätigt werden können.',
      },
      {
        q: 'Wie reagieren Kunden auf den Assistenten?',
        a: 'Positiv, wenn die Ansprache professionell und wertschätzend ist. Kunden schätzen schnelle Erfassung ihres Anliegens – das ist besser, als mehrfach anzurufen.',
      },
      {
        q: 'Lässt sich der Assistent saisonal anpassen?',
        a: 'Ja. Inhalte, Begrüßung und verfügbare Optionen können wir jederzeit an die Saison anpassen – ideal für Tourismus und Gastronomie.',
      },
      {
        q: 'Wie schnell kann der Telefonassistent in Markkleeberg live gehen?',
        a: 'In der Regel innerhalb von zwei bis drei Wochen nach dem gemeinsamen Abstimmungsgespräch.',
      },
    ],
    highlights: [
      'Keine verpassten Anrufe – auch in Stoßzeiten und Saison-Peaks',
      'Saisonal anpassbar für Tourismus und Gastronomie',
      'Anbindung an Kalender, CRM und Buchungssysteme',
      'Persönliche Einrichtung und Betreuung aus Groitzsch',
    ],
  },

  'markkleeberg.automatisierungen': {
    regionSlug: 'markkleeberg',
    regionName: 'Markkleeberg',
    serviceSlug: 'automatisierungen',
    serviceLabel: 'Automatisierungen',
    metaDescription:
      'Automatisierungen für Unternehmen in Markkleeberg – Pixel Kraftwerk verbindet Ihre Tools und automatisiert wiederkehrende Abläufe am Neuseenland.',
    intro:
      'Ob Praxis in Markkleeberg-Mitte, Dienstleister in Gaschwitz oder Gastronomiebetrieb am Markkleeberger See – überall entstehen im Alltag manuelle Zwischenschritte, die Zeit kosten: Anfragen kopieren, Termine bestätigen, Daten synchronisieren. Wir automatisieren genau diese Abläufe, damit Ihr Team sich auf Kunden und Qualität konzentrieren kann.',
    paragraphs: [
      'Markkleeberg bietet eine starke Mischung aus Wohn- und Geschäftsstandort. Für Unternehmen hier bedeutet das: hohe Kundenerwartungen an Service und Reaktionszeit, gleichzeitig begrenzte Kapazitäten im Team. Wenn Follow-up-Mails vergessen werden, Leads nicht nachverfolgt und Termine doppelt vergeben werden, liegt das selten an fehlender Motivation – sondern an fehlenden Systemen. Automatisierungen schaffen hier Ordnung und Verlässlichkeit.',
      'Im Erstgespräch – bei Ihnen in Markkleeberg oder per Videocall – analysieren wir Ihren Arbeitsalltag: Welche Aufgaben wiederholen sich? Wo gehen Informationen verloren? Daraus identifizieren wir die Prozesse mit dem größten Hebel. Typische Einstiegspunkte: automatische Erfassung von Website-Anfragen, Terminbestätigungen mit Kalenderanbindung, Follow-up-Sequenzen nach Erstkontakt.',
      'Wir verbinden die Tools, die Sie bereits nutzen – CRM, Kalender, Branchensoftware, E-Mail – zu durchgängigen Abläufen. Kein Copy-Paste zwischen Systemen, keine vergessenen Nachfassaktionen. Für Markkleeberger Betriebe mit saisonalem Geschäft lassen sich Workflows flexibel anpassen: mehr Automatisierung in der Hochsaison, andere Schwerpunkte im Winter.',
      'Die stärkste Wirkung entsteht im Zusammenspiel: Chatbot auf der Website erfasst Anfragen, Automatisierung leitet sie weiter und versendet Bestätigungen, Telefonassistent übernimmt Anrufe außerhalb der Geschäftszeiten. Für Markkleeberger Unternehmen entsteht so ein System, das vom ersten Kontakt bis zur Terminbestätigung durchgängig funktioniert.',
      'Von Groitzsch nach Markkleeberg sind es rund 20 Kilometer. Wir sind nah genug für persönliche Treffen und schnell genug für kurzfristige Anpassungen. Viele Markkleeberger Unternehmen starten mit einem Workflow und erweitern innerhalb weniger Wochen auf weitere Prozesse, weil der Nutzen sofort spürbar ist.',
    ],
    faqs: [
      {
        q: 'Welche Prozesse lassen sich in Markkleeberg am schnellsten automatisieren?',
        a: 'Typische Quick Wins: automatische Weiterleitung von Kontaktformularen, Terminbestätigungen, Follow-up-Mails und die Synchronisierung von Kundendaten zwischen verschiedenen Tools.',
      },
      {
        q: 'Muss ich meine bestehende Software wechseln?',
        a: 'Nein. Wir verbinden Ihre vorhandenen Systeme und schaffen Brücken zwischen Tools, statt alles auszutauschen.',
      },
      {
        q: 'Lassen sich Workflows saisonal anpassen?',
        a: 'Ja. Für Betriebe mit saisonalem Geschäft am Neuseenland passen wir Automatisierungen flexibel an die aktuelle Auslastung an.',
      },
      {
        q: 'Wie schnell sind erste Automatisierungen produktiv?',
        a: 'Der erste Workflow ist in der Regel innerhalb von zwei bis drei Wochen live.',
      },
      {
        q: 'Was kostet eine Automatisierungslösung für Markkleeberg?',
        a: 'Die Kosten richten sich nach Umfang und Komplexität. Im kostenlosen Erstgespräch erstellen wir ein transparentes Angebot.',
      },
    ],
    highlights: [
      'Sofort spürbare Entlastung bei wiederkehrenden Aufgaben',
      'Saisonal anpassbar für Tourismus und Gastronomie',
      'Integration in vorhandene Tools ohne Systemwechsel',
      'Persönliche Betreuung aus Groitzsch für Markkleeberger Betriebe',
    ],
  },

  'markkleeberg.webseiten': {
    regionSlug: 'markkleeberg',
    regionName: 'Markkleeberg',
    serviceSlug: 'webseiten',
    serviceLabel: 'Webseiten',
    metaDescription:
      'Moderne Webseiten für Unternehmen in Markkleeberg im Mietmodell – Pixel Kraftwerk erstellt schnelle, mobiloptimierte Seiten für Dienstleister, Praxen und Gastronomiebetriebe am Neuseenland.',
    intro:
      'Ob Gastronomie am Markkleeberger See, Praxis in Oetzsch oder Handwerk in Gaschwitz – wer in Markkleeberg online nicht professionell auftritt, verliert Kunden an Mitbewerber. Wir erstellen moderne Webseiten im Mietmodell: individuell gestaltet, mobiloptimiert und ohne hohe Einmalkosten.',
    paragraphs: [
      'Markkleeberg ist direkt an Leipzig angebunden und zieht eine anspruchsvolle Kundschaft an. Das gilt auch für den digitalen Auftritt: Veraltete Webseiten mit Fax-Nummern und Stock-Fotos überzeugen hier niemanden mehr. Eine moderne, schnelle Webseite ist das Minimum – und gleichzeitig der effektivste Weg, um neue Kunden zu gewinnen.',
      'Unser Mietmodell macht den Einstieg einfach: planbare monatliche Kosten statt hoher Einmalinvestition, inklusive Design, Entwicklung, Hosting, Sicherheitsupdates und laufende Betreuung. Für Markkleeberger Betriebe – von der Physiotherapie über die Gastronomie bis zum Architekturbüro – ist das eine Investition mit kalkulierbarem Risiko und sofort sichtbarem Ergebnis.',
      'Jede Webseite wird individuell konzipiert. Im persönlichen Gespräch klären wir, was Ihr Markkleeberger Publikum erwartet: welche Informationen sofort sichtbar sein müssen, wie der Weg zur Kontaktaufnahme aussieht und welche Besonderheiten Ihr Standort am Neuseenland mit sich bringt. Saisonale Angebote, Veranstaltungskalender oder Buchungsfunktionen? Alles möglich.',
      'Auf Wunsch integrieren wir direkt einen KI-Chatbot, Terminbuchung oder automatisierte Kontaktformulare. So wird Ihre Webseite zum aktiven Vertriebskanal. Schon bei der Erstellung achten wir auf saubere Technik, schnelle Ladezeiten und Suchmaschinenfreundlichkeit – damit Ihre Seite bei Suchanfragen wie „Restaurant Markkleeberg" oder „Zahnarzt Markkleeberg" sichtbar wird.',
      'Von Groitzsch aus betreuen wir Markkleeberger Unternehmen persönlich. Änderungswünsche setzen wir zeitnah um, Fragen klären wir direkt – kein Ticketsystem, kein Warten. Viele unserer Kunden in Markkleeberg schätzen diese Mischung aus professioneller Webentwicklung und lokaler Erreichbarkeit.',
    ],
    faqs: [
      {
        q: 'Was kostet eine Webseite im Mietmodell für ein Markkleeberger Unternehmen?',
        a: 'Die monatlichen Kosten hängen vom Umfang ab. Im kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot, das Hosting, Design und Betreuung umfasst.',
      },
      {
        q: 'Kann ich saisonale Inhalte flexibel ändern?',
        a: 'Ja. Gerade für Betriebe am Markkleeberger See oder im agra-Park passen wir Inhalte saisonal an – im Mietmodell sind regelmäßige Änderungen enthalten.',
      },
      {
        q: 'Wie lange dauert es, bis die Webseite online ist?',
        a: 'Typischerweise drei bis fünf Wochen, je nach Umfang und Geschwindigkeit bei der inhaltlichen Abstimmung.',
      },
      {
        q: 'Wird meine Webseite für Google optimiert?',
        a: 'Grundlegende SEO-Maßnahmen sind bei jeder Webseite dabei. Für gezielte lokale SEO bieten wir ergänzende Pakete an.',
      },
      {
        q: 'Lässt sich ein Chatbot oder eine Buchungsfunktion integrieren?',
        a: 'Ja. Chatbot, Terminbuchung und automatisierte Formulare lassen sich nahtlos einbauen – ideal, um Anfragen auch außerhalb der Geschäftszeiten zu erfassen.',
      },
    ],
    highlights: [
      'Individuelles Design für den Markkleeberger Markt',
      'Mietmodell ohne hohe Einmalkosten – planbar und flexibel',
      'Saisonale Anpassungen für Tourismus und Gastronomie',
      'Persönliche Betreuung aus Groitzsch mit kurzen Reaktionszeiten',
    ],
  },

  'markkleeberg.seo-top-3': {
    regionSlug: 'markkleeberg',
    regionName: 'Markkleeberg',
    serviceSlug: 'seo-top-3',
    serviceLabel: 'SEO: Top 3 in Google',
    metaDescription:
      'Lokale SEO für Unternehmen in Markkleeberg – Pixel Kraftwerk bringt Sie in die Top 3 bei Google für die Suchbegriffe, die rund um das Neuseenland wirklich Kunden bringen.',
    intro:
      'Wenn jemand „Friseur Markkleeberg", „Restaurant am Markkleeberger See" oder „Zahnarzt Markkleeberg" googelt, entscheiden die ersten Ergebnisse über die meisten Anfragen. Wer nicht auf Seite eins steht, wird übersehen. Wir bringen Markkleeberger Unternehmen gezielt in die Top-3-Positionen – mit einer lokalen SEO-Strategie, die auf Ihr Einzugsgebiet am Neuseenland zugeschnitten ist.',
    paragraphs: [
      'Markkleeberg profitiert von seiner Lage direkt an Leipzig und dem Neuseenland. Das bedeutet ein kaufkräftiges Publikum – aber auch Wettbewerb, weil Leipziger Anbieter oft für Markkleeberger Suchanfragen mitranken. Um hier in die Top 3 zu kommen, braucht es eine gezielte lokale SEO-Strategie, die Ihr Unternehmen als den relevantesten Anbieter in Markkleeberg positioniert.',
      'Am Anfang analysieren wir: Welche Suchbegriffe nutzen potenzielle Kunden in Markkleeberg? Wie ist Ihre aktuelle Position? Wer sind Ihre Mitbewerber – sowohl lokal als auch aus Leipzig? Darauf aufbauend entwickeln wir eine Strategie, die realistische Ziele setzt und auf die Keywords fokussiert, die tatsächlich zu Anfragen führen.',
      'Die Umsetzung umfasst technische Onpage-Optimierung, die vollständige Optimierung Ihres Google-Business-Profils – besonders wichtig für das Local Pack – und den Aufbau lokaler Autoritätssignale. Für Markkleeberg nutzen wir gezielt regionale Bezüge: Ortsteile wie Gaschwitz, Wachau und Zöbigker, Landmarks wie den Markkleeberger See, den Kanupark und den agra-Park.',
      'Viele Markkleeberger Betriebe bedienen auch Kunden in angrenzenden Gebieten – Leipzig-Süd, Zwenkau, Böhlen, Rötha. Wir optimieren nicht nur für „Markkleeberg", sondern für Ihr gesamtes Einzugsgebiet. So werden Sie überall gefunden, wo potenzielle Kunden nach Ihren Leistungen suchen.',
      'Über mindestens 90 Tage begleiten wir Sie mit Monitoring und monatlichen Reports. Die stärksten Ergebnisse erzielen wir, wenn SEO, Webseite und Automatisierung zusammenspielen: Mehr Google-Sichtbarkeit bringt mehr Besucher, ein überzeugender Webauftritt mit Chatbot macht aus Besuchern echte Anfragen. Pixel Kraftwerk liefert alle Bausteine aus einer Hand.',
    ],
    faqs: [
      {
        q: 'Ist eine Top-3-Platzierung in Markkleeberg realistisch?',
        a: 'Für viele lokale Suchbegriffe ja – besonders in Nischen, wo der Wettbewerb überschaubar ist. Vorab analysieren wir ehrlich, wo Top-3-Positionen realistisch sind und wo mehr Zeit nötig ist.',
      },
      {
        q: 'Wie unterscheidet sich SEO für Markkleeberg von SEO für Leipzig?',
        a: 'In Markkleeberg ist der lokale Wettbewerb oft geringer, dafür ranken Leipziger Anbieter häufig mit. Unsere Strategie positioniert Sie gezielt als lokalen Markkleeberger Anbieter – mit regionalen Bezügen und lokalen Autoritätssignalen.',
      },
      {
        q: 'Optimiert ihr auch mein Google-Business-Profil?',
        a: 'Ja. Kategorien, Beschreibung, Fotos, Beiträge und Bewertungsstrategie – alles wird optimiert, damit Sie im Local Pack für Markkleeberg sichtbar werden.',
      },
      {
        q: 'Wie lange dauert es, bis sich SEO auswirkt?',
        a: 'Erste messbare Verbesserungen sehen wir typischerweise nach vier bis acht Wochen. Stabile Top-Positionen können einige Monate dauern – wir setzen auf nachhaltige Maßnahmen.',
      },
      {
        q: 'Was kostet lokales SEO für Markkleeberg?',
        a: 'Die Kosten richten sich nach Umfang und Wettbewerb. Im kostenlosen Erstgespräch analysieren wir Ihre Ausgangslage und erstellen ein transparentes Angebot.',
      },
      {
        q: 'Können auch angrenzende Gebiete mit optimiert werden?',
        a: 'Ja. Wir optimieren für Ihr gesamtes Einzugsgebiet – Markkleeberg, Leipzig-Süd, Zwenkau, Böhlen und weitere Orte, die für Ihr Geschäft relevant sind.',
      },
    ],
    highlights: [
      'Fokus auf Markkleeberger Suchbegriffe mit regionalem Bezug',
      'Google-Business-Profil-Optimierung für das Local Pack',
      'Erweiterbar auf Leipzig-Süd und angrenzende Gebiete',
      'Transparente Reports und persönliche Betreuung aus Groitzsch',
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
        `Eine moderne Webseite ist gleichzeitig die Grundlage für gute Auffindbarkeit in Suchmaschinen. Bereits bei der Erstellung achten wir auf saubere Technik, schnelle Ladezeiten und suchmaschinenfreundliche Strukturen – damit Ihre Seite in ${regionName} und Umgebung bei Google sichtbar wird. In Kombination mit gezielter lokaler SEO-Optimierung wird Ihre Webseite zum stärksten Akquise-Kanal für Anfragen aus der Region.`,
        `Pixel Kraftwerk arbeitet aus Groitzsch heraus und betreut Unternehmen in ${regionName} und der gesamten Region persönlich. Das bedeutet kurze Wege, direkte Ansprechpartner und ein tiefes Verständnis für die lokalen Gegebenheiten. Ob Erstgespräch vor Ort oder Abstimmung per Videocall – wir passen uns Ihrem Alltag an und sorgen dafür, dass Ihre Webseite nicht nur technisch überzeugt, sondern auch Ihre regionale Identität widerspiegelt.`,
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
        {
          q: `Kann ich auf meiner Webseite auch einen Chatbot oder Automatisierungen einbinden?`,
          a: `Ja, das ist sogar eine unserer Stärken. Ihre Webseite lässt sich nahtlos mit einem KI-Chatbot, einem Terminbuchungssystem oder automatisierten Formularen verbinden. So werden Anfragen direkt erfasst und weiterverarbeitet – ohne manuellen Aufwand für Ihr Team.`,
        },
        {
          q: `Ist lokale SEO-Optimierung im Webseiten-Paket für ${regionName} enthalten?`,
          a: `Grundlegende SEO-Maßnahmen wie saubere Seitenstruktur, Meta-Tags und schnelle Ladezeiten sind bereits Teil jeder Webseite. Für eine gezielte lokale SEO-Strategie mit Keyword-Recherche, Google-Business-Profil-Optimierung und laufendem Monitoring bieten wir ergänzende Pakete an.`,
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
        `Neben der klassischen Onpage-Optimierung spielen lokale Autoritätssignale eine zentrale Rolle für Ihr Ranking in ${regionName}. Dazu gehören ein vollständig gepflegtes Google-Business-Profil, konsistente Einträge in lokalen Branchenverzeichnissen und positive Bewertungen. Wir helfen Ihnen, diese Signale systematisch aufzubauen und zu pflegen, damit Google Ihr Unternehmen als relevanten lokalen Anbieter erkennt und entsprechend einstuft.`,
        `SEO entfaltet seine volle Wirkung, wenn es mit weiteren digitalen Maßnahmen verzahnt wird. Eine technisch saubere, schnelle Webseite bildet das Fundament; ein KI-Chatbot oder automatisierte Anfragenprozesse sorgen dafür, dass die über Google gewonnenen Besucher auch tatsächlich zu Anfragen werden. Pixel Kraftwerk bietet Ihnen alle Bausteine aus einer Hand – so greifen Sichtbarkeit, Webseite und Automatisierung ineinander und maximieren Ihren Erfolg in ${regionName}.`,
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
        {
          q: `Optimiert ihr auch mein Google-Business-Profil für ${regionName}?`,
          a: `Ja, das Google-Business-Profil ist ein zentraler Bestandteil lokaler SEO. Wir optimieren Ihr Profil mit vollständigen Unternehmensdaten, relevanten Kategorien, ansprechenden Fotos und einer Strategie für Bewertungen. Ein gut gepflegtes Profil stärkt Ihre Sichtbarkeit in der Google-Suche und auf Google Maps für ${regionName} und Umgebung.`,
        },
        {
          q: 'Lässt sich SEO mit Chatbots oder Automatisierungen kombinieren?',
          a: 'Absolut – und genau das empfehlen wir. Mehr Sichtbarkeit bei Google bringt mehr Besucher auf Ihre Webseite. Wenn dort ein Chatbot Fragen beantwortet oder ein automatisiertes Formular Anfragen erfasst, wird aus einem Webseitenbesuch deutlich häufiger eine echte Kundenanfrage. Wir beraten Sie gern, welche Kombination für Ihr Unternehmen am sinnvollsten ist.',
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
      `Unsere Lösungen sind darauf ausgelegt, sich nahtlos in Ihre bestehende Infrastruktur in ${regionName} einzufügen. Ob CRM-System, Terminkalender, Branchensoftware oder E-Mail-Postfach – wir schaffen Verbindungen zwischen Ihren Tools, damit Daten nicht doppelt gepflegt werden müssen und Informationen dort ankommen, wo sie gebraucht werden. So entstehen durchgängige Abläufe statt isolierter Insellösungen.`,
      `Nach der Einführung bleiben wir an Ihrer Seite. Wir beobachten mit Ihnen, wie ${serviceLabel} in ${regionName} genutzt wird, welche Fragen besonders häufig auftreten und wo Optimierungspotenzial liegt. Auf Wunsch erweitern wir die Lösung Schritt für Schritt – etwa um zusätzliche Standorte, weitere Services oder tiefergehende Automatisierungsschritte im Hintergrund.`,
      `Automatisierung wirkt am stärksten, wenn sie mit einer modernen, gut auffindbaren Webseite kombiniert wird. Denn was nützt ein Chatbot oder Telefonassistent, wenn potenzielle Kunden in ${regionName} Ihr Unternehmen gar nicht erst finden? Deshalb bieten wir ergänzend Webseiten im Mietmodell und gezielte SEO-Optimierung an – damit Sichtbarkeit und Automatisierung Hand in Hand gehen und Ihnen messbar mehr Anfragen bringen.`,
      `Pixel Kraftwerk ist in Groitzsch bei Leipzig verwurzelt und betreut Unternehmen in ${regionName} und der gesamten Region mit persönlichem Engagement. Wir verstehen die Herausforderungen lokaler Betriebe, kennen die Strukturen vor Ort und bieten kurze Kommunikationswege. Ob persönliches Treffen oder Videocall – wir sind nah dran an Ihrem Geschäft und setzen auf langfristige Partnerschaften statt anonymer Projektabwicklung.`,
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
      {
        q: `Was kostet ${serviceLabel} für ein Unternehmen in ${regionName}?`,
        a: `Die Kosten hängen vom Umfang und der Komplexität Ihrer Anforderungen ab. Wir arbeiten mit transparenten Preismodellen und erstellen Ihnen nach einem kostenlosen Erstgespräch ein individuelles Angebot. So wissen Sie vorab genau, welche Leistungen enthalten sind – ohne versteckte Kosten oder langfristige Knebelverträge.`,
      },
      {
        q: 'Kann ich bestehende Systeme wie CRM oder Branchensoftware integrieren?',
        a: 'Ja, Integration ist einer unserer Schwerpunkte. Wir verbinden Ihre neue Lösung mit gängigen CRM-Systemen, Kalendertools, Branchensoftware und weiteren Anwendungen. Falls keine direkte Schnittstelle existiert, finden wir pragmatische Wege über Zwischenlösungen oder Automatisierungsplattformen.',
      },
      {
        q: 'Bietet ihr langfristige Betreuung an?',
        a: `Ja. Neben der Einrichtung bieten wir laufende Betreuungspakete an, die regelmäßige Optimierung, Anpassungen an veränderte Abläufe und technischen Support umfassen. Viele unserer Kunden in ${regionName} und der Region schätzen die kontinuierliche Zusammenarbeit, weil sich ihre Anforderungen mit der Zeit weiterentwickeln und wir flexibel darauf reagieren können.`,
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

const allCustomContent: Partial<Record<RegionServiceKey, RegionServiceContent>> = {
  ...customRegionServiceContent,
  ...additionalCustomContent,
};

export function getRegionServiceContent(
  regionSlug: LeistungsgebietSlug,
  regionName: string,
  serviceSlug: ServiceSlug,
  serviceLabel: string
): RegionServiceContent {
  const key = buildKey(regionSlug, serviceSlug);
  const custom = allCustomContent[key];
  if (custom) return custom;
  return getTemplateRegionServiceContent(regionSlug, regionName, serviceSlug, serviceLabel);
}

