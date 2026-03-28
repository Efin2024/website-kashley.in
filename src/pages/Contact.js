import React, { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiArrowRight } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend here
    alert('Message sent successfully. We will get back to you shortly.');
  };

  return (
    <div className="page-enter contact-page">
      <div className="container">
        <div className="contact-header text-center">
          <div className="badge badge-orange mb-6">Get In Touch</div>
          <h1 className="contact-title">We're Here to Help</h1>
          <p className="contact-subtitle">Have questions about our payday loans or need assistance with your application? Our support team is ready to help you 24/7.</p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Information & Map */}
          <div className="contact-info-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <p className="contact-card-desc">Reach out to us through any of these channels or drop by our corporate office in Gurugram.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper"><HiOutlinePhone size={24} /></div>
                <div className="contact-text">
                  <span className="contact-label">Call Us (24/7 Support)</span>
                  <a href="tel:+919876543210" className="contact-value">+91 98765 43210</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper"><HiOutlineMail size={24} /></div>
                <div className="contact-text">
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:support@qualoan.com" className="contact-value">support@qualoan.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper"><HiOutlineLocationMarker size={24} /></div>
                <div className="contact-text">
                  <span className="contact-label">Corporate Office</span>
                  <span className="contact-value">2nd Floor, Spaze Edge Tower<br/>Sector 47, Gurugram, HR 122018</span>
                </div>
              </div>
            </div>

            <div className="contact-map-wrapper">
              <iframe 
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.719662706857!2d77.034947!3d28.413795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d228f4ea6c385%3A0xe5a3f1ed16b9b3e9!2sSector%2047%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1711734293810!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card gradient-border-card">
            <div className="gradient-border-card-inner form-inner">
              <h3 className="form-heading">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="input-group">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="e.g. Rahul Sharma" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="e.g. rahul@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="input-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="e.g. +91 98765 43210" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <label>Subject</label>
                    <select 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a topic</option>
                      <option value="loan_application">Loan Application Status</option>
                      <option value="repayment">Repayment Issue</option>
                      <option value="app_bug">App/Technical Issue</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Message *</label>
                  <textarea 
                    name="message"
                    rows="5" 
                    placeholder="How can we help you today?" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
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
