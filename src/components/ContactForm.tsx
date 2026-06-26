"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    service: "headless",
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
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
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

    // Simulate API request (1.5 seconds)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "headless",
        message: "",
      });
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
            Terima kasih telah menghubungi saya. Saya akan segera membalas email
            Anda dalam waktu 1x24 jam.
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setStatus("idle")}
            style={{ marginTop: "10px" }}
          >
            Kirim Pesan Baru
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
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                placeholder="email@example.com"
                disabled={status === "loading"}
              />
              {errors.email && (
                <span className={styles.errorMsg}>{errors.email}</span>
              )}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="service" className={styles.label}>
              Layanan yang Diminati
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.select}
              disabled={status === "loading"}
            >
              <option value="headless">Headless WordPress & Next.js</option>
              <option value="theme">Custom Theme & Gutenberg Block</option>
              <option value="plugin">Custom Plugin Development</option>
              <option value="ecommerce">WooCommerce & API Integration</option>
              <option value="optimization">
                Speed & Core Web Vitals Optimization
              </option>
              <option value="other">Lainnya / Konsultasi Umum</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Detail Project / Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              placeholder="Ceritakan singkat tentang proyek Anda..."
              disabled={status === "loading"}
            ></textarea>
            {errors.message && (
              <span className={styles.errorMsg}>{errors.message}</span>
            )}
          </div>

          {status === "error" && (
            <div className={styles.errorContainer}>
              Terjadi kesalahan. Silakan coba lagi atau kirim email langsung ke
              hello@wpdev.com.
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
              "Kirim Penawaran"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
