import type { Metadata } from 'next';
import Automatisierungen from '@/views/services/Automatisierungen';

export const metadata: Metadata = {
  title: 'Prozessautomatisierung Groitzsch & Leipzig – Workflow-Automatisierung für Unternehmen | Pixel Kraftwerk',
  description:
    'Wiederkehrende Aufgaben automatisch erledigen: Pixel Kraftwerk verbindet Ihre bestehenden Systeme und entwickelt individuelle Prozessautomatisierungen für Unternehmen in Leipzig & Region.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/automatisierungen' },
};

export default function Page() {
  return <Automatisierungen />;
}
