import React from 'react';
import Layout from '../components/Layout';

const projects = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 56 56">
        {/* Cricket Bat */}
        <rect x="36" y="16" width="7" height="28" rx="2" transform="rotate(35 36 16)" fill="#f2d16b" stroke="#e0b84c" strokeWidth="2"/>
        {/* Handle */}
        <rect x="45" y="10" width="3" height="10" rx="1" transform="rotate(35 45 10)" fill="#a7a7a7" stroke="#888" strokeWidth="1.2"/>
        {/* Ball */}
        <circle cx="20" cy="38" r="6" fill="#e23d3d" stroke="#b71c1c" strokeWidth="2"/>
      </svg>
    ),
    name: 'Virat Kohli ODI Career Performance Analysis',
    tools: 'Excel + Regression',
    description: 'Descriptive statistics and regression modeling of Virat Kohli’s batting performance from 2008–2024.',
    link: '/projects/virat-kohli-odi',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v2c0 1.1 3.6 2 8 2s8-.9 8-2V7"/><path d="M4 13v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2"/></svg>
    ),
    name: 'Food Delivery Business Intelligence Dashboard',
    tools: 'Power BI',
    description: 'Built 6 interactive Power BI dashboards analyzing food delivery business KPIs, customer behavior, and predictive insights.',
    link: '/projects/food-delivery-bi',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg>
    ),
    name: 'U.S. Wage Trends and Employment Analysis',
    tools: 'Python (Pandas, Seaborn, Statsmodels)',
    description: 'Analyzed wage disparities across U.S. occupations using regression, correlation, and ANOVA.',
    link: '/projects/us-wage-trends',
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="page-banner projects-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="banner-decorator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <path d="M3.29 7L12 12 20.71 7M12 22V12"></path>
            </svg>
          </div>
          <h1 className="banner-title">Data Analytics Projects</h1>
          <p className="banner-subtitle">Showcasing Business Intelligence Solutions</p>
          <p className="banner-text">Explore my portfolio of data-driven projects and insights</p>
        </div>
      </section>
      <section className="projects-section">
        <h1 className="projects-title">Projects</h1>
        {/* Projects Overview Paragraph */}
        <div className="projects-overview-paragraph">
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
      </section>
    </Layout>
  );
}
