import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f1f4",
        padding: "80px 0 40px",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "50px",
            marginBottom: "60px",
          }}
        >
          <div>
            <h3
              style={{
                color: "var(--gray-dark)",
                marginBottom: "25px",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              WP<span style={{ color: "var(--primary)" }}>.dev</span>
            </h3>
            <p
              style={{
                color: "var(--gray-medium)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
              }}
            >
              Menyajikan website berkecepatan ekstrim dan skalabilitas tinggi
              menggunakan arsitektur headless WordPress modern.
            </p>
          </div>
          <div>
            <h4
              style={{
                marginBottom: "20px",
                color: "var(--gray-dark)",
                fontWeight: 600,
              }}
            >
              Navigasi
            </h4>
            <ul
              style={{
                color: "var(--gray-medium)",
                fontSize: "0.9rem",
                display: "grid",
                gap: "12px",
                paddingLeft: 0,
                listStyle: "none",
              }}
            >
              <li>
                <Link href="/#about" className="footer-link">
                  Tentang Saya
                </Link>
              </li>
              <li>
                <Link href="/#services" className="footer-link">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="footer-link">
                  Portfolio Proyek
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="footer-link">
                  Blog & Catatan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                marginBottom: "20px",
                color: "var(--gray-dark)",
                fontWeight: 600,
              }}
            >
              Keahlian Utama
            </h4>
            <ul
              style={{
                color: "var(--gray-medium)",
                fontSize: "0.9rem",
                display: "grid",
                gap: "12px",
                paddingLeft: 0,
                listStyle: "none",
              }}
            >
              <li>Headless WordPress</li>
              <li>Next.js & React</li>
              <li>GraphQL & REST API</li>
              <li>Custom Plugin & Theme</li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                marginBottom: "20px",
                color: "var(--gray-dark)",
                fontWeight: 600,
              }}
            >
              Kontak & Sosmed
            </h4>
            <p
              style={{
                color: "var(--gray-medium)",
                fontSize: "0.9rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Jakarta, Indonesia
              <br />
              hello@wpdev.com
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="#"
                style={{
                  color: "var(--primary)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                GitHub
              </a>
              <a
                href="#"
                style={{
                  color: "var(--primary)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(0, 0, 0, 0.06)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p style={{ color: "var(--gray-medium)", fontSize: "0.8rem" }}>
            Copyright © WP.dev 2026. All rights reserved.
          </p>
          <p style={{ color: "var(--gray-medium)", fontSize: "0.8rem" }}>
            Built with WordPress & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
