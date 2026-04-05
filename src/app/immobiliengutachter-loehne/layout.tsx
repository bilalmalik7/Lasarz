import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Löhne – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Löhne. Verkehrswertgutachten, Beleihungswert & Erbschaftsgutachten. Kreis Herford, Ostwestfalen-Lippe.',
    keywords: ['Immobiliengutachter Löhne', 'Verkehrswertgutachten Löhne', 'Immobilienbewertung Löhne', 'Sachverständiger Löhne'],
    openGraph: {
        title: 'Immobiliengutachter Löhne – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Löhne. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-loehne',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
