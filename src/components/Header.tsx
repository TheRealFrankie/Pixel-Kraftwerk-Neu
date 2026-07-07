'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, ChevronRight,
  MessageSquare, Phone, Workflow, Globe, Search, MapPin, ArrowRight, Users,
} from 'lucide-react';
import Logo from './Logo';
import { getSubpagesForService, getGlobalRoutePrefix } from '../data/serviceSubpages';
import { businessInfo } from '../data/businessInfo';

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

const NAV_COLOR = '#404B48';
const INK = '#0C1210';
const MUTED = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        borderBottom: scrolled ? `1px solid ${BORDER}` : 'none',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="/"
              className="font-heading text-sm transition-colors duration-200 py-2 px-3 hover:opacity-70"
              style={{ color: NAV_COLOR }}
            >
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
                className="font-heading text-sm transition-colors duration-200 py-2 px-3 inline-flex items-center gap-1 hover:opacity-70"
                style={{ color: NAV_COLOR }}
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
                <div
                  className="w-[680px] rounded-xl shadow-lg overflow-hidden"
                  style={{ background: '#fff', border: `1px solid ${BORDER}` }}
                >
                  <div className="flex">
                    {/* Left panel */}
                    <div className="w-[280px] py-2" style={{ borderRight: `1px solid ${BORDER}` }}>
                      {megaServices.map((service) => {
                        const isActive = hoveredService === service.serviceSlug;
                        const hasSubpages = getSubpagesForService(service.serviceSlug).length > 0;
                        return (
                          <a
                            key={service.path}
                            href={service.path}
                            className="flex items-center gap-2.5 px-4 py-2.5 transition-colors duration-150 group"
                            style={{
                              background: isActive ? '#E7F4F2' : 'transparent',
                              color: isActive ? PETROL : INK,
                            }}
                            onMouseEnter={() => setHoveredService(service.serviceSlug)}
                          >
                            <span
                              className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors duration-150"
                              style={{
                                background: isActive ? 'rgba(14,124,114,0.15)' : 'rgba(14,124,114,0.07)',
                                color: PETROL,
                              }}
                            >
                              {service.icon}
                            </span>
                            <div className="min-w-0 flex-1">
                              <span className="text-sm font-heading font-semibold block truncate">{service.title}</span>
                              <span className="text-xs block truncate" style={{ color: MUTED }}>{service.desc}</span>
                            </div>
                            {hasSubpages && (
                              <ChevronRight
                                size={14}
                                className="flex-shrink-0 transition-colors duration-150"
                                style={{ color: isActive ? PETROL : '#B5BDBA' }}
                              />
                            )}
                          </a>
                        );
                      })}
                    </div>

                    {/* Right panel */}
                    <div className="flex-1 py-2 px-3 min-h-[280px]">
                      {(() => {
                        const activeSlug = hoveredService ?? megaServices[0].serviceSlug;
                        const activeService = megaServices.find((s) => s.serviceSlug === activeSlug);
                        const subLinks = getAllSubpageLinks(activeSlug);
                        if (!activeService) return null;
                        return (
                          <>
                            <div className="px-2 pt-1 pb-3 mb-2" style={{ borderBottom: `1px solid ${BORDER}` }}>
                              <span className="text-xs font-heading font-semibold uppercase tracking-wider" style={{ color: PETROL }}>
                                {activeService.title}
                              </span>
                            </div>
                            {subLinks.length > 0 ? (
                              <div className="space-y-0.5">
                                {subLinks.map((sub) => (
                                  <a
                                    key={sub.href}
                                    href={sub.href}
                                    className="flex items-center gap-2.5 px-2 py-2 rounded-lg transition-colors duration-150 group hover:bg-gray-50"
                                    style={{ color: NAV_COLOR }}
                                  >
                                    <ChevronRight size={14} style={{ color: `${PETROL}80`, flexShrink: 0 }} />
                                    <span className="text-sm">{sub.label}</span>
                                  </a>
                                ))}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center h-full px-4">
                                <p className="text-sm text-center" style={{ color: MUTED }}>{activeService.desc}</p>
                              </div>
                            )}
                            <div className="mt-3 pt-2" style={{ borderTop: `1px solid ${BORDER}` }}>
                              <a
                                href={activeService.path}
                                className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-heading font-semibold hover:bg-gray-50 transition-colors duration-150"
                                style={{ color: PETROL }}
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

                  {/* Footer bar */}
                  <div
                    className="px-3 py-2 flex items-center justify-between"
                    style={{ borderTop: `1px solid ${BORDER}` }}
                  >
                    <a
                      href="/leistungsgebiete"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm font-heading font-semibold hover:bg-gray-50 transition-colors duration-150"
                      style={{ color: INK }}
                    >
                      <MapPin size={16} style={{ color: PETROL }} />
                      <span>Leistungsgebiete</span>
                      <ArrowRight size={14} style={{ color: MUTED }} />
                    </a>
                    <a
                      href="/leistungen"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm font-heading font-semibold hover:bg-gray-50 transition-colors duration-150"
                      style={{ color: INK }}
                    >
                      <span>Alle Leistungen</span>
                      <ArrowRight size={14} style={{ color: MUTED }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="/ueber-uns" className="font-heading text-sm transition-colors duration-200 py-2 px-3 hover:opacity-70" style={{ color: NAV_COLOR }}>
              Über uns
            </a>
            <a href="/haeufige-fragen" className="font-heading text-sm transition-colors duration-200 py-2 px-3 hover:opacity-70" style={{ color: NAV_COLOR }}>
              FAQ
            </a>
            <a href="/kontakt" className="font-heading text-sm transition-colors duration-200 py-2 px-3 hover:opacity-70" style={{ color: NAV_COLOR }}>
              Kontakt
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/kontakt"
              className="inline-flex items-center px-5 py-2 rounded-lg font-heading font-bold text-sm transition-colors duration-200 whitespace-nowrap"
              style={{ background: PETROL, color: '#fff' }}
            >
              Erstgespräch sichern
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-1">
            <a
              href={`tel:${businessInfo.contact.telephoneE164}`}
              className="transition-colors duration-200 p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
              style={{ color: PETROL }}
              aria-label={`Anrufen: ${businessInfo.contact.telephone}`}
            >
              <Phone size={20} />
            </a>
            <button
              className="transition-colors duration-200 p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
              style={{ color: INK }}
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
          isMenuOpen ? 'max-h-[85vh]' : 'max-h-0'
        }`}
        style={{ borderTop: isMenuOpen ? `1px solid ${BORDER}` : 'none' }}
      >
        <nav className="overflow-y-auto max-h-[80vh]" style={{ background: '#fff' }}>
          <div className="container mx-auto px-4 py-4 space-y-1">
            <a
              href="/"
              className="block font-heading py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-gray-50"
              style={{ color: INK }}
              onClick={toggleMenu}
            >
              Startseite
            </a>

            {/* Mobile Leistungen */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full font-heading py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-gray-50"
                style={{ color: INK }}
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
                <div className="ml-3 pl-3 space-y-0.5 pb-2" style={{ borderLeft: `2px solid rgba(14,124,114,0.3)` }}>
                  <a
                    href="/leistungen"
                    className="flex items-center gap-2 py-2.5 px-2 text-sm font-heading font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ color: PETROL }}
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
                            className="flex-1 flex items-center gap-2.5 py-2.5 px-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                            style={{ color: NAV_COLOR }}
                            onClick={toggleMenu}
                          >
                            <span style={{ color: PETROL }}>{service.icon}</span>
                            {service.title}
                          </a>
                          {hasSubpages && (
                            <button
                              onClick={() => setExpandedMobileService(isExpanded ? null : service.serviceSlug)}
                              className="p-2 transition-colors hover:opacity-70"
                              style={{ color: MUTED }}
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
                          <div className="ml-8 pl-3 space-y-0.5 pb-1" style={{ borderLeft: `1px solid ${BORDER}` }}>
                            {subLinks.map((sub) => (
                              <a
                                key={sub.href}
                                href={sub.href}
                                className="block text-xs py-2.5 px-2 rounded transition-colors hover:opacity-70"
                                style={{ color: MUTED }}
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
                    className="flex items-center gap-2.5 py-2.5 px-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ color: NAV_COLOR }}
                    onClick={toggleMenu}
                  >
                    <span style={{ color: PETROL }}><MapPin size={18} /></span>
                    Leistungsgebiete
                  </a>
                </div>
              </div>
            </div>

            <a href="/ueber-uns" className="block font-heading py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-gray-50" style={{ color: INK }} onClick={toggleMenu}>
              Über uns
            </a>
            <a href="/haeufige-fragen" className="block font-heading py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-gray-50" style={{ color: INK }} onClick={toggleMenu}>
              Häufige Fragen
            </a>
            <a href="/kontakt" className="block font-heading py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-gray-50" style={{ color: INK }} onClick={toggleMenu}>
              Kontakt
            </a>

            <div className="pt-3">
              <a
                href="/kontakt"
                className="block text-center font-heading font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                style={{ background: PETROL, color: '#fff' }}
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
