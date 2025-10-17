import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Calendar, Users, Clock, Plane, MessageCircle, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import japanImage from "@/assets/japan-fuji.jpg";
import singaporeImage from "@/assets/singapore-skyline.jpg";

const InternationalDetail = () => {
  const { id } = useParams();
  
  const tourData: Record<number, any> = {
    1: {
      title: "Japan Cherry Blossom 7D6N",
      image: japanImage,
      price: "Rp 15.500.000",
      originalPrice: "Rp 18.000.000",
      rating: 4.7,
      reviews: 67,
      location: "Tokyo-Osaka, Japan",
      duration: "7 Hari 6 Malam",
      participants: "Min 2 orang",
      seats: 8,
      totalSeats: 15,
      availableDates: ["15 Mar 2024", "22 Mar 2024", "5 Apr 2024", "12 Apr 2024"],
      highlights: ["Mount Fuji", "Tokyo Disneyland", "Kyoto Temple", "Osaka Castle"],
      itinerary: [
        { day: "Day 1", activity: "Jakarta - Tokyo - Asakusa Temple", time: "Full Day" },
        { day: "Day 2", activity: "Tokyo Disneyland - Shibuya Crossing", time: "Full Day" },
        { day: "Day 3", activity: "Mount Fuji - Hakone - Lake Ashi", time: "Full Day" },
        { day: "Day 4", activity: "Tokyo - Kyoto - Kiyomizu Temple", time: "Full Day" },
        { day: "Day 5", activity: "Kyoto - Osaka - Osaka Castle", time: "Full Day" },
        { day: "Day 6", activity: "Universal Studios Japan", time: "Full Day" },
        { day: "Day 7", activity: "Shopping - Departure", time: "Half Day" }
      ],
      includes: [
        "Tiket pesawat PP Jakarta-Tokyo",
        "Hotel bintang 4 (6 malam)",
        "Makan sesuai program",
        "Tour guide berbahasa Indonesia",
        "Transportasi selama tour",
        "Tiket masuk destinasi wisata",
        "Visa Jepang",
        "Travel insurance"
      ],
      excludes: [
        "Pengeluaran pribadi",
        "Tip guide & driver",
        "Makanan di luar program",
        "Laundry"
      ],
      testimonials: [
        {
          name: "Lisa Wijaya",
          city: "Jakarta",
          rating: 5,
          text: "Trip ke Jepang sangat berkesan! Musim sakura nya indah banget, guide ramah dan hotel nyaman. Worth it!",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        {
          name: "Budi Santoso",
          city: "Bandung",
          rating: 5,
          text: "Paket tour nya lengkap, jadwal teratur, dan tidak terlalu padat. Bisa enjoy setiap destinasi.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        }
      ]
    },
    2: {
      title: "Singapore Malaysia 5D4N",
      image: singaporeImage,
      price: "Rp 4.200.000",
      originalPrice: "Rp 5.000.000",
      rating: 4.6,
      reviews: 156,
      location: "Singapore-Malaysia",
      duration: "5 Hari 4 Malam",
      participants: "Min 2 orang",
      seats: 12,
      totalSeats: 20,
      availableDates: ["10 Nov 2024", "17 Nov 2024", "24 Nov 2024", "1 Des 2024"],
      highlights: ["Marina Bay Sands", "Universal Studios", "Genting Highland", "KL Twin Tower"],
      itinerary: [
        { day: "Day 1", activity: "Jakarta - Singapore - Marina Bay", time: "Full Day" },
        { day: "Day 2", activity: "Universal Studios - Sentosa Island", time: "Full Day" },
        { day: "Day 3", activity: "Singapore - Kuala Lumpur - Twin Tower", time: "Full Day" },
        { day: "Day 4", activity: "Genting Highland - Cameron Highland", time: "Full Day" },
        { day: "Day 5", activity: "Shopping - Departure", time: "Half Day" }
      ],
      includes: [
        "Tiket pesawat PP",
        "Hotel bintang 4",
        "Transport AC",
        "Tour guide",
        "Makan sesuai program",
        "Tiket masuk wisata"
      ],
      excludes: [
        "Pengeluaran pribadi",
        "Tip guide",
        "Asuransi perjalanan"
      ],
      testimonials: [
        {
          name: "Ani Kurnia",
          city: "Surabaya",
          rating: 5,
          text: "Paket Singapore Malaysia sangat worth it! Destinasi lengkap, hotel strategis.",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
        }
      ]
    }
  };

  const tour = tourData[Number(id)];
  
  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour tidak ditemukan</h1>
          <Button asChild>
            <Link to="/paket-tour/internasional">Kembali ke Paket Internasional</Link>
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
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/paket-tour/internasional">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Paket Internasional
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="testimonials">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Detail Paket</CardTitle>
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
                          <div className="font-medium">Peserta</div>
                          <div className="text-sm text-muted-foreground">{tour.participants}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Plane className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Destinasi</div>
                          <div className="text-sm text-muted-foreground">{tour.highlights.length} tempat</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Termasuk</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tour.includes.map((item: string, idx: number) => (
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
                        {tour.excludes.map((item: string, idx: number) => (
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

              <TabsContent value="itinerary" className="space-y-4">
                {tour.itinerary.map((item: any, idx: number) => (
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

              <TabsContent value="testimonials" className="space-y-4">
                {tour.testimonials.map((testimonial: any, idx: number) => (
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
                              <p className="text-sm text-muted-foreground">{testimonial.city}</p>
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

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                {tour.originalPrice && (
                  <div className="text-sm text-muted-foreground line-through">{tour.originalPrice}</div>
                )}
                <CardTitle className="text-2xl text-primary">{tour.price}</CardTitle>
                <p className="text-sm text-muted-foreground">per orang</p>
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
                      {tour.availableDates.map((date: string, idx: number) => (
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
                  * Harga dapat berubah sewaktu-waktu
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalDetail;
