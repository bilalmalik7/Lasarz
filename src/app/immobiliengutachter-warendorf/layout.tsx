import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Immobiliengutachter Warendorf – Verkehrswertgutachten & Bewertung | Lasarz',
    description: 'Zertifizierter Immobiliengutachter in Warendorf. Verkehrswertgutachten, Hofbewertung, Beleihungswert & Erbschaftsgutachten. Kreis Warendorf, Münsterland.',
    keywords: ['Immobiliengutachter Warendorf', 'Verkehrswertgutachten Warendorf', 'Immobilienbewertung Warendorf', 'Sachverständiger Warendorf'],
    openGraph: { title: 'Immobiliengutachter Warendorf – Lasarz', description: 'Immobilienbewertung in Warendorf. DIA & BVS zertifiziert.', url: 'https://lasarz.com/immobiliengutachter-warendorf' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
