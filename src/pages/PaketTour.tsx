import { useState } from "react";
import { Search, MapPin, Calendar, Users, Star, MessageCircle, GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const PaketTour = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [tourType, setTourType] = useState("all");
  const [duration, setDuration] = useState("all");

  const allPackages = [
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
      category: "open",
      seats: 12,
      totalSeats: 15,
      nextDate: "15 Nov 2024",
      universities: ["UI", "ITB", "UGM", "Unpad"],
      highlights: ["Campus Tour", "Talk with Students", "Academic Fair", "Cultural Experience"],
      description: "Kunjungi universitas terbaik Indonesia dengan program terintegrasi meliputi campus tour, dialog dengan mahasiswa, dan pengalaman akademik langsung."
    },
    {
      id: 2,
      title: "Private Campus Tour - Universitas Pilihan",
      image: heroImage,
      price: "Rp 1.800.000",
      rating: 4.8,
      reviews: 156,
      location: "Fleksibel sesuai pilihan",
      duration: "2-3 Hari",
      participants: "5-8 siswa",
      category: "private",
      seats: 6,
      totalSeats: 8,
      nextDate: "20 Nov 2024",
      universities: ["Custom Selection"],
      highlights: ["Personalized Tour", "Faculty Meeting", "Lab Visit", "Career Guidance"],
      description: "Tour eksklusif dengan panduan personal ke universitas pilihan Anda. Dapatkan informasi mendalam tentang jurusan dan fasilitas kampus."
    },
    {
      id: 3,
      title: "Study Abroad Visit - Singapore Universities",
      image: singaporeImage,
      price: "Rp 8.500.000",
      rating: 4.7,
      reviews: 89,
      location: "Singapore",
      duration: "4 Hari 3 Malam",
      participants: "8-12 siswa", 
      category: "abroad",
      seats: 8,
      totalSeats: 12,
      nextDate: "25 Nov 2024",
      universities: ["NUS", "NTU", "SMU"],
      highlights: ["International Campus", "Study Abroad Info", "Scholarship Guidance", "Cultural Immersion"],
      description: "Eksplorasi universitas terbaik Singapura dan dapatkan informasi lengkap tentang program studi, beasiswa, dan kehidupan mahasiswa internasional."
    },
    {
      id: 4,
      title: "Open College Tour - Engineering Focus",
      image: japanImage,
      price: "Rp 3.200.000",
      rating: 4.8,
      reviews: 167,
      location: "Bandung - Surabaya",
      duration: "4 Hari 3 Malam",
      participants: "12-16 siswa",
      category: "open",
      seats: 14,
      totalSeats: 16,
      nextDate: "30 Nov 2024",
      universities: ["ITB", "ITS", "Unpar", "Telkom University"],
      highlights: ["Engineering Labs", "Innovation Center", "Tech Expo", "Industry Visit"],
      description: "Tour spesial untuk calon mahasiswa teknik dengan fokus pada laboratorium, pusat inovasi, dan kunjungan industri teknologi."
    }
  ];

  const handleWhatsAppClick = (paket: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan college tour ${paket}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const filteredPackages = allPackages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTourType = tourType === "all" || pkg.category === tourType;
    
    return matchesSearch && matchesTourType;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              College Tour Packages
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi universitas terbaik dengan program tour edukasi yang dirancang khusus untuk calon mahasiswa
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
              
              <Select value={tourType} onValueChange={setTourType}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipe Tour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Tipe</SelectItem>
                  <SelectItem value="open">Open Tour</SelectItem>
                  <SelectItem value="private">Private Tour</SelectItem>
                  <SelectItem value="abroad">Study Abroad</SelectItem>
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
            Menampilkan {filteredPackages.length} program college tour
          </p>
        </div>

        {/* Packages Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 left-3 text-xs ${
                  pkg.category === 'open' ? 'bg-blue-500' :
                  pkg.category === 'private' ? 'bg-green-500' : 'bg-purple-500'
                }`}>
                  {pkg.category === 'open' ? 'Open Tour' : 
                   pkg.category === 'private' ? 'Private Tour' : 'Study Abroad'}
                </Badge>
                <Badge className="absolute top-3 right-3 bg-orange-500 text-xs">
                  {pkg.seats}/{pkg.totalSeats} seats
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{pkg.rating}</span>
                    <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{pkg.nextDate}</span>
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
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{pkg.participants}</span>
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
                  <div>
                    <div className="text-lg font-bold text-primary">{pkg.price}</div>
                  </div>
                  <div className="flex space-x-1">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="text-xs px-2 py-1"
                      asChild
                    >
                      <Link to={`/paket-tour/${pkg.id}`}>Detail</Link>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-success hover:bg-success/90 text-success-foreground text-xs px-2 py-1"
                      onClick={() => handleWhatsAppClick(pkg.title)}
                    >
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Book
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Tidak ada program college tour yang sesuai dengan filter Anda.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setTourType("all");
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