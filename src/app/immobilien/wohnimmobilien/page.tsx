import Link from 'next/link';

export const metadata = {
    title: 'Wohnimmobilien | Lasarz Immobilienbewertung',
    description: 'Bewertung und Vermarktung von Wohnimmobilien in Osnabrück. Häuser, Wohnungen und Villen.',
};

export default function WohnimmobilienPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span className="text-accent" style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Immobilien-Portfolio</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>Wohnimmobilien</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Professionelle Vermarktung und Bewertung von Ein- und Mehrfamilienhäusern sowie Eigentumswohnungen.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 sm-grid-cols-1 gap-lg">
                        <div style={{ height: '400px', backgroundImage: 'url(/images/original_clone/property_background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-md)' }}></div>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Ihr Zuhause in besten Händen</h2>
                            <p style={{ marginBottom: '1.2rem' }}>
                                Wohnimmobilien sind mehr als nur Sachwerte – sie sind Lebensräume. Ob Sie eine exklusive Stadtvilla, ein gemütliches Reihenhaus oder eine moderne Loft-Wohnung bewerten oder verkaufen möchten: Wir bringen die nötige Sensibilität und Marktexperte mit.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
                                <div className="glass-card">
                                    <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>🏠</span>
                                    <strong>Häuser</strong>
                                    <p style={{ fontSize: '0.85rem' }}>EFH, DHH, Reiheneigenheime</p>
                                </div>
                                <div className="glass-card">
                                    <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>🏢</span>
                                    <strong>Wohnungen</strong>
                                    <p style={{ fontSize: '0.85rem' }}>ETW, Penthouses, Apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Unser Service für Verkäufer</h2>
                    <div className="grid grid-cols-3 sm-grid-cols-1 gap-md">
                        <div className="text-center">
                            <div style={{ width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>1</div>
                            <h3>Wertermittlung</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Exakte Ermittlung des Marktwertes als Basis für den Erfolg.</p>
                        </div>
                        <div className="text-center">
                            <div style={{ width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>2</div>
                            <h3>Präsentation</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Hochwertige Exposés und professionelle Fotografie.</p>
                        </div>
                        <div className="text-center">
                            <div style={{ width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>3</div>
                            <h3>Abschluss</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Bonitätsprüfung und sichere Begleitung zum Notartermin.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
