const WORDPRESS_API_URL =
  process.env.WORDPRESS_API_URL || "http://portfolio-backend.local/graphql";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  regularPrice?: string;
  description: string;
  image: string;
  category: string;
}

  // Interface definitions
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  regularPrice?: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial{
  id: string;
  clientName: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Project {
  id: string | number;
  name: string;
  description: string;
  price?: string; // We map this to the tech stack / metadata
  techStack: string;
  image: string;
  category: string;
  url?: string;
}

export interface Service {
  id: string | number;
  slug: string;
  name: string;
  description: string;
  content?: string;
  icon?: string;
}

export interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  date: string;
}

// Fallback Mock Data
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Kaos Next.js Developer Premium",
    slug: "kaos-nextjs-developer",
    price: "Rp 149.000",
    regularPrice: "Rp 199.000",
    description: "Bahan katun combed 30s super adem dengan sablon DTF tahan lama.",
    image: "/dev_workspace.png",
    category: "Merchandise",
  },
  {
    id: "prod-2",
    name: "Template Headless WP Agency Pro",
    slug: "template-headless-wp-agency",
    price: "Rp 499.000",
    regularPrice: "Rp 799.000",
    description: "Source code lengkap Next.js 16 + WPGraphQL siap pakai untuk agensi web.",
    image: "/dev_workspace_v2.png",
    category: "Source Code",
  },
  {
    id: "prod-3",
    name: "E-Book Panduan Headless WordPress",
    slug: "ebook-panduan-headless-wp",
    price: "Rp 99.000",
    regularPrice: "Rp 150.000",
    description: "Panduan praktis membangun website kencang dengan Next.js dan WordPress.",
    image: "/gutenberg_project_v2.png",
    category: "E-Book",
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    clientName: "Budi Santoso",
    company: "CEO PT Digital Nusantara",
    rating: 5,
    comment: "Pengerjaan website Next.js + WordPress super cepat! Skor Google PageSpeed tembus 98. Sangat puas dengan hasilnya.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "testi-2",
    clientName: "Siti Rahma",
    company: "Founder Inspirasi Hijab",
    rating: 5,
    comment: "Integrasi Headless CMS-nya bikin tim konten kami gampang banget posting artikel tanpa pernah merusak tampilan web.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "testi-3",
    clientName: "Hendrik Wijaya",
    company: "Marketing Director Sagas Security",
    rating: 5,
    comment: "Desain estetik dan keamanannya terjamin. Tidak ada celah peretasan WordPress yang bocor ke publik.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "mock-1",
    name: "Sagas Security",
    description:
      "Website profil perusahaan penyedia layanan keamanan fisik & siber. Membantu meningkatkan kepercayaan calon klien korporat.\n\nHasil: [Hasil terukur, contoh: Kredibilitas bisnis meningkat di mata klien B2B]",
    techStack: "WordPress, Custom Theme, Responsive CSS",
    image: "/sagas.png",
    category: "Company Profile",
    url: "https://www.sagassecurity.com/id/",
  },
  {
    id: "mock-2",
    name: "Akademi Inspiradzi",
    description:
      "Platform e-learning LMS untuk menjual kursus online, mengunggah materi video, kuis, dan menerbitkan sertifikat otomatis.\n\nHasil: [Hasil terukur, contoh: Otomatisasi pendaftaran & ujian kelas online]",
    techStack: "WordPress, LearnDash LMS, WooCommerce",
    image: "/AI.png",
    category: "E-Learning LMS",
    url: "https://akademiinspiradzi.com/",
  },
  {
    id: "mock-3",
    name: "DigitalBrain - Share Konten",
    description:
      "Landing page promosi program rujukan digital untuk mengkonversi pembaca menjadi pendaftar campaign.\n\nHasil: [Hasil terukur, contoh: Konversi penawaran meningkat [X]%]",
    techStack: "Elementor, Mobile Friendly, Form Opt-in",
    image: "/share-konten.png",
    category: "Landing Page",
    url: "https://digitalbrain.co.id/share-konten-rekomendasi-jadi-penghasilan/",
  },
  {
    id: "mock-4",
    name: "DigitalBrain - Hewan Ternak",
    description:
      "Landing page edukatif produk nutrisi hewan ternak dengan penyusunan informasi produk yang mudah dipahami.\n\nHasil: [Hasil terukur, contoh: Pemahaman calon pembeli terhadap produk meningkat]",
    techStack: "Elementor, Custom Layout, Responsive",
    image: "/hewan-ternak.png",
    category: "Landing Page",
    url: "https://digitalbrain.co.id/hewan-ternak-lebih-subur-hasil-makin-makmur-non-cta/",
  },
  {
    id: "mock-5",
    name: "DigitalBrain - Urban Farming",
    description:
      "Landing page edukasi teknik bertani perkotaan yang menyajikan konten penawaran secara ringkas dan menarik.\n\nHasil: [Hasil terukur, contoh: Informasi campaign tersampaikan dengan efektif]",
    techStack: "Elementor, Custom Layout, Web Design",
    image: "/urban-farming.png",
    category: "Landing Page",
    url: "https://digitalbrain.co.id/urban-farming-di-balik-full-senyum-mommy-non-cta/",
  },
  {
    id: "mock-6",
    name: "Adsfa Elementor Template Kit",
    description:
      "Desain template kit Elementor komersial yang dipublikasikan dan dijual untuk agensi di marketplace ThemeForest.\n\nCatatan: Produk template kit ThemeForest",
    techStack: "Elementor, Figma, ThemeForest",
    image: "/AdsFa.jpg",
    category: "Template Kit (ThemeForest)",
    url: "https://themeforest.net/item/adsfa-social-media-marketing-agency-elementor-template-kit/59016792",
  },
];

