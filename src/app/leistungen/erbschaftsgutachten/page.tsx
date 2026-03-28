'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ end, suffix = '', prefix = '', duration = 2.2 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
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
    return <span ref={ref}>{prefix}{count.toLocaleString('de-DE')}{suffix}</span>;
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

// ── FAQ accordion ────────────────────────────────────────────────────────────
function FAQ({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <button onClick={() => setOpen(!open)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.4rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem',
            }}>
                <span style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{q}</span>
                <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}
                    style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', flexShrink: 0, lineHeight: 1 }}>+</motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div key="faq" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingBottom: '1.4rem', fontSize: '0.97rem' }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Mini contact form ────────────────────────────────────────────────────────
function ContactForm() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', info: '' });
    const input: React.CSSProperties = {
        width: '100%', padding: '0.85rem 1rem', borderRadius: '8px',
        border: '1.5px solid var(--border-color)', background: 'var(--bg-primary)',
        color: 'var(--text-primary)', fontSize: '0.97rem', outline: 'none',
    };

    if (sent) return (
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Anfrage erhalten!</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Wir melden uns innerhalb von 24 Stunden.</p>
        </motion.div>
    );

    return (
        <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                <input style={input} placeholder="Ihr Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input style={input} placeholder="Telefon *" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <input style={input} placeholder="E-Mail" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <textarea style={{ ...input, minHeight: '110px', resize: 'vertical' }}
                placeholder="Kurze Beschreibung der Immobilie & Ihres Anliegens *"
                required value={form.info} onChange={e => setForm({ ...form, info: e.target.value })} />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                className="btn btn-primary" style={{ padding: '1rem', fontSize: '1rem', borderRadius: '8px', justifyContent: 'center' }}>
                Kostenlos anfragen →
            </motion.button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>🔒 Vertraulich & unverbindlich</p>
        </form>
    );
}

