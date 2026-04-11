import type { Metadata } from 'next';
import Faq from '@/views/Faq';

export const metadata: Metadata = {
  title: {
    absolute:
      'Häufige Fragen – Pixel Kraftwerk KI-Agentur Groitzsch & Leipzig – Antworten zu KI-Chatbots, Telefonassistenten, Automatisierungen, Webseiten und SEO in meiner Nähe',
  },
  description: 'Häufige Fragen zu KI-Automatisierung, Chatbots und unseren Leistungen – Pixel Kraftwerk Leipzig & Sachsen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/haeufige-fragen' },
};

export default function Page() {
  return <Faq />;
}
