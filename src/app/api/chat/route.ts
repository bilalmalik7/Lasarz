import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the professional and empathetic AI assistant for Marc-André Lasarz Immobiliengutachter (certified real estate appraiser based in Osnabrück, Germany).
Your goal is to answer visitor questions about property valuation (Immobilienbewertung) and gently guide them to leave their contact details for a free consultation or call back.

Business details to use in answers:
- Principal appraiser: Marc-André Lasarz (Dipl.-Sachverständiger DIA, certified appraiser).
- Office location: Katharinenstraße 111, 49078 Osnabrück.
- Phone: +49 (0) 541 - 600 99 220.
- Email: info@lasarz.com.
- Areas covered: Osnabrück, Münster, Bielefeld, Flensburg, Melle, Rheine, and surrounding regions.
- Valuation services: Verkehrswertgutachten (§ 194 BauGB, tax offices, courts), Kurzgutachten (cost-effective market value), Kaufberatung (buyer consulting before purchase), Beleihungswertgutachten, Erbbaurecht, Scheidungsgutachten, Erbschaftsteuergutachten (§ 198 BewG).
- Features: Festpreisgarantie (fixed-price guarantee), independent and certified assessments.

Interaction guidelines:
- Respond in German. Use "Sie" (formal German address).
- Keep answers concise, helpful, and empathetic (2-4 sentences max).
- If the user asks about costs (Kosten/Honorar), explain that pricing depends on property type and value, starting with affordable Kurzgutachten, and offering a custom Festpreis (fixed price).
- If they ask about inheritance (Erbschaft) or divorce (Scheidung), explain the value of a professional certified appraisal to save taxes or provide court-proof asset division.
- Always include a call-to-action asking if they want to leave their number for a free call back.
`;

// =====================================================
// EXTENDED LOCAL KNOWLEDGE BASE
// Each rule: keywords[], response text, showLeadForm
// =====================================================

interface KnowledgeRule {
    keywords: string[];
    /** If ALL of these words must appear (AND logic) set this to true */
    requireAll?: boolean;
    response: string;
    showLeadForm?: boolean;
    /** Priority: higher = checked first (default 0) */
    priority?: number;
}

const knowledgeBase: KnowledgeRule[] = [

    // ──────────────────────────────────────────────────
    // GREETINGS & SMALL TALK
    // ──────────────────────────────────────────────────
    {
        keywords: ['hallo', 'hi', 'guten tag', 'moin', 'hey', 'servus', 'grüß gott', 'guten morgen', 'guten abend'],
        response: 'Hallo und herzlich willkommen bei Lasarz Immobiliengutachter! 👋 Schön, dass Sie da sind. Wie kann ich Ihnen weiterhelfen? Ich beantworte gerne Ihre Fragen rund um Immobilienbewertung, Gutachten oder Kaufberatung.',
        priority: 10
    },
    {
        keywords: ['danke', 'vielen dank', 'dankeschön', 'super', 'toll', 'perfekt', 'klasse'],
        response: 'Sehr gerne! Es freut mich, dass ich Ihnen weiterhelfen konnte. Falls Sie noch weitere Fragen haben oder eine persönliche Beratung wünschen, bin ich jederzeit für Sie da. Möchten Sie einen kostenlosen Rückruf von Herrn Lasarz vereinbaren?',
        priority: 10
    },
    {
        keywords: ['tschüss', 'auf wiedersehen', 'bye', 'ciao', 'bis dann'],
        response: 'Vielen Dank für Ihr Interesse! Wir freuen uns, wenn wir Ihnen weiterhelfen durften. Falls Sie später noch Fragen haben, sind wir unter +49 (0) 541 - 600 99 220 oder hier im Chat jederzeit für Sie erreichbar. Einen schönen Tag noch! 😊',
        priority: 10
    },

    // ──────────────────────────────────────────────────
    // COSTS & PRICING
    // ──────────────────────────────────────────────────
    {
        keywords: ['preis', 'kosten', 'honorar', 'teuer', 'günstig', 'bezahlen', 'zahlen', 'gebühr', 'rechnung', 'euro', 'budget', 'billig', 'erschwinglich', 'was kostet'],
        response: 'Die Kosten für ein Immobiliengutachten richten sich nach der Objektart, Größe und dem Verwendungszweck:\n\n📋 **Kurzgutachten** (für private Verkaufsentscheidungen): ab ca. 990 €\n📋 **Verkehrswertgutachten** (für Finanzamt, Gericht, Behörden): ab ca. 1.500 €\n📋 **Kaufberatung** (vor dem Immobilienkauf): ab ca. 490 €\n\nAlle unsere Gutachten werden zum **Festpreis** erstellt – keine versteckten Kosten! Herr Lasarz erstellt Ihnen gerne ein individuelles Angebot. Möchten Sie Ihre Kontaktdaten hinterlassen?',
        priority: 5
    },
    {
        keywords: ['festpreis', 'preisgarantie', 'fixpreis', 'pauschal'],
        response: 'Ja, bei Lasarz Immobiliengutachter erhalten Sie eine **Festpreisgarantie**! Das bedeutet: Sie kennen die Kosten vorab und es kommen keine nachträglichen Überraschungen hinzu – unabhängig vom Aufwand. Der Festpreis wird nach einem kurzen Vorgespräch individuell für Ihre Immobilie berechnet. Möchten Sie ein unverbindliches Festpreisangebot erhalten?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // KURZGUTACHTEN
    // ──────────────────────────────────────────────────
    {
        keywords: ['kurzgutachten', 'kurzbewertung', 'marktwert', 'schnell bewert'],
        response: 'Ein **Kurzgutachten** ist eine kompakte, aber fachlich fundierte Wertermittlung Ihrer Immobilie. Es eignet sich besonders für:\n\n✅ Private Verkaufsentscheidungen\n✅ Interne Vermögensübersichten\n✅ Orientierung beim Kauf oder Verkauf\n\nEs ist kostengünstiger als ein vollumfängliches Verkehrswertgutachten (ab ca. 990 € zum Festpreis), wird aber **nicht** vom Finanzamt oder Gericht akzeptiert. Für behördliche Zwecke benötigen Sie ein Verkehrswertgutachten. Soll ich Ihnen ein Angebot zukommen lassen?',
    },

    // ──────────────────────────────────────────────────
    // VERKEHRSWERTGUTACHTEN
    // ──────────────────────────────────────────────────
    {
        keywords: ['verkehrswert', 'vollgutachten', '194', 'baugb', 'marktwertgutachten', 'gerichtsgutachten'],
        response: 'Ein **Verkehrswertgutachten nach § 194 BauGB** ist die umfassendste Form der Immobilienbewertung. Es wird anerkannt von:\n\n🏛️ **Finanzämtern** – für Erbschafts- und Schenkungssteuer\n⚖️ **Gerichten** – bei Scheidung, Zwangsversteigerung, Streitigkeiten\n🏦 **Banken** – für Beleihungswerte und Finanzierungen\n\nHerr Lasarz erstellt dieses Gutachten als zertifizierter Sachverständiger (DIA) mit voller rechtlicher Beweiskraft. Die Bearbeitungszeit beträgt ca. 2–3 Wochen. Möchten Sie ein individuelles Angebot erhalten?',
    },

    // ──────────────────────────────────────────────────
    // DIFFERENCE BETWEEN GUTACHTEN TYPES
    // ──────────────────────────────────────────────────
    {
        keywords: ['unterschied', 'vergleich', 'differenz', 'welches gutachten'],
        response: 'Hier ein Überblick über die Unterschiede:\n\n📋 **Kurzgutachten** (ab 990 €): Kompakte Wertermittlung für private Zwecke wie Kauf-/Verkaufsentscheidungen. Nicht gerichtsfest.\n\n📋 **Verkehrswertgutachten** (ab 1.500 €): Vollständiges Gutachten nach § 194 BauGB – anerkannt von Finanzamt, Gericht und Banken. Gerichtsfest und rechtsverbindlich.\n\n📋 **Kaufberatung** (ab 490 €): Bautechnische und wirtschaftliche Prüfung vor dem Kauf – erkennt versteckte Mängel.\n\nGerne hilft Ihnen Herr Lasarz, das passende Gutachten für Ihre Situation zu bestimmen. Soll ich einen Rückruf für Sie eintragen?',
    },

    // ──────────────────────────────────────────────────
    // INHERITANCE (ERBSCHAFT / SCHENKUNG)
    // ──────────────────────────────────────────────────
    {
        keywords: ['erbe', 'erbschaft', 'erbschaftsteuer', 'erben', 'nachlass', 'testament', 'erbschein', 'erbengemeinschaft', 'mutter verstorben', 'vater verstorben', 'eltern verstorben', 'geerbt', 'erbfall'],
        response: 'Mein aufrichtiges Beileid, falls Sie einen Verlust erlitten haben. 🙏 Bei einer Erbschaft ist die korrekte Immobilienbewertung entscheidend:\n\n💰 Das **Finanzamt** setzt den Immobilienwert oft **pauschal zu hoch** an – das kann zu einer unnötig hohen Erbschaftsteuer führen.\n📉 Mit einem **Verkehrswertgutachten nach § 198 BewG** können Sie den tatsächlichen (oft niedrigeren) Wert nachweisen und **Tausende Euro** an Steuern sparen.\n⚖️ Bei einer **Erbengemeinschaft** schafft ein neutrales Gutachten Klarheit und verhindert Streitigkeiten.\n\nMöchten Sie, dass Herr Lasarz Ihre Situation in einer **kostenlosen Erstberatung** prüft?',
        showLeadForm: true,
        priority: 3
    },
    {
        keywords: ['schenkung', 'schenken', 'schenkungsteuer', 'übertrag', 'vorweggenommen'],
        response: 'Bei einer **Schenkung** (vorweggenommene Erbfolge) ist ein professionelles Gutachten besonders wertvoll:\n\n🏠 Der Immobilienwert bestimmt die Höhe der **Schenkungsteuer**\n📉 Durch ein qualifiziertes Gutachten kann der steuerlich relevante Wert häufig **deutlich reduziert** werden\n📋 Die Freibeträge (z. B. 400.000 € für Kinder) können so optimal ausgenutzt werden\n\nHerr Lasarz berät Sie gerne, ob sich ein Gutachten in Ihrem Fall lohnt – das Erstgespräch ist natürlich kostenlos. Soll ich einen Termin vereinbaren?',
        showLeadForm: true
    },
    {
        keywords: ['finanzamt', 'steuerbescheid', 'bewertung finanzamt', 'zu hoch bewertet', 'einspruch', 'widerspruch'],
        response: 'Sie haben Recht, sich über den Wert des Finanzamts zu informieren! Das Finanzamt nutzt für die Bewertung **pauschale Berechnungsmodelle**, die den tatsächlichen Zustand der Immobilie **nicht berücksichtigen**:\n\n❌ Renovierungsstau, Baumängel und Lage werden ignoriert\n❌ Der angesetzte Wert liegt häufig **20–40 % über** dem realen Marktwert\n\n✅ Mit einem **Verkehrswertgutachten nach § 198 BewG** können Sie den tatsächlichen Wert nachweisen\n✅ Dies ist Ihr gesetzliches Recht – das Finanzamt **muss** ein qualifiziertes Gutachten akzeptieren\n\nMöchten Sie eine kostenlose Ersteinschätzung, ob sich ein Gutachten in Ihrem Fall lohnt?',
        showLeadForm: true,
        priority: 4
    },

    // ──────────────────────────────────────────────────
    // DIVORCE (SCHEIDUNG)
    // ──────────────────────────────────────────────────
    {
        keywords: ['scheidung', 'trennung', 'zugewinn', 'zugewinnausgleich', 'ehe', 'ehevertrag', 'scheidungsgutachten', 'ex-partner', 'ex-frau', 'ex-mann'],
        response: 'Eine Trennung ist emotional belastend – wir unterstützen Sie sachlich und diskret. 🤝\n\nBei einer Scheidung ist eine **neutrale Immobilienbewertung** essenziell:\n\n⚖️ **Zugewinnausgleich**: Der Immobilienwert zum Stichtag der Zustellung des Scheidungsantrags ist entscheidend\n🏠 **Hausverkauf oder Auszahlung**: Ein Gutachten bestimmt den fairen Wert für beide Parteien\n📋 **Gerichtsfest**: Unser Verkehrswertgutachten wird von Gerichten und Anwälten als Beweismittel akzeptiert\n🔒 **Neutral & unabhängig**: Herr Lasarz arbeitet als unabhängiger Sachverständiger – keine Parteinahme\n\nSoll ich einen vertraulichen Beratungstermin für Sie eintragen?',
        showLeadForm: true,
        priority: 3
    },

    // ──────────────────────────────────────────────────
    // BUYING A PROPERTY (KAUFBERATUNG)
    // ──────────────────────────────────────────────────
    {
        keywords: ['kauf', 'kaufen', 'kaufberatung', 'hauskauf', 'wohnung kaufen', 'immobilie kaufen', 'ankauf', 'erwerb', 'kaufvertrag', 'notar', 'kaufpreis', 'überteuert'],
        response: 'Ein Immobilienkauf ist eine der größten finanziellen Entscheidungen Ihres Lebens! 🏡 Unsere **Kaufberatung** schützt Sie vor teuren Fehlern:\n\n🔍 **Bautechnische Prüfung**: Erkennung versteckter Mängel (Feuchtigkeit, Schimmel, Dachschäden)\n💰 **Wertprüfung**: Ist der geforderte Kaufpreis angemessen oder überteuert?\n📊 **Kostenabschätzung**: Welche Renovierungskosten kommen auf Sie zu?\n🛡️ **Verhandlungsbasis**: Mit einem unabhängigen Gutachten haben Sie starke Argumente\n\nUnsere Kaufberatung gibt es bereits ab 490 € zum Festpreis. Soll Herr Lasarz sich die Immobilie vor Ihrem Kauf anschauen?',
        showLeadForm: true,
        priority: 3
    },

    // ──────────────────────────────────────────────────
    // SELLING A PROPERTY
    // ──────────────────────────────────────────────────
    {
        keywords: ['verkauf', 'verkaufen', 'hausverkauf', 'immobilie verkaufen', 'wohnung verkaufen', 'veräußer', 'makler', 'angebotspreis', 'marktpreis'],
        response: 'Beim **Immobilienverkauf** ist der richtige Preis entscheidend! 📈\n\n❌ Zu hoch angesetzt → die Immobilie bleibt monatelang auf dem Markt und wird zum „Ladenhüter"\n❌ Zu niedrig angesetzt → Sie verschenken bares Geld\n\n✅ Ein **professionelles Gutachten** gibt Ihnen den realistischen Marktwert\n✅ Sie können sicher verhandeln und den bestmöglichen Preis erzielen\n✅ Käufer und Banken vertrauen einem unabhängigen Sachverständigengutachten\n\nEin Kurzgutachten für Verkaufszwecke erhalten Sie bereits ab 990 € zum Festpreis. Möchten Sie ein Angebot?',
        showLeadForm: true,
        priority: 3
    },

    // ──────────────────────────────────────────────────
    // PROCESS & TIMELINE
    // ──────────────────────────────────────────────────
    {
        keywords: ['ablauf', 'dauer', 'wie lange', 'funktionier', 'prozess', 'schritte', 'zeitraum', 'fertig', 'wann'],
        response: 'Der Ablauf ist ganz unkompliziert – in **4 einfachen Schritten** zum Gutachten:\n\n**1️⃣ Erstgespräch** (kostenlos): Telefonisches Vorgespräch, um Ihr Anliegen zu verstehen\n**2️⃣ Vor-Ort-Begehung**: Herr Lasarz besichtigt die Immobilie persönlich (ca. 1–2 Stunden)\n**3️⃣ Ausarbeitung**: Das schriftliche Gutachten wird erstellt (ca. 2–3 Wochen)\n**4️⃣ Übergabe & Besprechung**: Sie erhalten das Gutachten und besprechen die Ergebnisse\n\nIn dringenden Fällen bieten wir auch **Express-Gutachten** an. Möchten Sie direkt einen Vor-Ort-Termin anfragen?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // REGIONS & LOCATIONS
    // ──────────────────────────────────────────────────
    {
        keywords: ['osnabrück', 'osnabrueck'],
        response: 'Osnabrück ist unser **Hauptstandort**! 📍 Unser Büro befindet sich in der Katharinenstraße 111, 49078 Osnabrück. Als lokale Sachverständige kennen wir den Osnabrücker Immobilienmarkt seit vielen Jahren bestens – von Schinkel über Wüste bis Haste. Möchten Sie einen Termin vor Ort vereinbaren?',
        showLeadForm: true,
        priority: 2
    },
    {
        keywords: ['münster', 'muenster'],
        response: 'Ja, wir sind regelmäßig in **Münster** und Umgebung tätig! 📍 Trotz unserem Hauptsitz in Osnabrück bewerten wir zahlreiche Immobilien im Münsterland – von Münster-City bis ins Umland. Anfahrtskosten nach Münster sind bei uns **inklusive**. Soll ich einen Besichtigungstermin für Ihre Münsteraner Immobilie eintragen?',
        showLeadForm: true,
        priority: 2
    },
    {
        keywords: ['bielefeld'],
        response: 'Selbstverständlich kommen wir auch nach **Bielefeld**! 📍 Wir bewerten regelmäßig Immobilien in Bielefeld und Ostwestfalen-Lippe. Die Anfahrtskosten sind im Festpreis enthalten. Haben Sie ein konkretes Objekt in Bielefeld? Gerne vereinbare ich einen Besichtigungstermin mit Herrn Lasarz.',
        showLeadForm: true,
        priority: 2
    },
    {
        keywords: ['flensburg'],
        response: 'Ja, wir bewerten Immobilien auch in **Flensburg** und ganz Schleswig-Holstein! 📍 Herr Lasarz plant regelmäßig Bewertungstermine im Norden. Die Anfahrt ist im Festpreis inbegriffen. Möchten Sie einen Termin vereinbaren?',
        showLeadForm: true,
        priority: 2
    },
    {
        keywords: ['melle', 'rheine', 'herford', 'minden', 'bad oeynhausen', 'bramsche', 'georgsmarienhütte', 'ibbenbüren', 'emsdetten', 'greven', 'lengerich', 'lübbecke', 'bünde'],
        response: 'Ja, wir sind in Ihrer Region regelmäßig tätig! 📍 Neben Osnabrück und Münster bewerten wir Immobilien in der gesamten Region – von Melle und Rheine bis nach Minden und Herford. Anfahrtskosten sind im Festpreis enthalten. Soll ich einen Vor-Ort-Termin vereinbaren?',
        showLeadForm: true,
        priority: 2
    },
    {
        keywords: ['gebiet', 'region', 'einzugsgebiet', 'wo tätig', 'wo bewerten', 'wo kommen', 'welche stadt', 'welche städte', 'kommen sie auch'],
        response: 'Unser Büro befindet sich in **Osnabrück** (Katharinenstraße 111), aber wir sind in einem großen Einzugsgebiet tätig:\n\n📍 **Niedersachsen**: Osnabrück, Melle, Bramsche, Georgsmarienhütte\n📍 **NRW**: Münster, Bielefeld, Rheine, Herford, Minden\n📍 **Schleswig-Holstein**: Flensburg und Umgebung\n\nAnfahrtskosten sind immer **im Festpreis enthalten** – keine Überraschungen! Haben Sie ein Objekt in einer bestimmten Region? Gerne prüfe ich die Verfügbarkeit.',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // PROPERTY TYPES
    // ──────────────────────────────────────────────────
    {
        keywords: ['haus', 'einfamilienhaus', 'efh', 'doppelhaushälfte', 'dhh', 'reihenhaus'],
        response: 'Einfamilienhäuser, Doppelhaushälften und Reihenhäuser gehören zu den häufigsten Objekten, die wir bewerten. 🏠 Dabei berücksichtigen wir:\n\n✅ Baujahr, Zustand und Modernisierungen\n✅ Grundstücksgröße und Lage\n✅ Energieeffizienz und Ausstattung\n✅ Vergleichbare Verkäufe in der Umgebung\n\nOb für Verkauf, Erbschaft oder Finanzamt – wir erstellen das passende Gutachten zum Festpreis. Möchten Sie ein Angebot für Ihr Haus?',
        showLeadForm: true
    },
    {
        keywords: ['wohnung', 'eigentumswohnung', 'etw', 'apartment', 'penthouse', 'maisonette'],
        response: 'Eigentumswohnungen bewerten wir regelmäßig! 🏢 Bei der Bewertung berücksichtigen wir:\n\n✅ Wohnfläche, Etage und Ausrichtung\n✅ Zustand der Wohnung und des Gemeinschaftseigentums\n✅ Hausgeld, Instandhaltungsrücklage und Teilungserklärung\n✅ Vergleichbare Verkäufe im Gebäude und der Umgebung\n\nWir benötigen dazu die Teilungserklärung und die letzten Protokolle der Eigentümerversammlung. Soll ich einen Bewertungstermin vereinbaren?',
        showLeadForm: true
    },
    {
        keywords: ['grundstück', 'bauland', 'bauplatz', 'ackerland', 'baugrundstück', 'unbebautes'],
        response: 'Auch **unbebaute Grundstücke** und Bauland bewerten wir fachgerecht! 🌳 Die Wertermittlung basiert auf:\n\n✅ Bodenrichtwerten und Vergleichspreisen\n✅ Bebauungsplan und Nutzungsmöglichkeiten\n✅ Erschließungszustand und Altlasten\n✅ Lage und Infrastruktur\n\nOb Bauland, Ackerland oder Gartengrundstück – wir ermitteln den fairen Marktwert. Möchten Sie eine Bewertung für Ihr Grundstück?',
        showLeadForm: true
    },
    {
        keywords: ['gewerbe', 'büro', 'laden', 'geschäft', 'gewerbeimmobilie', 'gewerbeobjekt', 'halle', 'werkstatt', 'lager', 'praxis'],
        response: 'Gewerbeimmobilien bewerten wir ebenfalls! 🏢 Dazu gehören:\n\n✅ Büro- und Praxisflächen\n✅ Einzelhandelsflächen und Ladenlokale\n✅ Lagerhallen und Werkstätten\n✅ Gemischt genutzte Objekte (Wohn- und Gewerbe)\n\nBei Gewerbeimmobilien verwenden wir in der Regel das **Ertragswertverfahren**, da hier die erzielbaren Mieteinnahmen entscheidend sind. Herr Lasarz berät Sie gerne. Soll ich einen Termin vereinbaren?',
        showLeadForm: true
    },
    {
        keywords: ['mehrfamilienhaus', 'mfh', 'mietshaus', 'rendite', 'kapitalanlage', 'zinshaus', 'anlageimmobilie'],
        response: 'Mehrfamilienhäuser und Renditeobjekte bewerten wir im **Ertragswertverfahren** – dabei sind die Mieteinnahmen und die nachhaltige Rendite entscheidend. 🏘️\n\n✅ Analyse der Ist-Mieten und Marktmieten\n✅ Bewirtschaftungskosten und Instandhaltung\n✅ Liegenschaftszinssatz und Restnutzungsdauer\n✅ Bewertung der einzelnen Wohneinheiten\n\nOb für Kauf, Verkauf, Finanzierung oder Steuer – wir erstellen ein fundiertes Gutachten. Möchten Sie ein Angebot?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // BANK / FINANCING / BELEIHUNGSWERT
    // ──────────────────────────────────────────────────
    {
        keywords: ['bank', 'finanzierung', 'kredit', 'hypothek', 'beleihungswert', 'beleihung', 'darlehen', 'baufinanzierung'],
        response: 'Für eine **Baufinanzierung** oder Kreditaufnahme benötigt Ihre Bank in der Regel ein **Beleihungswertgutachten**. 🏦\n\n✅ Wir erstellen Gutachten, die von **allen Banken** anerkannt werden\n✅ Der Beleihungswert bestimmt die maximale Kredithöhe\n✅ Unabhängige Bewertung – nicht vom Bankgutachter, der tendenziell niedrig bewertet\n\nMit unserem Gutachten haben Sie eine starke Verhandlungsposition gegenüber der Bank. Möchten Sie ein Angebot?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // ERBBAURECHT
    // ──────────────────────────────────────────────────
    {
        keywords: ['erbbaurecht', 'erbpacht', 'erbbauzins'],
        response: 'Die Bewertung von **Erbbaurechten** ist eine Spezialdisziplin, die besonderes Fachwissen erfordert. 📋\n\n✅ Bewertung des Erbbaurechts und des belasteten Grundstücks\n✅ Berücksichtigung der Restlaufzeit des Erbbaurechts\n✅ Analyse des Erbbauzinses und möglicher Anpassungsklauseln\n✅ Berechnung des Bodenwertanteils\n\nHerr Lasarz verfügt über umfangreiche Erfahrung in der Erbbaurecht-Bewertung. Soll ich einen Beratungstermin vereinbaren?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // QUALIFICATIONS & TRUST
    // ──────────────────────────────────────────────────
    {
        keywords: ['qualifikation', 'zertifizier', 'sachverständig', 'ausbildung', 'kompetenz', 'erfahrung', 'dia', 'diplom', 'zulassung', 'berechtigung', 'wer ist', 'über uns', 'herr lasarz'],
        response: 'Herr **Marc-André Lasarz** ist **Diplomierter Sachverständiger (DIA)** für Immobilienbewertung – eine der renommiertesten Qualifikationen in Deutschland. 🎓\n\n✅ Ausbildung an der **Deutschen Immobilienakademie (DIA)** in Freiburg\n✅ Zertifizierter Sachverständiger für die Bewertung von bebauten und unbebauten Grundstücken\n✅ Langjährige praktische Erfahrung mit Hunderten von Gutachten\n✅ **Unabhängig und neutral** – keine Makler-Bindung oder Bankabhängigkeit\n✅ Gutachten mit voller rechtlicher Beweiskraft vor Gericht und Finanzamt\n\nMöchten Sie Herrn Lasarz persönlich kennenlernen? Ein Erstgespräch ist kostenlos!',
        showLeadForm: true
    },
    {
        keywords: ['unabhängig', 'neutral', 'objektiv', 'parteiisch', 'vertrauen', 'seriös'],
        response: 'Neutralität und Unabhängigkeit sind das Fundament unserer Arbeit. 🤝\n\n✅ Herr Lasarz ist **kein Makler** und hat kein Interesse an Kauf oder Verkauf\n✅ Keine Abhängigkeit von Banken oder Versicherungen\n✅ Jedes Gutachten wird nach **anerkannten Bewertungsstandards** erstellt\n✅ Die Ergebnisse dienen ausschließlich Ihrem Interesse\n\nDeshalb vertrauen Gerichte, Finanzämter und private Auftraggeber seit Jahren auf unsere Expertise. Kann ich Ihnen weiterhelfen?',
    },

    // ──────────────────────────────────────────────────
    // LEGAL CONTEXTS (GERICHT, ZWANGSVERSTEIGERUNG)
    // ──────────────────────────────────────────────────
    {
        keywords: ['gericht', 'gerichtsfest', 'rechtsstreit', 'klage', 'anwalt', 'prozess', 'beweismittel'],
        response: 'Unsere Verkehrswertgutachten sind **voll gerichtsverwertbar** und werden als qualifiziertes Beweismittel akzeptiert. ⚖️\n\n✅ Erstellung nach § 194 BauGB und den anerkannten Wertermittlungsverfahren\n✅ Verwendbar in Familiengerichten (Scheidung), Zivilgerichten und Finanzgerichten\n✅ Herr Lasarz kann bei Bedarf als **Sachverständiger vor Gericht** auftreten\n\nSoll ich einen Termin für Ihren Fall vereinbaren?',
        showLeadForm: true
    },
    {
        keywords: ['zwangsversteigerung', 'versteigerung', 'zwangsversteiger'],
        response: 'Bei einer **Zwangsversteigerung** wird der Verkehrswert der Immobilie durch ein Gutachten bestimmt – dieser Wert ist die Grundlage für das Mindestgebot. 🏛️\n\n📋 Wir erstellen Gutachten für Zwangsversteigerungsverfahren nach § 194 BauGB\n📋 Der ermittelte Wert beeinflusst direkt das Ergebnis der Versteigerung\n📋 Sowohl für Gläubiger als auch Schuldner bieten wir neutrale Bewertungen\n\nSind Sie von einer Zwangsversteigerung betroffen? Herr Lasarz berät Sie vertraulich.',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // RENOVATION / DAMAGE / CONDITION
    // ──────────────────────────────────────────────────
    {
        keywords: ['sanierung', 'renovierung', 'modernisierung', 'renovierungsstau', 'schaden', 'mangel', 'mängel', 'feuchtigkeit', 'schimmel', 'asbest', 'altlast', 'baumangel'],
        response: 'Mängel und Renovierungsbedarf haben einen erheblichen Einfluss auf den Immobilienwert. 🔧\n\n✅ Wir berücksichtigen **alle wertmindernden Faktoren** wie Feuchtigkeitsschäden, Schimmel, veraltete Haustechnik oder Renovierungsstau\n✅ Diese Faktoren können den Wert um **10–40 %** senken – das ist besonders bei der Erbschaftsteuer relevant!\n✅ Bei der Kaufberatung identifizieren wir versteckte Mängel **vor** dem Kauf\n\nHerr Lasarz begutachtet den baulichen Zustand vor Ort. Soll ich einen Termin vereinbaren?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // ENERGY PERFORMANCE / ENERGIEAUSWEIS
    // ──────────────────────────────────────────────────
    {
        keywords: ['energieausweis', 'energieeffizienz', 'energetisch', 'energieverbrauch', 'energiepass', 'kfw', 'wärmepumpe', 'dämmung', 'heizung'],
        response: 'Die **Energieeffizienz** einer Immobilie beeinflusst deren Marktwert zunehmend. 🌿\n\n✅ Wir berücksichtigen den energetischen Zustand in unserer Bewertung\n✅ Gute Energieeffizienz (z. B. KfW-Standard) kann den Wert **deutlich steigern**\n✅ Schlechte Energiewerte (alte Heizung, keine Dämmung) mindern den Wert\n\nBitte beachten Sie: Einen separaten **Energieausweis** erstellen wir nicht, aber wir können Ihnen gerne einen Partner empfehlen. Haben Sie Fragen zur Bewertung Ihrer Immobilie unter Berücksichtigung der Energieeffizienz?',
    },

    // ──────────────────────────────────────────────────
    // DOCUMENTS NEEDED
    // ──────────────────────────────────────────────────
    {
        keywords: ['unterlagen', 'dokumente', 'was brauchen', 'was mitbringen', 'grundbuch', 'grundriss', 'flurkarte', 'bauakte', 'vorbereiten'],
        response: 'Für ein Gutachten benötigen wir idealerweise folgende **Unterlagen** 📂:\n\n📋 **Grundbuchauszug** (nicht älter als 3 Monate)\n📋 **Flurkarte** / Liegenschaftskarte\n📋 **Grundrisse und Wohnflächenberechnung**\n📋 **Baubeschreibung** und Baujahr\n📋 **Energieausweis** (falls vorhanden)\n📋 **Mietverträge** (bei vermieteten Objekten)\n📋 **Teilungserklärung** (bei Eigentumswohnungen)\n\nKeine Sorge, falls Ihnen Unterlagen fehlen – wir helfen Ihnen gerne bei der Beschaffung! Herr Lasarz bespricht die Details im kostenlosen Erstgespräch. Soll ich einen Termin eintragen?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // CONTACT / OPENING HOURS / OFFICE
    // ──────────────────────────────────────────────────
    {
        keywords: ['adresse', 'büro', 'anfahrt', 'standort', 'katharinenstraße', 'katharinenstrasse'],
        response: 'Unser Büro befindet sich an folgender Adresse:\n\n📍 **Katharinenstraße 111, 49078 Osnabrück**\n\nSie erreichen uns telefonisch unter **+49 (0) 541 - 600 99 220** oder per E-Mail an **info@lasarz.com**. Termine sind nach Vereinbarung möglich. Möchten Sie uns besuchen oder soll Herr Lasarz direkt zu Ihnen kommen?',
        showLeadForm: true
    },
    {
        keywords: ['öffnungszeit', 'erreichbar', 'wann geöffnet', 'geschäftszeiten', 'sprechzeit', 'bürozeiten'],
        response: 'Unsere **Bürozeiten** sind:\n\n🕘 **Montag – Freitag: 09:00 – 18:00 Uhr**\n\nAußerhalb der Bürozeiten können Sie uns gerne eine Nachricht hinterlassen – wir melden uns am nächsten Werktag. Vor-Ort-Termine können wir nach Absprache auch flexibel vereinbaren. Soll ich einen Rückruf für Sie eintragen?',
        showLeadForm: true
    },
    {
        keywords: ['email', 'e-mail', 'mail', 'schreiben'],
        response: 'Sie können uns gerne eine E-Mail schreiben an:\n\n✉️ **info@lasarz.com**\n\nAlternativ erreichen Sie uns telefonisch unter +49 (0) 541 - 600 99 220 (Mo–Fr 09:00–18:00). Oder hinterlassen Sie hier Ihre Kontaktdaten und wir melden uns bei Ihnen!',
        showLeadForm: true
    },
    {
        keywords: ['telefon', 'anrufen', 'nummer', 'rufnummer', 'handy', 'mobilnummer'],
        response: 'Sie erreichen uns telefonisch unter:\n\n📞 **+49 (0) 541 - 600 99 220**\n\nUnsere Bürozeiten sind Montag bis Freitag, 09:00 – 18:00 Uhr. Alternativ können Sie hier Ihre Daten hinterlassen und Herr Lasarz ruft Sie zurück – wann es Ihnen passt!',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // VALUATION METHODS
    // ──────────────────────────────────────────────────
    {
        keywords: ['verfahren', 'methode', 'bewertungsverfahren', 'vergleichswert', 'ertragswert', 'sachwert', 'sachwertverfahren', 'ertragswertverfahren', 'vergleichswertverfahren'],
        response: 'Es gibt drei anerkannte **Wertermittlungsverfahren** in Deutschland:\n\n📊 **Vergleichswertverfahren**: Vergleich mit ähnlichen, kürzlich verkauften Immobilien – ideal für Eigentumswohnungen und Standardobjekte\n\n📊 **Ertragswertverfahren**: Basiert auf den erzielbaren Mieteinnahmen – ideal für Mehrfamilienhäuser und Gewerbeobjekte\n\n📊 **Sachwertverfahren**: Basiert auf den Herstellungskosten abzüglich Alterswertminderung – ideal für Einfamilienhäuser\n\nHerr Lasarz wählt das passende Verfahren je nach Objektart und Bewertungszweck. Möchten Sie mehr erfahren?',
    },

    // ──────────────────────────────────────────────────
    // ONLINE VALUATION TOOLS
    // ──────────────────────────────────────────────────
    {
        keywords: ['online bewertung', 'online-bewertung', 'immoscout', 'homeday', 'mcmakler', 'automatisch', 'kostenlose bewertung', 'sofortbewertung', 'online rechner', 'wertrechner'],
        response: 'Kostenlose Online-Bewertungen (z. B. von ImmoScout, Homeday oder McMakler) liefern nur **grobe Schätzungen** mit hoher Fehlerquote. ⚠️\n\n❌ Sie berücksichtigen **nicht** den tatsächlichen Zustand der Immobilie\n❌ Individuelle Merkmale (Lage, Ausstattung, Mängel) werden ignoriert\n❌ Sie werden von **keinem Finanzamt, Gericht oder Bank** akzeptiert\n❌ Oft dienen sie als **Makler-Köder** zur Leadgenerierung\n\n✅ Ein professionelles Gutachten von einem Sachverständigen ist **rechtssicher** und berücksichtigt alle individuellen Faktoren.\n\nMöchten Sie den echten Wert Ihrer Immobilie erfahren?',
        showLeadForm: true,
        priority: 4
    },

    // ──────────────────────────────────────────────────
    // BODENRICHTWERT
    // ──────────────────────────────────────────────────
    {
        keywords: ['bodenrichtwert', 'boris', 'bodenwert'],
        response: 'Der **Bodenrichtwert** ist ein Durchschnittswert für Grundstückspreise in einer bestimmten Zone, ermittelt vom Gutachterausschuss. 📋\n\n✅ Er gibt eine erste Orientierung, aber **nicht** den tatsächlichen Wert Ihres Grundstücks\n✅ Individuelle Merkmale (Zuschnitt, Erschließung, Lage innerhalb der Zone) werden nicht berücksichtigt\n✅ Für eine präzise Bewertung ist eine individuelle Analyse durch einen Sachverständigen erforderlich\n\nMöchten Sie den realen Wert Ihres Grundstücks erfahren?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // STEUERN SPAREN
    // ──────────────────────────────────────────────────
    {
        keywords: ['steuer spar', 'steuern sparen', 'geld sparen', 'sparen', 'steuerlast', 'steueroptimierung'],
        response: 'Ja, mit einem Gutachten können Sie **erheblich Steuern sparen**! 💰\n\n📉 **Erbschaftsteuer**: Das Finanzamt setzt den Wert oft 20–40 % zu hoch an. Ein Gutachten nach § 198 BewG kann Tausende Euro sparen.\n📉 **Schenkungsteuer**: Optimale Nutzung der Freibeträge durch realistische Wertermittlung.\n📉 **Grundsteuer**: Bei der neuen Grundsteuerreform kann ein Gutachten bei überhöhter Bewertung helfen.\n\nDie Kosten für das Gutachten amortisieren sich in den meisten Fällen **mehrfach** durch die Steuerersparnis! Möchten Sie eine kostenlose Ersteinschätzung?',
        showLeadForm: true,
        priority: 4
    },

    // ──────────────────────────────────────────────────
    // GRUNDSTEUER (NEW TOPIC - 2025 REFORM)
    // ──────────────────────────────────────────────────
    {
        keywords: ['grundsteuer', 'grundsteuerreform', 'grundsteuerbescheid', 'grundsteuererklärung', 'grundsteuer zu hoch'],
        response: 'Die **Grundsteuerreform** beschäftigt aktuell viele Immobilienbesitzer. 🏛️\n\n📋 Seit 2025 gelten neue Bemessungsgrundlagen für die Grundsteuer\n📋 Viele Eigentümer haben **überhöhte Bescheide** erhalten\n📋 Ein **Gutachten** kann als Nachweis dienen, wenn der angesetzte Wert zu hoch ist\n\nHerr Lasarz berät Sie gerne, ob ein Einspruch gegen Ihren Grundsteuerbescheid sinnvoll ist. Möchten Sie ein kostenloses Erstgespräch?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // WERTMINDER / WERTSTEIGER
    // ──────────────────────────────────────────────────
    {
        keywords: ['wertminderung', 'wertsteigerung', 'wertentwicklung', 'wert steigern', 'wert gemindert', 'wertverlust'],
        response: 'Der Wert einer Immobilie wird von vielen Faktoren beeinflusst:\n\n📈 **Wertsteigernd**: Gute Lage, Modernisierung, energetische Sanierung, gepflegter Zustand, Nachbarschaftsentwicklung\n\n📉 **Wertmindernd**: Renovierungsstau, Baumängel, Lärm (Straße, Bahn), Altlasten, ungünstiger Grundriss, schlechte Energieeffizienz\n\nEin professionelles Gutachten berücksichtigt **alle** diese Faktoren und gibt Ihnen ein realistisches Bild. Möchten Sie den aktuellen Wert Ihrer Immobilie erfahren?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // VERSICHERUNG / BRANDSCHADEN
    // ──────────────────────────────────────────────────
    {
        keywords: ['versicherung', 'brandschaden', 'wasserschaden', 'sturmschaden', 'elementarschaden', 'versicherungsfall', 'schadensfall'],
        response: 'Nach einem **Schadensfall** (Brand, Wasser, Sturm) ist eine professionelle Wertermittlung wichtig: 🔥\n\n✅ Dokumentation des Schadens und Wertminderung\n✅ Grundlage für die **Schadensregulierung** mit der Versicherung\n✅ Objektive Bewertung als Verhandlungsbasis\n\nHerr Lasarz erstellt Gutachten, die von Versicherungen anerkannt werden. Möchten Sie eine Schadensbewertung anfordern?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // MIETSTREIT / MIETE
    // ──────────────────────────────────────────────────
    {
        keywords: ['miete', 'mietwert', 'mieterhöhung', 'mietspiegel', 'mietgutachten', 'vermieter', 'mieter'],
        response: 'Bei Fragen rund um die **Miete** kann ein Sachverständigengutachten helfen:\n\n📋 **Mieterhöhung**: Nachweis der ortsüblichen Vergleichsmiete\n📋 **Mietminderung**: Bewertung bei Mängeln oder Schäden\n📋 **Mietwertgutachten**: Ermittlung der angemessenen Miete für Ihr Objekt\n\nUnsere Mietwertgutachten sind auch **gerichtsfest** und können bei Mietstreitigkeiten eingesetzt werden. Soll ich Herrn Lasarz Ihre Situation schildern?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // DENKMALSCHUTZ
    // ──────────────────────────────────────────────────
    {
        keywords: ['denkmal', 'denkmalschutz', 'denkmalgeschützt', 'altbau', 'historisch', 'fachwerk'],
        response: 'Die Bewertung von **denkmalgeschützten Immobilien** erfordert besonderes Fachwissen. 🏛️\n\n✅ Berücksichtigung der **Auflagen durch den Denkmalschutz**\n✅ Einschränkungen bei Umbau und Modernisierung beeinflussen den Wert\n✅ Mögliche **steuerliche Vorteile** (Denkmal-AfA) werden berücksichtigt\n✅ Besondere Bausubstanz (Fachwerk, historische Materialien)\n\nHerr Lasarz hat Erfahrung mit der Bewertung historischer und denkmalgeschützter Objekte. Möchten Sie eine Bewertung?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // WOHNRECHT / NIESSBRAUCH
    // ──────────────────────────────────────────────────
    {
        keywords: ['wohnrecht', 'nießbrauch', 'niessbrauch', 'leibrente', 'wohnungsrecht'],
        response: 'Bei der Bewertung von Immobilien mit **Wohnrecht** oder **Nießbrauch** müssen besondere Faktoren berücksichtigt werden:\n\n📋 Das Wohnrecht/Nießbrauch mindert den **Verkehrswert** erheblich\n📋 Die Berechnung hängt vom **Alter** des Berechtigten und der **Restlaufzeit** ab\n📋 Dies ist besonders relevant bei **Erbschaft und Schenkung**\n\nDiese Bewertung ist komplex und sollte unbedingt von einem Sachverständigen durchgeführt werden. Möchten Sie eine individuelle Beratung?',
        showLeadForm: true
    },

    // ──────────────────────────────────────────────────
    // EXPRESS / EILIG / DRINGEND
    // ──────────────────────────────────────────────────
    {
        keywords: ['eilig', 'dringend', 'schnell', 'express', 'sofort', 'zeitdruck', 'beeilen'],
        response: 'Wir verstehen, dass es manchmal schnell gehen muss! ⚡\n\n✅ **Express-Gutachten**: Bei dringenden Fällen können wir die Bearbeitung beschleunigen\n✅ **Vor-Ort-Termine** sind oft innerhalb weniger Tage möglich\n✅ Express-Bearbeitungszeit: ca. **1 Woche** statt der regulären 2–3 Wochen\n\nBitte teilen Sie uns Ihre Dringlichkeit mit und wir planen den schnellstmöglichen Termin. Möchten Sie einen Express-Termin anfragen?',
        showLeadForm: true,
        priority: 5
    },

    // ──────────────────────────────────────────────────
    // WHAT DO YOU OFFER / LEISTUNGEN
    // ──────────────────────────────────────────────────
    {
        keywords: ['leistung', 'angebot', 'service', 'was bieten', 'was machen', 'dienstleistung', 'portfolio'],
        response: 'Bei Lasarz Immobiliengutachter bieten wir ein umfassendes Leistungsspektrum:\n\n🏠 **Verkehrswertgutachten** – für Finanzamt, Gericht und Behörden (ab 1.500 €)\n📋 **Kurzgutachten** – kompakte Wertermittlung für private Zwecke (ab 990 €)\n🔍 **Kaufberatung** – bautechnische Prüfung vor dem Kauf (ab 490 €)\n🏦 **Beleihungswertgutachten** – für Ihre Bankfinanzierung\n⚖️ **Scheidungsgutachten** – neutral und gerichtsfest\n📉 **Erbschaftsteuergutachten** – Steuern sparen nach § 198 BewG\n📋 **Erbbaurecht-Bewertung** – komplexe Sonderfälle\n\nAlle Gutachten zum **Festpreis** und mit persönlicher Betreuung. Welches Thema interessiert Sie?',
    },

    // ──────────────────────────────────────────────────
    // LEAD TRIGGERS (high priority)
    // ──────────────────────────────────────────────────
    {
        keywords: ['rückruf', 'kontakt', 'termin', 'erstberatung', 'beratungsgespräch', 'gespräch', 'sprechen', 'beraten'],
        response: 'Sehr gerne vereinbaren wir eine **kostenlose Erstberatung** oder einen Rückruf mit Herrn Lasarz! 📞\n\nBitte füllen Sie das kurze Formular unten aus:\n\n✅ Wir melden uns **innerhalb eines Werktages** bei Ihnen\n✅ Das Erstgespräch ist **kostenlos und unverbindlich**\n✅ Herr Lasarz nimmt sich persönlich Zeit für Ihre Fragen',
        showLeadForm: true,
        priority: 8
    },
    {
        keywords: ['ja', 'gerne', 'bitte', 'klar', 'natürlich', 'auf jeden fall', 'machen wir', 'einverstanden', 'okay', 'ok'],
        response: 'Wunderbar! Dann lassen Sie uns das gleich in die Wege leiten. 😊 Bitte tragen Sie Ihre Kontaktdaten in das folgende Formular ein – Herr Lasarz meldet sich dann **persönlich** bei Ihnen für eine kostenlose und unverbindliche Erstberatung.',
        showLeadForm: true,
        priority: 6
    },
    {
        keywords: ['nein', 'kein interesse', 'nicht jetzt', 'später', 'vielleicht'],
        response: 'Kein Problem! Falls Sie später Fragen haben oder sich doch für eine Beratung interessieren, sind wir jederzeit für Sie da. 😊\n\n📞 Telefon: +49 (0) 541 - 600 99 220\n✉️ E-Mail: info@lasarz.com\n\nWir freuen uns, von Ihnen zu hören!',
        priority: 6
    },
];

// =====================================================
// MATCHING LOGIC
// =====================================================

function findBestResponse(userMessage: string, messageCount: number): { text: string; showLeadForm: boolean } {
    const lower = userMessage.toLowerCase();
    
    // Sort rules by priority (highest first)
    const sortedRules = [...knowledgeBase].sort((a, b) => (b.priority || 0) - (a.priority || 0));

    // Score-based matching: count how many keywords match
    let bestMatch: KnowledgeRule | null = null;
    let bestScore = 0;

    for (const rule of sortedRules) {
        let matchCount = 0;
        let hasMatch = false;

        for (const keyword of rule.keywords) {
            if (lower.includes(keyword)) {
                matchCount++;
                hasMatch = true;
            }
        }

        if (!hasMatch) continue;

        // Calculate a weighted score: matches + priority bonus
        const score = matchCount * 10 + (rule.priority || 0);

        if (score > bestScore) {
            bestScore = score;
            bestMatch = rule;
        }
    }

    if (bestMatch) {
        return {
            text: bestMatch.response,
            showLeadForm: bestMatch.showLeadForm || false
        };
    }

    // ──────────────────────────────────────────────────
    // GENERIC FALLBACK – still helpful!
    // ──────────────────────────────────────────────────
    const fallbacks = [
        'Das ist eine sehr gute Frage! Um Ihnen eine präzise Antwort geben zu können, würde Herr Lasarz dies am besten in einem kurzen **kostenlosen Telefonat** mit Ihnen besprechen. Möchten Sie Ihre Kontaktdaten für einen Rückruf hinterlassen?',
        'Vielen Dank für Ihre Nachricht! Für eine individuelle Beratung zu Ihrem Anliegen empfehle ich ein **kostenloses Erstgespräch** mit Herrn Lasarz. Er nimmt sich persönlich Zeit für Sie. Soll ich einen Rückruf vereinbaren?',
        'Jede Immobiliensituation ist einzigartig. Damit ich Ihnen bestmöglich helfen kann, wäre ein **persönliches Gespräch** mit Herrn Lasarz ideal – natürlich kostenlos und unverbindlich. Möchten Sie Ihre Daten hinterlassen?',
    ];

    return {
        text: fallbacks[messageCount % fallbacks.length],
        showLeadForm: messageCount > 2
    };
}

// =====================================================
// MAIN API HANDLER
// =====================================================

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ text: 'Ungültige Anfrage.' }, { status: 400 });
        }

        const lastMessage = messages[messages.length - 1]?.text || '';
        const lowerMessage = lastMessage.toLowerCase();

        // Check if Gemini API key is configured
        const apiKey = process.env.GEMINI_API_KEY;

        // Determine if we should trigger the lead form based on direct keywords
        const shouldShowLeadForm = 
            lowerMessage.includes('rückruf') || 
            lowerMessage.includes('kontakt') || 
            lowerMessage.includes('telefon') || 
            lowerMessage.includes('termin') || 
            lowerMessage.includes('anrufen') || 
            lowerMessage.includes('sprechen') || 
            lowerMessage.includes('beratung') ||
            (lowerMessage.includes('ja') && messages.length > 2);

        // ── TRY GEMINI API FIRST (if key exists) ──
        if (apiKey) {
            const contents = messages.map((m: any) => ({
                role: m.sender === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: contents,
                        systemInstruction: {
                            parts: [{ text: SYSTEM_PROMPT }]
                        },
                        generationConfig: {
                            maxOutputTokens: 200,
                            temperature: 0.7
                        }
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
                    return NextResponse.json({
                        text: text.trim(),
                        showLeadForm: shouldShowLeadForm
                    });
                }
            } catch (err) {
                console.error('Gemini API Error, falling back to local system:', err);
            }
        }

        // ── LOCAL EXPERT SYSTEM (expanded knowledge base) ──
        const result = findBestResponse(lastMessage, messages.length);

        return NextResponse.json({
            text: result.text,
            showLeadForm: result.showLeadForm || shouldShowLeadForm
        });

    } catch (error) {
        console.error('Chat API Handler Error:', error);
        return NextResponse.json({ 
            text: 'Entschuldigung, beim Verarbeiten Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt unter +49 (0) 541 - 600 99 220.' 
        }, { status: 500 });
    }
}
