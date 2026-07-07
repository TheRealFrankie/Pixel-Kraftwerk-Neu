import type { Metadata } from 'next';
import About from '@/views/About';

export const metadata: Metadata = {
  title: 'Über uns – KI-Agentur Groitzsch & Leipzig – KI-Chatbots, Automatisierungen & SEO in meiner Nähe',
  description: 'Pixel Kraftwerk - Ihr Partner für KI-gestützte Automatisierung in Groitzsch und Leipzig. Effizienz neu gedacht mit maßgeschneiderten Lösungen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/ueber-uns' },
};

export default function Page() {
  return <About />;
}
