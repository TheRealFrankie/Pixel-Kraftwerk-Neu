'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { businessInfo } from '@/data/businessInfo';

interface StickyCtaBarProps {
  ctaLabel?: string;
  scrollThreshold?: number;
}

const StickyCtaBar: React.FC<StickyCtaBarProps> = ({
  ctaLabel = 'Kostenloses Erstgespräch',
  scrollThreshold = 800,
}) => {
  const [visible, setVisible] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(true);

  useEffect(() => {
    const checkCookieConsent = () => {
      const stored = localStorage.getItem('cookieConsent');
      if (!stored) {
        setCookieBannerVisible(true);
        return;
      }
      try {
        const parsed = JSON.parse(stored);
        setCookieBannerVisible(!parsed?.consented);
      } catch {
        setCookieBannerVisible(true);
      }
    };
    checkCookieConsent();
    window.addEventListener('cookieConsentChanged', checkCookieConsent);
    return () => window.removeEventListener('cookieConsentChanged', checkCookieConsent);
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > scrollThreshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollThreshold]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const shown = visible && !cookieBannerVisible;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${shown ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ background: '#FAFAF9', borderTop: '1px solid #E4E9E7', boxShadow: '0 -4px 16px rgba(12,18,16,0.08)', paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={!shown}
    >
      <div className="flex items-center gap-2 px-4 py-3 max-w-lg mx-auto">
        <button
          onClick={scrollToContact}
          className="flex-1 btn-primary justify-center text-sm py-3"
          tabIndex={shown ? 0 : -1}
        >
          {ctaLabel}
          <ArrowRight size={16} />
        </button>
        <a
          href={`tel:${businessInfo.contact.telephoneE164}`}
          className="btn-secondary px-4 py-3 text-sm"
          aria-label={`Anrufen: ${businessInfo.contact.telephone}`}
          tabIndex={shown ? 0 : -1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default StickyCtaBar;
