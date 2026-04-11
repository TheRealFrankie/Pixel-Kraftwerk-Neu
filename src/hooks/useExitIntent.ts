'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEY = 'exitIntentShown';
const MIN_TIME_ON_PAGE_MS = 5_000;
const IDLE_TIMEOUT_MS = 45_000;
const SUPPRESSED_PATHS = ['/kontakt'];

export function useExitIntent() {
  const [triggered, setTriggered] = useState(false);
  const pageLoadTime = useRef(Date.now());
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const canTrigger = useCallback(() => {
    if (typeof window === 'undefined') return false;
    if (sessionStorage.getItem(STORAGE_KEY)) return false;
    if (SUPPRESSED_PATHS.includes(window.location.pathname)) return false;
    if (Date.now() - pageLoadTime.current < MIN_TIME_ON_PAGE_MS) return false;

    const cookieBannerVisible = !localStorage.getItem('cookieConsent');
    if (cookieBannerVisible) return false;

    return true;
  }, []);

  const trigger = useCallback(() => {
    if (!canTrigger()) return;
    sessionStorage.setItem(STORAGE_KEY, '1');
    setTriggered(true);
  }, [canTrigger]);

  const dismiss = useCallback(() => {
    setTriggered(false);
  }, []);

  const resetIdleTimer = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(trigger, IDLE_TIMEOUT_MS);
  }, [trigger]);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) trigger();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') trigger();
    };

    const activityEvents = ['mousemove', 'scroll', 'keydown', 'touchstart'] as const;

    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    activityEvents.forEach((evt) => window.addEventListener(evt, resetIdleTimer, { passive: true }));

    resetIdleTimer();

    return () => {
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      activityEvents.forEach((evt) => window.removeEventListener(evt, resetIdleTimer));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [trigger, resetIdleTimer]);

  return { triggered, dismiss };
}
