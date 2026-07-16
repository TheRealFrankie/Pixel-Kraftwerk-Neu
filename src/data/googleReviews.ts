import { businessInfo } from './businessInfo';

export interface GoogleReview {
  name: string;
  shortName: string;
  rating: 5;
  text: string;
  date: string;
  shortQuote: string;
}

export const googleReviews: GoogleReview[] = [
  {
    name: 'Thomas Krauß',
    shortName: 'Thomas K.',
    rating: 5,
    text: 'Pixel Kraftwerk hat unsere Website neu gestaltet. Sie ist jetzt modern und übersichtlich. Die Zusammenarbeit funktioniert großartig. Unsere Wünsche werden innerhalb kürzester Zeit umgesetzt! Vielen Dank und auf weiterhin gute Zusammenarbeit!',
    date: 'Juli 2026',
    shortQuote: 'Unsere Wünsche werden innerhalb kürzester Zeit umgesetzt!',
  },
  {
    name: 'Mathias',
    shortName: 'Mathias',
    rating: 5,
    text: 'Sehr gute Zusammenarbeit und fachlich top. Sehr gerne wieder.',
    date: 'März 2026',
    shortQuote: 'Sehr gute Zusammenarbeit und fachlich top.',
  },
  {
    name: 'Michael Süptitz',
    shortName: 'Michael S.',
    rating: 5,
    text: 'Wir haben unsere komplette Website von Pixel Kraftwerk neu entwickeln lassen und sind absolut begeistert vom Ergebnis. Von der ersten Beratung bis zum fertigen Design lief alles professionell, verständlich und sehr schnell. Die neue Seite wirkt modern, übersichtlich und passt perfekt zu unserem Studio. Es konnten alle Wünsche umgesetzt werden.\n\nBesonders stark: Seit dem Relaunch und der SEO werden wir deutlich besser gefunden und bekommen spürbar mehr Anfragen. Pixel Kraftwerk hat alles so erklärt, dass man es als Laie versteht und immer direkt mitgedacht. Eine Agentur, die wirklich liefert. Klare Empfehlung!',
    date: 'Dezember 2025',
    shortQuote: 'Eine Agentur, die wirklich liefert. Klare Empfehlung!',
  },
];

export const googleAggregate = {
  rating: '5,0',
  count: googleReviews.length,
  reviewUrl: businessInfo.socialMedia.googleReview,
};
