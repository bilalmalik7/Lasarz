'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRestoration() {
    const pathname = usePathname();
    const prevPath = useRef(pathname);

    // Save scroll position whenever the user is about to leave the current page
    useEffect(() => {
        const save = () => {
            sessionStorage.setItem(`__scroll:${prevPath.current}`, String(window.scrollY));
        };

        if (pathname !== prevPath.current) {
            save();

            // Restore saved position for the page we just arrived at (back navigation)
            const saved = sessionStorage.getItem(`__scroll:${pathname}`);
            if (saved) {
                const y = parseInt(saved, 10);
                // Use rAF to wait for the new page to paint before scrolling
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        window.scrollTo({ top: y, behavior: 'instant' });
                    });
                });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            prevPath.current = pathname;
        }
    }, [pathname]);

    return null;
}
