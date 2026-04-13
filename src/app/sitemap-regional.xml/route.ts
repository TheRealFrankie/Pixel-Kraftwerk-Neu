import { buildRegionalSitemap } from '@/lib/sitemap';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildRegionalSitemap(), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
