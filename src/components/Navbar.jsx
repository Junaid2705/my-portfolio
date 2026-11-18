import React, { useState, useEffect, useRef } from 'react';

/**
 * Navbar Component
 * Fully responsive navigation with desktop layout, mobile drawer,
 * sticky glassmorphism header, and React-driven Dark/Light theme toggle.
 */
export default function Navbar({ personal, navigation, activeSection }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // 1. Theme State (Defaults to 'dark' for sleek aesthetic, persists in localStorage)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // 2. Synchronize theme with <html> attribute for Bootstrap 5.3 & CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 3. Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Click outside mobile drawer to auto-close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isNavOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);
  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="top" ref={navRef}>
      <div className="container nav-wrap">
        {/* Brand Logo & Monogram */}
        <a className="brand" href="#hero" onClick={closeNav} aria-label={`${personal.name} - Home`}>
          <span className="brand-badge">{personal.monogram}</span>
          <span className="brand-name">
            {personal.firstName}
            <span className="brand-accent">.dev</span>
          </span>
        </a>

        {/* Right Controls Container */}
        <div className="nav-right">
          {/* Desktop Navigation Links */}
          <nav className="nav-desktop" aria-label="Primary navigation">
            {navigation.map((link) => (
              <a
                key={link.id}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn-sm btn-primary nav-cta" href="#contact">
              Hire Me
            </a>
          </nav>

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            type="button"
          >
            {theme === 'dark' ? (
              /* Sun Icon */
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon Icon */
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
            id="navToggle"
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
            aria-expanded={isNavOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isNavOpen && (
          <nav className="nav-mobile-drawer" aria-label="Mobile navigation">
            {navigation.map((link) => (
              <a
                key={link.id}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                href={link.href}
                onClick={closeNav}
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn-primary nav-cta" href="#contact" onClick={closeNav}>
              Hire Me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
