'use client';

import React, { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false, className = '' }) => {
  const baseId = useId();
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`space-y-2 ${className}`} role="list">
      {items.map((item, i) => {
        const isOpen = openIndexes.has(i);
        const triggerId = `${baseId}-trigger-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div
            key={i}
            role="listitem"
            className="rounded-2xl border bg-white overflow-hidden transition-shadow duration-200"
            style={{
              borderColor: isOpen ? '#0E7C72' : '#E4E9E7',
              boxShadow: isOpen ? '0 0 0 1px rgba(14,124,114,0.15), 0 4px 16px rgba(14,124,114,0.08)' : '0 1px 3px rgba(12,18,16,0.06)',
            }}
          >
            <button
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
              className="flex items-start justify-between w-full text-left px-5 py-4 gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl"
              style={{ color: '#0C1210' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(i);
                }
              }}
            >
              <span className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: 'rgba(14,124,114,0.08)', color: '#0E7C72' }}
                  aria-hidden
                >
                  ?
                </span>
                <span className="text-base font-heading font-semibold leading-snug">{item.question}</span>
              </span>
              <ChevronDown
                size={18}
                aria-hidden
                className={`flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                style={{ color: '#68746F' }}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm leading-relaxed pl-10" style={{ color: '#404B48' }}>
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
