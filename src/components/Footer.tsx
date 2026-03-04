'use client';

import React from 'react';
import { Instagram, Facebook, MessageCircle, Settings } from 'lucide-react';
import Logo from './Logo';
import NAPInfo from './NAPInfo';
import { NavItem, SocialLink } from '../types';

const navItems: NavItem[] = [
  { title: 'Startseite', path: '/' },
  { title: 'Über uns', path: '/about' },
  { title: 'Leistungen', path: '/services' },
  { title: 'Leistungsgebiete', path: '/leistungsgebiete' },
  { title: 'Features', path: '/features' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Kontakt', path: '/contact' },
];

const serviceLinks = [
  { title: 'KI-Chatbots', path: '/ki-chatbots' },
  { title: 'KI-Telefonassistent', path: '/telefonassistenten' },
  { title: 'Automatisierungen', path: '/automatisierungen' },
  { title: 'Webseiten', path: '/webseite' },
  { title: 'SEO: Top 3 in Google', path: '/seo-top-3-in-google' },
];

const legalItems: NavItem[] = [
  { title: 'AGBs', path: '/agb' },
  { title: 'Datenschutzerklärung', path: '/privacy' },
  { title: 'Impressum', path: '/imprint' },
  { title: 'Datenschutz-Einstellungen', path: '/privacy-settings' },
];

const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/pixel.kraftwerk/', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61571247426093', icon: 'facebook' },
  { platform: 'Telegram', url: '#', icon: 'telegram' },
];

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case 'instagram':
      return <Instagram size={20} />;
    case 'facebook':
      return <Facebook size={20} />;
    case 'telegram':
      return <MessageCircle size={20} />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 border-t border-dark-200 pt-10 pb-6 md:pt-12 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-10">
          {/* Kontakt + Leistungen – wie vorher, ohne Social */}
          <div className="lg:col-span-2">
            <h2 className="text-primary-500 font-heading font-bold mb-3 text-base">Kontakt</h2>
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10">
              <NAPInfo variant="minimal" showIcons={false} className="mb-4 sm:mb-0" />

              <div className="mt-2 sm:mt-0">
                <h3 className="text-light-400 font-heading font-semibold mb-2 text-[11px] uppercase tracking-wide">
                  Leistungen
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {serviceLinks.map((service) => (
                    <li key={service.path}>
                      <a
                        href={service.path}
                        className="text-light-300 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-400 rounded"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Seiten */}
          <div>
            <h2 className="text-primary-500 font-heading font-bold mb-3 text-base">Seiten</h2>
            <nav aria-label="Seitennavigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-light-100 text-sm hover:text-primary-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-400 rounded"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Logo / Claim + Social + GBP rechts */}
          <div className="hidden lg:flex flex-col items-end text-right">
            <Logo />
            <p className="text-light-300 mt-4 text-sm">
              Zukunft. Automatisiert. Jetzt.
            </p>
            <div className="flex space-x-3 mt-4 justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  aria-label={link.platform}
                  className="text-light-100 hover:text-primary-400 hover:scale-110 transition-all duration-200 p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-400"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
            <p className="mt-3 text-light-300 text-xs">
              <a
                href="https://g.page/r/CUl0X04KsO71EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 hover:underline font-heading font-bold"
              >
                Pixel&nbsp;Kraftwerk bei Google bewerten
              </a>
            </p>
          </div>

          {/* Rechtliches – wie vorher unten, volle Breite */}
          <div className="lg:col-span-4 md:col-span-2 lg:mt-2">
            <h2 className="text-primary-500 font-heading font-bold mb-3 text-base">Rechtliches</h2>
            <nav aria-label="Rechtliche Informationen">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {legalItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-light-100 text-sm hover:text-primary-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-400 rounded"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-dark-200 pt-6 md:pt-8 text-center">
          <p className="text-light-400 text-sm">
            &copy; {currentYear} PIXEL_KRAFTWERK. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
      {/* Datenschutz-Einstellrad – ersetzt Proven-Expert-Widget unten links */}
      <div className="fixed bottom-4 left-4 z-[9999]">
        <a
          href="/privacy-settings"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-dark-500/95 border border-dark-200 text-light-100 shadow-lg hover:bg-dark-400 hover:border-primary-500/60 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
          aria-label="Datenschutz-Einstellungen öffnen"
        >
          <Settings size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;