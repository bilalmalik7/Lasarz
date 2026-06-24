import { HannoverPremium } from '@/components/sections/HannoverPremium';
import { type PremiumCityData } from '@/components/sections/CityPagePremium';
import { Scale, FileText, Building, Home, Users, Zap, ShieldCheck, Target } from 'lucide-react';

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lasarz Sachverständigenbüro – Hannover',
    '@id': 'https://lasarz.com/immobiliengutachter-hannover',
    image: 'https://lasarz.com/images/portrait.jpg',
    telephone: '+4954160099220',
    email: 'hannover@lasarz.com',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hannover',
        postalCode: '30159',
        addressCountry: 'DE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '52.3759',
        longitude: '9.7320',
    },
    url: 'https://lasarz.com/immobiliengutachter-hannover',
    description:
        'Zertifizierter Immobiliengutachter in Hannover – Dipl.-Sachverständiger (DIA), TEGoVA REV, BVS e.V. Verkehrswertgutachten § 194 BauGB für Hannover und die Region Niedersachsen.',
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
    areaServed: ['Hannover', 'Garbsen', 'Langenhagen', 'Isernhagen', 'Burgdorf', 'Lehrte', 'Barsinghausen', 'Springe', 'Wedemark'],
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '52',
        bestRating: '5',
    },
};

const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Was kostet ein Immobiliengutachten in Hannover?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Die Kosten für ein Verkehrswertgutachten in Hannover richten sich nach dem Wert der Immobilie und dem Umfang der Bewertung. Ein Kurzgutachten beginnt ab ca. 800 €, ein vollständiges Verkehrswertgutachten ab ca. 1.500 €. Wir bieten Festpreise ohne versteckte Kosten. Vereinbaren Sie eine kostenlose Erstberatung.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange dauert ein Gutachten in Hannover?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nach der Ortsbegehung liefern wir Ihr Verkehrswertgutachten für Hannover in der Regel innerhalb von 10–14 Werktagen. Bei dringenden Sachverhalten bieten wir einen Expressservice an.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Qualifikationen hat Ihr Gutachter in Hannover?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Marc-André Lasarz ist Dipl.-Sachverständiger (DIA), zertifiziert nach DIN EN ISO/IEC 17024 (DIAzert), TEGoVA Recognised European Valuer (REV), Mitglied im BVS e.V. und Bachelor of Arts in Real Estate (Steinbeis Hochschule Berlin).',
            },
        },
    ],
};

