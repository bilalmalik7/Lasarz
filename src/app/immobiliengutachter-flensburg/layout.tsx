import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Immobiliengutachter Flensburg – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Flensburg. Verkehrswertgutachten, Denkmalschutz, Hafenimmobilien & Erbschaftsgutachten. Experten für Schleswig-Holstein. DIA & BVS zertifiziert.',
    keywords: ['Immobiliengutachter Flensburg', 'Verkehrswertgutachten Flensburg', 'Immobilienbewertung Flensburg', 'Sachverständiger Flensburg'],
    openGraph: {
        title: 'Immobiliengutachter Flensburg – Lasarz Sachverständigenbüro',
        description: 'Unabhängige Immobilienbewertung in Flensburg. DIA & BVS zertifiziert.',
        url: 'https://lasarz.com/immobiliengutachter-flensburg',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
