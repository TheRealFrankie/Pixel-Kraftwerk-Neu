'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroScrollIndicatorProps {
  delay?: number;
  label?: string;
}

const HeroScrollIndicator: React.FC<HeroScrollIndicatorProps> = ({
  delay = 0.8,
  label = 'Scroll',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const scrollToNextSection = () => {
    const hero = buttonRef.current?.closest('section');
    const next = hero?.nextElementSibling as HTMLElement | null;
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={scrollToNextSection}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-primary-500 hover:text-primary-400 transition-colors duration-300 animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 rounded-lg py-2 min-h-[44px]"
      aria-label="Nach unten scrollen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      <span className="text-xs font-heading font-medium text-light-300">{label}</span>
      <ChevronDown size={24} />
    </motion.button>
  );
};

export default HeroScrollIndicator;
