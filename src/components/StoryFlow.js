import React, { useEffect, useRef, useState } from 'react';
import { HiArrowRight, HiCheckCircle, HiClock, HiShieldCheck, HiSparkles } from 'react-icons/hi';
import './StoryFlow.css';

const steps = [
  {
    id: 'apply',
    kicker: 'Step 01',
    title: 'Apply in a few calm taps',
    body: 'A premium flow starts by removing pressure. We ask for only the essentials, keep the screens focused, and make the first move feel effortless.',
    metricLabel: 'Form completion',
    metricValue: '02 min',
    badge: 'Low friction',
    amount: '₹1,00,000',
    amountLabel: 'Available runway'
  },
  {
    id: 'verify',
    kicker: 'Step 02',
    title: 'Verify with clarity, not confusion',
    body: 'Instead of burying trust under jargon, the interface surfaces status, security, and what happens next so users always feel oriented.',
    metricLabel: 'Verification signal',
    metricValue: '96%',
    badge: 'Instant checks',
    amount: 'PAN + Aadhaar',
    amountLabel: 'Minimal documents'
  },
  {
    id: 'approve',
    kicker: 'Step 03',
    title: 'See approval build in real time',
    body: 'This is where Apple-style pacing helps most: one visual stays centered while the surrounding data updates, making progress feel tangible and smooth.',
    metricLabel: 'Approval confidence',
    metricValue: '92%',
    badge: 'Transparent pricing',
    amount: '1% / day',
    amountLabel: 'Clear cost logic'
  },
  {
    id: 'disburse',
    kicker: 'Step 04',
    title: 'Land on the payout moment',
    body: 'The story should end with relief. Fast transfer, strong trust signals, and a clean CTA make the final section feel resolved instead of noisy.',
    metricLabel: 'Transfer window',
    metricValue: '12 min',
    badge: 'Rescue complete',
    amount: '₹50,000',
    amountLabel: 'Example instant payout'
  }
];

const StoryFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const refs = stepRefs.current.filter(Boolean);
    if (!refs.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const index = refs.indexOf(visible.target);
        if (index >= 0) {
          setActiveStep(index);
        }
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: [0.25, 0.5, 0.75]
      }
    );

    refs.forEach((step) => observer.observe(step));

    return () => {
      refs.forEach((step) => observer.unobserve(step));
      observer.disconnect();
    };
  }, []);

  const current = steps[activeStep];
  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <section className="story-flow">
      <div className="container story-flow__container">
        <div className="story-flow__intro">
          <div className="eyebrow story-flow__eyebrow">
            <HiSparkles />
            Scroll Story
          </div>
          <h2 className="section-title story-flow__title">A product-style journey, not just a list of features</h2>
          <p className="section-subtitle story-flow__subtitle">
            This section turns the loan process into one evolving visual narrative. As you scroll, the same core interface adapts to each moment of the borrower journey.
          </p>
        </div>

        <div className="story-flow__layout">
          <div className="story-flow__rail">
            {steps.map((step, index) => (
              <article
                key={step.id}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                className={`story-flow__step ${activeStep === index ? 'story-flow__step--active' : ''}`}
              >
                <span className="story-flow__step-kicker">{step.kicker}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className="story-flow__sticky">
            <div className="story-flow__device glass-panel">
              <div className="story-flow__device-top">
                <div className="story-flow__signal">
                  <span className="story-flow__signal-dot"></span>
                  Kashly fast lane
                </div>
                <span className="story-flow__pill">{current.badge}</span>
              </div>

              <div className="story-flow__hero-panel">
                <div>
                  <span className="story-flow__mini-label">{current.metricLabel}</span>
                  <strong>{current.metricValue}</strong>
                </div>
                <div className="story-flow__hero-icon">
                  {activeStep < 2 ? <HiClock /> : activeStep === 2 ? <HiShieldCheck /> : <HiCheckCircle />}
                </div>
              </div>

              <div className="story-flow__progress-wrap">
                <div className="story-flow__progress-meta">
                  <span>Journey progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="story-flow__progress-bar">
                  <span style={{ width: `${progress}%` }}></span>
                </div>
              </div>

              <div className="story-flow__amount-card">
                <span className="story-flow__mini-label">{current.amountLabel}</span>
                <strong>{current.amount}</strong>
                <p>Designed to surface the right information at exactly the right time.</p>
              </div>

              <div className="story-flow__timeline">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`story-flow__timeline-step ${index <= activeStep ? 'story-flow__timeline-step--done' : ''} ${index === activeStep ? 'story-flow__timeline-step--active' : ''}`}
                  >
                    <span className="story-flow__timeline-node">{index + 1}</span>
                    <div>
                      <strong>{step.kicker}</strong>
                      <span>{step.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="story-flow__footer">
                <span>From first tap to bank transfer</span>
                <HiArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryFlow;
