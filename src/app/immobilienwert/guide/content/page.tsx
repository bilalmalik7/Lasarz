import { Metadata } from 'next';
import GuideContent from './GuideContent';

export const metadata: Metadata = {
  title: 'Der komplette Leitfaden zur Immobilienbewertung in Osnabrück 2026',
  description: 'Ihr umfassender Führer für Immobilienbewertung und -verkäufe in Osnabrück. Kostenlos herunterladbares E-Book mit 10 Kapiteln.',
  openGraph: {
    title: 'Der komplette Leitfaden zur Immobilienbewertung in Osnabrück 2026',
    description: 'Ihr umfassender Führer für Immobilienbewertung und -verkäufe in Osnabrück. Kostenlos herunterladbares E-Book mit 10 Kapiteln.',
    url: 'https://lasarz.com/immobilienwert/guide',
    siteName: 'Lasarz Immobiliengutachter',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://lasarz.com/images/immobilienwert-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Immobilienwert Leitfaden Osnabrück'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Der komplette Leitfaden zur Immobilienbewertung in Osnabrück 2026',
    description: 'Ihr umfassender Führer für Immobilienbewertung und -verkäufe in Osnabrück. Kostenlos herunterladbares E-Book mit 10 Kapiteln.',
    images: ['https://lasarz.com/images/immobilienwert-guide.jpg']
  },
  alternates: {
    canonical: 'https://lasarz.com/immobilienwert/guide'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ImmobilienWertGuidePage() {
  return <GuideContent />;
}