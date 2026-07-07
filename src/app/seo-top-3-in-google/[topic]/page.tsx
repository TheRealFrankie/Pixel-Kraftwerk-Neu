import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import ServiceSubpage from '@/views/ServiceSubpage';
import { getSubpagesForService, getSubpageBySlug, getGlobalRoutePrefix, buildGlobalSubpageMetaTitle } from '@/data/serviceSubpages';
import { getSubpageContent } from '@/data/subpageContent';

const SERVICE_SLUG = 'seo-top-3';
const SERVICE_LABEL = 'SEO: Top 3 in Google';
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
    title: buildGlobalSubpageMetaTitle(subpageDef),
    description: content.metaDescription,
    alternates: { canonical: `${baseUrl}${globalRoute}/${topic}` },
  };
}

export default async function Page({ params }: Props) {
  const { topic } = await params;
  const subpageDef = getSubpageBySlug(SERVICE_SLUG, topic);
  const content = getSubpageContent(SERVICE_SLUG, topic);

  if (!subpageDef || !content) {
    redirect('/seo-top-3-in-google');
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
