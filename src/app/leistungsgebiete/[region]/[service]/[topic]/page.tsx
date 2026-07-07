import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import ServiceSubpage from '@/views/ServiceSubpage';
import { getRegionContent, getValidRegionSlug } from '@/data/regionContent';
import { LEISTUNGSGEBIETE_SLUGS } from '@/data/leistungsgebiete';
import { getServiceBySlug, isValidServiceSlug } from '@/data/services';
import {
  getSubpageBySlug,
  isValidSubpageSlug,
  getAllSubpageParams,
  getGlobalRoutePrefix,
  SERVICES_WITH_SUBPAGES,
} from '@/data/serviceSubpages';
import { getSubpageContent } from '@/data/subpageContent';
import { getRegionalSubpageContent } from '@/data/subpageRegionalContent';

const baseUrl = 'https://pixelkraftwerk-ai.com';

type Props = { params: Promise<{ region: string; service: string; topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, service, topic } = await params;
  const regionSlug = getValidRegionSlug(region);
  const regionData = getRegionContent(regionSlug);
  const subpageDef = getSubpageBySlug(service, topic);
  const content = getSubpageContent(service, topic);

  if (!subpageDef || !content) {
    return {
      title: 'Leistungsgebiete | Pixel Kraftwerk',
      description: 'Übersicht unserer Leistungsgebiete in Leipzig, Groitzsch und Umgebung.',
    };
  }

  const title = `${subpageDef.label} ${regionData.name} – ${subpageDef.titleKeywords} in meiner Nähe`;
  const description = `${subpageDef.label} für Unternehmen in ${regionData.name} und Umgebung. ${content.metaDescription.slice(0, 100)}…`;
  const canonical = `${baseUrl}/leistungsgebiete/${regionSlug}/${service}/${topic}`;

  return {
    title,
    description,
    alternates: { canonical },
  };
}

export async function generateStaticParams() {
  const allTopics = getAllSubpageParams();
  const params: { region: string; service: string; topic: string }[] = [];

  for (const region of LEISTUNGSGEBIETE_SLUGS) {
    for (const { service, topic } of allTopics) {
      if (SERVICES_WITH_SUBPAGES.includes(service as typeof SERVICES_WITH_SUBPAGES[number])) {
        params.push({ region, service, topic });
      }
    }
  }

  return params;
}

export default async function Page({ params }: Props) {
  const { region, service, topic } = await params;

  if (!(LEISTUNGSGEBIETE_SLUGS as readonly string[]).includes(region)) {
    redirect('/leistungsgebiete');
  }
  if (!isValidServiceSlug(service) || !isValidSubpageSlug(service, topic)) {
    redirect(`/leistungsgebiete/${region}`);
  }

  const regionSlug = getValidRegionSlug(region);
  const regionData = getRegionContent(regionSlug);
  const serviceInfo = getServiceBySlug(service);
  const subpageDef = getSubpageBySlug(service, topic);
  const content = getSubpageContent(service, topic);

  if (!serviceInfo || !subpageDef || !content) {
    redirect(`/leistungsgebiete/${region}`);
  }

  const globalRoute = getGlobalRoutePrefix(service);
  const regionalContent = getRegionalSubpageContent(regionSlug, service, topic);

  return (
    <ServiceSubpage
      content={content}
      subpageDef={subpageDef}
      parentService={{ slug: service, label: serviceInfo.label, globalRoute }}
      regionSlug={regionSlug}
      regionName={regionData.name}
      regionalContent={regionalContent}
    />
  );
}
