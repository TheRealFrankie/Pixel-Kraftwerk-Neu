import type { Metadata } from 'next';
import Website from '@/views/services/Website';
import { buildSeoTitle } from '@/lib/seoTitle';

const baseUrl = 'https://pixelkraftwerk-ai.com';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'Webdesign',
    city: 'Groitzsch & Leipzig',
    services: 'moderne Website, professionelle Unternehmenswebseite oder individuelles Webdesign',
  }),
  description:
    'Moderne Unternehmenswebseiten mit klarer Nutzerführung, individuellem Design, mobiler Optimierung und SEO-freundlicher Grundlage. Jetzt Projekt besprechen.',
  alternates: { canonical: `${baseUrl}/webseite` },
  openGraph: {
    description:
      'Moderne Unternehmenswebseiten mit klarer Nutzerführung, individuellem Design, mobiler Optimierung und SEO-freundlicher Grundlage. Jetzt Projekt besprechen.',
    url: `${baseUrl}/webseite`,
    type: 'website',
  },
};

export default function Page() {
  return <Website />;
}
