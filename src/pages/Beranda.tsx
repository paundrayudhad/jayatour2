import { Link } from "react-router-dom";
import { GraduationCap, Star, Users, MessageCircle, MapPin, Calendar, ArrowRight, BookOpen, Globe, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";
import heroImage from "@/assets/hero-beach.jpg";

const Beranda = () => {
  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const collegeTourTypes = [
    {
      id: 1,
      title: "Open College Tour",
      icon: <Users className="h-8 w-8" />,
      description: "Kunjungi universitas top Indonesia dalam grup terorganisir",
      image: templeImage,
      price: "Mulai Rp 2.500.000",
      features: ["10-15 siswa", "4-5 universitas", "Campus tour", "Student talk"],
      link: "/paket-tour?type=open"
    },
    {
      id: 2,
      title: "Private Campus Tour",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Tour eksklusif ke universitas pilihan dengan panduan personal",
      image: heroImage,
      price: "Mulai Rp 1.800.000",
      features: ["5-8 siswa", "Custom selection", "Faculty meeting", "Lab visit"],
      link: "/paket-tour?type=private"
    },
    {
      id: 3,
      title: "Study Abroad Visit",
      icon: <Globe className="h-8 w-8" />,
      description: "Eksplorasi universitas luar negeri dan info beasiswa",
      image: singaporeImage,
      price: "Mulai Rp 8.500.000",
      features: ["International campus", "Scholarship info", "Student life", "Cultural immersion"],
      link: "/paket-tour?type=abroad"
    }
  ];

  const featuredPackages = [
    {
      id: 1,
      title: "Open College Tour - Top Universities Indonesia",
      image: templeImage,
      price: "Rp 2.500.000",
      rating: 4.9,
      reviews: 234,
      location: "Jakarta - Bandung - Yogyakarta",
      duration: "5 Hari 4 Malam",
      participants: "10-15 siswa",
      seats: "12/15 seats",
      universities: ["UI", "ITB", "UGM", "Unpad"]
    },
    {
      id: 2,
      title: "Study Abroad Visit - Singapore Universities",
      image: singaporeImage,
      price: "Rp 8.500.000",
      rating: 4.7,
      reviews: 89,
      location: "Singapore",
      duration: "4 Hari 3 Malam",
      participants: "8-12 siswa",
      seats: "8/12 seats",
      universities: ["NUS", "NTU", "SMU"]
    },
    {
      id: 3,
      title: "Open College Tour - Engineering Focus",
      image: japanImage,
      price: "Rp 3.200.000",
      rating: 4.8,
      reviews: 167,
      location: "Bandung - Surabaya",
      duration: "4 Hari 3 Malam",
      participants: "12-16 siswa",
      seats: "14/16 seats",
      universities: ["ITB", "ITS", "Unpar", "Telkom"]
    },
    {
      id: 4,
      title: "Private Campus Tour - Universitas Pilihan",
      image: heroImage,
      price: "Rp 1.800.000",
      rating: 4.8,
      reviews: 156,
      location: "Fleksibel sesuai pilihan",
      duration: "2-3 Hari",
      participants: "5-8 siswa",
      seats: "6/8 seats",
      universities: ["Custom Selection"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Expert Guidance",
      description: "Tour guide berpengalaman dengan pengetahuan mendalam tentang setiap universitas"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Trusted Partner",
      description: "Bekerjasama dengan 50+ universitas terbaik di Indonesia dan luar negeri"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "10,000+ Students",
      description: "Telah membantu ribuan siswa menemukan universitas impian mereka"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Complete Package",
      description: "Akomodasi, transport, dan aktivitas sudah termasuk dalam paket"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-4 py-2">
              #1 College Tour Platform in Indonesia
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Temukan Universitas <br />
              <span className="text-accent-light">Impian Anda</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Jelajahi kampus terbaik dengan program college tour terintegrasi dan panduan profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
                asChild
              >
                <Link to="/paket-tour">
                  Lihat Semua Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-semibold"
                onClick={() => handleWhatsAppClick("konsultasi college tour")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* College Tour Types */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pilih Program College Tour
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tiga jenis program yang dirancang sesuai kebutuhan eksplorasi kampus Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {collegeTourTypes.map((type) => (
              <Link key={type.id} to={type.link}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full border-2 hover:border-primary">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      {type.icon}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="space-y-2 mb-4">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{type.price}</span>
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages - 4 Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Program Terpopuler
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              College tour pilihan terbaik yang paling banyak diminati siswa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-orange-500 text-white text-xs">
                    {pkg.seats}
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{pkg.rating}</span>
                      <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 leading-tight">
                    {pkg.title}
                  </h3>
                  
                  <div className="space-y-1 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span className="line-clamp-1">{pkg.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {pkg.universities.map((uni, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-1 py-0">
                          {uni}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-base font-bold text-primary">{pkg.price}</div>
                    <Button 
                      size="sm"
                      className="bg-success hover:bg-success/90 text-success-foreground text-xs px-2 py-1"
                      onClick={() => handleWhatsAppClick(pkg.title)}
                    >
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/paket-tour">
                Lihat Semua Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mengapa Pilih JayaTour?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pengalaman terbaik untuk membantu Anda menemukan universitas impian
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Students Joined</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">Universities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8 Years</div>
              <div className="text-white/80">Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Siap Memulai Perjalanan ke Universitas Impian?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Konsultasi gratis dengan tim kami untuk menemukan program college tour yang tepat untuk Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto font-semibold"
                onClick={() => handleWhatsAppClick("konsultasi college tour")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat via WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 h-auto font-semibold"
                asChild
              >
                <Link to="/tentang/cara-booking">
                  Panduan Booking
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
