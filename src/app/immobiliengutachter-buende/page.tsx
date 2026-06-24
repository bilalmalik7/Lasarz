import { CityPagePremium, type PremiumCityData } from '@/components/sections/CityPagePremium';
import { Scale, FileText, Building, Home, Users, Zap, ShieldCheck, Target } from 'lucide-react';

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lasarz Sachverständigenbüro – Bünde',
    '@id': 'https://lasarz.com/immobiliengutachter-buende',
    image: 'https://lasarz.com/images/portrait.jpg',
    telephone: '+4952237941350',
    email: 'buende@lasarz.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Holzhauser Straße 79',
        addressLocality: 'Bünde',
        postalCode: '32257',
        addressCountry: 'DE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '52.2002',
        longitude: '8.5770',
    },
    url: 'https://lasarz.com/immobiliengutachter-buende',
    description:
        'Zertifizierter Immobiliengutachter in Bünde – Dipl.-Sachverständiger (DIA), TEGoVA REV, BVS e.V. Verkehrswertgutachten § 194 BauGB für Bünde und ganz Ostwestfalen.',
    priceRange: '€€',
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:30',
        },
    ],
    hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Dipl.-Sachverständiger (DIA)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'DIAzert DIN EN ISO/IEC 17024' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'TEGoVA Recognised European Valuer (REV)' },
    ],
    areaServed: ['Bünde', 'Kirchlengern', 'Löhne', 'Enger', 'Herford', 'Bielefeld', 'Bad Oeynhausen', 'Spenge', 'Rödinghausen'],
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '47',
        bestRating: '5',
    },
};

const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Was kostet ein Immobiliengutachten in Bünde?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Die Kosten für ein Verkehrswertgutachten in Bünde richten sich nach dem Wert der Immobilie und dem Umfang der Bewertung. Wir bieten Festpreise ohne versteckte Kosten. Ein Kurzgutachten beginnt ab ca. 800 €, ein vollständiges Verkehrswertgutachten ab ca. 1.500 €. Vereinbaren Sie eine kostenlose Erstberatung für ein individuelles Angebot.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange dauert ein Gutachten in Bünde?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ein Verkehrswertgutachten für Bünde und OWL ist in der Regel innerhalb von 10–14 Werktagen nach Besichtigung fertig. Bei dringenden Fällen bieten wir einen Expressservice an.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Qualifikationen hat Ihr Gutachter in Bünde?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Marc-André Lasarz ist Dipl.-Sachverständiger (DIA), zertifiziert nach DIN EN ISO/IEC 17024 (DIAzert), TEGoVA Recognised European Valuer (REV), Mitglied im BVS e.V. und Bachelor of Arts in Real Estate (Steinbeis Hochschule Berlin).',
            },
        },
    ],
};

