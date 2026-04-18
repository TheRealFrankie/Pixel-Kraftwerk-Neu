'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Home,
  AlertTriangle,
  Sparkles,
  LayoutGrid,
  MessageSquare,
  Zap,
  Route,
  Send,
  HelpCircle,
  Mail,
  MapPin,
  Users,
  MessageCircle,
  Phone,
  Globe,
  Search,
  Award,
  Tag,
  Star,
  BookOpen,
  ClipboardList,
  Shield,
  Info,
  Play,
  Wrench,
  Repeat,
  Building2,
  Rocket,
  Circle,
  type LucideIcon,
} from 'lucide-react';

type IconKey =
  | 'home'
  | 'problem'
  | 'solution'
  | 'services'
  | 'case'
  | 'bolt'
  | 'process'
  | 'cta'
  | 'faq'
  | 'contact'
  | 'location'
  | 'about'
  | 'chat'
  | 'phone'
  | 'web'
  | 'seo'
  | 'crm'
  | 'award'
  | 'pricing'
  | 'testimonial'
  | 'blog'
  | 'checklist'
  | 'privacy'
  | 'info'
  | 'video'
  | 'tools'
  | 'before-after'
  | 'region'
  | 'start'
  | 'default';

const ICONS: Record<IconKey, LucideIcon> = {
  home: Home,
  problem: AlertTriangle,
  solution: Sparkles,
  services: LayoutGrid,
  case: MessageSquare,
  bolt: Zap,
  process: Route,
  cta: Send,
  faq: HelpCircle,
  contact: Mail,
  location: MapPin,
  about: Users,
  chat: MessageCircle,
  phone: Phone,
  web: Globe,
  seo: Search,
  crm: Users,
  award: Award,
  pricing: Tag,
  testimonial: Star,
  blog: BookOpen,
  checklist: ClipboardList,
  privacy: Shield,
  info: Info,
  video: Play,
  tools: Wrench,
  'before-after': Repeat,
  region: Building2,
  start: Rocket,
  default: Circle,
};

type SectionEntry = {
  id: string;
  label: string;
  iconKey: IconKey;
};

const MAX_LABEL_LENGTH = 38;
const SLUG_PREFIX = 'sec';

const slugify = (input: string) =>
  input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' und ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

const truncate = (input: string) =>
  input.length > MAX_LABEL_LENGTH ? `${input.slice(0, MAX_LABEL_LENGTH - 1).trimEnd()}…` : input;

const readLabel = (el: HTMLElement, index: number): string => {
  const explicit = el.dataset.sectionLabel?.trim();
  if (explicit) return truncate(explicit);

  const aria = el.getAttribute('aria-label')?.trim();
  if (aria) return truncate(aria);

  const headings = Array.from(el.querySelectorAll<HTMLElement>('h1, h2, h3, h4'));
  const visibleHeading = headings.find(
    (h) => !h.classList.contains('sr-only') && !!h.textContent?.trim()
  );
  const visibleText = visibleHeading?.textContent?.replace(/\s+/g, ' ').trim();
  if (visibleText) return truncate(visibleText);

  const headlineLike = el.querySelector<HTMLElement>(
    '.text-6xl, .text-5xl, .text-4xl, .text-3xl'
  );
  const headlineText = headlineLike?.textContent?.replace(/\s+/g, ' ').trim();
  if (headlineText) return truncate(headlineText);

  const anyHeading = headings[0]?.textContent?.replace(/\s+/g, ' ').trim();
  if (anyHeading) return truncate(anyHeading);

  return `Abschnitt ${index + 1}`;
};

