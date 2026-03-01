import type { Metadata } from 'next';
import Automatisierungen from '@/pages/services/Automatisierungen';

export const metadata: Metadata = {
  title: 'Automatisierungen für Anfragen, Vertrieb & Terminplanung in Leipzig & Region | Pixel Kraftwerk',
  description:
    'Wir bauen Automatisierungen, die Anfragen sortieren, nachfassen und Termine buchen – automatisch. Mehr Überblick, weniger Stress. Leipzig & Region.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/automatisierungen' },
};

export default function Page() {
  return <Automatisierungen />;
}
