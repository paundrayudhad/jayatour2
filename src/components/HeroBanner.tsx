import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const HeroBanner = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const banners = [
    {
      id: 1,
      image: heroImage,
      title: { id: "Jelajahi Keajaiban Bali", en: "Explore the Wonders of Bali" },
      subtitle: { id: "Pantai eksotis, budaya kaya, dan pengalaman tak terlupakan", en: "Exotic beaches, rich culture, and unforgettable experiences" },
      cta: { id: "Mulai Petualangan", en: "Start Adventure" },
      link: "/paket-tour/bali"
    },
    {
      id: 2,
      image: templeImage,
      title: { id: "Warisan Budaya Yogyakarta", en: "Yogyakarta Cultural Heritage" },
      subtitle: { id: "Candi bersejarah, istana sultan, dan tradisi Jawa autentik", en: "Historic temples, sultan's palace, and authentic Javanese traditions" },
      cta: { id: "Jelajahi Sejarah", en: "Explore History" },
      link: "/paket-tour/yogyakarta"
    },
    {
      id: 3,
      image: japanImage,
      title: { id: "Sakura Jepang Musim Semi", en: "Japan Spring Cherry Blossoms" },
      subtitle: { id: "Bunga sakura, teknologi modern, dan tradisi kuno yang memesona", en: "Cherry blossoms, modern technology, and captivating ancient traditions" },
      cta: { id: "Nikmati Sakura", en: "Enjoy Sakura" },
      link: "/paket-tour/japan"
    },
    {
      id: 4,
      image: singaporeImage,
      title: { id: "Singapura Modern & Tradisional", en: "Modern & Traditional Singapore" },
      subtitle: { id: "Kota metropolitan, kuliner lezat, dan arsitektur futuristik", en: "Metropolitan city, delicious cuisine, and futuristic architecture" },
      cta: { id: "Rasakan Singapura", en: "Experience Singapore" },
      link: "/paket-tour/singapore"
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleWhatsAppClick = (packageName: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket ${packageName}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${banner.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 flex h-full items-center">
                  <div className="container px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-6 text-white">
                      <div className="space-y-4">
                        <h1 className="text-display font-display font-bold leading-tight">
                          {banner.title[t('language') as keyof typeof banner.title] || banner.title.id}
                        </h1>
                        <p className="text-body-lg font-body max-w-2xl leading-relaxed text-white/90">
                          {banner.subtitle[t('language') as keyof typeof banner.subtitle] || banner.subtitle.id}
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                        <Button
                          size="lg"
                          className="btn-premium group min-h-[3.5rem] px-8 text-lg font-semibold"
                          onClick={() => handleWhatsAppClick(banner.title.id)}
                        >
                          {banner.cta[t('language') as keyof typeof banner.cta] || banner.cta.id}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="glass-effect min-h-[3.5rem] border-white/30 px-8 text-lg font-semibold text-white hover:bg-white/20 hover:text-white"
                        >
                          Lihat Detail Paket
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      className={`h-3 w-3 rounded-full transition-all duration-300 ${
                        index === current 
                          ? "bg-white shadow-glow" 
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows */}
        <CarouselPrevious className="absolute left-4 z-20 h-12 w-12 border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20" />
        <CarouselNext className="absolute right-4 z-20 h-12 w-12 border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;