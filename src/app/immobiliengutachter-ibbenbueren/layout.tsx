import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Ibbenbüren – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Ibbenbüren. Verkehrswertgutachten, Beleihungswert & Erbschaftsgutachten. DIA & BVS zertifiziert. Kreis Steinfurt.',
    keywords: ['Immobiliengutachter Ibbenbüren', 'Verkehrswertgutachten Ibbenbüren', 'Immobilienbewertung Ibbenbüren', 'Sachverständiger Ibbenbüren'],
    openGraph: {
        title: 'Immobiliengutachter Ibbenbüren – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Ibbenbüren. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-ibbenbueren',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
