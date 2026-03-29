import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Melle – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Melle. Verkehrswertgutachten, Hofbewertung, Beleihungswert & Erbschaftsgutachten. Ihr regionaler Partner im Grönegau.',
    keywords: ['Immobiliengutachter Melle', 'Verkehrswertgutachten Melle', 'Immobilienbewertung Melle', 'Sachverständiger Melle'],
    openGraph: {
        title: 'Immobiliengutachter Melle – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Melle und dem Grönegau. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-melle',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
