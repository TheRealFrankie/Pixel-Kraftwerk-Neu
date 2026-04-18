import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'Google Maps Ranking verbessern – Groitzsch & Leipzig – Pixel Kraftwerk bringt Ihr Unternehmen ins Local Pack',
  metaDescription:
    'Google Maps Ranking optimieren: Mehr Sichtbarkeit im Local Pack für Ihr Unternehmen. Pixel Kraftwerk aus Groitzsch zeigt, wie Sie in Leipzig & Region gefunden werden.',
  primaryKeyword: 'Google Maps Ranking',
  secondaryKeywords: [
    'Local Pack',
    'Google Business Profile',
    'Google Maps Optimierung',
    'Maps SEO',
    'lokale Sichtbarkeit',
    'Google Maps Platzierung',
  ],
  imageAltTexts: [
    'Google Maps Suchergebnis mit Local Pack: Drei lokale Unternehmen werden prominent angezeigt',
    'Optimiertes Google Business Profile mit Fotos, Bewertungen und Öffnungszeiten',
    'Smartphone-Bildschirm zeigt Google Maps Ergebnis für einen lokalen Dienstleister in Leipzig',
  ],

  h1: 'Google Maps Ranking verbessern – so landen Sie im Local Pack',
  subheadline: 'Im Local Pack sichtbar werden – dort, wo Kunden zuerst hinschauen',
  intro:
    'Wenn potenzielle Kunden in Ihrer Nähe nach einer Dienstleistung suchen, entscheidet das Google Maps Ranking, ob Ihr Unternehmen sichtbar ist – oder ob der Auftrag an die Konkurrenz geht. Das Local Pack, also die drei prominent angezeigten Einträge auf Google Maps, ist für lokale Unternehmen die wertvollste Position in den Suchergebnissen. Wir von <a href="/webseite" class="text-primary-400 hover:underline">Pixel Kraftwerk</a> aus Groitzsch helfen Ihnen dabei, genau dort zu erscheinen.',
  heroCtaText: 'Maps-Ranking anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Ihre Konkurrenz steht auf Maps weiter oben</span>',
    lead: 'Im Local Pack gewinnt selten der beste Anbieter – sondern der am besten optimierte:',
    bullets: [
      'Kunden sehen nur die 3 ersten Einträge auf Maps',
      'Wer nicht im Local Pack ist, wird kaum noch angeklickt',
      'Schwache Bewertungen wirken sich direkt aufs Ranking aus',
      'Google bevorzugt vollständige und aktive Profile',
    ],
    tagline: 'Gerade im Handwerk und bei lokalen Dienstleistern entscheidet Maps über den Auftrag.',
    details: [
      {
        title: 'Warum viele Unternehmen nicht ranken',
        body: 'Viele Google Business Profile sind unvollständig, ungepflegt oder falsch kategorisiert. Das sieht Google – und blendet sie gnadenlos aus.',
        bullets: [
          'Keine passende Hauptkategorie',
          'Fehlende Leistungen / Öffnungszeiten',
          'Wenige oder gar keine Bewertungen',
          'Keine Fotos und Beiträge',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jeder Maps-Klick, der nicht bei Ihnen landet, wandert zur Konkurrenz – oft wenige Meter entfernt, aber mit dem besseren Profil.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ihr Google Business Profile auf Top-Form</span>',
    lead: 'Wir optimieren Ihr Profil, Ihre Bewertungen und Ihre lokale Präsenz – <strong>so, dass Sie im Local Pack sichtbar werden</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Vollständige Einrichtung + Optimierung Ihres Profils',
        'Saubere Kategorien und Leistungen',
        'Regelmäßige Bewertungs- und Foto-Strategie',
        'Beiträge und Updates nach festem Rhythmus',
      ],
    },
    blocks: [
      {
        title: 'Was wir konkret optimieren',
        intro: 'Je nach Status:',
        bullets: [
          'Firmenname, Kategorien, Leistungen',
          'Öffnungszeiten, Adresse, Einzugsgebiet',
          'Fotos, Beiträge, Produkte',
          'Bewertungs-Strategie & Antwort-Management',
          'NAP-Konsistenz über alle Verzeichnisse',
        ],
      },
      {
        title: 'Was Sie davon haben',
        intro: 'Konkret messbar:',
        bullets: [
          'Mehr Profilaufrufe',
          'Mehr Anrufe und Wegbeschreibungen',
          'Mehr Website-Klicks',
          'Höhere Platzierungen im Local Pack',
        ],
      },
    ],
    tagline: '➡️ Ihr Profil wird zum Vertriebskanal, nicht nur zur Visitenkarte.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist das Local Pack?',
    lead: 'Das Local Pack ist der <strong>Kasten mit den drei prominenten Google-Maps-Einträgen</strong>, der bei lokalen Suchanfragen („Bäcker in meiner Nähe", „Friseur Leipzig") ganz oben in den Google-Ergebnissen erscheint.',
    examples: [
      '„Zahnarzt Leipzig" → Local Pack mit 3 Praxen + Karte',
      '„Elektriker Borna" → 3 Betriebe mit Bewertungen',
      '„Restaurant Groitzsch" → 3 Restaurants mit Öffnungszeiten',
    ],
    blocks: [
      {
        title: 'Für wen das besonders wichtig ist',
        body: 'Für alle Unternehmen mit Einzugsgebiet: Handwerk, Gastro, Dienstleister, Praxen, Einzelhandel, Friseure, Beauty.',
      },
      {
        title: 'Was Ranking-Optimierung nicht kann',
        body: '<strong>Wichtig:</strong> Kein seriöses Angebot garantiert Platz 1. Aber mit sauberer Optimierung + aktiver Pflege werden Sie langfristig stabil sichtbar.',
      },
    ],
  },

  features: {
    headline: 'Was die Maps-Optimierung <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Komplette Einrichtung Ihres Google Business Profile',
      'Kategorien- und Leistungs-Optimierung',
      'Bewertungs-Strategie und Antwort-Management',
      'Foto- und Beitragsstrategie',
      'NAP-Check (Namen, Adressen, Telefonnummern)',
      'Monatliches Reporting',
    ],
    note: '<strong>Wichtig:</strong> Wir arbeiten <strong>ausschließlich mit Google-konformen Methoden</strong> – keine gekauften Bewertungen, keine Fake-Strategien.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup umfasst die Betreuung:',
        bullets: [
          'Wettbewerbs-Analyse',
          'Keyword- und Suchintentions-Recherche',
          'Monatliche Profil-Pflege',
          'Reporting zu Sichtbarkeit & Conversions',
        ],
      },
      {
        title: 'Optional: Ergänzungen',
        intro: 'Auf Wunsch ergänzen wir:',
        bullets: [
          'Landingpages für Ort + Leistung',
          'Verzeichnis- und Brancheneinträge',
          'Bewertungs-Automationen',
          'Conversion-Tracking für Anrufe und Routen',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist das Google Maps Ranking?',
      headingLevel: 'h2',
      paragraphs: [
        'Wenn Sie bei Google eine Suchanfrage mit lokalem Bezug eingeben – etwa „Elektriker in der Nähe" oder „Friseur Leipzig" – erscheint oberhalb der klassischen Suchergebnisse eine Kartenansicht mit drei hervorgehobenen Unternehmen. Das ist das sogenannte Local Pack oder Map Pack.',
        'Diese drei Plätze bekommen den Löwenanteil der Klicks. Studien zeigen, dass über 40 % aller Nutzer auf einen der drei Map-Pack-Einträge klicken, bevor sie überhaupt nach unten scrollen. Für lokale Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a>, <a href="/leistungsgebiete/altenburg" class="text-primary-400 hover:underline">Altenburg</a> und der gesamten Region bedeutet das: Wer im Local Pack erscheint, gewinnt Kunden. Wer nicht erscheint, verliert sie – oft ohne es zu merken.',
        'Das Google Maps Ranking funktioniert dabei nach eigenen Regeln, die sich von der klassischen <a href="/seo-top-3-in-google/local-seo" class="text-primary-400 hover:underline">Local SEO</a> unterscheiden. Es reicht nicht, eine Website zu haben. Google bewertet vor allem Ihr Google Business Profile, Ihre Bewertungen und Ihre Relevanz für den Suchenden.',
      ],
    },
    {
      heading: 'Wie entscheidet Google, wer im Local Pack erscheint?',
      headingLevel: 'h2',
      paragraphs: [
        'Google nutzt drei zentrale Faktoren, um das Maps-Ranking zu bestimmen: Relevanz, Entfernung und Bekanntheit. Das Zusammenspiel dieser drei Faktoren bestimmt, welche Unternehmen für eine bestimmte Suchanfrage an einem bestimmten Standort angezeigt werden.',
      ],
    },
    {
      heading: 'Relevanz – Wie gut passt Ihr Unternehmen zur Suchanfrage?',
      headingLevel: 'h3',
      paragraphs: [
        'Relevanz beschreibt, wie gut Ihr Google Business Profile zur Suchanfrage des Nutzers passt. Je vollständiger und präziser Ihr Profil ausgefüllt ist, desto besser kann Google einschätzen, ob Ihre Dienstleistung zum gesuchten Begriff passt. Dazu gehören die richtige Hauptkategorie, ergänzende Kategorien, eine detaillierte Unternehmensbeschreibung und die Dienstleistungen, die Sie in Ihrem Profil hinterlegen.',
      ],
    },
    {
      heading: 'Entfernung – Wie nah ist Ihr Standort am Suchenden?',
      headingLevel: 'h3',
      paragraphs: [
        'Google berücksichtigt den physischen Abstand zwischen dem Standort des Suchenden und Ihrem Unternehmen. Bei Suchanfragen ohne konkreten Ortshinweis (z. B. „Schlüsseldienst in der Nähe") nutzt Google die GPS-Daten des Geräts. Bei Suchanfragen mit Ortsangabe (z. B. „Schlüsseldienst Groitzsch") wird die Entfernung zum genannten Ort berechnet. Diesen Faktor können Sie nicht direkt beeinflussen – aber Sie können die anderen beiden Faktoren so stark optimieren, dass Sie trotzdem ranken.',
      ],
    },
    {
      heading: 'Bekanntheit – Wie vertrauenswürdig ist Ihr Unternehmen?',
      headingLevel: 'h3',
      paragraphs: [
        'Bekanntheit (im englischen Original „Prominence") misst, wie etabliert und vertrauenswürdig Ihr Unternehmen online wahrgenommen wird. Hier spielen Ihre Bewertungen die größte Rolle: Anzahl, Durchschnittsnote und Aktualität. Aber auch Erwähnungen auf anderen Websites, Backlinks und die Qualität Ihrer eigenen <a href="/webseite" class="text-primary-400 hover:underline">Webseite</a> fließen ein. Je mehr positive Signale Google findet, desto eher vertraut die Suchmaschine Ihrem Eintrag.',
      ],
    },
    {
      heading: 'Die wichtigsten Google Maps Ranking-Faktoren im Überblick',
      headingLevel: 'h2',
      paragraphs: [
        'Die folgende Tabelle zeigt die wesentlichen Faktoren, die Ihr Google Maps Ranking beeinflussen – und was Sie konkret tun können, um jeden einzelnen zu optimieren.',
      ],
      table: {
        headers: ['Ranking-Faktor', 'Einfluss', 'Optimierungsmaßnahme'],
        rows: [
          ['Google Business Profile – Vollständigkeit', 'Sehr hoch', 'Alle Felder ausfüllen: Kategorie, Beschreibung, Öffnungszeiten, Attribute'],
          ['Bewertungen (Anzahl & Qualität)', 'Sehr hoch', 'Systematisch echte Bewertungen einholen, auf jede Bewertung antworten'],
          ['Hauptkategorie & Nebenkategorien', 'Hoch', 'Passende Hauptkategorie wählen, relevante Nebenkategorien ergänzen'],
          ['Nähe zum Suchenden', 'Hoch', 'Nicht direkt beeinflussbar – andere Faktoren müssen umso stärker sein'],
          ['NAP-Konsistenz (Name, Adresse, Telefon)', 'Hoch', 'Einheitliche Angaben auf allen Plattformen und Verzeichnissen'],
          ['Fotos & Videos', 'Mittel bis hoch', 'Regelmäßig hochwertige Bilder vom Unternehmen, Team und Arbeit hochladen'],
          ['Google Posts & Updates', 'Mittel', 'Wöchentliche Beiträge zu Angeboten, Projekten oder Neuigkeiten veröffentlichen'],
          ['Backlinks & Erwähnungen', 'Mittel', 'Lokale Verzeichnisse, Branchenportale und regionale Medien nutzen'],
          ['Website-Qualität & Mobile-Optimierung', 'Mittel', 'Schnelle, mobilfreundliche Website mit lokalen Inhalten'],
          ['Fragen & Antworten im Profil', 'Niedrig bis mittel', 'Häufige Fragen proaktiv im Profil beantworten'],
        ],
      },
    },
    {
      heading: 'Google Business Profile richtig optimieren',
      headingLevel: 'h2',
      paragraphs: [
        'Ihr Google Business Profile (ehemals Google My Business) ist die Grundlage für jedes Maps-Ranking. Google verwendet die Informationen aus diesem Profil, um zu entscheiden, ob Ihr Unternehmen zu einer Suchanfrage passt und wie vertrauenswürdig es ist.',
        'Die Optimierung beginnt bei den Basics: Stimmen Name, Adresse und Telefonnummer exakt mit den Angaben auf Ihrer Website und in allen Verzeichnissen überein? Haben Sie die passendste Hauptkategorie gewählt? Sind Ihre Öffnungszeiten aktuell – auch an Feiertagen?',
        'Darüber hinaus gibt es zahlreiche Felder, die viele Unternehmen ignorieren: Attribute (z. B. „barrierefrei", „Parkplätze vorhanden"), Dienstleistungsbeschreibungen mit Preisangaben, den Q&A-Bereich und die Möglichkeit, Produkte direkt im Profil zu hinterlegen. Jedes ausgefüllte Feld ist ein Signal an Google, dass Ihr Profil vollständig und vertrauenswürdig ist.',
      ],
    },
    {
      heading: 'Bewertungen: Der stärkste Hebel für Ihr Maps-Ranking',
      headingLevel: 'h2',
      paragraphs: [
        'Google-Bewertungen sind einer der einflussreichsten Faktoren für das Maps-Ranking – und gleichzeitig der Faktor, den viele Unternehmen am meisten unterschätzen. Es geht nicht darum, einmalig zehn Bewertungen zu sammeln. Google bewertet die Anzahl, den Durchschnitt, die Aktualität und den Inhalt Ihrer Rezensionen.',
        'Eine effektive Bewertungsstrategie beginnt damit, zufriedene Kunden systematisch um eine Bewertung zu bitten. Das kann per E-Mail nach Auftragsabschluss geschehen, über einen QR-Code auf der Rechnung oder durch eine persönliche Anfrage. Wichtig ist, dass der Prozess in Ihren Arbeitsalltag integriert wird – nicht als Sonderprojekt, sondern als fester Bestandteil Ihres Kundenkontakts.',
        'Mindestens genauso wichtig: Antworten Sie auf jede Bewertung. Positive Bewertungen verdienen ein persönliches Dankeschön. Negative Bewertungen sind eine Chance, Professionalität zu zeigen und Missverständnisse zu klären. Google registriert diese Interaktion und wertet sie als Zeichen eines aktiven, engagierten Unternehmens.',
      ],
    },
    {
      heading: 'Fotos, Posts und Q&A – die unterschätzten Ranking-Signale',
      headingLevel: 'h2',
      paragraphs: [
        'Viele Unternehmen richten ihr Google Business Profile einmal ein und lassen es dann liegen. Dabei belohnt Google Aktivität. Unternehmen, die regelmäßig Fotos hochladen, Beiträge veröffentlichen und den Q&A-Bereich pflegen, senden starke Signale an den Algorithmus.',
        'Fotos sind dabei besonders wirkungsvoll. Google bestätigt, dass Unternehmen mit Fotos 42 % mehr Anfragen nach Wegbeschreibungen erhalten und 35 % mehr Klicks auf die Website generieren. Laden Sie regelmäßig echte Bilder hoch – vom Team, von abgeschlossenen Projekten, von Ihrem Geschäftsraum. Stockfotos helfen nicht.',
        'Google Posts funktionieren wie Mini-Blogbeiträge direkt in Ihrem Maps-Eintrag. Sie können Angebote, Neuigkeiten oder Veranstaltungen teilen. Die Posts verschwinden nach sieben Tagen aus der prominenten Anzeige, bleiben aber im Profil sichtbar. Wöchentliche Posts zeigen Google und Ihren potenziellen Kunden, dass Ihr Unternehmen aktiv ist.',
        'Der Q&A-Bereich wird oft übersehen, dabei können Sie hier proaktiv häufig gestellte Fragen beantworten. Stellen Sie die Fragen selbst und liefern Sie die Antworten – das ist erlaubt und sogar empfohlen. So steuern Sie, welche Informationen potenzielle Kunden sofort sehen.',
      ],
    },
    {
      heading: 'Mobiles Suchverhalten und Google Maps',
      headingLevel: 'h2',
      paragraphs: [
        'Über 60 % aller Google-Suchen mit lokalem Bezug finden auf Smartphones statt. Und auf dem Smartphone ist das Maps-Ergebnis das Erste, was Nutzer sehen – oft noch bevor die organischen Suchergebnisse geladen werden. „In der Nähe"-Suchen haben sich in den letzten Jahren vervielfacht.',
        'Das bedeutet: Ihr Google Maps Ranking ist für mobile Nutzer noch wichtiger als für Desktop-Nutzer. Wenn jemand unterwegs nach einem Handwerker, Restaurant oder Dienstleister sucht, sieht er zuerst das Map Pack. Ein Tipp auf Ihren Eintrag führt direkt zur Anrufoption oder zur Routenplanung.',
        'Deshalb muss auch Ihre Website mobilfreundlich sein. Google prüft, ob die verlinkte Website auf Smartphones schnell lädt und gut bedienbar ist. Eine langsame oder schlecht formatierte mobile Seite kann Ihr Maps-Ranking negativ beeinflussen.',
      ],
    },
    {
      heading: 'Google Maps Rankings messen und überwachen',
      headingLevel: 'h2',
      paragraphs: [
        'Im Gegensatz zu klassischen SEO-Rankings sind Maps-Rankings stark standortabhängig. Wenn Sie selbst nach Ihrer Dienstleistung googeln, sehen Sie ein anderes Ergebnis als jemand, der fünf Kilometer entfernt sucht. Deshalb brauchen Sie spezielle Tools, um Ihr tatsächliches Maps-Ranking zu überprüfen.',
        'Wir setzen auf Grid-basierte Tracking-Tools, die Ihr Ranking an dutzenden Punkten rund um Ihren Standort messen. So entsteht eine Heatmap, die zeigt, in welchem Radius Sie sichtbar sind und wo Sie noch Potenzial haben. Gemeinsam mit den Insights aus Ihrem Google Business Profile – Suchanfragen, Anrufe, Routenanfragen, Foto-Aufrufe – ergibt sich ein vollständiges Bild Ihrer lokalen Sichtbarkeit.',
        'Auf dieser Basis optimieren wir gezielt: Wenn Sie in einem bestimmten Stadtteil oder Ort schwach ranken, passen wir die Strategie an – etwa durch gezielte Inhalte für dieses Gebiet oder durch Bewertungen von Kunden aus dieser Region.',
      ],
    },
    {
      heading: 'Warum Pixel Kraftwerk Ihr Partner für Google Maps Ranking ist',
      headingLevel: 'h2',
      paragraphs: [
        'Wir kennen die Herausforderungen lokaler Unternehmen in der Region. Als Agentur aus Groitzsch bei Leipzig arbeiten wir täglich mit Handwerkern, Dienstleistern und kleinen Unternehmen, die online besser gefunden werden wollen. Google Maps Ranking ist keine Raketenwissenschaft – aber es erfordert eine systematische, kontinuierliche Arbeit, die im Tagesgeschäft oft untergeht.',
        'Wir übernehmen die komplette Optimierung Ihres Google Business Profiles, entwickeln eine Bewertungsstrategie, die zu Ihrem Unternehmen passt, erstellen regelmäßig Inhalte und überwachen Ihre Rankings mit professionellen Tools. Und das Beste: Sie sehen die Ergebnisse direkt in mehr Anrufen, mehr Routenanfragen und mehr Kunden, die durch Ihre Tür kommen.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Wie lange dauert es, bis mein Google Maps Ranking sich verbessert?',
      a: 'Erste Verbesserungen sind oft schon nach 2–4 Wochen sichtbar, wenn das Google Business Profile grundlegend optimiert wird. Für signifikante und stabile Ranking-Verbesserungen sollten Sie mit 3–6 Monaten rechnen. Google Maps Rankings entwickeln sich schrittweise – Kontinuität ist entscheidend.',
    },
    {
      q: 'Kann ich mein Google Maps Ranking auch ohne Agentur verbessern?',
      a: 'Grundsätzlich ja. Die Basics – Profil vollständig ausfüllen, Bewertungen einholen, Fotos hochladen – können Sie selbst umsetzen. Der Unterschied: Eine professionelle Optimierung geht systematisch vor, nutzt Tracking-Tools für standortgenaue Analysen und kennt die Feinheiten, die den Unterschied zwischen Platz 4 und Platz 1 machen.',
    },
    {
      q: 'Was kostet Google Maps Ranking-Optimierung?',
      a: 'Unsere Pakete beginnen bei einer einmaligen Profil-Optimierung und reichen bis zur laufenden Betreuung mit monatlichem Reporting. Die Kosten hängen vom Umfang ab – nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot, das zu Ihrem Budget passt.',
    },
    {
      q: 'Brauche ich eine eigene Website für ein gutes Maps-Ranking?',
      a: 'Eine eigene Website ist nicht zwingend erforderlich, hilft aber erheblich. Google wertet die verlinkte Website als Vertrauenssignal und zieht Inhalte daraus heran, um die Relevanz Ihres Unternehmens einzuschätzen. Eine professionelle, mobiloptimierte <a href="/webseite" class="text-primary-400 hover:underline">Webseite</a> stärkt Ihr Maps-Ranking deutlich.',
    },
    {
      q: 'Was ist der Unterschied zwischen Google Maps Ranking und normalem SEO?',
      a: 'Klassisches SEO zielt auf die organischen Suchergebnisse unterhalb des Map Packs. Google Maps Ranking bezieht sich auf die Karteneinträge im Local Pack. Beide Bereiche haben eigene Ranking-Faktoren. Für lokale Unternehmen ist das Maps-Ranking oft wichtiger, weil es mehr Klicks und direkte Aktionen (Anrufe, Routen) generiert.',
    },
    {
      q: 'Können gefälschte Bewertungen mein Ranking verbessern?',
      a: 'Nein – und sie können Ihnen massiv schaden. Google erkennt Fake-Bewertungen immer besser und bestraft Unternehmen mit Ranking-Verlust oder sogar Profil-Sperrung. Setzen Sie ausschließlich auf echte Bewertungen zufriedener Kunden. Das ist nachhaltiger und rechtlich sicher.',
    },
    {
      q: 'Wie viele Bewertungen brauche ich für ein gutes Maps-Ranking?',
      a: 'Es gibt keine magische Zahl. Entscheidend ist, dass Sie mehr und bessere Bewertungen haben als Ihre direkten Wettbewerber in der Region. In vielen Branchen reichen 30–50 aktuelle Bewertungen mit einem Durchschnitt über 4,5 Sternen, um im Local Pack mitzuspielen. Wichtiger als die Gesamtzahl ist die Regelmäßigkeit.',
    },
    {
      q: 'Funktioniert Google Maps Ranking auch für Unternehmen ohne Ladengeschäft?',
      a: 'Ja. Google bietet für Dienstleister ohne öffentlichen Standort die Option „Einzugsgebiet" an. Damit können Sie Ihr Servicegebiet definieren, ohne eine physische Adresse öffentlich zu zeigen. Ihr Unternehmen wird dann bei Suchanfragen innerhalb Ihres Einzugsgebiets berücksichtigt.',
    },
  ],

  ctaText: 'Bereit, im Local Pack sichtbar zu werden?',

  parentServiceLink: {
    text: 'SEO: Top 3 in Google',
    href: '/seo-top-3-in-google',
  },
  siblingSubpageLinks: [
    { text: 'Local SEO', href: '/seo-top-3-in-google/local-seo' },
    { text: 'SEO für Handwerker', href: '/seo-top-3-in-google/seo-fuer-handwerker' },
    { text: 'SEO für Dienstleister', href: '/seo-top-3-in-google/seo-fuer-dienstleister' },
  ],
  crossServiceLinks: [
    { text: 'Webseiten im Mietmodell', href: '/webseite' },
    { text: 'KI-Chatbots für Ihre Website', href: '/ki-chatbots' },
  ],
  areaLinks: buildTier1AreaLinks('Google Maps Ranking'),
};

export default content;
