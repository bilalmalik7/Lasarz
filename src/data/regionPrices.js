export const YEARS = [2021, 2022, 2023, 2024, 2025];

const basePrices = {
  'Osnabrück': 3450,
  'Georgsmarienhütte': 2400,
  'Wallenhorst': 2250,
  'Bissendorf': 2300,
  'Belm': 2100,
  'Hasbergen': 2150,
  'Hagen': 2050,
  'Melle': 2180,
  'Bramsche': 2080,
  'Bad Iburg': 2250,
  'Bad Rothenfelde': 2550,
  'Bad Laer': 1950,
  'Dissen': 1880,
  'Glandorf': 1820,
  'Hilter': 1900,
  'Bad Essen': 1850,
  'Bohmte': 1650,
  'Ostercappeln': 1750,
  'Bersenbrück': 1700,
  'Quakenbrück': 1550,
  'Ankum': 1620,
  'Alfhausen': 1480,
  'Rieste': 1520,
  'Gehrde': 1380,
  'Badbergen': 1350,
  'Menslage': 1220,
  'Fürstenau': 1420,
  'Berge': 1280,
  'Bippen': 1200,
  'Merzen': 1380,
  'Voltlage': 1180,
  'Neuenkirchen': 1320,
  'Eggermühlen': 1260,
  'Kettenkamp': 1300,
  'Nortrup': 1280
};

const yearFactors = {
  2021: 0.88,
  2022: 0.96,
  2023: 1.04,
  2024: 1.00,
  2025: 1.05
};

export function priceFor(name, year) {
  const base = basePrices[name] || 1500;
  const factor = yearFactors[year] || 1.0;
  return Math.round(base * factor);
}

// Maps regional names to their dedicated landing pages if they exist.
export const regionUrls = {
  'Osnabrück': '/immobiliengutachter-osnabrueck',
  'Melle': '/immobiliengutachter-melle',
  'Bramsche': '/immobiliengutachter-bramsche',
  'Georgsmarienhütte': '/immobiliengutachter-georgsmarienhütte',
  'Bad Iburg': '/immobiliengutachter-bad-iburg',
  'Bad Laer': '/immobiliengutachter-bad-laer',
  'Bad Rothenfelde': '/immobilienbewertung-bad-rothenfelde',
  'Dissen': '/immobilienbewertung-dissen',
  'Wallenhorst': '/immobilienbewertung-wallenhorst',
  'Neuenkirchen': '/immobilienbewertung-neuenkirchen',
  'Hasbergen': '/immobilienbewertung-hasbergen',
  'Quakenbrück': '/immobiliengutachter-ibbenbueren' // fallback to near region if needed, but let's default to contact for others
};
