import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/termine-buchungen', destination: '/automatisierungen', permanent: true },
      { source: '/crm-lead-management', destination: '/automatisierungen', permanent: true },
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
