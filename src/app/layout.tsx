import type { Metadata } from 'next';
import Script from 'next/script';
import { businessInfo } from '@/data/businessInfo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import VoiceflowChat from '@/components/VoiceflowChat';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.url),
  title: {
    default: 'BESTE KI-Agentur Groitzsch – Pixel Kraftwerk – KI-Chatbots, Telefonassistenten, Websites & SEO in meiner Nähe',
    template: `%s | ${businessInfo.name}`,
  },
  description: 'KI-Automatisierung und Chatbots aus Groitzsch für Leipzig und Region. Terminbuchung, CRM, Websites & SEO. Jetzt Beratung sichern.',
  keywords: businessInfo.keywords,
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
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('pixelkraftwerk-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);return;}document.documentElement.setAttribute('data-theme','light');})();`,
          }}
        />
        <link rel="icon" type="image/png" href="/pixelkraftwerk-logo-quadrat.png" />
        <link rel="apple-touch-icon" href="/pixelkraftwerk-logo-quadrat.png" />
        <meta name="theme-color" content="#00E6D4" />
        <meta name="msapplication-TileColor" content="#0A0A0A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="p:domain_verify" content="10eae38c84b0c276cac28f102b415b2e" />
      </head>
      <body className="bg-dark-500 text-light-100 min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-primary-500 focus:text-dark-500 focus:font-heading focus:font-bold focus:rounded-lg focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-dark-500"
        >
          Zum Inhalt springen
        </a>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-882P0WZ1GB" strategy="afterInteractive" />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-882P0WZ1GB');`}
        </Script>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','724323713697647');fbq('track','PageView');`}
        </Script>
        <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=724323713697647&ev=PageView&noscript=1" alt="" /></noscript>
        <ThemeProvider>
          <Header />
          <main id="main" className="flex-grow">{children}</main>
          <Footer />
          <CookieBanner />
          <VoiceflowChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
