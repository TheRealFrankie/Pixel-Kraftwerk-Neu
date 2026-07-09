import type { Metadata } from 'next';
import CrmSysteme from '@/views/services/CrmSysteme';
import { buildSeoTitle } from '@/lib/seoTitle';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'CRM-Systeme',
    city: 'Groitzsch & Leipzig',
    services: 'Kundenverwaltung, Lead-Management oder Vertriebspipeline',
  }),
  description:
    'Wir entwickeln individuelle CRM-Systeme und Unternehmenssoftware für Kunden, Projekte, Aufträge, Termine und interne Abläufe.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/crm-systeme' },
};

export default function Page() {
  return <CrmSysteme />;
}
