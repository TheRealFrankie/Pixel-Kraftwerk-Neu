import type { Metadata } from 'next';
import Privacy from '@/pages/Privacy';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Pixel Kraftwerk – Franke & Brause GbR, Groitzsch.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/datenschutz' },
};

export default function Page() {
  return <Privacy />;
}
