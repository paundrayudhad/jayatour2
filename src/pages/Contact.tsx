import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, kami akan segera menghubungi Anda.",
    });
    setFormData({
      nama: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya ingin bertanya tentang program college tour. Bisa minta informasi lengkapnya?");
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ada pertanyaan tentang program college tour? Tim kami siap membantu Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Alamat Kantor</h3>
                    <p className="text-sm text-muted-foreground">
                      Jl. Pendidikan No. 123<br />
                      Jakarta Selatan 12345<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telepon</h3>
                    <p className="text-sm text-muted-foreground">
                      +62 21 1234 5678<br />
                      +62 812 3456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      info@jayatour.com<br />
                      booking@jayatour.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Jam Operasional</h3>
                    <p className="text-sm text-muted-foreground">
                      Senin - Jumat: 08:00 - 18:00<br />
                      Sabtu: 08:00 - 15:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kontak Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-success hover:bg-success/90 text-success-foreground mb-4"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat via WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Respon lebih cepat melalui WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <p className="text-muted-foreground">
                  Isi form di bawah ini dan kami akan menghubungi Anda segera
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Nama Lengkap *</label>
                      <Input
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">No. Telepon *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="08123456789"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Subjek *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Pilih subjek pesan"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Pesan *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Pertanyaan yang Sering Diajukan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Bagaimana cara booking?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Proses booking sangat mudah melalui WhatsApp atau form online
              </p>
              <Button variant="outline" size="sm">
                Lihat Panduan
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Apakah ada refund policy?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ya, kami memiliki kebijakan pengembalian dana yang fleksibel
              </p>
              <Button variant="outline" size="sm">
                Baca Kebijakan
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Apakah tour guide tersedia?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Semua program dilengkapi dengan tour guide berpengalaman
              </p>
              <Button variant="outline" size="sm">
                Lihat Detail
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;