const buendeData: PremiumCityData = {
    slug: 'buende',
    name: 'Bünde',
    state: 'Nordrhein-Westfalen',
    region: 'Bünde · Kirchlengern · Löhne · OWL',
    heroSubtitle:
        'Ihr Dipl.-Sachverständiger (DIA) für Immobilienbewertung in Bünde und ganz Ostwestfalen. Verkehrswertgutachten § 194 BauGB, gerichtsfest und vom Finanzamt anerkannt – mit Festpreisgarantie und persönlichem Büro vor Ort.',
    phone: '+49 (0) 5223 794 13 50',
    email: 'buende@lasarz.com',
    address: 'Holzhauser Straße 79, 32257 Bünde',
    lat: '52.2002',
    lng: '8.5770',
    stats: [
        { value: '3.500+', label: 'Gutachten erstellt' },
        { value: '19+', label: 'Jahre Erfahrung' },
        { value: '98%', label: 'Weiterempfehlungsrate' },
        { value: '10', label: 'Tage Ø Lieferzeit' },
    ],
    areas: [
        'Bünde', 'Kirchlengern', 'Löhne', 'Enger', 'Herford', 'Spenge',
        'Rödinghausen', 'Bad Oeynhausen', 'Minden', 'Bielefeld', 'Vlotho',
        'Porta Westfalica', 'Lübbecke', 'Hüllhorst', 'Rahden', 'Bünde-Süd',
    ],
    reviews: [
        {
            name: 'Stefan K.',
            location: 'Bünde',
            text: 'Herr Lasarz hat unser Haus in Bünde vor dem Verkauf professionell bewertet. Das Gutachten war innerhalb von 10 Tagen fertig, absolut und hat uns bei der Preisverhandlung sehr geholfen.',
        },
        {
            name: 'Andrea M.',
            location: 'Kirchlengern',
            text: 'Für die Erbschaftsauseinandersetzung haben wir ein Verkehrswertgutachten gebraucht. Marc-André Lasarz hat uns sehr kompetent und transparent beraten. Das Finanzamt hat das Gutachten sofort anerkannt.',
        },
        {
            name: 'Thomas H.',
            location: 'Löhne',
            text: 'Wir brauchten ein gerichtsverwertbares Gutachten für unsere Scheidung. Das Gutachten war neutral, fundiert und wurde vom Gericht problemlos akzeptiert. Klare Empfehlung!',
        },
        {
            name: 'Claudia R.',
            location: 'Enger',
            text: 'Sehr professionelle Arbeit. Das Restnutzungsdauergutachten hat uns als Vermieter eine erhebliche Steuerersparnis gebracht. Schnell, kompetent und fair berechnet.',
        },
    ],
    services: [
        {
            icon: <Scale size={22} strokeWidth={1.8} />,
            title: 'Verkehrswertgutachten § 194 BauGB',
            desc: 'Gerichtsfestes Vollgutachten nach ImmoWertV – für Erbschaft, Scheidung, Kauf/Verkauf und Finanzamt. Anerkannt von allen deutschen Gerichten und Behörden.',
        },
        {
            icon: <FileText size={22} strokeWidth={1.8} />,
            title: 'Kurzgutachten & Wertindikation',
            desc: 'Schnelle Immobilienbewertung für private Zwecke, außergerichtliche Einigungen und erste Preiseinschätzungen – kompakt und .',
        },
        {
            icon: <Building size={22} strokeWidth={1.8} />,
            title: 'Beleihungswertgutachten (BelWertV)',
            desc: 'Bankkonformes Beleihungswertgutachten nach BelWertV für Finanzierungen, Refinanzierungen und Kreditverlängerungen.',
        },
        {
            icon: <Home size={22} strokeWidth={1.8} />,
            title: 'Erbschaft & Schenkung',
            desc: 'Wertermittlung für das Finanzamt nach § 194 BauGB. Bedarfsbewertung für Erbschaftssteuer und Schenkungssteuer – vom Finanzamt anerkannt.',
        },
        {
            icon: <Users size={22} strokeWidth={1.8} />,
            title: 'Scheidung & Zugewinnausgleich',
            desc: 'Neutrale, gerichtsverwertbare Bewertung für familienrechtliche Auseinandersetzungen. Ermittlung des Zugewinnausgleichs nach § 1376 BGB.',
        },
        {
            icon: <Zap size={22} strokeWidth={1.8} />,
            title: 'Restnutzungsdauergutachten',
            desc: 'Steueroptimierung für Vermieter: Nachweis einer kürzeren Nutzungsdauer gemäß § 7 EStG für höhere AfA und nachhaltige Steuerersparnis.',
        },
        {
            icon: <ShieldCheck size={22} strokeWidth={1.8} />,
            title: 'Gewerbeimmobilienbewertung',
            desc: 'Bewertung von Büros, Lagerhallen, Einzelhandels- und Industrieimmobilien nach Ertragswert- und DCF-Verfahren – für Kauf, Verkauf und Bilanz.',
        },
        {
            icon: <Target size={22} strokeWidth={1.8} />,
            title: 'Ankaufberatung & Due Diligence',
            desc: 'Professionelle Kaufberatung vor Ihrem Immobilienerwerb in OWL – damit Sie keinen überhöhten Preis zahlen und Risiken frühzeitig erkennen.',
        },
    ],
    seoText: {
        title: 'Immobiliengutachter Bünde – was Sie wissen sollten',
        paragraphs: [
            'Ein <strong>Immobiliengutachter in Bünde</strong> wird immer dann benötigt, wenn Sie den rechtsverbindlichen Marktwert Ihrer Immobilie in Ostwestfalen benötigen – sei es für den Kauf oder Verkauf, für Erbschaften, Scheidungen oder zur Vorlage beim Finanzamt. Das Sachverständigenbüro Lasarz betreibt seit Jahren ein Büro direkt in Bünde (Holzhauser Straße 79) und kennt den lokalen Immobilienmarkt in OWL in- und auswendig.',
            'Unser Leistungsspektrum in Bünde umfasst <strong>Verkehrswertgutachten nach § 194 BauGB</strong>, <strong>Beleihungswertgutachten nach BelWertV</strong>, <strong>Restnutzungsdauergutachten</strong> für steuerliche Zwecke sowie <strong>Kurzgutachten</strong> für private Bewertungen. Wir bewerten Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Gewerbeimmobilien und landwirtschaftliche Flächen in Bünde, Kirchlengern, Löhne, Enger, Herford und dem gesamten Raum OWL.',
            'Marc-André Lasarz ist <strong>Dipl.-Sachverständiger (DIA)</strong>, zertifiziert nach <strong>DIN EN ISO/IEC 17024 (DIAzert)</strong> und als <strong>TEGoVA Recognised European Valuer (REV)</strong> europaweit anerkannt. Zusätzlich ist er Mitglied im <strong>BVS e.V.</strong> (Bundesverband öffentlich bestellter und vereidigter sowie qualifizierter Sachverständiger) und Bachelor of Arts in Real Estate (Steinbeis Hochschule Berlin). Seine Gutachten werden von allen deutschen Gerichten, Behörden und Finanzämtern anerkannt.',
            'Unsere Besonderheit: <strong>Festpreisgarantie ohne versteckte Kosten</strong>. Sie erhalten im Vorfeld ein verbindliches Angebot, sodass Sie genau wissen, was Ihr Gutachten in Bünde kostet. Vereinbaren Sie noch heute Ihre kostenlose und unverbindliche Erstberatung – telefonisch unter <strong>+49 (0) 5223 794 13 50</strong> oder per E-Mail an buende@lasarz.com.',
        ],
    },
    faqs: [
        {
            q: 'Was kostet ein Immobiliengutachten in Bünde?',
            a: 'Die Kosten richten sich nach dem Immobilienwert und dem Gutachtenumfang. Ein Kurzgutachten beginnt ab ca. 800 €, ein vollständiges Verkehrswertgutachten ab ca. 1.500 €. Wir bieten Festpreise mit vollständiger Kostentransparenz – kein versteckter Nachbesserungsbedarf. Kontaktieren Sie uns für ein individuelles Angebot.',
        },
        {
            q: 'Wie lange dauert ein Gutachten in Bünde?',
            a: 'Nach der Ortsbegehung liefern wir Ihr Verkehrswertgutachten in der Regel innerhalb von 10–14 Werktagen. Bei dringenden Sachverhalten (z. B. kurzfristige Gerichtstermine) bieten wir einen Expressservice an – sprechen Sie uns an.',
        },
        {
            q: 'Welche Zertifizierungen hat Ihr Gutachter in Bünde?',
            a: 'Marc-André Lasarz ist Dipl.-Sachverständiger (DIA), zertifiziert nach DIN EN ISO/IEC 17024 (DIAzert), TEGoVA Recognised European Valuer (REV), Mitglied im BVS e.V., Bachelor of Arts in Real Estate sowie geprüfter Immobilien-Fachwirt (IHK). Er besitzt außerdem die Qualifikationen als Beleihungswertermittler (DIA) und Bauschadenbewerter (DIA).',
        },
        {
            q: 'Wird das Gutachten vom Finanzamt Bünde anerkannt?',
            a: 'Ja. Unsere Verkehrswertgutachten nach § 194 BauGB werden vom Finanzamt als Grundlage für Erbschaft- und Schenkungssteuer anerkannt – insbesondere, wenn sie von einem nach DIN EN ISO/IEC 17024 zertifizierten Sachverständigen erstellt wurden, was bei uns der Fall ist.',
        },
        {
            q: 'In welchen Stadtteilen und Gemeinden um Bünde sind Sie tätig?',
            a: 'Wir sind in Bünde selbst sowie in Kirchlengern, Löhne, Enger, Herford, Spenge, Rödinghausen, Bad Oeynhausen, Minden, Porta Westfalica, Bielefeld, Vlotho und dem gesamten Kreis Herford und Minden-Lübbecke tätig.',
        },
        {
            q: 'Was ist ein Restnutzungsdauergutachten und lohnt es sich in Bünde?',
            a: 'Ein Restnutzungsdauergutachten weist nach, dass Ihre vermietete Immobilie eine kürzere wirtschaftliche Restnutzungsdauer hat als die gesetzlich angenommene. Das erlaubt Ihnen als Vermieter eine höhere jährliche Abschreibung (AfA) nach § 7 EStG und spart erhebliche Steuern. Für viele Vermieter in Bünde und OWL amortisiert sich das Gutachten bereits im ersten Jahr.',
        },
    ],
};

export default function ImmobiliengutachterBuendePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <CityPagePremium data={buendeData} />
        </>
    );
}
