'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface OriginalHeroProps {
    city?: string;
    theme?: {
        overlay?: string;
        primary?: string;
    };
}

export function OriginalHero({ city, theme }: OriginalHeroProps) {
    const title = city 
        ? `Immobiliengutachter in ${city}`
        : 'Deutschlandweite Immobilien- und Grundstücksbewertungen von fachkundigen Gutachtern';
    
    const subtitle = city
        ? `Verkehrswertgutachten und Wertindikationen von Ihrem regionalen Experten in ${city}`
        : 'Verkehrswertgutachten und Wertindikationen von regionalen Experten';

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '80px',
                color: 'white',
                overflow: 'hidden'
            }}
        >
            {/* Unsplash Background Image */}
            <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80" 
                alt="Modern house in Osnabrück with garden and garden furniture"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
                loading="lazy"
            />

            {/* Dark Brand Overlay for readability */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: theme?.overlay || 'rgba(18, 43, 64, 0.65)', /* Lasarz Dark Blue Overlay */
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ maxWidth: '800px' }}
                >
                    <motion.h1 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            color: 'white',
                            lineHeight: 1.15
                        }}
                    >
                        {title}
                    </motion.h1>

                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            marginBottom: '2.5rem',
                            color: 'rgba(255,255,255,0.9)'
                        }}
                    >
                        {subtitle}
                    </motion.h2>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                        <Link href="/kontakt" className="btn hover-lift" style={{
                            backgroundColor: '#c5a36c', /* Lasarz Gold */
                            color: 'white',
                            border: 'none',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}>
                            Kostenlose Erstberatung
                        </Link>
                        <Link href="#bewertung" className="btn hover-lift" style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            border: '2px solid white',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            borderRadius: '8px'
                        }}>
                            Zur Bewertung
                        </Link>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        style={{ marginTop: '4rem' }}
                    >
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.8rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                            Zertifiziert und anerkannt durch:
                        </p>
                        <div style={{ display: 'inline-flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', background: 'rgba(255,255,255,0.95)', padding: '15px 25px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80" alt="BVS Zertifikat für Immobilienbewertung" style={{ height: '40px', objectFit: 'contain' }} loading="lazy" />
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80" alt="DIA Zertifikat für Immobilienbewertung" style={{ height: '40px', objectFit: 'contain' }} loading="lazy" />
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80" alt="REV Siegel für Immobilienbewertung" style={{ height: '50px', objectFit: 'contain' }} loading="lazy" />
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80" alt="DIA Zert Stempel für Immobilienbewertung" style={{ height: '50px', objectFit: 'contain' }} loading="lazy" />
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80" alt="SV-R Zertifizierung für Immobilienbewertung" style={{ height: '50px', objectFit: 'contain' }} loading="lazy" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
