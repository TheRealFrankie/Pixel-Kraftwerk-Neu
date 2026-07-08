'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Zap, TrendingUp } from 'lucide-react';

const IMG_VORHER = '/images/seo-top-3-vorher-karte.webp';
const IMG_NACHHER = '/images/seo-top-3-nachher-karte.webp';

const VORHER_PUNKTE = [
  'Website rankt hauptsächlich für den Firmennamen',
  'Leistungen sind allgemein beschrieben',
  'Standort und Einsatzgebiet sind unklar',
  'Unternehmensprofil ist unvollständig',
  'Wettbewerber erscheinen häufiger in den Ergebnissen',
];

const NACHHER_PUNKTE = [
  'Leistungen besitzen klare Seitenschwerpunkte',
  'Standort und Einsatzgebiet sind nachvollziehbar',
  'Unternehmensprofil ist vollständig gepflegt',
  'Inhalte orientieren sich an Suchabsichten',
  'Technische Grundlagen sind sauber umgesetzt',
];

const ASPEKTE = [
  { icon: Eye, title: 'Sichtbarkeit', text: 'Relevante lokale Suchanfragen erreichen Ihr Unternehmen.' },
  { icon: Zap, title: 'Qualifizierte Anfragen', text: 'Organische Sichtbarkeit erzeugt passgenaue Kontaktanfragen.' },
  { icon: TrendingUp, title: 'Langfristige Grundlage', text: 'Sauber optimierte Seiten behalten ihre Relevanz dauerhaft.' },
];

type TabId = 'vorher' | 'nachher';

const VorherNachherSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('vorher');
  const [imageLoaded, setImageLoaded] = useState<Record<TabId, boolean>>({
    vorher: false,
    nachher: false,
  });
  const [imageError, setImageError] = useState<Record<TabId, boolean>>({
    vorher: false,
    nachher: false,
  });

  useEffect(() => {
    const preload = (src: string, tab: TabId) => {
      const img = new window.Image();
      img.onload = () => setImageLoaded((prev) => ({ ...prev, [tab]: true }));
      img.onerror = () => setImageError((prev) => ({ ...prev, [tab]: true }));
      img.src = src;
    };
    preload(IMG_VORHER, 'vorher');
    preload(IMG_NACHHER, 'nachher');
  }, []);

  const showPlaceholder = !imageLoaded[activeTab] || imageError[activeTab];
  const isVorher = activeTab === 'vorher';

  const punkte = isVorher ? VORHER_PUNKTE : NACHHER_PUNKTE;

  const badgeStyle = isVorher
    ? { background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.25)', color: '#B91C1C' }
    : { background: 'rgba(14,124,114,0.08)', borderColor: 'rgba(14,124,114,0.25)', color: '#0E7C72' };

  const title = isVorher ? 'Ihr Unternehmen – Bisher' : 'Ihr Unternehmen – Optimiert';
  const conclusion = isVorher
    ? 'Kaum lokal gefunden – Anfragen gehen an die Konkurrenz.'
    : 'Klare Sichtbarkeit bei relevanten lokalen Suchanfragen.';

  const mapAlt =
    activeTab === 'vorher'
      ? 'Karte mit vielen roten Markierungen – Unternehmen nicht in den Top 3 bei Google Maps'
      : 'Karte mit grünen Markierungen – Unternehmen in den Top 3 bei Google Maps';

  return (
    <section className="vorher-nachher-section py-20" style={{ background: '#FAFAF9' }} aria-labelledby="vorher-nachher-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              id="vorher-nachher-heading"
              className="text-2xl md:text-3xl font-heading font-bold mb-2"
              style={{ color: '#0C1210' }}
            >
              Was sich durch eine klare Local-SEO-Strategie verändert
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#404B48' }}>
              Bisher vs. optimiert – der Unterschied in der lokalen Sichtbarkeit.
            </p>
          </motion.div>

          {/* Tabs */}
          <div
            className="flex gap-2 mb-6"
            role="tablist"
            aria-label="Vorher- oder Nachher-Ansicht wählen"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'vorher'}
              aria-controls="vorher-nachher-panel"
              id="tab-vorher"
              onClick={() => setActiveTab('vorher')}
              className={`px-6 py-3 font-heading font-bold transition-colors rounded-lg ${
                activeTab === 'vorher'
                  ? 'border-2 border-red-400 font-semibold'
                  : 'border border-gray-200 hover:border-gray-300'
              }`}
              style={{ color: activeTab === 'vorher' ? '#B91C1C' : '#404B48' }}
            >
              Bisher
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'nachher'}
              aria-controls="vorher-nachher-panel"
              id="tab-nachher"
              onClick={() => setActiveTab('nachher')}
              className={`px-6 py-3 font-heading font-bold transition-colors rounded-lg ${
                activeTab === 'nachher'
                  ? 'border-2 font-semibold'
                  : 'border border-gray-200 hover:border-gray-300'
              }`}
              style={{
                borderColor: activeTab === 'nachher' ? '#0E7C72' : undefined,
                color: activeTab === 'nachher' ? '#0E7C72' : '#404B48',
              }}
            >
              Optimiert
            </button>
          </div>

          {/* Karten-Box */}
          <motion.div
            className="rounded-2xl border bg-white shadow-card"
            style={{ borderColor: '#E4E9E7' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              id="vorher-nachher-panel"
              role="tabpanel"
              aria-labelledby={activeTab === 'vorher' ? 'tab-vorher' : 'tab-nachher'}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8"
            >
              {/* Linke Spalte: Inhalt */}
              <div className="min-w-0 rounded-lg p-1">
                <h3 className="text-xl font-heading font-bold mb-3" style={{ color: '#0C1210' }}>{title}</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 mb-4"
                  >
                    {punkte.map((punkt, index) => (
                      <motion.div
                        key={punkt}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: '#404B48' }}
                      >
                        <span
                          className="flex-shrink-0 mt-1 w-3.5 h-3.5 rounded-full border flex items-center justify-center text-xs font-bold"
                          style={badgeStyle}
                          aria-hidden
                        >
                          {isVorher ? '✕' : '✓'}
                        </span>
                        {punkt}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
                <p
                  className="text-base font-medium"
                  style={{ color: isVorher ? '#B91C1C' : '#0E7C72' }}
                >
                  {conclusion}
                </p>
              </div>

              {/* Rechte Spalte: Karte */}
              <div
                className="rounded-xl border min-h-[260px] lg:min-h-[320px] relative flex items-center justify-center w-full"
                style={{ borderColor: '#E4E9E7', background: '#F4F7F6' }}
              >
                <img
                  src={activeTab === 'vorher' ? IMG_VORHER : IMG_NACHHER}
                  alt={mapAlt}
                  className={`w-full h-full object-contain absolute inset-0 ${showPlaceholder ? 'opacity-0' : 'opacity-100'}`}
                  style={{ maxHeight: 'min(70vh, 480px)' }}
                  onLoad={(e) => {
                    const tab: TabId = e.currentTarget.src.includes('vorher') ? 'vorher' : 'nachher';
                    setImageLoaded((prev) => ({ ...prev, [tab]: true }));
                  }}
                  onError={(e) => {
                    const tab: TabId = e.currentTarget.src.includes('vorher') ? 'vorher' : 'nachher';
                    setImageError((prev) => ({ ...prev, [tab]: true }));
                  }}
                />
                {showPlaceholder && (
                  <div
                    className="absolute inset-2 flex flex-col items-center justify-center rounded-lg p-4"
                    style={{ background: '#FAFAF9' }}
                    aria-hidden="true"
                  >
                    <div className="w-full h-full min-h-[140px] grid grid-cols-6 sm:grid-cols-8 gap-1.5 place-content-center place-items-center">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <span
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                            isVorher
                              ? i < 38
                                ? 'bg-red-500'
                                : 'bg-amber-500'
                              : i < 36
                                ? 'bg-primary-500'
                                : 'bg-amber-500'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs mt-2 text-center" style={{ color: '#68746F' }}>
                      {isVorher ? 'Rote Markierungen (nicht Top 3)' : 'Grüne Markierungen (Top 3)'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Aspekte – kompakt */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {ASPEKTE.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-4 hover:border-primary-500/30 transition-colors flex items-center gap-3"
                style={{ borderColor: '#E4E9E7' }}
              >
                <div className="flex-shrink-0" style={{ color: '#0E7C72' }}><item.icon size={20} /></div>
                <div>
                  <h4 className="font-heading font-bold text-sm" style={{ color: '#0C1210' }}>{item.title}</h4>
                  <p className="text-sm" style={{ color: '#404B48' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VorherNachherSection;
