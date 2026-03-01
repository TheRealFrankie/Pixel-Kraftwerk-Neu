'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Mail,
  Filter,
  BarChart3,
  Zap,
  Building2,
  Briefcase,
  Home,
  ShoppingCart
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const CrmLeadManagement: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Anfragen gehen unter oder werden zu spät bearbeitet?',
    'Sie haben keinen Überblick, welche Leads wie weit im Vertriebsprozess sind?',
    'Kundendaten sind über verschiedene Systeme und Excel-Listen verstreut?',
    'Follow-ups werden vergessen und potenzielle Kunden verloren?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Prozessanalyse',
      description: 'Wir analysieren Ihren aktuellen Vertriebsprozess, Datenquellen und Kontaktpunkte.'
    },
    {
      step: '02',
      title: 'CRM-Konzept',
      description: 'Entwicklung einer maßgeschneiderten CRM-Struktur mit passenden Feldern und Workflows.'
    },
    {
      step: '03',
      title: 'System-Einrichtung',
      description: 'Aufbau des CRM-Systems mit automatischer Lead-Erfassung und Kategorisierung.'
    },
    {
      step: '04',
      title: 'Automatisierungen',
      description: 'Einrichtung von automatischen Follow-ups, Benachrichtigungen und Aufgabenzuweisungen.'
    },
    {
      step: '05',
      title: 'Schulung & Go-Live',
      description: 'Einweisung Ihres Teams und Start des produktiven Betriebs mit laufender Optimierung.'
    }
  ];

  const benefits = [
    { icon: <Users size={24} />, title: 'Zentrale Kundenverwaltung', text: 'Alle Kontakte, Anfragen und Interaktionen an einem Ort – strukturiert und durchsuchbar.' },
    { icon: <Filter size={24} />, title: 'Automatische Qualifizierung', text: 'Leads werden automatisch bewertet und priorisiert – Sie fokussieren auf die besten Chancen.' },
    { icon: <Zap size={24} />, title: 'Schnellere Reaktion', text: 'Automatische Benachrichtigungen bei neuen Anfragen – keine verpassten Gelegenheiten mehr.' },
    { icon: <Mail size={24} />, title: 'Automatische Follow-ups', text: 'Das System erinnert an Nachfassaktionen und kann E-Mails automatisch versenden.' },
    { icon: <TrendingUp size={24} />, title: 'Pipeline-Überblick', text: 'Sehen Sie auf einen Blick, wo jeder Lead steht und welche Abschlüsse bevorstehen.' },
    { icon: <BarChart3 size={24} />, title: 'Aussagekräftige Reports', text: 'Detaillierte Auswertungen zu Conversion-Raten, Reaktionszeiten und Umsatzprognosen.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'B2B-Dienstleister', description: 'Komplexe Vertriebszyklen strukturiert managen und Opportunities tracken.' },
    { icon: <Home size={28} />, title: 'Immobilien & Makler', description: 'Interessenten systematisch erfassen, qualifizieren und bis zum Abschluss begleiten.' },
    { icon: <Briefcase size={28} />, title: 'Beratung & Agenturen', description: 'Projektanfragen priorisieren und Kundenbeziehungen langfristig pflegen.' },
    { icon: <ShoppingCart size={28} />, title: 'Vertriebsteams', description: 'Team-Leads zuweisen, Aktivitäten tracken und Vertriebsziele verfolgen.' }
  ];

  const features = [
    'Automatische Lead-Erfassung aus allen Kanälen',
    'Intelligente Lead-Scoring und Priorisierung',
    'Übersichtlicher Vertriebsprozess',
    'Automatische Aufgaben und Erinnerungen',
    'E-Mail-Integration und Tracking',
    'Kontakthistorie und Aktivitätsprotokoll',
    'Team-Zuweisung und Verantwortlichkeiten',
    'Anpassbare Felder und Kategorien'
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema serviceName="Lead-Management & CRM-Automatisierung" serviceUrl="https://pixelkraftwerk-ai.com/crm-lead-management" />

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
              <Target size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Lead-Management & CRM
              <span className="block text-primary-500 mt-2">für strukturierten Vertrieb</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Individuelle CRM-Systeme, die Anfragen automatisch erfassen, strukturieren, bewerten
              und an die zuständigen Ansprechpartner weiterleiten.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              CRM-Beratung anfordern
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
                Kennen Sie <span className="text-primary-500">diese Herausforderungen?</span>
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
              <strong>Ein professionelles CRM-System schafft Ordnung und Überblick.</strong>
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
                Was ein <span className="text-primary-500">modernes CRM</span> leistet
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Ein CRM-System ist das zentrale Nervensystem Ihres Vertriebs. Es erfasst alle Kontakte,
                verfolgt Interaktionen und automatisiert wiederkehrende Aufgaben.
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
                So entsteht <span className="text-primary-500">Ihr CRM-System</span>
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
                Ideal für <span className="text-primary-500">diese Unternehmen</span>
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
        currentSlug="crm-lead-management"
        relatedSlugs={['ki-chatbots', 'telefonassistenten', 'termine-buchungen', 'webseite', 'seo-top-3-in-google']}
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
              Bereit für <span className="text-primary-500">strukturierten Vertrieb?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam herausfinden, wie ein CRM-System Ihren Vertrieb optimieren kann.
            </motion.p>
            <ServicedRegionsBlock />
            <RegionServiceLinksBlock serviceSlug="crm-lead-management" title="CRM & Lead-Management in Ihrem Gebiet" />
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default CrmLeadManagement;
