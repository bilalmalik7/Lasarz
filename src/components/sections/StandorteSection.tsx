"use client";

import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import RegionMap from './RegionMap';

const otherRegions = [
  { label: 'Münster', url: '/immobiliengutachter-muenster' },
  { label: 'Bünde', url: '/immobiliengutachter-buende' },
  { label: 'Ibbenbüren', url: '/immobiliengutachter-ibbenbueren' },
  { label: 'Lingen', url: '/immobiliengutachter-lingen' },
  { label: 'Emsdetten', url: '/immobiliengutachter-emsdetten' },
  { label: 'Steinfurt', url: '/immobiliengutachter-steinfurt' },
  { label: 'Gütersloh', url: '/immobiliengutachter-guetersloh' },
  { label: 'Borgholzhausen', url: '/immobiliengutachter-borgholzhausen' },
  { label: 'Löhne', url: '/immobiliengutachter-loehne' },
  { label: 'Halle (Westf.)', url: '/immobiliengutachter-halle-westf' },
  { label: 'Warendorf', url: '/immobiliengutachter-warendorf' },
  { label: 'Bad Oeynhausen', url: '/immobiliengutachter-bad-oeynhausen' },
  { label: 'Bad Bentheim', url: '/immobiliengutachter-bad-bentheim' },
  { label: 'Kirchlengern', url: '/immobiliengutachter-kirchlengern' },
  { label: 'Versmold', url: '/immobilienbewertung-versmold' },
  { label: 'Westerkappeln', url: '/immobilienbewertung-westerkappeln' },
  { label: 'Hörstel', url: '/immobilienbewertung-hoerstel' },
  { label: 'Sassenberg', url: '/immobilienbewertung-sassenberg' },
  { label: 'Spelle', url: '/immobilienbewertung-spelle' },
  { label: 'Nordhorn', url: '/immobilienbewertung-nordhorn' },
  { label: 'Lotte', url: '/immobilienbewertung-lotte' },
  { label: 'Oelde', url: '/immobilienbewertung-oelde' },
  { label: 'Detmold', url: '/immobilienbewertung-detmold' },
  { label: 'Lengerich', url: '/immobilienbewertung-lengerich' },
  { label: 'Minden', url: '/immobilienbewertung-minden' },
  { label: 'Oldenburg', url: '/immobilienbewertung-oldenburg' },
  { label: 'Flensburg', url: '/immobiliengutachter-flensburg' }
];


const locations = [
    {
        city: 'Osnabrück',
        address: 'Katharinenstraße 111\n49078 Osnabrück',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'osnabrueck@lasarz.com',
        isMain: true,
        customUrl: '/immobiliengutachter-osnabrueck',
    },
    {
        city: 'Münster',
        address: 'c/o Lasarz Sachverständigenbüro\nMünster',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'muenster@lasarz.com',
        isMain: false,
        customUrl: '/immobiliengutachter-muenster',
    },
    {
        city: 'Flensburg',
        address: 'Norderstraße 52-56\n24939 Flensburg',
        phone: '+49 (0) 461 - 167 23 002',
        email: 'flensburg@lasarz.com',
        isMain: false,
        customUrl: '/immobiliengutachter-flensburg',
    },
    {
        city: 'Bielefeld',
        address: 'c/o Lasarz Sachverständigenbüro\nBielefeld',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'bielefeld@lasarz.com',
        isMain: false,
        customUrl: '/immobiliengutachter-bielefeld',
    },
    {
        city: 'Melle',
        address: 'c/o Lasarz Sachverständigenbüro\nMelle',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'melle@lasarz.com',
        isMain: false,
        customUrl: '/immobiliengutachter-melle',
    },
    {
        city: 'Rheine',
        address: 'c/o Lasarz Sachverständigenbüro\nRheine',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'rheine@lasarz.com',
        isMain: false,
        customUrl: '/immobiliengutachter-rheine',
    },
    {
        city: 'Bünde',
        slug: 'buende',
        address: 'Holzhauser Straße 79\n32257 Bünde',
        phone: '+49 (0) 5223 7941350',
        email: 'buende@lasarz.com',
        isMain: false,
    },
    {
        city: 'Kirchlengern',
        slug: 'kirchlengern',
        address: 'Holzhauser Straße 79\n32257 Bünde',
        phone: '+49 (0) 5223 7941350',
        email: 'buende@lasarz.com',
        isMain: false,
    },
];

