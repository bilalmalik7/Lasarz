'use client';

import { useState } from 'react';

export function Contact() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        anlass: '',
        gutachten: '',
        typ: '',
        plz: '',
        ort: '',
        flaeche: '',
        baujahr: '',
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        nachricht: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelectOption = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (step === 1 && !formData.anlass) return;
        if (step === 2 && !formData.gutachten) return;
        if (step === 3 && !formData.typ) return;
        if (step === 4 && (!formData.plz || !formData.ort || !formData.flaeche || !formData.baujahr)) return;
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'contact_funnel',
                    data: formData
                })
            });

            if (!response.ok) {
                throw new Error('Fehler beim Senden der Anfrage.');
            }

            setIsSubmitted(true);
            setStep(6);
        } catch (error) {
            console.error('Submission error:', error);
            alert('Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isNextDisabled = () => {
        if (step === 1) return !formData.anlass;
        if (step === 2) return !formData.gutachten;
        if (step === 3) return !formData.typ;
        if (step === 4) return !formData.plz || !formData.ort || !formData.flaeche || !formData.baujahr;
        return false;
    };

    const progressPercent = Math.min(100, Math.round(((step - 1) / 5) * 100));

    // Custom SVGs for option cards
    const icons = {
        // Step 1: Anlass
        erbschaft: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
        ),
        scheidung: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 2v22"/></svg>
        ),
        kauf_verkauf: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m16 16-4-4-4 4"/><path d="m12 12v8"/></svg>
        ),
        steuer: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><rect x="8" y="10" width="2" height="2"/><rect x="14" y="10" width="2" height="2"/><rect x="8" y="14" width="2" height="2"/><rect x="14" y="14" width="2" height="2"/><rect x="8" y="18" width="2" height="2"/><rect x="14" y="18" width="2" height="2"/></svg>
        ),
        sonstiges: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        ),
        // Step 2: Gutachten
        verkehrswert: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="m20 20-3.5-3.5"/></svg>
        ),
        kurzgutachten: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
        ),
        kaufberatung: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3"/></svg>
        ),
        beratung: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        ),
        // Step 3: Typ
        einfamilienhaus: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        ),
        mehrfamilienhaus: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15" y2="18.01"/></svg>
        ),
        eigentumswohnung: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><rect x="8" y="10" width="8" height="4" fill="currentColor" opacity="0.2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15" y2="18.01"/></svg>
        ),
        gewerbe: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 21H2V3l7 4h5l7-4v18z"/><path d="M19 17h1"/><path d="M19 13h1"/><path d="M19 9h1"/><path d="M2 10h12"/><path d="M14 14h3"/><path d="M14 18h3"/></svg>
        ),
        grundstueck: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
        )
    };

    return (
        <section id="kontakt" className="section" style={{ backgroundColor: '#fcfcfc' }}>
            <div className="container">
                <div className="glass-card flex-col md-flex-row" style={{ padding: '0', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>

                    {/* Contact Info (Left Column) */}
                    <div style={{ flex: '1 1 350px', padding: '3rem 2.5rem', background: 'var(--accent-secondary)', color: 'white' }}>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'white' }}>Kontakt & Beratung</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                            Lassen Sie sich kostenlos beraten oder beantragen Sie direkt eine Immobilienbewertung in Osnabrück und der Region.
                        </p>

                        <div className="flex-col gap-sm" style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                <span style={{ fontSize: '1.4rem', color: '#c5a36c' }}>📞</span> 
                                <span>+49 (0) 541 - 600 99 220</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '1.4rem', color: '#c5a36c' }}>✉️</span> 
                                <span>info@lasarz.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '1.4rem', color: '#c5a36c' }}>📍</span> 
                                <span>Katharinenstraße 111, 49078 Osnabrück</span>
                            </div>
                        </div>
                        
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', color: '#c5a36c', marginBottom: '0.75rem' }}>Lieber direkt buchen?</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Buchen Sie Ihren Vor-Ort-Termin oder Ihr Gespräch bequem online.
                            </p>
                            <a 
                                href="#termin-buchen" 
                                className="btn btn-secondary"
                                style={{ 
                                    padding: '0.75rem 1.5rem', 
                                    borderColor: '#c5a36c', 
                                    color: '#c5a36c',
                                    display: 'inline-flex',
                                    fontSize: '0.9rem',
                                    fontWeight: '700'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#c5a36c';
                                    e.currentTarget.style.color = '#122b40';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#c5a36c';
                                }}
                            >
                                Zum Terminplaner
                            </a>
                        </div>
                    </div>

                    {/* Interactive Lead Funnel (Right Column) */}
                    <div style={{ flex: '1 1 500px', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column' }}>
                        
                        {/* Step title & Progress */}
                        {step <= 5 && (
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-primary)' }}>
                                        Schritt {step} von 5
                                    </span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                                        {progressPercent}% abgeschlossen
                                    </span>
                                </div>
                                <div style={{ height: '6px', backgroundColor: '#e9ecef', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
                                    <div 
                                        style={{ 
                                            position: 'absolute', 
                                            top: 0, 
                                            left: 0, 
                                            height: '100%', 
                                            backgroundColor: 'var(--accent-primary)', 
                                            width: `${progressPercent}%`, 
                                            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            borderRadius: '3px'
                                        }}
                                        className="liquid-progress"
                                    />
                                </div>
                            </div>
                        )}

                        {/* STEP 1: ANLASS */}
                        {step === 1 && (
                            <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Was ist der Anlass für Ihre Bewertung?</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Wählen Sie bitte den Hauptgrund aus, damit wir das Gutachten optimal vorbereiten können.</p>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', flex: 1 }}>
                                    {[
                                        { id: 'erbschaft', label: 'Erbschaft / Schenkung', desc: 'Freibeträge & Schenkungsteuer' },
                                        { id: 'scheidung', label: 'Scheidung / Zugewinn', desc: 'Gerichtsverwertbar & Neutral' },
                                        { id: 'kauf_verkauf', label: 'Kauf oder Verkauf', desc: 'Kaufpreisprüfung & Marktpreis' },
                                        { id: 'steuer', label: 'Finanzamt / AfA', desc: 'Nutzungsdauer & Steuererklärung' },
                                        { id: 'sonstiges', label: 'Sonstiges / Sonstige Beratung', desc: 'Individuelle Anliegen' }
                                    ].map(item => {
                                        const isSelected = formData.anlass === item.id;
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => handleSelectOption('anlass', item.id)}
                                                style={{
                                                    border: '2px solid',
                                                    borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-color)',
                                                    borderRadius: 'var(--radius-md)',
                                                    padding: '1.25rem 1rem',
                                                    cursor: 'pointer',
                                                    backgroundColor: isSelected ? 'var(--accent-glow)' : 'white',
                                                    color: isSelected ? 'var(--accent-primary)' : 'inherit',
                                                    transition: 'all 0.25s ease',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                className="hover-lift"
                                            >
                                                <div style={{ color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)', marginBottom: '0.75rem' }}>
                                                    {icons[item.id as keyof typeof icons]}
                                                </div>
                                                <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.label}</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* STEP 2: GUTACHTEN */}
                        {step === 2 && (
                            <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Welche Leistung benötigen Sie voraussichtlich?</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Keine Sorge – wir prüfen im Nachgang nochmals gemeinsam, was für Ihren Fall am besten passt.</p>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', flex: 1 }}>
                                    {[
                                        { id: 'verkehrswert', label: 'Verkehrswertgutachten', desc: 'Offiziell nach § 194 BauGB' },
                                        { id: 'kurzgutachten', label: 'Kurzgutachten', desc: 'Kompakte Wertermittlung' },
                                        { id: 'kaufberatung', label: 'Kaufberatung', desc: 'Kaufpreisprüfung vor Ort' },
                                        { id: 'beratung', label: 'Weiß nicht / Erstberatung', desc: 'Kostenlose Klärung' }
                                    ].map(item => {
                                        const isSelected = formData.gutachten === item.id;
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => handleSelectOption('gutachten', item.id)}
                                                style={{
                                                    border: '2px solid',
                                                    borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-color)',
                                                    borderRadius: 'var(--radius-md)',
                                                    padding: '1.25rem 1rem',
                                                    cursor: 'pointer',
                                                    backgroundColor: isSelected ? 'var(--accent-glow)' : 'white',
                                                    color: isSelected ? 'var(--accent-primary)' : 'inherit',
                                                    transition: 'all 0.25s ease',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                className="hover-lift"
                                            >
                                                <div style={{ color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)', marginBottom: '0.75rem' }}>
                                                    {icons[item.id as keyof typeof icons]}
                                                </div>
                                                <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.label}</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* STEP 3: TYP */}
                        {step === 3 && (
                            <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Um welchen Immobilientyp handelt es sich?</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Die Art der Immobilie bestimmt das Bewertungsverfahren (Sach-, Ertrag- oder Vergleichswertverfahren).</p>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', flex: 1 }}>
                                    {[
                                        { id: 'einfamilienhaus', label: 'Einfamilienhaus / Zweifamilienhaus', desc: 'Freistehend, DHH, Reiheneck' },
                                        { id: 'mehrfamilienhaus', label: 'Mehrfamilienhaus', desc: 'Wohn- & Geschäftshäuser' },
                                        { id: 'eigentumswohnung', label: 'Eigentumswohnung', desc: 'Eigentum in einer WEG' },
                                        { id: 'gewerbe', label: 'Gewerbeimmobilie', desc: 'Büro, Logistik, Praxis' },
                                        { id: 'grundstueck', label: 'Grundstück', desc: 'Bebaut oder unbebaut' }
                                    ].map(item => {
                                        const isSelected = formData.typ === item.id;
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => handleSelectOption('typ', item.id)}
                                                style={{
                                                    border: '2px solid',
                                                    borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-color)',
                                                    borderRadius: 'var(--radius-md)',
                                                    padding: '1.25rem 1rem',
                                                    cursor: 'pointer',
                                                    backgroundColor: isSelected ? 'var(--accent-glow)' : 'white',
                                                    color: isSelected ? 'var(--accent-primary)' : 'inherit',
                                                    transition: 'all 0.25s ease',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                className="hover-lift"
                                            >
                                                <div style={{ color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)', marginBottom: '0.75rem' }}>
                                                    {icons[item.id as keyof typeof icons]}
                                                </div>
                                                <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.label}</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* STEP 4: OBJEKTDATEN */}
                        {step === 4 && (
                            <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Eckdaten der Immobilie</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Ungefähre Angaben sind für ein erstes Orientierungsgespräch völlig ausreichend.</p>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '500px', margin: '0 auto', width: '100%', flex: 1, justifyContent: 'center' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Postleitzahl *</label>
                                            <input 
                                                type="text" 
                                                name="plz" 
                                                placeholder="z. B. 49078" 
                                                value={formData.plz} 
                                                onChange={handleInputChange}
                                                required 
                                                className="form-input" 
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Ort *</label>
                                            <input 
                                                type="text" 
                                                name="ort" 
                                                placeholder="z. B. Osnabrück" 
                                                value={formData.ort} 
                                                onChange={handleInputChange}
                                                required 
                                                className="form-input" 
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Wohnfläche / Nutzfläche (ca. m²) *</label>
                                        <input 
                                            type="number" 
                                            name="flaeche" 
                                            placeholder="z. B. 130" 
                                            value={formData.flaeche} 
                                            onChange={handleInputChange}
                                            required 
                                            className="form-input" 
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Baujahr (ca.) *</label>
                                        <input 
                                            type="number" 
                                            name="baujahr" 
                                            placeholder="z. B. 1995" 
                                            value={formData.baujahr} 
                                            onChange={handleInputChange}
                                            required 
                                            className="form-input" 
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 5: KONTAKTDATEN */}
                        {step === 5 && (
                            <form onSubmit={handleSubmit} className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Wohin dürfen wir Ihr Angebot senden?</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Wir behandeln Ihre Angaben streng vertraulich. Sie erhalten Ihr unverbindliches Angebot in Kürze.</p>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '500px', margin: '0 auto', width: '100%', flex: 1, justifyContent: 'center' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Vorname *</label>
                                            <input 
                                                type="text" 
                                                name="vorname" 
                                                placeholder="Vorname" 
                                                value={formData.vorname} 
                                                onChange={handleInputChange}
                                                required 
                                                className="form-input" 
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Nachname *</label>
                                            <input 
                                                type="text" 
                                                name="nachname" 
                                                placeholder="Nachname" 
                                                value={formData.nachname} 
                                                onChange={handleInputChange}
                                                required 
                                                className="form-input" 
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>E-Mail-Adresse *</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="ihre.mail@beispiel.de" 
                                            value={formData.email} 
                                            onChange={handleInputChange}
                                            required 
                                            className="form-input" 
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Telefonnummer (für Rückfragen) *</label>
                                        <input 
                                            type="tel" 
                                            name="telefon" 
                                            placeholder="z. B. 0170 1234567" 
                                            value={formData.telefon} 
                                            onChange={handleInputChange}
                                            required 
                                            className="form-input" 
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Ergänzende Nachricht (optional)</label>
                                        <textarea 
                                            name="nachricht" 
                                            placeholder="Geben Sie hier eventuelle Besonderheiten der Immobilie an..." 
                                            value={formData.nachricht} 
                                            onChange={handleInputChange}
                                            rows={3} 
                                            className="form-input" 
                                            style={{ resize: 'none' }}
                                        />
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* STEP 6: ERFOLGSMELDUNG */}
                        {step === 6 && (
                            <div className="animate-fade-in text-center" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
                                <div style={{ 
                                    width: '80px', 
                                    height: '80px', 
                                    borderRadius: '50%', 
                                    backgroundColor: 'rgba(37, 211, 102, 0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    color: '#25d366', 
                                    fontSize: '3rem', 
                                    marginBottom: '1.5rem',
                                    border: '2px solid #25d366'
                                }}>
                                    ✓
                                </div>
                                <h3 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Anfrage erfolgreich gesendet!</h3>
                                <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                    Vielen Dank für Ihr Vertrauen, Herr/Frau {formData.nachname}. 
                                    Wir haben Ihre Daten erhalten. Einer unserer Gutachter wird Ihre Anfrage prüfen und sich innerhalb von 24 Stunden telefonisch bei Ihnen melden.
                                </p>
                                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left', width: '100%', maxWidth: '450px', fontSize: '0.9rem', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}>
                                    <strong>Zusammenfassung Ihrer Angaben:</strong>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                        <li>Anlass: {formData.anlass === 'erbschaft' ? 'Erbschaft/Schenkung' : formData.anlass === 'scheidung' ? 'Scheidung/Zugewinn' : formData.anlass === 'kauf_verkauf' ? 'Kauf/Verkauf' : formData.anlass === 'steuer' ? 'Steuern/AfA' : 'Sonstiges'}</li>
                                        <li>Gewünscht: {formData.gutachten === 'verkehrswert' ? 'Verkehrswertgutachten nach § 194 BauGB' : formData.gutachten === 'kurzgutachten' ? 'Kurzgutachten' : formData.gutachten === 'kaufberatung' ? 'Kaufberatung' : 'Erstberatung'}</li>
                                        <li>Objekt: {formData.typ === 'einfamilienhaus' ? 'Haus' : formData.typ === 'mehrfamilienhaus' ? 'Mehrfamilienhaus' : formData.typ === 'eigentumswohnung' ? 'Eigentumswohnung' : formData.typ === 'gewerbe' ? 'Gewerbe' : 'Grundstück'} ({formData.flaeche} m² in {formData.plz} {formData.ort})</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Navigation controls */}
                        {step <= 5 && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                                <div>
                                    {step > 1 && (
                                        <button 
                                            type="button" 
                                            className="btn btn-secondary" 
                                            onClick={handleBack}
                                            style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                                        >
                                            Zurück
                                        </button>
                                    )}
                                </div>
                                <div>
                                    {step < 5 ? (
                                        <button 
                                            type="button" 
                                            className="btn btn-primary" 
                                            onClick={handleNext}
                                            disabled={isNextDisabled()}
                                            style={{ 
                                                padding: '0.6rem 2rem', 
                                                fontSize: '0.9rem',
                                                opacity: isNextDisabled() ? 0.5 : 1,
                                                cursor: isNextDisabled() ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            Weiter
                                        </button>
                                    ) : (
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            disabled={isSubmitting}
                                            onClick={handleSubmit}
                                            style={{ 
                                                padding: '0.6rem 2.5rem', 
                                                fontSize: '0.9rem',
                                                backgroundColor: 'var(--accent-primary)'
                                            }}
                                        >
                                            {isSubmitting ? 'Wird gesendet...' : 'Unverbindlich Senden'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
}

