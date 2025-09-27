import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert("Terima kasih! Anda akan mendapatkan update terbaru dari SabajayaTour.");
  };

  return (
    <footer className="bg-secondary border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-ocean">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-xl font-bold text-primary">SabajayaTour</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Partner terpercaya untuk perjalanan impian Anda ke seluruh dunia. 
              Berpengalaman sejak 2015 melayani ribuan wisatawan dengan pelayanan terbaik.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/sabajayatour" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/sabajayatour" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@sabajayatour" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Menu Utama</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-muted-foreground hover:text-primary">Beranda</Link>
              <Link to="/paket-tour" className="block text-muted-foreground hover:text-primary">Semua Paket</Link>
              <Link to="/paket-tour/domestik" className="block text-muted-foreground hover:text-primary">Tour Domestik</Link>
              <Link to="/paket-tour/internasional" className="block text-muted-foreground hover:text-primary">Tour Internasional</Link>
              <Link to="/paket-tour/flash-sale" className="block text-muted-foreground hover:text-primary">Flash Sale</Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Bantuan</h3>
            <div className="space-y-2 text-sm">
              <Link to="/tentang/cara-booking" className="block text-muted-foreground hover:text-primary">Cara Booking</Link>
              <Link to="/tentang/faq" className="block text-muted-foreground hover:text-primary">FAQ</Link>
              <Link to="/tentang/profil" className="block text-muted-foreground hover:text-primary">Tentang Kami</Link>
              <Link to="/tentang/kontak" className="block text-muted-foreground hover:text-primary">Kontak</Link>
              <Link to="/pengalaman/testimoni" className="block text-muted-foreground hover:text-primary">Testimoni</Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@sabajayatour.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Jl. Wisata Raya No. 123, Jakarta Selatan</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 text-sm"
                  required
                />
                <Button type="submit" size="sm" variant="outline">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SabajayaTour. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;