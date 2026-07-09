import type { Metadata } from 'next';
import SeoTop3 from '@/views/services/SeoTop3';
import { buildSeoTitle } from '@/lib/seoTitle';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'SEO-Agentur',
    city: 'Groitzsch & Leipzig',
    services: 'Local SEO, Google-Maps-Ranking oder Top-3-Platzierungen',
  }),
  description:
    'Lokales SEO-Angebot für Unternehmen aus Leipzig, Groitzsch und Region: Top-3-Positionen für die Suchbegriffe, die wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/seo-top-3-in-google' },
};

export default function Page() {
  return <SeoTop3 />;
}
