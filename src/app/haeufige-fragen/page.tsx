import type { Metadata } from 'next';
import Faq from '@/views/Faq';

export const metadata: Metadata = {
  title: 'Häufige Fragen – KI-Agentur Groitzsch & Leipzig – KI-Chatbots, Telefonassistenten & SEO in meiner Nähe',
  description: 'Häufige Fragen zu KI-Automatisierung, Chatbots und unseren Leistungen – Pixel Kraftwerk Leipzig & Sachsen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/haeufige-fragen' },
};

export default function Page() {
  return <Faq />;
}
