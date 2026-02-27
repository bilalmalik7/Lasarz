'use client';
import Link from 'next/link';

const furtherTopics = [
    'Immobilienschätzung', 'Gutachter Immobilien', 'Verkehrswert ermitteln',
    'Immobilienbewertung', 'Gutachter Haus Kosten', 'Liegenschaftszins',
    'Immobilienwert Rechner', 'Immobilienbewertung online', 'Wert einer Immobilie',
    'Immobiliensachverständiger', 'Verkehrswertgutachten', 'Verkehrswert Immobilie',
    'Immobilienwert berechnen', 'Immobilie bewerten online', 'Ertragswertverfahren Immobilien',
    'Wertgutachten Immobilie', 'Wieviel ist meine Immobilie wert?', 'Immobilie bewerten lassen',
    'Immobilien Wertermittlung', 'Wert Immobilie ermitteln', 'Immobilienwert schätzen',
    'Gutachter Hauskauf', 'Sachverständiger Immobilien', 'Was ist meine Immobilie wert?',
];

const services = [
    { icon: '💼', title: 'Investmentberatung', href: '/leistungen/investmentberatung' },
    { icon: '🏭', title: 'Bewertung von Gewerbe- und Industrieimmobilien', href: '/leistungen/gewerbeimmobilien' },
    { icon: '🏠', title: 'Verkäuferberatung', href: '/leistungen/verkaeuferbereratung' },
    { icon: '🧫', title: 'Schimmelgutachten Hannover', href: '/leistungen/schimmelgutachten' },
    { icon: '💰', title: 'Steuerliche Immobilienbewertung', href: '/leistungen/steuerliche-bewertung' },
    { icon: '🔎', title: 'Schadensgutachten', href: '/leistungen/schadensgutachten' },
    { icon: '📋', title: 'Beleihungswertgutachten', href: '/leistungen/beleihungswertgutachten' },
    { icon: '⚡', title: 'Energieausweis', href: '/leistungen/energieausweis' },
    { icon: '⚖️', title: 'Verkehrswertgutachten nach §194 BauGB', href: '/leistungen/verkehrswertgutachten' },
    { icon: '🔑', title: 'Immobilienkaufberatung', href: '/leistungen/ankaufberatung' },
    { icon: '📸', title: 'Beweissicherung', href: '/leistungen/beweissicherung' },
];

export function MoreServicesSection() {
    return (
        <section style={{
            padding: '100px 0',
            backgroundColor: 'var(--bg-primary)',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                }}>
                    {/* Bewertungsleistungen */}
                    <div>
                        <span style={{
                            color: 'var(--accent-primary)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.85rem',
                        }}>
                            Bewertungsleistungen
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                            color: 'var(--accent-secondary)',
                            marginTop: '0.75rem',
                            marginBottom: '2rem',
                        }}>
                            Unsere Bewertungsleistungen im Überblick
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {services.map((svc) => (
                                <Link key={svc.title} href={svc.href} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 1.25rem',
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderRadius: '10px',
                                    border: '1px solid var(--border-color)',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-primary)';
                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(26,117,141,0.05)';
                                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-secondary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--bg-secondary)';
                                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{svc.icon}</span>
                                    <span>{svc.title}</span>
                                    <span style={{ marginLeft: 'auto', color: 'var(--accent-primary)', fontSize: '1.1rem' }}>→</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Weitere Themen */}
                    <div>
                        <span style={{
                            color: 'var(--accent-primary)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.85rem',
                        }}>
                            Weitere Themen
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                            color: 'var(--accent-secondary)',
                            marginTop: '0.75rem',
                            marginBottom: '2rem',
                        }}>
                            Weitere Themen bei denen wir Sie beraten
                        </h2>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.6rem',
                        }}>
                            {furtherTopics.map((topic) => (
                                <Link key={topic} href="/kontakt" style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1rem',
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid var(--border-color)',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    whiteSpace: 'nowrap',
                                }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent-primary)';
                                        (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--bg-secondary)';
                                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                                    }}
                                >
                                    {topic}
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={{
                            marginTop: '3rem',
                            padding: '2rem',
                            backgroundColor: 'var(--accent-secondary)',
                            borderRadius: '12px',
                            color: '#fff',
                        }}>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                                Immobilien-Marktwertgutachten Osnabrück
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                Als Sachverständige im Bereich der Immobilienbewertung erstellen wir Marktwertgutachten für Grundstücke, Wohn-, Gewerbe- und Sonderimmobilien. Wir prüfen auch vorhandene Gutachten auf ihre Plausibilität.
                            </p>
                            <Link href="/kontakt" className="btn" style={{
                                backgroundColor: 'var(--accent-primary)',
                                color: '#fff',
                                border: 'none',
                                padding: '0.85rem 2rem',
                                fontWeight: 600,
                            }}>
                                Kontakt aufnehmen
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
