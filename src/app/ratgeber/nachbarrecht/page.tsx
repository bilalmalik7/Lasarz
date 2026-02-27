import React from 'react';
import Link from 'next/link';

export default function NachbarrechtPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Ratgeber</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Nachbarrecht in Niedersachsen</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            Das Niedersächsische Nachbarrechtsgesetz (NNachbG) regelt die rechtlichen Beziehungen zwischen Grundstücksnachbarn. Viele Konflikte entstehen aus Unkenntnis über die geltenden Regeln zu Grenzabständen, Einfriedungen oder Grenzbepflanzungen.
                        </p>

                        <h2 style={{ color: 'var(--accent-secondary)', marginTop: '3rem', marginBottom: '1.5rem' }}>Wichtige Regelungen (NBauO 2025)</h2>
                        <p style={{ marginBottom: '2rem' }}>Die baulichen Abstände werden in der <strong>Niedersächsischen Bauordnung (NBauO)</strong> geregelt. Hier ein Überblick über die wichtigsten Punkte:</p>

                        <h3 style={{ fontSize: '1.4rem' }}>Grenzabstände (Abstandsflächen)</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Grundsätzlich gilt: Gebäude müssen einen Mindestabstand zur Grundstücksgrenze einhalten, um Brandschutz und Belichtung zu gewährleisten.
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li>Regelabstand: 0,4 x H (Gebäudehöhe), mindestens jedoch <strong>3 Meter</strong>.</li>
                            <li>Vorbauten (Balkone/Dachüberstände): Dürfen bis zu <strong>1,50 m</strong> in den Abstand hineinragen, wenn sie untergeordnet sind.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.4rem' }}>Grenzbebauung (Garagen & Nebenanlagen)</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Garagen, Carports und kleine Abstellräume dürfen unter bestimmten Voraussetzungen direkt auf die Grenze gebaut werden. Die Gesamtlänge an einer Grenze darf dabei meist <strong>9 Meter</strong> nicht überschreiten.
                        </p>

                        <h3 style={{ fontSize: '1.4rem' }}>Einfriedung und Bepflanzung</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Wenn es um Zäune oder Hecken geht, ist das NNachbG (Niedersächsisches Nachbarrechtsgesetz) entscheidend:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li>Hecken bis 2 m Höhe: 0,50 m Abstand.</li>
                            <li>Hecken über 2 m Höhe: 0,75 m plus die über 2 m hinausgehende Höhe.</li>
                        </ul>

                        <div className="glass-card" style={{ margin: '3rem 0', padding: '2rem', background: '#fff9e6', borderColor: '#ffeeba' }}>
                            <h4 style={{ marginBottom: '1rem', color: '#856404' }}>Wertermittlungs-Hinweis</h4>
                            <p style={{ fontSize: '1rem', color: '#856404' }}>
                                Verstöße gegen Abstandsflächen oder fehlende Baulasten können den Wiederverkaufswert einer Immobilie erheblich mindern und zu Rückbauanordnungen führen. Eine professionelle Prüfung ist vor jedem Immobilienkauf ratsam.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <Link href="/kontakt" className="btn btn-secondary">Kontakt für Wertermittlung</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
