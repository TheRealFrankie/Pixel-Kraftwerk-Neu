import type { Metadata } from 'next';
import Automatisierungen from '@/views/services/Automatisierungen';

export const metadata: Metadata = {
  title: 'Automatisierungen Groitzsch & Leipzig – Leadgenerierung, Terminbuchung & E-Mail-Workflows in meiner Nähe',
  description:
    'Wir bauen Automatisierungen, die Anfragen sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress. Leipzig & Region.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/automatisierungen' },
};

export default function Page() {
  return <Automatisierungen />;
}
