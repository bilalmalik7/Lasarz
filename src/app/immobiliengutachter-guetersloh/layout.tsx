import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Gütersloh – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Gütersloh. Verkehrswertgutachten, Gewerbeimmobilien, Beleihungswert & Erbschaftsgutachten. OWL, Kreis Gütersloh.',
    keywords: ['Immobiliengutachter Gütersloh', 'Verkehrswertgutachten Gütersloh', 'Immobilienbewertung Gütersloh', 'Sachverständiger Gütersloh'],
    openGraph: {
        title: 'Immobiliengutachter Gütersloh – Lasarz Sachverständigenbüro',
        description: 'Immobilienbewertung in Gütersloh. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-guetersloh',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
