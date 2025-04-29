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
  { name: 'Virat Kohli ODI Career Performance Analysis', icon: icons.cricket, link: '/projects/virat-kohli-odi' },
  { name: 'Food Delivery Business Intelligence Dashboard', icon: icons.burger, link: '/projects/food-delivery-bi' },
  { name: 'U.S. Wage Trends and Employment Analysis', icon: icons.briefcase, link: '/projects/us-wage-trends' },
];

export default function HomeProjectsSection() {
  return (
    <section className="home-projects-section">
      <h2 className="home-projects-title">My Projects</h2>
      <div className="home-projects-grid">
        {projects.map((proj) => (
          <a
            className="home-project-card"
            key={proj.name}
            href={proj.link}
            tabIndex={0}
            aria-label={proj.name}
            style={{ textDecoration: 'none' }}
          >
            <div className="home-project-icon">{proj.icon}</div>
            <div className="home-project-name">{proj.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
