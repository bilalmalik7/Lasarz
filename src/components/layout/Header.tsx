'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center" style={{ height: '80px' }}>
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <img src="/logo.svg" alt="Lasarz Logo" style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 1001,
            padding: '10px'
          }}
        >
          <span style={{ width: '25px', height: '2px', background: 'var(--accent-secondary)', transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ width: '25px', height: '2px', background: 'var(--accent-secondary)', opacity: isMenuOpen ? 0 : 1, transition: '0.3s' }}></span>
          <span style={{ width: '25px', height: '2px', background: 'var(--accent-secondary)', transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav flex gap-md items-center hidden-mobile">
          <div className="dropdown-container">
            <Link href="/immobilien" className="nav-link">Immobilien</Link>
          </div>

          <div className="dropdown-container">
            <Link href="/ueber-uns" className="nav-link">Leistungen</Link>
            <div className="dropdown-menu">
              <Link href="/leistungen/verkehrswertgutachten" className="dropdown-item">Verkehrswertgutachten</Link>
              <Link href="/leistungen/ankaufberatung" className="dropdown-item">Ankaufberatung</Link>
              <Link href="/leistungen/erbbaurecht" className="dropdown-item">Erbbaurecht</Link>
              <Link href="/leistungen/erbauseinandersetzung" className="dropdown-item">Erbauseinandersetzung</Link>
              <Link href="/leistungen/zugewinn" className="dropdown-item">Zugewinn / Ehe</Link>
              <Link href="/leistungen/betreuung" className="dropdown-item">Betreuung</Link>
            </div>
          </div>

          <Link href="/ueber-uns" className="nav-link">Über uns</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <Link href="/blog" className="nav-link">Blog</Link>

          <div className="dropdown-container">
            <Link href="/blog" className="nav-link">Ratgeber</Link>
            <div className="dropdown-menu">
              <Link href="/ratgeber/notarkosten" className="dropdown-item">Notarkosten Hauskauf</Link>
              <Link href="/ratgeber/grund-und-boden" className="dropdown-item">Grund und Boden AfA</Link>
              <Link href="/ratgeber/nachbarrecht" className="dropdown-item">Nachbarrecht NDS</Link>
            </div>
          </div>

          <Link href="/kontakt" className="nav-link">Standorte</Link>
          <Link href="/kontakt" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Kontakt
          </Link>
        </nav>

        {/* Mobile Navigation Overlay */}
        <nav
          className="mobile-nav"
          style={{
            position: 'fixed',
            top: 0,
            left: isMenuOpen ? 0 : '100%',
            width: '100%',
            height: '100vh',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1.5rem',
            transition: '0.3s ease-in-out',
            zIndex: 1000,
            padding: '100px 2rem 2rem 2rem',
            overflowY: 'auto'
          }}
        >
          <Link href="/immobilien" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={toggleMenu}>Immobilien</Link>
          <Link href="/ueber-uns" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={toggleMenu}>Leistungen</Link>
          <Link href="/team" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={toggleMenu}>Team</Link>
          <Link href="/blog" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={toggleMenu}>Ratgeber</Link>
          <Link href="/kontakt" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={toggleMenu}>Kontakt</Link>
          <Link href="/kontakt" className="btn btn-primary" style={{ width: '100%', maxWidth: '280px' }} onClick={toggleMenu}>
            Kostenlose Beratung
          </Link>
        </nav>
      </div>
    </header>
  );
}
