import React from 'react';
import { SiPowerbi, SiPython, SiMysql, SiTableau, SiMicrosoftexcel } from 'react-icons/si';
import { FaDatabase, FaChartBar, FaBrain, FaProjectDiagram, FaChartPie } from 'react-icons/fa';

const skills = [
  { name: 'Power BI', icon: <SiPowerbi style={{ color: '#F2C811', fontSize: 32 }} /> },
  { name: 'Python', icon: <SiPython style={{ color: '#3776AB', fontSize: 32 }} /> },
  { name: 'SQL', icon: <FaDatabase style={{ color: '#4479A1', fontSize: 32 }} /> },
  { name: 'Excel', icon: <SiMicrosoftexcel style={{ color: '#217346', fontSize: 32 }} /> },
  { name: 'Tableau', icon: <SiTableau style={{ color: '#0058a3', fontSize: 32 }} /> },
  { name: 'Data Visualization', icon: <FaChartBar style={{ color: '#00B8D9', fontSize: 32 }} /> },
  { name: 'Machine Learning', icon: <FaBrain style={{ color: '#7E57C2', fontSize: 32 }} /> },
  { name: 'Business Analysis', icon: <FaProjectDiagram style={{ color: '#1976D2', fontSize: 32 }} /> },
  { name: 'Statistics', icon: <FaChartPie style={{ color: '#F4511E', fontSize: 32 }} /> },
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
