import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-primary-500 font-heading font-bold text-6xl mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-light-400 mb-8">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          Vielleicht finden Sie auf unserer Startseite, was Sie suchen.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-500 text-dark-500 font-heading font-bold text-base hover:bg-primary-400 transition-colors duration-300 rounded-lg"
        >
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}
