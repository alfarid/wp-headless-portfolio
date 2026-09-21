"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll opacity
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className={styles.scrollProgress}
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            malfa<span className={styles.logoDot}>.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Beranda
            </Link>
            <Link href="/#services" className={styles.navLink}>
              Layanan
            </Link>
            <Link href="/#projects" className={styles.navLink}>
              Portfolio
            </Link>
            <Link href="/tentang-saya" className={styles.navLink}>
              Tentang Saya
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
          </div>

          <div className={styles.navActions}>
            <a
              href="#contact"
              className={`${styles.navLink} btn-desktop`}
              style={{
                marginRight: "10px",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              Konsultasi
            </a>
            <a
              href="https://wa.me/62895334155259"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-desktop"
              style={{ padding: "8px 20px", fontSize: "0.85rem" }}
            >
              Hubungi Kami
            </a>

            {/* Hamburger Menu Button */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuActive : ""}`}
        >
          <Link
            href="/"
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            href="/#services"
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            Layanan
          </Link>
          <Link
            href="/#projects"
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/tentang-saya"
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            Tentang Saya
          </Link>
          <Link
            href="/blog"
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <a
              href="#contact"
              className={`${styles.mobileNavLink}`}
              style={{ textAlign: "center", fontSize: "1.1rem" }}
              onClick={() => setMenuOpen(false)}
            >
              Konsultasi
            </a>
            <a
              href="https://wa.me/62895334155259"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: "100%", textAlign: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
