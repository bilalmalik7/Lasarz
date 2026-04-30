'use client';

import { useState } from 'react';

export default function ImmobilienCalculator() {
    // State for form inputs
    const [propertyType, setPropertyType] = useState('');
    const [size, setSize] = useState('');
    const [condition, setCondition] = useState('');
    const [yearBuilt, setYearBuilt] = useState('');
    const [email, setEmail] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isCalculating, setIsCalculating] = useState(false);

    // Property types options
    const propertyTypes = [
        { value: 'house', label: 'Haus' },
        { value: 'apartment', label: 'Wohnung' },
        { value: 'townhouse', label: 'Reihenhaus' },
        { value: 'duplex', label: 'Duplex' },
        { value: 'studio', label: 'Studio' },
        { value: 'garage', label: 'Garage' }
    ];

    // Condition options
    const conditions = [
        { value: 'excellent', label: 'Sehr gut' },
        { value: 'good', label: 'Gut' },
        { value: 'average', label: 'Durchschnittlich' },
        { value: 'fair', label: 'Mäßig' },
        { value: 'poor', label: 'Schlecht' }
    ];

    // Validation function
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setIsValidEmail(false);
            return;
        }
        
        setIsValidEmail(true);
        setIsCalculating(true);
        
        // Simulate calculation delay
        setTimeout(() => {
            setIsCalculating(false);
            setShowResult(true);
        }, 1500);
    };

    // Calculate property value
    const calculateValue = () => {
        // Base values for Osnabrück area
        let baseValuePerSqM = 0;
        
        // Set base value based on property type
        switch(propertyType) {
            case 'house':
                baseValuePerSqM = 2500; // € per sqm for houses
                break;
            case 'apartment':
                baseValuePerSqM = 2000; // € per sqm for apartments
                break;
            case 'townhouse':
                baseValuePerSqM = 2300; // € per sqm for townhouses
                break;
            case 'duplex':
                baseValuePerSqM = 2200; // € per sqm for duplexes
                break;
            case 'studio':
                baseValuePerSqM = 1800; // € per sqm for studios
                break;
            case 'garage':
                baseValuePerSqM = 1200; // € per sqm for garages
                break;
            default:
                baseValuePerSqM = 2000;
        }

        // Adjust for condition
        let conditionMultiplier = 1;
        switch(condition) {
            case 'excellent':
                conditionMultiplier = 1.2;
                break;
            case 'good':
                conditionMultiplier = 1.1;
                break;
            case 'average':
                conditionMultiplier = 1.0;
                break;
            case 'fair':
                conditionMultiplier = 0.9;
                break;
            case 'poor':
                conditionMultiplier = 0.8;
                break;
            default:
                conditionMultiplier = 1.0;
        }

        // Adjust for year built
        let yearMultiplier = 1;
        const currentYear = new Date().getFullYear();
        const builtYear = parseInt(yearBuilt) || currentYear;
        
        if (builtYear >= currentYear - 5) {
            yearMultiplier = 1.1; // Newer buildings
        } else if (builtYear >= currentYear - 20) {
            yearMultiplier = 1.0; // Average age
        } else if (builtYear >= currentYear - 40) {
            yearMultiplier = 0.9; // Older buildings
        } else {
            yearMultiplier = 0.8; // Very old buildings
        }

        // Calculate final value
        const sizeNum = parseFloat(size) || 0;
        const calculatedValue = Math.round((baseValuePerSqM * sizeNum * conditionMultiplier * yearMultiplier) / 1000) * 1000;
        const minValue = Math.round(calculatedValue * 0.85);
        const maxValue = Math.round(calculatedValue * 1.15);
        
        return { minValue, maxValue, calculatedValue };
    };

    // Get result data
    const resultData = showResult ? calculateValue() : null;

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)' }}>
            {/* Banner/Title Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Immobilienwert Rechner</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Berechnen Sie den aktuellen Marktwert Ihres Hauses oder Ihrer Wohnung in Osnabrück mit unserem kostenlosen Rechner.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
                        
                        {/* Left Column - Calculator Form */}
                        <div>
                            <div className="glass-card" style={{ marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-secondary)' }}>Immobilienwert berechnen</h2>
                                
                                <form onSubmit={handleSubmit}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                                        {/* Property Type */}
                                        <div>
                                            <label htmlFor="propertyType" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                                                Art der Immobilie
                                            </label>
                                            <select
                                                id="propertyType"
                                                value={propertyType}
                                                onChange={(e) => setPropertyType(e.target.value)}
                                                className="form-input"
                                                required
                                                style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                            >
                                                <option value="">Bitte wählen Sie...</option>
                                                {propertyTypes.map(type => (
                                                    <option key={type.value} value={type.value}>{type.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Size */}
                                        <div>
                                            <label htmlFor="size" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                                                Größe (m²)
                                            </label>
                                            <input
                                                type="number"
                                                id="size"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                                placeholder="z.B. 120"
                                                className="form-input"
                                                required
                                                min="1"
                                                style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                            />
                                        </div>

                                        {/* Condition */}
                                        <div>
                                            <label htmlFor="condition" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                                                Zustand
                                            </label>
                                            <select
                                                id="condition"
                                                value={condition}
                                                onChange={(e) => setCondition(e.target.value)}
                                                className="form-input"
                                                required
                                                style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                            >
                                                <option value="">Bitte wählen Sie...</option>
                                                {conditions.map(cond => (
                                                    <option key={cond.value} value={cond.value}>{cond.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Year Built */}
                                        <div>
                                            <label htmlFor="yearBuilt" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                                                Baujahr
                                            </label>
                                            <input
                                                type="number"
                                                id="yearBuilt"
                                                value={yearBuilt}
                                                onChange={(e) => setYearBuilt(e.target.value)}
                                                placeholder="z.B. 2005"
                                                className="form-input"
                                                required
                                                min="1800"
                                                max={new Date().getFullYear()}
                                                style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                            />
                                        </div>

                                        {/* Email for Result */}
                                        <div>
                                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                                                E-Mail Adresse
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setIsValidEmail(true);
                                                }}
                                                placeholder="ihre@email.de"
                                                className="form-input"
                                                required
                                                style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                            />
                                            {!isValidEmail && (
                                                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    Bitte geben Sie eine gültige E-Mail Adresse ein.
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ padding: '1rem 1.5rem', width: '100%', marginTop: '1rem' }}
                                            disabled={isCalculating}
                                        >
                                            {isCalculating ? 'Berechne Wert...' : 'Wert berechnen'}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="glass-card">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Wie funktioniert der Rechner?</h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>1.</span> Geben Sie Ihre Immobilienangaben ein
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>2.</span> Geben Sie Ihre E-Mail-Adresse ein
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>3.</span> Erhalten Sie einen genauen Wertbereich
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>4.</span> Wir bieten Ihnen eine kostenlose Beratung an
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Results */}
                        <div>
                            <div className="glass-card">
                                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-secondary)' }}>Ihr Ergebnis</h2>
                                
                                {!showResult ? (
                                    <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)' }}>
                                        <div style={{ 
                                            width: '100px', 
                                            height: '100px', 
                                            margin: '0 auto 1.5rem', 
                                            backgroundColor: 'var(--bg-secondary)', 
                                            borderRadius: '50%', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center' 
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                            </svg>
                                        </div>
                                        <p>Geben Sie Ihre Angaben ein und klicken Sie auf "Wert berechnen", um Ihren Immobilienwert zu erhalten.</p>
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ 
                                            backgroundColor: 'rgba(26, 117, 141, 0.1)', 
                                            borderRadius: '12px', 
                                            padding: '2rem', 
                                            marginBottom: '2rem',
                                            border: '1px solid rgba(26, 117, 141, 0.2)'
                                        }}>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Ihr Immobilienwert</h3>
                                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                                                {resultData?.calculatedValue.toLocaleString('de-DE')} €
                                            </div>
                                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                                Dieser Wert liegt im Bereich von:<br />
                                                <strong>{resultData?.minValue.toLocaleString('de-DE')} € - {resultData?.maxValue.toLocaleString('de-DE')} €</strong>
                                            </p>
                                        </div>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Was bedeutet das?</h3>
                                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                                Der errechnete Wert berücksichtigt die aktuelle Marktlage in Osnabrück sowie Ihre Immobilienangaben. 
                                                Die genaue Bewertung kann variieren je nach Lage, Ausstattung und besonderen Merkmalen Ihrer Immobilie.
                                            </p>
                                            <p style={{ color: 'var(--text-secondary)' }}>
                                                Für eine detaillierte Bewertung und genauere Angaben bieten wir Ihnen gerne eine kostenlose Beratung an.
                                            </p>
                                        </div>

                                        <div style={{ 
                                            backgroundColor: 'rgba(37, 211, 102, 0.1)', 
                                            borderRadius: '12px', 
                                            padding: '2rem', 
                                            border: '1px solid rgba(37, 211, 102, 0.2)',
                                            marginBottom: '2rem'
                                        }}>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Kostenlose Beratung</h3>
                                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                                Haben Sie Fragen zur Immobilienbewertung? Wir bieten Ihnen eine kostenlose Erstberatung an. 
                                                Unser Experte steht Ihnen gerne zur Verfügung.
                                            </p>
                                            <button 
                                                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                                                className="btn btn-primary"
                                                style={{ padding: '0.75rem 1.5rem', width: '100%' }}
                                            >
                                                Jetzt Termin vereinbaren
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="glass-card" style={{ marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Warum unser Rechner?</h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>
                                        <span>Basierend auf aktuellen Marktdaten aus Osnabrück</span>
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>
                                        <span>Individuell angepasste Werte basierend auf Zustand und Baujahr</span>
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>
                                        <span>Kostenlose Beratung für detaillierte Bewertung</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}