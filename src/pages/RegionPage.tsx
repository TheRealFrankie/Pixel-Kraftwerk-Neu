'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle, MessageCircle, Workflow, Globe, Zap, Search } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { LEISTUNGSGEBIETE_SLUGS } from '../data/leistungsgebiete';
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
      {LEISTUNGSGEBIETE_SLUGS.includes(slug) && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareCompany',
              name: businessInfo.name,
              telephone: businessInfo.contact.telephone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: businessInfo.address.streetAddress,
                postalCode: businessInfo.address.postalCode,
                addressLocality: businessInfo.address.addressLocality,
                addressCountry: businessInfo.address.addressCountry,
              },
              areaServed: [
                { '@type': 'City', name: content.name },
                { '@type': 'AdministrativeArea', name: 'Landkreis Leipzig' },
              ],
            }),
          }}
        />
      )}

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
            <p className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400"
              >
                Alle Leistungen ansehen
                <ArrowRight size={18} className="ml-2" />
              </a>
            </p>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map((s, i) => {
                const altMap: Record<string, string> = {
                  'ki-chatbots':
                    'Digitale Kundenassistenz: KI-Chatbot auf Laptop und Smartphone, Kundenanfragen in Sekunden beantworten',
                  telefonassistenten:
                    'KI-Telefonassistent: Anrufe entgegennehmen, Leads qualifizieren, Termine buchen – 24/7',
                  automatisierungen:
                    'Automatisierungen: Anfrage, Sortierung, Zuweisung, Follow-up, Termin und CRM – durchgängige Prozessautomatisierung',
                  webseiten:
                    'Moderne Websites: verkaufsstark, suchmaschinenoptimiert, in Tagen statt Wochen',
                  'seo-top-3':
                    'Top 3 in Google: Google-Suchergebnisse mit lokalen Einträgen und Karte – Ihr Unternehmen sichtbar vorne',
                };

                const altText = content.serviceCardAltTexts?.[s.slug] ?? altMap[s.slug];

                if (s.slug === 'ki-chatbots') {
                  return (
                    <motion.a
                      key={`card-${s.slug}`}
                      href={`/leistungsgebiete/${slug}/${s.slug}`}
                      className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                        <Image
                          src="/images/ki-chatbot-digitale-kundenassistenz.webp"
                          alt={altText}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                          <MessageCircle size={20} strokeWidth={1.5} className="flex-shrink-0" />
                          <span className="text-sm font-heading font-bold">Rund um die Uhr</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-wide text-primary-400 font-heading mb-2">
                          Leistung in {content.name}
                        </p>
                        <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                          KI-Chatbots
                        </h3>
                        <p className="text-light-300 text-sm leading-relaxed mb-4">
                          Eine digitale Assistenz, die Kundenanfragen beantwortet, Nachrichten entgegennimmt und Anliegen automatisch verarbeitet – auf Ihrer Website und in Messengern, rund um die Uhr.
                        </p>
                        <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                          Mehr erfahren
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                if (s.slug === 'telefonassistenten') {
                  return (
                    <motion.a
                      key={`card-${s.slug}`}
                      href={`/leistungsgebiete/${slug}/${s.slug}`}
                      className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                        <Image
                          src="/images/ki-telefonassistent.webp"
                          alt={altText}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                          <Workflow size={20} strokeWidth={1.5} className="flex-shrink-0" />
                          <span className="text-sm font-heading font-bold">Nie wieder verpasste Anrufe</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-wide text-primary-400 font-heading mb-2">
                          Leistung in {content.name}
                        </p>
                        <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                          KI-Telefonassistent
                        </h3>
                        <p className="text-light-300 text-sm leading-relaxed mb-4">
                          Eine telefonische Assistenz, die für Sie ans Telefon geht, Fragen beantwortet und Termine annimmt – auch dann, wenn gerade niemand erreichbar ist.
                        </p>
                        <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                          Mehr erfahren
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                if (s.slug === 'webseiten') {
                  return (
                    <motion.a
                      key={`card-${s.slug}`}
                      href={`/leistungsgebiete/${slug}/${s.slug}`}
                      className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                        <Image
                          src="/images/webseiten-mietmodell-agentur.webp"
                          alt={altText}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                          <Globe size={20} strokeWidth={1.5} className="flex-shrink-0" />
                          <span className="text-sm font-heading font-bold">In Tagen statt Wochen</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-wide text-primary-400 font-heading mb-2">
                          Leistung in {content.name}
                        </p>
                        <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                          Webseiten
                        </h3>
                        <p className="text-light-300 text-sm leading-relaxed mb-4">
                          Moderne Webseiten, die leicht verständlich sind und bei Suchmaschinen sichtbar werden, damit Kunden Sie schneller finden und direkt Kontakt aufnehmen können.
                        </p>
                        <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                          Mehr erfahren
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                if (s.slug === 'automatisierungen') {
                  return (
                    <motion.a
                      key={`card-${s.slug}`}
                      href={`/leistungsgebiete/${slug}/${s.slug}`}
                      className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                        <Image
                          src="/images/automatisierungen-anfragen-vertrieb-terminplanung.webp"
                          alt={altText}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                          <Zap size={20} strokeWidth={1.5} className="flex-shrink-0" />
                          <span className="text-sm font-heading font-bold">Abläufe laufen von selbst</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-wide text-primary-400 font-heading mb-2">
                          Leistung in {content.name}
                        </p>
                        <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                          Automatisierungen für Anfragen, Vertrieb & Terminplanung
                        </h3>
                        <p className="text-light-300 text-sm leading-relaxed mb-4">
                          Anfragen automatisch erfassen, sortieren und zuweisen. Termine buchen, bestätigen und erinnern – ohne Hin-und-Her. Damit Abläufe von selbst laufen.
                        </p>
                        <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                          Mehr erfahren
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                if (s.slug === 'seo-top-3') {
                  return (
                    <motion.a
                      key={`card-${s.slug}`}
                      href={`/leistungsgebiete/${slug}/${s.slug}`}
                      className="group block lg:col-span-2 rounded-2xl relative overflow-hidden border border-dark-200/80 bg-dark-500/95 shadow-card hover:border-primary-500/50 hover:shadow-[0_0_48px_-12px_rgba(0,179,166,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] min-h-[260px] lg:min-h-[280px]">
                        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] overflow-hidden bg-dark-400 order-2 lg:order-1">
                          <Image
                            src="/images/seo-top-3-google-local-pack.webp"
                            alt={altText}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover object-center lg:object-right-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-500/60 lg:to-dark-500/80 pointer-events-none" aria-hidden />
                          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-primary-400 lg:hidden">
                            <Search size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">Top 3 in 90 Tagen</span>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-8 order-1 lg:order-2 relative bg-dark-500 border-l-0 lg:border-l border-dark-200/50">
                          <div className="absolute top-4 right-4 md:top-6 md:right-6">
                            <span className="inline-flex items-center rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30 px-3 py-1.5 text-xs font-heading font-bold tracking-wide">
                              Fokus-Leistung
                            </span>
                          </div>
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500/20 text-primary-400 mb-5 flex-shrink-0 shadow-inner border border-primary-500/20">
                            <Search size={28} strokeWidth={1.5} />
                          </div>
                          <p className="text-xs uppercase tracking-wide text-primary-400 font-heading mb-2">
                            Leistung in {content.name}
                          </p>
                          <h3 className="text-xl md:text-2xl font-heading font-bold text-light-100 mb-3 group-hover:text-primary-400 transition-colors duration-200">
                            Top 3 in Google in 90 Tagen
                          </h3>
                          <p className="text-light-200 text-sm md:text-base leading-relaxed mb-4 max-w-xl">
                            Lokales SEO mit Fokus auf Top-Platzierungen für die Suchbegriffe, die Ihnen wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.
                          </p>
                          <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            Mehr erfahren
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                return null;
              })}
            </div>
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
