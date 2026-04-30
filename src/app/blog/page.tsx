'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';

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

// Sample blog posts data - in a real app this would come from a database or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Immobiliengutachter Osnabrück - Was kostet eine professionelle Hausbewertung?',
    excerpt: 'Erfahren Sie, wie viel eine professionelle Immobilienbewertung in Osnabrück kostet. Kostenübersicht für Verkehrswertgutachten, Kurzgutachten und weitere Dienstleistungen.',
    date: '29. April 2026',
    readTime: '5 min Lesezeit',
    slug: 'immobiliengutachter-osnabrueck-kosten',
    image: 'https://source.unsplash.com/800x400/?house,valuation,real-estate,Osnabrueck',
    altText: 'Hausbewertung in Osnabrück - Immobilienbewertung durch Fachmann',
    category: 'Immobilienbewertung'
  },
  {
    id: '2',
    title: 'Immobilienwert ermitteln in Osnabrück und Umgebung - So funktioniert es',
    excerpt: 'Erfahren Sie, wie ein Immobilienwert in Osnabrück und Umgebung ermittelt wird. Verfahren und Schritte für eine professionelle Bewertung.',
    date: '28. April 2026',
    readTime: '6 min Lesezeit',
    slug: 'immobilienwert-ermitteln-osnabrueck',
    image: 'https://source.unsplash.com/800x400/?property,value,appraisal,house',
    altText: 'Immobilienwert ermitteln in Osnabrück - Professionelle Bewertung',
    category: 'Immobilienbewertung'
  },
  {
    id: '3',
    title: 'Hausbewertung bei Scheidung in Osnabrück - Was Sie wissen müssen',
    excerpt: 'Erfahren Sie alles über Hausbewertung bei Scheidung in Osnabrück. Rechtliche Aspekte, Kosten und wie Sie einen Immobiliengutachter wählen sollten.',
    date: '27. April 2026',
    readTime: '7 min Lesezeit',
    slug: 'hausbewertung-scheidung-osnabrueck',
    image: 'https://source.unsplash.com/800x400/?divorce,house,property,legal',
    altText: 'Hausbewertung bei Scheidung in Osnabrück - Rechtliche Aspekte',
    category: 'Scheidung'
  },
  {
    id: '4',
    title: 'Erbschaft und Immobilienbewertung in Osnabrück - Der komplette Leitfaden',
    excerpt: 'Kompletter Leitfaden für Erbschaft und Immobilienbewertung in Osnabrück. Was Sie über Erbschaftsgutachten wissen müssen und wie Sie die richtige Bewertung wählen.',
    date: '26. April 2026',
    readTime: '8 min Lesezeit',
    slug: 'erbschaft-immobilienbewertung-osnabrueck',
    image: 'https://source.unsplash.com/800x400/?inheritance,property,estate,house',
    altText: 'Erbschaft und Immobilienbewertung in Osnabrück - Leitfaden',
    category: 'Erbschaft'
  },
  {
    id: '5',
    title: 'Grundstücksbewertung Georgsmarienhütte, Bramsche und Melle - Regional kompetent',
    excerpt: 'Regional kompetente Grundstücksbewertung in Georgsmarienhütte, Bramsche und Melle. Wie wir Immobilien in diesen Städten bewerten und welche Faktoren wichtig sind.',
    date: '25. April 2026',
    readTime: '6 min Lesezeit',
    slug: 'grundstuecksbewertung-georgsmarienhuette-bramsche-melle',
    image: 'https://source.unsplash.com/800x400/?land,property,real-estate,Germany',
    altText: 'Grundstücksbewertung in Georgsmarienhütte, Bramsche und Melle - Regional kompetent',
    category: 'Grundstücksbewertung'
  }
];

// Add structured data for BlogPosting
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lasarz.com/blog"
  },
  "name": "Lasarz Blog",
  "description": "Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.",
  "publisher": {
    "@type": "Organization",
    "name": "Lasarz Immobiliengutachter",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lasarz.com/images/logo.png"
    }
  }
};

export const metadata = {
  title: 'Blog & Ratgeber | Immobilienbewertung Osnabrück',
  description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.',
  openGraph: {
    title: 'Blog & Ratgeber | Immobilienbewertung Osnabrück',
    description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.',
    url: 'https://lasarz.com/blog',
    siteName: 'Lasarz Immobiliengutachter',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://lasarz.com/images/blog-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Immobilienbewertung Blog Osnabrück'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Ratgeber | Immobilienbewertung Osnabrück',
    description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.',
    images: ['https://lasarz.com/images/blog-hero.jpg']
  },
  alternates: {
    canonical: 'https://lasarz.com/blog'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BlogPage() {
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
  }, [selectedCategory]);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
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