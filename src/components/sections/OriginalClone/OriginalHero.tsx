import Link from 'next/link';

export function OriginalHero() {
    return (
        <section
            style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: 'url(/images/original_clone/MG_1880-1024x690.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '80px', // Assuming header space
                color: 'white'
            }}
        >
            {/* Dark Overlay for readability just like the original site might have, or a gradient */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(18, 43, 64, 0.6)', /* Deep blue overlay */
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '800px' }}>

                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        color: 'white',
                        lineHeight: 1.2
                    }}>
                        Deutschlandweite Immobilien- und Grundstücksbewertungen von fachkundigen Gutachtern
                    </h1>

                    <h2 style={{
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        marginBottom: '2rem',
                        color: 'rgba(255,255,255,0.9)'
                    }}>
                        Verkehrswertgutachten und Wertindikationen von regionalen Experten
                    </h2>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/kontakt" className="btn" style={{
                            backgroundColor: 'white',
                            color: 'var(--accent-secondary)',
                            border: 'none',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 600
                        }}>
                            Kostenlose Erstberatung
                        </Link>
                        <Link href="#bewertung" className="btn" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 600
                        }}>
                            Zur Bewertung
                        </Link>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>
                            Zertifiziert und anerkannt durch:
                        </p>
                        <div style={{ display: 'inline-flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', background: 'rgba(255,255,255,0.9)', padding: '10px 20px', borderRadius: '4px' }}>
                            <img src="/images/original_clone/bvs_e_v_logo.jpeg" alt="BVS" style={{ height: '40px', objectFit: 'contain' }} />
                            <img src="/images/original_clone/NEU-Logo-DIAzert_7-09-300x228.jpg" alt="DIA Zert" style={{ height: '40px', objectFit: 'contain' }} />
                            <img src="/images/original_clone/REV-Siegel_2018-002.jpg" alt="REV Siegel" style={{ height: '50px', objectFit: 'contain' }} />
                            <img src="/images/original_clone/Stempel-DIAZert-2025.jpg" alt="DIA Zert Stempel" style={{ height: '50px', objectFit: 'contain' }} />
                            <img src="/images/original_clone/SV-R-Immo-D3_042028_ger_tc_p-182x300.jpg" alt="SV-R Zertifizierung" style={{ height: '50px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
