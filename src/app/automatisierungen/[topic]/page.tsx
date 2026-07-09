import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import ServiceSubpage from '@/views/ServiceSubpage';
import AutomatisierungenLeadgenerierung from '@/views/services/subpages/AutomatisierungenLeadgenerierung';
import AutomatisierungenTerminbuchung from '@/views/services/subpages/AutomatisierungenTerminbuchung';
import AutomatisierungenAngebotsprozesse from '@/views/services/subpages/AutomatisierungenAngebotsprozesse';
import AutomatisierungenEmailAutomatisierung from '@/views/services/subpages/AutomatisierungenEmailAutomatisierung';
import { getSubpagesForService, getSubpageBySlug, getGlobalRoutePrefix } from '@/data/serviceSubpages';
import { getSubpageContent } from '@/data/subpageContent';
import { buildSeoTitle } from '@/lib/seoTitle';

const SERVICE_SLUG = 'automatisierungen';
const SERVICE_LABEL = 'Anfragen, Vertrieb & Terminplanung';
const baseUrl = 'https://pixelkraftwerk-ai.com';

type Props = { params: Promise<{ topic: string }> };

const AUTOMATISIERUNGEN_META: Record<string, { label: string; keywords: string; description: string }> = {
  leadgenerierung: {
    label: 'Leadgenerierung automatisieren',
    keywords: 'Lead-Automatisierung & CRM-Anbindung',
    description:
      'Neue Anfragen automatisch erfassen, qualifizieren und nachverfolgen. Pixel Kraftwerk entwickelt individuelle Lead-Automatisierungen für Unternehmen.',
  },
  terminbuchung: {
    label: 'Terminbuchung automatisieren',
    keywords: 'Online-Terminbuchung & Kalender-Automatisierung',
    description:
      'Termine automatisch buchen, bestätigen und vorbereiten. Pixel Kraftwerk verbindet Kalender, Kundendaten und interne Abläufe.',
  },
  angebotsprozesse: {
    label: 'Angebotsprozesse automatisieren',
    keywords: 'Angebotserstellung & Angebotsautomatisierung',
    description:
      'Vom Kundenwunsch zum professionellen Angebot: Pixel Kraftwerk automatisiert Datenerfassung, Freigaben, Versand und Follow-ups.',
  },
  'email-automatisierung': {
    label: 'E-Mail-Automatisierung',
    keywords: 'E-Mail-Workflows & Postfach-Automatisierung',
    description:
      'E-Mails automatisch sortieren, zuweisen und weiterverarbeiten. Pixel Kraftwerk entwickelt individuelle E-Mail-Workflows für Unternehmen.',
  },
};

export async function generateStaticParams() {
  return getSubpagesForService(SERVICE_SLUG).map((s) => ({ topic: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;

  const customMeta = AUTOMATISIERUNGEN_META[topic];
  if (customMeta) {
    const title = buildSeoTitle({
      category: customMeta.label,
      city: 'Groitzsch & Leipzig',
      services: customMeta.keywords,
    });
    return {
      title,
      description: customMeta.description,
      alternates: { canonical: `${baseUrl}/automatisierungen/${topic}` },
      openGraph: {
        title: title.absolute,
        description: customMeta.description,
        url: `${baseUrl}/automatisierungen/${topic}`,
        type: 'website',
      },
    };
  }

  // Fallback für alle anderen Subpages
  const subpageDef = getSubpageBySlug(SERVICE_SLUG, topic);
  const content = getSubpageContent(SERVICE_SLUG, topic);
  if (!subpageDef || !content) return { title: 'Seite nicht gefunden' };
  const globalRoute = getGlobalRoutePrefix(SERVICE_SLUG);
  return {
    title: buildSeoTitle({ category: subpageDef.label, city: 'Groitzsch & Leipzig', services: subpageDef.titleKeywords }),
    description: content.metaDescription,
    alternates: { canonical: `${baseUrl}${globalRoute}/${topic}` },
  };
}

export default async function Page({ params }: Props) {
  const { topic } = await params;

  // Neue dedizierte Views für die vier Automatisierungen-Subpages
  if (topic === 'leadgenerierung') return <AutomatisierungenLeadgenerierung />;
  if (topic === 'terminbuchung') return <AutomatisierungenTerminbuchung />;
  if (topic === 'angebotsprozesse') return <AutomatisierungenAngebotsprozesse />;
  if (topic === 'email-automatisierung') return <AutomatisierungenEmailAutomatisierung />;

  // Fallback auf ServiceSubpage für unbekannte Slugs
  const subpageDef = getSubpageBySlug(SERVICE_SLUG, topic);
  const content = getSubpageContent(SERVICE_SLUG, topic);
  if (!subpageDef || !content) {
    redirect('/automatisierungen');
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
