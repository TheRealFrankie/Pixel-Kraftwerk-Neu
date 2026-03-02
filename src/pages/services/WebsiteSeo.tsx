'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Search,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Clock,
  Building2,
  Briefcase,
  Stethoscope,
  Wrench,
  HeadphonesIcon,
  Zap,
  Award,
  BarChart3,
  Users,
  XCircle
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const WebsiteSeo: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Kunden suchen bei Google nach Ihrer Leistung – und landen bei Ihrer Konkurrenz',
    'Ihre Website ist online, bringt aber kaum Anfragen',
    'Andere Betriebe wirken moderner, sichtbarer, präsenter',
    'Jeden Monat gehen potenzielle Kunden verloren, ohne dass Sie es direkt merken'
  ];

  const websiteProcessSteps = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Analyse Ihres aktuellen Auftritts und Ihrer Zielgruppe'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Modernes Design, abgestimmt auf Ihr Unternehmen'
    },
    {
      step: '03',
      title: 'Umsetzung',
      description: 'Technische Umsetzung (schnell, sicher, mobiloptimiert)'
    },
    {
      step: '04',
      title: 'Livegang',
      description: 'Livegang Ihrer neuen Website'
    },
    {
      step: '05',
      title: 'Betreuung',
      description: 'Laufende Betreuung, Pflege und Anpassungen im Mietmodell'
    }
  ];

  const seoProcessSteps = [
    {
      step: '01',
      title: 'SEO-Analyse',
      description: 'Kostenlose SEO-Analyse & Wettbewerbsvergleich'
    },
    {
      step: '02',
      title: 'Keyword-Auswahl',
      description: 'Auswahl der Suchbegriffe, die wirklich Kunden bringen'
    },
    {
      step: '03',
      title: 'Optimierung',
      description: 'Optimierung Ihrer Website & Inhalte'
    },
    {
      step: '04',
      title: 'Rankings',
      description: 'Verbesserung Ihrer Google- & Maps-Positionen'
    },
    {
      step: '05',
      title: 'Monitoring',
      description: 'Laufende Optimierung, Monitoring und Berichte'
    }
  ];

  const rentalModelBenefits = [
    { icon: <DollarSign size={24} />, title: 'Keine hohen Startkosten', text: 'Statt mehrere tausend Euro auf einmal zahlen Sie einen planbaren monatlichen Betrag.' },
    { icon: <HeadphonesIcon size={24} />, title: 'Full-Service inklusive', text: 'Design, Technik, Hosting, Sicherheit, SEO, Anpassungen – alles erledigt.' },
    { icon: <Clock size={24} />, title: 'Änderungen in 48 Stunden', text: 'Ihr Angebot ändert sich? Wir passen Ihre Website an – schnell und unkompliziert.' },
    { icon: <Shield size={24} />, title: 'Keine Technik, keine Verantwortung', text: 'Updates, Performance, Sicherheit, Backups – nicht Ihr Problem.' }
  ];

  const concreteAdvantages = [
    { icon: <Target size={24} />, title: 'Sie werden bei Google gefunden', text: 'Kunden landen bei Ihnen, nicht bei der Konkurrenz' },
    { icon: <TrendingUp size={24} />, title: 'Ihre Website arbeitet dauerhaft für Sie', text: 'Mehr Anfragen ohne mehr Arbeit' },
    { icon: <DollarSign size={24} />, title: 'Planbare monatliche Kosten', text: 'Keine versteckten Kosten oder Überraschungen' },
    { icon: <BarChart3 size={24} />, title: 'Messbare Ergebnisse', text: 'Transparente Berichte über Ihre Sichtbarkeit' },
    { icon: <Users size={24} />, title: 'Mehr Anfragen', text: 'Qualifizierte Kundenanfragen durch bessere Sichtbarkeit' },
    { icon: <Award size={24} />, title: 'Professioneller Auftritt', text: 'Modernes Design schafft Vertrauen' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Lokale Unternehmen', description: 'Mehr Sichtbarkeit in Ihrer Region – mehr Kunden vor Ort.' },
    { icon: <Briefcase size={28} />, title: 'Dienstleister & Berater', description: 'Gezielte Anfragen statt unqualifizierter Kontakte.' },
    { icon: <Wrench size={28} />, title: 'Handwerk & Gewerbe', description: 'Online gefunden werden, wenn Kunden akuten Bedarf haben.' },
    { icon: <Stethoscope size={28} />, title: 'Praxen & Kanzleien', description: 'Professioneller Auftritt mit Fokus auf lokale Mandanten und Patienten.' }
  ];

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchema serviceName="Websites & SEO" serviceUrl="https://pixelkraftwerk-ai.com/website-seo" />

      {/* Hero mit Premium-Hintergrundbild – Bild unterhalb der Header-Leiste */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark-500">
        <div className="absolute top-20 left-0 right-0 bottom-0 md:top-24">
          <Image
            src="/images/Websites.png"
            alt="Websites & SEO – Sichtbarkeit und moderne Webauftritte"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/50 to-dark-500/95" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-500/30 via-transparent to-dark-500/40" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500/15 to-transparent" aria-hidden />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 border border-primary-500/40 backdrop-blur-sm mb-8 shadow-primary-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Globe size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 leading-tight"
              style={{
                color: '#F5F7FA',
                textShadow: '0 10px 30px rgba(0,0,0,0.65)',
                WebkitTextStroke: '1px rgba(0,0,0,0.25)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Websites & SEO, die Ihnen Kunden bringen
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-400 mb-6 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              – nicht Ihrer Konkurrenz
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed"
              style={{
                color: '#F5F7FA',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Wenn Kunden nach Ihrer Dienstleistung suchen, sollen sie <strong style={{ color: '#F5F7FA' }}>Sie finden</strong> – nicht den Betrieb zwei Straßen weiter.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{
                color: '#E8EAED',
                textShadow: '0 4px 12px rgba(0,0,0,0.5)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <strong style={{ color: '#F5F7FA' }}>Kostenlose Analyse · Umsetzung komplett durch uns · Top-5 bei Google in 90 Tagen – sonst Geld zurück</strong>
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose Analyse anfordern
            </motion.button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" aria-hidden />
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
                  <XCircle className="text-red-400 mr-4 mt-1 flex-shrink-0" size={20} />
                  <p className="text-light-200">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-10 bg-dark-500 border border-primary-500/30 p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100 text-lg">
                <strong className="text-primary-400">Klartext:</strong><br />
                <span className="text-light-200">Was online nicht gefunden wird, <strong>verkauft nicht</strong>.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Genau das <span className="text-primary-500">ändern wir.</span>
            </motion.h2>
            <motion.p
              className="text-light-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Wir sorgen dafür, dass Ihr Unternehmen bei Google dort erscheint,<br />
              <strong className="text-primary-400">wo Kunden klicken</strong> – auf der ersten Seite, im Fokus, vor Ihrer Konkurrenz.
            </motion.p>
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
                Unsere Lösung: <span className="text-primary-500">Website & SEO im Mietmodell</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto mb-6">
                Sie investieren <strong>keine hohen Einmalkosten</strong><br />
                und kaufen <strong>keine Website, um sich danach selbst kümmern zu müssen</strong>.
              </p>
              <p className="text-light-100 text-lg">
                Bei uns <strong className="text-primary-400">mieten</strong> Sie Ihre Website:
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

            <motion.div
              className="bg-primary-500/10 border border-primary-500/30 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100 text-lg">
                <strong className="text-primary-400">Sie zahlen monatlich – wir liefern dauerhaft Ergebnisse.</strong>
              </p>
            </motion.div>
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
                Was das <span className="text-primary-500">für Sie bedeutet</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rentalModelBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="text-primary-500 mr-4 flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{benefit.title}</h3>
                      <p className="text-light-300">{benefit.text}</p>
                    </div>
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
                Was wir konkret <span className="text-primary-500">für Sie umsetzen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="bg-dark-500 p-8 border border-dark-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Globe size={40} className="text-primary-500 mr-4" />
                  <h3 className="text-2xl font-heading font-bold text-light-100">Website</h3>
                </div>
                <p className="text-light-200 mb-6">
                  Eine moderne, professionelle Website,<br />
                  die Vertrauen schafft und Besucher <strong className="text-primary-400">zu Kunden macht</strong>.
                </p>
              </motion.div>

              <motion.div
                className="bg-dark-500 p-8 border border-dark-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Search size={40} className="text-primary-500 mr-4" />
                  <h3 className="text-2xl font-heading font-bold text-light-100">SEO</h3>
                </div>
                <p className="text-light-200 mb-6">
                  Wir sorgen dafür, dass Sie bei Google sichtbar sind,<br />
                  wenn Kunden <strong className="text-primary-400">aktiv nach Ihrer Leistung suchen</strong>.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-primary-500/10 border border-primary-500/30 p-6 text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100 text-lg">
                <strong className="text-primary-400">Beides einzeln buchbar –<br />
                zusammen maximaler Umsatzhebel.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6">
                Warum SEO <span className="text-primary-500">bares Geld bedeutet</span>
              </h2>
              <p className="text-light-200 text-lg mb-8">
                Wenn jemand bei Google nach Ihrer Dienstleistung sucht,<br />
                entscheidet Google, <strong className="text-primary-400">wer den Auftrag bekommt</strong>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.div
                className="bg-dark-400 p-6 border border-green-500/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={24} />
                  <p className="text-light-100 text-lg"><strong>Seite 1 = Anfragen</strong></p>
                </div>
              </motion.div>
              <motion.div
                className="bg-dark-400 p-6 border border-red-500/30"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <XCircle className="text-red-400 mr-3" size={24} />
                  <p className="text-light-100 text-lg"><strong>Seite 2 = unsichtbar</strong></p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-primary-500/10 border-2 border-primary-500 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Award size={48} className="text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Unser Ziel:</h3>
              <p className="text-light-200 text-lg mb-4">
                Ihr Unternehmen innerhalb von <strong className="text-primary-400">90 Tagen unter die Top-5</strong> zu bringen.
              </p>
              <p className="text-light-100 text-lg">
                <strong className="text-primary-400">Mit Garantie:</strong><br />
                <span className="text-light-200">Schaffen wir das nicht, <strong>erhalten Sie Ihr Geld zurück</strong>.</span>
              </p>
            </motion.div>

            <motion.p
              className="text-center text-light-300 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Vorab prüfen wir kostenlos, ob SEO für Ihr Unternehmen sinnvoll ist –<br />
              oder ob es sich <strong>nicht lohnt</strong>.
            </motion.p>
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
                So läuft die Zusammenarbeit – <span className="text-primary-500">Website</span>
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

            <motion.div
              className="bg-primary-500/10 border border-primary-500/30 p-6 text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100">
                <strong className="text-primary-400">Keine Übergabe. Keine Eigenverantwortung. Kein Technik-Stress.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
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
                So läuft die Zusammenarbeit – <span className="text-primary-500">SEO</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {seoProcessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-colors duration-300"
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

            <motion.div
              className="bg-primary-500/10 border border-primary-500/30 p-6 text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100">
                <strong className="text-primary-400">Ziel:</strong><br />
                <span className="text-light-200">Mehr Sichtbarkeit → mehr Anfragen → mehr Umsatz.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Passt das Kombi-Angebot aus Website & SEO zu Ihnen?
            </motion.h2>
            <motion.p
              className="text-light-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              In einer kurzen, kostenlosen Analyse prüfen wir, ob sich Website-Relaunch und SEO-Paket für Ihr Unternehmen wirklich rechnen – oder ob ein kleinerer Einstieg sinnvoller ist.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Gespräch zu Website & SEO anfragen
              <ArrowRight className="ml-2" size={22} />
            </motion.button>
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
                Ihr konkreter <span className="text-primary-500">Vorteil</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concreteAdvantages.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
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
                Ideal für <span className="text-primary-500">diese Branchen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-400 p-6 border border-dark-100"
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
              Wie viele Kunden verlieren Sie aktuell <span className="text-primary-500">an Ihre Konkurrenz?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns das kostenlos prüfen.
            </motion.p>
            <motion.p
              className="text-light-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ehrlich. Klar. Ohne Verpflichtung.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose Analyse anfordern
            </motion.button>
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default WebsiteSeo;
