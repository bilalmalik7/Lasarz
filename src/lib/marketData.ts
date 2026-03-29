export interface MarketTrend {
    year: string;
    price: number;
}

export interface PropertyTypeStat {
    type: string;
    price: number;
}

export interface QualityIndex {
    subject: string;
    A: number;
    fullMark: number;
}

export interface SalesDistribution {
    name: string;
    value: number;
    fill: string;
}

export interface RegionData {
    id: string;
    name: string;
    currentAvg: number;
    trendYoy: string;
    marketType: 'Verkäufermarkt' | 'Käufermarkt' | 'Ausgeglichen';
    demandLevel: 'Sehr Hoch' | 'Hoch' | 'Moderat' | 'Stabil';
    avgTimeOnMarket: string; // e.g. "45 Tage"
    description: string;
    forecastText: string;
    trendData: MarketTrend[];
    propertyTypes: PropertyTypeStat[];
    qualityIndex: QualityIndex[];
    salesDistribution: SalesDistribution[];
}

export const marketData: RegionData[] = [
    {
        id: 'osnabrueck',
        name: 'Osnabrück (Stadt)',
        currentAvg: 3450,
        trendYoy: '+1.5%',
        marketType: 'Ausgeglichen',
        demandLevel: 'Hoch',
        avgTimeOnMarket: '42 Tage',
        description: 'Der Immobilienmarkt in Osnabrück zeigt sich nach der Zinswelle stabil. Besonders in Trendvierteln (Westerberg, Katharinenviertel) bleibt die Nachfrage nach sanierten Altbauten hoch.',
        forecastText: 'Für die kommenden 12 Monate erwarten wir in Osnabrück eine leichte Seitwärtsbewegung der Preise, wobei energetisch sanierte Objekte (Klasse A-B) weiterhin Preisprämien von bis zu 15% erzielen können.',
        trendData: [
            { year: '2019', price: 2750 },
            { year: '2020', price: 3050 },
            { year: '2021', price: 3350 },
            { year: '2022', price: 3600 },
            { year: '2023', price: 3400 },
            { year: '2024', price: 3450 },
        ],
        propertyTypes: [
            { type: 'Bestandswohnung', price: 3100 },
            { type: 'Neubauwohnung', price: 4200 },
            { type: 'Einfamilienhaus', price: 3450 },
            { type: 'Zweifamilienhaus', price: 3150 },
        ],
        qualityIndex: [
            { subject: 'Rendite', A: 75, fullMark: 100 },
            { subject: 'Nachfrage', A: 85, fullMark: 100 },
            { subject: 'Infrastruktur', A: 90, fullMark: 100 },
            { subject: 'Erschwinglichkeit', A: 60, fullMark: 100 },
            { subject: 'Wertstabilität', A: 80, fullMark: 100 },
        ],
        salesDistribution: [
            { name: 'Wohnungen', value: 45, fill: '#1A758D' },
            { name: 'Häuser', value: 35, fill: '#DCA963' },
            { name: 'Gewerbe', value: 12, fill: '#64748B' },
            { name: 'Grundstücke', value: 8, fill: '#94A3B8' },
        ]
    },
    {
        id: 'muenster',
        name: 'Münster',
        currentAvg: 4850,
        trendYoy: '+2.1%',
        marketType: 'Verkäufermarkt',
        demandLevel: 'Sehr Hoch',
        avgTimeOnMarket: '28 Tage',
        description: 'Münster bleibt die teuerste Universitätstadt der Region. Extrem robuster Markt, fast keine Preisrückgänge durch Zinsänderungen. Hervorragendes Renditepotenzial.',
        forecastText: 'Der Zuzug nach Münster hält ungebrochen an. Die Immobilienverknappung, insbesondere im Kreuzviertel und Mauritz, wird die Preise auch 2025 weiter leicht steigen lassen.',
        trendData: [
            { year: '2019', price: 3800 },
            { year: '2020', price: 4200 },
            { year: '2021', price: 4500 },
            { year: '2022', price: 4900 },
            { year: '2023', price: 4750 },
            { year: '2024', price: 4850 },
        ],
        propertyTypes: [
            { type: 'Bestandswohnung', price: 4500 },
            { type: 'Neubauwohnung', price: 5800 },
            { type: 'Einfamilienhaus', price: 4900 },
            { type: 'Zweifamilienhaus', price: 4400 },
        ],
        qualityIndex: [
            { subject: 'Rendite', A: 65, fullMark: 100 }, // hohes Preisniveau drückt Rendite
            { subject: 'Nachfrage', A: 100, fullMark: 100 },
            { subject: 'Infrastruktur', A: 95, fullMark: 100 },
            { subject: 'Erschwinglichkeit', A: 40, fullMark: 100 },
            { subject: 'Wertstabilität', A: 95, fullMark: 100 },
        ],
        salesDistribution: [
            { name: 'Wohnungen', value: 55, fill: '#1A758D' },
            { name: 'Häuser', value: 25, fill: '#DCA963' },
            { name: 'Gewerbe', value: 15, fill: '#64748B' },
            { name: 'Grundstücke', value: 5, fill: '#94A3B8' },
        ]
    },
    {
        id: 'bielefeld',
        name: 'Bielefeld',
        currentAvg: 2950,
        trendYoy: '-0.8%',
        marketType: 'Käufermarkt',
        demandLevel: 'Stabil',
        avgTimeOnMarket: '58 Tage',
        description: 'Bielefeld bietet moderate Einstiegspreise bei solider Vermietbarkeit. Leichter Preisrückgang bei unsanierten Bestandsimmobilien im Außenbereich.',
        forecastText: 'Käufer haben aktuell in Bielefeld eine gute Verhandlungsposition. Vor allem Immobilien der Energieeffizienzklassen E bis H müssen oft mit hohen Preisabschlägen den Besitzer wechseln.',
        trendData: [
            { year: '2019', price: 2350 },
            { year: '2020', price: 2500 },
            { year: '2021', price: 2850 },
            { year: '2022', price: 3100 },
            { year: '2023', price: 2980 },
            { year: '2024', price: 2950 },
        ],
        propertyTypes: [
            { type: 'Bestandswohnung', price: 2600 },
            { type: 'Neubauwohnung', price: 3800 },
            { type: 'Einfamilienhaus', price: 2950 },
            { type: 'Zweifamilienhaus', price: 2750 },
        ],
        qualityIndex: [
            { subject: 'Rendite', A: 85, fullMark: 100 },
            { subject: 'Nachfrage', A: 70, fullMark: 100 },
            { subject: 'Infrastruktur', A: 80, fullMark: 100 },
            { subject: 'Erschwinglichkeit', A: 85, fullMark: 100 },
            { subject: 'Wertstabilität', A: 65, fullMark: 100 },
        ],
        salesDistribution: [
            { name: 'Wohnungen', value: 40, fill: '#1A758D' },
            { name: 'Häuser', value: 45, fill: '#DCA963' },
            { name: 'Gewerbe', value: 10, fill: '#64748B' },
            { name: 'Grundstücke', value: 5, fill: '#94A3B8' },
        ]
    },
    {
        id: 'rheine',
        name: 'Rheine (Kreis Steinfurt)',
        currentAvg: 2650,
        trendYoy: '+0.5%',
        marketType: 'Ausgeglichen',
        demandLevel: 'Moderat',
        avgTimeOnMarket: '52 Tage',
        description: 'Rheine ist besonders bei Pendlern und Familien durch attraktive und erschwingliche Einfamilienhauslagen beliebt.',
        forecastText: 'Durch die hervorragende Bahnanbindung an Münster gewinnt Rheine stark an Relevanz als Pendlerstadt ("Speckgürtel"). Hier erwarten wir mittelfristig überdurchschnittliche Wertsteigerungen bei Einfamilienhäusern.',
        trendData: [
            { year: '2019', price: 2050 },
            { year: '2020', price: 2250 },
            { year: '2021', price: 2500 },
            { year: '2022', price: 2750 },
            { year: '2023', price: 2630 },
            { year: '2024', price: 2650 },
        ],
        propertyTypes: [
            { type: 'Bestandswohnung', price: 2450 },
            { type: 'Neubauwohnung', price: 3400 },
            { type: 'Einfamilienhaus', price: 2650 },
            { type: 'Zweifamilienhaus', price: 2500 },
        ],
        qualityIndex: [
            { subject: 'Rendite', A: 80, fullMark: 100 },
            { subject: 'Nachfrage', A: 75, fullMark: 100 },
            { subject: 'Infrastruktur', A: 65, fullMark: 100 },
            { subject: 'Erschwinglichkeit', A: 90, fullMark: 100 },
            { subject: 'Wertstabilität', A: 75, fullMark: 100 },
        ],
        salesDistribution: [
            { name: 'Wohnungen', value: 25, fill: '#1A758D' },
            { name: 'Häuser', value: 60, fill: '#DCA963' },
            { name: 'Gewerbe', value: 5, fill: '#64748B' },
            { name: 'Grundstücke', value: 10, fill: '#94A3B8' },
        ]
    }
];
