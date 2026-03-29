import React from 'react';
import {
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiSparkles
} from 'react-icons/hi';
import EmergencyCTA from '../components/EmergencyCTA';
import './About.css';

const principles = [
  {
    icon: <HiOutlineLightBulb size={34} />,
    title: 'Our Mission',
    desc: 'Democratize access to short-term credit with faster underwriting, clearer pricing, and a more humane borrower experience.'
  },
  {
    icon: <HiOutlineGlobeAlt size={34} />,
    title: 'Our Vision',
    desc: 'Become the most trusted digital credit layer for urgent Indian financial moments, without the stress and opacity of legacy lending.'
  }
];

const advantageCards = [
  {
    icon: <HiOutlineLightningBolt />,
    title: 'AI-driven underwriting',
    desc: 'Real-time decisioning allows QUA to move at product speed instead of branch speed.'
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Bank-grade trust',
    desc: 'Security cues, encryption, and clear risk messaging are treated as product features, not footnotes.'
  },
  {
    icon: <HiOutlineTrendingUp />,
    title: 'Always-on disbursal rails',
    desc: 'Integrated transfer systems help approved borrowers receive funds around the clock.'
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Paper-light onboarding',
    desc: 'A focused digital flow keeps identity verification and eligibility checks quick and understandable.'
  }
];

const storyMoments = [
  {
    id: 'clarity',
    label: 'Clarity First',
    title: 'We remove the emotional noise around urgent borrowing.',
    desc: 'Borrowers should not have to guess what happens next. We treat product clarity like a trust feature.'
  },
  {
    id: 'trust',
    label: 'Trust Surface',
    title: 'We keep risk, pricing, and security signals visible.',
    desc: 'That means less buried complexity and more confidence at every critical decision point.'
  },
  {
    id: 'speed',
    label: 'Speed Engine',
    title: 'We use technology to shorten the time between stress and relief.',
    desc: 'The goal is not just a fast loan. The goal is a calmer experience under pressure.'
  }
];

const About = () => {
  return (
    <div className="page-enter about-page">
      <section className="about-hero">
        <div className="container about-hero__content">
          <div className="eyebrow about-hero__eyebrow">
            <HiSparkles />
            Built as a product, not a paperwork maze
          </div>
          <div className="about-hero__grid">
            <div>
              <h1 className="about-title">We are redesigning how urgent credit feels.</h1>
              <p className="about-subtitle">
                QUA combines trust, speed, and transparent economics into a calmer lending experience for real-life emergencies. Instead of making users decode finance, we design clarity into the interface itself.
              </p>
              <div className="about-hero__ticker" aria-hidden="true">
                <div className="about-hero__ticker-track">
                  <span>Fast underwriting</span>
                  <span>Clear pricing</span>
                  <span>Visible trust cues</span>
                  <span>Digital verification</span>
                  <span>Fast underwriting</span>
                  <span>Clear pricing</span>
                  <span>Visible trust cues</span>
                  <span>Digital verification</span>
                </div>
              </div>
            </div>
            <div className="about-hero__visual">
              <div className="about-hero__orb about-hero__orb--one"></div>
              <div className="about-hero__orb about-hero__orb--two"></div>
              <div className="about-hero__panel glass-panel">
                <div className="about-hero__panel-top">
                  <span>QUA confidence layer</span>
                  <strong>10L+</strong>
                </div>
                <div className="about-hero__panel-grid">
                  <div>
                    <span>Average transfer</span>
                    <strong>12 min</strong>
                  </div>
                  <div>
                    <span>Pricing model</span>
                    <strong>1% / day</strong>
                  </div>
                  <div>
                    <span>Processing</span>
                    <strong>24/7</strong>
                  </div>
                  <div>
                    <span>Loan runway</span>
                    <strong>₹1 Lakh</strong>
                  </div>
                </div>

                <div className="about-hero__pulse-card about-hero__pulse-card--top">
                  <span>Borrower trust</span>
                  <strong>Visible at every step</strong>
                </div>

                <div className="about-hero__pulse-card about-hero__pulse-card--bottom">
                  <span>Product approach</span>
                  <strong>Designed for calm under pressure</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="container">
          <div className="about-principles__grid">
            {principles.map((item) => (
              <div key={item.title} className="about-principle-card">
                <div className="about-principle-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story__grid">
          <div className="about-story__sticky">
            <div className="about-story__copy">
              <span className="about-story__kicker">Why this matters</span>
              <h2>Credit products should reduce stress, not amplify it.</h2>
              <p>
                Traditional short-term lending often feels fragmented, uncertain, and overly procedural. QUA is built around one idea: urgent borrowing should feel guided, premium, and understandable from the first tap to repayment.
              </p>
              <p>
                That philosophy shapes our product language, our risk communication, our digital verification flow, and the way we surface pricing and timelines.
              </p>
            </div>
          </div>
          <div className="about-story__timeline">
            {storyMoments.map((moment, index) => (
              <div className="about-story__step" key={moment.id}>
                <strong>0{index + 1}</strong>
                <div className="about-story__step-content">
                  <span className="about-story__step-label">{moment.label}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-advantage">
        <div className="container">
          <div className="about-advantage__header">
            <h2 className="section-title">The QUA Technology Advantage</h2>
            <p className="section-subtitle">
              The operational layer behind the visual calm: better underwriting, stronger security, and faster money movement.
            </p>
          </div>

          <div className="about-advantage__grid">
            {advantageCards.map((card) => (
              <div key={card.title} className="about-advantage__card">
                <div className="about-advantage__icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </div>
  );
};

export default About;
