import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Users, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const PaketTour = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [destination, setDestination] = useState("all");
  const [duration, setDuration] = useState("all");

  const allPackages = [
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
      participants: "Min 2 orang",
      category: "domestik",
      highlights: ["Pantai Kuta", "Tanah Lot", "Ubud", "Airport Transfer"],
      description: "Nikmati keindahan Pulau Dewata dengan paket lengkap mencakup hotel bintang 4, transport AC, dan tour guide berpengalaman."
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
      participants: "Min 2 orang",
      category: "domestik",
      highlights: ["Borobudur", "Prambanan", "Malioboro", "Sultan Palace"],
      description: "Jelajahi warisan budaya Yogyakarta dengan mengunjungi candi-candi bersejarah dan wisata kuliner khas Jogja."
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
      participants: "Min 2 orang",
      category: "internasional",
      highlights: ["Mount Fuji", "Tokyo Disneyland", "Kyoto Temple", "Osaka Castle"],
      description: "Rasakan pengalaman musim semi di Jepang dengan pemandangan sakura yang memukau di berbagai destinasi ikonik."
    },
    {
      id: 4,
      title: "Singapore Malaysia 5D4N",
      image: singaporeImage,
      price: "Rp 4.200.000",
      originalPrice: "Rp 5.000.000",
      rating: 4.6,
      reviews: 156,
      location: "Singapore-Malaysia",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      category: "internasional",
      highlights: ["Marina Bay Sands", "Universal Studios", "Genting Highland", "KL Twin Tower"],
      description: "Kombinasi wisata kota modern Singapore dan Malaysia dengan atraksi menarik dan kuliner yang lezat."
    },
    {
      id: 5,
      title: "Lombok Gili Island 4D3N",
      image: heroImage,
      price: "Rp 2.100.000",
      originalPrice: "Rp 2.600.000",
      rating: 4.5,
      reviews: 93,
      location: "Lombok, Indonesia",
      duration: "4 Hari 3 Malam",
      participants: "Min 2 orang",
      category: "domestik",
      highlights: ["Gili Trawangan", "Snorkeling", "Pantai Pink", "Bukit Merese"],
      description: "Eksplorasi keindahan Lombok dan Gili Island dengan aktivitas snorkeling dan pemandangan sunset yang menakjubkan."
    },
    {
      id: 6,
      title: "Bangkok Pattaya 5D4N",
      image: singaporeImage,
      price: "Rp 3.800.000",
      originalPrice: "Rp 4.500.000",
      rating: 4.4,
      reviews: 78,
      location: "Bangkok-Pattaya, Thailand",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      category: "internasional",
      highlights: ["Grand Palace", "Floating Market", "Coral Island", "Nong Nooch Garden"],
      description: "Jelajahi keindahan Thailand dari Bangkok yang megah hingga pantai eksotis Pattaya dengan berbagai atraksi menarik."
    }
  ];

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const filteredPackages = allPackages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDestination = destination === "all" || pkg.category === destination;
    
    return matchesSearch && matchesDestination;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Semua Paket Tour
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan destinasi impian Anda dari koleksi lengkap paket tour domestik dan internasional
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Cari destinasi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Destinasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Destinasi</SelectItem>
                  <SelectItem value="domestik">Domestik</SelectItem>
                  <SelectItem value="internasional">Internasional</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Range Harga" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Harga</SelectItem>
                  <SelectItem value="low">&lt; Rp 3.000.000</SelectItem>
                  <SelectItem value="mid">Rp 3.000.000 - Rp 10.000.000</SelectItem>
                  <SelectItem value="high">&gt; Rp 10.000.000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Durasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Durasi</SelectItem>
                  <SelectItem value="short">1-3 Hari</SelectItem>
                  <SelectItem value="medium">4-6 Hari</SelectItem>
                  <SelectItem value="long">7+ Hari</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Menampilkan {filteredPackages.length} paket tour
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {pkg.category === 'domestik' ? 'Domestik' : 'Internasional'}
                </Badge>
                {pkg.originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                    Promo
                  </Badge>
                )}
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
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{pkg.participants}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {pkg.description}
                </p>

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
                    {pkg.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                    )}
                    <div className="text-xl font-bold text-primary">{pkg.price}</div>
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

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Tidak ada paket tour yang sesuai dengan filter Anda.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setDestination("all");
                setPriceRange("all");
                setDuration("all");
              }}
            >
              Reset Filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaketTour;