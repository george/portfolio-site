import * as React from 'react';
import { useState, useEffect, MutableRefObject } from 'react';

export function useIsVisible(ref: MutableRefObject<any>): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer:IntersectionObserver = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}