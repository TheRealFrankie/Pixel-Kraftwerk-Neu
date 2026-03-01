'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, MessageCircle, Phone, Workflow, Globe, Search } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { LEISTUNGSGEBIETE_CITIES } from '../data/leistungsgebiete';
import { getRegionServiceLinkText } from '../data/services';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbSchemaLeistungsgebiete from '../components/BreadcrumbSchemaLeistungsgebiete';
import GoogleMapsSection from '../components/GoogleMapsSection';

const regionDescriptions: Record<string, string> = {
  leipzig: 'KI-Automatisierung, Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO für Unternehmen in Leipzig und Umgebung.',
  groitzsch: 'Von unserem Standort in Groitzsch aus entwickeln wir KI-Lösungen für die Region – mit kurzen Wegen und persönlicher Betreuung.',
  markkleeberg: 'KI-Lösungen für Unternehmen in Markkleeberg und der Region Leipzig – Chatbots, Terminbuchung, CRM, SEO.',
  zwenkau: 'KI-Automatisierung und Chatbots für Unternehmen in Zwenkau und Umgebung. Pixel Kraftwerk aus Groitzsch.',
  borna: 'KI-Chatbots, Telefonassistenten, Terminbuchung und SEO für Unternehmen in Borna und dem Landkreis Leipzig.',
  boehlen: 'Digitale Kundenassistenz und Automatisierung für Unternehmen in Böhlen und der Region.',
  roetha: 'KI-Lösungen für Rötha und Umgebung – Terminbuchung, CRM, Websites & SEO.',
  neukieritzsch: 'KI-Automatisierung für Neukieritzsch und den Landkreis Leipzig.',
  pegau: 'Chatbots, Telefonassistenten und SEO für Unternehmen in Pegau und Umgebung.',
  lucka: 'KI-Automatisierung für Lucka und das Altenburger Land.',
  meuselwitz: 'KI-Lösungen für Meuselwitz und die Region – aus Groitzsch für Ihre Prozesse.',
  'regis-breitingen': 'KI-Chatbots, Terminbuchung und CRM für Regis-Breitingen und den Landkreis Leipzig.',
  elstertrebnitz: 'Digitale Kundenassistenz und Automatisierung für Elstertrebnitz und Umgebung.',
};

const regions = LEISTUNGSGEBIETE_CITIES.map(({ slug, name, subtitle }) => ({
  slug,
  name,
  subtitle,
  description: regionDescriptions[slug] ?? `KI-Automatisierung, Chatbots, Terminbuchung, CRM und SEO für Unternehmen in ${name}.`,
  path: `/leistungsgebiete/${slug}`,
}));

const Leistungsgebiete: React.FC = () => {
  return (
    <div className="bg-dark-500">
      <BreadcrumbSchemaLeistungsgebiete />
      <LocalBusinessSchema pageType="homepage" customDescription="KI-Automatisierung und Chatbots für Unternehmen in Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz und Groitzsch." />

      <section className="relative pt-32 pb-24 bg-dark-500 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unsere <span className="text-primary-500">Leistungsgebiete</span>
            </motion.h1>
            <motion.p
              className="text-xl text-light-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Wir bedienen <strong>Leipzig</strong>, <strong>Markkleeberg</strong>, <strong>Zwenkau</strong>, <strong>Borna</strong>, <strong>Böhlen</strong>, <strong>Rötha</strong>, <strong>Neukieritzsch</strong>, <strong>Pegau</strong>, <strong>Lucka</strong>, <strong>Meuselwitz</strong>, <strong>Regis-Breitingen</strong>, <strong>Elstertrebnitz</strong> und <strong>Groitzsch</strong> (Hauptsitz) – mit KI-Automatisierung, Chatbots, Terminbuchung, CRM, Websites & SEO.
            </motion.p>
            <motion.p
              className="text-light-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="inline-block w-4 h-4 mr-1 text-primary-500 -mt-0.5" />
              {businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality} ·{' '}
              <a href={`tel:${businessInfo.contact.telephone}`} className="text-primary-400 hover:underline">{businessInfo.contact.telephone}</a>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-12 text-center">
              Regionen, die wir bedienen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regions.map((region, index) => (
                <motion.a
                  key={region.slug}
                  href={region.path}
                  className="block bg-dark-500 p-8 border border-dark-100 hover:border-primary-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-primary-500 text-sm font-bold mb-3">{region.subtitle}</p>
                  <p className="text-light-200 text-sm mb-4">{region.description}</p>
                  <span className="inline-flex items-center text-primary-500 font-heading font-bold text-sm group-hover:text-primary-400">
                    Mehr zu {region.name}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8">
              Leistungen nach Region – Beispiele
            </h2>
            <p className="text-light-200 mb-8 max-w-2xl mx-auto">
              Hier finden Sie eine Auswahl unserer Leistungen in ausgewählten Gebieten – mit variierendem Linktext und thematisch passend.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                { icon: <MessageCircle size={20} />, regionSlug: 'leipzig', regionName: 'Leipzig', serviceSlug: 'ki-chatbots' as const, variant: 0 },
                { icon: <Phone size={20} />, regionSlug: 'groitzsch', regionName: 'Groitzsch', serviceSlug: 'telefonassistenten' as const, variant: 1 },
                { icon: <Workflow size={20} />, regionSlug: 'meuselwitz', regionName: 'Meuselwitz', serviceSlug: 'automatisierungen' as const, variant: 0 },
                { icon: <Workflow size={20} />, regionSlug: 'borna', regionName: 'Borna', serviceSlug: 'automatisierungen' as const, variant: 1 },
                { icon: <Globe size={20} />, regionSlug: 'markkleeberg', regionName: 'Markkleeberg', serviceSlug: 'webseiten' as const, variant: 0 },
                { icon: <Search size={20} />, regionSlug: 'zwenkau', regionName: 'Zwenkau', serviceSlug: 'seo-top-3' as const, variant: 0 },
              ].map((item, i) => (
                <a
                  key={`${item.regionSlug}-${item.serviceSlug}`}
                  href={`/leistungsgebiete/${item.regionSlug}/${item.serviceSlug}`}
                  className="flex items-center gap-3 p-4 bg-dark-400 border border-dark-100 hover:border-primary-500/50 transition-colors text-light-100 font-heading"
                >
                  <span className="text-primary-500 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm">{getRegionServiceLinkText(item.serviceSlug, item.regionName, item.variant)}</span>
                </a>
              ))}
            </div>
            <p className="mt-10 text-light-300">
              <a href="/services" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungen ansehen</a>
              {' · '}
              <a href="/contact" className="text-primary-400 hover:underline font-heading font-bold">Kontakt</a>
            </p>
          </div>
        </div>
      </section>

      <GoogleMapsSection />
    </div>
  );
};

export default Leistungsgebiete;
