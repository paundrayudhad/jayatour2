import { useState } from "react";
import { Calendar, User, Eye, ArrowRight, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const Blog = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua Artikel", count: 24 },
    { id: "tips", name: "Tips Travel", count: 8 },
    { id: "destination", name: "Panduan Destinasi", count: 10 },
    { id: "culture", name: "Budaya & Kuliner", count: 6 },
  ];

  const articles = [
    {
      id: 1,
      title: "10 Tips Hemat Traveling ke Jepang Musim Sakura",
      excerpt: "Musim sakura adalah waktu terbaik mengunjungi Jepang, tapi juga yang termahal. Simak tips hemat kami untuk menikmati keindahan bunga sakura tanpa menguras kantong.",
      image: japanImage,
      category: "tips",
      author: "Sarah Wijaya",
      date: "2024-03-15",
      views: 1250,
      readTime: "5 min",
      tags: ["Jepang", "Budget Travel", "Sakura", "Tips"]
    },
    {
      id: 2,
      title: "Panduan Lengkap Wisata Halal di Singapura",
      excerpt: "Singapura semakin ramah untuk wisatawan Muslim. Dari kuliner halal hingga masjid bersejarah, berikut panduan lengkap wisata halal di negara singa.",
      image: singaporeImage,
      category: "destination",  
      author: "Ahmad Fauzi",
      date: "2024-03-12",
      views: 890,
      readTime: "7 min",
      tags: ["Singapore", "Halal Travel", "Muslim Friendly", "Guide"]
    },
    {
      id: 3,
      title: "5 Kuliner Yogyakarta yang Wajib Dicoba",
      excerpt: "Yogyakarta bukan hanya soal candi dan budaya, tapi juga surga kuliner. Dari gudeg hingga bakpia, inilah 5 kuliner khas yang wajib masuk list Anda.",
      image: templeImage,
      category: "culture",
      author: "Lisa Chen",
      date: "2024-03-10",
      views: 2100,
      readTime: "4 min",
      tags: ["Yogyakarta", "Kuliner", "Local Food", "Culture"]
    },
    {
      id: 4,
      title: "Bali Hidden Gems: 7 Pantai Tersembunyi yang Instagram-able",
      excerpt: "Bosan dengan Kuta dan Sanur? Saatnya explore pantai-pantai tersembunyi Bali yang masih sepi pengunjung tapi pemandangannya bikin takjub.",
      image: heroImage,
      category: "destination",
      author: "Made Sutrisna",
      date: "2024-03-08",
      views: 3200,
      readTime: "6 min",
      tags: ["Bali", "Hidden Gems", "Beach", "Photography"]
    },
    {
      id: 5,
      title: "Cara Mudah Apply Visa Schengen untuk Pemula",
      excerpt: "Bermimpi keliling Eropa? Visa Schengen adalah kunci utamanya. Berikut panduan lengkap dan tips agar aplikasi visa Anda tidak ditolak.",
      image: heroImage,
      category: "tips",
      author: "David Pranata",
      date: "2024-03-05",
      views: 1800,
      readTime: "8 min",
      tags: ["Europe", "Visa", "Travel Tips", "Guide"]
    },
    {
      id: 6,
      title: "Solo Traveling Aman untuk Wanita: Tips & Destinasi Rekomendasi",
      excerpt: "Solo traveling semakin populer di kalangan wanita. Simak tips keamanan dan destinasi ramah untuk female solo traveler.",
      image: singaporeImage,
      category: "tips",
      author: "Sari Dewi", 
      date: "2024-03-02",
      views: 1500,
      readTime: "6 min",
      tags: ["Solo Travel", "Female Travel", "Safety", "Tips"]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-premium">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-display font-display font-bold mb-6">
              Blog & Artikel Travel
            </h1>
            <p className="text-body-lg mb-8 text-white/90">
              Tips, panduan, dan inspirasi perjalanan dari para travel expert untuk membuat liburan Anda lebih berkesan
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Cari artikel, tips, destinasi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background/80 backdrop-blur-sm border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? "bg-primary text-primary-foreground shadow-float" 
                    : "hover:bg-primary/10"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Tidak ada artikel yang ditemukan untuk "{searchTerm}"
              </p>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {filteredArticles.length > 0 && (
                <Card className="card-premium mb-12 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={filteredArticles[0].image} 
                        alt={filteredArticles[0].title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        FEATURED
                      </Badge>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {filteredArticles[0].tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                        {filteredArticles[0].title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {filteredArticles[0].excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{filteredArticles[0].author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(filteredArticles[0].date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{filteredArticles[0].views.toLocaleString()} views</span>
                          </div>
                        </div>
                        <Badge variant="outline">{filteredArticles[0].readTime}</Badge>
                      </div>
                      
                      <Button className="btn-premium w-fit group">
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              )}

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.slice(1).map((article) => (
                  <Card key={article.id} className="card-premium group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-foreground">
                          {categories.find(cat => cat.id === article.category)?.name}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="outline" className="bg-black/60 text-white border-white/20">
                          {article.readTime}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <Card className="card-premium max-w-2xl mx-auto text-center p-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              Dapatkan Tips Travel Terbaru
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe newsletter kami dan jadilah yang pertama mendapat tips travel, promo spesial, dan panduan destinasi terbaru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1"
              />
              <Button className="btn-premium sm:w-auto">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;