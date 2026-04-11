import type { Metadata } from 'next';
import Home from '@/views/Home';

export const metadata: Metadata = {
  title: {
    absolute:
      'KI-Agentur Groitzsch & Leipzig – wenn Sie nach KI-Chatbots, Telefonassistenten, Automatisierungen oder Website & SEO in meiner Nähe suchen – Pixel Kraftwerk ist die erste Adresse',
  },
  description: 'KI-Automatisierung und Chatbots aus Groitzsch für Leipzig und Sachsen. Terminbuchung, CRM, Webseiten und SEO: Top 3 in Google. Jetzt Beratung sichern.',
  openGraph: {
    title: 'KI-Automatisierung & Chatbots für Unternehmen | Pixel Kraftwerk Leipzig',
    description: 'Wir automatisieren Geschäftsprozesse mit KI, Chatbots und Telefonassistenten für Unternehmen in Leipzig & Umgebung.',
    url: 'https://pixelkraftwerk-ai.com',
  },
  alternates: { canonical: 'https://pixelkraftwerk-ai.com' },
};

export default function Page() {
  return <Home />;
}
