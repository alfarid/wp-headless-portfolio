'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Menu.module.css';
import { Project } from '@/lib/wordpress';

interface MenuProps {
  items: Project[];
}

const Menu = ({ items }: MenuProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback if there are no items
  if (!items || items.length === 0) return null;

  // Limit to first 4 projects to fit the carousel nicely
  const displayItems = items.slice(0, 4);
  const activeProject = displayItems[activeIndex] || displayItems[0];

  return (
    <section id="projects" className={styles.menuSection}>
      {/* Background glow decoration */}
      <div className="blur-blob blur-indigo" style={{ bottom: '10%', left: '5%', width: '350px', height: '350px' }} aria-hidden="true"></div>

      <div className="container">
        <div className={styles.header} data-aos="fade-up">
          <div className={styles.taglinePill}>
            <span className="badge-glow">Portfolio Proyek</span>
          </div>
          <h2 className="section-title">Hasil Karya Pilihan</h2>
          <p className="section-subtitle">
            Koleksi proyek nyata yang mendemonstrasikan integrasi headless CMS, custom Gutenberg block development, serta performa Core Web Vitals hijau.
          </p>
        </div>

        {/* Tabbed Split Carousel Layout */}
        <div className={styles.splitLayout}>
          {/* Left: Tab Buttons */}
          <div className={styles.tabList} data-aos="fade-right">
            {displayItems.map((project, idx) => (
              <button
                key={project.id}
                className={`${styles.tabBtn} ${activeIndex === idx ? styles.activeTab : ''}`}
                onClick={() => setActiveIndex(idx)}
                role="tab"
                aria-selected={activeIndex === idx}
                aria-controls={`project-panel-${idx}`}
              >
                {/* Active Indicator check icon matching Open Pro */}
                <div className={styles.tabIcon}>
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M14.092 5.207-8.207 8.207-3.592-3.591 1.414-1.415 2.178 2.178 6.793-6.793 1.414 1.414Z"></path>
                  </svg>
                </div>

                <div className={styles.tabContent}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.tabTitle}>{project.name}</h3>
                  <p className={styles.tabDesc}>{project.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Dynamic Screenshot Display */}
          <div className={styles.imageContainer} data-aos="fade-left" id={`project-panel-${activeIndex}`} role="tabpanel">
            {/* Background spotlight backlight */}
            <div className={styles.backlight} aria-hidden="true"></div>
            
            <Image
              key={activeIndex} /* Key triggers re-mount and CSS animation on tab change */
              src={activeProject.image}
              alt={activeProject.name}
              fill
              sizes="(max-width: 991px) 100vw, 50vw"
              className={`${styles.carouselImage} ${styles.fadeAnim}`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

