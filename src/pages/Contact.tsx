import React from 'react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import NAPInfo from '../components/NAPInfo';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import { LEISTUNGSGEBIETE_CITIES } from '../data/leistungsgebiete';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <LocalBusinessSchema pageType="contact" />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="text-3xl md:text-4xl text-light-100 font-heading font-bold mb-6 text-center">
          Nehmen Sie <span className="text-primary-500">Kontakt</span> mit uns auf
        </h1>
        <div className="max-w-2xl mx-auto mb-20">
          <p className="text-light-200 mb-12 text-center text-base leading-relaxed">
            Sie möchten erfahren, wie Ihr Unternehmen von KI-gestützter Automatisierung profitieren kann?
            Ob aus Leipzig, Markkleeberg, Groitzsch oder der Region – bei allgemeinen Fragen, konkreten Projektideen
            oder Interesse an einer Zusammenarbeit sind wir gerne für Sie da.
          </p>

          <div className="space-y-6 mb-12">
            <h2 className="text-xl font-heading font-bold text-light-100 mb-8 text-center">
              <span className="text-primary-500">Kontaktinformationen</span>
            </h2>
            <NAPInfo variant="full" showIcons={true} className="text-light-200" />
          </div>

          <p className="text-light-200 mb-16 text-center text-sm">
            Als Ihr Partner für KI-Automatisierung in Groitzsch, Leipzig und der Region melden wir uns zeitnah zurück – kompetent, unverbindlich und persönlich.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-heading font-bold text-light-100 mb-4 text-center">
            <span className="text-primary-500">Gebiete, die wir bedienen</span>
          </h2>
          <p className="text-light-300 text-sm text-center mb-4">
            <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungsgebiete</a>
            {' · '}
            {LEISTUNGSGEBIETE_CITIES.slice(0, 5).map((c, i) => (
              <React.Fragment key={c.slug}>
                <a href={`/leistungsgebiete/${c.slug}`} className="text-primary-400 hover:underline">{c.name}</a>
                {i < 4 ? ', ' : ''}
              </React.Fragment>
            ))}
            {' … '}
            <a href="/leistungsgebiete" className="text-primary-400 hover:underline">alle 13 Städte</a>
          </p>
          <h2 className="text-xl font-heading font-bold text-light-100 mb-4 mt-10 text-center">
            <span className="text-primary-500">Unsere Hauptleistungen</span>
          </h2>
          <p className="text-light-300 text-sm text-center">
            <a href="/ki-chatbots" className="text-primary-400 hover:underline">KI-Chatbots</a>
            {' · '}
            <a href="/telefonassistenten" className="text-primary-400 hover:underline">Telefonassistenten</a>
            {' · '}
            <a href="/automatisierungen" className="text-primary-400 hover:underline">Automatisierungen</a>
            {' · '}
            <a href="/webseite" className="text-primary-400 hover:underline">Webseiten</a>
            {' · '}
            <a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">SEO: Top 3 in Google</a>
            {' · '}
            <a href="/services" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungen</a>
          </p>
        </div>

        <ContactForm />
      </div>

      <GoogleMapsSection />
    </div>
  );
};

export default Contact;