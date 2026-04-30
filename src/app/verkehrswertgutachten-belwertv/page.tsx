export const metadata = {
  title: 'Verkehrswertgutachten nach BelWertV | Rechtsicherheit für Ihre Immobilie',
  description: 'Spezialisierte Verkehrswertgutachten nach BelWertV-Kriterien für maximale Rechtsicherheit in Osnabrück und Umgebung.',
  openGraph: {
    title: 'Verkehrswertgutachten nach BelWertV | Rechtsicherheit für Ihre Immobilie',
    description: 'Spezialisierte Verkehrswertgutachten nach BelWertV-Kriterien für maximale Rechtsicherheit in Osnabrück und Umgebung.',
    url: 'https://lasarz.com/verkehrswertgutachten-belwertv',
    siteName: 'Lasarz Immobiliengutachter',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://lasarz.com/images/verkehrswertgutachten-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Verkehrswertgutachten nach BelWertV'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verkehrswertgutachten nach BelWertV | Rechtsicherheit für Ihre Immobilie',
    description: 'Spezialisierte Verkehrswertgutachten nach BelWertV-Kriterien für maximale Rechtsicherheit in Osnabrück und Umgebung.',
    images: ['https://lasarz.com/images/verkehrswertgutachten-hero.jpg']
  },
  alternates: {
    canonical: 'https://lasarz.com/verkehrswertgutachten-belwertv'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function VerkehrswertgutachtenBelWertVPage() {
  // Structured data for Article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lasarz.com/verkehrswertgutachten-belwertv"
    },
    "headline": "Verkehrswertgutachten nach BelWertV - Rechtsicherheit für Ihre Immobilie",
    "description": "Spezialisierte Verkehrswertgutachten nach BelWertV-Kriterien für maximale Rechtsicherheit in Osnabrück und Umgebung.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Verkehrswertgutachten nach BelWertV</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
            Rechtsicherheit und Nachweisbarkeit Ihres Immobilienwerts nach den strengen BelWertV-Kriterien
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Was ist das BelWertV?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Das BelWertV (Bundesimmobilienverwertungsgesetz) regelt die Bewertung von Immobilien im öffentlichen Bereich und ist auch für private Gutachter von Bedeutung. 
                Als zertifizierter Immobiliengutachter in Osnabrück folgen wir strikt den BelWertV-Vorgaben, um höchste Rechtsicherheit für Ihre Bewertung zu garantieren.
              </p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Wichtige BelWertV-Kriterien</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Objektbezogene Bewertung basierend auf aktuellen Marktdaten</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Einhaltung der Vorgaben des Verkehrswertgesetzes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Dokumentation aller Bewertungsgrundlagen</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem', fontSize: '1.2rem' }}>&#8226;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Verwendung aktueller Vergleichswerte aus dem regionalen Markt</span>
                </li>
              </ul>

              <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Warum BelWertV-Gutachten?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Ein Verkehrswertgutachten nach BelWertV bietet Ihnen folgende Vorteile:
              </p>

              <div style={{ backgroundColor: 'rgba(26, 117, 141, 0.1)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Rechtsicherheit</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Durch die Einhaltung der BelWertV-Vorgaben ist Ihr Gutachten nachweisbar und rechtlich einwandfrei.
                </p>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Marktgültigkeit</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Die Bewertung berücksichtigt aktuelle Markttrends und Vergleichswerte aus Ihrer Region.
                </p>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Zertifizierung</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Als zertifizierter Gutachter garantieren wir höchste Qualität und Compliance.
                </p>
              </div>

              <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Unser Bewertungsprozess</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>1</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Objektbesichtigung</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Detaillierte Inspektion der Immobilie unter Berücksichtigung aller relevanten Merkmale.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>2</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Marktforschung</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Analyse aktueller Vergleichsobjekte und Markttrends in Ihrer Region.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>3</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Bewertung</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Berechnung des Verkehrswerts gemäß BelWertV-Kriterien und gesetzlichen Vorgaben.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1rem', marginTop: '0.3rem' }}>4</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Gutachten</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Ausführliches Gutachten mit vollständiger Dokumentation aller Bewertungsgrundlagen.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kosten für ein Verkehrswertgutachten</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Die Kosten für ein Verkehrswertgutachten variieren je nach Immobilientyp und Komplexität.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Einfache Eigentumswohnung</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 350</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Einfamilienhaus</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 500</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Gewerbeimmobilie</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 700</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Land und Forstwirtschaft</span>
                    <span style={{ color: 'var(--accent-primary)' }}>ab € 800</span>
                  </li>
                </ul>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  * Preise verstehen sich inkl. MwSt. und sind abhängig von der Objektgröße und Lage.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kontaktieren Sie uns</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Haben Sie Fragen zu unserem BelWertV-Gutachten?
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Brauchen Sie ein Verkehrswertgutachten?</h2>
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