import React, { useState } from 'react';
import Link from 'next/link';
import useStickyNavbar from './useStickyNavbar';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

// Simple, clean Feather-style icons
const EmailIcon = () => (
  <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
);

const LinkedInIcon = () => (
  <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><line x1="16" y1="8" x2="16" y2="16"/><line x1="12" y1="12" x2="12" y2="16"/><circle cx="12" cy="8" r="1"/></svg>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  useStickyNavbar();

  return (
    <>
      <nav className="sticky-navbar">
        <div className="navbar-inner">
          <Link href="/" className="nav-link" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
            Prem Kumar Thummala
          </Link>
          <div className={`nav-links${navOpen ? ' open' : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} className="nav-link" onClick={() => setNavOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu" role="button" tabIndex={0}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className="main-container">
        {children}
      </div>
      <footer style={{ backgroundColor: '#f7f7f7', color: '#6c757d', fontSize: '0.875rem', textAlign: 'center', padding: '1rem' }}>
        &copy; 2025 Prem Kumar Thummala &nbsp;|&nbsp;
        <a href="mailto:tpremkumar273@gmail.com" className="footer-link"><EmailIcon />Email</a>
        &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" className="footer-link"><LinkedInIcon />LinkedIn</a>
      </footer>
      <style jsx>{`
        .sticky-navbar {
          position: sticky;
          top: 0;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}
