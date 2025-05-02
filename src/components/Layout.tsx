import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

const GitHubIcon = () => (
  <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  useStickyNavbar();

  return (
    <>
      <nav className="sticky-navbar shadow-md">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <Link href="/" className="nav-link" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
              Prem Kumar Thummala
            </Link>
          </div>
          <div className="navbar-spacer" />
          <div className={`nav-links${navOpen ? ' open' : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            {NAV_LINKS.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${isActive ? ' nav-link-active' : ''}`}
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu" role="button" tabIndex={0}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Dark mode toggle removed */}
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
        &nbsp;|&nbsp;
        <a href="https://github.com/Premkumarthummala" target="_blank" rel="noopener noreferrer" className="footer-link"><GitHubIcon />GitHub</a>
      </footer>
      <style jsx>{`
        .sticky-navbar {
          position: sticky;
          top: 0;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-brand {
          margin-left: 1rem;
        }
        .navbar-spacer {
          flex: 1;
        }
      `}</style>
    </>
  );
}
