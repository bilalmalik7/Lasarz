import React from 'react';
import Link from 'next/link';

export default function NotarkostenPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Ratgeber</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Notarkosten beim Hauskauf / Wohnungskauf in Niedersachsen</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            Ein Immobilienkauf zieht verschiedene Nebenkosten nach sich. Neben der Grunderwerbsteuer und ggf. Maklergebühren sind die Notar- und Grundbuchkosten ein wesentlicher Faktor. In der Regel kalkuliert man hierfür etwa <strong>1,5 % bis 2,0 %</strong> des Kaufpreises ein.
                        </p>

                        <h2 style={{ color: 'var(--accent-secondary)', marginTop: '3rem', marginBottom: '1.5rem' }}>Was macht der Notar eigentlich?</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Der Notar fungiert als neutrale Instanz zwischen Käufer und Verkäufer. Seine Aufgaben umfassen:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li>Entwurf des Kaufvertrags nach den Wünschen beider Parteien.</li>
                            <li>Beurkundung des Kaufvertrags (der Termin im Notarbüro).</li>
                            <li>Einholung notwendiger Genehmigungen.</li>
                            <li>Beantragung der Auflassungsvormerkung im Grundbuch (Reservierung).</li>
                            <li>Überwachung der Kaufpreiszahlung.</li>
                            <li>Endgültige Umschreibung des Eigentums.</li>
                        </ul>

                        <div className="glass-card" style={{ margin: '3rem 0', padding: '2.5rem', backgroundColor: 'var(--bg-secondary)' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Beispielrechnung (Kaufpreis 300.000 €)</h3>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                                            <th style={{ textAlign: 'left', padding: '1rem' }}>Position</th>
                                            <th style={{ textAlign: 'right', padding: '1rem' }}>Geschätzte Kosten</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                            <td style={{ padding: '1rem' }}>Beurkundung des Kaufvertrags</td>
                                            <td style={{ textAlign: 'right', padding: '1rem' }}>ca. 1.300 €</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                            <td style={{ padding: '1rem' }}>Auflassungsvormerkung (Grundbuch)</td>
                                            <td style={{ textAlign: 'right', padding: '1rem' }}>ca. 300 €</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                            <td style={{ padding: '1rem' }}>Beurkundung der Grundschuld (Bank)</td>
                                            <td style={{ textAlign: 'right', padding: '1rem' }}>ca. 550 €</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                            <td style={{ padding: '1rem' }}>Eintragung der Grundschuld</td>
                                            <td style={{ textAlign: 'right', padding: '1rem' }}>ca. 550 €</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                            <td style={{ padding: '1rem' }}>Eigentumsumschreibung</td>
                                            <td style={{ textAlign: 'right', padding: '1rem' }}>ca. 650 €</td>
                                        </tr>
                                        <tr style={{ fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.02)' }}>
                                            <td style={{ padding: '1rem' }}>Gesamt (ca. 1,5% - 2,0%)</td>
                                            <td style={{ textAlign: 'right', padding: '1rem' }}>ca. 4.500 € - 6.000 €</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1.5rem', fontStyle: 'italic' }}>*Alle Angaben sind Richtwerte und können je nach Einzelfall (z.B. Vorkaufsrechtsverzicht, Treuhandauftrag) variieren.</p>
                        </div>

                        <div className="glass-card" style={{ margin: '3rem 0', backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Warum sind die Gebühren überall gleich?</h4>
                            <p style={{ fontSize: '1rem' }}>Die Gebühren des Notars sind gesetzlich im <strong>Gerichts- und Notarkostengesetz (GNotKG)</strong> geregelt. Das bedeutet: Jeder Notar in Niedersachsen und ganz Deutschland berechnet für die gleiche Leistung exakt die gleiche Gebühr. Ein Preisvergleich zwischen Notaren ist daher nicht möglich.</p>
                        </div>

                        <h3>Zusätzliche Kosten für Grundschulden</h3>
                        <p>
                            Wenn Sie den Kauf finanzieren, fallen zusätzliche Kosten für die Bestellung einer Grundschuld an. Diese dient der Bank als Sicherheit und muss ebenfalls notariell beurkundet werden.
                        </p>
                    </div>

                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <Link href="/blog" className="btn btn-secondary">Zurück zur Ratgeber-Übersicht</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
