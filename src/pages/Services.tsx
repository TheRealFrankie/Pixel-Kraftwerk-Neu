'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Phone,
  Target,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  Heart,
  DollarSign,
  Search,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import ServiceItemListSchema from '../components/ServiceItemListSchema';

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  slug: string;
}

const Services: React.FC = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreServices = [
    {
      icon: <MessageSquare size={24} />,
      title: "Digitale Kundenassistenz für Ihre Website",
      slug: "ki-chatbots",
      imageSrc: "/images/ki-chatbot-digitale-kundenassistenz.webp",
      imageAlt:
        "Digitale Kundenassistenz: KI-Chatbot auf Laptop und Smartphone, Kundenanfragen in Sekunden beantworten",
      badgeLabel: "Rund um die Uhr",
      description:
        "Eine digitale Assistenz, die Kundenanfragen beantwortet, Nachrichten entgegennimmt und Anliegen automatisch verarbeitet – auf Ihrer Website und in sozialen Netzwerken, rund um die Uhr.",
    },
    {
      icon: <Phone size={24} />,
      title: "Telefonische Kundenassistenz",
      slug: "telefonassistenten",
      imageSrc: "/images/ki-telefonassistent.webp",
      imageAlt: "KI-Telefonassistent: Anrufe entgegennehmen, Leads qualifizieren, Termine buchen – 24/7",
      badgeLabel: "Nie wieder verpasste Anrufe",
      description:
        "Eine telefonische Assistenz, die für Sie ans Telefon geht, Fragen beantwortet und Termine annimmt – auch dann, wenn gerade niemand erreichbar ist.",
    },
    {
      icon: <Target size={24} />,
      title: "Automatisierungen für Anfragen, Vertrieb & Terminplanung",
      slug: "automatisierungen",
      imageSrc: "/images/automatisierungen-anfragen-vertrieb-terminplanung.webp",
      imageAlt:
        "Automatisierungen: Anfrage, Sortierung, Zuweisung, Follow-up, Termin und CRM – durchgängige Prozessautomatisierung",
      badgeLabel: "Abläufe laufen von selbst",
      description:
        "Anfragen automatisch erfassen, sortieren und zuweisen. Termine buchen, bestätigen und erinnern – ohne Hin-und-Her. Damit Abläufe von selbst laufen.",
    },
    {
      icon: <Globe size={24} />,
      title: "Webseiten im Mietmodell",
      slug: "webseite",
      imageSrc: "/images/webseiten-mietmodell-agentur.webp",
      imageAlt: "Moderne Websites: verkaufsstark, suchmaschinenoptimiert, in Tagen statt Wochen",
      badgeLabel: "In Tagen statt Wochen",
      description:
        "Moderne Webseiten, die leicht verständlich sind und bei Suchmaschinen sichtbar werden, damit Kunden Sie schneller finden und direkt Kontakt aufnehmen können.",
    },
    {
      icon: <Search size={24} />,
      title: "SEO: Top 3 in Google",
      slug: "seo-top-3-in-google",
      imageSrc: "/images/seo-top-3-google-local-pack.webp",
      imageAlt: "Top 3 in Google: lokale Google-Suchergebnisse sichtbar dominieren",
      badgeLabel: "Top 3 in 90 Tagen",
      description:
        "Lokales SEO mit Fokus auf Top-Platzierungen für die Suchbegriffe, die Ihnen wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.",
    },
  ];

  const serviceDetails: ServiceDetail[] = [
    {
      icon: <MessageSquare size={40} strokeWidth={1.5} />,
      title: "Digitale Kundenassistenz",
      description: "Unsere digitale Kundenassistenz für Ihre Website begrüßt Besucher, beantwortet Fragen und qualifiziert Anfragen. Das System lernt aus Ihren Inhalten und führt Gespräche strukturiert und freundlich.",
      benefits: [
        "Deutlich weniger Routineanfragen für Ihr Team",
        "Sofortige Antworten für Ihre Website-Besucher – rund um die Uhr",
        "Automatische Qualifizierung von Interessenten"
      ],
      slug: "ki-chatbots"
    },
    {
      icon: <Phone size={40} strokeWidth={1.5} />,
      title: "Telefonische Kundenassistenz",
      description: "Unsere telefonische Kundenassistenz nimmt Anrufe entgegen, versteht Anliegen und bearbeitet sie professionell. Nie wieder verpasste Anrufe – Ihr Unternehmen ist immer erreichbar.",
      benefits: [
        "Keine verpassten Anrufe mehr",
        "Entlastung Ihres Teams von Routineanrufen",
        "Professionelle Anrufannahme rund um die Uhr"
      ],
      slug: "telefonassistenten"
    },
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Automatisierungen für Anfragen, Vertrieb & Terminplanung",
      description: "Wir bauen Abläufe, die Anfragen automatisch erfassen, sortieren und zuweisen, Termine buchen und bestätigen sowie Follow-ups und Erinnerungen übernehmen – ohne dass Ihr Team ständig manuell nachhaken muss.",
      benefits: [
        "Anfragen zentral erfasst, priorisiert und zugewiesen",
        "Terminplanung, Bestätigung und Reminder automatisch",
        "Mehr Überblick, weniger Stress, weniger verpasste Chancen"
      ],
      slug: "automatisierungen"
    },
    {
      icon: <Globe size={40} strokeWidth={1.5} />,
      title: "Website-Entwicklung im Mietmodell",
      description: "Wir entwickeln moderne, schnelle Websites im Mietmodell – mit Rundum-Betreuung und ohne technische Sorgen. Auf Wunsch können diese Websites gezielt mit Automatisierung und digitaler Kundenkommunikation erweitert werden.",
      benefits: [
        "Starke Außenwirkung und klare Positionierung",
        "Zeitgemäßer Auftritt für Ihr Unternehmen – auch auf dem Smartphone",
        "Full-Service-Betreuung mit Änderungen in 48 Stunden"
      ],
      slug: "webseite"
    },
    {
      icon: <Search size={40} strokeWidth={1.5} />,
      title: "SEO: Top 3 in Google",
      description: "Wir sorgen dafür, dass Ihr Unternehmen bei Google dort erscheint, wo Kunden klicken – mit Fokus auf die Suchbegriffe, die wirklich Aufträge bringen.",
      benefits: [
        "Bessere Platzierungen für Ihre wichtigsten Keywords",
        "Mehr qualifizierte Anfragen aus Ihrer Region",
        "Transparente Strategie und verständliche Auswertungen"
      ],
      slug: "seo-top-3-in-google"
    },
  ];

  const companyBenefits = [
    { icon: <Clock size={28} />, text: "Spürbar weniger Verwaltungsaufwand" },
    { icon: <TrendingUp size={28} />, text: "Effizientere Abläufe" },
    { icon: <Users size={28} />, text: "Entlastung Ihres Teams" },
    { icon: <Heart size={28} />, text: "Höhere Kundenzufriedenheit" },
    { icon: <DollarSign size={28} />, text: "Mehr Umsatzpotenzial durch bessere Prozesse" },
  ];

  return (
    <div className="bg-dark-500">
      <ServiceItemListSchema />

      {/* HERO SECTION – Premium Hintergrundbild wie auf den Leistungsseiten */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-500">
        {/* Bild beginnt unterhalb der Header-Leiste */}
        <div className="absolute top-20 left-0 right-0 bottom-0 md:top-24">
          <Image
            src="/images/automatisierungen-anfragen-vertrieb-terminplanung.webp"
            alt="Pixel Kraftwerk – Leistungen für Automatisierung, Websites & digitale Kundenkommunikation"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Mehrschichtiger Overlay für Premium-Look & Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/55 to-dark-500/95" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-500/40 via-transparent to-dark-500/50" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500/20 to-transparent" aria-hidden />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight"
              style={{
                color: '#F5F7FA',
                textShadow: '0 10px 30px rgba(0,0,0,0.7)',
                WebkitTextStroke: '1px rgba(0,0,0,0.25)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Unsere Leistungen – aus einer Hand
            </motion.h1>

            <motion.p
              className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full border border-primary-500/40 bg-dark-500/40 text-sm md:text-base font-heading tracking-wide uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="mr-2 text-primary-400">Digitale Kundenassistenz · Websites · Automatisierung · SEO</span>
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed text-white"
              style={{
                textShadow: '0 4px 14px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.6)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Intelligente Systeme, die Anfragen, Kundenkommunikation und Abläufe für Sie übernehmen –
              sichtbar modern, leise im Hintergrund, <strong>spürbar im Ergebnis.</strong>
            </motion.p>

            <motion.p
              className="text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed text-white font-medium"
              style={{
                textShadow: '0 3px 10px rgba(0,0,0,0.7)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Sie sagen uns, wo es hakt – <span className="font-bold">wir bauen das System, das es löst.</span>
            </motion.p>

            <motion.p
              className="text-light-300 text-sm mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <a href="/leistungsgebiete" className="text-primary-300 hover:text-primary-100 hover:underline">
                Leistungsgebiete: Groitzsch, Leipzig, Sachsen
              </a>
            </motion.p>

            <motion.button
              onClick={scrollToContactForm}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose Beratung anfordern
            </motion.button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
      </section>

      {/* CORE SERVICES OVERVIEW – Kacheln mit Bildern wie auf der Startseite */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-100 mb-6">
                Was wir für Ihr <span className="text-primary-500">Unternehmen umsetzen</span>
              </h2>
              <p className="text-lg text-light-200 max-w-3xl mx-auto">
                Digitale Lösungen, die Kundenkommunikation, Anfragen, Termine und Abläufe für Sie übernehmen – mit klaren,
                eigenständigen Leistungen, die sich perfekt kombinieren lassen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {coreServices.map((service, index) => {
                const isSeoCard = service.slug === 'seo-top-3-in-google';

                if (isSeoCard) {
                  return (
                    <motion.a
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="group block lg:col-span-2 rounded-2xl relative overflow-hidden border border-dark-200/80 bg-dark-500/95 shadow-card hover:border-primary-500/50 hover:shadow-[0_0_48px_-12px_rgba(0,179,166,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] min-h-[260px] lg:min-h-[280px]">
                        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] overflow-hidden bg-dark-400 order-2 lg:order-1">
                          <Image
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover object-center lg:object-right-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-500/60 lg:to-dark-500/80 pointer-events-none" aria-hidden />
                          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-primary-400 lg:hidden">
                            <Search size={20} strokeWidth={1.5} className="flex-shrink-0" />
                            <span className="text-sm font-heading font-bold">{service.badgeLabel}</span>
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
                          <h3 className="text-xl md:text-2xl font-heading font-bold text-light-100 mb-3 group-hover:text-primary-400 transition-colors duration-200">
                            {service.title}
                          </h3>
                          {service.description && (
                            <p className="text-light-200 text-sm md:text-base leading-relaxed mb-4 max-w-xl">
                              {service.description}
                            </p>
                          )}
                          <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                            Mehr erfahren
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                }

                return (
                  <motion.a
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/30 to-transparent pointer-events-none"
                        aria-hidden
                      />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                        <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary-500/15 border border-primary-500/30">
                          {service.icon}
                        </span>
                        <span className="text-xs font-heading font-bold line-clamp-2">{service.badgeLabel}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                        {service.title}
                      </h3>
                      {service.description && (
                        <p className="text-light-300 text-base leading-relaxed mb-4">
                          {service.description}
                        </p>
                      )}
                      <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                        Mehr erfahren
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-light-100 text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unsere Leistungen <span className="text-primary-500">im Detail</span>
            </motion.h2>

            <div className="space-y-16">
              {serviceDetails.map((service, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:w-1/3 flex-shrink-0">
                    <a href={`/${service.slug}`} className="block group">
                      <div className="bg-dark-400 p-8 border border-dark-100 h-full hover:border-primary-500/50 transition-colors duration-300">
                        <div className="text-primary-500 mb-4">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-heading font-bold text-light-100 group-hover:text-primary-400 transition-colors duration-200">
                          {service.title}
                        </h3>
                      </div>
                    </a>
                  </div>

                  <div className="lg:w-2/3">
                    <p className="text-light-200 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="bg-dark-400/50 p-6 border-l-4 border-primary-500 mb-6">
                      <p className="text-primary-400 font-heading font-bold mb-4">Nutzen für Sie:</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-light-100">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`/${service.slug}`}
                      className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200 group"
                    >
                      Mehr erfahren
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY BENEFITS */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-light-100 text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was Ihr Unternehmen <span className="text-primary-500">dadurch gewinnt</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <p className="text-light-100 font-heading font-bold">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns Ihre Abläufe <span className="text-primary-500">vereinfachen</span>
            </motion.h2>

            <motion.p
              className="text-lg text-light-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In einer kurzen Beratung zeigen wir Ihnen, wie Ihre Prozesse automatisiert und Ihr Unternehmen messbar entlastet werden können.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* GOOGLE MAPS */}
      <GoogleMapsSection />
    </div>
  );
};

export default Services;
