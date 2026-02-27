'use client';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer section">
      <div className="container grid md-grid-cols-2 grid-cols-4 gap-lg">
        <div>
          <img src="/logo.svg" alt="Lasarz Logo" style={{ height: '40px', marginBottom: 'var(--space-sm)' }} />
          <p style={{ color: 'var(--text-muted)' }}>
            Die Immobiliengutachter. Ihr verlässlicher Partner für rechtssichere Immobilienbewertung in Osnabrück und Umgebung.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>Leistungen</h3>
          <ul className="footer-links">
            <li><Link href="#">Verkehrswertgutachten</Link></li>
            <li><Link href="#">Kurzgutachten</Link></li>
            <li><Link href="#">Kaufberatung</Link></li>
            <li><Link href="#">Beleihungswertgutachten</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>Immobilien</h3>
          <ul className="footer-links">
            <li><Link href="#">Wohnimmobilien</Link></li>
            <li><Link href="#">Gewerbeimmobilien</Link></li>
            <li><Link href="#">Sonderimmobilien</Link></li>
            <li><Link href="#">Grundstücke & Rechte</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-primary)' }}>Kontakt & Standorte</h3>
          <ul className="footer-links" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <li><Link href="/kontakt">Osnabrück</Link></li>
            <li><Link href="/kontakt">Flensburg</Link></li>
            <li><Link href="/kontakt">Münster</Link></li>
            <li><Link href="/kontakt">Bielefeld</Link></li>
            <li><Link href="/kontakt">Melle</Link></li>
            <li><Link href="/kontakt">Rheine</Link></li>
          </ul>
          <ul className="footer-links" style={{ marginTop: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-accent">📞</span> +49 (0) 541 - 600 99 220</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-accent">✉️</span> info@lasarz.com</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lasarz Immobiliengutachter. Alle Rechte vorbehalten.</p>
          <div className="flex gap-sm">
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="#">Impressum</Link>
            <Link href="#">Datenschutz</Link>
          </div>
        </div>
      </div>

      {/* Sticky Quick Contact */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a
          href="tel:+4954160099220"
          className="glass-card sticky-contact-btn"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            fontSize: '1.5rem',
            boxShadow: '0 10px 25px rgba(26, 117, 141, 0.4)',
            transition: 'transform 0.3s'
          }}
        >
          📞
        </a>
      </div>
    </footer>
  );
}
