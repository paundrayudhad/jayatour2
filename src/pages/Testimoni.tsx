import { useState } from "react";
import { Star, Search, Filter, MapPin, Calendar, Quote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimoni = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [destinationFilter, setDestinationFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wijaya",
      location: "Jakarta",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b693?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "Maret 2024",
      destination: "Bali Paradise 4D3N",
      category: "domestik",
      text: "Pelayanan SabajayaTour sangat memuaskan! Tour guide ramah dan profesional. Hotel yang dipilih juga bagus, pemandangan laut dari kamar sangat indah. Itinerary sangat terorganisir dengan baik, tidak terburu-buru tapi semua tempat wisata bisa dikunjungi. Pasti akan booking lagi untuk trip selanjutnya!",
      helpful: 45,
      verified: true
    },
    {
      id: 2,
      name: "Budi Santoso",
      location: "Surabaya",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "Februari 2024",
      destination: "Yogyakarta Heritage 3D2N",
      category: "domestik",
      text: "Paket Yogyakarta nya lengkap banget! Dari Borobudur, Prambanan, sampai kuliner di Malioboro semua tercover dengan baik. Guide lokal nya sangat knowledgeable tentang sejarah dan budaya Jogja. Transport nyaman, hotel strategis. Recommended untuk yang ingin explore budaya Jawa!",
      helpful: 38,
      verified: true
    },
    {
      id: 3,
      name: "Lisa Chen",
      location: "Medan",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "April 2024",
      destination: "Japan Cherry Blossom 7D6N",
      category: "internasional",
      text: "Trip ke Jepang bareng SabajayaTour unforgettable! Timing cherry blossom perfect, semua spot yang dikunjungi lagi full bloom. Tour leader dari Indonesia sangat helpful, bahasa barrier tidak jadi masalah. Detail itinerary nya perfect, dari Tokyo Disneyland sampai Mount Fuji semua amazing. Worth every penny!",
      helpful: 67,
      verified: true
    },
    {
      id: 4,
      name: "Ahmad Rahman",
      location: "Bandung",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      date: "Januari 2024",
      destination: "Singapore Malaysia 5D4N",
      category: "internasional",
      text: "Overall bagus, cuma ada sedikit delay di beberapa jadwal karena traffic di KL. Tapi guide nya proaktif ngasih solusi alternatif. Universal Studios Singapore seru banget, Genting Highland juga menyenangkan. Hotel OK, makanan enak. Next time mau coba paket yang lebih lama.",
      helpful: 29,
      verified: true
    },
    {
      id: 5,
      name: "Dewi Sartika",
      location: "Yogyakarta",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "Maret 2024",
      destination: "Lombok Gili Island 4D3N",
      category: "domestik",
      text: "Lombok trip nya amazing! Snorkeling di Gili Trawangan best experience ever, air lautnya jernih banget dan banyak ikan warna-warni. Pink Beach juga cantik, Instagram-able banget. Sunset di Bukit Merese breathtaking. Accommodation di resort pinggir pantai, service excellent. Highly recommended!",
      helpful: 52,
      verified: true
    },
    {
      id: 6,
      name: "Michael Tan",
      location: "Jakarta",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "April 2024",
      destination: "Bangkok Pattaya 5D4N",
      category: "internasional",
      text: "Thailand trip yang memorable! Grand Palace Bangkok stunning, architecture nya detail banget. Floating market experience unik, bisa naik perahu sambil belanja. Pattaya beach life seru, Coral Island snorkeling mantap. Guide Thai-nya bisa bahasa Indonesia, komunikasi lancar. Great value for money!",
      helpful: 41,
      verified: true
    },
    {
      id: 7,
      name: "Siti Nurhaliza",
      location: "Makassar",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "Februari 2024",
      destination: "Bali Paradise 4D3N",
      category: "domestik",
      text: "Bali trip with family sangat menyenangkan! Kids enjoy banget di Waterbom, parents relax di spa. Tanah Lot sunset romantic, Ubud nature walk refreshing. Hotel family-friendly, staff ramah sama anak-anak. Transportation comfortable untuk keluarga. SabajayaTour understand family needs. Perfect family vacation!",
      helpful: 33,
      verified: true
    },
    {
      id: 8,
      name: "Kevin Wijaya",
      location: "Palembang",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      date: "Januari 2024",
      destination: "Dubai Abu Dhabi 6D5N",
      category: "internasional",
      text: "Dubai experience luar biasa! Burj Khalifa view dari atas spectacular, desert safari adrenaline pumping. Sheikh Zayed Mosque di Abu Dhabi beautiful architecture. Shopping di Dubai Mall endless. Cuma cuaca panas banget, tapi hotel AC nya dingin. Guide local helpful, English fluent. Recommended untuk yang suka luxury travel!",
      helpful: 48,
      verified: true
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = ratingFilter === "all" || testimonial.rating.toString() === ratingFilter;
    const matchesDestination = destinationFilter === "all" || testimonial.category === destinationFilter;
    
    return matchesSearch && matchesRating && matchesDestination;
  });

  const stats = {
    total: testimonials.length,
    rating5: testimonials.filter(t => t.rating === 5).length,
    rating4: testimonials.filter(t => t.rating === 4).length,
    avgRating: (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
    totalHelpful: testimonials.reduce((sum, t) => sum + t.helpful, 0)
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Setelah membaca testimoni yang bagus-bagus, saya tertarik untuk booking tour. Bisa minta informasi lebih lanjut?");
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimoni Pelanggan
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pengalaman nyata dari ribuan pelanggan yang telah merasakan pelayanan terbaik SabajayaTour
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-primary/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">{stats.avgRating}</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-muted-foreground">Rating Rata-rata</div>
          </div>
          <div className="text-center bg-success/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-success mb-2">{stats.total}</div>
            <div className="text-muted-foreground">Total Review</div>
          </div>
          <div className="text-center bg-accent/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">{stats.rating5}</div>
            <div className="text-muted-foreground">Bintang 5</div>
          </div>
          <div className="text-center bg-secondary p-6 rounded-lg">
            <div className="text-3xl font-bold text-foreground mb-2">{stats.totalHelpful}</div>
            <div className="text-muted-foreground">Helpful Votes</div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Cari testimoni..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Rating</SelectItem>
                  <SelectItem value="5">5 Bintang</SelectItem>
                  <SelectItem value="4">4 Bintang</SelectItem>
                  <SelectItem value="3">3 Bintang</SelectItem>
                </SelectContent>
              </Select>

              <Select value={destinationFilter} onValueChange={setDestinationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Destinasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Destinasi</SelectItem>
                  <SelectItem value="domestik">Domestik</SelectItem>
                  <SelectItem value="internasional">Internasional</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Filter Lainnya
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Menampilkan {filteredTestimonials.length} testimoni dari {stats.total} total review
          </p>
        </div>

        {/* Testimonials Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-card hover:shadow-travel transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="text-xs">{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm text-foreground truncate">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20 ml-1">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                      <MapPin className="h-2 w-2" />
                      <span className="truncate">{testimonial.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < testimonial.rating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-200'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <Badge className={`mb-2 text-xs ${
                    testimonial.category === 'domestik' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-accent/10 text-accent'
                  }`}>
                    {testimonial.destination}
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t text-xs">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <span>👍</span>
                    <span>{testimonial.helpful}</span>
                  </button>
                  <span className="text-muted-foreground">{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Tidak ada testimoni yang sesuai dengan filter Anda.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setRatingFilter("all");
                setDestinationFilter("all");
              }}
            >
              Reset Filter
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-ocean p-8 rounded-lg text-white">
          <h3 className="text-3xl font-bold mb-4">
            Siap Menjadi Testimoni Selanjutnya?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Bergabunglah dengan ribuan pelanggan puas dan rasakan pengalaman tak terlupakan bersama SabajayaTour
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8"
            onClick={handleWhatsAppClick}
          >
            Mulai Perjalanan Anda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;