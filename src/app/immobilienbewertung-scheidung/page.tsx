'use client';

import Head from 'next/head';

export const metadata = {
  title: 'Immobilienbewertung für Scheidung | Rechtliche Aspekte in Osnabrück',
  description: 'Spezialisierte Immobilienbewertung für Scheidung und Erbschaft mit rechtlicher Sicherheit in Osnabrück und Umgebung.',
  openGraph: {
    title: 'Immobilienbewertung für Scheidung | Rechtliche Aspekte in Osnabrück',
    description: 'Spezialisierte Immobilienbewertung für Scheidung und Erbschaft mit rechtlicher Sicherheit in Osnabrück und Umgebung.',
    url: 'https://lasarz.com/immobilienbewertung-scheidung',
    siteName: 'Lasarz Immobiliengutachter',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://lasarz.com/images/scheidung-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Immobilienbewertung für Scheidung'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immobilienbewertung für Scheidung | Rechtliche Aspekte in Osnabrück',
    description: 'Spezialisierte Immobilienbewertung für Scheidung und Erbschaft mit rechtlicher Sicherheit in Osnabrück und Umgebung.',
    images: ['https://lasarz.com/images/scheidung-hero.jpg']
  },
  alternates: {
    canonical: 'https://lasarz.com/immobilienbewertung-scheidung'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ImmobilienbewertungScheidungPage() {
  // Structured data for Article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lasarz.com/immobilienbewertung-scheidung"
    },
    "headline": "Immobilienbewertung für Scheidung | Rechtliche Aspekte in Osnabrück",
    "description": "Spezialisierte Immobilienbewertung für Scheidung und Erbschaft mit rechtlicher Sicherheit in Osnabrück und Umgebung.",
    "author": {
      "@type": "Person",
      "name": "Marc-André Lasarz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lasarz Sachverständigenbüro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lasarz.com/images/logo.png"
      }
    },
    "datePublished": "2026-04-29",
    "dateModified": "2026-04-29"
  };

  return (
    <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)' }}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Immobilienbewertung für Scheidung</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
            Rechtliche Sicherheit und faire Bewertung bei Scheidung - Spezialisiert für Osnabrück und Umgebung
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Warum Immobilienbewertung bei Scheidung?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Bei einer Scheidung ist eine faire und objektive Bewertung der gemeinsamen Immobilien von entscheidender Bedeutung. 
                Eine professionelle Immobilienbewertung stellt sicher, dass beide Parteien ihre Rechte angemessen wahrnehmen können.
              </p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Rechtliche Grundlagen</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Die Bewertung von Immobilien bei Scheidung erfolgt nach den Vorgaben des <strong>Bundesimmobilienverwertungsgesetzes (BelWertV)</strong> und 
                der <strong>Rechtsprechung des BGH</strong>. Diese Regelungen stellen sicher, dass die Bewertung fair und nachweisbar ist.
              </p>

              <div style={{ backgroundColor: 'rgba(26, 117, 141, 0.1)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Wichtige Aspekte bei Scheidungsbewertungen</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Objektive Bewertung des Verkehrswerts</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Berücksichtigung aller relevanten Merkmale</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Nachweisbare Bewertungsgrundlagen</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Einhaltung der gesetzlichen Vorgaben</span>
                  </li>
                </ul>
              </div>

              <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Die Herausforderungen bei Scheidungsbewertungen</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>1. Zustand und Alter der Immobilie</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Der Zustand der Immobilie spielt eine entscheidende Rolle bei der Bewertung. Besonders bei älteren Bauwerken 
                  sind Reparaturbedarf und Modernisierungskosten zu berücksichtigen.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>2. Marktlage und Standortfaktoren</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Der Standort beeinflusst den Wert erheblich. In Osnabrück und Umgebung gibt es unterschiedliche 
                  Marktlagen mit unterschiedlichen Wertentwicklungen.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>3. Finanzierungsgrundlagen</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Bei Immobilien mit Darlehen ist die Tilgungssituation und die Restschuld zu berücksichtigen.
                </p>
              </div>

              <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Unser Bewertungsansatz</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>1</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Detaillierte Objektanalyse</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Umfassende Inspektion mit Berücksichtigung aller relevanten Merkmale.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>2</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Marktforschung</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Analyse aktueller Vergleichsobjekte und Markttrends in Osnabrück.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>3</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Rechtliche Berücksichtigung</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Einhaltung aller gesetzlichen Vorgaben und Rechtsprechung.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>4</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Ausführliches Gutachten</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Detailiertes Gutachten mit vollständiger Dokumentation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kosten für Scheidungsbewertung</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Die Kosten für eine Immobilienbewertung bei Scheidung variieren je nach Objektgröße und Komplexität.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Einfache Eigentumswohnung</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 450</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Einfamilienhaus</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 600</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Mehrfamilienhaus</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 800</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Gewerbeimmobilie</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 900</span>
                  </li>
                </ul>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  * Preise verstehen sich inkl. MwSt. und sind abhängig von der Objektgröße und Lage.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kontaktieren Sie uns</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Haben Sie Fragen zu unserer Scheidungsbewertung?
                </p>
                <a href="/kontakt" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', padding: '0.75rem 1.5rem' }}>
                  Jetzt Termin vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Brauchen Sie eine Immobilienbewertung bei Scheidung?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Unsere Experten stehen Ihnen für eine unverbindliche Erstberatung gerne zur Verfügung.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Jetzt Kontaktieren</a>
              <a href="/#bewertung" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>Kostenlose Wertermittlung</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}