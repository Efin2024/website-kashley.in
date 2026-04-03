import React, { useState } from 'react';
import { HiArrowRight, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiSparkles } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent successfully. We will get back to you shortly.');
  };

  return (
    <div className="page-enter contact-page">
      <section className="contact-hero">
        <div className="container contact-hero__content">
          <div className="contact-hero__grid">
            <div className="contact-hero__copy">
              <div className="eyebrow contact-hero__eyebrow">
                <HiSparkles />
                Premium support flow
              </div>
              <h1 className="contact-title">Support should feel like a guided concierge layer.</h1>
              <p className="contact-subtitle">
                Whether you need help with an application, repayment, or account update, Kashley support is designed to reduce uncertainty fast and make next steps obvious.
              </p>
              <div className="contact-hero__ticker" aria-hidden="true">
                <div className="contact-hero__ticker-track">
                  <span>Application help</span>
                  <span>Repayment support</span>
                  <span>Technical issues</span>
                  <span>Clear escalation paths</span>
                  <span>Application help</span>
                  <span>Repayment support</span>
                  <span>Technical issues</span>
                  <span>Clear escalation paths</span>
                </div>
              </div>
            </div>

            <div className="contact-hero__visual">
              <div className="contact-hero__orb contact-hero__orb--one"></div>
              <div className="contact-hero__orb contact-hero__orb--two"></div>
              <div className="contact-hero__support-panel glass-panel">
                <div className="contact-hero__support-top">
                  <span>Support readiness</span>
                  <strong>24/7</strong>
                </div>
                <div className="contact-hero__support-grid">
                  <div>
                    <span>Call back</span>
                    <strong>Fast route</strong>
                  </div>
                  <div>
                    <span>Email</span>
                    <strong>Case context</strong>
                  </div>
                  <div>
                    <span>Office</span>
                    <strong>Gurugram</strong>
                  </div>
                  <div>
                    <span>Support style</span>
                    <strong>Response-first</strong>
                  </div>
                </div>
                <div className="contact-hero__floating contact-hero__floating--top">
                  <span>Priority</span>
                  <strong>Urgent borrower issues first</strong>
                </div>
                <div className="contact-hero__floating contact-hero__floating--bottom">
                  <span>Guidance</span>
                  <strong>Clear next steps, not generic replies</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info-card">
            <div className="contact-info-card__top">
              <h3 className="contact-card-title">Talk to the team</h3>
              <p className="contact-card-desc">Choose the fastest route for your question, or send a detailed note and we will pick it up with context.</p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper"><HiOutlinePhone size={24} /></div>
                <div className="contact-text">
                  <span className="contact-label">Call us</span>
                  <a href="tel:+919876543210" className="contact-value">+91 98765 43210</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper"><HiOutlineMail size={24} /></div>
                <div className="contact-text">
                  <span className="contact-label">Email us</span>
                  <a href="mailto:support@kashley.com" className="contact-value">support@kashley.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper"><HiOutlineLocationMarker size={24} /></div>
                <div className="contact-text">
                  <span className="contact-label">Corporate office</span>
                  <span className="contact-value">2nd Floor, Spaze Edge Tower<br />Sector 47, Gurugram, HR 122018</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card__journey">
              <div className="contact-info-card__journey-step">
                <span>01</span>
                <p>Pick the fastest contact route for the issue.</p>
              </div>
              <div className="contact-info-card__journey-step">
                <span>02</span>
                <p>Share context once so the team can respond accurately.</p>
              </div>
              <div className="contact-info-card__journey-step">
                <span>03</span>
                <p>Move into action with less back-and-forth.</p>
              </div>
            </div>

            <div className="contact-map-wrapper">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.719662706857!2d77.034947!3d28.413795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d228f4ea6c385%3A0xe5a3f1ed16b9b3e9!2sSector%2047%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1711734293810!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-card__inner">
              <div className="contact-form-card__head">
                <h3 className="form-heading">Send us a message</h3>
                <span className="form-head-pill">Response-first design</span>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="input-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" placeholder="e.g. Rahul Sharma" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="input-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" placeholder="e.g. rahul@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" placeholder="e.g. +91 98765 43210" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="input-group">
                    <label>Subject</label>
                    <select name="subject" value={formData.subject} onChange={handleChange}>
                      <option value="">Select a topic</option>
                      <option value="loan_application">Loan Application Status</option>
                      <option value="repayment">Repayment Issue</option>
                      <option value="app_bug">App or Technical Issue</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>Message *</label>
                  <textarea name="message" rows="5" placeholder="Tell us what happened, what you expected, and how we can help." value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 form-submit">
                  Send Message <HiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
