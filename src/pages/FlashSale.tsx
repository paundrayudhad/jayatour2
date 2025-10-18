import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Calendar, Users, Star, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const FlashSale = () => {
  const [flashSaleTime, setFlashSaleTime] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Flash sale countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setFlashSaleTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashSalePackages = [
    {
      id: 1,
      title: "Bali Paradise 4D3N",
      image: heroImage,
      price: "Rp 2.150.000",
      originalPrice: "Rp 3.500.000",
      discount: "39%",
      rating: 4.8,
      reviews: 124,
      location: "Bali, Indonesia",
      duration: "4 Hari 3 Malam",
      participants: "Min 2 orang",
      sold: 73,
      total: 100,
      highlights: ["Pantai Kuta", "Tanah Lot", "Ubud", "Airport Transfer"],
      timeLeft: "23:45:30"
    },
    {
      id: 2,
      title: "Singapore Malaysia 5D4N",
      image: singaporeImage,
      price: "Rp 3.200.000",
      originalPrice: "Rp 5.000.000",
      discount: "36%",
      rating: 4.6,
      reviews: 156,
      location: "Singapore-Malaysia",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      sold: 45,
      total: 80,
      highlights: ["Marina Bay Sands", "Universal Studios", "Genting Highland", "KL Twin Tower"],
      timeLeft: "23:45:30"
    },
    {
      id: 3,
      title: "Japan Cherry Blossom 7D6N",
      image: japanImage,
      price: "Rp 12.800.000",
      originalPrice: "Rp 18.000.000",
      discount: "29%",
      rating: 4.7,
      reviews: 67,
      location: "Tokyo-Osaka, Japan",
      duration: "7 Hari 6 Malam",
      participants: "Min 2 orang",
      sold: 28,
      total: 50,
      highlights: ["Mount Fuji", "Tokyo Disneyland", "Kyoto Temple", "Osaka Castle"],
      timeLeft: "23:45:30"
    },
    {
      id: 4,
      title: "Yogyakarta Heritage 3D2N",
      image: templeImage,
      price: "Rp 1.200.000",
      originalPrice: "Rp 2.100.000",
      discount: "43%",
      rating: 4.9,
      reviews: 89,
      location: "Yogyakarta, Indonesia",
      duration: "3 Hari 2 Malam",
      participants: "Min 2 orang",
      sold: 89,
      total: 100,
      highlights: ["Borobudur", "Prambanan", "Malioboro", "Sultan Palace"],
      timeLeft: "23:45:30"
    },
    {
      id: 5,
      title: "Bangkok Pattaya 5D4N",
      image: singaporeImage,
      price: "Rp 2.800.000",
      originalPrice: "Rp 4.500.000",
      discount: "38%",
      rating: 4.4,
      reviews: 78,
      location: "Bangkok-Pattaya, Thailand",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      sold: 56,
      total: 75,
      highlights: ["Grand Palace", "Floating Market", "Coral Island", "Nong Nooch Garden"],
      timeLeft: "23:45:30"
    },
    {
      id: 6,
      title: "Lombok Gili Island 4D3N",
      image: heroImage,
      price: "Rp 1.650.000",
      originalPrice: "Rp 2.600.000",
      discount: "37%",
      rating: 4.5,
      reviews: 93,
      location: "Lombok, Indonesia",
      duration: "4 Hari 3 Malam",
      participants: "Min 2 orang",
      sold: 67,
      total: 90,
      highlights: ["Gili Trawangan", "Snorkeling", "Pantai Pink", "Bukit Merese"],
      timeLeft: "23:45:30"
    }
  ];

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan Flash Sale ${paket}. Bisa langsung booking sekarang?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Flash Sale Header */}
      <section className="py-16 bg-gradient-sunset">
        <div className="container px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-white animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                FLASH SALE HARI INI!
              </h1>
              <Zap className="h-8 w-8 text-white animate-pulse" />
            </div>
            <p className="text-white/90 text-lg mb-8">
              Diskon hingga 43% untuk paket pilihan terbatas! Buruan sebelum kehabisan!
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-3xl font-bold text-white">{flashSaleTime.hours.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">JAM</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-3xl font-bold text-white">{flashSaleTime.minutes.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">MENIT</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-3xl font-bold text-white">{flashSaleTime.seconds.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">DETIK</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-4 inline-block">
              <p className="text-white font-medium">⏰ Flash Sale berakhir dalam {flashSaleTime.hours}j {flashSaleTime.minutes}m {flashSaleTime.seconds}d</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12">
        {/* Warning Alert */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-destructive" />
            <p className="text-destructive font-medium">
              Stok terbatas! Beberapa paket sudah hampir sold out. Pesan sekarang sebelum terlambat!
            </p>
          </div>
        </div>

        {/* Flash Sale Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-success/10 p-6 rounded-lg">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Diskon Hingga 43%</h3>
            <p className="text-sm text-muted-foreground">Potongan harga terbesar tahun ini!</p>
          </div>
          <div className="text-center bg-primary/10 p-6 rounded-lg">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Waktu Terbatas</h3>
            <p className="text-sm text-muted-foreground">Hanya berlaku hari ini sampai jam 24:00</p>
          </div>
          <div className="text-center bg-accent/10 p-6 rounded-lg">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Stok Terbatas</h3>
            <p className="text-sm text-muted-foreground">Maksimal pembelian sesuai stok tersedia</p>
          </div>
        </div>

        {/* Flash Sale Packages - 4 Grid Modern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSalePackages.map((pkg) => (
            <Link key={pkg.id} to={`/paket-tour/flash-sale/${pkg.id}`} className="block">
              <Card className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group relative h-full">
                {/* Flash Sale Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-gradient-to-r from-destructive to-orange-600 text-white font-bold text-xs shadow-lg animate-pulse">
                    <Zap className="h-3 w-3 mr-1" />
                    -{pkg.discount}
                  </Badge>
                </div>
                
                {/* Stock Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="outline" className="bg-background/95 backdrop-blur text-foreground text-xs font-bold border-2">
                    {pkg.total - pkg.sold} left
                  </Badge>
                </div>

                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{pkg.rating}</span>
                      <span className="text-xs opacity-90">({pkg.reviews})</span>
                    </div>
                    <Badge className="bg-white/20 backdrop-blur text-white border-0 text-xs">
                      {pkg.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <h3 className="text-base font-bold text-foreground mb-3 line-clamp-2 leading-tight min-h-[3rem]">
                    {pkg.title}
                  </h3>
                  
                  <div className="space-y-2 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="line-clamp-1">{pkg.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-4">
                    <Progress value={(pkg.sold / pkg.total) * 100} className="h-2 mb-2" />
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-destructive font-bold">
                        {pkg.sold > pkg.total * 0.8 ? "⚠️ Hampir habis!" : `${pkg.total - pkg.sold} tersisa`}
                      </p>
                      <span className="text-xs text-muted-foreground">{pkg.sold} terjual</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground line-through block mb-0.5">{pkg.originalPrice}</span>
                        <div className="text-lg font-bold text-destructive">{pkg.price}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-success border-success text-xs font-bold">
                          Hemat {pkg.discount}
                        </Badge>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm"
                      className="w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success/70 text-success-foreground text-xs font-semibold shadow-md"
                      onClick={(e) => {
                        e.preventDefault();
                        handleWhatsAppClick(pkg.title);
                      }}
                    >
                      <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                      Lihat Detail & Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Urgency CTA */}
        <div className="text-center mt-16 bg-gradient-ocean p-8 rounded-lg text-white">
          <h3 className="text-3xl font-bold mb-4">
            Jangan Sampai Menyesal! 😭
          </h3>
          <p className="text-lg mb-6">
            Flash Sale ini hanya berlaku HARI INI. Besok harga sudah kembali normal!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8"
              onClick={() => handleWhatsAppClick("flash sale terbaik")}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat Sekarang - Gratis Konsultasi!
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8"
            >
              <Clock className="h-5 w-5 mr-2" />
              Lihat Semua Flash Sale
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;