'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

interface City {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'office' | 'service';
  url: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
}

/* ─── Coordinates fit a ~700×420 viewBox roughly covering
       Niedersachsen / NRW / OWL / Emsland corridor ─── */
const OFFICES: City[] = [
  {
    id: 'osnabrueck',
    name: 'Osnabrück',
    x: 310, y: 218,
    type: 'office',
    url: '/immobiliengutachter-osnabrueck',
    description: 'Unser Hauptsitz. Zertifizierte Sachverständige für rechtssichere Verkehrswertgutachten in Osnabrück und der gesamten Region.',
    address: 'Katharinenstraße 111, 49078 Osnabrück',
    phone: '+49 (0) 541 - 600 99 220',
    email: 'osnabrueck@lasarz.com',
  },
  {
    id: 'buende',
    name: 'Bünde',
    x: 448, y: 200,
    type: 'office',
    url: '/immobiliengutachter-buende',
    description: 'Bürostandort Ostwestfalen — Immobiliengutachten für Bünde, Kirchlengern und das gesamte OWL-Gebiet.',
    address: 'Holzhauser Straße 79, 32257 Bünde',
    phone: '+49 (0) 5223 794 13 50',
    email: 'buende@lasarz.com',
  },
  {
    id: 'hannover',
    name: 'Hannover',
    x: 500, y: 160,
    type: 'office',
    url: '/immobiliengutachter-hannover',
    description: 'Bürostandort Hannover — professionelle Immobilienbewertung in der Landeshauptstadt und der Region Hannover.',
    phone: '+49 (0) 541 - 600 99 220',
    email: 'hannover@lasarz.com',
  },
];

const SERVICE_CITIES: City[] = [
  { id: 'muenster',    name: 'Münster',       x: 198, y: 318, type: 'service', url: '/immobiliengutachter-muenster' },
  { id: 'rheine',      name: 'Rheine',        x: 140, y: 190, type: 'service', url: '/immobiliengutachter-rheine' },
  { id: 'ibbenbueren', name: 'Ibbenbüren',    x: 218, y: 175, type: 'service', url: '/immobiliengutachter-ibbenbueren' },
  { id: 'lingen',      name: 'Lingen',        x: 108, y: 148, type: 'service', url: '/immobiliengutachter-lingen' },
  { id: 'emsdetten',   name: 'Emsdetten',     x: 178, y: 240, type: 'service', url: '/immobiliengutachter-emsdetten' },
  { id: 'steinfurt',   name: 'Steinfurt',     x: 162, y: 270, type: 'service', url: '/immobiliengutachter-steinfurt' },
  { id: 'melle',       name: 'Melle',         x: 378, y: 228, type: 'service', url: '/immobiliengutachter-melle' },
  { id: 'bielefeld',   name: 'Bielefeld',     x: 462, y: 248, type: 'service', url: '/immobiliengutachter-bielefeld' },
  { id: 'guetersloh',  name: 'Gütersloh',     x: 400, y: 290, type: 'service', url: '/immobiliengutachter-guetersloh' },
  { id: 'bramsche',    name: 'Bramsche',       x: 278, y: 178, type: 'service', url: '/immobiliengutachter-bramsche' },
  { id: 'gmshuette',   name: 'Georgsmarienhütte', x: 280, y: 255, type: 'service', url: '/immobiliengutachter-georgsmarienhütte' },
  { id: 'warendorf',   name: 'Warendorf',     x: 288, y: 330, type: 'service', url: '/immobiliengutachter-warendorf' },
  { id: 'minden',      name: 'Minden',        x: 520, y: 220, type: 'service', url: '/immobilienbewertung-minden' },
  { id: 'loehne',      name: 'Löhne',         x: 488, y: 190, type: 'service', url: '/immobiliengutachter-loehne' },
  { id: 'badoeynhausen', name: 'Bad Oeynhausen', x: 536, y: 205, type: 'service', url: '/immobiliengutachter-bad-oeynhausen' },
];

const ALL_CITIES = [...OFFICES, ...SERVICE_CITIES];

