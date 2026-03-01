'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { getRegionContent, getValidRegionSlug } from '../data/regionContent';
import { SERVICES, getRegionServiceLinkText } from '../data/services';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbSchemaRegion from '../components/BreadcrumbSchemaRegion';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';

const RegionPage: React.FC<{ region: string }> = ({ region }) => {
  const slug = getValidRegionSlug(region);
  const content = getRegionContent(slug);

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchemaRegion regionName={content.name} regionSlug={slug} />
      <LocalBusinessSchema pageType="homepage" customDescription={content.metaDescription} />

      <section className="relative pt-32 pb-24 bg-dark-500 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-primary-500 font-heading font-bold text-sm mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <a href="/leistungsgebiete" className="hover:underline">Leistungsgebiete</a> / {content.name}
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {content.title}
            </motion.h1>
            <motion.p
              className="text-xl text-light-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.intro}
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-4 text-light-300 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span>{businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality}</span>
              <span>·</span>
              <a href={`tel:${businessInfo.contact.telephone}`} className="text-primary-400 hover:underline">{businessInfo.contact.telephone}</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            {content.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-light-200 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-light-100 mb-8">Leistungen in {content.name}</h2>
            <ul className="space-y-3">
              {content.servicesHighlight.map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-light-200">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-light-200 text-sm mb-4">Leistungen, die wir hier anbieten:</p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {SERVICES.map((s, i) => (
                <li key={s.slug}>
                  <a
                    href={`/leistungsgebiete/${slug}/${s.slug}`}
                    className="text-primary-400 hover:underline"
                  >
                    {getRegionServiceLinkText(s.slug, content.name, i)}
                  </a>
                </li>
              ))}
              <li>
                <a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">
                  SEO: Top 3 in Google
                </a>
              </li>
            </ul>
            <p className="mt-8">
              <a href="/services" className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400">
                Alle Leistungen ansehen
                <ArrowRight size={18} className="ml-2" />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-light-100 mb-8">Häufige Fragen – {content.name}</h2>
            <div className="space-y-6">
              {content.faqs.map((faq, i) => (
                <div key={i} className="border-b border-dark-100 pb-6">
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{faq.q}</h3>
                  <p className="text-light-200">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light-200 mb-6">
            <a href="/leistungsgebiete" className="text-primary-400 hover:underline">Alle Leistungsgebiete</a>
            {' · '}
            <a href="/contact" className="text-primary-400 hover:underline">Kontakt</a>
          </p>
        </div>
      </section>

      <ContactForm />
      <GoogleMapsSection />
    </div>
  );
};

export default RegionPage;
