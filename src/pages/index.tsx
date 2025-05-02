import React from 'react';
import Layout from '../components/Layout';
import HomeProjectsSection from '../components/HomeProjectsSection';
import HomeSkillsSection from '../components/HomeSkillsSection';

export default function Home() {
  return (
    <Layout>
      <section className="about-hero-section gradient-bg animate-hero-fade-in" style={{ marginBottom: '0.7rem', position: 'relative', maxWidth: 820, marginLeft: 'auto', marginRight: 'auto', padding: '2.6rem 2.1rem 2.7rem 2.1rem', borderRadius: '2.1rem', textAlign: 'center', boxShadow: '0 6px 40px rgba(30,58,138,0.09)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/hero-bg.jpg" alt="Prem Kumar Thummala" style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px rgba(30,58,138,0.16)', border: '5px solid #fff' }} />
        </div>
        <div className="about-hero-content" style={{ flex: '1 1 0', minWidth: 0 }}>
          <h1 className="about-title" style={{ color: '#fff', marginBottom: '1.1rem' }}>Prem Kumar Thummala</h1>
          <h2 style={{ color: '#c7d2fe', fontWeight: 500, fontSize: '1.35rem', marginBottom: '0.7rem' }}>Business Intelligence & Analytics Portfolio</h2>
          <p style={{ color: '#e0e7ef', fontSize: '1.12rem', marginBottom: '2.1rem' }}>Transforming complex data into actionable business strategies</p>
          <div style={{ margin: '0 auto 0 auto', display: 'flex', justifyContent: 'center', gap: '1.2rem' }}>
            <a href="/projects" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>📁 View Projects</a>
            <a href="/contact" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>✉️ Get in Touch</a>
          </div>
        </div>
      </section>
      <main className="main-container">
        <HomeProjectsSection />
        <HomeSkillsSection />
      </main>
    </Layout>
  );
}
