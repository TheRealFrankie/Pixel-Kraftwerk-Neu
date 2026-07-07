import type { Metadata } from 'next';
import Telefonassistenten from '@/views/services/Telefonassistenten';

export const metadata: Metadata = {
  title: 'KI-Telefonassistenten Groitzsch & Leipzig – Anrufannahme, Terminbuchung & Kundenservice in meiner Nähe',
  description: 'Telefonische Kundenassistenz für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/telefonassistenten' },
};

export default function Page() {
  return <Telefonassistenten />;
}
