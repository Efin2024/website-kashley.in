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
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const passwordStrength = useMemo(() => {
    const password = signupForm.password;
    if (!password) return { label: 'Add a password', score: 0 };

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
          {/* LEFT SIDE - VIDEO */}
          <div className="auth-gamified-panel">
            <video
              className="auth-side-video"
              src="/dancedance.mov"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Promotional dancing video"
            />
            <div className="auth-video-overlay-gradient"></div>
            
            <div className="auth-video-content">
              <div className="video-badge">Secure Gateway</div>
              <h2 className="video-title">Welcome to the<br/>Future of Finance</h2>
              <p className="video-desc">Join 10L+ users experiencing instant, secure, and hassle-free payday loans.</p>
              
              <div className="video-pills">
                <span>Fast Approval</span>
                <span>Bank-Grade Security</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="auth-form-panel">
            <div className="auth-form-inner">
              
              {/* TABS */}
              <div className="auth-tabs-wrapper">
                <div className="auth-tabs" role="tablist">
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

              {/* DYNAMIC FORM AREA */}
              <div className="auth-form-container">
                {type === 'login' ? (
                  <div className="auth-form-slide">
                    <div className="auth-header">
                      <h3 className="auth-heading">Welcome Back</h3>
                      <p className="auth-subheading">Enter your details to access your dashboard.</p>
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
                        <a href="/" className="forgot-link" onClick={(event) => event.preventDefault()}>
                          Forgot Password?
                        </a>
                      </div>

                      <button type="submit" className="btn btn-primary w-100 auth-submit">
                        Secure Login
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="auth-form-slide">
                    <div className="auth-header">
                      <h3 className="auth-heading">Create Account</h3>
                      <p className="auth-subheading">Takes less than a minute to get started.</p>
                    </div>

                    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
                      <div className="auth-grid">
                        <div className="input-group input-group-full">
                          <label className="input-label">Full Name</label>
                          <div className="input-shell">
                            <div className="input-icon"><HiOutlineUser size={20} /></div>
                            <input
                              type="text"
                              placeholder="Name as per PAN Card"
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
                              placeholder="8+ chars with number/symbol"
                              value={signupForm.password}
                              onChange={(event) => updateSignupForm('password', event.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="password-toggle"
                              onClick={() => setShowSignupPassword((curr) => !curr)}
                            >
                              {showSignupPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                            </button>
                          </div>
                        </div>
                      </div>

                      {signupForm.password && (
                        <div className="password-strength">
                          <div className="strength-meta">
                            <span>Password strength:</span>
                            <strong>{passwordStrength.label}</strong>
                          </div>
                          <div className="strength-track">
                            <span
                              className="strength-fill"
                              style={{ width: `${passwordStrength.score * 25}%` }}
                            ></span>
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

                      <button type="submit" className="btn btn-primary w-100 auth-submit">
                        Verify & Sign Up
                      </button>
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
