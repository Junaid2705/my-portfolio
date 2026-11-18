import React, { useState, useEffect } from 'react';

/**
 * Footer Component
 * Renders footer navigation, social links, copyright note,
 * and floating Back-to-Top button controlled via React scroll state.
 */
export default function Footer({ personal, navigation, footer }) {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand-col">
            <a className="brand" href="#hero">
              <span className="brand-badge">{personal.monogram}</span>
              <span className="brand-name">
                {personal.firstName}
                <span className="brand-accent">.dev</span>
              </span>
            </a>
            <p className="footer-tagline">{footer.tagline}</p>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">Navigation</span>
            <div className="footer-nav">
              {navigation.map((link) => (
                <a key={link.id} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-social-col">
            <span className="footer-col-title">Connect</span>
            <div className="footer-social-links">
              {personal.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.ariaLabel}
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {personal.name}. {footer.copyrightNote}
          </p>
          <a className="back-to-top-link" href="#top" onClick={scrollToTop}>
            Back to top &uarr;
          </a>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <a
        className={`to-top ${showToTop ? 'show' : ''}`}
        id="toTopBtn"
        href="#top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </a>
    </>
  );
}
