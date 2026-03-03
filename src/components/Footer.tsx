'use client';

import React, { useEffect } from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import NAPInfo from './NAPInfo';
import { NavItem, SocialLink } from '../types';
import { useCookieConsent } from '../hooks/useCookieConsent';

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
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    if (typeof window === 'undefined' || !hasConsent) return;

    const loadProvenExpertScript = () => {
      const existingScript = document.getElementById('proven-expert-script');
      if (existingScript) return;

      const script = document.createElement('script');
      script.id = 'proven-expert-script';
      script.src = 'https://s.provenexpert.net/seals/proseal-v2.js';
      script.async = true;

      script.onload = () => {
        const pe = (window as Window & { provenExpert?: { proSeal: (opts: object) => void } }).provenExpert;
        if (pe?.proSeal) {
          pe.proSeal({
            widgetId: "09229aa6-aa11-40d2-80b2-a7579d7f6df5",
            language: "de-DE",
            usePageLanguage: false,
            bannerColor: "#097E92",
            textColor: "#FFFFFF",
            showReviews: true,
            hideDate: true,
            hideName: false,
            hideOnMobile: false,
            bottom: "0px",
            stickyToSide: "left",
            googleStars: true,
            zIndex: "9999",
            displayReviewerLastName: false,
          });
        }
      };

      document.body.appendChild(script);
    };

    loadProvenExpertScript();

    return () => {
      const script = document.getElementById('proven-expert-script');
      if (script) {
        script.remove();
      }
    };
  }, [hasConsent]);

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

      <noscript>
        <a
          href="https://www.provenexpert.com/pixel-kraftwerk-ki-automatisierungen/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=09229aa6-aa11-40d2-80b2-a7579d7f6df5"
          target="_blank"
          rel="noopener noreferrer"
          title="Customer reviews & experiences for Pixel Kraftwerk | KI - Automatisierungen"
          className="pe-pro-seal-more-infos"
        >
          More info
        </a>
      </noscript>
    </footer>
  );
};

export default Footer;