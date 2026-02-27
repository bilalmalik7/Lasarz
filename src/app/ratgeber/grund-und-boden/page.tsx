import React from 'react';
import Link from 'next/link';

export default function GrundBodenPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Ratgeber</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Grund und Boden berechnen (AfA-Aufteilung)</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            Für Kapitalanleger ist die Aufteilung des Kaufpreises in <strong>Grundstücksanteil</strong> und <strong>Gebäudeanteil</strong> von enormer steuerlicher Bedeutung. Während Grund und Boden nicht abnutzbar sind, kann das Gebäude über die Absetzung für Abnutzung (AfA) steuerlich geltend gemacht werden.
                        </p>

                        <h2 style={{ color: 'var(--accent-secondary)', marginTop: '3rem', marginBottom: '1.5rem' }}>Warum die Kaufpreisaufteilung wichtig ist</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Je höher der Gebäudeanteil im Verhältnis zum Grundstückswert ist, desto höher ist das jährliche Abschreibungsvolumen. Das Finanzamt prüft diese Aufteilung sehr genau und erkennt pauschale Angaben im Kaufvertrag oft nicht an, wenn sie deutlich von den Bodenrichtwerten abweichen.
                        </p>

                        <h3>Unsere Methode: Die 6 Schritte der Berechnung</h3>
                        <div style={{ marginTop: '2rem' }}>
                            {[
                                { title: '1. Bodenwert ermitteln', text: 'Multiplikation der Grundstücksfläche mit dem aktuellen Bodenrichtwert (BORIS-D).' },
                                { title: '2. Liegenschaftszins anwenden', text: 'Berücksichtigung des marktüblichen Zinssatzes für das jeweilige Objekt.' },
                                { title: '3. Gebäudewert ableiten', text: 'Ermittlung des Sachwertes oder Ertragswertes des Gebäudes.' },
                                { title: '4. Verhältnisbildung', text: 'Bestimmung des prozentualen Anteils von Gebäude zu Grund und Boden.' },
                                { title: '5. Kaufpreis-Split', text: 'Anwendung der Prozentsätze auf den tatsächlich gezahlten Gesamtkaufpreis.' },
                                { title: '6. Dokumentation', text: 'Erstellung eines schriftlichen Berichts zur plausiblen Vorlage beim Finanzamt.' }
                            ].map((step, i) => (
                                <div key={i} className="glass-card" style={{ marginBottom: '1rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>{i + 1}</div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem' }}>{step.title}</h4>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="glass-card" style={{ margin: '3rem 0', padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Das Problem mit der Arbeitshilfe des BFH</h4>
                            <p style={{ fontSize: '1rem' }}>
                                Die Finanzverwaltung nutzt oft eine standardisierte Excel-Arbeitshilfe. Diese führt jedoch häufig zu einem überhöhten Grundstücksanteil, da regionale Besonderheiten und der tatsächliche Zustand des Gebäudes nicht ausreichend berücksichtigt werden. Ein individuelles Gutachten kann hier oft signifikante Steuervorteile sichern.
                            </p>
                        </div>

                        <h3>Unsere Lösung: Plausible Gutachten</h3>
                        <p>
                            Wir erstellen für Sie eine detaillierte und plausible Kaufpreisaufteilung, die den tatsächlichen Wertverhältnissen entspricht. Dabei berücksichtigen wir:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li>Den aktuellen Bodenrichtwert unter Berücksichtigung von Größe und Erschließung.</li>
                            <li>Die tatsächlichen Herstellungskosten des Gebäudes abzüglich der Alterswertminderung.</li>
                            <li>Modernisierungsgrade und energetischen Zustand.</li>
                        </ul>
                    </div>

                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <Link href="/kontakt" className="btn btn-primary">Gutachten für das Finanzamt anfragen</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
