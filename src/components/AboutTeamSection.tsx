'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { businessInfo } from '@/data/businessInfo';

const INK = '#0C1210';
const MUTED = '#68746F';
const PETROL = '#0E7C72';
const BORDER = '#E4E9E7';

export default function AboutTeamSection() {
  return (
    <section data-section-label="Über uns" className="section-padding" style={{ background: '#FAFAF9' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Bild-Spalte */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '3/4',
                border: `1px solid ${BORDER}`,
                boxShadow: '0 4px 24px rgba(12,18,16,0.08)',
              }}
            >
              <Image
                src="/images/gruender-duo-pixel-kraftwerk.jpg"
                alt="Lukas Franke und John Brause – Mitgründer von Pixel Kraftwerk, KI-Agentur in Groitzsch & Leipzig"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority={false}
              />
            </div>
            {/* Google-Badge – überlappend unten links */}
            <a
              href={businessInfo.socialMedia.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white hover:opacity-90 transition-opacity"
              style={{ border: `1px solid ${BORDER}`, boxShadow: '0 2px 12px rgba(12,18,16,0.10)' }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={PETROL} color={PETROL} />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-heading font-bold leading-tight" style={{ color: INK }}>5,0 auf Google</p>
                <p className="text-xs leading-tight" style={{ color: MUTED }}>Bewertungen ansehen →</p>
              </div>
            </a>
          </motion.div>

          {/* Text-Spalte */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-sm tracking-wide uppercase mb-4" style={{ color: PETROL }}>
              Verwurzelt in Groitzsch &amp; Leipzig
            </p>
            <h2 className="font-heading font-bold mb-5" style={{ color: INK }}>
              Menschen aus der Region,<br />keine anonyme Agentur
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: MUTED }}>
              Pixel Kraftwerk haben wir gegründet, weil wir gesehen haben, wie viele lokale Betriebe gute KI-Lösungen einfach nicht umsetzen konnten – weil die Anbieter weit weg und unpersönlich waren. Wir sitzen direkt bei Ihnen um die Ecke und Sie sprechen immer mit denselben zwei Ansprechpartnern.
            </p>

            {/* Mini-Profile */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                { name: 'Lukas Franke', role: 'Mitgründer', desc: 'Berät Sie persönlich und setzt Ihre Lösung mit um.', img: '/images/lukas-franke-mitgruender.jpg' },
                { name: 'John Brause', role: 'Mitgründer', desc: 'Berät Sie persönlich und setzt Ihre Lösung mit um.', img: '/images/john-brause-mitgruender.jpg' },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-4">
                  <div
                    className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '2px solid #C4E5E1' }}
                  >
                    <Image
                      src={p.img}
                      alt={`${p.name}, Mitgründer Pixel Kraftwerk`}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm" style={{ color: INK }}>{p.name}</p>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: PETROL }}>{p.role}</p>
                    <p className="text-sm" style={{ color: MUTED }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/ueber-uns"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200"
              style={{ color: INK, borderColor: BORDER, background: 'white' }}
            >
              Mehr über uns erfahren
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
