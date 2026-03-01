'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Phone, Workflow, Globe, Settings, Search } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { NavItem } from '../types';

interface ServiceLink {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const serviceLinks: ServiceLink[] = [
  { title: 'KI-Chatbots', path: '/ki-chatbots', icon: <MessageSquare size={18} /> },
  { title: 'KI-Telefonassistent', path: '/telefonassistenten', icon: <Phone size={18} /> },
  { title: 'Automatisierungen', path: '/automatisierungen', icon: <Workflow size={18} /> },
  { title: 'Webseiten', path: '/webseite', icon: <Globe size={18} /> },
  { title: 'SEO: Top 3 in Google', path: '/seo-top-3-in-google', icon: <Search size={18} /> },
];

const navItems: NavItem[] = [
  { title: 'Startseite', path: '/' },
  { title: 'Über uns', path: '/about' },
  { title: 'Leistungsgebiete', path: '/leistungsgebiete' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Kontakt', path: '/contact' },
  { title: 'Impressum', path: '/imprint' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-500/95 backdrop-blur-sm shadow-lg border-b border-dark-200/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex space-x-6 md:space-x-8 items-center">
            <li>
              <a
                href="/"
                className="text-light-100 hover:text-primary-400 font-heading transition-colors duration-200 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 rounded-lg"
              >
                Startseite
              </a>
            </li>

            <li
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/services"
                className="flex items-center text-light-100 hover:text-primary-400 font-heading transition-colors duration-200 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 rounded-lg"
              >
                Unsere Leistungen
                <ChevronDown size={16} className="ml-1" />
              </a>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-dark-400 border border-dark-100 shadow-xl animate-fade-in">
                  <div className="py-2">
                    {serviceLinks.map((service) => (
                      <a
                        key={service.path}
                        href={service.path}
                        className="flex items-center px-4 py-3 text-light-100 hover:text-primary-400 hover:bg-dark-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset"
                      >
                        <span className="text-primary-500 mr-3">{service.icon}</span>
                        <span className="text-sm">{service.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {navItems.slice(1).map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="text-light-100 hover:text-primary-400 font-heading transition-colors duration-200 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 rounded-lg"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <li>
              <ThemeToggle />
            </li>
            <li>
              <a
                href="/privacy-settings"
                className="text-light-100 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                aria-label="Cookie-Einstellungen"
              >
                <Settings size={20} />
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-light-100 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-dark-400 animate-fade-in">
          <ul className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            <li>
              <a
                href="/"
                className="block text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                onClick={toggleMenu}
              >
                Startseite
              </a>
            </li>

            <li>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-400"
              >
                Unsere Leistungen
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileServicesOpen && (
                <ul className="ml-4 mt-2 space-y-1 border-l-2 border-primary-500/30 animate-fade-in">
                  {serviceLinks.map((service) => (
                    <li key={service.path}>
                      <a
                        href={service.path}
                        className="flex items-center py-3 pl-4 text-light-200 hover:text-primary-400 transition-colors duration-200 min-h-[44px]"
                        onClick={toggleMenu}
                      >
                        <span className="text-primary-500 mr-2">{service.icon}</span>
                        <span className="text-sm">{service.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navItems.slice(1).map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="block text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              </li>
            ))}

            <li className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/privacy-settings"
                className="block text-light-100 hover:text-primary-400 font-heading py-3 px-3 rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                onClick={toggleMenu}
              >
                Cookie-Einstellungen
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;