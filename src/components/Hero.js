import React from 'react';
import { HiCheckCircle, HiArrowRight, HiShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg-gradient"></div>
      
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-icon">⚡</span>
            Fastest Loan Disbursement in India
          </div>
          
          <h1 className="hero__title">
            Your Trusted Partner For <br/>
            <span className="hero__title-highlight">Instant Payday Loans</span>
          </h1>
          
          <p className="hero__subtitle">
            Get instant personal loans up to <span className="highlight-amount">₹1 Lakh</span> at just <strong>1% interest per day</strong>. Repay flexibly within 45 days. 100% Digital, Zero Hassle.
          </p>

          <div className="hero__actions">
            <Link to="/loan-calculator" className="btn btn-primary hero__btn">
              Apply Now <HiArrowRight size={20} />
            </Link>
            <div className="hero__trust-metrics">
              <div className="hero__trust-item">
                <HiShieldCheck size={28} className="hero__trust-icon" />
                <span>RBI Registered NBFC</span>
              </div>
            </div>
          </div>

          <div className="hero__features">
            <div className="hero__feature-check">
              <HiCheckCircle className="hero__check-icon" />
              <span>Instant Approval</span>
            </div>
            <div className="hero__feature-check">
              <HiCheckCircle className="hero__check-icon" />
              <span>Zero Pre-closure Charges</span>
            </div>
            <div className="hero__feature-check">
              <HiCheckCircle className="hero__check-icon" />
              <span>Minimum Documentation</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img src="/images/hero-person.png" alt="Happy customer with approved loan" className="hero__image" />
            <div className="hero__floating-card">
              <div className="hero__card-icon">💸</div>
              <div className="hero__card-text">
                <strong>₹50,000</strong>
                <span>Disbursed instantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
