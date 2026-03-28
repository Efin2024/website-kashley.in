import React, { useEffect, useMemo, useState } from 'react';
import {
  HiEye,
  HiEyeOff,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlinePhone,
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

  if (!isRendered) return null;

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
              src="/danceman.mov"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Promotional dancing man video"
            />
          </div>

          <div className="auth-form-panel">
            <div className="auth-form-shell">
              <div className="auth-panel-top">
                <div>
                  <span className="auth-eyebrow">Secure account access</span>
                  <h3 className="auth-heading">
                    {type === 'login' ? 'Welcome back' : 'Create your Qua account'}
                  </h3>
                  <p className="auth-subheading">
                    {type === 'login'
                      ? 'Sign in to continue your application and manage repayments.'
                      : 'Set up your profile, verify your contact details, and unlock your credit journey.'}
                  </p>
                </div>

                <div className="auth-tabs" role="tablist" aria-label="Authentication type">
                  <button
                    className={`auth-tab ${type === 'login' ? 'active' : ''}`}
                    onClick={() => handleTypeChange('login')}
                    type="button"
                  >
                    Log In
                  </button>
                  <button
                    className={`auth-tab ${type === 'signup' ? 'active' : ''}`}
                    onClick={() => handleTypeChange('signup')}
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="auth-assurance">
                <span>Instant mobile verification</span>
                <span>256-bit encrypted credentials</span>
              </div>

              <div className="auth-form-container">
                {type === 'login' ? (
                  <div className="auth-form-slide">
                    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
                      <label className="input-group">
                        <span className="input-label">Mobile Number</span>
                        <div className="input-shell">
                          <div className="input-icon">
                            <HiOutlinePhone size={20} />
                          </div>
                          <input
                            type="tel"
                            placeholder="Enter your registered mobile number"
                            value={loginForm.mobile}
                            onChange={(event) => updateLoginForm('mobile', event.target.value)}
                            required
                          />
                        </div>
                      </label>

                      <label className="input-group">
                        <span className="input-label">Password</span>
                        <div className="input-shell">
                          <div className="input-icon">
                            <HiOutlineLockClosed size={20} />
                          </div>
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
                            onClick={() => setShowLoginPassword((current) => !current)}
                            aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                          >
                            {showLoginPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                          </button>
                        </div>
                      </label>

                      <div className="auth-options">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={loginForm.remember}
                            onChange={(event) => updateLoginForm('remember', event.target.checked)}
                          />
                          Keep me signed in on this device
                        </label>
                        <a href="/" className="forgot-link" onClick={(event) => event.preventDefault()}>
                          Recover access
                        </a>
                      </div>

                      <button type="submit" className="btn btn-primary w-100 auth-submit">
                        Continue Securely
                      </button>

                      <div className="auth-footer-note">
                        Need a fresh account?{' '}
                        <button type="button" className="auth-inline-switch" onClick={() => handleTypeChange('signup')}>
                          Start signup
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="auth-form-slide">
                    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
                      <div className="auth-grid">
                        <label className="input-group input-group-full">
                          <span className="input-label">Full Name</span>
                          <div className="input-shell">
                            <div className="input-icon">
                              <HiOutlineUser size={20} />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter your name as per PAN"
                              value={signupForm.fullName}
                              onChange={(event) => updateSignupForm('fullName', event.target.value)}
                              required
                            />
                          </div>
                        </label>

                        <label className="input-group">
                          <span className="input-label">Mobile Number</span>
                          <div className="input-shell">
                            <div className="input-icon">
                              <HiOutlinePhone size={20} />
                            </div>
                            <input
                              type="tel"
                              placeholder="For OTP verification"
                              value={signupForm.mobile}
                              onChange={(event) => updateSignupForm('mobile', event.target.value)}
                              required
                            />
                          </div>
                        </label>

                        <label className="input-group">
                          <span className="input-label">Email Address</span>
                          <div className="input-shell">
                            <div className="input-icon">
                              <HiOutlineMail size={20} />
                            </div>
                            <input
                              type="email"
                              placeholder="To receive loan updates"
                              value={signupForm.email}
                              onChange={(event) => updateSignupForm('email', event.target.value)}
                              required
                            />
                          </div>
                        </label>

                        <label className="input-group input-group-full">
                          <span className="input-label">Create Password</span>
                          <div className="input-shell">
                            <div className="input-icon">
                              <HiOutlineLockClosed size={20} />
                            </div>
                            <input
                              type={showSignupPassword ? 'text' : 'password'}
                              placeholder="Use 8+ chars with number and symbol"
                              value={signupForm.password}
                              onChange={(event) => updateSignupForm('password', event.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="password-toggle"
                              onClick={() => setShowSignupPassword((current) => !current)}
                              aria-label={showSignupPassword ? 'Hide password' : 'Show password'}
                            >
                              {showSignupPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                            </button>
                          </div>
                        </label>
                      </div>

                      <div className="password-strength">
                        <div className="strength-meta">
                          <span>Password strength</span>
                          <strong>{passwordStrength.label}</strong>
                        </div>
                        <div className="strength-track" aria-hidden="true">
                          <span
                            className="strength-fill"
                            style={{ width: `${passwordStrength.score * 25}%` }}
                          ></span>
                        </div>
                      </div>

                      <label className="checkbox-label checkbox-card">
                        <input
                          type="checkbox"
                          checked={signupForm.consent}
                          onChange={(event) => updateSignupForm('consent', event.target.checked)}
                        />
                        <span>
                          I agree to receive account alerts, KYC updates, and important service
                          communication on my mobile and email.
                        </span>
                      </label>

                      <button type="submit" className="btn btn-primary w-100 auth-submit">
                        Verify & Create Account
                      </button>

                      <div className="auth-footer-note">
                        Already onboarded?{' '}
                        <button type="button" className="auth-inline-switch" onClick={() => handleTypeChange('login')}>
                          Log in here
                        </button>
                      </div>
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
