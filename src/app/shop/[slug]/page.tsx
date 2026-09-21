import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/wordpress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Dynamic SEO Metadata untuk Produk
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Malfa Store",
    };
  }

  return {
    title: `${product.name} | Malfa Store`,
    description: product.description,
  };
}

// 2. Pre-render Semua Produk untuk Kecepatan Ekstrem (SSG)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// 3. Komponen Utama Halaman Detail Produk
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          minHeight: "100vh",
          padding: "160px 0 80px",
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* Tombol Kembali ke Toko */}
          <div style={{ marginBottom: "30px" }}>
            <Link href="/shop" className="back-link">
              ← Kembali ke Katalog Toko
            </Link>
          </div>

          {/* Grid Layout Detail Produk (Gambar Kiri, Info Kanan) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "50px",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {/* Foto Produk Besar */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Informasi & Harga Produk */}
            <div>
              <span
                style={{
                  backgroundColor: "rgba(120, 92, 255, 0.1)",
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  padding: "4px 12px",
                  borderRadius: "12px",
                }}
              >
                {product.category}
              </span>

              <h1
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "var(--gray-dark)",
                  margin: "16px 0",
                  lineHeight: "1.3",
                }}
              >
                {product.name}
              </h1>

              {/* Harga */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  {product.price}
                </span>
                {product.regularPrice && (
                  <span
                    style={{
                      fontSize: "1.1rem",
                      color: "#999",
                      textDecoration: "line-through",
                    }}
                  >
                    {product.regularPrice}
                  </span>
                )}
              </div>

              {/* Deskripsi */}
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-medium)",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                }}
              >
                {product.description}
              </p>

              {/* Tombol Beli */}
              <button
                className="btn btn-accent"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "1.1rem",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                🛒 Beli Sekarang via Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}