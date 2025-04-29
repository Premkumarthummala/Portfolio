import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <section className="page-banner about-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="banner-decorator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" y1="22" x2="12" y2="12"></line>
            </svg>
          </div>
          <h1 className="banner-title">Prem Kumar Thummala</h1>
          <p className="banner-subtitle">Data Analyst & Business Intelligence Specialist</p>
          <p className="banner-text">Transforming Data into Actionable Insights</p>
          <div className="banner-cta">
            <a href="/resume.pdf" className="banner-button" download>
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" className="banner-button">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <section className="about-content">
        <h2>About Me</h2>
        <p>
          I am a data analyst and business intelligence specialist with expertise in transforming complex data into actionable insights. 
          My experience spans across statistical analysis, data visualization, and predictive modeling, helping organizations make data-driven decisions.
        </p>

        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Data Analysis</h3>
            <ul>
              <li>Statistical Analysis</li>
              <li>Data Cleaning & Preparation</li>
              <li>Exploratory Data Analysis</li>
              <li>Regression Modeling</li>
              <li>Time Series Analysis</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Python (Pandas, NumPy)</li>
              <li>Power BI</li>
              <li>Excel (Advanced)</li>
              <li>SQL</li>
              <li>Tableau</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Business Intelligence</h3>
            <ul>
              <li>Dashboard Development</li>
              <li>KPI Monitoring</li>
              <li>Business Metrics Analysis</li>
              <li>Data Visualization</li>
              <li>Report Automation</li>
            </ul>
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
      </section>
    </Layout>
  );
}
