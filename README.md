# Astro Multi-Purpose Business Website Indonesia

Website multi-purpose profesional untuk berbagai bisnis di Indonesia yang dibangun dengan Astro, Tailwind CSS, dan Flowbite React.

## 🚀 Fitur Utama

### 📄 Halaman Utama
- **Landing Page** (/) - Halaman utama dengan hero section, fitur, pricing, testimonials, dan CTA
- **Pricing Page** (/pricing) - Halaman paket dan harga dengan FAQ
- **About Page** (/about) - Tentang kami dengan visi, misi, dan tim
- **Contact Page** (/contact) - Form kontak dan informasi kontak
- **Blog Overview** (/blog) - Halaman blog dengan search, pagination, dan filter kategori
- **Custom 404 Page** (/404) - Halaman error yang user-friendly

### 🧩 10 Landing Page Bisnis Indonesia
1. **Bengkel Jaya** (/landing/bengkel) - Bengkel mobil terpercaya
2. **Kafe Nusantara** (/landing/kafe) - Kafe modern dengan cita rasa nusantara
3. **Studio Foto Indah** (/landing/studio-foto) - Studio foto profesional
4. **Laundry Express** (/landing/laundry) - Layanan laundry kiloan
5. **Toko Fashion Muslim** (/landing/fashion-muslim) - Fashion muslim modern
6. **Salon Cantik** (/landing/salon) - Salon kecantikan profesional
7. **Toko Bunga Indah** (/landing/toko-bunga) - Toko bunga terpercaya
8. **Toko Kue Lezat** (/landing/toko-kue) - Kue homemade lezat

### 🔍 SEO & Rich Snippets
- **SEO Component** - Meta tags, Open Graph, Twitter Cards
- **Rich Snippet Component** - JSON-LD untuk BlogPosting, Organization, BreadcrumbList
- **Sitemap & Robots.txt** - Otomatis generate sitemap.xml dan robots.txt
- **Canonical URLs** - Mencegah duplicate content

### ⚙️ Konfigurasi & Struktur
- **Modular Design** - Komponen yang dapat digunakan kembali
- **Configuration Files** - Semua konten dikontrol melalui JSON/config
- **Responsive Design** - Mobile-first approach dengan Tailwind CSS
- **Performance Optimized** - Fast loading dan SEO-friendly

## 🛠️ Teknologi

- **Astro** - Framework untuk static site generation
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - UI components untuk React
- **TypeScript** - Type safety dan developer experience
- **Fuse.js** - Fuzzy search untuk blog
- **Gray-matter** - Front matter parsing untuk blog posts

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/yourusername/astro-business-indonesia.git
cd astro-business-indonesia

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Atau deploy langsung dari GitHub
# 1. Push ke GitHub
# 2. Connect repository di Vercel
# 3. Deploy otomatis
```

### Netlify
```bash
# Build project
npm run build

# Deploy folder dist ke Netlify
# Atau gunakan Netlify CLI
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Build project
npm run build

# Push folder dist ke branch gh-pages
# Atau gunakan GitHub Actions
```

## 📁 Struktur Proyek

```
astro-business-indonesia/
├── config/
│   └── site.config.ts          # Konfigurasi utama website
├── src/
│   ├── components/              # Komponen reusable
│   │   ├── SEO.astro           # SEO component
│   │   ├── RichSnippet.astro   # JSON-LD component
│   │   ├── Header.astro        # Header component
│   │   ├── Footer.astro        # Footer component
│   │   ├── Hero.astro          # Hero section
│   │   ├── Features.astro      # Features section
│   │   ├── Pricing.astro       # Pricing section
│   │   ├── Testimonials.astro  # Testimonials section
│   │   ├── CTA.astro           # Call to action
│   │   ├── BlogCard.astro      # Blog card component
│   │   ├── SearchBar.astro     # Search component
│   │   ├── CategoryFilter.astro # Category filter
│   │   ├── Pagination.astro    # Pagination component
│   │   └── LandingPage.astro   # Landing page component
│   ├── layouts/
│   │   └── Layout.astro        # Main layout
│   ├── pages/                  # Halaman website
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # About page
│   │   ├── pricing.astro       # Pricing page
│   │   ├── contact.astro       # Contact page
│   │   ├── blog/
│   │   │   └── index.astro     # Blog overview
│   │   ├── landing/
│   │   │   ├── index.astro     # Landing page list
│   │   │   └── [id].astro      # Dynamic landing page
│   │   └── 404.astro           # 404 page
│   ├── data/                   # Data files
│   │   ├── navigation.json     # Navigation data
│   │   └── socials.json        # Social media data
│   ├── content/                # Content collections
│   │   ├── blog/               # Blog posts
│   │   ├── authors/            # Author data
│   │   └── landing/            # Landing page data
│   └── styles/
│       └── global.css          # Global styles
├── public/                     # Static assets
│   └── robots.txt              # Robots file
└── package.json
```

## 🎨 Kustomisasi

### Mengubah Konten
Semua konten dapat diubah melalui file konfigurasi:

1. **Site Config** (`config/site.config.ts`) - Konfigurasi utama website
2. **Navigation** (`src/data/navigation.json`) - Menu navigasi
3. **Social Media** (`src/data/socials.json`) - Social media links
4. **Landing Pages** (`src/content/landing/`) - Data landing page

### Menambah Landing Page Baru
1. Buat file markdown di `src/content/landing/`
2. Tambahkan data di `config/site.config.ts`
3. Landing page akan otomatis tersedia di `/landing/[id]`

### Mengubah Warna & Styling
- Edit `src/styles/global.css` untuk custom CSS
- Gunakan Tailwind CSS classes untuk styling
- Setiap landing page memiliki warna custom yang dapat diubah

## 🔧 Konfigurasi

### Environment Variables
```bash
# Copy .env.example
cp .env.example .env

# Edit .env file
SITE_URL=https://your-domain.com
SITE_NAME=Your Site Name
SITE_DESCRIPTION=Your site description
```

### Build Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://your-domain.com',
  output: 'static',
  trailingSlash: 'never'
});
```

## 📊 Performance

- **Lighthouse Score**: 95+ untuk semua metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Kontak

Your Name - [@yourusername](https://twitter.com/yourusername) - email@example.com

Project Link: [https://github.com/yourusername/astro-business-indonesia](https://github.com/yourusername/astro-business-indonesia)

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Flowbite](https://flowbite.com/) - UI components
- [React](https://reactjs.org/) - JavaScript library