export const MOCK_SERVICES: Service[] = [
  {
    id: "service-1",
    slug: "headless-wordpress-nextjs",
    name: "Headless WordPress & Next.js",
    description:
      "Memisahkan backend WP dengan frontend modern Next.js untuk kecepatan ekstrim, keamanan total, dan SEO sempurna.",
    content:
      "<h2>Solusi Decoupled WordPress Modern</h2><p>Arsitektur Headless WordPress memisahkan database dan CMS admin WordPress Anda dari sisi tampilan website. Kami membangun frontend dengan Next.js yang super cepat dan responsif, lalu menghubungkannya ke WordPress menggunakan API GraphQL yang dioptimalkan.</p><h3>Mengapa Harus Headless?</h3><ul><li><strong>Kecepatan Maksimal:</strong> Next.js melakukan Static Site Generation (SSG), menyajikan halaman instan tanpa query PHP yang lambat.</li><li><strong>Keamanan Kelas Dunia:</strong> Dashboard admin WordPress Anda tersembunyi sepenuhnya dari luar, mengurangi 99% celah peretasan tradisional.</li><li><strong>Kebebasan Desain:</strong> Desain antarmuka kustom tanpa batasan bawaan tema WordPress monolitik.</li></ul>",
    icon: "⚡",
  },
  {
    id: "service-2",
    slug: "kustom-gutenberg-blocks",
    name: "Kustom Gutenberg Blocks",
    description:
      "Pembuatan custom block berbasis React untuk editor Gutenberg agar tim konten dapat mengedit layout dengan mudah tanpa merusak desain.",
    content:
      "<h2>Blok React untuk Editor Gutenberg</h2><p>Kami merancang dan mengembangkan blok khusus (custom blocks) yang disesuaikan secara presisi dengan identitas brand Anda. Menggunakan React dan WordPress Blocks API, tim marketing Anda dapat dengan mudah menyusun tata letak halaman yang dinamis dan interaktif tanpa khawatir merusak konsistensi layout visual.</p><h3>Keunggulan Custom Blocks</h3><ul><li><strong>User Experience yang Ramah:</strong> Drag-and-drop elemen langsung di editor visual Gutenberg tanpa perlu menyentuh kode HTML/CSS.</li><li><strong>Bebas Bloatware:</strong> Tidak menggunakan page builder berat pihak ketiga (seperti Elementor atau WPBakery) yang melambatkan performa situs.</li><li><strong>Modular & Reusable:</strong> Blok dapat digunakan kembali di berbagai halaman dan post secara fleksibel.</li></ul>",
    icon: "🧩",
  },
  {
    id: "service-3",
    slug: "custom-plugin-development",
    name: "Custom Plugin Development",
    description:
      "Pengembangan plugin kustom dari nol untuk memenuhi kebutuhan logika bisnis spesifik, API pihak ketiga, dan keamanan tingkat tinggi.",
    content:
      "<h2>Logika Bisnis Khusus Tanpa Batas</h2><p>Ketika plugin yang ada di repositori WordPress tidak mampu memenuhi kebutuhan spesifik bisnis Anda, pengembangan plugin kustom adalah solusinya. Kami membangun plugin yang ditulis dengan standar PHP modern dan WordPress Coding Standards untuk keamanan dan performa maksimal.</p><h3>Fokus Layanan Plugin Kami</h3><ul><li><strong>Integrasi REST API / GraphQL:</strong> Menghubungkan WordPress Anda secara real-time ke sistem internal (CRM Salesforce, HubSpot, Mailchimp, ERP, dll.).</li><li><strong>Otomatisasi Alur Kerja:</strong> Mengurangi input data manual dengan proses otomatisasi form submission dan sinkronisasi data.</li><li><strong>Keamanan & Proteksi Data:</strong> Mengamankan transaksi, input database, dan data sensitif pengguna.</li></ul>",
    icon: "⚙️",
  },
  {
    id: "service-4",
    slug: "optimasi-speed-core-web-vitals",
    name: "Optimasi Speed & Core Web Vitals",
    description:
      "Memperbaiki performa WordPress monolithic yang lambat hingga mendapatkan nilai hijau 90+ di Google PageSpeed Insights.",
    content:
      "<h2>Mencapai Nilai Hijau Google PageSpeed Insights</h2><p>Performa website lambat setara dengan kehilangan prospek bisnis. Kami mendiagnosis bottlenecks pada server, database, aset, dan skrip situs WordPress monolitik Anda untuk mendongkrak performa Core Web Vitals Anda hingga rentang nilai hijau (90+).</p><h3>Metode Optimasi Performa</h3><ul><li><strong>Server-side & Database Caching:</strong> Pengoptimalan query MySQL yang lambat dan konfigurasi object cache (Redis/Memcached).</li><li><strong>Optimasi Aset & Media:</strong> Kompresi gambar otomatis, load font lokal secara asinkron, dan minifikasi berkas CSS/JS.</li><li><strong>Analisis Kode:</strong> Menghilangkan plugin yang berat dan menggantinya dengan fungsi kustom yang lebih efisien.</li></ul>",
    icon: "📈",
  },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "mock-b1",
    slug: "mengenal-headless-wordpress",
    title: "Mengenal Headless WordPress: Mengapa Anda Harus Menggunakannya",
    description:
      "Analisis mendalam mengenai keunggulan arsitektur decoupled menggunakan WordPress sebagai API-driven CMS dan Next.js di frontend.",
    content:
      "<p>Headless WordPress (atau decoupled WordPress) adalah salah satu tren paling populer dalam pengembangan web modern saat ini. Dengan menggunakan pendekatan ini, kita memisahkan backend WordPress yang tangguh sebagai Content Management System (CMS) dari tampilan frontend, dan menggunakan framework JavaScript seperti Next.js untuk menyajikan halaman ke pengguna.</p><p>Mengapa Anda harus mempertimbangkan pendekatan ini? Keunggulan utamanya ada pada performa, keamanan, dan kebebasan dalam mendesain antarmuka pengguna.</p><h2>1. Kecepatan Memuat Halaman yang Luar Biasa</h2><p>Dengan Next.js, semua halaman Anda dapat diproduksi secara statis (Static Site Generation). Ini berarti server CDN akan langsung menyajikan file HTML siap pakai ke browser pengunjung tanpa harus menunggu proses eksekusi PHP atau kueri database MySQL dari WordPress yang terkadang lambat.</p><h2>2. Keamanan yang Jauh Lebih Baik</h2><p>Karena website Next.js berjalan terpisah dan mandiri, database dan folder admin WordPress Anda (`/wp-admin`) sepenuhnya tersembunyi dari internet luar. Hacker tidak akan bisa menemukan celah keamanan WordPress Anda dari halaman depan website portfolio Anda.</p><blockquote>Masa depan web adalah tentang menyajikan konten dalam kecepatan milidetik dan mengamankan data pengguna dari ancaman siber.</blockquote><p>Kesimpulannya, Headless WordPress memberikan kombinasi terbaik: tim pembuat konten tetap bisa bekerja dengan mudah di dashboard WordPress, sedangkan tim pengembang bisa membangun antarmuka yang sangat responsif, cepat, dan aman dengan Next.js.</p>",
    image: "/dev_workspace_v2.png",
    date: "24 Juni 2026",
  },
  {
    id: "mock-b2",
    slug: "panduan-wpgraphql-pemula-nextjs",
    title: "Panduan WPGraphQL untuk Pemula di Next.js App Router",
    description:
      "Langkah demi langkah mengambil data dari WordPress menggunakan GraphQL, menulis kueri, dan melakukan static generation.",
    content:
      "<p>GraphQL telah menjadi standar baru untuk bertukar data antara frontend modern dan backend CMS. Bagi para developer WordPress, plugin <strong>WPGraphQL</strong> adalah penyelamat yang mengubah database WordPress monolithic Anda menjadi server API GraphQL yang sangat cepat.</p><p>Panduan ini akan menunjukkan kepada Anda kueri dasar untuk mengambil data postingan blog di Next.js App Router.</p><h2>Langkah 1: Menulis Kueri GraphQL Pertama Anda</h2><p>Dengan GraphQL, Anda memiliki kendali penuh atas data apa saja yang ingin Anda ambil. Tidak seperti REST API yang mengembalikan seluruh payload data meskipun tidak Anda butuhkan, di GraphQL Anda hanya mendefinisikan kolom spesifik yang ingin ditampilkan:</p><pre><code>query GetBlogPosts {\n  posts(first: 10) {\n    nodes {\n      id\n      title\n      slug\n      excerpt\n    }\n  }\n}</code></pre><h2>Langkah 2: Menghubungkan Query di Next.js</h2><p>Di Next.js, Anda dapat melakukan pemanggilan API menggunakan standar `fetch` JavaScript di dalam Server Components. Hal ini sangat menguntungkan karena pengambilan data terjadi di sisi server, bukan di sisi browser pengunjung:</p><p>Dengan mengimplementasikan WPGraphQL dan Next.js, Anda telah membangun fondasi arsitektur web modern yang siap dikembangkan ke skala yang lebih besar.</p>",
    image: "/gutenberg_project_v2.png",
    date: "15 Juni 2026",
  },
];

