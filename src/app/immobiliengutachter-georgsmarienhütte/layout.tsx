import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Georgsmarienhütte – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Georgsmarienhütte. Verkehrswertgutachten, Beleihungswert & Erbschaftsgutachten. Landkreis Osnabrück.',
    keywords: ['Immobiliengutachter Georgsmarienhütte', 'Verkehrswertgutachten Georgsmarienhütte', 'Immobilienbewertung Georgsmarienhütte', 'Sachverständiger Georgsmarienhütte'],
    openGraph: {
        title: 'Immobiliengutachter Georgsmarienhütte – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Georgsmarienhütte. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-georgsmarienhütte',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
