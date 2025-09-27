import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Star, Users, MessageCircle, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const Beranda = () => {
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

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const popularPackages = [
    {
      id: 1,
      title: "Bali Paradise 4D3N",
      image: heroImage,
      price: "Rp 2.850.000",
      originalPrice: "Rp 3.500.000",
      rating: 4.8,
      reviews: 124,
      location: "Bali, Indonesia",
      duration: "4 Hari 3 Malam",
      highlights: ["Pantai Kuta", "Tanah Lot", "Ubud", "Airport Transfer"]
    },
    {
      id: 2,
      title: "Yogyakarta Heritage 3D2N",
      image: templeImage,
      price: "Rp 1.650.000",
      originalPrice: "Rp 2.100.000",
      rating: 4.9,
      reviews: 89,
      location: "Yogyakarta, Indonesia",
      duration: "3 Hari 2 Malam",
      highlights: ["Borobudur", "Prambanan", "Malioboro", "Sultan Palace"]
    },
    {
      id: 3,
      title: "Japan Cherry Blossom 7D6N",
      image: japanImage,
      price: "Rp 15.500.000",
      originalPrice: "Rp 18.000.000",
      rating: 4.7,
      reviews: 67,
      location: "Tokyo-Osaka, Japan",
      duration: "7 Hari 6 Malam",
      highlights: ["Mount Fuji", "Tokyo Disneyland", "Kyoto Temple", "Osaka Castle"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Wijaya",
      location: "Jakarta",
      rating: 5,
      text: "Pelayanan SabajayaTour sangat memuaskan! Tour guide ramah dan profesional. Pasti akan booking lagi!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b693?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Budi Santoso",
      location: "Surabaya",
      rating: 5,
      text: "Paket Bali nya lengkap banget, hotel bagus, transport nyaman. Recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Chen",
      location: "Medan",
      rating: 5,
      text: "Trip ke Jepang bareng SabajayaTour unforgettable! Detail itinerary nya perfect.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Jelajahi Dunia Bersama 
            <span className="block text-primary-glow">SabajayaTour</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Partner terpercaya untuk petualangan tak terlupakan ke destinasi impian Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={() => handleWhatsAppClick("tour pilihan")}
            >
              Pesan Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
              asChild
            >
              <Link to="/paket-tour">Lihat Semua Paket</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-16 bg-gradient-sunset">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ⚡ Flash Sale Hari Ini!
            </h2>
            <p className="text-white/90 text-lg mb-6">Diskon hingga 40% untuk paket pilihan terbatas!</p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-2xl font-bold text-white">{flashSaleTime.hours.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">Jam</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-2xl font-bold text-white">{flashSaleTime.minutes.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">Menit</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-2xl font-bold text-white">{flashSaleTime.seconds.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">Detik</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link to="/paket-tour/flash-sale">Lihat Flash Sale</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Paket Terpopuler
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Destinasi favorit yang paling banyak dipilih traveler Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                    PROMO
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-sm text-muted-foreground">({pkg.reviews} ulasan)</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.title}</h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    </div>
                    <Button 
                      className="bg-success hover:bg-success/90 text-success-foreground"
                      onClick={() => handleWhatsAppClick(pkg.title)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Pesan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/paket-tour">
                Lihat Semua Paket
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dipercaya 10,000+ Traveler
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Testimonial nyata dari pelanggan yang telah merasakan pengalaman tak terlupakan bersama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Destinasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">9 Tahun</div>
              <div className="text-muted-foreground">Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Rating</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/pengalaman/testimoni">
                Lihat Semua Testimoni
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;