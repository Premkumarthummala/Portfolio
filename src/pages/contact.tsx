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
      <section className="page-banner contact-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="banner-decorator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h1 className="banner-title">Let's Connect</h1>
          <p className="banner-subtitle">Get in Touch</p>
          <p className="banner-text">Have a project in mind? I'd love to help you transform your data into actionable insights</p>
          <div className="banner-cta">
            <a href="mailto:tpremkumar273@gmail.com" className="banner-button">Send Email</a>
            <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" className="banner-button">LinkedIn Profile</a>
          </div>
        </div>
      </section>
      <main className="bg-light" data-aos="fade-up">
        <h2 style={{ textAlign: 'center', fontWeight: 600, marginTop: '2rem' }}>Get in Touch</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.15rem', textAlign: 'center', margin: '1.5rem 0' }} data-aos="fade-up" data-aos-delay="200">
          <li style={{ marginBottom: '0.6rem' }}>📧 Email: <a href="mailto:tpremkumar273@gmail.com" style={{ color: '#0070f3', textDecoration: 'underline' }}>tpremkumar273@gmail.com</a></li>
          <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>linkedin.com/in/premkumar-thummala</a></li>
        </ul>
        <h3 data-aos="fade-up" data-aos-delay="400" style={{ textAlign: 'center', fontWeight: 600, marginTop: '2.5rem' }}>Let's Build Together!</h3>
        <p data-aos="fade-up" data-aos-delay="500" style={{ textAlign: 'center', color: '#444', fontSize: '1.13rem', maxWidth: 700, margin: '0 auto 2rem auto' }}>
          I'm currently available for freelance projects, consulting, and part-time collaborations.<br />Let's turn your data into valuable insights!
        </p>
      </main>
    </Layout>
  );
}
