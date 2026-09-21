import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioFilter from "@/components/PortfolioFilter";
import { getProjects } from "@/lib/wordpress";

export const metadata = {
  title: "Portofolio Lengkap | Malfa",
  description:
    "Daftar proyek web development, template Elementor, dan aplikasi modern yang telah dibangun.",
};

export default async function PortfolioPage() {
  // 1. Fetching Data dari WordPress di Server
  const projects = await getProjects();

  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          minHeight: "100vh",
          padding: "140px 0 80px",
        }}
      >
        {/* Glow Background Decoration */}
        <div
          className="blur-blob blur-purple"
          style={{ top: "10%", left: "10%", width: "400px", height: "400px" }}
          aria-hidden="true"
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          {/* Header Section */}
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 40px",
            }}
          >
            <span className="badge-glow" style={{ marginBottom: "16px" }}>
              KARYA & PROYEK
            </span>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3rem)",
                fontWeight: "700",
                color: "var(--gray-dark)",
                lineHeight: "1.2",
                marginBottom: "16px",
              }}
            >
              Portofolio Lengkap
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--gray-medium)",
                lineHeight: "1.6",
              }}
            >
              Kumpulan hasil karya pembuatan website, template kit Elementor, dan
              arsitektur Headless WordPress + Next.js.
            </p>
          </div>

          {/* 2. Menggunakan Client Component untuk Filter Interaktif */}
          <PortfolioFilter projects={projects} />

          {/* Back to Home Button (pake Link dari next/link!) */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link href="/" className="back-link">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
