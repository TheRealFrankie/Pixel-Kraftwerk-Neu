import type { Metadata } from 'next';
import { businessInfo } from '@/data/businessInfo';
import { buildOrganizationSchema } from '@/lib/jsonld';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ClientProviders from '@/components/ClientProviders';
import AnalyticsScripts from '@/components/AnalyticsScripts';
import VoiceflowChat from '@/components/VoiceflowChat';
import ExitIntentModal from '@/components/ExitIntentModal';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.url),
  title: {
    default: 'KI-Agentur Groitzsch & Leipzig – KI-Chatbots, Telefonassistenten, Automatisierungen, Webseiten, SEO & CRM in meiner Nähe | Pixel Kraftwerk',
    template: '%s | Pixel Kraftwerk',
  },
  description: 'KI-Automatisierung und Chatbots aus Groitzsch für Leipzig und Region. Terminbuchung, CRM, Webseiten und SEO: Top 3 in Google. Jetzt Beratung sichern.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: businessInfo.name,
    images: [{ url: businessInfo.ogImage || businessInfo.logo, width: 1200, height: 600 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: businessInfo.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
        />
        <meta name="theme-color" content="#0E7C72" />
        <link rel="icon" type="image/png" href="/pixelkraftwerk-logo-quadrat.png" />
        <link rel="apple-touch-icon" href="/pixelkraftwerk-logo-quadrat.png" />
        <meta name="msapplication-TileColor" content="#FAFAF9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@400;500;600;700&display=swap" crossOrigin="" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=document.head,l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@400;500;600;700&display=swap';h.appendChild(l)})();`,
          }}
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </noscript>
        <meta name="p:domain_verify" content="10eae38c84b0c276cac28f102b415b2e" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-primary-500 focus:text-dark-500 focus:font-heading focus:font-bold focus:rounded-lg focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-dark-500"
        >
          Zum Inhalt springen
        </a>
        <AnalyticsScripts />
        <ClientProviders>
          <Header />
          <main id="main" className="flex-grow">{children}</main>
          <Footer />
          <CookieBanner />
          <ExitIntentModal />
          <VoiceflowChat />
        </ClientProviders>
      </body>
    </html>
  );
}
