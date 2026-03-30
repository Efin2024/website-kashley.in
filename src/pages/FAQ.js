import React, { useState } from 'react';
import { HiChevronDown, HiSparkles } from 'react-icons/hi';
import EmergencyCTA from '../components/EmergencyCTA';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'What is an instant payday loan?',
      a: 'An instant payday loan is a short-term unsecured personal loan designed to cover urgent expenses until your next payday. Kashly sends approved funds directly to your bank account.'
    },
    {
      q: 'How much loan can I get?',
      a: 'Kashly provides instant loans ranging from ₹5,000 to ₹1,00,000 depending on income, credit history, and internal risk checks.'
    },
    {
      q: 'What is the interest rate?',
      a: 'We charge a transparent flat rate of 1% per day on the outstanding principal amount. There are no hidden processing fees or complex compounding surprises.'
    },
    {
      q: 'Is there a penalty for early repayment?',
      a: 'No. You only pay the daily interest for the exact number of days you keep the loan. There are zero pre-closure charges.'
    },
    {
      q: 'What documents do I need to apply?',
      a: 'The flow is fully digital. You typically need your PAN and Aadhaar details linked to your mobile for OTP-based verification.'
    },
    {
      q: 'Do I need a high CIBIL score?',
      a: 'Not always. Our underwriting model reviews more than traditional bureau history alone, which can help where legacy rules are overly rigid.'
    },
    {
      q: 'How long does it take to get the money?',
      a: 'Once approved, transfers are usually completed within 15 minutes via bank rails available around the clock.'
    },
    {
      q: 'What happens if I miss a payment?',
      a: 'Late fees may apply and your credit score may be affected. If repayment becomes difficult, contact support immediately so the issue is surfaced early.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-enter faq-page">
      <section className="faq-hero">
        <div className="container faq-hero__content">
          <div className="eyebrow faq-hero__eyebrow">
            <HiSparkles />
            Support, explained cleanly
          </div>
          <h1 className="faq-title">Answers should feel as clear as the interface itself.</h1>
          <p className="faq-subtitle">
            We grouped the most common borrower questions into one calm, readable knowledge layer so users can resolve uncertainty without friction.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-side-panel">
            <span className="faq-side-panel__kicker">FAQ flow</span>
            <h3>Built for fast reassurance</h3>
            <p>These answers focus on the points that most affect confidence: speed, pricing, verification, repayment, and safety.</p>
          </div>

          <div className="faq-main-card">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <button
                  key={faq.q}
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                  type="button"
                >
                  <div className="faq-question">
                    <h4>{faq.q}</h4>
                    <HiChevronDown className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} size={24} />
                  </div>
                  <div className="faq-answer-wrapper" style={{ maxHeight: activeIndex === index ? '280px' : '0', opacity: activeIndex === index ? 1 : 0 }}>
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <EmergencyCTA />
      </div>
    </div>
  );
};

export default FAQ;
