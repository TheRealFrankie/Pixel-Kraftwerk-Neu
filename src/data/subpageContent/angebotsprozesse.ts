import type { SubpageContent } from '../serviceSubpages';
import { buildTier1AreaLinks } from '../serviceSubpages';

const content: SubpageContent = {
  metaTitle:
    'Angebotsprozesse automatisieren – Groitzsch & Leipzig – Pixel Kraftwerk erstellt, versendet und verfolgt Ihre Angebote automatisch',
  metaDescription:
    'Angebote automatisch erstellen, versenden und nachfassen. Pixel Kraftwerk automatisiert Ihre Angebotsprozesse in Leipzig & Region – schneller, fehlerfrei, professionell.',
  primaryKeyword: 'Angebotsprozesse automatisieren',
  secondaryKeywords: [
    'Angebotserstellung automatisieren',
    'automatische Angebote',
    'Angebotsautomatisierung',
    'digitale Angebotserstellung',
    'Angebotsverfolgung',
  ],
  imageAltTexts: [
    'Automatisierter Angebotsprozess: Anfrage wird erfasst und professionelles Angebot automatisch erstellt',
    'Dashboard mit Angebotsübersicht, Status-Tracking und automatischer Nachverfolgung',
    'CRM-Integration generiert personalisiertes Angebot aus Kundendaten und Vorlagen',
  ],

  h1: 'Angebotsprozesse automatisieren',
  subheadline: 'Professionelle Angebote in Minuten statt Stunden',
  intro:
    'Jedes Angebot, das zu spät kommt, ist eine verpasste Chance. Wenn Angebote manuell geschrieben, formatiert und versendet werden, kostet das Zeit – und in dieser Zeit hat der Interessent vielleicht schon bei der Konkurrenz unterschrieben. Automatisierte Angebotsprozesse sorgen dafür, dass professionelle, individuell angepasste Angebote in Minuten statt Stunden beim Kunden landen. Ohne Copy-Paste-Fehler, ohne vergessene Follow-ups.',
  heroCtaText: 'Angebotsautomatisierung anfragen',

  problem: {
    headline: 'Das Problem: <span class="text-primary-500">Angebote kosten zu viel Zeit – und kommen zu spät</span>',
    lead: 'Die klassische Angebotsrealität in vielen Unternehmen:',
    bullets: [
      'Jedes Angebot wird in Word oder Excel per Hand zusammengebaut',
      'Preise, Texte und Leistungen stammen aus alten Angeboten (Copy & Paste)',
      'Tippfehler und veraltete Preise schleichen sich ein',
      'Nach dem Versand wird selten nachgefasst',
    ],
    tagline: 'Das bremst Ihren Vertrieb und kostet Umsatz – jedes Mal.',
    details: [
      {
        title: 'Warum manuelle Angebote Auftragsverluste verursachen',
        body: 'Wer nach einer Anfrage drei Tage auf das Angebot wartet, hat sich bis dahin bereits woanders umgesehen. Geschwindigkeit ist heute ein zentraler Wettbewerbsfaktor.',
        bullets: [
          'Keine einheitliche Vorlage / Corporate Design',
          'Keine Wiederverwendung geprüfter Textbausteine',
          'Kein Status-Tracking (offen / geprüft / abgelehnt)',
          'Kein automatischer Follow-up',
        ],
      },
      {
        title: 'Was das Sie täglich kostet',
        body: 'Jede Stunde, die Angebotsverwaltung bindet, fehlt im Kundengespräch. Und jedes verspätete Angebot ist ein potenziell verlorener Auftrag.',
      },
    ],
  },

  solution: {
    headline: 'Die Lösung: <span class="text-primary-500">Automatisierte Angebotsprozesse</span>',
    lead: 'Anfrage rein → Angebot raus – <strong>in Minuten statt Stunden</strong>, mit konsistenter Qualität und automatischem Follow-up.',
    primary: {
      title: 'In der Praxis bedeutet das:',
      bullets: [
        'Anfragen fließen automatisch in ein Angebotstool',
        'Angebote werden per Vorlage erstellt – individuell befüllt',
        'Freigabe, Versand und Nachverfolgung laufen automatisch',
        'Konversionsraten werden messbar',
      ],
    },
    blocks: [
      {
        title: 'Was die Automatisierung konkret übernimmt',
        intro: 'Je nach Setup:',
        bullets: [
          'Vorlagen mit dynamischen Bausteinen',
          'Automatisches Einfügen von Kunden- und Leistungsdaten',
          'PDF-Generierung im Corporate Design',
          'Versand per E-Mail mit Tracking',
          'Follow-up nach 3 / 7 / 14 Tagen',
        ],
      },
      {
        title: 'Was bei Ihrem Team ankommt',
        intro: 'Klarer Angebotsstatus statt Suchen:',
        bullets: [
          'Offene Angebote im Dashboard',
          'Wer hat reagiert? Wer nicht?',
          'Automatischer Hinweis bei Reaktion',
          'Nachfass-Sequenz als Automatik',
        ],
      },
    ],
    tagline: '➡️ Ihr Vertrieb gewinnt Tempo – ohne Qualitätsverlust.',
  },

  definition: {
    headline: 'Kurz erklärt: Was ist Angebotsautomatisierung?',
    lead: 'Automatisierte Angebotsprozesse bedeuten, dass <strong>aus einer Anfrage in wenigen Klicks ein professionelles, personalisiertes Angebot</strong> entsteht – mit einheitlichem Design, geprüften Inhalten und automatischem Versand und Nachfass-Rhythmus.',
    examples: [
      'Anfrage über Formular → Angebot in 15 Minuten',
      'Kalkulation aus CRM-Daten + Textbausteinen',
      'Automatisches Follow-up bei ausbleibender Reaktion',
    ],
    blocks: [
      {
        title: 'Für wen sich das besonders lohnt',
        body: 'Für Dienstleister, Agenturen, Handwerk, Projektgeschäft, B2B-Vertrieb – überall, wo Angebote ein zentraler Teil des Vertriebsprozesses sind.',
      },
      {
        title: 'Was die Automatisierung nicht ist',
        body: '<strong>Wichtig:</strong> Sie ersetzt keine Preisfindung oder Strategie – aber sie macht aus der Angebotsverwaltung einen sauberen, schnellen Prozess.',
      },
    ],
  },

  features: {
    headline: 'Was die Angebotsautomatisierung <span class="text-primary-500">leistet</span>',
    primaryList: [
      'Angebotserstellung in Minuten',
      'Dynamische Vorlagen + Textbausteine',
      'Einheitliches Corporate Design',
      'Automatischer Versand + Tracking',
      'Follow-up-Sequenzen',
      'Konversions-Reporting',
    ],
    note: '<strong>Wichtig:</strong> Die Automatisierung wird <strong>an Ihren bisherigen Angebotsprozess angepasst</strong> – wir zwingen Sie nicht in ein Schema F.',
    groups: [
      {
        title: 'Funktionen im Überblick',
        intro: 'Je nach Setup bietet das System:',
        bullets: [
          'Mehrere Angebotstypen (Pauschal, Zeit, Paket)',
          'Digitale Unterschrift',
          'Zahlungsabwicklung auf Wunsch',
          'Status-Dashboard + Auswertungen',
        ],
      },
      {
        title: 'Optional: Integrationen',
        intro: 'Auf Wunsch verbinden wir:',
        bullets: [
          'CRM (HubSpot, Pipedrive, Salesforce)',
          'Buchhaltung (lexoffice, sevDesk)',
          'Angebots-Tools (Qwilr, PandaDoc, Better Proposals)',
          'E-Sign-Dienste (DocuSign, HelloSign)',
        ],
      },
    ],
  },

  sections: [
    {
      heading: 'Was bedeutet es, Angebotsprozesse zu automatisieren?',
      headingLevel: 'h2',
      paragraphs: [
        'Angebotsprozesse automatisieren heißt, den gesamten Ablauf von der eingehenden Anfrage bis zum unterschriebenen Auftrag digital abzubilden und weitgehend ohne manuelle Eingriffe ablaufen zu lassen. Das umfasst die Erfassung der Kundenanforderungen, die Auswahl passender Leistungspositionen, die Erstellung eines professionell formatierten Angebots, den Versand und die systematische Nachverfolgung.',
        'Das Ziel ist nicht, den persönlichen Kontakt zu ersetzen. Es geht darum, wiederkehrende Routineaufgaben zu eliminieren, damit Sie und Ihr Team sich auf Beratung und Kundenbeziehung konzentrieren können. Statt Stunden mit Formatierung, Preisberechnung und Textbausteinen zu verbringen, investieren Sie Ihre Zeit dort, wo sie den größten Unterschied macht.',
        'Für kleine und mittelständische Unternehmen in <a href="/leistungsgebiete/leipzig" class="text-primary-400 hover:underline">Leipzig</a> und der Region ist das besonders wertvoll: Wer mit einem kleinen Team arbeitet, kann sich keine halbe Stunde pro Angebot leisten, wenn täglich fünf oder mehr Anfragen reinkommen.',
      ],
    },
    {
      heading: 'Typische Probleme mit manuellen Angebotsprozessen',
      headingLevel: 'h2',
      paragraphs: [
        'In vielen Unternehmen läuft die Angebotserstellung noch immer so: Eine Anfrage kommt rein, jemand öffnet ein altes Angebot in Word, ändert den Namen, passt die Positionen an, rechnet die Summen manuell nach, speichert als PDF und schickt es per E-Mail raus. Drei Tage später fragt sich niemand, ob der Kunde das Angebot überhaupt geöffnet hat.',
      ],
      bullets: [
        'Angebotserstellung dauert 30–60 Minuten pro Anfrage – oft länger bei individuellen Leistungen',
        'Copy-Paste-Fehler: Falscher Kundenname, veraltete Preise, fehlende Positionen',
        'Kein einheitliches Design – jedes Angebot sieht anders aus, je nachdem, wer es erstellt',
        'Angebote werden nicht nachverfolgt: Wurde es geöffnet? Wurde es weitergeleitet?',
        'Follow-ups werden vergessen, weil niemand den Überblick über offene Angebote hat',
        'Keine Verbindung zum CRM – Kundendaten werden doppelt eingepflegt',
        'Saisonale Spitzen führen zu Engpässen: In Stoßzeiten bleiben Anfragen tagelang unbeantwortet',
      ],
    },
    {
      heading: 'Wie automatisierte Angebotsprozesse funktionieren',
      headingLevel: 'h2',
      paragraphs: [
        'Wir bauen Ihren Angebotsprozess als durchgängigen digitalen Workflow auf. Von der Anfrage bis zur Unterschrift läuft alles in einem System zusammen. Dabei passen wir den Ablauf exakt an Ihre Leistungen, Preise und Ihr Corporate Design an.',
      ],
      bullets: [
        '<strong>Anfrage-Erfassung:</strong> Kundenanfragen werden automatisch aus Formularen, E-Mails oder Ihrem CRM übernommen – inklusive aller relevanten Details',
        '<strong>Vorlagen-Auswahl:</strong> Das System wählt basierend auf Anfrageart und Leistungsumfang die passende Angebotsvorlage',
        '<strong>Personalisierung:</strong> Kundendaten, Ansprechpartner, individuelle Konditionen und Positionen werden automatisch eingefügt',
        '<strong>Preisberechnung:</strong> Mengen, Rabatte, Staffelpreise und Steuern werden korrekt berechnet – ohne Taschenrechner',
        '<strong>Freigabe:</strong> Bei Bedarf durchläuft das Angebot einen internen Freigabe-Workflow, bevor es rausgeht',
        '<strong>Versand:</strong> Das fertige Angebot wird als professionelles PDF per E-Mail verschickt – automatisch oder nach Ihrem Klick',
        '<strong>Nachverfolgung:</strong> Automatische Erinnerungen an den Kunden und Benachrichtigungen an Ihr Team, wenn ein Angebot geöffnet oder nicht reagiert wird',
      ],
    },
    {
      heading: 'Angebotsvorlagen: Einmal erstellen, immer wieder nutzen',
      headingLevel: 'h3',
      paragraphs: [
        'Das Herzstück jeder Angebotsautomatisierung sind durchdachte Vorlagen. Wir erstellen gemeinsam mit Ihnen Angebotsvorlagen, die Ihr Corporate Design widerspiegeln, alle rechtlich relevanten Informationen enthalten und modular aufgebaut sind.',
        'Modular bedeutet: Einzelne Leistungspositionen, Textbausteine und optionale Zusatzleistungen können flexibel kombiniert werden. So entsteht jedes Mal ein individuelles Angebot – ohne dass jemand von Grund auf neu schreiben muss. Die Vorlagen lassen sich jederzeit anpassen, wenn sich Preise, Leistungen oder das Design ändern.',
        'Ob Handwerksbetrieb mit Standardleistungen oder Agentur mit komplexen Projektangeboten: Die Vorlagen passen sich Ihrem Geschäftsmodell an.',
      ],
    },
    {
      heading: 'Automatische Nachverfolgung: Kein Angebot bleibt liegen',
      headingLevel: 'h2',
      paragraphs: [
        'Einer der größten Schwachpunkte in manuellen Prozessen ist die fehlende Nachverfolgung. Ein Angebot wird verschickt – und dann passiert nichts. Niemand weiß, ob es beim Kunden angekommen ist, ob es gelesen wurde oder ob der Kunde noch Fragen hat.',
        'Mit automatisierten Follow-ups ändern Sie das grundlegend. Das System erkennt, wann ein Angebot geöffnet wurde, und kann nach einer definierten Frist automatisch eine freundliche Erinnerung senden. Ihr Team wird benachrichtigt, wenn ein Kunde das Angebot mehrfach öffnet – ein starkes Kaufsignal. Und wenn nach zwei Wochen keine Reaktion kommt, geht eine letzte Nachfass-Nachricht raus, bevor der Lead als inaktiv markiert wird.',
        'Gleichzeitig behalten Sie in einem <a href="/automatisierungen" class="text-primary-400 hover:underline">zentralen Dashboard</a> den Überblick über alle offenen Angebote, deren Status und die nächsten Schritte.',
      ],
    },
    {
      heading: 'Manueller vs. automatisierter Angebotsprozess im Vergleich',
      headingLevel: 'h2',
      paragraphs: [
        'Die folgende Tabelle zeigt, wie sich manuelle und automatisierte Angebotsprozesse in den wichtigsten Bereichen unterscheiden:',
      ],
      table: {
        headers: ['Kriterium', 'Manueller Prozess', 'Automatisierter Prozess'],
        rows: [
          ['Erstellungszeit pro Angebot', '30–60 Minuten', '2–5 Minuten'],
          ['Fehlerquote', 'Hoch (Copy-Paste, Rechenfehler)', 'Nahezu null'],
          ['Design-Konsistenz', 'Variiert je nach Ersteller', 'Immer einheitlich und professionell'],
          ['Nachverfolgung', 'Manuell, oft vergessen', 'Automatisch mit Erinnerungen und Tracking'],
          ['Reaktionszeit auf Anfragen', '1–3 Tage', 'Unter 1 Stunde'],
          ['CRM-Anbindung', 'Keine oder manuell', 'Vollständig integriert'],
          ['Skalierbarkeit', 'Begrenzt durch Personal', 'Problemlos skalierbar'],
          ['Auswertung und Reporting', 'Manuell (Excel)', 'Automatisch in Echtzeit'],
        ],
      },
    },
    {
      heading: 'CRM-Integration: Angebote direkt aus Kundendaten erzeugen',
      headingLevel: 'h2',
      paragraphs: [
        'Automatisierte Angebotsprozesse entfalten ihr volles Potenzial, wenn sie mit Ihrem CRM-System verbunden sind. Statt Kundendaten manuell ins Angebot zu übertragen, zieht das System alle relevanten Informationen direkt aus dem CRM: Firmenname, Ansprechpartner, bisherige Aufträge, vereinbarte Konditionen und offene Anfragen.',
        'Das bedeutet: Wenn ein Lead in Ihrem <a href="/crm-systeme" class="text-primary-400 hover:underline">CRM-System</a> den Status „Angebot gewünscht" erreicht, kann der Angebotsprozess automatisch starten. Die richtige Vorlage wird gewählt, die Kundendaten eingefügt, und nach Ihrer Freigabe geht das Angebot raus. Alles in einem Bruchteil der bisherigen Zeit.',
        'Wir arbeiten mit gängigen CRM-Systemen wie HubSpot, Pipedrive, Zoho und branchenspezifischen Lösungen. Falls Sie noch kein CRM nutzen, beraten wir Sie gerne zur passenden Lösung.',
      ],
    },
    {
      heading: 'Welche Unternehmen profitieren am meisten?',
      headingLevel: 'h2',
      paragraphs: [
        'Automatisierte Angebotsprozesse lohnen sich für jedes Unternehmen, das regelmäßig Angebote schreibt. Besonders groß ist der Effekt bei:',
      ],
      bullets: [
        'Handwerksbetrieben, die täglich mehrere Angebotsanfragen bearbeiten – vom Dachdecker bis zum Elektriker',
        'Dienstleistern mit wiederkehrenden Leistungspaketen und konfigurierbaren Preisen',
        'Agenturen, die individuelle Projektangebote erstellen und nachverfolgen müssen',
        'Vermietungsunternehmen mit standardisierten Mietangeboten und saisonalen Preismodellen',
        'Unternehmen in <a href="/leistungsgebiete/grimma" class="text-primary-400 hover:underline">Grimma</a>, Leipzig und der Region, die mit einem kleinen Team viele Anfragen professionell bedienen wollen',
      ],
    },
    {
      heading: 'So setzen wir Ihre Angebotsautomatisierung um',
      headingLevel: 'h2',
      paragraphs: [
        'Wir arbeiten in einem strukturierten Prozess, der sicherstellt, dass die Automatisierung zu Ihrem Unternehmen passt und nicht am Arbeitsalltag vorbei entwickelt wird:',
      ],
      bullets: [
        '<strong>1. Analyse:</strong> Wir schauen uns an, wie Ihre Angebotserstellung aktuell abläuft – Werkzeuge, Durchlaufzeiten, Engpässe und häufige Fehlerquellen',
        '<strong>2. Konzept:</strong> Gemeinsam definieren wir den Ziel-Prozess: Welche Schritte werden automatisiert? Wo bleibt eine manuelle Freigabe? Welche Vorlagen werden benötigt?',
        '<strong>3. Vorlagen und Regeln:</strong> Wir erstellen die Angebotsvorlagen, konfigurieren Preislogiken und richten die Follow-up-Regeln ein',
        '<strong>4. Integration:</strong> Der Prozess wird mit Ihrem CRM, E-Mail-System und ggf. Buchhaltungssoftware verbunden',
        '<strong>5. Test und Go-Live:</strong> Alles wird gründlich getestet, bevor der Prozess live geht – inklusive Schulung für Ihr Team',
        '<strong>6. Optimierung:</strong> Nach dem Start analysieren wir Conversion-Raten, Durchlaufzeiten und Kundenfeedback, um den Prozess kontinuierlich zu verbessern',
      ],
    },
    {
      heading: 'Messbare Ergebnisse in der Praxis',
      headingLevel: 'h2',
      paragraphs: [
        'Unsere Kunden berichten nach der Einführung automatisierter Angebotsprozesse von deutlichen Verbesserungen. Die Angebotserstellung reduziert sich typischerweise von durchschnittlich 45 Minuten auf unter 5 Minuten. Die Reaktionszeit auf Anfragen sinkt von mehreren Tagen auf wenige Stunden. Follow-up-Quoten steigen von rund 30 % auf über 85 %, weil das System konsequent nachfasst.',
        'Gleichzeitig verbessert sich die Angebotsqualität: Einheitliches Design, korrekte Preise und personalisierte Inhalte hinterlassen einen professionellen Eindruck – und das spiegelt sich in höheren Abschlussquoten wider.',
      ],
    },
  ],

  faqs: [
    {
      q: 'Was kostet die Automatisierung meiner Angebotsprozesse?',
      a: 'Die Kosten richten sich nach der Komplexität: Wie viele Vorlagen benötigen Sie? Welche Systeme sollen integriert werden? Wie individuell sind Ihre Leistungspositionen? Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Pauschalangebot – keine versteckten Kosten.',
    },
    {
      q: 'Wie lange dauert es, bis die Automatisierung steht?',
      a: 'Ein typisches Projekt dauert 3–5 Wochen von der Analyse bis zum Go-Live. Bei einfacheren Setups mit wenigen Vorlagen und einer CRM-Integration kann es auch in 2 Wochen umgesetzt werden. Komplexere Projekte mit vielen Produktkategorien und individuellen Preislogiken brauchen entsprechend mehr Zeit.',
    },
    {
      q: 'Können meine bestehenden Angebotsvorlagen übernommen werden?',
      a: 'Ja. Wir übernehmen Ihre bestehenden Vorlagen und überführen sie in das automatisierte System. Dabei optimieren wir Layout, Struktur und Textbausteine, damit sie sowohl optisch als auch inhaltlich überzeugen.',
    },
    {
      q: 'Funktioniert das auch, wenn meine Angebote sehr individuell sind?',
      a: 'Absolut. Der modulare Aufbau ermöglicht es, individuelle Positionen, Freitextfelder und variable Konditionen einzubauen. Das System erstellt einen Entwurf, den Sie bei Bedarf noch manuell anpassen können, bevor er rausgeht.',
    },
    {
      q: 'Welche CRM-Systeme lassen sich anbinden?',
      a: 'Wir arbeiten mit allen gängigen CRM-Systemen: HubSpot, Pipedrive, Zoho, Salesforce und viele mehr. Auch branchenspezifische Lösungen oder einfache Datenbanken können integriert werden. Falls Sie noch kein CRM nutzen, beraten wir Sie gerne bei der Auswahl.',
    },
    {
      q: 'Kann ich sehen, ob ein Kunde mein Angebot geöffnet hat?',
      a: 'Ja. Das System trackt, wann ein Angebot geöffnet, wie lange es betrachtet und ob es weitergeleitet wurde. Sie und Ihr Team erhalten Benachrichtigungen bei wichtigen Aktivitäten – ein klarer Vorteil gegenüber dem blinden PDF-Versand.',
    },
    {
      q: 'Was passiert mit dem Datenschutz?',
      a: 'Alle Daten werden DSGVO-konform verarbeitet. Wir setzen auf europäische Server, verschlüsselte Übertragung und transparente Verarbeitungshinweise. Details klären wir im Erstgespräch unter Berücksichtigung Ihrer spezifischen Branchenanforderungen.',
    },
    {
      q: 'Lohnt sich das auch für Unternehmen mit wenigen Angeboten pro Monat?',
      a: 'Ja – gerade dann. Wenn jedes Angebot zählt, muss es sitzen: professionell, fehlerfrei und pünktlich. Schon ab 5–10 Angeboten pro Monat sparen Sie spürbar Zeit und vermeiden Fehler, die Sie bares Geld kosten können.',
    },
  ],

  ctaText: 'Bereit, Ihre Angebote schneller und professioneller zu versenden?',

  parentServiceLink: {
    text: 'Automatisierungen im Überblick',
    href: '/automatisierungen',
  },
  siblingSubpageLinks: [
    { text: 'Leadgenerierung automatisieren', href: '/automatisierungen/leadgenerierung' },
    { text: 'Terminbuchung automatisieren', href: '/automatisierungen/terminbuchung' },
    { text: 'E-Mail Automatisierung', href: '/automatisierungen/email-automatisierung' },
  ],
  crossServiceLinks: [
    { text: 'CRM-Systeme für Ihre Kundenverwaltung', href: '/crm-systeme' },
    { text: 'SEO: Top 3 in Google', href: '/seo-top-3-in-google' },
  ],
  areaLinks: buildTier1AreaLinks('Angebotsprozesse'),
};

export default content;
