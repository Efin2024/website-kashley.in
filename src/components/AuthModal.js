import React, { useEffect, useMemo, useState } from 'react';
import {
  HiCheckCircle,
  HiEye,
  HiEyeOff,
  HiOutlineClock,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUser,
  HiX
} from 'react-icons/hi';
import './AuthModal.css';

const initialLoginForm = {
  mobile: '',
  password: '',
  remember: true
};

const initialSignupForm = {
  fullName: '',
  mobile: '',
  email: '',
  password: '',
  consent: true
};

const leftHighlights = [
  { icon: <HiOutlineClock />, title: '12 min average', text: 'Designed for urgent money moments.' },
  { icon: <HiOutlineShieldCheck />, title: 'Bank-grade security', text: 'Sensitive data stays protected end to end.' },
  { icon: <HiCheckCircle />, title: 'Transparent pricing', text: 'Clear 1% per day logic with no hidden shocks.' }
];

const loginGoals = [
  { label: 'Identity linked', hint: 'Use your registered number.' },
  { label: 'Vault unlocked', hint: 'Enter your secure password.' },
  { label: 'Ready to launch', hint: 'Jump back into your dashboard.' }
];

const signupRewards = [
  'Fast-track profile',
  'OTP priority lane',
  'Clear pricing unlock'
];

