import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'CRM für Handwerker – Kundenverwaltung für Handwerksbetriebe | Pixel Kraftwerk Groitzsch & Leipzig',
  metaDescription:
    'CRM für Handwerker: Kunden, Aufträge und Termine zentral verwalten statt Zettelwirtschaft. Pixel Kraftwerk richtet Ihr Handwerker-CRM ein – Region Leipzig.',
  primaryKeyword: 'CRM für Handwerker',
  secondaryKeywords: [
    'Handwerker-CRM',
    'Kundenverwaltung Handwerk',
    'CRM Handwerksbetrieb',
    'Auftragsverwaltung Handwerker',
    'digitale Kundenverwaltung Handwerk',
  ],
  imageAltTexts: [
    'Handwerker nutzt CRM-System auf dem Tablet direkt auf der Baustelle',
    'Dashboard eines Handwerker-CRM mit Auftragsübersicht und Kundenhistorie',
    'Vergleich Zettelwirtschaft und digitales CRM für einen Handwerksbetrieb',
  ],

  h1: 'CRM für Handwerker – Kunden und Aufträge im Griff statt Zettelchaos',
  subheadline: 'Weniger Suchen, mehr Schrauben – ein CRM, das wirklich zum Betrieb passt',
  intro:
    'Zwischen Baustelle, Werkstatt und Büro geht schnell der Überblick verloren. Kundendaten stehen auf Zetteln, Angebote werden per WhatsApp besprochen und die Rechnung geht erst raus, wenn jemand daran denkt. Ein CRM für Handwerker bringt Ordnung in dieses Chaos – ohne dass Sie dafür IT-Experte sein müssen. Wir von Pixel Kraftwerk in Groitzsch richten Ihnen ein System ein, das zu Ihrem Betrieb passt und das Ihr Team tatsächlich nutzt.',
  heroCtaText: 'Handwerker-CRM anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Zettelwirtschaft im Handwerk</span>',
    lead: 'Handwerksbetriebe leben von Tempo und Zuverlässigkeit – die Verwaltung steht dem oft im Weg:',
    bullets: [
      'Kundendaten stehen auf Zetteln, im Kopf oder auf dem Handy',
      'Angebote werden per WhatsApp oder Excel gebaut',
      'Aufträge gehen verloren, weil „keiner mehr weiß, wer das war"',
      'Rechnungen kommen spät, Nachfassen wird vergessen',
    ],
    tagline: 'Jedes Chaos im Büro bremst die Baustelle.',
    details: [
      {
        title: 'Warum Standard-CRM nicht passen',
        body: 'Viele CRMs sind für Büroarbeit gemacht – nicht für Handwerker, die auf der Leiter stehen oder in der Werkstatt schrauben. Bedienung muss schnell sein, mobil funktionieren und genau die Infos zeigen, die zählen.',
        bullets: [
          'Zu komplex für den Alltag',
          'Zu viele Felder, zu wenig Übersicht',
          'Keine Anbindung an Werkstatt-Software',
          'Keine WhatsApp-/SMS-Kommunikation',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jede halbe Stunde Sucharbeit im Büro ist eine halbe Stunde weniger Umsatz. Und jede verlorene Notiz bedeutet entweder Nacharbeit oder einen verärgerten Kunden.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein CRM, das zum Handwerk passt</span>',
    lead: 'Ein CRM für Handwerker ist <strong>einfach bedienbar, mobil nutzbar und fokussiert auf Kunden, Aufträge und Rechnungen</strong>.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Kundendaten und Aufträge auf dem Tablet / Handy',
        'Angebote schnell aus Vorlagen erstellt',
        'Fotos von der Baustelle direkt am Auftrag gespeichert',
        'Rechnungen automatisch aus Aufträgen generiert',
      ],
    },
    blocks: [
      {
        title: 'Was das CRM konkret bündelt',
        intro: 'Pro Kunde sehen Sie:',
        bullets: [
          'Kontaktdaten + Objektadressen',
          'Bisherige Aufträge und Leistungen',
          'Angebote, Fotos, Notizen',
          'Offene und bezahlte Rechnungen',
          'Wartungs- und Wiedervorlageterminen',
        ],
      },
      {
        title: 'Wie das Ihren Alltag verändert',
        intro: 'Vom Chaos zur klaren Struktur:',
        bullets: [
          'Kein Suchen im Büro vor der Baustelle',
          'Keine Doppeleingabe für Rechnungen',
          'Klare Zuständigkeiten im Team',
          'Schnelles Nachfassen nach Aufträgen',
        ],
      },
    ],
    tagline: '➡️ Weniger Zettel, mehr Zeit für die Arbeit, die wirklich Geld bringt.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein CRM für Handwerker?',
    lead: 'Ein CRM für Handwerker ist ein <strong>digitales System für Kunden, Aufträge und Rechnungen</strong>, das auf die Bedürfnisse von Handwerksbetrieben zugeschnitten ist: mobil, schnell, unkompliziert.',
    examples: [
      'Handwerker auf Baustelle → Zugriff per Tablet',
      'Gesellen im Team → eigene Login-Rechte',
      'Büro → Rechnungs- und Auftragsübersicht',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Maler, Elektriker, Sanitär, Heizungsbauer, Schreiner, Dachdecker, SHK – überall dort, wo Aufträge, Angebote und Kundenhistorie zusammengehören.',
      },
      {
        title: 'Was das CRM nicht ist',
        body: '<strong>Wichtig:</strong> Kein Ersatz für Ihr Handwerk. Aber ein Werkzeug, das dafür sorgt, dass Sie mehr Zeit für Ihr Handwerk haben und weniger für die Verwaltung.',
      },
    ],
  },

  features: {
    headline: 'Was das Handwerker-CRM <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Kundenakte mit Historie + Objektdaten',
      'Auftragsverwaltung vom Lead bis zur Rechnung',
      'Angebote in Minuten',
      'Mobile Nutzung auf Tablet/Handy',
      'Fotos und Dateien direkt am Auftrag',
      'Erinnerungen für Wartungen und Folgeaufträge',
    ],
    note: '<strong>Wichtig:</strong> Wir suchen die Lösung, die <strong>Ihr Team tatsächlich nutzt</strong> – nicht die mit den meisten Features auf dem Papier.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das CRM:',
        bullets: [
          'Terminplanung und Disposition',
          'Materialverwaltung',
          'Zeiterfassung auf Baustelle',
          'Kundenbenachrichtigungen per SMS/WhatsApp',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'Buchhaltung (lexoffice, sevDesk, DATEV)',
          'Kalender und Disposition',
          'WhatsApp Business API',
          'Bestehende Branchensoftware',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum Handwerksbetriebe ein CRM brauchen',
      headingLevel: 'h2',
      paragraphs: [
        'Handwerker sind Profis in ihrem Fach – aber die Verwaltung von Kunden, Angeboten und Terminen läuft in vielen Betrieben noch wie vor zwanzig Jahren. Anfragen kommen per Telefon, WhatsApp oder E-Mail, werden irgendwo notiert und hoffentlich nicht vergessen. Wer gerade auf der Baustelle steht, hat weder Zeit noch Nerven, im Büro Ordner zu wälzen.',
        'Genau hier setzt ein CRM-System an. CRM steht für Customer Relationship Management – also Kundenbeziehungsmanagement. Klingt sperrig, meint aber etwas ganz Praktisches: Alle Informationen zu Ihren Kunden, Aufträgen und Angeboten liegen an einem einzigen Ort. Jeder im Team kann darauf zugreifen – vom Meister bis zum Lehrling.',
        'Für Handwerksbetriebe in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung ist das besonders relevant: Wer regional arbeitet und auf Empfehlungen angewiesen ist, kann sich weder verlorene Aufträge noch vergessene Rückrufe leisten.',
      ],
    },
    {
      heading: 'Das typische Chaos ohne CRM im Handwerk',
      headingLevel: 'h2',
      paragraphs: [
        'Wenn wir mit Handwerksbetrieben sprechen, hören wir immer wieder die gleichen Geschichten. Die Probleme sind branchenübergreifend – ob Elektriker, Maler, Heizungsbauer oder Tischler:',
      ],
      bullets: [
        'Kundendaten stehen auf Zetteln, in Excel-Tabellen und in verschiedenen Handys',
        'Angebote werden mündlich auf der Baustelle besprochen, aber nie schriftlich festgehalten',
        'Niemand weiß, ob der Kunde von letztem Monat schon ein Angebot bekommen hat',
        'Rechnungen gehen erst Wochen nach Auftragsabschluss raus, weil die Dokumentation fehlt',
        'WhatsApp-Verläufe ersetzen die Auftragshistorie – und sind nach einem Handywechsel weg',
        'Reklamationen kommen rein, aber niemand kann nachvollziehen, was beim letzten Mal vereinbart war',
        'Der Chef hat alles im Kopf – fällt er aus, steht der Betrieb still',
      ],
    },
    {
      heading: 'Ohne CRM vs. mit CRM: Was sich für Handwerker ändert',
      headingLevel: 'h2',
      paragraphs: [
        'Der Unterschied zwischen einem Betrieb ohne und mit CRM zeigt sich im Tagesgeschäft an vielen Stellen. Hier die wichtigsten Veränderungen auf einen Blick:',
      ],
      table: {
        headers: ['Bereich', 'Ohne CRM', 'Mit CRM'],
        rows: [
          [
            'Kundendaten',
            'Verstreut in Handy, Notizbuch, Excel',
            'Zentral gespeichert, jederzeit abrufbar',
          ],
          [
            'Angebotserstellung',
            'Per E-Mail-Vorlage oder handschriftlich',
            'Direkt aus Kundendaten generiert, mit Vorlagen',
          ],
          [
            'Auftragshistorie',
            'Im Kopf des Chefs',
            'Vollständig dokumentiert – wer, wann, was',
          ],
          [
            'Terminplanung',
            'Kalender-Wirrwarr zwischen Team-Mitgliedern',
            'Gemeinsamer Kalender mit automatischen Erinnerungen',
          ],
          [
            'Nachverfolgung',
            'Wird oft vergessen',
            'Automatische Wiedervorlage und Follow-up',
          ],
          [
            'Rechnungsstellung',
            'Manuell, oft verspätet',
            'Direkt nach Abschluss, verknüpft mit Auftragsdaten',
          ],
          [
            'Baustellen-Zugriff',
            'Kein Zugriff auf Kundendaten unterwegs',
            'Mobiler Zugriff per Smartphone oder Tablet',
          ],
        ],
      },
    },
    {
      heading: 'Welche CRM-Funktionen für Handwerker wirklich zählen',
      headingLevel: 'h2',
      paragraphs: [
        'Ein CRM für Handwerker muss kein Enterprise-Monster sein. Es braucht genau die Funktionen, die im Handwerksalltag den Unterschied machen:',
      ],
      bullets: [
        '<strong>Kundenhistorie:</strong> Wer hat wann welchen Auftrag erteilt? Was wurde vereinbart? Welche Reklamationen gab es?',
        '<strong>Auftragsverfolgung:</strong> Status jedes Auftrags auf einen Blick – von der Anfrage bis zur Schlussrechnung',
        '<strong>Angebotsverwaltung:</strong> Angebote erstellen, nachverfolgen und bei Bedarf automatisch nachfassen',
        '<strong>Terminplanung:</strong> Gemeinsamer Kalender für das gesamte Team mit Erinnerungen und Routenplanung',
        '<strong>Dokumentenablage:</strong> Fotos, Aufmaße und Skizzen direkt beim Kunden hinterlegen',
        '<strong>Kontaktmanagement:</strong> Alle Kommunikationskanäle (Telefon, E-Mail, WhatsApp) an einem Ort',
      ],
    },
    {
      heading: 'Mobiler Zugriff: CRM auf der Baustelle nutzen',
      headingLevel: 'h3',
      paragraphs: [
        'Handwerker verbringen den Großteil ihres Tages nicht im Büro, sondern auf Baustellen, beim Kunden oder im Fahrzeug. Ein CRM-System, das nur am Desktop funktioniert, ist daher für das Handwerk weitgehend nutzlos.',
        'Moderne Handwerker-CRMs bieten mobile Apps oder responsive Weboberflächen, mit denen Ihr Team direkt vor Ort arbeiten kann: Kundendaten nachschlagen, Fotos zum Auftrag hochladen, den Status aktualisieren oder gleich das nächste Angebot anstoßen. Alles passiert in Echtzeit – und wenn Sie abends ins Büro kommen, ist bereits alles dokumentiert.',
        'Gerade für Betriebe, die in der Region rund um <a href="/leistungsgebiete/borna" class="text-primary-400 hover:underline">Borna</a> und Leipzig unterwegs sind, spart das tägliche Fahrzeit und vermeidet doppelte Erfassung.',
      ],
    },
    {
      heading: 'Integration mit Buchhaltungssoftware und anderen Tools',
      headingLevel: 'h2',
      paragraphs: [
        'Ein CRM entfaltet seinen vollen Nutzen, wenn es mit den Systemen verbunden ist, die Sie bereits einsetzen. Die wichtigste Schnittstelle für Handwerker ist in der Regel die Buchhaltungssoftware – ob Lexoffice, SevDesk, DATEV oder ein branchenspezifisches Programm.',
        'Durch die Verknüpfung fließen Auftrags- und Kundendaten automatisch in Ihre Rechnungsstellung. Sie erstellen Angebote im CRM, wandeln sie nach Auftragsabschluss per Klick in eine Rechnung um und der Buchhalter sieht den Vorgang sofort im System. Keine doppelte Eingabe, keine vergessenen Positionen.',
        'Auch die Anbindung an <a href="/automatisierungen" class="text-primary-400 hover:underline">Automatisierungen</a> ist sinnvoll: Eingehende Anfragen von Ihrer Website oder von Google können direkt als neuer Kontakt im CRM landen – inklusive automatischer Bestätigungs-E-Mail an den Interessenten.',
      ],
    },
    {
      heading: 'Einfaches CRM vs. komplexe Lösung: Was passt zu Ihrem Betrieb?',
      headingLevel: 'h2',
      paragraphs: [
        'Nicht jeder Handwerksbetrieb braucht Salesforce. Für einen Zwei-Mann-Betrieb kann eine strukturierte Kontaktliste mit Auftragsnotizen und Kalenderanbindung schon ausreichen. Ein wachsender Betrieb mit zehn Mitarbeitern und mehreren Gewerken braucht dagegen mehr Struktur.',
        'Wir unterscheiden grob drei Stufen:',
      ],
      bullets: [
        '<strong>Einstieg (1–3 Mitarbeiter):</strong> Einfaches CRM mit Kontakten, Aufgaben und Kalender. Tools wie Pipedrive oder ein gut konfiguriertes Google Workspace reichen oft aus.',
        '<strong>Mittelstand (4–15 Mitarbeiter):</strong> CRM mit Angebotsverwaltung, Auftragshistorie, mobiler App und Buchhaltungs-Integration. Hier eignen sich Tools wie HubSpot, Zoho oder branchenspezifische Lösungen.',
        '<strong>Wachstum (15+ Mitarbeiter):</strong> CRM mit Projektmanagement, Teamsteuerung, Reporting und ggf. ERP-Anbindung. Hier wird individueller geplant.',
      ],
    },
    {
      heading: 'So führen wir Ihr Handwerker-CRM ein',
      headingLevel: 'h2',
      paragraphs: [
        'Ein CRM einzuführen bedeutet nicht, monatelang an einem IT-Projekt zu sitzen. Bei Pixel Kraftwerk läuft das pragmatisch und auf Ihr Tagesgeschäft abgestimmt:',
      ],
      bullets: [
        '<strong>1. Bestandsaufnahme:</strong> Wir schauen uns an, wie Sie heute arbeiten – wo Daten liegen, wo es hakt und was gut funktioniert',
        '<strong>2. Systemauswahl:</strong> Basierend auf Ihren Anforderungen und Ihrem Budget empfehlen wir das passende Tool',
        '<strong>3. Einrichtung:</strong> Wir konfigurieren das CRM, importieren bestehende Kontakte und richten Workflows ein',
        '<strong>4. Schulung:</strong> Ihr Team lernt das System in einer praxisnahen Einführung – kein Folienvortrag, sondern echtes Arbeiten',
        '<strong>5. Begleitung:</strong> In den ersten Wochen stehen wir für Fragen bereit und optimieren die Abläufe nach Bedarf',
      ],
    },
    {
      heading: 'Handwerker-CRM und SEO: Mehr Sichtbarkeit für Ihren Betrieb',
      headingLevel: 'h3',
      paragraphs: [
        'Ein gut gepflegtes CRM hilft Ihnen nicht nur bei der Verwaltung, sondern indirekt auch bei Ihrer Sichtbarkeit im Internet. Wie? Wenn Sie Kundendaten strukturiert erfassen, können Sie gezielt Bewertungen anfragen, Referenzprojekte dokumentieren und Stammkunden für Empfehlungen aktivieren.',
        'In Kombination mit einer durchdachten <a href="/seo-top-3-in-google/seo-fuer-handwerker" class="text-primary-400 hover:underline">SEO-Strategie für Handwerker</a> entsteht ein Kreislauf: Mehr Sichtbarkeit bringt mehr Anfragen, das CRM sorgt dafür, dass keine verloren geht, zufriedene Kunden hinterlassen Bewertungen, die wiederum Ihr Ranking stärken.',
      ],
    },
    {
      heading: 'Datenschutz und Sicherheit im Handwerker-CRM',
      headingLevel: 'h3',
      paragraphs: [
        'Kundendaten gehören geschützt – das gilt im Handwerk genauso wie in jeder anderen Branche. Wir setzen bei der CRM-Einführung auf DSGVO-konforme Lösungen mit Serverstandort in der EU, verschlüsselte Datenübertragung und klare Zugriffsrechte.',
        'Konkret bedeutet das: Jeder Mitarbeiter sieht nur die Daten, die er für seine Arbeit braucht. Kundendaten werden nicht in privaten WhatsApp-Gruppen geteilt, sondern liegen im geschützten System. Und wenn ein Mitarbeiter den Betrieb verlässt, werden seine Zugänge sofort gesperrt – die Daten bleiben trotzdem erhalten.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein CRM für Handwerker?',
      a: 'Das hängt vom gewählten System und der Komplexität der Einrichtung ab. Einfache Cloud-CRMs starten bei 15–30 Euro pro Nutzer und Monat. Dazu kommt die einmalige Einrichtung und Datenmigration. Wir erstellen nach dem Erstgespräch ein transparentes Angebot ohne versteckte Kosten.',
    },
    {
      q: 'Brauche ich ein CRM, wenn ich nur wenige Kunden habe?',
      a: 'Gerade dann. Wenn jeder einzelne Kunde zählt, dürfen keine Anfragen verloren gehen und keine Termine vergessen werden. Ein einfaches CRM bringt schon bei 20–30 aktiven Kunden spürbare Entlastung – vor allem, wenn Sie alleine oder zu zweit arbeiten.',
    },
    {
      q: 'Ist ein CRM nicht zu kompliziert für Handwerker?',
      a: 'Nein, wenn das richtige System gewählt wird. Wir setzen bewusst auf Tools, die intuitiv bedienbar sind und kein IT-Studium voraussetzen. Die Einführung dauert selten länger als einen halben Tag, und nach zwei Wochen Nutzung ist das CRM für die meisten Teams selbstverständlich.',
    },
    {
      q: 'Kann ich das CRM auch auf der Baustelle nutzen?',
      a: 'Ja, das ist sogar einer der größten Vorteile. Moderne CRM-Systeme bieten mobile Apps für iOS und Android. So können Sie Kundendaten abrufen, Aufträge aktualisieren und Fotos hochladen – direkt vor Ort, ohne erst ins Büro fahren zu müssen.',
    },
    {
      q: 'Wie lange dauert die Einführung eines CRM?',
      a: 'Ein typisches Projekt dauert 2–4 Wochen. In der ersten Woche analysieren wir Ihre Abläufe und wählen das System. In der zweiten Woche richten wir alles ein und migrieren Ihre Daten. Danach folgt die Schulung und eine Begleitphase, in der wir Feinheiten anpassen.',
    },
    {
      q: 'Was passiert mit meinen bestehenden Kundendaten?',
      a: 'Wir importieren Ihre vorhandenen Daten ins neue System – egal ob sie in Excel, in einer alten Software oder in Papierform vorliegen. Bei Papierdaten unterstützen wir Sie bei der Digitalisierung, damit nichts verloren geht.',
    },
    {
      q: 'Kann das CRM mit meiner Buchhaltungssoftware verbunden werden?',
      a: 'In den meisten Fällen ja. Gängige Buchhaltungsprogramme wie Lexoffice, SevDesk oder DATEV lassen sich über Schnittstellen anbinden. So fließen Auftrags- und Rechnungsdaten automatisch zwischen den Systemen, ohne doppelte Eingabe.',
    },
    {
      q: 'Bin ich an einen bestimmten Anbieter gebunden?',
      a: 'Nein. Wir empfehlen Systeme, aus denen Sie Ihre Daten jederzeit exportieren können. Sollten Sie später wechseln wollen, ist das möglich. Unser Ziel ist es, Sie unabhängig zu machen – nicht abhängig von einem Anbieter oder von uns.',
    },
  ],

  ctaText: 'Bereit, Zettelchaos gegen Struktur zu tauschen?',

  parentServiceLink: {
    text: 'CRM-Systeme im Überblick',
    href: '/crm-systeme',
  },
  siblingSubpageLinks: [
    { text: 'CRM für Vermietung', href: '/crm-systeme/crm-fuer-vermietung' },
    { text: 'CRM für Dienstleister', href: '/crm-systeme/crm-fuer-dienstleister' },
  ],
  crossServiceLinks: [
    { text: 'Automatisierungen für Anfragen & Termine', href: '/automatisierungen' },
    { text: 'SEO für Handwerker', href: '/seo-top-3-in-google/seo-fuer-handwerker' },
  ],
  areaLinks: buildTier1AreaLinks('CRM für Handwerker'),
};

export default content;
