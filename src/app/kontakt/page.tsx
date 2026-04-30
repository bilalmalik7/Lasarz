import KontaktContent from './KontaktContent';

export const metadata = {
    title: 'Kontakt | Immobilienbewertung Lasarz',
    description: 'Kontaktieren Sie uns für eine kostenlose Erstberatung zur Immobilienbewertung.',
    openGraph: {
        title: 'Kontakt | Immobilienbewertung Lasarz',
        description: 'Kontaktieren Sie uns für eine kostenlose Erstberatung zur Immobilienbewertung.',
        url: 'https://lasarz.com/kontakt',
        siteName: 'Lasarz Immobiliengutachter',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: 'https://lasarz.com/images/contact-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Kontakt Lasarz Immobiliengutachter'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kontakt | Immobilienbewertung Lasarz',
        description: 'Kontaktieren Sie uns für eine kostenlose Erstberatung zur Immobilienbewertung.',
        images: ['https://lasarz.com/images/contact-hero.jpg']
    },
    alternates: {
        canonical: 'https://lasarz.com/kontakt'
    },
    robots: {
        index: true,
        follow: true,
    }
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt | Lasarz Immobiliengutachter",
    "url": "https://lasarz.com/kontakt",
    "description": "Kontaktieren Sie uns für eine kostenlose Erstberatung zur Immobilienbewertung.",
    "publisher": {
        "@type": "Organization",
        "name": "Lasarz Sachverständigenbüro",
        "logo": {
            "@type": "ImageObject",
            "url": "https://lasarz.com/images/logo.png"
        }
    },
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+49 (0) 800 6648714",
            "contactType": "customer service",
            "areaServed": "DE",
            "availableLanguage": ["German"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "+49 (0) 541 - 600 99 220",
            "contactType": "technical support",
            "areaServed": "DE",
            "availableLanguage": ["German"]
        }
    ]
};

export default function KontaktPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <KontaktContent />
        </>
    );
}