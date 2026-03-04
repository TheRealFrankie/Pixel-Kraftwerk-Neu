'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

const GoogleMapsSection: React.FC = () => {
  const address = `${businessInfo.address.streetAddress}, ${businessInfo.address.postalCode} ${businessInfo.address.addressLocality}`;
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="py-16 bg-dark-400">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
              Unser <span className="text-primary-500">Standort</span>
            </h2>
            <div className="flex items-center justify-center text-light-200 mb-2">
              <MapPin size={20} className="mr-2 text-primary-500" />
              <p className="text-lg">
                {businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality}
              </p>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[450px] bg-dark-500 border-2 border-dark-100 overflow-hidden">
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

            <div className="absolute bottom-4 left-4 right-4 bg-dark-500/95 border border-primary-500/30 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="text-primary-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-light-100 font-heading font-bold mb-1">
                    {businessInfo.name}
                  </h3>
                  <p className="text-light-200 text-sm">
                    {businessInfo.address.streetAddress}<br />
                    {businessInfo.address.postalCode} {businessInfo.address.addressLocality}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir//${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-primary-500 text-sm font-heading font-bold hover:text-primary-400 transition-colors duration-200"
                  >
                    Route planen →
                  </a>
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
