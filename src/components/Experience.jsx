import React from 'react';

/**
 * Experience Component
 * Dual-column timeline showcasing professional experience and educational background.
 */
export default function Experience({ timeline }) {
  return (
    <section className="section reveal" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{timeline.sectionTag}</span>
          <h2 className="section-title">{timeline.title}</h2>
          <p className="section-subtitle">{timeline.subtitle}</p>
        </div>

        <div className="timeline-container">
          {/* Professional Experience Column */}
          <div className="timeline-column">
            <div className="timeline-heading">
              <span className="heading-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h3>Professional Experience</h3>
            </div>

            <div className="timeline-track">
              {timeline.experience.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card card">
                    <div className="timeline-meta">
                      <span className={`timeline-badge ${exp.badgeClass || ''}`}>{exp.badge}</span>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <span className="timeline-org">{exp.organization}</span>
                    <ul className="timeline-bullets">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-column">
            <div className="timeline-heading">
              <span className="heading-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              <h3>Education</h3>
            </div>

            <div className="timeline-track">
              {timeline.education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card card">
                    <div className="timeline-meta">
                      <span className={`timeline-badge ${edu.badgeClass || ''}`}>{edu.badge}</span>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <h4 className="timeline-role">{edu.degree}</h4>
                    <span className="timeline-org">{edu.institution}</span>
                    {edu.grade && (
                      <div className="timeline-stat">
                        <span className="stat-highlight">{edu.grade}</span>
                      </div>
                    )}
                    {edu.description && (
                      <p className="timeline-desc">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
