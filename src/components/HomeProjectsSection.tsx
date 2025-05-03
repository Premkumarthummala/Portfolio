import React from 'react';
import { FaBriefcase, FaGithub } from 'react-icons/fa';
import { GiCricketBat, GiHamburger } from 'react-icons/gi';

const projects = [
  {
    name: 'Virat Kohli ODI Career Performance Analysis',
    icon: <GiCricketBat style={{ color: '#e0b84c', fontSize: 38 }} />, // Cricket Bat
    link: '/projects/virat-kohli-odi',
    github: 'https://github.com/Premkumarthummala/virat-kohli-odi',
  },
  {
    name: 'Food Delivery Business Intelligence Dashboard',
    icon: <GiHamburger style={{ color: '#0070f3', fontSize: 38 }} />, // Burger
    link: '/projects/food-delivery-bi',
    github: 'https://github.com/Premkumarthummala/food-delivery-bi',
  },
  {
    name: 'U.S. Wage Trends and Employment Analysis',
    icon: <FaBriefcase style={{ color: '#0070f3', fontSize: 36 }} />, // Briefcase
    link: '/projects/us-wage-trends',
    github: 'https://github.com/Premkumarthummala/us-wage-trends',
  },
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
                <FaGithub style={{ marginRight: 4, verticalAlign: 'middle' }} />
                <span style={{ display: 'none' }}>GitHub</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
