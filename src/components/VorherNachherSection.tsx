'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Coins, TrendingUp } from 'lucide-react';

const IMG_VORHER = '/images/seo-top-3-vorher-karte.webp';
const IMG_NACHHER = '/images/seo-top-3-nachher-karte.webp';

const KPI_VORHER = [
  { label: 'Ø Ranking', value: '86' },
  { label: 'Marktanteil', value: '1 %' },
  { label: 'Klicks pro Monat', value: '5' },
  { label: 'Kunden pro Monat', value: '1–2' },
];

const KPI_NACHHER = [
  { label: 'Ø Ranking', value: '3' },
  { label: 'Marktanteil', value: '40–60 %' },
  { label: 'Klicks pro Monat', value: '50–80' },
  { label: 'Kunden pro Monat', value: '10–20' },
];

const NUTZENPUNKTE = [
  { icon: Eye, title: 'Sichtbarkeit', text: '75 % der Klicks gehen an die Top 3.' },
  { icon: Coins, title: 'Kosten pro Klick: Keine', text: 'Organischer Traffic – kein Budget pro Klick.' },
  { icon: TrendingUp, title: 'Langfristig', text: 'Top 3 bleibt oft über Jahre stabil.' },
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

  // Beide Bilder beim Mount vorladen, damit beim ersten Besuch sofort die echten Karten sichtbar sind
  useEffect(() => {
    const preload = (src: string, tab: TabId) => {
      const img = new Image();
      img.onload = () => setImageLoaded((prev) => ({ ...prev, [tab]: true }));
      img.onerror = () => setImageError((prev) => ({ ...prev, [tab]: true }));
      img.src = src;
    };
    preload(IMG_VORHER, 'vorher');
    preload(IMG_NACHHER, 'nachher');
  }, []);

  const showPlaceholder = !imageLoaded[activeTab] || imageError[activeTab];

  const kpis = activeTab === 'vorher' ? KPI_VORHER : KPI_NACHHER;
  const isVorher = activeTab === 'vorher';
  const badgeColor = isVorher
    ? 'bg-red-500/25 border-red-400 text-red-100'
    : 'bg-primary-500/25 border-primary-400 text-primary-100';

  const title = isVorher ? 'Ihr Unternehmen – Vorher' : 'Ihr Unternehmen – Nachher';
  const conclusion = isVorher
    ? 'Kaum gefunden – Aufträge gehen an die Konkurrenz.'
    : 'Sie dominieren die lokale Suche.';

  const mapAlt =
    activeTab === 'vorher'
      ? 'Karte mit vielen roten Markierungen – Unternehmen nicht in den Top 3 bei Google Maps'
      : 'Karte mit grünen Markierungen – Unternehmen in den Top 3 bei Google Maps';

  return (
    <section className="vorher-nachher-section py-20 bg-dark-400" aria-labelledby="vorher-nachher-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Einleitende Copy – reduziert */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              id="vorher-nachher-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-2"
            >
              Der Unterschied, wenn Sie in den <span className="text-primary-500">Top 3</span> sind
            </h2>
            <p className="text-light-100 max-w-2xl mx-auto">
              Top 3 bei Google in 90 Tagen – garantiert. Die Grafik zeigt Vorher vs. Nachher.
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
                  ? 'bg-red-500/25 border-2 border-red-400 text-red-100'
                  : 'bg-dark-500 border border-dark-200 text-light-200 hover:border-dark-100 hover:text-light-100'
              }`}
            >
              Vorher
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
                  ? 'bg-primary-500/25 border-2 border-primary-400 text-primary-100'
                  : 'bg-dark-500 border border-dark-200 text-light-200 hover:border-dark-100 hover:text-light-100'
              }`}
            >
              Nachher
            </button>
          </div>

          {/* Karten-Box: Links KPIs, rechts Karte – Grafikbereich volle Breite, nicht abgeschnitten */}
          <motion.div
            className="bg-dark-500 border border-dark-200 rounded-xl shadow-card"
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
              {/* Linke Spalte: KPIs & Copy – fester Hintergrund für Lesbarkeit */}
              <div className="min-w-0 bg-dark-500 rounded-lg p-1">
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2">{title}</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-wrap gap-2 mb-3"
                  >
                    {kpis.map((kpi, index) => (
                      <motion.span
                        key={kpi.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className={`inline-block px-3 py-1.5 rounded-lg border text-sm font-semibold ${badgeColor}`}
                      >
                        {kpi.label}: {kpi.value}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
                <p
                  className={`text-base font-medium ${
                    isVorher ? 'text-red-100' : 'text-primary-100'
                  }`}
                >
                  {conclusion}
                </p>
              </div>

              {/* Rechte Spalte: Karte – vollständig sichtbar, object-contain (Original-Assets: Not_Top_3 / Top_3) */}
              <div className="rounded-lg border border-dark-200 bg-dark-400 min-h-[260px] lg:min-h-[320px] relative flex items-center justify-center w-full">
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
                    className="absolute inset-2 flex flex-col items-center justify-center bg-dark-300 rounded-lg p-4"
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
                    <span className="text-light-300 text-xs mt-2 text-center">
                      {isVorher ? 'Rote Markierungen (nicht Top 3)' : 'Grüne Markierungen (Top 3)'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Nutzenpunkte – kompakt */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {NUTZENPUNKTE.map((item) => (
              <div
                key={item.title}
                className="bg-dark-500 p-4 border border-dark-200 rounded-lg hover:border-primary-500/30 transition-colors flex items-center gap-3"
              >
                <div className="text-primary-400 flex-shrink-0">{<item.icon size={20} />}</div>
                <div>
                  <h4 className="font-heading font-bold text-light-100 text-sm">{item.title}</h4>
                  <p className="text-light-200 text-sm">{item.text}</p>
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
