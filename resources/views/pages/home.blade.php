<x-layouts.app :title="'Beranda'">
    <section class="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-white">
        <div class="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    Travel Agency Premium Indonesia
                </span>
                <h1 class="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
                    Rancang Liburan Impianmu Bersama Jayatour
                </h1>
                <p class="text-lg text-slate-600 max-w-xl">
                    Paket domestik dan internasional terkurasi, jadwal fleksibel, dan layanan travel consultant yang siap membantu 24/7.
                </p>
                <div class="flex flex-wrap gap-3">
                    <a href="#paket" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30">
                        Lihat Paket Tour
                    </a>
                    <a href="https://wa.me/6281234567890" class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold">
                        Konsultasi Gratis
                    </a>
                </div>
                <dl class="grid grid-cols-3 gap-6 pt-8">
                    <div>
                        <dt class="text-sm text-slate-500">Destinasi</dt>
                        <dd class="text-2xl font-semibold text-slate-900">40+</dd>
                    </div>
                    <div>
                        <dt class="text-sm text-slate-500">Repeat Order</dt>
                        <dd class="text-2xl font-semibold text-slate-900">92%</dd>
                    </div>
                    <div>
                        <dt class="text-sm text-slate-500">Pengalaman</dt>
                        <dd class="text-2xl font-semibold text-slate-900">30 th</dd>
                    </div>
                </dl>
            </div>
            <div class="relative">
                <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                    <img src="/images/hero-travel.svg" alt="Jayatour hero" class="object-cover w-full h-full">
                </div>
                <div class="absolute -bottom-10 -left-8 bg-white shadow-xl rounded-2xl p-5 max-w-xs">
                    <p class="text-sm font-semibold text-slate-700">Rata-rata rating pelanggan</p>
                    <div class="flex items-center gap-2 mt-2">
                        <div class="flex text-yellow-400 text-lg">★★★★★</div>
                        <span class="text-sm text-slate-500">4.9/5 dari 2.100+ ulasan</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="paket" class="container mx-auto px-4 py-20">
        <div class="flex items-center justify-between flex-wrap gap-4">
            <div>
                <h2 class="text-3xl font-semibold text-slate-900">Paket Tour Unggulan</h2>
                <p class="text-slate-600 mt-2">Didesain khusus untuk pengalaman perjalanan yang nyaman dan eksklusif.</p>
            </div>
            <div class="inline-flex gap-3">
                <span class="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">Domestik</span>
                <span class="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold">Internasional</span>
            </div>
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            @foreach($featuredTours as $tour)
                <article class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition shadow-primary/10">
                    <div class="relative">
                        <img src="/{{ $tour->thumbnail }}" alt="{{ $tour->title }}" class="w-full h-56 object-cover">
                        <span class="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold">
                            {{ $tour->category->type === 'international' ? 'Internasional' : 'Domestik' }}
                        </span>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <h3 class="text-xl font-semibold text-slate-900">{{ $tour->title }}</h3>
                            <span class="text-sm font-semibold text-primary">{{ $tour->duration }}</span>
                        </div>
                        <p class="text-sm text-slate-600">{{ $tour->excerpt }}</p>
                        <ul class="space-y-2 text-sm text-slate-500">
                            @foreach($tour->highlights->take(3) as $highlight)
                                <li class="flex items-start gap-2">
                                    <span class="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    <span>{{ $highlight->title }} &ndash; {{ $highlight->description }}</span>
                                </li>
                            @endforeach
                        </ul>
                        <div class="flex items-center justify-between pt-4">
                            <div>
                                <span class="text-xs uppercase tracking-wide text-slate-400">Mulai dari</span>
                                <p class="text-lg font-semibold text-slate-900">Rp{{ number_format($tour->price, 0, ',', '.') }}</p>
                            </div>
                            <a href="/tours/{{ $tour->slug }}" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">
                                Detail Paket
                            </a>
                        </div>
                    </div>
                </article>
            @endforeach
        </div>
    </section>

    <section id="bundling" class="bg-slate-900 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                    <span class="inline-flex px-4 py-1.5 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest">Bundling Exclusive</span>
                    <h2 class="mt-4 text-3xl font-semibold">Gabungan paket terbaik dengan harga istimewa.</h2>
                </div>
                <a href="/bundles" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold">Lihat Semua Bundling</a>
            </div>
            <div class="grid md:grid-cols-2 gap-6 mt-12">
                @foreach($bundles as $bundle)
                    <article class="p-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur">
                        <div class="flex items-start justify-between gap-4">
                            <div>
                                <h3 class="text-2xl font-semibold">{{ $bundle->title }}</h3>
                                <p class="mt-3 text-sm text-white/70">{{ $bundle->description }}</p>
                            </div>
                            <span class="inline-flex px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-semibold">Bundling</span>
                        </div>
                        <div class="mt-6 space-y-2 text-sm text-white/80">
                            @foreach($bundle->tours as $tour)
                                <div class="flex items-center gap-3">
                                    <span class="w-2 h-2 rounded-full bg-primary"></span>
                                    <span>{{ $tour->title }} &ndash; Rp{{ number_format($tour->price, 0, ',', '.') }}</span>
                                </div>
                            @endforeach
                        </div>
                        <div class="mt-8 flex items-center justify-between">
                            <div>
                                <span class="text-xs uppercase tracking-wide text-white/50">Mulai dari</span>
                                <p class="text-xl font-semibold">Rp{{ number_format($bundle->price, 0, ',', '.') }}</p>
                            </div>
                            <a href="/bundles/{{ $bundle->slug }}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold">
                                Ambil Promo
                            </a>
                        </div>
                    </article>
                @endforeach
            </div>
        </div>
    </section>

    <section id="flash-sale" class="container mx-auto px-4 py-20">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h2 class="text-3xl font-semibold text-slate-900">Flash Sale Sedang Berlangsung</h2>
                <p class="mt-2 text-slate-600">Kuota terbatas dengan potongan harga hingga 20%.</p>
            </div>
            <a href="/flash-sale" class="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Lihat semua promo &rarr;
            </a>
        </div>
        <div class="mt-10 grid md:grid-cols-2 gap-6">
            @foreach($flashSales as $sale)
                <article class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div class="flex items-center justify-between">
                        <h3 class="text-xl font-semibold text-slate-900">{{ $sale->title }}</h3>
                        <span class="inline-flex px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-semibold">Diskon {{ $sale->discount_percent }}%</span>
                    </div>
                    <p class="mt-3 text-sm text-slate-600">{{ $sale->tour->excerpt }}</p>
                    <dl class="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-500">
                        <div>
                            <dt class="text-slate-400 uppercase tracking-wide text-xs">Periode</dt>
                            <dd class="mt-1 font-medium text-slate-700">{{ $sale->start_date->translatedFormat('d M') }} - {{ $sale->end_date->translatedFormat('d M Y') }}</dd>
                        </div>
                        <div>
                            <dt class="text-slate-400 uppercase tracking-wide text-xs">Sisa Kuota</dt>
                            <dd class="mt-1 font-medium text-slate-700">{{ $sale->quota ?? 'Terbatas' }} pax</dd>
                        </div>
                    </dl>
                    <p class="mt-6 text-xs text-slate-400">{{ $sale->terms }}</p>
                    <div class="mt-6 flex items-center justify-between">
                        <div>
                            <span class="text-xs uppercase tracking-wide text-slate-400">Harga normal</span>
                            <p class="text-lg font-semibold text-slate-900">Rp{{ number_format($sale->tour->price, 0, ',', '.') }}</p>
                        </div>
                        <a href="/flash-sale/{{ $sale->id }}" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">
                            Ambil Sekarang
                        </a>
                    </div>
                </article>
            @endforeach
        </div>
    </section>

    <section id="testimoni" class="bg-slate-100 py-20">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 class="text-3xl font-semibold text-slate-900">Cerita Bahagia Dari Traveler</h2>
                    <p class="mt-2 text-slate-600">Lebih dari 50.000 pelanggan telah mempercayakan liburannya kepada Jayatour.</p>
                </div>
                <a href="/testimonials" class="inline-flex items-center gap-2 text-sm font-semibold text-primary">Lihat semua testimoni &rarr;</a>
            </div>
            <div class="grid lg:grid-cols-3 gap-6 mt-10">
                @foreach($testimonials as $testimonial)
                    <article class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-full overflow-hidden bg-slate-200">
                                <img src="/{{ $testimonial->avatar }}" alt="{{ $testimonial->traveler_name }}" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <h3 class="font-semibold text-slate-900">{{ $testimonial->traveler_name }}</h3>
                                <p class="text-xs text-slate-500 uppercase tracking-wide">{{ $testimonial->trip_name }}</p>
                            </div>
                        </div>
                        <div class="mt-4 flex text-yellow-400 text-lg">@for ($i = 0; $i < $testimonial->rating; $i++)★@endfor</div>
                        <p class="mt-4 text-sm text-slate-600">“{{ $testimonial->testimonial }}”</p>
                    </article>
                @endforeach
            </div>
        </div>
    </section>

    <section id="galeri" class="container mx-auto px-4 py-20">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h2 class="text-3xl font-semibold text-slate-900">Galeri Perjalanan</h2>
                <p class="mt-2 text-slate-600">Momen terbaik pelanggan Jayatour di berbagai destinasi dunia.</p>
            </div>
            <a href="/gallery" class="inline-flex items-center gap-2 text-sm font-semibold text-primary">Lihat semua galeri &rarr;</a>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mt-10">
            @foreach($galleries as $gallery)
                <figure class="rounded-3xl overflow-hidden shadow-sm">
                    <img src="/{{ $gallery->image_path }}" alt="{{ $gallery->title }}" class="w-full h-56 object-cover">
                    <figcaption class="bg-white p-5">
                        <h3 class="font-semibold text-slate-900">{{ $gallery->title }}</h3>
                        <p class="text-xs uppercase tracking-wide text-slate-400 mt-1">{{ $gallery->location }}</p>
                    </figcaption>
                </figure>
            @endforeach
        </div>
    </section>

    <section id="blog" class="bg-white py-20">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 class="text-3xl font-semibold text-slate-900">Insight Perjalanan dari Travel Expert</h2>
                    <p class="mt-2 text-slate-600">Tips dan inspirasi terbaru untuk perjalanan domestik dan internasional.</p>
                </div>
                <a href="/blog" class="inline-flex items-center gap-2 text-sm font-semibold text-primary">Baca semua artikel &rarr;</a>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                @foreach($blogs as $post)
                    <article class="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
                        <img src="/{{ $post->cover_image }}" alt="{{ $post->title }}" class="w-full h-48 object-cover">
                        <div class="p-6 space-y-3">
                            <p class="text-xs text-primary font-semibold uppercase tracking-wide">{{ $post->author }}</p>
                            <h3 class="text-xl font-semibold text-slate-900">{{ $post->title }}</h3>
                            <p class="text-sm text-slate-600">{{ $post->excerpt }}</p>
                            <div class="flex items-center justify-between text-xs text-slate-400">
                                <span>{{ optional($post->published_at)->translatedFormat('d M Y') }}</span>
                                <a href="/blog/{{ $post->slug }}" class="inline-flex items-center gap-2 text-primary font-semibold">Baca selengkapnya</a>
                            </div>
                        </div>
                    </article>
                @endforeach
            </div>
        </div>
    </section>

    <section id="faq" class="container mx-auto px-4 py-20">
        <div class="grid lg:grid-cols-2 gap-12">
            <div>
                <span class="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest">FAQ</span>
                <h2 class="mt-4 text-3xl font-semibold text-slate-900">Pertanyaan yang sering ditanyakan</h2>
                <p class="mt-3 text-slate-600">Tim travel consultant kami siap membantu kapanpun kamu butuh panduan.</p>
                <a href="https://wa.me/6281234567890" class="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary text-white font-semibold">
                    Hubungi Travel Consultant
                </a>
            </div>
            <div class="space-y-4">
                @foreach($faqs as $faq)
                    <details class="bg-white border border-slate-200 rounded-2xl p-5 group" {{ $loop->first ? 'open' : '' }}>
                        <summary class="flex items-center justify-between cursor-pointer">
                            <div>
                                <p class="text-xs uppercase tracking-wide text-primary">{{ $faq->category }}</p>
                                <h3 class="text-base font-semibold text-slate-900">{{ $faq->question }}</h3>
                            </div>
                            <span class="text-primary text-xl">+</span>
                        </summary>
                        <p class="mt-3 text-sm text-slate-600 leading-relaxed">{{ $faq->answer }}</p>
                    </details>
                @endforeach
            </div>
        </div>
    </section>

    <section class="container mx-auto px-4 pb-24">
        <div class="rounded-3xl bg-gradient-to-r from-primary to-indigo-600 text-white px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
                <h2 class="text-3xl font-semibold">Siap memulai perjalananmu?</h2>
                <p class="mt-3 text-white/80">Konsultasikan itinerary impianmu dan dapatkan rekomendasi paket terbaik dalam 15 menit.</p>
            </div>
            <a href="https://wa.me/6281234567890" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold">Jadwalkan Konsultasi</a>
        </div>
    </section>
</x-layouts.app>
