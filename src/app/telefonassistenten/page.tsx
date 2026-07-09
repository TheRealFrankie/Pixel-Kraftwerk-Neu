import type { Metadata } from 'next';
import Telefonassistenten from '@/views/services/Telefonassistenten';
import { buildSeoTitle } from '@/lib/seoTitle';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'KI-Telefonassistenten',
    city: 'Groitzsch & Leipzig',
    services: 'KI-Telefonassistenz, Anrufannahme oder Telefonservice',
  }),
  description: 'Telefonische Kundenassistenz für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/telefonassistenten' },
};

export default function Page() {
  return <Telefonassistenten />;
}
