import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Osnabrück – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Osnabrück. Verkehrswertgutachten, Erbschaftsgutachten, Beleihungswert & Schadensgutachten. 3.500+ Gutachten seit 2009. DIA & BVS zertifiziert.',
    keywords: ['Immobiliengutachter Osnabrück', 'Verkehrswertgutachten Osnabrück', 'Immobilienbewertung Osnabrück', 'Sachverständiger Osnabrück'],
    openGraph: {
        title: 'Immobiliengutachter Osnabrück – Lasarz Sachverständigenbüro',
        description: 'Unabhängige, gerichtsverwertbare Immobilienbewertung in Osnabrück. DIA & BVS zertifiziert. Seit 2009.',
        url: 'https://lasarz.com/immobiliengutachter-osnabrueck',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
