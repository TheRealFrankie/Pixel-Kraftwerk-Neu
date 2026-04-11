import type { Metadata } from 'next';
import Imprint from '@/views/Imprint';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben von Pixel Kraftwerk – Franke & Brause GbR, Groitzsch.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/impressum' },
};

export default function Page() {
  return <Imprint />;
}
