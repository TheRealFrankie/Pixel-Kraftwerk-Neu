'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cookie, Info } from 'lucide-react';
import CookieSettings from '../components/CookieSettings';
const PrivacySettings: React.FC = () => {
  return (
    <div className="bg-dark-500 min-h-screen">

      <section className="pt-32 pb-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-dark-500 border-2 border-primary-500 rounded-full mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Shield size={32} className="text-primary-500" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-4">
                Datenschutz-<span className="text-primary-500">Einstellungen</span>
              </h1>

              <p className="text-lg text-light-200 max-w-2xl mx-auto">
                Hier können Sie Ihre Cookie-Einstellungen anpassen. Wir respektieren Ihre Privatsphäre und geben Ihnen die volle Kontrolle.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-500 border border-dark-100 p-6 md:p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-start mb-6">
                <Info className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div className="text-light-200 text-sm leading-relaxed">
                  <p className="mb-3">
                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Einige Cookies sind für den Betrieb der Website erforderlich, andere helfen uns, Ihr Nutzererlebnis zu verbessern.
                  </p>
                  <p>
                    Weitere Informationen finden Sie in unserer{' '}
                    <a
                      href="/datenschutz"
                      className="text-primary-500 hover:text-primary-400 transition-colors font-heading font-bold"
                    >
                      Datenschutzerklärung
                    </a>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-dark-400 border border-dark-100 p-6 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <Cookie className="text-primary-500 mr-3" size={28} />
                <h2 className="text-2xl font-heading font-bold text-light-100">
                  Cookie-Einstellungen
                </h2>
              </div>

              <CookieSettings standalone={true} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacySettings;