import React from 'react';
import Link from 'next/link';

export default function AnkaufberatungPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Ankaufberatung (An- und Verkauf)</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg sm-grid-cols-1 items-center">
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Sicherheit bei Ihrer Immobilienentscheidung</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Der Kauf oder Verkauf einer Immobilie ist oft die größte finanzielle Entscheidung im Leben. Emotionen spielen eine große Rolle, doch die harten Fakten müssen stimmen. Unsere Ankaufberatung bietet Ihnen die notwendige Objektivität in Osnabrück, Münster, Bünde und Flensburg.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Wir prüfen für Sie, ob der geforderte Preis marktgerecht ist, identifizieren mögliche Instandhaltungsrisiken und unterstützen Sie dabei, teure Fehlentscheidungen zu vermeiden. Besonders wichtig ist dabei die Prüfung der Unterlagen, um keine versteckten Belastungen zu übernehmen.
                            </p>
                            <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-secondary)' }}>
                                <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Finanzierungssicherheit</h4>
                                <p style={{ fontSize: '0.95rem' }}>Eine professionelle Beratung gibt Ihnen auch gegenüber Banken Sicherheit. Wenn der Kaufpreis dem Marktwert entspricht, steht einer soliden Finanzierung nichts im Weg.</p>
                            </div>
                        </div>
                        <div className="glass-card" style={{ padding: '0' }}>
                            <img src="/images/original_clone/immobiliengutachter-osnabrueck.png" alt="Ankaufberatung" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Was wir für Sie prüfen</h3>
                        <div className="grid grid-cols-3 gap-md sm-grid-cols-1">
                            <div className="glass-card">
                                <h4 style={{ marginBottom: '1rem' }}>Bauakte & Baugenehmigungen</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Prüfung auf Schwarzbauten oder fehlende Abnahmen, die später zu Problemen mit dem Bauordnungsamt führen könnten.</p>
                            </div>
                            <div className="glass-card">
                                <h4 style={{ marginBottom: '1rem' }}>Grundbuch & Baulasten</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Check auf Wegerechte, Wohnrechte oder öffentliche Baulasten, die den Wert und die Nutzung einschränken.</p>
                            </div>
                            <div className="glass-card">
                                <h4 style={{ marginBottom: '1rem' }}>Bausubstanz</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Sichtprüfung auf Feuchtigkeit, Risse oder energetische Mängel zur Einschätzung anstehender Modernisierungskosten.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Für Käufer</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Wir begleiten Sie zur Besichtigung, prüfen die Bausubstanz und bewerten das Preis-Leistungs-Verhältnis. So kaufen Sie mit einem guten Gefühl.
                            </p>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Für Verkäufer</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Wir ermitteln einen realistischen Angebotspreis, der weder zu niedrig (Geldverlust) noch zu hoch (Ladenhüter-Gefahr) angesetzt ist.
                            </p>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Marktanalyse</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Wir nutzen aktuelle Marktdaten der Region Osnabrück, um die zukünftige Wertentwicklung und Wiederverkaufsfähigkeit einzuschätzen.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                        <h3>Planen Sie einen Immobilienkauf oder -verkauf?</h3>
                        <p style={{ margin: '1.5rem 0 2rem' }}>Eine professionelle Zweitmeinung schützt Ihr Kapital.</p>
                        <Link href="/kontakt" className="btn btn-primary">Beratungstermin vereinbaren</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
