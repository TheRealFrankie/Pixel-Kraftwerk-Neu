'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  CheckCircle,
  ChevronDown,
  Clock,
  Zap,
  Shield,
  Target,
  Layers,
  Phone,
  Building2,
  Briefcase,
  Stethoscope,
  ShoppingBag,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import BreadcrumbNav from '../components/BreadcrumbNav';
import ServiceJsonLd from '../components/ServiceJsonLd';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import HeroScrollIndicator from '../components/HeroScrollIndicator';
import { businessInfo } from '../data/businessInfo';
import { LEISTUNGSGEBIETE_CITIES } from '../data/leistungsgebiete';
import { getServiceDefaults } from '../data/subpageServiceDefaults';
import type {
  SubpageContent,
  SubpageContentSection,
  SubpageDefinition,
  RegionalSubpageContent,
} from '../data/serviceSubpages';

type HeroLayout = 'fullscreen' | 'two-column';

interface ServiceHeroConfig {
  src: string;
  alt: string;
  layout: HeroLayout;
  icon?: LucideIcon;
}

const SERVICE_HERO_IMAGES: Record<string, ServiceHeroConfig> = {
  'ki-chatbots': {
    src: '/images/ki-chatbot-digitale-kundenassistenz.webp',
    alt: 'KI-Chatbot für digitale Kundenassistenz',
    layout: 'fullscreen',
    icon: MessageSquare,
  },
  telefonassistenten: {
    src: '/images/ki-telefonassistent.webp',
    alt: 'KI-Telefonassistent für automatische Anrufannahme',
    layout: 'fullscreen',
    icon: Phone,
  },
  automatisierungen: {
    src: '/images/automatisierungen-anfragen-vertrieb-terminplanung.webp',
    alt: 'Automatisierungen für Anfragen, Vertrieb und Terminplanung',
    layout: 'fullscreen',
    icon: Zap,
  },
  'crm-systeme': {
    src: '/images/crm-systeme-kundenverwaltung.webp',
    alt: 'CRM-Systeme für Kundenverwaltung',
    layout: 'fullscreen',
    icon: Layers,
  },
  'seo-top-3': {
    src: '/images/seo-top3-in-google.webp',
    alt: 'SEO Top 3 in Google – Suchmaschinenoptimierung',
    layout: 'two-column',
    icon: Target,
  },
};

const ICON_MAP: Record<string, LucideIcon> = {
  clock: Clock,
  zap: Zap,
  shield: Shield,
  target: Target,
  layers: Layers,
  phone: Phone,
  building: Building2,
  briefcase: Briefcase,
  stethoscope: Stethoscope,
  shopping: ShoppingBag,
  message: MessageSquare,
};

interface ServiceSubpageProps {
  content: SubpageContent;
  subpageDef: SubpageDefinition;
  parentService: { slug: string; label: string; globalRoute: string };
  regionSlug?: string;
  regionName?: string;
  regionalContent?: RegionalSubpageContent | null;
}

const baseUrl = businessInfo.url;

