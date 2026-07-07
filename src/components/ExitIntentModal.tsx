'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useExitIntent } from '@/hooks/useExitIntent';

const WEBHOOK_URL = 'https://hook.eu2.make.com/ur8wvevt3a3f4rdtv73hdg4n6h3jl8oc';

interface PageContext {
  headline: string;
  subline: string;
  cta: string;
}

const PAGE_CONTEXTS: Record<string, PageContext> = {
  '/': {
    headline: 'Kurz Zeit für Ihre Erstberatung?',
    subline: 'Erfahren Sie kostenlos, wie KI-Automatisierung Ihr Unternehmen in Groitzsch und Leipzig voranbringt.',
    cta: 'Jetzt Erstberatung sichern',
  },
  '/ki-chatbots': {
    headline: 'Interesse an KI-Chatbots?',
    subline: 'Erfahren Sie in einer kostenlosen Erstberatung, wie ein KI-Chatbot Ihren Kundenservice automatisiert.',
    cta: 'Chatbot-Beratung sichern',
  },
  '/telefonassistenten': {
    headline: 'Interesse an KI-Telefonassistenten?',
    subline: 'Lassen Sie sich zeigen, wie ein KI-Telefonassistent Ihre Anrufe rund um die Uhr entgegennimmt.',
    cta: 'Telefonassistent-Beratung sichern',
  },
  '/automatisierungen': {
    headline: 'Prozesse automatisieren?',
    subline: 'Wir zeigen Ihnen in einer kostenlosen Beratung, welche Ihrer Abläufe sich sofort automatisieren lassen.',
    cta: 'Automatisierungs-Beratung sichern',
  },
  '/webseite': {
    headline: 'Neue Webseite geplant?',
    subline: 'Besprechen Sie mit uns kostenlos, wie Ihre neue Webseite mehr Kunden gewinnt.',
    cta: 'Webseiten-Beratung sichern',
  },
  '/seo-top-3-in-google': {
    headline: 'Besser bei Google gefunden werden?',
    subline: 'Erfahren Sie kostenlos, wie wir Sie in die Top 3 bei Google bringen.',
    cta: 'SEO-Beratung sichern',
  },
  '/crm-systeme': {
    headline: 'CRM-System für Ihr Unternehmen?',
    subline: 'In 20 Minuten zeigen wir Ihnen, welches CRM zu Ihren Abläufen passt und was es kostet.',
    cta: 'CRM-Beratung sichern',
  },
  '/leistungen': {
    headline: 'Welche Lösung passt zu Ihnen?',
    subline: 'Wir beraten Sie kostenlos und finden die passende KI-Lösung für Ihr Unternehmen.',
    cta: 'Kostenlose Beratung sichern',
  },
  '/ueber-uns': {
    headline: 'Lernen Sie uns persönlich kennen',
    subline: 'In einem kurzen Erstgespräch zeigen wir Ihnen, wie wir arbeiten und was wir für Sie tun können.',
    cta: 'Persönliches Gespräch vereinbaren',
  },
  '/haeufige-fragen': {
    headline: 'Noch offene Fragen?',
    subline: 'Wir beantworten Ihre individuellen Fragen gern persönlich – kostenlos und unverbindlich.',
    cta: 'Fragen direkt klären',
  },
  '/leistungsgebiete': {
    headline: 'KI-Lösungen in Ihrer Nähe',
    subline: 'Erfahren Sie, wie wir Unternehmen in Ihrer Region mit KI-Automatisierung unterstützen.',
    cta: 'Regionale Beratung sichern',
  },
};

const SUPPRESSED_PATHS = ['/kontakt', '/impressum', '/agb', '/datenschutz', '/datenschutz-einstellungen'];

const DEFAULT_CONTEXT: PageContext = {
  headline: 'Bevor Sie gehen …',
  subline: 'Sichern Sie sich Ihre kostenlose Erstberatung zu KI-Automatisierung für Ihr Unternehmen.',
  cta: 'Kostenlose Beratung sichern',
};

