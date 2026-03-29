import React from 'react';
import { HiCheckCircle, HiArrowRight, HiShieldCheck, HiSparkles, HiClock, HiTrendingUp } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const quickStats = [
    { value: '12 min', label: 'Fast-track average' },
    { value: '₹1L', label: 'Emergency runway' },
    { value: '24/7', label: 'Any-hour processing' }
  ];

  return (
    <section className="hero">
      <div className="hero__bg-gradient"></div>
      <div className="hero__ambient hero__ambient--left"></div>
      <div className="hero__ambient hero__ambient--right"></div>
      
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-icon">⚡</span>
            Fastest Loan Disbursement in India
          </div>
          
          <h1 className="hero__title">
            Turn urgent money moments
            <br />
            into a <span className="hero__title-highlight">smooth unlock</span>
          </h1>
          
          <p className="hero__subtitle">
            QUA blends the speed of a checkout flow with the calm of a premium product experience. Get up to <span className="highlight-amount">₹1 Lakh</span>, transparent <strong>1% per day pricing</strong>, and a fully digital journey built for real emergencies.
          </p>

          <div className="hero__actions">
            <Link to="/loan-calculator" className="btn btn-primary hero__btn">
              Start Your Fast Track <HiArrowRight size={20} />
            </Link>
            <div className="hero__trust-metrics">
              <div className="hero__trust-item">
                <HiShieldCheck size={28} className="hero__trust-icon" />
                <span>RBI Registered NBFC</span>
              </div>
            </div>
          </div>

          <div className="hero__quick-stats" aria-label="Loan highlights">
            {quickStats.map((stat) => (
              <div key={stat.label} className="hero__quick-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__features">
            <div className="hero__feature-check">
              <HiCheckCircle className="hero__check-icon" />
              <span>Instant approval path</span>
            </div>
            <div className="hero__feature-check">
              <HiCheckCircle className="hero__check-icon" />
              <span>Zero pre-closure charges</span>
            </div>
            <div className="hero__feature-check">
              <HiCheckCircle className="hero__check-icon" />
              <span>Minimum documentation</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-orbit hero__visual-orbit--one"></div>
          <div className="hero__visual-orbit hero__visual-orbit--two"></div>
          <div className="hero__image-wrapper">
            <div className="hero__eyebrow">QUA Fast Lane</div>
            <div className="hero__scoreboard">
              <div className="hero__scoreboard-top">
                <span className="hero__score-label">Approval signal</span>
                <span className="hero__score-value">96%</span>
              </div>
              <div className="hero__scorebar">
                <span className="hero__scorebar-fill"></span>
              </div>
            </div>

            <div className="hero__showcase">
              <div className="hero__showcase-ring"></div>
              <img src="/images/hero-person.png" alt="Happy customer with approved loan" className="hero__image" />
            </div>

            <div className="hero__floating-card">
              <div className="hero__card-icon">💸</div>
              <div className="hero__card-text">
                <strong>₹50,000</strong>
                <span>Disbursed instantly</span>
              </div>
            </div>

            <div className="hero__mini-panel hero__mini-panel--left">
              <HiClock />
              <div>
                <strong>12m</strong>
                <span>Average completion</span>
              </div>
            </div>

            <div className="hero__mini-panel hero__mini-panel--right">
              <HiTrendingUp />
              <div>
                <strong>Level Up</strong>
                <span>Emergency solved faster</span>
              </div>
            </div>

            <div className="hero__ticker" aria-hidden="true">
              <div className="hero__ticker-track">
                <span><HiSparkles /> Apply</span>
                <span><HiCheckCircle /> Verify</span>
                <span><HiShieldCheck /> Approve</span>
                <span><HiArrowRight /> Disburse</span>
                <span><HiSparkles /> Apply</span>
                <span><HiCheckCircle /> Verify</span>
                <span><HiShieldCheck /> Approve</span>
                <span><HiArrowRight /> Disburse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
