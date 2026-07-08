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
import BreadcrumbNav from '../components/BreadcrumbNav';
import TrustLine from '../components/TrustLine';

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  slug: string;
}

const servicesBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://pixelkraftwerk-ai.com' },
    { '@type': 'ListItem', position: 2, name: 'Unsere Leistungen', item: 'https://pixelkraftwerk-ai.com/leistungen' },
  ],
};

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
      title: "Professionelle Webseiten",
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
    {
      icon: <Users size={24} />,
      title: "CRM-Systeme & Lead-Management",
      slug: "crm-systeme",
      imageSrc: "/images/crm-systeme-kundenverwaltung.webp",
      imageAlt: "CRM-System: Zentrale Kundenverwaltung und Lead-Pipeline für kleine Unternehmen",
      badgeLabel: "Kein Lead geht verloren",
      description:
        "Alle Anfragen, Angebote und Kundenkontakte zentral verwalten. Automatische Follow-ups, transparente Pipeline und Auswertungen – damit aus Interessenten Aufträge werden.",
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
      title: "Professionelle Webseiten",
      description: "Wir entwickeln moderne, individuell geplante Unternehmenswebseiten mit klarer Nutzerführung, überzeugendem Design und technisch sauberer Umsetzung. Auf Wunsch mit Automatisierung und digitaler Kundenkommunikation erweitert.",
      benefits: [
        "Starke Außenwirkung und klare Positionierung",
        "Zeitgemäßer Auftritt für Ihr Unternehmen – auch auf dem Smartphone",
        "Individuell entwickelt, mobil optimiert und SEO-technisch vorbereitet"
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
    {
      icon: <Users size={40} strokeWidth={1.5} />,
      title: "CRM-Systeme & Lead-Management",
      description: "Wir richten CRM-Systeme ein, die zu Ihrem Geschäft passen: zentrale Kundenverwaltung, visuelle Vertriebspipeline, automatisierte Follow-ups und aussagekräftige Auswertungen.",
      benefits: [
        "Zentrale Kundendatenbank statt verstreuter Listen",
        "Automatische Follow-ups und Erinnerungen",
        "Transparente Pipeline mit Auswertungen und Kennzahlen"
      ],
      slug: "crm-systeme"
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
    <div style={{ background: '#FAFAF9' }}>
      <ServiceItemListSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbSchema) }} />

      {/* HERO SECTION – Premium Hintergrundbild wie auf den Leistungsseiten */}
      <section className="relative min-h-[100dvh] md:min-h-screen flex flex-col" style={{ background: '#FAFAF9' }}>
        <div className="relative z-20 container mx-auto px-4 pt-20 md:pt-24">
          <BreadcrumbNav items={[
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen' },
          ]} />
        </div>
        {/* Bild füllt die gesamte Hero-Sektion (inkl. Header-Bereich) */}
        <div className="absolute inset-0">
          <Image
            src="/images/automatisierungen-anfragen-vertrieb-terminplanung.webp"
            alt="Pixel Kraftwerk – Leistungen für Automatisierung, Websites & digitale Kundenkommunikation"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          {/* für Premium-Look & Lesbarkeit */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)' }} aria-hidden />
        </div>

        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              className="font-heading font-bold mb-4 leading-[1.08]"
              style={{
                color: '#0C1210',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Leistungen der KI-Agentur Groitzsch &amp; Leipzig
            </motion.h1>

            <motion.h2
              className="pill-badge mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="mr-2 text-primary-400">Digitale Kundenassistenz · Websites · Automatisierung · SEO</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-2xl max-w-2xl mb-4 leading-relaxed"
              style={{
                color: '#404B48',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Intelligente Systeme, die Anfragen, Kundenkommunikation und Abläufe für Sie übernehmen –
              sichtbar modern, leise im Hintergrund, <strong>spürbar im Ergebnis.</strong>
            </motion.p>

            <motion.p
              className="text-sm md:text-lg max-w-2xl mb-4 leading-relaxed font-medium"
              style={{
                color: '#404B48',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Sie sagen uns, wo es hakt – <span className="font-bold">wir bauen das System, das es löst.</span>
            </motion.p>

            <motion.p
              className="text-sm mb-8" style={{ color: '#68746F' }}
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
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose Beratung anfordern
            </motion.button>
            <TrustLine className="mt-6" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
      </section>

      {/* CORE SERVICES OVERVIEW – Kacheln mit Bildern wie auf der Startseite */}
      <section className="py-24" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}>
                Was wir für Ihr <span className="text-primary-500">Unternehmen umsetzen</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: '#404B48' }}>
                Digitale Lösungen, die Kundenkommunikation, Anfragen, Termine und Abläufe für Sie übernehmen – mit klaren,
                eigenständigen Leistungen, die sich perfekt kombinieren lassen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {coreServices.map((service, index) => (
                <motion.a
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group block rounded-2xl bg-white border shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50" style={{ borderColor: '#E4E9E7' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ background: '#F4F7F6' }}>
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"
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
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary-500 transition-colors duration-200" style={{ color: '#0C1210' }}>
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-base leading-relaxed mb-4" style={{ color: '#68746F' }}>
                        {service.description}
                      </p>
                    )}
                    <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                      {service.title} entdecken
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-24" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-center mb-20" style={{ color: '#0C1210' }}
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
                      <div className="rounded-2xl border bg-white p-8 h-full shadow-card hover:border-primary-500/30 transition-colors duration-300" style={{ borderColor: '#E4E9E7' }}>
                        <div className="text-primary-500 mb-4">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-heading font-bold group-hover:text-primary-500 transition-colors duration-200" style={{ color: '#0C1210' }}>
                          {service.title}
                        </h3>
                      </div>
                    </a>
                  </div>

                  <div className="lg:w-2/3">
                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#404B48' }}>
                      {service.description}
                    </p>

                    <div className="rounded-2xl border bg-white p-6 mb-6 shadow-card" style={{ borderColor: 'rgba(14,124,114,0.2)', borderLeft: '4px solid #0E7C72' }}>
                      <p className="text-primary-400 font-heading font-bold mb-4">Nutzen für Sie:</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                            <span style={{ color: '#0C1210' }}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`/${service.slug}`}
                      className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200 group"
                    >
                      {service.title} im Detail
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
      <section className="py-24" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-center mb-16" style={{ color: '#0C1210' }}
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
                  className="rounded-2xl border bg-white p-6 shadow-card hover:border-primary-500/30 transition-all duration-300 text-center" style={{ borderColor: '#E4E9E7' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <p className="font-heading font-bold" style={{ color: '#0C1210' }}>{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns Ihre Abläufe <span className="text-primary-500">vereinfachen</span>
            </motion.h2>

            <motion.p
              className="text-lg mb-10" style={{ color: '#404B48' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In einer kurzen Beratung zeigen wir Ihnen, wie Ihre Prozesse automatisiert und Ihr Unternehmen messbar entlastet werden können.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <button onClick={scrollToContactForm} className="btn-primary">
                Kostenlose Beratung anfordern
                <ArrowRight size={18} />
              </button>
              <a href="tel:+491785844460" className="btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Direkt anrufen
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm service="allgemein" heading="Kostenlose Beratung anfordern" subheading="Erzählen Sie uns von Ihrem Unternehmen – wir melden uns zeitnah mit konkreten Vorschlägen." />

      {/* GOOGLE MAPS */}
      <GoogleMapsSection />
    </div>
  );
};

export default Services;
