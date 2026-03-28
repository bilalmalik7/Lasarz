'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = end / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return <span ref={ref}>{count.toLocaleString('de-DE')}{suffix}</span>;
}

// ── Fade-in wrapper ───────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ── FAQ item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            style={{
                borderBottom: '1px solid var(--border-color)',
                overflow: 'hidden',
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.4rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                }}
            >
                <span style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{q}</span>
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', flexShrink: 0, lineHeight: 1 }}
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingBottom: '1.4rem', fontSize: '0.97rem' }}>
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Contact form ──────────────────────────────────────────────────────────────
function ContactForm() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.85rem 1rem',
        borderRadius: '8px',
        border: '1.5px solid var(--border-color)',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontSize: '0.97rem',
        outline: 'none',
        transition: 'border-color 0.2s',
    };

    if (sent) return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ textAlign: 'center', padding: '3rem 2rem' }}
        >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Anfrage erhalten!</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        </motion.div>
    );

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                    style={inputStyle}
                    placeholder="Ihr Name *"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                    style={inputStyle}
                    placeholder="E-Mail *"
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
            </div>
            <input
                style={inputStyle}
                placeholder="Telefon"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            <select
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}
            >
                <option value="">Betroffene Fläche</option>
                <option>Kleine Fläche ({"< 1 m²"})</option>
                <option>Mittlere Fläche (1–10 m²)</option>
                <option>Große Fläche ({">"} 10 m²)</option>
                <option>Unbekannt</option>
            </select>
            <textarea
                style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                placeholder="Beschreibung des Schimmelschadens *"
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
            />
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-primary"
                style={{ padding: '1rem', fontSize: '1rem', borderRadius: '8px', justifyContent: 'center' }}
            >
                Kostenlos anfragen →
            </motion.button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                🔒 Ihre Daten werden vertraulich behandelt.
            </p>
        </form>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function SchimmelgutachtenPage() {
    const stats = [
        { value: 500,  suffix: '+', label: 'Gutachten erstellt' },
        { value: 24,   suffix: 'h', label: 'Reaktionszeit' },
        { value: 98,   suffix: '%', label: 'Kundenzufriedenheit' },
        { value: 15,   suffix: '+', label: 'Jahre Erfahrung' },
    ];

    const steps = [
        { step: '01', title: 'Erstgespräch & Termin', desc: 'Kostenlose telefonische Erstberatung. Wir vereinbaren einen Ortstermin – auch am Wochenende.' },
        { step: '02', title: 'Vor-Ort-Untersuchung', desc: 'Unsere Sachverständigen analysieren Ursache, Ausmaß und Art des Schimmels mit modernsten Messgeräten.' },
        { step: '03', title: 'Laboranalyse', desc: 'Schimmelproben werden bei einem zertifizierten Labor ausgewertet – für eindeutige Schadensfeststellung.' },
        { step: '04', title: 'Gutachten & Empfehlung', desc: 'Sie erhalten ein gerichtsverwertbares Gutachten mit konkreten Sanierungsempfehlungen und Kostenschätzung.' },
    ];

    const services = [
        { icon: '🔍', title: 'Ursachenanalyse', desc: 'Klärung ob Baumangel, Nutzerverhalten oder bauphysikalische Mängel die Ursache sind.' },
        { icon: '📋', title: 'Schadensdokumentation', desc: 'Fotodokumentation und exakte Vermessung der befallenen Flächen.' },
        { icon: '🧪', title: 'Laboranalyse', desc: 'Bestimmung der Schimmelart und Bewertung des Gesundheitsrisikos.' },
        { icon: '⚖️', title: 'Gerichtverwertbares Gutachten', desc: 'Vollständige rechtssichere Dokumentation für Mieter-Vermieter-Streitigkeiten.' },
        { icon: '🏗️', title: 'Sanierungsempfehlung', desc: 'Detaillierter Maßnahmenplan mit Prioritäten und Kostenschätzungen.' },
        { icon: '📞', title: 'Nachbetreuung', desc: 'Wir stehen nach der Sanierung für Rückfragen und Kontrollen zur Verfügung.' },
    ];

    const faqs = [
        {
            q: 'Woran erkenne ich, ob Schimmel gesundheitsgefährlich ist?',
            a: 'Nicht jeder Schimmel ist gleich gefährlich. Schwarzer Schimmel (Stachybotrys chartarum) gilt als besonders toxisch. Nur eine Laboranalyse kann die Schimmelart eindeutig bestimmen. Bei Atemwegsbeschwerden, Kopfschmerzen oder Allergiesymptomen sollten Sie umgehend handeln.',
        },
        {
            q: 'Wer muss das Schimmelgutachten bezahlen – Mieter oder Vermieter?',
            a: 'Das hängt von der Ursache ab. Ist ein Baumangel die Ursache (z.B. fehlende Dämmung), trägt der Vermieter die Kosten. Bei falschem Lüftungsverhalten des Mieters liegt die Verantwortung beim Mieter. Unser Gutachten klärt diese Frage eindeutig.',
        },
        {
            q: 'Wie schnell können Sie einen Termin anbieten?',
            a: 'In der Regel können wir innerhalb von 2–5 Werktagen einen Ortstermin durchführen. Bei dringendem Handlungsbedarf sind wir in vielen Fällen bereits innerhalb von 24–48 Stunden vor Ort. Rufen Sie uns an oder füllen Sie das Kontaktformular aus.',
        },
        {
            q: 'Ist ein Schimmelgutachten für ein Gerichtsverfahren geeignet?',
            a: 'Ja. Unsere Gutachten werden von DIA-zertifizierten Sachverständigen nach anerkannten wissenschaftlichen Standards erstellt und sind vor Gericht anerkannt. Wir haben Erfahrung mit Streitigkeiten aus dem Miet- und Immobilienrecht.',
        },
        {
            q: 'Was kostet ein Schimmelgutachten?',
            a: 'Die Kosten hängen von der Schadengröße, der Anzahl der Räume und dem Umfang der Laboranalysen ab. Nach dem Erstgespräch erhalten Sie ein unverbindliches Angebot. Rufen Sie uns unter +49 (0)541 600 99 220 an.',
        },
    ];

    const risks = [
        { icon: '🫁', title: 'Gesundheitsrisiken', desc: 'Schimmelsporen können Atemwegserkrankungen, Allergien und bei toxischen Arten sogar Vergiftungen auslösen.' },
        { icon: '🏠', title: 'Wertverlust', desc: 'Unbehandelter Schimmel kann den Immobilienwert um bis zu 20 % mindern und spätere Sanierungen immens verteuern.' },
        { icon: '⚖️', title: 'Rechtliche Risiken', desc: 'Vermieter riskieren Mietminderungen und Schadensersatzklagen, wenn bekannte Schäden nicht behoben werden.' },
    ];

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                background: 'linear-gradient(135deg, var(--accent-secondary) 0%, #0d3a52 100%)',
                paddingTop: '140px',
                paddingBottom: '80px',
                overflow: 'hidden',
            }}>
                {/* floating blobs */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute', top: '-10%', right: '-5%',
                        width: '55vw', height: '55vw',
                        background: 'radial-gradient(circle, rgba(26,117,141,0.5) 0%, transparent 70%)',
                        borderRadius: '50%', pointerEvents: 'none',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    style={{
                        position: 'absolute', bottom: '-20%', left: '-10%',
                        width: '40vw', height: '40vw',
                        background: 'radial-gradient(circle, rgba(26,117,141,0.4) 0%, transparent 70%)',
                        borderRadius: '50%', pointerEvents: 'none',
                    }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '100px',
                            padding: '0.4rem 1.2rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: '#fff',
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            marginBottom: '1.5rem',
                        }}
                    >
                        Leistungen
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                            color: '#fff',
                            lineHeight: 1.15,
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            maxWidth: '800px',
                        }}
                    >
                        🧫 Schimmelgutachten –<br />
                        <span style={{ color: 'var(--accent-primary)' }}>Sicherheit durch Expertenwissen</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{
                            color: 'rgba(255,255,255,0.82)',
                            fontSize: '1.15rem',
                            maxWidth: '660px',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem',
                        }}
                    >
                        Professionelle Schimmel- und Feuchtigkeitsgutachten in Osnabrück und bundesweit.
                        Durch DIA-zertifizierte Bauschadenbewerter – gerichtsverwertbar und unabhängig.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <Link href="/kontakt" className="btn btn-primary" style={{
                            padding: '1rem 2.5rem', fontSize: '1.05rem',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: '0 10px 30px rgba(26,117,141,0.4)',
                        }}>
                            Kostenlose Erstberatung
                        </Link>
                        <a href="tel:+4954160099220" className="btn btn-secondary" style={{
                            padding: '1rem 2.5rem', fontSize: '1.05rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1.5px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            backdropFilter: 'blur(8px)',
                        }}>
                            📞 Jetzt anrufen
                        </a>
                    </motion.div>
                </div>

                {/* animated scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                        position: 'absolute', bottom: '2rem', left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'rgba(255,255,255,0.5)', fontSize: '1.5rem',
                        cursor: 'default',
                    }}
                >
                    ↓
                </motion.div>
            </section>

            {/* ── STATS ─────────────────────────────────────────────────────── */}
            <section style={{ background: 'var(--accent-primary)', padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {stats.map((s, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                                    <Counter end={s.value} suffix={s.suffix} />
                                </div>
                                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{s.label}</div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RISK SECTION ──────────────────────────────────────────────── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                Warum handeln?
                            </span>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                                Schimmel unterschätzen ist ein teurer Fehler
                            </h2>
                        </div>
                    </Reveal>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {risks.map((r, i) => (
                            <Reveal key={i} delay={i * 0.15}>
                                <motion.div
                                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                                    style={{
                                        background: 'var(--bg-primary)',
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        borderLeft: '4px solid var(--accent-primary)',
                                        height: '100%',
                                        cursor: 'default',
                                        transition: 'box-shadow 0.3s',
                                    }}
                                >
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{r.icon}</div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-secondary)' }}>{r.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.97rem' }}>{r.desc}</p>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MAIN CONTENT + SIDEBAR ────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* LEFT — main text */}
                        <div>
                            <Reveal>
                                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>
                                    Schimmel- und Feuchtigkeitsprobleme professionell begutachtet
                                </h2>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Schimmel in Immobilien ist nicht nur optisch störend, sondern kann erhebliche Gesundheitsrisiken bergen
                                    und den Immobilienwert stark mindern. Ein professionelles Schimmelgutachten klärt die Ursache,
                                    das Ausmaß und die notwendigen Sanierungsmaßnahmen.
                                </p>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    Unsere Bauschadenbewerter (DIA) erstellen gerichtsverwertbare Gutachten und helfen dabei,
                                    Streitigkeiten zwischen Mietern und Vermietern objektiv zu klären.
                                </p>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                                    {[
                                        'Ursachenanalyse (Baumangel vs. Nutzerfehler)',
                                        'Schadensausmaß und vollständige Dokumentation',
                                        'Empfehlung konkreter Sanierungsmaßnahmen',
                                        'Kostenermittlung für die Beseitigung',
                                        'Gerichtsverwertbares Sachverständigengutachten',
                                        'Klärung bei Mieter-Vermieter-Streitigkeiten',
                                        'Laboranalyse zur Schimmelartbestimmung',
                                        'Kontrolle nach abgeschlossener Sanierung',
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.07, duration: 0.4 }}
                                            style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                                        >
                                            <span style={{ color: 'var(--accent-primary)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.97rem' }}>{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>

                        {/* RIGHT — sticky contact card */}
                        <Reveal delay={0.2}>
                            <div style={{
                                position: 'sticky', top: '120px',
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '20px',
                                padding: '2.5rem',
                                borderTop: '4px solid var(--accent-primary)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>
                                    Schimmelgutachten anfragen
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
                                    Wir begutachten kurzfristig – auch am Wochenende. <br />
                                    Erste Einschätzung kostenlos.
                                </p>
                                <ContactForm />
                                <div style={{ marginTop: '1.5rem', padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: '10px' }}>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                                        📍 Katharinenstraße 111, 49078 Osnabrück<br />
                                        ✉️ osnabrueck@lasarz.com<br />
                                        📞 +49 (0) 541 - 600 99 220
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ─────────────────────────────────────────────── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                Leistungsumfang
                            </span>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                                Was unser Gutachten umfasst
                            </h2>
                        </div>
                    </Reveal>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {services.map((s, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                                    style={{
                                        background: 'var(--bg-primary)',
                                        border: '1.5px solid var(--border-color)',
                                        borderRadius: '14px',
                                        padding: '1.75rem',
                                        height: '100%',
                                        cursor: 'default',
                                        transition: 'border-color 0.25s',
                                    }}
                                >
                                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '0.6rem', fontSize: '1.05rem', color: 'var(--accent-secondary)' }}>{s.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.6 }}>{s.desc}</p>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS STEPS ─────────────────────────────────────────────── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                Ablauf
                            </span>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                                Von der Anfrage zum fertigen Gutachten
                            </h2>
                        </div>
                    </Reveal>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', position: 'relative' }}>
                        {steps.map((s, i) => (
                            <Reveal key={i} delay={i * 0.15}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    style={{
                                        textAlign: 'center',
                                        padding: '2.5rem 1.5rem',
                                        borderRadius: '16px',
                                        background: 'var(--bg-secondary)',
                                        height: '100%',
                                        border: '1.5px solid var(--border-color)',
                                        cursor: 'default',
                                    }}
                                >
                                    <div style={{
                                        width: '56px', height: '56px',
                                        borderRadius: '50%',
                                        background: 'var(--accent-primary)',
                                        color: '#fff',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        fontSize: '1.1rem', fontWeight: 800,
                                    }}>
                                        {s.step}
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-secondary)' }}>{s.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.7 }}>{s.desc}</p>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────── */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '780px', margin: '0 auto' }}>
                        <Reveal>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                    FAQ
                                </span>
                                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                                    Häufig gestellte Fragen
                                </h2>
                            </div>
                        </Reveal>
                        <div style={{ background: 'var(--bg-primary)', borderRadius: '16px', padding: '1rem 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                            {faqs.map((faq, i) => (
                                <Reveal key={i} delay={i * 0.08}>
                                    <FaqItem q={faq.q} a={faq.a} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ────────────────────────────────────────────────── */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, var(--accent-secondary), #0d3a52)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute', top: '-30%', right: '-10%',
                        width: '60vw', height: '60vw',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '50%', pointerEvents: 'none',
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <Reveal>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem', fontWeight: 800 }}>
                            Schimmel in Ihrer Immobilie?
                        </h2>
                        <p style={{ opacity: 0.85, marginBottom: '2.5rem', fontSize: '1.1rem', color: '#fff', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
                            Klärung durch unabhängige, zertifizierte Sachverständige. Erste Einschätzung kostenlos.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Link href="/kontakt" className="btn" style={{
                                    backgroundColor: 'var(--accent-primary)',
                                    color: '#fff',
                                    padding: '1.1rem 2.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontWeight: 700,
                                    fontSize: '1.05rem',
                                    boxShadow: '0 8px 25px rgba(26,117,141,0.5)',
                                    display: 'inline-block',
                                }}>
                                    Jetzt Kontakt aufnehmen
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <a href="tel:+4954160099220" className="btn" style={{
                                    background: 'rgba(255,255,255,0.13)',
                                    color: '#fff',
                                    border: '1.5px solid rgba(255,255,255,0.3)',
                                    padding: '1.1rem 2.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '1.05rem',
                                    display: 'inline-block',
                                }}>
                                    📞 +49 (0) 541 - 600 99 220
                                </a>
                            </motion.div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
