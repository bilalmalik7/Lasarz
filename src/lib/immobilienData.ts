export interface PropertyListing {
    id: string;
    title: string;
    type: 'Wohnung' | 'Haus' | 'Gewerbe' | 'Grundstück';
    price: number | 'Auf Anfrage';
    livingSpace: number; // in m²
    rooms: number;
    plz: string;
    city: string;
    image: string;
    status: 'Neu' | 'Off-Market' | 'Reserviert' | 'Verfügbar';
    energyClass?: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
    description: string;
}

export const immobilienDaten: PropertyListing[] = [
    {
        id: 'prop-1',
        title: 'Exklusive Stadtvilla mit Pool',
        type: 'Haus',
        price: 1850000,
        livingSpace: 245,
        rooms: 6.5,
        plz: '49076',
        city: 'Osnabrück (Westerberg)',
        image: '/images/properties/villa.png',
        status: 'Off-Market',
        energyClass: 'A',
        description: 'Hochwertig sanierte Stadtvilla in absoluter Bestlage am Westerberg. Uneinsehbares Grundstück, Smart-Home-Technologie und beheizter Außenpool.'
    },
    {
        id: 'prop-2',
        title: 'Luxuriöses Penthouse mit Skyline-Blick',
        type: 'Wohnung',
        price: 'Auf Anfrage',
        livingSpace: 180,
        rooms: 4,
        plz: '48143',
        city: 'Münster (Zentrum)',
        image: '/images/properties/penthouse.png',
        status: 'Neu',
        energyClass: 'A+',
        description: 'Atemberaubendes Penthouse direkt im Herzen von Münster. Über 60m² Dachterrasse, Fußbodenheizung, und bodentiefe Panoramafenster.'
    },
    {
        id: 'prop-3',
        title: 'Historischer Altbau-Traum',
        type: 'Wohnung',
        price: 720000,
        livingSpace: 115,
        rooms: 3.5,
        plz: '48149',
        city: 'Münster (Kreuzviertel)',
        image: '/images/properties/altbau.png',
        status: 'Verfügbar',
        energyClass: 'D',
        description: 'Stilvolle Altbauwohnung mit erhaltenen Stuckdecken, originalem Fischgrätparkett und einem nach Süden ausgerichteten Balkon im beliebten Kreuzviertel.'
    },
    {
        id: 'prop-4',
        title: 'Modernes Bürohaus',
        type: 'Gewerbe',
        price: 4500000,
        livingSpace: 1200,
        rooms: 30,
        plz: '49090',
        city: 'Osnabrück (Hafen)',
        image: '/images/properties/gewerbe.png',
        status: 'Off-Market',
        energyClass: 'B',
        description: 'Repräsentativer Neubau für moderne Arbeitswelten. Voll klimatisiert, ausreichend Parkplätze und flexible Grundrissgestaltung.'
    },
    {
        id: 'prop-5',
        title: 'Baugrundstück in Top-Lage',
        type: 'Grundstück',
        price: 450000,
        livingSpace: 0,
        rooms: 0,
        plz: '33615',
        city: 'Bielefeld (Schildesche)',
        image: '/images/pages/referenzen-hero.png', // Reusing an existing scenic view
        status: 'Reserviert',
        description: 'Seltenes, baureifes Grundstück in gewachsener Nachbarschaft. Bebauungsplan für ein großzügiges Einfamilienhaus oder Doppelhaus liegt vor.'
    },
    {
        id: 'prop-6',
        title: 'Neubau Einfamilienhaus',
        type: 'Haus',
        price: 680000,
        livingSpace: 145,
        rooms: 5,
        plz: '48431',
        city: 'Rheine',
        image: '/images/pages/prozess-hero.png', // Reusing
        status: 'Neu',
        energyClass: 'A+',
        description: 'Energieeffizientes KFW40+ Haus in familienfreundlicher Siedlung. Inklusive Wärmepumpe und PV-Anlage.'
    }
];
