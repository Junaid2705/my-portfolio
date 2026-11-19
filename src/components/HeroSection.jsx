import React from 'react';

/**
 * HeroSection Component
 * Introduces the developer with headline, availability status, CTA buttons,
 * social links, and profile image frame.
 */
export default function HeroSection({ personal }) {
  const renderSocialIcon = (platform) => {
    switch (platform) {
      case 'GitHub':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
    }
  };

  return (
    <section className="hero section" id="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="status-pill">
            <span className="status-dot" />
            <span>{personal.statusText}</span>
          </div>

          <h1 className="hero-title">
            Hi, I’m {personal.name}
          </h1>
          <h2 className="hero-role">{personal.role}</h2>
          <p className="hero-desc">{personal.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="#projects">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              className="btn btn-outline"
              href={personal.resumeUrl}
              download={`${personal.name.replace(/\s+/g, '_')}_Resume.pdf`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-social">
            <span className="social-label">Connect:</span>
            {personal.socials.map((s) => (
              <a
                key={s.platform}
                className="social-btn"
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.ariaLabel}
              >
                {renderSocialIcon(s.platform)}
                <span>{s.platform}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-frame">
            <div className="profile-card">
              <img
                className="profile-img"
                src={personal.photoUrl}
                alt={`${personal.name} - ${personal.role}`}
              />
              <div className="profile-badge">
                <span className="badge-indicator" />
                <div className="badge-text">
                  <span className="badge-title">Software Developer</span>
                  <span className="badge-sub">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
