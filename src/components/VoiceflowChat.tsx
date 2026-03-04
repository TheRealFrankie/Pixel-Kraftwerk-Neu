'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: { verify: { projectID: string }; url: string; versionID: string; voice: { url: string } }) => void;
      };
    };
  }
}

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

const VoiceflowChat: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadVoiceflowChat = () => {
      const existingScript = document.getElementById('voiceflow-chat-script');
      if (existingScript) return;

      const script = document.createElement('script');
      script.id = 'voiceflow-chat-script';
      script.type = 'text/javascript';
      script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

      script.onload = () => {
        if (window.voiceflow?.chat) {
          window.voiceflow.chat.load({
            verify: { projectID: '67de6765a6193729493f4a22' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: 'https://runtime-api.voiceflow.com',
            },
          });
        }
      };

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    };

    const maybeLoadWithConsent = () => {
      if (!hasPreferenceConsent()) return;
      loadVoiceflowChat();
    };

    // leichte Verzögerung, damit LCP/FCP nicht belastet wird
    const timeoutId = window.setTimeout(maybeLoadWithConsent, 5000);

    const handleConsentChange = () => {
      if (hasPreferenceConsent()) {
        loadVoiceflowChat();
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
      const script = document.getElementById('voiceflow-chat-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return null;
};

export default VoiceflowChat;
