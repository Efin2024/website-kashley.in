import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiSparkles, HiX } from 'react-icons/hi';
import './Navbar.css';

const START_NOW_URL = 'https://app.kashley.in/login';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <div className="navbar__logo-icon">
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
              <rect x="3" y="3" width="34" height="34" rx="11" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="2.5" />
              <path d="M14 11V29" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
              <path d="M27 12L17 21L27 29" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Kashley</span>
            <span className="navbar__logo-tagline">Fast cash, clearly</span>
          </div>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <div className="navbar__links-inner">
            <NavLink to="/" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeMenu} end>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeMenu}>About</NavLink>
            <NavLink to="/loan-calculator" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Calculator</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/faq" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeMenu}>FAQ</NavLink>
            <NavLink to="/repay" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Repay</NavLink>
          </div>

          <div className="navbar__auth-mobile">
            <div className="navbar__mini-note">
              <HiSparkles />
              Fast approvals with transparent pricing
            </div>
            <a className="btn-signup" href={START_NOW_URL} onClick={closeMenu}>
              Start Now
            </a>
          </div>
        </div>

        <div className="navbar__auth">
          <div className="navbar__meta-pill">
            <HiSparkles />
            15 min average transfer
          </div>
          <a className="btn-signup" href={START_NOW_URL}>
            Start Now
          </a>
        </div>

        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
      {menuOpen && <div className="navbar__overlay" onClick={closeMenu} />}
    </nav>
  );
};

export default Navbar;