/** Keyword-based icon inference. First match wins. */
const ICON_KEYWORDS: Array<{ patterns: RegExp; key: IconKey }> = [
  { patterns: /\b(kontakt|formular|anfrage\s?formular|anschreiben|nachricht|email)\b/i, key: 'contact' },
  { patterns: /\b(standort|adresse|karte|anfahrt|wegbeschreibung|maps)\b/i, key: 'location' },
  { patterns: /\b(faq|häufige\s?fragen|häufig\s?gestellte|frage[n]?)\b/i, key: 'faq' },
  { patterns: /\b(jetzt\s?starten|jetzt\s?anfragen|kostenlos|unverbindlich|termin|erstgespräch|cta)\b/i, key: 'cta' },
  { patterns: /\b(ablauf|prozess|schritte|so\s?l(ä|a)uft|zusammenarbeit)\b/i, key: 'process' },
  { patterns: /\b(praxis|beispiel|case|vorher|nachher|use[-\s]?case)\b/i, key: 'before-after' },
  { patterns: /\b(leistung|service|angebot|portfolio|das\s?bieten\s?wir|was\s?wir)\b/i, key: 'services' },
  { patterns: /\b(umsetz|konkret|lieferumfang|leistungsumfang)\b/i, key: 'bolt' },
  { patterns: /\b(lösung|future|automat|optimiert|sauber|so\s?arbeitet)\b/i, key: 'solution' },
  { patterns: /\b(problem|herausforder|schmerz|heute\s?so|alltag|kostet)\b/i, key: 'problem' },
  { patterns: /\b(über\s?uns|team|mitarbeiter|wer\s?wir\s?sind)\b/i, key: 'about' },
  { patterns: /\b(chatbot|chat|messenger|whatsapp|instagram|facebook|telegram)\b/i, key: 'chat' },
  { patterns: /\b(telefon|anruf|voice|calls?\b|hotline|rückruf)\b/i, key: 'phone' },
  { patterns: /\b(webseite|website|web\b|site|landing\s?page)\b/i, key: 'web' },
  { patterns: /\b(seo|google|ranking|suchmaschine|sichtbarkeit|top\s?3)\b/i, key: 'seo' },
  { patterns: /\b(crm|kundenverwaltung|lead[-\s]?management|pipeline)\b/i, key: 'crm' },
  { patterns: /\b(referenz|auszeichnung|preisträger)\b/i, key: 'award' },
  { patterns: /\b(preis|kosten|pakete|tarif)\b/i, key: 'pricing' },
  { patterns: /\b(testimonial|stimmen|bewertung|kundenmeinung|kundenstimm)\b/i, key: 'testimonial' },
  { patterns: /\b(blog|artikel|magazin|content)\b/i, key: 'blog' },
  { patterns: /\b(checkliste|voraussetzung|technische\s?anforderung|key\s?components?)\b/i, key: 'checklist' },
  { patterns: /\b(datenschutz|privacy|dsgvo|sicherheit|agb|impressum)\b/i, key: 'privacy' },
  { patterns: /\b(video|demo|vorschau)\b/i, key: 'video' },
  { patterns: /\b(tools?|werkzeug|technologien|tech\s?stack)\b/i, key: 'tools' },
  { patterns: /\b(region|gebiet|leistungsgebiet|einzugsgebiet|standorte)\b/i, key: 'region' },
  { patterns: /\b(start|hero|willkommen)\b/i, key: 'start' },
  { patterns: /\b(info|überblick|einführung|details?)\b/i, key: 'info' },
];

const inferIconKey = (label: string): IconKey => {
  for (const { patterns, key } of ICON_KEYWORDS) {
    if (patterns.test(label)) return key;
  }
  return 'default';
};

const readIconKey = (el: HTMLElement, label: string): IconKey => {
  const explicit = el.dataset.sectionIcon?.trim() as IconKey | undefined;
  if (explicit && ICONS[explicit]) return explicit;
  return inferIconKey(label);
};

