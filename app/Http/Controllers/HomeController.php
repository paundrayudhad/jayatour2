<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Bundle;
use App\Models\Faq;
use App\Models\FlashSale;
use App\Models\Gallery;
use App\Models\Testimonial;
use App\Models\Tour;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function __invoke(): View
    {
        return view('pages.home', [
            'featuredTours' => Tour::with(['category', 'highlights'])
                ->where('is_featured', true)
                ->orderByDesc('created_at')
                ->take(6)
                ->get(),
            'bundles' => Bundle::with('tours')->latest()->take(4)->get(),
            'flashSales' => FlashSale::with('tour')->orderBy('start_date')->take(4)->get(),
            'testimonials' => Testimonial::latest()->take(3)->get(),
            'galleries' => Gallery::latest()->take(6)->get(),
            'blogs' => BlogPost::latest('published_at')->take(3)->get(),
            'faqs' => Faq::orderBy('created_at')->take(5)->get(),
        ]);
    }
}
