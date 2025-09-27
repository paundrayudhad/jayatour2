import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const paketTourItems = [
    { label: t('allPackages'), href: "/paket-tour" },
    { label: t('bundlingDeals'), href: "/paket-tour/bundling" },
    { label: t('international'), href: "/paket-tour/internasional" },
    { label: t('specialPromo'), href: "/paket-tour/promo" },
    { label: t('flashSale'), href: "/paket-tour/flash-sale" },
    { label: t('popularDestinations'), href: "/paket-tour/destinasi" },
  ];

  const pengalamanItems = [
    { label: t('gallery'), href: "/pengalaman/galeri" },
    { label: t('testimonials'), href: "/pengalaman/testimoni" },
    { label: t('blog'), href: "/pengalaman/blog" },
  ];

  const tentangItems = [
    { label: t('profile'), href: "/tentang/profil" },
    { label: t('howToBook'), href: "/tentang/cara-booking" },
    { label: t('faq'), href: "/tentang/faq" },
    { label: t('contact'), href: "/tentang/kontak" },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('whatsappMessage'));
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero shadow-float">
            <span className="text-xl font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-2xl font-display font-bold text-primary">SabajayaTour</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
              isActive("/") ? "text-primary font-semibold" : "text-foreground"
            }`}
          >
            {t('home')}
          </Link>

          {/* Paket Tour Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium transition-all duration-300 hover:text-primary hover:scale-105 text-foreground">
              {t('packages')}
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 glass-effect border-border/50">
              {paketTourItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="w-full font-medium transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Pengalaman Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium transition-all duration-300 hover:text-primary hover:scale-105 text-foreground">
              {t('experience')}
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 glass-effect border-border/50">
              {pengalamanItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="w-full font-medium transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tentang Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium transition-all duration-300 hover:text-primary hover:scale-105 text-foreground">
              {t('about')}
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 glass-effect border-border/50">
              {tentangItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="w-full font-medium transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden md:flex items-center space-x-2 hover:bg-primary/10"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </Button>

          {/* WhatsApp CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center space-x-2 bg-success hover:bg-success/90 text-success-foreground rounded-full px-6 py-2.5 font-semibold shadow-card hover:shadow-float transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{t('whatsappButton')}</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="container px-4 py-6 space-y-6">
            <Link
              to="/"
              className="block font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            
            <div className="space-y-4">
              <div className="font-semibold text-foreground">{t('packages')}</div>
              <div className="pl-4 space-y-3">
                {paketTourItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-semibold text-foreground">{t('experience')}</div>
              <div className="pl-4 space-y-3">
                {pengalamanItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-semibold text-foreground">{t('about')}</div>
              <div className="pl-4 space-y-3">
                {tentangItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuApp(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                onClick={toggleLanguage}
                className="w-full justify-center"
              >
                <Globe className="mr-2 h-4 w-4" />
                {language === 'id' ? 'English' : 'Bahasa Indonesia'}
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 bg-success hover:bg-success/90 text-success-foreground rounded-full font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t('whatsappButton')}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

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