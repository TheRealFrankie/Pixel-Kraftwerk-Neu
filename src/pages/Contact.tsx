'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Star, MessageSquare, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbNav from '../components/BreadcrumbNav';
import { businessInfo } from '../data/businessInfo';

const contactBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://pixelkraftwerk-ai.com' },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://pixelkraftwerk-ai.com/kontakt' },
  ],
};

const contactPoints = [
  {
    icon: <Phone size={22} />,
    label: 'Telefon',
    value: businessInfo.contact.telephone,
    href: `tel:${businessInfo.contact.telephoneE164}`,
    sub: 'Direkt anrufen',
  },
  {
    icon: <Mail size={22} />,
    label: 'E-Mail',
    value: businessInfo.contact.email,
    href: `mailto:${businessInfo.contact.email}`,
    sub: 'Antwort innerhalb von 24h',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Standort',
    value: `${businessInfo.address.streetAddress}, ${businessInfo.address.postalCode} ${businessInfo.address.addressLocality}`,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address.streetAddress + ', ' + businessInfo.address.postalCode + ' ' + businessInfo.address.addressLocality)}`,
    sub: 'Sachsen, Deutschland',
    external: true,
  },
  {
    icon: <Clock size={22} />,
    label: 'Erreichbarkeit',
    value: businessInfo.openingHoursDisplay,
    href: null,
    sub: 'Persönliche Betreuung',
  },
];

const steps = [
  { num: '01', title: 'Formular ausfüllen', desc: 'Kurze Beschreibung Ihres Anliegens – dauert unter 2 Minuten.' },
  { num: '02', title: 'Wir melden uns', desc: 'Innerhalb von 24h erhalten Sie eine persönliche Antwort.' },
  { num: '03', title: 'Kostenlose Demo', desc: 'Wir zeigen Ihnen eine maßgeschneiderte Lösung für Ihr Unternehmen.' },
];

const Contact: React.FC = () => {
  return (
    <div className="bg-dark-500 min-h-screen">
      <LocalBusinessSchema pageType="contact" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { label: 'Startseite', href: '/' },
              { label: 'Kontakt' },
            ]} />
          </div>
          <div className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-heading font-semibold mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <MessageSquare size={14} />
              Kostenlose Erstberatung
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-heading font-bold text-light-100 mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sprechen wir über <span className="text-primary-500">Ihr Projekt</span>
            </motion.h1>
            <motion.p
              className="text-light-200 text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ob KI-Chatbot, Telefonassistent, Automatisierung oder neue Webseite – wir analysieren Ihren Bedarf
              und zeigen Ihnen konkret, wie wir Ihnen helfen können. Persönlich, unverbindlich, aus Groitzsch.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS + PROCESS */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Linke Spalte: Kontaktdaten + Prozess */}
            <div className="space-y-8">
              {/* Kontaktdaten */}
              <div className="space-y-3">
                {contactPoints.map((point, i) => (
                  <motion.div
                    key={point.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-dark-400 border border-dark-200/50 hover:border-primary-500/40 transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-500/10 text-primary-500 flex-shrink-0">
                      {point.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-light-400 font-heading uppercase tracking-wide mb-0.5">{point.label}</div>
                      {point.href ? (
                        <a
                          href={point.href}
                          {...(point.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="text-light-100 font-heading font-semibold text-sm hover:text-primary-400 transition-colors truncate block"
                          itemProp={point.label === 'Telefon' ? 'telephone' : point.label === 'E-Mail' ? 'email' : undefined}
                        >
                          {point.value}
                        </a>
                      ) : (
                        <span className="text-light-100 font-heading font-semibold text-sm" itemProp="openingHours">
                          {point.value}
                        </span>
                      )}
                      <div className="text-xs text-light-400 mt-0.5">{point.sub}</div>
                    </div>
                    {point.href && (
                      <ArrowRight size={16} className="text-light-400 flex-shrink-0 ml-auto" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Prozess */}
              <motion.div
                className="p-6 rounded-xl bg-dark-400 border border-dark-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-base font-heading font-bold text-light-100 mb-5">
                  So läuft es ab
                </h2>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={step.num} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-500/15 border border-primary-500/30 flex items-center justify-center">
                        <span className="text-primary-400 text-xs font-heading font-bold">{step.num}</span>
                      </div>
                      <div>
                        <div className="text-sm font-heading font-semibold text-light-100">{step.title}</div>
                        <div className="text-xs text-light-400 mt-0.5">{step.desc}</div>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="absolute ml-[17px] mt-9 w-px h-4 bg-primary-500/20" aria-hidden />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Google Bewertung */}
              <motion.a
                href="https://g.page/r/CUl0X04KsO71EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-dark-400 border border-dark-200/50 hover:border-primary-500/40 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-yellow-400/10 flex-shrink-0">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold text-light-100 group-hover:text-primary-400 transition-colors">
                    Bereits Kunde? Bewertung hinterlassen
                  </div>
                  <div className="text-xs text-light-400 mt-0.5">Google Rezension schreiben →</div>
                </div>
              </motion.a>
            </div>

            {/* Rechte Spalte: Formular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm inline />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <GoogleMapsSection />
    </div>
  );
};

export default Contact;
