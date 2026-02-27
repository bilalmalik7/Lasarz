'use client';
import Link from 'next/link';

const uspList = [
    {
        icon: '🎓',
        title: 'Ausschließlich zertifizierte Gutachter mit Lokal-Expertise',
        desc: 'Unsere Immobiliensachverständigen verfügen über verschiedene renommierte Zertifizierungen, welche die Qualität ihrer Wertermittlung bezeugen.',
    },
    {
        icon: '⚖️',
        title: 'Einhaltung rechtlicher Vorgaben',
        desc: 'Unsere lokalen Immobiliengutachter kennen die Gesetzeslage in Osnabrück und Umgebung bestens. Unsere Gutachten halten diese immer ein.',
    },
    {
        icon: '💰',
        title: 'Faires Pauschalangebot ohne Nachbesserung',
        desc: 'Unsere Experten kalkulieren alle Kosten verbindlich und transparent im Vorhinein. Nur die Behördenkosten müssen gesondert eingeplant werden.',
    },
    {
        icon: '🤝',
        title: 'Rundum betreut',
        desc: 'Wir prüfen Ihre Immobilie in Osnabrück professionell und informieren Sie über Wert, Zustand, Mängel, Kosten und alle relevanten rechtlichen Bestimmungen.',
    },
    {
        icon: '👁️',
        title: 'Vier-Augen-Prinzip',
        desc: 'Indem wir unsere Gutachten immer von einem weiteren Sachverständigen prüfen lassen, gewährleisten wir Ihnen höchste Qualität.',
    },
    {
        icon: '🎯',
        title: 'Spezielle Themenschwerpunkte',
        desc: 'Unsere Immobiliengutachter verfügen über Spezialkompetenzen (z.B. Bausachverständige). Wir suchen den optimal geeigneten Gutachter für Ihr Projekt.',
    },
    {
        icon: '⚡',
        title: 'Auch kurzfristige Termine',
        desc: 'Unsere Immobiliengutachter richten sich zeitlich nach Ihnen und nehmen auch kurzfristige Aufträge wahr – auch am Wochenende.',
    },
    {
        icon: '🏛️',
        title: 'Mitglied in Fachverbänden',
        desc: 'Wir sind Mitglied beim Deutschen Gutachter & Sachverständigenverband sowie Fördermitglied beim Verein Deutscher Ingenieure.',
    },
];

export function WhyChooseUs() {
    return (
        <section style={{
            position: 'relative',
            padding: '100px 0',
            backgroundImage: 'url(/images/original_clone/MG_1880-1024x690.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(18,43,64,0.94) 0%, rgba(18,43,64,0.88) 100%)',
                zIndex: 1,
            }} />

            <style>{`
        .usp-glass-card:hover {
          background-color: rgba(26,117,141,0.2) !important;
          border-color: rgba(26,117,141,0.5) !important;
        }
      `}</style>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: 'rgba(150,220,240,0.9)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.85rem',
                    }}>
                        Was uns auszeichnet
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                        color: '#fff',
                        marginTop: '0.75rem',
                        marginBottom: '1rem',
                    }}>
                        Gebäudebewertung durch Experten
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Das Sachverständigenbüro Lasarz ist mit seinem Team für Osnabrück und Umgebung für Sie tätig. Unsere lokal versierten Immobiliengutachter kennen sich bestens mit den Immobilienpreisen vor Ort aus.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '4rem',
                }}>
                    {uspList.map((usp, i) => (
                        <div key={i} style={{
                            backgroundColor: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '12px',
                            padding: '1.75rem',
                            display: 'flex',
                            gap: '1.25rem',
                            alignItems: 'flex-start',
                            transition: 'background 0.3s, border 0.3s',
                        }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(26,117,141,0.2)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(26,117,141,0.5)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.12)';
                            }}
                        >
                            <span style={{
                                fontSize: '2rem',
                                lineHeight: 1,
                                flexShrink: 0,
                                marginTop: '2px',
                            }}>{usp.icon}</span>
                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    {usp.title}
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                    {usp.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link href="/kontakt" className="btn" style={{
                        backgroundColor: 'var(--accent-primary)',
                        color: '#fff',
                        padding: '1.1rem 3rem',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        borderRadius: '8px',
                    }}>
                        Kostenlose & unverbindliche Beratung anfragen
                    </Link>
                </div>
            </div>
        </section>
    );
}
