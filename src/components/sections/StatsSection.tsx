import React from 'react';

export const StatsSection = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>20+</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Jahre Erfahrung</p>
          </div>
          
          <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>2500+</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Gutachten erstellt</p>
          </div>
          
          <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>98%</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Zufriedene Kunden</p>
          </div>
          
          <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>100%</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Festpreisgarantie</p>
          </div>
        </div>
      </div>
    </section>
  );
};