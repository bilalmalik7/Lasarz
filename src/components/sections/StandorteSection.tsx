import Link from 'next/link';

const locations = [
    {
        city: 'Osnabrück',
        address: 'Katharinenstraße 111\n49078 Osnabrück',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'osnabrueck@lasarz.com',
        isMain: true,
    },
    {
        city: 'Flensburg',
        address: 'Norderstraße 52-56\n24939 Flensburg',
        phone: '+49 (0) 461 - 167 23 002',
        email: 'flensburg@lasarz.com',
        isMain: false,
    },
    {
        city: 'Bünde',
        address: 'Holzhauser Straße 79\n32257 Bünde',
        phone: '+49 (0) 5223 7941350',
        email: 'buende@lasarz.com',
        isMain: false,
    },
];

const gutachterList = [
    'Immobiliengutachter Münster', 'Immobiliengutachter Osnabrück', 'Immobiliengutachter Bünde',
    'Immobiliengutachter Ibbenbüren', 'Immobiliengutachter Melle', 'Immobiliengutachter Lingen',
    'Immobiliengutachter Emsdetten', 'Immobiliengutachter Steinfurt', 'Immobiliengutachter Gütersloh',
    'Immobiliengutachter Bramsche', 'Immobiliengutachter Borgholzhausen', 'Immobiliengutachter Georgsmarienhütte',
    'Immobiliengutachter Löhne', 'Immobiliengutachter Halle (Westf.)', 'Immobiliengutachter Warendorf',
    'Immobiliengutachter Bad Oeynhausen', 'Immobiliengutachter Bad Iburg', 'Immobiliengutachter Bad Bentheim',
    'Immobiliengutachter Bad Laer',
];

const bewertungList = [
    'Immobilienbewertung Bad Rothenfelde', 'Immobilienbewertung Dissen am Teutoburger Wald',
    'Immobilienbewertung Versmold', 'Immobilienbewertung Westerkappeln', 'Immobilienbewertung Hörstel',
    'Immobilienbewertung Sassenberg', 'Immobilienbewertung Spelle', 'Immobilienbewertung Nordhorn',
    'Immobilienbewertung Wallenhorst', 'Immobilienbewertung Lotte', 'Immobilienbewertung Oelde',
    'Immobilienbewertung Detmold', 'Immobilienbewertung Neuenkirchen', 'Immobilienbewertung Lengerich',
    'Immobilienbewertung Minden', 'Immobilienbewertung Hasbergen', 'Immobilienbewertung Oldenburg',
    'Immobilienbewertung Flensburg',
];

export function StandorteSection() {
    return (
        <section style={{
            padding: '100px 0',
            backgroundColor: 'var(--bg-secondary)',
        }}>
            <div className="container">
                {/* Heading */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.85rem',
                    }}>
                        Unsere Standorte
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                        color: 'var(--accent-secondary)',
                        marginTop: '0.75rem',
                        marginBottom: '1rem',
                    }}>
                        Immobiliengutachter in Ihrer Nähe
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Das Unternehmen arbeitet zur Zeit an <strong>4 Standorten</strong>. Kompetente Experten vor Ort erzielen höhere Verkaufspreise.
                    </p>
                </div>

                {/* Standort cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '2rem',
                    marginBottom: '5rem',
                }}>
                    {locations.map((loc) => (
                        <div key={loc.city} style={{
                            backgroundColor: loc.isMain ? 'var(--accent-secondary)' : '#fff',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            boxShadow: loc.isMain
                                ? '0 20px 50px rgba(18,43,64,0.3)'
                                : '0 4px 24px rgba(18,43,64,0.07)',
                            border: loc.isMain ? 'none' : '1px solid var(--border-color)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {loc.isMain && (
                                <div style={{
                                    position: 'absolute',
                                    top: '1.2rem',
                                    right: '1.2rem',
                                    backgroundColor: 'var(--accent-primary)',
                                    color: '#fff',
                                    padding: '4px 14px',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                }}>
                                    Hauptstandort
                                </div>
                            )}

                            <div style={{
                                width: '56px',
                                height: '56px',
                                backgroundColor: loc.isMain ? 'rgba(255,255,255,0.1)' : 'rgba(26,117,141,0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.6rem',
                                marginBottom: '1.5rem',
                            }}>
                                📍
                            </div>

                            <h3 style={{ color: loc.isMain ? '#fff' : 'var(--accent-secondary)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                {loc.city}
                            </h3>
                            <p style={{ color: loc.isMain ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', whiteSpace: 'pre-line' }}>
                                {loc.address}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <a href={`tel:${loc.phone.replace(/\s/g, '')}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    color: loc.isMain ? 'rgba(150,220,240,0.9)' : 'var(--accent-primary)',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                }}>
                                    📞 {loc.phone}
                                </a>
                                <a href={`mailto:${loc.email}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    color: loc.isMain ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                }}>
                                    ✉️ {loc.email}
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* Partner card */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        padding: '2.5rem',
                        boxShadow: '0 4px 24px rgba(18,43,64,0.07)',
                        border: '2px dashed var(--accent-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '1rem',
                    }}>
                        <span style={{ fontSize: '3rem' }}>🌍</span>
                        <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem' }}>Jetzt Standort-Partner werden</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Erweitern Sie unser Netzwerk und werden Sie Teil des Lasarz-Teams.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="tel:+4954160099220" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                                +49 (0) 541 - 600 99 220
                            </a>
                            <a href="mailto:info@lasarz.com" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                info@lasarz.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Regional coverage */}
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    padding: '3rem',
                    boxShadow: '0 4px 24px rgba(18,43,64,0.07)',
                    border: '1px solid var(--border-color)',
                }}>
                    <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
                        Unsere regionale Abdeckung
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', fontSize: '0.95rem' }}>
                        Wir sind in der gesamten Region für Sie tätig
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                        gap: '3rem',
                    }}>
                        <div>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 600, fontSize: '1rem', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '0.5rem' }}>
                                Immobiliengutachter
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {gutachterList.map((item, i) => (
                                    <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.7rem' }}>●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 600, fontSize: '1rem', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '0.5rem' }}>
                                Immobilienbewertung
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {bewertungList.map((item, i) => (
                                    <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.7rem' }}>●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 700, fontSize: '1rem', borderBottom: '2px solid var(--accent-secondary)', paddingBottom: '0.5rem' }}>
                                Über Uns
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Das Unternehmen arbeitet zur Zeit an 4 Standorten. Alle Sachverständigen haben jahrelange Erfahrungen im Immobilienbereich und verfügen über mindestens ein Studium an der Deutschen Immobilienakademie (DIA) an der Universität Freiburg.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {[
                                    'Bachelor of Arts Real Estate',
                                    'Zertifizierter Immobiliengutachter',
                                    'Recognised European Valuer',
                                    'Bauschadenbewerter (DIA)',
                                    'Certified Real Estate Asset Manager (DIA)',
                                    'Beleihungswertermittler (DIA)',
                                    'Immobilienwirt (DIA) und Geprüfter Immobilien-Fachwirt (IHK)',
                                    'Immobilienbewerter (DIA) und Dipl.-Sachverständiger (DIA)',
                                ].map((cert, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.85rem',
                                    }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>✓</span>
                                        {cert}
                                    </div>
                                ))}
                            </div>

                            <Link href="/ueber-uns" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
                                Mehr erfahren
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
