import type { Metadata } from 'next';
import RegionPage from '@/views/RegionPage';
import { getRegionContent, getValidRegionSlug } from '@/data/regionContent';
import { LEISTUNGSGEBIETE_SLUGS } from '@/data/leistungsgebiete';

const baseUrl = 'https://pixelkraftwerk-ai.com';

type Props = { params: Promise<{ region: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const slug = getValidRegionSlug(region);
  const content = getRegionContent(slug);
  return {
    title: { absolute: content.title },
    description: content.metaDescription,
    alternates: { canonical: `${baseUrl}/leistungsgebiete/${slug}` },
  };
}

export async function generateStaticParams() {
  return LEISTUNGSGEBIETE_SLUGS.map((region) => ({ region }));
}

export default async function Page({ params }: Props) {
  const { region } = await params;
  return <RegionPage region={region} />;
}