// ── Progress bar ─────────────────────────────────────────────────────────────
function ProgressBar({ label, value }: { label: string; value: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <div ref={ref} style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{label}</span>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{value}%</span>
            </div>
            <div style={{ height: '6px', background: 'var(--border-color)', borderRadius: '100px', overflow: 'hidden' }}>
                <motion.div initial={{ width: 0 }} animate={inView ? { width: `${value}%` } : {}}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: '100%', background: 'var(--accent-primary)', borderRadius: '100px' }} />
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function ErbschaftsgutachtenPage() {

    const steps = [
        { step: '01', icon: '📞', title: 'Kostenlose Erstberatung', desc: 'Schildern Sie uns telefonisch oder per Formular Ihren Fall. Wir erklären, welches Gutachten Sie brauchen und klären offene Fragen.' },
        { step: '02', icon: '📁', title: 'Unterlagenprüfung', desc: 'Wir sichten vorhandene Unterlagen – Grundbuchauszug, Baupläne, Mietverträge – und fordern fehlende Dokumente beim Amtsgericht an.' },
        { step: '03', icon: '🏠', title: 'Ortsbegehung', desc: 'Der Sachverständige begutachtet die Immobilie vor Ort. Zustand, Lage, Ausstattung und Besonderheiten werden erfasst und dokumentiert.' },
        { step: '04', icon: '📊', title: 'Wertermittlung', desc: 'Mit Hilfe geprüfter Markt- und Vergleichsdaten wird der Verkehrswert nach §194 BauGB ermittelt – nach Sachwert-, Ertragswert- oder Vergleichswertverfahren.' },
        { step: '05', icon: '📋', title: 'Fertiges Gutachten', desc: 'Sie erhalten ein gebundenes, gerichtsverwertbares Gutachten mit ca. 40–80 Seiten Dokumentation – geeignet für Finanzamt, Nachlassgericht und Erbauseinandersetzung.' },
    ];

    const useCases = [
        { icon: '🏛️', title: 'Erbschaftssteuer', desc: 'Das Finanzamt setzt den Wert häufig zu hoch an. Ein unabhängiges Gutachten kann die Steuerlast signifikant senken – oft um 20–40 %.' },
        { icon: '⚖️', title: 'Erbauseinandersetzung', desc: 'Wenn mehrere Erben beteiligt sind, schafft ein neutrales Gutachten die gemeinsame Grundlage für eine faire Aufteilung ohne Streit.' },
        { icon: '💸', title: 'Pflichtteilsberechnung', desc: 'Pflichtteilsansprüche basieren auf dem Nachlasswert. Unser Gutachten stellt sicher, dass der Wertansatz fair und rechtssicher ist.' },
        { icon: '🔄', title: 'Verkauf aus dem Nachlass', desc: 'Bevor die geerbte Immobilie verkauft wird: ein Gutachten schützt vor Unterpreisverkäufen und ermöglicht selbstbewusstes Verhandeln.' },
        { icon: '🏠', title: 'Selbst bewohnen', desc: 'Wenn ein Erbe die Immobilie übernimmt, muss der Wert als Ausgleichszahlung gegenüber den Miterben festgestellt werden.' },
        { icon: '📑', title: 'Schenkung & Vorwegerbfolge', desc: 'Auch bei Schenkungen zu Lebzeiten wird ein Wertgutachten benötigt, um steuerliche Freibeträge optimal zu nutzen.' },
    ];

    const faqs = [
        { q: 'Wann muss ich ein Gutachten beim Finanzamt einreichen?', a: 'Das Finanzamt ermittelt den Grundbesitzwert nach eigenen Maßstäben, die oft über dem Marktwert liegen. Als Erbe oder Beschenkter haben Sie das Recht, durch ein Gegengutachten eines öffentlich bestellten Sachverständigen den tatsächlichen Wert nachzuweisen. Dies ist in §198 BewG gesetzlich verankert.' },
        { q: 'Wie lange dauert die Erstellung eines Erbschaftsgutachtens?', a: 'Je nach Umfang der Unterlagen und Objektart dauert die Erstellung in der Regel 2–4 Wochen ab der Ortsbegehung. Für einfachere Objekte (z.B. Eigentumswohnungen) sind auch klare Zeitrahmen von 10–14 Werktagen möglich.' },
        { q: 'Was kostet ein Erbschaftsgutachten?', a: 'Die Kosten richten sich nach Objektart, Lage und Umfang des Gutachtens. Für ein vollständiges Verkehrswertgutachten beginnen die Kosten typischerweise bei 1.200 €. Diese Kosten sind als Nachlassverbindlichkeiten steuerlich absetzbar. Während ein günstiges Gutachten die richtige Steuer spart, amortisieren sich die Kosten meist mehrfach.' },
        { q: 'Erkennt das Finanzamt Ihr Gutachten an?', a: 'Ja. Als öffentlich bestellte und vereidigte Sachverständige (§36 GewO) erstellen wir Gutachten, die von Finanzämtern, Nachlassgerichten und ordentlichen Gerichten bundesweit anerkannt werden.' },
        { q: 'Kann ich das Gutachten für mehrere Erben nutzen?', a: 'Absolut. Das Gutachten ist für alle Miterben der Erbengemeinschaft verwendbar – sowohl gegenüber dem Finanzamt als auch für die interne Auseinandersetzung und bei etwaigen Gerichtsverfahren.' },
    ];

    const savings = [
        { type: 'Einfamilienhaus', wert: '420.000 €', finanzamtAnsatz: '510.000 €', gutachtenWert: '420.000 €', ersparnis: '~13.500 €' },
        { type: 'Mehrfamilienhaus', wert: '1.200.000 €', finanzamtAnsatz: '1.450.000 €', gutachtenWert: '1.200.000 €', ersparnis: '~37.500 €' },
        { type: 'Eigentumswohnung', wert: '280.000 €', finanzamtAnsatz: '320.000 €', gutachtenWert: '280.000 €', ersparnis: '~6.000 €' },
    ];

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section style={{
                position: 'relative', overflow: 'hidden',
                background: 'linear-gradient(145deg, #0e2d42 0%, #0a1f2e 60%, #071522 100%)',
                paddingTop: '140px', paddingBottom: '100px',
            }}>
                {/* animated particles / orbs */}
                {[...Array(3)].map((_, i) => (
                    <motion.div key={i}
                        animate={{ scale: [1, 1.25 + i * 0.1, 1], opacity: [0.12, 0.22 + i * 0.05, 0.12] }}
                        transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 2 }}
                        style={{
                            position: 'absolute',
                            top: i === 0 ? '5%' : i === 1 ? '50%' : '70%',
                            left: i === 0 ? '70%' : i === 1 ? '80%' : '-5%',
                            width: `${40 - i * 8}vw`, height: `${40 - i * 8}vw`,
                            background: 'radial-gradient(circle, rgba(26,117,141,0.6) 0%, transparent 70%)',
                            borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
                        }} />
                ))}

                {/* floating legal paragraph decorations */}
                {['§194 BauGB', '§198 BewG', 'DIA', 'BVS'].map((t, i) => (
                    <motion.div key={t}
                        animate={{ y: [0, -10, 0], opacity: [0.12, 0.2, 0.12] }}
                        transition={{ duration: 5 + i, repeat: Infinity, delay: i * 1.5 }}
                        style={{
                            position: 'absolute', zIndex: 1, pointerEvents: 'none',
                            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px',
                            color: 'rgba(26,117,141,0.6)',
                            top: `${15 + i * 18}%`,
                            right: `${5 + i * 4}%`,
                        }}>{t}</motion.div>
                ))}

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                        <div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
                                style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center',
                                    background: 'rgba(26,117,141,0.18)', border: '1px solid rgba(26,117,141,0.35)',
                                    borderRadius: '100px', padding: '0.45rem 1.2rem', marginBottom: '1.8rem' }}>
                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 8px #f59e0b' }} />
                                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.83rem', fontWeight: 600, letterSpacing: '1px' }}>Leistungen · Steuern sparen</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                                style={{ fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', color: '#fff', fontWeight: 800,
                                    lineHeight: 1.12, marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
                                🏛️ Erbschaftsgutachten –<br />
                                <span style={{ color: 'var(--accent-primary)' }}>Weniger Steuern,</span><br />
                                mehr Sicherheit.
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                                style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', lineHeight: 1.75,
                                    marginBottom: '2.5rem', maxWidth: '530px' }}>
                                Geerbte Immobilie? Das Finanzamt bewertet häufig zu hoch. Mit einem
                                unabhängigen Sachverständigengutachten nach <strong style={{ color: '#fff' }}>§198 BewG</strong> können
                                Sie den wahren Marktwert durchsetzen – und oft tausende Euro Steuern sparen.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3 }}
                                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                                <Link href="/kontakt" className="btn btn-primary" style={{
                                    padding: '1rem 2.2rem', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '1rem',
                                    boxShadow: '0 12px 35px rgba(26,117,141,0.45)' }}>
                                    Kostenlos beraten lassen
                                </Link>
                                <a href="tel:+4954160099220" className="btn" style={{
                                    padding: '1rem 2.2rem', borderRadius: 'var(--radius-full)', fontSize: '1rem',
                                    background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}>
                                    📞 +49 541 600 99 220
                                </a>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                                style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                {['✓ §198 BewG anerkannt', '✓ Finanzamt-geeignet', '✓ DIA zertifiziert', '✓ Gerichtsverwertbar'].map(t => (
                                    <span key={t} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{t}</span>
                                ))}
                            </motion.div>
                        </div>

                        {/* right — savings highlight card */}
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                            <div style={{
                                background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.12)', borderRadius: '24px', padding: '2.5rem',
                            }}>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.75rem', fontWeight: 700 }}>
                                    ⚡ Typische Steuerersparnis durch Gegengutachten
                                </h3>
                                {savings.map((s) => (
                                    <div key={s.type} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                        <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.75rem', fontSize: '0.95rem' }}>{s.type}</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                            <div>
                                                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Finanzamt-Ansatz</div>
                                                <div style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.9rem' }}>{s.finanzamtAnsatz}</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Gutachtenwert</div>
                                                <div style={{ color: '#22c55e', fontWeight: 600, fontSize: '0.9rem' }}>{s.gutachtenWert}</div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '0.6rem', background: 'rgba(34,197,94,0.15)', borderRadius: '8px',
                                            padding: '0.45rem 0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <span style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.88rem' }}>💰 Ersparnis: {s.ersparnis}</span>
                                        </div>
                                    </div>
                                ))}
                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                                    *Beispielrechnungen bei Steuerklasse I (Kinder), 19 % Erbschaftsteuersatz
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ─────────────────────────────────────────────────── */}
            <section style={{ background: 'var(--accent-primary)', padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {[
                            { end: 800, suffix: '+', label: 'Erbschaftsgutachten' },
                            { end: 98, suffix: '%', label: 'Finanzamt-Anerkennung' },
                            { end: 25, suffix: '  %', label: 'Ø Steuerersparnis' },
                            { end: 14, suffix: ' T.', label: 'Ø Lieferzeit' },
                        ].map((s, i) => (
                            <R key={i} delay={i * 0.1}>
                                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                                    <Counter end={s.end} suffix={s.suffix} />
                                </div>
                                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', marginTop: '0.45rem' }}>{s.label}</div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── USE CASES ─────────────────────────────────────────────────── */}
            <section style={{ padding: '85px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <R><div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Wann brauchen Sie ein Gutachten?</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                            6 Anlässe für ein Erbschaftsgutachten
                        </h2>
                    </div></R>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {useCases.map((u, i) => (
                            <R key={i} delay={i * 0.08}>
                                <motion.div whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                    style={{ background: 'var(--bg-primary)', border: '1.5px solid var(--border-color)',
                                        borderRadius: '16px', padding: '1.75rem', height: '100%', cursor: 'default',
                                        transition: 'box-shadow 0.3s' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{u.icon}</div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '0.6rem', color: 'var(--accent-secondary)', fontSize: '1.05rem' }}>{u.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.65 }}>{u.desc}</p>
                                </motion.div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TAX SAVING VISUALISATION ──────────────────────────────────── */}
            <section style={{ padding: '85px 0', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <R>
                                <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Steuern sparen</span>
                                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginTop: '0.75rem', marginBottom: '1.2rem', color: 'var(--accent-secondary)' }}>
                                    Warum das Finanzamt oft zu viel verlangt
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.97rem' }}>
                                    Das Finanzamt bewertet Immobilien im Erbfall nach dem <strong>Bewertungsgesetz (§157 ff. BewG)</strong> –
                                    mit pauschalen Formeln, die häufig über dem echten Marktwert liegen. Als Erbe haben Sie nach
                                    <strong> §198 BewG</strong> das Recht, den niedrigeren Verkehrswert mit einem Sachverständigengutachten
                                    nachzuweisen.
                                </p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.97rem' }}>
                                    Je nach Bundesland und Steuerklasse kann dies zu einer Ersparnis von mehreren tausend Euro führen –
                                    und die Kosten des Gutachtens amortisieren sich dabei meist mehrfach.
                                </p>
                            </R>
                        </div>
                        <R delay={0.2}>
                            <div style={{ background: 'var(--bg-secondary)', borderRadius: '20px', padding: '2.5rem', border: '1.5px solid var(--border-color)' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.75rem', color: 'var(--accent-secondary)' }}>
                                    Wie hoch ist Ihre Ersparnis? (Richtwerte)
                                </h3>
                                <ProgressBar label="Einfamilienhaus 400.000 €" value={82} />
                                <ProgressBar label="Mehrfamilienhaus 1 Mio. €" value={91} />
                                <ProgressBar label="Gewerbeimmobilie" value={88} />
                                <ProgressBar label="Eigentumswohnung" value={74} />
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                                    * Prozentualer Anteil der Fälle, in denen Gutachten eine Steuerersparnis erzielte
                                </p>
                            </div>
                        </R>
                    </div>
                </div>
            </section>

            {/* ── PROCESS STEPS ─────────────────────────────────────────────── */}
            <section style={{ padding: '85px 0', backgroundColor: 'var(--bg-secondary)', overflowX: 'hidden' }}>
                <div className="container">
                    <R><div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Ablauf</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                            Vom Erstgespräch zum fertigen Gutachten
                        </h2>
                    </div></R>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '760px', margin: '0 auto' }}>
                        {steps.map((s, i) => (
                            <R key={i} delay={i * 0.12} y={30}>
                                <motion.div whileHover={{ x: 6 }}
                                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                                        background: 'var(--bg-primary)', borderRadius: '16px', padding: '1.75rem',
                                        border: '1.5px solid var(--border-color)', cursor: 'default' }}>
                                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--accent-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0, color: '#fff', fontWeight: 800, fontSize: '0.9rem' }}>
                                        {s.step}
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                                            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--accent-secondary)' }}>{s.title}</h3>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.7 }}>{s.desc}</p>
                                    </div>
                                </motion.div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MAIN CONTENT + CONTACT SIDEBAR ────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,360px), 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <R>
                                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>
                                    Inhalt unserer Erbschaftsgutachten
                                </h2>
                            </R>
                            <R delay={0.1}>
                                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Unser Erbschaftsgutachten ist ein vollständiges Verkehrswertgutachten nach §194 BauGB – anerkannt vom
                                    Finanzamt, Nachlassgericht und ordentlichen Gerichten. Es umfasst alle Angaben, die zur
                                    steuerlichen und rechtlichen Auseinandersetzung benötigt werden.
                                </p>
                            </R>
                            <R delay={0.15}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2.5rem' }}>
                                    {[
                                        'Vollständige Objektbeschreibung', 'Fotodokumentation',
                                        'Lagebeschreibung & Marktanalyse', 'Bodenrichtwertauswertung',
                                        'Wertermittlung nach anerkannten Verfahren', 'Vergleichsobjekte & Kaufpreissammlung',
                                        'Zertifizierte Sachverständigensignatur', 'Geeignet nach §198 BewG',
                                        'Ca. 40–80 Seiten Dokumentation', 'Bundesweit anerkannt',
                                    ].map((item, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.06, duration: 0.4 }}
                                            style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
                                                background: 'var(--bg-secondary)', borderRadius: '10px', padding: '0.75rem' }}>
                                            <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>✓</span>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.4 }}>{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </R>

                            {/* Legal notice */}
                            <R delay={0.25}>
                                <div style={{ background: 'rgba(26,117,141,0.08)', border: '1.5px solid rgba(26,117,141,0.25)',
                                    borderRadius: '12px', padding: '1.5rem' }}>
                                    <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                        <strong style={{ color: 'var(--accent-primary)' }}>§198 BewG</strong> – Nachweis des niedrigeren gemeinen Werts:
                                        "Ist der gemeine Wert des Grundbesitzes niedriger als der nach diesem Abschnitt ermittelte Wert,
                                        wird der gemeine Wert berücksichtigt, wenn er durch ein Gutachten des zuständigen Gutachterausschusses
                                        oder eines öffentlich bestellten und vereidigten Sachverständigen nachgewiesen wird."
                                    </p>
                                </div>
                            </R>
                        </div>

                        {/* Sticky contact form */}
                        <R delay={0.2}>
                            <div style={{ position: 'sticky', top: '120px', background: 'var(--bg-secondary)', borderRadius: '20px',
                                padding: '2.5rem', borderTop: '4px solid var(--accent-primary)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>
                                    Gutachten anfragen
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.65, fontSize: '0.95rem' }}>
                                    Erste Einschätzung kostenlos und unverbindlich.<br />
                                    Antwort in der Regel innerhalb von 24 Stunden.
                                </p>
                                <ContactForm />
                                <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '10px' }}>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                        📍 Katharinenstraße 111, 49078 Osnabrück<br />
                                        ✉️ osnabrueck@lasarz.com<br />
                                        📞 +49 (0) 541 - 600 99 220
                                    </p>
                                </div>
                            </div>
                        </R>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────── */}
            <section style={{ padding: '85px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <R><div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>FAQ</span>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginTop: '0.75rem', color: 'var(--accent-secondary)' }}>
                                Häufige Fragen zum Erbschaftsgutachten
                            </h2>
                        </div></R>
                        <div style={{ background: 'var(--bg-primary)', borderRadius: '16px', padding: '1rem 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                            {faqs.map((f, i) => (
                                <R key={i} delay={i * 0.07}>
                                    <FAQ q={f.q} a={f.a} />
                                </R>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RELATED SERVICES ──────────────────────────────────────────── */}
            <section style={{ padding: '70px 0', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <R><h2 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '2rem', textAlign: 'center' }}>
                        Weitere relevante Leistungen
                    </h2></R>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                        {[
                            { href: '/leistungen/verkehrswertgutachten', label: '📋 Verkehrswertgutachten' },
                            { href: '/leistungen/erbauseinandersetzung', label: '⚖️ Erbauseinandersetzung' },
                            { href: '/leistungen/steuerliche-bewertung', label: '📊 Steuerliche Bewertung' },
                            { href: '/leistungen/zugewinn', label: '💞 Zugewinnausgleich' },
                        ].map((link) => (
                            <R key={link.href}>
                                <motion.div whileHover={{ y: -4, borderColor: 'var(--accent-primary)' }}>
                                    <Link href={link.href} style={{
                                        display: 'block', padding: '1.25rem 1.5rem',
                                        background: 'var(--bg-secondary)', borderRadius: '12px',
                                        border: '1.5px solid var(--border-color)', color: 'var(--accent-secondary)',
                                        fontWeight: 600, fontSize: '0.97rem', textDecoration: 'none',
                                        transition: 'border-color 0.25s',
                                    }}>
                                        {link.label}
                                        <span style={{ float: 'right', color: 'var(--accent-primary)' }}>→</span>
                                    </Link>
                                </motion.div>
                            </R>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
            <section style={{
                padding: '90px 0', textAlign: 'center',
                background: 'linear-gradient(135deg, var(--accent-secondary), #071a28)',
                position: 'relative', overflow: 'hidden',
            }}>
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', bottom: '-40%', left: '-10%', width: '60vw', height: '60vw',
                        border: '1px solid rgba(255,255,255,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <R>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem', fontWeight: 800 }}>
                            Geerbte Immobilie? Wir helfen.
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.78)', marginBottom: '2.5rem', fontSize: '1.1rem',
                            maxWidth: '540px', margin: '0 auto 2.5rem' }}>
                            Sichern Sie sich Ihre kostenlose Erstberatung – und erfahren Sie, ob ein Gegengutachten
                            in Ihrem Fall sinnvoll ist.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Link href="/kontakt" className="btn" style={{
                                    background: 'var(--accent-primary)', color: '#fff', padding: '1.1rem 2.5rem',
                                    borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '1.05rem',
                                    boxShadow: '0 10px 30px rgba(26,117,141,0.5)', display: 'inline-block' }}>
                                    Jetzt Kontakt aufnehmen
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <a href="tel:+4954160099220" className="btn" style={{
                                    background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
                                    padding: '1.1rem 2.5rem', borderRadius: 'var(--radius-full)', fontSize: '1.05rem', display: 'inline-block' }}>
                                    📞 +49 (0) 541 - 600 99 220
                                </a>
                            </motion.div>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '2rem', fontSize: '0.88rem' }}>
                            📍 Katharinenstraße 111, 49078 Osnabrück · ✉️ osnabrueck@lasarz.com
                        </p>
                    </R>
                </div>
            </section>
        </main>
    );
}
