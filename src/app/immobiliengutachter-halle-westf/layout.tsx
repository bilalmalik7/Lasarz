import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Halle (Westf.) – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Halle (Westf.). Verkehrswertgutachten, Beleihungswert & Erbschaftsgutachten. Kreis Gütersloh, Teutoburger Wald.',
    keywords: ['Immobiliengutachter Halle Westfalen', 'Verkehrswertgutachten Halle', 'Immobilienbewertung Halle Westfalen', 'Sachverständiger Halle Westf'],
    openGraph: {
        title: 'Immobiliengutachter Halle (Westf.) – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Halle (Westf.). DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-halle-westf',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
