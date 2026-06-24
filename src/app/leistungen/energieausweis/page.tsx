import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function EnergieausweisPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>Energieausweis</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '700px' }}>Gesetzlich vorgeschriebener Energieausweis für Kauf, Verkauf und Vermietung Ihrer Immobilie in Osnabrück.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '3rem', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Energieausweis – Pflicht beim Verkauf und Vermietung</h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Seit 2014 ist der Energieausweis beim Verkauf, der Vermietung oder dem Leasing von Immobilien gesetzlich vorgeschrieben (GEG). Ohne gültigen Energieausweis drohen Bußgelder bis zu 10.000 Euro.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Wir stellen Ihnen schnell und unkompliziert den passenden Energieausweis aus – Verbrauchsausweis oder Bedarfsausweis, je nach Anforderung.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                {[
                                    { title: 'Verbrauchsausweis', desc: 'Basiert auf dem tatsächlichen Energieverbrauch der letzten 3 Jahre.' },
                                    { title: 'Bedarfsausweis', desc: 'Berechnet den theoretischen Energiebedarf anhand baulicher Merkmale.' },
                                ].map((type, i) => (
                                    <div key={i} style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '10px', borderTop: '3px solid var(--accent-primary)' }}>
                                        <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem', fontSize: '1rem' }}>{type.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{type.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', padding: '2.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Energieausweis anfragen</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>Wir stellen Ihren Energieausweis schnell und gesetzeskonform aus.</p>
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
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Energieausweis schnell und günstig?</h2>
                    <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem' }}>Gesetzeskonform und zertifiziert.</p>
                    <Link href="/kontakt#kontaktformular" className="btn" style={{ backgroundColor: 'var(--accent-primary)', color: '#fff', padding: '1rem 2.5rem' }}>Jetzt Kontakt aufnehmen</Link>
                </div>
            </section>
        </main>
    );
}
