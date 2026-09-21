"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/wordpress";

interface BlogSearchProps {
    posts: BlogPost[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  // State untuk menyimpan kata kunci pencarian yang diketik user
  const [searchQuery, setSearchQuery] = useState("");
  // Logika Filter: menyaring artikel berdasarkan judul atau deskripsi
  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query)
    );
  });
  return (
    <div>
      {/* 🔍 Form Input Pencarian */}
      <div style={{ maxWidth: "500px", margin: "0 auto 40px" }}>
        <input
          type="text"
          placeholder="🔍 Cari artikel (misal: Headless, Next.js, GraphQL)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 20px",
            borderRadius: "30px",
            border: "1px solid rgba(120, 92, 255, 0.2)",
            backgroundColor: "#fff",
            fontSize: "1rem",
            outline: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        />
      </div>
      {/* 📰 Grid Kartu Artikel */}
      {filteredPosts.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--gray-medium)" }}>
          Artikel dengan kata kunci "{searchQuery}" tidak ditemukan.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.06)",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 600 }}>
                  {post.date}
                </span>
                <h3 style={{ fontSize: "1.2rem", margin: "8px 0 12px", color: "var(--gray-dark)" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--gray-medium)", lineHeight: 1.6, flexGrow: 1 }}>
                  {post.description}
                </p>
                {/* Link ke Detail Artikel pake Dynamic Routing /blog/[slug] */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="btn btn-accent"
                  style={{ marginTop: "16px", textAlign: "center", width: "100%" }}
                >
                  Baca Artikel Lengkap ➔
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}