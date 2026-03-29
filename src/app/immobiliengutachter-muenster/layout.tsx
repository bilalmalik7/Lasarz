import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Münster – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Münster. Verkehrswertgutachten, Altbaubewertung, Beleihungswert & Erbschaftsgutachten. Experten für das Münsterland.',
    keywords: ['Immobiliengutachter Münster', 'Verkehrswertgutachten Münster', 'Immobilienbewertung Münster', 'Sachverständiger Münster'],
    openGraph: {
        title: 'Immobiliengutachter Münster – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in der Fahrradstadt Münster. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-muenster',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
