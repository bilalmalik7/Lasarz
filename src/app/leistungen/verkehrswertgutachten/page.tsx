import React from 'react';
import Link from 'next/link';

export default function VerkehrswertgutachtenPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Verkehrswertgutachten nach BauGB §194</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg sm-grid-cols-1 items-center">
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Gerichtsfeste Wertermittlung Ihrer Immobilie</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Ein Verkehrswertgutachten ist die umfassendste Form der Wertermittlung. Es dokumentiert den Marktwert einer Immobilie zu einem festgelegten Wertermittlungsstichtag unter Berücksichtigung aller rechtlichen und tatsächlichen Gegebenheiten.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Unsere Gutachten sind nach den Vorgaben des Baugesetzbuches (BauGB) sowie der Immobilienwertermittlungsverordnung (ImmoWertV) erstellt und halten einer Überprüfung durch Gerichte, Finanzämter und Banken stand.
                            </p>
                            <div className="glass-card" style={{ padding: '1.5rem', marginTop: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                                <h4 style={{ marginBottom: '1rem' }}>Rechtsgrundlage: § 194 BauGB</h4>
                                <p style={{ fontSize: '0.95rem' }}>"Der Verkehrswert (Marktwert) wird durch den Preis bestimmt, der in dem Zeitpunkt, auf den sich die Ermittlung bezieht, im gewöhnlichen Geschäftsverkehr nach den rechtlichen Gegebenheiten und tatsächlichen Eigenschaften [...] zu erzielen wäre."</p>
                            </div>
                        </div>
                        <div className="glass-card" style={{ padding: '0' }}>
                            <img src="/images/original_clone/HASELAND_11-1024x690.jpg" alt="Verkehrswertgutachten" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem' }}>
                        <h3 style={{ fontSize: '2.2rem', marginBottom: '3rem', textAlign: 'center' }}>Wählen Sie die passende Gutachtenform</h3>
                        <div className="grid grid-cols-2 gap-lg sm-grid-cols-1">
                            <div className="glass-card" style={{ padding: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Vollgutachten (Standard)</h4>
                                <p style={{ marginBottom: '1.5rem' }}>Der "Goldstandard" für alle offiziellen Anlässe.</p>
                                <ul style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '2' }}>
                                    <li>Gerichtsfest und bankenkonform</li>
                                    <li>Umfassende Recherche (Grundbuch, Altlasten, Erschließung)</li>
                                    <li>Detaillierte Beschreibung von Bausubstanz und Mängeln</li>
                                    <li>Besonders empfohlen bei Erbstreitigkeiten oder Scheidungen</li>
                                </ul>
                            </div>
                            <div className="glass-card" style={{ padding: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Kurzgutachten</h4>
                                <p style={{ marginBottom: '1.5rem' }}>Die kosteneffiziente Lösung für private Zwecke.</p>
                                <ul style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '2' }}>
                                    <li>Kompakte Version für den internen Gebrauch</li>
                                    <li>Fokus auf die reine Wertermittlung</li>
                                    <li>Ideal zur Preisfindung beim Hauskauf oder -verkauf</li>
                                    <li>Nicht geeignet für Gerichte oder Finanzämter</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Der Ablauf in 4 Schritten</h3>
                        <div className="grid grid-cols-4 gap-md sm-grid-cols-1">
                            {[
                                { step: '01', title: 'Erstkontakt', text: 'Kostenlose Erstberatung und Klärung des Gutachtenzwecks.' },
                                { step: '02', title: 'Ortstermin', text: 'Detaillierte Begehung der Immobilie und Fotodokumentation.' },
                                { step: '03', title: 'Recherche', text: 'Einholung von Grundbuchauszügen und Akteneinsicht beim Bauamt.' },
                                { step: '04', title: 'Ausarbeitung', text: 'Berechnung und Zustellung des fertigen Gutachtens.' }
                            ].map((item, i) => (
                                <div key={i} style={{ position: 'relative' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'rgba(0,0,0,0.05)', position: 'absolute', top: '-1rem', left: '0' }}>{item.step}</span>
                                    <h4 style={{ marginBottom: '1rem', position: 'relative' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem' }}>
                        <div className="grid grid-cols-3 gap-md sm-grid-cols-1">
                            {[
                                { title: 'Erbschaft & Schenkung', text: 'Zur Vorlage beim Finanzamt oder zur fairen Aufteilung.' },
                                { title: 'Scheidung', text: 'Objektive Basis für den Zugewinnausgleich.' },
                                { title: 'Kauf & Verkauf', text: 'Sicherheit bei Preisverhandlungen für beide Seiten.' },
                                { title: 'Betreuung', text: 'Nachweis der Wirtschaftlichkeit gegenüber dem Gericht.' },
                                { title: 'Finanzierung', text: 'Ermittlung des Beleihungswertes für Kreditinstitute.' },
                                { title: 'Vermögensübersicht', text: 'Klarheit über den Wert Ihres Immobilienportfolios.' }
                            ].map((item, i) => (
                                <div key={i} className="glass-card">
                                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', padding: '4rem', backgroundColor: 'var(--accent-secondary)', borderRadius: 'var(--radius-lg)', color: '#ffffff', textAlign: 'center' }}>
                        <h2 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>Benötigen Sie ein Verkehrswertgutachten?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>Wir beraten Sie gerne unverbindlich zu Ihrem individuellen Anliegen.</p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: 'var(--accent-secondary)' }}>Jetzt Kontakt aufnehmen</Link>
                            <a href="tel:08006648714" className="btn btn-secondary" style={{ borderColor: '#ffffff', color: '#ffffff' }}>0800 / 66 48 714</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
