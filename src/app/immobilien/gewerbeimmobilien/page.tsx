import Link from 'next/link';

export const metadata = {
    title: 'Gewerbeimmobilien | Lasarz Immobilienbewertung',
    description: 'Professionelle Bewertung von Gewerbe- und Industrieimmobilien in Osnabrück. Büros, Hallen und Einzelhandel.',
};

export default function GewerbeimmobilienPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
            <section style={{ backgroundColor: 'var(--accent-secondary)', color: 'white', padding: '80px 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Investments & Gewerbe</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'white', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Gewerbeimmobilien</h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px' }}>
                        Ertragsstarke Analysen und marktgerechte Bewertungen für industrielle und gewerbliche Objekte.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-3 sm-grid-cols-1 gap-lg">
                        <div className="glass-card">
                            <h3 style={{ marginBottom: '1rem' }}>Büro- & Praxisflächen</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Bewertung von Bürogebäuden unter Berücksichtigung von Drittverwendungsfähigkeit und modernsten Flächenstandards.
                            </p>
                        </div>
                        <div className="glass-card">
                            <h3 style={{ marginBottom: '1rem' }}>Logistik & Industrie</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Spezielle Wertermittlung für Produktionshallen, Lagerflächen und Logistikzentren mit Fokus auf Standortqualität.
                            </p>
                        </div>
                        <div className="glass-card">
                            <h3 style={{ marginBottom: '1rem' }}>Einzelhandel</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Analyse von Geschäftshäusern und Einzelhandelsflächen unter Einbeziehung von Passantenströmen und Mietrenditen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-cols-2 sm-grid-cols-1 gap-xl items-center">
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Zertifizierte Expertise für komplexe Werte</h2>
                            <p style={{ marginBottom: '1.2rem' }}>
                                Bei Gewerbeimmobilien steht das Ertragswertverfahren im Vordergrund. Wir analysieren detailliert Mietverträge, Leerstandsrisiken und Instandhaltungsstau, um Ihnen eine belastbare Grundlage für Finanzierungen oder Transaktionen zu bieten.
                            </p>
                            <Link href="/kontakt" className="btn btn-primary">Beratungstermin vereinbaren</Link>
                        </div>
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src="/images/original_clone/MG_1880-1024x690.jpg" alt="Modernes Bürogebäude" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
