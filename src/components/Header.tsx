import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const paketTourItems = [
    { label: "Semua Paket", href: "/paket-tour" },
    { label: "Domestik", href: "/paket-tour/domestik" },
    { label: "Internasional", href: "/paket-tour/internasional" },
    { label: "Promo Spesial", href: "/paket-tour/promo" },
    { label: "Flash Sale Harga", href: "/paket-tour/flash-sale" },
    { label: "Destinasi Populer", href: "/paket-tour/destinasi" },
  ];

  const pengalamanItems = [
    { label: "Galeri", href: "/pengalaman/galeri" },
    { label: "Testimoni", href: "/pengalaman/testimoni" },
    { label: "Artikel/Blog", href: "/pengalaman/blog" },
  ];

  const tentangItems = [
    { label: "Profil", href: "/tentang/profil" },
    { label: "Cara Booking", href: "/tentang/cara-booking" },
    { label: "FAQ", href: "/tentang/faq" },
    { label: "Kontak", href: "/tentang/kontak" },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya tertarik dengan paket tour SabajayaTour. Bisa minta informasi lebih lanjut?");
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-ocean">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold text-primary">SabajayaTour</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            Beranda
          </Link>

          {/* Paket Tour Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium transition-colors hover:text-primary text-foreground">
              Paket Tour
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {paketTourItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Pengalaman Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium transition-colors hover:text-primary text-foreground">
              Pengalaman
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {pengalamanItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tentang Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium transition-colors hover:text-primary text-foreground">
              Tentang
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {tentangItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* WhatsApp CTA Button */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center space-x-2 bg-success hover:bg-success/90 text-success-foreground rounded-full px-6"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Pesan via WhatsApp</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            
            <div className="space-y-2">
              <div className="font-medium text-foreground">Paket Tour</div>
              <div className="pl-4 space-y-2">
                {paketTourItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-foreground">Pengalaman</div>
              <div className="pl-4 space-y-2">
                {pengalamanItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-foreground">Tentang</div>
              <div className="pl-4 space-y-2">
                {tentangItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center space-x-2 bg-success hover:bg-success/90 text-success-foreground rounded-full"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Pesan via WhatsApp</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;