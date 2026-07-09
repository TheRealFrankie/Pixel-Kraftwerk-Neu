import type { Metadata } from 'next';
import KiChatbots from '@/views/services/KiChatbots';
import { buildSeoTitle } from '@/lib/seoTitle';

export const metadata: Metadata = {
  title: buildSeoTitle({
    category: 'KI-Chatbots',
    city: 'Groitzsch & Leipzig',
    services: 'digitale Kundenassistenz, Website-Chatbot oder KI-Chatbot',
  }),
  description: 'Digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/ki-chatbots' },
};

export default function Page() {
  return <KiChatbots />;
}
