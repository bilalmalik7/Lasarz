import React from 'react';
import Link from 'next/link';

interface RelatedPagesProps {
  relatedPages: {
    title: string;
    url: string;
    description?: string;
  }[];
  title?: string;
}

export const RelatedPagesSection = ({ relatedPages, title = "Verwandte Artikel" }: RelatedPagesProps) => {
  if (!relatedPages || relatedPages.length === 0) return null;

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', marginTop: '5rem' }}>
      <div className="container">
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{title}</h3>
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-lg">
          {relatedPages.map((page, index) => (
            <div key={index} className="glass-card" style={{ padding: '2rem' }}>
              <Link href={page.url} style={{ textDecoration: 'none' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>{page.title}</h4>
              </Link>
              {page.description && (
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>{page.description}</p>
              )}
              <Link href={page.url} className="btn btn-primary" style={{ 
                marginTop: '1.5rem', 
                padding: '0.8rem 1.5rem',
                display: 'inline-block'
              }}>
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};