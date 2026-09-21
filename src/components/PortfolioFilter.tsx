"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/wordpress";

interface PortfolioFilterProps {
  projects: Project[];
}

export default function PortfolioFilter({ projects }: PortfolioFilterProps) {
  // 1. Deklarasi State untuk kategori yang sedang dipilih (Default: 'Semua')
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  // 2. Mengambil daftar kategori unik dari data projects
  const categories = [
    "Semua",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  // 3. Menyaring projects berdasarkan kategori yang aktif
  const filteredProjects =
    selectedCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Tombol-Tombol Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "40px",
        }}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                border: isActive
                  ? "1px solid var(--primary)"
                  : "1px solid rgba(0,0,0,0.1)",
                backgroundColor: isActive ? "var(--primary)" : "rgba(255,255,255,0.8)",
                color: isActive ? "#fff" : "var(--gray-dark)",
                boxShadow: isActive ? "0 4px 14px rgba(120, 92, 255, 0.3)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid Projects yang Sudah Difilter */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(120, 92, 255, 0.12)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Thumbnail Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "210px",
                overflow: "hidden",
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                style={{ objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "rgba(0, 0, 0, 0.75)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  backdropFilter: "blur(4px)",
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Details */}
            <div
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--gray-dark)",
                  marginBottom: "10px",
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray-medium)",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                  flexGrow: 1,
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--primary)",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                🛠️ {project.techStack}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    padding: "10px",
                    fontSize: "0.9rem",
                  }}
                >
                  Lihat Live Proyek ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
