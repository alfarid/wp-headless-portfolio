"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const PHRASES = [
  "WordPress Developer",
  "WordPress Headless Next.js",
  "Elementor Page Builder",
  "Figma to WordPress",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = PHRASES[phraseIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));

        // Finished typing the phrase
        if (currentText === currentPhrase) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));

        // Finished deleting
        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
          setTypingSpeed(100); // Reset speed
          return;
        }
      }

      // Determine typing speed
      const nextSpeed = isDeleting ? 40 : 80;
      setTypingSpeed(nextSpeed);

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className={styles.hero}>
      {/* Animated background blurs */}
      <div
        className="blur-blob blur-purple"
        style={{ top: "-10%", left: "20%", width: "600px", height: "600px" }}
        aria-hidden="true"
      ></div>
      <div
        className="blur-blob blur-indigo"
        style={{ top: "20%", right: "-10%", width: "700px", height: "700px" }}
        aria-hidden="true"
      ></div>

      {/* Decorative grid overlay */}
      <div className={styles.gridOverlay} aria-hidden="true"></div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className={styles.heroContent}>
          <span className={styles.tagline} data-aos="fade-up">
            WordPress Developer
          </span>
          <h1 className={styles.title} data-aos="fade-up" data-aos-delay="100">
            Membangun Solusi <br />
            <span className="gradient-text">{currentText}</span>
            <span className={styles.cursor}>|</span>
          </h1>
          <p
            className={styles.description}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Halo! Saya membantu Anda merancang antarmuka di Figma, membangun dengan
            Elementor secara pixel-perfect, hingga memprogram solusi website WordPress kustom
            yang super cepat, aman, dan ramah SEO.
          </p>

          <div
            className={styles.actions}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#projects" className="btn btn-primary">
              Cek Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/malfaridzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Cruip Open Pro Style Mockup Visual */}
          <div
            className={styles.mockupWrapper}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={styles.mockupContainer}>
              <Image
                src="/dev_workspace_v2.png"
                alt="WordPress Developer Workspace Dashboard"
                width={1104}
                height={576}
                className={styles.mockupImage}
                priority
              />
              <div className={styles.mockupOverlay}>
                <span className={styles.playBtn} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
            <div className={styles.backlight} aria-hidden="true"></div>
          </div>

          {/* Developer Stats Row */}
          <div
            className={styles.statsContainer}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Tahun Pengalaman</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Proyek Selesai</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statLabel}>PageSpeed Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
