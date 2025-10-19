<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} - {{ $title ?? 'Jayatour Travel' }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="stylesheet" href="https://fonts.bunny.net/css?family=plus-jakarta-sans:400,500,600,700">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans text-slate-900 bg-slate-50">
    <div class="min-h-screen flex flex-col">
        <header class="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
            <div class="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="/" class="flex items-center gap-2">
                    <span class="text-primary font-semibold text-xl">Jayatour</span>
                </a>
                <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a class="hover:text-primary" href="#paket">Paket Tour</a>
                    <a class="hover:text-primary" href="#bundling">Bundling</a>
                    <a class="hover:text-primary" href="#flash-sale">Flash Sale</a>
                    <a class="hover:text-primary" href="#testimoni">Testimoni</a>
                    <a class="hover:text-primary" href="#faq">FAQ</a>
                </nav>
                <div class="flex items-center gap-3">
                    <a href="tel:+62315711222" class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary text-sm font-semibold">
                        Hubungi Kami
                    </a>
                    <button type="button" class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>

        <main class="flex-1">
            {{ $slot }}
        </main>

        <footer class="bg-slate-900 text-white mt-16">
            <div class="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
                <div class="space-y-3">
                    <h3 class="text-lg font-semibold">Jayatour Travel</h3>
                    <p class="text-sm text-slate-300">Partner liburan terpercaya sejak 1993. Kami menghadirkan pengalaman perjalanan eksklusif yang aman dan berkesan.</p>
                </div>
                <div>
                    <h4 class="text-sm font-semibold uppercase tracking-wide text-slate-400">Kantor Pusat</h4>
                    <p class="mt-3 text-sm text-slate-200">Jl. Basuki Rahmat No. 12, Surabaya<br> Jawa Timur 60271</p>
                </div>
                <div>
                    <h4 class="text-sm font-semibold uppercase tracking-wide text-slate-400">Kontak</h4>
                    <ul class="mt-3 space-y-2 text-sm text-slate-200">
                        <li>Telp: (031) 5711 222</li>
                        <li>WhatsApp: +62 812-3456-7890</li>
                        <li>Email: hello@jayatour.co.id</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-semibold uppercase tracking-wide text-slate-400">Ikuti Kami</h4>
                    <div class="mt-3 flex gap-3">
                        <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80">
                            <span class="sr-only">Instagram</span>
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
                        </a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80">
                            <span class="sr-only">TikTok</span>
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 3.004A4.98 4.98 0 0 0 18 7c-.73-.002-1.453-.145-2.133-.422v6.42A4.998 4.998 0 1 1 11 8c.17 0 .339.01.506.028v3.039a2 2 0 1 0 1.494 1.928V2.003h3z"/></svg>
                        </a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80">
                            <span class="sr-only">YouTube</span>
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.751 2.751 0 0 0-1.936-1.947C18.052 5.5 12 5.5 12 5.5s-6.052 0-7.864.554A2.751 2.751 0 0 0 2.2 8.001 29.97 29.97 0 0 0 2 12a29.97 29.97 0 0 0 .2 3.999 2.751 2.751 0 0 0 1.936 1.947C5.948 18.5 12 18.5 12 18.5s6.052 0 7.864-.554a2.751 2.751 0 0 0 1.936-1.947A29.97 29.97 0 0 0 22 12a29.97 29.97 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-white/10 py-4 text-center text-sm text-slate-400">&copy; {{ date('Y') }} Jayatour Travel. All rights reserved.</div>
        </footer>
    </div>
</body>
</html>
