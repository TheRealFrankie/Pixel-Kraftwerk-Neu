import type { Metadata } from 'next';
import Automatisierungen from '@/views/services/Automatisierungen';
import { buildSeoTitle } from '@/lib/seoTitle';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'Automatisierungen',
    city: 'Groitzsch & Leipzig',
    services: 'Leadgenerierung, Terminbuchung oder Prozessautomatisierung',
  }),
  description:
    'Wiederkehrende Aufgaben automatisch erledigen: Pixel Kraftwerk verbindet Ihre bestehenden Systeme und entwickelt individuelle Prozessautomatisierungen für Unternehmen in Leipzig & Region.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/automatisierungen' },
};

export default function Page() {
  return <Automatisierungen />;
}