const AuthModal = ({ isOpen, onClose, initialType = 'login' }) => {
  const [type, setType] = useState(initialType);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const [signupForm, setSignupForm] = useState(initialSignupForm);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setType(initialType);
      document.body.style.overflow = 'hidden';
      const openTimer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(openTimer);
    }

    setIsVisible(false);
    const closeTimer = setTimeout(() => {
      setIsRendered(false);
      document.body.style.overflow = '';
    }, 300);

    return () => clearTimeout(closeTimer);
  }, [isOpen, initialType]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const passwordStrength = useMemo(() => {
    const password = signupForm.password;
    if (!password) {
      return { label: 'Add a password', score: 0 };
    }

    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    const levels = [
      { label: 'Weak', score: 1 },
      { label: 'Fair', score: 2 },
      { label: 'Strong', score: 3 },
      { label: 'Excellent', score: 4 }
    ];

    return levels.find((level) => level.score === score) || { label: 'Weak', score: 1 };
  }, [signupForm.password]);

  const loginCompletion = useMemo(() => {
    const steps = [
      loginForm.mobile.trim().length >= 10,
      loginForm.password.trim().length > 0,
      loginForm.remember
    ];

    return Math.round((steps.filter(Boolean).length / steps.length) * 100);
  }, [loginForm]);

  const signupCompletion = useMemo(() => {
    const steps = [
      signupForm.fullName.trim().length > 1,
      signupForm.mobile.trim().length >= 10,
      signupForm.email.includes('@'),
      signupForm.password.length >= 8,
      signupForm.consent
    ];

    return Math.round((steps.filter(Boolean).length / steps.length) * 100);
  }, [signupForm]);

  const updateLoginForm = (field, value) => {
    setLoginForm((current) => ({ ...current, [field]: value }));
  };

  const updateSignupForm = (field, value) => {
    setSignupForm((current) => ({ ...current, [field]: value }));
  };

  const handleTypeChange = (nextType) => {
    setType(nextType);
    setShowLoginPassword(false);
    setShowSignupPassword(false);
  };

  if (!isRendered) {
    return null;
  }

  return (
    <div className={`auth-backdrop ${isVisible ? 'visible' : ''}`} onClick={onClose}>
      <div
        className={`auth-modal ${isVisible ? 'visible' : ''}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <button className="auth-close" onClick={onClose} aria-label="Close modal">
          <HiX size={24} />
        </button>

        <div className="auth-layout">
          <div className="auth-gamified-panel">
            <video
              className="auth-side-video"
              src="/dancedance.mov"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Promotional background video"
            />
            <div className="auth-video-overlay-gradient"></div>
            <div className="auth-video-content">
              <div className="video-badge">
                <HiOutlineSparkles />
                Secure gateway
              </div>
              <h2 className="video-title">Fast money should still feel calm, premium, and safe.</h2>
              <p className="video-desc">
                Kashley is designed like a guided product flow, so every login, signup, and verification moment feels clearer and more reassuring.
              </p>

              <div className="auth-metric-strip">
                <div>
                  <strong>10L+</strong>
                  <span>Borrowers served</span>
                </div>
                <div>
                  <strong>1%</strong>
                  <span>Daily pricing</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Processing</span>
                </div>
              </div>

              <div className="auth-highlight-list">
                {leftHighlights.map((item) => (
                  <div key={item.title} className="auth-highlight-item">
                    <span className="auth-highlight-icon">{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="auth-form-panel">
            <div className="auth-form-inner">
              <div className="auth-tabs-wrapper">
                <div className="auth-tabs" role="tablist">
                  <button className={`auth-tab ${type === 'login' ? 'active' : ''}`} onClick={() => handleTypeChange('login')} type="button">
                    Log In
                  </button>
                  <button className={`auth-tab ${type === 'signup' ? 'active' : ''}`} onClick={() => handleTypeChange('signup')} type="button">
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="auth-form-container">
                {type === 'login' ? (
                  <div className="auth-form-slide">
                    <div className="auth-header">
                      <span className="auth-kicker">Access your dashboard</span>
                      <h3 id="auth-modal-title" className="auth-heading">Welcome back</h3>
                      <p className="auth-subheading">Pick up your loan journey, review status updates, and move through repayment or renewal with clarity.</p>
                    </div>

                    <div className="auth-progress-card">
                      <div className="auth-progress-top">
                        <div>
                          <span className="auth-progress-label">Return mission</span>
                          <strong>{loginCompletion}% ready</strong>
                        </div>
                        <span className="auth-progress-badge">Level 2</span>
                      </div>
                      <div className="auth-progress-track">
                        <span className="auth-progress-fill" style={{ width: `${loginCompletion}%` }}></span>
                      </div>
                      <div className="auth-goals-list">
                        {loginGoals.map((goal, index) => {
                          const complete = index === 0
                            ? loginForm.mobile.trim().length >= 10
                            : index === 1
                              ? loginForm.password.trim().length > 0
                              : loginForm.remember;

                          return (
                            <div key={goal.label} className={`auth-goal-item ${complete ? 'complete' : ''}`}>
                              <span className="auth-goal-dot">{complete ? '✓' : index + 1}</span>
                              <div>
                                <strong>{goal.label}</strong>
                                <span>{goal.hint}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
                      <div className="input-group">
                        <label className="input-label">Mobile Number</label>
                        <div className="input-shell">
                          <div className="input-icon"><HiOutlinePhone size={20} /></div>
                          <input
                            type="tel"
                            placeholder="Registered mobile number"
                            value={loginForm.mobile}
                            onChange={(event) => updateLoginForm('mobile', event.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <label className="input-label">Password</label>
                        <div className="input-shell">
                          <div className="input-icon"><HiOutlineLockClosed size={20} /></div>
                          <input
                            type={showLoginPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={loginForm.password}
                            onChange={(event) => updateLoginForm('password', event.target.value)}
                            required
                          />
                          <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowLoginPassword((curr) => !curr)}
                            aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                          >
                            {showLoginPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                          </button>
                        </div>
                      </div>

                      <div className="auth-options">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={loginForm.remember}
                            onChange={(event) => updateLoginForm('remember', event.target.checked)}
                          />
                          Keep me signed in
                        </label>
                        <button type="button" className="forgot-link">Forgot password?</button>
                      </div>

                      <button type="submit" className="btn btn-primary w-100 auth-submit">Continue Mission</button>
                    </form>
                  </div>
                ) : (
                  <div className="auth-form-slide">
                    <div className="auth-header">
                      <span className="auth-kicker">Create your fast lane</span>
                      <h3 id="auth-modal-title" className="auth-heading">Open your Kashley account</h3>
                      <p className="auth-subheading">This onboarding flow is built to feel light: essential details, a clear password signal, and no unnecessary friction.</p>
                    </div>

                    <div className="auth-progress-card auth-progress-card--signup">
                      <div className="auth-progress-top">
                        <div>
                          <span className="auth-progress-label">Onboarding quest</span>
                          <strong>{signupCompletion}% unlocked</strong>
                        </div>
                        <span className="auth-progress-badge">XP Boost</span>
                      </div>
                      <div className="auth-progress-track">
                        <span className="auth-progress-fill" style={{ width: `${signupCompletion}%` }}></span>
                      </div>
                      <div className="auth-reward-strip">
                        {signupRewards.map((reward) => (
                          <span key={reward} className="auth-reward-pill">
                            <HiOutlineSparkles />
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>

                    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
                      <div className="auth-grid">
                        <div className="input-group input-group-full">
                          <label className="input-label">Full Name</label>
                          <div className="input-shell">
                            <div className="input-icon"><HiOutlineUser size={20} /></div>
                            <input
                              type="text"
                              placeholder="Name as per PAN card"
                              value={signupForm.fullName}
                              onChange={(event) => updateSignupForm('fullName', event.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="input-group">
                          <label className="input-label">Mobile Number</label>
                          <div className="input-shell">
                            <div className="input-icon"><HiOutlinePhone size={20} /></div>
                            <input
                              type="tel"
                              placeholder="For OTP"
                              value={signupForm.mobile}
                              onChange={(event) => updateSignupForm('mobile', event.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="input-group">
                          <label className="input-label">Email Address</label>
                          <div className="input-shell">
                            <div className="input-icon"><HiOutlineMail size={20} /></div>
                            <input
                              type="email"
                              placeholder="For updates"
                              value={signupForm.email}
                              onChange={(event) => updateSignupForm('email', event.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="input-group input-group-full">
                          <label className="input-label">Create Password</label>
                          <div className="input-shell">
                            <div className="input-icon"><HiOutlineLockClosed size={20} /></div>
                            <input
                              type={showSignupPassword ? 'text' : 'password'}
                              placeholder="8+ chars with number and symbol"
                              value={signupForm.password}
                              onChange={(event) => updateSignupForm('password', event.target.value)}
                              required
                            />
                            <button type="button" className="password-toggle" onClick={() => setShowSignupPassword((curr) => !curr)} aria-label={showSignupPassword ? 'Hide password' : 'Show password'}>
                              {showSignupPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                            </button>
                          </div>
                        </div>
                      </div>

                      {signupForm.password && (
                        <div className="password-strength">
                          <div className="strength-meta">
                            <span>Password strength</span>
                            <strong>{passwordStrength.label}</strong>
                          </div>
                          <div className="strength-track">
                            <span className="strength-fill" style={{ width: `${passwordStrength.score * 25}%` }}></span>
                          </div>
                        </div>
                      )}

                      <label className="checkbox-label checkbox-agree">
                        <input
                          type="checkbox"
                          checked={signupForm.consent}
                          onChange={(event) => updateSignupForm('consent', event.target.checked)}
                        />
                        <span>I accept the Terms & Conditions and Privacy Policy.</span>
                      </label>

                      <button type="submit" className="btn btn-primary w-100 auth-submit">Claim Your Spot</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
