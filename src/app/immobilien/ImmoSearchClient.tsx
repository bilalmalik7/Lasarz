'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { immobilienDaten, PropertyListing } from '@/lib/immobilienData';
import { Search, MapPin, Maximize, Home } from 'lucide-react';

export default function ImmoSearchClient() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('Alle');

    // Filter Logic
    const filteredProperties = useMemo(() => {
        return immobilienDaten.filter(prop => {
            const matchesSearch = 
                prop.plz.includes(searchTerm) || 
                prop.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prop.title.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesType = selectedType === 'Alle' || prop.type === selectedType;

            return matchesSearch && matchesType;
        });
    }, [searchTerm, selectedType]);

    // Format Price gracefully
    const formatPrice = (price: number | string) => {
        if (typeof price === 'string') return price;
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <section className="section" style={{ padding: '0 0 80px' }}>
            <div className="container">
                
                {/* Immo Search Panel */}
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--bg-tertiary)', marginBottom: '3rem', position: 'relative', marginTop: '-40px', zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    
                    <div style={{ flex: '1 1 250px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase' }}>Wo suchen Sie?</label>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input 
                                type="text" 
                                placeholder="PLZ oder Ort (z.B. 49074 oder Münster)" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="form-input" 
                                style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', fontSize: '1.05rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)' }} 
                            />
                        </div>
                    </div>
                    
                    <div style={{ flex: '0 1 200px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase' }}>Immobilientyp</label>
                        <select 
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="form-input" 
                            style={{ width: '100%', padding: '0.8rem 1rem', fontSize: '1.05rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)' }}
                        >
                            <option value="Alle">Alle Objekttypen</option>
                            <option value="Haus">Haus</option>
                            <option value="Wohnung">Wohnung</option>
                            <option value="Gewerbe">Gewerbe</option>
                            <option value="Grundstück">Grundstück</option>
                        </select>
                    </div>

                    <div style={{ flex: '0 0 auto', alignSelf: 'flex-end' }}>
                        <div style={{ padding: '0.8rem 1.5rem', backgroundColor: 'var(--accent-primary)', color: 'white', borderRadius: '8px', fontWeight: 600 }}>
                            {filteredProperties.length} Trender
                        </div>
                    </div>
                </div>

                {/* Animated Grid of Properties */}
                <motion.div layout className="immo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    <AnimatePresence>
                        {filteredProperties.map((prop) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={prop.id}
                                className="glass-card"
                                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            >
                                {/* Image Box */}
                                <div style={{ height: '260px', position: 'relative', overflow: 'hidden' }}>
                                    <motion.img 
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        src={prop.image} 
                                        alt={prop.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    {/* Badges */}
                                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ backgroundColor: 'var(--accent-secondary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                            {prop.type}
                                        </span>
                                        {prop.status === 'Off-Market' && (
                                            <span style={{ backgroundColor: '#8B5CF6', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                                Off-Market
                                            </span>
                                        )}
                                         {prop.status === 'Neu' && (
                                            <span style={{ backgroundColor: '#10B981', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                                Neu
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '2rem 1rem 1rem 1rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))', color: 'white' }}>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{formatPrice(prop.price)}</div>
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{prop.title}</h3>
                                    
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        <MapPin size={16} />
                                        <span>{prop.plz} {prop.city}</span>
                                    </div>

                                    {/* Metrics */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Maximize size={16} opacity={0.6} />
                                            <span>{prop.livingSpace} m² {prop.type === 'Grundstück' ? 'Fläche' : 'Wohnfl.'}</span>
                                        </div>
                                        {prop.rooms > 0 && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Home size={16} opacity={0.6} />
                                                <span>{prop.rooms} Zimmer</span>
                                            </div>
                                        )}
                                    </div>

                                    <Link href="/kontakt" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                                        Exposé anfordern
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProperties.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="glass-card" 
                        style={{ textAlign: 'center', padding: '4rem 2rem', marginTop: '2rem' }}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Leider keine exakten Treffer</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Wir vermarkten viele Immobilien "Off-Market" an gelistete Suchkunden, ohne sie öffentlich auszuschreiben. Legen Sie jetzt einen kostenlosen Suchauftrag für <strong style={{color: 'var(--accent-primary)'}}>{searchTerm}</strong> an.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>Suchauftrag anlegen</Link>
                    </motion.div>
                )}

            </div>
        </section>
    );
}