const gutachterList = [
    { label: 'Immobiliengutachter Münster', url: '/immobiliengutachter-muenster' },
    { label: 'Immobiliengutachter Osnabrück', url: '/immobiliengutachter-osnabrueck' },
    { label: 'Immobiliengutachter Bünde', url: '/immobiliengutachter-buende' },
    { label: 'Immobiliengutachter Ibbenbüren', url: '/immobiliengutachter-ibbenbueren' },
    { label: 'Immobiliengutachter Melle', url: '/immobiliengutachter-melle' },
    { label: 'Immobiliengutachter Lingen', url: '/immobiliengutachter-lingen' },
    { label: 'Immobiliengutachter Emsdetten', url: '/immobiliengutachter-emsdetten' },
    { label: 'Immobiliengutachter Steinfurt', url: '/immobiliengutachter-steinfurt' },
    { label: 'Immobiliengutachter Gütersloh', url: '/immobiliengutachter-guetersloh' },
    { label: 'Immobiliengutachter Bramsche', url: '/immobiliengutachter-bramsche' },
    { label: 'Immobiliengutachter Borgholzhausen', url: '/immobiliengutachter-borgholzhausen' },
    { label: 'Immobiliengutachter Georgsmarienhütte', url: '/immobiliengutachter-georgsmarienhütte' },
    { label: 'Immobiliengutachter Löhne', url: '/immobiliengutachter-loehne' },
    { label: 'Immobiliengutachter Halle (Westf.)', url: '/immobiliengutachter-halle-westf' },
    { label: 'Immobiliengutachter Warendorf', url: '/immobiliengutachter-warendorf' },
    { label: 'Immobiliengutachter Bad Oeynhausen', url: '/immobiliengutachter-bad-oeynhausen' },
    { label: 'Immobiliengutachter Bad Iburg', url: '/immobiliengutachter-bad-iburg' },
    { label: 'Immobiliengutachter Bad Bentheim', url: '/immobiliengutachter-bad-bentheim' },
    { label: 'Immobiliengutachter Bad Laer', url: '/immobiliengutachter-bad-laer' },
    { label: 'Immobiliengutachter Kirchlengern', url: '/immobiliengutachter-kirchlengern' },
];