const SectionIndicator: React.FC = () => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const [sections, setSections] = useState<SectionEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    let observer: MutationObserver | null = null;

    const collect = () => {
      const main = document.getElementById('main') ?? document.querySelector('main');
      if (!main) {
        setSections([]);
        return;
      }

      const nodes = Array.from(main.querySelectorAll<HTMLElement>('section'));
      const visible = nodes.filter((node) => {
        if (node.dataset.sectionHidden === 'true') return false;
        if (node.getAttribute('aria-hidden') === 'true') return false;
        return true;
      });

      const next: SectionEntry[] = visible.map((node, index) => {
        const label = readLabel(node, index);
        const iconKey = readIconKey(node, label);
        let id = node.id;
        if (!id) {
          const base = slugify(label) || `${SLUG_PREFIX}-${index + 1}`;
          id = `${SLUG_PREFIX}-${base}-${index + 1}`;
          node.id = id;
        }
        return { id, label, iconKey };
      });

      setSections((prev) => {
        if (
          prev.length === next.length &&
          prev.every(
            (p, i) => p.id === next[i].id && p.label === next[i].label && p.iconKey === next[i].iconKey
          )
        ) {
          return prev;
        }
        return next;
      });
    };

    const scheduleCollect = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(collect);
    };

    scheduleCollect();

    const main = document.getElementById('main') ?? document.querySelector('main');
    if (main) {
      observer = new MutationObserver(() => scheduleCollect());
      observer.observe(main, { childList: true, subtree: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (sections.length === 0) {
      setActiveId(null);
      return;
    }

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId: string | null = null;
        let bestRatio = 0;
        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId && bestRatio > 0) {
          setActiveId(bestId);
        } else {
          const scrollTop = window.scrollY + window.innerHeight * 0.3;
          let closest: string | null = null;
          let closestDistance = Number.POSITIVE_INFINITY;
          elements.forEach((el) => {
            const top = el.getBoundingClientRect().top + window.scrollY;
            const distance = Math.abs(top - scrollTop);
            if (distance < closestDistance) {
              closestDistance = distance;
              closest = el.id;
            }
          });
          if (closest) setActiveId(closest);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.6, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(value);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [sections.length]);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    },
    [prefersReducedMotion]
  );

  const activeIndex = useMemo(
    () => sections.findIndex((s) => s.id === activeId),
    [sections, activeId]
  );

  if (sections.length < 2) return null;

  return (
    <motion.aside
      ref={containerRef}
      aria-label="Seitennavigation"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:flex xl:right-6"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
    >
      <div className="pointer-events-auto relative flex items-center">
        <div
          className="relative flex flex-col items-center gap-2.5 rounded-full border border-white/5 bg-dark-500/60 px-1.5 py-3 backdrop-blur-xl"
          style={{ boxShadow: '0 10px 40px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02) inset' }}
        >
          {/* Connecting track */}
          <div className="pointer-events-none absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 overflow-hidden rounded-full bg-gradient-to-b from-white/5 via-white/10 to-white/5">
            <motion.div
              className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-primary-400 via-primary-500 to-primary-500/40"
              style={{ height: '100%' }}
              animate={{ scaleY: progress }}
              transition={{ type: 'spring', stiffness: 120, damping: 24, mass: 0.4 }}
            />
          </div>

          {sections.map((section, index) => {
            const isActive = section.id === activeId;
            const isVisited = activeIndex >= 0 && index <= activeIndex;
            const isHovered = hoveredId === section.id;
            const Icon = ICONS[section.iconKey] ?? ICONS.default;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredId(section.id)}
                onMouseLeave={() =>
                  setHoveredId((current) => (current === section.id ? null : current))
                }
                onFocus={() => setHoveredId(section.id)}
                onBlur={() => setHoveredId((current) => (current === section.id ? null : current))}
                aria-label={`Zu Abschnitt: ${section.label}`}
                aria-current={isActive ? 'true' : undefined}
                className="group relative flex h-5 w-5 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
              >
                {/* Outer pulse ring (active only) */}
                {isActive && !prefersReducedMotion && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-primary-500/25"
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    animate={{ scale: [0.95, 1.6, 0.95], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}

                {/* Icon/Dot visual */}
                <motion.span
                  aria-hidden
                  className={[
                    'relative flex items-center justify-center rounded-full transition-colors duration-300',
                    isActive
                      ? 'bg-primary-500 text-dark-500 shadow-[0_0_18px_rgba(0,179,166,0.55),0_0_4px_rgba(0,179,166,0.8)_inset]'
                      : isVisited
                      ? 'bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/30 group-hover:bg-primary-500/30 group-hover:text-primary-300'
                      : 'bg-white/5 text-light-300/60 ring-1 ring-white/10 group-hover:text-light-100 group-hover:bg-white/10',
                  ].join(' ')}
                  animate={{
                    width: isActive ? 18 : isHovered ? 15 : 12,
                    height: isActive ? 18 : isHovered ? 15 : 12,
                  }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isActive ? 'active' : isHovered ? 'hover' : 'idle'}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="flex items-center justify-center"
                    >
                      <Icon
                        size={isActive ? 10 : isHovered ? 9 : 7}
                        strokeWidth={isActive ? 2.5 : 2}
                        aria-hidden
                      />
                    </motion.span>
                  </AnimatePresence>
                </motion.span>

                {/* Hover / active label pill */}
                <AnimatePresence>
                  {(isHovered || (isActive && hoveredId === null)) && (
                    <motion.span
                      key="label"
                      initial={{ opacity: 0, x: 8, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap"
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-dark-500/90 px-3.5 py-1.5 text-xs font-heading font-semibold text-light-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                        <Icon
                          size={12}
                          strokeWidth={2.25}
                          className={isActive ? 'text-primary-400' : 'text-light-300'}
                          aria-hidden
                        />
                        <span
                          className={
                            isActive
                              ? 'bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent'
                              : 'text-light-100'
                          }
                        >
                          {section.label}
                        </span>
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};

export default SectionIndicator;
