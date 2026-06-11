import type { Metadata } from 'next';
import CrmSysteme from '@/views/services/CrmSysteme';

export const metadata: Metadata = {
  title: {
    absolute:
      'BESTE CRM-Systeme Groitzsch & Leipzig – wenn Sie nach Kundenverwaltung, Lead-Management oder Vertriebspipeline in meiner Nähe suchen – Pixel Kraftwerk richtet Ihr CRM sauber und zuverlässig ein',
  },
  description:
    'CRM-System für kleine Unternehmen: zentrale Kundenverwaltung, automatisierte Follow-ups und transparente Vertriebspipeline. Setup, Migration & Schulung aus einer Hand. Leipzig & Region.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/crm-systeme' },
};

export default function Page() {
  return <CrmSysteme />;
}
