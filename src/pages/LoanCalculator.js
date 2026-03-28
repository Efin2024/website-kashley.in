import React, { useState, useEffect } from 'react';
import { HiInformationCircle, HiLightningBolt } from 'react-icons/hi';
import './LoanCalculator.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(1);
  const [loanTerm, setLoanTerm] = useState(15);
  
  const [results, setResults] = useState({
    totalInterest: 0,
    totalPayment: 0,
    dailyInterest: 0
  });

  useEffect(() => {
    // Payday loan specific calculation
    // Daily Interest = (Loan Amount * Interest Rate) / 100
    // Total Interest = Daily Interest * Loan Term
    // Total Payment = Loan Amount + Total Interest
    
    const dailyInterest = (loanAmount * interestRate) / 100;
    const totalInterest = dailyInterest * loanTerm;
    const totalPayment = loanAmount + totalInterest;
    
    setResults({
      dailyInterest,
      totalInterest,
      totalPayment
    });
  }, [loanAmount, interestRate, loanTerm]);

  const handleSliderChange = (e, setter) => {
    setter(Number(e.target.value));
  };

  const getProgressStyle = (value, min, max) => {
    return {
      '--progress': `${((value - min) / (max - min)) * 100}%`
    };
  };

  return (
    <div className="page-enter calculator-page">
      <div className="calculator-header">
        <h1 className="calc-title">Loan Calculator</h1>
        <p className="calc-subtitle">Estimate your repayment schedule with full transparency. No hidden fees or surprises.</p>
      </div>

      <div className="container">
        <div className="calc-wrapper">
          <div className="calc-controls-card">
            <h3 className="calc-card-title">Adjust your loan terms</h3>
            
            {/* Loan Amount */}
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <label>Loan Amount</label>
                <div className="calc-value">₹ {loanAmount.toLocaleString('en-IN')}</div>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="100000" 
                step="1000" 
                value={loanAmount} 
                onChange={(e) => handleSliderChange(e, setLoanAmount)}
                style={getProgressStyle(loanAmount, 5000, 100000)}
              />
              <div className="calc-slider-labels">
                <span>₹ 5,000</span>
                <span>₹ 1,00,000</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <label>Interest Rate (Per Day)</label>
                <div className="calc-value">{interestRate}%</div>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="3" 
                step="0.1" 
                value={interestRate} 
                onChange={(e) => handleSliderChange(e, setInterestRate)}
                style={getProgressStyle(interestRate, 0.5, 3)}
              />
              <div className="calc-slider-labels">
                <span>0.5%</span>
                <span>3.0%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <label>Loan Term (Days)</label>
                <div className="calc-value">{loanTerm} Days</div>
              </div>
              <input 
                type="range" 
                min="5" 
                max="45" 
                step="1" 
                value={loanTerm} 
                onChange={(e) => handleSliderChange(e, setLoanTerm)}
                style={getProgressStyle(loanTerm, 5, 45)}
              />
              <div className="calc-slider-labels">
                <span>5 Days</span>
                <span>45 Days</span>
              </div>
            </div>
            
            <div className="calc-notice">
              <HiInformationCircle className="calc-notice-icon" />
              <span>Interest is calculated daily based on outstanding principal. You can repay early anytime without penalty.</span>
            </div>
          </div>

          <div className="calc-results-card">
            <h3 className="calc-card-title text-white">Your Loan Summary</h3>
            
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Principal Amount</span>
                <strong className="result-value">₹ {loanAmount.toLocaleString('en-IN')}</strong>
              </div>
              <div className="result-item">
                <span className="result-label">Total Interest</span>
                <strong className="result-value highlight">₹ {results.totalInterest.toLocaleString('en-IN')}</strong>
              </div>
              <div className="result-item">
                <span className="result-label">Daily Interest</span>
                <strong className="result-value">₹ {results.dailyInterest.toLocaleString('en-IN')}</strong>
              </div>
              
              <div className="result-item total-repayment">
                <span className="result-label">Total Repayment</span>
                <strong className="result-value">₹ {results.totalPayment.toLocaleString('en-IN')}</strong>
                <span className="result-subtext">Due in {loanTerm} days</span>
              </div>
            </div>

            <a href="https://app.qualoan.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary calc-btn">
              <HiLightningBolt size={20} /> Get This Loan Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
