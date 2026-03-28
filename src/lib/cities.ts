export interface CityTheme {
    primary: string;
    secondary: string;
    overlay: string;
}

export interface CityData {
    slug: string;
    name: string;
    fullName: string; // e.g. "Bünde"
    address: string;
    phone: string;
    email: string;
    theme?: CityTheme;
}

export const cities: CityData[] = [
    {
        slug: 'osnabrueck',
        name: 'Osnabrück',
        fullName: 'Osnabrück',
        address: 'Katharinenstraße 111\n49078 Osnabrück',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'osnabrueck@lasarz.com',
        theme: {
            primary: '#1a758d',
            secondary: '#122b40',
            overlay: 'rgba(18, 43, 64, 0.6)'
        }
    },
    {
        slug: 'buende',
        name: 'Bünde',
        fullName: 'Bünde',
        address: 'Holzhauser Straße 79\n32257 Bünde',
        phone: '+49 (0) 5223 7941350',
        email: 'buende@lasarz.com',
        theme: {
            primary: '#1a8d75', // Greener tone for Bünde
            secondary: '#124035',
            overlay: 'rgba(18, 64, 53, 0.6)'
        }
    },
    {
        slug: 'kirchlengern',
        name: 'Kirchlengern',
        fullName: 'Kirchlengern',
        address: 'Holzhauser Straße 79\n32257 Bünde', // Assuming same as Bünde for now or near it
        phone: '+49 (0) 5223 7941350',
        email: 'buende@lasarz.com',
        theme: {
            primary: '#8d1a40', // Redder tone for Kirchlengern
            secondary: '#401220',
            overlay: 'rgba(64, 18, 32, 0.6)'
        }
    },
    {
        slug: 'flensburg',
        name: 'Flensburg',
        fullName: 'Flensburg',
        address: 'Norderstraße 52-56\n24939 Flensburg',
        phone: '+49 (0) 461 - 167 23 002',
        email: 'flensburg@lasarz.com',
        theme: {
            primary: '#1a408d', // Bluer tone for Flensburg
            secondary: '#122040',
            overlay: 'rgba(18, 32, 64, 0.6)'
        }
    }
];

export function getCityBySlug(slug: string) {
    return cities.find(c => c.slug === slug);
}
