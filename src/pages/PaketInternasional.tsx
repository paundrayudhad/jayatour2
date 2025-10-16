import { MessageCircle, MapPin, Calendar, Users, Star, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const PaketInternasional = () => {
  const internationalPackages = [
    {
      id: 1,
      title: "Japan Cherry Blossom 7D6N",
      image: japanImage,
      price: "Rp 15.500.000",
      originalPrice: "Rp 18.000.000",
      rating: 4.7,
      reviews: 67,
      location: "Tokyo-Osaka, Japan",
      duration: "7 Hari 6 Malam",
      participants: "Min 2 orang",
      highlights: ["Mount Fuji", "Tokyo Disneyland", "Kyoto Temple", "Osaka Castle"],
      itinerary: [
        "Day 1: Jakarta - Tokyo - Asakusa Temple",
        "Day 2: Tokyo Disneyland - Shibuya Crossing",
        "Day 3: Mount Fuji - Hakone - Lake Ashi",
        "Day 4: Tokyo - Kyoto - Kiyomizu Temple",
        "Day 5: Kyoto - Osaka - Osaka Castle",
        "Day 6: Universal Studios Japan",
        "Day 7: Shopping - Departure"
      ],
      includes: ["Tiket pesawat PP", "Hotel bintang 4", "Visa Jepang", "Tour guide", "Makan sesuai program"]
    },
    {
      id: 2,
      title: "Singapore Malaysia 5D4N",
      image: singaporeImage,
      price: "Rp 4.200.000",
      originalPrice: "Rp 5.000.000",
      rating: 4.6,
      reviews: 156,
      location: "Singapore-Malaysia",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      highlights: ["Marina Bay Sands", "Universal Studios", "Genting Highland", "KL Twin Tower"],
      itinerary: [
        "Day 1: Jakarta - Singapore - Marina Bay",
        "Day 2: Universal Studios - Sentosa Island",
        "Day 3: Singapore - Kuala Lumpur - Twin Tower",
        "Day 4: Genting Highland - Cameron Highland",
        "Day 5: Shopping - Departure"
      ],
      includes: ["Tiket pesawat PP", "Hotel bintang 4", "Transport AC", "Tour guide", "Makan sesuai program"]
    },
    {
      id: 3,
      title: "Bangkok Pattaya 5D4N",
      image: singaporeImage,
      price: "Rp 3.800.000",
      originalPrice: "Rp 4.500.000",
      rating: 4.4,
      reviews: 78,
      location: "Bangkok-Pattaya, Thailand",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      highlights: ["Grand Palace", "Floating Market", "Coral Island", "Nong Nooch Garden"],
      itinerary: [
        "Day 1: Jakarta - Bangkok - Grand Palace",
        "Day 2: Floating Market - Safari World",
        "Day 3: Bangkok - Pattaya - Coral Island",
        "Day 4: Nong Nooch Garden - Alcazar Show",
        "Day 5: Shopping - Departure"
      ],
      includes: ["Tiket pesawat PP", "Hotel bintang 3", "Transport AC", "Tour guide", "Makan sesuai program"]
    },
    {
      id: 4,
      title: "Europe Highlights 10D9N",
      image: japanImage,
      price: "Rp 32.500.000",
      originalPrice: "Rp 38.000.000",
      rating: 4.8,
      reviews: 34,
      location: "Paris-Rome-Swiss",
      duration: "10 Hari 9 Malam",
      participants: "Min 15 orang",
      highlights: ["Eiffel Tower", "Colosseum", "Swiss Alps", "Vatican City"],
      itinerary: [
        "Day 1-2: Jakarta - Paris - Eiffel Tower - Louvre",
        "Day 3-4: Paris - Swiss - Jungfraujoch",
        "Day 5-6: Swiss - Rome - Colosseum - Vatican",
        "Day 7-8: Rome - Florence - Venice",
        "Day 9: Venice - Milan - Shopping",
        "Day 10: Departure"
      ],
      includes: ["Tiket pesawat PP", "Hotel bintang 4", "Visa Schengen", "Tour guide", "Makan sesuai program"]
    },
    {
      id: 5,
      title: "Dubai Abu Dhabi 6D5N",
      image: singaporeImage,
      price: "Rp 8.500.000",
      originalPrice: "Rp 10.200.000",
      rating: 4.5,
      reviews: 92,
      location: "Dubai-Abu Dhabi, UAE",
      duration: "6 Hari 5 Malam",
      participants: "Min 2 orang",
      highlights: ["Burj Khalifa", "Desert Safari", "Sheikh Zayed Mosque", "Dubai Mall"],
      itinerary: [
        "Day 1: Jakarta - Dubai - Burj Khalifa",
        "Day 2: Dubai City Tour - Gold Souk",
        "Day 3: Desert Safari - Camel Riding",
        "Day 4: Dubai - Abu Dhabi - Sheikh Zayed Mosque",
        "Day 5: Ferrari World - Yas Island",
        "Day 6: Shopping - Departure"
      ],
      includes: ["Tiket pesawat PP", "Hotel bintang 4", "Transport AC", "Tour guide", "Makan sesuai program"]
    },
    {
      id: 6,
      title: "Turkey Cappadocia 8D7N",
      image: japanImage,
      price: "Rp 12.800.000",
      originalPrice: "Rp 15.500.000",
      rating: 4.6,
      reviews: 55,
      location: "Istanbul-Cappadocia, Turkey",
      duration: "8 Hari 7 Malam",
      participants: "Min 2 orang",
      highlights: ["Hot Air Balloon", "Blue Mosque", "Hagia Sophia", "Underground City"],
      itinerary: [
        "Day 1: Jakarta - Istanbul - Blue Mosque",
        "Day 2: Istanbul City Tour - Bosphorus",
        "Day 3: Istanbul - Cappadocia - Goreme",
        "Day 4: Hot Air Balloon - Underground City",
        "Day 5: Cappadocia - Konya - Pamukkale",
        "Day 6: Pamukkale - Kusadasi - Ephesus",
        "Day 7: Kusadasi - Istanbul - Shopping",
        "Day 8: Departure"
      ],
      includes: ["Tiket pesawat PP", "Hotel bintang 4", "Visa Turkey", "Tour guide", "Makan sesuai program"]
    }
  ];

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket internasional ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paket Tour Internasional
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wujudkan impian traveling ke luar negeri dengan paket tour internasional terpercaya dan terlengkap
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Tiket Pesawat</h3>
            <p className="text-sm text-muted-foreground">Sudah termasuk tiket PP</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Visa Assistance</h3>
            <p className="text-sm text-muted-foreground">Bantuan pengurusan visa</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Tour Leader</h3>
            <p className="text-sm text-muted-foreground">Pendamping dari Indonesia</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Full Support</h3>
            <p className="text-sm text-muted-foreground">Bantuan 24/7 selama trip</p>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Destinasi Terpopuler</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">🇯🇵 Jepang</Badge>
            <Badge variant="outline" className="px-4 py-2">🇸🇬 Singapore</Badge>
            <Badge variant="outline" className="px-4 py-2">🇹🇭 Thailand</Badge>
            <Badge variant="outline" className="px-4 py-2">🇦🇪 Dubai</Badge>
            <Badge variant="outline" className="px-4 py-2">🇹🇷 Turkey</Badge>
            <Badge variant="outline" className="px-4 py-2">🇪🇺 Europe</Badge>
          </div>
        </div>

        {/* Packages Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internationalPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {pkg.originalPrice && (
                  <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs">
                    Promo
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{pkg.rating}</span>
                    <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 leading-tight">{pkg.title}</h3>
                
                <div className="space-y-1 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span className="line-clamp-1">{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{pkg.participants}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs px-1 py-0">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    {pkg.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">{pkg.originalPrice}</span>
                    )}
                    <div className="text-base font-bold text-primary">{pkg.price}</div>
                  </div>
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

        {/* Call to Action */}
        <div className="text-center mt-16 bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Tidak Menemukan Destinasi Impian Anda?
          </h3>
          <p className="text-muted-foreground mb-6">
            Kami bisa membuat paket custom sesuai keinginan dan budget Anda
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => handleWhatsAppClick("custom tour internasional")}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Konsultasi Custom Tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaketInternasional;