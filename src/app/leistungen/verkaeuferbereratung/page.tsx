import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function VerkaeuferbereratungPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Verkäuferberatung</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '700px' }}>Erzielen Sie den bestmöglichen Preis beim Verkauf Ihrer Immobilie – mit unabhängiger Wertermittlung durch zertifizierte Gutachter.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '3rem', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Starke Verhandlungsposition beim Immobilienverkauf</h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Kompetente Experten vor Ort, die den Markt präzise einschätzen können, erzielen höhere Verkaufspreise. Mit einem professionellen Gutachten kennen Sie den realistischen Marktwert Ihrer Immobilie und können selbstbewusst in Preisverhandlungen gehen.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Ein unabhängiges Sachverständigengutachten stärkt Ihre Position gegenüber Käufern, Banken und Gerichten erheblich.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    'Ermittlung des marktgerechten Verkaufspreises',
                                    'Objektive Grundlage für Preisverhandlungen',
                                    'Dokumentation des Zustands zum Verkaufszeitpunkt',
                                    'Beratung zu wertsteigernden Maßnahmen',
                                    'Unterstützung bei der Unterlagenbeschaffung',
                                    'Begleitung bis zum Notartermin',
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', padding: '2.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Beratung anfragen</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>Erfahren Sie den aktuellen Marktwert Ihrer Immobilie – kostenlos und unverbindlich.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Link href="/kontakt#kontaktformular" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>Kostenlose Erstberatung</Link>
                                <a href="tel:+4954160099220" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} strokeWidth={1.8} /> +49 (0) 541 - 600 99 220</a>
                            </div>
                            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}><MapPin size={14} strokeWidth={1.8} style={{ flexShrink: 0, color: 'var(--accent-primary)' }} /> Katharinenstraße 111, 49078 Osnabrück</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}><Mail size={14} strokeWidth={1.8} style={{ flexShrink: 0, color: 'var(--accent-primary)' }} /> osnabrueck@lasarz.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', backgroundColor: 'var(--accent-secondary)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Immobilie verkaufen in Osnabrück?</h2>
                    <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem' }}>Wir ermitteln Ihren Marktwert – fair, transparent und zertifiziert.</p>
                    <Link href="/kontakt#kontaktformular" className="btn" style={{ backgroundColor: 'var(--accent-primary)', color: '#fff', padding: '1rem 2.5rem' }}>Jetzt Kontakt aufnehmen</Link>
                </div>
            </section>
        </main>
    );
}
