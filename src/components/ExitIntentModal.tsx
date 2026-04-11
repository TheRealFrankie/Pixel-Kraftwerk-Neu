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
  '/leistungen': {
    headline: 'Welche Lösung passt zu Ihnen?',
    subline: 'Wir beraten Sie kostenlos und finden die passende KI-Lösung für Ihr Unternehmen.',
    cta: 'Kostenlose Beratung sichern',
  },
};

const DEFAULT_CONTEXT: PageContext = {
  headline: 'Bevor Sie gehen …',
  subline: 'Sichern Sie sich Ihre kostenlose Erstberatung zu KI-Automatisierung für Ihr Unternehmen.',
  cta: 'Kostenlose Beratung sichern',
};

function getPageContext(pathname: string): PageContext {
  if (PAGE_CONTEXTS[pathname]) return PAGE_CONTEXTS[pathname];
  if (pathname.startsWith('/leistungsgebiete/')) return {
    headline: 'Interesse an unseren Leistungen in Ihrer Region?',
    subline: 'Erfahren Sie kostenlos, wie wir Ihr Unternehmen vor Ort mit KI-Lösungen unterstützen.',
    cta: 'Regionale Beratung sichern',
  };
  return DEFAULT_CONTEXT;
}

const inputClass =
  'w-full rounded-lg bg-dark-300 border border-dark-200 text-light-100 p-3.5 text-sm focus:border-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 transition-all duration-200 placeholder:text-light-400/50';

const ExitIntentModal: React.FC = () => {
  const { triggered, dismiss } = useExitIntent();
  const pathname = usePathname();
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
            className="absolute inset-0 bg-dark-500/80 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-dark-400 border border-dark-200/50 rounded-2xl shadow-2xl shadow-primary-500/10 overflow-hidden"
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
              className="absolute top-4 right-4 text-light-400 hover:text-light-100 transition-colors duration-200"
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
                  <h3 className="text-xl font-heading font-bold text-primary-400 mb-2">Vielen Dank!</h3>
                  <p className="text-light-200 text-sm leading-relaxed">
                    Wir melden uns innerhalb von 24h bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-light-100 mb-2 pr-8">
                    {context.headline}
                  </h2>
                  <p className="text-light-300 text-sm leading-relaxed mb-6">
                    {context.subline}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="exit-name" className="block text-light-100 font-heading font-medium mb-1.5 text-sm">
                        Name <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="exit-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={inputClass}
                        placeholder="Max Mustermann"
                        autoFocus
                      />
                    </div>

                    <div>
                      <label htmlFor="exit-email" className="block text-light-100 font-heading font-medium mb-1.5 text-sm">
                        E-Mail <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="exit-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={inputClass}
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
                        className="mt-0.5 w-4 h-4 rounded bg-dark-300 border border-dark-200 text-primary-500 focus:ring-2 focus:ring-primary-500/50 cursor-pointer flex-shrink-0"
                      />
                      <label htmlFor="exit-privacy" className="text-light-300 text-xs leading-relaxed cursor-pointer">
                        Ich habe die{' '}
                        <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                          Datenschutzerklärung
                        </a>{' '}
                        gelesen und akzeptiert. <span className="text-primary-500">*</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !privacyAccepted}
                      className={`w-full py-3.5 px-6 rounded-xl bg-primary-500 text-dark-500 font-heading font-bold text-sm shadow-lg shadow-primary-500/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 ${
                        isSubmitting || !privacyAccepted
                          ? 'opacity-60 cursor-not-allowed'
                          : 'hover:bg-primary-400 hover:shadow-primary-glow'
                      }`}
                    >
                      {isSubmitting ? 'Wird gesendet…' : context.cta}
                    </button>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                        {errorMessage}
                      </div>
                    )}
                  </form>

                  <button
                    onClick={dismiss}
                    className="w-full mt-3 text-center text-light-400 text-xs hover:text-light-200 transition-colors duration-200"
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
