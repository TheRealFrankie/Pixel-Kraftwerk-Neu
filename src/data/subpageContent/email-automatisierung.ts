import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'E-Mail Automatisierung – Groitzsch & Leipzig – Pixel Kraftwerk richtet Ihre automatischen E-Mail-Workflows ein',
  metaDescription:
    'E-Mail-Workflows automatisieren: Welcome-Serien, Follow-ups, Erinnerungen und Newsletter. Pixel Kraftwerk setzt DSGVO-konforme E-Mail Automatisierung um.',
  primaryKeyword: 'E-Mail Automatisierung',
  secondaryKeywords: [
    'E-Mail-Workflows',
    'automatische E-Mails',
    'Newsletter-Automatisierung',
    'Follow-up E-Mails',
    'E-Mail-Marketing Automatisierung',
  ],
  imageAltTexts: [
    'Automatisierter E-Mail-Workflow: Auslöser startet personalisierte E-Mail-Serie an Kunden',
    'Dashboard mit Übersicht aktiver E-Mail-Automatisierungen und Öffnungsraten',
    'Smartphone zeigt automatisch versendete Willkommens-E-Mail nach Formular-Anmeldung',
  ],

  h1: 'E-Mail Automatisierung für Ihr Unternehmen',
  subheadline: 'Die richtige Mail geht zur richtigen Zeit an den richtigen Kontakt',
  intro:
    'Jeden Tag gehen Kundenkontakte verloren, weil E-Mails zu spät, gar nicht oder mit dem falschen Inhalt versendet werden. Wer manuell auf jede Anfrage antwortet, Follow-ups per Erinnerungszettel plant und Newsletter in Handarbeit zusammenstellt, verschenkt wertvolle Zeit – und Umsatz. E-Mail Automatisierung sorgt dafür, dass die richtige Nachricht zum richtigen Zeitpunkt beim richtigen Empfänger ankommt. Ohne dass Sie jeden Morgen Ihr Postfach durcharbeiten müssen.',
  heroCtaText: 'E-Mail-Automatisierung anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">E-Mails entstehen zu langsam und zu inkonsistent</span>',
    lead: 'Wer E-Mails manuell schreibt, kämpft mit typischen Problemen:',
    bullets: [
      'Follow-ups werden vergessen, weil keiner sich zuständig fühlt',
      'Onboarding-Mails gehen zu spät oder gar nicht raus',
      'Inhalte und Tonalität ändern sich je nach Mitarbeiter',
      'Vertriebschancen gehen verloren, weil „keiner geantwortet hat"',
    ],
    tagline: 'Und je mehr Kunden, desto größer wird das Chaos.',
    details: [
      {
        title: 'Warum manuelle E-Mails nicht skalieren',
        body: 'E-Mail ist der Kanal mit dem besten ROI – aber nur, wenn er zuverlässig bedient wird. Ohne Automatisierung wird Ihre Kommunikation zur Zufalls-Veranstaltung.',
        bullets: [
          'Kein strukturiertes Onboarding',
          'Keine klaren Follow-up-Sequenzen',
          'Keine Personalisierung in der Masse',
          'Keine Statistiken zu Öffnungs- und Klickraten',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Nicht geschriebene Mails sind nicht gewonnene Kunden. Und zu spät geschriebene Mails erreichen oft Kunden, die schon woanders gekauft haben.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Automatisierte E-Mail-Workflows</span>',
    lead: 'Wir bauen Ihnen einen <strong>verlässlichen, markenkonformen E-Mail-Motor</strong>: Welcome-Serien, Follow-ups, Reminder, Reaktivierungen – alles strukturiert und messbar.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Neue Kontakte bekommen sofort eine professionelle Willkommens-Sequenz',
        'Follow-ups werden zeitlich passend versendet',
        'Angebotsbestätigungen, Rechnungen und Reminder laufen automatisch',
        'Inaktive Kunden werden gezielt reaktiviert',
      ],
    },
    blocks: [
      {
        title: 'Was die Automatisierung konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Welcome-E-Mail-Serien',
          'Follow-ups nach Kontakt / Gespräch / Angebot',
          'Erinnerungen an Termine und Fristen',
          'Lead-Nurturing für Interessenten',
          'Re-Engagement inaktiver Kunden',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Saubere Reports statt „Hab ich schon geantwortet?":',
        bullets: [
          'Zustellraten & Öffnungsraten',
          'Klick-Verhalten & Reaktionen',
          'Automatische Übergabe bei Antwort',
          'Identifizierung warmer Leads',
        ],
      },
    ],
    tagline: '➡️ Ihre E-Mail-Kommunikation wird leiser für Ihr Team – und lauter für Ihre Kunden.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist E-Mail Automatisierung?',
    lead: 'E-Mail Automatisierung bedeutet, dass <strong>Auslöser (z. B. Formular-Eintrag, Kauf, Kontaktaufnahme)</strong> vorbereitete E-Mail-Sequenzen anstoßen – personalisiert, zeitgesteuert und messbar.',
    examples: [
      'Nach Formular-Eintrag → Willkommens-Serie',
      'Nach Angebotsversand → Follow-up nach 3 / 7 / 14 Tagen',
      'Nach 90 Tagen Inaktivität → Reaktivierungs-Mail',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Dienstleister, E-Commerce, Coaches, Agenturen, Bildung, B2B-Unternehmen – überall, wo Kontakte gepflegt und Interessenten regelmäßig angesprochen werden müssen.',
      },
      {
        title: 'Was die Automatisierung nicht ist',
        body: '<strong>Wichtig:</strong> Automatisierung ersetzt keine persönliche Beziehung – aber sie stellt sicher, dass wichtige Kontakte nicht einschlafen.',
      },
    ],
  },

  features: {
    headline: 'Was die E-Mail-Automatisierung <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Welcome- und Onboarding-Sequenzen',
      'Follow-up- und Nachfass-Mails',
      'Terminerinnerungen automatisch',
      'Geburtstags- und Anlass-Mails',
      'Lead-Nurturing-Strecken',
      'Reaktivierung inaktiver Kontakte',
      'DSGVO-konform eingerichtet',
    ],
    note: '<strong>Wichtig:</strong> Alle Flows werden <strong>DSGVO-konform</strong> und rechtssicher eingerichtet – mit klarer Opt-In- und Opt-Out-Logik.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet die Automatisierung:',
        bullets: [
          'A/B-Tests & Performance-Optimierung',
          'Dynamische Inhalte & Personalisierung',
          'Segmentierung nach Verhalten',
          'Statistiken zu Conversion & ROI',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'E-Mail-Provider (Brevo, Mailchimp, Klaviyo)',
          'CRM (HubSpot, Pipedrive, Salesforce)',
          'Shop-Systeme (Shopify, WooCommerce)',
          'Automatisierungen via Zapier, Make, n8n',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was ist E-Mail Automatisierung?',
      headingLevel: 'h2',
      paragraphs: [
        'E-Mail Automatisierung bedeutet, dass E-Mails anhand definierter Auslöser und Regeln automatisch versendet werden – ohne dass jemand jedes Mal auf „Senden" klicken muss. Ein Kunde füllt ein Formular aus? Er erhält sofort eine Bestätigung. Ein Interessent lädt ein PDF herunter? Drei Tage später bekommt er eine passende Folge-E-Mail. Ein Bestandskunde hat seit drei Monaten nichts gekauft? Eine freundliche Erinnerung geht raus.',
        'Der Unterschied zum klassischen Newsletter: Automatisierte E-Mails reagieren auf das Verhalten Ihrer Kontakte. Sie sind personalisiert, zeitlich abgestimmt und dadurch deutlich wirksamer als Massen-Mailings.',
        'Für kleine und mittelständische Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und Umgebung ist E-Mail Automatisierung besonders wertvoll: Sie liefert professionelle Kommunikation, die sonst nur mit einem eigenen Marketing-Team möglich wäre.',
      ],
    },
    {
      heading: 'Arten automatisierter E-Mails im Überblick',
      headingLevel: 'h2',
      paragraphs: [
        'Je nach Branche und Geschäftsmodell gibt es verschiedene E-Mail-Typen, die sich automatisieren lassen. Die folgende Übersicht zeigt die gängigsten Varianten und wann sie zum Einsatz kommen:',
      ],
      table: {
        headers: ['E-Mail-Typ', 'Auslöser', 'Typischer Einsatz'],
        rows: [
          ['Welcome-Serie', 'Neue Anmeldung oder erster Kontakt', 'Begrüßung, Vorstellung des Unternehmens, erste Mehrwerte liefern'],
          ['Follow-up-E-Mails', 'Anfrage, Angebot oder Gespräch', 'Nachfassen nach Angeboten, Rückmeldung einholen, nächsten Schritt vorschlagen'],
          ['Erinnerungen', 'Termin, Frist oder Inaktivität', 'Terminerinnerungen, auslaufende Angebote, Warenkorbabbrecher'],
          ['Newsletter-Serien', 'Zeitgesteuert (wöchentlich, monatlich)', 'Regelmäßige Updates, Tipps, Branchennews an segmentierte Empfänger'],
          ['Onboarding-Sequenzen', 'Kauf oder Vertragsabschluss', 'Schritt-für-Schritt-Anleitungen, Hilfestellungen, Zufriedenheitsabfrage'],
          ['Re-Engagement', 'Längere Inaktivität eines Kontakts', 'Reaktivierung inaktiver Kunden mit Sonderangeboten oder neuen Inhalten'],
        ],
      },
    },
    {
      heading: 'Typische Probleme ohne automatisierte E-Mails',
      headingLevel: 'h2',
      paragraphs: [
        'In vielen Betrieben sieht der E-Mail-Alltag so aus: Anfragen werden beantwortet, wenn gerade Zeit ist. Follow-ups nach Angeboten passieren unregelmäßig oder gar nicht. Newsletter werden alle paar Monate verschickt, wenn sich jemand die Zeit nimmt. Und neue Kontakte bekommen nach der Anmeldung – Stille.',
        'Das Ergebnis: Interessenten verlieren das Vertrauen, Bestandskunden fühlen sich vergessen, und das Team verbringt Stunden mit repetitiven E-Mails, die eigentlich automatisch laufen könnten.',
      ],
      bullets: [
        'Anfragen werden zu spät oder inkonsistent beantwortet',
        'Follow-ups nach Angeboten gehen im Tagesgeschäft unter',
        'Neue Kontakte erhalten keinen professionellen Ersteindruck',
        'Newsletter erscheinen unregelmäßig und ohne Segmentierung',
        'Das Team schreibt immer wieder die gleichen E-Mails von Hand',
        'Es gibt keinen Überblick, welcher Kontakt welche E-Mail erhalten hat',
      ],
    },
    {
      heading: 'So funktioniert E-Mail Automatisierung in der Praxis',
      headingLevel: 'h2',
      paragraphs: [
        'Jede Automatisierung besteht aus drei Bausteinen: einem Auslöser (Trigger), einer Bedingung (Wer soll die E-Mail bekommen?) und der eigentlichen Aktion (Welche E-Mail wird gesendet?). Diese Bausteine werden in einem Workflow verknüpft – einer Art Ablaufplan, der genau festlegt, was wann passiert.',
        'Ein typischer Workflow für eine Handwerksfirma könnte so aussehen: Ein Kunde füllt das Kontaktformular auf der Website aus. Sofort erhält er eine Bestätigungs-E-Mail mit den nächsten Schritten. Nach zwei Tagen folgt eine E-Mail mit Referenzprojekten aus seiner Region. Nach fünf Tagen – sofern er noch nicht geantwortet hat – eine freundliche Nachfass-Mail.',
        'Das Team wird parallel informiert und sieht im <a href="/ki-chatbots" class="text-primary-400 hover:underline">Chatbot- oder CRM-System</a>, in welcher Phase sich der Kontakt befindet. Alles läuft im Hintergrund, ohne dass jemand daran denken muss.',
      ],
    },
    {
      heading: 'Tools und Integrationen',
      headingLevel: 'h3',
      paragraphs: [
        'Wir setzen auf bewährte Plattformen wie Brevo (ehemals Sendinblue), Mailchimp, ActiveCampaign oder HubSpot – je nachdem, was zu Ihrer Unternehmensgröße und Ihrem Budget passt. Entscheidend ist nicht das teuerste Tool, sondern das richtige Setup.',
        'Die E-Mail-Automatisierung wird mit Ihren bestehenden Systemen verbunden: Kontaktformulare auf der Website, Ihr CRM, Terminbuchungstools oder auch ein Online-Shop. So fließen alle Daten zusammen und die E-Mails werden auf Basis aktueller Informationen versendet.',
        'Bei Bedarf integrieren wir Automatisierungsplattformen wie Make oder n8n, um auch komplexere Abläufe abzubilden – etwa wenn eine E-Mail nur versendet werden soll, wenn der Kontakt in den letzten 30 Tagen eine bestimmte Seite besucht hat.',
      ],
    },
    {
      heading: 'DSGVO-konforme E-Mail Automatisierung',
      headingLevel: 'h2',
      paragraphs: [
        'Automatisierte E-Mails und Datenschutz schließen sich nicht aus – im Gegenteil. Ein sauber aufgesetztes System sorgt dafür, dass Einwilligungen dokumentiert, Abmeldelinks eingebaut und Datenverarbeitungsverträge korrekt hinterlegt sind.',
        'Konkret achten wir auf folgende Punkte:',
      ],
      bullets: [
        'Double-Opt-in für alle neuen Kontakte – rechtssichere Einwilligung zum E-Mail-Versand',
        'Automatischer Abmeldelink in jeder E-Mail mit sofortiger Verarbeitung',
        'Auftragsverarbeitungsverträge (AVV) mit allen eingesetzten Tools',
        'Hosting und Datenverarbeitung auf Servern innerhalb der EU',
        'Transparente Datenschutzhinweise bei der Anmeldung',
        'Löschfristen und Datenminimierung nach DSGVO-Grundsätzen',
      ],
    },
    {
      heading: 'Welche Unternehmen profitieren besonders?',
      headingLevel: 'h2',
      paragraphs: [
        'E-Mail Automatisierung lohnt sich für jedes Unternehmen, das regelmäßig mit Kunden und Interessenten kommuniziert. Besonders hohen Nutzen sehen wir bei:',
      ],
      bullets: [
        'Handwerksbetrieben, die nach Angebotsversand systematisch nachfassen wollen',
        'Dienstleistern mit beratungsintensiven Angeboten und langen Entscheidungsphasen',
        'Coaches, Trainer und Berater, die Kurse oder Programme verkaufen',
        'Praxen und Kanzleien, die Termine bestätigen und Patienten informieren',
        'Online-Shops mit Warenkorbabbrechern und Bestandskunden-Pflege',
        'Unternehmen in <a href="/leistungsgebiete/halle-saale" class="text-primary-400 hover:underline">Halle (Saale)</a> und der Region Leipzig, die mit begrenztem Team professionell kommunizieren wollen',
      ],
    },
    {
      heading: 'Unser Ablauf: Vom Erstgespräch zum laufenden E-Mail-System',
      headingLevel: 'h2',
      paragraphs: [
        'Wir gehen strukturiert vor, damit Sie jederzeit den Überblick behalten und genau wissen, was als Nächstes passiert:',
      ],
      bullets: [
        '<strong>1. Bestandsaufnahme:</strong> Welche E-Mails versenden Sie heute manuell? Welche Kontaktpunkte gibt es? Wo liegen die größten Zeitfresser?',
        '<strong>2. Workflow-Design:</strong> Gemeinsam definieren wir die Automatisierungen, legen Auslöser fest und formulieren die E-Mail-Inhalte',
        '<strong>3. Technisches Setup:</strong> Wir richten das E-Mail-Tool ein, verbinden es mit Ihren Systemen und konfigurieren die Workflows',
        '<strong>4. Test und Go-Live:</strong> Jeder Workflow wird ausführlich getestet, bevor er live geht – inklusive Testversand und Prüfung der Zustellbarkeit',
        '<strong>5. Optimierung:</strong> Nach dem Start überwachen wir Öffnungsraten, Klickraten und Abmeldungen und passen die Inhalte bei Bedarf an',
      ],
    },
    {
      heading: 'Häufige Bedenken – und warum sie unbegründet sind',
      headingLevel: 'h3',
      paragraphs: [
        'Viele Unternehmer befürchten, dass automatisierte E-Mails unpersönlich wirken. Das Gegenteil ist der Fall: Weil die E-Mails auf das Verhalten und die Interessen des Empfängers abgestimmt sind, fühlen sie sich relevanter an als ein generischer Newsletter.',
        'Ein weiterer Einwand: „Meine Kunden wollen keine automatischen E-Mails." Erfahrungsgemäß liegt das Problem nicht bei der Automatisierung, sondern beim Inhalt. Wer nützliche Informationen, klare nächste Schritte und einen freundlichen Ton liefert, wird gelesen – egal ob die E-Mail manuell oder automatisch verschickt wurde.',
        'Die Technik muss auch nicht kompliziert sein. Wir sorgen dafür, dass Ihr Team das System nach der Einrichtung eigenständig bedienen kann. Neue E-Mails anlegen, Texte anpassen, Workflows aktivieren oder pausieren – dafür braucht es keine Programmierkenntnisse.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet E-Mail Automatisierung?',
      a: 'Die Kosten setzen sich aus dem einmaligen Setup (Strategie, Workflow-Aufbau, Texterstellung, Integration) und den monatlichen Kosten für das E-Mail-Tool zusammen. Das Setup liegt je nach Umfang zwischen 800 und 3.000 Euro. Die Tool-Kosten starten bei vielen Anbietern ab 0 Euro für kleine Kontaktlisten.',
    },
    {
      q: 'Wie lange dauert es, bis die Automatisierung läuft?',
      a: 'Ein typisches Projekt dauert 2–4 Wochen. Einfache Setups mit einer Welcome-Serie und Follow-up-Mails können auch innerhalb einer Woche live gehen. Komplexere Projekte mit mehreren Workflows und Integrationen brauchen entsprechend mehr Zeit.',
    },
    {
      q: 'Brauche ich ein bestimmtes E-Mail-Tool?',
      a: 'Nein. Wir arbeiten mit den gängigen Plattformen – Brevo, Mailchimp, ActiveCampaign, HubSpot und anderen. Falls Sie noch kein Tool nutzen, empfehlen wir eines, das zu Ihrer Kontaktgröße und Ihrem Budget passt.',
    },
    {
      q: 'Ist E-Mail Automatisierung DSGVO-konform?',
      a: 'Ja, wenn sie richtig aufgesetzt wird. Wir implementieren Double-Opt-in, automatische Abmelde-Links, AVV-Verträge und nutzen Tools mit EU-Serverstandorten. Die rechtlichen Anforderungen berücksichtigen wir von Anfang an.',
    },
    {
      q: 'Wirken automatische E-Mails nicht unpersönlich?',
      a: 'Nein – im Gegenteil. Automatisierte E-Mails werden personalisiert und auf das Verhalten des Empfängers abgestimmt. Eine E-Mail, die drei Tage nach einer Anfrage mit passenden Referenzprojekten kommt, wirkt deutlich persönlicher als eine generische Sammel-Mail.',
    },
    {
      q: 'Kann ich die E-Mail-Texte selbst anpassen?',
      a: 'Ja. Nach der Einrichtung zeigen wir Ihnen, wie Sie Texte ändern, neue E-Mails hinzufügen und Workflows anpassen können. Die meisten Änderungen sind über eine benutzerfreundliche Oberfläche möglich – ohne technische Vorkenntnisse.',
    },
    {
      q: 'Funktioniert E-Mail Automatisierung auch mit wenigen Kontakten?',
      a: 'Absolut. Gerade bei kleinen Kontaktlisten zählt jeder einzelne Lead. Eine automatisierte Welcome-Serie sorgt dafür, dass neue Kontakte sofort professionell betreut werden – unabhängig davon, ob Sie 20 oder 2.000 Kontakte haben.',
    },
    {
      q: 'Wie messe ich den Erfolg der E-Mail Automatisierung?',
      a: 'Wir richten ein Reporting ein, das Öffnungsraten, Klickraten, Abmeldungen und Conversions transparent macht. So sehen Sie genau, welche E-Mails funktionieren und wo es Optimierungspotenzial gibt.',
    },
  ],

  ctaText: 'Bereit, Ihre E-Mail-Kommunikation auf Autopilot zu stellen?',

  parentServiceLink: {
    text: 'Automatisierungen im Überblick',
    href: '/automatisierungen',
  },
  siblingSubpageLinks: [
    { text: 'Leadgenerierung automatisieren', href: '/automatisierungen/leadgenerierung' },
    { text: 'Terminbuchung automatisieren', href: '/automatisierungen/terminbuchung' },
    { text: 'Angebotsprozesse automatisieren', href: '/automatisierungen/angebotsprozesse' },
  ],
  crossServiceLinks: [
    { text: 'KI-Chatbots für Ihre Website', href: '/ki-chatbots' },
    { text: 'CRM-Systeme', href: '/crm-systeme' },
  ],
  areaLinks: buildTier1AreaLinks('E-Mail Automatisierung'),
};

export default content;
