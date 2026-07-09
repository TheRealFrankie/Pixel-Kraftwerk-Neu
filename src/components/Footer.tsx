'use client';

import React from 'react';
import { Instagram, Facebook, Settings, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';
import { businessInfo } from '@/data/businessInfo';
import type { NavItem, SocialLink } from '../types';
import { useStickyCtaVisibility } from '@/hooks/useStickyCtaVisibility';

const INK_BG    = '#0B1512';
const INK_TEXT  = '#E7F4F2';
const INK_MUTED = '#8FB5AE';
const INK_BORDER = '#1E3530';
const PETROL_LIGHT = '#3DADA4';

const serviceLinks = [
  { title: 'KI-Chatbots', path: '/ki-chatbots' },
  { title: 'KI-Telefonassistent', path: '/telefonassistenten' },
  { title: 'Automatisierungen', path: '/automatisierungen' },
  { title: 'Webseiten', path: '/webseite' },
  { title: 'SEO: Top 3 in Google', path: '/seo-top-3-in-google' },
  { title: 'CRM-Systeme', path: '/crm-systeme' },
];

const regionLinks = [
  { title: 'Leipzig', path: '/leistungsgebiete/leipzig' },
  { title: 'Groitzsch', path: '/leistungsgebiete/groitzsch' },
  { title: 'Markkleeberg', path: '/leistungsgebiete/markkleeberg' },
  { title: 'Borna', path: '/leistungsgebiete/borna' },
  { title: 'Zwenkau', path: '/leistungsgebiete/zwenkau' },
  { title: 'Alle Gebiete', path: '/leistungsgebiete' },
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
  if (icon === 'instagram') return <Instagram size={18} />;
  if (icon === 'facebook') return <Facebook size={18} />;
  return null;
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { stickyCtaVisible } = useStickyCtaVisibility();

  const linkStyle: React.CSSProperties = { color: INK_MUTED, fontSize: '0.875rem' };
  const hoverLink = (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = PETROL_LIGHT);
  const leaveLink = (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = INK_MUTED);

  return (
    <footer style={{ background: INK_BG, borderTop: `1px solid ${INK_BORDER}` }}>
      <div className="container mx-auto px-4 pt-10 pb-6 md:pt-12 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Spalte 1: Logo + Claim + Social */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="text-sm mt-3 mb-4" style={{ color: INK_MUTED }}>
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
                  style={{ color: INK_MUTED, padding: '0.25rem', borderRadius: '0.5rem' }}
                  className="transition-colors duration-200"
                  onMouseEnter={hoverLink}
                  onMouseLeave={leaveLink}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
            <a
              href="https://g.page/r/CUl0X04KsO71EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs font-heading font-bold hover:underline"
              style={{ color: PETROL_LIGHT }}
            >
              Bei Google bewerten
            </a>
          </div>

          {/* Spalte 2: Leistungen */}
          <div>
            <h2 className="font-heading font-bold text-sm mb-3" style={{ color: INK_TEXT }}>
              Leistungen
            </h2>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <a href={service.path} style={linkStyle} className="transition-colors duration-200" onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Seiten */}
          <div>
            <h2 className="font-heading font-bold text-sm mb-3" style={{ color: INK_TEXT }}>
              Seiten
            </h2>
            <nav aria-label="Seitennavigation">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a href={item.path} style={linkStyle} className="transition-colors duration-200" onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Spalte 4: Leistungsgebiete */}
          <div>
            <h2 className="font-heading font-bold text-sm mb-3" style={{ color: INK_TEXT }}>
              Leistungsgebiete
            </h2>
            <ul className="space-y-2">
              {regionLinks.map((region) => (
                <li key={region.path}>
                  <a href={region.path} style={linkStyle} className="transition-colors duration-200" onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
                    {region.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 5: Kontakt */}
          <div>
            <h2 className="font-heading font-bold text-sm mb-3" style={{ color: INK_TEXT }}>
              Kontakt
            </h2>
            <address className="not-italic space-y-2 text-sm" style={{ color: INK_MUTED }}>
              <p className="font-heading font-semibold" style={{ color: INK_TEXT }}>
                {businessInfo.name}
              </p>
              <p>
                <a
                  href={businessInfo.socialMedia.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors duration-200"
                  style={{ color: INK_MUTED }}
                  onMouseEnter={hoverLink}
                  onMouseLeave={leaveLink}
                >
                  <MapPin size={14} style={{ color: PETROL_LIGHT }} className="flex-shrink-0 mt-0.5" />
                  <span>
                    {businessInfo.address.streetAddress}
                    <br />
                    {businessInfo.address.postalCode} {businessInfo.address.addressLocality}
                  </span>
                </a>
              </p>
              <p>
                <a
                  href={`tel:${businessInfo.contact.telephoneE164}`}
                  className="flex items-center gap-2 transition-colors duration-200"
                  style={{ color: INK_MUTED }}
                  onMouseEnter={hoverLink}
                  onMouseLeave={leaveLink}
                >
                  <Phone size={14} style={{ color: PETROL_LIGHT }} className="flex-shrink-0" />
                  {businessInfo.contact.telephone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="flex items-center gap-2 transition-colors duration-200"
                  style={{ color: INK_MUTED }}
                  onMouseEnter={hoverLink}
                  onMouseLeave={leaveLink}
                >
                  <Mail size={14} style={{ color: PETROL_LIGHT }} className="flex-shrink-0" />
                  {businessInfo.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <Clock size={14} style={{ color: PETROL_LIGHT }} className="flex-shrink-0 mt-0.5" />
                {businessInfo.openingHoursDisplay}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: `1px solid ${INK_BORDER}` }}
        >
          <nav aria-label="Rechtliche Informationen">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {legalItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="text-xs transition-colors duration-200"
                    style={{ color: INK_MUTED }}
                    onMouseEnter={hoverLink}
                    onMouseLeave={leaveLink}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs" style={{ color: INK_MUTED }}>
            &copy; {currentYear} {businessInfo.name}
          </p>
        </div>
      </div>

      {/* Datenschutz-Einstellrad */}
      <div
        className={`fixed bottom-6 left-3 z-[9999] md:bottom-4 transition-opacity duration-300 ${stickyCtaVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a
          href="/datenschutz-einstellungen"
          className="flex items-center justify-center w-12 h-12 rounded-full shadow-elevation transition-colors duration-200 focus:outline-none"
          style={{ background: '#fff', border: '1px solid #E4E9E7', color: '#404B48' }}
          aria-label="Datenschutz-Einstellungen öffnen"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = '#0E7C72';
            (e.currentTarget as HTMLAnchorElement).style.color = '#0E7C72';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = '#E4E9E7';
            (e.currentTarget as HTMLAnchorElement).style.color = '#404B48';
          }}
        >
          <Settings size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
