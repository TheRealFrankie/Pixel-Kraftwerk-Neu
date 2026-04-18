import type { SubpageContent } from '../serviceSubpages';

import leadgenerierung from './leadgenerierung';
import terminbuchung from './terminbuchung';
import angebotsprozesse from './angebotsprozesse';
import emailAutomatisierung from './email-automatisierung';
import websiteChatbot from './website-chatbot';
import whatsappChatbot from './whatsapp-chatbot';
import instagramChatbot from './instagram-chatbot';
import facebookChatbot from './facebook-chatbot';
import telegramChatbot from './telegram-chatbot';
import faqAutomatisierung from './faq-automatisierung';
import kiTelefonassistentInbound from './ki-telefonassistent-inbound';
import kiAnrufsystem from './ki-anrufsystem';
import kiTerminassistent from './ki-terminassistent';
import kiLeadQualifizierungTelefon from './ki-lead-qualifizierung-telefon';
import automatischeRueckrufsysteme from './automatische-rueckrufsysteme';
import kiTelefonKundenservice from './ki-telefon-kundenservice';
import crmFuerHandwerker from './crm-fuer-handwerker';
import crmFuerVermietung from './crm-fuer-vermietung';
import crmFuerDienstleister from './crm-fuer-dienstleister';
import localSeo from './local-seo';
import googleMapsRanking from './google-maps-ranking';
import seoFuerHandwerker from './seo-fuer-handwerker';
import seoFuerDienstleister from './seo-fuer-dienstleister';

/**
 * Content lookup: `{serviceSlug}.{topicSlug}` → SubpageContent
 */
const allSubpageContent: Record<string, SubpageContent> = {
  'automatisierungen.leadgenerierung': leadgenerierung,
  'automatisierungen.terminbuchung': terminbuchung,
  'automatisierungen.angebotsprozesse': angebotsprozesse,
  'automatisierungen.email-automatisierung': emailAutomatisierung,

  'ki-chatbots.website-chatbot': websiteChatbot,
  'ki-chatbots.whatsapp-chatbot': whatsappChatbot,
  'ki-chatbots.instagram-chatbot': instagramChatbot,
  'ki-chatbots.facebook-chatbot': facebookChatbot,
  'ki-chatbots.telegram-chatbot': telegramChatbot,
  'ki-chatbots.faq-automatisierung': faqAutomatisierung,

  'telefonassistenten.ki-telefonassistent-inbound': kiTelefonassistentInbound,
  'telefonassistenten.ki-anrufsystem': kiAnrufsystem,
  'telefonassistenten.ki-terminassistent': kiTerminassistent,
  'telefonassistenten.ki-lead-qualifizierung-telefon': kiLeadQualifizierungTelefon,
  'telefonassistenten.automatische-rueckrufsysteme': automatischeRueckrufsysteme,
  'telefonassistenten.ki-telefon-kundenservice': kiTelefonKundenservice,

  'crm-systeme.crm-fuer-handwerker': crmFuerHandwerker,
  'crm-systeme.crm-fuer-vermietung': crmFuerVermietung,
  'crm-systeme.crm-fuer-dienstleister': crmFuerDienstleister,

  'seo-top-3.local-seo': localSeo,
  'seo-top-3.google-maps-ranking': googleMapsRanking,
  'seo-top-3.seo-fuer-handwerker': seoFuerHandwerker,
  'seo-top-3.seo-fuer-dienstleister': seoFuerDienstleister,
};

export function getSubpageContent(
  serviceSlug: string,
  topicSlug: string
): SubpageContent | undefined {
  return allSubpageContent[`${serviceSlug}.${topicSlug}`];
}

export default allSubpageContent;
