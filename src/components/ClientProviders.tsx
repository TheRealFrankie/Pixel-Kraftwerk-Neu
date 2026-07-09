'use client';

import { StickyCtaVisibilityProvider } from '@/hooks/useStickyCtaVisibility';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <StickyCtaVisibilityProvider>{children}</StickyCtaVisibilityProvider>;
}
