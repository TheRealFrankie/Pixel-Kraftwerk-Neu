import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { INK, BODY, PETROL, BORDER, SURFACE } from '@/lib/theme';

interface ServiceInfo {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
}

const RELATED_ORDER: string[] = [
  'ki-chatbots',
  'telefonassistenten',
  'automatisierungen',
  'webseite',
  'seo-top-3-in-google',
  'crm-systeme',
];

const allServices: ServiceInfo[] = [
  {
    slug: 'ki-chatbots',
    title: 'Digitale Kundenassistenz',
    shortDescription: 'Digitale Kundenassistenz für Ihre Website, die Besucher berät und Anfragen qualifiziert.',
    image: '/images/ki-chatbot-digitale-kundenassistenz.webp',
  },
  {
    slug: 'telefonassistenten',
    title: 'Telefonische Kundenassistenz',
    shortDescription: 'Telefonische Kundenassistenz, die Anrufe entgegennimmt und professionell bearbeitet.',
    image: '/images/ki-telefonassistent.webp',
  },
  {
    slug: 'automatisierungen',
    title: 'Automatisierungen für Anfragen, Vertrieb & Terminplanung',
    shortDescription: 'Anfragen erfassen, sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress.',
    image: '/images/automatisierungen-anfragen-vertrieb-terminplanung.webp',
  },
  {
    slug: 'webseite',
    title: 'Webseiten im Mietmodell',
    shortDescription: 'Moderne, schnelle Websites im Mietmodell – mit Rundum-Betreuung.',
    image: '/images/webseiten-mietmodell-agentur.webp',
  },
  {
    slug: 'seo-top-3-in-google',
    title: 'SEO: Top 3 in Google',
    shortDescription: 'Lokales SEO-Angebot mit Fokus auf Top-Platzierungen für Ihre wichtigsten Suchbegriffe.',
    image: '/images/seo-top-3-google-local-pack.webp',
  },
  {
    slug: 'crm-systeme',
    title: 'CRM-Systeme',
    shortDescription: 'Zentrale Kundenverwaltung, automatisierte Follow-ups und transparente Vertriebspipeline für Ihr Unternehmen.',
    image: '/images/crm-systeme-kundenverwaltung.webp',
  },
];

const slugToService = new Map(allServices.map((s) => [s.slug, s]));

interface RelatedServicesProps {
  currentSlug: string;
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
    <section className="py-24" style={{ background: SURFACE }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: INK }}>
              Das könnte Sie auch{' '}
              <span style={{ color: PETROL }}>interessieren</span>
            </h2>
            <p style={{ color: BODY }}>
              Entdecken Sie weitere Lösungen, die perfekt zu dieser Dienstleistung passen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {relatedServices.map((service, index) => (
              <motion.a
                key={service.slug}
                href={getHref(service.slug)}
                className="group bg-white rounded-2xl border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
                style={{ borderColor: BORDER }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="relative w-full aspect-[16/10] shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-base font-heading font-bold mb-2 leading-snug line-clamp-2 min-h-[2.75rem] transition-colors duration-200"
                    style={{ color: INK }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed line-clamp-3 flex-1" style={{ color: BODY }}>
                    {service.shortDescription}
                  </p>
                  <span
                    className="mt-auto inline-flex items-center text-sm font-heading group-hover:translate-x-2 transition-transform duration-200"
                    style={{ color: PETROL }}
                  >
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
