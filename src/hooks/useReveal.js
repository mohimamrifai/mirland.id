import { useEffect } from 'react';

/**
 * Lightweight reveal-on-scroll using IntersectionObserver.
 * Adds `is-visible` to elements with `.reveal` once they enter the viewport.
 * Pure CSS animations live in App.css, so this stays cheap and dependency-free.
 */
export default function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced motion: reveal everything immediately.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.reveal');
    if (reduceMotion) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
