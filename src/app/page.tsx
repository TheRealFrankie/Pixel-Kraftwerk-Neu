import type { Metadata } from 'next';
import Home from '@/pages/Home';

export const metadata: Metadata = {
  title: 'BESTE KI-Agentur Groitzsch – Pixel Kraftwerk – KI-Chatbots, Telefonassistenten, Webseiten und SEO: Top 3 in Google in meiner Nähe',
  description: 'KI-Automatisierung und Chatbots aus Groitzsch für Leipzig und Sachsen. Terminbuchung, CRM, Webseiten und SEO: Top 3 in Google. Jetzt Beratung sichern.',
  keywords: ['KI Agentur Leipzig', 'Chatbot Agentur Leipzig', 'KI Automatisierung', 'Prozessautomatisierung Leipzig', 'SEO Agentur Leipzig', 'Terminbuchung automatisch'],
  openGraph: {
    title: 'KI-Automatisierung & Chatbots für Unternehmen | Pixel Kraftwerk Leipzig',
    description: 'Wir automatisieren Geschäftsprozesse mit KI, Chatbots und Telefonassistenten für Unternehmen in Leipzig & Umgebung.',
    url: 'https://pixelkraftwerk-ai.com/',
  },
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/' },
};

export default function Page() {
  return <Home />;
}
