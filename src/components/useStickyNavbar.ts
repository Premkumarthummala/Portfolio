import { useEffect } from 'react';

export default function useStickyNavbar() {
  useEffect(() => {
    const navbar = document.querySelector('.sticky-navbar');
    if (!navbar) return;
    
    function onScroll() {
      // Early return if navbar is not found
      if (!navbar || !(navbar instanceof HTMLElement)) return;
      
      if (window.scrollY > 16) {
        navbar.classList.add('solid');
      } else {
        navbar.classList.remove('solid');
      }
    }

    // Initial check
    onScroll();
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
