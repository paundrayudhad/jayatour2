import { useState } from "react";
import { Star, MapPin, Calendar, Users, MessageCircle, ArrowRight, Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const PaketBundling = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("family");

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket bundling ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const bundlingPackages = {
    family: [
      {
        id: 1,
        title: "Family Paradise Bali + Singapore",
        image: heroImage,
        duration: "8D7N",
        price: "Rp 18.500.000",
        originalPrice: "Rp 25.000.000",
        savings: "Rp 6.500.000",
        rating: 4.9,
        reviews: 156,
        participants: "4 Orang (2 Dewasa + 2 Anak)",
        destinations: ["Bali", "Singapore"],
        highlights: [
          "Hotel bintang 5 di kedua destinasi",
          "Tiket pesawat PP Jakarta-Bali-Singapore-Jakarta",
          "Universal Studios Singapore",
          "Bali Safari & Marine Park",
          "City tour lengkap kedua kota",
          "Makan 3x sehari selama tour"
        ],
        features: ["Family Room", "Kid Friendly", "Airport Transfer", "Tour Guide"],
        badge: "BEST SELLER"
      },
      {
        id: 2,
        title: "Keluarga Harmoni Yogya + Solo",
        image: templeImage,
        duration: "5D4N",
        price: "Rp 8.750.000",
        originalPrice: "Rp 12.000.000",
        savings: "Rp 3.250.000",
        rating: 4.8,
        reviews: 89,
        participants: "4 Orang (2 Dewasa + 2 Anak)",
        destinations: ["Yogyakarta", "Solo"],
        highlights: [
          "Hotel tradisional Jawa yang nyaman",
          "Kunjungan Borobudur & Prambanan",
          "Keraton Yogyakarta & Solo",
          "Wisata batik dan kerajinan tradisional",
          "Kuliner khas Jawa lengkap",
          "Transport AC nyaman"
        ],
        features: ["Cultural Experience", "Educational", "Kid Friendly", "Local Guide"],
        badge: "PROMO"
      }
    ],
    honeymoon: [
      {
        id: 3,
        title: "Romantic Japan Sakura & Korea",
        image: japanImage,
        duration: "10D9N",
        price: "Rp 35.000.000",
        originalPrice: "Rp 45.000.000",
        savings: "Rp 10.000.000",
        rating: 4.9,
        reviews: 234,
        participants: "2 Orang (Pasangan)",
        destinations: ["Tokyo", "Kyoto", "Seoul", "Busan"],
        highlights: [
          "Hotel romantis dengan view sakura",
          "Private dinner di Tokyo Tower",
          "Hanbok experience di Korea",
          "Cherry blossom viewing di Kyoto",
          "Jeju Island romantic getaway",
          "Couple spa treatment"
        ],
        features: ["Romantic", "Private Tour", "Luxury Hotel", "Honeymoon Special"],
        badge: "LUXURY"
      },
      {
        id: 4,
        title: "Honeymoon Paradise Maldives + Dubai",
        image: singaporeImage,
        duration: "8D7N",
        price: "Rp 42.000.000",
        originalPrice: "Rp 55.000.000",
        savings: "Rp 13.000.000",
        rating: 5.0,
        reviews: 78,
        participants: "2 Orang (Pasangan)",
        destinations: ["Maldives", "Dubai"],
        highlights: [
          "Overwater villa di Maldives",
          "Burj Khalifa & Dubai Mall",
          "Desert safari romantic dinner",
          "Snorkeling & diving Maldives",
          "Luxury shopping Dubai",
          "Couple massage beachfront"
        ],
        features: ["Ultra Luxury", "Private Villa", "All Inclusive", "VIP Treatment"],
        badge: "EXCLUSIVE"
      }
    ],
    group: [
      {
        id: 5,
        title: "Group Adventure Europe 4 Negara",
        image: heroImage,
        duration: "12D11N",
        price: "Rp 28.500.000",
        originalPrice: "Rp 38.000.000",
        savings: "Rp 9.500.000",
        rating: 4.7,
        reviews: 145,
        participants: "15-25 Orang",
        destinations: ["Paris", "Amsterdam", "Berlin", "Prague"],
        highlights: [
          "Menara Eiffel & Louvre Museum",
          "Keukenhof Tulip Garden",
          "Brandenburg Gate Berlin",
          "Prague Castle & Charles Bridge",
          "High-speed train antar negara",
          "Group dinner traditional"
        ],
        features: ["Group Discount", "Experienced Guide", "Comfortable Bus", "Group Activities"],
        badge: "GROUP SPECIAL"
      }
    ]
  };

  const TabButton = ({ value, label, count }: { value: string; label: string; count: number }) => (
    <TabsTrigger 
      value={value} 
      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300"
    >
      {label} ({count})
    </TabsTrigger>
  );

  return (
    <div className="min-h-screen bg-gradient-premium">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-display font-display font-bold mb-6">
              Paket Bundling Spesial
            </h1>
            <p className="text-body-lg mb-8 text-white/90">
              Hemat lebih banyak dengan paket bundling eksklusif kami. Kombinasi destinasi terbaik dengan harga terjangkau!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-2 text-lg font-semibold">
                💰 Hemat hingga 40%
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 text-lg font-semibold">
                🎯 Paket Terlengkap  
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Bundling Packages */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-hero font-display font-bold mb-4 text-foreground">
                Pilih Kategori Bundling
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Setiap kategori dirancang khusus untuk memberikan pengalaman terbaik sesuai kebutuhan Anda
              </p>
              
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted/50 p-1 rounded-full">
                <TabButton value="family" label="Keluarga" count={bundlingPackages.family.length} />
                <TabButton value="honeymoon" label="Honeymoon" count={bundlingPackages.honeymoon.length} />
                <TabButton value="group" label="Group" count={bundlingPackages.group.length} />
              </TabsList>
            </div>

            {Object.entries(bundlingPackages).map(([category, packages]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {packages.map((pkg) => (
                    <Card key={pkg.id} className="card-premium group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={pkg.image} 
                          alt={pkg.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={`font-semibold ${
                            pkg.badge === 'LUXURY' ? 'bg-accent text-accent-foreground' :
                            pkg.badge === 'EXCLUSIVE' ? 'bg-primary text-primary-foreground' :
                            pkg.badge === 'BEST SELLER' ? 'bg-destructive text-destructive-foreground' :
                            'bg-success text-success-foreground'
                          }`}>
                            {pkg.badge}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Button variant="ghost" size="sm" className="glass-effect p-2">
                            <Heart className="h-4 w-4 text-white hover:text-red-500 transition-colors" />
                          </Button>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur rounded-lg px-3 py-1">
                          <span className="text-white font-semibold">{pkg.duration}</span>
                        </div>
                      </div>
                      
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                              {pkg.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{pkg.rating}</span>
                                <span>({pkg.reviews} ulasan)</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span className="text-sm">{pkg.participants}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {pkg.destinations.map((dest, idx) => (
                              <Badge key={idx} variant="outline" className="border-primary/20 text-primary">
                                <MapPin className="h-3 w-3 mr-1" />
                                {dest}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {pkg.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-success" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-accent-light/50 rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-2">Yang Termasuk:</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                                <div key={idx} className="flex items-start space-x-2 text-sm">
                                  <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{highlight}</span>
                                </div>
                              ))}
                              {pkg.highlights.length > 3 && (
                                <div className="text-sm text-primary font-medium">
                                  +{pkg.highlights.length - 3} lainnya...
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-muted-foreground line-through">
                                  {pkg.originalPrice}
                                </span>
                                <Badge variant="outline" className="text-success border-success">
                                  Hemat {pkg.savings}
                                </Badge>
                              </div>
                              <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                              <div className="text-sm text-muted-foreground">per paket</div>
                            </div>
                            
                            <div className="text-right space-y-2">
                              <Button 
                                className="bg-success hover:bg-success/90 text-success-foreground w-full font-semibold"
                                onClick={() => handleWhatsAppClick(pkg.title)}
                              >
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Pesan Sekarang
                              </Button>
                              <Button variant="outline" size="sm" className="w-full">
                                Lihat Detail
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Bundling */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-hero font-display font-bold mb-4 text-foreground">
              Mengapa Pilih Paket Bundling?
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Dapatkan pengalaman travel terlengkap dengan nilai terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-luxury transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-luxury rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Hemat Lebih Banyak</h3>
              <p className="text-muted-foreground">Diskon hingga 40% dibanding booking terpisah</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-luxury transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Paket Lengkap</h3>
              <p className="text-muted-foreground">Semua sudah termasuk: hotel, transport, makan, tour</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-luxury transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-sunset rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Pengalaman Premium</h3>
              <p className="text-muted-foreground">Destinasi pilihan dengan fasilitas terbaik</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaketBundling;