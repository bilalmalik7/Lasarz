import React from 'react';
import Link from 'next/link';

export default function BetreuungPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Betreuung & Vormundschaft</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg sm-grid-cols-1 items-center">
                        <div className="glass-card" style={{ padding: '0' }}>
                            <img src="/images/original_clone/MG_1880-1024x690.jpg" alt="Betreuung" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Bürokratische Hürden meistern</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Wenn Sie als rechtlicher Betreuer die Immobilienwerte eines Mündels verwalten, stehen Sie oft vor komplexen Anforderungen des Betreuungsgerichts. Jede Verfügung über eine Immobilie bedarf der gerichtlichen Genehmigung.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Wir unterstützen Sie mit fachkundigen Gutachten, die speziell auf die Anforderungen der Gerichte zugeschnitten sind. Wir dokumentieren den aktuellen Wert und stellen sicher, dass das Vermögen des Mündels geschützt ist.
                            </p>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-secondary)', marginBottom: '4rem', borderLeft: '5px solid var(--accent-primary)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Schutz des Mündelvermögens</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                            Das Betreuungsgericht muss sicherstellen, dass Immobilien nicht unter Wert verkauft werden. Unser Gutachten dient dem Gericht als objektiver Nachweis, dass der geplante Verkaufspreis marktgerecht ist. Dies schützt Sie als Betreuer vor Haftungsrisiken und das Mündel vor Vermögensverlusten.
                        </p>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <div className="glass-card" style={{ borderLeft: '5px solid var(--accent-primary)', padding: '3rem' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Unsere Kompetenz für Betreuer</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Erstellung von Gutachten bei geplantem Verkauf der Mündelimmobilie.',
                                    'Kurzbewertungen für die jährliche Vermögensübersicht.',
                                    'Wertermittlung bei Erbschaftsangelegenheiten innerhalb der Betreuung.',
                                    'Dokumentation von Instandhaltungsrückstaus oder Mängeln.',
                                    'Gerichtsfeste Dokumente für die Genehmigungsverfahren.'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                        <h3>Haben Sie Fragen zum Ablauf beim Betreuungsgericht?</h3>
                        <p style={{ margin: '1.5rem 0 2rem' }}>Wir verfügen über langjährige Erfahrung in der Zusammenarbeit mit Gerichten und Betreuern.</p>
                        <Link href="/kontakt" className="btn btn-primary">Jetzt beraten lassen</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
