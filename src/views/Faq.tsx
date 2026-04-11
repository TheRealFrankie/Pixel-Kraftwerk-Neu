import React from 'react';
import { HelpCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';

const allFaqs = [
  { q: 'Wie individuell sind die KI-Lösungen wirklich?', a: 'Wir entwickeln jede Lösung maßgeschneidert genau nach den Bedürfnissen unserer Kunden. Dabei berücksichtigen wir bestehende Systeme, Workflows und Ziele, sodass am Ende eine passgenaue, effiziente Lösung entsteht.' },
  { q: 'Welche Branchen profitieren besonders von Ihren KI-Lösungen?', a: 'Unsere Lösungen sind branchenübergreifend einsetzbar. Besonders profitieren Unternehmen aus Dienstleistung, E-Commerce, Gesundheitswesen, öffentlicher Verwaltung und Handwerk.' },
  { q: 'Welche technischen Voraussetzungen müssen Kunden mitbringen?', a: 'In der Regel sind keine besonderen technischen Voraussetzungen notwendig. Wir gestalten unsere Lösungen so, dass sie sich flexibel an die vorhandene Infrastruktur anpassen. Sollte eine Integration mit bestehenden Systemen oder Webseiten erforderlich sein, klären wir den Zugang dazu im Vorfeld gemeinsam – unkompliziert und lösungsorientiert.' },
  { q: 'Was passiert, wenn sich die Anforderungen im Projektverlauf ändern?', a: 'Flexibilität ist uns wichtig. Änderungen besprechen wir gemeinsam und passen die Lösung entsprechend an, damit sie immer optimal zum Geschäft passt.' },
  { q: 'Wie wird die Qualität der Lösungen sichergestellt?', a: 'Jede Lösung durchläuft ausführliche Tests mit dem Kunden zusammen in der Demo-Phase. Erst wenn der Kunde voll zufrieden ist, wird das Produkt live geschaltet.' },
  { q: 'Sind die Lösungen skalierbar?', a: 'Ja, unsere Systeme sind so aufgebaut, dass sie mit dem Unternehmen wachsen können. Erweiterungen oder Anpassungen sind jederzeit möglich.' },
  { q: 'Wie kann der Kunde Änderungen an der Website vornehmen?', a: 'Die Webseiten werden von uns betreut und sind nicht zur Selbstbedienung freigegeben. Änderungen oder Anpassungswünsche kann der Kunde einfach per E-Mail oder kurzem Anruf mitteilen, wir setzen diese schnellstmöglich um.' },
  { q: 'Für wen sind die Lösungen von Pixel Kraftwerk geeignet?', a: 'Unsere Kunden sind vielfältig und kommen deutschlandweit aus unterschiedlichsten Branchen – darunter lokale und regionale Unternehmen, Mittelstand, Online-Shops, Fitnessstudios, Praxen sowie öffentliche Einrichtungen wie Rathäuser.' },
  { q: 'Welche besonderen Merkmale haben Ihre Leistungen?', a: 'Unsere Lösungen sind keine Baukasten-Produkte, sondern individuell maßgeschneiderte Systeme. Jeder Kunde wird persönlich durch den gesamten Prozess begleitet – von der Entwicklung über die Implementierung bis zum Support. Um eine hohe Qualität sicherzustellen, nehmen wir nur bis zu drei Neukunden pro Monat an.' },
  { q: 'Wie läuft ein typisches Kundenprojekt ab?', a: 'Zunächst führen wir ein Telefonat oder persönliches Treffen, um die Probleme des Kunden zu verstehen und zu prüfen, ob und wie wir diese lösen können. Anschließend erstellen wir eine maßgeschneiderte Demo, die der Kunde testen kann. Erst wenn der Kunde zufrieden ist, erfolgt die vollständige Implementierung. Die Bezahlung erfolgt erst nach erfolgreicher Abnahme.' },
  { q: 'Bieten Sie Support und Wartung nach Projektabschluss an?', a: 'Ja, wir bieten maximalen Support und sind persönlich für unsere Kunden da. Änderungswünsche oder Probleme werden in der Regel innerhalb von 24 Stunden bearbeitet, abhängig vom Umfang des Anliegens.' },
  { q: 'Wie lange dauert es, bis eine Lösung fertiggestellt ist?', a: 'Die Dauer hängt vom Umfang ab: Websites sind meist innerhalb von 3 Tagen fertig, die digitale und telefonische Kundenassistenz benötigen in der Regel 1–2 Wochen. Die Implementierung in CRM-Systeme dauert ähnlich lang. Die genannten Zeiten sind Durchschnittswerte.' },
  { q: 'Arbeiten Sie deutschlandweit oder regional?', a: 'Wir arbeiten deutschlandweit mit unseren Kunden zusammen.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://pixelkraftwerk-ai.com' },
    { '@type': 'ListItem', position: 2, name: 'Häufige Fragen', item: 'https://pixelkraftwerk-ai.com/haeufige-fragen' },
  ],
};

