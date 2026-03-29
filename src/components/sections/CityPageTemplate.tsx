'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import type { CityPageData } from '@/lib/cityPages';

// ── Reusable animated counter ───────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 2.2 }: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let s = 0;
        const step = end / (duration * 60);
        const t = setInterval(() => {
            s += step;
            if (s >= end) { setCount(end); clearInterval(t); }
            else setCount(Math.floor(s));
        }, 1000 / 60);
        return () => clearInterval(t);
    }, [inView, end, duration]);
    return <span ref={ref}>{count.toLocaleString('de-DE')}{suffix}</span>;
}

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

// ── Typewriter headline ──────────────────────────────────────────────────────
function Typewriter({ words }: { words: string[] }) {
    const [idx, setIdx] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[idx];
        let timeout: ReturnType<typeof setTimeout>;
        if (!deleting && displayed.length < word.length) {
            timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
        } else if (!deleting && displayed.length === word.length) {
            timeout = setTimeout(() => setDeleting(true), 2200);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else {
            setDeleting(false);
            setIdx((idx + 1) % words.length);
        }
        return () => clearTimeout(timeout);
    }, [displayed, deleting, idx, words]);

    return (
        <span style={{ color: 'var(--accent-primary)', borderRight: '3px solid var(--accent-primary)', paddingRight: '4px' }}>
            {displayed}
        </span>
    );
}

// ── Star rating ──────────────────────────────────────────────────────────────
function Stars({ n = 5 }: { n?: number }) {
    return <span style={{ color: '#f59e0b', letterSpacing: '2px' }}>{'★'.repeat(n)}</span>;
}

