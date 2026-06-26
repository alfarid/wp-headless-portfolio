import Link from "next/link";
import { Service } from "@/lib/wordpress";
import styles from "./Locations.module.css";

interface ServicesProps {
  items: Service[];
}

const Services = ({ items }: ServicesProps) => {
  // Map index to a specific tech sub-category for badges
  const getSubCategory = (idx: number) => {
    const categories = ["DECOUPLED", "BLOCKS API", "PLUGINS", "WEB VITALS"];
    return categories[idx % categories.length];
  };

  // Limit layout strictly to 3 cards to match Cruip layout perfectly
  const displayItems = items.slice(0, 3);

  return (
    <section id="services" className={styles.servicesSection}>
      {/* Decorative glow blob */}
      <div className={styles.glowBlob} aria-hidden="true"></div>

      <div className="container">
        <div
          style={{ textAlign: "center", marginBottom: "60px" }}
          data-aos="fade-up"
        >
          <div className={styles.taglinePill}>
            <span className="badge-glow">Layanan Utama</span>
          </div>
          <h2 className="section-title">Solusi WordPress Modern</h2>
          <p className="section-subtitle">
            Menggabungkan kebebasan manajemen konten WordPress dengan performa
            dan kecepatan Next.js untuk hasil bisnis yang maksimal.
          </p>
        </div>

        <div className={styles.grid}>
          {displayItems.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={`${styles.card} spotlight-card`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Top-Right Arrow Indicator matching Cruip */}
              <div className={styles.arrowIcon} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="8"
                  fill="none"
                >
                  <path
                    fill="#8E9AAB"
                    d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                  ></path>
                </svg>
              </div>

              {/* Icon wrapper */}
              <div className={styles.iconWrapper}>{service.icon || "💼"}</div>

              {/* Sub-category pill */}
              <span className={styles.categoryPill}>{getSubCategory(idx)}</span>

              {/* Card content */}
              <h3 className={styles.cardName}>{service.name}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </Link>
          ))}
        </div>

        <div
          style={{ marginTop: "50px", textAlign: "center" }}
          data-aos="fade-up"
        >
          <a href="#contact" className="btn btn-primary">
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
