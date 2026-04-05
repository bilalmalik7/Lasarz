import React from 'react';
import Link from 'next/link';
import DashboardClient from './DashboardClient';

export const metadata = {
    title: 'Immobilien Marktdaten Dashboard | Preise Osnabrück & Münster',
    description: 'Interaktives Dashboard: Erforschen Sie Kaufpreise, Wertentwicklungen und Markttrends für Immobilien in Osnabrück, Münster, Bielefeld und Rheine.',
};

export default function MarketDataPage() {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '100px' }}>
             {/* Hero Section */}
             <section style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '120px 0 80px', 
                borderBottom: '1px solid var(--border-color)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Lasarz Data Center</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--accent-secondary)', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Das Interaktive Marktdaten Dashboard
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                        Analysieren Sie die aktuelle Immobilienpreisentwicklung und Markttrends in Ihrer Region. Echte Daten, übersichtlich und grafisch aufbereitet für Ihren Marktüberblick.
                    </p>
                </div>
            </section>

            {/* Dashboard Workspace */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <DashboardClient />
                </div>
            </section>

             {/* CTA Section */}
             <section style={{ backgroundColor: 'var(--bg-tertiary)', padding: '80px 0' }}>
                <div className="container">
                    <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem', borderTop: '4px solid var(--accent-primary)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ist Ihre Einzelimmobilie den Marktschnitt wert?</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
                            * Die angezeigten Daten basieren auf aggregierten Auswertungen der örtlichen Gutachterausschüsse für Grundstückswerte, aktuellen Marktberichten sowie anonymisierten, regionalen Kauffällen.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                            Dashboards zeigen Durchschnittswerte (§ 194 BauGB), doch Ihre Immobilie ist einzigartig. Um den wahren Verkehrswert abzubilden, bedarf es einer Einzelfallprüfung durch einen zertifizierten Gutachter.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Individuelles Gutachten anfragen</Link>
                            <Link href="/honorar" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>Preise ansehen</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
