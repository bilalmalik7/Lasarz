import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Phone } from 'lucide-react';

export const metadata = {
    title: 'Kurzgutachten | Immobilienbewertung Lasarz',
    description: 'Kostengünstige Kurzgutachten für Immobilien in Osnabrück. Ideal für außergerichtliche Wertermittlungen.',
};

export default function KurzgutachtenPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span className="text-accent" style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Bewertungsleistungen</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>Kurzgutachten</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Die effiziente Lösung für eine fundierte Preisfindung ohne den Umfang eines Vollgutachtens.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 sm-grid-cols-1 gap-lg items-center">
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Wann ist ein Kurzgutachten sinnvoll?</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Ein Kurzgutachten bietet eine kompakte Wertermittlung Ihrer Immobilie. Es ist besonders geeignet für interne Zwecke, private Verkaufsentscheidungen oder zur Vorlage bei Versicherungen, wenn kein behördlicher oder gerichtlicher Nachweis erforderlich ist.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <span className="text-accent">✓</span> Private Kauf- oder Verkaufsabsichten
                                </li>
                                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <span className="text-accent">✓</span> Vermögensübersichten
                                </li>
                                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <span className="text-accent">✓</span> Interne Familienangelegenheiten
                                </li>
                                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <span className="text-accent">✓</span> Beleihungsprüfung (vorgelagert)
                                </li>
                            </ul>
                        </div>
                        <div className="glass-card">
                            <h3 style={{ marginBottom: '1rem' }}>Vorteile auf einen Blick</h3>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                                    <strong>Kosteneffizient</strong>
                                    <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Günstiger als ein umfassendes Verkehrswertgutachten nach § 194 BauGB.</p>
                                </div>
                                <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                                    <strong>Schnell verfügbar</strong>
                                    <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Kürzere Bearbeitungszeit durch Konzentration auf die wesentlichen Wertfaktoren.</p>
                                </div>
                                <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                                    <strong>Präzise Wertermittlung</strong>
                                    <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Trotz des geringeren Umfangs basieren unsere Zahlen auf aktuellen Marktdaten.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0' }}>
                <div className="container text-center">
                    <h2 style={{ marginBottom: '1.5rem' }}>Benötigen Sie eine Beratung?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Gerne klären wir in einem kostenlosen Erstgespräch, ob ein Kurzgutachten für Ihr Anliegen ausreichend ist oder ein Vollgutachten benötigt wird.
                    </p>
                    <div className="flex justify-center gap-md">
                        <Link href="/kontakt#kontaktformular" className="btn btn-primary">Jetzt anfragen</Link>
                        <Link href="tel:+4954160099220" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} strokeWidth={1.8} /> 0541 / 600 99 220</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
