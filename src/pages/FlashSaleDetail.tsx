import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star, Clock, MessageCircle, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const FlashSaleDetail = () => {
  const { id } = useParams();

  const flashSaleData: Record<number, any> = {
    1: {
      id: 1,
      title: "Bali Paradise 4D3N",
      image: heroImage,
      price: "Rp 2.150.000",
      originalPrice: "Rp 3.500.000",
      discount: "39%",
      rating: 4.8,
      reviews: 124,
      location: "Bali, Indonesia",
      duration: "4 Hari 3 Malam",
      participants: "Min 2 orang",
      sold: 73,
      total: 100,
      highlights: ["Pantai Kuta", "Tanah Lot", "Ubud", "Airport Transfer"],
      overview: "Nikmati keindahan Bali dengan paket flash sale terbaik! Kunjungi destinasi ikonik seperti Pantai Kuta, Tanah Lot, dan Ubud. Paket lengkap dengan hotel, transportasi, dan makan.",
      itinerary: [
        { day: 1, title: "Arrival & Kuta Beach", activities: ["Jemput bandara", "Check-in hotel", "Pantai Kuta sunset", "Makan malam seafood"] },
        { day: 2, title: "Tanah Lot & Ubud Tour", activities: ["Breakfast hotel", "Tanah Lot Temple", "Ubud Monkey Forest", "Tegalalang Rice Terrace", "Ubud Art Market"] },
        { day: 3, title: "Water Sports & Spa", activities: ["Tanjung Benoa water sports", "Lunch by the beach", "Traditional Balinese spa", "Free evening"] },
        { day: 4, title: "Departure", activities: ["Hotel checkout", "Last minute shopping", "Airport transfer", "Departure"] }
      ],
      included: [
        "Hotel bintang 3 (3 malam)",
        "Sarapan hotel setiap hari",
        "Airport transfer PP",
        "Private car + driver",
        "Semua tiket masuk wisata",
        "1x traditional spa session",
        "Travel insurance"
      ],
      notIncluded: [
        "Tiket pesawat",
        "Lunch & dinner (kecuali disebutkan)",
        "Pengeluaran pribadi",
        "Tips driver & guide"
      ],
      testimonials: [
        { name: "Dewi Lestari", avatar: "D", rating: 5, text: "Paket flash sale terbaik! Hotel bagus, guide ramah, destinasi lengkap. Puas banget!", date: "1 minggu lalu" },
        { name: "Arif Rahman", avatar: "A", rating: 5, text: "Worth it! Harga murah tapi dapat fasilitas lengkap. Recommended!", date: "2 minggu lalu" }
      ]
    },
    2: {
      id: 2,
      title: "Singapore Malaysia 5D4N",
      image: singaporeImage,
      price: "Rp 3.200.000",
      originalPrice: "Rp 5.000.000",
      discount: "36%",
      rating: 4.6,
      reviews: 156,
      location: "Singapore-Malaysia",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      sold: 45,
      total: 80,
      highlights: ["Marina Bay Sands", "Universal Studios", "Genting Highland", "KL Twin Tower"],
      overview: "Eksplorasi 2 negara dalam 1 trip! Singapore & Malaysia dengan harga flash sale yang incredible. Kunjungi Universal Studios, Marina Bay, Genting Highland, dan KL Twin Tower.",
      itinerary: [
        { day: 1, title: "Singapore Arrival", activities: ["Singapore airport pickup", "Hotel check-in", "Marina Bay Sands area", "Gardens by the Bay", "Light show"] },
        { day: 2, title: "Universal Studios", activities: ["Full day Universal Studios", "Sentosa Island exploration", "Beach walk", "Return hotel"] },
        { day: 3, title: "Singapore to KL", activities: ["Breakfast & checkout", "Bus to Kuala Lumpur", "Hotel check-in KL", "KLCC & Twin Tower", "Bukit Bintang shopping"] },
        { day: 4, title: "Genting Highland", activities: ["Early departure to Genting", "Cable car ride", "Theme park & casino area", "Cool weather experience", "Return to KL"] },
        { day: 5, title: "KL City & Departure", activities: ["Batu Caves visit", "Last shopping", "Airport transfer", "Departure"] }
      ],
      included: [
        "Hotel bintang 3 di SG & KL (4 malam)",
        "Daily breakfast",
        "Universal Studios ticket",
        "Singapore-KL bus",
        "All transfers & transportation",
        "Entrance fees",
        "Tour guide"
      ],
      notIncluded: [
        "Flight tickets",
        "Visa (if required)",
        "Lunch & dinner",
        "Personal expenses",
        "Optional activities"
      ],
      testimonials: [
        { name: "Linda Wijaya", avatar: "L", rating: 5, text: "2 negara dalam 5 hari, seru banget! Itinerary padat tapi tetap enjoy.", date: "1 minggu lalu" },
        { name: "Tommy Setiawan", avatar: "T", rating: 4, text: "Harga flash sale sangat worth it. Guide profesional dan ramah.", date: "2 minggu lalu" }
      ]
    },
    3: {
      id: 3,
      title: "Japan Cherry Blossom 7D6N",
      image: japanImage,
      price: "Rp 12.800.000",
      originalPrice: "Rp 18.000.000",
      discount: "29%",
      rating: 4.7,
      reviews: 67,
      location: "Tokyo-Osaka, Japan",
      duration: "7 Hari 6 Malam",
      participants: "Min 2 orang",
      sold: 28,
      total: 50,
      highlights: ["Mount Fuji", "Tokyo Disneyland", "Kyoto Temple", "Osaka Castle"],
      overview: "Musim sakura di Jepang dengan harga flash sale! Kunjungi Tokyo, Kyoto, Osaka dan nikmati keindahan cherry blossom. Termasuk Tokyo Disneyland dan Mount Fuji tour.",
      itinerary: [
        { day: 1, title: "Tokyo Arrival", activities: ["Narita airport pickup", "Hotel check-in", "Shibuya crossing", "Harajuku street", "Welcome dinner"] },
        { day: 2, title: "Tokyo Disneyland", activities: ["Full day Tokyo Disneyland", "Character meet & greet", "Parades & shows", "Shopping"] },
        { day: 3, title: "Mount Fuji Tour", activities: ["Early departure to Fuji", "Lake Kawaguchi", "Fuji 5th station", "Onsen experience", "Return Tokyo"] },
        { day: 4, title: "Tokyo to Kyoto", activities: ["Bullet train to Kyoto", "Fushimi Inari shrine", "Bamboo forest", "Gion district", "Geisha spotting"] },
        { day: 5, title: "Kyoto Temples", activities: ["Kinkakuji Golden Temple", "Kiyomizu-dera", "Traditional tea ceremony", "Nishiki Market"] },
        { day: 6, title: "Osaka Exploration", activities: ["Train to Osaka", "Osaka Castle", "Dotonbori food street", "Shopping at Shinsaibashi", "Takoyaki dinner"] },
        { day: 7, title: "Departure", activities: ["Last minute shopping", "Airport transfer", "Kansai airport", "Departure"] }
      ],
      included: [
        "Hotel bintang 3 (6 malam)",
        "Daily breakfast",
        "Tokyo Disneyland 1-day pass",
        "Mt. Fuji tour",
        "Bullet train Tokyo-Kyoto",
        "All local transportation",
        "English speaking guide",
        "Travel insurance"
      ],
      notIncluded: [
        "International flight",
        "Japan visa fee",
        "Lunch & dinner (most days)",
        "Personal shopping",
        "Optional activities"
      ],
      testimonials: [
        { name: "Rina Kusuma", avatar: "R", rating: 5, text: "Japan trip terbaik! Cherry blossom-nya cantik banget, semua destinasi dikunjungi.", date: "3 minggu lalu" },
        { name: "David Tan", avatar: "D", rating: 5, text: "Flash sale yang sangat menguntungkan! Hotel strategis dan guide sangat membantu.", date: "1 bulan lalu" }
      ]
    }
  };

  const flashSale = flashSaleData[Number(id)];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan Flash Sale ${flashSale?.title}. Bisa langsung booking?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  if (!flashSale) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Flash Sale tidak ditemukan</h1>
          <Button asChild>
            <Link to="/paket-tour/flash-sale">Kembali ke Flash Sale</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/paket-tour/flash-sale">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Flash Sale
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={flashSale.image} 
                alt={flashSale.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-destructive text-destructive-foreground font-bold text-lg px-4 py-2">
                  <Zap className="h-4 w-4 mr-1" />
                  FLASH SALE -{flashSale.discount}
                </Badge>
                <Badge className="bg-orange-500 text-white">
                  {flashSale.duration}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-background/90 text-foreground">
                  {flashSale.total - flashSale.sold} tersisa
                </Badge>
              </div>
            </div>

            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{flashSale.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">{flashSale.rating}</span>
                  <span>({flashSale.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{flashSale.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{flashSale.participants}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{flashSale.duration}</span>
                </div>
              </div>

              {/* Stock Progress */}
              <Card className="p-4 bg-destructive/5 border-destructive/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Stok Tersedia</span>
                  <span className="text-destructive font-bold">{flashSale.total - flashSale.sold}/{flashSale.total} tersisa</span>
                </div>
                <Progress value={(flashSale.sold / flashSale.total) * 100} className="h-2" />
                <p className="text-sm text-destructive mt-2">
                  {flashSale.sold > flashSale.total * 0.8 ? "⚠️ Hampir sold out! Pesan sekarang!" : "Buruan booking sebelum kehabisan!"}
                </p>
              </Card>
            </div>

            {/* Highlights */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Highlight Destinasi</h3>
                <div className="grid grid-cols-2 gap-3">
                  {flashSale.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Tentang Paket</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {flashSale.overview}
                    </p>

                    <h3 className="text-xl font-bold mb-3">Yang Termasuk:</h3>
                    <div className="space-y-2 mb-6">
                      {flashSale.included.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-3">Tidak Termasuk:</h3>
                    <div className="space-y-2">
                      {flashSale.notIncluded.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-muted-foreground">• {item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-4">
                {flashSale.itinerary.map((day: any, idx: number) => (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-3">{day.title}</h3>
                          <ul className="space-y-2">
                            {day.activities.map((activity: string, actIdx: number) => (
                              <li key={actIdx} className="flex items-start space-x-2">
                                <Check className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {flashSale.testimonials.map((testimonial: any, idx: number) => (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-primary">{testimonial.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{testimonial.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 border-destructive/20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge className="bg-destructive text-destructive-foreground mb-4 text-lg px-4 py-2">
                    <Zap className="h-4 w-4 mr-1" />
                    FLASH SALE AKTIF
                  </Badge>
                  <div className="text-sm text-muted-foreground mb-2">Harga Normal</div>
                  <div className="text-xl text-muted-foreground line-through mb-2">{flashSale.originalPrice}</div>
                  <div className="text-4xl font-bold text-destructive mb-2">{flashSale.price}</div>
                  <Badge variant="outline" className="text-success border-success">
                    Hemat {flashSale.discount}
                  </Badge>
                </div>

                <div className="border-t border-b py-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Flash Sale berakhir dalam</div>
                    <div className="flex justify-center space-x-2">
                      <div className="bg-destructive/10 rounded px-3 py-2">
                        <div className="text-2xl font-bold text-destructive">23</div>
                        <div className="text-xs text-muted-foreground">JAM</div>
                      </div>
                      <div className="bg-destructive/10 rounded px-3 py-2">
                        <div className="text-2xl font-bold text-destructive">45</div>
                        <div className="text-xs text-muted-foreground">MENIT</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-success hover:bg-success/90 text-success-foreground mb-4"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Booking Sekarang
                </Button>

                <div className="text-center text-xs text-muted-foreground mb-4">
                  Respon instan • Proses cepat
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-success">
                    <Check className="h-4 w-4" />
                    <span>Harga termurah tahun ini</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success">
                    <Check className="h-4 w-4" />
                    <span>Konfirmasi langsung</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success">
                    <Check className="h-4 w-4" />
                    <span>Flexible payment</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="bg-destructive/5 rounded p-3 text-center">
                    <Clock className="h-5 w-5 text-destructive mx-auto mb-2" />
                    <p className="text-sm font-medium text-destructive">
                      {flashSale.total - flashSale.sold} slot tersisa!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleDetail;