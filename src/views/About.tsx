'use client';
import React from 'react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbNav from '../components/BreadcrumbNav';

const aboutBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://pixelkraftwerk-ai.com' },
    { '@type': 'ListItem', position: 2, name: 'Über uns', item: 'https://pixelkraftwerk-ai.com/ueber-uns' },
  ],
};

const About: React.FC = () => {
  return (
    <div className="pt-24" style={{ background: '#FAFAF9', minHeight: '100vh' }}>
      <LocalBusinessSchema pageType="about" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbSchema) }} />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="mb-8">
          <BreadcrumbNav items={[
            { label: 'Startseite', href: '/' },
            { label: 'Über uns' },
          ]} />
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center" style={{ color: '#0C1210' }}>
          Über <span className="text-primary-500">Pixel Kraftwerk</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-16 text-center" style={{ color: '#0C1210' }}>
          Effizienz neu gedacht.
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="mb-12 text-base leading-relaxed" style={{ color: '#404B48' }}>
            Pixel Kraftwerk aus Groitzsch steht für intelligente Automatisierung und praxisnahe KI-Lösungen.
            Wir unterstützen Unternehmen in Leipzig, Sachsen und ganz Deutschland dabei, ihre Prozesse zu optimieren,
            repetitive Aufgaben zu eliminieren und Kundeninteraktionen zu verbessern – messbar, skalierbar, nachhaltig.
          </p>

          <div className="mb-16">
            <h3 className="text-lg font-heading font-bold mb-5" style={{ color: '#0C1210' }}>
              Unser <span className="text-primary-500">Anspruch</span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>
              In einer Welt, in der Zeit ein knappes Gut ist, schaffen wir Freiräume.
              Mit maßgeschneiderten Automatisierungskonzepten setzen wir auf den Einsatz
              künstlicher Intelligenz genau dort, wo sie den größten Mehrwert bietet –
              im Kundenservice, bei der Terminplanung, in der CRM-Integration oder auf Ihrer Website.
              Als regionales Unternehmen aus Groitzsch betreuen wir Kunden in ganz Mitteldeutschland.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-lg font-heading font-bold mb-5" style={{ color: '#0C1210' }}>
              Unsere <span className="text-primary-500">Expertise</span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>
              Unser Team aus Sachsen vereint technologische Tiefe mit unternehmerischem Verständnis.
              Experten aus den Bereichen KI-Entwicklung, Softwareintegration und digitales Marketing
              arbeiten Hand in Hand, um Lösungen zu entwickeln, die nicht nur innovativ,
              sondern sofort einsatzbereit und wartungsarm sind. Von Groitzsch aus betreuen wir
              Unternehmen in Leipzig und der gesamten Region.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-lg font-heading font-bold text-ink mb-8">
              Was uns <span className="text-primary-500">auszeichnet</span>
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>
                    Individuelle Lösungen statt Standardsoftware – jede Umsetzung ist präzise auf Ihre Anforderungen abgestimmt.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>
                    Schnelle Resultate – unsere Kunden profitieren von spürbaren Effizienzsteigerungen und optimierten Abläufen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>
                    Langfristiger Support – wir begleiten Ihre Systeme über den Launch hinaus und sorgen für zuverlässigen Betrieb.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-primary-500 pl-6 py-2">
            <p className="text-ink text-base leading-relaxed">
              Pixel Kraftwerk steht für technologiegestützte Transformation mit echtem Nutzen.
              Wir liefern Lösungen, die funktionieren – und Wirkung zeigen.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-lg font-heading font-bold mb-5" style={{ color: '#0C1210' }}>
              Unsere <span className="text-primary-500">Leistungen</span>
            </h3>
            <ul className="space-y-3 text-sm text-body mb-8">
              <li><a href="/ki-chatbots" className="text-primary-400 hover:underline">KI-Chatbots</a> – digitale Kundenassistenz für Ihre Website</li>
              <li><a href="/telefonassistenten" className="text-primary-400 hover:underline">Telefonassistenten</a> – Anrufe automatisch annehmen und qualifizieren</li>
              <li><a href="/automatisierungen" className="text-primary-400 hover:underline">Automatisierungen</a> – Anfragen, Vertrieb &amp; Terminplanung</li>
              <li><a href="/webseite" className="text-primary-400 hover:underline">Webseiten im Mietmodell</a> – modern, schnell, SEO-optimiert</li>
              <li><a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">SEO: Top 3 in Google</a> – lokale Sichtbarkeit in 90 Tagen</li>
            </ul>
            <p className="text-sm text-body">
              <a href="/leistungen" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungen im Detail ansehen</a>
              {' · '}
              <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">Regionen die wir betreuen</a>
              {' · '}
              <a href="/kontakt" className="text-primary-400 hover:underline font-heading font-bold">Erstgespräch vereinbaren</a>
            </p>
          </div>
        </div>

        <ContactForm />

        <GoogleMapsSection />
      </div>
    </div>
  );
};

export default About;