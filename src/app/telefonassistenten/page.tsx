import type { Metadata } from 'next';
import Telefonassistenten from '@/pages/services/Telefonassistenten';

export const metadata: Metadata = {
  title: {
    absolute:
      'Telefonassistent Groitzsch & Leipzig – wenn Sie nach KI-Telefonassistenz, Telefonservice oder Anrufannahme in meiner Nähe suchen – Pixel Kraftwerk sorgt dafür, dass kein Anruf mehr verloren geht',
  },
  description: 'Telefonische Kundenassistenz für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/telefonassistenten' },
};

export default function Page() {
  return <Telefonassistenten />;
}
