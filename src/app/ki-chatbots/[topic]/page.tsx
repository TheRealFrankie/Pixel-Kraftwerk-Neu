import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import ServiceSubpage from '@/views/ServiceSubpage';
import { getSubpagesForService, getSubpageBySlug, getGlobalRoutePrefix, buildGlobalSubpageMetaTitle } from '@/data/serviceSubpages';
import { getSubpageContent } from '@/data/subpageContent';

const SERVICE_SLUG = 'ki-chatbots';
const SERVICE_LABEL = 'KI-Chatbots';
const baseUrl = 'https://pixelkraftwerk-ai.com';

type Props = { params: Promise<{ topic: string }> };

export async function generateStaticParams() {
  return getSubpagesForService(SERVICE_SLUG).map((s) => ({ topic: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const subpageDef = getSubpageBySlug(SERVICE_SLUG, topic);
  const content = getSubpageContent(SERVICE_SLUG, topic);
  if (!subpageDef || !content) return { title: 'Seite nicht gefunden' };

  const globalRoute = getGlobalRoutePrefix(SERVICE_SLUG);
  return {
    title: { absolute: buildGlobalSubpageMetaTitle(subpageDef) },
    description: content.metaDescription,
    alternates: { canonical: `${baseUrl}${globalRoute}/${topic}` },
  };
}

export default async function Page({ params }: Props) {
  const { topic } = await params;
  const subpageDef = getSubpageBySlug(SERVICE_SLUG, topic);
  const content = getSubpageContent(SERVICE_SLUG, topic);

  if (!subpageDef || !content) {
    redirect('/ki-chatbots');
  }

  const globalRoute = getGlobalRoutePrefix(SERVICE_SLUG);

  return (
    <ServiceSubpage
      content={content}
      subpageDef={subpageDef}
      parentService={{ slug: SERVICE_SLUG, label: SERVICE_LABEL, globalRoute }}
    />
  );
}
