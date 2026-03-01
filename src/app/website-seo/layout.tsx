import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weiterleitung',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/services' },
};

export default function WebsiteSeoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
