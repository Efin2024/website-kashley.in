import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter as FaTwitterAlt, FaInstagram as FaInsta, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <Link to="/" className="navbar__logo footer__logo">
              <div className="navbar__logo-icon">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#F26622" strokeWidth="2.5" fill="none"/>
                  <text x="20" y="26" textAnchor="middle" fill="#F26622" fontWeight="800" fontSize="16" fontFamily="Plus Jakarta Sans, sans-serif">Q</text>
                </svg>
              </div>
              <div className="navbar__logo-text">
                <span className="navbar__logo-title">QUA</span>
                <span className="navbar__logo-tagline">QUICK URGENT ASSURED</span>
              </div>
            </Link>
            <p className="footer__desc">
              India's fastest and most trusted instant payday loan platform. 
              Get cash up to ₹1,00,000 in your account within 15 minutes.
            </p>
            <div className="footer__socials">
              <button type="button" aria-label="Facebook"><FaFacebookF /></button>
              <button type="button" aria-label="Twitter"><FaTwitterAlt /></button>
              <button type="button" aria-label="Instagram"><FaInsta /></button>
              <button type="button" aria-label="LinkedIn"><FaLinkedinIn /></button>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/loan-calculator">Loan Calculator</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/repay">Repay Now</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Legal & Admin</h4>
            <ul className="footer__links">
              <li><Link to="/terms-condition">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/interest-rate-policy">Interest Rate Policy</Link></li>
              <li><Link to="/risk-management-policy">Risk Management Policy</Link></li>
              <li><Link to="/kyc-aml-policy">KYC & AML Policy</Link></li>
              <li><Link to="/corporate-governance">Corporate Governance</Link></li>
              <li><Link to="/fair-practice-code">Fair Practice Code</Link></li>
              <li><Link to="/cancellation-refund-policy">Cancellation & Refund</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact Info</h4>
            <ul className="footer__contact">
              <li>
                <HiLocationMarker className="footer__contact-icon" />
                <span>2nd Floor, Spaze Edge Tower, Sector 47, Gurugram, Haryana, 122018</span>
              </li>
              <li>
                <HiPhone className="footer__contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <HiMail className="footer__contact-icon" />
                <a href="mailto:support@qualoan.com">support@qualoan.com</a>
              </li>
            </ul>
            <div className="footer__rbi">
              <strong>RBI Registered NBFC</strong>
              <span>License No: B-14.032XX</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} QUA Loan. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-condition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
