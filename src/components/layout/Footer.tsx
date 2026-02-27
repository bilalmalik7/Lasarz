'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ContactModal } from '../ui/ContactModal';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="footer section">
      <div className="container grid md-grid-cols-2 grid-cols-4 gap-lg">
        {/* ... existing footer content ... */}
        {/* I will use multi_replace for better precision if needed, but the user wants to update the sticky call icon. */}
        <div>
          <img src="/logo.svg" alt="Lasarz Logo" style={{ height: '40px', marginBottom: 'var(--space-sm)' }} />
          <p style={{ color: 'var(--text-muted)' }}>
            Die Immobiliengutachter. Ihr verlässlicher Partner für rechtssichere Immobilienbewertung in Osnabrück und Umgebung.
          </p>
          <div className="flex gap-sm" style={{ marginTop: '1.5rem' }}>
            <a href="#" className="social-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }}>LinkedIn</a>
            <a href="#" className="social-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }}>Instagram</a>
            <a href="#" className="social-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }}>Facebook</a>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>Leistungen</h3>
          <ul className="footer-links">
            <li><Link href="/leistungen/verkehrswertgutachten">Verkehrswertgutachten</Link></li>
            <li><Link href="/leistungen/kurzgutachten">Kurzgutachten</Link></li>
            <li><Link href="/leistungen/ankaufberatung">Kaufberatung</Link></li>
            <li><Link href="/leistungen/beleihungswertgutachten">Beleihungswertgutachten</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>Immobilien</h3>
          <ul className="footer-links">
            <li><Link href="/immobilien/wohnimmobilien">Wohnimmobilien</Link></li>
            <li><Link href="/immobilien/gewerbeimmobilien">Gewerbeimmobilien</Link></li>
            <li><Link href="/immobilien/sonderimmobilien">Sonderimmobilien</Link></li>
            <li><Link href="/immobilien/grundstuecke-rechte">Grundstücke & Rechte</Link></li>
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
        <button
          onClick={() => setIsModalOpen(true)}
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
            transition: 'transform 0.3s',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Kontaktformular öffnen"
        >
          📞
        </button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