export default function RegionMap() {
  const [selected, setSelected] = useState<City | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleClick = (city: City) => {
    setSelected(prev => prev?.id === city.id ? null : city);
  };

  return (
    <>
      <style>{`
        @keyframes officeRipple {
          0%   { r: 14; opacity: 0.5; }
          100% { r: 36; opacity: 0; }
        }
        @keyframes officePulse {
          0%,100% { r: 22; opacity: 0.15; }
          50%     { r: 28; opacity: 0.08; }
        }
        .map-ripple { animation: officeRipple 2.2s ease-out infinite; }
        .map-ripple-2 { animation: officeRipple 2.2s ease-out infinite 0.8s; }
        .map-office-dot { transition: r 0.2s ease; cursor: pointer; }
        .map-service-dot { transition: r 0.15s ease, opacity 0.15s ease; cursor: pointer; }
        @keyframes cardSlide {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .map-detail-card { animation: cardSlide 0.3s ease both; }
      `}</style>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 310px' : '1fr', gap: '1.5rem', alignItems: 'start', transition: 'grid-template-columns 0.35s ease' }}>

        {/* ─── SVG MAP ─── */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(10,25,47,0.1)',
          boxShadow: '0 8px 40px rgba(10,25,47,0.08)',
          background: '#f5f7fa',
        }}>
          <svg
            viewBox="0 0 700 420"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            aria-label="Karte der Lasarz-Standorte"
          >
            <defs>
              <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#eef2f7" />
                <stop offset="100%" stopColor="#dde4ef" />
              </radialGradient>

              <pattern id="grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="0.8" cy="0.8" r="0.8" fill="rgba(10,25,47,0.07)" />
              </pattern>

              {/* Glow for office markers */}
              <filter id="officeGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Soft shadow for labels */}
              <filter id="labelShadow" x="-10%" y="-20%" width="120%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="white" floodOpacity="0.9" />
              </filter>

              {/* Coverage area gradient */}
              <radialGradient id="coverageGrad" cx="42%" cy="55%" r="55%">
                <stop offset="0%" stopColor="rgba(26,117,141,0.14)" />
                <stop offset="100%" stopColor="rgba(26,117,141,0)" />
              </radialGradient>
            </defs>

            {/* Background */}
            <rect width="700" height="420" fill="url(#bgGrad)" />
            <rect width="700" height="420" fill="url(#grid)" />

            {/* Coverage blob */}
            <ellipse cx="340" cy="245" rx="265" ry="190"
              fill="url(#coverageGrad)"
              stroke="rgba(26,117,141,0.12)"
              strokeWidth="1"
              strokeDasharray="8 6"
            />

            {/* Connection lines between offices */}
            {/* Osnabrück ↔ Bünde */}
            <line x1={310} y1={218} x2={448} y2={200}
              stroke="rgba(197,163,108,0.5)" strokeWidth="1.5" strokeDasharray="6 5" />
            {/* Bünde ↔ Hannover */}
            <line x1={448} y1={200} x2={500} y2={160}
              stroke="rgba(197,163,108,0.5)" strokeWidth="1.5" strokeDasharray="6 5" />
            {/* Osnabrück ↔ Hannover */}
            <line x1={310} y1={218} x2={500} y2={160}
              stroke="rgba(197,163,108,0.3)" strokeWidth="1" strokeDasharray="5 7" />

            {/* Service city dots */}
            {SERVICE_CITIES.map(city => {
              const isHov = hovered === city.id;
              const isSel = selected?.id === city.id;
              return (
                <g key={city.id}
                  className="map-service-dot"
                  onClick={() => handleClick(city)}
                  onMouseEnter={() => setHovered(city.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <circle cx={city.x} cy={city.y}
                    r={isHov || isSel ? 9 : 6}
                    fill="rgba(10,25,47,0.08)"
                  />
                  <circle cx={city.x} cy={city.y}
                    r={isHov || isSel ? 5 : 3.5}
                    fill={isHov || isSel ? '#1A758D' : 'rgba(10,25,47,0.28)'}
                    stroke={isHov || isSel ? 'rgba(26,117,141,0.3)' : 'none'}
                    strokeWidth="2"
                  />
                  {(isHov || isSel) && (
                    <text x={city.x} y={city.y - 12}
                      textAnchor="middle"
                      fill="#0A192F"
                      fontSize="9"
                      fontWeight="600"
                      fontFamily="'Outfit','Inter',sans-serif"
                      filter="url(#labelShadow)"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      {city.name}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Office markers */}
            {OFFICES.map((city, idx) => {
              const isMain = city.id === 'osnabrueck';
              const isSel = selected?.id === city.id;
              const isHov = hovered === city.id;
              const isActive = isSel || isHov;
              const accentColor = isMain ? '#c5a36c' : '#0A192F';
              const delay = idx * 0.4;

              return (
                <g key={city.id}
                  className="map-office-dot"
                  onClick={() => handleClick(city)}
                  onMouseEnter={() => setHovered(city.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Ripple rings */}
                  <circle cx={city.x} cy={city.y}
                    fill="none"
                    stroke={accentColor}
                    strokeWidth="1.2"
                    opacity="0.5"
                    className="map-ripple"
                    style={{ animationDelay: `${delay}s`, transformOrigin: `${city.x}px ${city.y}px` }}
                  />
                  <circle cx={city.x} cy={city.y}
                    fill="none"
                    stroke={accentColor}
                    strokeWidth="0.7"
                    opacity="0.3"
                    className="map-ripple-2"
                    style={{ animationDelay: `${delay + 0.4}s`, transformOrigin: `${city.x}px ${city.y}px` }}
                  />

                  {/* Halo */}
                  <circle cx={city.x} cy={city.y}
                    r={isActive ? 20 : 16}
                    fill={`${accentColor}18`}
                    stroke={`${accentColor}35`}
                    strokeWidth="1"
                    style={{ transition: 'r 0.2s ease' }}
                  />

                  {/* Core dot */}
                  <circle cx={city.x} cy={city.y}
                    r={isActive ? 10 : 8}
                    fill={accentColor}
                    filter="url(#officeGlow)"
                    style={{ transition: 'r 0.2s ease' }}
                  />

                  {/* Inner white */}
                  <circle cx={city.x} cy={city.y} r={isMain ? 4 : 3}
                    fill="white" opacity="0.92" />

                  {/* City label */}
                  <text
                    x={city.x}
                    y={city.y - 22}
                    textAnchor="middle"
                    fill="#0A192F"
                    fontSize={isMain ? 12 : 11}
                    fontWeight={isMain ? 800 : 700}
                    fontFamily="'Outfit','Inter',sans-serif"
                    filter="url(#labelShadow)"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {city.name}
                  </text>

                  {/* "Büro" sub-label */}
                  <text
                    x={city.x}
                    y={city.y - 34}
                    textAnchor="middle"
                    fill={accentColor}
                    fontSize="7"
                    fontWeight="700"
                    fontFamily="'Outfit',sans-serif"
                    letterSpacing="1.8"
                    opacity="0.85"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {isMain ? 'HAUPTBÜRO' : 'BÜRO'}
                  </text>
                </g>
              );
            })}

            {/* ── Compass rose ── */}
            <g transform="translate(658, 48)">
              <circle r="18" fill="white" fillOpacity="0.92"
                stroke="rgba(10,25,47,0.12)" strokeWidth="1" />
              <polygon points="0,-12 -3.5,2 0,-0.5 3.5,2" fill="#c5a36c" />
              <polygon points="0,12 -3.5,-2 0,0.5 3.5,-2" fill="rgba(10,25,47,0.25)" />
              <text y="-18" textAnchor="middle"
                fill="#c5a36c" fontSize="8" fontWeight="800"
                fontFamily="'Outfit',sans-serif">N</text>
            </g>

            {/* ── Legend ── */}
            <g transform="translate(20, 348)">
              <rect width="178" height="62" rx="8"
                fill="white" fillOpacity="0.9"
                stroke="rgba(10,25,47,0.1)" strokeWidth="1" />
              {[
                { color: '#c5a36c', label: 'Hauptbüro Osnabrück', r: 6 },
                { color: '#0A192F', label: 'Bürostandort', r: 5 },
                { color: 'rgba(10,25,47,0.28)', label: 'Einzugsgebiet', r: 3.5 },
              ].map((item, i) => (
                <g key={i} transform={`translate(14,${16 + i * 17})`}>
                  <circle r={item.r} cx="6" cy="0" fill={item.color} />
                  <text x="18" y="4" fill="#444" fontSize="9.5"
                    fontFamily="'Outfit',sans-serif">{item.label}</text>
                </g>
              ))}
            </g>

            {/* ── Bottom hint ── */}
            <text x="350" y="413" textAnchor="middle"
              fill="rgba(10,25,47,0.3)" fontSize="8.5"
              fontFamily="'Outfit',sans-serif" letterSpacing="0.4">
              Auf Standort klicken für Details
            </text>
          </svg>
        </div>

        {/* ─── DETAIL CARD ─── */}
        {selected && (
          <div className="map-detail-card" style={{
            background: '#fff',
            borderRadius: '16px',
            border: '1px solid rgba(10,25,47,0.1)',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(10,25,47,0.1)',
            position: 'sticky',
            top: '2rem',
          }}>
            {/* Accent top bar */}
            <div style={{
              height: '4px',
              background: selected.id === 'osnabrueck'
                ? 'linear-gradient(90deg, #c5a36c, #e8cc90)'
                : 'linear-gradient(90deg, #0A192F, #1A758D)',
            }} />

            {/* Header */}
            <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(10,25,47,0.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 10px',
                    borderRadius: '50px',
                    background: selected.id === 'osnabrueck' ? 'rgba(197,163,108,0.12)' : 'rgba(10,25,47,0.07)',
                    border: `1px solid ${selected.id === 'osnabrueck' ? 'rgba(197,163,108,0.4)' : 'rgba(10,25,47,0.15)'}`,
                    color: selected.id === 'osnabrueck' ? '#a8875a' : '#0A192F',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase' as const,
                    marginBottom: '0.5rem',
                  }}>
                    {selected.id === 'osnabrueck' ? 'Hauptbüro' : 'Bürostandort'}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', color: '#0A192F', margin: 0, fontWeight: 800 }}>
                    {selected.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    background: '#f4f6f9', border: 'none', color: '#888',
                    width: '30px', height: '30px', borderRadius: '50%',
                    cursor: 'pointer', fontSize: '1.1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#e8ebf0')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#f4f6f9')}
                >×</button>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '1.5rem 1.75rem' }}>
              {selected.description && (
                <p style={{ color: '#666', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.88rem' }}>
                  {selected.description}
                </p>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {selected.address && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <MapPin size={14} strokeWidth={1.8} style={{ color: '#1A758D', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#444', fontSize: '0.87rem', lineHeight: 1.5 }}>{selected.address}</span>
                  </div>
                )}
                {selected.phone && (
                  <a href={`tel:${selected.phone.replace(/[\s()-]/g, '')}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#1A758D', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                    <Phone size={14} strokeWidth={1.8} /> {selected.phone}
                  </a>
                )}
                {selected.email && (
                  <a href={`mailto:${selected.email}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#666', fontSize: '0.85rem', textDecoration: 'none' }}>
                    <Mail size={14} strokeWidth={1.8} /> {selected.email}
                  </a>
                )}
              </div>

              <Link href={selected.url} style={{
                display: 'block',
                textAlign: 'center',
                background: selected.id === 'osnabrueck'
                  ? 'linear-gradient(135deg, #c5a36c, #d4b57d)'
                  : 'linear-gradient(135deg, #0A192F, #1a3a5c)',
                color: selected.id === 'osnabrueck' ? '#0A192F' : '#fff',
                padding: '0.85rem',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Mehr erfahren →
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
