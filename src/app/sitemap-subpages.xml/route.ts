import { buildSubpageSitemap } from '@/lib/sitemap';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildSubpageSitemap(), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