let hasWarned = false;

// GraphQL fetch wrapper
async function fetchGraphQL(query: string, variables = {}) {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 60 }, // Cache pages for 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch API, status: ${res.status}`);
    }

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error("Failed to fetch API due to GraphQL errors");
    }
    return json.data;
  } catch (error) {
    if (!hasWarned) {
      console.warn(
        `⚠️ [WP.dev] Backend WordPress (${WORDPRESS_API_URL}) offline. Menggunakan mock data untuk pengerjaan frontend.`,
      );
      hasWarned = true;
    }
    return null;
  }
}

// Fetch Projects from WordPress Category 'projects'
export async function getProjects(): Promise<Project[]> {
  const query = `
    query GetProjects {
      posts(where: {categoryName: "projects"}, first: 20) {
        nodes {
          id
          title
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  if (!data || !data.posts || !data.posts.nodes) {
    return MOCK_PROJECTS;
  }

  return data.posts.nodes.map((post: any) => {
    // Determine subcategory for filtering (excluding 'projects' itself)
    const categoryNodes = post.categories?.nodes || [];
    const mainCat = categoryNodes.find((cat: any) => cat.slug !== "projects");
    const categoryName = mainCat ? mainCat.name : "Headless";

    // Remove HTML tags from excerpt for tech stack
    const techStack = post.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, "").trim()
      : "WordPress";
    const description = post.content
      ? post.content.replace(/<[^>]*>/g, "").trim()
      : "";

    return {
      id: post.id,
      name: post.title,
      description: description,
      techStack: techStack,
      image: post.featuredImage?.node?.sourceUrl || "/dev_workspace.png",
      category: categoryName,
    };
  });
}

// Helper for Mapping Icons based on title keywords
export function getServiceIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("headless") || t.includes("next")) return "⚡";
  if (t.includes("gutenberg") || t.includes("block") || t.includes("theme"))
    return "🧩";
  if (t.includes("plugin") || t.includes("custom") || t.includes("api"))
    return "⚙️";
  if (t.includes("speed") || t.includes("optim") || t.includes("performance"))
    return "📈";
  return "💼";
}

// Fetch Services from WordPress Category 'services'
export async function getServices(): Promise<Service[]> {
  const query = `
    query GetServices {
      posts(where: {categoryName: "services"}, first: 20) {
        nodes {
          id
          slug
          title
          content
          excerpt
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  if (!data || !data.posts || !data.posts.nodes) {
    return MOCK_SERVICES;
  }

  return data.posts.nodes.map((post: any) => {
    const description = post.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, "").trim()
      : post.content
        ? post.content.replace(/<[^>]*>/g, "").trim()
        : "";
    return {
      id: post.id,
      slug: post.slug || String(post.id),
      name: post.title,
      description: description,
      content: post.content || "",
      icon: getServiceIcon(post.title),
    };
  });
}

// Fetch Blog Posts from WordPress Category 'blog'
export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `
    query GetBlogPosts {
      posts(where: {categoryName: "blog"}, first: 20) {
        nodes {
          id
          slug
          title
          content
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  if (!data || !data.posts || !data.posts.nodes) {
    return MOCK_BLOG_POSTS;
  }

  return data.posts.nodes.map((post: any) => {
    const description = post.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, "").trim()
      : post.content
        ? post.content
            .substring(0, 150)
            .replace(/<[^>]*>/g, "")
            .trim() + "..."
        : "";

    // Format date beautifully
    const formattedDate = new Date(post.date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      id: post.id,
      slug: post.slug || String(post.id),
      title: post.title,
      description: description,
      image: post.featuredImage?.node?.sourceUrl || "/dev_workspace_v2.png",
      date: formattedDate,
    };
  });
}

// Fetch Single Blog Post by Slug
export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const query = `
    query GetBlogPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { slug });
  if (!data || !data.post) {
    // Local Fallback to Mock Data
    const mockPost = MOCK_BLOG_POSTS.find((p) => p.slug === slug);
    return mockPost || null;
  }

  const post = data.post;
  const description = post.excerpt
    ? post.excerpt.replace(/<[^>]*>/g, "").trim()
    : post.content
      ? post.content
          .substring(0, 150)
          .replace(/<[^>]*>/g, "")
          .trim() + "..."
      : "";

  const formattedDate = new Date(post.date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    id: post.id,
    slug: slug,
    title: post.title,
    description: description,
    content: post.content || "",
    image: post.featuredImage?.node?.sourceUrl || "/dev_workspace_v2.png",
    date: formattedDate,
  };
}

