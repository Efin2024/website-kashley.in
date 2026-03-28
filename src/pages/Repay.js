import React, { useState } from 'react';
import { HiOutlineDeviceMobile, HiOutlineIdentification, HiArrowRight, HiOutlineDocumentDuplicate, HiCheck } from 'react-icons/hi';
import './Repay.css';

const Repay = () => {
  const [identifierType, setIdentifierType] = useState('mobile');
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('qualoan@icici');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-enter repay-page">
      <div className="container">
        <div className="repay-header text-center">
          <div className="badge badge-orange mb-6">Loan Repayment</div>
          <h1 className="repay-title">Check Your Loan Status</h1>
          <p className="repay-subtitle">Enter your registered mobile number or PAN to check your outstanding balance and make a repayment.</p>
        </div>

        <div className="repay-wrapper">
          {/* Left Side: Repayment Form */}
          <div className="repay-form-card gradient-border-card">
            <div className="gradient-border-card-inner">
              <h3 className="form-title">Enter Details</h3>
              
              <div className="toggle-group">
                <button 
                  className={`toggle-btn ${identifierType === 'mobile' ? 'active' : ''}`}
                  onClick={() => setIdentifierType('mobile')}
                >
                  <HiOutlineDeviceMobile size={20} /> Mobile Number
                </button>
                <button 
                  className={`toggle-btn ${identifierType === 'pan' ? 'active' : ''}`}
                  onClick={() => setIdentifierType('pan')}
                >
                  <HiOutlineIdentification size={20} /> PAN Number
                </button>
              </div>

              <div className="input-group">
                <label>
                  {identifierType === 'mobile' ? 'Registered Mobile Number' : 'Current PAN Number'}
                </label>
                <input 
                  type={identifierType === 'mobile' ? 'tel' : 'text'} 
                  placeholder={identifierType === 'mobile' ? 'Enter 10-digit number' : 'Enter 10-character PAN'}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  maxLength={identifierType === 'mobile' ? 10 : 10}
                />
              </div>

              <button className="btn btn-primary w-100 mt-4 form-submit-btn">
                Send OTP <HiArrowRight />
              </button>

              <div className="security-notice mt-6 text-center">
                <span>🔒 Your information is transmitted securely and is kept strictly confidential.</span>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Pay QR */}
          <div className="repay-qr-card">
            <h3 className="qr-title">Scan & Pay via UPI</h3>
            <p className="qr-desc">Make an instant direct payment using any UPI app. Must include your registered mobile number in the remarks.</p>
            
            <div className="qr-code-wrapper">
              <div className="qr-placeholder">
                <svg width="150" height="150" viewBox="0 0 100 100">
                  <path fill="#1E2A5E" d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM40 0h20v20H40zM30 40h40v20H30zM50 50h0v0H50zM70 70h30v10H70zM70 90h10v10H70zM90 80h10v10H90z"/>
                  {/* Generic mock QR pattern */}
                  <rect x="15" y="40" width="10" height="10" fill="#F26622" />
                  <rect x="15" y="55" width="10" height="10" fill="#1E2A5E" />
                  <rect x="40" y="30" width="10" height="10" fill="#1E2A5E" />
                  <rect x="55" y="30" width="10" height="10" fill="#F26622" />
                  <rect x="40" y="70" width="10" height="10" fill="#1E2A5E" />
                  <rect x="40" y="85" width="10" height="10" fill="#F26622" />
                  <rect x="55" y="70" width="10" height="25" fill="#1E2A5E" />
                </svg>
              </div>
            </div>
            
            <div className="upi-id-box">
              <div className="upi-labels">
                <span className="upi-title">UPI ID</span>
                <span className="upi-value">qualoan@icici</span>
              </div>
              <button className="copy-btn" onClick={handleCopy} aria-label="Copy UPI ID">
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
