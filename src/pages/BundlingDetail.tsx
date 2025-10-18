import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star, Clock, MessageCircle, Check, GraduationCap, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const BundlingDetail = () => {
  const { id } = useParams();

  const bundlingData: Record<number, any> = {
    1: {
      id: 1,
      title: "Complete Indonesia Campus Tour",
      image: templeImage,
      price: "Rp 6.500.000",
      originalPrice: "Rp 9.000.000",
      savings: "Rp 2.500.000",
      rating: 4.9,
      reviews: 156,
      participants: "10-15 siswa",
      universities: ["UI", "ITB", "UGM", "ITS", "Unpad", "Unair"],
      duration: "10D9N",
      badge: "BEST VALUE",
      category: "domestic",
      overview: "Paket bundling lengkap untuk mengunjungi 6 universitas top Indonesia dalam satu perjalanan. Program ini dirancang khusus untuk siswa SMA yang ingin eksplorasi kampus impian sebelum mendaftar kuliah.",
      itinerary: [
        { day: 1, title: "Jakarta - Universitas Indonesia", activities: ["Check-in hotel", "Campus tour UI Depok", "Dialog dengan mahasiswa", "Kunjungi fakultas pilihan"] },
        { day: 2, title: "Bandung - ITB", activities: ["Perjalanan ke Bandung", "Tour kampus ITB Ganesha", "Kunjungi lab engineering", "City tour Bandung"] },
        { day: 3, title: "Bandung - Unpad", activities: ["Campus tour Unpad Jatinangor", "Medical faculty visit", "Meet alumni session", "Leisure time"] },
        { day: 4, title: "Yogyakarta - UGM", activities: ["Flight ke Yogyakarta", "Check-in hotel", "Campus tour UGM", "Malioboro night tour"] },
        { day: 5, title: "Yogyakarta - Culture Day", activities: ["Borobudur Temple visit", "Prambanan Temple", "Cultural workshop", "Traditional dinner"] },
        { day: 6, title: "Surabaya - ITS", activities: ["Travel ke Surabaya", "ITS campus tour", "Engineering lab visit", "Hotel check-in"] },
        { day: 7, title: "Surabaya - Unair", activities: ["Unair campus tour", "Medical simulation center", "Student life experience", "City tour Surabaya"] },
        { day: 8, title: "Jakarta Return", activities: ["Flight back to Jakarta", "Final Q&A session", "Certificate distribution", "Farewell dinner"] }
      ],
      included: [
        "Akomodasi hotel bintang 3 selama 9 malam",
        "Makan 3x sehari (breakfast, lunch, dinner)",
        "Transportasi antar kota (flight & bus)",
        "Campus tour guide profesional",
        "Semua tiket masuk kampus & wisata",
        "Travel insurance",
        "Campus visit certificate",
        "Merchandise bundle"
      ],
      notIncluded: [
        "Tiket pesawat dari kota asal ke Jakarta",
        "Pengeluaran pribadi",
        "Tips untuk guide (opsional)",
        "Biaya pendaftaran universitas"
      ],
      testimonials: [
        { name: "Andi Pratama", avatar: "A", rating: 5, text: "Program yang sangat membantu! Saya jadi lebih yakin memilih jurusan dan kampus yang tepat.", date: "2 minggu lalu" },
        { name: "Siti Nurhaliza", avatar: "S", rating: 5, text: "Worth it banget! Bisa keliling 6 kampus sekaligus dengan harga terjangkau.", date: "1 bulan lalu" }
      ]
    },
    2: {
      id: 2,
      title: "Engineering Universities Bundle",
      image: japanImage,
      price: "Rp 5.200.000",
      originalPrice: "Rp 7.500.000",
      savings: "Rp 2.300.000",
      rating: 4.8,
      reviews: 123,
      participants: "12-16 siswa",
      universities: ["ITB", "ITS", "Telkom University", "Unpar"],
      duration: "7D6N",
      badge: "SPECIALIST",
      category: "domestic",
      overview: "Fokus ke kampus-kampus engineering terbaik Indonesia. Cocok untuk siswa yang passion di bidang teknik, teknologi, dan inovasi.",
      itinerary: [
        { day: 1, title: "Bandung - ITB Tour", activities: ["Arrival di Bandung", "ITB Campus Ganesha tour", "Engineering labs visit", "Innovation center"] },
        { day: 2, title: "Bandung - Telkom & Tech Park", activities: ["Telkom University tour", "Digital creative lab", "Tech startup incubator", "Industry visit"] },
        { day: 3, title: "Bandung - Unpar Engineering", activities: ["Unpar campus tour", "Civil engineering lab", "Architecture faculty", "Bandung tech tour"] },
        { day: 4, title: "Travel to Surabaya", activities: ["Flight to Surabaya", "City orientation", "Hotel check-in", "Free evening"] },
        { day: 5, title: "Surabaya - ITS Day 1", activities: ["ITS campus main tour", "Shipbuilding lab", "Robotics center", "Student dorm visit"] },
        { day: 6, title: "Surabaya - ITS Day 2", activities: ["Engineering departments tour", "Research facilities", "Career guidance", "Industry partnership expo"] }
      ],
      included: [
        "Hotel accommodation 6 nights",
        "All meals included",
        "Inter-city transportation",
        "Professional engineering tour guide",
        "Lab access & demonstration",
        "Workshop materials",
        "Certificate of completion",
        "Engineering kit merchandise"
      ],
      notIncluded: [
        "Flight from origin city",
        "Personal expenses",
        "Optional tips",
        "University application fees"
      ],
      testimonials: [
        { name: "Budi Santoso", avatar: "B", rating: 5, text: "Sangat informatif! Bisa lihat langsung lab-lab canggih dan berbicara dengan dosen.", date: "3 minggu lalu" },
        { name: "Rini Anggraini", avatar: "R", rating: 4, text: "Program yang bagus untuk yang mau masuk teknik. Dapat banyak insight!", date: "1 bulan lalu" }
      ]
    },
    5: {
      id: 5,
      title: "Singapore Universities Complete Tour",
      image: singaporeImage,
      price: "Rp 15.500.000",
      originalPrice: "Rp 22.000.000",
      savings: "Rp 6.500.000",
      rating: 4.9,
      reviews: 87,
      participants: "8-12 siswa",
      universities: ["NUS", "NTU", "SMU", "SIT"],
      duration: "6D5N",
      badge: "INTERNATIONAL",
      category: "international",
      overview: "Eksplorasi universitas-universitas terbaik Singapore dalam satu trip! Program ini memberikan gambaran lengkap tentang study abroad di Singapore.",
      itinerary: [
        { day: 1, title: "Arrival Singapore", activities: ["Airport pickup", "Hotel check-in", "Orientation session", "Marina Bay evening tour"] },
        { day: 2, title: "NUS Campus Tour", activities: ["NUS main campus tour", "Faculty visits", "Library & facilities", "Meet Indonesian students", "Gardens by the Bay"] },
        { day: 3, title: "NTU Exploration", activities: ["NTU campus tour", "Innovation labs", "Student life experience", "Scholarship info session", "Sentosa Island"] },
        { day: 4, title: "SMU & City Life", activities: ["SMU city campus tour", "Business school visit", "Networking session", "Orchard Road shopping", "Chinatown cultural tour"] },
        { day: 5, title: "SIT & Industry Visit", activities: ["SIT campus tour", "Industry partnership demo", "Career opportunities talk", "Universal Studios"] },
        { day: 6, title: "Departure", activities: ["Final Q&A session", "Certificate ceremony", "Airport transfer", "Departure"] }
      ],
      included: [
        "Hotel bintang 4 di pusat kota (5 malam)",
        "Sarapan hotel + 8x makan",
        "Airport transfer & all transportation",
        "All campus tour & entrance fees",
        "Professional bilingual guide",
        "Singapore attractions tickets",
        "Travel insurance international",
        "Scholarship consultation session"
      ],
      notIncluded: [
        "Flight ticket Jakarta-Singapore PP",
        "Singapore visa (if required)",
        "Lunch & dinner (some days)",
        "Personal shopping",
        "Tips (optional)"
      ],
      testimonials: [
        { name: "Jessica Tan", avatar: "J", rating: 5, text: "Amazing experience! Sangat membantu untuk persiapan kuliah di Singapore.", date: "2 minggu lalu" },
        { name: "Ryan Wijaya", avatar: "R", rating: 5, text: "Tour guide-nya expert dan semua universitas dikunjungi dengan detail. Recommended!", date: "3 minggu lalu" }
      ]
    }
  };

  const bundling = bundlingData[Number(id)];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan paket bundling ${bundling?.title}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  if (!bundling) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Paket tidak ditemukan</h1>
          <Button asChild>
            <Link to="/paket-tour/bundling">Kembali ke Bundling</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/paket-tour/bundling">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Bundling Paket
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={bundling.image} 
                alt={bundling.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-primary text-primary-foreground font-bold">
                  {bundling.badge}
                </Badge>
                <Badge className="bg-orange-500 text-white">
                  {bundling.duration}
                </Badge>
              </div>
            </div>

            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{bundling.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">{bundling.rating}</span>
                  <span>({bundling.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{bundling.participants}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{bundling.duration}</span>
                </div>
              </div>

              {/* Universities */}
              <div className="flex flex-wrap gap-2">
                {bundling.universities.map((uni: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    {uni}
                  </Badge>
                ))}
              </div>
            </div>

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
                    <h2 className="text-2xl font-bold mb-4">Tentang Program</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {bundling.overview}
                    </p>

                    <h3 className="text-xl font-bold mb-3">Yang Termasuk:</h3>
                    <div className="space-y-2 mb-6">
                      {bundling.included.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-3">Tidak Termasuk:</h3>
                    <div className="space-y-2">
                      {bundling.notIncluded.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-muted-foreground">• {item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-4">
                {bundling.itinerary.map((day: any, idx: number) => (
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
                {bundling.testimonials.map((testimonial: any, idx: number) => (
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
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-3xl font-bold text-primary">{bundling.price}</span>
                      <span className="text-sm text-muted-foreground">/pax</span>
                    </div>
                    <div className="text-sm text-muted-foreground line-through">{bundling.originalPrice}</div>
                    <Badge variant="outline" className="text-success border-success mt-2">
                      Hemat {bundling.savings}
                    </Badge>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Durasi</span>
                      <span className="font-medium">{bundling.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Peserta</span>
                      <span className="font-medium">{bundling.participants}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Universitas</span>
                      <span className="font-medium">{bundling.universities.length} kampus</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-success hover:bg-success/90 text-success-foreground"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Book via WhatsApp
                  </Button>

                  <div className="text-center text-xs text-muted-foreground">
                    Respon cepat • Konsultasi gratis
                  </div>
                </div>

                <div className="border-t mt-6 pt-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Check className="h-4 w-4 mr-2 text-success" />
                    Keuntungan Booking
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Harga lebih murah 25-40%</li>
                    <li>✓ Gratis konsultasi pemilihan kampus</li>
                    <li>✓ Flexible payment terms</li>
                    <li>✓ Money back guarantee</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundlingDetail;