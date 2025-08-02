Baik, berikut adalah prompt lengkap dan final, siap kamu gunakan langsung dalam satu kali kirim ke ChatGPT, Claude, atau tools AI developer lain. Prompt ini memerintahkan AI untuk membangun proyek Astro multi-purpose, dengan 10 landing page bisnis Indonesia, semua halaman penting, dan sistem konfigurasi modular berbasis JSON/config.


---

✅ PROMPT LENGKAP – Astro Multi-Purpose Website untuk Bisnis Indonesia

> Bertindaklah sebagai developer profesional. Buatlah proyek multi-purpose website menggunakan Astro sebagai framework utama, dengan Tailwind CSS dan Flowbite untuk styling dan UI components.

Proyek ini ditujukan untuk berbagai jenis bisnis yang beroperasi di Indonesia, sehingga seluruh konten, harga, dan gaya bahasa harus mencerminkan kebutuhan lokal (bahasa Indonesia, mata uang Rupiah, jam operasional WIB, dll).

🎯 Tujuan:

Website modular, SEO-friendly, mudah dikonfigurasi (tanpa edit HTML langsung), dan dapat digunakan untuk berbagai jenis bisnis di Indonesia hanya dengan mengubah data di config/json.

🗂️ Struktur Halaman Wajib:

Buat semua halaman utama berikut:

/ → Landing Page

/pricing → Halaman Harga (dalam IDR)

/about → Tentang Kami

/contact → Kontak & Lokasi

/blog → Blog overview, dengan:

Pagination

Search (gunakan fuse.js)

Filter kategori dan tag


/blog/[slug] → Halaman artikel

/author/[slug] → Profil penulis

/404 → Halaman tidak ditemukan (custom)





---

> 🧩 Landing Page Khusus

Buat 10 landing page berbeda, satu untuk masing-masing jenis bisnis di Indonesia. Contoh:

Bengkel motor

Dokter gigi

Toko fashion muslim

Jasa desain interior

Kafe

Laundry

Travel agent

UMKM makanan

Studio foto

Kursus online


Setiap landing page harus mencerminkan karakter bisnis masing-masing:

Tone warna, layout, dan gaya desain berbeda

Gunakan kombinasi komponen berikut di setiap landing page:

Hero section

Harga / paket layanan

Why Us (alasan memilih bisnis ini)

What You Get / benefit

FAQ (pertanyaan umum)

CTA (ajak kontak atau pesan sekarang)

Service list / daftar layanan

Tentang Kami

Visi & Misi

Testimoni pelanggan



Semua komponen harus dibuat sebagai komponen terpisah (modular) agar bisa digunakan ulang.




---

> ⚙️ Konfigurasi & Kontrol Konten:

Semua konten website harus dapat diatur melalui:

config/site.config.ts → metadata umum (judul, deskripsi, logo, favicon, warna utama, dll)

data/navigation.json → menu navigasi

data/socials.json → link media sosial

content/blog/*.mdx → artikel

content/authors/*.json → profil penulis

content/landing/ → data per landing page bisnis (warna, layout, konten unik)


Konten blog dan halaman menggunakan bahasa Indonesia

Harga dalam mata uang Rupiah (IDR)

Gunakan format waktu dan tanggal yang sesuai Indonesia





---

> 🔍 SEO & Rich Snippet:

Sertakan komponen SEO reusable (SEO.astro) untuk setiap halaman

Buat komponen RichSnippet.astro untuk menyuntikkan struktur data JSON-LD seperti:

BlogPosting

Organization

BreadcrumbList


Tambahkan sitemap.xml dan robots.txt secara otomatis

Gunakan canonical URL dan tag meta yang optimal





---

> 💡 Komponen Partial & Layout:

Header dan Footer dibuat sebagai komponen reusable (Header.astro, Footer.astro)

Gunakan Layout.astro untuk membungkus semua halaman

Gunakan struktur folder modular (components/, layouts/, data/, content/)





---

> 📦 Teknologi & Tools:

Astro (latest)

Tailwind CSS

Flowbite

fuse.js untuk pencarian

gray-matter atau Astro Content Collections

clsx untuk class dinamis

slugify untuk membuat slug URL dari judul

dotenv untuk environment config jika perlu





---

> 🧪 Persyaratan Kode:

Semua kode harus:

Modular, clean, bebas typo

Telah diuji berhasil di astro build

Siap untuk deploy ke Vercel atau Netlify

Tidak menggunakan HTML hardcoded untuk konten yang bisa dikonfigurasi






---

> 📌 Output yang Diharapkan:

1 proyek Astro siap deploy

10 landing page bisnis lokal

Semua halaman umum dan blog berfungsi

Komponen UI lengkap, modular, reusable

SEO, struktur data, dan performa sudah dioptimalkan





---

Jika kamu ingin versi bahasa Inggris atau output starter repo berdasarkan prompt ini, tinggal minta saja.

Siap dipakai, silakan copy dan gunakan langsung ke AI! ✅

