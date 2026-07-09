import type { Metadata } from 'next';
import Home from '@/views/Home';
import { buildSeoTitle } from '@/lib/seoTitle';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'KI-Agentur',
    city: 'Groitzsch & Leipzig',
    services: 'KI-Chatbots, Telefonassistenten, Automatisierungen, Webseiten, SEO & CRM',
  }),
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
