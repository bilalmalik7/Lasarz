import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Bünde – Verkehrswertgutachten & Bewertung OWL | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Bünde & OWL. Verkehrswertgutachten § 194 BauGB, Erbschaftsgutachten, Scheidungsgutachten & Beleihungswertgutachten. Dipl.-Sachverständiger (DIA) · TEGoVA REV · BVS e.V. ✓ Festpreisgarantie',
    keywords: [
        'Immobiliengutachter Bünde',
        'Verkehrswertgutachten Bünde',
        'Immobilienbewertung Bünde',
        'Sachverständiger Bünde',
        'Immobiliengutachter Ostwestfalen',
        'Gutachter OWL',
        'Immobilienbewertung Kirchlengern',
        'Immobiliengutachter Löhne',
        'Immobiliengutachter Enger',
        'Verkehrswertgutachten Ostwestfalen',
    ],
    openGraph: {
        title: 'Immobiliengutachter Bünde – Lasarz Sachverständigenbüro',
        description: 'Dipl.-Sachverständiger (DIA) & TEGoVA REV in Bünde. Gerichtsfeste Verkehrswertgutachten für OWL. Büro: Holzhauser Straße 79, 32257 Bünde.',
        url: 'https://lasarz.com/immobiliengutachter-buende',
        type: 'website',
    },
    alternates: {
        canonical: 'https://lasarz.com/immobiliengutachter-buende',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
