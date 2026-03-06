import type { Metadata } from 'next';
import About from '@/pages/About';

export const metadata: Metadata = {
  title: {
    absolute:
      'Über Pixel Kraftwerk – KI-Agentur Groitzsch & Leipzig – wenn Sie nach KI-Automatisierung, Chatbots, Telefonassistenten oder SEO in meiner Nähe suchen – lernen Sie unser Team kennen',
  },
  description: 'Pixel Kraftwerk - Ihr Partner für KI-gestützte Automatisierung in Groitzsch und Leipzig. Effizienz neu gedacht mit maßgeschneiderten Lösungen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/ueber-uns' },
};

export default function Page() {
  return <About />;
}
