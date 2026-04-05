import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Borgholzhausen – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Borgholzhausen. Verkehrswertgutachten, Beleihungswert & Erbschaftsgutachten. Kreis Gütersloh, Teutoburger Wald.',
    keywords: ['Immobiliengutachter Borgholzhausen', 'Verkehrswertgutachten Borgholzhausen', 'Immobilienbewertung Borgholzhausen', 'Sachverständiger Borgholzhausen'],
    openGraph: {
        title: 'Immobiliengutachter Borgholzhausen – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Borgholzhausen. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-borgholzhausen',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
