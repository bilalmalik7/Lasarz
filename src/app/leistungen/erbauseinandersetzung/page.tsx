import React from 'react';
import Link from 'next/link';

export default function ErbauseinandersetzungPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Erbauseinandersetzung & Schenkung</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg sm-grid-cols-1 items-center">
                        <div className="glass-card" style={{ padding: '0' }}>
                            <img src="/images/original_clone/MG_1880-1024x690.jpg" alt="Erbauseinandersetzung" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Friedliche Einigung durch objektive Zahlen</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Eine Erbschaft ist oft emotional belastend. Wenn Immobilien Teil des Nachlasses sind, stellt sich die Frage nach dem gerechten Wert. Ob zur internen Aufteilung unter den Erben oder zur Vorlage beim Finanzamt – ein neutrales Gutachten ist unverzichtbar.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Wir bieten Ihnen eine unabhängige Wertermittlung, die als belastbare Grundlage für Schenkungsverträge, Erbauszahlungen oder die Nachweis des niedrigeren gemeinen Werts dient.
                            </p>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-secondary)', marginBottom: '4rem', borderLeft: '5px solid var(--accent-primary)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Nachweis des niedrigeren gemeinen Werts</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                            Das Finanzamt berechnet die Erbschaftsteuer oft nach einem standardisierten Massenverfahren. Dies führt häufig zu überhöhten Werten. Laut Erbschaftsteuergesetz (§ 198 ErbStG) haben Sie jedoch das Recht, durch ein Gutachten eines qualifizierten Sachverständigen einen <strong>niedrigeren gemeinen Wert</strong> nachzuweisen. Dies kann die Steuerlast oft um fünfstellige Beträge senken.
                        </p>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Pflichtteilsberechnung</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Bestimmung des Immobilienwertes zur korrekten Ermittlung von Pflichtteilsansprüchen.</p>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Erbschaftsteuer</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Nachweis eines niedrigeren Marktwerts gegenüber der oft überhöhten pauschalen Bewertung des Finanzamts.</p>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Vorweggenommene Erbfolge</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Bewertung im Rahmen von Schenkungen zur optimalen Nutzung steuerlicher Freibeträge.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--accent-secondary)', borderRadius: 'var(--radius-lg)', color: '#ffffff', textAlign: 'center' }}>
                        <h2 style={{ color: '#ffffff' }}>Gerechtigkeit durch Transparenz</h2>
                        <p style={{ margin: '1.5rem 0 2rem', opacity: 0.9 }}>Wir helfen Erbengemeinschaften, Konflikte durch unparteiische Wertermittlung zu vermeiden.</p>
                        <Link href="/kontakt" className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: 'var(--accent-secondary)' }}>Unverbindlich anfragen</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
