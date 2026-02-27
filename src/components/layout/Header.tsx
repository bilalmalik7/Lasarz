'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center" style={{ height: '80px' }}>
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.svg" alt="Lasarz Logo" style={{ height: '40px', width: 'auto' }} />
        </Link>

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
      </div>

    </header>
  );
}
