import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/wordpress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamic SEO Metadata Generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan | Malfa",
      description: "Layanan yang Anda cari tidak ditemukan.",
    };
  }

  return {
    title: `${service.name} | Layanan Malfa`,
    description: service.description,
  };
}

// Generate Static Params for SSG (Static Site Generation)
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          minHeight: "100vh",
          padding: "160px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blurred background blobs */}
        <div
          className="blur-blob blur-purple"
          style={{ top: "10%", left: "15%", width: "500px", height: "500px" }}
          aria-hidden="true"
        ></div>
        <div
          className="blur-blob blur-indigo"
          style={{ top: "50%", right: "10%", width: "600px", height: "600px" }}
          aria-hidden="true"
        ></div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          {/* Back Link */}
          <div style={{ marginBottom: "40px" }}>
            <Link href="/#services" className="back-link">
              <span>←</span> Kembali ke Beranda
            </Link>
          </div>

          {/* Service detail article */}
          <article>
            <header style={{ marginBottom: "40px" }}>
              {/* Service Large Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "rgba(120, 92, 255, 0.05)",
                  border: "1px solid rgba(120, 92, 255, 0.15)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "var(--primary)",
                  marginBottom: "24px",
                  boxShadow: "0 10px 25px rgba(120, 92, 255, 0.08)",
                }}
              >
                {service.icon || "💼"}
              </div>

              <span
                className="badge-glow"
                style={{ marginBottom: "16px", display: "inline-block" }}
              >
                Layanan Utama
              </span>

              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 2.75rem)",
                  lineHeight: "1.2",
                  fontWeight: 600,
                  color: "var(--gray-dark)",
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                {service.name}
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  color: "var(--gray-medium)",
                  lineHeight: "1.6",
                  marginBottom: "0",
                  fontWeight: "500",
                }}
              >
                {service.description}
              </p>
            </header>

            {/* Separator line */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                margin: "40px 0",
              }}
            />

            {/* Full Rich-text Service Content */}
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: service.content || "" }}
            />

            {/* CTA Box at bottom of service page */}
            <div
              className="glass-panel spotlight-card"
              style={{
                padding: "40px",
                marginTop: "60px",
                textAlign: "center",
                position: "relative",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                  color: "var(--gray-dark)",
                  fontWeight: 600,
                }}
              >
                Tertarik Menggunakan Layanan Ini?
              </h3>
              <p
                style={{
                  color: "var(--gray-medium)",
                  marginBottom: "25px",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                Konsultasikan kebutuhan proyek headless WordPress, plugin
                kustom, atau optimasi speed website Anda sekarang secara gratis.
              </p>
              <a
                href="https://www.linkedin.com/in/malfaridzi/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Hubungi Developer
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
