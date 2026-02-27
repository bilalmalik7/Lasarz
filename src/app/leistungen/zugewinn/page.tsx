import React from 'react';
import Link from 'next/link';

export default function ZugewinnPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Zugewinn & Eheauseinandersetzung</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg sm-grid-cols-1 items-center">
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Wertermittlung bei Ehescheidung</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Bei einer Scheidung muss oft der Zugewinn ermittelt werden, der während der Ehezeit entstanden ist. Hierzu ist der Wert der Immobilie zum Anfangsvermögen (Hochzeitstag) und zum Endvermögen (Zustellung des Scheidungsantrags) zu bestimmen.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Unsere Gutachten bieten eine unparteiische Grundlage für Anwälte und Gerichte, um langwierige Rechtsstreitigkeiten zu verkürzen und eine faire Basis für den Vermögensausgleich zu schaffen.
                            </p>
                        </div>
                        <div className="glass-card" style={{ padding: '0' }}>
                            <img src="/images/original_clone/immobiliengutachter-osnabrueck.png" alt="Zugewinn" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '5px solid var(--accent-primary)', marginBottom: '4rem' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Die Stichtagsbewertung</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                            Bei der Ehescheidung ist nicht nur der aktuelle Wert entscheidend. Oft müssen wir den Wert der Immobilie zum Zeitpunkt der Eheschließung (Anfangsvermögen) ermitteln, der Jahrzehnte zurückliegen kann. Wir verfügen über historische Marktdaten, um diese Bewertungen präzise und nachvollziehbar durchzuführen.
                        </p>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <div className="glass-card" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Warum ein neutrales Gutachten?</h3>
                            <p style={{ marginBottom: '1rem' }}>Im Familienrecht werden Immobilienwerte oft kontrovers diskutiert. Ein gemeinsamer Auftrag beider Ehepartner an einen unabhängigen Sachverständigen („Schiedsgutachten“) spart Zeit, Nerven und hohe Prozesskosten.</p>
                            <ul style={{ paddingLeft: '1.5rem' }}>
                                <li>Ermittlung des Verkehrswerts zu historischen Stichtagen.</li>
                                <li>Berücksichtigung von Wertsteigerungen durch Modernisierung oder Marktentwicklung.</li>
                                <li>Berücksichtigung von Belastungen im Grundbuch.</li>
                                <li>Professionelle Präsentation für Anwälte und Familiengerichte.</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                        <h3>Benötigen Sie eine Wertermittlung für eine Eheauseinandersetzung?</h3>
                        <p style={{ margin: '1.5rem 0 2rem' }}>Wir beraten Sie diskret und professionell zu den notwendigen Stichtagsbewertungen.</p>
                        <Link href="/kontakt" className="btn btn-primary">Kontakt zu Herrn Lasarz</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
