import type { Metadata } from 'next';
import Leistungsgebiete from '@/views/Leistungsgebiete';

export const metadata: Metadata = {
  title: 'Leistungsgebiete – KI-Agentur Groitzsch & Leipzig – KI-Chatbots, Automatisierungen & SEO in über 250 Städten in meiner Nähe',
  description: 'Pixel Kraftwerk betreut Unternehmen in über 250 Städten deutschlandweit – von Leipzig und Groitzsch bis Hamburg und München. KI-Chatbots, Telefonassistenten, CRM, SEO & mehr.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/leistungsgebiete' },
};

export default function Page() {
  return <Leistungsgebiete />;
}
