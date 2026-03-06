import type { Metadata } from 'next';
import Contact from '@/pages/Contact';

export const metadata: Metadata = {
  title: {
    absolute:
      'Kontakt – Pixel Kraftwerk KI-Agentur Groitzsch & Leipzig – wenn Sie KI-Chatbots, Telefonassistenten, Automatisierungen oder SEO in meiner Nähe suchen – jetzt kostenloses Erstgespräch anfragen',
  },
  description: 'Kontaktieren Sie Pixel Kraftwerk für KI-Automatisierungslösungen. Wir sind in Groitzsch, Leipzig und ganz Sachsen für Sie da.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/kontakt' },
};

export default function Page() {
  return <Contact />;
}
