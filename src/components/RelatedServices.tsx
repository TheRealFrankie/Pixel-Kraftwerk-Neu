import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceInfo {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
}

/** Feste Reihenfolge: 5 Leistungen – auf jeder Seite werden die jeweils anderen 4 angezeigt. */
const RELATED_ORDER: string[] = [
  'ki-chatbots',
  'telefonassistenten',
  'automatisierungen',
  'webseite',
  'seo-top-3-in-google',
];

const allServices: ServiceInfo[] = [
  {
    slug: 'ki-chatbots',
    title: 'Digitale Kundenassistenz',
    shortDescription: 'Digitale Kundenassistenz für Ihre Website, die Besucher berät und Anfragen qualifiziert.',
    image: '/images/Chatbot - digitaleKundenassitenz.png',
  },
  {
    slug: 'telefonassistenten',
    title: 'Telefonische Kundenassistenz',
    shortDescription: 'Telefonische Kundenassistenz, die Anrufe entgegennimmt und professionell bearbeitet.',
    image: '/images/telefonassiatenz bot.png',
  },
  {
    slug: 'automatisierungen',
    title: 'Automatisierungen für Anfragen, Vertrieb & Terminplanung',
    shortDescription: 'Anfragen erfassen, sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress.',
    image: '/images/automtatisierung.png',
  },
  {
    slug: 'webseite',
    title: 'Webseiten im Mietmodell',
    shortDescription: 'Moderne, schnelle Websites im Mietmodell – mit Rundum-Betreuung.',
    image: '/images/Websites.png',
  },
  {
    slug: 'seo-top-3-in-google',
    title: 'SEO: Top 3 in Google',
    shortDescription: 'Lokales SEO-Angebot mit Fokus auf Top-Platzierungen für Ihre wichtigsten Suchbegriffe.',
    image: '/images/top3ingoogle.jpeg',
  },
];

const slugToService = new Map(allServices.map((s) => [s.slug, s]));

interface RelatedServicesProps {
  currentSlug: string;
  /** Optionale Anker-Hashes pro Slug (z. B. { 'ki-chatbots': '#ki-chatbot-fur-ihre-website' }) */
  anchorBySlug?: Record<string, string>;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentSlug, anchorBySlug }) => {
  const relatedServices = RELATED_ORDER.filter((slug) => slug !== currentSlug)
    .map((slug) => slugToService.get(slug))
    .filter((s): s is ServiceInfo => !!s);

  if (relatedServices.length === 0) return null;

  const getHref = (slug: string) => {
    const hash = anchorBySlug?.[slug];
    return hash ? `/${slug}${hash}` : `/${slug}`;
  };

  return (
    <section className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
              Das könnte Sie auch <span className="text-primary-500">interessieren</span>
            </h2>
            <p className="text-light-200">
              Entdecken Sie weitere Lösungen, die perfekt zu dieser Dienstleistung passen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <motion.a
                key={service.slug}
                href={getHref(service.slug)}
                className="group bg-dark-500 border border-dark-100 overflow-hidden hover:border-primary-500/50 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="relative w-full aspect-[16/10] bg-dark-400 shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-3 group-hover:text-primary-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-light-300 text-sm mb-4 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-primary-500 text-sm font-heading group-hover:translate-x-2 transition-transform duration-200">
                    Mehr erfahren
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