const bewertungList = [
    { label: 'Immobilienbewertung Bad Rothenfelde', url: '/immobilienbewertung-bad-rothenfelde' },
    { label: 'Immobilienbewertung Dissen am Teutoburger Wald', url: '/immobilienbewertung-dissen' },
    { label: 'Immobilienbewertung Versmold', url: '/immobilienbewertung-versmold' },
    { label: 'Immobilienbewertung Westerkappeln', url: '/immobilienbewertung-westerkappeln' },
    { label: 'Immobilienbewertung Hörstel', url: '/immobilienbewertung-hoerstel' },
    { label: 'Immobilienbewertung Sassenberg', url: '/immobilienbewertung-sassenberg' },
    { label: 'Immobilienbewertung Spelle', url: '/immobilienbewertung-spelle' },
    { label: 'Immobilienbewertung Nordhorn', url: '/immobilienbewertung-nordhorn' },
    { label: 'Immobilienbewertung Wallenhorst', url: '/immobilienbewertung-wallenhorst' },
    { label: 'Immobilienbewertung Lotte', url: '/immobilienbewertung-lotte' },
    { label: 'Immobilienbewertung Oelde', url: '/immobilienbewertung-oelde' },
    { label: 'Immobilienbewertung Detmold', url: '/immobilienbewertung-detmold' },
    { label: 'Immobilienbewertung Neuenkirchen', url: '/immobilienbewertung-neuenkirchen' },
    { label: 'Immobilienbewertung Lengerich', url: '/immobilienbewertung-lengerich' },
    { label: 'Immobilienbewertung Minden', url: '/immobilienbewertung-minden' },
    { label: 'Immobilienbewertung Hasbergen', url: '/immobilienbewertung-hasbergen' },
    { label: 'Immobilienbewertung Oldenburg', url: '/immobilienbewertung-oldenburg' },
    { label: 'Immobilienbewertung Flensburg', url: '/immobiliengutachter-flensburg' },
    { label: 'Immobilienbewertung Bünde', url: '/immobilienbewertung-buende' },
    { label: 'Immobilienbewertung Kirchlengern', url: '/immobilienbewertung-kirchlengern' },
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
                        Das Unternehmen arbeitet zur Zeit an <strong>vielen Standorten</strong>. Kompetente Experten vor Ort erzielen höhere Verkaufspreise.
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
                                <MapPin size={22} strokeWidth={1.8} />
                            </div>

                            <Link href={loc.customUrl ? loc.customUrl : (loc.slug ? `/standorte/${loc.slug}` : '#')} style={{ textDecoration: 'none' }}>
                                <h3 style={{ 
                                    color: loc.isMain ? '#fff' : 'var(--accent-secondary)', 
                                    fontSize: '1.4rem', 
                                    fontWeight: 700, 
                                    marginBottom: '0.75rem',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (!loc.isMain) e.currentTarget.style.color = 'var(--accent-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    if (!loc.isMain) e.currentTarget.style.color = 'var(--accent-secondary)';
                                }}
                                >
                                    {loc.city}
                                </h3>
                            </Link>
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
                                    <Phone size={16} strokeWidth={1.8} style={{ flexShrink: 0 }} /> {loc.phone}
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
                    marginTop: '4rem'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            color: 'var(--accent-primary)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.85rem',
                        }}>
                            Unser Einsatzgebiet
                        </span>
                        <h3 style={{ 
                            fontFamily: "'Playfair Display', serif",
                            color: 'var(--accent-secondary)', 
                            fontSize: '2rem', 
                            fontWeight: 700,
                            marginTop: '0.5rem',
                            marginBottom: '0.75rem' 
                        }}>
                            Zuhause in der gesamten Region
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '0.98rem', lineHeight: 1.7 }}>
                            Von Stadt und Landkreis Osnabrück über das Münsterland bis nach Ostwestfalen und Norddeutschland — wir kennen jede Gemeinde und ihren Immobilienmarkt. Fahren Sie über die Karte oder klicken Sie auf die Standorte, um mehr zu erfahren.
                        </p>
                    </div>

                    {/* Interactive Map Component */}
                    <RegionMap />

                    {/* Other Regions (SEO & Backlinks) */}
                    <div style={{ marginTop: '3.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem' }}>
                        <h4 style={{ 
                            color: 'var(--accent-secondary)', 
                            fontSize: '1.15rem', 
                            fontWeight: 700, 
                            marginBottom: '1.25rem',
                            fontFamily: "'Playfair Display', serif",
                            letterSpacing: '0.3px'
                        }}>
                            Weitere aktive Gutachter- & Bewertungsregionen
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 0.8rem' }}>
                            {otherRegions.map((region, i) => (
                                <Link 
                                    key={i} 
                                    href={region.url}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        backgroundColor: 'var(--bg-secondary)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-secondary)',
                                        padding: '6px 14px',
                                        borderRadius: '50px',
                                        fontSize: '0.82rem',
                                        fontWeight: 500,
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = '#c4704b';
                                        e.currentTarget.style.color = '#c4704b';
                                        e.currentTarget.style.backgroundColor = '#faf9f7';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                        e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                                        e.currentTarget.style.transform = 'none';
                                    }}
                                >
                                    <span style={{ color: '#c4704b', marginRight: '6px', fontSize: '0.75rem' }}>●</span>
                                    {region.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
