import type { Metadata } from 'next';
import CrmSysteme from '@/views/services/CrmSysteme';

export const metadata: Metadata = {
  title: 'Individuelles CRM-System entwickeln lassen | Pixel Kraftwerk',
  description:
    'Wir entwickeln individuelle CRM-Systeme und Unternehmenssoftware für Kunden, Projekte, Aufträge, Termine und interne Abläufe.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/crm-systeme' },
};

export default function Page() {
  return <CrmSysteme />;
}
