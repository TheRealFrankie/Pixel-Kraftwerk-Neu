import type { Metadata } from 'next';
import CrmSysteme from '@/views/services/CrmSysteme';

export const metadata: Metadata = {
  title: 'CRM-Systeme Groitzsch & Leipzig – Kundenverwaltung, Lead-Management & Vertriebspipeline in meiner Nähe',
  description:
    'CRM-System für kleine Unternehmen: zentrale Kundenverwaltung, automatisierte Follow-ups und transparente Vertriebspipeline. Setup, Migration & Schulung aus einer Hand. Leipzig & Region.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/crm-systeme' },
};

export default function Page() {
  return <CrmSysteme />;
}
