import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Finanzierungsrechner – Monatliche Rate berechnen | Lasarz',
    description: 'Berechnen Sie kostenlos und unverbindlich Ihre monatliche Finanzierungsrate für Immobilien in Osnabrück. Kaufpreis, Eigenkapital, Zinssatz und Tilgung individuell anpassen.',
    keywords: ['Finanzierungsrechner', 'Immobilienfinanzierung', 'monatliche Rate berechnen', 'Baufinanzierung Osnabrück', 'Tilgungsrechner', 'Hypothekenrechner'],
    openGraph: {
        title: 'Persönlicher Finanzierungsrechner – Lasarz Immobiliengutachter',
        description: 'Kostenloser Finanzierungsrechner: Berechnen Sie Ihre monatliche Rate, Zinslast und Restschuld für Ihre Immobilie in Osnabrück.',
        url: 'https://lasarz.com/finanzierungsrechner',
        siteName: 'Lasarz Immobiliengutachter',
        locale: 'de_DE',
        type: 'website',
    },
};

export default function FinanzierungsrechnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
