import React from 'react';

// Minimal, professional SVG icons for each project
const icons = {
  cricket: (
    <svg width="56" height="56" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 56 56">
      {/* Cricket Bat */}
      <rect x="36" y="16" width="7" height="28" rx="2" transform="rotate(35 36 16)" fill="#f2d16b" stroke="#e0b84c" strokeWidth="2"/>
      {/* Handle */}
      <rect x="45" y="10" width="3" height="10" rx="1" transform="rotate(35 45 10)" fill="#a7a7a7" stroke="#888" strokeWidth="1.2"/>
      {/* Ball */}
      <circle cx="20" cy="38" r="6" fill="#e23d3d" stroke="#b71c1c" strokeWidth="2"/>
    </svg>
  ),
  burger: (
    <svg width="56" height="56" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v2c0 1.1 3.6 2 8 2s8-.9 8-2V7"/><path d="M4 13v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2"/></svg>
  ),
  briefcase: (
    <svg width="56" height="56" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg>
  ),
};

const projects = [
  { name: 'Virat Kohli ODI Career Performance Analysis', icon: icons.cricket, link: '/projects/virat-kohli-odi', github: 'https://github.com/Premkumarthummala/virat-kohli-odi' },
  { name: 'Food Delivery Business Intelligence Dashboard', icon: icons.burger, link: '/projects/food-delivery-bi', github: 'https://github.com/Premkumarthummala/food-delivery-bi' },
  { name: 'U.S. Wage Trends and Employment Analysis', icon: icons.briefcase, link: '/projects/us-wage-trends', github: 'https://github.com/Premkumarthummala/us-wage-trends' },
];

export default function HomeProjectsSection() {
  return (
    <section className="home-projects-section">
      <h2 className="home-projects-title fade-in-up" style={{
        color: 'var(--brand-primary)',
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: 700,
        fontSize: '2rem',
        animationDelay: '0s',
      }}>
        My Projects
      </h2>
      <div className="home-projects-grid">
        {projects.map((proj, idx) => (
          <div key={proj.name} className="home-project-card fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
            <a
              href={proj.link}
              tabIndex={0}
              aria-label={proj.name}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="home-project-icon">{proj.icon}</div>
              <div className="home-project-name">{proj.name}</div>
            </a>
            {proj.github && (
              <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.3em', color: 'var(--brand-primary)', fontSize: '1.05rem' }}>
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                <span style={{ display: 'none' }}>GitHub</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
