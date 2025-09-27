import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const Galeri = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Sunset di Pantai Kuta Bali",
      image: heroImage,
      category: "domestik",
      location: "Bali, Indonesia",
      date: "Maret 2024",
      views: 1234,
      description: "Pemandangan sunset yang memukau di Pantai Kuta dengan suasana romantis"
    },
    {
      id: 2,
      title: "Borobudur Sunrise Adventure",
      image: templeImage,
      category: "domestik",
      location: "Yogyakarta, Indonesia",
      date: "Februari 2024",
      views: 890,
      description: "Pengalaman spiritual menyaksikan sunrise dari Candi Borobudur"
    },
    {
      id: 3,
      title: "Cherry Blossom Tokyo",
      image: japanImage,
      category: "internasional",
      location: "Tokyo, Japan",
      date: "April 2024",
      views: 2156,
      description: "Keindahan musim semi dengan bunga sakura yang bermekaran"
    },
    {
      id: 4,
      title: "Marina Bay Sands Singapore",
      image: singaporeImage,
      category: "internasional",
      location: "Singapore",
      date: "Januari 2024",
      views: 1567,
      description: "Kemegahan arsitektur modern di Marina Bay Sands"
    },
    {
      id: 5,
      title: "Gili Trawangan Paradise",
      image: heroImage,
      category: "domestik",
      location: "Lombok, Indonesia",
      date: "Maret 2024",
      views: 987,
      description: "Keindahan bawah laut dan pantai eksotis di Gili Trawangan"
    },
    {
      id: 6,
      title: "Mount Fuji View",
      image: japanImage,
      category: "internasional",
      location: "Hakone, Japan",
      date: "April 2024",
      views: 1876,
      description: "Pemandangan ikonik Gunung Fuji dari Danau Ashi"
    },
    {
      id: 7,
      title: "Prambanan Temple Complex",
      image: templeImage,
      category: "domestik",
      location: "Yogyakarta, Indonesia",
      date: "Februari 2024",
      views: 654,
      description: "Kemegahan arsitektur Hindu kuno di Candi Prambanan"
    },
    {
      id: 8,
      title: "Gardens by the Bay",
      image: singaporeImage,
      category: "internasional",
      location: "Singapore",
      date: "Januari 2024",
      views: 1432,
      description: "Taman futuristik dengan Supertree Grove yang menakjubkan"
    },
    {
      id: 9,
      title: "Tanah Lot Temple",
      image: heroImage,
      category: "domestik",
      location: "Bali, Indonesia",
      date: "Maret 2024",
      views: 1098,
      description: "Pura di atas batu karang dengan latar belakang sunset"
    },
    {
      id: 10,
      title: "Tokyo Disneyland",
      image: japanImage,
      category: "internasional",
      location: "Tokyo, Japan",
      date: "April 2024",
      views: 1789,
      description: "Keseruan dan keajaiban di Tokyo Disneyland"
    },
    {
      id: 11,
      title: "Ubud Rice Terraces",
      image: templeImage,
      category: "domestik",
      location: "Bali, Indonesia",
      date: "Maret 2024",
      views: 876,
      description: "Hamparan sawah bertingkat yang hijau dan asri di Ubud"
    },
    {
      id: 12,
      title: "Universal Studios Singapore",
      image: singaporeImage,
      category: "internasional",
      location: "Singapore",
      date: "Januari 2024",
      views: 1345,
      description: "Petualangan seru di Universal Studios Singapore"
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    
    return matchesSearch && matchesCategory;
  });

  const stats = {
    total: galleryItems.length,
    domestik: galleryItems.filter(item => item.category === "domestik").length,
    internasional: galleryItems.filter(item => item.category === "internasional").length,
    totalViews: galleryItems.reduce((sum, item) => sum + item.views, 0)
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galeri Perjalanan
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dokumentasi visual dari perjalanan menakjubkan pelanggan SabajayaTour ke berbagai destinasi impian
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-primary/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">{stats.total}</div>
            <div className="text-muted-foreground">Total Foto</div>
          </div>
          <div className="text-center bg-success/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-success mb-2">{stats.domestik}</div>
            <div className="text-muted-foreground">Domestik</div>
          </div>
          <div className="text-center bg-accent/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">{stats.internasional}</div>
            <div className="text-muted-foreground">Internasional</div>
          </div>
          <div className="text-center bg-secondary p-6 rounded-lg">
            <div className="text-3xl font-bold text-foreground mb-2">{stats.totalViews.toLocaleString()}</div>
            <div className="text-muted-foreground">Total Views</div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Cari foto atau lokasi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
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
            Menampilkan {filteredItems.length} foto dari {stats.total} total koleksi
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <Badge className={`absolute top-4 left-4 ${
                  item.category === 'domestik' 
                    ? 'bg-success text-success-foreground' 
                    : 'bg-accent text-accent-foreground'
                }`}>
                  {item.category === 'domestik' ? 'Domestik' : 'Internasional'}
                </Badge>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur rounded-full px-3 py-1 flex items-center space-x-1">
                  <Eye className="h-3 w-3 text-white" />
                  <span className="text-xs text-white">{item.views}</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{item.title}</h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                  {item.description}
                </p>

                <Button variant="outline" size="sm" className="w-full">
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Tidak ada foto yang sesuai dengan pencarian Anda.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setCategory("all");
              }}
            >
              Reset Filter
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ingin Foto Anda Juga Masuk Galeri?
          </h3>
          <p className="text-muted-foreground mb-6">
            Bergabunglah dengan ribuan traveler lainnya dan abadikan momen terbaik perjalanan Anda bersama SabajayaTour
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Lihat Paket Tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Galeri;