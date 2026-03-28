'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function FinanzierungsRechner() {
    const [kaufpreis, setKaufpreis] = useState(500000);
    const [eigenkapital, setEigenkapital] = useState(100000);
    const [zinssatz, setZinssatz] = useState(3.5);
    const [tilgung, setTilgung] = useState(2.0);

    const [monatlicheRate, setMonatlicheRate] = useState(0);
    const [darlehen, setDarlehen] = useState(0);

    useEffect(() => {
        const netDarlehen = Math.max(0, kaufpreis - eigenkapital);
        setDarlehen(netDarlehen);
        
        const zinsKostenJahr = netDarlehen * (zinssatz / 100);
        const tilgungKostenJahr = netDarlehen * (tilgung / 100);
        
        const gesamtJahr = zinsKostenJahr + tilgungKostenJahr;
        setMonatlicheRate(gesamtJahr / 12);
    }, [kaufpreis, eigenkapital, zinssatz, tilgung]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <section style={{ backgroundColor: '#f4f6f9', padding: '5rem 1rem' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1A758D', marginBottom: '1rem' }}>
                        Ihr persönlicher Finanzierungsrechner
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
                        Berechnen Sie schnell und unverbindlich Ihre monatliche Rate für Immobilien in Osnabrück und Umgebung.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    
                    {/* Left: Sliders */}
                    <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        
                        {/* Kaufpreis */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                <span>Kaufpreis der Immobilie</span>
                                <span>{formatCurrency(kaufpreis)}</span>
                            </div>
                            <input 
                                type="range" 
                                min="50000" max="2000000" step="10000" 
                                value={kaufpreis} 
                                onChange={(e) => setKaufpreis(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#1A758D' }}
                            />
                        </div>

                        {/* Eigenkapital */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                <span>Eigenkapital</span>
                                <span>{formatCurrency(eigenkapital)}</span>
                            </div>
                            <input 
                                type="range" 
                                min="0" max={kaufpreis} step="10000" 
                                value={eigenkapital} 
                                onChange={(e) => setEigenkapital(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#1A758D' }}
                            />
                        </div>

                        {/* Zinssatz */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                <span>Sollzins (p.a.)</span>
                                <span>{zinssatz.toFixed(2).replace('.', ',')} %</span>
                            </div>
                            <input 
                                type="range" 
                                min="0.5" max="8.0" step="0.1" 
                                value={zinssatz} 
                                onChange={(e) => setZinssatz(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#1A758D' }}
                            />
                        </div>

                        {/* Tilgung */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                <span>Anfängliche Tilgung (p.a.)</span>
                                <span>{tilgung.toFixed(2).replace('.', ',')} %</span>
                            </div>
                            <input 
                                type="range" 
                                min="1.0" max="10.0" step="0.5" 
                                value={tilgung} 
                                onChange={(e) => setTilgung(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#1A758D' }}
                            />
                        </div>

                    </div>

                    {/* Right: Results */}
                    <div style={{ flex: '1 1 300px', backgroundColor: '#1A758D', borderRadius: '12px', padding: '2.5rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', opacity: 0.9 }}>Ihre voraussichtliche</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 800, color: '#c5a36c', marginBottom: '2rem', lineHeight: 1 }}>
                            {formatCurrency(monatlicheRate)} <span style={{fontSize: '1rem', color: 'white', fontWeight: 400}}>/ Monat</span>
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                                <span>Nettodarlehen:</span>
                                <strong>{formatCurrency(darlehen)}</strong>
                            </div>
                        </div>

                        <button style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            backgroundColor: '#c5a36c', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '8px', 
                            fontSize: '1.1rem', 
                            fontWeight: 700, 
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b0905a'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#c5a36c'}
                        >
                            Finanzierung anfragen
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </button>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7, textAlign: 'center', marginTop: '1rem' }}>
                            *Dieses Ergebnis ist ein unverbindliches Richtbeispiel und ersetzt kein detailliertes Angebot.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
