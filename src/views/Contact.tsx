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
    href: businessInfo.socialMedia.googleMaps,
    sub: 'Auf Google Maps ansehen',
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
    <div style={{ background: '#FAFAF9', minHeight: '100vh' }}>
      <LocalBusinessSchema pageType="contact" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { label: 'Startseite', href: '/' },
              { label: 'Kontakt' },
            ]} />
          </div>
          <div className="max-w-3xl">
            <motion.div
              className="pill-badge mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <MessageSquare size={14} />
              Kostenlose Erstberatung
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-heading font-bold mb-5 leading-tight" style={{ color: '#0C1210' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Kontakt zur KI-Agentur in <span className="text-primary-500">Groitzsch &amp; Leipzig</span>
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed max-w-2xl" style={{ color: '#404B48' }}
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border hover:border-primary-500/40 transition-all duration-200" style={{ borderColor: '#E4E9E7' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-500/10 text-primary-500 flex-shrink-0">
                      {point.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-heading uppercase tracking-wide mb-0.5" style={{ color: '#68746F' }}>{point.label}</div>
                      {point.href ? (
                        <a
                          href={point.href}
                          {...(point.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="font-heading font-semibold text-sm hover:text-primary-400 transition-colors truncate block" style={{ color: '#0C1210' }}
                          itemProp={point.label === 'Telefon' ? 'telephone' : point.label === 'E-Mail' ? 'email' : undefined}
                        >
                          {point.value}
                        </a>
                      ) : (
                        <span className="font-heading font-semibold text-sm" itemProp="openingHours" style={{ color: '#0C1210' }}>
                          {point.value}
                        </span>
                      )}
                      <div className="text-xs mt-0.5" style={{ color: '#68746F' }}>{point.sub}</div>
                    </div>
                    {point.href && (
                      <ArrowRight size={16} className="flex-shrink-0 ml-auto" style={{ color: '#68746F' }} />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Prozess */}
              <motion.div
                className="p-6 rounded-xl bg-white border" style={{ borderColor: '#E4E9E7' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-base font-heading font-bold mb-5" style={{ color: '#0C1210' }}>
                  So läuft es ab
                </h2>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={step.num} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-500/15 border border-primary-500/30 flex items-center justify-center">
                        <span className="text-primary-400 text-xs font-heading font-bold">{step.num}</span>
                      </div>
                      <div>
                        <div className="text-sm font-heading font-semibold" style={{ color: '#0C1210' }}>{step.title}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#68746F' }}>{step.desc}</div>
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
                className="flex items-center gap-3 p-4 rounded-xl bg-white border hover:border-primary-500/30 transition-all duration-200 group shadow-card" style={{ borderColor: '#E4E9E7' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-yellow-400/10 flex-shrink-0">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold group-hover:text-primary-500 transition-colors" style={{ color: '#0C1210' }}>
                    Bereits Kunde? Bewertung hinterlassen
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#68746F' }}>Google Rezension schreiben →</div>
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
