import type { Metadata } from 'next';
import Automatisierungen from '@/pages/services/Automatisierungen';

export const metadata: Metadata = {
  title: {
    absolute:
      'Automatisierungen Groitzsch & Leipzig – wenn Sie nach KI-Automatisierung, Workflow-Optimierung oder Prozessautomatisierung in meiner Nähe suchen – Pixel Kraftwerk richtet Ihre Abläufe sauber und zuverlässig ein',
  },
  description:
    'Wir bauen Automatisierungen, die Anfragen sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress. Leipzig & Region.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/automatisierungen' },
};

export default function Page() {
  return <Automatisierungen />;
}
