'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    label: string;
}

export function AnimatedCounter({ end, duration = 2000, label }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) observer.unobserve(counterRef.current);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // easeOutQuad
            const easeProgress = progress * (2 - progress);

            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure we end exactly on the target
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <div ref={counterRef} style={{ textAlign: 'center', margin: '1rem 0' }}>
            <div style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 300, /* very thin per target design */
                color: 'var(--accent-primary)',
                lineHeight: 1
            }}>
                {count > 0 && end >= 1000 ? count.toLocaleString('de-DE') : count}
                {end >= 10000 && '+'}
            </div>
            <div style={{
                fontSize: '1rem',
                color: 'var(--accent-secondary)',
                marginTop: '0.5rem',
                fontWeight: 400
            }}>
                {label}
            </div>
        </div>
    );
}
