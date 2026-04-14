import React, { useState } from 'react';
import {
  HiArrowRight,
  HiCheck,
  HiOutlineDeviceMobile,
  HiOutlineDocumentDuplicate,
  HiOutlineIdentification,
  HiSparkles
} from 'react-icons/hi';
import './Repay.css';

const Repay = () => {
  const [identifierType, setIdentifierType] = useState('mobile');
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('kashley@icici');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-enter repay-page">
      <section className="repay-hero">
        <div className="container repay-hero__content">
          <div className="eyebrow repay-hero__eyebrow">
            <HiSparkles />
            Guided repayment experience
          </div>
          <h1 className="repay-title">Repayment should feel clear, fast, and low-stress.</h1>
          <p className="repay-subtitle">
            Check your balance, verify your account, and choose the fastest payment path from one premium repayment screen.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="repay-wrapper">
          <div className="repay-form-card">
            <div className="repay-form-card__inner">
              <div className="repay-form-head">
                <h3 className="form-title">Find your loan</h3>
                <span className="repay-form-pill">Secure OTP lookup</span>
              </div>

              <div className="toggle-group">
                <button className={`toggle-btn ${identifierType === 'mobile' ? 'active' : ''}`} onClick={() => setIdentifierType('mobile')} type="button">
                  <HiOutlineDeviceMobile size={20} /> Mobile Number
                </button>
                <button className={`toggle-btn ${identifierType === 'pan' ? 'active' : ''}`} onClick={() => setIdentifierType('pan')} type="button">
                  <HiOutlineIdentification size={20} /> PAN Number
                </button>
              </div>

              <div className="input-group">
                <label>{identifierType === 'mobile' ? 'Registered Mobile Number' : 'Current PAN Number'}</label>
                <input
                  type={identifierType === 'mobile' ? 'tel' : 'text'}
                  placeholder={identifierType === 'mobile' ? 'Enter 10-digit number' : 'Enter 10-character PAN'}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  maxLength={10}
                />
              </div>

              <button className="btn btn-primary w-100 mt-4 form-submit-btn">
                Send OTP <HiArrowRight />
              </button>

              <div className="security-notice mt-6">
                <span>Encrypted verification keeps your repayment lookup private and secure.</span>
              </div>
            </div>
          </div>

          <div className="repay-qr-card">
            <span className="repay-qr-card__kicker">Quick pay option</span>
            <h3 className="qr-title">Scan and pay via UPI</h3>
            <p className="qr-desc">Use any UPI app and include your registered mobile number in remarks to help us match the payment quickly.</p>

            <div className="qr-code-wrapper">
              <div className="qr-placeholder">
                <svg width="150" height="150" viewBox="0 0 100 100">
                  <path fill="#1E2A5E" d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM40 0h20v20H40zM30 40h40v20H30zM70 70h30v10H70zM70 90h10v10H70zM90 80h10v10H90z" />
                  <rect x="15" y="40" width="10" height="10" fill="#7C3AED" />
                  <rect x="15" y="55" width="10" height="10" fill="#1E2A5E" />
                  <rect x="40" y="30" width="10" height="10" fill="#1E2A5E" />
                  <rect x="55" y="30" width="10" height="10" fill="#7C3AED" />
                  <rect x="40" y="70" width="10" height="10" fill="#1E2A5E" />
                  <rect x="40" y="85" width="10" height="10" fill="#7C3AED" />
                  <rect x="55" y="70" width="10" height="25" fill="#1E2A5E" />
                </svg>
              </div>
            </div>

            <div className="upi-id-box">
              <div className="upi-labels">
                <span className="upi-title">UPI ID</span>
                <span className="upi-value">kashley@icici</span>
              </div>
              <button className="copy-btn" onClick={handleCopy} aria-label="Copy UPI ID" type="button">
                {copied ? <HiCheck className="text-green" /> : <HiOutlineDocumentDuplicate />}
              </button>
            </div>

            <div className="supported-apps">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI logo" className="upi-logo" />
              <span>GPay, PhonePe, Paytm supported</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repay;
