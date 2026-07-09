import type { Metadata } from 'next';
import Leistungsgebiete from '@/views/Leistungsgebiete';
import { buildSeoTitle } from '@/lib/seoTitle';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'KI-Agentur',
    city: 'Groitzsch & Leipzig',
    services: 'KI-Chatbots, Automatisierungen & SEO in über 250 Städten',
  }),
  description: 'Pixel Kraftwerk betreut Unternehmen in über 250 Städten deutschlandweit – von Leipzig und Groitzsch bis Hamburg und München. KI-Chatbots, Telefonassistenten, CRM, SEO & mehr.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/leistungsgebiete' },
};

export default function Page() {
  return <Leistungsgebiete />;
}