export default function ServiceSubpage({
  content,
  subpageDef,
  parentService,
  regionSlug,
  regionName,
  regionalContent,
}: ServiceSubpageProps) {
  const isRegional = !!regionSlug && !!regionName;
  const defaults = getServiceDefaults(parentService.slug);
  const isSeoStyle = parentService.slug === 'seo-top-3';

  const currentPageUrl = isRegional
    ? `${baseUrl}/leistungsgebiete/${regionSlug}/${parentService.slug}/${subpageDef.slug}`
    : `${baseUrl}${parentService.globalRoute}/${subpageDef.slug}`;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const breadcrumbItems = isRegional
    ? [
        { label: 'Startseite', href: '/' },
        { label: 'Leistungsgebiete', href: '/leistungsgebiete' },
        { label: regionName, href: `/leistungsgebiete/${regionSlug}` },
        { label: parentService.label, href: `/leistungsgebiete/${regionSlug}/${parentService.slug}` },
        { label: subpageDef.label },
      ]
    : [
        { label: 'Startseite', href: '/' },
        { label: parentService.label, href: parentService.globalRoute },
        { label: subpageDef.label },
      ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: breadcrumbItems.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: item.href.startsWith('http') ? item.href : baseUrl + item.href } : {}),
    })),
  };

  const otherRegions = isRegional
    ? LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug).slice(0, 6)
    : [];

  const h1Text = isRegional ? `${subpageDef.label} in ${regionName}` : `${subpageDef.label} Groitzsch & Leipzig`;
  const heroImage = SERVICE_HERO_IMAGES[parentService.slug];
  const heroCtaText = content.heroCtaText ?? 'Jetzt unverbindlich anfragen';

  const allFaqs = [
    ...content.faqs,
    ...(isRegional && regionalContent?.localFaqs ? regionalContent.localFaqs : []),
  ];

  // Structured sections – merge content overrides with service defaults
  const problem = content.problem;
  const solution = content.solution;
  const definition = content.definition;
  const featuresSection = content.features;
  const benefits = content.benefits ?? defaults?.benefits;
  const process = content.process ?? defaults?.process;
  const audiences = content.audiences ?? defaults?.audiences;
  const rental = content.rental ?? defaults?.rental;
  const miniCta = content.miniCta ?? defaults?.miniCta;
  const crossSell = content.crossSell ?? defaults?.crossSell;

  return (
    <>
      <LocalBusinessSchema
        pageType="service"
        customDescription={isRegional
          ? `${subpageDef.label} für Unternehmen in ${regionName} und Umgebung. ${content.metaDescription}`
          : content.metaDescription}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceJsonLd
        name={subpageDef.label}
        serviceType={content.primaryKeyword}
        description={content.metaDescription}
        url={currentPageUrl}
        areaServed={isRegional && regionName ? [regionName] : undefined}
        faqs={content.faqs.map((f) => ({ question: f.q, answer: f.a }))}
        pageName={subpageDef.label}
      />

      <div className="bg-dark-500">
        {/* ── HERO ── */}
        {heroImage?.layout === 'two-column' ? (
          <TwoColumnHero
            content={content}
            parentService={parentService}
            heroImage={heroImage}
            h1Text={h1Text}
            titleKeywords={subpageDef.titleKeywords}
            regionalContent={regionalContent ?? null}
            isRegional={isRegional}
            breadcrumbItems={breadcrumbItems}
            scrollToContact={scrollToContact}
            heroCtaText={heroCtaText}
          />
        ) : (
          <FullscreenHero
            content={content}
            parentService={parentService}
            heroImage={heroImage}
            h1Text={h1Text}
            titleKeywords={subpageDef.titleKeywords}
            regionalContent={regionalContent ?? null}
            isRegional={isRegional}
            breadcrumbItems={breadcrumbItems}
            scrollToContact={scrollToContact}
            heroCtaText={heroCtaText}
          />
        )}

        {/* ── PROBLEM ── */}
        {problem && <ProblemSection problem={problem} />}

        {/* ── SOLUTION ── */}
        {solution && <SolutionSection solution={solution} />}

        {/* ── DEFINITION ── */}
        {definition && <DefinitionSection definition={definition} />}

        {/* ── FEATURES ── */}
        {featuresSection && <FeaturesSection features={featuresSection} />}

        {/* ── MINI-CTA ── */}
        {miniCta && <MiniCtaSection miniCta={miniCta} scrollToContact={scrollToContact} />}

        {/* ── DEEP-DIVE (existing content.sections) ── */}
        {content.sections.length > 0 && (
          <DeepDiveSections
            sections={content.sections}
            subpageLabel={subpageDef.label}
            seoStyle={isSeoStyle}
          />
        )}

        {/* ── AUDIENCES ── */}
        {audiences && <AudiencesSection audiences={audiences} />}

        {/* ── BENEFITS (5 Gründe) ── */}
        {benefits && <BenefitsSection benefits={benefits} />}

        {/* ── RENTAL ── */}
        {rental && <RentalSection rental={rental} />}

        {/* ── PROCESS ── */}
        {process && <ProcessSection process={process} />}

        {/* ── CROSS-SELL ── */}
        {crossSell && <CrossSellBanner crossSell={crossSell} />}

        {/* Regional Section */}
        {isRegional && regionalContent?.localSection && regionalContent.localSection.length > 0 && (
          <section className="py-16 bg-dark-400">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <motion.h2
                  className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {subpageDef.label} für Unternehmen in {regionName}
                </motion.h2>
                {regionalContent.localSection.map((p, i) => (
                  <motion.p
                    key={i}
                    className="text-light-200 text-base md:text-lg leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── SIBLING SUBPAGES ── */}
        {content.siblingSubpageLinks.length > 0 && (
          <SiblingLinksSection
            links={content.siblingSubpageLinks}
            parentLabel={parentService.label}
            isRegional={isRegional}
            regionSlug={regionSlug}
            parentSlug={parentService.slug}
          />
        )}

        {/* ── FAQ ── */}
        {allFaqs.length > 0 && <FaqSection faqs={allFaqs} subpageLabel={subpageDef.label} />}

        {/* ── FINAL CTA ── */}
        <FinalCtaSection
          ctaText={content.ctaText}
          subpageLabel={subpageDef.label}
          scrollToContact={scrollToContact}
          crossServiceLinks={content.crossServiceLinks}
        />

        {/* ── REGIONAL / AREA LINKS ── */}
        <section className="py-12 bg-dark-400">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {isRegional ? (
                <div className="text-left">
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-4">
                    Weitere Informationen in {regionName}
                  </h3>
                  <p className="text-light-200 mb-3">
                    <a href={`/leistungsgebiete/${regionSlug}`} className="text-primary-400 hover:underline font-heading font-bold">
                      Alle Leistungen in {regionName}
                    </a>
                    {' – '}Übersicht unserer Angebote in Ihrer Region.
                  </p>
                  <p className="text-light-200 mb-3">
                    <a href={`/leistungsgebiete/${regionSlug}/${parentService.slug}`} className="text-primary-400 hover:underline">
                      {parentService.label} in {regionName}
                    </a>
                    {' – '}alle Details zum Hauptservice.
                  </p>
                  <p className="text-light-200 mb-6">
                    <a href={`${parentService.globalRoute}/${subpageDef.slug}`} className="text-primary-400 hover:underline">
                      {subpageDef.label} im Überblick
                    </a>
                    {' – '}allgemeine Informationen.
                  </p>
                  <p className="text-light-300 text-sm mb-3">{subpageDef.label} in anderen Gebieten:</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {otherRegions.map((city) => (
                      <li key={city.slug}>
                        <a href={`/leistungsgebiete/${city.slug}/${parentService.slug}/${subpageDef.slug}`} className="text-primary-400 hover:underline">
                          {subpageDef.label} in {city.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-4">
                    {subpageDef.label} in Ihrer Region
                  </h3>
                  <p className="text-light-300 text-sm mb-3">
                    Wir bieten {subpageDef.label} in allen unseren Leistungsgebieten an:
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {LEISTUNGSGEBIETE_CITIES.slice(0, 8).map((city) => (
                      <a
                        key={city.slug}
                        href={`/leistungsgebiete/${city.slug}/${parentService.slug}/${subpageDef.slug}`}
                        className="text-primary-400 hover:underline"
                      >
                        {subpageDef.label} in {city.name}
                      </a>
                    ))}
                    <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">
                      Alle Leistungsgebiete
                    </a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-dark-200/50">
                    <a href={parentService.globalRoute} className="text-primary-400 hover:underline font-heading font-bold">
                      ← Zurück zu {parentService.label}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <ContactForm />
        <GoogleMapsSection />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO – fullscreen variant (matches main service pages)
   ═══════════════════════════════════════════════════════════════════════════ */

interface HeroProps {
  content: SubpageContent;
  parentService: { slug: string; label: string; globalRoute: string };
  heroImage?: ServiceHeroConfig;
  h1Text: string;
  titleKeywords: string;
  regionalContent: RegionalSubpageContent | null;
  isRegional: boolean;
  breadcrumbItems: { label: string; href?: string }[];
  scrollToContact: () => void;
  heroCtaText: string;
}

function FullscreenHero({
  content,
  heroImage,
  h1Text,
  titleKeywords,
  regionalContent,
  isRegional,
  breadcrumbItems,
  scrollToContact,
  heroCtaText,
}: HeroProps) {
  return (
    <section
      className="relative h-screen flex flex-col overflow-hidden"
      style={{ background: '#FAFAF9' }}
    >
      {heroImage && (
        <div className="absolute inset-0">
          <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover object-right" priority sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)' }}
            aria-hidden
          />
        </div>
      )}

      {/* Breadcrumb im normalen Fluss */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
        <BreadcrumbNav items={breadcrumbItems} />
      </div>

      <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-5">
              <span
                className="pill-badge"
                style={{ fontSize: '0.75rem' }}
              >
                {isRegional && regionalContent?.localHook ? regionalContent.localHook : content.primaryKeyword}
              </span>
            </motion.div>

            <motion.h1
              className="font-heading font-bold tracking-tight mb-4 leading-[1.08]"
              style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {h1Text}
            </motion.h1>

            <motion.h2
              className="text-base font-semibold mb-3 leading-relaxed"
              style={{ color: '#0E7C72' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {titleKeywords}
            </motion.h2>

            {(content.subheadline) && (
              <motion.p
                className="text-lg mb-3 leading-relaxed"
                style={{ color: '#0E7C72', fontWeight: 600 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                {content.subheadline}
              </motion.p>
            )}

            <motion.p
              className="text-base max-w-xl mb-6 leading-relaxed"
              style={{ color: '#404B48' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              dangerouslySetInnerHTML={{ __html: content.intro }}
            />

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <button onClick={scrollToContact} className="btn-primary">
                {heroCtaText}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}

function TwoColumnHero({
  content,
  parentService,
  heroImage,
  h1Text,
  titleKeywords,
  regionalContent,
  isRegional,
  breadcrumbItems,
  scrollToContact,
  heroCtaText,
}: HeroProps) {
  return (
    <section
      className="relative h-screen flex flex-col overflow-hidden"
      style={{ background: '#FAFAF9' }}
    >
      {heroImage && (
        <div className="absolute inset-0">
          <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover object-right" priority sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(250,250,249,0.97) 0%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.3) 65%, rgba(250,250,249,0.0) 80%)' }}
            aria-hidden
          />
        </div>
      )}

      {/* Breadcrumb im normalen Fluss */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20 md:pt-24">
        <BreadcrumbNav items={breadcrumbItems} />
      </div>

      <div className="flex-1 flex items-center container mx-auto px-4 md:px-8 relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <motion.div
              className="pill-badge w-fit mb-5"
              style={{ fontSize: '0.75rem' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {parentService.label}
            </motion.div>
            <motion.h1
              className="font-heading font-bold tracking-tight leading-[1.08] mb-4"
              style={{ color: '#0C1210', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {h1Text}
            </motion.h1>
            <motion.h2
              className="text-base font-semibold mb-3"
              style={{ color: '#0E7C72' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
            >
              {titleKeywords}
            </motion.h2>
            {isRegional && regionalContent?.localHook && (
              <motion.p
                className="font-heading text-lg mb-4"
                style={{ color: '#0E7C72', fontWeight: 600 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {regionalContent.localHook}
              </motion.p>
            )}
            <motion.p
              className="text-sm md:text-base leading-relaxed mb-5 max-w-[520px]"
              style={{ color: '#404B48' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: content.intro }}
            />
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <button onClick={scrollToContact} className="btn-primary">
                {heroCtaText}
                <ArrowRight size={20} />
              </button>
            </motion.div>
            <motion.p
              className="text-sm"
              style={{ color: '#68746F' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Unverbindlich&nbsp;&bull;&nbsp;lokal fokussiert&nbsp;&bull;&nbsp;verständlich erklärt
            </motion.p>
          </div>
          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROBLEM
   ═══════════════════════════════════════════════════════════════════════════ */

function ProblemSection({ problem }: { problem: NonNullable<SubpageContent['problem']> }) {
  return (
    <section className="py-20 bg-dark-400" data-section-label="Herausforderung">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              dangerouslySetInnerHTML={{ __html: problem.headline }}
            />
            <p className="text-light-200 mb-8">{problem.lead}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problem.bullets.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start bg-white rounded-2xl p-6 border border-dark-200 shadow-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="text-light-200" dangerouslySetInnerHTML={{ __html: item }} />
              </motion.div>
            ))}
          </div>

          {problem.tagline && (
            <motion.p
              className="text-center text-light-100 mt-10 text-lg font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {problem.tagline}
            </motion.p>
          )}

          {problem.details && problem.details.length > 0 && (
            <div className="mt-12 space-y-6">
              {problem.details.map((detail, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-dark-200 shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-4">{detail.title}</h3>
                  <p className="text-light-200 mb-4" dangerouslySetInnerHTML={{ __html: detail.body }} />
                  {detail.bullets && (
                    <ul className="space-y-2 text-light-200">
                      {detail.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start">
                          <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SOLUTION
   ═══════════════════════════════════════════════════════════════════════════ */

function SolutionSection({ solution }: { solution: NonNullable<SubpageContent['solution']> }) {
  return (
    <section className="py-20 bg-dark-500" data-section-label="Lösung">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              dangerouslySetInnerHTML={{ __html: solution.headline }}
            />
            <p
              className="text-light-200 max-w-3xl mx-auto mb-8"
              dangerouslySetInnerHTML={{ __html: solution.lead }}
            />
          </motion.div>

          <motion.div
            className="bg-white p-8 border border-primary-500/30 mb-8 rounded-2xl shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading font-bold text-light-100 mb-4">{solution.primary.title}</h3>
            <ul className="space-y-3">
              {solution.primary.bullets.map((b, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200" dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </motion.div>

          {solution.blocks && solution.blocks.length > 0 && (
            <div className="space-y-6">
              {solution.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-4">{block.title}</h3>
                  {block.intro && (
                    <p className="text-light-200 mb-4" dangerouslySetInnerHTML={{ __html: block.intro }} />
                  )}
                  {block.bullets && (
                    <ul className="space-y-2 text-light-200">
                      {block.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start">
                          <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {block.footnote && (
                    <p className="text-light-200 mt-4" dangerouslySetInnerHTML={{ __html: block.footnote }} />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {solution.tagline && (
            <motion.p
              className="text-center text-primary-500 text-lg font-bold mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {solution.tagline}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   DEFINITION
   ═══════════════════════════════════════════════════════════════════════════ */

function DefinitionSection({ definition }: { definition: NonNullable<SubpageContent['definition']> }) {
  return (
    <section className="py-20 bg-dark-500" data-section-label="Was ist das?">
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
              {definition.headline}
            </h2>
            <p
              className="text-light-200 max-w-3xl mx-auto mb-8"
              dangerouslySetInnerHTML={{ __html: definition.lead }}
            />
            {definition.examples && definition.examples.length > 0 && (
              <ul className="max-w-3xl mx-auto mb-8 space-y-2.5">
                {definition.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}>
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span dangerouslySetInnerHTML={{ __html: ex }} />
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {definition.blocks && definition.blocks.length > 0 && (
            <div className="space-y-6">
              {definition.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 border border-dark-200 rounded-2xl shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-4">{block.title}</h3>
                  <p className="text-light-200" dangerouslySetInnerHTML={{ __html: block.body }} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FEATURES
   ═══════════════════════════════════════════════════════════════════════════ */

function FeaturesSection({ features }: { features: NonNullable<SubpageContent['features']> }) {
  return (
    <section className="py-20 bg-dark-500" data-section-label="Leistungen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
              dangerouslySetInnerHTML={{ __html: features.headline }}
            />
          </motion.div>

          <div className="bg-white p-8 border border-dark-200 rounded-2xl shadow-card">
            <div className="space-y-3">
              {features.primaryList.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-light-100" dangerouslySetInnerHTML={{ __html: f }} />
                </motion.div>
              ))}
            </div>

            {(features.note || (features.groups && features.groups.length > 0)) && (
              <div className="mt-8 pt-8 border-t border-dark-200">
                {features.note && (
                  <p
                    className="text-light-200 text-center mb-8"
                    dangerouslySetInnerHTML={{ __html: features.note }}
                  />
                )}
                {features.groups?.map((group, i) => (
                  <div key={i} className={i > 0 ? 'mt-8' : ''}>
                    <h3 className="text-xl font-heading font-bold text-light-100 mb-4">{group.title}</h3>
                    {group.intro && (
                      <p className="text-light-200 mb-4" dangerouslySetInnerHTML={{ __html: group.intro }} />
                    )}
                    <ul className="space-y-2 text-light-200">
                      {group.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start">
                          <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MINI-CTA
   ═══════════════════════════════════════════════════════════════════════════ */

function MiniCtaSection({
  miniCta,
  scrollToContact,
}: {
  miniCta: NonNullable<SubpageContent['miniCta']>;
  scrollToContact: () => void;
}) {
  return (
    <section className="py-16 bg-dark-500" data-section-label="Passt das zu Ihnen?">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {miniCta.headline}
          </motion.h2>
          {miniCta.body && (
            <motion.p
              className="text-light-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {miniCta.body}
            </motion.p>
          )}
          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300 rounded-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {miniCta.buttonText}
            <ArrowRight className="ml-2" size={22} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   AUDIENCES
   ═══════════════════════════════════════════════════════════════════════════ */

function AudiencesSection({ audiences }: { audiences: NonNullable<SubpageContent['audiences']> }) {
  return (
    <section className="py-20 bg-dark-400" data-section-label="Für wen">
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
              {audiences.headline}
            </h2>
            <p className="text-light-200 mb-8">Das lohnt sich besonders für Unternehmen, die:</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 border border-dark-200 shadow-card mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-3">
              {audiences.criteria.map((c, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span className="text-light-200" dangerouslySetInnerHTML={{ __html: c }} />
                </li>
              ))}
            </ul>
          </motion.div>

          <h3 className="text-xl font-heading font-bold text-light-100 text-center mb-6">
            Typische Einsatzbereiche
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {audiences.audiences.map((a, i) => {
              const Icon = ICON_MAP[a.icon ?? 'building'] ?? Building2;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-dark-200 shadow-card text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/15 border border-primary-500/30 text-primary-500 mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-light-100 font-heading font-bold text-sm mb-1">{a.title}</h4>
                  {a.description && <p className="text-light-300 text-xs">{a.description}</p>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   BENEFITS (5 Gründe)
   ═══════════════════════════════════════════════════════════════════════════ */

function BenefitsSection({ benefits }: { benefits: NonNullable<SubpageContent['benefits']> }) {
  return (
    <section className="py-20 bg-dark-500" data-section-label="Vorteile">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100">
              {benefits.headline ?? '5 schnelle Gründe'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.benefits.map((b, i) => {
              const Icon = ICON_MAP[b.icon ?? 'zap'] ?? Zap;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-dark-200 shadow-card text-center h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/15 border border-primary-500/30 text-primary-500 mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-light-100 font-heading font-bold text-base mb-2">{b.title}</h3>
                  {b.description && <p className="text-light-300 text-sm leading-relaxed">{b.description}</p>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   RENTAL
   ═══════════════════════════════════════════════════════════════════════════ */

function RentalSection({ rental }: { rental: NonNullable<SubpageContent['rental']> }) {
  return (
    <section className="py-20 bg-dark-400" data-section-label="Mietmodell">
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
              {rental.headline}
            </h2>
            <p className="text-light-200 max-w-3xl mx-auto">{rental.lead}</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 border border-primary-500/30 mb-8 rounded-2xl shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading font-bold text-light-100 mb-4">Das bedeutet für Sie:</h3>
            <ul className="space-y-3">
              {rental.points.map((p, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-light-200">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {rental.additional?.map((block, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-8 border border-dark-200 shadow-card mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">{block.title}</h3>
              <ul className="space-y-2 text-light-200">
                {block.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start">
                    <svg className="flex-shrink-0 mt-1 mr-2.5" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════════════════════════════════════ */

function ProcessSection({ process }: { process: NonNullable<SubpageContent['process']> }) {
  return (
    <section className="py-20 bg-dark-500" data-section-label="Ablauf">
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
              {process.headline ?? 'So starten wir gemeinsam'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 border border-dark-200 shadow-card relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-heading font-bold text-primary-500/30 mb-3">
                  {step.step}
                </div>
                <h3 className="text-light-100 font-heading font-bold text-base mb-2">{step.title}</h3>
                <p className="text-light-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CROSS-SELL BANNER
   ═══════════════════════════════════════════════════════════════════════════ */

function CrossSellBanner({ crossSell }: { crossSell: NonNullable<SubpageContent['crossSell']> }) {
  return (
    <section className="py-16" style={{ background: '#F4F7F6' }} data-section-label="Ergänzende Leistung">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto rounded-2xl border bg-white p-8 md:p-10 text-center shadow-card"
          style={{ borderColor: 'rgba(14,124,114,0.25)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {crossSell.kicker && (
            <p className="text-xs font-mono tracking-widest uppercase mb-3 font-semibold" style={{ color: '#0E7C72' }}>
              {crossSell.kicker}
            </p>
          )}
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-4" style={{ color: '#0C1210' }}>
            {crossSell.title}
          </h2>
          <p className="mb-6 leading-relaxed" style={{ color: '#404B48' }}>{crossSell.body}</p>
          <a
            href={crossSell.ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold transition-all duration-300 group"
            style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72', border: '1px solid rgba(14,124,114,0.25)' }}
            onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.background = '#0E7C72'; t.style.color = '#fff'; }}
            onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.background = 'rgba(14,124,114,0.08)'; t.style.color = '#0E7C72'; }}
          >
            {crossSell.ctaText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   DEEP DIVE – existing free-form content.sections[]
   ═══════════════════════════════════════════════════════════════════════════ */

function DeepDiveSections({
  sections,
  subpageLabel,
  seoStyle,
}: {
  sections: SubpageContentSection[];
  subpageLabel: string;
  seoStyle: boolean;
}) {
  return (
    <section className="bg-dark-500" data-section-label={`${subpageLabel} im Detail`}>
      <div className="container mx-auto px-4 pt-16 pb-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-3">
            Im Detail
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100">
            {subpageLabel} – tiefer erklärt
          </h2>
        </motion.div>
      </div>

      {sections.map((section, sIdx) => (
        <div key={sIdx} className={sIdx % 2 === 0 ? 'py-12 bg-dark-500' : 'py-12 bg-dark-400'}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {section.headingLevel === 'h2' ? (
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6">
                    {section.heading}
                  </h2>
                ) : (
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-light-100 mb-5">
                    {section.heading}
                  </h3>
                )}
              </motion.div>

              {section.paragraphs.map((p, pIdx) => (
                <motion.p
                  key={pIdx}
                  className={seoStyle ? 'text-light-200 text-sm md:text-base leading-relaxed mb-5' : 'text-light-200 text-base md:text-lg leading-relaxed mb-5'}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: pIdx * 0.05 }}
                  viewport={{ once: true }}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <motion.div
                  className="rounded-xl bg-white border border-dark-200 p-6 my-6 shadow-card"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ul className="space-y-2.5">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}>
                        <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7.5" stroke="#E4E9E7"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#0E7C72" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {section.table && (
                <motion.div
                  className="my-8 overflow-x-auto rounded-2xl border shadow-card"
                  style={{ borderColor: '#E4E9E7' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="py-3 px-4 font-heading font-bold text-sm border-b" style={{ background: '#F4F7F6', color: '#0C1210', borderColor: '#E4E9E7' }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? '#fff' : '#FAFAF9' }}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-3 px-4 text-sm border-b" style={{ color: '#404B48', borderColor: '#E4E9E7' }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SIBLING LINKS
   ═══════════════════════════════════════════════════════════════════════════ */

function SiblingLinksSection({
  links,
  parentLabel,
  isRegional,
  regionSlug,
  parentSlug,
}: {
  links: { text: string; href: string }[];
  parentLabel: string;
  isRegional: boolean;
  regionSlug?: string;
  parentSlug: string;
}) {
  return (
    <section className="py-20 bg-dark-400" data-section-label="Verwandte Themen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-3">
              Verwandte Themen
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100">
              Weitere Themen im Bereich {parentLabel}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={isRegional ? `/leistungsgebiete/${regionSlug}/${parentSlug}/${link.href.split('/').pop()}` : link.href}
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-dark-200 hover:border-primary-500/40 transition-all duration-300 shadow-card"
                whileHover={{ x: 4 }}
              >
                <ChevronRight className="w-5 h-5 text-primary-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-light-100 group-hover:text-primary-400 transition-colors font-heading text-sm">
                  {link.text}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════════════════ */

function FaqSection({ faqs, subpageLabel }: { faqs: { q: string; a: string }[]; subpageLabel: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20" style={{ background: '#F4F7F6' }} data-section-label="FAQ" aria-labelledby="faq-heading">
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
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-bold" style={{ color: '#0C1210' }}>
              Häufige Fragen zu <span style={{ color: '#0E7C72' }}>{subpageLabel}</span>
            </h2>
          </motion.div>

          <div className="space-y-3" role="list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
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
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
                    aria-expanded={isOpen}
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
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════════════════════════ */

function FinalCtaSection({
  ctaText,
  subpageLabel,
  scrollToContact,
  crossServiceLinks,
}: {
  ctaText: string;
  subpageLabel: string;
  scrollToContact: () => void;
  crossServiceLinks: { text: string; href: string }[];
}) {
  return (
    <section className="py-24 bg-dark-400" data-section-label="Jetzt anfragen">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-400 text-xs font-mono tracking-widest uppercase mb-4">Jetzt anfragen</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">{ctaText}</h2>
          <p className="text-light-300 text-sm md:text-base mb-8 leading-relaxed">
            Lassen Sie uns gemeinsam prüfen, wie {subpageLabel} Ihrem Unternehmen helfen kann.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-primary-glow hover:shadow-primary-glow-lg group"
          >
            Jetzt unverbindlich anfragen
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
          <p className="text-light-500 text-xs mt-4">Unverbindlich · kostenlos · ohne Verpflichtung</p>

          {crossServiceLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              {crossServiceLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-primary-400 hover:underline">
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
