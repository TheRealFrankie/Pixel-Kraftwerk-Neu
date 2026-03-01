'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  Bell,
  RefreshCw,
  Users,
  Smartphone,
  CalendarCheck,
  Building2,
  Stethoscope,
  Scissors,
  Car
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const TermineBuchungen: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Sie verbringen täglich Stunden mit Terminkoordination am Telefon?',
    'Doppelbuchungen und Terminüberschneidungen sorgen für Chaos?',
    'Kunden vergessen Termine und erscheinen nicht – ohne abzusagen?',
    'Die Verwaltung mehrerer Kalender kostet unnötig viel Zeit?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Bedarfsanalyse',
      description: 'Wir analysieren Ihre Terminarten, Ressourcen, Öffnungszeiten und besonderen Anforderungen.'
    },
    {
      step: '02',
      title: 'Systemkonfiguration',
      description: 'Einrichtung des Buchungssystems mit Ihren Zeitfenstern, Leistungen und Verfügbarkeiten.'
    },
    {
      step: '03',
      title: 'Automatisierung einrichten',
      description: 'Integration von automatischen Bestätigungen, Erinnerungen und Kalender-Synchronisation.'
    },
    {
      step: '04',
      title: 'Website-Integration',
      description: 'Nahtlose Einbindung in Ihre Website – Kunden buchen direkt ohne Umwege.'
    },
    {
      step: '05',
      title: 'Schulung und Start',
      description: 'Kurze Einweisung für Ihr Team, dann geht das System live und arbeitet für Sie.'
    }
  ];

  const benefits = [
    { icon: <Clock size={24} />, title: '24/7 Buchbarkeit', text: 'Kunden buchen Termine jederzeit selbst – auch um Mitternacht oder am Wochenende.' },
    { icon: <Bell size={24} />, title: 'Automatische Erinnerungen', text: 'SMS oder E-Mail Erinnerungen reduzieren No-Shows um bis zu 70%.' },
    { icon: <RefreshCw size={24} />, title: 'Kalender-Sync', text: 'Automatische Synchronisation mit Google Calendar, Outlook oder Ihrem bestehenden System.' },
    { icon: <Users size={24} />, title: 'Ressourcenplanung', text: 'Mehrere Mitarbeiter, Räume oder Geräte – alles intelligent koordiniert.' },
    { icon: <Smartphone size={24} />, title: 'Mobil optimiert', text: 'Kunden buchen bequem vom Smartphone – responsive Design als Standard.' },
    { icon: <CalendarCheck size={24} />, title: 'Keine Doppelbuchungen', text: 'Das System verhindert Konflikte automatisch und zeigt nur freie Zeiten.' }
  ];

  const targetAudiences = [
    { icon: <Stethoscope size={28} />, title: 'Arztpraxen & Therapeuten', description: 'Patiententermine automatisch verwalten, Erinnerungen senden, Wartezimmer entlasten.' },
    { icon: <Scissors size={28} />, title: 'Friseursalons & Beauty', description: 'Online-Terminbuchung für verschiedene Dienstleistungen und Mitarbeiter.' },
    { icon: <Building2 size={28} />, title: 'Beratung & Coaching', description: 'Beratungstermine automatisch planen mit Vor- und Nachbereitungszeiten.' },
    { icon: <Car size={28} />, title: 'Werkstätten & Service', description: 'Servicetermine, Inspektionen und Reparaturzeiten intelligent koordinieren.' }
  ];

  const features = [
    'Online-Buchung direkt auf Ihrer Website',
    'Automatische Terminbestätigungen per E-Mail',
    'SMS-Erinnerungen vor dem Termin',
    'Einfache Stornierung und Umbuchung durch Kunden',
    'Wartelisten-Funktion bei voller Auslastung',
    'Verschiedene Terminarten und Dauern',
    'Pufferzeiten zwischen Terminen',
    'Urlaubszeiten und Ausnahmen definierbar',
    'Mehrere Standorte und Mitarbeiter',
    'Detaillierte Auswertungen und Statistiken'
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema serviceName="Terminplanung & Buchungssysteme" serviceUrl="https://pixelkraftwerk-ai.com/termine-buchungen" />

      <section className="relative pt-32 pb-20 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 border border-primary-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Terminplanung & Buchungssysteme
              <span className="block text-primary-500 mt-2">die sich selbst organisieren</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Planungs- und Buchungssysteme, mit künstlicher Intelligenz, die Verfügbarkeiten automatisch verwalten, Termine koordinieren und Kunden selbstständig bestätigen sowie erinnern.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Buchungssystem anfragen
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Kennen Sie <span className="text-primary-500">diese Probleme?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary-500 mr-4 mt-1 flex-shrink-0">?</span>
                  <p className="text-light-200">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-light-100 mt-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>Ein intelligentes Buchungssystem löst all diese Probleme automatisch.</strong>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                So funktioniert ein <span className="text-primary-500">intelligentes Buchungssystem</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Ihre Kunden buchen Termine selbstständig online – das System kümmert sich um alles Weitere:
                Bestätigungen, Erinnerungen, Kalendereinträge und mehr.
              </p>
            </motion.div>

            <div className="bg-dark-400 p-8 border border-dark-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                    <span className="text-light-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Der Weg zu Ihrem <span className="text-primary-500">Buchungssystem</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl font-heading font-bold text-primary-500 mr-6 flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{step.title}</h3>
                    <p className="text-light-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Ihre <span className="text-primary-500">Vorteile</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-primary-500 mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{benefit.title}</h3>
                  <p className="text-light-300 text-sm">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Perfekt für <span className="text-primary-500">diese Branchen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mr-4 flex-shrink-0">{audience.icon}</div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{audience.title}</h3>
                    <p className="text-light-300 text-sm">{audience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="termine-buchungen"
        relatedSlugs={['ki-chatbots', 'telefonassistenten', 'crm-lead-management', 'webseite', 'seo-top-3-in-google']}
      />

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Bereit für <span className="text-primary-500">stressfreie Terminplanung?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns besprechen, wie ein Buchungssystem Ihren Alltag vereinfachen kann.
            </motion.p>
            <ServicedRegionsBlock />
            <RegionServiceLinksBlock serviceSlug="termine-buchungen" title="Terminbuchung in Ihrem Gebiet" />
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default TermineBuchungen;
