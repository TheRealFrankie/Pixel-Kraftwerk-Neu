import type { Metadata } from 'next';
import Contact from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Kontakt – KI-Agentur Groitzsch & Leipzig – KI-Chatbots, Automatisierungen & SEO in meiner Nähe',
  description: 'Kontaktieren Sie Pixel Kraftwerk für KI-Automatisierungslösungen. Wir sind in Groitzsch, Leipzig und ganz Sachsen für Sie da.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/kontakt' },
};

export default function Page() {
  return <Contact />;
}
