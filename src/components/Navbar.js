import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiSparkles, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = ({ openAuthModal }) => {
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
              <circle cx="20" cy="20" r="18" stroke="#F26622" strokeWidth="2.5" fill="none" />
              <text x="20" y="26" textAnchor="middle" fill="#F26622" fontWeight="800" fontSize="16" fontFamily="Plus Jakarta Sans, sans-serif">K</text>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Kashly</span>
            <span className="navbar__logo-tagline">Quick Urgent Assured</span>
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
            <button className="btn-login" onClick={() => { closeMenu(); openAuthModal('login'); }}>Login</button>
            <button className="btn-signup" onClick={() => { closeMenu(); openAuthModal('signup'); }}>Start Now</button>
          </div>
        </div>

        <div className="navbar__auth">
          <div className="navbar__meta-pill">
            <HiSparkles />
            15 min average transfer
          </div>
          <button className="btn-login" onClick={() => openAuthModal('login')}>Login</button>
          <button className="btn-signup" onClick={() => openAuthModal('signup')}>Start Now</button>
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
