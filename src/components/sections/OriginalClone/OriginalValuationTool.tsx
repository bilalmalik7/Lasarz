'use client';
import { useState } from 'react';

export function OriginalValuationTool({ compact = false }: { compact?: boolean }) {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleNext = () => {
        if (step === 1 && !selectedType) {
            alert('Bitte wählen Sie eine Immobilienart aus.');
            return;
        }
        setStep(step + 1);
    };

    return (
        <div className="glass-card" style={{
            backgroundColor: 'white',
            padding: compact ? '30px' : '40px',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            margin: compact ? '0' : '0 auto',
            maxWidth: compact ? '100%' : '800px'
        }}>
            {step === 1 && (
                <>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                        Wofür möchten Sie eine <strong>kostenlose Immobilienbewertung</strong> erhalten?
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {/* Haus Options */}
                        <div style={{ flex: '1 1 140px', textAlign: 'center', border: '2px solid', borderColor: selectedType === 'haus' ? 'var(--accent-primary)' : '#e0e0e0', color: selectedType === 'haus' ? 'var(--accent-primary)' : 'inherit', borderRadius: '6px', padding: '2rem 1rem', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: selectedType === 'haus' ? 'rgba(26, 117, 141, 0.05)' : 'white' }}
                            onClick={() => setSelectedType('haus')}
                        >
                            <svg width="50" height="50" viewBox="0 0 500 500" fill="currentColor" style={{ marginBottom: '1rem' }}>
                                <path d="M494.6,227.4L386,140.5V72c0-8.5-3.5-15.1-8-15.1h-27.8c-4.5,0-8,6.8-8,15.1v33.7l-79.1-63.4 c-3.5-2.8-8.2-4.2-13-4.2c-4.7,0-9.4,1.4-13,4.2L5.4,227.4c-7.1,5.7-7.1,14.8,0,20.5L19.3,259c7.1,5.7,18.6,5.7,25.7,0L250.1,95 l205.1,163.9c7.1,5.7,18.6,5.7,25.7,0l13.9-11.1C501.6,242.5,501.6,233,494.6,227.4z" />
                                <path d="M390.5,462h56.1c3.8,0,6.8-3.1,6.8-6.8V276.4c0-3.8-2.8-8-6.1-9.7L253.4,106.3c-3.3-1.6-3.5-1.2-6.8,0.5 L52.8,267c-3.3,1.6-6.1,6.1-6.1,9.7v178.8c0,3.8,3.1,6.8,6.8,6.8h228.2c3.8,0,6.8-3.1,6.8-6.8V304.9c0-3.8,3.1-6.8,6.8-6.8h81.5 c3.8,0,6.8,3.1,6.8,6.8v150.5C383.7,458.9,386.7,462,390.5,462z" />
                            </svg>
                            <div style={{ fontWeight: 600 }}>Haus</div>
                        </div>

                        {/* Wohnung Option */}
                        <div style={{ flex: '1 1 140px', textAlign: 'center', border: '2px solid', borderColor: selectedType === 'wohnung' ? 'var(--accent-primary)' : '#e0e0e0', color: selectedType === 'wohnung' ? 'var(--accent-primary)' : 'inherit', borderRadius: '6px', padding: '2rem 1rem', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: selectedType === 'wohnung' ? 'rgba(26, 117, 141, 0.05)' : 'white' }}
                            onClick={() => setSelectedType('wohnung')}
                        >
                            <svg width="50" height="50" viewBox="0 0 500 500" fill="currentColor" style={{ marginBottom: '1rem' }}>
                                <path d="M469.3,169.6L370.2,103V50.4c0-6.5-3.5-11.5-7.5-11.5h-25.5c-4,0-7.5,5.3-7.5,11.5v25.7l-72.1-48.5 c-3-2.1-7.3-3.2-11.6-3.2c-4.3,0-8.6,1.1-11.9,3.2l-210.9,142c-6.6,4.4-6.6,11.3,0,15.7l12.5,8.6c6.6,4.4,16.9,4.4,23.5,0l187-125.5 l186.9,125.4c6.6,4.4,16.9,4.4,23.5,0l12.5-8.6C475.6,180.9,475.6,173.9,469.3,169.6z" />
                                <path d="M242.7,75.9L81.5,182c-1.5,1-2.5,2.6-2.5,4.3v193.8v113.3c0,3,2.9,5.5,6.6,5.5h321.9c3.6,0,6.6-2.4,6.6-5.5 V380.2V186.3c0-1.7-1-3.3-2.5-4.3L250.8,75.9C248.3,74.4,245,74.4,242.7,75.9z" />
                            </svg>
                            <div style={{ fontWeight: 600 }}>Wohnung</div>
                        </div>

                        {/* Vermietung Option */}
                        <div style={{ flex: '1 1 140px', textAlign: 'center', border: '2px solid', borderColor: selectedType === 'vermietung' ? 'var(--accent-primary)' : '#e0e0e0', color: selectedType === 'vermietung' ? 'var(--accent-primary)' : 'inherit', borderRadius: '6px', padding: '2rem 1rem', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: selectedType === 'vermietung' ? 'rgba(26, 117, 141, 0.05)' : 'white' }}
                            onClick={() => setSelectedType('vermietung')}
                        >
                            <svg width="50" height="50" viewBox="0 0 500 500" fill="currentColor" style={{ marginBottom: '1rem' }}>
                                <path d="M152,90.8c-12,0-21.7-9.7-21.7-21.7V20.7C130.3,8.7,140-1,152-1s21.7,9.7,21.7,21.7v48.4 C173.7,81.1,164,90.8,152,90.8z" />
                                <rect x="155.6" y="216.9" width="50" height="40.3" />
                                <rect x="225.4" y="216.9" width="50" height="40.3" />
                                <rect x="295.5" y="216.9" width="50" height="40.3" />
                            </svg>
                            <div style={{ fontWeight: 600 }}>Vermietung</div>
                        </div>

                        {/* Grundstück Option */}
                        <div style={{ flex: '1 1 140px', textAlign: 'center', border: '2px solid', borderColor: selectedType === 'grundstueck' ? 'var(--accent-primary)' : '#e0e0e0', color: selectedType === 'grundstueck' ? 'var(--accent-primary)' : 'inherit', borderRadius: '6px', padding: '2rem 1rem', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: selectedType === 'grundstueck' ? 'rgba(26, 117, 141, 0.05)' : 'white' }}
                            onClick={() => setSelectedType('grundstueck')}
                        >
                            <svg width="50" height="50" viewBox="0 0 500 500" fill="currentColor" style={{ marginBottom: '1rem' }}>
                                <polygon points="500,380.7 0,380.7 9,370.6 489.1,370.6" />
                                <path d="M359.6,193.2l-49.8-39.8V122c0-3.9-1.6-6.9-3.7-6.9h-12.7c-2.1,0-3.7,3.1-3.7,6.9v15.4l-36.3-29.1 c-1.6-1.3-3.8-1.9-6-1.9c-2.2,0-4.3,0.6-6,1.9l-106.2,84.8c-3.3,2.6-3.3,6.8,0,9.4l6.4,5.1c3.3,2.6,8.5,2.6,11.8,0l94-75.2l94,75.1 c3.3,2.6,8.5,2.6,11.8,0l6.4-5.1C362.8,200.2,362.8,195.8,359.6,193.2z" />
                            </svg>
                            <div style={{ fontWeight: 600 }}>Grundstück</div>
                        </div>
                    </div>
                </>
            )}

            {step === 2 && (
                <div className="animate-fade-in text-center">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Eckdaten Ihrer Immobilie</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Bitte geben Sie einige Eckdaten für Ihre gewählte Objektart an, um die Bewertung fortzusetzen.</p>

                    <form className="flex-col gap-sm" onSubmit={(e) => { e.preventDefault(); setStep(3); }} style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <input type="number" placeholder="Wohnfläche (m²)" className="form-input" required />
                        <input type="number" placeholder="Grundstücksfläche (m²)" className="form-input" required />
                        <input type="number" placeholder="Baujahr" className="form-input" required />
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Weiter zur Adresse</button>
                    </form>
                </div>
            )}

            {step === 3 && (
                <div className="animate-fade-in text-center">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Wo befindet sich die Immobilie?</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Ihre Adresse wird zur präzisen Wertermittlung benötigt.</p>

                    <form className="flex-col gap-sm" onSubmit={(e) => { e.preventDefault(); setStep(4); }} style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <input type="text" placeholder="Straße und Hausnummer" className="form-input" required />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.5rem' }}>
                            <input type="text" placeholder="PLZ" className="form-input" required />
                            <input type="text" placeholder="Ort" className="form-input" required />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Ergebnis anfordern</button>
                    </form>
                </div>
            )}

            {step === 4 && (
                <div className="animate-fade-in text-center" style={{ padding: '2rem 0' }}>
                    <div style={{ fontSize: '4rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>✓</div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Vielen Dank!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Ihre Anfrage wurde entgegengenommen. Einer unserer zertifizierten Gutachter wird sich in Kürze mit Ihnen in Verbindung setzen.</p>
                </div>
            )}

            {step < 4 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span> 100% sicher</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span> kostenlos</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span> unverbindlich</li>
                    </ul>

                    {step === 1 && (
                        <button className="btn btn-primary" onClick={handleNext} style={{ padding: '0.75rem 2.5rem' }}>Weiter</button>
                    )}
                    {step > 1 && (
                        <button className="btn btn-secondary" onClick={() => setStep(step - 1)} style={{ padding: '0.75rem 2rem' }}>Zurück</button>
                    )}
                </div>
            )}
        </div>
    );
}
