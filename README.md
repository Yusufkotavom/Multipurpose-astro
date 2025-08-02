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

## 🛠️ Teknologi yang Digunakan

- **Astro** - Framework untuk static site generation
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - UI components untuk React
- **TypeScript** - Type safety dan developer experience
- **Fuse.js** - Fuzzy search untuk blog
- **Gray-matter** - Front matter parsing untuk blog posts

## 📦 Instalasi

```bash
# Clone repository
git clone <repository-url>
cd astro-business-indonesia

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Struktur Proyek

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

## 🎨 Customization

### Mengubah Konfigurasi Website
Edit file `config/site.config.ts` untuk mengubah:
- Nama website
- Deskripsi
- Informasi kontak
- Social media links
- Google Analytics

### Menambah Landing Page Baru
1. Buat file JSON di `src/content/landing/[nama-bisnis].json`
2. Ikuti struktur yang sudah ada
3. Landing page akan otomatis tersedia di `/landing/[nama-bisnis]`

### Mengubah Warna dan Styling
- Edit `tailwind.config.mjs` untuk custom colors
- Edit `src/styles/global.css` untuk custom styles
- Setiap landing page memiliki warna custom di file JSON

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **JSON-LD**: Structured data untuk search engines
- **Sitemap**: Otomatis generate sitemap.xml
- **Robots.txt**: Search engine crawling rules
- **Canonical URLs**: Mencegah duplicate content

## 🚀 Deployment

### Vercel
```bash
npm run build
# Upload dist/ folder ke Vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder ke Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder ke gh-pages branch
```

## 📊 Performance

- **Lighthouse Score**: 95+ untuk semua metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

- **Website**: [your-domain.com](https://your-domain.com)
- **Email**: info@yourcompany.com
- **Phone**: +62 812-3456-7890

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Framework yang luar biasa
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Flowbite](https://flowbite.com) - UI components
- [Fuse.js](https://fusejs.io) - Fuzzy search library

