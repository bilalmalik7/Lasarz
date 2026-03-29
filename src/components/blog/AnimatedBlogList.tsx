'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogData';

export default function AnimatedBlogList({ posts }: { posts: BlogPost[] }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2.5rem' }}>
            {posts.map((post, index) => (
                <motion.article 
                    key={post.id} 
                    className="glass-card" 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                    <Link href={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
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
                            <div style={{ marginTop: 'auto', color: 'var(--accent-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Weiterlesen <span>→</span>
                            </div>
                        </div>
                    </Link>
                </motion.article>
            ))}
        </div>
    );
}
