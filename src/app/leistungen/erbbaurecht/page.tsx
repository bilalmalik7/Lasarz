import React from 'react';
import Link from 'next/link';

export default function ErbbaurechtPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Erbbaurecht & Erbbauzins</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg sm-grid-cols-1 items-center">
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Wertermittlung bei komplexen Rechten</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Das Erbbaurecht ist das Recht, auf einem fremden Grundstück ein Bauwerk zu haben. Diese Trennung von Grund und Gebäude erfordert in der Wertermittlung spezielle Expertise und mathematische Modelle.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Wir bewerten sowohl den Wert des Erbbaurechts (für den Erbbauberechtigten) als auch den Wert des belasteten Grundstücks (für den Grundstückseigentümer). Zudem prüfen und berechnen wir die Angemessenheit von Erbbauzinsanpassungen.
                            </p>
                        </div>
                        <div className="glass-card" style={{ padding: '0' }}>
                            <img src="/images/original_clone/HASELAND_11-1024x690.jpg" alt="Erbbaurecht" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Zinsanpassung nach § 9a ErbbauRG</h3>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                            Ein häufiger Streitpunkt ist die Anpassung des Erbbauzinses. Diese darf nur verlangt werden, wenn sie billigem Ermessen entspricht. Wir prüfen für Sie, ob die geforderte Erhöhung im Einklang mit der allgemeinen Änderung der wirtschaftlichen Verhältnisse steht (Verbraucherpreisindex).
                        </p>
                    </div>

                    <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Unsere Leistungen im Erbbaurecht</h3>
                    <div className="grid grid-cols-2 gap-md sm-grid-cols-1">
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Verkehrswert des Erbbaurechts</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Bestimmung des Marktwertes beim Verkauf oder Beleihung eines Hauses auf einem Pachtgrundstück.</p>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Bodenwertanteil & Erbbauzins</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Berechnung des wirtschaftlichen Vorteils oder Nachteils aus dem vereinbarten Erbbauzins im Vergleich zum Markt.</p>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Heimfall & Entschädigung</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Ermittlung von Entschädigungszahlungen bei vorzeitigem Ende oder Ablauf des Erbbaurechtsvertrages.</p>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Zinsanpassungsprüfung</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Prüfung, ob eine geforderte Erhöhung des Erbbauzinses den rechtlichen Vereinbarungen und dem Gleihtheitsgrundsatz entspricht.</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                    <h3>Komplexe Fragen zum Erbbaurecht?</h3>
                    <p style={{ margin: '1.5rem 0 2rem' }}>Seit 19 Jahren bewerten wir Erbbaurechte in der Region Osnabrück und norddeutschlandweit.</p>
                    <Link href="/kontakt" className="btn btn-primary">Experten kontaktieren</Link>
                </div>
            </section>
        </main>
    );
}
