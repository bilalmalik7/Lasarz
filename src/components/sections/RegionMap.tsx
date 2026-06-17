"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const LeafletMapInner = dynamic(() => import('./LeafletMapInner'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      height: '560px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      border: '1px solid #ebdcb8',
      color: '#c4704b',
      fontWeight: 600
    }}>
      Karte wird geladen…
    </div>
  )
});


// Location definitions
export interface LocationItem {
  name: string;
  type: 'Hauptstandort' | 'Niederlassung' | 'Region';
  x: number;
  y: number;
  url: string;
  desc: string;
  isInset?: boolean;
}

const locations: LocationItem[] = [
  // 7 Main Locations
  {
    name: 'Osnabrück HQ',
    type: 'Hauptstandort',
    x: 494,
    y: 770,
    url: '/immobiliengutachter-osnabrueck',
    desc: 'Unser Hauptsitz im Herzen von Osnabrück. Seit Jahren Ihre erste Adresse für professionelle Immobilienbewertung, Bauschadensgutachten und Energieausweise in der Stadt und Region.'
  },
  {
    name: 'Münster',
    type: 'Niederlassung',
    x: 180,
    y: 1100,
    url: '/immobiliengutachter-muenster',
    desc: 'Unsere Niederlassung im Münsterland. Wir bewerten Eigentumswohnungen, Ein- und Mehrfamilienhäuser sowie Gewerbeobjekte mit präziser Marktkenntnis vor Ort.'
  },
  {
    name: 'Bielefeld',
    type: 'Niederlassung',
    x: 920,
    y: 1100,
    url: '/immobiliengutachter-bielefeld',
    desc: 'Kompetente Immobiliengutachter für Bielefeld und Ostwestfalen-Lippe. Wir ermitteln den Verkehrswert für Erbschaften, Schenkungen und Vermögensübertragungen.'
  },
  {
    name: 'Bünde',
    type: 'Niederlassung',
    x: 960,
    y: 750,
    url: '/standorte/buende',
    desc: 'Ihr lokaler Partner im Kreis Herford. Wir bieten qualifizierte Verkehrswertgutachten und Kurzbewertungen für Ihren Immobilienkauf oder -verkauf.'
  },
  {
    name: 'Melle',
    type: 'Niederlassung',
    x: 828,
    y: 922,
    url: '/immobiliengutachter-melle',
    desc: 'Erfahrene Sachverständige für Melle und das Grönegau. Zuverlässige Wertermittlung und kompetente Beratung beim Immobilienkauf.'
  },
  {
    name: 'Rheine',
    type: 'Niederlassung',
    x: 80,
    y: 700,
    url: '/immobiliengutachter-rheine',
    desc: 'Niederlassung Rheine für das nördliche Münsterland und Emsland. Unabhängige Gutachten bei Scheidung, Erbschaft oder Kaufabsicht.'
  },
  {
    name: 'Flensburg',
    type: 'Niederlassung',
    x: 880,
    y: 150,
    url: '/immobiliengutachter-flensburg',
    desc: 'Unsere nördlichste Niederlassung in Flensburg. Bewertung von Wohn- und Gewerbeimmobilien an der Förde und in ganz Schleswig-Holstein.',
    isInset: true
  },
  // 13 Regional Areas
  {
    name: 'Bramsche',
    type: 'Region',
    x: 434,
    y: 519,
    url: '/immobiliengutachter-bramsche',
    desc: 'Immobiliengutachter für Bramsche und das Umland. Wir unterstützen Sie bei Verkehrswertgutachten und Schimmelpilzbewertungen.'
  },
  {
    name: 'Georgsmarienhütte',
    type: 'Region',
    x: 510,
    y: 907,
    url: '/immobiliengutachter-georgsmarienhütte',
    desc: 'Ihr Gutachter vor Ort in Georgsmarienhütte. Präzise Marktanalysen und Sachverständigengutachten für Wohnimmobilien.'
  },
  {
    name: 'Ibbenbüren',
    type: 'Region',
    x: 180,
    y: 650,
    url: '/immobiliengutachter-ibbenbueren',
    desc: 'Professionelle Immobilienbewertung in Ibbenbüren. Beratung und Gutachten bei Immobilienübertragungen.'
  },
  {
    name: 'Lingen',
    type: 'Region',
    x: 60,
    y: 400,
    url: '/immobiliengutachter-lingen',
    desc: 'Wertermittlung im Emsland. Wir erstellen rechtssichere Gutachten für Gerichte, Finanzämter und Privatkunden.'
  },
  {
    name: 'Emsdetten',
    type: 'Region',
    x: 80,
    y: 820,
    url: '/immobiliengutachter-emsdetten',
    desc: 'Ihr Sachverständiger für Emsdetten. Kurzgutachten und umfassende Immobilienbewertung für Ihren Immobilienwert.'
  },
  {
    name: 'Steinfurt',
    type: 'Region',
    x: 70,
    y: 920,
    url: '/immobiliengutachter-steinfurt',
    desc: 'Fachkundige Beratung im Kreis Steinfurt. Wir ermitteln den genauen Verkehrswert Ihrer Wohn- oder Gewerbeimmobilie.'
  },
  {
    name: 'Gütersloh',
    type: 'Region',
    x: 650,
    y: 1160,
    url: '/immobiliengutachter-guetersloh',
    desc: 'Kompetente Immobiliengutachter im Kreis Gütersloh. Gutachten für steuerliche Anlässe und Erbbaurechte.'
  },
  {
    name: 'Halle (Westf.)',
    type: 'Region',
    x: 860,
    y: 1020,
    url: '/immobiliengutachter-halle-westf',
    desc: 'Sachverständigenbüro für Halle (Westfalen). Wir bewerten bebauten und unbebauten Grundbesitz zuverlässig.'
  },
  {
    name: 'Warendorf',
    type: 'Region',
    x: 260,
    y: 1060,
    url: '/immobiliengutachter-warendorf',
    desc: 'Verkehrswertgutachten im Kreis Warendorf. Unabhängige Bewertung für landwirtschaftliche und wohnwirtschaftliche Objekte.'
  },
  {
    name: 'Bad Oeynhausen',
    type: 'Region',
    x: 970,
    y: 650,
    url: '/immobiliengutachter-bad-oeynhausen',
    desc: 'Wertermittlung in Bad Oeynhausen. Wir bewerten Ihre Immobilie für Beleihungszwecke und steuerliche Bewertungen.'
  },
  {
    name: 'Bad Iburg',
    type: 'Region',
    x: 494,
    y: 1010,
    url: '/immobiliengutachter-bad-iburg',
    desc: 'Ihr Immobiliensachverständiger im Kurort Bad Iburg. Verkehrswertgutachten und Kaufberatung.'
  },
  {
    name: 'Bad Laer',
    type: 'Region',
    x: 518,
    y: 1098,
    url: '/immobiliengutachter-bad-laer',
    desc: 'Wertermittlung in Bad Laer und Umgebung. Unabhängige Gutachten für Erbschaften und Vermögensauseinandersetzungen.'
  },
  {
    name: 'Kirchlengern',
    type: 'Region',
    x: 950,
    y: 700,
    url: '/immobiliengutachter-kirchlengern',
    desc: 'Immobilienbewertung im Kreis Herford/Kirchlengern. Zuverlässige Kurzgutachten und Kaufpreisberatung.'
  }
];

