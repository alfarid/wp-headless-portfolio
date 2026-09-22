import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Menu from "@/components/Menu"; // Portfolio Showcase
import { MOCK_PROJECTS } from "@/lib/wordpress";

export const metadata = {
  title: "Jasa Pembuatan Website Jakarta - Web Developer Freelance | malfa.",
  description: "Jasa pembuatan website profesional di Jakarta oleh Muhammad Al Faridzi. Spesialis profil perusahaan, landing page, dan web e-learning LMS tanpa perantara.",
};

export default async function Home() {
  const projects = MOCK_PROJECTS;
  const WA_NUMBER = "62895334155259";
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=Halo%20Malfa,%20saya%20ingin%20konsultasi%20pembuatan%20website`;

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
          padding: "160px 0 90px",
          overflow: "hidden",
          background: "radial-gradient(ellipse at top, rgba(120, 92, 255, 0.08) 0%, transparent 70%)",
        }}
      >
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
          <div style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto" }}>
            <span
              className="badge-glow"
              data-aos="fade-up"
              style={{ marginBottom: "20px", display: "inline-block" }}
            >
              DEVELOPER WEB FREELANCE JAKARTA
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                fontWeight: "800",
                lineHeight: "1.2",
                color: "var(--gray-dark)",
                marginBottom: "24px",
                letterSpacing: "-0.5px",
              }}
            >
              Maksimalkan Performa Website Bisnis Anda
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
              Membantu pemilik bisnis, UMKM, dan kreator membangun website yang tidak hanya terlihat profesional, tapi juga menghasilkan calon pembeli. Tanpa biaya tersembunyi, tanpa agen perantara, dikerjakan langsung oleh developernya.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "36px",
              }}
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "14px 32px", fontSize: "1rem" }}
              >
                Konsultasi Gratis via WhatsApp
              </a>
              <a
                href="#projects"
                className="btn btn-outline"
                style={{ padding: "14px 32px", fontSize: "1rem" }}
              >
                Lihat Hasil Kerja Saya
              </a>
            </div>

            {/* 3 Bukti Kecil di bawah tombol Hero */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px 30px",
                flexWrap: "wrap",
                fontSize: "0.9rem",
                color: "var(--gray-medium)",
              }}
            >
              <span>✓ Dikerjakan langsung tanpa perantara</span>
              <span>✓ Gratis perbaikan bug 30 hari</span>
              <span>✓ Rincian harga & jadwal jelas di awal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strip Bukti (4 Poin) */}
      <section
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.06)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          backgroundColor: "#ffffff",
          padding: "36px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              textAlign: "center",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--primary)", marginBottom: "4px" }}>
                100% Langsung Developer
              </h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.9rem" }}>Komunikasi Tanpa Perantara Sales</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--primary)", marginBottom: "4px" }}>
                Garansi 30 Hari
              </h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.9rem" }}>Gratis Perbaikan Bug Setelah Live</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--primary)", marginBottom: "4px" }}>
                50+ Proyek Selesai
              </h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.9rem" }}>Hasil Kerja Terbukti Dituntaskan</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--primary)", marginBottom: "4px" }}>
                96% Uptime Server
              </h3>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.9rem" }}>Keandalan Akses Website Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Masalah: Pernah Kapok Bikin Website? */}
      <section className="section" style={{ backgroundColor: "rgba(120, 92, 255, 0.02)", position: "relative" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 50px" }} data-aos="fade-up">
            <span className="badge-glow" style={{ backgroundColor: "rgba(239, 68, 68, 0.08)", color: "#dc2626", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
              KENDALA UMUM CLIENT
            </span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              Pernah Kapok Bikin Website?
            </h2>
            <p className="section-subtitle">
              Banyak pemilik bisnis merasa kecewa setelah memesan website karena masalah-masalah yang sering terjadi di lapangan:
            </p>
          </div>

          <div className="kendala-grid-top">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              style={{
                padding: "30px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(239, 68, 68, 0.15)",
                boxShadow: "0 8px 24px rgba(239, 68, 68, 0.04)",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>💸</div>
              <h4 style={{ color: "#dc2626", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                Biaya Membengkak di Tengah Jalan
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Harga awal terlihat murah, tetapi tiba-tiba ada biaya tambahan untuk fitur dasar, domain, atau konfigurasi yang tidak dijelaskan di awal.
              </p>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                padding: "30px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(239, 68, 68, 0.15)",
                boxShadow: "0 8px 24px rgba(239, 68, 68, 0.04)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>⏳</div>
              <h4 style={{ color: "#dc2626", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                Pengerjaan Molor Tanpa Kejelasan
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Janji selesai dalam seminggu, tapi berminggu-minggu tanpa kabar progres yang pasti.
              </p>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                padding: "30px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(239, 68, 68, 0.15)",
                boxShadow: "0 8px 24px rgba(239, 68, 68, 0.04)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>📵</div>
              <h4 style={{ color: "#dc2626", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                Developer Susah Dihubungi Pasca Bayar
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Setelah pelunasan dilakukan, pesan slow respon dan perbaikan kendala teknis diabaikan.
              </p>
            </div>
          </div>

          <div className="kendala-grid-bottom">
            {/* Card 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                padding: "30px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(239, 68, 68, 0.15)",
                boxShadow: "0 8px 24px rgba(239, 68, 68, 0.04)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🎨</div>
              <h4 style={{ color: "#dc2626", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                Hasil Kaku Mirip Template Pasaran
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Tampilan kaku dan kurang mencerminkan nilai profesionalitas bisnis Anda.
              </p>
            </div>

            {/* Card 5 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                padding: "30px 24px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(239, 68, 68, 0.15)",
                boxShadow: "0 8px 24px rgba(239, 68, 68, 0.04)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>😵</div>
              <h4 style={{ color: "#dc2626", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                Bingung Mengedit Konten Sendiri
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Tidak diberi panduan cara memakai dashboard sehingga tergantung terus pada developer tiap kali ingin mengubah teks.
              </p>
            </div>
          </div>

          {/* Solusi Transisi Card */}
          <div
            data-aos="fade-up"
            style={{
              padding: "36px 32px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              border: "2px solid var(--primary)",
              boxShadow: "0 15px 40px rgba(120, 92, 255, 0.12)",
              textAlign: "center",
              maxWidth: "840px",
              margin: "0 auto",
              background: "linear-gradient(180deg, #ffffff 0%, rgba(120, 92, 255, 0.03) 100%)",
            }}
          >
            <span style={{ fontSize: "2.2rem", display: "inline-block", marginBottom: "12px" }}>💡</span>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--primary)", marginBottom: "10px" }}>
              Saya Bekerja Secara Berbeda.
            </h3>
            <p style={{ color: "var(--gray-medium)", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>
              Anda berkomunikasi langsung dengan saya dari awal konsultasi hingga peluncuran. Tanpa perantara sales, rincian biaya disepakati transparan di awal, dan progres pengerjaan terpantau secara berkala.
            </p>
          </div>
        </div>
      </section>

      {/* Layanan Utama (3 Layanan Utama + Layanan Lainnya) */}
      <section id="services" className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }} data-aos="fade-up">
            <span className="badge-glow">LAYANAN UTAMA</span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              Layanan Pembuatan Website
            </h2>
            <p className="section-subtitle">
              Fokus pada kebutuhan bisnis Anda dengan solusi web yang siap pakai dan mudah dikelola.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              marginBottom: "50px",
            }}
          >
            {/* Layanan 1: Profil Perusahaan */}
            <div
              data-aos="fade-up"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🏢</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--gray-dark)" }}>
                Website Profil Perusahaan (Company Profile)
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Meningkatkan kepercayaan calon klien B2B dan menampilkan kredibilitas layanan, portofolio, serta informasi legalitas perusahaan Anda secara meyakinkan.
              </p>
            </div>

            {/* Layanan 2: Landing Page */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🎯</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--gray-dark)" }}>
                Landing Page Penjualan & Promosi
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Halaman khusus penawaran produk/iklan yang dirancang dengan tata letak persuasif untuk memaksimalkan angka penjualan dan pemesanan via WhatsApp.
              </p>
            </div>

            {/* Layanan 3: E-Learning / LMS */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(120, 92, 255, 0.3)",
                boxShadow: "0 10px 30px rgba(120, 92, 255, 0.08)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🎓</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--primary)" }}>
                Web E-Learning / Platform Kursus (LMS)
              </h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Solusi pengajaran digital untuk kreator & lembaga: proteksi materi video, kuis interaktif, progres belajar siswa, dan penerbitan sertifikat otomatis.
              </p>
            </div>
          </div>

          {/* Layanan Lainnya */}
          <div
            data-aos="fade-up"
            style={{
              padding: "28px 32px",
              backgroundColor: "#ffffff",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(0,0,0,0.06)",
              textAlign: "center",
            }}
          >
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
              Layanan Lainnya yang Bisa Dikerjakan:
            </h4>
            <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem" }}>
              • <strong>Toko Online / E-Commerce</strong> (Keranjang & Payment Gateway) &nbsp;|&nbsp;
              • <strong>Web Berita & Portal Media</strong> &nbsp;|&nbsp;
              • <strong>Headless WordPress + Next.js Custom App</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Kenapa Pilih Saya (6 Poin) */}
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
            <span className="badge-glow">ALASAN KERJA SAMA</span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              Kenapa Memilih Bekerja Sama dengan Saya?
            </h2>
            <p className="section-subtitle">
              Memberikan kepastian, transparansi, dan rasa aman bagi bisnis Anda.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            <div data-aos="fade-up">
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                1. Langsung Berkomunikasi dengan Developer
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Anda berbicara langsung dengan saya sebagai pembuat kode, bukan melalui perantara perantara sales yang berbelit-belit.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                2. Rincian Biaya Transparan Sejak Awal
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Semua rincian biaya disepakati di awal penawaran tanpa ada tagihan tersembunyi di tengah jalan.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                3. Jadwal Pengerjaan yang Ditepati
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Tahapan pengerjaan disusun rapi dengan komitmen waktu penyelesaian yang jelas.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                4. Desain Kustom Sesuai Identitas Brand
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Tata letak dirancang khusus menyesuaikan warna dan karakter bisnis Anda agar tidak terlihat pasaran.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                5. Cepat & Dioptimasi SEO Dasar
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Struktur website dibuat ringan agar nyaman dibuka pengunjung dan mudah diindeks oleh mesin pencari Google.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <h4 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                6. Mudah Dikelola Sendiri
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Dilengkapi dengan panduan penggunaan agar Anda bisa mengubah teks dan mengunggah gambar secara mandiri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proses Kerja (4 Langkah) */}
      <section id="proses" className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }} data-aos="fade-up">
            <span className="badge-glow">TAHAPAN KARYA</span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              4 Langkah Proses Kerja
            </h2>
            <p className="section-subtitle">
              Alur kerja yang jelas dan terstruktur agar Anda merasa tenang dari awal hingga website siap dipakai.
            </p>
          </div>

          <div className="proses-grid">
            {/* Step 1 */}
            <div
              data-aos="fade-up"
              style={{
                padding: "36px 28px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  boxShadow: "0 6px 16px rgba(120, 92, 255, 0.25)",
                  marginBottom: "20px",
                }}
              >
                01
              </div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "10px", color: "var(--gray-dark)" }}>
                💬 Konsultasi Gratis
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Diskusi awal mengenai kebutuhan website, tujuan bisnis, serta referensi tampilan yang Anda sukai.
              </p>
            </div>

            {/* Step 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                padding: "36px 28px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  boxShadow: "0 6px 16px rgba(120, 92, 255, 0.25)",
                  marginBottom: "20px",
                }}
              >
                02
              </div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "10px", color: "var(--gray-dark)" }}>
                📋 Penawaran & Kesepakatan
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Penyampaian rincian harga, estimasi waktu pengerjaan, dan pembayaran DP sebelum pengerjaan dimulai.
              </p>
            </div>

            {/* Step 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                padding: "36px 28px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  boxShadow: "0 6px 16px rgba(120, 92, 255, 0.25)",
                  marginBottom: "20px",
                }}
              >
                03
              </div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "10px", color: "var(--gray-dark)" }}>
                💻 Desain & Kode
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Proses pengkodean dan penyusunan tata letak website dengan laporan perkembangan secara berkala.
              </p>
            </div>

            {/* Step 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                padding: "36px 28px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  boxShadow: "0 6px 16px rgba(120, 92, 255, 0.25)",
                  marginBottom: "20px",
                }}
              >
                04
              </div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "10px", color: "var(--gray-dark)" }}>
                🚀 Live & Serah Terima
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Pengecekan bersama, perbaikan revisi, pengaktifan ke domain Anda, dan penyerahan panduan pengelolaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paket & Harga Section */}
      <section id="pricing" className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }} data-aos="fade-up">
            <span className="badge-glow">PAKET & RINCIAN</span>
            <h2 className="section-title" style={{ marginTop: "16px", fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
              Pilihan Paket Layanan Website
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.1rem" }}>
              Rincian paket transparan disesuaikan dengan skala kebutuhan Anda. Semua paket sudah termasuk gratis perbaikan bug 30 hari setelah peluncuran.
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
            {/* Paket Starter */}
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
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                  STARTER TIER
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--gray-dark)", marginTop: "4px", marginBottom: "6px" }}>
                  Paket Landing Page / Starter
                </h3>
                <p style={{ color: "var(--gray-medium)", fontSize: "0.9rem", marginBottom: "16px" }}>
                  Cocok untuk campaign promosi produk, halaman iklan sales, atau UMKM.
                </p>

                <div style={{ borderTop: "1px dashed rgba(0, 0, 0, 0.1)", paddingTop: "20px", marginBottom: "24px" }}>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "12px", color: "var(--gray-medium)", fontSize: "0.95rem" }}>
                    <li>✓ 1 Halaman Landing Page Sales</li>
                    <li>✓ Free Domain & Cloud Hosting 1 Tahun</li>
                    <li>✓ Integrasi Tombol WhatsApp Direct</li>
                    <li>✓ Desain Mobile Friendly & Fast Loading</li>
                    <li>✓ Kesempatan revisi: 3x kesempatan</li>
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20Malfa,%20saya%20tertarik%20konsultasi%20Paket%20Starter`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: "100%", padding: "14px 20px", borderRadius: "12px", fontSize: "0.95rem", textAlign: "center", justifyContent: "center" }}
              >
                Pilih Paket Starter →
              </a>
            </div>

            {/* Paket Business */}
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
                }}
              >
                PALING FAVORIT
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                  BUSINESS TIER
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--gray-dark)", marginTop: "4px", marginBottom: "6px" }}>
                  Paket Business (Company Profile)
                </h3>
                <p style={{ color: "var(--gray-medium)", fontSize: "0.9rem", marginBottom: "16px" }}>
                  Pilihan ideal untuk profil bisnis perusahaan & lembaga resmi.
                </p>
                <div style={{ borderTop: "1px dashed rgba(120, 92, 255, 0.2)", paddingTop: "20px", marginBottom: "24px" }}>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "12px", color: "var(--gray-medium)", fontSize: "0.95rem" }}>
                    <li>✓ Struktur Utama Hingga 7 Halaman</li>
                    <li>✓ Free Domain .COM & Hosting Premium</li>
                    <li>✓ Email Domain Perusahaan (@namabisnis.com)</li>
                    <li>✓ Modul Blog & Galeri Portfolio</li>
                    <li>✓ Optimasi SEO Dasar & Google Maps</li>
                    <li>✓ Kesempatan revisi: 5x kesempatan</li>
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20Malfa,%20saya%20tertarik%20konsultasi%20Paket%20Business`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", padding: "14px 20px", borderRadius: "12px", fontSize: "0.95rem", textAlign: "center", justifyContent: "center" }}
              >
                Pilih Paket Business →
              </a>
            </div>

            {/* Paket Enterprise */}
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
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                  ENTERPRISE TIER
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--gray-dark)", marginTop: "4px", marginBottom: "6px" }}>
                  Paket Custom / Enterprise
                </h3>
                <p style={{ color: "var(--gray-medium)", fontSize: "0.9rem", marginBottom: "16px" }}>
                  Untuk Toko Online, Web LMS E-Learning, Portal Berita & Headless.
                </p>

                <div style={{ borderTop: "1px dashed rgba(0, 0, 0, 0.1)", paddingTop: "20px", marginBottom: "24px" }}>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "12px", color: "var(--gray-medium)", fontSize: "0.95rem" }}>
                    <li>✓ Sistem E-Commerce / LMS / Portal Berita</li>
                    <li>✓ Headless WP + Next.js (Opsional)</li>
                    <li>✓ Integrasi Payment Gateway & Auto Certificate</li>
                    <li>✓ Server Kapasitas Tinggi / CDN</li>
                    <li>✓ Training Admin & Panduan Penggunaan</li>
                    <li>✓ Kesempatan revisi: 5x kesempatan</li>
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20Malfa,%20saya%20tertarik%20konsultasi%20Paket%20Custom%20Enterprise`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: "100%", padding: "14px 20px", borderRadius: "12px", fontSize: "0.95rem", textAlign: "center", justifyContent: "center" }}
              >
                Konsultasi Custom Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <Menu items={projects} />

      {/* FAQ Section (7 Pertanyaan) */}
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
            {/* FAQ 1 */}
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                1. Berapa kisaran biaya pembuatan website?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Biaya pembuatan website bervariasi tergantung pada fitur dan skala halaman yang dibutuhkan. Rincian penawaran akan disepakati transparan di awal tanpa biaya tersembunyi.
              </p>
            </div>

            {/* FAQ 2 */}
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                2. Berapa lama estimasi waktu pengerjaan?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Estimasi waktu pengerjaan Landing Page sekitar 3 hari kerja, Company Profile 7 hari kerja, dan sistem custom (LMS/Toko Online) berkisar 2 minggu.
              </p>
            </div>

            {/* FAQ 3 */}
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                3. Bagaimana sistem pembayarannya?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Sistem pembayaran dilakukan dengan DP sebesar 50% di awal saat kesepakatan penawaran, dan pelunasan sebesar 50% dilakukan setelah website selesai diuji dan siap diluncurkan.
              </p>
            </div>

            {/* FAQ 4 */}
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                4. Apakah saya bisa mengedit konten sendiri setelah website live?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Tentu saja. Anda akan mendapatkan akses penuh ke dashboard pengelolaan konten (CMS) beserta panduan kelola ringkas sehingga Anda dapat mengedit teks dan gambar kapan saja.
              </p>
            </div>

            {/* FAQ 5 */}
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                5. Atas nama siapa pendaftaran domain & hosting?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Pendaftaran domain dan hosting didaftarkan sepenuhnya atas nama dan kepemilikan Anda sendiri, sehingga Anda memiliki kendali penuh atas aset digital Anda.
              </p>
            </div>

            {/* FAQ 6 */}
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                6. Bagaimana ketentuan garansi dan perbaikan bug?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Setiap pembuatan website mencakup garansi gratis perbaikan bug selama 30 hari setelah live. Setelah masa garansi berakhir, Anda dapat mengambil paket pemeliharaan (maintenance).
              </p>
            </div>

            {/* FAQ 7 */}
            <div data-aos="fade-up" style={{ padding: "24px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "var(--radius-md)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--gray-dark)" }}>
                7. Berapa kali kesempatan revisi yang didapatkan?
              </h4>
              <p style={{ color: "var(--gray-medium)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Jumlah kesempatan revisi disesuaikan dengan paket yang dipilih (3x kesempatan revisi pada Paket Starter dan 5x kesempatan revisi pada Paket Business/Enterprise).
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
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              marginTop: "16px",
              marginBottom: "20px",
              fontWeight: "700",
              lineHeight: "1.4",
            }}
          >
            Punya Ide Website? Ceritakan Sekarang!
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
            Atau hubungi saya langsung melalui:
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
              href={WA_URL}
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
