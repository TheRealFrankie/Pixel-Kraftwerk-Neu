'use client';

import React, { useState } from 'react';
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
import BreadcrumbSchemaRegionService from '../../components/BreadcrumbSchemaRegionService';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TrustLine from '../../components/TrustLine';
import StickyCtaBar from '../../components/StickyCtaBar';
import ServiceJsonLd from '../../components/ServiceJsonLd';
import VorherNachherSection from '../../components/VorherNachherSection';
import WieFunktioniertEsSection from '../../components/WieFunktioniertEsSection';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import SubpageLinksBlock from '../../components/SubpageLinksBlock';
import HeroScrollIndicator from '../../components/HeroScrollIndicator';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

interface SeoTop3Props {
  regionSlug?: string;
  regionName?: string;
}

const SeoTop3: React.FC<SeoTop3Props> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/seo-top-3`
    : `${baseUrl}/seo-top-3-in-google`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'seo-top-3', 'SEO Top 3')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];

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

  return (
    <>
      <div style={{ background: '#FAFAF9' }}>
        <LocalBusinessSchema
          pageType="service"
          customDescription={isRegional
            ? `Lokales SEO für Unternehmen in ${regionName} und Umgebung. Pixel Kraftwerk aus Groitzsch bringt Ihr Unternehmen in die Top 3 bei Google für die Suchbegriffe, die wirklich Kunden bringen.`
            : 'Lokales SEO für Unternehmen aus Leipzig, Groitzsch und Region. Pixel Kraftwerk bringt Ihr Unternehmen in die Top 3 bei Google für die Suchbegriffe, die wirklich Kunden bringen.'}
        />
        <ServiceJsonLd
          name={isRegional ? `SEO: Top 3 in Google in ${regionName}` : 'SEO: Top 3 in Google'}
          serviceType="SEO"
          description={isRegional
            ? `Lokales SEO-Angebot für Unternehmen in ${regionName} – Top-3-Platzierungen in Google für Suchbegriffe, die wirklich Kunden bringen. Pixel Kraftwerk aus Groitzsch.`
            : 'Lokales SEO-Angebot mit Fokus auf Top-3-Platzierungen in Google für Suchbegriffe, die wirklich Kunden bringen – speziell für Unternehmen aus Leipzig, Groitzsch, Markkleeberg und der Region.'}
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          pageName={isRegional ? `SEO Top 3 in ${regionName}` : 'SEO Top 3 in Google'}
          faqs={[
            ...faqs.map((item) => ({
              question: item.question,
              answer: item.answer,
            })),
            ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
          ]}
        />
        {isRegional ? (
          <BreadcrumbSchemaRegionService
            regionName={regionName}
            regionUrl={regionUrl}
            serviceName="SEO Top 3"
            serviceUrl={currentPageUrl}
          />
        ) : (
          <BreadcrumbSchema
            serviceName="Top 3 in Google in 90 Tagen"
            serviceUrl={currentPageUrl}
          />
        )}
      {/* Hero – Premium zweispaltig */}
      {/* HERO */}
      <section
        id="lokale-sichtbarkeit-ausbauen"
        className="relative h-screen flex flex-col overflow-hidden"
        style={{ background: '#FAFAF9' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/seo-top3-in-google.webp"
            alt="SEO Top 3 in Google – Suchmaschinenoptimierung"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)' }} aria-hidden />
        </div>
        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <BreadcrumbNav items={isRegional ? [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
            { label: regionName!, href: regionUrl },
            { label: 'SEO: Top 3 in Google' },
          ] : [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'SEO: Top 3 in Google' },
          ]} />
        </div>
        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-5">
                <span className="pill-badge"><Search size={12} /> SEO: Top 3 in Google</span>
              </motion.div>
              <motion.h1 className="font-heading font-bold tracking-tight mb-4 leading-[1.08]" style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                {isRegional ? `SEO-Agentur in ${regionName}` : 'SEO-Agentur Groitzsch & Leipzig'}
              </motion.h1>
              <motion.h2 className="text-base max-w-xl mb-3 leading-relaxed font-semibold" style={{ color: '#0E7C72' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                {SERVICE_TITLE_KEYWORDS['seo-top-3']}
              </motion.h2>
              <motion.p className="text-lg mb-3 max-w-xl leading-relaxed" style={{ color: '#0E7C72', fontWeight: 600 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                {regionContent?.localHook || 'Wenn Ihr Unternehmen dort nicht erscheint, gehen Anfragen direkt an Ihre Konkurrenz.'}
              </motion.p>
              <motion.p className="text-base max-w-xl mb-6 leading-relaxed" style={{ color: '#404B48' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                Lokales SEO mit Fokus auf Top-Platzierungen für die Suchbegriffe, die Ihnen wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                <button onClick={scrollToContact} className="btn-primary">
                  Kostenlose SEO-Analyse anfragen
                  <ArrowRight size={18} />
                </button>
                <a href="tel:+491785844460" className="btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Jetzt anrufen
                </a>
              </motion.div>
              <TrustLine className="mt-5" />
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

      <VorherNachherSection />

      <section className="py-20" style={{ background: '#F4F7F6' }} aria-labelledby="top3-bedeutung-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              id="top3-bedeutung-heading"
              className="text-2xl md:text-3xl font-heading font-bold mb-10"
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
                  <span><strong className="style={{ color: '#0C1210' }}">lokale Relevanz</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="style={{ color: '#0C1210' }}">Vertrauen und Bewertungen</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" aria-hidden />
                  <span><strong className="style={{ color: '#0C1210' }}">starke regionale Signale</strong></span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }} aria-labelledby="top3-veraendert-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              id="top3-veraendert-heading"
              className="text-2xl md:text-3xl font-heading font-bold mb-10"
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
                Für viele lokale Betriebe wird SEO dadurch zu einem <strong className="style={{ color: '#0C1210' }}">Planbarkeits-Hebel</strong>:
              </p>
              <div className="rounded-xl bg-white border border-primary-500/20 px-5 py-4 flex flex-wrap items-center gap-2 font-heading font-bold text-light-100 shadow-card">
                <span>Mehr Sichtbarkeit</span>
                <span className="text-primary-400" aria-hidden>→</span>
                <span>mehr Anfragen</span>
                <span className="text-primary-400" aria-hidden>→</span>
                <span>mehr Aufträge.</span>
              </div>
              <p className="">
                Gerade für Dienstleister und Handwerksbetriebe kann eine gute Platzierung bei Google den Unterschied machen zwischen gelegentlichen Anfragen und einem konstanten Strom neuer Kunden.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <WieFunktioniertEsSection onCtaClick={scrollToContact} ctaLabel="Finden Ihre Kunden Sie bei Google? Jetzt prüfen." />

      <section className="py-20" style={{ background: '#F4F7F6' }}>
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Wer online nicht gefunden wird,<br className="hidden md:block" /> verliert Aufträge – täglich.
              </h2>
              <p className=" text-sm max-w-xl mx-auto">Diese Situationen kennen viele lokale Unternehmen.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white p-5 rounded-xl border border-dark-200 hover:border-red-500/20 transition-colors duration-300 shadow-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <XCircle className="text-red-400 mr-4 mt-0.5 flex-shrink-0" size={18} />
                  <p className=" text-sm leading-relaxed">{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Was Sie bekommen */}
      <section className="py-20" style={{ background: '#FAFAF9' }}>
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Was Sie <span className="text-primary-500">bekommen</span>
              </h2>
              <p className=" max-w-2xl mx-auto text-sm">Unser SEO-Angebot und der Nutzen für Sie – kompakt.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {offerBullets.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white p-4 rounded-xl border border-dark-200 hover:border-primary-500/20 transition-colors duration-300 shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <p className=" text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-xl bg-white border border-primary-500/15 p-6 mb-10 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-heading font-bold mb-4">Was das in Kundensprache bedeutet</h3>
              <ul className="space-y-3 text-light-200 text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={15} />
                  <span>Google versteht klar, <strong className="style={{ color: '#0C1210' }}">was Sie anbieten</strong> und <strong className="style={{ color: '#0C1210' }}">für wen</strong></span>
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
                  className="bg-white p-6 rounded-xl border border-dark-200 hover:border-primary-500/20 transition-colors duration-300 shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mb-3 w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">{benefit.icon}</div>
                  <h3 className="text-base font-heading font-bold mb-1.5">{benefit.title}</h3>
                  <p className=" text-sm leading-relaxed">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Wie wir Keywords auswählen
              </h2>
              <p className=" text-sm">Damit es wirklich Kunden bringt – nicht nur Traffic.</p>
            </motion.div>
            <motion.div
              className="space-y-6 text-light-200 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                Viele SEO-Anbieter schießen auf viel Suchvolumen. Wir fokussieren auf Suchbegriffe, die <strong className="style={{ color: '#0C1210' }}">zu Aufträgen führen</strong>.
              </p>
              <div className="rounded-xl bg-white border border-dark-200 p-5 shadow-card">
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
                      <span className="">{item}</span>
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
      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto rounded-2xl bg-white border border-primary-500/20 p-8 md:p-10 text-center shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-4">Jetzt prüfen lassen</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Passt Top 3 in Google zu Ihrem Geschäft?
            </h2>
            <p className=" text-sm md:text-base mb-6 leading-relaxed">
              In einer kurzen Analyse schauen wir, für welche Suchbegriffe sich SEO bei Ihnen wirklich lohnt – und wo die Konkurrenz schon zu stark ist.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-base rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg group"
            >
              3 konkrete SEO-Maßnahmen erhalten – kostenlos
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <p className="text-light-500 text-xs mt-4">Unverbindlich · kostenlos · ohne Verpflichtung</p>
          </motion.div>
        </div>
      </section>

      {/* 3 Hebel */}
      <section className="py-20" style={{ background: '#F4F7F6' }}>
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Was in den Top 3 wirklich zählt
              </h2>
              <p className=" text-sm">Damit Google Sie oben zeigt, braucht es vor allem:</p>
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
                  className="bg-white p-6 rounded-xl border border-dark-200 hover:border-primary-500/20 transition-colors duration-300 shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary-500/40 font-mono font-bold text-3xl leading-none mb-3 block">{item.num}</span>
                  <h3 className="text-base font-heading font-bold mb-2">{item.title}</h3>
                  <p className=" text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-6 rounded-xl bg-white border border-primary-500/15 px-5 py-4 text-center shadow-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              viewport={{ once: true }}
            >
              <p className=" text-sm">
                Genau diese drei Punkte bildet unser <strong className="style={{ color: '#0C1210' }}">90-Tage-Programm</strong> ab.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website-Crosslink Callout */}
      <section className="py-10" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto rounded-xl bg-white border border-dark-200 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-light-100 text-sm font-semibold mb-0.5">Starke Rankings brauchen eine starke Website.</p>
              <p className=" text-xs">Ohne saubere technische Basis bremst Ihre Website das SEO aus.</p>
            </div>
            <a
              href="/webseite"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-primary-500/25 text-primary-400 text-xs font-semibold whitespace-nowrap hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300 flex-shrink-0 shadow-card"
            >
              Website im Mietmodell
              <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lokaler Abschnitt (nur regional) */}
      {isRegional && (
        <section className="py-20" style={{ background: '#FAFAF9' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  SEO für Unternehmen in {regionName}
                </h2>
                {regionContent?.localSection ? (
                  regionContent.localSection.map((p, i) => (
                    <motion.p
                      key={i}
                      className=" text-base md:text-lg leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {p}
                    </motion.p>
                  ))
                ) : (
                  <p className=" text-base md:text-lg leading-relaxed">
                    Als Agentur mit Sitz in Groitzsch kennen wir die Anforderungen von Unternehmen in {regionName} und der Region. Wir wissen, welche Suchbegriffe vor Ort zählen, wie die Konkurrenzsituation aussieht und wie wir Ihre lokale Sichtbarkeit gezielt stärken.
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20" style={{ background: '#F4F7F6' }} aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-mono tracking-widest uppercase mb-3 font-semibold" style={{ color: '#0E7C72' }}>FAQ</p>
              <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-bold mb-3" style={{ color: '#0C1210' }}>
                {isRegional
                  ? <>FAQ – SEO Top 3 in <span className="text-primary-500">{regionName}</span></>
                  : <>Häufige Fragen zum <span className="text-primary-500">SEO-Angebot</span></>}
              </h2>
            </motion.div>

            <div className="space-y-2" role="list">
              {faqs.map((faq, index) => {
                const isOpen = faqOpenIndex === index;
                return (
                  <motion.div
                    key={index}
                    className="rounded-2xl border bg-white shadow-card transition-all duration-200"
                    style={{ borderColor: isOpen ? 'rgba(14,124,114,0.3)' : '#E4E9E7' }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72' }}>?</div>
                      <span className="flex-1 text-sm md:text-base font-heading font-bold" style={{ color: '#0C1210' }}>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: '#0E7C72' }}
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
                          <p className="text-sm px-5 pb-5 pt-0 leading-relaxed" style={{ color: '#404B48' }}>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
              {regionContent?.localFaqs?.map((faq, index) => {
                const globalIndex = faqs.length + index;
                const isOpen = faqOpenIndex === globalIndex;
                return (
                  <motion.div
                    key={`local-${index}`}
                    className="rounded-2xl border bg-white shadow-card transition-all duration-200"
                    style={{ borderColor: isOpen ? 'rgba(14,124,114,0.3)' : '#E4E9E7' }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${globalIndex}`}
                      id={`faq-question-${globalIndex}`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72' }}>?</div>
                      <span className="flex-1 text-sm md:text-base font-heading font-bold" style={{ color: '#0C1210' }}>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: '#0E7C72' }}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${globalIndex}`}
                          role="region"
                          aria-labelledby={`faq-question-${globalIndex}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm px-5 pb-5 pt-0 leading-relaxed" style={{ color: '#404B48' }}>{faq.a}</p>
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

      {isRegional && regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
        <section className="py-16" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Lokales SEO für Unternehmen in {regionName}
              </h2>
              {regionContent.paragraphs.map((p, i) => (
                <p key={i} className=" text-lg leading-relaxed mb-5">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isRegional && (
        <section className="py-12" style={{ background: '#F4F7F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className=" text-lg leading-relaxed">
                Lokales SEO funktioniert dann am besten, wenn es auf Ihren Standort zugeschnitten ist. Wir bringen Unternehmen in{' '}
                <a href="/leistungsgebiete/leipzig" className="text-primary-400 hover:underline">Leipzig</a>,{' '}
                <a href="/leistungsgebiete/markkleeberg" className="text-primary-400 hover:underline">Markkleeberg</a> und{' '}
                <a href="/leistungsgebiete/borna" className="text-primary-400 hover:underline">Borna</a>{' '}
                gezielt in die Top-3-Positionen bei Google – mit lokaler Strategie direkt aus{' '}
                <a href="/leistungsgebiete/groitzsch" className="text-primary-400 hover:underline">Groitzsch</a>.
              </p>
            </div>
          </div>
        </section>
      )}

      <SubpageLinksBlock
        serviceSlug="seo-top-3"
        regionSlug={isRegional ? regionSlug : undefined}
        title="SEO-Themen im Detail"
      />

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
      <section className="py-24" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-4">Kostenlose Analyse</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Wie viele Kunden verlieren Sie aktuell <span className="text-primary-500">an Ihre Konkurrenz{isRegional ? ` in ${regionName}` : ''}?</span>
            </h2>
            <p className=" text-sm md:text-base mb-8 leading-relaxed">
              {isRegional
                ? `Lassen Sie uns Ihr Potenzial in ${regionName} gemeinsam prüfen – mit einer kostenlosen SEO-Analyse.`
                : 'Lassen Sie uns Ihr Potenzial gemeinsam prüfen – mit einer kostenlosen SEO-Analyse.'}
            </p>
            <p className="text-xs font-semibold mb-4 flex items-center justify-center gap-1.5" style={{ color: '#0E7C72' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              In 90 Tagen unter die Top 3 – oder kostenlose Weiterbetreuung
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-base rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg group mb-4"
            >
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              3 konkrete SEO-Maßnahmen erhalten – kostenlos
            </button>
            <p className="text-light-400 text-xs">
              Noch Fragen?{' '}
              <a href="/haeufige-fragen" className="text-primary-400 hover:underline">
                Häufig gestellte Fragen
              </a>
            </p>
            {isRegional ? (
              <div className="mt-10 text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-heading font-bold mb-4">
                  Weitere Leistungen in {regionName}
                </h3>
                <p className=" mb-3">
                  <a href={regionUrl} className="text-primary-400 hover:underline font-heading font-bold">
                    Alle Leistungen in {regionName}
                  </a>
                  {' – '}Übersicht unserer Angebote in Ihrer Region.
                </p>
                <p className=" mb-6">
                  <a href="/seo-top-3-in-google" className="text-primary-400 hover:underline">
                    Mehr zu SEO: Top 3 in Google im Überblick
                  </a>
                  {' – '}alle Details auf unserer Service-Seite.
                </p>
                <p className=" text-sm mb-3">SEO Top 3 in anderen Gebieten:</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {otherRegions.map((city, i) => (
                    <li key={city.slug}>
                      <a
                        href={`/leistungsgebiete/${city.slug}/seo-top-3`}
                        className="text-primary-400 hover:underline"
                      >
                        {getRegionServiceLinkText('seo-top-3', city.name, i)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <ServicedRegionsBlock />
                <RegionServiceLinksBlock
                  serviceSlug="seo-top-3"
                  title="SEO: Top 3 in Google in Ihrem Gebiet"
                />
              </>
            )}
          </motion.div>
        </div>
      </section>

        <ContactForm service="seo" heading="Kostenlose SEO-Analyse anfragen" subheading="Wir zeigen Ihnen, für welche Suchbegriffe Sie jetzt sichtbar sein könnten." />

        <GoogleMapsSection />
      </div>
      <StickyCtaBar ctaLabel="Kostenlose SEO-Analyse" />
    </>
  );
};

export default SeoTop3;
export type { SeoTop3Props };
