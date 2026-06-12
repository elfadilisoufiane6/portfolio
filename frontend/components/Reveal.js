'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Reveal — wraps children, applies a CSS animation class when scrolled into view.
 * Uses IntersectionObserver. Only animates once.
 *
 * Props:
 *   as       : HTML tag (default 'div')
 *   variant  : 'up' | 'left' | 'right' | 'fade' | 'zoom' (default 'up')
 *   delay    : ms (default 0)
 *   threshold: 0..1 (default 0.15)
 *   className: extra classes to merge
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  threshold = 0.15,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Honor reduced-motion preference: show immediately, no animation
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setShown(true); return; }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const cls = `reveal reveal-${variant}${shown ? ' is-in' : ''}${className ? ' ' + className : ''}`;

  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  );
}
