# Jayatour Travel Portal (Laravel + Filament)

Implementasi ulang portal Jayatour menggunakan Laravel 11, Filament 3, Blade, dan Tailwind CSS. Aplikasi ini menghadirkan landing page marketing yang identik dengan versi React sebelumnya sekaligus menyediakan panel manajemen konten berbasis Filament untuk mengelola paket tour, bundling, promo flash sale, testimoni, blog, dan FAQ.

## Fitur Utama

- 🎯 **Landing page responsif** dengan Blade + Tailwind yang menampilkan hero, paket unggulan, bundling, flash sale, testimoni, galeri, blog, dan FAQ.
- 🗂️ **Struktur data relational** (MySQL) untuk paket tour, kategori, highlight, bundling, promo flash sale, testimoni, galeri, dan artikel blog.
- 🧩 **Seeder komprehensif** agar konten demo langsung tersedia setelah migrasi.
- 🛠️ **Panel admin Filament** untuk CRUD paket tour lengkap dengan repeater highlight.
- ⚡ **Integrasi Vite + Tailwind** mengikuti standar Laravel modern.

## Persyaratan

- PHP >= 8.2 dengan ekstensi `pdo_mysql`
- Composer 2
- Node.js >= 18 & npm
- MySQL / MariaDB

## Langkah Instalasi

1. **Kloning repo & instal dependency backend**
   ```bash
   composer install
   ```
2. **Salin environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
3. **Konfigurasi database** pada `.env` lalu jalankan migrasi + seeder
   ```bash
   php artisan migrate --seed
   ```
4. **Instal dependency front-end & build aset**
   ```bash
   npm install
   npm run dev # atau npm run build untuk produksi
   ```
5. **Jalankan server pengembangan**
   ```bash
   php artisan serve
   ```

## Struktur Penting

- `app/Models` — Model Eloquent untuk paket, bundling, flash sale, dsb.
- `database/migrations` & `database/seeders` — Skema dan data awal.
- `resources/views/pages/home.blade.php` — Blade landing page utama.
- `app/Filament/Resources/TourResource.php` — Panel admin Filament untuk paket tour.

## Catatan

- Folder `public/images` berisi placeholder; ganti dengan aset asli agar tampilan sama persis.
- Filament dan dependensi lain akan terinstal setelah menjalankan `composer install`.
- Format mata uang menggunakan Rupiah (`number_format`) agar konsisten dengan permintaan pengguna.
