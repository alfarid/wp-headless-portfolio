"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email atau nomor WhatsApp wajib diisi";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan/Detail kebutuhan wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className={styles.formContainer} data-aos="fade-up">
      {status === "success" ? (
        <div className={styles.successWrapper}>
          <div className={styles.successIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Pesan Terkirim!</h3>
          <p className={styles.successText}>
            Terima kasih telah menghubungi saya. Saya akan membalas pesan Anda beserta rincian estimasi harga & waktu pengerjaan dalam waktu 1x24 jam.
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setStatus("idle")}
            style={{ marginTop: "10px" }}
          >
            Kirim Pesan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                placeholder="Nama Anda"
                disabled={status === "loading"}
              />
              {errors.name && (
                <span className={styles.errorMsg}>{errors.name}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email / Nomor WhatsApp
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                placeholder="email@example.com atau 0812xxxx"
                disabled={status === "loading"}
              />
              {errors.email && (
                <span className={styles.errorMsg}>{errors.email}</span>
              )}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Detail Kebutuhan Website
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              placeholder="Contoh: Saya butuh website Company Profile untuk konsultan keuangan, butuh fitur blog, galeri, dan integrasi WhatsApp. Target selesai dalam [X] minggu."
              disabled={status === "loading"}
            ></textarea>
            {errors.message && (
              <span className={styles.errorMsg}>{errors.message}</span>
            )}
          </div>

          {status === "error" && (
            <div className={styles.errorContainer}>
              Terjadi kesalahan. Silakan coba lagi atau kirim email langsung ke{" "}
              <a href="mailto:alfaridzim7@gmail.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                alfaridzim7@gmail.com
              </a>.
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: "10px",
            }}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className={styles.spinner}></span>
            ) : (
              "Minta Estimasi Harga"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
