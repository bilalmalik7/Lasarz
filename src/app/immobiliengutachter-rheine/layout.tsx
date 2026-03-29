import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Rheine – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Rheine. Verkehrswertgutachten, Gewerbeimmobilien, Beleihungswert & Erbschaftsgutachten. Experten für den Kreis Steinfurt.',
    keywords: ['Immobiliengutachter Rheine', 'Verkehrswertgutachten Rheine', 'Immobilienbewertung Rheine', 'Sachverständiger Rheine'],
    openGraph: {
        title: 'Immobiliengutachter Rheine – Lasarz Sachverständigenbüro',
        description: 'Kompetente Immobilienbewertung an der Ems. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-rheine',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
