import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Bielefeld – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Bielefeld. Verkehrswertgutachten, Gewerbebewertung, Beleihungswert & Erbschaftsgutachten. Experten für OWL.',
    keywords: ['Immobiliengutachter Bielefeld', 'Verkehrswertgutachten Bielefeld', 'Immobilienbewertung Bielefeld', 'Sachverständiger Bielefeld'],
    openGraph: {
        title: 'Immobiliengutachter Bielefeld – Lasarz Sachverständigenbüro',
        description: 'Professionelle Immobilienbewertung in Bielefeld & OWL. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-bielefeld',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
