'use client';

import React from 'react';
import { Instagram, Facebook, Settings, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { businessInfo } from '@/data/businessInfo';
import { NavItem, SocialLink } from '../types';

const serviceLinks = [
  { title: 'KI-Chatbots', path: '/ki-chatbots' },
  { title: 'KI-Telefonassistent', path: '/telefonassistenten' },
  { title: 'Automatisierungen', path: '/automatisierungen' },
  { title: 'Webseiten', path: '/webseite' },
  { title: 'SEO: Top 3 in Google', path: '/seo-top-3-in-google' },
];

const navItems: NavItem[] = [
  { title: 'Startseite', path: '/' },
  { title: 'Über uns', path: '/ueber-uns' },
  { title: 'Leistungen', path: '/leistungen' },
  { title: 'Leistungsgebiete', path: '/leistungsgebiete' },
  { title: 'Häufige Fragen', path: '/haeufige-fragen' },
  { title: 'Kontakt', path: '/kontakt' },
];

const legalItems: NavItem[] = [
  { title: 'AGBs', path: '/agb' },
  { title: 'Datenschutz', path: '/datenschutz' },
  { title: 'Impressum', path: '/impressum' },
];

const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/pixel.kraftwerk/', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61571247426093', icon: 'facebook' },
];

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case 'instagram':
      return <Instagram size={18} />;
    case 'facebook':
      return <Facebook size={18} />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 border-t border-dark-200">
      <div className="container mx-auto px-4 pt-10 pb-6 md:pt-12 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Spalte 1: Logo + Claim + Social */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="text-light-400 text-sm mt-3 mb-4">
              Zukunft. Automatisiert. Jetzt.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="text-light-300 hover:text-primary-400 transition-colors duration-200 p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
            <a
              href="https://g.page/r/CUl0X04KsO71EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-primary-400 hover:text-primary-300 hover:underline text-xs font-heading font-bold"
            >
              Bei Google bewerten
            </a>
          </div>

          {/* Spalte 2: Leistungen */}
          <div>
            <h2 className="text-light-100 font-heading font-bold text-sm mb-3">Leistungen</h2>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <a
                    href={service.path}
                    className="text-light-300 text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Seiten */}
          <div>
            <h2 className="text-light-100 font-heading font-bold text-sm mb-3">Seiten</h2>
            <nav aria-label="Seitennavigation">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-light-300 text-sm hover:text-primary-400 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Spalte 4: Kontakt (NAP) */}
          <div>
            <h2 className="text-light-100 font-heading font-bold text-sm mb-3">Kontakt</h2>
            <address className="not-italic space-y-2 text-sm text-light-300">
              <p className="text-light-100 font-heading font-semibold">{businessInfo.name}</p>
              <p
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">{businessInfo.address.streetAddress}</span>
                <br />
                <span itemProp="postalCode">{businessInfo.address.postalCode}</span>{' '}
                <span itemProp="addressLocality">{businessInfo.address.addressLocality}</span>
              </p>
              <p>
                <a
                  href={`tel:${businessInfo.contact.telephoneE164}`}
                  itemProp="telephone"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors duration-200"
                >
                  <Phone size={14} className="text-primary-500 flex-shrink-0" />
                  {businessInfo.contact.telephone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  itemProp="email"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors duration-200"
                >
                  <Mail size={14} className="text-primary-500 flex-shrink-0" />
                  {businessInfo.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin size={14} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span itemProp="openingHours">{businessInfo.openingHoursDisplay}</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar: Rechtliches + Copyright */}
        <div className="border-t border-dark-200 mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <nav aria-label="Rechtliche Informationen">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {legalItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="text-light-400 text-xs hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-light-400 text-xs">
            &copy; {currentYear} {businessInfo.name}
          </p>
        </div>
      </div>

      {/* Datenschutz-Einstellrad */}
      <div className="fixed bottom-4 left-4 z-[9999]">
        <a
          href="/datenschutz-einstellungen"
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
