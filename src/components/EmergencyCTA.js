import React from 'react';
import { Link } from 'react-router-dom';
import { HiLightningBolt, HiArrowRight, HiCheckCircle, HiSparkles } from 'react-icons/hi';
import './EmergencyCTA.css';

const EmergencyCTA = () => {
  const emergencySignals = [
    'Medical bill',
    'Repair shock',
    'Travel urgency',
    'Bill due tonight'
  ];

  return (
    <section className="emergency-cta">
      <div className="container">
        <div className="emergency-cta__card">
          <div className="emergency-cta__glow emergency-cta__glow--one"></div>
          <div className="emergency-cta__glow emergency-cta__glow--two"></div>
          <div className="emergency-cta__content">
            <div className="badge badge-orange mb-6">
              <HiLightningBolt size={16} /> Fast Cash When You Need It Most
            </div>
            
            <h2 className="emergency-cta__title">
              Financial emergency?
              <br />
              <span className="text-orange">Switch to rescue mode.</span>
            </h2>
            
            <p className="emergency-cta__desc">
              Whether it is a medical bill, urgent repair, or unexpected expense, Kashle is built to calm the chaos. Apply now and get up to ₹1,00,000 sent directly to your bank account within minutes.
            </p>

            <div className="emergency-cta__chips" aria-label="Emergency examples">
              {emergencySignals.map((signal) => (
                <span key={signal} className="emergency-cta__chip">
                  <HiSparkles />
                  {signal}
                </span>
              ))}
            </div>

            <ul className="emergency-cta__list">
              <li><HiCheckCircle /> No strict credit score requirements</li>
              <li><HiCheckCircle /> Minimal documentation (PAN & Aadhar)</li>
              <li><HiCheckCircle /> Direct bank transfer in 15 minutes</li>
            </ul>
            
            <div className="emergency-cta__actions">
              <Link to="/loan-calculator" className="btn btn-primary emergency-cta__btn">
                Start The Rescue Flow <HiArrowRight size={20} />
              </Link>
              <span className="emergency-cta__note">24/7 Processing Available</span>
            </div>
          </div>
          
          <div className="emergency-cta__visual">
            <div className="emergency-cta__approval-meter">
              <span className="emergency-cta__approval-label">Rescue readiness</span>
              <strong>92%</strong>
              <div className="emergency-cta__approval-bar">
                <span></span>
              </div>
            </div>
            <div className="emergency-cta__image-frame">
              <img src="/images/cta-person.png" alt="Relieved woman seeing loan approval" className="emergency-cta__image" />
              
              <div className="emergency-cta__testimonial">
                <div className="testimonial__stars">★★★★★</div>
                <p className="testimonial__text">"Got the money in exactly 12 minutes when my car broke down. Lifesaver!"</p>
                <span className="testimonial__author">- Priya S., Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
