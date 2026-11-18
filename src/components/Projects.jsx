import React, { useState } from 'react';

/**
 * Projects Component
 * Displays featured projects with dynamic category filtering via React useState,
 * responsive cards, tech tags, and external project links.
 */
export default function Projects({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects.items
    : projects.items.filter((item) => item.category === activeCategory);

  return (
    <section className="section reveal" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{projects.sectionTag}</span>
          <h2 className="section-title">{projects.title}</h2>
          <p className="section-subtitle">{projects.subtitle}</p>
        </div>

        {/* Category Filters using React State */}
        {projects.categories && (
          <div className="filters d-flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Project filters">
            {projects.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="projects-grid">
          {filteredProjects.map((item) => (
            <article key={item.id} className="project-card card" id={`project-${item.id}`}>
              <div className="project-media">
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  loading="lazy"
                />
                <span className="project-tag">{item.categoryTag}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-desc">{item.description}</p>
                <div className="tech-stack" aria-label="Technologies used">
                  {item.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    className="btn btn-sm btn-outline"
                    href={item.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.links.isExternalDrive ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    )}
                    <span>{item.links.codeLabel}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
