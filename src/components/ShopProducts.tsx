"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/wordpress";

interface ShopProductsProps {
  products: Product[];
}

export default function ShopProducts({ products }: ShopProductsProps) {
  // State menyimpan daftar produk yang dimasukkan ke Keranjang Belanja
  const [cart, setCart] = useState<Product[]>([]);

  // Fungsi Tambah ke Keranjang
  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      {/* 🛒 Bar Keranjang Belanja (Floating Cart Bar) */}
      <div
        style={{
          position: "sticky",
          top: "100px",
          zIndex: 50,
          backgroundColor: "#fff",
          padding: "16px 24px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid rgba(120, 92, 255, 0.2)",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
            🛒 Keranjang Belanja:
          </span>{" "}
          <span
            style={{
              backgroundColor: "var(--primary)",
              color: "#fff",
              padding: "4px 12px",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "0.9rem",
              marginLeft: "8px",
            }}
          >
            {cart.length} Produk
          </span>
        </div>

        {cart.length > 0 && (
          <button
            onClick={() => alert(`Siap Checkout ${cart.length} produk!`)}
            className="btn btn-accent"
            style={{ padding: "8px 20px", fontSize: "0.9rem" }}
          >
            Lanjut ke Checkout ➔
          </button>
        )}
      </div>

      {/* 🛍️ Grid Katalog Produk */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
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
            {/* Foto Produk */}
            <div style={{ position: "relative", width: "100%", height: "220px" }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "12px",
                }}
              >
                {product.category}
              </span>
            </div>

            {/* Detail Produk & Harga */}
            <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "8px", color: "var(--gray-dark)" }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--gray-medium)", lineHeight: 1.5, marginBottom: "16px", flexGrow: 1 }}>
                {product.description}
              </p>

              {/* Harga */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary)" }}>
                  {product.price}
                </span>
                {product.regularPrice && (
                  <span style={{ fontSize: "0.9rem", color: "#999", textDecoration: "line-through" }}>
                    {product.regularPrice}
                  </span>
                )}
              </div>

              {/* Tombol Aksi */}
              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary"
                style={{ width: "100%", textAlign: "center", padding: "10px" }}
              >
                + Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}