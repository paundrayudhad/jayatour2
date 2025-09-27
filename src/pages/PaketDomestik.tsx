import { MessageCircle, MapPin, Calendar, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";

const PaketDomestik = () => {
  const domesticPackages = [
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
      highlights: ["Pantai Kuta", "Tanah Lot", "Ubud", "Airport Transfer"],
      itinerary: [
        "Day 1: Arrival - Kuta Beach - Hotel Check-in",
        "Day 2: Tanah Lot Temple - Jatiluwih Rice Terrace",
        "Day 3: Ubud Monkey Forest - Tegallalang - Art Market",
        "Day 4: Shopping - Departure"
      ]
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
      highlights: ["Borobudur", "Prambanan", "Malioboro", "Sultan Palace"],
      itinerary: [
        "Day 1: Arrival - Sultan Palace - Malioboro Street",
        "Day 2: Borobudur Temple - Merapi Volcano Tour",
        "Day 3: Prambanan Temple - Shopping - Departure"
      ]
    },
    {
      id: 3,
      title: "Lombok Gili Island 4D3N",
      image: heroImage,
      price: "Rp 2.100.000",
      originalPrice: "Rp 2.600.000",
      rating: 4.5,
      reviews: 93,
      location: "Lombok, Indonesia",
      duration: "4 Hari 3 Malam",
      participants: "Min 2 orang",
      highlights: ["Gili Trawangan", "Snorkeling", "Pantai Pink", "Bukit Merese"],
      itinerary: [
        "Day 1: Arrival - Gili Trawangan - Snorkeling",
        "Day 2: Island Hopping - Gili Air - Gili Meno",
        "Day 3: Pink Beach - Bukit Merese - Sunset Point",
        "Day 4: Traditional Market - Departure"
      ]
    },
    {
      id: 4,
      title: "Bandung Highland 3D2N",
      image: templeImage,
      price: "Rp 1.200.000",
      originalPrice: "Rp 1.500.000",
      rating: 4.6,
      reviews: 156,
      location: "Bandung, Indonesia",
      duration: "3 Hari 2 Malam",
      participants: "Min 2 orang",
      highlights: ["Tangkuban Perahu", "Kawah Putih", "Factory Outlet", "Floating Market"],
      itinerary: [
        "Day 1: Arrival - Factory Outlet - Floating Market",
        "Day 2: Tangkuban Perahu - Hot Spring - Tea Plantation",
        "Day 3: Kawah Putih - Strawberry Farm - Departure"
      ]
    },
    {
      id: 5,
      title: "Raja Ampat Diving 5D4N",
      image: heroImage,
      price: "Rp 4.500.000",
      originalPrice: "Rp 5.200.000",
      rating: 4.9,
      reviews: 45,
      location: "Raja Ampat, Papua",
      duration: "5 Hari 4 Malam",
      participants: "Min 4 orang",
      highlights: ["Diving", "Pianemo", "Arborek Village", "Underwater Paradise"],
      itinerary: [
        "Day 1: Sorong - Transfer to Resort",
        "Day 2: Diving at Cape Kri - Manta Ridge",
        "Day 3: Pianemo Lagoon - Arborek Village",
        "Day 4: Diving at Sardine Reef - Sunset at Piaynemo",
        "Day 5: Transfer to Sorong - Departure"
      ]
    },
    {
      id: 6,
      title: "Komodo National Park 4D3N",
      image: templeImage,
      price: "Rp 3.200.000",
      originalPrice: "Rp 3.800.000",
      rating: 4.7,
      reviews: 78,
      location: "Labuan Bajo, NTT",
      duration: "4 Hari 3 Malam",
      participants: "Min 2 orang",
      highlights: ["Komodo Dragon", "Pink Beach", "Padar Island", "Snorkeling"],
      itinerary: [
        "Day 1: Arrival - Rinca Island - Komodo Dragon Trekking",
        "Day 2: Komodo Island - Pink Beach - Snorkeling",
        "Day 3: Padar Island Hiking - Manta Point Diving",
        "Day 4: Kanawa Island - Departure"
      ]
    }
  ];

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket domestik ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paket Tour Domestik
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi keindahan Nusantara dengan paket tour domestik terpilih ke destinasi eksotis Indonesia
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Destinasi Terpilih</h3>
            <p className="text-sm text-muted-foreground">Lokasi wisata terbaik di Indonesia</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Tour Guide Lokal</h3>
            <p className="text-sm text-muted-foreground">Pemandu wisata berpengalaman</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Fleksibel Schedule</h3>
            <p className="text-sm text-muted-foreground">Jadwal dapat disesuaikan</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
            <p className="text-sm text-muted-foreground">Bantuan kapan saja dibutuhkan</p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domesticPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-success text-success-foreground">
                  Domestik
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

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Highlight:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Itinerary:</h4>
                  <div className="space-y-1">
                    {pkg.itinerary.slice(0, 2).map((day, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground">
                        {day}
                      </p>
                    ))}
                    <p className="text-xs text-primary cursor-pointer">+ Lihat selengkapnya</p>
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
      </div>
    </div>
  );
};

export default PaketDomestik;