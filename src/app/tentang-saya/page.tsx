import Image from "next/image";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu"; // Projects
import Locations from "@/components/Locations"; // Services
import News from "@/components/News"; // Blog
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import Hero from "@/components/Hero";
import { getServices, getBlogPosts, getTestimonials, MOCK_PROJECTS } from "@/lib/wordpress";

export const metadata = {
  title: "Tentang Saya - Muhammad Al Faridzi | WordPress & Next.js Developer",
  description: "Profil profesional, perjalanan karir, dan keahlian Muhammad Al Faridzi sebagai WordPress Developer & Designer.",
};

export default async function TentangSayaPage() {
  // Fetch data from WordPress (using WPGraphQL with fallback to mock data)
  const [services, blogPosts, testimonials] = await Promise.all([
    getServices(),
    getBlogPosts(),
    getTestimonials(),
  ]);
  const projects = MOCK_PROJECTS;

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Navbar />

      {/* Hero Personal */}
      <Hero />

      {/* About Me Section */}
      <section id="about" className="section" style={{ paddingTop: "60px" }}>
        {/* Glow decoration */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "5%",
            width: "250px",
            height: "250px",
            background:
              "radial-gradient(circle, rgba(0, 242, 254, 0.04) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
            filter: "blur(30px)",
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div
              data-aos="fade-right"
              style={{
                position: "relative",
                height: "450px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(120, 92, 255, 0.15)",
                boxShadow: "var(--shadow-md)",
                background:
                  "linear-gradient(135deg, rgba(120, 92, 255, 0.12) 0%, rgba(211, 202, 255, 0.25) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/alfa_doodle_avatar_white.png"
                alt="Muhammad Al Faridzi"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  padding: "20px",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    color: "var(--gray-dark)",
                    fontSize: "1.1rem",
                  }}
                >
                  WordPress Developer & Designer
                </p>
                <p
                  style={{
                    color: "var(--primary)",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    marginTop: "4px",
                  }}
                >
                  Ready to Build Your Next Project
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <p
                style={{
                  color: "var(--primary)",
                  fontWeight: "600",
                  marginBottom: "15px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                }}
              >
                TENTANG SAYA
              </p>
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "25px",
                  lineHeight: "1.2",
                  color: "var(--gray-dark)",
                }}
              >
                Fokus Kualitas & Performa
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--gray-medium)",
                  marginBottom: "30px",
                  lineHeight: "1.7",
                }}
              >
                Saya adalah WordPress Developer yang berdedikasi membangun website yang cepat, aman, dan mudah dikelola. Dengan menguasai alur kerja lengkap mulai dari desain UI/UX di Figma, kustomisasi page builder Elementor, hingga arsitektur modern Headless WordPress + Next.js, saya menghadirkan solusi web berkualitas tinggi yang disesuaikan untuk menunjang pertumbuhan bisnis Anda.
              </p>
              <a
                href="https://www.linkedin.com/in/malfaridzi/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pengalaman Kerja Section */}
      <section
        id="experience"
        className="section"
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          backgroundColor: "rgba(120, 92, 255, 0.01)",
        }}
      >
        <div className="container">
          <div className="experiences-container">
            <div
              data-aos="fade-right"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span className="badge-glow">Karir & Pengalaman</span>
              <h2
                className="section-title"
                style={{
                  textAlign: "left",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Perjalanan Profesional
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--gray-medium)",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                }}
              >
                Mari bekerja sama, saya terbuka untuk kesempatan part-time
                maupun freelance. Kombinasi keahlian kita akan menciptakan hasil
                yang luar biasa.
              </p>
              <a
                href="https://drive.google.com/file/d/1eVPRk9N7hWZzhrXbG1t6QAV0ZNrPpDCc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Unduh CV
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

            <div className="timeline" data-aos="fade-left">
              {/* Freelance */}
              <div className="timeline-item">
                <div className="timeline-node"></div>
                <div className="timeline-header">
                  <h3 className="timeline-title">WordPress Developer</h3>
                  <span className="timeline-date">2025 - SEKARANG</span>
                </div>
                <span className="timeline-company">Freelance</span>
                <p className="timeline-desc">
                  Mengembangkan solusi web modern secara independen untuk klien
                  global. Spesialisasi dalam konversi situs monolitik ke
                  arsitektur headless (Next.js & React), pembuatan plugin
                  kustom, serta desain dan pengembangan Gutenberg block editor
                  kustom yang ramah pengguna.
                </p>
              </div>

              {/* Nusantawan Hebat */}
              <div className="timeline-item">
                <div className="timeline-node"></div>
                <div className="timeline-header">
                  <h3 className="timeline-title">WordPress Developer</h3>
                  <span className="timeline-date">2023 - 2024</span>
                </div>
                <span className="timeline-company">Nusantawan Hebat</span>
                <p className="timeline-desc">
                  Membangun dan merawat berbagai portal berita serta website
                  perusahaan berskala besar berbasis WordPress. Berkolaborasi
                  erat dengan desainer grafis dan tim marketing dalam merancang
                  template kustom, mengoptimalkan query database, serta
                  mengintegrasikan API pihak ketiga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="section"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.03)",
          position: "relative",
        }}
      >
        <div
          className="blur-blob blur-purple"
          style={{
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "500px",
          }}
          aria-hidden="true"
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{ textAlign: "center", marginBottom: "60px" }}
            data-aos="fade-up"
          >
            <span className="badge-glow">Keahlian</span>
            <h2 className="section-title" style={{ marginTop: "20px" }}>
              Keahlian Spesialisasi
            </h2>
            <p className="section-subtitle">
              Saya adalah pribadi yang sangat termotivasi untuk terus
              mempelajari hal-hal baru dan menyukai tantangan baru. Saya
              proaktif dalam mencari peluang belajar dan tantangan baru.
            </p>
          </div>

          <div
            data-aos="fade-up"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              aspectRatio: "21 / 8",
              maxHeight: "300px",
              margin: "0 auto 60px",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Image
              src="/gutenberg_project_v2.png"
              alt="Gutenberg React Block Editor Showcase"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px 30px",
              marginTop: "40px",
            }}
          >
            <article data-aos="fade-up" data-aos-delay="0">
              <div style={{ color: "var(--primary)", marginBottom: "15px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-dark)",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                WordPress Headless Next.js
              </h3>
              <p
                style={{
                  color: "var(--gray-medium)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Menghubungkan backend WordPress ke frontend Next.js menggunakan
                GraphQL/WPGraphQL untuk kecepatan loading milidetik dan performa
                maksimal.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="100">
              <div style={{ color: "var(--primary)", marginBottom: "15px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-dark)",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                WordPress
              </h3>
              <p
                style={{
                  color: "var(--gray-medium)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Keahlian dalam custom theme development, full-site editing
                (FSE), custom Gutenberg blocks berbasis React, serta optimasi
                plugin.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="200">
              <div style={{ color: "var(--primary)", marginBottom: "15px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-dark)",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Elementor
              </h3>
              <p
                style={{
                  color: "var(--gray-medium)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Mendesain dan mengembangkan website menggunakan page builder
                Elementor secara pixel-perfect, optimal, ringan, dan responsif.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="300">
              <div style={{ color: "var(--primary)", marginBottom: "15px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-dark)",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Figma
              </h3>
              <p
                style={{
                  color: "var(--gray-medium)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Merancang wireframe, mockups, prototyping interaktif, dan UI/UX
                design modern dengan struktur grid serta komponen reusable.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="400">
              <div style={{ color: "var(--primary)", marginBottom: "15px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="2" y1="8" x2="22" y2="8" />
                  <line x1="6" y1="21" x2="18" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-dark)",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Web Design
              </h3>
              <p
                style={{
                  color: "var(--gray-medium)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Merancang estetika visual website yang modern, interaktif,
                dengan perpaduan warna yang harmonis dan tipografi yang kuat.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="500">
              <div style={{ color: "var(--primary)", marginBottom: "15px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  <path d="M13 13l6 6" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-dark)",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                UI / UX
              </h3>
              <p
                style={{
                  color: "var(--gray-medium)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Menganalisis user flow, arsitektur informasi, serta wireframing
                intuitif untuk menciptakan pengalaman pengguna yang optimal.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Services & Portfolio Sections */}
      <Locations items={services} />
      <Menu items={projects} />
      <TestimonialsSection testimonials={testimonials} />
      <News items={blogPosts} />

      {/* Contact Section */}
      <section
        id="contact"
        className="section"
        style={{
          backgroundColor: "rgba(120, 92, 255, 0.03)",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-glow" data-aos="fade-up">
            KONSULTASI GRATIS
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              color: "var(--gray-dark)",
              fontSize: "3rem",
              marginTop: "20px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Siap Membangun Website Impian Anda?
          </h2>

          <ContactForm />

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            style={{
              color: "var(--gray-medium)",
              fontSize: "0.9rem",
              marginTop: "30px",
            }}
          >
            Atau hubungi langsung melalui:
            <a
              href="mailto:alfaridzim7@gmail.com"
              style={{
                color: "var(--primary)",
                marginLeft: "8px",
                marginRight: "8px",
                textDecoration: "underline",
              }}
            >
              Email (alfaridzim7@gmail.com)
            </a>
            atau
            <a
              href="https://wa.me/62895334155259"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                marginLeft: "8px",
                textDecoration: "underline",
              }}
            >
              WhatsApp
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
