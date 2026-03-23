import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ children, className = '', direction = 'up', delay = 0, duration = 0.8 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const directionClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
  }[direction] || 'reveal-up';

  const style = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}s`
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal-wrapper ${directionClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
