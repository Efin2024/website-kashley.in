import React, { useEffect, useState } from 'react';
import { HiDocumentText, HiSparkles } from 'react-icons/hi';
import './LegalPage.css';

const legalContentMap = {
  terms: {
    title: 'Terms & Conditions',
    lastUpdated: 'January 15, 2026',
    sections: [
      { h: '1. Acceptance of Terms', p: "By accessing or using Kashley's services, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you may not access the website or use the services." },
      { h: '2. Eligibility', p: 'You must be at least 21 years old, an Indian resident, and have a valid bank account and PAN card to use our services.' },
      { h: '3. Loan Application and Disbursement', p: 'All loan applications are subject to approval based on our credit assessment. We reserve the right to reject any application without providing a reason. Disbursal times are estimates and may be affected by banking hours or technical issues.' },
      { h: '4. Repayment Expectations', p: 'You agree to repay the loan amount plus accrued interest of 1% per day on or before the due date stated in your loan agreement. Failure to do so may result in late fees and reporting to credit bureaus.' }
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'February 22, 2026',
    sections: [
      { h: '1. Information We Collect', p: 'We collect personal information such as your name, mobile number, PAN, Aadhaar details, bank account information, and employment details for identity verification and credit assessment.' },
      { h: '2. How We Use Your Data', p: 'Your data is used to process your loan application, manage your account, prevent fraud, and comply with legal obligations. We do not sell your data to third-party marketers.' },
      { h: '3. Data Security', p: 'We implement technical and organizational safeguards, including 256-bit AES encryption, to protect your personal data from unauthorized access, alteration, or destruction.' },
      { h: '4. Your Rights', p: 'You have the right to access, correct, or request deletion of your personal data, subject to legal and regulatory data retention requirements.' }
    ]
  },
  interest: { title: 'Interest Rate Policy', lastUpdated: 'March 1, 2026', sections: [{ h: '1. Policy Overview', p: 'Our interest rates are fixed at a flat 1% per day on the outstanding principal. This policy follows applicable RBI guidance regarding fair lending.' }] },
  risk: { title: 'Risk Management Policy', lastUpdated: 'March 1, 2026', sections: [{ h: '1. Risk Framework', p: 'We use internal scoring models and alternative data analysis to assess credit risk while aiming to remain compliant and minimize defaults.' }] },
  kyc: { title: 'KYC & AML Policy', lastUpdated: 'March 1, 2026', sections: [{ h: '1. Know Your Customer', p: 'We adhere to RBI KYC and AML guidelines, using regulated identity and verification partners where appropriate.' }] },
  governance: { title: 'Corporate Governance', lastUpdated: 'March 1, 2026', sections: [{ h: '1. Board Oversight', p: 'Our governance framework is designed to support accountability, fairness, and transparency in our relationship with stakeholders.' }] },
  fairpractice: { title: 'Fair Practice Code', lastUpdated: 'March 1, 2026', sections: [{ h: '1. Fair Lending', p: 'We are committed to fair lending practices, non-discrimination, and transparent communication of terms and conditions to borrowers.' }] },
  refund: { title: 'Cancellation & Refund Policy', lastUpdated: 'March 1, 2026', sections: [{ h: '1. Cancellation', p: 'Loan applications can be cancelled before disbursal without penalty. Once funds are disbursed, the loan is active and standard repayment terms apply.' }] }
};

const LegalPage = ({ page }) => {
  const [content, setContent] = useState(legalContentMap.terms);

  useEffect(() => {
    if (legalContentMap[page]) {
      setContent(legalContentMap[page]);
    }
  }, [page]);

  return (
    <div className="page-enter legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-hero__content">
            <div className="eyebrow legal-hero__eyebrow">
              <HiSparkles />
              Regulatory and compliance layer
            </div>
            <h1 className="legal-title">{content.title}</h1>
            <p className="legal-date">Last updated: {content.lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container">
          <div className="legal-wrapper">
            <aside className="legal-sidebar">
              <div className="legal-sidebar__head">
                <HiDocumentText />
                <div>
                  <strong>Policy navigation</strong>
                  <span>Jump to sections</span>
                </div>
              </div>
              <ul>
                {content.sections.map((sec, index) => (
                  <li key={sec.h}>
                    <a href={`#section-${index}`}>{sec.h}</a>
                  </li>
                ))}
              </ul>
            </aside>

            <main className="legal-main">
              <div className="legal-document">
                <p className="legal-intro">
                  This document outlines the official {content.title.toLowerCase()} for Kashley as presented through our digital product and compliance communication layer. Please review it carefully before proceeding with related actions.
                </p>

                {content.sections.map((sec, index) => (
                  <section id={`section-${index}`} className="legal-section" key={sec.h}>
                    <h2 className="legal-h2">{sec.h}</h2>
                    <p className="legal-p">{sec.p}</p>
                  </section>
                ))}

                <div className="legal-footer">
                  <h4>Questions about this policy?</h4>
                  <p>Contact our grievance officer at grievance@kashley.com or call 9999999999.</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