// ── Main City Page Component ─────────────────────────────────────────────────
export function CityPageTemplate({ data }: { data: CityPageData }) {
    const [activeTab, setActiveTab] = useState(0);
    const [reviewIdx, setReviewIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setReviewIdx(i => (i + 1) % data.reviews.length), 5000);
        return () => clearInterval(t);
    }, [data.reviews.length]);

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(150deg, #0b2a3d 0%, #122b40 50%, #0d1f30 100%)',
                paddingTop: '80px',
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
                        background: 'radial-gradient(circle, rgba(26,117,141,0.45) 0%, transparent 70%)',
                        borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />
                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                    style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '40vw', height: '40vw',
                        background: 'radial-gradient(circle, rgba(26,117,141,0.3) 0%, transparent 70%)',
                        borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                    background: 'rgba(26,117,141,0.2)', border: '1px solid rgba(26,117,141,0.4)',
                                    borderRadius: '100px', padding: '0.45rem 1.2rem', marginBottom: '1.8rem' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e',
                                    boxShadow: '0 0 8px #22c55e' }} />
                                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.83rem', fontWeight: 600, letterSpacing: '1px' }}>
                                    {data.region}
                                </span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, delay: 0.1 }}
                                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', color: '#fff', fontWeight: 800,
                                    lineHeight: 1.12, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                                Immobiliengutachter<br />
                                <span style={{ color: 'var(--accent-primary)' }}>{data.name}</span> –<br />
                                <Typewriter words={data.typewriterWords} />
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', lineHeight: 1.75,
                                    marginBottom: '2.5rem', maxWidth: '540px' }}>
                                {data.heroSubtitle}
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                                <Link href="/kontakt" className="btn btn-primary" style={{
                                    padding: '1rem 2.2rem', borderRadius: 'var(--radius-full)', fontSize: '1rem',
                                    boxShadow: '0 12px 35px rgba(26,117,141,0.45)', fontWeight: 700 }}>
                                    Kostenlose Erstberatung →
                                </Link>
                                <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="btn" style={{
                                    padding: '1rem 2.2rem', borderRadius: 'var(--radius-full)', fontSize: '1rem',
                                    background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.25)',
                                    color: '#fff', backdropFilter: 'blur(8px)' }}>
                                    📞 Jetzt anrufen
                                </a>
                            </motion.div>

                            {/* trust row */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                {['✓ DIA zertifiziert', '✓ BVS zertifiziert', '✓ §36 GewO', '✓ Gerichtsverwertbar'].map((t) => (
                                    <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>{t}</span>
                                ))}
                            </motion.div>
                        </div>

                        {/* right — floating info card */}
                        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                            <div style={{
                                background: 'rgba(255,255,255,0.06)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '24px',
                                padding: '2.5rem',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '52px', height: '52px', borderRadius: '50%',
                                        background: 'var(--accent-primary)', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', fontSize: '1.5rem' }}>🏠</div>
                                    <div>
                                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Marc-André Lasarz</div>
                                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Öff. best. Sachverständiger</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    {[
                                        { label: 'Standort', value: data.name },
                                        { label: 'Zertifikate', value: 'DIA · BVS · §36 GewO' },
                                        { label: 'Erfahrung', value: '15+ Jahre · 3.500+ Gutachten' },
                                        { label: 'Bewertung', value: '⭐⭐⭐⭐⭐ (4.9/5)' },
                                    ].map((row) => (
                                        <div key={row.label} style={{
                                            display: 'flex', justifyContent: 'space-between',
                                            borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>{row.label}</span>
                                            <span style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{row.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/kontakt" className="btn btn-primary" style={{
                                    width: '100%', textAlign: 'center', justifyContent: 'center',
                                    borderRadius: '12px', padding: '0.9rem' }}>
                                    Immobilie bewerten lassen
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* scroll indicator */}
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                        color: 'rgba(255,255,255,0.4)', fontSize: '1.4rem' }}>↓</motion.div>
            </section>

            {/* ── ANIMATED STATS ────────────────────────────────────────────── */}
            <section style={{ background: 'var(--accent-primary)', padding: '3.5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {data.stats.map((s, i) => (
                            <R key={i} delay={i * 0.1}>
                                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                                    <Counter end={s.value} suffix={s.suffix} />
                                </div>
                                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', marginTop: '0.5rem' }}>{s.label}</div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OCCASIONS / USE CASES ─────────────────────────────────────── */}
            <section style={{ padding: '90px 0', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <R><div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Wann brauchen Sie uns?</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>Anlässe für ein Immobiliengutachten</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7 }}>
                            Ein Gutachten ist immer dann sinnvoll, wenn Sie rechtliche Sicherheit, Klarheit über den Marktwert
                            oder eine neutrale Entscheidungsgrundlage in {data.name} brauchen.
                        </p>
                    </div></R>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
                        {data.occasions.map((o, i) => (
                            <R key={i} delay={i * 0.08}>
                                <motion.div whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                    style={{ background: 'var(--bg-secondary)', border: '1.5px solid var(--border-color)',
                                        borderRadius: '16px', padding: '1.75rem', height: '100%', cursor: 'default',
                                        transition: 'box-shadow 0.3s' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{o.icon}</div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '0.6rem', color: 'var(--accent-secondary)', fontSize: '1.05rem' }}>{o.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.6 }}>{o.desc}</p>
                                </motion.div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TABBED PROPERTY TYPES ─────────────────────────────────────── */}
            <section style={{ padding: '90px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <R><div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Objektarten</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                            Wir bewerten alle Immobilientypen in {data.name}
                        </h2>
                    </div></R>

                    {/* tabs */}
                    <R delay={0.1}>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
                            {data.tabs.map((tab, i) => (
                                <motion.button key={i} onClick={() => setActiveTab(i)}
                                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                    style={{
                                        padding: '0.65rem 1.5rem',
                                        borderRadius: '100px',
                                        border: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.93rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s',
                                        background: activeTab === i ? 'var(--accent-primary)' : 'var(--bg-primary)',
                                        color: activeTab === i ? '#fff' : 'var(--text-secondary)',
                                        boxShadow: activeTab === i ? '0 4px 15px rgba(26,117,141,0.3)' : 'none',
                                    }}>
                                    {tab.icon} {tab.label}
                                </motion.button>
                            ))}
                        </div>
                    </R>

                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem',
                                background: 'var(--bg-primary)', borderRadius: '20px', padding: '2.5rem',
                                border: '1.5px solid var(--border-color)' }}>
                            <div>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{data.tabs[activeTab].icon}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
                                    {data.tabs[activeTab].label}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem', marginBottom: '1.5rem' }}>
                                    {data.tabs[activeTab].desc}
                                </p>
                                <Link href="/kontakt" className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)', padding: '0.85rem 2rem' }}>
                                    Gutachten anfragen
                                </Link>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', alignContent: 'start' }}>
                                {data.tabs[activeTab].items.map((item) => (
                                    <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center',
                                        background: 'var(--bg-secondary)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>✓</span>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── WHY US ────────────────────────────────────────────────────── */}
            <section style={{ padding: '90px 0', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <R><div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Warum Lasarz?</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                            Der Unterschied, den Qualität macht
                        </h2>
                    </div></R>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {data.whyUs.map((w, i) => (
                            <R key={i} delay={i * 0.1}>
                                <motion.div whileHover={{ scale: 1.03, borderColor: 'var(--accent-primary)' }}
                                    style={{ background: 'var(--bg-secondary)', border: '1.5px solid var(--border-color)',
                                        borderRadius: '16px', padding: '2rem', height: '100%',
                                        cursor: 'default', transition: 'border-color 0.25s' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '1.05rem', color: 'var(--accent-secondary)' }}>{w.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.7 }}>{w.desc}</p>
                                </motion.div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LOCAL AREAS ───────────────────────────────────────────────── */}
            <section style={{ padding: '90px 0', backgroundColor: 'var(--accent-secondary)', overflow: 'hidden' }}>
                <div className="container">
                    <R><div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Einzugsgebiet</span>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem' }}>
                            Ihr Immobiliengutachter in{' '}
                            <span style={{ color: 'var(--accent-primary)' }}>{data.name} & Umgebung</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7 }}>
                            Wir sind in allen Stadtteilen und im gesamten Umland tätig – auf Wunsch auch bundesweit.
                        </p>
                    </div></R>

                    <R delay={0.15}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                            {data.areas.map((area, i) => (
                                <motion.span key={area}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    whileHover={{ scale: 1.08, background: 'var(--accent-primary)', color: '#fff' }}
                                    style={{
                                        padding: '0.6rem 1.3rem',
                                        borderRadius: '100px',
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'rgba(255,255,255,0.85)',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        cursor: 'default',
                                        transition: 'background 0.25s, color 0.25s',
                                    }}>
                                    📍 {area}
                                </motion.span>
                            ))}
                        </div>
                    </R>
                </div>
            </section>

            {/* ── REVIEWS CAROUSEL ──────────────────────────────────────────── */}
            <section style={{ padding: '90px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <R><div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Kundenstimmen aus {data.name}</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                            Was unsere Kunden sagen
                        </h2>
                        <div style={{ marginTop: '0.5rem' }}>
                            <Stars /> <Stars /> <Stars /> <Stars />
                            <span style={{ color: 'var(--text-secondary)', marginLeft: '0.75rem', fontSize: '0.95rem' }}>4.9 / 5 · Google Bewertungen</span>
                        </div>
                    </div></R>

                    <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', minHeight: '200px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div key={reviewIdx}
                                initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }}
                                transition={{ duration: 0.5 }}
                                style={{ background: 'var(--bg-primary)', borderRadius: '20px', padding: '2.5rem',
                                    boxShadow: '0 10px 35px rgba(0,0,0,0.08)', border: '1.5px solid var(--border-color)' }}>
                                <Stars />
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-secondary)',
                                    margin: '1.2rem 0', fontStyle: 'italic' }}>
                                    &quot;{data.reviews[reviewIdx].text}&quot;
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--accent-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                        fontWeight: 700, fontSize: '1rem' }}>
                                        {data.reviews[reviewIdx].name[0]}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: 'var(--accent-secondary)', fontSize: '0.95rem' }}>
                                            {data.reviews[reviewIdx].name}
                                        </div>
                                        <div style={{ fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                                            {data.reviews[reviewIdx].location}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* dot indicators */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                            {data.reviews.map((_, i) => (
                                <motion.button key={i} onClick={() => setReviewIdx(i)}
                                    animate={{ scale: i === reviewIdx ? 1.3 : 1, opacity: i === reviewIdx ? 1 : 0.4 }}
                                    style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)',
                                        border: 'none', cursor: 'pointer', padding: 0 }} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEO TEXT BLOCK ────────────────────────────────────────────── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                        <R>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
                                {data.seoText.title}
                            </h2>
                            {data.seoText.paragraphs.map((p, i) => (
                                <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.2rem', fontSize: '1rem' }}
                                   dangerouslySetInnerHTML={{ __html: p }} />
                            ))}
                        </R>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
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
                            Ihr Immobiliengutachter in {data.name}
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto 2.5rem' }}>
                            Jetzt kostenlosen Beratungstermin vereinbaren – telefonisch, per E-Mail oder direkt vor Ort.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Link href="/kontakt" className="btn" style={{
                                    background: 'var(--accent-primary)', color: '#fff', padding: '1.1rem 2.5rem',
                                    borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '1.05rem',
                                    boxShadow: '0 10px 30px rgba(26,117,141,0.5)', display: 'inline-block' }}>
                                    Beratung anfragen
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="btn" style={{
                                    background: 'rgba(255,255,255,0.12)', color: '#fff',
                                    border: '1.5px solid rgba(255,255,255,0.3)', padding: '1.1rem 2.5rem',
                                    borderRadius: 'var(--radius-full)', fontSize: '1.05rem', display: 'inline-block' }}>
                                    📞 {data.phone}
                                </a>
                            </motion.div>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '2rem', fontSize: '0.9rem' }}>
                            📍 {data.address} · ✉️ {data.email}
                        </p>
                    </R>
                </div>
            </section>
        </main>
    );
}
