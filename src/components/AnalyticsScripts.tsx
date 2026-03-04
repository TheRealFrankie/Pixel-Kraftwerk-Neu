'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

type CookieConsentState = {
  consented: boolean;
  preferences: CookieConsent;
  timestamp: string | null;
};

const getStoredConsent = (): CookieConsentState | null => {
  if (typeof window === 'undefined') return null;

  const stored = window.localStorage.getItem('cookieConsent');
  if (!stored) return null;

  try {
    return JSON.parse(stored) as CookieConsentState;
  } catch {
    return null;
  }
};

const AnalyticsScripts = () => {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setConsent(getStoredConsent());

    const handleConsentChange = () => {
      setConsent(getStoredConsent());
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
    };
  }, []);

  const analyticsEnabled = !!consent?.preferences.analytics;
  const marketingEnabled = !!consent?.preferences.marketing;

  if (!analyticsEnabled && !marketingEnabled) {
    return null;
  }

  return (
    <>
      {analyticsEnabled && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-882P0WZ1GB" strategy="afterInteractive" />
          <Script id="gtag" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-882P0WZ1GB');`}
          </Script>
        </>
      )}
      {marketingEnabled && (
        <>
          <Script id="fb-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','724323713697647');fbq('track','PageView');`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=724323713697647&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
};

export default AnalyticsScripts;

