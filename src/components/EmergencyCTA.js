import React from 'react';
import { Link } from 'react-router-dom';
import { HiLightningBolt, HiArrowRight } from 'react-icons/hi';
import './EmergencyCTA.css';

const EmergencyCTA = () => {
  return (
    <section className="emergency-cta">
      <div className="container">
        <div className="emergency-cta__card">
          <div className="emergency-cta__content">
            <div className="badge badge-orange mb-6">
              <HiLightningBolt size={16} /> Fast Cash When You Need It Most
            </div>
            
            <h2 className="emergency-cta__title">
              Financial emergency? <br/>
              <span className="text-orange">Don't panic, we've got you.</span>
            </h2>
            
            <p className="emergency-cta__desc">
              Whether it's a medical bill, urgent repair, or unexpected expense, QUA Loan is here to help. Apply now and get up to ₹1,00,000 sent directly to your bank account within minutes.
            </p>

            <ul className="emergency-cta__list">
              <li>✓ No strict credit score requirements</li>
              <li>✓ Minimal documentation (PAN & Aadhar)</li>
              <li>✓ Direct bank transfer in 15 minutes</li>
            </ul>
            
            <div className="emergency-cta__actions">
              <Link to="/loan-calculator" className="btn btn-primary emergency-cta__btn">
                Apply For Loan Now <HiArrowRight size={20} />
              </Link>
              <span className="emergency-cta__note">24/7 Processing Available</span>
            </div>
          </div>
          
          <div className="emergency-cta__visual">
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
