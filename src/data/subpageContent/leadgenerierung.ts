import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'Leadgenerierung automatisieren – Groitzsch & Leipzig – Pixel Kraftwerk erfasst, qualifiziert und verteilt Ihre Anfragen automatisch',
  metaDescription:
    'Leads automatisch erfassen, qualifizieren und ans Team übergeben. Pixel Kraftwerk baut Automatisierungen für Ihre Leadgenerierung in Leipzig & Region.',
  primaryKeyword: 'Leadgenerierung automatisieren',
  secondaryKeywords: [
    'Lead-Erfassung',
    'Lead-Qualifizierung',
    'automatische Leadgenerierung',
    'Leads generieren',
    'Anfragen automatisieren',
  ],
  imageAltTexts: [
    'Automatisierte Leadgenerierung: Anfrage wird erfasst und an das richtige Team weitergeleitet',
    'Dashboard mit Lead-Pipeline und automatischer Qualifizierung',
    'Formular auf Website erfasst Lead und startet automatischen Follow-up-Prozess',
  ],

  h1: 'Leadgenerierung automatisieren',
  subheadline: 'Jede Anfrage landet sofort bei der richtigen Person',
  intro:
    'Jede verpasste Anfrage ist ein verlorener Kunde. Wenn Leads manuell erfasst, sortiert und nachverfolgt werden, gehen Kontakte unter – besonders in stressigen Phasen. Automatisierte Leadgenerierung sorgt dafür, dass jede Anfrage sofort erfasst, qualifiziert und dem richtigen Ansprechpartner zugewiesen wird. Ohne Verzögerung, ohne Zettelwirtschaft.',
  heroCtaText: 'Leadprozess anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Leads gehen verloren, bevor der Vertrieb sie sieht</span>',
    lead: 'Die typischen Lead-Lecks im Alltag:',
    bullets: [
      'Formulareinträge landen in E-Mail-Postfächern – und bleiben ungelesen',
      'WhatsApp-, Messenger- und Chat-Leads werden nicht zentral erfasst',
      'Niemand weiß, wer für welchen Lead zuständig ist',
      'Follow-ups werden vergessen, Leads erkalten',
    ],
    tagline: 'Das Ergebnis: teures Marketing liefert Leads – aber der Vertrieb kann sie nicht bedienen.',
    details: [
      {
        title: 'Warum manuelle Lead-Erfassung nicht funktioniert',
        body: 'Sobald mehrere Kanäle ins Spiel kommen, ist ein sauberes Handling ohne Automatisierung praktisch unmöglich.',
        bullets: [
          'Keine zentrale Sammelstelle für alle Anfragen',
          'Keine automatische Zuweisung',
          'Keine Priorisierung nach Potenzial',
          'Kein Tracking, wann zuletzt kontaktiert wurde',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jeder nicht bearbeitete Lead ist ein verschenkter Euro aus Ihrem Marketing-Budget – und eine Chance, die die Konkurrenz dankend annimmt.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Automatisierte Leadprozesse</span>',
    lead: 'Anfrage rein → sofort erfasst, qualifiziert und <strong>an den richtigen Vertriebsmitarbeiter zugewiesen</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Alle Leads fließen in ein zentrales System (CRM)',
        'Vorqualifizierung läuft automatisch',
        'Zuweisung nach Thema, Region, Produkt oder Zufall',
        'Sofortiger Follow-up per E-Mail/SMS/WhatsApp',
      ],
    },
    blocks: [
      {
        title: 'Was die Automatisierung konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Datenaufnahme aus Formular, Chat, Telefon, Messenger',
          'Lead-Scoring nach Ihren Kriterien',
          'Zuweisung an Teammitglieder',
          'Erster automatischer Kontakt (Bestätigung / Onboarding)',
          'Nachfass-Sequenzen bei Nicht-Reaktion',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Fokus auf die wirklich wichtigen Leads:',
        bullets: [
          'Vollständige Kontaktdaten',
          'Quelle und Kampagne',
          'Lead-Score',
          'Kontext aus bisherigen Interaktionen',
        ],
      },
    ],
    tagline: '➡️ Ihre Leads werden nicht mehr vergessen – sondern konsequent in Kunden verwandelt.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist automatisierte Leadgenerierung?',
    lead: 'Automatisierte Leadgenerierung bedeutet, dass <strong>Anfragen aus allen Kanälen zentral gesammelt, qualifiziert und strukturiert an Ihren Vertrieb übergeben werden</strong> – ohne dass jemand Zettel sortieren muss.',
    examples: [
      'Formular → CRM → Vertriebsmitarbeiter zugewiesen',
      'Chat-Anfrage → automatisches Scoring → heißer Lead markiert',
      'Kalt-Lead → 30-Tage-Follow-up-Sequenz',
    ],
    blocks: [
      {
        title: 'Für wen sich das lohnt',
        body: 'Für alle, die aktiv Leads generieren: Dienstleister, Agenturen, Handwerk, B2B-Vertrieb, E-Commerce, Coaches, Berater.',
      },
      {
        title: 'Was die Automatisierung nicht ist',
        body: '<strong>Wichtig:</strong> Sie erzeugt keine Leads aus dem Nichts – sie sorgt dafür, dass die generierten Leads maximale Chance auf Abschluss haben.',
      },
    ],
  },

  features: {
    headline: 'Was die Leadgenerierung <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Zentrale Lead-Erfassung aus allen Kanälen',
      'Automatische Qualifizierung',
      'Zuweisung + Priorisierung',
      'Lead-Scoring',
      'Sofortiger Erstkontakt',
      'Nachfass-Sequenzen',
    ],
    note: '<strong>Wichtig:</strong> Jeder Leadprozess wird <strong>individuell auf Ihre Zielgruppen, Kanäle und Vertriebsstruktur</strong> ausgerichtet.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das System:',
        bullets: [
          'Multi-Channel-Erfassung (Web, Chat, Tel, Social)',
          'Lead-Scoring mit Ihren Kriterien',
          'Round-Robin oder Expertise-Routing',
          'Statistiken zu Quellen & Conversion',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'CRM (HubSpot, Pipedrive, Salesforce)',
          'Marketing-Automation (Brevo, Mailchimp)',
          'Ads-Plattformen (Meta, Google Ads)',
          'Zapier, Make, n8n',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was bedeutet automatisierte Leadgenerierung?',
      headingLevel: 'h2',
      paragraphs: [
        'Automatisierte Leadgenerierung beschreibt den Prozess, bei dem eingehende Kontaktanfragen – ob per Webformular, Telefonanruf, Chat oder Social Media – ohne manuellen Aufwand erfasst, kategorisiert und weiterverarbeitet werden.',
        'Das Ziel: Kein Lead soll verloren gehen. Jede Anfrage wird in Echtzeit dokumentiert, mit relevanten Informationen angereichert und an die richtige Person oder das richtige System übergeben. Ob CRM, E-Mail-Postfach oder Projektmanagement-Tool – der Lead landet dort, wo er hingehört.',
        'Für kleine und mittelständische Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung ist das besonders relevant: Wer mit begrenztem Team arbeitet, kann sich keine verlorenen Anfragen leisten.',
      ],
    },
    {
      heading: 'Typische Probleme ohne automatisierte Leadgenerierung',
      headingLevel: 'h2',
      paragraphs: [
        'In vielen Unternehmen sieht der Alltag so aus: Anfragen kommen per E-Mail, Telefon, WhatsApp und über die Website. Sie werden manuell in eine Excel-Tabelle eingetragen – wenn überhaupt. Follow-ups passieren, wenn jemand daran denkt. Und wenn das Team im Tagesgeschäft versinkt, bleiben Kontakte liegen.',
      ],
      bullets: [
        'Anfragen landen in verschiedenen Postfächern und werden nicht zusammengeführt',
        'Niemand weiß, welcher Lead schon kontaktiert wurde und welcher nicht',
        'Follow-ups werden vergessen oder kommen zu spät',
        'Die Qualität der Leads ist unklar – alles wird gleich behandelt',
        'Übergaben zwischen Vertrieb und Ausführung sind fehleranfällig',
        'Reportings sind manuell und nie aktuell',
      ],
    },
    {
      heading: 'Wie wir Ihre Leadgenerierung automatisieren',
      headingLevel: 'h2',
      paragraphs: [
        'Wir analysieren gemeinsam mit Ihnen, woher Ihre Anfragen kommen, welche Informationen relevant sind und wie der ideale Ablauf von der ersten Anfrage bis zur Auftragserteilung aussieht. Auf dieser Basis bauen wir einen automatisierten Prozess, der zu Ihrem Unternehmen passt.',
      ],
      bullets: [
        '<strong>Erfassung:</strong> Alle Kanäle (Website, Telefon, Chat, Social Media) fließen in ein zentrales System',
        '<strong>Qualifizierung:</strong> Leads werden anhand Ihrer Kriterien automatisch bewertet und priorisiert',
        '<strong>Zuweisung:</strong> Qualifizierte Leads gehen automatisch an den richtigen Ansprechpartner',
        '<strong>Follow-up:</strong> Automatische Erinnerungen und Nachfass-E-Mails sorgen dafür, dass kein Lead kalt wird',
        '<strong>Dokumentation:</strong> Jeder Schritt wird nachvollziehbar dokumentiert – für Ihr Team und für spätere Auswertungen',
      ],
    },
    {
      heading: 'Welche Kanäle lassen sich anbinden?',
      headingLevel: 'h2',
      paragraphs: [
        'Im Grunde alle digitalen Kontaktpunkte, die Sie nutzen. Die häufigsten Quellen, die wir anbinden:',
      ],
      table: {
        headers: ['Kanal', 'Typische Erfassung', 'Automatisierung'],
        rows: [
          ['Website-Formulare', 'Kontaktformular, Angebotsanfrage', 'Sofortige Erfassung + CRM-Eintrag + Bestätigungs-E-Mail'],
          ['Telefonanrufe', 'Gesprächszusammenfassung', 'Zusammenfassung wird als Lead angelegt, Team wird benachrichtigt'],
          ['E-Mail', 'Eingehende Anfragen', 'Parsing der E-Mail, Lead-Erstellung, automatische Antwort'],
          ['Social Media', 'Instagram DM, Facebook Messenger', 'Nachrichten werden erfasst und als Lead dokumentiert'],
          ['WhatsApp', 'Kundenanfragen per Messenger', 'Automatisierte Antwort + Lead-Erfassung'],
        ],
      },
    },
    {
      heading: 'Automatische Lead-Qualifizierung: Nicht jeder Kontakt ist gleich wertvoll',
      headingLevel: 'h2',
      paragraphs: [
        'Eine der größten Zeitfresser im Vertrieb: Jeder Anfrage wird gleich viel Aufmerksamkeit geschenkt – unabhängig davon, ob es sich um eine ernsthafte Kaufabsicht oder eine allgemeine Informationsanfrage handelt.',
        'Mit automatischer Qualifizierung bewerten wir Leads anhand von Kriterien, die Sie definieren. Das können Angaben aus dem Formular sein (Unternehmensgröße, Budget, Dringlichkeit), das Verhalten auf Ihrer Website (welche Seiten wurden besucht?) oder die Art der Anfrage.',
        'Hoch qualifizierte Leads bekommen sofort Aufmerksamkeit. Informationsanfragen werden automatisch mit hilfreichen Inhalten versorgt und zur richtigen Zeit erneut angesprochen.',
      ],
    },
    {
      heading: 'Integration mit Ihren bestehenden Systemen',
      headingLevel: 'h2',
      paragraphs: [
        'Automatisierte Leadgenerierung funktioniert am besten, wenn sie nahtlos in Ihren Arbeitsalltag integriert ist. Deshalb verbinden wir den Prozess mit den Tools, die Sie bereits nutzen:',
        'Ob <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-System</a>, E-Mail-Marketing-Tool, Kalender oder Projektmanagement – die Übergabe erfolgt automatisch. Ihr Team arbeitet weiter in den gewohnten Programmen, nur dass die Daten jetzt zuverlässig dort ankommen.',
        'Und wenn Sie noch kein CRM nutzen: Wir helfen Ihnen bei der Auswahl und Einrichtung eines Systems, das zu Ihrer Unternehmensgröße passt.',
      ],
    },
    {
      heading: 'Für welche Unternehmen lohnt sich automatisierte Leadgenerierung?',
      headingLevel: 'h2',
      paragraphs: [
        'Grundsätzlich für jedes Unternehmen, das regelmäßig Anfragen bekommt und diese nicht verlieren möchte. Besonders profitieren:',
      ],
      bullets: [
        'Handwerksbetriebe mit vielen Angebotsanfragen',
        'Dienstleister mit beratungsintensiven Leistungen',
        'Praxen und Kanzleien mit Terminanfragen',
        'Agenturen und Berater mit langen Vertriebszyklen',
        'Unternehmen in <a href="/leistungsgebiete/borna" class="text-primary-400 hover:underline">Borna</a>, <a href="/leistungsgebiete/grimma" class="text-primary-400 hover:underline">Grimma</a> und der Region, die wachsen wollen, ohne mehr Personal einzustellen',
      ],
    },
    {
      heading: 'Der Prozess: Von der Idee zur laufenden Automatisierung',
      headingLevel: 'h2',
      paragraphs: [
        'Wir arbeiten in klar definierten Schritten, damit Sie jederzeit wissen, wo wir stehen:',
      ],
      bullets: [
        '<strong>1. Analyse:</strong> Wir erfassen Ihre aktuellen Lead-Quellen, Abläufe und Engpässe',
        '<strong>2. Konzept:</strong> Gemeinsam definieren wir den Ziel-Prozess und die Qualifizierungskriterien',
        '<strong>3. Aufbau:</strong> Wir implementieren die Automatisierung, verbinden die Systeme und testen alles gründlich',
        '<strong>4. Optimierung:</strong> Nach dem Start analysieren wir die Ergebnisse und passen die Abläufe an',
      ],
    },
    {
      heading: 'Messbare Ergebnisse statt vager Versprechen',
      headingLevel: 'h2',
      paragraphs: [
        'Nach der Einführung sehen unsere Kunden typischerweise folgende Veränderungen:',
      ],
      table: {
        headers: ['Kennzahl', 'Vorher (typisch)', 'Nachher (typisch)'],
        rows: [
          ['Reaktionszeit auf Anfragen', '4–24 Stunden', 'Unter 5 Minuten'],
          ['Verlorene Leads pro Monat', '15–30 %', 'Unter 5 %'],
          ['Manuelle Dateneingabe pro Woche', '3–5 Stunden', 'Nahezu null'],
          ['Follow-up-Quote', '40–60 %', 'Über 90 %'],
        ],
      },
    },
  ],

  faqs: [
    {
      q: 'Was kostet automatisierte Leadgenerierung?',
      a: 'Die Kosten hängen von der Komplexität Ihrer Anforderungen ab – wie viele Kanäle angebunden werden, welche Systeme integriert werden und wie differenziert die Qualifizierung sein soll. Wir arbeiten mit transparenten Pauschalpreisen und erstellen nach dem Erstgespräch ein individuelles Angebot.',
    },
    {
      q: 'Wie lange dauert die Einrichtung?',
      a: 'Ein typisches Projekt dauert 2–4 Wochen von der Analyse bis zum Go-Live. Bei einfacheren Setups (ein Kanal, ein CRM) kann es auch schneller gehen. Komplexere Projekte mit mehreren Kanälen und individueller Qualifizierungslogik brauchen entsprechend mehr Zeit.',
    },
    {
      q: 'Muss ich mein CRM wechseln?',
      a: 'Nein. Wir arbeiten mit den Systemen, die Sie bereits nutzen. Ob HubSpot, Pipedrive, Zoho oder eine einfache Tabelle – wir finden eine Lösung, die zu Ihrem Setup passt. Falls Sie noch kein CRM haben, beraten wir Sie gerne bei der Auswahl.',
    },
    {
      q: 'Funktioniert das auch für kleine Unternehmen mit wenigen Anfragen?',
      a: 'Gerade dann. Wenn jede einzelne Anfrage zählt, ist es umso wichtiger, dass keine verloren geht. Automatisierung lohnt sich nicht erst ab hunderten von Leads pro Monat – schon bei 10–20 Anfragen im Monat spart sie Zeit und verhindert Fehler.',
    },
    {
      q: 'Was passiert, wenn ein Lead nicht in mein Schema passt?',
      a: 'Das System hat Fallback-Regeln. Leads, die nicht eindeutig zugeordnet werden können, werden an eine definierte Person oder ein Sammelpostfach übergeben, damit nichts untergeht.',
    },
    {
      q: 'Kann ich die Qualifizierungskriterien selbst anpassen?',
      a: 'Ja. Wir richten die Kriterien gemeinsam ein und zeigen Ihnen, wie Sie diese bei Bedarf anpassen können. Die meisten Änderungen sind auch ohne technische Kenntnisse möglich.',
    },
    {
      q: 'Wie wird der Datenschutz gewährleistet?',
      a: 'Alle Daten werden DSGVO-konform verarbeitet. Wir setzen auf europäische Server, verschlüsselte Übertragung und klare Einwilligungsprozesse. Details klären wir im Erstgespräch mit Blick auf Ihre spezifische Situation.',
    },
    {
      q: 'Kann die Automatisierung auch bestehende Kontakte nachqualifizieren?',
      a: 'Ja. Wir können bestehende Kontaktlisten importieren und nachträglich qualifizieren – etwa um inaktive Kontakte erneut anzusprechen oder eine Segmentierung vorzunehmen.',
    },
  ],

  ctaText: 'Bereit, keine Anfrage mehr zu verlieren?',

  parentServiceLink: {
    text: 'Automatisierungen im Überblick',
    href: '/automatisierungen',
  },
  siblingSubpageLinks: [
    { text: 'Terminbuchung automatisieren', href: '/automatisierungen/terminbuchung' },
    { text: 'Angebotsprozesse automatisieren', href: '/automatisierungen/angebotsprozesse' },
    { text: 'E-Mail Automatisierung', href: '/automatisierungen/email-automatisierung' },
  ],
  crossServiceLinks: [
    { text: 'CRM-Systeme für Ihre Kundenverwaltung', href: '/crm-systeme' },
    { text: 'KI-Chatbots für Ihre Website', href: '/ki-chatbots' },
  ],
  areaLinks: buildTier1AreaLinks('Leadgenerierung'),
};

export default content;
