import styles from "./ContactForm.module.css";

const WA_NUMBER = "6285775354310";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Halo%20Malfa,%20saya%20ingin%20konsultasi%20pembuatan%20website`;

export default function ContactForm() {
  return (
    <div className={styles.bannerWrapper} data-aos="fade-up">
      <div className={styles.bannerCard}>
        {/* Kolom Konten (Kiri) */}
        <div className={styles.contentCol}>
          <span className={styles.tagline}>
            KONSULTASI GRATIS & ESTIMASI BIAYA
          </span>
          <h3 className={styles.title}>
            Punya Ide Website? Konsultasi Langsung dengan Developer via WhatsApp
          </h3>

          <div className={styles.ctaWrapper}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              {/* Icon WhatsApp */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Konsultasi via WhatsApp</span>
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </div>

        {/* Kolom Ilustrasi / Graphic (Kanan) */}
        <div className={styles.graphicCol}>
          <svg
            className={styles.illustrationSvg}
            viewBox="0 0 250 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#785cff" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#00f5a0" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f1f5f9" />
              </linearGradient>
              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="waBubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#25D366" />
                <stop offset="100%" stopColor="#128C7E" />
              </linearGradient>
              <filter id="shadowFilter" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#785cff" floodOpacity="0.12" />
              </filter>
              <filter id="waShadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#25D366" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Bukit Kurva Referensi Quizlet */}
            <path
              d="M-20 180C30 130 110 120 250 160V180H-20Z"
              fill="url(#hillGrad)"
            />
            <path
              d="M40 180C100 110 190 100 270 140V180H40Z"
              fill="rgba(120, 92, 255, 0.08)"
            />

            {/* Laptop Vector Graphic */}
            <g filter="url(#shadowFilter)">
              {/* Alas Laptop */}
              <rect x="45" y="142" width="130" height="8" rx="4" fill="#cbd5e1" />
              <path d="M95 142H125V144C125 145.1 124.1 146 123 146H97C95.9 146 95 145.1 95 144V142Z" fill="#94a3b8" />
              
              {/* Layar Laptop */}
              <rect x="57" y="60" width="106" height="84" rx="8" fill="url(#laptopGrad)" stroke="#cbd5e1" strokeWidth="2" />
              <rect x="62" y="65" width="96" height="70" rx="5" fill="url(#screenGrad)" />
              
              {/* Window Controls & Lines */}
              <circle cx="68" cy="70" r="1.5" fill="#ef4444" />
              <circle cx="72" cy="70" r="1.5" fill="#f59e0b" />
              <circle cx="76" cy="70" r="1.5" fill="#10b981" />

              <rect x="70" y="78" width="30" height="4" rx="2" fill="#785cff" />
              <rect x="104" y="78" width="20" height="4" rx="2" fill="#38bdf8" />
              <rect x="70" y="87" width="45" height="4" rx="2" fill="#475569" />
              <rect x="70" y="96" width="60" height="4" rx="2" fill="#334155" />
              <rect x="70" y="105" width="25" height="4" rx="2" fill="#00f5a0" />
            </g>

            {/* WhatsApp Chat Bubble Floating Overlay */}
            <g filter="url(#waShadow)">
              <rect x="120" y="28" width="112" height="48" rx="12" fill="url(#waBubbleGrad)" />
              <path d="M130 76L122 81V71L130 76Z" fill="#128C7E" />

              <text x="132" y="47" fill="#ffffff" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">Halo Malfa! 👋</text>
              <text x="132" y="61" fill="rgba(255,255,255,0.95)" fontSize="8" fontFamily="sans-serif">Mau buat website?</text>
            </g>

            {/* Decorative Badges */}
            <g>
              <circle cx="40" cy="45" r="14" fill="#ffffff" stroke="rgba(120, 92, 255, 0.25)" strokeWidth="1.5" />
              <text x="34" y="49" fill="#785cff" fontSize="11" fontWeight="bold" fontFamily="monospace">{"</>"}</text>
              <path d="M220 95L222 100L227 102L222 104L220 109L218 104L213 102L218 100L220 95Z" fill="#f59e0b" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
