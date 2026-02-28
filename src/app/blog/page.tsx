import Link from 'next/link';

export const metadata = {
    title: 'Blog & Ratgeber | Immobilienbewertung Lasarz',
    description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung.',
};

const blogPosts = [
    {
        id: '1',
        title: 'Marktwert vs. Beleihungswert: Was ist der Unterschied?',
        excerpt: 'Viele Immobilienbesitzer verwechseln diese beiden Begriffe. Dabei spielen sie in unterschiedlichen Situationen eine entscheidende Rolle...',
        date: '15. Februar 2024',
        category: 'Grundlagen',
        image: '/images/original_clone/HASELAND_11-1024x690.jpg'
    },
    {
        id: '2',
        title: 'Checkliste: Die wichtigsten Dokumente für den Hausverkauf',
        excerpt: 'Ein reibungsloser Verkauf beginnt mit der richtigen Vorbereitung. Wir zeigen Ihnen, welche Unterlagen Sie unbedingt griffbereit haben sollten.',
        date: '02. Februar 2024',
        category: 'Ratgeber',
        image: '/images/original_clone/MG_1880-1024x690.jpg'
    },
    {
        id: '3',
        title: 'Immobilienmarkt Osnabrück 2024: Trends und Prognosen',
        excerpt: 'Wie entwickeln sich die Preise in der Friedensstadt? Erfahren Sie mehr über die aktuelle Marktsituation und was das für Verkäufer bedeutet.',
        date: '20. Januar 2024',
        category: 'Marktanalyse',
        image: '/images/original_clone/HASELAND_11-1024x690.jpg'
    }
];

export default function BlogPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>

            {/* Hero Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Wissen & Einblicke</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', marginTop: '1rem', marginBottom: '1.5rem' }}>Lasarz Blog</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Ihr Experten-Kompass für Immobilienwerte, Markttrends und fundierte Entscheidungen.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2.5rem' }}>
                        {blogPosts.map((post) => (
                            <article key={post.id} className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
                                <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'var(--accent-primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
                                        {post.category}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>{post.date}</div>
                                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h2>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{post.excerpt}</p>
                                    <div style={{ marginTop: 'auto' }}>
                                        <Link href={`/blog/${post.id}`} style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                            Weiterlesen <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
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
