import React from 'react';

/**
 * Skills Component
 * Displays a clean, modern grid of technical skills as minimalist badges/chips.
 * No arbitrary percentages, progress bars, or proficiency labels.
 */
export default function Skills({ skills }) {
  const renderCategoryIcon = (iconType) => {
    switch (iconType) {
      case 'fe':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
      case 'be':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        );
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
    }
  };

  return (
    <section className="section reveal" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{skills.sectionTag}</span>
          <h2 className="section-title">{skills.title}</h2>
          <p className="section-subtitle">{skills.subtitle}</p>
        </div>

        <div className="skills-grid">
          {skills.categories.map((cat) => (
            <div key={cat.id} className="skill-category card">
              <div className="category-header">
                <div className={`category-icon category-icon-${cat.iconType}`}>
                  {renderCategoryIcon(cat.iconType)}
                </div>
                <div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-sub">{cat.subtitle}</p>
                </div>
              </div>

              {/* Clean flexbox of skill chips (NO levels or progress bars) */}
              <div className="skills-chip-wrap">
                {cat.skills.map((skillName, idx) => (
                  <span key={idx} className="skill-chip">
                    <span className="chip-dot" aria-hidden="true" />
                    <span className="chip-label">{skillName}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
