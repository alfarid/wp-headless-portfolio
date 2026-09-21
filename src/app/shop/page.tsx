import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopProducts from "@/components/ShopProducts";
import { getProducts } from "@/lib/wordpress";

export const metadata = {
  title: "Toko Online WooCommerce | Malfa",
  description: "Katalog produk digital, merchandise, dan e-book berkualitas.",
};

export default async function ShopPage() {
  // Ambil data produk WooCommerce dari wordpress.ts
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main style={{ padding: "140px 0 80px", minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 40px" }}>
            <span className="badge-glow" style={{ marginBottom: "16px" }}>
              HEADLESS WOOCOMMERCE STORE
            </span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "12px" }}>
              Toko Online Modern
            </h1>
            <p style={{ color: "var(--gray-medium)", fontSize: "1.1rem" }}>
              Daftar produk yang ditarik dari WooCommerce via GraphQL API.
            </p>
          </div>

          {/* Render Komponen Katalog Produk & Cart */}
          <ShopProducts products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}