import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPosts } from "@/lib/wordpress";
import Contact from "@/components/Contact";

export const metadata = {
    title: "Contact Us | Malfa",
    description: "Kontak Kami Malfa",
};

export default async function BlogPage(){
    const posts = await getBlogPosts();

    return(
    <>
      <Navbar />
      <main style={{ padding: "140px 0 80px", minHeight: "100vh" }}>
        <div className="container">
          {/* Judul & Subtitle Halaman */}
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 40px" }}>
            <span className="badge-glow" style={{ marginBottom: "16px" }}>
              Contact Us
            </span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "12px" }}>
              Contact Us
            </h1>
            <p style={{ color: "var(--gray-medium)", fontSize: "1.1rem" }}>
              Kontak kami untuk informasi lebih lanjut
            </p>
          </div>
          {/* Di sini tempat kita menaruh daftar artikel nantinya */}
          <Contact />
        </div>
      </main>
      <Footer />
    </>
    );

};