import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import RegionServicePage from '@/views/RegionServicePage';
import { getRegionContent, getValidRegionSlug } from '@/data/regionContent';
import { LEISTUNGSGEBIETE_SLUGS } from '@/data/leistungsgebiete';
import { getServiceBySlug, isValidServiceSlug, type ServiceSlug } from '@/data/services';

const baseUrl = 'https://pixelkraftwerk-ai.com';

const SERVICE_TITLE_KEYWORDS: Record<ServiceSlug, string> = {
  'ki-chatbots':
    'digitaler Kundenassistenz, Website-Chatbot oder KI-Chatbot',
  telefonassistenten:
    'KI-Telefonassistenz, automatischer Anrufannahme oder Telefonservice',
  automatisierungen:
    'KI-Automatisierung, Workflow-Optimierung oder Prozessautomatisierung',
  webseiten:
    'moderner Website, Firmenhomepage oder Webdesign im Mietmodell',
  'seo-top-3':
    'lokaler Suchmaschinenoptimierung, Google-Ranking oder SEO-Beratung',
};

type Props = { params: Promise<{ region: string; service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, service } = await params;
  const regionSlug = getValidRegionSlug(region);
  const content = getRegionContent(regionSlug);
  const serviceInfo = getServiceBySlug(service);

  if (!serviceInfo) {
    return { title: 'Leistungsgebiete | Pixel Kraftwerk' };
  }

  const keywords = SERVICE_TITLE_KEYWORDS[service as ServiceSlug] ?? serviceInfo.label;
  const title = `${serviceInfo.label} ${content.name} – wenn Sie nach ${keywords} in meiner Nähe suchen – Pixel Kraftwerk aus Groitzsch für ${content.name} und Umgebung`;
  const description = `${serviceInfo.label} für Unternehmen in ${content.name} und Umgebung. ${content.metaDescription.slice(0, 100)}…`;
  const canonical = `${baseUrl}/leistungsgebiete/${regionSlug}/${service}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
  };
}

export async function generateStaticParams() {
  const { SERVICE_SLUGS } = await import('@/data/services');
  const params: { region: string; service: string }[] = [];
  for (const region of LEISTUNGSGEBIETE_SLUGS) {
    for (const service of SERVICE_SLUGS) {
      params.push({ region, service });
    }
  }
  return params;
}

export default async function Page({ params }: Props) {
  const { region, service } = await params;

  if (!(LEISTUNGSGEBIETE_SLUGS as readonly string[]).includes(region)) {
    redirect('/leistungsgebiete');
  }
  if (!isValidServiceSlug(service)) {
    redirect(`/leistungsgebiete/${region}`);
  }

  const regionSlug = getValidRegionSlug(region);
  const content = getRegionContent(regionSlug);
  const serviceInfo = getServiceBySlug(service);
  if (!serviceInfo) {
    redirect(`/leistungsgebiete/${region}`);
  }

  return (
    <RegionServicePage
      regionSlug={regionSlug}
      regionName={content.name}
      serviceSlug={service}
      serviceLabel={serviceInfo.label}
    />
  );
}
