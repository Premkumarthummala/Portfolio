import React from 'react';
import Layout from '../components/Layout';
import HomeProjectsSection from '../components/HomeProjectsSection';
import HomeSkillsSection from '../components/HomeSkillsSection';
import { FaBriefcase, FaChartBar, FaCertificate, FaDatabase, FaGraduationCap, FaUserTie, FaBrain, FaPython, FaRProject, FaTable, FaCheckCircle } from 'react-icons/fa';
import { SiPowerbi, SiMysql, SiTableau } from 'react-icons/si';

export default function Home() {
  return (
    <Layout>
      <section
        className="about-hero-section gradient-bg animate-hero-fade-in"
        style={{
          marginBottom: '0.7rem',
          position: 'relative',
          maxWidth: 820,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '2.6rem 2.1rem 2.7rem 2.1rem',
          borderRadius: '2.1rem',
          textAlign: 'center',
          boxShadow: '0 6px 40px rgba(30,58,138,0.09)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}
      >
        <div className="hero-img-wrapper" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/profile.jpg"
            alt="Prem Kumar Thummala"
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 24px rgba(30,58,138,0.16)',
              border: '5px solid #fff',
            }}
          />
        </div>
        <div className="about-hero-content" style={{ flex: '1 1 0', minWidth: 0 }}>
          {/* Highlight Badge */}
          <div className="hero-highlight-badge">
            <FaCheckCircle style={{ marginRight: 6, color: '#ffe066', verticalAlign: 'middle' }} /> Open to Work · May 2025
          </div>
          <h1 className="about-title" style={{ color: '#fff', marginBottom: '1.1rem', marginTop: 8 }}>
            Prem Kumar Thummala
          </h1>
          {/* Punchy Subtitle */}
          <div className="hero-punchy-subtitle">
            Helping businesses grow with data — <span className="hero-yellow"><SiPowerbi style={{ verticalAlign: 'middle', marginRight: 2 }} /> SQL, Power BI & Python <FaPython style={{ verticalAlign: 'middle', marginLeft: 2 }} /> at your service.</span>
          </div>
          <p style={{ color: '#e0e7ef', fontSize: '1.12rem', marginBottom: '2.1rem', display: 'none' }}>
            Transforming complex data into actionable business strategies
          </p>
          <div
            style={{
              margin: '0 auto 0 auto',
              display: 'flex',
              justifyContent: 'center',
              gap: '1.2rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/projects"
              className="button cta-gradient"
              style={{
                minWidth: 180,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5em',
                justifyContent: 'center',
                fontSize: '1.13rem',
                textDecoration: 'none',
                marginBottom: 12,
              }}
            >
              <FaChartBar style={{ marginRight: 6, verticalAlign: 'middle' }} /> View Projects
            </a>
            <a
              href="/contact"
              className="button cta-gradient"
              style={{
                minWidth: 180,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5em',
                justifyContent: 'center',
                fontSize: '1.13rem',
                textDecoration: 'none',
                marginBottom: 12,
              }}
            >
              <FaBriefcase style={{ marginRight: 6, verticalAlign: 'middle' }} /> Get in Touch
            </a>
          </div>
          {/* Highlights Block */}
          <div className="hero-highlights-block">
            <div className="hero-highlights-line">
              <FaChartBar style={{ marginRight: 4, verticalAlign: 'middle' }} /> 12+ Analytics Projects · <FaBriefcase style={{ marginRight: 4, verticalAlign: 'middle' }} /> 5+ Business Domains · <FaTable style={{ marginRight: 4, verticalAlign: 'middle' }} /> 4 Dashboards Built · <FaCertificate style={{ marginRight: 4, verticalAlign: 'middle' }} /> Power BI Certified
            </div>
            <div className="hero-highlights-line">
              <FaDatabase style={{ marginRight: 4, verticalAlign: 'middle' }} /> SQL · <FaPython style={{ marginRight: 4, verticalAlign: 'middle' }} /> Python · <FaRProject style={{ marginRight: 4, verticalAlign: 'middle' }} /> R · <SiMysql style={{ marginRight: 4, verticalAlign: 'middle' }} /> MySQL · <SiTableau style={{ marginRight: 4, verticalAlign: 'middle' }} /> Tableau
            </div>
          </div>
          {/* Persona Tags Row */}
          <div className="hero-persona-tags">
            <span className="persona-badge persona-student"><FaGraduationCap style={{ marginRight: 4, verticalAlign: 'middle' }} /> As a Student</span>
            <span className="persona-badge persona-pro"><FaUserTie style={{ marginRight: 4, verticalAlign: 'middle' }} /> As a Professional</span>
            <span className="persona-badge persona-solver"><FaBrain style={{ marginRight: 4, verticalAlign: 'middle' }} /> As a Problem Solver</span>
          </div>
        </div>
        <style>{`
          .hero-highlight-badge {
            display: inline-block;
            background: rgba(255,255,255,0.12);
            color: #f7f7a4;
            font-size: 0.98rem;
            font-weight: 500;
            letter-spacing: 0.01em;
            border-radius: 1.2em;
            padding: 0.25em 1.1em;
            margin-bottom: 0.35em;
            margin-top: 0.3em;
            text-align: center;
            box-shadow: 0 1px 8px rgba(255,255,0,0.04);
          }
          .hero-punchy-subtitle {
            font-size: 1.12rem;
            color: #ffe066;
            font-weight: 700;
            margin-bottom: 1.15rem;
            margin-top: 0.1rem;
            text-align: center;
          }
          .hero-yellow {
            color: #ffd600;
            font-weight: 800;
          }
          .hero-highlights-block {
            margin: 1.1rem auto 0.5rem auto;
            background: rgba(255,255,255,0.10);
            border-radius: 0.9em;
            padding: 0.7em 1.1em;
            color: #fffde9;
            font-size: 1.01rem;
            font-weight: 500;
            text-align: center;
            box-shadow: 0 1px 8px rgba(255,255,0,0.04);
            max-width: 480px;
          }
          .hero-highlights-line {
            margin-bottom: 0.15em;
            letter-spacing: 0.01em;
            line-height: 1.6;
          }
          .hero-highlights-line:last-child {
            margin-bottom: 0;
          }
          .hero-persona-tags {
            margin-top: 0.7em;
            display: flex;
            flex-wrap: wrap;
            gap: 0.7em;
            justify-content: center;
          }
          .persona-badge {
            display: inline-block;
            font-size: 0.93rem;
            font-weight: 600;
            padding: 0.32em 1.05em;
            border-radius: 1.1em;
            background: #f4f4f4;
            color: #333;
            box-shadow: 0 1px 6px rgba(0,0,0,0.03);
            letter-spacing: 0.01em;
          }
          .persona-student {
            background: #e0e7ff;
            color: #1e40af;
          }
          .persona-pro {
            background: #e0ffe0;
            color: #19762d;
          }
          .persona-solver {
            background: #fff9db;
            color: #b58105;
          }
          @media (max-width: 768px) {
            .about-hero-section.gradient-bg.animate-hero-fade-in {
              flex-direction: column !important;
              padding: 2.2rem 0.7rem 2.2rem 0.7rem !important;
              gap: 1.5rem !important;
            }
            .hero-img-wrapper {
              justify-content: center !important;
              margin-bottom: 0.7rem;
            }
            .about-hero-content {
              text-align: center !important;
              align-items: center !important;
            }
            .about-title {
              font-size: 1.45rem !important;
            }
            .about-hero-section img {
              width: 120px !important;
              height: 120px !important;
            }
            .button.cta-gradient {
              min-width: 130px !important;
              font-size: 1rem !important;
              padding: 0.7em 1.2em !important;
              margin-bottom: 10px !important;
            }
            .hero-highlights-block {
              font-size: 0.98rem !important;
              padding: 0.6em 0.3em !important;
              max-width: 98vw;
            }
            .hero-persona-tags {
              gap: 0.5em;
            }
            .persona-badge {
              font-size: 0.89rem !important;
              padding: 0.25em 0.7em !important;
            }
          }
        `}</style>
      </section>
      <main className="main-container">
        <HomeProjectsSection />
        <HomeSkillsSection />
      </main>
    </Layout>
  );
}
