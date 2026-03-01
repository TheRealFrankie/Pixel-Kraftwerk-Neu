'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  HeadphonesIcon,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  MessageSquare,
  PhoneCall,
  PhoneForwarded
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const Telefonassistenten: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Verpasste Anrufe führen regelmäßig zu verlorenen Aufträgen?',
    'Ihr Team wird ständig durch Telefonate aus dem Arbeitsfluss gerissen?',
    'Außerhalb der Geschäftszeiten ist niemand erreichbar?',
    'Die Qualität der Anrufannahme hängt von Auslastung und Tageszeit ab?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse Ihrer Telefonkommunikation',
      description: 'Wir analysieren typische Anrufgründe, Abläufe und Anforderungen Ihres Unternehmens.'
    },
    {
      step: '02',
      title: 'Training des Assistenten',
      description: 'Die telefonische Kundenassistenz wird mit Ihren Inhalten, Abläufen und Informationen trainiert.'
    },
    {
      step: '03',
      title: 'Einrichtung der Rufnummer',
      description: 'Sie erhalten eine dedizierte Telefonnummer für den Einsatz des Assistenten.'
    },
    {
      step: '04',
      title: 'Test & Optimierung',
      description: 'Gemeinsame Testphase mit Anpassungen auf Basis realer Gespräche.'
    },
    {
      step: '05',
      title: 'Dauerhafter Betrieb',
      description: 'Der Assistent arbeitet zuverlässig im Hintergrund – wir überwachen und optimieren laufend.'
    }
  ];

  const benefits = [
    { icon: <Clock size={24} />, title: '24/7 Erreichbarkeit', text: 'Ihr Unternehmen ist jederzeit telefonisch erreichbar – auch außerhalb der Geschäftszeiten.' },
    { icon: <PhoneCall size={24} />, title: 'Keine verpassten Anrufe', text: 'Jeder Anruf wird entgegengenommen und professionell bearbeitet.' },
    { icon: <Users size={24} />, title: 'Entlastung des Teams', text: 'Routineanrufe werden automatisch übernommen – Ihr Team gewinnt Zeit.' },
    { icon: <Shield size={24} />, title: 'Gleichbleibende Qualität', text: 'Jeder Anrufer erhält dieselbe strukturierte Betreuung.' },
    { icon: <PhoneForwarded size={24} />, title: 'Strukturierte Anrufannahme', text: 'Anliegen werden erfasst, dokumentiert und übersichtlich weitergegeben.' },
    { icon: <HeadphonesIcon size={24} />, title: 'Natürliche Gespräche', text: 'Moderne Sprachverarbeitung sorgt für flüssige, verständliche Dialoge.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Dienstleister & Agenturen', description: 'Strukturierte Annahme vieler gleichartiger Anrufe.' },
    { icon: <Stethoscope size={28} />, title: 'Praxen & Kanzleien', description: 'Entlastung des Empfangs und konstante Erreichbarkeit.' },
    { icon: <ShoppingBag size={28} />, title: 'E-Commerce & Handel', description: 'Automatische Bearbeitung von Status-, Liefer- und Serviceanfragen.' },
    { icon: <Briefcase size={28} />, title: 'Handwerk & lokale Betriebe', description: 'Keine Anfrage geht verloren – auch bei hoher Auslastung.' }
  ];

  const features = [
    'Annahme eingehender Anrufe',
    'Beantwortung häufiger Fragen',
    'Terminvereinbarung und Kalenderintegration',
    'Erfassung von Rückrufwünschen',
    'Weiterleitung dringender Anliegen',
    'Mehrsprachige Kommunikation',
    'Integration in bestehende CRM-Systeme'
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema serviceName="Telefonische Kundenassistenz" serviceUrl="https://pixelkraftwerk-ai.com/telefonassistenten" />

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
              <Phone size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Telefonische Kundenassistenz für Ihr Unternehmen
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-primary-500 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Telefonate und Termine automatisch annehmen – rund um die Uhr
            </motion.h2>

            <motion.p
              className="text-lg text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unsere telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet Fragen, verwaltet Termine und erfasst Anliegen zuverlässig – automatisiert, professionell und 24/7.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Individuelle Beratung anfordern
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
                Kennen Sie <span className="text-primary-500">diese Situation?</span>
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
              <strong>Dann ist unsere telefonische Kundenassistenz die passende Lösung.</strong>
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
                Was Ihre <span className="text-primary-500">telefonische Kundenassistenz leistet</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Die telefonische Kundenassistenz versteht natürliche Sprache und bearbeitet Anrufe selbstständig – zuverlässig und strukturiert.
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
                So entsteht <span className="text-primary-500">Ihre telefonische Kundenassistenz</span>
              </h2>
              <p className="text-light-200">
                Von der ersten Analyse bis zum laufenden Betrieb – ein klarer, erprobter Prozess.
              </p>
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
                Ideal für <span className="text-primary-500">diese Branchen</span>
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

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-dark-400 border border-primary-500/30 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <MessageSquare size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">
                    Auch über die Website erreichbar sein?
                  </h3>
                  <p className="text-light-300 mb-4">
                    Viele Kunden nehmen zuerst über die Website Kontakt auf. Unsere digitale Kundenassistenz beantwortet Anfragen direkt online und erfasst Anliegen strukturiert.
                  </p>
                  <a
                    href="/ki-chatbots"
                    className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200"
                  >
                    Mehr zur digitalen Kundenassistenz
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="telefonassistenten"
        relatedSlugs={['ki-chatbots', 'termine-buchungen', 'crm-lead-management', 'webseite', 'seo-top-3-in-google']}
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
              Bereit für <span className="text-primary-500">professionelle Anrufannahme?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam besprechen, wie die telefonische Kundenassistenz Ihr Unternehmen entlasten kann.
            </motion.p>
            <motion.p
              className="text-light-300 text-sm mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Noch Fragen? Viele Antworten finden Sie in unseren{' '}
              <a href="/faq" className="text-primary-400 hover:underline">
                FAQ
              </a>
              .
            </motion.p>
            <ServicedRegionsBlock />
            <RegionServiceLinksBlock serviceSlug="telefonassistenten" title="Telefonassistenten in Ihrem Gebiet" />
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default Telefonassistenten;
