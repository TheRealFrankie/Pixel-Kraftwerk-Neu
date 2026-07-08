import type { Metadata } from 'next';
import Website from '@/views/services/Website';

const baseUrl = 'https://pixelkraftwerk-ai.com';

export const metadata: Metadata = {
  title: 'Webdesign Groitzsch & Leipzig – Moderne Unternehmenswebseiten | Pixel Kraftwerk',
  description:
    'Moderne Unternehmenswebseiten mit klarer Nutzerführung, individuellem Design, mobiler Optimierung und SEO-freundlicher Grundlage. Jetzt Projekt besprechen.',
  alternates: { canonical: `${baseUrl}/webseite` },
  openGraph: {
    title: 'Webdesign Groitzsch & Leipzig – Moderne Unternehmenswebseiten | Pixel Kraftwerk',
    description:
      'Moderne Unternehmenswebseiten mit klarer Nutzerführung, individuellem Design, mobiler Optimierung und SEO-freundlicher Grundlage. Jetzt Projekt besprechen.',
    url: `${baseUrl}/webseite`,
    type: 'website',
  },
};

export default function Page() {
  return <Website />;
}

