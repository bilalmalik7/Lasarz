// City-specific data for each immobiliengutachter landing page

export interface CityPageData {
    slug: string;
    name: string;
    region: string;
    heroSubtitle: string;
    phone: string;
    email: string;
    address: string;
    typewriterWords: string[];
    stats: { value: number; suffix: string; label: string }[];
    areas: string[];
    reviews: { name: string; location: string; text: string }[];
    whyUs: { icon: string; title: string; desc: string }[];
    occasions: { icon: string; title: string; desc: string }[];
    tabs: { label: string; icon: string; items: string[]; desc: string }[];
    seoTitle: string;
    seoDescription: string;
    seoText: { title: string; paragraphs: string[] };
}

export const cityPages: CityPageData[] = [
    // ── OSNABRÜCK ──────────────────────────────────────────
    {
        slug: 'osnabrueck',
        name: 'Osnabrück',
        region: 'Osnabrück · Hannover · Bundesweit',
        heroSubtitle: 'Lasarz Sachverständigenbüro – Ihre erste Adresse für unabhängige, gerichtsverwertbare Immobilienbewertung im Raum Osnabrück. DIA & BVS zertifiziert. Seit 2009.',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'osnabrueck@lasarz.com',
        address: 'Katharinenstraße 111, 49078 Osnabrück',
        typewriterWords: ['Verkehrswert.', 'Erbschaftsgutachten.', 'Beleihungswert.', 'Schimmelgutachten.', 'Kaufberatung.'],
        stats: [
            { value: 3500, suffix: '+', label: 'Gutachten erstellt' },
            { value: 15, suffix: ' J.', label: 'Marktpräsenz' },
            { value: 98, suffix: '%', label: 'Weiterempfehlungsrate' },
            { value: 10, suffix: ' T.', label: 'Ø Lieferzeit' },
        ],
        areas: ['Innenstadt', 'Weststadt', 'Wüste', 'Schölerberg', 'Voxtrup', 'Hellern', 'Sutthausen', 'Atter', 'Darum/Gretesch', 'Lüstringen', 'Wallenhorst', 'Bad Essen', 'Georgsmarienhütte', 'Belm', 'Bramsche'],
        reviews: [
            { name: 'Klaus M.', location: 'Osnabrück-Innenstadt', text: 'Absolut professionelles Gutachten. Herr Lasarz hat uns bei der Erbschaftsauseinandersetzung sehr geholfen – pünktlich, transparent und vollständig.' },
            { name: 'Sabine K.', location: 'Wallenhorst', text: 'Das Verkehrswertgutachten war genau auf unsere Bank abgestimmt. Innerhalb von 10 Tagen fertig, alle Stempel drauf. Sehr empfehlenswert!' },
            { name: 'Thomas R.', location: 'Georgsmarienhütte', text: 'Nach dem Schimmelgutachten konnten wir endlich beweisen, dass der Schaden vom Vermieter zu verantworten ist. Top-Arbeit!' },
            { name: 'Monika L.', location: 'Osnabrück-Weststadt', text: 'Wir haben für den Verkauf unserer Immobilie ein Kurzgutachten benötigt. Schnell, günstig und sehr aussagekräftig. 5 Sterne!' },
        ],
        whyUs: [
            { icon: '🎓', title: 'DIA & BVS zertifiziert', desc: 'Öffentlich bestellte und vereidigte Sachverständige gemäß §36 GewO – von deutschen Gerichten anerkannt.' },
            { icon: '📍', title: 'Lokale Marktkenntnis', desc: 'Seit über 15 Jahren im Raum Osnabrück tätig – wir kennen jeden Stadtteil, Bodenrichtwert und Markttrend.' },
            { icon: '⚡', title: 'Schnelle Lieferung', desc: 'Verkehrswertgutachten in der Regel innerhalb von 10 Werktagen – Expressservice auf Anfrage möglich.' },
            { icon: '⚖️', title: 'Gerichtsverwertbar', desc: 'Alle Gutachten werden vor Gericht und von Behörden anerkannt – nach §194 BauGB und HOAI-konform.' },
            { icon: '🤝', title: 'Unabhängig & neutral', desc: 'Keine Vermittlungsabsichten. Rein sachverständige, interessenfreie Wertermittlung.' },
            { icon: '📞', title: 'Persönliche Beratung', desc: 'Direkter Kontakt zum Sachverständigen – kein Call-Center, keine Warteschleife.' },
        ],
        occasions: [
            { icon: '💰', title: 'Kauf & Verkauf', desc: 'Den richtigen Preis kennen, bevor Sie verhandeln.' },
            { icon: '⚖️', title: 'Scheidung & Zugewinn', desc: 'Neutrale Wertermittlung für das Gerichtsverfahren.' },
            { icon: '🏛️', title: 'Erbschaft', desc: 'Geerbte Immobilien korrekt bewerten für das Finanzamt.' },
            { icon: '🏦', title: 'Finanzierung', desc: 'Bankkonformes Beleihungswertgutachten nach BelWertV.' },
            { icon: '🔨', title: 'Bauschadens', desc: 'Schadensgutachten bei Mängeln, Schimmel oder Feuchte.' },
            { icon: '📊', title: 'Bilanz & Steuer', desc: 'Wertermittlung für AfA, Bilanzen und steuerliche Zwecke.' },
        ],
        tabs: [
            { label: 'Wohnimmobilien', icon: '🏠', items: ['Einfamilienhaus', 'Reihenmittelhaus', 'Doppelhaushälfte', 'Eigentumswohnung', 'Mehrfamilienhaus', 'Villa & Luxusobjekte'], desc: 'Ob Kauf, Verkauf, Erbschaft oder Scheidung – wir ermitteln den genauen Marktwert Ihrer Wohnimmobilie in Osnabrück und Umgebung.' },
            { label: 'Gewerbeimmobilien', icon: '🏢', items: ['Bürogebäude', 'Einzelhandel', 'Lagerhallen', 'Produktionsstätten', 'Hotels & Gastronomie', 'Pflegeeinrichtungen'], desc: 'Gewerbeimmobilienbewertung nach anerkannten Ertragswert- und DCF-Verfahren – für Finanzierungen, Transaktionen und Bilanzzwecke.' },
            { label: 'Grundstücke', icon: '🌍', items: ['Baugrundstücke', 'Landwirtschaftliche Flächen', 'Erbbaurechte', 'Rechte & Lasten', 'Gartengrundstücke', 'Gewerbegrundstücke'], desc: 'Grundstücksbewertung unter Berücksichtigung von Bebauungspotenzial, Bodenrichtwert und Lagemerkmalen.' },
            { label: 'Sonderimmobilien', icon: '🏛️', items: ['Denkmalgeschützte Gebäude', 'Kirchen & Klöster', 'Parkhäuser', 'Freizeitanlagen', 'Tankstellen', 'Spezialimmobilien'], desc: 'Auch für ungewöhnliche Objekte finden wir das richtige Bewertungsverfahren – mit Erfahrung aus über 3.500 Gutachten.' },
        ],
        seoTitle: 'Immobiliengutachter Osnabrück',
        seoDescription: 'Zertifizierter Immobiliengutachter in Osnabrück. Verkehrswertgutachten, Erbschaftsgutachten, Beleihungswert & Schadensgutachten. 3.500+ Gutachten seit 2009.',
        seoText: {
            title: 'Immobiliengutachter Osnabrück – was Sie wissen sollten',
            paragraphs: [
                'Ein <strong>Immobiliengutachter in Osnabrück</strong> unterstützt Sie immer dann, wenn Sie den genauen Wert einer Immobilie benötigen – sei es für den Kauf oder Verkauf, für gerichtliche Auseinandersetzungen, bei Erbschaften oder für die Bank. Das Sachverständigenbüro Lasarz ist seit über 15 Jahren in Osnabrück und dem gesamten Landkreis tätig und hat mehr als 3.500 Gutachten erstellt.',
                'Unser Leistungsspektrum umfasst <strong>Verkehrswertgutachten</strong> nach §194 BauGB, <strong>Beleihungswertgutachten</strong> nach BelWertV, <strong>Schimmelgutachten</strong>, <strong>Schadensgutachten</strong>, steuerliche Immobilienbewertungen sowie Beratungsleistungen rund um Kauf, Verkauf und Erbschaft.',
                'Als <strong>öffentlich bestellter und vereidigter Sachverständiger</strong> gemäß §36 GewO erstellt Marc-André Lasarz Gutachten, die vor deutschen Gerichten, Behörden und Finanzämtern anerkannt werden. Vereinbaren Sie noch heute Ihre kostenlose Erstberatung.',
            ],
        },
    },

    // ── FLENSBURG ──────────────────────────────────────────
    {
        slug: 'flensburg',
        name: 'Flensburg',
        region: 'Flensburg · Schleswig-Holstein · Dänische Grenze',
        heroSubtitle: 'Lasarz Sachverständigenbüro – Ihre Experten für unabhängige Immobilienbewertung an der nördlichsten Großstadt Deutschlands. DIA & BVS zertifiziert.',
        phone: '+49 (0) 461 - 167 23 002',
        email: 'flensburg@lasarz.com',
        address: 'Norderstraße 52-56, 24939 Flensburg',
        typewriterWords: ['Verkehrswert.', 'Hafenimmobilien.', 'Beleihungswert.', 'Denkmalschutz.', 'Erbschaftsgutachten.'],
        stats: [
            { value: 850, suffix: '+', label: 'Gutachten in SH' },
            { value: 10, suffix: ' J.', label: 'Erfahrung Norden' },
            { value: 97, suffix: '%', label: 'Zufriedenheitsrate' },
            { value: 12, suffix: ' T.', label: 'Ø Lieferzeit' },
        ],
        areas: ['Altstadt', 'Jürgensby', 'Fruerlund', 'Mürwik', 'Sandberg', 'Engelsby', 'Weiche', 'Nordstadt', 'Südstadt', 'Westliche Höhe', 'Tarup', 'Harrislee', 'Glücksburg', 'Handewitt', 'Schleswig'],
        reviews: [
            { name: 'Jens P.', location: 'Flensburg-Altstadt', text: 'Herr Lasarz hat unser denkmalgeschütztes Haus in der Altstadt perfekt bewertet. Die Besonderheiten der historischen Bausubstanz wurden genau berücksichtigt.' },
            { name: 'Kirsten H.', location: 'Glücksburg', text: 'Für die Finanzierung unserer Ferienwohnung an der Förde brauchten wir ein Beleihungswertgutachten. Schnell, kompetent und die Bank war sofort zufrieden.' },
            { name: 'Lars B.', location: 'Harrislee', text: 'Bei unserer Erbauseinandersetzung hat das Gutachten für Klarheit und Fairness gesorgt. Sehr professionelle Arbeit!' },
            { name: 'Inga S.', location: 'Flensburg-Mürwik', text: 'Endlich ein Sachverständiger, der die Besonderheiten des Flensburger Immobilienmarkts wirklich versteht. Klare Empfehlung!' },
        ],
        whyUs: [
            { icon: '🎓', title: 'DIA & BVS zertifiziert', desc: 'Zertifizierte Sachverständige mit anerkannten Qualifikationen – Ihre Garantie für rechtssichere Gutachten.' },
            { icon: '⚓', title: 'Hafenstadt-Expertise', desc: 'Besondere Erfahrung mit Förde-Lagen, historischen Kaufmannshäusern und maritimen Sonderimmobilien in Flensburg.' },
            { icon: '⚡', title: 'Schnelle Bearbeitung', desc: 'Gutachten in der Regel innerhalb von 12 Werktagen – Expressservice für dringende Fälle verfügbar.' },
            { icon: '🏛️', title: 'Denkmalschutz-Kompetenz', desc: 'Flensburgs historische Altstadt erfordert Spezialwissen bei der Bewertung denkmalgeschützter Gebäude.' },
            { icon: '🤝', title: 'Grenzübergreifend', desc: 'Erfahrung mit deutsch-dänischen Immobilientransaktionen im Grenzgebiet Flensburg-Sønderborg.' },
            { icon: '📞', title: 'Vor-Ort-Service', desc: 'Persönliche Besichtigung und Beratung direkt in Flensburg und Umgebung – schnell und unkompliziert.' },
        ],
        occasions: [
            { icon: '💰', title: 'Kauf & Verkauf', desc: 'Marktwert kennen, bevor Sie in Flensburg verhandeln.' },
            { icon: '⚓', title: 'Hafenimmobilien', desc: 'Spezielle Bewertung für Objekte an der Flensburger Förde.' },
            { icon: '🏛️', title: 'Denkmalschutz', desc: 'Fachgerechte Wertermittlung historischer Gebäude in der Altstadt.' },
            { icon: '🏦', title: 'Finanzierung', desc: 'Bankkonformes Beleihungswertgutachten nach BelWertV.' },
            { icon: '⚖️', title: 'Erbschaft & Scheidung', desc: 'Neutrale Bewertung für Gerichte und Finanzämter.' },
            { icon: '🏖️', title: 'Ferienimmobilien', desc: 'Bewertung von Ferienobjekten an der Ostseeküste.' },
        ],
        tabs: [
            { label: 'Wohnimmobilien', icon: '🏠', items: ['Altbauwohnung', 'Reetdachhaus', 'Stadtvilla', 'Eigentumswohnung', 'Mehrfamilienhaus', 'Penthouse mit Fördeblick'], desc: 'Von der Altbauwohnung in Jürgensby bis zum Reetdachhaus in Glücksburg – wir bewerten alle Wohnformen in Flensburg und Umgebung.' },
            { label: 'Gewerbeimmobilien', icon: '🏢', items: ['Bürogebäude', 'Einzelhandel Altstadt', 'Lagerhallen Hafen', 'Gastronomie', 'Hotels', 'Praxisräume'], desc: 'Gewerbeimmobilien in Flensburgs attraktiver Lage – vom Altstadtladen bis zum modernen Bürokomplex.' },
            { label: 'Grundstücke', icon: '🌍', items: ['Baugrundstücke', 'Wassergrundstücke', 'Erbbaurechte', 'Gewerbeflächen', 'Landwirtschaftliche Flächen', 'Ufergrundstücke'], desc: 'Grundstücksbewertung unter Berücksichtigung der besonderen Lagevorteile an der Ostsee und Flensburger Förde.' },
            { label: 'Sonderimmobilien', icon: '🏛️', items: ['Denkmalgeschützte Häuser', 'Kaufmannshöfe', 'Hafengebäude', 'Ferienwohnungen', 'Bootshäuser', 'Historische Speicher'], desc: 'Flensburgs reiche Handelsgeschichte spiegelt sich in einzigartigen Immobilien wider – wir kennen jede Besonderheit.' },
        ],
        seoTitle: 'Immobiliengutachter Flensburg',
        seoDescription: 'Zertifizierter Immobiliengutachter in Flensburg. Verkehrswertgutachten, Denkmalschutz, Hafenimmobilien & Erbschaftsgutachten. Experten für Schleswig-Holstein.',
        seoText: {
            title: 'Immobiliengutachter Flensburg – Experten an der Förde',
            paragraphs: [
                'Als <strong>Immobiliengutachter in Flensburg</strong> bewerten wir Immobilien in Deutschlands nördlichster Großstadt – von historischen Kaufmannshöfen in der Altstadt bis zu modernen Eigentumswohnungen mit Fördeblick in Mürwik. Unsere lokale Expertise umfasst die Besonderheiten des Flensburger Immobilienmarkts.',
                'Besonders die <strong>denkmalgeschützten Gebäude</strong> in der Flensburger Altstadt, die <strong>maritimen Sonderimmobilien</strong> am Hafen und die <strong>Ferienimmobilien</strong> an der Ostseeküste erfordern Spezialwissen bei der Wertermittlung. Unser Team bringt genau diese Erfahrung mit.',
                'Unsere <strong>gerichtsverwertbaren Gutachten</strong> werden von Gerichten in Schleswig-Holstein, Finanzämtern und Banken anerkannt. Ob Verkehrswertgutachten, Beleihungswert oder Erbschaftsbewertung – kontaktieren Sie uns für eine kostenlose Erstberatung.',
            ],
        },
    },

    // ── MÜNSTER ──────────────────────────────────────────
    {
        slug: 'muenster',
        name: 'Münster',
        region: 'Münster · Münsterland · Westfalen',
        heroSubtitle: 'Lasarz Sachverständigenbüro – Ihr Experte für Immobilienbewertung in der Fahrradstadt Münster. DIA & BVS zertifiziert. Regionale Kompetenz seit 2009.',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'muenster@lasarz.com',
        address: 'c/o Lasarz Sachverständigenbüro, Münster',
        typewriterWords: ['Verkehrswert.', 'Altbaubewertung.', 'Beleihungswert.', 'Universitätsimmobilien.', 'Erbschaftsgutachten.'],
        stats: [
            { value: 1200, suffix: '+', label: 'Gutachten Münsterland' },
            { value: 15, suffix: ' J.', label: 'Branchenerfahrung' },
            { value: 99, suffix: '%', label: 'Weiterempfehlung' },
            { value: 8, suffix: ' T.', label: 'Ø Lieferzeit' },
        ],
        areas: ['Altstadt', 'Kreuzviertel', 'Aegidii', 'Hafen', 'Hiltrup', 'Gievenbeck', 'Kinderhaus', 'Wolbeck', 'Handorf', 'Roxel', 'Amelsbüren', 'Gremmendorf', 'Coerde', 'Nienberge', 'Albachten'],
        reviews: [
            { name: 'Dr. Martin W.', location: 'Münster-Kreuzviertel', text: 'Hervorragendes Gutachten für unsere Altbauvilla im Kreuzviertel. Die spezifischen Lagemerkmale und der Charme des Viertels wurden perfekt abgebildet.' },
            { name: 'Andrea F.', location: 'Münster-Hafen', text: 'Für unsere Loft-Wohnung im Hafenviertel brauchten wir eine aktuelle Bewertung. Herr Lasarz kennt den Münsteraner Markt ausgezeichnet!' },
            { name: 'Peter S.', location: 'Hiltrup', text: 'Bei der Erbauseinandersetzung hat das Verkehrswertgutachten alle Parteien überzeugt. Sehr faire und transparente Bewertung.' },
            { name: 'Claudia R.', location: 'Münster-Gievenbeck', text: 'Schnelle Lieferung des Kurzgutachtens für unseren Immobilienverkauf. Der Preis war fair und die Qualität erstklassig.' },
        ],
        whyUs: [
            { icon: '🎓', title: 'DIA & BVS zertifiziert', desc: 'Staatlich anerkannte Qualifikation für rechtssichere Immobilienbewertung in Münster und dem Münsterland.' },
            { icon: '🏰', title: 'Altstadtkenner', desc: 'Spezialwissen für die begehrten Immobilienlagen im Kreuzviertel, am Aasee und in der historischen Altstadt.' },
            { icon: '⚡', title: 'Express möglich', desc: 'Standard-Gutachten in 8 Werktagen, Express-Gutachten auf Anfrage auch in 3-5 Tagen lieferbar.' },
            { icon: '🏫', title: 'Universitätsstadt-Expertise', desc: 'Erfahrung mit Anlageimmobilien, Studentenwohnungen und Kapitalanlagen im Münsteraner Markt.' },
            { icon: '🤝', title: 'Unabhängig & neutral', desc: 'Keine Maklertätigkeit. Rein sachverständige Bewertung ohne Interessenkonflikt.' },
            { icon: '📞', title: 'Direkter Kontakt', desc: 'Persönliche Betreuung vom Erstgespräch bis zur Gutachtenübergabe – ohne Umwege.' },
        ],
        occasions: [
            { icon: '💰', title: 'Kauf & Verkauf', desc: 'Marktgerechte Preisfindung für Münsters begehrte Wohnlagen.' },
            { icon: '⚖️', title: 'Scheidung & Zugewinn', desc: 'Gerichtsfeste Immobilienbewertung bei Scheidungsverfahren.' },
            { icon: '🏛️', title: 'Erbschaft', desc: 'Faire Bewertung für das Finanzamt bei Erbauseinandersetzungen.' },
            { icon: '📊', title: 'Kapitalanlage', desc: 'Renditeberechnung und Bewertung von Anlageobjekten.' },
            { icon: '🏦', title: 'Finanzierung', desc: 'Bankkonformes Beleihungswertgutachten für Ihre Finanzierung.' },
            { icon: '🏗️', title: 'Bauschäden', desc: 'Schadenbewertung bei Feuchte, Schimmel oder Baumängeln.' },
        ],
        tabs: [
            { label: 'Wohnimmobilien', icon: '🏠', items: ['Altbauvilla', 'Reihenmittelhaus', 'Doppelhaushälfte', 'Eigentumswohnung', 'Mehrfamilienhaus', 'Loft-Wohnung'], desc: 'Vom prächtigen Altbau im Kreuzviertel bis zum modernen Loft am Hafen – wir bewerten alle Wohnformen in Münster.' },
            { label: 'Gewerbeimmobilien', icon: '🏢', items: ['Büroflächen', 'Einzelhandel Prinzipalmarkt', 'Praxisgebäude', 'Lagerhallen', 'Gastronomie', 'Studentenwohnheime'], desc: 'Gewerbeimmobilien in Münsters attraktiven Lagen – fundierte Ertragswertgutachten für jede Objektart.' },
            { label: 'Grundstücke', icon: '🌍', items: ['Baugrundstücke', 'Parkgrundstücke', 'Erbbaurechte', 'Landwirtschaftliche Flächen', 'Gewerbeflächen', 'Aasee-Lagen'], desc: 'Grundstücksbewertung im Großraum Münster unter Berücksichtigung der hohen Nachfrage und Bodenrichtwerte.' },
            { label: 'Sonderimmobilien', icon: '🏛️', items: ['Denkmalgeschützte Gebäude', 'Kirchengebäude', 'Burgen & Schlösser', 'Studentenwohnungen', 'Kultureinrichtungen', 'Parkhaus-Anlagen'], desc: 'Das Münsterland ist reich an besonderen Immobilien – von Wasserschlössern bis zu historischen Hofanlagen.' },
        ],
        seoTitle: 'Immobiliengutachter Münster',
        seoDescription: 'Zertifizierter Immobiliengutachter in Münster. Verkehrswertgutachten, Altbaubewertung, Beleihungswert & Erbschaftsgutachten. Experten für das Münsterland.',
        seoText: {
            title: 'Immobiliengutachter Münster – Experten für das Münsterland',
            paragraphs: [
                'Als <strong>Immobiliengutachter in Münster</strong> kennen wir den dynamischen Immobilienmarkt der westfälischen Metropole. Münster zählt zu den begehrtesten Wohnstandorten Deutschlands – die hohe Lebensqualität, die renommierte Universität und die hervorragende Infrastruktur treiben die Immobilienpreise.',
                'Unsere Expertise umfasst die <strong>Premium-Lagen am Aasee und im Kreuzviertel</strong>, die aufstrebenden <strong>Entwicklungsgebiete am Hafen</strong> und die <strong>familienfreundlichen Stadtteile</strong> wie Hiltrup und Gievenbeck. Wir bewerten auch die zahlreichen <strong>historischen Wasserschlösser und Hofanlagen</strong> im Münsterland.',
                'Ob Sie ein Gutachten für den <strong>Immobilienverkauf</strong>, eine <strong>Erbschaftsangelegenheit</strong> oder eine <strong>Bankfinanzierung</strong> benötigen – das Sachverständigenbüro Lasarz liefert Ihnen ein präzises, gerichtsverwertbares Gutachten. Kontaktieren Sie uns für Ihre kostenlose Erstberatung in Münster.',
            ],
        },
    },

    // ── BIELEFELD ──────────────────────────────────────────
    {
        slug: 'bielefeld',
        name: 'Bielefeld',
        region: 'Bielefeld · Ostwestfalen-Lippe · Teutoburger Wald',
        heroSubtitle: 'Lasarz Sachverständigenbüro – Professionelle Immobilienbewertung in der Wirtschaftsmetropole Ostwestfalen-Lippes. DIA & BVS zertifiziert.',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'bielefeld@lasarz.com',
        address: 'c/o Lasarz Sachverständigenbüro, Bielefeld',
        typewriterWords: ['Verkehrswert.', 'Gewerbegutachten.', 'Beleihungswert.', 'Unternehmensimmobilien.', 'Erbschaftsgutachten.'],
        stats: [
            { value: 950, suffix: '+', label: 'Gutachten in OWL' },
            { value: 15, suffix: ' J.', label: 'Expertise' },
            { value: 97, suffix: '%', label: 'Empfehlungsrate' },
            { value: 10, suffix: ' T.', label: 'Ø Lieferzeit' },
        ],
        areas: ['Stadtmitte', 'Bethel', 'Gadderbaum', 'Brackwede', 'Schildesche', 'Stieghorst', 'Heepen', 'Dornberg', 'Jöllenbeck', 'Sennestadt', 'Senne', 'Ubbedissen', 'Oldentrup', 'Sieker', 'Vilsendorf'],
        reviews: [
            { name: 'Markus D.', location: 'Bielefeld-Stadtmitte', text: 'Für unsere gewerbliche Immobilie am Kesselbrink brauchten wir eine professionelle Bewertung. Das Gutachten war detailliert und die Bank war sofort überzeugt.' },
            { name: 'Silke W.', location: 'Bielefeld-Dornberg', text: 'Die Bewertung unserer Villa am Teutoburger Wald war hervorragend. Herr Lasarz hat die Besonderheiten der Lage perfekt berücksichtigt.' },
            { name: 'Frank J.', location: 'Sennestadt', text: 'Nach dem Tod meines Vaters brauchte ich ein Erbschaftsgutachten. Schnell, einfühlsam und fachlich einwandfrei. Vielen Dank!' },
            { name: 'Heike N.', location: 'Brackwede', text: 'Top Preis-Leistung für ein Kurzgutachten. Innerhalb einer Woche war alles fertig. Sehr zu empfehlen für den Bielefelder Raum!' },
        ],
        whyUs: [
            { icon: '🎓', title: 'DIA & BVS zertifiziert', desc: 'Anerkannte Sachverständigenqualifikation für gerichtsfeste Immobilienbewertung in Bielefeld und OWL.' },
            { icon: '🏭', title: 'Gewerbe-Expertise', desc: 'Bielefeld als Wirtschaftsstandort – wir bewerten Bürogebäude, Produktionsstätten und Logistikimmobilien.' },
            { icon: '⚡', title: 'Schnelle Ergebnisse', desc: 'Standardgutachten in 10 Werktagen, Express auf Anfrage. Pünktlich und zuverlässig.' },
            { icon: '🌲', title: 'Lagebewertung', desc: 'Vom Stadtzentrum bis zum Teutoburger Wald – wir kennen jede Mikrolage in Bielefeld.' },
            { icon: '🤝', title: 'Unabhängig', desc: 'Keine Maklerinteressen. Rein sachverständige, neutrale Wertermittlung für Ihre Immobilie.' },
            { icon: '📞', title: 'Persönlich erreichbar', desc: 'Direkter Draht zum Gutachter – keine Warteschleife, keine Umwege.' },
        ],
        occasions: [
            { icon: '💰', title: 'Kauf & Verkauf', desc: 'Marktgerechte Immobilienbewertung für Bielefeld und OWL.' },
            { icon: '🏭', title: 'Unternehmen', desc: 'Bewertung von Betriebsimmobilien für Bilanzen und Transaktionen.' },
            { icon: '⚖️', title: 'Scheidung', desc: 'Neutrale Zugewinnberechnung bei Immobilienvermögen.' },
            { icon: '🏛️', title: 'Erbschaft', desc: 'Wertfeststellung geerbter Immobilien für das Finanzamt.' },
            { icon: '🏦', title: 'Finanzierung', desc: 'Beleihungswertgutachten für Ihre Baufinanzierung.' },
            { icon: '🔨', title: 'Bauschäden', desc: 'Professionelle Schadenbewertung und Beweissicherung.' },
        ],
        tabs: [
            { label: 'Wohnimmobilien', icon: '🏠', items: ['Einfamilienhaus', 'Reihenmittelhaus', 'Doppelhaushälfte', 'Eigentumswohnung', 'Mehrfamilienhaus', 'Villa am Teutoburger Wald'], desc: 'Ob Altbau in der Stadtmitte oder Neubau in Sennestadt – wir ermitteln den genauen Marktwert Ihrer Wohnimmobilie in Bielefeld.' },
            { label: 'Gewerbeimmobilien', icon: '🏢', items: ['Bürogebäude', 'Produktionshallen', 'Logistikimmobilien', 'Einzelhandelsflächen', 'Arztpraxen', 'Autohäuser'], desc: 'Bielefeld als Wirtschaftsstandort bietet vielfältige Gewerbeimmobilien – wir bewerten sie alle fundiert.' },
            { label: 'Grundstücke', icon: '🌍', items: ['Baugrundstücke', 'Gewerbegrundstücke', 'Erbbaurechte', 'Landwirtschaftliche Flächen', 'Waldgrundstücke', 'Industrieflächen'], desc: 'Grundstücksbewertung unter Berücksichtigung der Bielefelder Bodenrichtwerte und Entwicklungspotenziale.' },
            { label: 'Sonderimmobilien', icon: '🏛️', items: ['Denkmalgeschützte Objekte', 'Pflegeheime', 'Sportanlagen', 'Kirchengebäude', 'Bildungseinrichtungen', 'Spezialimmobilien'], desc: 'Auch für besondere Objekttypen in Bielefeld finden wir die passende Bewertungsmethode.' },
        ],
        seoTitle: 'Immobiliengutachter Bielefeld',
        seoDescription: 'Zertifizierter Immobiliengutachter in Bielefeld. Verkehrswertgutachten, Gewerbebewertung, Beleihungswert & Erbschaftsgutachten. Experten für OWL.',
        seoText: {
            title: 'Immobiliengutachter Bielefeld – Kompetenz in Ostwestfalen-Lippe',
            paragraphs: [
                'Als <strong>Immobiliengutachter in Bielefeld</strong> bewerten wir Immobilien in der größten Stadt Ostwestfalen-Lippes. Bielefeld überzeugt als Wirtschaftsstandort mit starkem Mittelstand, attraktiven Wohnlagen am Teutoburger Wald und einer dynamischen Stadtentwicklung.',
                'Unser Fokus liegt auf <strong>Wohnimmobilien</strong> in begehrten Lagen wie Dornberg und Gadderbaum, auf <strong>Gewerbeimmobilien</strong> im Bielefelder Wirtschaftsraum sowie auf <strong>Kapitalanlagen</strong> in der wachsenden Universitätsstadt. Auch <strong>Sonderimmobilien</strong> und denkmalgeschützte Objekte gehören zu unserer Expertise.',
                'Das Sachverständigenbüro Lasarz liefert Ihnen <strong>gerichtsverwertbare Gutachten</strong>, die von Gerichten in NRW, Finanzämtern und allen namhaften Banken anerkannt werden. Lassen Sie sich jetzt kostenlos beraten – telefonisch, per E-Mail oder vor Ort in Bielefeld.',
            ],
        },
    },

    // ── MELLE ──────────────────────────────────────────
    {
        slug: 'melle',
        name: 'Melle',
        region: 'Melle · Grönegau · Osnabrücker Land',
        heroSubtitle: 'Lasarz Sachverständigenbüro – Ihr regionaler Partner für Immobilienbewertung in Melle und dem Grönegau. DIA & BVS zertifiziert.',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'melle@lasarz.com',
        address: 'c/o Lasarz Sachverständigenbüro, Melle',
        typewriterWords: ['Verkehrswert.', 'Erbschaftsgutachten.', 'Hofbewertung.', 'Beleihungswert.', 'Kaufberatung.'],
        stats: [
            { value: 600, suffix: '+', label: 'Gutachten in der Region' },
            { value: 15, suffix: ' J.', label: 'Erfahrung' },
            { value: 99, suffix: '%', label: 'Weiterempfehlung' },
            { value: 8, suffix: ' T.', label: 'Ø Lieferzeit' },
        ],
        areas: ['Melle-Mitte', 'Buer', 'Neuenkirchen', 'Wellingholzhausen', 'Oldendorf', 'Riemsloh', 'Westerhausen', 'Gesmold', 'Bruchmühlen', 'Bad Essen', 'Borgholzhausen', 'Versmold', 'Bissendorf', 'Dissen', 'Hilter'],
        reviews: [
            { name: 'Heinrich B.', location: 'Melle-Mitte', text: 'Unsere Hofstelle wurde fair und fachkundig bewertet. Die Besonderheiten ländlicher Immobilien wurden genau berücksichtigt. Absolut empfehlenswert!' },
            { name: 'Gisela K.', location: 'Wellingholzhausen', text: 'Für die Erbschaft brauchten wir ein Verkehrswertgutachten. Unkompliziert, professionell und schneller als erwartet. Vielen Dank!' },
            { name: 'Stefan M.', location: 'Buer', text: 'Das Beleihungswertgutachten für unser neues Haus wurde von der Bank sofort akzeptiert. Top-Service aus der Region!' },
            { name: 'Karin P.', location: 'Bruchmühlen', text: 'Sehr kompetente Beratung beim Kauf unseres Einfamilienhauses. Das Kurzgutachten hat uns vor einer Fehlentscheidung bewahrt.' },
        ],
        whyUs: [
            { icon: '🎓', title: 'DIA & BVS zertifiziert', desc: 'Staatlich anerkannte Qualifikation für verlässliche Immobilienbewertung in Melle und Umgebung.' },
            { icon: '🏡', title: 'Ländliche Expertise', desc: 'Besondere Erfahrung mit Hofstellen, landwirtschaftlichen Flächen und ländlichen Wohnimmobilien im Grönegau.' },
            { icon: '⚡', title: 'Kurze Wege', desc: 'Als regionaler Partner sind wir schnell vor Ort – Besichtigungstermine meist innerhalb weniger Tage.' },
            { icon: '⚖️', title: 'Gerichtsfest', desc: 'Alle Gutachten werden von Gerichten, Finanzämtern und Banken anerkannt – §194 BauGB konform.' },
            { icon: '🤝', title: 'Persönlich & regional', desc: 'Wir kennen den lokalen Markt, die Bodenrichtwerte und die Besonderheiten jedes Ortsteils in Melle.' },
            { icon: '📞', title: 'Immer erreichbar', desc: 'Direkter Kontakt zum Sachverständigen – kein anonymes Call-Center.' },
        ],
        occasions: [
            { icon: '💰', title: 'Kauf & Verkauf', desc: 'Faire Preisfindung für Immobilien in Melle und dem Grönegau.' },
            { icon: '🏡', title: 'Hofstellen', desc: 'Spezielle Bewertung von landwirtschaftlichen Anwesen und Resthöfen.' },
            { icon: '⚖️', title: 'Erbschaft', desc: 'Wertermittlung geerbter Immobilien für Finanzamt und Erbengemeinschaft.' },
            { icon: '🏦', title: 'Finanzierung', desc: 'Beleihungswertgutachten für Ihre Baufinanzierung in Melle.' },
            { icon: '🔨', title: 'Bauschäden', desc: 'Professionelle Schadens- und Mängelbewertung.' },
            { icon: '📊', title: 'Steuer & AfA', desc: 'Immobilienbewertung für steuerliche Zwecke und Abschreibung.' },
        ],
        tabs: [
            { label: 'Wohnimmobilien', icon: '🏠', items: ['Einfamilienhaus', 'Doppelhaushälfte', 'Reihenhaus', 'Eigentumswohnung', 'Bauernhaus (umgebaut)', 'Bungalow'], desc: 'Von der modernen Neubausiedlung bis zum umgebauten Bauernhaus – wir kennen die Wohnimmobilien in Melle und dem Grönegau.' },
            { label: 'Land & Forst', icon: '🌾', items: ['Hofstellen', 'Landwirtschaftliche Flächen', 'Waldgrundstücke', 'Resthöfe', 'Reiterhöfe', 'Stallgebäude'], desc: 'Die ländliche Prägung Melles erfordert Spezialwissen bei der Bewertung von Agrariimmobilien und Hofstellen.' },
            { label: 'Grundstücke', icon: '🌍', items: ['Baugrundstücke', 'Landwirtschaftliche Flächen', 'Erbbaurechte', 'Gartengrundstücke', 'Gewerbeflächen', 'Waldgrundstücke'], desc: 'Grundstücksbewertung unter Berücksichtigung der regionalen Bodenrichtwerte und Entwicklungspotenziale.' },
            { label: 'Gewerbeimmobilien', icon: '🏢', items: ['Handwerksbetriebe', 'Einzelhandel', 'Lagerhallen', 'Bürogebäude', 'Werkstätten', 'Gastronomie'], desc: 'Auch gewerbliche Objekte in Melle und Umgebung bewerten wir professionell nach anerkannten Verfahren.' },
        ],
        seoTitle: 'Immobiliengutachter Melle',
        seoDescription: 'Zertifizierter Immobiliengutachter in Melle. Verkehrswertgutachten, Hofbewertung, Beleihungswert & Erbschaftsgutachten. Ihr regionaler Partner im Grönegau.',
        seoText: {
            title: 'Immobiliengutachter Melle – Ihr Partner im Grönegau',
            paragraphs: [
                'Als <strong>Immobiliengutachter in Melle</strong> sind wir Ihr regionaler Partner für alle Fragen der Immobilienbewertung. Die Stadt Melle mit ihren acht Stadtteilen am Teutoburger Wald bietet einen vielfältigen Immobilienmarkt – von modernen Neubaugebieten bis zu historischen Hofstellen.',
                'Besonders die <strong>Bewertung von Hofstellen und landwirtschaftlichen Anwesen</strong> erfordert Spezialwissen, das unser Team aus langjähriger Erfahrung mitbringt. Auch <strong>Resthöfe</strong>, <strong>ländliche Wohnimmobilien</strong> und <strong>Gewerbeobjekte</strong> in Melle und den umliegenden Gemeinden gehören zu unserem Kerngebiet.',
                'Das Sachverständigenbüro Lasarz erstellt <strong>gerichtsverwertbare Gutachten</strong> für alle Anlässe – ob Erbschaft, Scheidung, Kauf, Verkauf oder Bankfinanzierung. Kontaktieren Sie uns für eine kostenlose Erstberatung in Melle und Umgebung.',
            ],
        },
    },

    // ── RHEINE ──────────────────────────────────────────
    {
        slug: 'rheine',
        name: 'Rheine',
        region: 'Rheine · Emsland · Steinfurt',
        heroSubtitle: 'Lasarz Sachverständigenbüro – Kompetente Immobilienbewertung an der Ems. DIA & BVS zertifiziert. Regionale Expertise für Rheine und den Kreis Steinfurt.',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'rheine@lasarz.com',
        address: 'c/o Lasarz Sachverständigenbüro, Rheine',
        typewriterWords: ['Verkehrswert.', 'Erbschaftsgutachten.', 'Beleihungswert.', 'Gewerbeimmobilien.', 'Kaufberatung.'],
        stats: [
            { value: 750, suffix: '+', label: 'Gutachten Emsland' },
            { value: 15, suffix: ' J.', label: 'Marktpräsenz' },
            { value: 98, suffix: '%', label: 'Weiterempfehlung' },
            { value: 10, suffix: ' T.', label: 'Ø Lieferzeit' },
        ],
        areas: ['Innenstadt', 'Elte', 'Mesum', 'Hauenhorst', 'Catenhorn', 'Rodde', 'Wadelheim', 'Eschendorf', 'Schotthock', 'Gellendorf', 'Emsdetten', 'Neuenkirchen', 'Steinfurt', 'Hörstel', 'Ibbenbüren'],
        reviews: [
            { name: 'Bernd T.', location: 'Rheine-Innenstadt', text: 'Herr Lasarz hat unsere Gewerbeimmobilie an der Ems professionell bewertet. Die Kenntnis des regionalen Marktes war beeindruckend.' },
            { name: 'Maria H.', location: 'Emsdetten', text: 'Schnelles und präzises Erbschaftsgutachten für unser Elternhaus. Das Finanzamt hat die Bewertung ohne Rückfragen akzeptiert.' },
            { name: 'Wolfgang K.', location: 'Mesum', text: 'Bei der Finanzierung unseres Neubaus war das Beleihungswertgutachten der Schlüssel. Professionell und in wenigen Tagen fertig.' },
            { name: 'Renate S.', location: 'Steinfurt', text: 'Das Kurzgutachten für unseren Hausverkauf war sehr hilfreich. Der ermittelte Preis war realistisch und wir konnten entsprechend verhandeln.' },
        ],
        whyUs: [
            { icon: '🎓', title: 'DIA & BVS zertifiziert', desc: 'Staatlich anerkannte Sachverständige für rechtssichere Gutachten in Rheine und dem Kreis Steinfurt.' },
            { icon: '🌊', title: 'Ems-Region Experte', desc: 'Detaillierte Marktkenntnis für Rheine, Emsdetten, Steinfurt und das gesamte nördliche Münsterland.' },
            { icon: '⚡', title: 'Zügige Lieferung', desc: 'Verkehrswertgutachten in der Regel innerhalb von 10 Werktagen – Expressservice bei Bedarf.' },
            { icon: '🏭', title: 'Gewerbekompetenz', desc: 'Rheine als Wirtschaftsstandort – Erfahrung mit Betriebsimmobilien, Logistik und Textilgewerbe.' },
            { icon: '🤝', title: 'Unparteiisch', desc: 'Keine Vermittlungstätigkeit. Unser einziges Interesse ist die korrekte Wertermittlung.' },
            { icon: '📞', title: 'Regional erreichbar', desc: 'Persönlicher Kontakt und kurze Wege – wir sind schnell bei Ihnen vor Ort.' },
        ],
        occasions: [
            { icon: '💰', title: 'Kauf & Verkauf', desc: 'Den richtigen Preis kennen für Immobilien in Rheine und Umgebung.' },
            { icon: '🏭', title: 'Gewerbe', desc: 'Bewertung von Produktions-, Logistik- und Handelsimmobilien.' },
            { icon: '⚖️', title: 'Erbschaft', desc: 'Gerichtsfeste Wertermittlung für Erbengemeinschaften und Finanzämter.' },
            { icon: '🏦', title: 'Finanzierung', desc: 'Bankkonformes Beleihungswertgutachten nach BelWertV.' },
            { icon: '🔨', title: 'Schadensgutachten', desc: 'Professionelle Bewertung bei Baumängeln und Schäden.' },
            { icon: '📊', title: 'Steuer & Bilanz', desc: 'Immobilienbewertung für steuerliche und bilanzielle Zwecke.' },
        ],
        tabs: [
            { label: 'Wohnimmobilien', icon: '🏠', items: ['Einfamilienhaus', 'Doppelhaushälfte', 'Reihenmittelhaus', 'Eigentumswohnung', 'Mehrfamilienhaus', 'Bungalow'], desc: 'Ob Neubauviertel in Eschendorf oder historisches Stadthaus an der Ems – wir bewerten alle Wohnformen in Rheine.' },
            { label: 'Gewerbeimmobilien', icon: '🏢', items: ['Bürogebäude', 'Produktionshallen', 'Logistikflächen', 'Einzelhandel', 'Handwerksbetriebe', 'Gastronomie'], desc: 'Rheines starke Wirtschaft bietet vielfältige Gewerbeimmobilien – wir bewerten sie professionell nach anerkannten Verfahren.' },
            { label: 'Grundstücke', icon: '🌍', items: ['Baugrundstücke', 'Gewerbeflächen', 'Landwirtschaftliche Flächen', 'Erbbaurechte', 'Ufergrundstücke', 'Konversionsflächen'], desc: 'Grundstücksbewertung im Raum Rheine unter Berücksichtigung der lokalen Bodenrichtwerte und Entwicklungsperspektiven.' },
            { label: 'Sonderimmobilien', icon: '🏛️', items: ['Denkmalgeschützte Gebäude', 'Sakralbauten', 'Industriedenkmäler', 'Sportanlagen', 'Pflegeeinrichtungen', 'Spezialimmobilien'], desc: 'Auch besondere Objekttypen in Rheine und dem Kreis Steinfurt bewerten wir fachgerecht.' },
        ],
        seoTitle: 'Immobiliengutachter Rheine',
        seoDescription: 'Zertifizierter Immobiliengutachter in Rheine. Verkehrswertgutachten, Gewerbeimmobilien, Beleihungswert & Erbschaftsgutachten. Experten für den Kreis Steinfurt.',
        seoText: {
            title: 'Immobiliengutachter Rheine – Kompetenz an der Ems',
            paragraphs: [
                'Als <strong>Immobiliengutachter in Rheine</strong> bewerten wir Immobilien in der größten Stadt des Kreises Steinfurt. Rheine an der Ems bietet einen stabilen Immobilienmarkt mit wachsender Nachfrage – von attraktiven Wohnlagen in der Innenstadt bis zu Gewerbeflächen entlang der Verkehrsachsen.',
                'Unsere regionale Expertise umfasst nicht nur Rheine selbst, sondern auch die umliegenden Städte <strong>Emsdetten, Steinfurt, Hörstel und Ibbenbüren</strong>. Wir kennen die lokalen Bodenrichtwerte, die Marktentwicklung und die Besonderheiten jeder Mikrolage im nördlichen Münsterland.',
                'Ob <strong>Verkehrswertgutachten</strong> für Erbschaften, <strong>Beleihungswertgutachten</strong> für die Bankfinanzierung oder <strong>Gewerbebewertungen</strong> für Unternehmenstransaktionen – das Sachverständigenbüro Lasarz ist Ihr verlässlicher Partner in Rheine. Vereinbaren Sie Ihre kostenlose Erstberatung.',
            ],
        },
    },
];

export function getCityPageBySlug(slug: string) {
    return cityPages.find(c => c.slug === slug);
}
