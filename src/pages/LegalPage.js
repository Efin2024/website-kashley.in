import React, { useEffect, useState } from 'react';
import { HiDocumentText } from 'react-icons/hi';
import './LegalPage.css';

const legalContentMap = {
  terms: {
    title: "Terms & Conditions",
    lastUpdated: "January 15, 2026",
    sections: [
      { h: "1. Acceptance of Terms", p: "By accessing or using QUA Loan's services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, then you may not access the website or use any services." },
      { h: "2. Eligibility", p: "You must be at least 21 years of age, an Indian resident, and have a valid bank account and PAN card to use our services." },
      { h: "3. Loan Application and Disbursement", p: "All loan applications are subject to approval based on our proprietary credit assessment. We reserve the right to reject any application without providing a reason. Disbursal times are estimates and may be affected by banking hours or technical issues." },
      { h: "4. Repayment Expectations", p: "You agree to repay the loan amount plus the accrued interest of 1% per day on or before the due date as specified in your loan agreement. Failure to do so will result in late fees and reporting to credit bureaus." }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "February 22, 2026",
    sections: [
      { h: "1. Information We Collect", p: "We collect personal information such as your name, mobile number, PAN, Aadhar details, bank account information, and employment details strictly for the purpose of identity verification and credit assessment." },
      { h: "2. How We Use Your Data", p: "Your data is used to process your loan application, manage your account, prevent fraud, and comply with legal obligations. We do NOT sell your data to third-party marketers." },
      { h: "3. Data Security", p: "We implement robust technical and organizational measures, including 256-bit AES encryption, to protect your personal data against unauthorized access, alteration, or destruction." },
      { h: "4. Your Rights", p: "You have the right to access, correct, or request the deletion of your personal data, subject to legal and regulatory data retention requirements." }
    ]
  },
  // Placeholders for other policies...
  interest: { title: "Interest Rate Policy", lastUpdated: "March 1, 2026", sections: [{ h: "1. Policy Overview", p: "Our interest rates are fixed at a flat 1% per day on the outstanding principal. This policy complies with all RBI guidelines regarding fair lending." }] },
  risk: { title: "Risk Management Policy", lastUpdated: "March 1, 2026", sections: [{ h: "1. Risk Framework", p: "We employ advanced AI models and alternative data analysis to assess credit risk while ensuring compliance and minimizing defaults." }] },
  kyc: { title: "KYC & AML Policy", lastUpdated: "March 1, 2026", sections: [{ h: "1. Know Your Customer", p: "We strictly adhere to RBI's KYC (Know Your Customer) and AML (Anti-Money Laundering) guidelines, utilizing UIDAI and NSDL for verification." }] },
  governance: { title: "Corporate Governance", lastUpdated: "March 1, 2026", sections: [{ h: "1. Board Oversight", p: "Our corporate governance framework ensures accountability, fairness, and transparency in our relationship with all stakeholders." }] },
  fairpractice: { title: "Fair Practice Code", lastUpdated: "March 1, 2026", sections: [{ h: "1. Fair Lending", p: "We are committed to fair lending practices, non-discrimination, and transparent communication of all terms and conditions to our borrowers." }] },
  refund: { title: "Cancellation & Refund Policy", lastUpdated: "March 1, 2026", sections: [{ h: "1. Cancellation", p: "Loan applications can be cancelled prior to disbursal without penalty. Once funds are disbursed to your account, the loan is considered active and standard repayment terms apply." }] },
};

const LegalPage = ({ page }) => {
  const [content, setContent] = useState(legalContentMap['terms']);

  useEffect(() => {
    if (legalContentMap[page]) {
      setContent(legalContentMap[page]);
    }
  }, [page]);

  return (
    <div className="page-enter legal-page">
      {/* Legal Hero Banner */}
      <section className="legal-hero">
        <div className="container">
          <div className="legal-hero__content">
            <span className="badge badge-navy mb-6"><HiDocumentText size={16} /> Regulatory & Compliance</span>
            <h1 className="legal-title">{content.title}</h1>
            <p className="legal-date">Last Updated: {content.lastUpdated}</p>
          </div>
        </div>
        <div className="legal-hero__graphic"></div>
      </section>

      {/* Content Section */}
      <section className="legal-content-section section-padding">
        <div className="container">
          <div className="legal-wrapper">
            <div className="legal-sidebar">
              <h3>Policy Nav</h3>
              <ul>
                {content.sections.map((sec, i) => (
                  <li key={i}><a href={`#section-${i}`}>{sec.h}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="legal-main">
              <div className="gradient-border-card">
                <div className="gradient-border-card-inner legal-document">
                  <p className="legal-intro">
                    This document outlines the official {content.title.toLowerCase()} for QUA Loan, operating as a registered NBFC under the regulations of the Reserve Bank of India. Please read carefully.
                  </p>
                  
                  {content.sections.map((sec, i) => (
                    <div id={`section-${i}`} className="legal-section" key={i}>
                      <h2 className="legal-h2">{sec.h}</h2>
                      <p className="legal-p">{sec.p}</p>
                    </div>
                  ))}
                  
                  <div className="legal-footer">
                    <h4>Questions about this policy?</h4>
                    <p>Contact our grievance officer at grievance@qualoan.com or call +91 98765 43210.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
