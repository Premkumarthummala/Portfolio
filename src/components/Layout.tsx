import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useStickyNavbar from './useStickyNavbar';
import { FaCheckCircle, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

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
          <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaCheckCircle style={{ color: '#ffe066', fontSize: 22, marginRight: 5, verticalAlign: 'middle' }} />
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
          <div className={`hamburger${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(!navOpen)} aria-label="Menu" role="button" tabIndex={0}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className="main-container">
        {children}
      </div>
      <footer className="site-footer" style={{ background: 'var(--brand-primary)', color: '#fff', padding: '1.2rem 0', textAlign: 'center', marginTop: '4rem', fontSize: '1.01rem', letterSpacing: 0.2 }}>
        <div className="footer-content" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16, flexDirection: 'row', rowGap: 8 }}>
          <span style={{ whiteSpace: 'nowrap' }}>&copy; {new Date().getFullYear()} Prem Kumar Thummala</span>
          <span className="footer-divider" style={{ height: 24, width: 1, background: 'rgba(255,255,255,0.18)', margin: '0 10px', display: 'inline-block' }} />
          <div className="footer-icons" style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
            <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon-link"><FaLinkedin className="footer-icon" /></a>
            <a href="https://github.com/Premkumarthummala" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-icon-link"><FaGithub className="footer-icon" /></a>
            <a href="mailto:tpremkumar273@gmail.com" aria-label="Email" className="footer-icon-link"><HiOutlineMail className="footer-icon" /></a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .sticky-navbar {
          position: sticky;
          top: 0;
          background-color: #fff;
          z-index: 1001;
          height: 68px;
          padding: 0.9rem 0;
          box-shadow: 0 4px 24px rgba(60,70,110,0.13), 0 1.5px 6px rgba(60,70,110,0.07);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 48px;
        }
        .navbar-brand {
          margin-left: 1.2rem;
        }
        .navbar-spacer {
          flex: 1;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          justify-content: flex-end;
          align-items: center;
          transition: right 0.3s cubic-bezier(.4,2,.6,1);
        }
        .nav-link {
          color: var(--brand-text);
          font-weight: 500;
          text-decoration: none;
          font-size: 1.18rem;
          transition: color 0.2s, border-bottom 0.25s cubic-bezier(.4,2,.6,1);
          padding: 0.5rem 0.7rem;
          border-radius: 6px;
        }
        .nav-link-active {
          color: #1976d2;
          border-bottom: 2.5px solid #1976d2;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          width: 32px;
          height: 32px;
          justify-content: center;
          align-items: center;
          margin-right: 1.2rem;
          z-index: 1010;
          transition: filter 0.2s;
        }
        .hamburger span {
          display: block;
          height: 3.5px;
          width: 24px;
          background: #222;
          margin: 3.2px 0;
          border-radius: 2px;
          transition: 0.3s;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(6.7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.7px) rotate(-45deg);
        }
        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 0.5rem;
          }
          .nav-links {
            position: fixed;
            top: 68px;
            right: -100vw;
            width: 70vw;
            max-width: 320px;
            height: calc(100vh - 68px);
            background: #fff;
            flex-direction: column;
            align-items: flex-start;
            gap: 2.2rem;
            padding: 2.2rem 1.6rem;
            box-shadow: 0 4px 32px rgba(60,70,110,0.13);
            transition: right 0.33s cubic-bezier(.4,2,.6,1);
            z-index: 1011;
          }
          .nav-links.open {
            right: 0;
          }
          .nav-links:not(.open) {
            right: -100vw;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
