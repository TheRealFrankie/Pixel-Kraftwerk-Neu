'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, Info } from 'lucide-react';

type CookieConsent = {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

type CookieConsentState = {
  consented: boolean;
  preferences: CookieConsent;
  timestamp: string | null;
};

const initialConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const defaultConsentState: CookieConsentState = {
  consented: false,
  preferences: initialConsent,
  timestamp: null,
};

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [consentState, setConsentState] = useState<CookieConsentState>(defaultConsentState);

  // Load consent state from localStorage on mount
  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        setConsentState(parsedConsent);
      } catch (error) {
        // Handle invalid JSON in localStorage
        console.error('Invalid cookie consent data found:', error);
        localStorage.removeItem('cookieConsent'); // Clean up invalid data
        setShowBanner(true);
        setConsentState(defaultConsentState); // Reset to default state when error occurs
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Save consent state to localStorage whenever it changes
  useEffect(() => {
    if (consentState.consented) {
      localStorage.setItem('cookieConsent', JSON.stringify(consentState));

      // Trigger custom event for same-tab updates
      window.dispatchEvent(new Event('cookieConsentChanged'));

      // Here you would activate the respective cookies based on user consent
      // This is a placeholder for actual cookie activation logic
      if (consentState.preferences.analytics) {
        // Enable analytics cookies
        console.log('Analytics cookies enabled');
      }

      if (consentState.preferences.marketing) {
        // Enable marketing cookies
        console.log('Marketing cookies enabled');
      }

      if (consentState.preferences.preferences) {
        // Enable preferences cookies
        console.log('Preferences cookies enabled');
      }
    }
  }, [consentState]);

  const acceptAllCookies = () => {
    setConsentState({
      consented: true,
      preferences: {
        necessary: true,
        analytics: true,
        marketing: true,
        preferences: true,
      },
      timestamp: new Date().toISOString(),
    });
    setShowBanner(false);
  };

  const acceptNecessaryCookies = () => {
    setConsentState({
      consented: true,
      preferences: initialConsent,
      timestamp: new Date().toISOString(),
    });
    setShowBanner(false);
  };

  const savePreferences = () => {
    setConsentState({
      ...consentState,
      consented: true,
      timestamp: new Date().toISOString(),
    });
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: keyof CookieConsent) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled

    setConsentState(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: !prev.preferences[key],
      }
    }));
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const closeBanner = () => {
    setConsentState({
      consented: true,
      preferences: initialConsent,
      timestamp: new Date().toISOString(),
    });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-400 border-t border-dark-100 p-4 md:p-6 shadow-lg animate-slide-in">
      <div className="container mx-auto">
        {!showSettings ? (
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-heading font-bold text-primary-500 flex items-center">
                <Info size={20} className="mr-2" />
                Cookie-Einstellungen
              </h2>
              <button
                onClick={closeBanner}
                className="text-light-300 hover:text-light-100 transition-colors duration-200"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-light-200 mb-4">
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Einige Cookies sind für den Betrieb der Website erforderlich (notwendige Cookies). Andere helfen uns, Ihr Nutzererlebnis zu verbessern (Präferenz-Cookies), die Nutzung der Website zu analysieren (Analyse-Cookies) oder gezieltes Marketing zu ermöglichen (Marketing-Cookies).
              </p>
              <p className="text-light-200 mb-4">
                Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary-500 hover:text-primary-400 transition-colors">Datenschutzerklärung</a>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-200"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptNecessaryCookies}
                className="px-4 py-2 bg-dark-300 text-light-100 font-heading hover:bg-dark-200 transition-colors duration-200"
              >
                Nur notwendige akzeptieren
              </button>
              <button
                onClick={openSettings}
                className="px-4 py-2 border border-primary-500 text-primary-500 font-heading hover:bg-primary-500 hover:text-dark-500 transition-colors duration-200"
              >
                Einstellungen anpassen
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-heading font-bold text-primary-500">
                Cookie-Einstellungen anpassen
              </h2>
              <button
                onClick={closeBanner}
                className="text-light-300 hover:text-light-100 transition-colors duration-200"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="p-4 bg-dark-300 border border-dark-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Notwendige Cookies</h3>
                    <p className="text-light-200 text-sm">
                      Diese Cookies sind für die Funktion der Website notwendig und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="text-primary-500">
                    <Check size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-dark-300 border border-dark-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Analyse-Cookies</h3>
                    <p className="text-light-200 text-sm">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                    </p>
                  </div>
                  <button 
                    onClick={() => handlePreferenceChange('analytics')} 
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                      consentState.preferences.analytics ? 'bg-primary-500' : 'bg-dark-100'
                    }`}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full transform transition-transform duration-200 ${
                        consentState.preferences.analytics ? 'bg-dark-500 translate-x-6' : 'bg-light-200 translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-dark-300 border border-dark-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Marketing-Cookies</h3>
                    <p className="text-light-200 text-sm">
                      Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
                    </p>
                  </div>
                  <button 
                    onClick={() => handlePreferenceChange('marketing')} 
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                      consentState.preferences.marketing ? 'bg-primary-500' : 'bg-dark-100'
                    }`}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full transform transition-transform duration-200 ${
                        consentState.preferences.marketing ? 'bg-dark-500 translate-x-6' : 'bg-light-200 translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-dark-300 border border-dark-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Präferenz-Cookies</h3>
                    <p className="text-light-200 text-sm">
                      Diese Cookies ermöglichen der Website, verbesserte Funktionalität und Personalisierung zu bieten.
                    </p>
                  </div>
                  <button 
                    onClick={() => handlePreferenceChange('preferences')} 
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                      consentState.preferences.preferences ? 'bg-primary-500' : 'bg-dark-100'
                    }`}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full transform transition-transform duration-200 ${
                        consentState.preferences.preferences ? 'bg-dark-500 translate-x-6' : 'bg-light-200 translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={closeSettings}
                className="px-4 py-2 bg-dark-300 text-light-100 font-heading hover:bg-dark-200 transition-colors duration-200"
              >
                Zurück
              </button>
              <button 
                onClick={savePreferences}
                className="px-4 py-2 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-200"
              >
                Einstellungen speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;