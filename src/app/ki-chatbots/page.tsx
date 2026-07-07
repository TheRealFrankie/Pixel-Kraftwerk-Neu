import type { Metadata } from 'next';
import KiChatbots from '@/views/services/KiChatbots';

export const metadata: Metadata = {
  title: 'KI-Chatbots Groitzsch & Leipzig – Website-Chatbot, WhatsApp-Chatbot & FAQ-Automatisierung in meiner Nähe',
  description: 'Digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/ki-chatbots' },
};

export default function Page() {
  return <KiChatbots />;
}
