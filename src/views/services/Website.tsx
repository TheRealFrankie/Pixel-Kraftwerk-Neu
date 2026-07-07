'use client';

import React from 'react';
import Image from 'next/image';
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
import BreadcrumbSchemaRegionService from '../../components/BreadcrumbSchemaRegionService';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TrustLine from '../../components/TrustLine';
import StickyCtaBar from '../../components/StickyCtaBar';
import RelatedServices from '../../components/RelatedServices';
import ServiceJsonLd from '../../components/ServiceJsonLd';
import HeroScrollIndicator from '../../components/HeroScrollIndicator';
import { getRegionServiceContent } from '../../data/regionServiceContent';
import { LEISTUNGSGEBIETE_CITIES } from '../../data/leistungsgebiete';
import { getRegionServiceLinkText, SERVICE_TITLE_KEYWORDS } from '../../data/services';
import type { LeistungsgebietSlug } from '../../data/leistungsgebiete';

interface WebsiteProps {
  regionSlug?: string;
  regionName?: string;
}

const Website: React.FC<WebsiteProps> = ({ regionSlug, regionName }) => {
  const isRegional = !!regionSlug && !!regionName;
  const baseUrl = 'https://pixelkraftwerk-ai.com';
  const regionUrl = isRegional ? `/leistungsgebiete/${regionSlug}` : '';
  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/webseiten`
    : `${baseUrl}/webseite`;

  const regionContent = isRegional
    ? getRegionServiceContent(regionSlug as LeistungsgebietSlug, regionName, 'webseiten', 'Webseiten')
    : null;

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const websiteProcessSteps = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Analyse Ihres aktuellen Auftritts und Ihrer Zielgruppe. Wir klären u. a.: welche Leistungen wirklich verkauft werden sollen, welche Fragen Kunden immer stellen, welche Orte/Servicegebiete wichtig sind (z. B. Leipzig & Umland).',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Modernes Design, abgestimmt auf Ihr Unternehmen. Fokus: klare Struktur, mobile-first, „ruhige“ Professionalität statt überladenem Look, sichtbare Kontaktpunkte (CTA) an den richtigen Stellen.',
    },
    {
      step: '03',
      title: 'Umsetzung',
      description: 'Technische Umsetzung (schnell, sicher, mobiloptimiert). Dazu gehören: schnelle Ladezeiten, saubere Darstellung auf Handy/Tablet, technische Basis für Local SEO (Struktur, Überschriften, Seitenlogik). Bei Sonderfunktionen (z. B. komplexe Formulare, Konfiguratoren, Integrationen) arbeitet der Software-Entwickler mit – damit es sauber und wartbar bleibt.',
    },
    {
      step: '04',
      title: 'Livegang',
      description: 'Livegang Ihrer neuen Website.',
    },
    {
      step: '05',
      title: 'Betreuung',
      description: 'Laufende Betreuung, Pflege und Anpassungen im Mietmodell.',
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

  const faqItems = [
    { question: 'Was kostet eine Website im Mietmodell?', answer: 'Sie zahlen einen festen monatlichen Betrag. Der genaue Preis hängt vom Umfang ab – das klären wir im kurzen Gespräch.' },
    { question: 'Was ist im Mietmodell enthalten?', answer: 'Betreuung, Technik, Updates und laufende Anpassungen – damit die Website nicht „nach dem Launch“ liegen bleibt.' },
    { question: 'Kann ich später Texte/Bilder/Leistungen ändern lassen?', answer: 'Ja. Änderungen sind jederzeit möglich – genau dafür ist das Mietmodell gedacht.' },
    { question: 'Ist die Website für Google optimiert?', answer: 'Die technische Basis ist SEO-freundlich (mobil, schnell, sauberer Aufbau). Für Top-Platzierungen empfehlen wir zusätzlich „Top 3 in Google“.' },
    { question: 'Können Formulare, WhatsApp oder Terminbuchung eingebaut werden?', answer: 'Ja. Wir integrieren die Kontaktwege, die zu Ihrer Zielgruppe passen – kurz, schnell, ohne unnötige Hürden.' },
    { question: 'Wann brauche ich einen Software-Entwickler?', answer: 'Wenn Sie spezielle Funktionen oder Integrationen brauchen (z. B. CRM, Automatisierungen, komplexe Formulare). Für Standard-Websites meist nicht.' },
  ];

  return (
    <>
      <div style={{ background: '#FAFAF9' }}>
        <LocalBusinessSchema
          pageType="service"
          customDescription={isRegional
            ? `Moderne Webseiten für Unternehmen in ${regionName} und Umgebung – inklusive Technik, Betreuung und laufenden Anpassungen. Von Pixel Kraftwerk aus Groitzsch.`
            : 'Moderne, schnelle Webseiten im Mietmodell – inklusive Technik, Betreuung und laufenden Anpassungen. Ideal für lokale Unternehmen aus Groitzsch, Leipzig und Region.'}
        />
        {isRegional ? (
          <BreadcrumbSchemaRegionService
            regionName={regionName}
            regionUrl={regionUrl}
            serviceName="Webseiten"
            serviceUrl={currentPageUrl}
          />
        ) : (
          <BreadcrumbSchema serviceName="Webseiten" serviceUrl="https://pixelkraftwerk-ai.com/webseite" />
        )}
        <ServiceJsonLd
          name={isRegional ? `Webseiten für Unternehmen in ${regionName}` : 'Webseiten im Mietmodell'}
          serviceType="Web Design"
          description={isRegional
            ? `Moderne Webseiten für Unternehmen in ${regionName} und Umgebung – inklusive Technik, Betreuung und laufenden Anpassungen. Von Pixel Kraftwerk aus Groitzsch.`
            : 'Moderne, schnelle Webseiten im Mietmodell – inklusive Technik, Betreuung und laufenden Anpassungen. Ideal für lokale Unternehmen, die ohne hohe Startkosten professionell auftreten wollen.'}
          url={currentPageUrl}
          areaServed={isRegional ? [regionName] : undefined}
          faqs={[
            ...faqItems.map((item) => ({ question: item.question, answer: item.answer })),
            ...(regionContent?.localFaqs?.map((f) => ({ question: f.q, answer: f.a })) || []),
          ]}
          pageName={isRegional ? `Webseiten in ${regionName}` : 'Webseiten'}
        />
      {/* Hero mit Premium-Hintergrundbild – Bild unterhalb der Header-Leiste */}
      {/* HERO */}
      <section
        id="webseiten-mietmodell"
        className="relative h-screen flex flex-col overflow-hidden"
        style={{ background: '#FAFAF9' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/webseiten-mietmodell-agentur.webp"
            alt="Moderne Webseiten – professioneller Webauftritt"
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
            { label: 'Webseiten' },
          ] : [
            { label: 'Startseite', href: '/' },
            { label: 'Leistungen', href: '/leistungen' },
            { label: 'Webseiten' },
          ]} />
        </div>
        <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-5">
                <span className="pill-badge"><Globe size={12} /> Webseiten im Mietmodell</span>
              </motion.div>
              <motion.h1 className="font-heading font-bold tracking-tight mb-4 leading-[1.08]" style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
                {isRegional ? `Webseiten in ${regionName}` : 'Webdesign Groitzsch & Leipzig'}
              </motion.h1>
              <motion.h2 className="text-base max-w-xl mb-3 leading-relaxed font-semibold" style={{ color: '#0E7C72' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                {SERVICE_TITLE_KEYWORDS['webseiten']}
              </motion.h2>
              <motion.p className="text-lg mb-3 max-w-xl leading-relaxed" style={{ color: '#0E7C72', fontWeight: 600 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                {regionContent?.localHook || '– im einfachen Mietmodell'}
              </motion.p>
              <motion.p className="text-base max-w-xl mb-6 leading-relaxed" style={{ color: '#404B48' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                Ihre Website soll wie ein guter Mitarbeiter arbeiten: professionell, klar und so gestaltet, dass Besucher leicht Kontakt aufnehmen können.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                <button onClick={scrollToContact} className="btn-primary">
                  Website-Angebot anfragen
                  <ArrowRight size={18} />
                </button>
                <a href="tel:+491785844460" className="btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Jetzt anrufen
                </a>
              </motion.div>
              <motion.div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 mb-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}>
                {['Keine Einmalkosten', 'Keine Mindestlaufzeit', 'Betreuung inklusive'].map(item => (
                  <span key={item} className="flex items-center gap-1 text-xs" style={{ color: '#68746F' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </span>
                ))}
              </motion.div>
              <TrustLine className="mt-4" />
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                Warum moderne Webseiten heute Kunden bringen (oder eben nicht)
              </h2>
              <p className="mb-4" style={{ color: '#404B48' }}>
                Viele Websites sehen „okay“ aus – aber sie bringen kaum Anfragen. Meist liegt das nicht am Design, sondern daran, dass drei Dinge fehlen:
              </p>
              <ul className="space-y-2.5 mb-4">
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Klarheit:</strong> Was genau bieten Sie an – und für wen?</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Vertrauen:</strong> Warum sollte ein Kunde Ihnen glauben / Sie wählen?</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Nächster Schritt:</strong> Wie kommt der Besucher schnell zum Kontakt oder Termin?</span></li>
              </ul>
              <p className="" style={{ color: '#404B48' }}>
                Unsere Webseiten sind deshalb nicht nur „schön“, sondern so aufgebaut, dass sie <strong className="text-light-100">Verstehen → Vertrauen → Kontakt</strong> sauber führen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
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
                className="bg-white p-6 border border-dark-200 text-center rounded-2xl shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <DollarSign size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="" style={{ color: '#404B48' }}>fester monatlicher Betrag</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 border border-dark-200 text-center rounded-2xl shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <HeadphonesIcon size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="" style={{ color: '#404B48' }}>volle Betreuung inklusive</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 border border-dark-200 text-center rounded-2xl shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Zap size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="" style={{ color: '#404B48' }}>jederzeit anpassbar</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 border border-dark-200 text-center rounded-2xl shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Shield size={32} className="text-primary-500 mx-auto mb-3" />
                <p className="" style={{ color: '#404B48' }}>technisch immer aktuell</p>
              </motion.div>
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>Was am Mietmodell besonders stark ist</h3>
              <p className="mb-4" style={{ color: '#404B48' }}>
                Viele Websites veralten, weil nach dem Launch niemand mehr Zeit hat. Im Mietmodell passiert das nicht:
              </p>
              <ul className="space-y-2.5 mb-4">
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Inhalte können schnell aktualisiert werden (Leistungen, Preise, Team, Öffnungszeiten)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>neue Bereiche/Seiten lassen sich ergänzen (z. B. neue Leistungen oder Orte)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Technik bleibt aktuell (Sicherheit, Performance, Mobiloptimierung)</span></li>
              </ul>
              <p className="" style={{ color: '#404B48' }}>
                Wenn Sie zusätzlich individuelle Funktionen oder Integrationen brauchen, hilft ein <strong className="text-light-100">Software-Entwickler</strong> dabei, dass alles stabil läuft – z. B. Terminlogik, CRM-Anbindungen oder automatisierte Lead-Flows.
              </p>
            </motion.div>

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

      <section className="py-16" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Passt eine Website im Mietmodell zu Ihrem Unternehmen?
            </motion.h2>
            <motion.p
              className="text-light-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              In einem kurzen Gespräch klären wir, wie Ihre aktuelle Website aufgestellt ist – und ob ein Mietmodell mit laufender Betreuung für Sie wirklich Sinn ergibt.
            </motion.p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300 rounded-xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Bringt Ihre Website genug Anfragen? Kostenlos prüfen lassen.
              <ArrowRight className="ml-2" size={22} />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}>
                Was ist im Mietmodell enthalten?
              </h2>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Hosting & technische Basis (schnell, sicher, mobiloptimiert)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Updates & Wartung (damit alles stabil und aktuell bleibt)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Kleine Änderungen inklusive (Texte, Bilder, Leistungen, Öffnungszeiten)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Support & Betreuung (kurzer Draht, schnelle Anpassungen)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Laufende Optimierung nach Bedarf (z. B. Struktur/CTAs/Performance)</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                Was eine Website „vertrauensstark“ macht (die wichtigsten Bausteine)
              </h2>
              <p className="mb-4" style={{ color: '#404B48' }}>
                Eine Website schafft Vertrauen, wenn Kunden in Sekunden das Gefühl bekommen: „Die wirken professionell. Die haben Struktur. Da kann ich anfragen.“ Typische Bausteine, die bei lokalen Unternehmen besonders gut wirken:
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Klare Leistungssätze in Kundensprache</strong> (kein Fachjargon)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Echte Bilder</strong> (Team, Betrieb, Projekte) statt austauschbarer Stockfotos</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Bewertungen / Referenzen</strong> (z. B. Google Bewertungen, Ergebnisse, Projekte)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Transparenter Ablauf</strong> („So läuft’s ab“ in 3–5 Schritten)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Einfache Kontaktwege</strong> (Formular, Telefon, WhatsApp, Termin – je nach Zielgruppe)</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                KI, Automatisierung & moderne Webseiten: Was sinnvoll ist (und was nicht)
              </h2>
              <p className="mb-4" style={{ color: '#404B48' }}>
                „KI“ muss nicht groß angekündigt werden – sie soll im Hintergrund helfen. Sinnvolle Beispiele:
              </p>
              <ul className="space-y-2.5 mb-4">
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>KI-Automatisierung</strong> für Anfragen: Kontaktformular → Lead → Zuständigkeit → Follow-up → Termin</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Digitale Kundenassistenz</strong> (Website-Chat), die Fragen beantwortet und Anfragen vorqualifiziert</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span><strong style={{ color: '#0C1210' }}>Telefonische Kundenassistenz</strong>, die Anrufe annimmt und Rückrufe strukturiert erfasst</span></li>
              </ul>
              <p className="" style={{ color: '#404B48' }}>
                Das Ergebnis: Besucher bekommen schneller Antworten, Anfragen gehen nicht verloren, und Ihr Team arbeitet strukturierter. Hier nutzen wir künstliche Intelligenz pragmatisch – nicht als Buzzword, sondern als Hebel für bessere Abläufe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                So entsteht Ihre <span className="text-primary-500">neue Website</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {websiteProcessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white p-6 border border-dark-200 hover:border-primary-500/50 transition-colors duration-300 rounded-2xl shadow-card"
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

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                Für wen ist dieses <span className="text-primary-500">Angebot ideal?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white p-6 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mr-4 flex-shrink-0">{audience.icon}</div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{audience.title}</h3>
                    <p className="text-sm" style={{ color: '#68746F' }}>{audience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6" style={{ color: '#0C1210' }}>
                Mini-Vergleich: Einmal-Projekt vs. Mietmodell
              </h2>
              <div className="overflow-x-auto rounded-2xl border shadow-card" style={{ borderColor: '#E4E9E7' }}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Thema</th>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Einmal-Projekt</th>
                      <th className="py-3 px-4 font-heading font-bold text-sm border-b text-left" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>Mietmodell</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Updates</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>oft „später“</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>inklusive &amp; regelmäßig</td></tr>
                    <tr style={{ background: '#FAFAF9' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Anpassungen</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>extra Aufwand</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>jederzeit möglich</td></tr>
                    <tr style={{ background: '#fff' }}><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>Technik</td><td className="py-3 px-4 border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>wird oft alt</td><td className="py-3 px-4 border-b font-semibold" style={{ color: '#0E7C72', borderColor: '#E4E9E7' }}>technisch immer aktuell</td></tr>
                    <tr style={{ background: '#FAFAF9' }}><td className="py-3 px-4" style={{ color: '#404B48' }}>Betreuung</td><td className="py-3 px-4" style={{ color: '#404B48' }}>endet nach Launch</td><td className="py-3 px-4 font-semibold" style={{ color: '#0E7C72' }}>dauerhaft dabei</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                Häufige Verbesserungen, die sofort mehr Anfragen bringen
              </h2>
              <p className="mb-4" style={{ color: '#404B48' }}>
                Wenn eine Website „nicht zieht“, sind es oft diese Hebel:
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Hero-Text klarer (Problem + Lösung + CTA)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Leistungen besser strukturieren (nicht zu viel auf einmal)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>mehr Vertrauen (Bewertungen, Referenzen, echte Bilder)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Kontaktwege vereinfachen (weniger Felder, schneller erreichbar)</span></li>
                <li className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}><svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Servicegebiete sauber einbauen (ohne Keyword-Spam)</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {isRegional && (
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
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                  Webseiten für Unternehmen in {regionName}
                </h2>
                {regionContent?.localSection ? (
                  regionContent.localSection.map((p, i) => (
                    <motion.p
                      key={i}
                      className="text-light-200 max-w-3xl mx-auto mb-4 text-left"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {p}
                    </motion.p>
                  ))
                ) : (
                  <p className="text-light-200 max-w-3xl mx-auto">
                    Eine gute Website für Unternehmen in {regionName} verbindet modernes Design mit lokaler Relevanz. Als Agentur mit Sitz in Groitzsch kennen wir die Anforderungen vor Ort – und erstellen Webseiten, die Ihre Kunden in {regionName} und Umgebung direkt ansprechen.
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section id="faq" className="py-20" style={{ background: '#F4F7F6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isRegional
                ? `FAQ – Webseiten im Mietmodell in ${regionName}`
                : 'Kurze FAQ (Webseiten im Mietmodell)'}
            </motion.h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-3">{item.question}</h3>
                  <p className="" style={{ color: '#404B48' }}>{item.answer}</p>
                </motion.div>
              ))}
              {regionContent?.localFaqs?.map((faq, index) => (
                <motion.div
                  key={`local-${index}`}
                  className="bg-white p-6 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (faqItems.length + index) * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-3">{faq.q}</h3>
                  <p className="" style={{ color: '#404B48' }}>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#FAFAF9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Bereit für eine Website, die <span className="text-primary-500">wirklich für Sie arbeitet{isRegional ? ` in ${regionName}` : ''}?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns in einer kurzen, unverbindlichen Beratung besprechen, wie Ihre neue Website aussehen und
              was sie {isRegional ? `für Ihr Unternehmen in ${regionName}` : 'für Ihr Unternehmen'} leisten soll.
            </motion.p>
            <p className="text-xs font-semibold mb-4 flex items-center gap-1.5" style={{ color: '#0E7C72' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Wir nehmen maximal 3 Neukunden pro Monat an
            </p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ArrowRight className="mr-2" size={24} />
              Unverbindliches Website-Angebot erhalten
            </motion.button>
            <motion.p
              className="text-light-300 text-sm mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Noch Fragen? Viele Antworten finden Sie in unseren{' '}
              <a href="#faq" className="text-primary-400 hover:underline">
                FAQ
              </a>
              .
            </motion.p>
            {isRegional ? (
              <div className="mt-10 text-left max-w-2xl mx-auto">
                {regionContent?.paragraphs && regionContent.paragraphs.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                      Webseiten für Unternehmen in {regionName}
                    </h3>
                    {regionContent.paragraphs.map((p, i) => (
                      <p key={i} className="text-light-200 text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                  </div>
                )}
                <h3 className="text-xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
                  Weitere Leistungen in {regionName}
                </h3>
                <p className="text-light-200 mb-3">
                  <a href={regionUrl} className="text-primary-400 hover:underline font-heading font-bold">
                    Alle Leistungen in {regionName}
                  </a>
                  {' – '}Übersicht unserer Angebote in Ihrer Region.
                </p>
                <p className="mb-6" style={{ color: '#404B48' }}>
                  <a href="/webseite" className="text-primary-400 hover:underline">
                    Mehr zu Webseiten im Mietmodell im Überblick
                  </a>
                  {' – '}alle Details auf unserer Service-Seite.
                </p>
                <p className="text-light-300 text-sm mb-3">Webseiten in anderen Gebieten:</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {otherRegions.map((city, i) => (
                    <li key={city.slug}>
                      <a
                        href={`/leistungsgebiete/${city.slug}/webseiten`}
                        className="text-primary-400 hover:underline"
                      >
                        {getRegionServiceLinkText('webseiten', city.name, i)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-light-200 text-lg leading-relaxed">
                    Wir gestalten moderne Webseiten für Unternehmen in{' '}
                    <a href="/leistungsgebiete/leipzig" className="text-primary-400 hover:underline">Leipzig</a>,{' '}
                    <a href="/leistungsgebiete/zwenkau" className="text-primary-400 hover:underline">Zwenkau</a> und{' '}
                    <a href="/leistungsgebiete/markkleeberg" className="text-primary-400 hover:underline">Markkleeberg</a>.
                    Unser Team in <a href="/leistungsgebiete/groitzsch" className="text-primary-400 hover:underline">Groitzsch</a> steht Ihnen persönlich zur Seite – vom Entwurf bis zum Launch.
                  </p>
                </div>
                <RelatedServices
                  currentSlug="webseite"
                  anchorBySlug={{
                    'ki-chatbots': '#ki-chatbot-fur-ihre-website',
                    'telefonassistenten': '#ki-telefonagent-fur-ihr-unternehmen',
                    'automatisierungen': '#ki-automatisierung-fur-anfragen-termine',
                    'seo-top-3-in-google': '#lokale-sichtbarkeit-ausbauen',
                  }}
                />
                <ServicedRegionsBlock headingTag="h2" />
                <RegionServiceLinksBlock serviceSlug="webseiten" title="Webseiten in Ihrem Gebiet" />
              </>
            )}
          </div>
        </div>
      </section>

        <ContactForm service="website" heading="Website-Angebot anfragen" subheading="Erzählen Sie uns, was Ihre neue Website leisten soll – wir melden uns innerhalb von 24 Stunden." />

        <GoogleMapsSection />
      </div>
      <StickyCtaBar ctaLabel="Website-Angebot anfragen" />
    </>
  );
};

export default Website;
export type { WebsiteProps };

