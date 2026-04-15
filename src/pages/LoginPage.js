import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiEye, HiEyeOff, HiOutlineLockClosed, HiOutlinePhone, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineClock } from 'react-icons/hi';
import { CircularTestimonials } from '../components/ui/circular-testimonials.js';
import './LoginPage.css';

const testimonials = [
  {
    quote:
      'The login flow felt calm instead of stressful, and I could see exactly where I was in the process.',
    name: 'Ananya Verma',
    designation: 'Working Professional',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1368&auto=format&fit=crop'
  },
  {
    quote:
      'Clear steps, clean visuals, and quick access made it easy to jump back in when I needed funds urgently.',
    name: 'Rahul Iyer',
    designation: 'Small Business Owner',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1368&auto=format&fit=crop'
  },
  {
    quote:
      'It feels premium and trustworthy, which matters a lot when you are handling money under pressure.',
    name: 'Meera Nair',
    designation: 'Freelance Designer',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1368&auto=format&fit=crop'
  }
];

const trustPoints = [
  { icon: <HiOutlineShieldCheck />, title: 'Protected access', text: 'Sign in with a secure, guided flow.' },
  { icon: <HiOutlineClock />, title: 'Fast return', text: 'Pick up your application in minutes.' },
  { icon: <HiOutlineSparkles />, title: 'Clear status', text: 'See where your journey stands at a glance.' }
];

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  return (
    <div className="page-enter login-page">
      <div className="login-page__backdrop" aria-hidden="true">
        <span className="login-page__orb login-page__orb--one"></span>
        <span className="login-page__orb login-page__orb--two"></span>
      </div>

      <div className="container login-page__container">
        <div className="login-page__header">
          <Link to="/" className="login-page__brand">
            <span className="login-page__brand-mark">K</span>
            <span>
              <strong>Kashle</strong>
              <small>Fast cash, clearly</small>
            </span>
          </Link>
          <Link to="/loan-calculator" className="login-page__calculator-link">
            Review pricing
            <HiArrowRight size={18} />
          </Link>
        </div>

        <div className="login-shell">
          <section className="login-shell__story">
            <div className="login-shell__intro">
              <div className="login-shell__badge">
                <HiOutlineSparkles />
                Start now
              </div>
              <h1>Welcome back. Let’s get you moving again.</h1>
              <p>
                Resume your Kashle journey with a login experience that feels steady, clear, and built for urgent money moments.
              </p>

              <div className="login-shell__highlights">
                {trustPoints.map((point) => (
                  <div key={point.title} className="login-shell__highlight">
                    <span className="login-shell__highlight-icon">{point.icon}</span>
                    <div>
                      <strong>{point.title}</strong>
                      <span>{point.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="login-shell__testimonials">
              <div className="login-shell__testimonials-header">
                <span className="login-shell__eyebrow">Borrower voices</span>
                <h2>What users feel when the flow stays calm.</h2>
              </div>
              <CircularTestimonials
                testimonials={testimonials}
                autoplay
                colors={{
                  name: '#f8fafc',
                  designation: '#cbd5e1',
                  testimony: '#e2e8f0',
                  arrowBackground: '#0f172a',
                  arrowForeground: '#f8fafc',
                  arrowHoverBackground: '#f97316'
                }}
                fontSizes={{
                  name: '1.35rem',
                  designation: '0.92rem',
                  quote: '1.03rem'
                }}
              />
            </div>
          </section>

          <section className="login-shell__form-card" aria-labelledby="login-page-title">
            <div className="login-shell__form-top">
              <span className="login-shell__eyebrow">Sign in</span>
              <h2 id="login-page-title">Access your dashboard</h2>
              <p>Use your registered mobile number to continue where you left off.</p>
            </div>

            <form className="login-form" onSubmit={(event) => event.preventDefault()}>
              <label className="login-form__field">
                <span>Mobile Number</span>
                <div className="login-form__input-shell">
                  <HiOutlinePhone size={20} />
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="Enter registered mobile number"
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                  />
                </div>
              </label>

              <label className="login-form__field">
                <span>Password</span>
                <div className="login-form__input-shell">
                  <HiOutlineLockClosed size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button
                    type="button"
                    className="login-form__toggle"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                  </button>
                </div>
              </label>

              <div className="login-form__meta">
                <label className="login-form__remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                  />
                  Keep me signed in
                </label>
                <button type="button" className="login-form__link">
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="btn btn-primary login-form__submit">
                Start Now
                <HiArrowRight size={18} />
              </button>
            </form>

            <div className="login-shell__footer-note">
              New here? <Link to="/loan-calculator">Check your loan estimate first</Link>.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