// Fetch Single Service by Slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const query = `
    query GetServiceBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        excerpt
      }
    }
  `;

  const data = await fetchGraphQL(query, { slug });
  if (!data || !data.post) {
    // Local Fallback to Mock Data
    const mockService = MOCK_SERVICES.find((s) => s.slug === slug);
    return mockService || null;
  }

  const post = data.post;
  const description = post.excerpt
    ? post.excerpt.replace(/<[^>]*>/g, "").trim()
    : post.content
      ? post.content
          .substring(0, 150)
          .replace(/<[^>]*>/g, "")
          .trim() + "..."
      : "";

  return {
    id: post.id,
    slug: slug,
    name: post.title,
    description: description,
    content: post.content || "",
    icon: getServiceIcon(post.title),
  };
}

// Fetch Custom Post Type 'testimonials'
export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `
    query GetTestimonials {
      testimonials(first: 10) {
        nodes {
          id
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);

  if (!data || !data.testimonials || !data.testimonials.nodes || data.testimonials.nodes.length === 0) {
    return MOCK_TESTIMONIALS;
  }

  return data.testimonials.nodes.map((item: any) => {
    const cleanComment = item.content ? item.content.replace(/<[^>]*>/g, "").trim() : "";
    return {
      id: item.id,
      clientName: item.title || "Klien Terverifikasi",
      company: "Klien Terverifikasi",
      rating: 5,
      comment: cleanComment || "Sangat puas dengan layanan web development.",
      avatar: item.featuredImage?.node?.sourceUrl || "https://i.pravatar.cc/150?img=11",
    };
  });
}

// Fetch data Produk dari plugin WooGraphQL (WooCommerce GraphQL)
export async function getProducts(): Promise<Product[]> {
  const query = `
    query GetWooCommerceProducts {
      products(first: 20) {
        nodes {
          id
          name
          slug
          description
          image {
            sourceUrl
          }
          ... on SimpleProduct {
            price
            regularPrice
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);

  if (!data || !data.products || !data.products.nodes) {
    return MOCK_PRODUCTS;
  }

  return data.products.nodes.map((prod: any) => ({
    id: prod.id,
    name: prod.name,
    slug: prod.slug,
    price: prod.price || "Rp 0",
    regularPrice: prod.regularPrice || "",
    description: prod.description ? prod.description.replace(/<[^>]*>/g, "").trim() : "",
    image: prod.image?.sourceUrl || "/dev_workspace.png",
    category: "Store",
  }));
}

// Fetch Single WooCommerce Product by Slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = `
    query GetProductBySlug($slug: ID!) {
      product(id: $slug, idType: SLUG) {
        id
        name
        slug
        description
        image {
          sourceUrl
        }
        ... on SimpleProduct {
          price
          regularPrice
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { slug });
  if (!data || !data.product) {
    const mockProd = MOCK_PRODUCTS.find((p) => p.slug === slug);
    return mockProd || null;
  }

  const prod = data.product;
  return {
    id: prod.id,
    name: prod.name,
    slug: slug,
    price: prod.price || "Rp 0",
    regularPrice: prod.regularPrice || "",
    description: prod.description ? prod.description.replace(/<[^>]*>/g, "").trim() : "",
    image: prod.image?.sourceUrl || "/dev_workspace.png",
    category: "Store",
  };
}
