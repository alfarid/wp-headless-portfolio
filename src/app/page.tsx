import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu'; // This is Projects
import Locations from '@/components/Locations'; // This is Services
import News from '@/components/News'; // This is Blog
import ContactForm from '@/components/ContactForm';
import { getProjects, getServices, getBlogPosts } from '@/lib/wordpress';

export default async function Home() {
  // Fetch data from WordPress (using WPGraphQL with fallback to mock data)
  const [projects, services, blogPosts] = await Promise.all([
    getProjects(),
    getServices(),
    getBlogPosts()
  ]);

  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />
      <Hero />
      
      {/* About Me Section */}
      <section id="about" className="section">
        {/* Glow decoration */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(30px)'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div data-aos="fade-right" style={{ 
              position: 'relative', 
              height: '450px', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <Image 
                src="/dev_workspace.png" 
                alt="WordPress Developer" 
                fill 
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '20px',
                borderRadius: 'var(--radius-md)'
              }}>
                <p style={{ fontWeight: '600', color: '#fff', fontSize: '1.1rem' }}>WordPress & Next.js Expert</p>
                <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginTop: '4px' }}>Ready to Scale Your Business</p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '15px', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>TENTANG SAYA</p>
              <h2 style={{ fontSize: '3rem', marginBottom: '25px', lineHeight: '1.2', color: '#fff' }}>
                Menghubungkan Kebebasan Konten & Performa Maksimal
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-medium)', marginBottom: '20px', lineHeight: '1.7' }}>
                Saya adalah WordPress Developer yang fokus pada pengembangan modern menggunakan konsep **Headless CMS**. Saya percaya bahwa admin konten berhak mendapatkan kemudahan dashboard WordPress, sementara pengunjung website berhak mendapatkan kecepatan loading milidetik dari Next.js.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-medium)', marginBottom: '30px', lineHeight: '1.7' }}>
                Dengan keahlian di bidang custom plugin, custom Gutenberg block development, serta GraphQL API, saya mengubah WordPress tradisional Anda menjadi aplikasi web modern yang dinamis dan berkinerja tinggi.
              </p>
              <a href="#contact" className="btn btn-accent">Hubungi Saya</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Locations items={services} />

      {/* Features Section (Cruip Open Pro style 6-column grid) */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)', position: 'relative' }}>
        {/* Background glow decoration */}
        <div className="blur-blob blur-purple" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px' }} aria-hidden="true"></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up">
            <span className="badge-glow">Keahlian Teknis</span>
            <h2 className="section-title" style={{ marginTop: '20px' }}>Arsitektur Skalabilitas Tinggi</h2>
            <p className="section-subtitle">
              Website headless modern yang dirancang untuk performa tanpa batas, keamanan tinggi, dan kemudahan bagi tim konten Anda.
            </p>
          </div>

          {/* Large Showcase Image below header (Cruip style) */}
          <div data-aos="fade-up" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            margin: '0 auto 60px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
          }}>
            <Image 
              src="/gutenberg_project.png" 
              alt="Gutenberg React Block Editor Showcase" 
              width={1104} 
              height={384}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* 6-Column Grid matching Open Pro */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px 30px',
            marginTop: '40px'
          }}>
            {/* Feature 1 */}
            <article data-aos="fade-up" data-aos-delay="0">
              <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '10px', fontWeight: '600' }}>Decoupled Architecture</h3>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Memisahkan frontend Next.js dengan backend WordPress GraphQL. Menjamin kecepatan akses milidetik dan keamanan super tangguh.
              </p>
            </article>

            {/* Feature 2 */}
            <article data-aos="fade-up" data-aos-delay="100">
              <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '10px', fontWeight: '600' }}>Custom Gutenberg Blocks</h3>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Blok kustom berbasis React untuk editor WordPress Gutenberg. Editor konten bebas membuat layout dinamis tanpa merusak struktur desain.
              </p>
            </article>

            {/* Feature 3 */}
            <article data-aos="fade-up" data-aos-delay="200">
              <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '10px', fontWeight: '600' }}>Headless WooCommerce</h3>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Toko e-commerce modern berbasis WooCommerce API dengan keranjang belanja, checkout instan, dan integrasi payment gateway lokal.
              </p>
            </article>

            {/* Feature 4 */}
            <article data-aos="fade-up" data-aos-delay="300">
              <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '10px', fontWeight: '600' }}>Core Web Vitals Optimal</h3>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Pengoptimalan performa Google Lighthouse dengan server-side caching (ISR), load font kustom, dan optimasi aset gambar Next.js.
              </p>
            </article>

            {/* Feature 5 */}
            <article data-aos="fade-up" data-aos-delay="400">
              <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '10px', fontWeight: '600' }}>Secure Middleware</h3>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Otentikasi formulir, integrasi JWT token, dan pembatasan hak akses rute API langsung pada layer middleware Next.js.
              </p>
            </article>

            {/* Feature 6 */}
            <article data-aos="fade-up" data-aos-delay="500">
              <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '10px', fontWeight: '600' }}>API Connectors</h3>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Sinkronisasi data real-time via Webhooks dari WordPress ke CRM populer seperti Salesforce, HubSpot, atau Mailchimp.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Menu items={projects} />

      {/* Blog Section */}
      <News items={blogPosts} />

      {/* Contact Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-glow" data-aos="fade-up">KONSULTASI GRATIS</span>
          <h2 data-aos="fade-up" data-aos-delay="100" style={{ color: '#fff', fontSize: '3rem', marginTop: '20px', marginBottom: '20px', fontWeight: '700' }}>Siap Membangun Website Impian Anda?</h2>
          <p data-aos="fade-up" data-aos-delay="200" style={{ color: 'var(--gray-medium)', maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Hubungi saya sekarang untuk mendiskusikan migrasi website ke headless Next.js, pembuatan plugin kustom, atau optimasi speed website WordPress Anda.
          </p>
          
          <ContactForm />

          <p data-aos="fade-up" data-aos-delay="400" style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', marginTop: '30px' }}>
            Atau hubungi langsung melalui:
            <a href="mailto:hello@wpdev.com" style={{ color: 'var(--primary)', marginLeft: '8px', marginRight: '8px', textDecoration: 'underline' }}>Email</a> 
            atau 
            <a href="https://wa.me/6281112345678" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', marginLeft: '8px', textDecoration: 'underline' }}>WhatsApp</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--background)', padding: '80px 0 40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', marginBottom: '60px' }}>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '25px', fontSize: '1.5rem' }}>
                WP<span style={{ color: 'var(--primary)' }}>.dev</span>
              </h3>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Menyajikan website berkecepatan ekstrim dan skalabilitas tinggi menggunakan arsitektur headless WordPress modern.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', color: '#fff' }}>Navigasi</h4>
              <ul style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', display: 'grid', gap: '12px' }}>
                <li><a href="#about" className="footer-link">Tentang Saya</a></li>
                <li><a href="#services" className="footer-link">Layanan</a></li>
                <li><a href="#projects" className="footer-link">Portfolio Proyek</a></li>
                <li><a href="#blog" className="footer-link">Blog & Catatan</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', color: '#fff' }}>Keahlian Utama</h4>
              <ul style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', display: 'grid', gap: '12px' }}>
                <li>Headless WordPress</li>
                <li>Next.js & React</li>
                <li>GraphQL & REST API</li>
                <li>Custom Plugin & Theme</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', color: '#fff' }}>Kontak & Sosmed</h4>
              <p style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '15px' }}>
                Jakarta, Indonesia<br />
                hello@wpdev.com
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#" style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>GitHub</a>
                <a href="#" style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>LinkedIn</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ color: 'var(--gray-medium)', fontSize: '0.8rem' }}>Copyright © WP.dev 2026. All rights reserved.</p>
            <p style={{ color: 'var(--gray-medium)', fontSize: '0.8rem' }}>Built with WordPress & Next.js</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
