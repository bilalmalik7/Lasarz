import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Hannover – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Hannover. Verkehrswertgutachten § 194 BauGB, Erbschaftsgutachten, Scheidungsgutachten & Beleihungswertgutachten. Dipl.-Sachverständiger (DIA) · TEGoVA REV · BVS e.V. ✓ Festpreisgarantie',
    keywords: [
        'Immobiliengutachter Hannover',
        'Verkehrswertgutachten Hannover',
        'Immobilienbewertung Hannover',
        'Sachverständiger Hannover',
        'Gutachter Hannover',
        'Immobiliengutachter Region Hannover',
        'Immobilienbewertung Garbsen',
        'Immobiliengutachter Langenhagen',
        'Immobiliengutachter Isernhagen',
        'Verkehrswertgutachten Niedersachsen',
    ],
    openGraph: {
        title: 'Immobiliengutachter Hannover – Lasarz Sachverständigenbüro',
        description: 'Dipl.-Sachverständiger (DIA) & TEGoVA REV in Hannover. Gerichtsfeste Verkehrswertgutachten für Hannover und die Region.',
        url: 'https://lasarz.com/immobiliengutachter-hannover',
        type: 'website',
    },
    alternates: {
        canonical: 'https://lasarz.com/immobiliengutachter-hannover',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
