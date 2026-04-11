import type { Metadata } from 'next';
import Services from '@/views/Services';

export const metadata: Metadata = {
  title: {
    absolute:
      'KI-Agentur Groitzsch & Leipzig – Pixel Kraftwerk Leistungen: KI-Chatbots, Telefonassistenten, Automatisierungen, Webseiten & SEO in meiner Nähe – alle Leistungen im Überblick',
  },
  description: 'KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO. Digitale Lösungen aus Groitzsch für Leipzig und Sachsen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/leistungen' },
};

export default function Page() {
  return <Services />;
}
