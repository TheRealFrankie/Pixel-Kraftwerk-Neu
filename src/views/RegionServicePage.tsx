'use client';

import type { ServiceSlug } from '@/data/services';
import Telefonassistenten from './services/Telefonassistenten';
import KiChatbots from './services/KiChatbots';
import Automatisierungen from './services/Automatisierungen';
import Website from './services/Website';
import SeoTop3 from './services/SeoTop3';

interface RegionServicePageProps {
  regionSlug: string;
  regionName: string;
  serviceSlug: ServiceSlug;
  serviceLabel: string;
}

export default function RegionServicePage({
  regionSlug,
  regionName,
  serviceSlug,
}: RegionServicePageProps) {
  switch (serviceSlug) {
    case 'telefonassistenten':
      return <Telefonassistenten regionSlug={regionSlug} regionName={regionName} />;
    case 'ki-chatbots':
      return <KiChatbots regionSlug={regionSlug} regionName={regionName} />;
    case 'automatisierungen':
      return <Automatisierungen regionSlug={regionSlug} regionName={regionName} />;
    case 'webseiten':
      return <Website regionSlug={regionSlug} regionName={regionName} />;
    case 'seo-top-3':
      return <SeoTop3 regionSlug={regionSlug} regionName={regionName} />;
    default:
      return null;
  }
}
