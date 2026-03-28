import React from 'react';
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineTrendingUp, HiOutlineUsers } from 'react-icons/hi';
import WhyChoose from '../components/WhyChoose';
import EmergencyCTA from '../components/EmergencyCTA';
import './About.css';

const About = () => {
  return (
    <div className="page-enter about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero__bg"></div>
        <div className="container about-hero__content">
          <div className="badge badge-orange mb-6">About QUA Loan</div>
          <h1 className="about-title">
            Revolutionizing Access To <br />
            <span className="text-orange">Instant Credit in India</span>
          </h1>
          <p className="about-subtitle">
            We are a technology-driven fin-tech platform building the smartest and fastest way for Indians to access short-term credit, helping you overcome financial emergencies with dignity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section-padding">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card gradient-border-card">
              <div className="gradient-border-card-inner">
                <div className="mv-icon"><HiOutlineLightBulb size={36} /></div>
                <h3>Our Mission</h3>
                <p>
                  To democratize access to credit for the underserved Indian population by leveraging alternative data and artificial intelligence, providing instant, fair, and transparent financial products.
                </p>
              </div>
            </div>
            
            <div className="mv-card gradient-border-card">
              <div className="gradient-border-card-inner">
                <div className="mv-icon"><HiOutlineGlobeAlt size={36} /></div>
                <h3>Our Vision</h3>
                <p>
                  To become India's most trusted and widely used micro-lending platform, fostering financial inclusion and empowering millions to navigate unexpected financial challenges without stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Advantage */}
      <section className="tech-advantage">
        <div className="container">
          <div className="tech-header">
            <h2 className="section-title">The QUA Technology Advantage</h2>
            <p className="section-subtitle">
              How we dispense loans in 15 minutes when traditional banks take 15 days.
            </p>
          </div>
          
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon"><HiOutlineLightningBolt /></div>
              <h4>AI-Driven Underwriting</h4>
              <p>Our proprietary ML models analyze 500+ data points in real-time to assess creditworthiness without relying solely on traditional CIBIL scores.</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon"><HiOutlineShieldCheck /></div>
              <h4>Bank-Grade Security</h4>
              <p>256-bit AES encryption ensures your personal and financial data is protected with the same technology used by top national banks.</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon"><HiOutlineTrendingUp /></div>
              <h4>Automated Disbursal</h4>
              <p>Integration with IMPS/NEFT APIs allows us to push funds directly into your verified bank account 24/7/365, even on bank holidays.</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon"><HiOutlineUsers /></div>
              <h4>Paperless KYC</h4>
              <p>Seamless integration with UIDAI, NSDL, and DigiLocker allows for instant identity verification without uploading physical documents.</p>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <EmergencyCTA />
    </div>
  );
};

export default About;
