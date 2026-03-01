'use client';

import React from 'react';
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
    { icon: <MessageSquare size={24} />, title: "Digitale Kundenassistenz für Ihre Website", slug: "ki-chatbots" },
    { icon: <Phone size={24} />, title: "Telefonische Kundenassistenz", slug: "telefonassistenten" },
    { icon: <Target size={24} />, title: "Automatisierungen für Anfragen, Vertrieb & Terminplanung", slug: "automatisierungen" },
    { icon: <Globe size={24} />, title: "Webseiten im Mietmodell", slug: "webseite" },
    { icon: <Search size={24} />, title: "SEO: Top 3 in Google", slug: "seo-top-3-in-google" },
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

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Unsere Leistungen im Überblick
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Wir entwickeln intelligente Systeme, die Arbeitsabläufe vereinfachen, Kundenkommunikation automatisieren und messbar Zeit und Kosten sparen.
            </motion.p>

            <motion.p
              className="text-lg text-light-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Unsere Lösungen helfen Unternehmen dabei, wiederkehrende Aufgaben zu automatisieren, Abläufe zu strukturieren und Kunden professionell zu betreuen – ohne komplizierte Technik und ohne Fachchinesisch.
              <br /><br />
              <strong className="text-light-100">Sie sagen uns, wo es hakt – wir bauen das System, das es löst.</strong>
            </motion.p>
            <motion.p className="text-light-300 text-sm mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <a href="/leistungsgebiete" className="text-primary-400 hover:underline">Leistungsgebiete: Groitzsch, Leipzig, Sachsen</a>
            </motion.p>

            <motion.button
              onClick={scrollToContactForm}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose Beratung anfordern
            </motion.button>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                Wir kombinieren moderne Websites, intelligente Automatisierung und digitale Assistenzsysteme zu einer ganzheitlichen Lösung, die Ihr Unternehmen im Alltag spürbar entlastet und Ihre Prozesse zuverlässig unterstützt.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <motion.a
                  key={index}
                  href={`/${service.slug}`}
                  className="flex items-center bg-dark-500 p-5 border border-dark-100 hover:border-primary-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div className="text-primary-500 mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <p className="text-light-100 font-heading font-bold text-sm group-hover:text-primary-400 transition-colors duration-200">{service.title}</p>
                </motion.a>
              ))}
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
