import React from 'react';

// SVG icon components for each skill
const PowerBIIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="10" width="4" height="16" rx="2" fill="#F2C811" />
    <rect x="13" y="6" width="4" height="20" rx="2" fill="#F2C811" />
    <rect x="21" y="14" width="4" height="12" rx="2" fill="#F2C811" />
    <rect x="29" y="18" width="4" height="8" rx="2" fill="#F2C811" />
  </svg>
);
const PythonIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#3776AB" />
    <path d="M25 14c0-2.2-1.8-4-4-4h-6c-1.1 0-2 .9-2 2v4h8v2h-10c-1.1 0-2 .9-2 2v4c0 2.2 1.8 4 4 4h6c1.1 0 2-.9 2-2v-4h-8v-2h10c1.1 0 2-.9 2-2v-4z" fill="#FFD43B" />
    <circle cx="13" cy="13" r="1" fill="#3776AB" />
    <circle cx="23" cy="23" r="1" fill="#FFD43B" />
  </svg>
);
const SQLIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="10" rx="12" ry="5" fill="#4479A1" />
    <rect x="6" y="10" width="24" height="16" rx="8" fill="#4479A1" />
    <ellipse cx="18" cy="26" rx="12" ry="5" fill="#4479A1" />
  </svg>
);
const ExcelIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="24" height="24" rx="4" fill="#217346" />
    <rect x="10" y="10" width="16" height="16" rx="2" fill="#fff" />
    <path d="M14 14l8 8M22 14l-8 8" stroke="#217346" strokeWidth="2" />
  </svg>
);
const DataVizIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="4" height="8" rx="2" fill="#00B8D9" />
    <rect x="16" y="14" width="4" height="14" rx="2" fill="#00B8D9" />
    <rect x="24" y="10" width="4" height="18" rx="2" fill="#00B8D9" />
  </svg>
);
const MLIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" fill="#7E57C2" />
    <rect x="10" y="14" width="4" height="8" rx="2" fill="#fff" />
    <rect x="22" y="14" width="4" height="8" rx="2" fill="#fff" />
    <rect x="16" y="10" width="4" height="16" rx="2" fill="#fff" />
  </svg>
);
const StatsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="22" width="4" height="8" rx="2" fill="#F4511E" />
    <rect x="15" y="14" width="4" height="16" rx="2" fill="#F4511E" />
    <rect x="23" y="10" width="4" height="20" rx="2" fill="#F4511E" />
  </svg>
);
const BizIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="20" height="12" rx="4" fill="#1976D2" />
    <rect x="14" y="10" width="8" height="6" rx="2" fill="#1976D2" />
    <rect x="16" y="20" width="4" height="8" rx="2" fill="#fff" />
  </svg>
);

const skills = [
  { name: 'Power BI', icon: <PowerBIIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'SQL', icon: <SQLIcon /> },
  { name: 'Excel', icon: <ExcelIcon /> },
  { name: 'Data Visualization', icon: <DataVizIcon /> },
  { name: 'Machine Learning', icon: <MLIcon /> },
  { name: 'Statistics', icon: <StatsIcon /> },
  { name: 'Business Analysis', icon: <BizIcon /> },
];

export default function HomeSkillsSection() {
  return (
    <section className="home-skills-section" style={{ background: '#f7f9fa', padding: '3rem 0' }}>
      <h2 className="home-skills-title" style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 700, fontSize: '2rem' }}>
        My Skills
      </h2>
      <div className="home-skills-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {skills.map((skill, idx) => (
          <div key={skill.name} className="home-skill-card fade-in-up" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e0e0e0', padding: '1.5rem 2rem', minWidth: 140, textAlign: 'center', fontSize: '1.2rem', fontWeight: 500, animationDelay: `${idx * 0.1}s` }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
