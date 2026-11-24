import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Root Application Component
 * Sleek, premium aesthetic with active section tracking.
 */
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = portfolioData.navigation.map((n) => n.id);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const offset = 120;

          // If reached the bottom of page, highlight the last section
          if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
            setActiveSection(sectionIds[sectionIds.length - 1]);
            ticking = false;
            return;
          }

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop - offset;
              const height = el.offsetHeight;
              if (scrollY >= top && scrollY < top + height) {
                setActiveSection(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Navigation with Dark/Light Toggle */}
      <Navbar
        personal={portfolioData.personal}
        navigation={portfolioData.navigation}
        activeSection={activeSection}
      />

      {/* Main Content Stream */}
      <main id="mainContent">
        <HeroSection personal={portfolioData.personal} />
        <About about={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience timeline={portfolioData.timeline} />
        <Contact contact={portfolioData.contact} />
      </main>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
        navigation={portfolioData.navigation}
        footer={portfolioData.footer}
      />
    </div>
  );
}