function getPageContext(pathname: string): PageContext {
  if (PAGE_CONTEXTS[pathname]) return PAGE_CONTEXTS[pathname];

  if (pathname.startsWith('/leistungsgebiete/')) {
    const hasService = pathname.split('/').filter(Boolean).length >= 3;
    if (hasService) return {
      headline: 'Genau die richtige Lösung für Ihre Region',
      subline: 'Lassen Sie sich kostenlos beraten, wie wir diesen Service in Ihrem Gebiet umsetzen.',
      cta: 'Regionale Beratung sichern',
    };
    return {
      headline: 'KI-Lösungen in Ihrer Region',
      subline: 'Erfahren Sie kostenlos, wie wir Ihr Unternehmen vor Ort mit KI-Automatisierung unterstützen.',
      cta: 'Regionale Beratung sichern',
    };
  }

  return DEFAULT_CONTEXT;
}

const inputClass =
  'w-full rounded-lg bg-white border p-3.5 text-sm focus:outline-none transition-all duration-200';

const ExitIntentModal: React.FC = () => {
  const { triggered, dismiss } = useExitIntent();
  const pathname = usePathname();

  if (SUPPRESSED_PATHS.includes(pathname)) return null;

  const context = getPageContext(pathname);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    },
    [dismiss],
  );

  useEffect(() => {
    if (triggered) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [triggered, handleKeyDown]);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(dismiss, 2500);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess, dismiss]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company: '',
          tasksToAutomate: '',
          privacyAccepted: true,
          source: 'exit-intent-modal',
          pageContext: pathname,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error(`Fehler: ${response.statusText}`);
      setSubmitSuccess(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{ background: 'rgba(12,18,16,0.5)' }}
            onClick={dismiss}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: '#fff', border: '1px solid #E4E9E7' }}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Erstberatung sichern"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-400" />

            <button
              onClick={dismiss}
              className="absolute top-4 right-4 transition-colors duration-200"
              style={{ color: '#68746F' }}
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-4"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight size={24} className="text-primary-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2" style={{ color: '#0E7C72' }}>Vielen Dank!</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#404B48' }}>
                    Wir melden uns innerhalb von 24h bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl md:text-2xl font-heading font-bold mb-2 pr-8" style={{ color: '#0C1210' }}>
                    {context.headline}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#68746F' }}>
                    {context.subline}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="exit-name" className="block font-heading font-medium mb-1.5 text-sm" style={{ color: '#0C1210' }}>
                        Name <span style={{ color: '#0E7C72' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="exit-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={inputClass}
                        style={{ borderColor: '#E4E9E7', color: '#0C1210' }}
                        placeholder="Max Mustermann"
                        autoFocus
                      />
                    </div>

                    <div>
                      <label htmlFor="exit-email" className="block font-heading font-medium mb-1.5 text-sm" style={{ color: '#0C1210' }}>
                        E-Mail <span style={{ color: '#0E7C72' }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="exit-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={inputClass}
                        style={{ borderColor: '#E4E9E7', color: '#0C1210' }}
                        placeholder="max@beispiel.de"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="exit-privacy"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        required
                        className="mt-0.5 w-4 h-4 rounded cursor-pointer flex-shrink-0"
                        style={{ accentColor: '#0E7C72' }}
                      />
                      <label htmlFor="exit-privacy" className="text-xs leading-relaxed cursor-pointer" style={{ color: '#68746F' }}>
                        Ich habe die{' '}
                        <a href="/datenschutz" target="_blank" rel="noopener noreferrer" style={{ color: '#0E7C72' }} className="underline">
                          Datenschutzerklärung
                        </a>{' '}
                        gelesen und akzeptiert. <span style={{ color: '#0E7C72' }}>*</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !privacyAccepted}
                      className="btn-primary w-full py-3.5 justify-center"
                      style={{ opacity: isSubmitting || !privacyAccepted ? 0.6 : 1, cursor: isSubmitting || !privacyAccepted ? 'not-allowed' : 'pointer' }}
                    >
                      {isSubmitting ? 'Wird gesendet…' : context.cta}
                    </button>

                    {errorMessage && (
                      <div className="p-3 rounded-lg text-sm" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', color: '#B91C1C' }}>
                        {errorMessage}
                      </div>
                    )}
                  </form>

                  <button
                    onClick={dismiss}
                    className="w-full mt-3 text-center text-xs transition-colors duration-200"
                    style={{ color: '#68746F' }}
                  >
                    Nein danke, vielleicht später
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
