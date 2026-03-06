import type { Metadata } from 'next';
import Leistungsgebiete from '@/pages/Leistungsgebiete';

export const metadata: Metadata = {
  title: {
    absolute:
      'KI-Agentur Groitzsch – Pixel Kraftwerk Leistungsgebiete: Leipzig, Markkleeberg, Borna, Zwenkau und 9 weitere Städte – KI-Chatbots, Telefonassistenten & SEO in meiner Nähe',
  },
  description: 'Pixel Kraftwerk betreut Unternehmen in Leipzig, Markkleeberg, Zwenkau, Borna, Groitzsch und 8 weiteren Städten. KI-Chatbots, Telefonassistenten, SEO & mehr.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/leistungsgebiete' },
};

export default function Page() {
  return <Leistungsgebiete />;
}
