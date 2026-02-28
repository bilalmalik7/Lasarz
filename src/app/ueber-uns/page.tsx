
export const metadata = {
    title: 'Über uns | Immobilienbewertung Lasarz',
    description: 'Erfahren Sie mehr über Marc-André Lasarz und unser Team von zertifizierten Gutachtern.',
};

export default function UeberUnsPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)' }}>

            {/* Banner Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Über uns</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Wir sind Ihr regional verwurzeltes und zertifiziertes Sachverständigenbüro für Immobilienbewertungen.
                        Hier erfahren Sie mehr über unsere Expertise und Werte.
                    </p>
                </div>
            </section>

            {/* Profile Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'flex-start' }}>

                        <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                            <img src="/images/portrait.jpg" alt="Marc-André Lasarz" style={{ width: '100%', display: 'block' }} />
                        </div>

                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Meine Vita</h2>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 400 }}>Marc-André Lasarz</h3>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                Als umsetzungsstarker Immobilienvertreter und Geschäftsführer mit über 19 Jahren Fach- und Führungserfahrung in den Bereichen Vertrieb und Marketing in der Immobilienbranche verfüge ich über ausgeprägte Kompetenzen für die durchdachte Planung und Umsetzung von Projekten.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                Meine Spezialisierung liegt in der Erstellung gerichtsfester Verkehrswertgutachten und transparenter Wertindikationen für private und gewerbliche Kunden.
                            </p>

                            <div className="glass-card" style={{ marginBottom: '2.5rem', backgroundColor: 'rgba(26, 117, 141, 0.03)' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Fundierte Expertise</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>Projektmanagement | Entwicklung & Umsetzung von Vertriebs- & Marketingstrategien | Marktanalyse | Immobilienbewertung</p>
                            </div>

                            <div className="glass-card" style={{ marginBottom: '2.5rem', backgroundColor: 'rgba(26, 117, 141, 0.03)' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Bisherige Stationen</h4>
                                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li><strong>Lasarz & Partner - 08/2015 bis heute</strong><br />Geschäftsführer. Dipl.-Sachverständiger (DIA), zertifizierter Immobiliengutachter DIA Zert (LF).</li>
                                    <li><strong>Malos Immobilien - 10/2019 bis heute</strong><br />Immobilienverwalter: Kundenberatung, Bewertung, Vermittlung und Verwaltung.</li>
                                </ul>
                            </div>

                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)', marginTop: '3rem' }}>Ausbildung & Zertifizierung</h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', lineHeight: 1 }}>✓</span>
                                    <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>Dipl.-Sachverständiger (DIA) für die Bewertung von bebauten und unbebauten Grundstücken, für Mieten und Pachten</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', lineHeight: 1 }}>✓</span>
                                    <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>Zertifizierter Immobiliengutachter DIAZert (LF) gem. DIN EN ISO/IEC 17024</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', lineHeight: 1 }}>✓</span>
                                    <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>Recognised European Valuer (REV)</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
