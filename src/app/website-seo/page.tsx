'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Website+SEO wurde in "Webseite" und "SEO: Top 3 in Google" aufgeteilt.
 * Weiterleitung zur Leistungsübersicht, wo beide Angebote verlinkt sind.
 */
export default function WebsiteSeoRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/services');
  }, [router]);
  return null;
}
