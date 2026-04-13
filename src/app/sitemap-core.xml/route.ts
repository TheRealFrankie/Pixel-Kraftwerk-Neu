import { buildCoreSitemap } from '@/lib/sitemap';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildCoreSitemap(), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
