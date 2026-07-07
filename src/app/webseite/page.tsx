import type { Metadata } from 'next';
import Website from '@/views/services/Website';

export const metadata: Metadata = {
  title: 'Webdesign Groitzsch & Leipzig – Moderne Webseiten, Firmenhomepages & Website-Mietmodell in meiner Nähe',
  description:
    'Moderne, schnelle Webseiten im Mietmodell – ohne hohe Startkosten, mit Full-Service-Betreuung und schnellen Anpassungen. Ideal für lokale Unternehmen rund um Leipzig.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/webseite' },
};

export default function Page() {
  return <Website />;
}

