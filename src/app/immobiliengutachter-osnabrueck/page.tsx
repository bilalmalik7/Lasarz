'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';
import Head from 'next/head';

export default function ImmobiliengutachterOsnabrueckPage() {
    const data = getCityPageBySlug('osnabrueck')!;
    
    // Add structured data for LocalBusiness
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Lasarz Sachverständigenbüro",
        "image": "https://lasarz.com/images/logo.png",
        "telephone": "+49 (0) 541 - 600 99 220",
        "email": "osnabrueck@lasarz.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Katharinenstraße 111",
            "addressLocality": "Osnabrück",
            "postalCode": "49078",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.279924",
            "longitude": "8.040000"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "url": "https://lasarz.com/immobiliengutachter-osnabrueck",
        "sameAs": [
            "https://www.facebook.com/lasarz",
            "https://www.instagram.com/lasarz_sachverstaendigenbuero",
            "https://twitter.com/lasarz"
        ],
        "description": "Zertifizierter Immobiliengutachter in Osnabrück. Verkehrswertgutachten, Erbschaftsgutachten, Beleihungswert & Schadensgutachten. 3.500+ Gutachten seit 2009.",
        "priceRange": "€€"
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <CityPageTemplate data={data} />
        </>
    );
}
