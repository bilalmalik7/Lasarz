import FaqContent from './FaqContent';

export const metadata = {
    title: 'FAQ - Häufig gestellte Fragen | Immobilienbewertung Osnabrück',
    description: 'Alle häufig gestellten Fragen zu Immobilienbewertung, Verkehrswertgutachten, Erbschaftsgutachten und anderen Themen in Osnabrück. Finden Sie hier Antworten auf Ihre wichtigsten Fragen.',
    openGraph: {
        title: 'FAQ - Häufig gestellte Fragen | Immobilienbewertung Osnabrück',
        description: 'Alle häufig gestellten Fragen zu Immobilienbewertung, Verkehrswertgutachten, Erbschaftsgutachten und anderen Themen in Osnabrück. Finden Sie hier Antworten auf Ihre wichtigsten Fragen.',
        url: 'https://lasarz.com/faq',
        siteName: 'Lasarz Immobiliengutachter',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: 'https://lasarz.com/images/faq-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'FAQ Immobilienbewertung Osnabrück'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ - Häufig gestellte Fragen | Immobilienbewertung Osnabrück',
        description: 'Alle häufig gestellten Fragen zu Immobilienbewertung, Verkehrswertgutachten, Erbschaftsgutachten und anderen Themen in Osnabrück. Finden Sie hier Antworten auf Ihre wichtigsten Fragen.',
        images: ['https://lasarz.com/images/faq-hero.jpg']
    },
    alternates: {
        canonical: 'https://lasarz.com/faq'
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function FAQPage() {
    return <FaqContent />;
}
