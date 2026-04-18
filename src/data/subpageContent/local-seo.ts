import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'Local SEO – Lokale Suchmaschinenoptimierung für Unternehmen | Pixel Kraftwerk Groitzsch & Leipzig',
  metaDescription:
    'Local SEO für mehr lokale Sichtbarkeit. Google Business Profil, Rankings & Bewertungen optimieren. Pixel Kraftwerk – Ihr Partner in Groitzsch & Leipzig.',
  primaryKeyword: 'Local SEO',
  secondaryKeywords: [
    'lokale Suchmaschinenoptimierung',
    'Google Business Profil',
    'NAP-Konsistenz',
    'lokale Sichtbarkeit',
    'regionale Auffindbarkeit',
  ],
  imageAltTexts: [
    'Local SEO Strategie: Unternehmen wird in der lokalen Google-Suche prominent angezeigt',
    'Google Business Profil eines lokalen Unternehmens mit optimierten Einträgen und Bewertungen',
    'Smartphone zeigt lokale Suchergebnisse mit Kartenansicht und Unternehmensprofilen',
  ],

  h1: 'Local SEO – Lokale Suchmaschinenoptimierung für Ihr Unternehmen',
  subheadline: 'In Ihrer Region sichtbar werden – bei Kunden, die kaufbereit sind',
  intro:
    'Wenn potenzielle Kunden in Ihrer Nähe nach Ihren Leistungen suchen, müssen sie Sie finden – nicht Ihre Konkurrenz. Local SEO sorgt dafür, dass Ihr Unternehmen bei lokalen Suchanfragen ganz oben erscheint: in der Google-Suche, auf Google Maps und in den lokalen Branchenverzeichnissen. Für Unternehmen in <a href="/leistungsgebiete/groitzsch" class="text-primary-400 hover:underline">Groitzsch</a>, <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und der gesamten Region ist das kein Luxus, sondern eine Notwendigkeit.',
  heroCtaText: 'Local-SEO-Angebot anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Lokale Kunden finden Sie nicht</span>',
    lead: 'Auch wenn Ihr Angebot top ist – ohne lokale Sichtbarkeit werden Sie einfach übersehen:',
    bullets: [
      'Kunden suchen „…in der Nähe" – und landen bei der Konkurrenz',
      'Ihr Google-Profil ist unvollständig oder kaum gepflegt',
      'Ihre Website spricht zu allgemein, ohne Regionalbezug',
      'In Branchenverzeichnissen stehen veraltete Daten',
    ],
    tagline: 'Das Ergebnis: Umsatz verschwindet ins Digitale, obwohl Sie lokal aktiv sind.',
    details: [
      {
        title: 'Warum klassisches SEO nicht reicht',
        body: 'Allgemeines SEO zielt oft auf bundesweite Keywords. Für lokale Unternehmen sind das aber die falschen Gegner. Der Hebel liegt in der Region.',
        bullets: [
          'Fehlende Landingpages pro Ort / Leistung',
          'Kein klares Einzugsgebiet auf der Website',
          'Keine abgestimmte Keyword-Strategie',
          'Kein Link-Aufbau im lokalen Umfeld',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jeder Suchende, der Sie nicht findet, ist ein Kunde, der bei Ihrer Konkurrenz kauft – obwohl Sie um die Ecke sitzen.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Lokale Sichtbarkeit mit System</span>',
    lead: 'Local SEO ist <strong>kein einzelner Trick, sondern ein Zusammenspiel</strong> aus Google-Profil, Website, Inhalten, Bewertungen und Verzeichnissen.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Google Business Profile optimieren und aktiv pflegen',
        'Lokale Landingpages für Ihre wichtigsten Leistungs-/Ort-Kombinationen',
        'Bewertungs-Strategie und Antwort-Management',
        'NAP-Konsistenz über alle Verzeichnisse hinweg',
      ],
    },
    blocks: [
      {
        title: 'Was wir konkret optimieren',
        intro: 'Je nach Ausgangslage:',
        bullets: [
          'Google Business Profile (Kategorien, Leistungen, Medien)',
          'Lokale Landingpages auf Ihrer Website',
          'Technische SEO-Basics',
          'Verzeichnis- und Brancheneinträge',
          'Content-Strategie mit Regionalbezug',
        ],
      },
      {
        title: 'Was Sie davon haben',
        intro: 'Messbare Effekte:',
        bullets: [
          'Mehr Anrufe + Routenanfragen',
          'Mehr Website-Besucher aus Ihrer Region',
          'Bessere Platzierungen im Local Pack',
          'Stärkere Marke im Einzugsgebiet',
        ],
      },
    ],
    tagline: '➡️ Sie werden dort gefunden, wo Ihre Kunden sowieso suchen.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist Local SEO?',
    lead: 'Local SEO ist die <strong>Gesamtheit aller Maßnahmen, mit denen Ihr Unternehmen bei lokalen Suchanfragen besser gefunden wird</strong> – auf Google Maps, in den klassischen Suchergebnissen und in lokalen Branchenverzeichnissen.',
    examples: [
      '„Elektriker in Leipzig"',
      '„Zahnarzt Groitzsch"',
      '„Friseur Borna Bewertungen"',
    ],
    blocks: [
      {
        title: 'Für wen sich Local SEO lohnt',
        body: 'Für alle lokal tätigen Unternehmen: Handwerk, Praxen, Dienstleister, Handel, Gastro, Kanzleien – überall dort, wo Kunden aus der Region kommen.',
      },
      {
        title: 'Was Local SEO nicht ist',
        body: '<strong>Wichtig:</strong> Kein Schnellschuss. Local SEO wirkt, wenn es konsequent und über mehrere Monate umgesetzt wird.',
      },
    ],
  },

  features: {
    headline: 'Was Local SEO <span class="text-primary-500">umfasst</span>',
    primaryList: [
      'Google Business Profile optimieren & pflegen',
      'Lokale Landingpages',
      'NAP-Konsistenz (Namen, Adressen, Telefonnummern)',
      'Bewertungs- und Reputation-Management',
      'Lokaler Link-Aufbau',
      'Monatliches SEO-Reporting',
    ],
    note: '<strong>Wichtig:</strong> Wir arbeiten <strong>ausschließlich mit sauberen, nachhaltigen Methoden</strong> – keine Tricks, keine Black-Hat-SEO.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup umfasst die Betreuung:',
        bullets: [
          'Keyword-Strategie pro Region',
          'Content-Planung mit Regionalbezug',
          'Technische Website-Optimierung',
          'Monatliche Reports zu Rankings & Traffic',
        ],
      },
      {
        title: 'Optional: Ergänzungen',
        intro: 'Auf Wunsch ergänzen wir:',
        bullets: [
          'Google Ads für schnelle Sichtbarkeit',
          'Bewertungs-Automationen',
          'Content-Produktion',
          'Conversion-Optimierung',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist Local SEO und warum ist es so wichtig?',
      headingLevel: 'h2',
      paragraphs: [
        'Local SEO – also lokale Suchmaschinenoptimierung – umfasst alle Maßnahmen, die dafür sorgen, dass Ihr Unternehmen bei Suchanfragen mit regionalem Bezug sichtbar wird. Das betrifft Suchen wie „Handwerker in meiner Nähe", „Friseur Leipzig" oder „Steuerberater Groitzsch". Google erkennt die lokale Absicht hinter solchen Anfragen und zeigt bevorzugt Unternehmen aus der unmittelbaren Umgebung an.',
        'Der entscheidende Unterschied zu klassischem SEO: Bei Local SEO konkurrieren Sie nicht mit der gesamten Online-Welt, sondern mit Unternehmen in Ihrem Einzugsgebiet. Das macht es deutlich realistischer, auf die ersten Positionen zu kommen – vorausgesetzt, Sie setzen die richtigen Hebel.',
        'Über 46 Prozent aller Google-Suchen haben einen lokalen Bezug. Und 76 Prozent der Nutzer, die lokal suchen, besuchen innerhalb von 24 Stunden ein Geschäft. Diese Zahlen zeigen: Wer lokal nicht sichtbar ist, verliert täglich Kunden an die Konkurrenz.',
      ],
    },
    {
      heading: 'Google Business Profil – Das Fundament Ihrer lokalen Sichtbarkeit',
      headingLevel: 'h2',
      paragraphs: [
        'Ihr Google Business Profil (ehemals Google My Business) ist der wichtigste einzelne Faktor für Ihre lokale Auffindbarkeit. Es bestimmt, ob und wie Ihr Unternehmen im sogenannten Local Pack erscheint – den drei prominenten Ergebnissen mit Kartenansicht, die bei lokalen Suchen ganz oben stehen.',
        'Ein optimiertes Profil umfasst weit mehr als nur Name, Adresse und Telefonnummer. Wir sorgen dafür, dass jedes Detail stimmt: vollständige Geschäftskategorien, präzise Öffnungszeiten, aussagekräftige Beschreibungen mit relevanten Keywords, hochwertige Fotos und regelmäßige Beiträge. All das signalisiert Google, dass Ihr Unternehmen aktiv, relevant und vertrauenswürdig ist.',
        'Besonders für das <a href="/seo-top-3-in-google/google-maps-ranking" class="text-primary-400 hover:underline">Google Maps Ranking</a> ist ein gepflegtes Business Profil unverzichtbar. Je vollständiger und aktueller Ihr Profil, desto höher Ihre Chancen auf eine Top-Platzierung.',
      ],
    },
    {
      heading: 'NAP-Konsistenz: Einheitliche Unternehmensdaten überall',
      headingLevel: 'h2',
      paragraphs: [
        'NAP steht für Name, Address, Phone – also den Firmennamen, die Adresse und die Telefonnummer Ihres Unternehmens. Klingt simpel, ist aber einer der häufigsten Stolpersteine im Local SEO.',
        'Google gleicht Ihre Unternehmensdaten über hunderte Quellen ab: Branchenverzeichnisse, Social-Media-Profile, Ihre Website, Bewertungsportale. Wenn Ihre Adresse auf der Website „Hauptstraße 12" lautet, bei den Gelben Seiten „Hauptstr. 12" steht und im Google Profil die alte Telefonnummer hinterlegt ist, entstehen Widersprüche. Google interpretiert das als Signal mangelnder Vertrauenswürdigkeit – und Ihre Rankings leiden.',
        'Wir prüfen systematisch alle Ihre Online-Einträge, korrigieren Inkonsistenzen und sorgen für eine einheitliche Datenbasis. Das klingt nach Fleißarbeit – und genau das ist es auch. Aber der Effekt auf Ihre lokale Sichtbarkeit ist enorm.',
      ],
    },
    {
      heading: 'Lokale Citations und Branchenverzeichnisse',
      headingLevel: 'h3',
      paragraphs: [
        'Citations sind Erwähnungen Ihres Unternehmens auf externen Plattformen – mit oder ohne Verlinkung. Jede konsistente Erwähnung stärkt Ihre lokale Autorität in den Augen von Google.',
        'Wir melden Ihr Unternehmen in den relevanten Verzeichnissen an: branchenspezifische Portale, regionale Verzeichnisse für Leipzig und Umgebung, allgemeine Plattformen wie Das Örtliche, Yelp und Branchenbuch. Dabei achten wir darauf, dass alle Einträge identisch gepflegt werden und Ihre NAP-Daten exakt übereinstimmen.',
      ],
    },
    {
      heading: 'Bewertungen gezielt aufbauen und professionell managen',
      headingLevel: 'h2',
      paragraphs: [
        'Online-Bewertungen sind für Local SEO ein doppelter Hebel: Sie beeinflussen direkt Ihr Ranking und entscheiden gleichzeitig, ob ein Suchender bei Ihnen anruft oder beim Wettbewerber.',
        'Google bevorzugt Unternehmen mit vielen, aktuellen und positiven Bewertungen. Doch genauso wichtig ist, wie Sie auf Bewertungen reagieren. Eine professionelle Antwort auf eine kritische Rezension zeigt potenziellen Kunden, dass Sie Feedback ernst nehmen. Eine freundliche Reaktion auf Lob stärkt die Kundenbindung.',
        'Wir entwickeln mit Ihnen eine Strategie, die es Ihren zufriedenen Kunden leicht macht, eine Bewertung zu hinterlassen – ohne aufdringlich zu wirken. Gleichzeitig etablieren wir einen Prozess für das professionelle Beantworten aller Rezensionen.',
      ],
    },
    {
      heading: 'Lokaler Linkaufbau: Regionale Autorität stärken',
      headingLevel: 'h2',
      paragraphs: [
        'Backlinks sind auch im Local SEO ein zentraler Rankingfaktor. Entscheidend ist dabei nicht die schiere Menge, sondern die lokale Relevanz der verlinkenden Seiten.',
        'Ein Link von der Leipziger Volkszeitung, vom Gewerbeverein Groitzsch oder von einer regionalen Handwerkskammer ist für Ihre lokale Sichtbarkeit deutlich wertvoller als ein Link von einem thematisch passenden, aber überregionalen Blog. Wir identifizieren Möglichkeiten für lokale Kooperationen, Sponsorings und Partnerschaften, die natürliche Verlinkungen erzeugen.',
        'Dieser Ansatz passt auch perfekt zu einer professionellen <a href="/webseite" class="text-primary-400 hover:underline">Webseite im Mietmodell</a>, die technisch sauber aufgebaut ist und von externen Quellen gerne verlinkt wird.',
      ],
    },
    {
      heading: 'On-Page-Signale für lokale Relevanz',
      headingLevel: 'h2',
      paragraphs: [
        'Ihre Website muss Google unmissverständlich kommunizieren, wo Sie tätig sind und welche Leistungen Sie dort anbieten. Das geschieht über gezielte On-Page-Optimierungen:',
      ],
      bullets: [
        'Lokale Keywords in Title-Tags, Meta-Descriptions und Überschriften (z. B. „Maler Leipzig" statt nur „Maler")',
        'Strukturierte Daten (LocalBusiness Schema) mit vollständigen Standortinformationen',
        'Eingebettete Google-Maps-Karte auf der Kontaktseite',
        'Standortspezifische Landing Pages für jedes Leistungsgebiet',
        'Konsistente NAP-Daten im Footer oder auf der Kontaktseite',
        'Lokale Inhalte wie Referenzprojekte, regionale Fallstudien oder Veranstaltungshinweise',
      ],
    },
    {
      heading: 'Mobile Optimierung: Lokale Suchen sind mobile Suchen',
      headingLevel: 'h2',
      paragraphs: [
        'Über 60 Prozent aller lokalen Suchanfragen werden von Smartphones gestellt. Ein Nutzer sucht unterwegs nach einem Restaurant, einem Schlüsseldienst oder einem Elektriker – und erwartet, dass die Ergebnisse sofort laden, die Telefonnummer klickbar ist und die Navigation zum Standort mit einem Tipp startet.',
        'Wenn Ihre Website auf dem Smartphone langsam lädt, schlecht lesbar ist oder keine Click-to-Call-Funktion bietet, verlieren Sie diese Kunden. Google bewertet die mobile Nutzererfahrung als direkten Rankingfaktor – nicht nur für lokale Suchen, aber dort besonders spürbar.',
        'Wir stellen sicher, dass Ihre Seite mobil einwandfrei funktioniert: schnelle Ladezeiten, responsive Design, optimierte Bilder und eine intuitive Navigation auch auf kleinen Bildschirmen.',
      ],
    },
    {
      heading: 'Lokale Content-Strategie: Relevanz durch regionale Inhalte',
      headingLevel: 'h2',
      paragraphs: [
        'Content ist auch im Local SEO einer der stärksten Hebel – vorausgesetzt, er hat einen konkreten regionalen Bezug. Eine generische Leistungsbeschreibung reicht nicht aus, um Google und Ihre potenziellen Kunden zu überzeugen.',
        'Wir entwickeln Inhalte, die Ihre Expertise mit Ihrer Region verbinden: Fallstudien aus Projekten in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung, Ratgeber mit lokalem Bezug, Blogbeiträge zu regionalen Themen und standortspezifische Leistungsseiten. Diese Inhalte sorgen für Relevanz bei Google und schaffen Vertrauen bei lokalen Kunden, die einen Partner aus der Region suchen.',
      ],
    },
    {
      heading: 'Ranking-Faktoren im Local SEO im Überblick',
      headingLevel: 'h2',
      paragraphs: [
        'Nicht alle Faktoren wiegen gleich schwer. Die folgende Tabelle gibt Ihnen einen Überblick über die wichtigsten Ranking-Signale im Local SEO und deren Gewichtung:',
      ],
      table: {
        headers: ['Ranking-Faktor', 'Bedeutung', 'Typische Maßnahmen'],
        rows: [
          ['Google Business Profil', 'Sehr hoch', 'Vollständiges Profil, regelmäßige Beiträge, korrekte Kategorien'],
          ['Bewertungen & Rezensionen', 'Sehr hoch', 'Aktives Review-Management, professionelle Antworten'],
          ['NAP-Konsistenz', 'Hoch', 'Einheitliche Daten in allen Verzeichnissen und auf der Website'],
          ['Lokale Backlinks', 'Hoch', 'Regionale Partnerschaften, Sponsorings, Pressearbeit'],
          ['On-Page-Signale', 'Hoch', 'Lokale Keywords, Schema-Markup, standortspezifische Seiten'],
          ['Lokale Citations', 'Mittel', 'Einträge in relevanten Branchenverzeichnissen'],
          ['Mobile Nutzererfahrung', 'Mittel', 'Responsive Design, schnelle Ladezeiten, Click-to-Call'],
          ['Nutzerverhalten', 'Mittel', 'Klickrate, Verweildauer, Interaktionen mit dem Profil'],
          ['Lokaler Content', 'Mittel', 'Regionale Blogbeiträge, Fallstudien, standortbezogene Seiten'],
          ['Social Signals', 'Niedrig', 'Aktivität auf Social-Media-Kanälen, Teilungen, Erwähnungen'],
        ],
      },
    },
    {
      heading: 'Lokale Rankings messen und kontinuierlich verbessern',
      headingLevel: 'h2',
      paragraphs: [
        'Local SEO ist kein einmaliges Projekt, sondern ein fortlaufender Prozess. Rankings verändern sich, Wettbewerber optimieren ihre Profile und Google passt seine Algorithmen an. Deshalb ist ein systematisches Tracking unverzichtbar.',
        'Wir überwachen Ihre lokalen Positionen für die relevanten Suchbegriffe, analysieren die Performance Ihres Google Business Profils (Aufrufe, Klicks, Anrufaktionen, Routenplanungen) und vergleichen Ihre Sichtbarkeit mit der Ihrer Wettbewerber. Auf Basis dieser Daten passen wir die Strategie laufend an.',
        'Sie erhalten regelmäßige, verständliche Reports – keine kryptischen Excel-Tabellen, sondern klare Aussagen darüber, wo Sie stehen und was als Nächstes passiert.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was genau ist Local SEO und worin unterscheidet es sich von normalem SEO?',
      a: 'Local SEO konzentriert sich auf die Optimierung für Suchanfragen mit lokalem Bezug – also Suchen, bei denen der Standort eine Rolle spielt. Im Gegensatz zu klassischem SEO geht es nicht darum, bundesweit oder international zu ranken, sondern in Ihrem Einzugsgebiet sichtbar zu sein. Die Maßnahmen umfassen unter anderem die Optimierung des Google Business Profils, den Aufbau lokaler Citations und gezieltes Bewertungsmanagement.',
    },
    {
      q: 'Wie lange dauert es, bis Local SEO Ergebnisse zeigt?',
      a: 'Erste Verbesserungen – etwa ein optimiertes Google Business Profil – können sich bereits innerhalb weniger Wochen bemerkbar machen. Für nachhaltige Top-Platzierungen in umkämpften Branchen sollten Sie mit drei bis sechs Monaten rechnen. Der Zeitraum hängt vom aktuellen Zustand Ihrer Online-Präsenz, der Wettbewerbssituation und dem Umfang der Maßnahmen ab.',
    },
    {
      q: 'Brauche ich eine eigene Website für Local SEO?',
      a: 'Ein Google Business Profil allein kann erste Sichtbarkeit bringen, aber ohne eigene Website verschenken Sie enormes Potenzial. Google bewertet die Inhalte und technische Qualität Ihrer Website als wichtiges Ranking-Signal. Mit einer professionellen <a href="/webseite" class="text-primary-400 hover:underline">Webseite im Mietmodell</a> schaffen Sie die ideale Grundlage für nachhaltiges Local SEO.',
    },
    {
      q: 'Was kostet Local SEO?',
      a: 'Die Kosten richten sich nach dem Umfang der Maßnahmen und der Wettbewerbssituation in Ihrer Branche und Region. Wir arbeiten mit transparenten monatlichen Pauschalen, die alle relevanten Leistungen abdecken – von der Profil-Optimierung über den Linkaufbau bis zum Reporting. Im Erstgespräch klären wir Ihren Bedarf und erstellen ein individuelles Angebot.',
    },
    {
      q: 'Kann ich Local SEO selbst machen?',
      a: 'Grundlegende Maßnahmen wie das Pflegen Ihres Google Business Profils oder das Beantworten von Bewertungen können Sie selbst übernehmen. Für eine umfassende Strategie mit technischer On-Page-Optimierung, strukturiertem Linkaufbau und systematischem Tracking empfehlen wir professionelle Unterstützung – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
    },
    {
      q: 'Wie wichtig sind Bewertungen für das lokale Ranking?',
      a: 'Sehr wichtig. Bewertungen gehören zu den stärksten Ranking-Signalen im Local SEO. Dabei zählen Anzahl, Aktualität, Durchschnittsbewertung und die Qualität Ihrer Antworten. Unternehmen mit vielen positiven und aktuellen Bewertungen haben einen deutlichen Vorteil im Local Pack.',
    },
    {
      q: 'Funktioniert Local SEO auch für Unternehmen ohne Ladengeschäft?',
      a: 'Ja. Auch Dienstleister, die zu Kunden fahren, oder Unternehmen ohne physische Kundenbesuche profitieren von Local SEO. Google bietet im Business Profil die Option „Einzugsgebiet", mit der Sie Ihre Serviceregion definieren können, ohne eine Besuchsadresse anzuzeigen.',
    },
    {
      q: 'Was ist das Local Pack und wie komme ich dort hinein?',
      a: 'Das Local Pack sind die drei Unternehmen, die bei einer lokalen Suche prominent mit Karte angezeigt werden – noch vor den organischen Suchergebnissen. Um dort zu erscheinen, brauchen Sie ein optimiertes Google Business Profil, gute Bewertungen, konsistente NAP-Daten und eine relevante Website. Genau dabei unterstützen wir Sie.',
    },
  ],

  ctaText: 'Bereit, in Ihrer Region die Nummer 1 bei Google zu werden?',

  parentServiceLink: {
    text: 'SEO: Top 3 in Google',
    href: '/seo-top-3-in-google',
  },
  siblingSubpageLinks: [
    { text: 'Google Maps Ranking', href: '/seo-top-3-in-google/google-maps-ranking' },
    { text: 'SEO für Handwerker', href: '/seo-top-3-in-google/seo-fuer-handwerker' },
    { text: 'SEO für Dienstleister', href: '/seo-top-3-in-google/seo-fuer-dienstleister' },
  ],
  crossServiceLinks: [
    { text: 'Webseiten im Mietmodell', href: '/webseite' },
    { text: 'CRM-Systeme', href: '/crm-systeme' },
  ],
  areaLinks: buildTier1AreaLinks('Local SEO'),
};

export default content;
