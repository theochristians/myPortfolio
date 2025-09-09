import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrolled = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

export const useScrollDirection = () => {
  const [direction, setDirection] = useState('up');
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('up');

  const updateScrollDirection = useCallback(() => {
    const scrollY = window.pageYOffset;
    const dir = scrollY > lastScrollY.current ? 'down' : 'up';

    if (
      dir !== scrollDirection.current &&
      (scrollY - lastScrollY.current > 10 || scrollY - lastScrollY.current < -10)
    ) {
      scrollDirection.current = dir;
      setDirection(dir);
    }

    lastScrollY.current = scrollY > 0 ? scrollY : 0;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  return direction;
};

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options
    });

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, isIntersecting];
};