const Faq: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="text-3xl md:text-4xl text-light-100 font-heading font-bold mb-6 text-center">
          Häufig gestellte <span className="text-primary-500">Fragen (FAQ)</span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-light-200 mb-12 text-center text-base leading-relaxed">
            Hier beantworten wir die wichtigsten Fragen rund um unsere KI-Lösungen, Webdesign und Automatisierung.
            Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns gern – wir helfen Ihnen persönlich weiter!
          </p>

          {/* Regular FAQ Section */}
          <h2 className="text-2xl font-heading font-bold text-light-100 mb-8">
            Häufige Fragen zu unseren <span className="text-primary-500">KI-Lösungen</span>
          </h2>

          <div className="space-y-6 mb-20">
            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-heading font-bold text-light-100">
                  Wie individuell sind die KI-Lösungen wirklich?
                </h3>
              </div>
              <p className="text-light-200 text-sm leading-relaxed ml-8">
                Wir entwickeln jede Lösung maßgeschneidert genau nach den Bedürfnissen unserer Kunden. Dabei berücksichtigen wir bestehende Systeme, Workflows und Ziele, sodass am Ende eine passgenaue, effiziente Lösung entsteht.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-heading font-bold text-light-100">
                  Welche Branchen profitieren besonders von Ihren KI-Lösungen?
                </h3>
              </div>
              <p className="text-light-200 text-sm leading-relaxed ml-8">
                Unsere Lösungen sind branchenübergreifend einsetzbar. Besonders profitieren Unternehmen aus Dienstleistung, E-Commerce, Gesundheitswesen, öffentlicher Verwaltung und Handwerk.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-heading font-bold text-light-100">
                  Welche technischen Voraussetzungen müssen Kunden mitbringen?
                </h3>
              </div>
              <p className="text-light-200 text-sm leading-relaxed ml-8">
                In der Regel sind keine besonderen technischen Voraussetzungen notwendig. Wir gestalten unsere Lösungen so, dass sie sich flexibel an die vorhandene Infrastruktur anpassen. Sollte eine Integration mit bestehenden Systemen oder Webseiten erforderlich sein, klären wir den Zugang dazu im Vorfeld gemeinsam – unkompliziert und lösungsorientiert.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-heading font-bold text-light-100">
                  Was passiert, wenn sich die Anforderungen im Projektverlauf ändern?
                </h3>
              </div>
              <p className="text-light-200 text-sm leading-relaxed ml-8">
                Flexibilität ist uns wichtig. Änderungen besprechen wir gemeinsam und passen die Lösung entsprechend an, damit sie immer optimal zum Geschäft passt.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-heading font-bold text-light-100">
                  Wie wird die Qualität der Lösungen sichergestellt?
                </h3>
              </div>
              <p className="text-light-200 text-sm leading-relaxed ml-8">
                Jede Lösung durchläuft ausführliche Tests mit dem Kunden zusammen in der Demo-Phase. Erst wenn der Kunde voll zufrieden ist, wird das Produkt live geschaltet.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-heading font-bold text-light-100">
                  Sind die Lösungen skalierbar?
                </h3>
              </div>
              <p className="text-light-200 text-sm leading-relaxed ml-8">
                Ja, unsere Systeme sind so aufgebaut, dass sie mit dem Unternehmen wachsen können. Erweiterungen oder Anpassungen sind jederzeit möglich.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <div className="flex items-start mb-4">
                <HelpCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-heading font-bold text-light-100">
                  Wie kann der Kunde Änderungen an der Website vornehmen?
                </h3>
              </div>
              <p className="text-light-200 text-sm leading-relaxed ml-8">
                Die Webseiten werden von uns betreut und sind nicht zur Selbstbedienung freigegeben. Änderungen oder Anpassungswünsche kann der Kunde einfach per E-Mail oder kurzem Anruf mitteilen, wir setzen diese schnellstmöglich um.
              </p>
            </div>
          </div>

          {/* Weitere FAQs – Schema nur via JSON-LD oben (kein Microdata, sonst FAQPage doppelt) */}
          <div className="bg-dark-400 p-8 border border-dark-100">
            <h2 className="text-2xl font-heading font-bold text-primary-500 mb-8 text-center">
              Weitere wichtige Informationen
            </h2>

            <div className="space-y-6">
              <div className="border-b border-dark-100 pb-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  Für wen sind die Lösungen von Pixel Kraftwerk geeignet?
                </h3>
                <p className="text-light-200">
                  Unsere Kunden sind vielfältig und kommen deutschlandweit aus unterschiedlichsten Branchen – darunter lokale und regionale Unternehmen, Mittelstand, Online-Shops, Fitnessstudios, Praxen sowie öffentliche Einrichtungen wie Rathäuser.
                </p>
              </div>

              <div className="border-b border-dark-100 pb-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  Welche besonderen Merkmale haben Ihre Leistungen?
                </h3>
                <p className="text-light-200">
                  Unsere Lösungen sind keine Baukasten-Produkte, sondern individuell maßgeschneiderte Systeme. Jeder Kunde wird persönlich durch den gesamten Prozess begleitet – von der Entwicklung über die Implementierung bis zum Support. Um eine hohe Qualität sicherzustellen, nehmen wir nur bis zu drei Neukunden pro Monat an.
                </p>
              </div>

              <div className="border-b border-dark-100 pb-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  Wie läuft ein typisches Kundenprojekt ab?
                </h3>
                <p className="text-light-200">
                  Zunächst führen wir ein Telefonat oder persönliches Treffen, um die Probleme des Kunden zu verstehen und zu prüfen, ob und wie wir diese lösen können. Anschließend erstellen wir eine maßgeschneiderte Demo, die der Kunde testen kann. Erst wenn der Kunde zufrieden ist, erfolgt die vollständige Implementierung. Die Bezahlung erfolgt erst nach erfolgreicher Abnahme.
                </p>
              </div>

              <div className="border-b border-dark-100 pb-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  Bieten Sie Support und Wartung nach Projektabschluss an?
                </h3>
                <p className="text-light-200">
                  Ja, wir bieten maximalen Support und sind persönlich für unsere Kunden da. Änderungswünsche oder Probleme werden in der Regel innerhalb von 24 Stunden bearbeitet, abhängig vom Umfang des Anliegens.
                </p>
              </div>

              <div className="border-b border-dark-100 pb-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  Wie lange dauert es, bis eine Lösung fertiggestellt ist?
                </h3>
                <p className="text-light-200">
                  Die Dauer hängt vom Umfang ab: Websites sind meist innerhalb von 3 Tagen fertig, die digitale und telefonische Kundenassistenz benötigen in der Regel 1–2 Wochen. Die Implementierung in CRM-Systeme dauert ähnlich lang. Die genannten Zeiten sind Durchschnittswerte.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  Arbeiten Sie deutschlandweit oder regional?
                </h3>
                <p className="text-light-200">
                  Wir arbeiten deutschlandweit mit unseren Kunden zusammen.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-primary-500/10 border border-primary-500 p-8">
              <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                Ihre Frage war nicht dabei?
              </h3>
              <p className="text-light-200 mb-6">
                Kein Problem! Kontaktieren Sie uns direkt – wir beantworten gerne alle Ihre Fragen persönlich.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>

        <ContactForm />

        <GoogleMapsSection />
      </div>
    </div>
  );
};

export default Faq;