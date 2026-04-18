'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, ChevronRight,
  MessageSquare, Phone, Workflow, Globe, Search, MapPin, ArrowRight, Users,
} from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { getSubpagesForService, getGlobalRoutePrefix } from '../data/serviceSubpages';

interface MegaService {
  title: string;
  path: string;
  icon: React.ReactNode;
  desc: string;
  serviceSlug: string;
}

const megaServices: MegaService[] = [
  { title: 'KI-Chatbots', path: '/ki-chatbots', icon: <MessageSquare size={18} />, desc: 'Digitale Kundenassistenz', serviceSlug: 'ki-chatbots' },
  { title: 'Telefonassistenten', path: '/telefonassistenten', icon: <Phone size={18} />, desc: 'KI-Anrufannahme 24/7', serviceSlug: 'telefonassistenten' },
  { title: 'Automatisierungen', path: '/automatisierungen', icon: <Workflow size={18} />, desc: 'Prozesse & Workflows', serviceSlug: 'automatisierungen' },
  { title: 'Webseiten', path: '/webseite', icon: <Globe size={18} />, desc: 'Modernes Webdesign', serviceSlug: 'webseiten' },
  { title: 'SEO: Top 3', path: '/seo-top-3-in-google', icon: <Search size={18} />, desc: 'Lokale Sichtbarkeit', serviceSlug: 'seo-top-3' },
  { title: 'CRM-Systeme', path: '/crm-systeme', icon: <Users size={18} />, desc: 'Kundenverwaltung & Leads', serviceSlug: 'crm-systeme' },
];


