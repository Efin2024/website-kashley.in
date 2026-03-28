import React from 'react';
import { HiLightningBolt, HiShieldCheck, HiDocumentText, HiCurrencyRupee } from 'react-icons/hi';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <HiLightningBolt size={32} />,
      title: 'Instant Approval',
      desc: 'Get your loan approved and disbursed in under 15 minutes.'
    },
    {
      id: 2,
      icon: <HiDocumentText size={32} />,
      title: '100% Paperless',
      desc: 'No branch visits. Complete your KYC completely online.'
    },
    {
      id: 3,
      icon: <HiCurrencyRupee size={32} />,
      title: 'Transparent Pricing',
      desc: 'Flat 1% daily interest. Zero hidden charges or fees.'
    },
    {
      id: 4,
      icon: <HiShieldCheck size={32} />,
      title: 'Safe & Secure',
      desc: 'Bank-grade encryption protecting your personal data.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <h2 className="section-title">Why Indians Choose QUA</h2>
          <p className="section-subtitle">
            Experience the fastest, most reliable payday loan service tailored perfectly to handle your financial emergencies.
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
                <div className={`features__icon-wrapper features__icon-${index + 1}`}>
                  {feature.icon}
                </div>
                <h3 className="features__card-title">{feature.title}</h3>
                <p className="features__card-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
