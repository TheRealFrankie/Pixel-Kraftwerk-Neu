import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { BackgroundPaths } from './ui/background-paths';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('efficiency-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-500 overflow-hidden">
      {/* Animated Wave Background */}
      <BackgroundPaths />
      
      <div className="container mx-auto px-4 pt-16 z-10 text-center">
        <div className="flex flex-col items-center justify-center space-y-6 -mt-8">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading">
              <span className="block">Prozesse automatisieren.</span>
              <span className="block">Effizienz steigern.</span>
              <span className="block">Kosten senken.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-light-200 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Mit maßgeschneiderten KI-Lösungen optimieren Sie Abläufe und gewinnen Zeit für das Wesentliche.
          </motion.p>
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
            >
              Jetzt KI-Potenzial entdecken
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-500 hover:text-primary-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;