function getAllSubpageLinks(serviceSlug: string) {
  const subpages = getSubpagesForService(serviceSlug);
  if (subpages.length === 0) return [];
  const prefix = getGlobalRoutePrefix(serviceSlug);
  return subpages.map((sp) => ({
    label: sp.label,
    href: `${prefix}/${sp.slug}`,
  }));
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 10;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 10);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
    setExpandedMobileService(null);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const linkClass =
    'text-light-100 hover:text-primary-400 font-heading text-sm transition-colors duration-200 py-2';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-500 backdrop-blur-md shadow-lg border-b border-dark-200/50'
          : 'bg-dark-500/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="/" className={linkClass + ' px-3'}>
              Startseite
            </a>

            {/* Mega-Menu Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/leistungen"
                className={linkClass + ' px-3 inline-flex items-center gap-1'}
              >
                Leistungen
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </a>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  isServicesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="w-[680px] bg-dark-400/95 backdrop-blur-md border border-dark-200/60 rounded-xl shadow-2xl overflow-hidden">
                  <div className="flex">
                    {/* Left panel – service list */}
                    <div className="w-[280px] border-r border-dark-200/40 py-2">
                      {megaServices.map((service) => {
                        const isActive = hoveredService === service.serviceSlug;
                        const hasSubpages = getSubpagesForService(service.serviceSlug).length > 0;
                        return (
                          <a
                            key={service.path}
                            href={service.path}
                            className={`flex items-center gap-2.5 px-4 py-2.5 transition-colors duration-150 group ${
                              isActive
                                ? 'bg-dark-300/80 text-primary-400'
                                : 'text-light-100 hover:bg-dark-300/50'
                            }`}
                            onMouseEnter={() => setHoveredService(service.serviceSlug)}
                          >
                            <span className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors duration-150 ${
                              isActive
                                ? 'bg-primary-500/20 text-primary-400'
                                : 'bg-primary-500/10 text-primary-500 group-hover:bg-primary-500/15'
                            }`}>
                              {service.icon}
                            </span>
                            <div className="min-w-0 flex-1">
                              <span className="text-sm font-heading font-semibold block truncate">{service.title}</span>
                              <span className="text-xs text-light-400 block truncate">{service.desc}</span>
                            </div>
                            {hasSubpages && (
                              <ChevronRight size={14} className={`flex-shrink-0 transition-colors duration-150 ${
                                isActive ? 'text-primary-400' : 'text-light-400/50'
                              }`} />
                            )}
                          </a>
                        );
                      })}
                    </div>

                    {/* Right panel – subpages of hovered service */}
                    <div className="flex-1 py-2 px-3 min-h-[280px]">
                      {(() => {
                        const activeSlug = hoveredService ?? megaServices[0].serviceSlug;
                        const activeService = megaServices.find((s) => s.serviceSlug === activeSlug);
                        const subLinks = getAllSubpageLinks(activeSlug);

                        if (!activeService) return null;

                        return (
                          <>
                            <div className="px-2 pt-1 pb-3 border-b border-dark-200/30 mb-2">
                              <span className="text-xs text-primary-400 font-heading font-semibold uppercase tracking-wider">
                                {activeService.title}
                              </span>
                            </div>
                            {subLinks.length > 0 ? (
                              <div className="space-y-0.5">
                                {subLinks.map((sub) => (
                                  <a
                                    key={sub.href}
                                    href={sub.href}
                                    className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-light-200 hover:bg-dark-300/60 hover:text-primary-400 transition-colors duration-150 group"
                                  >
                                    <ChevronRight size={14} className="text-primary-500/60 group-hover:text-primary-400 transition-colors flex-shrink-0" />
                                    <span className="text-sm">{sub.label}</span>
                                  </a>
                                ))}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center h-full px-4">
                                <p className="text-sm text-light-400 text-center">
                                  {activeService.desc}
                                </p>
                              </div>
                            )}
                            <div className="mt-3 pt-2 border-t border-dark-200/30">
                              <a
                                href={activeService.path}
                                className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-primary-400 hover:bg-dark-300/50 transition-colors duration-150 font-heading font-semibold"
                              >
                                Alle {activeService.title} ansehen
                                <ArrowRight size={14} />
                              </a>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                  <div className="border-t border-dark-200/40 px-3 py-2 flex items-center justify-between">
                    <a
                      href="/leistungsgebiete"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-light-100 hover:bg-dark-300/80 transition-colors duration-150 group text-sm"
                    >
                      <MapPin size={16} className="text-primary-500" />
                      <span className="font-heading font-semibold">Leistungsgebiete</span>
                      <ArrowRight size={14} className="text-light-400 group-hover:text-primary-400 transition-colors" />
                    </a>
                    <a
                      href="/leistungen"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-light-100 hover:bg-dark-300/80 transition-colors duration-150 group text-sm"
                    >
                      <span className="font-heading font-semibold">Alle Leistungen</span>
                      <ArrowRight size={14} className="text-light-400 group-hover:text-primary-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="/ueber-uns" className={linkClass + ' px-3'}>
              Über uns
            </a>
            <a href="/haeufige-fragen" className={linkClass + ' px-3'}>
              FAQ
            </a>
            <a href="/kontakt" className={linkClass + ' px-3'}>
              Kontakt
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/kontakt"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-primary-500 text-dark-500 font-heading font-bold text-sm hover:bg-primary-400 transition-colors duration-200 whitespace-nowrap"
            >
              Erstgespräch sichern
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="text-light-100 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[85vh] border-t border-dark-200/50' : 'max-h-0'
        }`}
      >
        <nav className="bg-dark-400/95 backdrop-blur-md overflow-y-auto max-h-[80vh]">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <a
              href="/"
              className="block text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Startseite
            </a>

            {/* Mobile Leistungen Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200"
              >
                Leistungen
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-3 pl-3 border-l-2 border-primary-500/30 space-y-0.5 pb-2">
                  <a
                    href="/leistungen"
                    className="flex items-center gap-2 py-2.5 px-2 text-primary-400 text-sm font-heading font-semibold rounded-lg hover:bg-dark-300/50 transition-colors"
                    onClick={toggleMenu}
                  >
                    Alle Leistungen
                  </a>

                  {megaServices.map((service) => {
                    const subLinks = getAllSubpageLinks(service.serviceSlug);
                    const hasSubpages = subLinks.length > 0;
                    const isExpanded = expandedMobileService === service.serviceSlug;

                    return (
                      <div key={service.path}>
                        <div className="flex items-center">
                          <a
                            href={service.path}
                            className="flex-1 flex items-center gap-2.5 py-2.5 px-2 text-light-200 hover:text-primary-400 text-sm rounded-lg hover:bg-dark-300/50 transition-colors"
                            onClick={toggleMenu}
                          >
                            <span className="text-primary-500">{service.icon}</span>
                            {service.title}
                          </a>
                          {hasSubpages && (
                            <button
                              onClick={() => setExpandedMobileService(isExpanded ? null : service.serviceSlug)}
                              className="p-2 text-light-400 hover:text-primary-400 transition-colors"
                              aria-label={`${service.title} Unterthemen ${isExpanded ? 'schließen' : 'öffnen'}`}
                            >
                              <ChevronRight
                                size={14}
                                className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                              />
                            </button>
                          )}
                        </div>
                        {hasSubpages && isExpanded && (
                          <div className="ml-8 pl-3 border-l border-dark-200/40 space-y-0.5 pb-1">
                            {subLinks.map((sub) => (
                              <a
                                key={sub.href}
                                href={sub.href}
                                className="block text-xs text-light-400 hover:text-primary-400 py-1.5 px-2 rounded transition-colors"
                                onClick={toggleMenu}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <a
                    href="/leistungsgebiete"
                    className="flex items-center gap-2.5 py-2.5 px-2 text-light-200 hover:text-primary-400 text-sm rounded-lg hover:bg-dark-300/50 transition-colors"
                    onClick={toggleMenu}
                  >
                    <span className="text-primary-500"><MapPin size={18} /></span>
                    Leistungsgebiete
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/ueber-uns"
              className="block text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Über uns
            </a>
            <a
              href="/haeufige-fragen"
              className="block text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Häufige Fragen
            </a>
            <a
              href="/kontakt"
              className="block text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Kontakt
            </a>

            <div className="pt-3">
              <a
                href="/kontakt"
                className="block text-center bg-primary-500 text-dark-500 font-heading font-bold py-3 px-4 rounded-lg hover:bg-primary-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Erstgespräch sichern
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
