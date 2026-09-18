'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = Array.from(container.current!.querySelectorAll<HTMLElement>(
      '.reveal, .atmosphere-copy > *, .editorial-intro > *, .editorial-detail > *',
    ));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.scrollReveal = 'visible';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

    const reset = () => {
      observer.disconnect();
      elements.forEach(element => {
        delete element.dataset.scrollReveal;
        if (!preference.matches && element.getBoundingClientRect().top > window.innerHeight) {
          element.dataset.scrollReveal = 'pending';
          observer.observe(element);
        }
      });
    };
    reset();
    preference.addEventListener('change', reset);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', reset);
      elements.forEach(element => delete element.dataset.scrollReveal);
    };
  }, []);

  return <div ref={container}>{children}</div>;
}
