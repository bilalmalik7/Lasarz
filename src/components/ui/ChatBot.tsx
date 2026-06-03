'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    sender: 'user' | 'bot';
    text: string;
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            sender: 'bot',
            text: 'Hallo! Ich bin Ihr digitaler Assistent für Immobilienbewertung bei Lasarz. Wie kann ich Ihnen heute helfen? Sie können mich zum Beispiel zu Gutachten-Kosten, Erbschaft oder Scheidung fragen.'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadSubmitted, setLeadSubmitted] = useState(false);
    const [leadData, setLeadData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping, showLeadForm]);

    const handleSendMessage = async (textToSend: string) => {
        if (!textToSend.trim()) return;

        const userMsgId = 'user-' + Date.now();
        const updatedMessages: Message[] = [
            ...messages,
            { id: userMsgId, sender: 'user', text: textToSend }
        ];

        setMessages(updatedMessages);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: updatedMessages })
            });

            if (response.ok) {
                const data = await response.json();
                
                // Simulate typing delay for realism
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages(prev => [
                        ...prev,
                        { id: 'bot-' + Date.now(), sender: 'bot', text: data.text }
                    ]);
                    if (data.showLeadForm) {
                        setShowLeadForm(true);
                    }
                }, 1000);
            } else {
                throw new Error('API request failed');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                { 
                    id: 'bot-err-' + Date.now(), 
                    sender: 'bot', 
                    text: 'Entschuldigung, ich habe Verbindungsprobleme. Bitte rufen Sie uns direkt unter +49 (0) 541 - 600 99 220 an.' 
                }
            ]);
        }
    };

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(inputValue);
    };

    const handleQuickReply = (text: string) => {
        handleSendMessage(text);
    };

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!leadData.name || !leadData.phone || !leadData.email) return;

        // In a real application, this would post to a lead intake API
        setLeadSubmitted(true);
        setTimeout(() => {
            setShowLeadForm(false);
            setMessages(prev => [
                ...prev,
                {
                    id: 'bot-lead-success-' + Date.now(),
                    sender: 'bot',
                    text: `Vielen Dank, Herr/Frau ${leadData.name}. Ich habe Ihre Anfrage weitergeleitet. Herr Lasarz wird Sie unter ${leadData.phone} zurückrufen.`
                }
            ]);
        }, 1000);
    };

    const handleLeadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLeadData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div style={{ position: 'relative', zIndex: 9999 }}>
            
            {/* FLOATING ACTION BUBBLE */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isOpen 
                        ? '0 10px 25px rgba(18, 43, 64, 0.3)' 
                        : '0 6px 20px rgba(26, 117, 141, 0.4)',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: isOpen ? 'rotate(90deg)' : 'scale(1)',
                }}
                className="breath-glow"
                aria-label="Chat öffnen"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                ) : (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                )}
            </button>

            {/* CHAT WINDOW */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '105px',
                        right: '30px',
                        width: '380px',
                        height: '560px',
                        maxHeight: 'calc(100vh - 150px)',
                        maxWidth: 'calc(100vw - 60px)',
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 15px 45px rgba(18, 43, 64, 0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        animation: 'fadeInUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '1.25rem 1.5rem',
                            backgroundColor: 'var(--accent-secondary)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            borderBottom: '1px solid rgba(255,255,255,0.08)'
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                L
                            </div>
                            <div style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#25d366', border: '2px solid var(--accent-secondary)' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'white', fontWeight: 600 }}>Lasarz Assistent</h4>
                            <p style={{ margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                Online • Unverbindliche Beratung
                            </p>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: '4px' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                    </div>

                    {/* Message Area */}
                    <div
                        style={{
                            flex: 1,
                            padding: '1.5rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            backgroundColor: '#f8f9fa'
                        }}
                    >
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                style={{
                                    display: 'flex',
                                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    width: '100%'
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: '85%',
                                        padding: '0.85rem 1.1rem',
                                        borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                                        backgroundColor: msg.sender === 'user' ? 'var(--accent-primary)' : 'white',
                                        color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                                        fontSize: '0.925rem',
                                        lineHeight: '1.5',
                                        boxShadow: msg.sender === 'user' ? 'none' : '0 2px 6px rgba(0,0,0,0.04)',
                                        border: msg.sender === 'user' ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                        whiteSpace: 'pre-wrap'
                                    }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isTyping && (
                            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                                <div style={{ padding: '0.85rem 1.25rem', borderRadius: '14px 14px 14px 2px', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', backgroundColor: '#888', borderRadius: '50%', display: 'inline-block', animation: 'ping 1s infinite alternate' }} />
                                    <span style={{ width: '6px', height: '6px', backgroundColor: '#888', borderRadius: '50%', display: 'inline-block', animation: 'ping 1s infinite alternate 0.2s' }} />
                                    <span style={{ width: '6px', height: '6px', backgroundColor: '#888', borderRadius: '50%', display: 'inline-block', animation: 'ping 1s infinite alternate 0.4s' }} />
                                </div>
                            </div>
                        )}

                        {/* Lead form card directly in chat */}
                        {showLeadForm && (
                            <div 
                                style={{ 
                                    backgroundColor: 'white', 
                                    border: '1px solid var(--accent-primary)', 
                                    borderRadius: '12px', 
                                    padding: '1.25rem', 
                                    marginTop: '0.5rem',
                                    boxShadow: '0 4px 12px rgba(26,117,141,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    animation: 'fadeIn 0.4s ease-out'
                                }}
                            >
                                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>Rückruf anfordern:</div>
                                {leadSubmitted ? (
                                    <div style={{ color: '#25d366', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                                        <span>✓</span> Daten erfolgreich übermittelt!
                                    </div>
                                ) : (
                                    <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Ihr Name *" 
                                            required 
                                            value={leadData.name} 
                                            onChange={handleLeadInputChange}
                                            style={{ width: '100%', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '4px', outline: 'none' }}
                                        />
                                        <input 
                                            type="tel" 
                                            name="phone" 
                                            placeholder="Telefonnummer *" 
                                            required 
                                            value={leadData.phone} 
                                            onChange={handleLeadInputChange}
                                            style={{ width: '100%', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '4px', outline: 'none' }}
                                        />
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="E-Mail-Adresse *" 
                                            required 
                                            value={leadData.email} 
                                            onChange={handleLeadInputChange}
                                            style={{ width: '100%', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '4px', outline: 'none' }}
                                        />
                                        <button 
                                            type="submit" 
                                            style={{ 
                                                width: '100%', 
                                                padding: '0.6rem', 
                                                backgroundColor: 'var(--accent-primary)', 
                                                color: 'white', 
                                                border: 'none', 
                                                borderRadius: '4px', 
                                                fontSize: '0.85rem', 
                                                fontWeight: 'bold', 
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-secondary)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                                        >
                                            Rückruf absenden
                                        </button>
                                    </form>
                                )}
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies chips */}
                    {!showLeadForm && messages.length <= 4 && (
                        <div 
                            style={{ 
                                padding: '0.5rem 1rem', 
                                backgroundColor: '#f8f9fa', 
                                display: 'flex', 
                                gap: '0.5rem', 
                                overflowX: 'auto',
                                whiteSpace: 'nowrap',
                                borderTop: '1px solid rgba(0,0,0,0.03)',
                                scrollbarWidth: 'none' // Firefox
                            }}
                        >
                            {[
                                'Was kostet ein Gutachten?',
                                'Erbschaftsteuer sparen',
                                'Scheidung & Hausverkauf',
                                'Ablauf & Dauer'
                            ].map((text, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleQuickReply(text)}
                                    style={{
                                        padding: '0.4rem 0.8rem',
                                        fontSize: '0.8rem',
                                        backgroundColor: 'white',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '16px',
                                        cursor: 'pointer',
                                        color: 'var(--accent-primary)',
                                        fontWeight: 500,
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.backgroundColor = 'var(--accent-glow)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.backgroundColor = 'white';
                                    }}
                                >
                                    {text}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Text Input area */}
                    <form
                        onSubmit={handleInputSubmit}
                        style={{
                            padding: '1rem 1.25rem',
                            backgroundColor: 'white',
                            borderTop: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Schreiben Sie eine Nachricht..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isTyping || showLeadForm}
                            style={{
                                flex: 1,
                                border: '1px solid #ced4da',
                                borderRadius: '24px',
                                padding: '0.65rem 1.25rem',
                                fontSize: '0.9rem',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                                backgroundColor: showLeadForm ? '#e9ecef' : 'white'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                            onBlur={(e) => e.target.style.borderColor = '#ced4da'}
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isTyping || showLeadForm}
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                backgroundColor: (!inputValue.trim() || isTyping || showLeadForm) ? '#e9ecef' : 'var(--accent-primary)',
                                color: (!inputValue.trim() || isTyping || showLeadForm) ? '#adb5bd' : 'white',
                                border: 'none',
                                cursor: (!inputValue.trim() || isTyping || showLeadForm) ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
