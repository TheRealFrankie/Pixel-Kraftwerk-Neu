'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  CheckCircle,
  XCircle,
  TrendingUp,
  DollarSign,
  Shield,
  ChevronDown,
  MapPin,
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import RelatedServices from '../../components/RelatedServices';
import ServicedRegionsBlock from '../../components/ServicedRegionsBlock';
import RegionServiceLinksBlock from '../../components/RegionServiceLinksBlock';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import ServiceJsonLd from '../../components/ServiceJsonLd';
import VorherNachherSection from '../../components/VorherNachherSection';
import WieFunktioniertEsSection from '../../components/WieFunktioniertEsSection';

const SeoTop3: React.FC = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Kunden suchen bei Google nach Ihrer Leistung – und landen bei Ihrer Konkurrenz.',
    'Ihre Website ist online, bringt aber kaum qualifizierte Anfragen.',
    'Sie investieren in Werbung, ohne genau zu wissen, was wirklich funktioniert.',
    'Ihre Konkurrenz dominiert die lokale Suche – Sie werden kaum gesehen.',
  ];

  /** Eine Sektion „Was Sie bekommen“: Angebot + zentrale Benefits kombiniert (Plan: keine Dopplung zu „Was das für Sie bedeutet“). */
  const offerBullets = [
    'Analyse Ihrer Sichtbarkeit und der Konkurrenz.',
    'Keyword-Auswahl mit echtem Auftragspotenzial.',
    'Onpage-Optimierung Ihrer Website.',
    'Lokale Signale (Maps, Standort, Bewertungen) stärken.',
    'Monitoring & Feintuning über mindestens 90 Tage.',
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: 'Mehr Sichtbarkeit, mehr Anfragen',
      text: 'Ihre Website erscheint oben, wenn Kunden nach Ihrer Leistung suchen.',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Planbares Umsatzpotenzial',
      text: 'Mehr qualifizierte Anfragen – besonders für lokale Dienstleister.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Transparent & regional',
      text: 'Klare Kommunikation; ideal für Leipzig, Groitzsch und die Region.',
    },
  ];

  const faqs = [
    {
      question: 'Ist die Top-3-Platzierung bei Google garantiert?',
      answer:
        'Wir garantieren Top-3-Rankings in 90 Tagen – aber nicht „für jedes Fantasie-Keyword“. Entscheidend ist, dass wir gemeinsam Suchbegriffe wählen, die echtes Auftragspotenzial haben, in Ihrem Gebiet realistisch zu gewinnen sind und zu Ihrem Angebot passen. Genau dafür startet alles mit der kostenlosen Analyse.',
    },
    {
      question: 'Für wen lohnt sich dieses SEO-Angebot?',
      answer:
        'Für lokale Unternehmen, die regelmäßig Aufträge über Google gewinnen wollen – besonders: Dienstleister & Handwerk, Praxen, Kanzleien, Beratung, lokale Betriebe mit klaren Leistungen und Einzugsgebiet.',
    },
    {
      question: 'Brauche ich zwingend eine neue Website?',
      answer:
        'Nicht zwingend. Aber: Wenn die Website langsam ist, unklar aufgebaut ist oder keine sauberen Leistungsseiten hat, bremst sie SEO aus. Oft reichen gezielte Verbesserungen – manchmal lohnt ein Neustart im Mietmodell.',
    },
    {
      question: 'Wie lange dauert es, bis Ergebnisse sichtbar werden?',
      answer:
        'Oft sieht man erste Bewegungen nach wenigen Wochen – echte Stabilität baut sich über Monate auf. Die ersten 90 Tage sind das Fundament: Setup + Maßnahmen + Feintuning.',
    },
    {
      question: 'Wie misst Pixel Kraftwerk den Erfolg?',
      answer:
        'Wir messen nicht nur Rankings, sondern das, was zählt: Sichtbarkeit in Ihrem Gebiet, Klicks/Anrufe/Nachrichten, Anfragen über Website/GBP, Entwicklung der wichtigsten Suchbegriffe. Wenn gewünscht, kann ein Softwareentwickler Tracking/Events so umsetzen, dass Sie genau sehen, welche Seiten/Keywords Umsatz bringen.',
    },
  ];

  const canonicalUrl = 'https://pixelkraftwerk-ai.com/seo-top-3-in-google';

  return (
    <>
      <Head>
        <ServiceJsonLd
          name="SEO: Top 3 in Google"
          serviceType="SEO"
          description="Lokales SEO-Angebot mit Fokus auf Top-3-Platzierungen in Google für Suchbegriffe, die wirklich Kunden bringen – speziell für Unternehmen aus Leipzig, Groitzsch, Markkleeberg und der Region."
          url={canonicalUrl}
          pageName="SEO Top 3 in Google"
          faqs={faqs.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
      </Head>
      <div className="bg-dark-500">
        <BreadcrumbSchema
          serviceName="Top 3 in Google in 90 Tagen"
          serviceUrl={canonicalUrl}
        />
      {/* Hero – Premium zweispaltig */}
      <section id="lokale-sichtbarkeit-ausbauen" className="relative bg-dark-500 pt-16 pb-0 md:pt-20 overflow-hidden">
        {/* Subtile radiale Hintergrundaufhellung */}
        <div className="absolute top-0 inset-x-0 h-[560px] bg-gradient-radial-subtle pointer-events-none" aria-hidden />

        <div className="container mx-auto px-4">
          <div className="mb-5">
            <BreadcrumbNav items={[
              { label: 'Startseite', href: '/' },
              { label: 'Leistungen', href: '/leistungen' },
              { label: 'SEO: Top 3 in Google' },
            ]} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pb-10 lg:pb-14">
            {/* LINKS: Inhalt & CTA */}
            <div className="flex flex-col">
              {/* Eyebrow-Label */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/25 rounded-full text-primary-400 text-xs font-mono tracking-widest uppercase mb-4 w-fit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 animate-pulse" aria-hidden />
                Local SEO für Leipzig &amp; Groitzsch
              </motion.div>

              {/* H1 */}
              <motion.h1
                className="text-2xl sm:text-3xl md:text-[2rem] xl:text-[2.4rem] font-heading font-bold text-light-100 leading-[1.15] mb-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Bringen Sie Ihr Unternehmen <span className="text-primary-400 whitespace-nowrap">in die Top&nbsp;3 bei Google</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-light-300 text-sm md:text-base leading-relaxed mb-5 max-w-[520px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Wenn Ihr Unternehmen dort nicht erscheint, gehen Anfragen direkt an Ihre Konkurrenz.
              </motion.p>

              {/* Primärer CTA */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-7 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-base rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg group"
                >
                  3 schnelle Lösungen erhalten..
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </motion.div>

              {/* Trust-Zeile */}
              <motion.p
                className="text-light-200 text-sm tracking-wide mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                Unverbindlich&nbsp;•&nbsp;lokal fokussiert&nbsp;•&nbsp;verständlich erklärt
              </motion.p>

              {/* 3 Benefit-Bullets */}
              <motion.ul
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                aria-label="Vorteile"
              >
                {[
                  'Mehr Anfragen statt nur Rankings',
                  'Sichtbarkeit bei relevanten Suchbegriffen',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="text-primary-500 flex-shrink-0" size={15} />
                    <span className="text-light-200 text-sm">{item}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-red-500 border border-red-600 mt-1">
                  <XCircle className="text-black flex-shrink-0" size={15} />
                  <span className="text-black text-sm font-black">Nicht in den Top&nbsp;3? Dann sind Sie quasi unsichtbar.</span>
                </li>
              </motion.ul>
            </div>

            {/* RECHTS: Premium-Visual mit schwebenden Badges */}
            <motion.div
              className="relative flex items-center justify-center lg:pl-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              {/* Badge oben links: Top 3 sichtbar */}
              <motion.div
                className="absolute -top-4 left-2 z-20 flex items-center gap-2 px-3 py-2 bg-dark-300 border border-primary-500/40 rounded-xl shadow-primary-glow"
                initial={{ opacity: 0, y: -12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                aria-hidden
              >
                <TrendingUp className="text-primary-400 flex-shrink-0" size={13} />
                <span className="text-primary-300 text-xs font-semibold whitespace-nowrap">Top 3 sichtbar</span>
              </motion.div>

              {/* Haupt-Bild-Container */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.8),0_0_48px_-12px_rgba(0,179,166,0.12)] bg-dark-300 max-h-[340px] lg:max-h-[400px]">
                {/* Subtiler Gradient-Overlay für Premium-Tiefe */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-transparent pointer-events-none z-10" aria-hidden />
                {/* Unten auslaufender Verlauf für saubere Unterkante */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-300/95 to-transparent pointer-events-none z-10" aria-hidden />
                <Image
                  src="/images/seo-top3-in-google.webp"
                  alt="Google Suchergebnisse mit Top-3-Platzierung für lokale Unternehmen in Leipzig"
                  width={700}
                  height={480}
                  className="w-full h-full object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Badge unten rechts: Google Maps */}
              <motion.div
                className="absolute bottom-5 -right-2 z-20 flex items-center gap-2 px-3 py-2 bg-dark-300 border border-dark-100 rounded-xl shadow-card"
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.05 }}
                aria-hidden
              >
                <MapPin className="text-primary-400 flex-shrink-0" size={13} />
                <span className="text-light-200 text-xs font-semibold whitespace-nowrap">Google Maps Fokus</span>
              </motion.div>

              {/* Badge unten links: mehr Anfragen */}
              <motion.div
                className="absolute bottom-5 left-4 z-20 flex items-center gap-2 px-3 py-2 bg-dark-300 border border-dark-100 rounded-xl shadow-card"
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.15 }}
                aria-hidden
              >
                <Search className="text-primary-400 flex-shrink-0" size={13} />
                <span className="text-light-200 text-xs font-semibold whitespace-nowrap">+&nbsp;mehr lokale Anfragen</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trennlinie zum nächsten Abschnitt */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" aria-hidden />
      </section>

      <VorherNachherSection />

      <section className="py-20 bg-dark-400" aria-labelledby="top3-bedeutung-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              id="top3-bedeutung-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was „Top 3 bei Google“ für lokale Unternehmen wirklich bedeutet
            </motion.h2>
            <motion.div
              className="space-y-8 text-light-200 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                Wenn Ihr Unternehmen bei Google in den Top 3 der lokalen Ergebnisse (Google Maps / Local Pack) erscheint, passiert etwas Entscheidendes:
              </p>
              <p className="text-light-100 font-medium">
                Kunden sehen Ihr Unternehmen genau dann, wenn sie aktiv nach Ihrer Leistung suchen – und können sofort:
              </p>
              <ul className="space-y-2 pl-0 list-none">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={18} />
                  <span>anrufen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={18} />
                  <span>eine Route starten</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={18} />
                  <span>Ihre Website besuchen</span>
                </li>
              </ul>
              <p className="text-primary-300 font-semibold">
                Die meisten Anfragen entstehen genau dort.
              </p>
              <p>
                Deshalb geht es bei lokalem SEO nicht um möglichst viel Traffic, sondern um:
              </p>
              <ul className="space-y-2 pl-0 list-none">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={18} />
                  <span>mehr qualifizierte Anfragen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={18} />
                  <span>mehr Anrufe und Nachrichten</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={18} />
                  <span>mehr Terminbuchungen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={18} />
                  <span>weniger Abhängigkeit von Werbung</span>
                </li>
              </ul>
              <div className="rounded-xl bg-primary-500/10 border border-primary-500/20 px-5 py-4">
                <p className="text-light-100 font-bold text-lg mb-0">
                  Kurz gesagt: mehr Kunden aus der Google-Suche.
                </p>
              </div>
              <p>
                Statt kurzfristiger Tricks setzen wir auf die Faktoren, die Google langfristig belohnt:
              </p>
              <ul className="space-y-2 pl-0 list-none">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="text-light-100">lokale Relevanz</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="text-light-100">Vertrauen und Bewertungen</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="text-light-100">starke regionale Signale</strong></span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500" aria-labelledby="top3-veraendert-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              id="top3-veraendert-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Warum die Top 3 so viel verändern
            </motion.h2>
            <motion.div
              className="space-y-8 text-light-200 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100 font-medium">
                Wenn Ihr Unternehmen dort sichtbar ist, verändert sich etwas Entscheidendes:
              </p>
              <ul className="space-y-3 pl-0 list-none">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>Kunden finden Sie genau dann, wenn Bedarf entsteht</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>ein großer Teil der Anfragen geht automatisch an Sie statt an Ihre Konkurrenz</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>Ihr Telefon oder Postfach füllt sich – ohne dass Sie pro Klick bezahlen müssen</span>
                </li>
              </ul>
              <p>
                Für viele lokale Betriebe wird SEO dadurch zu einem <strong className="text-light-100">Planbarkeits-Hebel</strong>:
              </p>
              <div className="rounded-xl bg-dark-400 border border-primary-500/20 px-5 py-4 flex flex-wrap items-center gap-2 font-heading font-bold text-light-100">
                <span>Mehr Sichtbarkeit</span>
                <span className="text-primary-400" aria-hidden>→</span>
                <span>mehr Anfragen</span>
                <span className="text-primary-400" aria-hidden>→</span>
                <span>mehr Aufträge.</span>
              </div>
              <p className="text-light-200">
                Gerade für Dienstleister und Handwerksbetriebe kann eine gute Platzierung bei Google den Unterschied machen zwischen gelegentlichen Anfragen und einem konstanten Strom neuer Kunden.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <WieFunktioniertEsSection onCtaClick={scrollToContact} ctaLabel="3 schnelle Lösungen erhalten.." />

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-3">Kommt Ihnen das bekannt vor?</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-3">
                Wer online nicht gefunden wird,<br className="hidden md:block" /> verliert Aufträge – täglich.
              </h2>
              <p className="text-light-300 text-sm max-w-xl mx-auto">Diese Situationen kennen viele lokale Unternehmen.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-5 rounded-xl border border-dark-200 hover:border-red-500/20 transition-colors duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <XCircle className="text-red-400 mr-4 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-light-200 text-sm leading-relaxed">{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Was Sie bekommen */}
      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-3">Das Angebot</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-3">
                Was Sie <span className="text-primary-500">bekommen</span>
              </h2>
              <p className="text-light-300 max-w-2xl mx-auto text-sm">Unser SEO-Angebot und der Nutzen für Sie – kompakt.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {offerBullets.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-400 p-4 rounded-xl border border-dark-200 hover:border-primary-500/20 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-light-200 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-xl bg-dark-400 border border-primary-500/15 p-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-heading font-bold text-light-100 mb-4">Was das in Kundensprache bedeutet</h3>
              <ul className="space-y-3 text-light-200 text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={15} />
                  <span>Google versteht klar, <strong className="text-light-100">was Sie anbieten</strong> und <strong className="text-light-100">für wen</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={15} />
                  <span>Kunden sehen Sie dort, wo sie klicken</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={15} />
                  <span>Anfragen kommen nicht zufällig, sondern planbarer</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={15} />
                  <span>Ihre Sichtbarkeit baut sich auf – und bleibt stabil</span>
                </li>
              </ul>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 rounded-xl border border-dark-200 hover:border-primary-500/20 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mb-3 w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">{benefit.icon}</div>
                  <h3 className="text-base font-heading font-bold text-light-100 mb-1.5">{benefit.title}</h3>
                  <p className="text-light-300 text-sm leading-relaxed">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-3">Keyword-Strategie</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-3">
                Wie wir Keywords auswählen
              </h2>
              <p className="text-light-300 text-sm">Damit es wirklich Kunden bringt – nicht nur Traffic.</p>
            </motion.div>
            <motion.div
              className="space-y-6 text-light-200 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                Viele SEO-Anbieter schießen auf viel Suchvolumen. Wir fokussieren auf Suchbegriffe, die <strong className="text-light-100">zu Aufträgen führen</strong>.
              </p>
              <div className="rounded-xl bg-dark-500 border border-dark-200 p-5">
                <p className="text-light-100 font-semibold text-sm mb-4">Unsere Auswahllogik:</p>
                <ul className="space-y-3">
                  {[
                    'Leistung + Ort (z. B. „[Leistung] Leipzig")',
                    'In der Nähe / Notdienst / Termin (wenn passend)',
                    'Konkrete Probleme ([Problem] beheben, Kosten, Ablauf)',
                    'Longtail, der leichter zu gewinnen ist – aber extrem qualifiziert',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={15} />
                      <span className="text-light-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                So entsteht ein Keyword-Set, das realistisch zu ranken ist und trotzdem Umsatz bringt. Wir arbeiten hier nicht mit Gefühl, sondern mit klarer Priorisierung: schnelle Wins zuerst, dann Ausbau.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mid-CTA */}
      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto rounded-2xl bg-dark-400 border border-primary-500/20 p-8 md:p-10 text-center shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-4">Jetzt prüfen lassen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
              Passt Top 3 in Google zu Ihrem Geschäft?
            </h2>
            <p className="text-light-300 text-sm md:text-base mb-6 leading-relaxed">
              In einer kurzen Analyse schauen wir, für welche Suchbegriffe sich SEO bei Ihnen wirklich lohnt – und wo die Konkurrenz schon zu stark ist.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-base rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg group"
            >
              3 schnelle Lösungen erhalten..
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <p className="text-light-500 text-xs mt-4">Unverbindlich · kostenlos · ohne Verpflichtung</p>
          </motion.div>
        </div>
      </section>

      {/* 3 Hebel */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-3">Die 3 Hebel</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-3">
                Was in den Top 3 wirklich zählt
              </h2>
              <p className="text-light-300 text-sm">Damit Google Sie oben zeigt, braucht es vor allem:</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  num: '01',
                  title: 'Relevanz',
                  text: 'Ihr Profil und Ihre Website müssen klar signalisieren, welche Leistungen Sie anbieten – und in welchem Gebiet.',
                },
                {
                  num: '02',
                  title: 'Vertrauen',
                  text: 'Bewertungen, Referenzen, echte Aktivität, starke Inhalte – damit Google und Kunden Ihnen glauben.',
                },
                {
                  num: '03',
                  title: 'Konsistenz',
                  text: 'Daten, Standortsignale, Inhalte und Verlinkungen müssen zusammenpassen – ohne Widersprüche.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.num}
                  className="bg-dark-500 p-6 rounded-xl border border-dark-200 hover:border-primary-500/20 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary-500/40 font-mono font-bold text-3xl leading-none mb-3 block">{item.num}</span>
                  <h3 className="text-base font-heading font-bold text-light-100 mb-2">{item.title}</h3>
                  <p className="text-light-300 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-6 rounded-xl bg-dark-500 border border-primary-500/15 px-5 py-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              viewport={{ once: true }}
            >
              <p className="text-light-200 text-sm">
                Genau diese drei Punkte bildet unser <strong className="text-light-100">90-Tage-Programm</strong> ab.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website-Crosslink Callout */}
      <section className="py-10 bg-dark-400">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto rounded-xl bg-dark-500 border border-dark-200 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-light-100 text-sm font-semibold mb-0.5">Starke Rankings brauchen eine starke Website.</p>
              <p className="text-light-300 text-xs">Ohne saubere technische Basis bremst Ihre Website das SEO aus.</p>
            </div>
            <a
              href="/webseite"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-dark-400 border border-primary-500/25 text-primary-400 text-xs font-semibold whitespace-nowrap hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300 flex-shrink-0"
            >
              Website im Mietmodell
              <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-500" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-3">FAQ</p>
              <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-3">
                Häufige Fragen zum <span className="text-primary-500">SEO-Angebot</span>
              </h2>
            </motion.div>

            <div className="space-y-2" role="list">
              {faqs.map((faq, index) => {
                const isOpen = faqOpenIndex === index;
                return (
                  <motion.div
                    key={index}
                    className={`rounded-xl border transition-colors duration-200 ${isOpen ? 'bg-dark-400 border-primary-500/20' : 'bg-dark-400 border-dark-200 hover:border-dark-100'}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-heading font-bold text-light-100 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className="text-sm md:text-base">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-primary-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-light-300 text-sm px-5 pb-5 pt-0 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="seo-top-3-in-google"
        anchorBySlug={{
          'ki-chatbots': '#ki-chatbot-fur-website-anfragen',
          'telefonassistenten': '#ki-telefonagent-fur-anrufe',
          'automatisierungen': '#automatisierungen-fur-follow-ups-terminplanung',
          'webseite': '#website-als-seo-basis',
        }}
      />

      {/* Final CTA */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-4">Kostenlose Analyse</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
              Wie viele Kunden verlieren Sie aktuell <span className="text-primary-500">an Ihre Konkurrenz?</span>
            </h2>
            <p className="text-light-300 text-sm md:text-base mb-8 leading-relaxed">
              Lassen Sie uns Ihr Potenzial gemeinsam prüfen – mit einer kostenlosen SEO-Analyse.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-base rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg group mb-4"
            >
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              3 schnelle Lösungen erhalten..
            </button>
            <p className="text-light-400 text-xs">
              Noch Fragen?{' '}
              <a href="/haeufige-fragen" className="text-primary-400 hover:underline">
                Häufig gestellte Fragen
              </a>
            </p>
            <ServicedRegionsBlock />
            <RegionServiceLinksBlock
              serviceSlug="seo-top-3"
              title="SEO: Top 3 in Google in Ihrem Gebiet"
            />
          </motion.div>
        </div>
      </section>

        <ContactForm />

        <GoogleMapsSection />
      </div>
    </>
  );
};

export default SeoTop3;
