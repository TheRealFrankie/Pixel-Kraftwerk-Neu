import { buildLegalSitemap } from '@/lib/sitemap';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLegalSitemap(), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
