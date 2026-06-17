'use client';
import { Home, Building, Factory, FileText, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const propertyTypes = [
    {
        category: 'Wohnimmobilien',
        icon: <Home size={32} />,
        bg: 'linear-gradient(135deg, #1A758D 0%, #122b40 100%)',
        accent: '#1A758D',
        items: [
            'Ein- und Zweifamilienhäuser',
            'Doppel- & Reihenhäuser',
            'Eigentumswohnungen',
            'Mehrfamilienhäuser',
            'Wohn- & Geschäftshäuser',
            'Ferienhäuser & Wohnungen',
            'Pflegeappartments',
        ],
    },
    {
        category: 'Sonderimmobilien',
        icon: <Building size={32} />,
        bg: 'linear-gradient(135deg, #0d7a4e 0%, #064d31 100%)',
        accent: '#0d7a4e',
        items: [
            'Handelsimmobilien',
            'Hotelgebäude',
            'Pflegeimmobilien',
            'Krankenhäuser',
            'Gastronomiebetriebe',
            'Einkaufszentren',
            'Freizeitimmobilien & Betreiberimmobilien',
        ],
    },
    {
        category: 'Gewerbeimmobilien',
        icon: <Factory size={32} />,
        bg: 'linear-gradient(135deg, #0A192F 0%, #050d1a 100%)',
        accent: '#0A192F',
        items: [
            'Bürogebäude & Ärztezentren',
            'Logistik- & Hallenflächen',
            'Handels- & Dienstleistungsflächen',
            'Produktionsflächen & Werkstätten',
            'Industrie- & Technologieparks',
            'Landwirtschaftliche Betriebe',
        ],
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function PropertyTypesBig() {
    return (
        <section style={{
            padding: '120px 0',
            backgroundColor: 'var(--bg-secondary)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `radial-gradient(circle at 50% 0%, rgba(197,163,108,0.05) 0%, transparent 70%)`
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>
                        Gebäudearten
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                        color: 'var(--accent-secondary)',
                        marginTop: '0.75rem',
                        marginBottom: '1.25rem',
                        fontWeight: 800,
                        lineHeight: 1.15
                    }}>
                        Gebäudearten die wir für Sie bewerten
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Von Wohnimmobilien über Gewerbeimmobilien bis hin zu Sonderimmobilien und Grundstücksrechten – wir bewerten jede Art von Immobilie professionell und marktkonform.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                        gap: '2.5rem',
                    }}
                >
                    {propertyTypes.map((type) => (
                        <motion.div 
                            key={type.category} 
                            variants={cardVariants}
                            whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                            style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            }}
                        >
                            {/* Premium Header */}
                            <div style={{
                                background: type.bg,
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Subtle background glow in header */}
                                <div style={{
                                    position: 'absolute', top: '50%', left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '150px', height: '150px',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%', filter: 'blur(20px)'
                                }} />
                                
                                <div style={{ 
                                    color: '#fff', 
                                    padding: '1rem', 
                                    background: 'rgba(255,255,255,0.1)', 
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    position: 'relative', zIndex: 1 
                                }}>
                                    {type.icon}
                                </div>
                                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, position: 'relative', zIndex: 1 }}>{type.category}</h3>
                            </div>

                            {/* Interactive Items */}
                            <div style={{ padding: '2rem' }}>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {type.items.map((item, i) => (
                                        <motion.li 
                                            key={i} 
                                            whileHover={{ x: 5, color: type.accent }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.95rem',
                                                padding: '0.5rem',
                                                borderRadius: '8px',
                                                transition: 'all 0.2s',
                                                cursor: 'default'
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-secondary)';
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                            }}
                                        >
                                            <ChevronRight size={16} color={type.accent} style={{ flexShrink: 0 }} />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
