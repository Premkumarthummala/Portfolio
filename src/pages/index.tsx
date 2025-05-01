import React from 'react';
import Layout from '../components/Layout';
import HomeProjectsSection from '../components/HomeProjectsSection';

export default function Home() {
  return (
    <Layout>
      <section className="page-banner home-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="banner-decorator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h1 className="banner-title">Prem Kumar Thummala</h1>
          <p className="banner-subtitle">Business Intelligence & Analytics Portfolio</p>
          <p className="banner-text">Transforming complex data into actionable business strategies</p>
          <div className="banner-cta">
            <a href="/projects" className="banner-button">View Projects</a>
            <a href="/contact" className="banner-button">Get in Touch</a>
          </div>
        </div>
      </section>
      <main style={{ padding: 0, background: '#fff' }}>
        <HomeProjectsSection />
      </main>
    </Layout>
  );
}
