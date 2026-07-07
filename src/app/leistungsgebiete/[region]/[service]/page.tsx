import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import RegionServicePage from '@/views/RegionServicePage';
import { getRegionContent, getValidRegionSlug } from '@/data/regionContent';
import { getRegionServiceContent } from '@/data/regionServiceContent';
import { LEISTUNGSGEBIETE_SLUGS, type LeistungsgebietSlug } from '@/data/leistungsgebiete';
import {
  getServiceBySlug,
  isValidServiceSlug,
  SERVICE_TITLE_KEYWORDS,
  SERVICE_TITLE_LABELS,
  type ServiceSlug,
} from '@/data/services';

const baseUrl = 'https://pixelkraftwerk-ai.com';

type Props = { params: Promise<{ region: string; service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, service } = await params;
  const regionSlug = getValidRegionSlug(region);
  const content = getRegionContent(regionSlug);
  const serviceInfo = getServiceBySlug(service);

  if (!serviceInfo) {
    return {
      title: 'Leistungsgebiete | Pixel Kraftwerk',
      description: 'Übersicht unserer Leistungsgebiete in Leipzig, Groitzsch und Umgebung.',
    };
  }

  const keywords = SERVICE_TITLE_KEYWORDS[service as ServiceSlug] ?? serviceInfo.label;
  const titleLabel = SERVICE_TITLE_LABELS[service as ServiceSlug] ?? serviceInfo.label;
  const title = `${titleLabel} ${content.name} – ${keywords} in meiner Nähe`;
  const canonical = `${baseUrl}/leistungsgebiete/${regionSlug}/${service}`;

  const serviceContent = getRegionServiceContent(
    regionSlug as LeistungsgebietSlug,
    content.name,
    service as ServiceSlug,
    serviceInfo.label
  );
  const description = serviceContent.metaDescription;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
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
