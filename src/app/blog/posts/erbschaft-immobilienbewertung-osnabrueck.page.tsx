'use client';

import { useEffect } from 'react';
import Head from 'next/head';

export const metadata = {
    title: 'Erbschaft und Immobilienbewertung in Osnabrück - Der komplette Leitfaden',
    description: 'Kompletter Leitfaden für Erbschaft und Immobilienbewertung in Osnabrück. Was Sie über Erbschaftsgutachten wissen müssen und wie Sie die richtige Bewertung wählen.',
    openGraph: {
        title: 'Erbschaft und Immobilienbewertung in Osnabrück - Der komplette Leitfaden',
        description: 'Kompletter Leitfaden für Erbschaft und Immobilienbewertung in Osnabrück. Was Sie über Erbschaftsgutachten wissen müssen und wie Sie die richtige Bewertung wählen.',
        url: 'https://lasarz.com/blog/erbschaft-immobilienbewertung-osnabrueck',
        siteName: 'Lasarz Immobiliengutachter',
        locale: 'de_DE',
        type: 'article',
        images: [
            {
                url: 'https://lasarz.com/images/blog/erbschaft-immobilienbewertung.jpg',
                width: 1200,
                height: 630,
                alt: 'Erbschaft und Immobilienbewertung in Osnabrück'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Erbschaft und Immobilienbewertung in Osnabrück - Der komplette Leitfaden',
        description: 'Kompletter Leitfaden für Erbschaft und Immobilienbewertung in Osnabrück. Was Sie über Erbschaftsgutachten wissen müssen und wie Sie die richtige Bewertung wählen.',
        images: ['https://lasarz.com/images/blog/erbschaft-immobilienbewertung.jpg']
    },
    alternates: {
        canonical: 'https://lasarz.com/blog/erbschaft-immobilienbewertung-osnabrueck'
    },
    robots: {
        index: true,
        follow: true,
    },
    article: {
        publishedTime: '2026-04-29T00:00:00Z',
        modifiedTime: '2026-04-29T00:00:00Z',
        author: [{
            '@type': 'Person',
            name: 'Marc-André Lasarz'
        }],
        section: 'Immobilienbewertung',
        tag: ['Erbschaft', 'Immobilienbewertung', 'Osnabrück', 'Gutachten']
    }
};

export default function ErbschaftImmobilienbewertungPage() {
    // Add structured data for BlogPosting
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://lasarz.com/blog/erbschaft-immobilienbewertung-osnabrueck"
        },
        "headline": "Erbschaft und Immobilienbewertung in Osnabrück - Der komplette Leitfaden",
        "description": "Kompletter Leitfaden für Erbschaft und Immobilienbewertung in Osnabrück. Was Sie über Erbschaftsgutachten wissen müssen und wie Sie die richtige Bewertung wählen.",
        "author": {
            "@type": "Person",
            "name": "Marc-André Lasarz"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Lasarz Immobiliengutachter",
            "logo": {
                "@type": "ImageObject",
                "url": "https://lasarz.com/images/logo.png"
            }
        },
        "image": "https://lasarz.com/images/blog/erbschaft-immobilienbewertung.jpg",
        "datePublished": "2026-04-29T00:00:00Z",
        "dateModified": "2026-04-29T00:00:00Z"
    };

    useEffect(() => {
        // Add structured data to head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            
            {/* Hero Section */}
            <section style={{ 
                position: 'relative', 
                height: '50vh', 
                minHeight: '400px', 
                display: 'flex', 
                alignItems: 'center', 
                paddingTop: '80px',
                color: 'white'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <img 
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                        alt="Erbschaft und Immobilienbewertung" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        loading="lazy"
                        width={1200}
                        height={630}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0', color: 'white' }}>
                        Erbschaft und Immobilienbewertung
                    </h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', opacity: 0.9 }}>
                        Der komplette Leitfaden für Osnabrück und Umgebung
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Erbschaften mit Immobilien sind komplexe rechtliche und finanzielle Angelegenheiten, 
                                die sorgfältige Planung und professionelle Begleitung erfordern. In Osnabrück und 
                                Umgebung ist eine korrekte Immobilienbewertung bei Erbschaften von entscheidender 
                                Bedeutung, um die steuerliche und rechtliche Situation optimal zu managen. 
                                In diesem Leitfaden erfahren Sie alles über Erbschaft und Immobilienbewertung in 
                                Osnabrück.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
                                <img 
                                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                                    alt="Erbschaft und Immobilien" 
                                    style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
                                    loading="lazy"
                                    width={600}
                                    height={400}
                                />
                                <img 
                                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                                    alt="Immobilienbewertung Osnabrück" 
                                    style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
                                    loading="lazy"
                                    width={600}
                                    height={400}
                                />
                                <img 
                                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                                    alt="Erbschaftsgutachten" 
                                    style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
                                    loading="lazy"
                                    width={600}
                                    height={400}
                                />
                            </div>

                            <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}>Warum eine Immobilienbewertung bei Erbschaften?</h2>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Bei Erbschaften mit Immobilien ist eine professionelle Bewertung unerlässlich, 
                                um:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Den korrekten Steuerwert festzustellen</li>
                                <li>Die Erbschaftssteuer korrekt zu berechnen</li>
                                <li>Rechtliche Konflikte zu vermeiden</li>
                                <li>Die richtige Aufteilung der Vermögenswerte zu gewährleisten</li>
                                <li>Die Interessen aller Erben zu schützen</li>
                            </ul>

                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                In Osnabrück und Umgebung sind Immobilien oft ein bedeutender Teil des 
                                Erbes, weshalb eine präzise Bewertung entscheidend ist. Die Bewertung 
                                muss nach den geltenden Rechtsvorgaben erfolgen, insbesondere nach § 194 
                                BauGB.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Rechtliche Grundlagen</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Die rechtlichen Grundlagen für die Bewertung von Immobilien bei Erbschaften 
                                sind in folgenden Gesetzen geregelt:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li><strong>§ 194 BauGB:</strong> Verkehrswertbestimmung</li>
                                <li><strong>§ 198 BewG:</strong> Nachweisbarkeit des niedrigeren gemeinen Werts</li>
                                <li><strong>ErbStG:</strong> Erbschaftssteuer</li>
                                <li><strong>BGB:</strong> Erbrechte und Erbverträge</li>
                            </ul>

                            <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}>Die Rolle des Erbschaftsgutachters</h2>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Ein zertifizierter Erbschaftsgutachter in Osnabrück fungiert als neutraler 
                                Experte und erstellt objektive Bewertungen, die für das Finanzamt und 
                                andere Behörden anerkannt sind. Bei Erbschaften ist es besonders wichtig, 
                                dass der Gutachter:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Unabhängig und sachkundig ist</li>
                                <li>Die geltenden Rechtsvorgaben kennt</li>
                                <li>Die lokalen Gegebenheiten berücksichtigt</li>
                                <li>Ein detailliertes Gutachten erstellt</li>
                                <li>Die Erben berät</li>
                            </ul>

                            <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}>Arten von Erbschaftsgutachten</h2>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                In Osnabrück werden verschiedene Arten von Erbschaftsgutachten erstellt, 
                                je nach Art der Immobilie und der Erbschaft:
                            </p>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>1. Verkehrswertgutachten</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Das Verkehrswertgutachten ist das üblichste Gutachten bei Erbschaften. 
                                Es bestimmt den aktuellen Marktwert der Immobilie gemäß § 194 BauGB. 
                                Dieses Gutachten ist für das Finanzamt und andere Behörden anerkannt.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>2. Erbschaftsgutachten</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Ein Erbschaftsgutachten ist ein umfassendes Gutachten, das nicht nur 
                                den Wert bestimmt, sondern auch die steuerlichen Aspekte und die 
                                rechtliche Situation der Erbschaft analysiert.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>3. Kurzgutachten</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Für einfachere Fälle kann ein Kurzgutachten ausreichen. Diese sind 
                                schneller und kostengünstiger, aber weniger umfangreich.
                            </p>

                            <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}>Der Bewertungsprozess in Osnabrück</h2>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Ein professioneller Erbschaftsgutachter in Osnabrück folgt einem strukturierten 
                                Prozess:
                            </p>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Schritt 1: Vor-Ort-Besuch</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Der Gutachter besucht die Immobilie, um:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Den Zustand zu beurteilen</li>
                                <li>Die Größe und Ausstattung zu dokumentieren</li>
                                <li>Umfeld und Lage zu analysieren</li>
                                <li>Technische Merkmale zu dokumentieren</li>
                            </ul>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Schritt 2: Datenanalyse</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Die Analyse umfasst:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Grundbuchauszüge</li>
                                <li>Katasterdaten</li>
                                <li>Vergleichsobjekte</li>
                                <li>Marktanalysen</li>
                                <li>Steuerliche Vorgaben</li>
                            </ul>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Schritt 3: Wertberechnung</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Die Berechnung erfolgt nach den geltenden Methoden:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Vergleichswertverfahren</li>
                                <li>Sachwertverfahren</li>
                                <li>Ertragswertverfahren</li>
                            </ul>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Schritt 4: Gutachterbericht</h3>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Der Bericht enthält:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Die Bewertungsmethode</li>
                                <li>Die Ergebnisse der Analyse</li>
                                <li>Die Schlussfolgerung</li>
                                <li>Empfehlungen</li>
                                <li>Steuerliche Hinweise</li>
                            </ul>

                            <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}>Kosten und Zeitplan</h2>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Die Kosten für ein Erbschaftsgutachten in Osnabrück:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li><strong>Kurzgutachten:</strong> ab 750 Euro</li>
                                <li><strong>Verkehrswertgutachten:</strong> ab 1.800 Euro</li>
                                <li><strong>Erbschaftsgutachten:</strong> ab 2.500 Euro</li>
                            </ul>

                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Die Bearbeitungszeit beträgt in der Regel 2-4 Wochen, abhängig 
                                von der Komplexität der Immobilie und der Verfügbarkeit der 
                                Unterlagen.
                            </p>

                            <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}>Wichtige Tipps für Erbschaftsfälle</h2>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Bei Erbschaften mit Immobilien in Osnabrück und Umgebung sollten Sie 
                                folgende Punkte beachten:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Wählen Sie einen zertifizierten Gutachter</li>
                                <li>Erhalten Sie ein unabhängiges Gutachten</li>
                                <li>Behalten Sie alle relevanten Dokumente</li>
                                <li>Konsultieren Sie einen Steuerberater</li>
                                <li>Erhalten Sie eine detaillierte Aufstellung der Kosten</li>
                            </ul>

                            <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}>Warum Lasarz Immobiliengutachter?</h2>
                            
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Unser Team von zertifizierten Immobiliengutachtern in Osnabrück 
                                versteht die besonderen Herausforderungen bei Erbschaftsfällen. 
                                Wir bieten:
                            </p>

                            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                                <li>Objektive Bewertungen</li>
                                <li>Rechtliche Sicherheit</li>
                                <li>Transparente Kostenstruktur</li>
                                <li>Umfassende Beratung</li>
                                <li>Individuelle Lösungen</li>
                            </ul>

                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Bei Fragen zur Bewertung Ihres Hauses in Osnabrück oder Umgebung 
                                kontaktieren Sie uns gerne direkt. Wir bieten individuelle Lösungen 
                                für alle Ihre Immobilienanforderungen mit transparenten Kostenstruktur.
                            </p>

                            <div className="glass-card" style={{ padding: '2rem', marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                                    Kostenlose Beratung für Ihre Immobilienbewertung
                                </h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Haben Sie Fragen zur Bewertung Ihrer Immobilie bei Erbschaft in Osnabrück? 
                                    Unser Team von zertifizierten Sachverständigen steht Ihnen für eine 
                                    unverbindliche Erstberatung zur Verfügung.
                                </p>
                                <a href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                                    Jetzt Termin vereinbaren
                                </a>
                            </div>

                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginTop: '2rem' }}>
                                Bei Fragen zur Bewertung Ihres Hauses in Osnabrück oder Umgebung kontaktieren Sie 
                                uns gerne direkt. Wir bieten individuelle Lösungen für alle Ihre Immobilienanforderungen 
                                mit transparenten Kostenstruktur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}