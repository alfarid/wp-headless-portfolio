import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/wordpress";

interface BlogProps {
  items: BlogPost[];
}

const Blog = ({ items }: BlogProps) => {
  return (
    <section
      id="blog"
      className="section"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container">
        <div
          style={{ textAlign: "center", marginBottom: "60px" }}
          data-aos="fade-up"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            <span className="badge-glow">Catatan & Artikel</span>
          </div>
          <h2 className="section-title">Eksplorasi & Insights</h2>
          <p className="section-subtitle">
            Tutorial pengembangan headless WordPress, arsitektur decoupled, dan
            berita seputar dunia web development.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {items.map((blog, idx) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="glass-panel spotlight-card"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  padding: "25px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <p
                  style={{
                    color: "var(--primary)",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {blog.date}
                </p>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "12px",
                    lineHeight: "1.4",
                    color: "var(--gray-dark)",
                  }}
                >
                  {blog.title}
                </h3>
                <p
                  style={{
                    color: "var(--gray-medium)",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    flexGrow: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.description}
                </p>
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    marginTop: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Baca Selengkapnya <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{ marginTop: "50px", textAlign: "center" }}
          data-aos="fade-up"
        >
          <button className="btn btn-outline">Lihat Semua Tulisan</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
