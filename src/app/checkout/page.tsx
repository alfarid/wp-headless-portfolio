"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  // Contoh Produk di Keranjang (Bisa dioper dari State / LocalStorage)
  const cartItems = [
    { name: "Kaos Next.js Developer Premium", price: "Rp 149.000", qty: 1 },
  ];
  const totalPrice = "Rp 149.000";

  // 📲 FUNGSI CHECKOUT VIA WHATSAPP (STRATEGI A)
  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    const adminPhoneNumber = "6281112345678"; // Ganti nomor WA Admin Client
    const orderDetails = cartItems
      .map((item) => `- ${item.name} (${item.qty}x) = ${item.price}`)
      .join("\n");

    const message = `Halo Admin, saya ingin memesan barang:\n\n*RINCIAN PESANAN:*\n${orderDetails}\n\n*TOTAL:* ${totalPrice}\n\n*DATA PEMBELI:*\nNama: ${customer.name}\nNo HP: ${customer.phone}\nAlamat: ${customer.address}\nCatatan: ${customer.notes || "-"}\n\nMohon diproses ya kak, terima kasih!`;

    // Buka URL WhatsApp Web / App
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "140px 0 80px", minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "30px" }}>
            <Link href="/shop" className="back-link">
              ← Kembali ke Toko
            </Link>
          </div>

          <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "10px" }}>
            Checkout Pesanan
          </h1>
          <p style={{ color: "var(--gray-medium)", marginBottom: "40px" }}>
            Lengkapi data pengiriman untuk menyelesaikan pesanan Anda.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            {/* Form Data Pembeli */}
            <form onSubmit={handleWhatsAppCheckout} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>1. Data Pengiriman</h3>
              
              <div>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="Masukkan nama lengkap..."
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>No. WhatsApp / HP</label>
                <input
                  type="tel"
                  required
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="08123456789"
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>Alamat Lengkap</label>
                <textarea
                  required
                  rows={3}
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="Jl. Merdeka No. 12, Jakarta..."
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-accent"
                style={{ width: "100%", padding: "12px", textAlign: "center", justifyContent: "center", marginTop: "10px" }}
              >
                📲 Checkout via WhatsApp ➔
              </button>
            </form>

            {/* Ringkasan Belanja */}
            <div style={{ backgroundColor: "#f9f9fb", padding: "20px", borderRadius: "12px", height: "fit-content" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "16px" }}>2. Ringkasan Pesanan</h3>
              {cartItems.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.95rem" }}>
                  <span>{item.name} (x{item.qty})</span>
                  <span style={{ fontWeight: 600 }}>{item.price}</span>
                </div>
              ))}
              <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #ddd" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)" }}>
                <span>Total Biaya:</span>
                <span>{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}