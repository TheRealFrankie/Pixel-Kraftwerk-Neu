'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Briefcase, DollarSign, Clock, Users, ClipboardCheck, Key, ShieldAlert, Database, Scale, FileCheck } from 'lucide-react';
import { businessInfo } from '@/data/businessInfo';

const Agb: React.FC = () => {
  const sections = [
    {
      id: 'geltungsbereich',
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: '1. Geltungsbereich',
      content: (
        <>
          <p className="text-light-200 mb-2 leading-relaxed">
            Diese AGB gelten ausschließlich für Unternehmer im Sinne des § 14 BGB.
          </p>
          <p className="text-light-200 leading-relaxed">
            Verträge mit Verbrauchern werden nicht geschlossen.
          </p>
        </>
      )
    },
    {
      id: 'vertragsabschluss',
      icon: <CheckCircle size={28} strokeWidth={1.5} />,
      title: '2. Vertragsabschluss',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Ein Vertrag kommt ausschließlich durch schriftliche Unterzeichnung vor Ort zustande.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Elektronische Vertragsschlüsse, Online-Verträge oder mündliche Nebenabreden sind ausgeschlossen.
          </p>
          <p className="text-light-200 leading-relaxed">
            Angebote sind freibleibend, sofern nicht ausdrücklich als verbindlich bezeichnet.
          </p>
        </>
      )
    },
    {
      id: 'leistungsumfang',
      icon: <Briefcase size={28} strokeWidth={1.5} />,
      title: '3. Leistungsumfang',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Pixel Kraftwerk erbringt Dienstleistungen in den Bereichen KI-Systeme, Automatisierung, digitale Kundenkommunikation, Content- und Videoerstellung, Webentwicklung sowie Prozessdigitalisierung.
          </p>
          <p className="text-light-200 leading-relaxed">
            Der konkrete Leistungsumfang ergibt sich ausschließlich aus dem Einzelvertrag.
          </p>
        </>
      )
    },
    {
      id: 'verguetung',
      icon: <DollarSign size={28} strokeWidth={1.5} />,
      title: '4. Vergütung und Zahlungsbedingungen',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Alle Preise verstehen sich netto zuzüglich gesetzlicher Umsatzsteuer.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Die Vergütung ist vollständig im Voraus zu leisten.
            Monatliche Entgelte sind jeweils zu Beginn des Abrechnungszeitraums fällig.
          </p>
          <p className="text-light-200 mb-2 leading-relaxed">
            Bei Zahlungsverzug gelten folgende Maßnahmen:
          </p>
          <ul className="space-y-2">
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Mahnung mit Mahngebühren</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Vorübergehender Leistungsstopp</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Fristsetzung</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Fristlose Kündigung durch Pixel Kraftwerk</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: 'vertragslaufzeit',
      icon: <Clock size={28} strokeWidth={1.5} />,
      title: '5. Vertragslaufzeit und Kündigung',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Die Mindestlaufzeit beträgt sechs Monate, sofern nichts Abweichendes vereinbart ist.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Die Kündigungsfrist beträgt drei Monate zum Monatsende.
          </p>
          <p className="text-light-200 mb-2 leading-relaxed">
            Die Kündigung bedarf der Schriftform und kann erfolgen:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>per eingeschriebenem Brief oder</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>per E-Mail an <a href="mailto:kontakt@pixelkraftwerk-ai.com" className="text-primary-500 hover:text-primary-400 transition-colors font-bold">kontakt@pixelkraftwerk-ai.com</a></span>
            </li>
          </ul>
          <p className="text-light-200 leading-relaxed">
            Maßgeblich ist der Zugang der Kündigung bei Pixel Kraftwerk.
          </p>
        </>
      )
    },
    {
      id: 'mitwirkungspflichten',
      icon: <Users size={28} strokeWidth={1.5} />,
      title: '6. Mitwirkungspflichten des Kunden',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Der Kunde stellt alle zur Leistungserbringung notwendigen Informationen, Inhalte, Zugänge und Freigaben rechtzeitig bereit.
          </p>
          <p className="text-light-200 leading-relaxed">
            Unterbleibt eine Mitwirkung, verlängern sich alle Fristen entsprechend.
            Mehrkosten durch fehlende Mitwirkung trägt der Kunde.
          </p>
        </>
      )
    },
    {
      id: 'projektabnahme',
      icon: <ClipboardCheck size={28} strokeWidth={1.5} />,
      title: '7. Projektabnahme',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Nach Fertigstellung erfolgt eine gemeinsame Endabnahme.
            Mit der Abnahme gilt die Leistung als vertragsgemäß erbracht.
          </p>
          <p className="text-light-200 leading-relaxed">
            Unterbleibt die Abnahme trotz Aufforderung, gilt die Leistung nach 7 Kalendertagen als abgenommen.
          </p>
        </>
      )
    },
    {
      id: 'nutzungsrechte',
      icon: <Key size={28} strokeWidth={1.5} />,
      title: '8. Nutzungsrechte',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Pixel Kraftwerk stellt sämtliche Leistungen ausschließlich zur zeitlich begrenzten Nutzung im Rahmen des jeweiligen Vertragsverhältnisses zur Verfügung.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Der Kunde erhält für die Dauer der Vertragslaufzeit ein einfaches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an den bereitgestellten Leistungen.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Eine Übertragung von Eigentums-, Urheber- oder sonstigen Verwertungsrechten findet nicht statt.
          </p>
          <p className="text-light-200 mb-2 leading-relaxed">
            Insbesondere erfolgt keine Herausgabe von:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Quellcodes</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Systemzugängen</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Konfigurationsdateien</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>KI-Logiken</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Automatisierungen</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Workflows</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Trainingsdaten</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>technischen Dokumentationen</span>
            </li>
          </ul>
          <p className="text-light-200 leading-relaxed">
            Mit Beendigung des Vertragsverhältnisses erlischt das Nutzungsrecht vollständig, und sämtliche bereitgestellten Leistungen werden eingestellt.
          </p>
        </>
      )
    },
    {
      id: 'haftung',
      icon: <ShieldAlert size={28} strokeWidth={1.5} />,
      title: '9. Haftung',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Pixel Kraftwerk haftet nur bei Vorsatz und grober Fahrlässigkeit.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Bei einfacher Fahrlässigkeit ist die Haftung auf den Auftragswert der letzten drei Monate begrenzt.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen.
          </p>
          <p className="text-light-200 leading-relaxed">
            Pixel Kraftwerk haftet nicht für Störungen durch Drittanbieter, Internet- und Telekommunikationsnetze sowie KI-Systeme.
          </p>
        </>
      )
    },
    {
      id: 'datenschutz',
      icon: <Database size={28} strokeWidth={1.5} />,
      title: '10. Datenschutz und Auftragsverarbeitung',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Pixel Kraftwerk verarbeitet personenbezogene Daten gemäß DSGVO.
          </p>
          <p className="text-light-200 leading-relaxed">
            Im Rahmen von Kundenprojekten handelt Pixel Kraftwerk als Auftragsverarbeiter im Sinne von Art. 28 DSGVO.
          </p>
        </>
      )
    },
    {
      id: 'gerichtsstand',
      icon: <Scale size={28} strokeWidth={1.5} />,
      title: '11. Gerichtsstand und Recht',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Gerichtsstand ist Leipzig.
          </p>
          <p className="text-light-200 leading-relaxed">
            Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts.
          </p>
        </>
      )
    },
    {
      id: 'schlussbestimmungen',
      icon: <FileCheck size={28} strokeWidth={1.5} />,
      title: '12. Schlussbestimmungen',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Nebenabreden bestehen nicht. Änderungen bedürfen der Schriftform.
          </p>
          <p className="text-light-200 leading-relaxed">
            Sollte eine Bestimmung unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="bg-dark-500 min-h-screen">

      {/* HEADER */}
      <section className="pt-32 pb-16 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-light-100 mb-4">
                AGB – Allgemeine <span className="text-primary-500">Geschäftsbedingungen</span>
              </h1>
              <p className="text-light-100 text-xl mb-2">{businessInfo.legalName}</p>
              <p className="text-light-300 text-lg">
                Stand: <span className="text-primary-500 font-bold">Januar 2026</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-dark-400 border border-dark-100 p-8 hover:border-primary-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start mb-6">
                  <div className="text-primary-500 mr-4 flex-shrink-0 mt-1">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-light-100">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-0 md:pl-12">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-light-200 text-lg mb-6 leading-relaxed">
                Bei Fragen zu unseren Geschäftsbedingungen stehen wir Ihnen gerne zur Verfügung.
              </p>
              <a
                href="mailto:kontakt@pixelkraftwerk-ai.com"
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              >
                <FileText className="mr-2" size={20} />
                Kontakt aufnehmen
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agb;
