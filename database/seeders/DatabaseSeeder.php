<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Bundle;
use App\Models\Faq;
use App\Models\FlashSale;
use App\Models\Gallery;
use App\Models\Testimonial;
use App\Models\Tour;
use App\Models\TourCategory;
use App\Models\TourHighlight;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Paket Domestik Premium',
                'slug' => 'paket-domestik-premium',
                'type' => 'domestic',
                'description' => 'Eksplor destinasi terbaik Nusantara dengan kenyamanan kelas premium.',
                'hero_image' => 'images/domestic-hero.jpg',
            ],
            [
                'name' => 'Paket Internasional Eksklusif',
                'slug' => 'paket-internasional-eksklusif',
                'type' => 'international',
                'description' => 'Nikmati pengalaman liburan internasional terkurasi yang aman dan nyaman.',
                'hero_image' => 'images/international-hero.jpg',
            ],
        ];

        $categoryModels = collect($categories)->map(fn ($data) => TourCategory::create($data));

        $tours = [
            [
                'category_slug' => 'paket-domestik-premium',
                'title' => 'Eksplor Labuan Bajo 4D3N',
                'duration' => '4 Hari 3 Malam',
                'price' => 6800000,
                'start_city' => 'Jakarta',
                'excerpt' => 'Sailing Komodo dengan kapal phinisi premium dan pengalaman island hopping terbaik.',
                'description' => 'Nikmati sailing trip eksklusif ke Labuan Bajo dengan kapal phinisi terbaik. Paket sudah termasuk akomodasi premium, makanan, dokumentasi profesional, dan kunjungan ke spot favorit seperti Pulau Padar, Pink Beach, serta snorkeling di Manta Point.',
                'thumbnail' => 'images/tours/labuan-bajo.jpg',
                'is_featured' => true,
                'is_international' => false,
                'highlights' => [
                    ['title' => 'Pengalaman Sailing Kelas Premium', 'description' => 'Kapal phinisi eksklusif dengan private cabin ber-AC.'],
                    ['title' => 'Itinerary All-Inclusive', 'description' => 'Termasuk makan 3x sehari, coffee break, dan tour leader berpengalaman.'],
                    ['title' => 'Dokumentasi Profesional', 'description' => 'Free foto dan video drone di seluruh destinasi.'],
                ],
            ],
            [
                'category_slug' => 'paket-domestik-premium',
                'title' => 'Magical Bromo Sunrise',
                'duration' => '3 Hari 2 Malam',
                'price' => 4500000,
                'start_city' => 'Surabaya',
                'excerpt' => 'Melihat matahari terbit terbaik di Bukit Kingkong dan eksplorasi Bromo Tengger.',
                'description' => 'Perjalanan santai ke Bromo dengan jeep privat, penginapan nyaman di Kota Batu, dan kuliner lokal pilihan. Cocok untuk keluarga maupun rombongan kecil.',
                'thumbnail' => 'images/tours/bromo.jpg',
                'is_featured' => true,
                'is_international' => false,
                'highlights' => [
                    ['title' => 'Jeep Private', 'description' => 'Nikmati jeep privat tanpa digabung peserta lain.'],
                    ['title' => 'Premium Lodge', 'description' => 'Menginap di hotel bintang 4 di Batu Malang.'],
                ],
            ],
            [
                'category_slug' => 'paket-internasional-eksklusif',
                'title' => 'Winter Wonderland Hokkaido',
                'duration' => '6 Hari 5 Malam',
                'price' => 21800000,
                'start_city' => 'Jakarta',
                'excerpt' => 'Eksplorasi Hokkaido di musim dingin lengkap dengan festival salju dan onsen tradisional.',
                'description' => 'Jelajahi Sapporo, Otaru, dan Asahikawa dengan guide berbahasa Indonesia. Paket termasuk tiket pesawat PP, hotel bintang 4, JR pass, dan kuliner khas Jepang.',
                'thumbnail' => 'images/tours/hokkaido.jpg',
                'is_featured' => true,
                'is_international' => true,
                'highlights' => [
                    ['title' => 'Festival Salju Sapporo', 'description' => 'Menikmati kemeriahan pahatan salju kelas dunia.'],
                    ['title' => 'Pengalaman Onsen', 'description' => 'Relaksasi di pemandian air panas terbaik Hokkaido.'],
                    ['title' => 'Culinary Journey', 'description' => 'Mencicipi kepiting raja dan ramen legendaris.'],
                ],
            ],
            [
                'category_slug' => 'paket-internasional-eksklusif',
                'title' => 'Splendid Turkey Signature',
                'duration' => '7 Hari 5 Malam',
                'price' => 17800000,
                'start_city' => 'Jakarta',
                'excerpt' => 'Terbang balon udara di Cappadocia dan jelajahi Istanbul yang penuh sejarah.',
                'description' => 'Kunjungi Blue Mosque, Hagia Sophia, Pamukkale, hingga Cappadocia. Paket sudah termasuk tiket Turkish Airlines, visa assistance, dan shopping tour di Grand Bazaar.',
                'thumbnail' => 'images/tours/turkey.jpg',
                'is_featured' => true,
                'is_international' => true,
                'highlights' => [
                    ['title' => 'Hot Air Balloon', 'description' => 'Sunrise flight eksklusif dengan pilot tersertifikasi.'],
                    ['title' => 'Hotel Cave', 'description' => 'Menginap di cave hotel khas Cappadocia.'],
                ],
            ],
        ];

        $tourModels = collect($tours)->map(function ($data) use ($categoryModels) {
            $category = $categoryModels->firstWhere('slug', $data['category_slug']);
            $highlights = Arr::pull($data, 'highlights', []);

            $tour = Tour::create(array_merge($data, [
                'tour_category_id' => $category->id,
            ]));

            collect($highlights)->each(fn ($highlight) => TourHighlight::create([
                'tour_id' => $tour->id,
                ...$highlight,
            ]));

            return $tour;
        });

        $bundles = [
            [
                'title' => 'Jayatour Honeymoon Bliss',
                'slug' => 'jayatour-honeymoon-bliss',
                'description' => 'Paket bundling romantis Bali + Labuan Bajo termasuk private candle light dinner.',
                'price' => 12800000,
                'banner_image' => 'images/bundles/honeymoon.jpg',
                'tours' => ['Eksplor Labuan Bajo 4D3N'],
            ],
            [
                'title' => 'Signature Asia Experience',
                'slug' => 'signature-asia-experience',
                'description' => 'Gabungan Singapura - Jepang - Korea untuk family trip premium.',
                'price' => 32800000,
                'banner_image' => 'images/bundles/asia.jpg',
                'tours' => ['Winter Wonderland Hokkaido', 'Splendid Turkey Signature'],
            ],
        ];

        $bundles = collect($bundles)->map(function ($data) use ($tourModels) {
            $tourTitles = Arr::pull($data, 'tours', []);
            $bundle = Bundle::create($data);
            $bundle->tours()->sync(
                $tourModels->whereIn('title', $tourTitles)->pluck('id')->all()
            );

            return $bundle;
        });

        $flashSales = [
            [
                'tour' => 'Eksplor Labuan Bajo 4D3N',
                'title' => 'Flash Sale Sailing Komodo',
                'discount_percent' => 20,
                'start_date' => Carbon::now()->addDay(),
                'end_date' => Carbon::now()->addDays(10),
                'quota' => 12,
                'terms' => 'DP 50% dan pelunasan maksimal H-14 keberangkatan.',
            ],
            [
                'tour' => 'Splendid Turkey Signature',
                'title' => 'Early Bird Turkey Spring',
                'discount_percent' => 18,
                'start_date' => Carbon::now()->addDays(5),
                'end_date' => Carbon::now()->addDays(25),
                'quota' => 20,
                'terms' => 'Termasuk visa support dan PCR test jika dibutuhkan.',
            ],
        ];

        collect($flashSales)->each(function ($data) use ($tourModels) {
            $tour = $tourModels->firstWhere('title', $data['tour']);
            FlashSale::create([
                'tour_id' => $tour->id,
                'title' => $data['title'],
                'discount_percent' => $data['discount_percent'],
                'start_date' => $data['start_date'],
                'end_date' => $data['end_date'],
                'quota' => $data['quota'],
                'terms' => $data['terms'],
            ]);
        });

        $testimonials = [
            [
                'traveler_name' => 'Fajri & Tiara',
                'trip_name' => 'Honeymoon Labuan Bajo',
                'avatar' => 'images/testimonials/fajri-tiara.jpg',
                'rating' => 5,
                'testimonial' => 'Jayatour bantu semua detail honeymoon kami. Jadwal fleksibel, guide super ramah, makanannya enak. Sangat recommended!'
            ],
            [
                'traveler_name' => 'Novi Pratama',
                'trip_name' => 'Family Trip Jepang',
                'avatar' => 'images/testimonials/novi.jpg',
                'rating' => 5,
                'testimonial' => 'Mulai dari persiapan visa sampai itinerary semua dibantu. Anak-anak happy banget, kami juga nyaman karena ada tour leader yang fast response.'
            ],
            [
                'traveler_name' => 'Agung Wijaya',
                'trip_name' => 'Turkey Experience',
                'avatar' => 'images/testimonials/agung.jpg',
                'rating' => 4,
                'testimonial' => 'Pengalaman balon udara yang berkesan. Hotel dan kuliner pilihan Jayatour keren banget, pasti repeat order!'
            ],
        ];

        collect($testimonials)->each(fn ($data) => Testimonial::create($data));

        $faqs = [
            ['category' => 'Reservasi', 'question' => 'Bagaimana cara memesan paket Jayatour?', 'answer' => 'Anda dapat memesan melalui website, WhatsApp, atau langsung menghubungi travel consultant kami.'],
            ['category' => 'Pembayaran', 'question' => 'Apakah tersedia cicilan?', 'answer' => 'Kami menyediakan opsi cicilan 0% hingga 12 bulan bekerja sama dengan beberapa bank nasional.'],
            ['category' => 'Dokumen', 'question' => 'Apakah Jayatour membantu proses visa?', 'answer' => 'Ya, kami menyediakan layanan visa assistance termasuk penjadwalan, pengisian formulir, dan mock interview.'],
        ];

        collect($faqs)->each(fn ($data) => Faq::create($data));

        $blogs = [
            [
                'title' => 'Checklist Persiapan Liburan Ke Luar Negeri',
                'excerpt' => 'Pastikan liburan internasionalmu lancar dengan checklist dari travel expert Jayatour.',
                'body' => 'Mulai dari dokumen perjalanan, kebutuhan kesehatan, hingga budgeting, tim Jayatour merangkum semua hal penting yang perlu kamu siapkan. Kami juga memberikan tips menghemat biaya dan rekomendasi asuransi perjalanan terbaik.',
                'cover_image' => 'images/blogs/checklist.jpg',
                'author' => 'Jayatour Travel Expert',
                'published_at' => Carbon::now()->subDays(5),
            ],
            [
                'title' => '5 Destinasi Domestik Paling Hits 2025',
                'excerpt' => 'Labuan Bajo hingga Raja Ampat, berikut destinasi favorit pelanggan Jayatour tahun ini.',
                'body' => 'Indonesia menawarkan banyak destinasi spektakuler. Kami pilihkan 5 destinasi terbaik lengkap dengan rekomendasi itinerary dan estimasi budget agar Anda bisa langsung berangkat.',
                'cover_image' => 'images/blogs/destinasi.jpg',
                'author' => 'Jayatour Editorial Team',
                'published_at' => Carbon::now()->subDays(12),
            ],
        ];

        collect($blogs)->each(fn ($data) => BlogPost::create($data));

        $galleries = [
            ['title' => 'Sunrise Bukit Cinta', 'location' => 'Labuan Bajo', 'image_path' => 'images/gallery/labuan-bajo.jpg', 'description' => 'Panorama ikonik Labuan Bajo bersama peserta Jayatour.'],
            ['title' => 'Cave Hotel Experience', 'location' => 'Cappadocia', 'image_path' => 'images/gallery/cappadocia.jpg', 'description' => 'Menginap di cave hotel eksklusif selama program Turkey Signature.'],
            ['title' => 'Snow Festival Night', 'location' => 'Sapporo', 'image_path' => 'images/gallery/sapporo.jpg', 'description' => 'Keseruan peserta menikmati festival salju di Jepang.'],
        ];

        collect($galleries)->each(fn ($data) => Gallery::create($data));
    }
}
