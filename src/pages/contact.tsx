import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { FaEnvelope, FaLinkedin, FaUser } from 'react-icons/fa';

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
          <h1 className="about-title" style={{ color: '#fff', marginBottom: '1.1rem' }}>Contact Me</h1>
          <p style={{ color: '#e0e7ef', fontSize: '1.12rem', marginBottom: '2.1rem' }}>Let's connect! I'm available for full-time roles, freelance, and collaborations.</p>
          <div style={{ margin: '0 auto 0 auto', display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a href="mailto:tpremkumar273@gmail.com" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>
              <FaEnvelope style={{ marginRight: 6, verticalAlign: 'middle' }} /> Email
            </a>
            <a href="https://www.linkedin.com/in/premkumar-thummala" target="_blank" rel="noopener noreferrer" className="button cta-gradient" style={{ minWidth: 180, display: 'inline-flex', alignItems: 'center', gap: '0.5em', justifyContent: 'center', fontSize: '1.13rem', textDecoration: 'none' }}>
              <FaLinkedin style={{ marginRight: 6, verticalAlign: 'middle' }} /> LinkedIn
            </a>
          </div>
        </div>
        <form style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 18px rgba(30,58,138,0.06)', padding: '2rem 1.5rem', marginTop: '2rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaUser style={{ color: '#1976D2', fontSize: 18 }} />
            <input type="text" placeholder="Your Name" style={{ flex: 1, padding: '0.7em', borderRadius: 8, border: '1px solid #e0e7ef', fontSize: '1rem' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaEnvelope style={{ color: '#1976D2', fontSize: 18 }} />
            <input type="email" placeholder="Your Email" style={{ flex: 1, padding: '0.7em', borderRadius: 8, border: '1px solid #e0e7ef', fontSize: '1rem' }} />
          </div>
          <textarea placeholder="Your Message" style={{ padding: '0.7em', borderRadius: 8, border: '1px solid #e0e7ef', fontSize: '1rem', minHeight: 100 }} />
          <button type="submit" className="button cta-gradient" style={{ fontWeight: 700, fontSize: '1.1rem', marginTop: 8 }}>Send Message</button>
        </form>
      </section>
      <svg className="section-divider" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f7fbff" d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"/></svg>
    </Layout>
  );
}
