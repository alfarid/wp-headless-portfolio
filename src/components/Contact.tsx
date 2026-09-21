"use client";

import { useState } from "react";

export default function Contact() {
  // 1. State simpan input form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2. State status pengiriman: 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // 3. Logika Submit ke API Handler /api/contact
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Nembak API Route Next.js /api/contact
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Gagal mengirim pesan.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Terjadi kesalahan jaringan.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "10px", textAlign: "center" }}>Hubungi Saya</h2>
      <p style={{ marginBottom: "24px", textAlign: "center", color: "var(--gray-medium)" }}>
        Kirimkan pesan atau penawaran proyek di bawah ini.
      </p>

      {status === "success" ? (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e6fffa",
            color: "#234e52",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          🎉 Pesan Anda telah berhasil terkirim! Terima kasih.
          <br />
          <button
            onClick={() => setStatus("idle")}
            style={{
              marginTop: "12px",
              padding: "6px 14px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "var(--primary)",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Kirim Pesan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>Nama Lengkap</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Masukkan nama Anda..."
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>Alamat Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@example.com"
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>Pesan</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tuliskan pesan Anda..."
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {status === "error" && (
            <div style={{ color: "red", fontSize: "0.9rem" }}>⚠️ {errorMessage}</div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary"
            style={{ padding: "12px", width: "100%", textAlign: "center" }}
          >
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      )}
    </div>
  );
}