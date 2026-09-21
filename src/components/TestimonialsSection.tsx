import Image from "next/image";
import { Testimonial } from "@/lib/wordpress";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsProps) {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "rgba(120, 92, 255, 0.02)" }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px" }}>
          <span className="badge-glow" style={{ marginBottom: "16px" }}>
            TESTIMONIAL CLIENT
          </span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--gray-dark)" }}>
            Apa Kata Mereka?
          </h2>
          <p style={{ color: "var(--gray-medium)", fontSize: "1.05rem", marginTop: "10px" }}>
            Kepercayaan dan kepuasan klien dari proyek Headless WordPress & Web Modern.
          </p>
        </div>

        {/* Grid Testimonial (Looping data CPT + ACF) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "30px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Rating Bintang (ACF Field 'rating') */}
              <div>
                <div style={{ color: "#FFB800", fontSize: "1.2rem", marginBottom: "16px" }}>
                  {"★".repeat(item.rating)}
                </div>
                {/* Komentar Client (ACF Field 'comment') */}
                <p style={{ color: "var(--gray-dark)", lineHeight: "1.6", fontStyle: "italic" }}>
                  "{item.comment}"
                </p>
              </div>

              {/* Detail Client (ACF Field 'clientName' & 'company') */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "24px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.avatar}
                    alt={item.clientName}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: "600", margin: 0, color: "var(--gray-dark)" }}>
                    {item.clientName}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--gray-medium)", margin: "2px 0 0" }}>
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}