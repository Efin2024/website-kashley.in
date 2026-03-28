import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import EmergencyCTA from '../components/EmergencyCTA';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "What is an instant payday loan?",
      a: "An instant payday loan is a short-term, unsecured personal loan designed to help you cover unexpected expenses or cash shortfalls until your next payday. QUA Loan offers these instantly, directly to your bank account."
    },
    {
      q: "How much loan can I get?",
      a: "QUA Loan provides instant loans ranging from ₹5,000 to ₹1,00,000. Your eligible limit depends on your income, credit history, and internal risk assessment."
    },
    {
      q: "What is the interest rate?",
      a: "We charge a transparent flat rate of 1% per day on the outstanding principal amount. There are no hidden fees, processing charges, or complex compounding calculations."
    },
    {
      q: "Is there a penalty for early repayment?",
      a: "No! In fact, we encourage it. You only pay the 1% per day interest for the exact number of days you hold the loan. There are zero pre-closure or foreclosure charges."
    },
    {
      q: "What documents do I need to apply?",
      a: "Our process is 100% digital and paperless. You only need your PAN Card number and Aadhar Card number (linked to your mobile for OTP verification). We fetch your details instantly."
    },
    {
      q: "Do I need a high CIBIL score to get a loan?",
      a: "While we do check your credit history, our AI-driven underwriting model looks at over 500 data points. We often approve loans for individuals who might be rejected by traditional banks due to strict CIBIL requirements."
    },
    {
      q: "How long does it take to get the money?",
      a: "Once approved, the funds are transferred to your verified bank account usually within 15 minutes via IMPS/NEFT, available 24/7/365."
    },
    {
      q: "What happens if I miss a payment?",
      a: "If you fail to repay by the end of your 45-day term, late payment penalties will apply, and it may negatively impact your credit score. We strongly urge you only to borrow what you can repay. If facing genuine difficulties, contact our support team immediately."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-enter faq-page">
      <div className="container">
        <div className="faq-header text-center">
          <div className="badge badge-orange mb-6">Support & Help</div>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">Everything you need to know about getting an instant payday loan with QUA. We believe in complete transparency.</p>
        </div>

        <div className="faq-wrapper">
          <div className="gradient-border-card">
            <div className="gradient-border-card-inner faq-inner">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="faq-question">
                      <h4>{faq.q}</h4>
                      <HiChevronDown className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} size={24} />
                    </div>
                    <div 
                      className="faq-answer-wrapper" 
                      style={{ 
                        maxHeight: activeIndex === index ? '300px' : '0',
                        opacity: activeIndex === index ? 1 : 0
                      }}
                    >
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
