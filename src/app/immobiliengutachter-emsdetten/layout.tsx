import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Emsdetten – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Emsdetten. Verkehrswertgutachten, Beleihungswert & Erbschaftsgutachten. DIA & BVS zertifiziert. Kreis Steinfurt.',
    keywords: ['Immobiliengutachter Emsdetten', 'Verkehrswertgutachten Emsdetten', 'Immobilienbewertung Emsdetten', 'Sachverständiger Emsdetten'],
    openGraph: {
        title: 'Immobiliengutachter Emsdetten – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Emsdetten. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-emsdetten',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