export default function RegionMap() {
  const [selected, setSelected] = useState<LocationItem>(locations[0]);
  const [hovered, setHovered] = useState<LocationItem | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [tip, setTip] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      setTip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const getSelectedPathName = () => {
    return selected ? selected.name.replace(' HQ', '') : '';
  };

  return (
    <div 
      className="region-map-layout" 
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2.5rem',
        alignItems: 'stretch',
        backgroundColor: '#fbfaf8',
        padding: '3rem 2.5rem',
        borderRadius: '32px',
        border: '1px solid #ebdcb8',
        boxShadow: '0 25px 80px rgba(197, 160, 89, 0.08)',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style jsx global>{`
        .region-map-layout {
          @media (min-width: 1024px) {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @keyframes pulse-ripple {
          0% {
            transform: scale(0.6);
            opacity: 1;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
        .pulse-ring-1 {
          transform-origin: center;
          animation: pulse-ripple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
        }
        .pulse-ring-2 {
          transform-origin: center;
          animation: pulse-ripple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
          animation-delay: 0.75s;
        }
        .pulse-ring-3 {
          transform-origin: center;
          animation: pulse-ripple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
          animation-delay: 1.5s;
        }
        .map-glow-active {
          filter: drop-shadow(0px 0px 8px rgba(196, 112, 75, 0.35));
        }
      `}</style>

      {/* Decorative luxury mesh background element */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(197, 160, 89, 0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          opacity: 0.8
        }}
      />

      {/* LEFT COLUMN: Map View + Quick Select */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
        
        {/* Quick Select Buttons */}
        <div>
          <span style={{
            display: 'block',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: '#c4704b',
            marginBottom: '0.75rem',
            textAlign: 'center'
          }}>
            Schnellwahl Standorte
          </span>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.4rem', 
            justifyContent: 'center' 
          }}>
            {locations.filter(l => l.type !== 'Region').map(loc => {
              const isSelected = selected.name === loc.name;
              return (
                <button
                  key={loc.name}
                  onClick={() => setSelected(loc)}
                  style={{
                    backgroundColor: isSelected ? '#c4704b' : '#ffffff',
                    color: isSelected ? '#faf9f7' : '#4a4a4a',
                    border: isSelected ? '1px solid #c4704b' : '1px solid #e5e0d3',
                    borderRadius: '50px',
                    padding: '6px 14px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 6px 15px rgba(196,112,75,0.22)' : '0 2px 5px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isSelected ? 'scale(1.03)' : 'none'
                  }}
                  onMouseEnter={e => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#c4704b';
                      e.currentTarget.style.color = '#c4704b';
                      e.currentTarget.style.backgroundColor = '#fdfcfb';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#e5e0d3';
                      e.currentTarget.style.color = '#4a4a4a';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }
                  }}
                >
                  {loc.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Map Container */}
        <div 
          ref={mapContainerRef}
          onMouseMove={handleMouseMove}
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #ebdcb8',
            boxShadow: '0 10px 40px rgba(197, 160, 89, 0.04)'
          }}
        >
          {/* Leaflet Dynamic Street Map */}
          <LeafletMapInner
            locations={locations}
            selected={selected}
            setSelected={setSelected}
            setHovered={setHovered}
          />

          {/* Map Hover Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 5 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'absolute',
                  left: tip.x + 16,
                  top: tip.y - 42,
                  backgroundColor: '#0f172a',
                  color: '#f8fafc',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  boxShadow: '0 10px 25px rgba(15,23,42,0.25)',
                  pointerEvents: 'none',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <MapPin size={12} fill="#c4704b" className="text-[#c4704b]" />
                <span>
                  {hovered.name} · <strong style={{ color: '#c4704b' }}>{hovered.type}</strong>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* RIGHT COLUMN: Luxury Detail Info Card */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          position: 'relative'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid #ebdcb8',
              boxShadow: '0 15px 45px rgba(197, 160, 89, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Elegant double-border design frame */}
            <div 
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                right: '8px',
                bottom: '8px',
                borderRadius: '18px',
                border: '1px dashed rgba(196, 112, 75, 0.18)',
                pointerEvents: 'none'
              }}
            />

            {/* Glowing gold circular decoration */}
            <div 
              style={{
                position: 'absolute',
                top: '-70px',
                right: '-70px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(196, 112, 75, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            {/* Tag Badge */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: 'rgba(196, 112, 75, 0.08)',
                color: '#c4704b',
                padding: '5px 14px',
                borderRadius: '50px',
                fontSize: '0.72rem',
                fontWeight: 750,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(196, 112, 75, 0.15)'
              }}
            >
              <Navigation size={10} fill="#c4704b" className="rotate-45" />
              {selected.type}
            </span>

            {/* Appraiser Profile Headshot Block */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              borderBottom: '1px solid rgba(196, 112, 75, 0.1)',
              paddingBottom: '1.25rem',
              position: 'relative',
              zIndex: 2
            }}>
              <img 
                src="/images/team/marc_lasarz.jpg" 
                alt="Marc Lasarz" 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #c4704b',
                  boxShadow: '0 4px 12px rgba(196,112,75,0.15)'
                }}
              />
              <div>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: '1.05rem', 
                  fontWeight: 750, 
                  color: '#1a1a1a',
                  fontFamily: "'Playfair Display', Georgia, serif"
                }}>
                  Marc Lasarz
                </h4>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.82rem', color: '#6b7280', fontWeight: 600 }}>
                  Dipl.-Sachverständiger (DIA) & REV
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700 }}>Ihr persönlicher Gutachter</span>
                </div>
              </div>
            </div>


            {/* Headline Title */}
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '2.25rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '1rem',
                lineHeight: 1.2,
                letterSpacing: '-0.3px'
              }}
            >
              {selected.name}
            </h3>

            {/* Body Description */}
            <p
              style={{
                color: '#4b5563',
                fontSize: '0.98rem',
                lineHeight: 1.75,
                marginBottom: '2rem'
              }}
            >
              {selected.desc}
            </p>

            {/* Certifications Check Block */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                backgroundColor: '#faf8f4',
                padding: '1.2rem 1.5rem',
                borderRadius: '14px',
                marginBottom: '2.2rem',
                border: '1px solid rgba(196, 112, 75, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} className="text-[#c4704b] shrink-0" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>Zertifizierte DIA/IHK Immobiliengutachter</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} className="text-[#c4704b] shrink-0" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>Rechtssichere Gutachten für alle Anlässe</span>
              </div>
            </div>

            {/* Call to Action Button */}
            <Link
              href={selected.url}
              className="map-cta-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.7rem',
                background: 'linear-gradient(135deg, #d27c57, #c4704b)',
                color: '#ffffff',
                padding: '1.15rem 2rem',
                fontSize: '0.96rem',
                fontWeight: 700,
                borderRadius: '14px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(196, 112, 75, 0.28)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <span>Details & Gutachten anfordern</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