const hannoverData: PremiumCityData = {
    slug: 'hannover',
    name: 'Hannover',
    state: 'Niedersachsen',
    region: 'Hannover · Garbsen · Langenhagen · Region Hannover',
    heroSubtitle:
        'Ihr Dipl.-Sachverständiger (DIA) für Immobilienbewertung in Hannover und der gesamten Region Niedersachsen. Verkehrswertgutachten § 194 BauGB, gerichtsfest und vom Finanzamt anerkannt – mit Festpreisgarantie und schnellen Lieferzeiten.',
    phone: '+49 (0) 541 - 600 99 220',
    email: 'hannover@lasarz.com',
    address: 'Hannover, Niedersachsen',
    lat: '52.3759',
    lng: '9.7320',
    stats: [
        { value: '3.500+', label: 'Gutachten erstellt' },
        { value: '19+', label: 'Jahre Erfahrung' },
        { value: '98%', label: 'Weiterempfehlungsrate' },
        { value: '10', label: 'Tage Ø Lieferzeit' },
    ],
    areas: [
        'Hannover', 'Garbsen', 'Langenhagen', 'Isernhagen', 'Burgdorf',
        'Lehrte', 'Barsinghausen', 'Springe', 'Wedemark', 'Neustadt am Rübenberge',
        'Wunstorf', 'Sehnde', 'Hemmingen', 'Ronnenberg', 'Pattensen',
        'Laatzen', 'Seelze', 'Letter', 'Misburg', 'Anderten',
    ],
    reviews: [
        {
            name: 'Markus B.',
            location: 'Hannover-Mitte',
            text: 'Für den Verkauf unserer Eigentumswohnung in Hannover haben wir ein professionelles Gutachten benötigt. Marc-André Lasarz hat alles schnell und kompetent erledigt. Das Gutachten war innerhalb von 10 Tagen fertig und absolut überzeugend.',
        },
        {
            name: 'Sabine W.',
            location: 'Garbsen',
            text: 'Im Erbschaftsfall hat uns das Lasarz-Büro mit einem Verkehrswertgutachten sehr geholfen. Das Finanzamt hat es sofort anerkannt, kein Rückfragen, keine Probleme. Sehr empfehlenswert!',
        },
        {
            name: 'Jörg P.',
            location: 'Langenhagen',
            text: 'Scheidungsbedingt war ein gerichtsverwertbares Gutachten unabdingbar. Herr Lasarz hat neutral und fair bewertet – das Gericht hat das Gutachten problemlos akzeptiert. Klare Empfehlung für Hannover und Umgebung.',
        },
        {
            name: 'Ingrid S.',
            location: 'Isernhagen',
            text: 'Das Restnutzungsdauergutachten für unser Mehrfamilienhaus in Isernhagen hat sich gelohnt. Die Steuerersparnis war erheblich. Kompetente Beratung, faire Preise, schnelle Abwicklung.',
        },
    ],
    services: [
        {
            icon: <Scale size={22} strokeWidth={1.8} />,
            title: 'Verkehrswertgutachten § 194 BauGB',
            desc: 'Gerichtsfestes Vollgutachten nach ImmoWertV – für Erbschaft, Scheidung, Kauf/Verkauf und Finanzamt. Anerkannt von allen deutschen Gerichten, Behörden und Finanzämtern.',
        },
        {
            icon: <FileText size={22} strokeWidth={1.8} />,
            title: 'Kurzgutachten & Wertindikation',
            desc: 'Schnelle Immobilienbewertung für private Zwecke, Preisverhandlungen und erste Werteinschätzungen – kompakt, präzise und .',
        },
        {
            icon: <Building size={22} strokeWidth={1.8} />,
            title: 'Beleihungswertgutachten (BelWertV)',
            desc: 'Bankkonformes Beleihungswertgutachten nach BelWertV für Finanzierungen, Refinanzierungen und Kreditverlängerungen im Großraum Hannover.',
        },
        {
            icon: <Home size={22} strokeWidth={1.8} />,
            title: 'Erbschaft & Schenkung',
            desc: 'Wertermittlung für das Finanzamt Hannover nach § 194 BauGB. Bedarfsbewertung für Erbschaftssteuer und Schenkungssteuer – vom Finanzamt anerkannt.',
        },
        {
            icon: <Users size={22} strokeWidth={1.8} />,
            title: 'Scheidung & Zugewinnausgleich',
            desc: 'Neutrale, gerichtsverwertbare Bewertung für familienrechtliche Auseinandersetzungen. Zugewinnausgleich nach § 1376 BGB – für alle Hannoveraner Gerichte.',
        },
        {
            icon: <Zap size={22} strokeWidth={1.8} />,
            title: 'Restnutzungsdauergutachten',
            desc: 'Steueroptimierung für Vermieter in Hannover: Nachweis einer kürzeren Nutzungsdauer gemäß § 7 EStG für höhere AfA und nachhaltige Steuerersparnis.',
        },
        {
            icon: <ShieldCheck size={22} strokeWidth={1.8} />,
            title: 'Gewerbeimmobilienbewertung',
            desc: 'Bewertung von Büros, Lager-, Einzelhandels- und Industrieimmobilien in Hannover nach Ertragswert- und DCF-Verfahren – für Kauf, Verkauf und Bilanz.',
        },
        {
            icon: <Target size={22} strokeWidth={1.8} />,
            title: 'Ankaufberatung & Due Diligence',
            desc: 'Professionelle Kaufberatung vor Ihrem Immobilienerwerb in Hannover und der Region – damit Sie keinen überhöhten Preis zahlen und Risiken frühzeitig erkennen.',
        },
    ],
    seoText: {
        title: 'Immobiliengutachter Hannover – was Sie wissen sollten',
        paragraphs: [
            'Ein <strong>Immobiliengutachter in Hannover</strong> wird immer dann benötigt, wenn Sie den rechtsverbindlichen Marktwert Ihrer Immobilie in Niedersachsen benötigen – sei es für Kauf oder Verkauf, für Erbschaften, Scheidungen oder zur Vorlage beim Finanzamt Hannover. Das Sachverständigenbüro Lasarz ist in der gesamten Region Hannover tätig und kennt die Besonderheiten des lokalen Immobilienmarkts – von der Hannoveraner Innenstadt über Garbsen, Langenhagen und Isernhagen bis in den Großraum Niedersachsen.',
            'Unser Leistungsspektrum in Hannover umfasst <strong>Verkehrswertgutachten nach § 194 BauGB</strong>, <strong>Beleihungswertgutachten nach BelWertV</strong>, <strong>Restnutzungsdauergutachten</strong> für steuerliche Zwecke sowie <strong>Kurzgutachten</strong> für private Bewertungen. Wir bewerten Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Gewerbeimmobilien sowie Grundstücke in Hannover und dem gesamten Umland.',
            'Marc-André Lasarz ist <strong>Dipl.-Sachverständiger (DIA)</strong>, zertifiziert nach <strong>DIN EN ISO/IEC 17024 (DIAzert)</strong> und als <strong>TEGoVA Recognised European Valuer (REV)</strong> europaweit anerkannt. Zusätzlich ist er Mitglied im <strong>BVS e.V.</strong> (Bundesverband öffentlich bestellter und vereidigter sowie qualifizierter Sachverständiger) und Bachelor of Arts in Real Estate (Steinbeis Hochschule Berlin). Seine Gutachten werden von allen Gerichten im Landgerichtsbezirk Hannover, vom Finanzamt Hannover und allen anderen deutschen Behörden anerkannt.',
            'Unsere Besonderheit: <strong>Festpreisgarantie ohne versteckte Kosten</strong>. Sie erhalten vor Beauftragung ein verbindliches Angebot, sodass Sie genau wissen, was Ihr Gutachten in Hannover kostet. Vereinbaren Sie noch heute Ihre kostenlose und unverbindliche Erstberatung – telefonisch unter <strong>+49 (0) 541 - 600 99 220</strong> oder per E-Mail an hannover@lasarz.com.',
        ],
    },
    faqs: [
        {
            q: 'Was kostet ein Immobiliengutachten in Hannover?',
            a: 'Die Kosten richten sich nach dem Immobilienwert und dem Gutachtenumfang. Ein Kurzgutachten beginnt ab ca. 800 €, ein vollständiges Verkehrswertgutachten ab ca. 1.500 €. Wir bieten Festpreise mit vollständiger Kostentransparenz. Kontaktieren Sie uns für ein individuelles Angebot.',
        },
        {
            q: 'Wie lange dauert ein Gutachten in Hannover?',
            a: 'Nach der Ortsbegehung liefern wir Ihr Verkehrswertgutachten in der Regel innerhalb von 10–14 Werktagen. Bei dringenden Sachverhalten (z. B. bevorstehende Gerichtstermine) bieten wir einen Expressservice an – sprechen Sie uns an.',
        },
        {
            q: 'Welche Zertifizierungen hat Ihr Gutachter in Hannover?',
            a: 'Marc-André Lasarz ist Dipl.-Sachverständiger (DIA), zertifiziert nach DIN EN ISO/IEC 17024 (DIAzert), TEGoVA Recognised European Valuer (REV), Mitglied im BVS e.V., Bachelor of Arts in Real Estate sowie geprüfter Immobilien-Fachwirt (IHK). Er ist außerdem qualifizierter Beleihungswertermittler (DIA) und Bauschadenbewerter (DIA).',
        },
        {
            q: 'Wird das Gutachten vom Finanzamt Hannover anerkannt?',
            a: 'Ja. Unsere Verkehrswertgutachten nach § 194 BauGB werden vom Finanzamt Hannover als Grundlage für Erbschaft- und Schenkungssteuer anerkannt – insbesondere, weil sie von einem nach DIN EN ISO/IEC 17024 zertifizierten Sachverständigen erstellt werden.',
        },
        {
            q: 'In welchen Stadtteilen und Gemeinden in Hannover sind Sie tätig?',
            a: 'Wir sind in Hannover selbst (Mitte, Nordstadt, Südstadt, List, Vahrenwald, etc.) sowie in Garbsen, Langenhagen, Isernhagen, Burgdorf, Lehrte, Barsinghausen, Springe, Wedemark, Neustadt am Rübenberge, Wunstorf, Sehnde, Hemmingen, Ronnenberg, Pattensen und dem gesamten Landkreis Region Hannover tätig.',
        },
        {
            q: 'Was unterscheidet ein Verkehrswertgutachten von einer Wertindikation?',
            a: 'Ein Verkehrswertgutachten nach § 194 BauGB ist ein vollständiges, gerichtsfestes Dokument, das den Verkehrswert (Marktwert) der Immobilie rechtsverbindlich festlegt. Es ist für Gerichte, Behörden und das Finanzamt verbindlich. Eine Wertindikation (Kurzgutachten) ist eine kompaktere Einschätzung für private Zwecke, die günstiger ist, aber nicht die Rechtswirkung eines vollständigen Gutachtens hat.',
        },
        {
            q: 'Was ist ein Restnutzungsdauergutachten und lohnt es sich in Hannover?',
            a: 'Ein Restnutzungsdauergutachten weist nach, dass Ihre vermietete Immobilie eine kürzere wirtschaftliche Restnutzungsdauer hat als die gesetzlich angenommene. Das erlaubt eine höhere jährliche Abschreibung (AfA) nach § 7 EStG. Für viele Vermieter in Hannover und der Region amortisiert sich das Gutachten bereits im ersten Jahr.',
        },
    ],
};

export default function ImmobiliengutachterHannoverPage() {
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
            <HannoverPremium data={hannoverData} />
        </>
    );
}
