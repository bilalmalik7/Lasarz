import Link from 'next/link';

export const metadata = {
    title: 'Grundstücke & Rechte | Lasarz Immobilienbewertung',
    description: 'Wertermittlung von unbebauten Grundstücken sowie Bewertung von Rechten und Belastungen wie Erbbaurecht oder Nießbrauch.',
};

export default function GrundstueckeRechtePage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span className="text-accent" style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Bodenwert & Recht</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>Grundstücke & Rechte</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Fundierte Wertermittlung für Bauland, Agrarflächen sowie Rechte und Belastungen an Grundstücken.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.2rem' }}>Bewertung von Grundstücken</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Der Bodenwert ist das Fundament jeder Immobilienbewertung. Wir ermitteln den Wert von unbebauten Grundstücken unter Berücksichtigung der baurechtlichen Situation (GFZ, GRZ), der Erschließung und der Bodenrichtwerte.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.5rem' }}>• Baureifes Land & Bauerwartungsland</li>
                                <li style={{ marginBottom: '0.5rem' }}>• Land- und forstwirtschaftliche Flächen</li>
                                <li style={{ marginBottom: '0.5rem' }}>• Wertermittlung bei Grenzbereinigungen</li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '1.2rem' }}>Rechte und Belastungen</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Rechte an Grundstücken können den Wert massiv beeinflussen. Wir bewerten rechtssicher:
                            </p>
                            <div className="glass-card" style={{ background: 'var(--bg-secondary)' }}>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.75rem' }}><strong>Erbbaurechte:</strong> Bewertung des Heimfalls und der Erbbauzinsen.</li>
                                    <li style={{ marginBottom: '0.75rem' }}><strong>Nießbrauch:</strong> Ermittlung des Kapitalwertes für Schenkungen oder Steuern.</li>
                                    <li style={{ marginBottom: '0.75rem' }}><strong>Wohnungsrechte:</strong> Lebenslange Wohnrechte nach Leibrenten-Modellen.</li>
                                    <li style={{ marginBottom: '0.75rem' }}><strong>Baulasten:</strong> Auswirkung von Wegerechten oder Stellplatzverpflichtungen.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0', background: 'var(--accent-secondary)', color: 'white' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Rechtssicherheit ist unsere Kernkompetenz</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.9 }}>
                        Die Bewertung von Rechten erfordert höchste mathematische Präzision und tiefes Verständnis der rechtlichen Grundlagen. Vertrauen Sie auf zertifizierte Expertise.
                    </p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--accent-primary)', border: 'none' }}>Jetzt Termin anfragen</Link>
                </div>
            </section>
        </main>
    );
}
