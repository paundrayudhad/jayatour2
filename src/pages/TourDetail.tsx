import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Calendar, Users, Clock, GraduationCap, MessageCircle, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import heroImage from "@/assets/hero-beach.jpg";
import templeImage from "@/assets/temple-java.jpg";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const TourDetail = () => {
  const { id } = useParams();
  
  // Mock data - in real app, fetch based on ID
  const tourData = {
    1: {
      title: "Open College Tour - Top Universities Indonesia",
      image: templeImage,
      price: "Rp 2.500.000",
      rating: 4.9,
      reviews: 234,
      location: "Jakarta - Bandung - Yogyakarta",
      duration: "5 Hari 4 Malam",
      participants: "10-15 siswa",
      seats: 12,
      totalSeats: 15,
      nextDate: "15 Nov 2024",
      availableDates: ["15 Nov 2024", "22 Nov 2024", "29 Nov 2024", "6 Des 2024"],
      universities: [
        { name: "Universitas Indonesia", city: "Jakarta", rank: "#1", programs: "Kedokteran, Teknik, Ekonomi" },
        { name: "Institut Teknologi Bandung", city: "Bandung", rank: "#2", programs: "Teknik, MIPA, Seni" },
        { name: "Universitas Gadjah Mada", city: "Yogyakarta", rank: "#3", programs: "Kedokteran, Sosial, Pertanian" },
        { name: "Universitas Padjadjaran", city: "Bandung", rank: "#4", programs: "Kedokteran, Hukum, Komunikasi" }
      ],
      schedule: [
        { day: "Hari 1", activity: "Arrival Jakarta - Campus Tour UI - Meet with Students", time: "08:00-17:00" },
        { day: "Hari 2", activity: "Travel to Bandung - ITB Campus Tour - Engineering Labs", time: "08:00-18:00" },
        { day: "Hari 3", activity: "Unpad Visit - Academic Fair - Travel to Yogyakarta", time: "08:00-20:00" },
        { day: "Hari 4", activity: "UGM Campus Tour - Cultural Experience - Faculty Meeting", time: "08:00-17:00" },
        { day: "Hari 5", activity: "Final Presentation - Q&A Session - Departure", time: "08:00-15:00" }
      ],
      includes: [
        "Transportasi AC selama tour",
        "Akomodasi hotel bintang 3",
        "Makan 3x sehari",
        "Tour guide berpengalaman",
        "Tiket masuk kampus",
        "Sertifikat partisipasi",
        "Welcome kit & merchandise"
      ],
      excludes: [
        "Tiket transportasi ke/dari kota asal",
        "Asuransi perjalanan",
        "Pengeluaran pribadi",
        "Biaya visa (jika diperlukan)"
      ],
      testimonials: [
        {
          name: "Sarah Putri",
          school: "SMA Negeri 1 Jakarta",
          rating: 5,
          text: "Program yang sangat bermanfaat! Saya jadi lebih yakin dengan pilihan jurusan dan universitas. Tour guide nya juga sangat informatif dan ramah.",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b693?w=100&h=100&fit=crop&crop=face"
        },
        {
          name: "Ahmad Rizki",
          school: "SMA Labschool Bandung", 
          rating: 5,
          text: "Keren banget bisa liat langsung fasilitas kampus dan ngobrol sama kakak tingkat. Jadi tau gimana kehidupan mahasiswa yang sebenarnya.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        }
      ]
    }
  };

  const tour = tourData[Number(id) as keyof typeof tourData];
  
  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour tidak ditemukan</h1>
          <Button asChild>
            <Link to="/paket-tour">Kembali ke Paket Tour</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(`Halo! Saya ingin booking ${tour.title}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/paket-tour">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Paket Tour
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{tour.title}</h1>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{tour.rating}</span>
                      <span>({tour.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="schedule">Jadwal</TabsTrigger>
                <TabsTrigger value="universities">Universitas</TabsTrigger>
                <TabsTrigger value="testimonials">Review</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Detail Program</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Durasi</div>
                          <div className="text-sm text-muted-foreground">{tour.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Kapasitas</div>
                          <div className="text-sm text-muted-foreground">{tour.participants}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Universitas</div>
                          <div className="text-sm text-muted-foreground">{tour.universities.length} kampus</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Yang Termasuk</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tour.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tidak Termasuk</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tour.excludes.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                {tour.schedule.map((item, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Badge variant="outline" className="bg-primary text-primary-foreground">
                          {item.day}
                        </Badge>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{item.activity}</h3>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="universities" className="space-y-4">
                {tour.universities.map((uni, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{uni.name}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{uni.city}</span>
                            </div>
                            <div>Program Unggulan: {uni.programs}</div>
                          </div>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          {uni.rank}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="testimonials" className="space-y-4">
                {tour.testimonials.map((testimonial, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed">{testimonial.text}</p>
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
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{tour.price}</CardTitle>
                <p className="text-sm text-muted-foreground">per siswa</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Seat Tersedia</span>
                    <Badge variant="outline" className={`${
                      tour.seats <= 5 ? 'bg-red-100 text-red-800' : 
                      tour.seats <= 10 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {tour.seats}/{tour.totalSeats}
                    </Badge>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Pilih Tanggal</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      {tour.availableDates.map((date, idx) => (
                        <option key={idx} value={date}>{date}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button 
                  className="w-full bg-success hover:bg-success/90 text-success-foreground"
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book via WhatsApp
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  * Pembayaran dapat dilakukan setelah konfirmasi booking
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;