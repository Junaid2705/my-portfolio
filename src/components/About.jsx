import React from 'react';

/**
 * About Component
 * Showcases engineering philosophy, educational background metrics, and quick personal facts.
 */
export default function About({ about }) {
  return (
    <section className="section reveal" id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{about.sectionTag}</span>
          <h2 className="section-title">{about.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio card">
            <h3 className="card-title">Who I Am</h3>
            {about.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <div className="about-metrics">
              {about.metrics.map((metric, index) => (
                <div key={index} className="metric-item">
                  <span className="metric-num">{metric.num}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-details card">
            <h3 className="card-title">Quick Facts</h3>
            <ul className="facts-list">
              {about.quickFacts.map((fact, index) => (
                <li key={index}>
                  <span className="fact-label">{fact.label}</span>
                  <span className={`fact-value ${fact.isHighlight ? 'fact-highlight' : ''}`}>
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
            <a className="btn btn-primary btn-block" href="#contact">
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
