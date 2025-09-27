import { Award, Users, Globe, Heart, Star, CheckCircle, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Profil = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: "2015", event: "Berdirinya SabajayaTour", description: "Memulai perjalanan dengan visi menjadi agen travel terpercaya" },
    { year: "2017", event: "Ekspansi Internasional", description: "Membuka layanan tour internasional ke Asia dan Eropa" },
    { year: "2019", event: "10,000+ Pelanggan", description: "Mencapai milestone 10,000 pelanggan puas" },
    { year: "2021", event: "Digital Transformation", description: "Launching platform booking online dan customer service 24/7" },
    { year: "2023", event: "Award Terbaik", description: "Meraih penghargaan 'Best Travel Agent Indonesia 2023'" },
    { year: "2024", event: "Sustainable Tourism", description: "Meluncurkan program wisata berkelanjutan dan ramah lingkungan" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "Kecintaan mendalam terhadap dunia travel dan memberikan pengalaman terbaik untuk setiap pelanggan."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Mengutamakan keamanan dan kenyamanan pelanggan dengan standar keselamatan internasional."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Komitmen untuk memberikan layanan berkualitas tinggi dan melampaui ekspektasi pelanggan."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Jaringan partner internasional yang luas untuk memberikan pengalaman travel terbaik di seluruh dunia."
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Happy Travelers", icon: Users },
    { number: "500+", label: "Destinasi", icon: Globe },
    { number: "9", label: "Tahun Pengalaman", icon: Clock },
    { number: "4.9/5", label: "Rating Kepuasan", icon: Star }
  ];

  const certifications = [
    "ASITA (Association of Indonesian Tours and Travel Agencies)",
    "IATA (International Air Transport Association)",
    "ISO 9001:2015 Quality Management System",
    "Halal Tourism Certified",
    "Sustainable Tourism Certificate"
  ];

  return (
    <div className="min-h-screen bg-gradient-premium">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-display font-display font-bold mb-6">
              Tentang SabajayaTour
            </h1>
            <p className="text-body-lg mb-8 text-white/90">
              Perjalanan kami dimulai dengan satu misi sederhana: membuat setiap petualangan menjadi kenangan yang tak terlupakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="bg-accent text-accent-foreground px-6 py-3 text-lg font-semibold">
                🏆 Best Travel Agent 2023
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white px-6 py-3 text-lg font-semibold">
                ⭐ 4.9/5 Customer Rating
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-hero font-display font-bold mb-6 text-foreground">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <strong className="text-foreground">SabajayaTour</strong> lahir dari kecintaan mendalam terhadap keindahan Indonesia dan dunia. Didirikan pada tahun 2015 oleh sekelompok travel enthusiast yang memiliki visi sama: membuat perjalanan menjadi lebih mudah, aman, dan berkesan.
                </p>
                <p>
                  Kami memahami bahwa setiap perjalanan adalah cerita unik. Dari backpacker budget hingga luxury traveler, dari solo adventure hingga family vacation, setiap pelanggan memiliki impian dan kebutuhan yang berbeda. Itulah mengapa kami berkomitmen untuk memberikan layanan yang personal dan sesuai dengan harapan Anda.
                </p>
                <p>
                  Selama 9 tahun perjalanan, kami telah melayani lebih dari 50,000 travelers bahagia, mengunjungi 500+ destinasi di seluruh dunia, dan membangun jaringan partner terpercaya di berbagai negara. Setiap pencapaian ini adalah hasil dari kepercayaan Anda kepada kami.
                </p>
                <p>
                  Hari ini, <strong className="text-foreground">SabajayaTour</strong> bukan hanya agen travel, tapi partner perjalanan yang memahami impian Anda dan berkomitmen mewujudkannya dengan pelayanan terbaik.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, idx) => (
                <Card key={idx} className="card-premium text-center p-6">
                  <achievement.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground font-medium">{achievement.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-hero font-display font-bold mb-4 text-foreground">
              Nilai-Nilai Kami
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <Card key={idx} className="card-premium text-center p-8 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-hero font-display font-bold mb-4 text-foreground">
              Perjalanan Kami
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Milestone penting dalam perjalanan SabajayaTour menuju visi menjadi travel agent terpercaya
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative flex items-start space-x-8">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-float">
                        <span className="text-white font-bold">{milestone.year}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <Card className="card-premium flex-1 p-6">
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-hero font-display font-bold mb-4 text-foreground">
              Sertifikasi & Penghargaan
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Pengakuan resmi atas komitmen kami terhadap kualitas dan profesionalitas
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="card-premium p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Card className="card-premium bg-gradient-hero text-white text-center p-12">
            <h2 className="text-hero font-display font-bold mb-4">
              Siap Memulai Petualangan Anda?
            </h2>
            <p className="text-body-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan traveler yang telah mempercayakan perjalanan impian mereka kepada kami. 
              Wujudkan destinasi impian Anda bersama SabajayaTour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                Lihat Paket Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                Hubungi Kami
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Profil;