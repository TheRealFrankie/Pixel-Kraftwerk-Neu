import { buildSitemapIndex } from '@/lib/sitemap';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildSitemapIndex(), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
