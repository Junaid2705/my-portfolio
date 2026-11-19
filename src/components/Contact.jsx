import React, { useState } from 'react';

/**
 * ============================================================================
 * 🔑 WEB3FORMS ACCESS KEY CONFIGURATION
 * ============================================================================
 * Step 1: Visit https://web3forms.com/ and enter your email (junaidp2705@gmail.com).
 * Step 2: Check your inbox for your free Access Key.
 * Step 3: Replace "YOUR_ACCESS_KEY_HERE" below with your actual Access Key.
 * ============================================================================
 */
const WEB3FORMS_ACCESS_KEY = "d025fcba-3eba-4d91-b2a5-abd254c66b35";

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    type: '', // 'success' | 'error' | 'warning'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      setStatus({
        submitting: false,
        message: '⚠️ Please replace "YOUR_ACCESS_KEY_HERE" in Contact.jsx with your free Web3Forms key from https://web3forms.com to receive live emails.',
        type: 'warning',
      });
      return;
    }

    setStatus({ submitting: true, message: '', type: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New message from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          submitting: false,
          message: '✓ Thank you! Your message has been sent successfully. I will get back to you shortly.',
          type: 'success',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          message: data.message || 'Something went wrong. Please try again or email directly at junaidp2705@gmail.com.',
          type: 'error',
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        message: 'Network error. Please try again or email directly at junaidp2705@gmail.com.',
        type: 'error',
      });
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="badge-pill mb-2">Get In Touch</span>
          <h2 className="section-title">Hire Me &amp; Contact</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind, an open role, or just want to say hi? Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Contact Information Card */}
          <div className="col-lg-5">
            <div className="card h-100 p-4 contact-info-card">
              <h3 className="h4 mb-3 font-weight-bold">Let's Connect</h3>
              <p className="text-muted mb-4">
                I am actively seeking software engineering roles and freelance opportunities. Feel free to reach out directly through any channel.
              </p>

              <div className="contact-links-list">
                <a className="contact-link-item" href="mailto:junaidp2705@gmail.com">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-muted small">Email</div>
                    <div className="font-weight-bold contact-channel-val">junaidp2705@gmail.com</div>
                  </div>
                </a>

                <a className="contact-link-item" href="tel:+917057735633">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-muted small">Phone / WhatsApp</div>
                    <div className="font-weight-bold contact-channel-val">+91 7057735633</div>
                  </div>
                </a>

                <a
                  className="contact-link-item"
                  href="https://www.linkedin.com/in/junaid-pathan-579aa0267"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-muted small">LinkedIn</div>
                    <div className="font-weight-bold contact-channel-val">junaid-pathan-579aa0267</div>
                  </div>
                </a>

                <a
                  className="contact-link-item"
                  href="https://github.com/Junaid2705"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-muted small">GitHub</div>
                    <div className="font-weight-bold contact-channel-val">Junaid2705</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Web3Forms Contact Form */}
          <div className="col-lg-7">
            <div className="card h-100 p-4 contact-form-card">
              <h3 className="h4 mb-3 font-weight-bold">Send a Message</h3>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* Web3Forms Access Key Hidden Input */}
                <input
                  type="hidden"
                  name="access_key"
                  value={WEB3FORMS_ACCESS_KEY}
                />

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contactName">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contactEmail">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="contactEmail"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="contactSubject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactSubject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="contactMessage">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="contactMessage"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-solid w-100 py-3"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending Message...' : 'Send Message'}
                </button>

                {status.message && (
                  <div className={`alert alert-${status.type === 'error' ? 'danger' : status.type} mt-3 mb-0`} role="alert">
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
