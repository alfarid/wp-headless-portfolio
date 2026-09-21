import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import Menu from "@/components/Menu"; // Showcase Projects
import News from "@/components/News"; // Blog
import { getBlogPosts, getTestimonials, MOCK_PROJECTS } from "@/lib/wordpress";

export const metadata = {
  title: "Jasa Pembuatan Website Profesional & Modern",
  description: "Jasa pembuatan website profil perusahaan, toko online (e-commerce), web e-learning LMS, portal berita/news, dan arsitektur Headless WordPress + Next.js.",
};

export default async function Home() {
  const [blogPosts, testimonials] = await Promise.all([
    getBlogPosts(),
    getTestimonials(),
  ]);

  const projects = MOCK_PROJECTS;
  const WA_NUMBER = "62895334155259";

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "160px 0 100px",
          overflow: "hidden",
          background: "radial-gradient(ellipse at top, rgba(120, 92, 255, 0.08) 0%, transparent 70%)",
        }}
      >
        {/* Glow Background */}
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

        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <span
              className="badge-glow"
              data-aos="fade-up"
              style={{ marginBottom: "20px", display: "inline-block" }}
            >
              AGENCY WEB DEVELOPMENT PROFESIONAL
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.15",
                color: "var(--gray-dark)",
                marginBottom: "24px",
                letterSpacing: "-0.5px",
              }}
            >
              Jasa Pembuatan Website <br />
              <span className="gradient-text">Kencang, Modern & Berkonversi Tinggi</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--gray-medium)",
                lineHeight: "1.7",
                marginBottom: "40px",
                maxWidth: "780px",
                margin: "0 auto 40px",
              }}
            >
              Kami membantu bisnis, sekolah, kreator, dan portal media membangun website impian
              mulai dari Company Profile, Toko Online, Web E-Learning (LMS), Portal Berita, hingga Headless Next.js.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20website`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "14px 32px", fontSize: "1rem" }}
              >
                Konsultasi Gratis via WA
              </a>
              <a
                href="#pricing"
                className="btn btn-outline"
                style={{ padding: "14px 32px", fontSize: "1rem" }}
              >
                Lihat Paket Servis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.06)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          backgroundColor: "#ffffff",
          padding: "40px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              textAlign: "center",
            }}
          >
            <div>
              <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>500+</h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem" }}>Website Terbit & Aktif</p>
            </div>
            <div>
              <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>99.8%</h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem" }}>Uptime & Keandalan Server</p>
            </div>
            <div>
              <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>95+</h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem" }}>Google PageSpeed Score</p>
            </div>
            <div>
              <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>100%</h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem" }}>Garansi Kepuasan Klien</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Layanan Pembuatan Website) */}
      <section id="services" className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }} data-aos="fade-up">
            <span className="badge-glow">SOLUSI DIGITAL</span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              Layanan Pembuatan Website Unggulan
            </h2>
            <p className="section-subtitle">
              Kami menghadirkan berbagai pilihan arsitektur web modern yang disesuaikan secara khusus dengan skala bisnis dan tujuan digital Anda.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
            }}
          >
            {/* Service 1: Company Profile */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🏢</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--gray-dark)" }}>
                Website Profil Perusahaan (Company Profile)
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Desain profesional dan elegan untuk meningkatkan kredibilitas perusahaan, menampilkan layanan, portofolio, serta tim secara meyakinkan di mata klien.
              </p>
            </div>

            {/* Service 2: Toko Online / E-Commerce */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🛒</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--gray-dark)" }}>
                Toko Online / E-Commerce
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Website penjualan dengan fitur keranjang belanja, manajemen stok otomatis, hitung ongkir otomatis, serta integrasi Payment Gateway (Midtrans/Xendit).
              </p>
            </div>

            {/* Service 3: Web E-Learning / LMS */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(120, 92, 255, 0.3)",
                boxShadow: "0 10px 30px rgba(120, 92, 255, 0.08)",
                background: "linear-gradient(180deg, #ffffff 0%, rgba(120, 92, 255, 0.02) 100%)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🎓</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--primary)" }}>
                Web E-Learning / Platform Kursus (LMS)
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Platform akademik & kursus online lengkap: proteksi materi video, kuis interaktif, progres siswa, integrasi transaksi otomatis, dan penerbitan sertifikat.
              </p>
            </div>

            {/* Service 4: Web Berita / News Media */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(120, 92, 255, 0.3)",
                boxShadow: "0 10px 30px rgba(120, 92, 255, 0.08)",
                background: "linear-gradient(180deg, #ffffff 0%, rgba(120, 92, 255, 0.02) 100%)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>📰</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--primary)" }}>
                Web Berita / Portal News & Media
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Portal berita berkapasitas tinggi yang dirancang menampung ribuan artikel & trafik masif, optimasi Google News, struktur iklan AdSense, serta sistem jurnalis internal.
              </p>
            </div>

            {/* Service 5: Headless WP & Next.js */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>⚡</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--gray-dark)" }}>
                Headless WordPress & Next.js
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Kombinasi terbaik backend WordPress yang mudah dikelola dengan frontend Next.js yang super kencang, aman dari serangan siber, dan nilai SEO sempurna.
              </p>
            </div>

            {/* Service 6: Landing Page Conversion */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🎯</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--gray-dark)" }}>
                Landing Page High Conversion
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Halaman penawaran khusus iklan (FB Ads, Google Ads, TikTok Ads) yang didesain secara psikologis untuk memaksimalkan angka penjualan dan lead produk Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="section"
        style={{
          backgroundColor: "rgba(120, 92, 255, 0.02)",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }} data-aos="fade-up">
            <span className="badge-glow">KEUNGGULAN KAMI</span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              Mengapa Mempercayakan Web Anda Kepada Kami?
            </h2>
            <p className="section-subtitle">
              Kami tidak sekadar membuat website tampilan cantik, tetapi membangun aset digital yang berkinerja tinggi dan menghasilkan dampak bisnis nyata.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            <div data-aos="fade-up" data-aos-delay="100">
              <div style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "12px" }}>🎨</div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                Desain Custom & Exclusive
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Bukan sekadar mengunduh template gratisan. Setiap tata letak dirancang sesuai dengan identitas dan warna brand unik bisnis Anda.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <div style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "12px" }}>🚀</div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                Kecepatan Kilat & SEO Optimized
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Dioptimasi dengan standar Google Web Vitals agar halaman terbuka instan dan mudah bersaing di halaman pertama Google.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <div style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "12px" }}>📱</div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                100% Mobile Responsive
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Tampilan menyesuaikan secara sempurna saat dibuka dari smartphone, tablet, maupun layar desktop resolusi tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / PAKET SERVIS Section - Beautiful, High Converting, No Prices */}
      <section id="pricing" className="section" style={{ position: "relative", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }} data-aos="fade-up">
            <span className="badge-glow">PAKET SERVIS & SOLUSI WEB</span>
            <h2 className="section-title" style={{ marginTop: "16px", fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
              Pilihan Paket Pembuatan Website
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.1rem" }}>
              Dirancang secara presisi untuk membantu pertumbuhan bisnis Anda. Konsultasikan kebutuhan Anda bersama kami tanpa dipungut biaya.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              alignItems: "stretch",
            }}
          >
            {/* Starter Package Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                backgroundColor: "#ffffff",
                padding: "44px 32px",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "rgba(120, 92, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                    }}
                  >
                    🚀
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                      STARTER TIER
                    </span>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--gray-dark)", margin: "2px 0 0" }}>
                      Paket Landing Page / Starter
                    </h3>
                  </div>
                </div>

                <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "28px" }}>
                  Pilihan terbaik untuk campaign promosi produk, halaman iklan sales, atau memperkuat identitas brand UMKM.
                </p>

                <div style={{ borderTop: "1px dashed rgba(0, 0, 0, 0.1)", paddingTop: "24px", marginBottom: "28px" }}>
                  <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--gray-dark)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>
                    FITUR & CAKUPAN SERVIS:
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "14px", color: "var(--gray-medium)", fontSize: "0.95rem" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> 1 Halaman Landing Page High Conversion
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Free Domain & Cloud Hosting 1 Tahun
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Integrasi Tombol WhatsApp Direct Chat
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Desain Mobile Friendly & Ultra Fast Loading
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Panduan Ringkas Kelola Konten
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20konsultasi%20Paket%20Starter`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Diskusi Paket Starter →
              </a>
            </div>

            {/* Business Package Card (Featured) */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                backgroundColor: "#ffffff",
                padding: "44px 32px",
                borderRadius: "20px",
                border: "2px solid var(--primary)",
                boxShadow: "0 20px 50px rgba(120, 92, 255, 0.16)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                background: "linear-gradient(180deg, #ffffff 0%, rgba(120, 92, 255, 0.02) 100%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "24px",
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                  color: "#ffffff",
                  padding: "6px 18px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  boxShadow: "0 4px 15px rgba(120, 92, 255, 0.3)",
                }}
              >
                PALING FAVORIT
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "rgba(120, 92, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                    }}
                  >
                    🏢
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                      BUSINESS TIER
                    </span>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--gray-dark)", margin: "2px 0 0" }}>
                      Paket Business (Company Profile)
                    </h3>
                  </div>
                </div>

                <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "28px" }}>
                  Solusi ideal dan paling diminati untuk profil bisnis perusahaan, profil lembaga resmi, serta ekspansi pasar digital.
                </p>

                <div style={{ borderTop: "1px dashed rgba(120, 92, 255, 0.2)", paddingTop: "24px", marginBottom: "28px" }}>
                  <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>
                    FITUR & CAKUPAN SERVIS:
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "14px", color: "var(--gray-medium)", fontSize: "0.95rem" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Hingga 7 Halaman Struktur Utama Custom
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Free Domain .COM & Cloud Hosting Premium
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Email Profesional Perusahaan (@namabisnis.com)
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Modul Blog Berita & Galeri Portfolio
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Optimasi SEO Dasar & Integrasi Google Maps
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20konsultasi%20Paket%20Business`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  textAlign: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(120, 92, 255, 0.25)",
                }}
              >
                Diskusi Paket Business →
              </a>
            </div>

            {/* Custom / Enterprise Package Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                backgroundColor: "#ffffff",
                padding: "44px 32px",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "rgba(120, 92, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                    }}
                  >
                    ⚡
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                      ENTERPRISE TIER
                    </span>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--gray-dark)", margin: "2px 0 0" }}>
                      Paket Custom / Enterprise
                    </h3>
                  </div>
                </div>

                <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "28px" }}>
                  Pengembangan web skala besar: Toko Online, Web LMS E-Learning, Portal Berita/Media, dan Headless Next.js.
                </p>

                <div style={{ borderTop: "1px dashed rgba(0, 0, 0, 0.1)", paddingTop: "24px", marginBottom: "28px" }}>
                  <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--gray-dark)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>
                    FITUR & CAKUPAN SERVIS:
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "14px", color: "var(--gray-medium)", fontSize: "0.95rem" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Sistem E-Commerce / LMS / Portal Berita
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Arsitektur Headless WP + Next.js (Opsional)
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Integrasi Payment Gateway & Auto Certificate
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Server Kapasitas Tinggi / CDN Integration
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span> Training Admin & Priority Support
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20konsultasi%20Paket%20Custom%20Enterprise`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Diskusi Custom Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <Menu items={projects} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Blog Section */}
      <News items={blogPosts} />

      {/* FAQ Section */}
      <section
        className="section"
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 50px" }} data-aos="fade-up">
            <span className="badge-glow">PERTANYAAN UMUM</span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "grid",
              gap: "20px",
            }}
          >
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                Berapa lama estimasi pengerjaan website?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Estimasi pengerjaan Landing Page sekitar 3-5 hari kerja. Untuk Company Profile 7-14 hari kerja, sedangkan untuk platform kompleks seperti E-Learning LMS, Portal Berita, atau Headless Next.js berkisar 2-4 minggu.
              </p>
            </div>

            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                Apakah saya bisa mengedit konten sendiri setelah website selesai?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Tentu saja! Kami menyediakan dashboard Content Management System (CMS) yang sangat ramah pengguna (user-friendly). Anda dapat dengan mudah mengubah teks, mengunggah gambar, maupun memposting berita/produk baru.
              </p>
            </div>

            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                Apakah ada garansi jika terjadi error?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Ya, setiap layanan pembuatan website dilengkapi dengan pemeliharaan teknis untuk memastikan website Anda selalu berjalan stabil dan aman dari kendala teknis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Consultation Section */}
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
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginTop: "20px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Siap Membangun Website Impian Bisnis Anda?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              color: "var(--gray-medium)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Diskusikan kebutuhan ide website Anda bersama tim konsultan kami tanpa dipungut biaya.
          </p>

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
            Atau hubungi tim kami langsung melalui:
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
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                marginLeft: "8px",
                textDecoration: "underline",
              }}
            >
              WhatsApp Direct (+62895334155259)
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
