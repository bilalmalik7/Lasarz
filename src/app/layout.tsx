import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lasarz - Die Immobiliengutachter | Immobilienbewertung Osnabrück',
  description: 'Ihr Partner zur Erstellung von Immobiliengutachten und Beratung beim Kauf und Verkauf von Immobilien. Zertifizierte Immobilienbewerter in Osnabrück mit Festpreisgarantie.',
  keywords: ['Immobilienbewertung Osnabrück', 'Immobiliengutachter', 'Verkehrswertgutachten', 'Kurzgutachten', 'Kaufberatung Immobilien'],
  openGraph: {
    title: 'Lasarz - Die Immobiliengutachter in Osnabrück',
    description: 'Regionale Expertise, rechtssichere Gutachten und Festpreisgarantie für Ihre Immobilienbewertung.',
    url: 'https://lasarz.com',
    siteName: 'Lasarz Immobiliengutachter',
    locale: 'de_DE',
    type: 'website',
  },
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
