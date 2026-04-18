import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  // Hinweis: Bei `output: 'export'` werden diese Redirects NICHT als HTTP-301
  // ausgeliefert. Vercel uebernimmt sie ueber vercel.json. Bei Hosting-Wechsel
  // muessen die Regeln dort (z.B. _redirects, nginx) nachgebaut werden.
  async redirects() {
    return [
      { source: '/termine-buchungen', destination: '/automatisierungen', permanent: true },
      { source: '/crm-lead-management', destination: '/crm-systeme', permanent: true },
      { source: '/website-seo', destination: '/leistungen', permanent: true },
      {
        source: '/leistungsgebiete/:region/website-seo',
        destination: '/leistungsgebiete/:region/webseiten',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
