'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { MessageCircle } from 'lucide-react';

const VoiceflowChat = dynamic(() => import('./VoiceflowChat'), {
  ssr: false,
});

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

const hasPreferenceConsent = () => {
  const consent = getStoredConsent();
  return !!consent?.preferences.preferences;
};

const ChatLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!hasPreferenceConsent()) {
      // Nutzer zu den Datenschutz-Einstellungen führen, um Präferenz-Cookies zu aktivieren
      window.location.href = '/privacy-settings';
      return;
    }

    setIsOpen(true);
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary-500 text-dark-500 px-4 py-3 shadow-lg hover:bg-primary-400 transition-colors font-heading font-bold"
          aria-label="Chat mit Pixel Kraftwerk starten"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Chat starten</span>
        </button>
      )}
      {isOpen && <VoiceflowChat />}
    </>
  );
};

export default ChatLauncher;

