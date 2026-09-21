"use client";

import Image from "next/image";
import styles from "./Menu.module.css";
import { Project } from "@/lib/wordpress";

interface MenuProps {
  items: Project[];
}

const Menu = ({ items }: MenuProps) => {
  // Fallback if there are no items
  if (!items || items.length === 0) return null;

  // Show all 6 projects as cards in a grid
  const displayItems = items.slice(0, 6);

  return (
    <section id="projects" className={styles.menuSection}>
      {/* Background glow decoration */}
      <div
        className="blur-blob blur-indigo"
        style={{ bottom: "10%", left: "5%", width: "350px", height: "350px" }}
        aria-hidden="true"
      ></div>

      <div className="container">
        <div className={styles.header} data-aos="fade-up">
          <div className={styles.taglinePill}>
            <span className="badge-glow">Portfolio Proyek</span>
          </div>
          <h2 className="section-title">Hasil Karya Pilihan</h2>
          <p className="section-subtitle">
            Koleksi proyek nyata yang mendemonstrasikan hasil desain di Figma,
            pembangunan dengan Elementor, hingga pengembangan custom theme.
          </p>
        </div>

        {/* Grid of Project Cards */}
        <div className={styles.cardsGrid} data-aos="fade-up">
          {displayItems.map((project) => {
            const CardComponent = project.url ? "a" : "div";
            const isScrollable = project.category === "Landing Page";

            return (
              <CardComponent
                key={project.id}
                href={project.url}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className={styles.projectCard}
                title={project.url ? "Kunjungi Website" : undefined}
              >
                <div className={styles.cardImageWrapper}>
                  {isScrollable ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={2000}
                      style={{
                        width: "100%",
                        height: "auto",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImageScroll}
                      priority={false}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                  )}
                  <span className={styles.cardCategory}>{project.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.techList}>
                    {project.techStack.split(",").map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <div className={styles.cardLink}>
                      Kunjungi Website <span className={styles.arrow}>&rarr;</span>
                    </div>
                  )}
                </div>
              </CardComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
