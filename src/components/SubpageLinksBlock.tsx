'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import {
  getSubpagesForService,
  getGlobalRoutePrefix,
  type SubpageDefinition,
} from '@/data/serviceSubpages';

interface SubpageLinksBlockProps {
  serviceSlug: string;
  regionSlug?: string;
  title?: string;
}

const SubpageLinksBlock: React.FC<SubpageLinksBlockProps> = ({
  serviceSlug,
  regionSlug,
  title = 'Spezialisierungen',
}) => {
  const subpages = getSubpagesForService(serviceSlug);
  if (subpages.length === 0) return null;

  const globalPrefix = getGlobalRoutePrefix(serviceSlug);

  const getHref = (sub: SubpageDefinition) =>
    regionSlug
      ? `/leistungsgebiete/${regionSlug}/${serviceSlug}/${sub.slug}`
      : `${globalPrefix}/${sub.slug}`;

  return (
    <section className="py-16 bg-dark-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-light-200 text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Erfahren Sie mehr zu den einzelnen Themenbereichen:
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subpages.map((sub, i) => (
              <motion.a
                key={sub.slug}
                href={getHref(sub)}
                className="group flex items-center gap-3 p-5 bg-dark-400 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
              >
                <ChevronRight className="w-5 h-5 text-primary-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-light-100 group-hover:text-primary-400 transition-colors font-heading font-bold">
                  {sub.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubpageLinksBlock;
