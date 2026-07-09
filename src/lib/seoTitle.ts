/**
 * Zentrale Title-Tag-Fabrik nach SEO-Schema:
 *   {Category} {City} – Pixel Kraftwerk – {Services} in meiner Nähe
 *
 * Gibt `{ absolute: '...' }` zurück, damit das globale Layout-Template
 * "%s | Pixel Kraftwerk" NICHT zusätzlich angehängt wird (kein Doppel-Suffix).
 *
 * Zeichenlänge: angestrebt ~120–200 Zeichen, niemals abgeschnitten (SEO-Freiheit).
 */

const BRAND = 'Pixel Kraftwerk';

export interface SeoTitleOptions {
  /** Primäre Kategorie, z. B. „KI-Agentur" oder „SEO-Agentur Groitzsch & Leipzig" */
  category: string;
  /** Stadtname oder Städte-Paar, z. B. „Groitzsch" oder „Groitzsch & Leipzig" */
  city: string;
  /** Komma-/und-separierte Keywords, z. B. „KI-Chatbots, Telefonassistenten & SEO" */
  services: string;
  /** „in meiner Nähe" anhängen? Standard: true */
  nearMe?: boolean;
}

/**
 * Erzeugt einen fertigen Title-String.
 * Format: `{category} {city} – Pixel Kraftwerk – {services}[ in meiner Nähe]`
 */
export function buildSeoTitleString(opts: SeoTitleOptions): string {
  const nearMeSuffix = opts.nearMe !== false ? ' in meiner Nähe' : '';
  return `${opts.category} ${opts.city} – ${BRAND} – ${opts.services}${nearMeSuffix}`;
}

/**
 * Gibt `{ absolute: title }` zurück für Next.js `metadata.title`.
 * Damit greift das Layout-Template `%s | Pixel Kraftwerk` NICHT.
 */
export function buildSeoTitle(opts: SeoTitleOptions): { absolute: string } {
  return { absolute: buildSeoTitleString(opts) };
}
