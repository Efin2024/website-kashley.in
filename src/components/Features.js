import React from 'react';
import { HiLightningBolt, HiShieldCheck, HiDocumentText, HiCurrencyRupee, HiSparkles } from 'react-icons/hi';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <HiLightningBolt size={32} />,
      tier: 'Stage 01',
      title: 'Instant Approval',
      desc: 'Get your loan approved and disbursed in under 15 minutes.',
      accent: 'Speed Run'
    },
    {
      id: 2,
      icon: <HiDocumentText size={32} />,
      tier: 'Stage 02',
      title: '100% Paperless',
      desc: 'No branch visits. Complete your KYC completely online.',
      accent: 'Zero Queue'
    },
    {
      id: 3,
      icon: <HiCurrencyRupee size={32} />,
      tier: 'Stage 03',
      title: 'Transparent Pricing',
      desc: 'Flat 1% daily interest. Zero hidden charges or fees.',
      accent: 'No Surprises'
    },
    {
      id: 4,
      icon: <HiShieldCheck size={32} />,
      tier: 'Stage 04',
      title: 'Safe & Secure',
      desc: 'Bank-grade encryption protecting your personal data.',
      accent: 'Shielded'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <div className="features__eyebrow">
            <HiSparkles />
            Premium Borrowing Flow
          </div>
          <h2 className="section-title">Why Indians Choose Kashley</h2>
          <p className="section-subtitle">
            We designed the journey like a four-stage unlock: less friction, more clarity, and visible momentum from application to payout.
          </p>
        </div>

        <div className="gradient-border-card">
          <div className="gradient-border-card-inner features__grid">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="features__card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="features__card-top">
                  <span className="features__tier">{feature.tier}</span>
                  <span className="features__accent">{feature.accent}</span>
                </div>
                <div className={`features__icon-wrapper features__icon-${index + 1}`}>
                  {feature.icon}
                </div>
                <h3 className="features__card-title">{feature.title}</h3>
                <p className="features__card-desc">{feature.desc}</p>
                <div className="features__meter">
                  <span className="features__meter-fill"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
