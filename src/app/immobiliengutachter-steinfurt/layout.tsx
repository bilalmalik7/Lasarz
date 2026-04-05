import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Steinfurt – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Steinfurt. Verkehrswertgutachten, Altbaubewertung, Beleihungswert & Erbschaftsgutachten. Kreis Steinfurt, Münsterland.',
    keywords: ['Immobiliengutachter Steinfurt', 'Verkehrswertgutachten Steinfurt', 'Immobilienbewertung Steinfurt', 'Sachverständiger Steinfurt'],
    openGraph: {
        title: 'Immobiliengutachter Steinfurt – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Steinfurt. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-steinfurt',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
