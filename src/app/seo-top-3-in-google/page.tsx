import type { Metadata } from 'next';
import SeoTop3 from '@/views/services/SeoTop3';

export const metadata: Metadata = {
  title: {
    absolute:
      'SEO-Agentur Groitzsch & Leipzig – wenn Sie nach lokaler Suchmaschinenoptimierung, Top‑3‑Google‑Ranking oder SEO-Beratung in meiner Nähe suchen – Pixel Kraftwerk holt Ihr Unternehmen nach vorne',
  },
  description:
    'Lokales SEO-Angebot für Unternehmen aus Leipzig, Groitzsch und Region: Top-3-Positionen für die Suchbegriffe, die wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/seo-top-3-in-google' },
};

export default function Page() {
  return <SeoTop3 />;
}

