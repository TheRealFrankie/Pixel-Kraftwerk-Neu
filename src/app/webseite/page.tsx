import type { Metadata } from 'next';
import Website from '@/pages/services/Website';

export const metadata: Metadata = {
  title: {
    absolute:
      'Webseiten Groitzsch & Leipzig – wenn Sie nach moderner Website, Firmenhomepage oder Webdesign im Mietmodell in meiner Nähe suchen – Pixel Kraftwerk erstellt und betreut Ihren professionellen Webauftritt',
  },
  description:
    'Moderne, schnelle Webseiten im Mietmodell – ohne hohe Startkosten, mit Full-Service-Betreuung und schnellen Anpassungen. Ideal für lokale Unternehmen rund um Leipzig.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/webseite' },
};

export default function Page() {
  return <Website />;
}

