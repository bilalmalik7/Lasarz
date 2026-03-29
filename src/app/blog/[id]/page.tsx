'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blogData';

// Wrap the entire component content with framer motion animations
export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // In Next.js 15, params is a promise
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <main style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)' }}>Beitrag nicht gefunden</h1>
                    <p style={{ margin: '2rem 0' }}>Der von Ihnen gesuchte Blog-Beitrag existiert gefühlt nicht oder wurde verschoben.</p>
                    <Link href="/blog" className="btn btn-primary">Zurück zum Blog</Link>
                </div>
            </main>
        );
    }

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            {/* Header / Cover */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <Link href="/blog" style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontWeight: 500 }}>
                        ← Zurück zur Übersicht
                    </Link>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{post.category}</span>
                        </div>
                        <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, maxWidth: '900px' }}>{post.title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    >
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="blog-content"
                        style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)'
                        }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', textAlign: 'center' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Fragen zu diesem Thema?</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Kontaktieren Sie Marc-André Lasarz für eine persönliche Beratung in Osnabrück und Umgebung.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/kontakt" className="btn btn-primary">Jetzt anfragen</Link>
                            <a href="tel:08006648714" className="btn btn-secondary">📞 0800 / 66 48 714</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style jsx global>{`
                .blog-content h3 {
                    color: var(--accent-secondary);
                    font-size: 2rem;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content ul {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.8rem;
                }
                .blog-content strong {
                    color: var(--text-primary);
                }
                .glass-card p:last-child {
                    margin-bottom: 0;
                }
            `}</style>
        </main>
    );
}
