import { useState } from "react";
import { Star, MapPin, Users, MessageCircle, ArrowRight, Check, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const PaketBundling = () => {
  const [activeTab, setActiveTab] = useState("domestic");

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket bundling ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const bundlingPackages = {
    domestic: [
      {
        id: 1,
        title: "Complete Indonesia Campus Tour",
        image: templeImage,
        price: "Rp 6.500.000",
        originalPrice: "Rp 9.000.000",
        savings: "Rp 2.500.000",
        rating: 4.9,
        reviews: 156,
        participants: "10-15 siswa",
        universities: ["UI", "ITB", "UGM", "ITS", "Unpad", "Unair"],
        duration: "10D9N",
        highlights: [
          "6 universitas top Indonesia",
          "Campus tour & fakultas visit",
          "Dialog dengan mahasiswa aktif",
          "City tour & cultural experience",
          "Akomodasi hotel bintang 3",
          "Makan 3x sehari"
        ],
        badge: "BEST VALUE"
      },
      {
        id: 2,
        title: "Engineering Universities Bundle",
        image: japanImage,
        price: "Rp 5.200.000",
        originalPrice: "Rp 7.500.000",
        savings: "Rp 2.300.000",
        rating: 4.8,
        reviews: 123,
        participants: "12-16 siswa",
        universities: ["ITB", "ITS", "Telkom University", "Unpar"],
        duration: "7D6N",
        highlights: [
          "Focus on engineering programs",
          "Lab & innovation center visit",
          "Industry partnership tour",
          "Tech expo & workshop",
          "Career guidance session",
          "All-inclusive package"
        ],
        badge: "SPECIALIST"
      },
      {
        id: 3,
        title: "Medical & Health Sciences Tour",
        image: heroImage,
        price: "Rp 5.800.000",
        originalPrice: "Rp 8.200.000",
        savings: "Rp 2.400.000",
        rating: 4.9,
        reviews: 98,
        participants: "10-12 siswa",
        universities: ["FK UI", "FK UGM", "FK Unair", "FK Unpad"],
        duration: "8D7N",
        highlights: [
          "Medical faculty exclusive tour",
          "Hospital & lab facilities",
          "Meet with medical students",
          "Simulation center visit",
          "Scholarship information",
          "Complete accommodation"
        ],
        badge: "PREMIUM"
      },
      {
        id: 4,
        title: "Business & Economics Campus Bundle",
        image: singaporeImage,
        price: "Rp 4.800.000",
        originalPrice: "Rp 6.800.000",
        savings: "Rp 2.000.000",
        rating: 4.7,
        reviews: 145,
        participants: "12-18 siswa",
        universities: ["FEB UI", "FEB UGM", "SBM ITB", "FEB Unpad"],
        duration: "6D5N",
        highlights: [
          "Business school focus",
          "Entrepreneurship center visit",
          "Career fair participation",
          "Industry networking",
          "Campus facilities tour",
          "Full board included"
        ],
        badge: "POPULAR"
      }
    ],
    international: [
      {
        id: 5,
        title: "Singapore Universities Complete Tour",
        image: singaporeImage,
        price: "Rp 15.500.000",
        originalPrice: "Rp 22.000.000",
        savings: "Rp 6.500.000",
        rating: 4.9,
        reviews: 87,
        participants: "8-12 siswa",
        universities: ["NUS", "NTU", "SMU", "SIT"],
        duration: "6D5N",
        highlights: [
          "4 top Singapore universities",
          "International student life experience",
          "Scholarship info session",
          "City tour & attractions",
          "Hotel bintang 4",
          "All meals included"
        ],
        badge: "INTERNATIONAL"
      },
      {
        id: 6,
        title: "Malaysia Education Exploration",
        image: heroImage,
        price: "Rp 12.800.000",
        originalPrice: "Rp 18.000.000",
        savings: "Rp 5.200.000",
        rating: 4.7,
        reviews: 65,
        participants: "10-15 siswa",
        universities: ["UM", "UKM", "USM", "UPM"],
        duration: "7D6N",
        highlights: [
          "Leading Malaysian universities",
          "Affordable study abroad info",
          "Cultural immersion program",
          "Student accommodation tour",
          "Complete travel package",
          "Professional guidance"
        ],
        badge: "VALUE PACK"
      },
      {
        id: 7,
        title: "Japan Universities Study Tour",
        image: japanImage,
        price: "Rp 28.500.000",
        originalPrice: "Rp 38.000.000",
        savings: "Rp 9.500.000",
        rating: 4.8,
        reviews: 45,
        participants: "8-12 siswa",
        universities: ["University of Tokyo", "Kyoto University", "Osaka University"],
        duration: "10D9N",
        highlights: [
          "Top Japanese universities",
          "MEXT scholarship guidance",
          "Japanese language intro",
          "Cultural experience",
          "Premium accommodation",
          "Complete itinerary"
        ],
        badge: "EXCLUSIVE"
      },
      {
        id: 8,
        title: "Australia Education Journey",
        image: heroImage,
        price: "Rp 32.000.000",
        originalPrice: "Rp 45.000.000",
        savings: "Rp 13.000.000",
        rating: 4.9,
        reviews: 34,
        participants: "8-10 siswa",
        universities: ["University of Melbourne", "UNSW", "University of Sydney"],
        duration: "12D11N",
        highlights: [
          "Group of Eight universities",
          "Student visa information",
          "Work & study programs",
          "City exploration",
          "Luxury accommodation",
          "All-inclusive package"
        ],
        badge: "LUXURY"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              💰 Hemat hingga 40%
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Paket Bundling College Tour
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Kunjungi beberapa universitas sekaligus dengan harga lebih hemat. Paket lengkap untuk eksplorasi kampus maksimal!
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Hemat Lebih Banyak</h3>
            <p className="text-muted-foreground">Diskon hingga 40% dibanding booking terpisah</p>
          </Card>
          <Card className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lebih Banyak Pilihan</h3>
            <p className="text-muted-foreground">Kunjungi 3-6 universitas dalam satu trip</p>
          </Card>
          <Card className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Paket Lengkap</h3>
            <p className="text-muted-foreground">Akomodasi, transport, makan sudah termasuk</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="text-center mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-muted p-1">
              <TabsTrigger value="domestic" className="text-sm">
                Bundling Domestik ({bundlingPackages.domestic.length})
              </TabsTrigger>
              <TabsTrigger value="international" className="text-sm">
                Bundling Internasional ({bundlingPackages.international.length})
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(bundlingPackages).map(([category, packages]) => (
            <TabsContent key={category} value={category}>
              {/* 4 Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((pkg) => (
                  <Card key={pkg.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold">
                        {pkg.badge}
                      </Badge>
                      <Badge className="absolute top-3 right-3 bg-orange-500 text-white text-xs">
                        {pkg.duration}
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
                      
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-3">
                        <Users className="h-3 w-3" />
                        <span>{pkg.participants}</span>
                      </div>

                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1">
                          {pkg.universities.slice(0, 3).map((uni, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs px-1 py-0">
                              {uni}
                            </Badge>
                          ))}
                          {pkg.universities.length > 3 && (
                            <Badge variant="outline" className="text-xs px-1 py-0">
                              +{pkg.universities.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1 mb-3">
                        {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-1 text-xs">
                            <Check className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="text-xs text-muted-foreground line-through">{pkg.originalPrice}</div>
                            <div className="text-base font-bold text-primary">{pkg.price}</div>
                          </div>
                          <Badge variant="outline" className="text-success border-success text-xs">
                            Save {((parseFloat(pkg.originalPrice.replace(/[^0-9]/g, '')) - parseFloat(pkg.price.replace(/[^0-9]/g, ''))) / parseFloat(pkg.originalPrice.replace(/[^0-9]/g, '')) * 100).toFixed(0)}%
                          </Badge>
                        </div>
                        
                        <Button 
                          size="sm"
                          className="w-full bg-success hover:bg-success/90 text-success-foreground text-xs"
                          onClick={() => handleWhatsAppClick(pkg.title)}
                        >
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Custom Package CTA */}
        <div className="text-center mt-16 bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Butuh Paket Custom?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kami bisa membuat paket bundling khusus sesuai universitas pilihan dan budget Anda
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => handleWhatsAppClick("custom bundling package")}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Konsultasi Custom Package
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaketBundling;
