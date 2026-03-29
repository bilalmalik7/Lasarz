import React from 'react';
import Link from 'next/link';
import ImmoSearchClient from './ImmoSearchClient';

export const metadata = {
    title: 'Immobilien suchen & finden | Lasarz',
    description: 'Finden Sie Ihre Traumimmobilie in Osnabrück und Münster. Entdecken Sie exklusive Villen, Wohnungen und Off-Market Angebote.',
};

export default function ImmobilienPage() {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '100px' }}>
             {/* Hero Section */}
             <section style={{ 
                position: 'relative', 
                height: '50vh', 
                minHeight: '400px', 
                display: 'flex', 
                alignItems: 'center', 
                paddingTop: '80px',
                color: 'white',
                borderBottom: '1px solid var(--border-color)'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    {/* Placeholder hero, using one of the newly generated properties or a solid background */}
                    <img src="/images/original_clone/MG_1880-1024x690.jpg" alt="Exklusive Immobilien" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', backgroundColor: 'rgba(26, 117, 141, 0.2)', padding: '0.5rem 1rem', borderRadius: '50px' }}>
                            Immobilien-Portfolio
                        </span>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: '1.5rem 0', lineHeight: 1.1, color: 'white' }}>
                            Finden Sie Ihr neues Zuhause
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '650px', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
                            Entdecken Sie hochwertige Wohnungen, exklusive Villen und lukrative Anlageobjekte in der Region Osnabrück und Münster. 
                        </p>
                    </div>
                </div>
            </section>

            {/* Interactive Search Tool Component */}
            <ImmoSearchClient />

            {/* Off-Market Explanation Section */}
            <section style={{ backgroundColor: 'rgba(26, 117, 141, 0.05)', padding: '80px 0' }}>
                <div className="container">
                    <div className="glass-card" style={{ padding: '4rem 2rem', borderTop: '4px solid var(--accent-secondary)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Warum Off-Market?</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    Ca. 40% unserer Verkäufe finden statt, ohne dass die Immobilie jemals online gelistet wird. Viele Eigentümer wünschen sich einen absolut diskreten Verkauf ohne Besichtigungstourismus.
                                </p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                                    Legen Sie bei uns Ihr Suchprofil an. Wir gleichen Ihre Wünsche (Budget, PLZ, Wohnfläche) mit unseren neu eintreffenden Gutachten-Aufträgen ab, bevor diese den öffentlichen Markt erreichen.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✓</span> Absolute Diskretion für Käufer und Verkäufer</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✓</span> Keine Konkurrenz durch öffentliche Bieterverfahren</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✓</span> 100% kostenfrei für Suchkunden</li>
                                </ul>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Suchauftrag anlegen</Link>
                                    <Link href="/#bewertung" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>Kostenlose Bewertung</Link>
                                </div>
                            </div>
                            <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src="/images/properties/penthouse.png" alt="Diskretion beim Immobilienverkauf" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(26, 117, 141, 0.4)' }}></div>
                                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', backgroundColor: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '8px', color: 'var(--text-primary)' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>"Über 40% unserer Vermittlungen erfolgen diskret unter der Hand."</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>– Marc-André Lasarz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
