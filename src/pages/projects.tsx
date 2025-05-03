import React from 'react';
import Layout from '../components/Layout';
import { GiCricketBat, GiHamburger } from 'react-icons/gi';
import { FaBriefcase } from 'react-icons/fa';

const projects = [
  {
    icon: <GiCricketBat style={{ color: '#e0b84c', fontSize: 38 }} />, // Cricket Bat
    name: 'Virat Kohli ODI Career Performance Analysis',
    tools: 'Excel + Regression',
    description: 'Descriptive statistics and regression modeling of Virat Kohli’s batting performance from 2008–2024.',
    link: '/projects/virat-kohli-odi',
  },
  {
    icon: <GiHamburger style={{ color: '#0070f3', fontSize: 38 }} />, // Burger
    name: 'Food Delivery Business Intelligence Dashboard',
    tools: 'Power BI',
    description: 'Built 6 interactive Power BI dashboards analyzing food delivery business KPIs, customer behavior, and predictive insights.',
    link: '/projects/food-delivery-bi',
  },
  {
    icon: <FaBriefcase style={{ color: '#0070f3', fontSize: 36 }} />, // Briefcase
    name: 'U.S. Wage Trends and Employment Analysis',
    tools: 'Python (Pandas, Seaborn, Statsmodels)',
    description: 'Analyzed wage disparities across U.S. occupations using regression, correlation, and ANOVA.',
    link: '/projects/us-wage-trends',
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="about-hero-section gradient-bg animate-hero-fade-in" style={{ marginBottom: '3.5rem', position: 'relative', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', padding: '2.6rem 2.1rem 2.7rem 2.1rem', borderRadius: '2.1rem', textAlign: 'center', boxShadow: '0 6px 40px rgba(30,58,138,0.09)' }}>
        <div className="about-hero-content">
          <h1 className="about-title" style={{ color: '#fff', marginBottom: '1.1rem' }}>Data Analytics Projects</h1>
          <h2 style={{ color: '#c7d2fe', fontWeight: 500, fontSize: '1.35rem', marginBottom: '0.7rem' }}>Showcasing Business Intelligence Solutions</h2>
          <p style={{ color: '#e0e7ef', fontSize: '1.12rem', marginBottom: '2.1rem' }}>Explore my portfolio of data-driven projects and insights</p>
        </div>
      </section>
      <section className="projects-section section-bg animate-section-fade-in">
        <div className="container">
          <h1 className="projects-title">Projects</h1>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <a
                className="project-card"
                key={proj.name}
                href={proj.link}
                tabIndex={0}
                aria-label={proj.name}
                style={{ textDecoration: 'none', '--card-index': idx } as React.CSSProperties}
              >
                <div className="project-icon">{proj.icon}</div>
                <div className="project-name">{proj.name}</div>
                <div className="project-tools">{proj.tools}</div>
                <div className="project-description">{proj.description}</div>
              </a>
            ))}
          </div>
          {/* Projects Overview Paragraph - moved below grid */}
          <div className="projects-overview-paragraph" style={{ marginTop: '2.5rem' }}>
            <strong>Projects Overview</strong>
            <br /><br />
            My portfolio showcases a diverse range of data analytics projects covering:
            <ul className="projects-overview-list">
              <li><strong>Descriptive Analytics (Excel):</strong><br />Statistical analysis and trend forecasting through regression modeling.</li>
              <li><strong>Business Intelligence Dashboarding (Power BI):</strong><br />Interactive dashboards analyzing business KPIs, customer behavior, and operational efficiency.</li>
              <li><strong>Predictive Modeling and Statistical Analysis (Python):</strong><br />Data cleaning, regression modeling, ANOVA testing, and advanced visualization.</li>
            </ul>
            Each project reflects my end-to-end analytical skills — from data preparation and exploratory analysis to advanced statistical modeling, predictive insights, and data storytelling.<br/>
            I work across multiple tools and industries, translating raw data into actionable strategies that support informed decision-making and business growth.
          </div>
        </div>
      </section>
      <svg className="section-divider" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f7fbff" d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"/></svg>
    </Layout>
  );
}
