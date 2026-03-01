import type { Metadata } from 'next';
import Services from '@/pages/Services';

export const metadata: Metadata = {
  title: 'BESTE KI-Agentur Groitzsch – Pixel Kraftwerk – Leistungen: KI-Chatbots, Telefonassistenten, SEO in meiner Nähe',
  description: 'KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO. Digitale Lösungen aus Groitzsch für Leipzig und Sachsen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/services' },
};

export default function Page() {
  return <Services />;
}
