'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define types for blog posts
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  altText: string;
  category: string;
}

interface BlogContentProps {
  blogPosts: BlogPost[];
}

export default function BlogContent({ blogPosts }: BlogContentProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  // Get unique categories
  const categories = ['Alle', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts by category
  useEffect(() => {
    if (selectedCategory === 'Alle') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, blogPosts]);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--bg-secondary)', 
        padding: '80px 0', 
        textAlign: 'center', 
        borderBottom: '1px solid var(--border-color)' 
      }}>
        <div className="container">
          <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Wissen & Einblicke</span>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', marginTop: '1rem', marginBottom: '1.5rem' }}>Lasarz Blog</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
            Ihr Experten-Kompass für den regionalen Immobilienmarkt in Osnabrück. Hier finden Sie wertvolle Ratgeber zu Verkehrswert, Hausverkauf, Erbschaft und Scheidung.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: selectedCategory === category ? 'var(--accent-primary)' : 'var(--bg-primary)',
                  color: selectedCategory === category ? 'white' : 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 500
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {filteredPosts.map(post => (
              <div key={post.id} style={{ backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)', transition: 'transform 0.3s ease' }}>
                <Link href={`/blog/${post.slug}`}>
                  <img 
                    src={post.image} 
                    alt={post.altText} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                </Link>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{post.date}</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: '1.375rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
                    Weiterlesen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Haben Sie Fragen zur Bewertung?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Unsere Experten stehen Ihnen für eine unverbindliche Erstberatung gerne zur Verfügung.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Jetzt Kontaktieren</Link>
              <Link href="/#bewertung" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>Kostenlose Wertermittlung</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
