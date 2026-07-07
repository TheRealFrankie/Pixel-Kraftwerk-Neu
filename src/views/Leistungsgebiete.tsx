'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, MessageCircle, Phone, Workflow, Globe, Search } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { LEISTUNGSGEBIETE_CITIES } from '../data/leistungsgebiete';
import { getRegionServiceLinkText } from '../data/services';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbSchemaLeistungsgebiete from '../components/BreadcrumbSchemaLeistungsgebiete';
import BreadcrumbNav from '../components/BreadcrumbNav';
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
    <div style={{ background: '#FAFAF9' }}>
      <BreadcrumbSchemaLeistungsgebiete />
      <LocalBusinessSchema pageType="homepage" customDescription="KI-Automatisierung und Chatbots für Unternehmen in über 250 Städten deutschlandweit – von Leipzig, Groitzsch und Halle über Dresden und Berlin bis Hamburg und München." />

      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4 mb-6">
          <BreadcrumbNav items={[
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete' },
          ]} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Leistungsgebiete der <span className="text-primary-500">KI-Agentur Groitzsch</span>
            </motion.h1>
            <motion.p
              className="text-xl mb-6" style={{ color: '#404B48' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Wir bedienen über <strong>250 Städte deutschlandweit</strong> – von unserem Hauptsitz in <strong>Groitzsch</strong> über <strong>Leipzig</strong>, <strong>Halle (Saale)</strong>, <strong>Dresden</strong> und <strong>Berlin</strong> bis nach <strong>Hamburg</strong>, <strong>München</strong> und <strong>Köln</strong> – mit KI-Automatisierung, Chatbots, Terminbuchung, CRM, Websites & SEO.
            </motion.p>
            <motion.p
              className="max-w-2xl mx-auto" style={{ color: '#68746F' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="inline-block w-4 h-4 mr-1 text-primary-500 -mt-0.5" />
              {businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality} ·{' '}
              <a href={`tel:${businessInfo.contact.telephoneE164}`} className="text-primary-400 hover:underline">{businessInfo.contact.telephone}</a>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F3F5F4' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-center" style={{ color: '#0C1210' }}>
              Regionen, die wir bedienen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regions.map((region, index) => (
                <motion.a
                  key={region.slug}
                  href={region.path}
                  className="block bg-white p-8 border rounded-2xl hover:border-primary-500/50 transition-all duration-300 group shadow-card" style={{ borderColor: '#E4E9E7' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary-400 transition-colors" style={{ color: '#0C1210' }}>
                    {region.name}
                  </h3>
                  <p className="text-primary-500 text-sm font-bold mb-3">{region.subtitle}</p>
                  <p className="text-sm mb-4" style={{ color: '#404B48' }}>{region.description}</p>
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

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8" style={{ color: '#0C1210' }}>
              Leistungen nach Region – Beispiele
            </h2>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#404B48' }}>
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
                  className="flex items-center gap-3 p-4 bg-white border rounded-xl hover:border-primary-500/50 transition-colors font-heading" style={{ color: '#0C1210', borderColor: '#E4E9E7' }}
                >
                  <span className="text-primary-500 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm">{getRegionServiceLinkText(item.serviceSlug, item.regionName, item.variant)}</span>
                </a>
              ))}
            </div>
            <p className="mt-10" style={{ color: '#68746F' }}>
              <a href="/leistungen" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungen ansehen</a>
              {' · '}
              <a href="/kontakt" className="text-primary-400 hover:underline font-heading font-bold">Kontakt</a>
            </p>
          </div>
        </div>
      </section>

      <GoogleMapsSection />
    </div>
  );
};

export default Leistungsgebiete;
