import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'CRM für Dienstleister – Groitzsch & Leipzig – Pixel Kraftwerk richtet Ihr Kundensystem ein',
  metaDescription:
    'CRM für Dienstleister: Kundenbeziehungen, Projekte und Follow-ups zentral verwalten. Pixel Kraftwerk richtet Ihr CRM in Leipzig & Region ein.',
  primaryKeyword: 'CRM für Dienstleister',
  secondaryKeywords: [
    'Dienstleister-CRM',
    'Kundenverwaltung Dienstleister',
    'CRM Berater',
    'CRM Agentur',
    'Kundenmanagement Software',
  ],
  imageAltTexts: [
    'CRM-Dashboard für Dienstleister mit Kundenliste, Projektübersicht und offenen Aufgaben',
    'Dienstleister nutzt CRM-System auf Laptop zur Pflege von Kundenbeziehungen',
    'Automatisierte Follow-up-Erinnerung im CRM-System für einen Beratungskunden',
  ],

  h1: 'CRM für Dienstleister',
  subheadline: 'Zentrale Kundenverwaltung, die Ihrer Beratung den Rücken freihält',
  intro:
    'Berater, Agenturen, Coaches, Kanzleien, Architekten – als Dienstleister lebt Ihr Geschäft von Beziehungen. Doch wenn Kundendaten in E-Mail-Postfächern verschwinden, Projekte in verschiedenen Tools verstreut sind und Follow-ups vergessen werden, leidet genau das, was Sie auszeichnet: die persönliche Betreuung. Ein CRM-System bringt Ordnung in Ihre Kundenbeziehungen – und gibt Ihnen die Zeit zurück, die Sie für Ihre eigentliche Arbeit brauchen.',
  heroCtaText: 'Dienstleister-CRM anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Kundenwissen ist überall – aber nicht zentral</span>',
    lead: 'Als Dienstleister jonglieren Sie täglich mit unterschiedlichsten Kundendaten:',
    bullets: [
      'E-Mail-Verläufe in Outlook / Gmail',
      'Angebote in Word / PDF-Ordnern',
      'Notizen in OneNote / Notion / auf Papier',
      'Termine in mehreren Kalendern',
    ],
    tagline: 'Wer Ihre Kunden kennen will, muss ewig suchen – und findet oft nur einen Teil.',
    details: [
      {
        title: 'Warum klassische Tools nicht mehr reichen',
        body: 'Je mehr Projekte parallel laufen, desto unübersichtlicher wird es. Besonders im Team: Wer hat zuletzt mit Kunde X gesprochen? Wo steht Projekt Y?',
        bullets: [
          'Keine zentrale Historie',
          'Keine Aufgaben- und Follow-up-Logik',
          'Keine Sales-Pipeline für neue Projekte',
          'Keine Team-Übersicht',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Beratungsqualität leidet, sobald Sie 5 Minuten suchen müssen, bevor Sie in ein Gespräch gehen. Und jeder vergessene Follow-up ist ein Folgeauftrag, der nicht kommt.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Ein CRM für Dienstleister-Alltag</span>',
    lead: 'Ein CRM für Dienstleister bündelt <strong>Kundendaten, Projekte, Kommunikation und Aufgaben</strong> an einem zentralen Ort – angepasst an Ihre Prozesse.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Jeder Kunde hat eine vollständige digitale Akte',
        'Alle E-Mails, Angebote, Notizen sind verknüpft',
        'Follow-ups und Wiedervorlagen werden automatisch gesetzt',
        'Das Team hat jederzeit Überblick über den Stand',
      ],
    },
    blocks: [
      {
        title: 'Was das CRM konkret bündelt',
        intro: 'Pro Kunde sehen Sie:',
        bullets: [
          'Kontakt- und Rechnungsdaten',
          'Laufende und vergangene Projekte',
          'Gesprächsnotizen und Entscheidungen',
          'Verknüpfte Angebote und Rechnungen',
          'Nächste Aufgaben und Termine',
        ],
      },
      {
        title: 'Wie das Ihren Alltag verändert',
        intro: 'Statt suchen → sofort arbeiten:',
        bullets: [
          'Vorbereitung auf Kundengespräche in 2 Minuten',
          'Keine verpassten Termine / Fristen',
          'Klare Übergaben im Team',
          'Mehr Zeit für echte Beratung',
        ],
      },
    ],
    tagline: '➡️ Persönliche Beratung wird nicht digitalisiert – nur die Zettelwirtschaft dahinter.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist ein CRM für Dienstleister?',
    lead: 'Ein CRM für Dienstleister ist ein <strong>zentrales System für Kundenbeziehungen, Projekte und Kommunikation</strong> – zugeschnitten auf beratungsintensive Geschäftsmodelle mit wenigen, aber wichtigen Kunden.',
    examples: [
      'Berater mit 30–100 Key Accounts',
      'Agentur mit laufenden Projekten',
      'Kanzlei mit Mandanten-Historie',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Berater, Coaches, Agenturen, Kanzleien, Architekten, Steuerberater – überall dort, wo Beziehungen, Projekte und Wiederholgeschäft das Fundament sind.',
      },
      {
        title: 'Was ein CRM nicht ist',
        body: '<strong>Wichtig:</strong> Ein CRM ist kein Tool, das Ihnen die Arbeit abnimmt. Es ist ein Werkzeug, das die Arbeit sichtbar, strukturiert und anschlussfähig macht.',
      },
    ],
  },

  features: {
    headline: 'Was das Dienstleister-CRM <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Zentrale Kunden- und Projektverwaltung',
      'Sales-Pipeline für Anfragen und Angebote',
      'Aufgaben- und Follow-up-Management',
      'E-Mail- und Dokument-Integration',
      'Team-Sichten mit klaren Zuständigkeiten',
      'Reports zu Umsatz, Projekten, Auslastung',
    ],
    note: '<strong>Wichtig:</strong> Wir wählen das passende CRM-Tool (HubSpot, Pipedrive, Notion, eigenes) <strong>entlang Ihrer Prozesse</strong> – nicht andersherum.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das CRM:',
        bullets: [
          'Workflows und Automatisierungen',
          'Angebote und Verträge direkt aus dem CRM',
          'Zeiterfassung und Projektauslastung',
          'Kundenportal auf Wunsch',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'E-Mail (Google Workspace, Microsoft 365)',
          'Kalender und Meeting-Tools',
          'Buchhaltung (lexoffice, sevDesk, DATEV)',
          'Kommunikationskanäle (WhatsApp, Chat, Telefon)',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Warum Dienstleister ein CRM-System brauchen',
      headingLevel: 'h2',
      paragraphs: [
        'Im Handwerk lässt sich Erfolg an fertigen Baustellen messen. Im Dienstleistungsbereich ist das schwieriger – hier zählt, wie gut Sie Kundenbeziehungen pflegen, Projekte koordinieren und Folgeaufträge generieren. Genau dabei unterstützt ein CRM-System.',
        'Dienstleister arbeiten oft mit langen Vertriebszyklen, wiederkehrenden Kunden und komplexen Projektverläufen. Ein Berater betreut vielleicht 30 aktive Mandanten gleichzeitig, eine Agentur jongliert 15 laufende Projekte, ein Coach hat 50 Kontakte in verschiedenen Phasen der Zusammenarbeit. Ohne ein zentrales System verliert man schnell den Überblick – und damit Umsatz.',
        'Für Dienstleister in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und <a href="/leistungsgebiete/gera" class="text-primary-400 hover:underline">Gera</a> kommt hinzu: Wer regional arbeitet, lebt von Empfehlungen und Stammkunden. Ein CRM hilft Ihnen, diese Beziehungen systematisch zu pflegen, statt sich auf Ihr Gedächtnis zu verlassen.',
      ],
    },
    {
      heading: 'Ohne CRM vs. mit CRM: Der Unterschied im Dienstleistungsalltag',
      headingLevel: 'h2',
      paragraphs: [
        'Die folgende Tabelle zeigt, wie sich der Arbeitsalltag von Dienstleistern ohne und mit CRM-System konkret unterscheidet:',
      ],
      table: {
        headers: ['Bereich', 'Ohne CRM', 'Mit CRM'],
        rows: [
          [
            'Kundendaten',
            'Verstreut in E-Mails, Excel-Listen und Notizen',
            'Zentral gepflegt mit vollständiger Kontakthistorie',
          ],
          [
            'Projektübersicht',
            'Jeder Mitarbeiter hat seinen eigenen Überblick',
            'Alle Projekte, Aufgaben und Deadlines an einem Ort',
          ],
          [
            'Follow-ups',
            'Werden vergessen oder kommen zu spät',
            'Automatische Erinnerungen und geplante Nachfass-Aktionen',
          ],
          [
            'Angebotsverfolgung',
            'Unklar, welche Angebote offen sind',
            'Pipeline zeigt Status jedes Angebots in Echtzeit',
          ],
          [
            'Zeiterfassung',
            'Separate Tools oder gar keine Erfassung',
            'Direkt am Kunden und Projekt dokumentiert',
          ],
          [
            'Empfehlungen',
            'Zufällig und nicht nachverfolgbar',
            'Empfehlungsgeber werden dokumentiert und bedankt',
          ],
          [
            'Reporting',
            'Manuell zusammengestellt, selten aktuell',
            'Echtzeit-Dashboards zu Umsatz, Pipeline und Auslastung',
          ],
          [
            'Kundenbindung',
            'Reaktiv – erst bei Problemen',
            'Proaktiv – regelmäßige Touchpoints und gezielte Ansprache',
          ],
        ],
      },
    },
    {
      heading: 'Kundenlebenszyklus im CRM abbilden',
      headingLevel: 'h2',
      paragraphs: [
        'Jeder Kunde durchläuft Phasen: vom Erstkontakt über die Angebotsphase zur aktiven Zusammenarbeit, Nachbetreuung und – im besten Fall – zum Folgeauftrag. Ein CRM bildet diesen gesamten Lebenszyklus ab.',
        'Im Erstkontakt erfassen Sie automatisch, woher der Lead kommt – ob über Ihre <a href="/automatisierungen/leadgenerierung" class="text-primary-400 hover:underline">automatisierte Leadgenerierung</a>, eine Empfehlung oder einen direkten Anruf. In der Angebotsphase verfolgen Sie, welche Angebote offen sind, wann nachgefasst werden muss und wie die Erfolgsquote aussieht. Während der Zusammenarbeit dokumentieren Sie Projektfortschritte, Besprechungsnotizen und wichtige Vereinbarungen.',
        'Nach Projektabschluss sorgt das CRM dafür, dass Sie den Kontakt nicht verlieren: automatische Check-ins nach drei Monaten, Geburtstagsgrüße oder ein kurzer Hinweis, wenn ein relevantes Thema aufkommt. So werden aus einmaligen Kunden langfristige Partner.',
      ],
    },
    {
      heading: 'Projekte und Aufgaben direkt im CRM verwalten',
      headingLevel: 'h2',
      paragraphs: [
        'Für viele Dienstleister ist die Grenze zwischen CRM und Projektmanagement fließend. Ein Kundenauftrag ist gleichzeitig ein Projekt mit Meilensteinen, Aufgaben und Deadlines. Moderne CRM-Systeme bilden das ab.',
        'Statt zwischen drei verschiedenen Tools zu wechseln – Kundendaten hier, Aufgaben dort, Kommunikation woanders – haben Sie alles in einem System. Beim Öffnen eines Kundenprofils sehen Sie sofort: aktuelle Projekte, offene Aufgaben, letzte Kommunikation und ausstehende Rechnungen.',
        'Das ist besonders wertvoll, wenn mehrere Teammitglieder an einem Kunden arbeiten. Jeder sieht, was der andere gemacht hat, welche Absprachen getroffen wurden und was als Nächstes ansteht. Keine doppelte Arbeit, keine vergessenen Aufgaben.',
      ],
    },
    {
      heading: 'Zeiterfassung und Abrechnungsintegration',
      headingLevel: 'h3',
      paragraphs: [
        'Dienstleister rechnen häufig nach Stunden ab – ob Berater, Anwälte, Designer oder IT-Spezialisten. Wenn die Zeiterfassung getrennt vom Kundensystem läuft, entstehen Lücken: Stunden werden vergessen, die Zuordnung zum Projekt stimmt nicht, und am Monatsende fehlen Informationen für die Rechnung.',
        'Ein CRM mit integrierter Zeiterfassung löst dieses Problem. Sie starten den Timer direkt am Kunden oder Projekt, erfasste Stunden fließen automatisch in die Projektübersicht und können per Knopfdruck in eine Rechnung überführt werden. So geht nichts verloren, und die Abrechnung wird vom zeitfressenden Monatsprojekt zur Routineaufgabe.',
      ],
    },
    {
      heading: 'Angebote erstellen und nachverfolgen',
      headingLevel: 'h2',
      paragraphs: [
        'Für Dienstleister ist die Angebotsphase entscheidend. Zwischen dem Erstgespräch und der Unterschrift liegen oft Wochen – manchmal Monate. In dieser Zeit dürfen Sie den Kontakt nicht verlieren.',
        'Ein CRM mit Angebotsfunktion zeigt Ihnen auf einen Blick: Welche Angebote sind offen? Seit wann? Bei welchem Kunden sollte nachgefasst werden? Wie hoch ist das Gesamtvolumen in der Pipeline? Diese Transparenz hilft Ihnen, Ihre Vertriebsaktivitäten gezielt zu steuern, statt nach Bauchgefühl zu arbeiten.',
        'Viele Systeme ermöglichen es zudem, Angebote direkt aus dem CRM heraus zu erstellen – mit Vorlagen, individuellen Textbausteinen und automatischer Übernahme der Kundendaten. Das spart Zeit und reduziert Fehler.',
      ],
    },
    {
      heading: 'Automatische Follow-ups: Kein Kontakt wird vergessen',
      headingLevel: 'h2',
      paragraphs: [
        'Im Dienstleistungsgeschäft entscheidet oft das Timing. Wer nach dem Erstgespräch drei Wochen nichts von sich hören lässt, verliert den Auftrag an jemanden, der schneller war. Wer einen bestehenden Kunden sechs Monate ignoriert, wird beim nächsten Bedarf nicht mehr angerufen.',
        'Automatische Follow-up-Sequenzen im CRM verhindern das. Sie definieren einmalig die Regeln: Drei Tage nach dem Erstgespräch eine Zusammenfassung senden, nach einer Woche nachfragen, ob Fragen aufgekommen sind, nach einem Monat einen Mehrwert-Impuls schicken. Das System erinnert Sie oder verschickt die Nachrichten automatisch.',
        'Auch für bestehende Kunden lassen sich Touchpoints planen: Quartalschecks, Geburtstagsnachrichten oder Hinweise auf neue Leistungen. So pflegen Sie Beziehungen, ohne jeden Kontakt manuell im Kopf behalten zu müssen. In Kombination mit einem <a href="/ki-chatbots" class="text-primary-400 hover:underline">KI-Chatbot auf Ihrer Website</a> erfassen Sie zudem neue Anfragen rund um die Uhr.',
      ],
    },
    {
      heading: 'Empfehlungen systematisch nutzen',
      headingLevel: 'h2',
      paragraphs: [
        'Empfehlungen sind für Dienstleister der wertvollste Vertriebskanal. Doch in den meisten Unternehmen werden sie nicht systematisch erfasst – man weiß oft nicht einmal, welcher Kunde wie viele Empfehlungen ausgesprochen hat.',
        'Im CRM können Sie für jeden Neukunden dokumentieren, wer ihn empfohlen hat. Über die Zeit entsteht ein klares Bild: Welche Kunden sind Ihre besten Empfehlungsgeber? Welche Projekte führen zu Folgeempfehlungen? Und wie können Sie diese Kunden gezielt wertschätzen – etwa mit einem persönlichen Dank, einem kleinen Geschenk oder einer Einladung?',
        'Dieses Wissen ist Gold wert. Statt Empfehlungen dem Zufall zu überlassen, bauen Sie ein systematisches Empfehlungsmanagement auf, das Ihr Wachstum nachhaltig stützt.',
      ],
    },
    {
      heading: 'Reporting und Kennzahlen für Dienstleister',
      headingLevel: 'h2',
      paragraphs: [
        'Wie viel Umsatz steckt in Ihrer aktuellen Pipeline? Wie hoch ist Ihre Abschlussquote? Welche Leistungen sind am profitabelsten? Wie lange dauert es durchschnittlich vom Erstkontakt bis zum Auftrag? Diese Fragen sollte jeder Dienstleister beantworten können – doch ohne CRM fehlen die Daten.',
        'Ein gut eingerichtetes CRM liefert Ihnen Echtzeit-Dashboards mit den Kennzahlen, die für Ihr Geschäft relevant sind. Sie erkennen Trends frühzeitig, sehen, wo Engpässe entstehen, und können datenbasiert entscheiden, statt zu raten.',
        'Für Unternehmen mit mehreren Mitarbeitern wird das noch wertvoller: Sie sehen, wie die Auslastung verteilt ist, welche Teammitglieder welche Kunden betreuen und wo Kapazitäten frei werden. Das macht Personalplanung und Ressourcensteuerung deutlich einfacher.',
      ],
    },
    {
      heading: 'Das richtige CRM für Ihre Unternehmensgröße wählen',
      headingLevel: 'h2',
      paragraphs: [
        'Nicht jedes CRM passt zu jedem Dienstleister. Ein Einzelberater braucht kein Enterprise-System mit 200 Funktionen. Und eine Agentur mit 15 Mitarbeitern kommt mit einer einfachen Kontaktliste nicht weit.',
        'Für Solo-Selbstständige und Kleinunternehmen empfehlen wir schlanke Systeme, die sich schnell einrichten lassen und im Alltag nicht im Weg stehen. Für wachsende Teams setzen wir auf Lösungen, die mitwachsen: mehr Automatisierung, differenziertere Pipelines, Teamfunktionen und tiefere Integrationen.',
        'Entscheidend ist nicht die Anzahl der Features, sondern ob das System zu Ihren Abläufen passt. Deshalb analysieren wir vor jeder Empfehlung Ihre Arbeitsweise, Ihre Teamgröße und Ihre Ziele. Sie bekommen ein CRM, das Sie tatsächlich nutzen – kein teures Werkzeug, das nach zwei Wochen verstaubt.',
      ],
    },
    {
      heading: 'Unser Einrichtungsprozess: In 4 Schritten zum CRM',
      headingLevel: 'h2',
      paragraphs: [
        'Bei Pixel Kraftwerk richten wir Ihr CRM-System strukturiert ein – damit es von Tag eins funktioniert:',
      ],
      bullets: [
        '<strong>1. Analyse:</strong> Wir verstehen Ihre Kundenstruktur, Ihre Abläufe und Ihre Engpässe. Welche Daten sind wichtig? Welche Prozesse sollen abgebildet werden?',
        '<strong>2. Systemauswahl & Konfiguration:</strong> Basierend auf Ihren Anforderungen wählen wir das passende CRM und richten es ein – Pipelines, Felder, Automatisierungen, Vorlagen',
        '<strong>3. Datenmigration & Integration:</strong> Bestehende Kontakte werden importiert, Ihr E-Mail-System und weitere Tools werden angebunden',
        '<strong>4. Schulung & Begleitung:</strong> Ihr Team lernt das System kennen und wir begleiten Sie in den ersten Wochen, bis alles sitzt',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet ein CRM-System für Dienstleister?',
      a: 'Die Kosten setzen sich aus der Softwarelizenz und der Einrichtung zusammen. Viele CRM-Systeme bieten kostenlose Einstiegstarife für kleine Teams. Die professionelle Einrichtung durch Pixel Kraftwerk berechnen wir als transparentes Pauschalpaket – abhängig von Umfang und Komplexität.',
    },
    {
      q: 'Wie lange dauert die CRM-Einrichtung?',
      a: 'Ein typisches CRM-Projekt dauert 2–4 Wochen. Bei einfacheren Setups für Solo-Selbstständige kann es auch in einer Woche stehen. Komplexere Projekte mit Datenmigration, mehreren Pipelines und Teamschulungen brauchen bis zu 6 Wochen.',
    },
    {
      q: 'Muss ich alle Kundendaten manuell übertragen?',
      a: 'Nein. Wir importieren Ihre bestehenden Kontakte aus Excel-Listen, E-Mail-Programmen oder anderen Systemen automatisch ins neue CRM. Dabei bereinigen wir Dubletten und sorgen für eine saubere Datenbasis.',
    },
    {
      q: 'Welches CRM-System empfehlen Sie für Dienstleister?',
      a: 'Das hängt von Ihrer Unternehmensgröße und Ihren Anforderungen ab. Für kleine Teams eignen sich schlanke Lösungen wie Pipedrive oder HubSpot CRM. Für größere Dienstleister mit komplexen Abläufen kommen umfangreichere Systeme infrage. Wir beraten Sie individuell nach der Bestandsaufnahme.',
    },
    {
      q: 'Kann ich mein CRM auch mobil nutzen?',
      a: 'Ja. Alle Systeme, die wir einsetzen, bieten mobile Apps für iOS und Android. So können Sie Kundendaten auch unterwegs abrufen, Notizen nach einem Meeting erfassen oder Aufgaben abhaken – ob beim Kundentermin in Leipzig oder auf dem Weg nach Gera.',
    },
    {
      q: 'Funktioniert das CRM auch für Einzelunternehmer?',
      a: 'Gerade für Einzelunternehmer ist ein CRM wertvoll, weil Sie keinen Kollegen haben, der an offene Aufgaben erinnert. Wir richten das System so ein, dass es schlank bleibt und im Tagesgeschäft nicht mehr als 10 Minuten pro Tag beansprucht.',
    },
    {
      q: 'Ist ein CRM DSGVO-konform?',
      a: 'Ja, wenn es richtig eingerichtet ist. Wir achten auf europäische Serverstandorte, korrekte Einwilligungsprozesse und Löschfristen. Im Einrichtungsprozess konfigurieren wir die Datenschutz-Einstellungen passend zu Ihrer Branche und Ihrem Kundenstamm.',
    },
    {
      q: 'Kann ich vom CRM aus auch E-Mails und Angebote versenden?',
      a: 'Ja. Die meisten CRM-Systeme ermöglichen den Versand von E-Mails direkt aus der Kundenakte. Auch Angebote können mit Vorlagen erstellt und als PDF versendet werden. Jede Kommunikation wird automatisch dokumentiert, sodass die komplette Historie jederzeit einsehbar ist.',
    },
  ],

  ctaText: 'Bereit, Ihre Kundenbeziehungen professionell zu managen?',

  parentServiceLink: {
    text: 'CRM-Systeme im Überblick',
    href: '/crm-systeme',
  },
  siblingSubpageLinks: [
    { text: 'CRM für Handwerker', href: '/crm-systeme/crm-fuer-handwerker' },
    { text: 'CRM für Vermietung', href: '/crm-systeme/crm-fuer-vermietung' },
  ],
  crossServiceLinks: [
    { text: 'Leadgenerierung automatisieren', href: '/automatisierungen/leadgenerierung' },
    { text: 'KI-Chatbots für Ihre Website', href: '/ki-chatbots' },
  ],
  areaLinks: buildTier1AreaLinks('CRM für Dienstleister'),
};

export default content;
