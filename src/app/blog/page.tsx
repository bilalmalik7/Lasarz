import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import AnimatedBlogList from '@/components/blog/AnimatedBlogList';

export const metadata = {
    title: 'Blog & Ratgeber | Immobilienbewertung Osnabrück',
    description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.',
};

export default function BlogPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>

            {/* Hero Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Wissen & Einblicke</span>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', marginTop: '1rem', marginBottom: '1.5rem' }}>Lasarz Blog</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
                        Ihr Experten-Kompass für den regionalen Immobilienmarkt in Osnabrück. Hier finden Sie wertvolle Ratgeber zu Verkehrswert, Hausverkauf, Erbschaft und Scheidung.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <AnimatedBlogList posts={blogPosts} />
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
