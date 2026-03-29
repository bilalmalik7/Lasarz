'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Scroll reveal ────────────────────────────────────────────────────────────
function R({ children, delay = 0, y = 40, className = '' }: {
    children: React.ReactNode; delay?: number; y?: number; className?: string;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ── The Calculator ───────────────────────────────────────────────────────────
function FinanzierungsRechnerWidget() {
    const [kaufpreis, setKaufpreis] = useState(500000);
    const [eigenkapital, setEigenkapital] = useState(100000);
    const [zinssatz, setZinssatz] = useState(3.5);
    const [tilgung, setTilgung] = useState(2.0);
    const [laufzeit, setLaufzeit] = useState(10);

    const [monatlicheRate, setMonatlicheRate] = useState(0);
    const [darlehen, setDarlehen] = useState(0);
    const [gesamtZinsen, setGesamtZinsen] = useState(0);
    const [restschuld, setRestschuld] = useState(0);

    useEffect(() => {
        const netDarlehen = Math.max(0, kaufpreis - eigenkapital);
        setDarlehen(netDarlehen);

        const zinsKostenJahr = netDarlehen * (zinssatz / 100);
        const tilgungKostenJahr = netDarlehen * (tilgung / 100);

        const gesamtJahr = zinsKostenJahr + tilgungKostenJahr;
        const rate = gesamtJahr / 12;
        setMonatlicheRate(rate);

        // Approximate total interest & remaining balance over the Zinsbindung period
        let balance = netDarlehen;
        let totalInterest = 0;
        for (let month = 0; month < laufzeit * 12; month++) {
            const monthlyInterest = balance * (zinssatz / 100 / 12);
            const monthlyPrincipal = rate - monthlyInterest;
            totalInterest += monthlyInterest;
            balance -= monthlyPrincipal;
            if (balance <= 0) { balance = 0; break; }
        }
        setGesamtZinsen(totalInterest);
        setRestschuld(Math.max(0, balance));
    }, [kaufpreis, eigenkapital, zinssatz, tilgung, laufzeit]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
    };

    const eigenkapitalQuote = kaufpreis > 0 ? ((eigenkapital / kaufpreis) * 100).toFixed(1) : '0.0';

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '1px solid rgba(26,117,141,0.1)' }}>

            {/* Left: Sliders */}
            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Kaufpreis */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: 600, color: '#1a2b3c', fontSize: '0.95rem' }}>
                        <span>🏠 Kaufpreis der Immobilie</span>
                        <span style={{ color: '#1A758D', fontWeight: 700, fontSize: '1.05rem' }}>{formatCurrency(kaufpreis)}</span>
                    </div>
                    <input
                        type="range"
                        min="50000" max="2000000" step="10000"
                        value={kaufpreis}
                        onChange={(e) => setKaufpreis(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#1A758D', height: '6px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                        <span>50.000 €</span><span>2.000.000 €</span>
                    </div>
                </div>

                {/* Eigenkapital */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: 600, color: '#1a2b3c', fontSize: '0.95rem' }}>
                        <span>💰 Eigenkapital</span>
                        <span style={{ color: '#1A758D', fontWeight: 700, fontSize: '1.05rem' }}>{formatCurrency(eigenkapital)}</span>
                    </div>
                    <input
                        type="range"
                        min="0" max={kaufpreis} step="10000"
                        value={eigenkapital}
                        onChange={(e) => setEigenkapital(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#1A758D', height: '6px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                        <span>0 €</span><span>EK-Quote: {eigenkapitalQuote}%</span>
                    </div>
                </div>

                {/* Zinssatz */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: 600, color: '#1a2b3c', fontSize: '0.95rem' }}>
                        <span>📈 Sollzins (p.a.)</span>
                        <span style={{ color: '#1A758D', fontWeight: 700, fontSize: '1.05rem' }}>{zinssatz.toFixed(2).replace('.', ',')} %</span>
                    </div>
                    <input
                        type="range"
                        min="0.5" max="8.0" step="0.1"
                        value={zinssatz}
                        onChange={(e) => setZinssatz(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#1A758D', height: '6px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                        <span>0,50 %</span><span>8,00 %</span>
                    </div>
                </div>

                {/* Tilgung */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: 600, color: '#1a2b3c', fontSize: '0.95rem' }}>
                        <span>🔄 Anfängliche Tilgung (p.a.)</span>
                        <span style={{ color: '#1A758D', fontWeight: 700, fontSize: '1.05rem' }}>{tilgung.toFixed(2).replace('.', ',')} %</span>
                    </div>
                    <input
                        type="range"
                        min="1.0" max="10.0" step="0.5"
                        value={tilgung}
                        onChange={(e) => setTilgung(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#1A758D', height: '6px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                        <span>1,00 %</span><span>10,00 %</span>
                    </div>
                </div>

                {/* Zinsbindung */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: 600, color: '#1a2b3c', fontSize: '0.95rem' }}>
                        <span>📅 Zinsbindung</span>
                        <span style={{ color: '#1A758D', fontWeight: 700, fontSize: '1.05rem' }}>{laufzeit} Jahre</span>
                    </div>
                    <input
                        type="range"
                        min="5" max="30" step="5"
                        value={laufzeit}
                        onChange={(e) => setLaufzeit(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#1A758D', height: '6px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                        <span>5 Jahre</span><span>30 Jahre</span>
                    </div>
                </div>

            </div>

            {/* Right: Results */}
            <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Main Result Card */}
                <div style={{ backgroundColor: '#1A758D', borderRadius: '16px', padding: '2.5rem', color: 'white' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', opacity: 0.9, letterSpacing: '1px', textTransform: 'uppercase' }}>Ihre voraussichtliche</h3>
                    <div style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#c5a36c', marginBottom: '1.5rem', lineHeight: 1 }}>
                        {formatCurrency(monatlicheRate)} <span style={{ fontSize: '1rem', color: 'white', fontWeight: 400 }}>/ Monat</span>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                            <span style={{ opacity: 0.8 }}>Nettodarlehen:</span>
                            <strong>{formatCurrency(darlehen)}</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                            <span style={{ opacity: 0.8 }}>Zinsen ({laufzeit} J.):</span>
                            <strong>{formatCurrency(gesamtZinsen)}</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                            <span style={{ opacity: 0.8 }}>Restschuld nach {laufzeit} J.:</span>
                            <strong>{formatCurrency(restschuld)}</strong>
                        </div>
                    </div>
                </div>

                {/* Visual bar */}
                <div style={{ background: '#f0f4f7', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333', marginBottom: '1rem' }}>Kostenaufteilung pro Monat</div>
                    <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', height: '28px', marginBottom: '0.75rem' }}>
                        <div style={{
                            width: `${zinssatz / (zinssatz + tilgung) * 100}%`,
                            background: 'linear-gradient(90deg, #1A758D, #2196a8)',
                            transition: 'width 0.3s'
                        }} />
                        <div style={{
                            width: `${tilgung / (zinssatz + tilgung) * 100}%`,
                            background: 'linear-gradient(90deg, #c5a36c, #d4b87e)',
                            transition: 'width 0.3s'
                        }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#555' }}>
                            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#1A758D', display: 'inline-block' }} />
                            Zinsen: {formatCurrency(darlehen * zinssatz / 100 / 12)}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#555' }}>
                            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#c5a36c', display: 'inline-block' }} />
                            Tilgung: {formatCurrency(darlehen * tilgung / 100 / 12)}
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <Link href="/kontakt" style={{
                    width: '100%',
                    padding: '1.1rem',
                    backgroundColor: '#c5a36c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(197,163,108,0.35)',
                }}>
                    Finanzierung anfragen
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>

                <p style={{ fontSize: '0.78rem', opacity: 0.5, textAlign: 'center', color: '#555' }}>
                    *Dieses Ergebnis ist ein unverbindliches Richtbeispiel und ersetzt kein detailliertes Finanzierungsangebot.
                </p>
            </div>

        </div>
    );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function FinanzierungsrechnerPage() {

    const tipps = [
        {
            icon: '💡',
            title: 'Eigenkapital-Empfehlung',
            desc: 'Experten empfehlen mindestens 20–30% Eigenkapital. Dies senkt Ihre monatliche Rate erheblich und verbessert die Konditionen Ihrer Bank.',
        },
        {
            icon: '📊',
            title: 'Tilgungsrate wählen',
            desc: 'Eine höhere Tilgungsrate bedeutet: schneller schuldenfrei. Bereits 1% mehr Tilgung kann die Laufzeit um viele Jahre verkürzen.',
        },
        {
            icon: '🔒',
            title: 'Zinsbindung sichern',
            desc: 'In Niedrigzinsphasen lohnt sich eine lange Zinsbindung (15–20 Jahre), um sich den günstigen Zins langfristig zu sichern.',
        },
        {
            icon: '📝',
            title: 'Nebenkosten beachten',
            desc: 'Grunderwerbsteuer (ca. 5%), Notar- und Grundbuchkosten (ca. 2%) sowie ggf. Maklerprovision kommen zum Kaufpreis hinzu.',
        },
        {
            icon: '🏦',
            title: 'Sondertilgung nutzen',
            desc: 'Prüfen Sie, ob Ihr Darlehensvertrag Sondertilgungen erlaubt. So können Sie flexibel schneller tilgen und Zinsen sparen.',
        },
        {
            icon: '🤝',
            title: 'Gutachten vor dem Kauf',
            desc: 'Ein unabhängiges Immobiliengutachten schützt Sie vor Überzahlung und stärkt Ihre Verhandlungsposition gegenüber Verkäufer und Bank.',
        },
    ];

    const steps = [
        { num: '01', title: 'Kaufpreis festlegen', desc: 'Geben Sie den gewünschten Kaufpreis der Immobilie ein.' },
        { num: '02', title: 'Eigenkapital angeben', desc: 'Wie viel Eigenkapital bringen Sie mit?' },
        { num: '03', title: 'Konditionen anpassen', desc: 'Spielen Sie verschiedene Zinssätze und Tilgungsraten durch.' },
        { num: '04', title: 'Ergebnis auswerten', desc: 'Sehen Sie Ihre monatliche Rate, Zinslast und Restschuld auf einen Blick.' },
    ];

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(150deg, #0b2a3d 0%, #122b40 50%, #0d1f30 100%)',
                paddingTop: '120px',
                paddingBottom: '80px',
            }}>
                {/* animated grid overlay */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    backgroundImage: `
                        linear-gradient(rgba(26,117,141,0.07) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(26,117,141,0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }} />

                {/* glowing orbs */}
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', top: '10%', right: '5%', width: '50vw', height: '50vw',
                        background: 'radial-gradient(circle, rgba(26,117,141,0.35) 0%, transparent 70%)',
                        borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />
                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                    style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '40vw', height: '40vw',
                        background: 'radial-gradient(circle, rgba(197,163,108,0.2) 0%, transparent 70%)',
                        borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: 'rgba(197,163,108,0.15)', border: '1px solid rgba(197,163,108,0.35)',
                            borderRadius: '100px', padding: '0.5rem 1.4rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '1.1rem' }}>🧮</span>
                        <span style={{ color: '#c5a36c', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                            Kostenlos & unverbindlich
                        </span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)', color: '#fff', fontWeight: 800,
                            lineHeight: 1.12, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        Ihr persönlicher<br />
                        <span style={{ color: '#c5a36c' }}>Finanzierungsrechner</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.15rem', lineHeight: 1.75,
                            marginBottom: '2.5rem', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
                        Berechnen Sie schnell und unverbindlich Ihre monatliche Rate für Immobilien
                        in Osnabrück und Umgebung. Jetzt Szenarien vergleichen und optimal planen.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#rechner" style={{
                            padding: '1rem 2.5rem', borderRadius: '100px', fontSize: '1.05rem',
                            background: '#1A758D', color: '#fff', fontWeight: 700, textDecoration: 'none',
                            boxShadow: '0 12px 35px rgba(26,117,141,0.45)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            transition: 'transform 0.2s',
                        }}>
                            Jetzt berechnen ↓
                        </a>
                        <Link href="/kontakt" style={{
                            padding: '1rem 2.5rem', borderRadius: '100px', fontSize: '1.05rem',
                            background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.25)',
                            color: '#fff', backdropFilter: 'blur(8px)', textDecoration: 'none',
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        }}>
                            📞 Beratung anfragen
                        </Link>
                    </motion.div>

                    {/* trust badges */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
                        {['✓ 100% kostenlos', '✓ Sofortergebnis', '✓ Keine Registrierung', '✓ DSGVO-konform'].map((t) => (
                            <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{t}</span>
                        ))}
                    </motion.div>
                </div>

                {/* scroll indicator */}
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                        color: 'rgba(255,255,255,0.4)', fontSize: '1.4rem' }}>↓</motion.div>
            </section>

            {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <R><div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: '#1A758D', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>So funktioniert&apos;s</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>In 4 Schritten zur monatlichen Rate</h2>
                    </div></R>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {steps.map((step, i) => (
                            <R key={i} delay={i * 0.1}>
                                <div style={{
                                    background: 'var(--bg-primary)', border: '1.5px solid var(--border-color)',
                                    borderRadius: '16px', padding: '2rem', textAlign: 'center',
                                    position: 'relative', overflow: 'hidden',
                                }}>
                                    <div style={{
                                        fontSize: '3rem', fontWeight: 900, color: 'rgba(26,117,141,0.08)',
                                        position: 'absolute', top: '10px', right: '16px', lineHeight: 1,
                                    }}>{step.num}</div>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #1A758D, #2196a8)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', fontWeight: 800, fontSize: '1.1rem',
                                        margin: '0 auto 1rem', boxShadow: '0 6px 20px rgba(26,117,141,0.3)',
                                    }}>{step.num}</div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '0.6rem', color: 'var(--accent-secondary)', fontSize: '1rem' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                                </div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CALCULATOR ──────────────────────────────────────────────────── */}
            <section id="rechner" style={{ padding: '80px 1rem', backgroundColor: '#f4f6f9' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <R>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span style={{ color: '#1A758D', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Finanzierungsrechner</span>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#1A758D', marginTop: '0.75rem', marginBottom: '1rem' }}>
                                Jetzt Ihre Finanzierung berechnen
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
                                Passen Sie die Werte an und sehen Sie sofort, wie sich Ihre monatliche Rate verändert.
                            </p>
                        </div>
                    </R>

                    <R delay={0.15}>
                        <FinanzierungsRechnerWidget />
                    </R>
                </div>
            </section>

            {/* ── TIPPS ───────────────────────────────────────────────────────── */}
            <section style={{ padding: '90px 0', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <R><div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: '#1A758D', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Experten-Tipps</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                            6 Tipps für Ihre Immobilienfinanzierung
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7 }}>
                            Diese Hinweise helfen Ihnen, die beste Finanzierungsstrategie für Ihre Situation zu finden.
                        </p>
                    </div></R>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {tipps.map((tipp, i) => (
                            <R key={i} delay={i * 0.08}>
                                <motion.div
                                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                    style={{
                                        background: 'var(--bg-secondary)', border: '1.5px solid var(--border-color)',
                                        borderRadius: '16px', padding: '2rem', height: '100%',
                                        cursor: 'default', transition: 'box-shadow 0.3s',
                                    }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{tipp.icon}</div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '0.6rem', color: 'var(--accent-secondary)', fontSize: '1.05rem' }}>{tipp.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.7 }}>{tipp.desc}</p>
                                </motion.div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SEO TEXT ─────────────────────────────────────────────────────── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <R>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
                            Finanzierungsrechner für Immobilien – das sollten Sie wissen
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.2rem', fontSize: '1rem' }}>
                            Ein <strong>Finanzierungsrechner</strong> hilft Ihnen, bereits vor dem Bankgespräch eine realistische Einschätzung
                            Ihrer monatlichen Belastung zu erhalten. So können Sie verschiedene Szenarien durchspielen und finden die
                            optimale Kombination aus Eigenkapital, Zinssatz und Tilgungsrate.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.2rem', fontSize: '1rem' }}>
                            Unser Rechner berücksichtigt Kaufpreis, Eigenkapitaleinsatz, Sollzinssatz, anfängliche Tilgung und Zinsbindungsdauer.
                            Die errechnete <strong>monatliche Rate</strong>, die Gesamtzinsbelastung sowie die Restschuld nach Ende der
                            Zinsbindung werden in Echtzeit angezeigt.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem' }}>
                            Bitte beachten Sie: Dieses Tool liefert eine <strong>unverbindliche Orientierung</strong>. Ein konkretes
                            Finanzierungsangebot hängt von weiteren Faktoren ab – z.B. Bonität, Objektwert und Bankkonditionen.
                            Für eine professionelle Immobilienbewertung als Grundlage Ihrer Finanzierung stehen wir Ihnen gerne zur Verfügung.
                        </p>
                    </R>
                </div>
            </section>

            {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
            <section style={{
                padding: '90px 0', textAlign: 'center',
                background: 'linear-gradient(135deg, var(--accent-secondary), #0d3a52)',
                position: 'relative', overflow: 'hidden',
            }}>
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', top: '-40%', right: '-15%', width: '70vw', height: '70vw',
                        border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <R>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem', fontWeight: 800 }}>
                            Brauchen Sie ein Immobiliengutachten?
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Ein professionelles Gutachten stärkt Ihre Verhandlungsposition und sichert Ihre Finanzierung ab.
                            Jetzt kostenlose Erstberatung vereinbaren.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Link href="/kontakt" className="btn" style={{
                                    background: 'var(--accent-primary)', color: '#fff', padding: '1.1rem 2.5rem',
                                    borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '1.05rem',
                                    boxShadow: '0 10px 30px rgba(26,117,141,0.5)', display: 'inline-block' }}>
                                    Kostenlose Beratung
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <a href="tel:+4954160099220" className="btn" style={{
                                    background: 'rgba(255,255,255,0.12)', color: '#fff',
                                    border: '1.5px solid rgba(255,255,255,0.3)', padding: '1.1rem 2.5rem',
                                    borderRadius: 'var(--radius-full)', fontSize: '1.05rem', display: 'inline-block' }}>
                                    📞 +49 (0) 541 - 600 99 220
                                </a>
                            </motion.div>
                        </div>
                    </R>
                </div>
            </section>

        </main>
    );
}
