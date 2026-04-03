import React from 'react';
import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineClock, HiOutlineBadgeCheck } from 'react-icons/hi';
import './WhyChoose.css';

const WhyChoose = () => {
  const features = [
    {
      icon: <HiOutlineSparkles size={36} />,
      title: "1% Interest/Day",
      desc: "Transparent and predictable. Pay exactly 1% interest per day for exactly the days you use the loan."
    },
    {
      icon: <HiOutlineClock size={36} />,
      title: "45 Days Term",
      desc: "Flexible repayment options. Return the money anytime within 45 days with zero pre-closure charges."
    },
    {
      icon: <HiOutlineUserGroup size={36} />,
      title: "10L+ Customers",
      desc: "Join a growing community of Indians who trust Kashley for their urgent financial needs."
    },
    {
      icon: <HiOutlineShieldCheck size={36} />,
      title: "RBI Registered",
      desc: "We operate strictly within RBI guidelines to ensure your complete safety and peace of mind."
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="why-choose__header text-center">
          <div className="why-choose__eyebrow">
            <HiOutlineBadgeCheck />
            Confidence Layer
          </div>
          <h2 className="section-title">The Best Payday Loan in India</h2>
          <p className="section-subtitle">
            Need cash urgently? We stripped out the friction and surfaced the signals that matter, so every step feels clear, premium, and reassuring.
          </p>
        </div>

        <div className="why-choose__grid">
          {features.map((feature, i) => (
            <div key={i} className="why-choose__card" style={{ animationDelay: `${i * 0.15}s` }}>
              <span className="why-choose__step">Proof 0{i + 1}</span>
              <div className="why-choose__icon">{feature.icon}</div>
              <h3 className="why-choose__title">{feature.title}</h3>
              <p className="why-choose__desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-choose__stats-banner">
          <div className="stat-item">
            <span className="stat-value">₹1Lakh</span>
            <span className="stat-label">Maximum Loan Amount</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Digital Process</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">15Min</span>
            <span className="stat-label">Average Disbursal Time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
