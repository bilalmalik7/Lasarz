import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Lingen – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Lingen (Ems). Verkehrswertgutachten, Hofbewertung, Beleihungswert & Erbschaftsgutachten. Experten für das Emsland.',
    keywords: ['Immobiliengutachter Lingen', 'Verkehrswertgutachten Lingen', 'Immobilienbewertung Lingen', 'Sachverständiger Lingen'],
    openGraph: {
        title: 'Immobiliengutachter Lingen – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Lingen (Ems). DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-lingen',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
