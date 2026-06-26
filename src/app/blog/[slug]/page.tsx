import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/wordpress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamic SEO Metadata Generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan | WP.dev",
      description: "Artikel yang Anda cari tidak ditemukan.",
    };
  }

  return {
    title: `${post.title} | WP.dev Blog`,
    description: post.description,
  };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
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
        {/* Decorative blurred background blobs */}
        <div
          className="blur-blob blur-purple"
          style={{ top: "10%", left: "15%", width: "500px", height: "500px" }}
          aria-hidden="true"
        ></div>
        <div
          className="blur-blob blur-indigo"
          style={{ top: "50%", right: "10%", width: "600px", height: "600px" }}
          aria-hidden="true"
        ></div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          {/* Back Link */}
          <div style={{ marginBottom: "40px" }}>
            <Link href="/#blog" className="back-link">
              <span>←</span> Kembali ke Beranda
            </Link>
          </div>

          {/* Article Header */}
          <article>
            <header style={{ marginBottom: "35px" }}>
              <p
                style={{
                  color: "var(--primary)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "12px",
                }}
              >
                {post.date}
              </p>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 2.75rem)",
                  lineHeight: "1.2",
                  fontWeight: 600,
                  color: "var(--gray-dark)",
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                }}
              >
                {post.title}
              </h1>
              <p
                style={{
                  fontSize: "1.15rem",
                  color: "var(--gray-medium)",
                  lineHeight: "1.6",
                  marginBottom: "0",
                }}
              >
                {post.description}
              </p>
            </header>

            {/* Featured Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                marginBottom: "45px",
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Full Rich-text Article Content */}
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
