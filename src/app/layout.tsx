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
    images: [
      {
        url: 'https://lasarz.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lasarz Immobiliengutachter - Immobilienbewertung in Osnabrück'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lasarz - Die Immobiliengutachter in Osnabrück',
    description: 'Regionale Expertise, rechtssichere Gutachten und Festpreisgarantie für Ihre Immobilienbewertung.',
    images: ['https://lasarz.com/images/og-image.jpg']
  },
  alternates: {
    canonical: 'https://lasarz.com'
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: 'Lasarz Sachverständigenbüro',
  publisher: 'Lasarz Sachverständigenbüro',
  referrer: 'origin-when-cross-origin',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/manifest.json',
  category: 'real estate',
  applicationName: 'Lasarz Immobiliengutachter',
  themeColor: '#1A758D',
  colorScheme: 'light',
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
      <head>
        <meta name="theme-color" content="#1A758D" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Lasarz" />
        <meta name="application-name" content="Lasarz" />
        <meta name="msapplication-TileColor" content="#1A758D" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
