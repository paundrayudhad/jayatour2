import { MessageCircle, CreditCard, Calendar, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HowToBook = () => {
  const bookingSteps = [
    {
      step: 1,
      title: "Pilih Program",
      description: "Pilih program college tour yang sesuai dengan kebutuhan Anda",
      details: [
        "Browse paket tour di website",
        "Bandingkan harga dan fasilitas",
        "Baca detail program dan jadwal",
        "Cek ketersediaan seat dan tanggal"
      ],
      icon: <Calendar className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Hubungi Kami",
      description: "Kontak tim JayaTour melalui berbagai channel yang tersedia",
      details: [
        "WhatsApp: +62 812 3456 7890",
        "Email: booking@jayatour.com",
        "Telepon: +62 21 1234 5678",
        "Kunjungi kantor langsung"
      ],
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Konsultasi",
      description: "Diskusikan detail program dengan customer service kami",
      details: [
        "Konfirmasi tanggal dan program",
        "Diskusi kebutuhan khusus",
        "Tanya jawab seputar program",
        "Dapatkan penawaran terbaik"
      ],
      icon: <Phone className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Booking Konfirmasi",
      description: "Lakukan booking dan pembayaran deposit",
      details: [
        "Isi form booking dengan lengkap",
        "Upload dokumen yang diperlukan",
        "Bayar DP minimal 30%",
        "Terima konfirmasi booking"
      ],
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Persiapan",
      description: "Persiapkan dokumen dan pelunasan pembayaran",
      details: [
        "Pelunasan H-7 sebelum keberangkatan",
        "Terima briefing pre-departure",
        "Persiapkan dokumen perjalanan",
        "Join group WhatsApp peserta"
      ],
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const paymentMethods = [
    {
      category: "Transfer Bank",
      methods: ["BCA", "Mandiri", "BNI", "BRI"],
      description: "Transfer ke rekening resmi JayaTour"
    },
    {
      category: "E-Wallet",
      methods: ["OVO", "DANA", "GoPay", "ShopeePay"],
      description: "Pembayaran digital yang mudah dan cepat"
    },
    {
      category: "Kartu Kredit",
      methods: ["Visa", "Mastercard", "JCB"],
      description: "Dapat dicicil sesuai ketentuan bank"
    }
  ];

  const requiredDocs = [
    {
      doc: "Fotokopi KTP/KK",
      description: "Untuk verifikasi identitas peserta",
      mandatory: true
    },
    {
      doc: "Pas Foto 3x4",
      description: "2 lembar foto terbaru",
      mandatory: true
    },
    {
      doc: "Surat Izin Orang Tua",
      description: "Khusus peserta di bawah 18 tahun",
      mandatory: true
    },
    {
      doc: "Fotokopi Kartu Pelajar",
      description: "Untuk mendapat student rate",
      mandatory: false
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya ingin booking college tour. Bisa dibantu prosesnya?");
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cara Booking
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ikuti langkah mudah untuk booking program college tour impian Anda
          </p>
        </div>

        {/* Booking Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Langkah-langkah Booking</h2>
          <div className="space-y-8">
            {bookingSteps.map((step, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-primary">{step.icon}</div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Metode Pembayaran</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((payment, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{payment.category}</CardTitle>
                  <p className="text-sm text-muted-foreground">{payment.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {payment.methods.map((method, methodIdx) => (
                      <Badge key={methodIdx} variant="outline">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              * Semua pembayaran akan mendapat receipt resmi dan dapat digunakan untuk reimbursement
            </p>
          </div>
        </div>

        {/* Required Documents */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Dokumen yang Diperlukan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocs.map((doc, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{doc.doc}</h3>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                    <Badge variant={doc.mandatory ? "default" : "secondary"} className="ml-2">
                      {doc.mandatory ? "Wajib" : "Opsional"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Informasi Kontak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Respon tercepat dan bisa konsultasi langsung
                </p>
                <Button onClick={handleWhatsAppClick} className="bg-success hover:bg-success/90">
                  Chat Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  +62 21 1234 5678<br />
                  Senin-Jumat 08:00-18:00
                </p>
                <Button variant="outline">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  booking@jayatour.com<br />
                  Respon dalam 24 jam
                </p>
                <Button variant="outline">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="max-w-2xl mx-auto text-center bg-gradient-hero text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Siap Memulai Petualangan Pendidikan?</h2>
            <p className="mb-6 opacity-90">
              Jangan tunggu lagi! Slot terbatas untuk setiap program. 
              Booking sekarang dan dapatkan early bird discount.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Booking Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowToBook;