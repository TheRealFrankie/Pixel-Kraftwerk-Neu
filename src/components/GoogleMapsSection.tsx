'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { INK, BODY, MUTED, PETROL, BORDER, SURFACE } from '@/lib/theme';

const GoogleMapsSection: React.FC = () => {
  const address = `${businessInfo.address.streetAddress}, ${businessInfo.address.postalCode} ${businessInfo.address.addressLocality}`;
  const encodedAddress = encodeURIComponent(address);

  return (
    <section data-section-label="Standort" className="py-16" style={{ background: SURFACE }}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: INK }}>
              Unser <span style={{ color: PETROL }}>Standort</span>
            </h2>
            <div className="flex items-center justify-center mb-2 gap-2" style={{ color: BODY }}>
              <MapPin size={20} style={{ color: PETROL }} />
              <p className="text-lg">
                {businessInfo.address.streetAddress}, {businessInfo.address.postalCode}{' '}
                {businessInfo.address.addressLocality}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2" style={{ color: BODY }}>
              <Phone size={18} style={{ color: PETROL }} />
              <a
                href={`tel:${businessInfo.contact.telephoneE164}`}
                className="text-lg transition-colors duration-200"
                style={{ color: BODY }}
                onMouseEnter={(e) => (e.currentTarget.style.color = PETROL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = BODY)}
              >
                {businessInfo.contact.telephone}
              </a>
            </div>
          </div>

          <div
            className="relative w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-card border"
            style={{ borderColor: BORDER }}
          >
            <div className="absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.212320993495!2d12.276904876636072!3d51.15224677173471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6efa537042d9f%3A0xf5eeb00a4e5f7449!2sPixel%20Kraftwerk%20%7C%20KI%20-%20Automatisierungen!5e1!3m2!1sen!2sde!4v1772643613124!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Google Maps Standort Pixel Kraftwerk"
              />
            </div>

            <div
              className="absolute bottom-4 left-4 right-4 bg-white/95 border p-4 backdrop-blur-sm rounded-xl shadow-elevation"
              style={{ borderColor: BORDER }}
            >
              <div className="flex items-start gap-3">
                <div style={{ color: PETROL }} className="flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1" style={{ color: INK }}>
                    {businessInfo.name}
                  </h3>
                  <p className="text-sm" style={{ color: BODY }}>
                    {businessInfo.address.streetAddress}
                    <br />
                    {businessInfo.address.postalCode} {businessInfo.address.addressLocality}
                    <br />
                    <a
                      href={`tel:${businessInfo.contact.telephoneE164}`}
                      className="transition-colors duration-200"
                      style={{ color: BODY }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = PETROL)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = BODY)}
                    >
                      {businessInfo.contact.telephone}
                    </a>
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                    <a
                      href={`https://www.google.com/maps/dir//${encodedAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-heading font-bold transition-colors duration-200"
                      style={{ color: PETROL }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#0A5F58')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = PETROL)}
                    >
                      Route planen →
                    </a>
                    <a
                      href={businessInfo.socialMedia.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-heading font-bold transition-colors duration-200"
                      style={{ color: PETROL }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#0A5F58')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = PETROL)}
                    >
                      Auf Google Maps ansehen →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
