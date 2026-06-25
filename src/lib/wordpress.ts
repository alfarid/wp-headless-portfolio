const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://portfolio-backend.local/graphql';

// Interface definitions
export interface Project {
  id: string | number;
  name: string;
  description: string;
  price?: string; // We map this to the tech stack / metadata
  techStack: string;
  image: string;
  category: string;
}

export interface Service {
  id: string | number;
  name: string;
  description: string;
  icon?: string;
}

export interface BlogPost {
  id: string | number;
  title: string;
  description: string;
  image: string;
  date: string;
}

// Fallback Mock Data
export const MOCK_PROJECTS: Project[] = [
  {
    id: 'mock-1',
    name: 'Headless WooCommerce Store',
    description: 'Toko online berkecepatan tinggi dengan Next.js App Router, WPGraphQL, dan integrasi Payment Gateway Midtrans.',
    techStack: 'Next.js, Tailwind, WPGraphQL, Midtrans',
    image: '/ecommerce_project.png',
    category: 'Headless'
  },
  {
    id: 'mock-2',
    name: 'Custom Gutenberg Block Theme',
    description: 'Tema kustom WordPress interaktif dibangun menggunakan full-site editing (FSE) dan React Gutenberg custom blocks.',
    techStack: 'React, PHP, Tailwind, Gutenberg API',
    image: '/gutenberg_project.png',
    category: 'Custom Themes'
  },
  {
    id: 'mock-3',
    name: 'Salesforce CRM Connector Plugin',
    description: 'Plugin kustom WordPress aman untuk sinkronisasi data prospek formulir ke Salesforce CRM secara real-time via REST API.',
    techStack: 'PHP, WordPress Plugin API, Salesforce API',
    image: '/dev_workspace.png',
    category: 'Plugins'
  },
  {
    id: 'mock-4',
    name: 'High-Traffic News Portal',
    description: 'Migrasi portal berita besar ke arsitektur headless dengan Incremental Static Regeneration (ISR) untuk menangani jutaan pageviews.',
    techStack: 'Next.js, GraphQL, Redis, Node.js',
    image: '/ecommerce_project.png',
    category: 'Headless'
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 'service-1',
    name: 'Headless WordPress & Next.js',
    description: 'Memisahkan backend WP dengan frontend modern Next.js untuk kecepatan ekstrim, keamanan total, dan SEO sempurna.',
    icon: '⚡'
  },
  {
    id: 'service-2',
    name: 'Kustom Gutenberg Blocks',
    description: 'Pembuatan custom block berbasis React untuk editor Gutenberg agar tim konten dapat mengedit layout dengan mudah tanpa merusak desain.',
    icon: '🧩'
  },
  {
    id: 'service-3',
    name: 'Custom Plugin Development',
    description: 'Pengembangan plugin kustom dari nol untuk memenuhi kebutuhan logika bisnis spesifik, API pihak ketiga, dan keamanan tingkat tinggi.',
    icon: '⚙️'
  },
  {
    id: 'service-4',
    name: 'Optimasi Speed & Core Web Vitals',
    description: 'Memperbaiki performa WordPress monolithic yang lambat hingga mendapatkan nilai hijau 90+ di Google PageSpeed Insights.',
    icon: '📈'
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Mengenal Headless WordPress: Mengapa Anda Harus Menggunakannya',
    description: 'Analisis mendalam mengenai keunggulan arsitektur decoupled menggunakan WordPress sebagai API-driven CMS dan Next.js di frontend.',
    image: '/dev_workspace.png',
    date: 'June 24, 2026'
  },
  {
    id: 'blog-2',
    title: 'Panduan WPGraphQL untuk Pemula di Next.js App Router',
    description: 'Langkah demi langkah mengambil data dari WordPress menggunakan GraphQL, menulis query, dan melakukan static generation.',
    image: '/gutenberg_project.png',
    date: 'June 15, 2026'
  }
];

let hasWarned = false;

// GraphQL fetch wrapper
async function fetchGraphQL(query: string, variables = {}) {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      console.error('GraphQL Errors:', json.errors);
      throw new Error('Failed to fetch API due to GraphQL errors');
    }
    return json.data;
  } catch (error) {
    if (!hasWarned) {
      console.warn(`⚠️ [WP.dev] Backend WordPress (${WORDPRESS_API_URL}) offline. Menggunakan mock data untuk pengerjaan frontend.`);
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
    const mainCat = categoryNodes.find((cat: any) => cat.slug !== 'projects');
    const categoryName = mainCat ? mainCat.name : 'Headless';

    // Remove HTML tags from excerpt for tech stack
    const techStack = post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '').trim() : 'WordPress';
    const description = post.content ? post.content.replace(/<[^>]*>/g, '').trim() : '';

    return {
      id: post.id,
      name: post.title,
      description: description,
      techStack: techStack,
      image: post.featuredImage?.node?.sourceUrl || '/dev_workspace.png',
      category: categoryName
    };
  });
}

// Fetch Services from WordPress Category 'services'
export async function getServices(): Promise<Service[]> {
  const query = `
    query GetServices {
      posts(where: {categoryName: "services"}, first: 20) {
        nodes {
          id
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

  // Icons map based on some keywords
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('headless') || t.includes('next')) return '⚡';
    if (t.includes('gutenberg') || t.includes('block') || t.includes('theme')) return '🧩';
    if (t.includes('plugin') || t.includes('custom') || t.includes('api')) return '⚙️';
    if (t.includes('speed') || t.includes('optim') || t.includes('performance')) return '📈';
    return '💼';
  };

  return data.posts.nodes.map((post: any) => {
    const description = post.content ? post.content.replace(/<[^>]*>/g, '').trim() : (post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '').trim() : '');
    return {
      id: post.id,
      name: post.title,
      description: description,
      icon: getIcon(post.title)
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
    const description = post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '').trim() : (post.content ? post.content.substring(0, 150).replace(/<[^>]*>/g, '').trim() + '...' : '');
    
    // Format date beautifully
    const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return {
      id: post.id,
      title: post.title,
      description: description,
      image: post.featuredImage?.node?.sourceUrl || '/dev_workspace.png',
      date: formattedDate
    };
  });
}
