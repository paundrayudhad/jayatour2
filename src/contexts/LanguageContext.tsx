import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { id: 'Beranda', en: 'Home' },
  packages: { id: 'Paket Tour', en: 'Tour Packages' },
  allPackages: { id: 'Semua Paket', en: 'All Packages' },
  bundlingDeals: { id: 'Paket Bundling', en: 'Bundling Deals' },
  international: { id: 'Internasional', en: 'International' },
  specialPromo: { id: 'Promo Spesial', en: 'Special Promo' },
  flashSale: { id: 'Flash Sale Harga', en: 'Flash Sale Price' },
  popularDestinations: { id: 'Destinasi Populer', en: 'Popular Destinations' },
  experience: { id: 'Pengalaman', en: 'Experience' },
  gallery: { id: 'Galeri', en: 'Gallery' },
  testimonials: { id: 'Testimoni', en: 'Testimonials' },
  blog: { id: 'Artikel/Blog', en: 'Articles/Blog' },
  about: { id: 'Tentang', en: 'About' },
  profile: { id: 'Profil', en: 'Profile' },
  howToBook: { id: 'Cara Booking', en: 'How to Book' },
  faq: { id: 'FAQ', en: 'FAQ' },
  contact: { id: 'Kontak', en: 'Contact' },
  
  // Common
  bookNow: { id: 'Pesan Sekarang', en: 'Book Now' },
  seeAll: { id: 'Lihat Semua', en: 'See All' },
  learnMore: { id: 'Pelajari Lebih Lanjut', en: 'Learn More' },
  viewDetails: { id: 'Lihat Detail', en: 'View Details' },
  from: { id: 'Mulai dari', en: 'Starting from' },
  days: { id: 'Hari', en: 'Days' },
  nights: { id: 'Malam', en: 'Nights' },
  
  // WhatsApp
  whatsappButton: { id: 'Pesan via WhatsApp', en: 'Order via WhatsApp' },
  whatsappMessage: { 
    id: 'Halo! Saya tertarik dengan paket tour SabajayaTour. Bisa minta informasi lebih lanjut?', 
    en: 'Hello! I am interested in SabajayaTour travel packages. Could you provide more information?' 
  },
  
  // Hero section
  heroTitle: { 
    id: 'Jelajahi Dunia Bersama SabajayaTour', 
    en: 'Explore the World with SabajayaTour' 
  },
  heroSubtitle: { 
    id: 'Partner terpercaya untuk petualangan tak terlupakan ke destinasi impian Anda', 
    en: 'Your trusted partner for unforgettable adventures to your dream destinations' 
  },
  
  // Flash Sale
  flashSaleTitle: { id: '⚡ Flash Sale Hari Ini!', en: '⚡ Today\'s Flash Sale!' },
  flashSaleSubtitle: { 
    id: 'Diskon hingga 40% untuk paket pilihan terbatas!', 
    en: 'Up to 40% discount on selected limited packages!' 
  },
  hours: { id: 'Jam', en: 'Hours' },
  minutes: { id: 'Menit', en: 'Minutes' },
  seconds: { id: 'Detik', en: 'Seconds' },
  
  // Popular packages
  popularPackagesTitle: { id: 'Paket Terpopuler', en: 'Most Popular Packages' },
  popularPackagesSubtitle: { 
    id: 'Destinasi favorit yang paling banyak dipilih traveler Indonesia', 
    en: 'Favorite destinations most chosen by Indonesian travelers' 
  },
  
  // Trust section
  trustTitle: { id: 'Dipercaya 10,000+ Traveler', en: 'Trusted by 10,000+ Travelers' },
  trustSubtitle: { 
    id: 'Testimonial nyata dari pelanggan yang telah merasakan pengalaman tak terlupakan bersama kami', 
    en: 'Real testimonials from customers who have experienced unforgettable moments with us' 
  },
  happyCustomers: { id: 'Happy Customers', en: 'Happy Customers' },
  destinations: { id: 'Destinasi', en: 'Destinations' },
  experience: { id: 'Pengalaman', en: 'Experience' },
  rating: { id: 'Rating', en: 'Rating' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};