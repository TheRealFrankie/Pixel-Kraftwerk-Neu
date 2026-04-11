'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEY = 'exit-intent-dismissed';
const MIN_TIME_ON_PAGE_MS = 5_000;
const IDLE_TIMEOUT_MS = 45_000;

export function useExitIntent() {
  const [triggered, setTriggered] = useState(false);
  const pageLoadTime = useRef(Date.now());
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const fire = () => {
      if (hasTriggered.current) return;
      if (Date.now() - pageLoadTime.current < MIN_TIME_ON_PAGE_MS) return;
      hasTriggered.current = true;
      sessionStorage.setItem(STORAGE_KEY, '1');
      setTriggered(true);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) fire();
    };

    const resetIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(fire, IDLE_TIMEOUT_MS);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', resetIdle, { passive: true });
    window.addEventListener('scroll', resetIdle, { passive: true });
    window.addEventListener('keydown', resetIdle, { passive: true });

    resetIdle();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('scroll', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  const dismiss = useCallback(() => {
    setTriggered(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }, []);

  return { triggered, dismiss };
}
