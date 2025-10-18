import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Eye, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const GalleryDetail = () => {
  const { id } = useParams();

  const galleryData: Record<number, any> = {
    1: {
      id: 1,
      title: "Sunset di Pantai Kuta Bali",
      image: heroImage,
      category: "domestik",
      location: "Bali, Indonesia",
      date: "Maret 2024",
      views: 1234,
      likes: 89,
      photographer: "John Doe",
      description: "Pemandangan sunset yang memukau di Pantai Kuta dengan suasana romantis. Matahari terbenam dengan warna oranye kemerahan yang indah, menciptakan refleksi menakjubkan di atas permukaan laut.",
      fullDescription: `Pantai Kuta adalah salah satu destinasi sunset terbaik di Bali. Setiap sore, pantai ini dipenuhi oleh wisatawan dari berbagai negara yang ingin menyaksikan keindahan matahari terbenam.

      Pengalaman di Pantai Kuta bukan hanya tentang sunset-nya yang spektakuler, tetapi juga tentang atmosfer yang tercipta. Suara ombak, angin laut yang sepoi-sepoi, dan kehangatan pasir putih di bawah kaki menciptakan momen yang tak terlupakan.

      Tips untuk menikmati sunset di Pantai Kuta:
      - Datang 30 menit sebelum sunset untuk mendapat spot terbaik
      - Bawa kamera dengan lensa wide untuk menangkap keseluruhan pemandangan
      - Coba berbagai angle: siluet, refleksi air, atau dengan foreground yang menarik
      - Jangan lupa untuk menikmat momen, bukan hanya mengambil foto!`,
      tags: ["Sunset", "Beach", "Bali", "Travel", "Photography"],
      relatedImages: [
        { id: 2, image: templeImage, title: "Borobudur Sunrise" },
        { id: 3, image: japanImage, title: "Mount Fuji" },
        { id: 4, image: singaporeImage, title: "Marina Bay" }
      ]
    },
    2: {
      id: 2,
      title: "Borobudur Sunrise Adventure",
      image: templeImage,
      category: "domestik",
      location: "Yogyakarta, Indonesia",
      date: "Februari 2024",
      views: 890,
      likes: 67,
      photographer: "Jane Smith",
      description: "Pengalaman spiritual menyaksikan sunrise dari Candi Borobudur, warisan budaya dunia UNESCO.",
      fullDescription: `Candi Borobudur adalah salah satu keajaiban dunia dan situs warisan UNESCO yang paling ikonik di Indonesia. Menyaksikan sunrise dari puncak candi ini adalah pengalaman yang tak terlupakan.

      Perjalanan dimulai pukul 4 pagi untuk mendaki candi sebelum fajar. Udara pagi yang sejuk dan sunyi menciptakan atmosfer mistis. Ketika matahari mulai terbit, sinar pertamanya menyinari stupa-stupa kuno, menciptakan siluet yang menakjubkan dengan latar belakang pegunungan Menoreh.

      Pengalaman ini bukan hanya tentang fotografi, tetapi juga tentang merasakan keagungan spiritual dan sejarah yang terkandung dalam setiap batu candi berusia lebih dari 1200 tahun ini.`,
      tags: ["Sunrise", "Temple", "Yogyakarta", "Culture", "Heritage"],
      relatedImages: [
        { id: 1, image: heroImage, title: "Sunset di Pantai Kuta" },
        { id: 3, image: japanImage, title: "Mount Fuji" },
        { id: 5, image: heroImage, title: "Tanah Lot" }
      ]
    },
    3: {
      id: 3,
      title: "Mount Fuji Experience",
      image: japanImage,
      category: "internasional",
      location: "Fuji, Japan",
      date: "April 2024",
      views: 2345,
      likes: 145,
      photographer: "Sakura Tanaka",
      description: "Pengalaman mendaki gunung ikonik Jepang dengan pemandangan yang menakjubkan.",
      fullDescription: `Mount Fuji adalah simbol Jepang yang paling ikonik. Dengan ketinggian 3,776 meter, gunung berapi aktif ini menawarkan pengalaman mendaki yang tak terlupakan.

      Pendakian dimulai dari Stasiun ke-5 pada tengah malam untuk mengejar sunrise di puncak. Perjalanan memakan waktu 5-7 jam dengan berbagai tantangan fisik dan mental. Namun semua terbayar ketika melihat matahari terbit dari puncak tertinggi Jepang.

      Yang membuat Mount Fuji istimewa adalah kombinasi antara keindahan alam, signifikansi spiritual, dan tantangan fisik. Setiap tahun ribuan pendaki dari seluruh dunia datang untuk merasakan pengalaman ini.`,
      tags: ["Mountain", "Hiking", "Japan", "Adventure", "Nature"],
      relatedImages: [
        { id: 1, image: heroImage, title: "Sunset di Pantai Kuta" },
        { id: 2, image: templeImage, title: "Borobudur Sunrise" },
        { id: 4, image: singaporeImage, title: "Marina Bay" }
      ]
    },
    4: {
      id: 4,
      title: "Marina Bay Sands Night View",
      image: singaporeImage,
      category: "internasional",
      location: "Singapore",
      date: "Mei 2024",
      views: 1876,
      likes: 112,
      photographer: "Michael Wong",
      description: "Pemandangan malam Singapore dari Marina Bay dengan skyline yang menakjubkan.",
      fullDescription: `Marina Bay adalah jantung Singapore modern. Dengan gedung-gedung pencakar langit, jembatan helix, dan Gardens by the Bay, area ini menawarkan pemandangan urban terbaik di Asia Tenggara.

      Malam hari adalah waktu terbaik untuk menikmati Marina Bay. Light show dari Gardens by the Bay, lampu-lampu gedung yang berkilauan, dan refleksi di permukaan air menciptakan suasana futuristik yang memukau.

      Singapore adalah contoh sempurna bagaimana kota modern bisa berpadu harmonis dengan ruang hijau dan desain yang inovatif. Marina Bay adalah epicenter dari visi ini.`,
      tags: ["Cityscape", "Night", "Singapore", "Urban", "Modern"],
      relatedImages: [
        { id: 1, image: heroImage, title: "Sunset di Pantai Kuta" },
        { id: 2, image: templeImage, title: "Borobudur Sunrise" },
        { id: 3, image: japanImage, title: "Mount Fuji" }
      ]
    }
  };

  const gallery = galleryData[Number(id)];

  if (!gallery) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Galeri tidak ditemukan</h1>
          <Button asChild>
            <Link to="/pengalaman/galeri">Kembali ke Galeri</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/pengalaman/galeri">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Galeri
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={gallery.image} 
                alt={gallery.title}
                className="w-full h-[500px] object-cover"
              />
              <Badge className={`absolute top-4 left-4 ${
                gallery.category === 'domestik' 
                  ? 'bg-success text-success-foreground' 
                  : 'bg-accent text-accent-foreground'
              }`}>
                {gallery.category === 'domestik' ? 'Domestik' : 'Internasional'}
              </Badge>
            </div>

            {/* Title & Info */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{gallery.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{gallery.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{gallery.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{gallery.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>{gallery.likes} likes</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Tentang Foto Ini</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{gallery.description}</p>
                <div className="prose prose-sm max-w-none">
                  {gallery.fullDescription.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {gallery.tags.map((tag: string, idx: number) => (
                  <Badge key={idx} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Related Images */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Foto Terkait</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {gallery.relatedImages.map((related: any) => (
                  <Link key={related.id} to={`/pengalaman/galeri/${related.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all group">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm line-clamp-2">{related.title}</h4>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Info Photographer</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{gallery.photographer[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{gallery.photographer}</h4>
                      <p className="text-sm text-muted-foreground">Travel Photographer</p>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    View Profile
                  </Button>
                </div>

                <div className="border-t mt-6 pt-6">
                  <h4 className="font-semibold mb-3">Statistik</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Views</span>
                      <span className="font-medium">{gallery.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Likes</span>
                      <span className="font-medium">{gallery.likes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Upload Date</span>
                      <span className="font-medium">{gallery.date}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-6 pt-6">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Download HD
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Untuk keperluan personal saja
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
