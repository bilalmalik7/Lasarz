import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Bramsche – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Bramsche. Verkehrswertgutachten, Hofbewertung, Beleihungswert & Erbschaftsgutachten. Landkreis Osnabrück.',
    keywords: ['Immobiliengutachter Bramsche', 'Verkehrswertgutachten Bramsche', 'Immobilienbewertung Bramsche', 'Sachverständiger Bramsche'],
    openGraph: {
        title: 'Immobiliengutachter Bramsche – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Bramsche. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-bramsche',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
