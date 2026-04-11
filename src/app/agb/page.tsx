import type { Metadata } from 'next';
import Agb from '@/views/Agb';

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen',
  description: 'Allgemeine Geschäftsbedingungen von Pixel Kraftwerk – Franke & Brause GbR. Vertragsbedingungen für unsere KI-Dienstleistungen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/agb' },
};

export default function Page() {
  return <Agb />;
}
