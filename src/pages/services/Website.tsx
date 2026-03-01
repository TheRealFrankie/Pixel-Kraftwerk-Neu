'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ArrowRight,
  DollarSign,
  HeadphonesIcon,
  Zap,
  Shield,
  Clock,
  Building2,
  Briefcase,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import RelatedServices from '../../components/RelatedServices';

const Website: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const websiteProcessSteps = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Analyse Ihres aktuellen Auftritts und Ihrer Zielgruppe',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Modernes Design, abgestimmt auf Ihr Unternehmen',
    },
    {
      step: '03',
      title: 'Umsetzung',
      description: 'Technische Umsetzung (schnell, sicher, mobiloptimiert)',
    },
    {
      step: '04',
      title: 'Livegang',
      description: 'Livegang Ihrer neuen Website',
    },
    {
      step: '05',
      title: 'Betreuung',
      description: 'Laufende Betreuung, Pflege und Anpassungen im Mietmodell',
    },
  ];

  const rentalModelBenefits = [
    {
      icon: <DollarSign size={24} />,
      title: 'Keine hohen Startkosten',
      text: 'Statt mehrere tausend Euro auf einmal zahlen Sie einen planbaren monatlichen Betrag.',
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: 'Full-Service inklusive',
      text: 'Design, Technik, Hosting, Sicherheit und Anpassungen – alles erledigt.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Änderungen in 48 Stunden',
      text: 'Ihr Angebot ändert sich? Wir passen Ihre Website an – schnell und unkompliziert.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Keine Technik, keine Verantwortung',
      text: 'Updates, Performance, Sicherheit, Backups – nicht Ihr Problem.',
    },
  ];

  const targetAudiences = [
    {
      icon: <Building2 size={28} />,
      title: 'Lokale Unternehmen',
      description: 'Ein moderner Webauftritt für mehr Sichtbarkeit in Ihrer Region.',
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Dienstleister & Berater',
      description: 'Eine Website, die Vertrauen schafft und Anfragen strukturiert einsammelt.',
    },
    {
      icon: <Wrench size={28} />,
      title: 'Handwerk & Gewerbe',
      description: 'Gefunden werden, wenn Kunden akuten Bedarf haben – mit klarer Präsentation Ihrer Leistungen.',
    },
    {
      icon: <Stethoscope size={28} />,
      title: 'Praxen & Kanzleien',
      description: 'Professioneller Auftritt mit klarer Struktur für Patienten und Mandanten.',
    },
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema serviceName="Webseiten" serviceUrl="https://pixelkraftwerk-ai.com/webseite" />

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
              <Globe size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Moderne Webseiten, die Vertrauen schaffen
              <span className="block text-primary-500 mt-2">– im einfachen Mietmodell</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ihre Website soll wie ein guter Mitarbeiter arbeiten:
              <br />
              Sie stellt Ihr Unternehmen professionell vor und macht Besuchern leicht, Kontakt aufzunehmen.
            </motion.p>

            <motion.p
              className="text-light-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <strong>
                Sie konzentrieren sich auf Ihr Kerngeschäft – wir kümmern uns dauerhaft um Ihre Website.
              </strong>
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Unverbindliches Website-Angebot anfordern
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Ihre Website als <span className="text-primary-500">Rundum-sorglos-Paket</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-6">
                Statt ein einmaliges Projekt zu kaufen, mieten Sie Ihre Website – inklusive Betreuung, Technik und
                regelmäßigen Anpassungen.
              </p>
              <p className="text-light-100 text-lg">
                <strong>Sie zahlen monatlich – wir halten Ihre Website dauerhaft frisch und funktionsfähig.</strong>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <DollarSign size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">fester monatlicher Betrag</p>
              </motion.div>
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <HeadphonesIcon size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">volle Betreuung inklusive</p>
              </motion.div>
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Zap size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">jederzeit anpassbar</p>
              </motion.div>
              <motion.div
                className="bg-dark-500 p-6 border border-dark-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Shield size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="text-light-200">technisch immer aktuell</p>
              </motion.div>
            </div>

            <motion.p
              className="text-center text-light-300 text-sm mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Sie möchten zusätzlich gezielt bei Google sichtbar werden?&nbsp;
              <a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">
                Hier geht es zu unserem SEO-Angebot „Top 3 in Google“.
              </a>
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
                So entsteht Ihre <span className="text-primary-500">neue Website</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {websiteProcessSteps.map((step, index) => (
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
                Für wen ist dieses <span className="text-primary-500">Angebot ideal?</span>
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
              Bereit für eine Website, die <span className="text-primary-500">wirklich für Sie arbeitet?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns in einer kurzen, unverbindlichen Beratung besprechen, wie Ihre neue Website aussehen und
              was sie für Ihr Unternehmen leisten soll.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ArrowRight className="mr-2" size={24} />
              Gespräch anfragen
            </motion.button>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="webseite" />

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ServicedRegionsBlock />
            <RegionServiceLinksBlock serviceSlug="webseiten" title="Webseiten in Ihrem Gebiet" />
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default Website;

