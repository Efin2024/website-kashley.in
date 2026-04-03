import React, { useEffect, useState } from 'react';
import { HiArrowRight, HiInformationCircle, HiLightningBolt, HiSparkles } from 'react-icons/hi';
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
    const dailyInterest = (loanAmount * interestRate) / 100;
    const totalInterest = dailyInterest * loanTerm;
    const totalPayment = loanAmount + totalInterest;

    setResults({
      dailyInterest,
      totalInterest,
      totalPayment
    });
  }, [loanAmount, interestRate, loanTerm]);

  const handleSliderChange = (event, setter) => {
    setter(Number(event.target.value));
  };

  const getProgressStyle = (value, min, max) => ({
    '--progress': `${((value - min) / (max - min)) * 100}%`
  });

  return (
    <div className="page-enter calculator-page">
      <section className="calculator-hero">
        <div className="container calculator-hero__content">
          <div className="calculator-hero__grid">
            <div className="calculator-hero__copy">
              <div className="eyebrow calculator-hero__eyebrow">
                <HiSparkles />
                Transparent payoff preview
              </div>
              <h1 className="calc-title">A calculator that feels like a live money cockpit.</h1>
              <p className="calc-subtitle">
                Explore pricing, repayment, and timing in a cinematic decision surface. Every number updates in real time so the tradeoff feels tangible before the borrower commits.
              </p>
              <div className="calculator-hero__ticker" aria-hidden="true">
                <div className="calculator-hero__ticker-track">
                  <span>Interactive pricing</span>
                  <span>Clear payoff logic</span>
                  <span>Live repayment preview</span>
                  <span>Transparent cost ratio</span>
                  <span>Interactive pricing</span>
                  <span>Clear payoff logic</span>
                  <span>Live repayment preview</span>
                  <span>Transparent cost ratio</span>
                </div>
              </div>
            </div>

            <div className="calculator-hero__visual">
              <div className="calculator-hero__orb calculator-hero__orb--one"></div>
              <div className="calculator-hero__orb calculator-hero__orb--two"></div>
              <div className="calculator-hero__showcase glass-panel">
                <div className="calculator-hero__showcase-top">
                  <span>Live decision state</span>
                  <strong>{loanTerm}d</strong>
                </div>
                <div className="calculator-hero__showcase-amount">
                  <span>Projected repayment</span>
                  <strong>₹ {results.totalPayment.toLocaleString('en-IN')}</strong>
                </div>
                <div className="calculator-hero__showcase-grid">
                  <div>
                    <span>Principal</span>
                    <strong>₹ {loanAmount.toLocaleString('en-IN')}</strong>
                  </div>
                  <div>
                    <span>Interest</span>
                    <strong>₹ {results.totalInterest.toLocaleString('en-IN')}</strong>
                  </div>
                  <div>
                    <span>Daily</span>
                    <strong>₹ {results.dailyInterest.toLocaleString('en-IN')}</strong>
                  </div>
                  <div>
                    <span>Rate</span>
                    <strong>{interestRate}%</strong>
                  </div>
                </div>
                <div className="calculator-hero__floating calculator-hero__floating--top">
                  <span>Cost ratio</span>
                  <strong>{((results.totalInterest / loanAmount) * 100).toFixed(1)}%</strong>
                </div>
                <div className="calculator-hero__floating calculator-hero__floating--bottom">
                  <span>Repayment pace</span>
                  <strong>₹ {(results.totalPayment / loanTerm).toLocaleString('en-IN', { maximumFractionDigits: 0 })}/day</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="calc-wrapper">
          <div className="calc-controls-card">
            <div className="calc-controls-head">
              <h3 className="calc-card-title">Shape your loan terms</h3>
              <span className="calc-head-pill">Live preview</span>
            </div>

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
                onChange={(event) => handleSliderChange(event, setLoanAmount)}
                style={getProgressStyle(loanAmount, 5000, 100000)}
              />
              <div className="calc-slider-labels">
                <span>₹ 5,000</span>
                <span>₹ 1,00,000</span>
              </div>
            </div>

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
                onChange={(event) => handleSliderChange(event, setInterestRate)}
                style={getProgressStyle(interestRate, 0.5, 3)}
              />
              <div className="calc-slider-labels">
                <span>0.5%</span>
                <span>3.0%</span>
              </div>
            </div>

            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <label>Loan Term (Days)</label>
                <div className="calc-value">{loanTerm} days</div>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                step="1"
                value={loanTerm}
                onChange={(event) => handleSliderChange(event, setLoanTerm)}
                style={getProgressStyle(loanTerm, 5, 45)}
              />
              <div className="calc-slider-labels">
                <span>5 days</span>
                <span>45 days</span>
              </div>
            </div>

            <div className="calc-notice">
              <HiInformationCircle className="calc-notice-icon" />
              <span>Interest is calculated daily on outstanding principal. You can repay early anytime without pre-closure penalty.</span>
            </div>
          </div>

          <div className="calc-results-card">
            <div className="calc-results-top">
              <span className="calc-results-kicker">Your loan summary</span>
              <h3 className="calc-results-title">See the money story before you borrow.</h3>
            </div>

            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Principal Amount</span>
                <strong className="result-value">₹ {loanAmount.toLocaleString('en-IN')}</strong>
              </div>
              <div className="result-item">
                <span className="result-label">Daily Interest</span>
                <strong className="result-value">₹ {results.dailyInterest.toLocaleString('en-IN')}</strong>
              </div>
              <div className="result-item">
                <span className="result-label">Total Interest</span>
                <strong className="result-value highlight">₹ {results.totalInterest.toLocaleString('en-IN')}</strong>
              </div>
              <div className="result-item total-repayment">
                <span className="result-label">Total Repayment</span>
                <strong className="result-value">₹ {results.totalPayment.toLocaleString('en-IN')}</strong>
                <span className="result-subtext">Due in {loanTerm} days</span>
              </div>
            </div>

            <div className="calc-breakdown">
              <div>
                <span>Cost ratio</span>
                <strong>{((results.totalInterest / loanAmount) * 100).toFixed(1)}%</strong>
              </div>
              <div>
                <span>Repayment pace</span>
                <strong>₹ {(results.totalPayment / loanTerm).toLocaleString('en-IN', { maximumFractionDigits: 0 })}/day</strong>
              </div>
            </div>

            <div className="calc-journey">
              <div className="calc-journey__step">
                <span>01</span>
                <p>Adjust your amount and term until the pace feels right.</p>
              </div>
              <div className="calc-journey__step">
                <span>02</span>
                <p>See the full repayment outcome instantly, not later.</p>
              </div>
              <div className="calc-journey__step">
                <span>03</span>
                <p>Move directly into the Kashley application flow.</p>
              </div>
            </div>

            <a href="https://app.kashley.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary calc-btn">
              <HiLightningBolt size={20} /> Get This Loan Now <HiArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
