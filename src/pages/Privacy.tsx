'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Calendar, AlertCircle, Mail } from 'lucide-react';
import { businessInfo } from '@/data/businessInfo';

const Privacy: React.FC = () => {
  const { legalName, address, contact } = businessInfo;

  const sections = [
    {
      id: 'verantwortlicher',
      icon: <Users size={28} strokeWidth={1.5} />,
      title: '1. Verantwortlicher',
      content: (
        <>
          <p className="text-light-100 font-bold mb-2">{legalName}</p>
          <p className="text-light-200 mb-1">{address.streetAddress}</p>
          <p className="text-light-200 mb-1">{address.postalCode} {address.addressLocality}</p>
          <p className="text-light-200 mb-1">Telefon: <a href={`tel:${contact.telephoneE164}`} className="text-primary-500 hover:text-primary-400 transition-colors">{contact.telephone}</a></p>
          <p className="text-light-200">
            E-Mail: <a href={`mailto:${contact.email}`} className="text-primary-500 hover:text-primary-400 transition-colors">{contact.email}</a>
          </p>
        </>
      )
    },
    {
      id: 'allgemeine-hinweise',
      icon: <Shield size={28} strokeWidth={1.5} />,
      title: '2. Allgemeine Hinweise',
      content: (
        <p className="text-light-200 leading-relaxed">
          Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden datenschutzrechtlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG).
        </p>
      )
    },
    {
      id: 'zugriffsdaten',
      icon: <Eye size={28} strokeWidth={1.5} />,
      title: '3. Zugriffsdaten und Hosting',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Beim Aufruf unserer Website werden durch den Hosting-Provider automatisch folgende Daten erfasst:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>IP-Adresse</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Datum und Uhrzeit des Zugriffs</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>aufgerufene Seite</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Browsertyp und Betriebssystem</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Referrer-URL</span>
            </li>
          </ul>
          <p className="text-light-200 mb-2 leading-relaxed">
            Die Verarbeitung erfolgt zur technischen Bereitstellung der Website, zur Systemsicherheit und zur Missbrauchsprävention.
          </p>
          <p className="text-light-100 font-bold text-sm">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
          </p>
        </>
      )
    },
    {
      id: 'kontaktaufnahme',
      icon: <Mail size={28} strokeWidth={1.5} />,
      title: '4. Kontaktaufnahme',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Bei Kontaktaufnahme über unsere Website oder per E-Mail verarbeiten wir insbesondere:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Name</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>E-Mail-Adresse</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Unternehmensname</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Kommunikationsinhalte</span>
            </li>
          </ul>
          <p className="text-light-200 mb-2 leading-relaxed">
            Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Durchführung vorvertraglicher Maßnahmen.
          </p>
          <p className="text-light-100 font-bold text-sm">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
          </p>
        </>
      )
    },
    {
      id: 'chatbot',
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: '5. Digitale Kundenassistenz auf der Website',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Auf unserer Website ist ein KI-gestützter Kommunikationsdienst integriert, über den Nutzer freiwillig mit uns in Kontakt treten können.
          </p>
          <p className="text-light-200 mb-4 leading-relaxed">
            Hierbei können insbesondere folgende Daten verarbeitet werden:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>übermittelte Texte und Inhalte</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Kontaktdaten, sofern vom Nutzer angegeben</span>
            </li>
          </ul>
          <p className="text-light-200 mb-4 leading-relaxed">
            Die Verarbeitung dient der Kommunikation, der Bearbeitung von Anfragen sowie der Verbesserung unseres Serviceangebots.
          </p>
          <p className="text-light-200 mb-2 leading-relaxed">
            Eine automatisierte Entscheidungsfindung mit rechtlicher Wirkung findet nicht statt.
          </p>
          <p className="text-light-100 font-bold text-sm">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, Art. 6 Abs. 1 lit. f DSGVO
          </p>
        </>
      )
    },
    {
      id: 'cookies',
      icon: <Lock size={28} strokeWidth={1.5} />,
      title: '6. Cookies',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Eine weitergehende Analyse des Nutzerverhaltens oder Marketing-Tracking findet nicht statt.
          </p>
          <p className="text-light-200 mb-2 leading-relaxed">
            Sie können die Speicherung von Cookies jederzeit über die Einstellungen Ihres Browsers oder über unser Cookie-Einstellungsmenü anpassen.
          </p>
          <p className="text-light-100 font-bold text-sm">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TTDSG
          </p>
        </>
      )
    },
    {
      id: 'dienstleister',
      icon: <Users size={28} strokeWidth={1.5} />,
      title: '7. Einsatz externer Dienstleister',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Zur technischen Bereitstellung unserer Leistungen setzen wir sorgfältig ausgewählte externe Dienstleister ein, die personenbezogene Daten in unserem Auftrag verarbeiten. Diese Dienstleister sind vertraglich auf die Einhaltung der datenschutzrechtlichen Vorgaben verpflichtet.
          </p>
          <p className="text-light-200 leading-relaxed">
            Eine Übermittlung in Drittstaaten erfolgt nur, sofern geeignete Garantien gemäß Art. 44 ff. DSGVO bestehen.
          </p>
        </>
      )
    },
    {
      id: 'kundenprojekte',
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: '8. Verarbeitung im Rahmen von Kundenprojekten',
      content: (
        <p className="text-light-200 leading-relaxed">
          Im Rahmen unserer Dienstleistungen verarbeiten wir personenbezogene Daten regelmäßig im Auftrag unserer Kunden. In diesen Fällen handeln wir als <span className="font-bold text-light-100">Auftragsverarbeiter</span> im Sinne von Art. 28 DSGVO. Die datenschutzrechtliche Verantwortung liegt beim jeweiligen Auftraggeber.
        </p>
      )
    },
    {
      id: 'speicherdauer',
      icon: <Calendar size={28} strokeWidth={1.5} />,
      title: '9. Speicherdauer',
      content: (
        <p className="text-light-200 leading-relaxed">
          Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
        </p>
      )
    },
    {
      id: 'rechte',
      icon: <Shield size={28} strokeWidth={1.5} />,
      title: '10. Rechte der betroffenen Personen',
      content: (
        <>
          <p className="text-light-200 mb-4 leading-relaxed">
            Sie haben jederzeit das Recht auf:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Auskunft (Art. 15 DSGVO)</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Berichtigung (Art. 16 DSGVO)</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Löschung (Art. 17 DSGVO)</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Einschränkung der Verarbeitung (Art. 18 DSGVO)</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Datenübertragbarkeit (Art. 20 DSGVO)</span>
            </li>
            <li className="text-light-200 flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</span>
            </li>
          </ul>
          <p className="text-light-200">
            Anfragen richten Sie bitte an: <a href="mailto:kontakt@pixelkraftwerk-ai.com" className="text-primary-500 hover:text-primary-400 transition-colors font-bold">kontakt@pixelkraftwerk-ai.com</a>
          </p>
        </>
      )
    },
    {
      id: 'beschwerderecht',
      icon: <AlertCircle size={28} strokeWidth={1.5} />,
      title: '11. Beschwerderecht',
      content: (
        <p className="text-light-200 leading-relaxed">
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      )
    },
    {
      id: 'aenderungen',
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: '12. Änderungen dieser Datenschutzerklärung',
      content: (
        <p className="text-light-200 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung bei rechtlichen oder technischen Änderungen anzupassen.
        </p>
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
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-light-100 mb-6">
                Datenschutz<span className="text-primary-500">erklärung</span>
              </h1>
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

      {/* FOOTER CTA */}
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
                Bei Fragen zum Datenschutz stehen wir Ihnen gerne zur Verfügung.
              </p>
              <a
                href="mailto:kontakt@pixelkraftwerk-ai.com"
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              >
                <Mail className="mr-2" size={20} />
                Kontakt aufnehmen
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
