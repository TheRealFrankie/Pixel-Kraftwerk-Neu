'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Phone, Workflow, Globe, Search, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

interface ServiceLink {
  title: string;
  path: string;
  icon: React.ReactNode;
  desc: string;
}

const serviceLinks: ServiceLink[] = [
  { title: 'KI-Chatbots', path: '/ki-chatbots', icon: <MessageSquare size={18} />, desc: 'Digitale Kundenassistenz' },
  { title: 'Telefonassistenten', path: '/telefonassistenten', icon: <Phone size={18} />, desc: 'KI-Anrufannahme 24/7' },
  { title: 'Automatisierungen', path: '/automatisierungen', icon: <Workflow size={18} />, desc: 'Prozesse & Workflows' },
  { title: 'Webseiten', path: '/webseite', icon: <Globe size={18} />, desc: 'Modernes Webdesign' },
  { title: 'SEO: Top 3', path: '/seo-top-3-in-google', icon: <Search size={18} />, desc: 'Lokale Sichtbarkeit' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 10;
      if (next !== scrolled) setScrolled(next);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

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
          ? 'bg-dark-500/95 backdrop-blur-md shadow-lg border-b border-dark-200/50'
          : 'bg-dark-500/60 backdrop-blur-sm'
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

            {/* Leistungen Dropdown */}
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
                <div className="w-80 bg-dark-400/95 backdrop-blur-md border border-dark-200/60 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {serviceLinks.map((service) => (
                      <a
                        key={service.path}
                        href={service.path}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-light-100 hover:bg-dark-300/80 transition-colors duration-150 group"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10 text-primary-500 group-hover:bg-primary-500/20 transition-colors duration-150">
                          {service.icon}
                        </span>
                        <div>
                          <span className="text-sm font-heading font-semibold block">{service.title}</span>
                          <span className="text-xs text-light-400">{service.desc}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="border-t border-dark-200/40 p-2">
                    <a
                      href="/leistungsgebiete"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-light-100 hover:bg-dark-300/80 transition-colors duration-150 group"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10 text-primary-500 group-hover:bg-primary-500/20 transition-colors duration-150">
                        <MapPin size={18} />
                      </span>
                      <span className="text-sm font-heading font-semibold">Leistungsgebiete</span>
                      <ArrowRight size={14} className="ml-auto text-light-400 group-hover:text-primary-400 transition-colors" />
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
          isMenuOpen ? 'max-h-[80vh] border-t border-dark-200/50' : 'max-h-0'
        }`}
      >
        <nav className="bg-dark-400/95 backdrop-blur-md">
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
                  isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                  {serviceLinks.map((service) => (
                    <a
                      key={service.path}
                      href={service.path}
                      className="flex items-center gap-2.5 py-2.5 px-2 text-light-200 hover:text-primary-400 text-sm rounded-lg hover:bg-dark-300/50 transition-colors"
                      onClick={toggleMenu}
                    >
                      <span className="text-primary-500">{service.icon}</span>
                      {service.title}
                    </a>
                  ))}
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
