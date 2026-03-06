import type { Metadata } from 'next';
import KiChatbots from '@/pages/services/KiChatbots';

export const metadata: Metadata = {
  title: {
    absolute:
      'KI-Chatbots Groitzsch & Leipzig – wenn Sie nach digitaler Kundenassistenz, Website-Chatbot oder KI-Chatbot in meiner Nähe suchen – Pixel Kraftwerk automatisiert Ihre Kundenanfragen zuverlässig',
  },
  description: 'Digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/ki-chatbots' },
};

export default function Page() {
  return <KiChatbots />;
}
