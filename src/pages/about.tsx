import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { FaChartBar, FaBrain, FaFileAlt } from 'react-icons/fa';
import { SiPowerbi, SiPython, SiTableau, SiMicrosoftexcel } from 'react-icons/si';

export default function About() {
  return (
    <Layout>
      <section className="about-hero-section gradient-bg animate-hero-fade-in" style={{ marginBottom: '3.5rem', position: 'relative', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', padding: '2.6rem 2.1rem 2.7rem 2.1rem', borderRadius: '2.1rem', textAlign: 'center', boxShadow: '0 6px 40px rgba(30,58,138,0.09)' }}>
        <div className="about-hero-content">
          <h1 className="about-title" style={{ color: '#fff', marginBottom: '1.1rem' }}>Prem Kumar Thummala</h1>
          <h2 style={{ color: '#c7d2fe', fontWeight: 500, fontSize: '1.35rem', marginBottom: '0.7rem' }}>Data Analyst & Business Intelligence Specialist</h2>
          <p style={{ color: '#e0e7ef', fontSize: '1.12rem', marginBottom: '2.1rem' }}>Transforming Data into Actionable Insights</p>
          <div style={{ margin: '0 auto 0 auto', display: 'flex', justifyContent: 'center', gap: '1.2rem' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>
              <FaFileAlt style={{ marginRight: 6, verticalAlign: 'middle' }} />
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>
              <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a data analyst and business intelligence specialist with expertise in transforming complex data into actionable insights. 
            My experience spans across statistical analysis, data visualization, and predictive modeling, helping organizations make data-driven decisions.
          </p>
          <div className="about-bio">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3><FaChartBar style={{ color: '#00B8D9', marginRight: 6, verticalAlign: 'middle' }} /> Data Analysis</h3>
                <ul className="about-skills-list">
                  <li>Statistical Analysis</li>
                  <li>Data Cleaning & Preparation</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Regression Modeling</li>
                  <li>Time Series Analysis</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3><SiPowerbi style={{ color: '#F2C811', marginRight: 6, verticalAlign: 'middle' }} /> Tools & Technologies</h3>
                <ul className="about-skills-list">
                  <li><SiPython style={{ color: '#3776AB', marginRight: 4, verticalAlign: 'middle' }} /> Python (Pandas, NumPy)</li>
                  <li><SiPowerbi style={{ color: '#F2C811', marginRight: 4, verticalAlign: 'middle' }} /> Power BI</li>
                  <li><SiMicrosoftexcel style={{ color: '#217346', marginRight: 4, verticalAlign: 'middle' }} /> Excel (Advanced)</li>
                  <li><FaChartBar style={{ color: '#4479A1', marginRight: 4, verticalAlign: 'middle' }} /> SQL</li>
                  <li><SiTableau style={{ color: '#0058a3', marginRight: 4, verticalAlign: 'middle' }} /> Tableau</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3><FaBrain style={{ color: '#7E57C2', marginRight: 6, verticalAlign: 'middle' }} /> Business Intelligence</h3>
                <ul className="about-skills-list">
                  <li>Dashboard Development</li>
                  <li>KPI Monitoring</li>
                  <li>Business Metrics Analysis</li>
                  <li>Data Visualization</li>
                  <li>Report Automation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Certifications</h2>
          <div className="certifications-list">
            <div className="certification-item">
              <h3>Google Data Analytics Professional Certificate</h3>
              <p>Completed comprehensive training in data analysis, including statistical methods, data cleaning, and visualization.</p>
            </div>
            <div className="certification-item">
              <h3>Microsoft Power BI Data Analyst Associate</h3>
              <p>Advanced certification in creating and managing BI solutions using Power BI.</p>
            </div>
            <div className="certification-item">
              <h3>IBM Data Science Professional Certificate</h3>
              <p>Mastery in data science methodologies, tools, and techniques for real-world applications.</p>
            </div>
          </div>
        </div>
      </section>
      <svg className="section-divider" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f7fbff" d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"/></svg>
      <style>{`
        .about-skills-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        .about-skills-list li {
          position: relative;
          padding-left: 1.6em;
          margin-bottom: 0.65em;
          font-size: 1.06rem;
          color: #222;
          line-height: 1.7;
          text-indent: 0;
          word-break: break-word;
        }
        .about-skills-list li:last-child {
          margin-bottom: 0;
        }
        .about-skills-list li::before {
          content: '';
          position: absolute;
          left: 0.3em;
          top: 0.82em;
          width: 0.48em;
          height: 0.48em;
          background: #3b82f6;
          border-radius: 50%;
          transform: translateY(-50%);
          display: inline-block;
        }
      `}</style>
    </Layout>
  );
}
