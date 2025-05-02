import React, { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => AOS.init({ once: true, duration: 800, easing: 'ease-in-out' }));
    }
  }, []);

  return (
    <Layout>
      <section className="about-hero-section gradient-bg animate-hero-fade-in" style={{ marginBottom: '3.5rem', position: 'relative', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', padding: '2.6rem 2.1rem 2.7rem 2.1rem', borderRadius: '2.1rem', textAlign: 'center', boxShadow: '0 6px 40px rgba(30,58,138,0.09)' }}>
        <div className="about-hero-content">
          <h1 className="about-title" style={{ color: '#fff', marginBottom: '1.1rem' }}>Let's Connect</h1>
          <h2 style={{ color: '#c7d2fe', fontWeight: 500, fontSize: '1.35rem', marginBottom: '0.7rem' }}>Get in Touch</h2>
          <p style={{ color: '#e0e7ef', fontSize: '1.12rem', marginBottom: '2.1rem' }}>Have a project in mind? I'd love to help you transform your data into actionable insights</p>
          <div style={{ margin: '0 auto 0 auto', display: 'flex', justifyContent: 'center', gap: '1.2rem' }}>
            <a href="mailto:tpremkumar273@gmail.com" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>📧 Send Email</a>
            <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>
              <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <section className="contact-section section-bg animate-section-fade-in">
        <div className="container">
          <main className="bg-light" data-aos="fade-up">
            <h2 style={{ textAlign: 'center', fontWeight: 600, marginTop: '2rem' }}>Get in Touch</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.15rem', textAlign: 'center', margin: '1.5rem 0' }} data-aos="fade-up" data-aos-delay="200">
              <li style={{ marginBottom: '0.6rem' }}>📧 Email: <a href="mailto:tpremkumar273@gmail.com" style={{ color: '#0070f3', textDecoration: 'underline' }}>tpremkumar273@gmail.com</a></li>
              <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>linkedin.com/in/premkumar-thummala</a></li>
            </ul>
            <h3 data-aos="fade-up" data-aos-delay="400" style={{ textAlign: 'center', fontWeight: 600, marginTop: '2.5rem' }}>Let's Build Together!</h3>
            <p data-aos="fade-up" data-aos-delay="500" style={{ textAlign: 'center', color: '#444', fontSize: '1.13rem', maxWidth: 700, margin: '0 auto 2rem auto' }}>
              I'm currently available for full-time positions, freelance projects, consulting, and part-time collaborations.<br />Let's turn your data into valuable insights!
            </p>
          </main>
        </div>
      </section>
      <svg className="section-divider" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f7fbff" d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"/></svg>
    </Layout>
  );
}
