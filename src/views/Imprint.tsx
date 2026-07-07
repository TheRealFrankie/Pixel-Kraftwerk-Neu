'use client';
import React from 'react';
import { businessInfo } from '@/data/businessInfo';

const Imprint: React.FC = () => {
  const { legalName, address, contact, founders, openingHoursDisplay, vatID } = businessInfo;

  return (
    <div className="pt-24 pb-24 min-h-screen" style={{ background: '#FAFAF9' }}>
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center" style={{ color: '#0C1210' }}><span className="text-primary-500">Impressum</span></h1>

        <div className="max-w-2xl mx-auto space-y-10">
          <div>
            <h2 className="text-lg font-heading font-bold mb-4" style={{ color: '#0C1210' }}>Angaben gemäß <span className="text-primary-500">§ 5 TMG</span></h2>
            <div className="space-y-1 text-sm" style={{ color: '#404B48' }}>
              <p>{legalName}</p>
              <p>Vertreten durch die Gesellschafter:</p>
              <p>{founders.map((f) => f.name).join(' und ')}</p>
              <p>{address.streetAddress}</p>
              <p>{address.postalCode} {address.addressLocality}</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold mb-4" style={{ color: '#0C1210' }}><span className="text-primary-500">Kontakt</span></h2>
            <div className="space-y-1 text-sm" style={{ color: '#404B48' }}>
              <p>Telefon: <a href={`tel:${contact.telephoneE164}`} className="text-primary-400 hover:underline">{contact.telephone}</a></p>
              <p>E-Mail: <a href={`mailto:${contact.email}`} className="text-primary-400 hover:underline">{contact.email}</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold mb-4" style={{ color: '#0C1210' }}><span className="text-primary-500">Öffnungszeiten</span></h2>
            <p className="text-sm" style={{ color: '#404B48' }}>{openingHoursDisplay}</p>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold mb-4" style={{ color: '#0C1210' }}>Verantwortlich für den Inhalt nach <span className="text-primary-500">§ 55 Abs. 2 RStV</span></h2>
            <div className="space-y-1 text-sm" style={{ color: '#404B48' }}>
              <p>John Brause</p>
              <p>Lukas Franke</p>
              <p>Anschrift wie oben</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold mb-4" style={{ color: '#0C1210' }}><span className="text-primary-500">Umsatzsteuer-Identifikationsnummer</span></h2>
            <div className="space-y-1 text-sm" style={{ color: '#404B48' }}>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
              <p>{vatID}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold mb-4" style={{ color: '#0C1210' }}>Online-Streitbeilegung gemäß <span className="text-primary-500">Art. 14 Abs. 1 ODR-VO</span></h2>
            <div className="space-y-1 text-sm" style={{ color: '#404B48' }}>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
              <p>
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-400 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold mb-4" style={{ color: '#0C1210' }}>Hinweis nach <span className="text-primary-500">§ 36 VSBG</span></h2>
            <div className="text-sm" style={{ color: '#404B48' }}>
              <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;