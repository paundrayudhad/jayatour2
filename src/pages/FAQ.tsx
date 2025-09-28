import { Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      category: "Umum",
      questions: [
        {
          question: "Apa itu JayaTour College Tour?",
          answer: "JayaTour College Tour adalah program kunjungan kampus yang dirancang khusus untuk siswa SMA yang ingin mengenal lebih dekat universitas-universitas terbaik. Program ini meliputi campus tour, bertemu dengan mahasiswa dan dosen, serta mendapatkan informasi lengkap tentang program studi."
        },
        {
          question: "Siapa saja yang bisa mengikuti program ini?",
          answer: "Program ini terbuka untuk siswa SMA kelas 10, 11, dan 12, serta gap year students yang sedang mempertimbangkan pilihan universitas. Orang tua juga dapat ikut serta dalam program tertentu."
        },
        {
          question: "Berapa lama durasi program college tour?",
          answer: "Durasi program bervariasi dari 2-5 hari tergantung paket yang dipilih. Open College Tour biasanya 4-5 hari, Private Tour 2-3 hari, dan Study Abroad Visit 3-4 hari."
        }
      ]
    },
    {
      category: "Booking & Pembayaran",
      questions: [
        {
          question: "Bagaimana cara melakukan booking?",
          answer: "Anda dapat melakukan booking melalui: 1) WhatsApp di +62 812 3456 7890, 2) Form online di website, 3) Datang langsung ke kantor kami. Tim kami akan membantu proses booking dan memberikan informasi detail."
        },
        {
          question: "Kapan deadline pembayaran?",
          answer: "DP minimal 30% harus dibayar maksimal 3 hari setelah konfirmasi booking. Pelunasan dilakukan H-7 sebelum keberangkatan. Kami menerima transfer bank, e-wallet, dan kartu kredit."
        },
        {
          question: "Apakah ada potongan harga untuk grup?",
          answer: "Ya! Tersedia diskon grup: 5-10 siswa (5% discount), 11-15 siswa (10% discount), 16+ siswa (15% discount). Khusus untuk sekolah, tersedia paket khusus dengan harga lebih kompetitif."
        },
        {
          question: "Bagaimana kebijakan refund/pembatalan?",
          answer: "H-14 sebelum keberangkatan: refund 100% (minus admin fee). H-7 sampai H-14: refund 50%. H-3 sampai H-7: refund 25%. Kurang dari H-3: tidak dapat refund. Force majeure dapat negotiable."
        }
      ]
    },
    {
      category: "Program & Fasilitas",
      questions: [
        {
          question: "Apa saja yang termasuk dalam paket tour?",
          answer: "Paket termasuk: transportasi AC, akomodasi hotel, makan 3x sehari, tour guide, tiket masuk kampus, sertifikat partisipasi, welcome kit, dan dokumentasi. Tidak termasuk transportasi dari/ke kota asal dan pengeluaran pribadi."
        },
        {
          question: "Apakah ada tour guide yang mendampingi?",
          answer: "Ya, setiap grup didampingi oleh tour guide berpengalaman yang menguasai informasi kampus dan pendidikan tinggi. Untuk Study Abroad Program, tour guide juga fasih berbahasa Inggris."
        },
        {
          question: "Universitas mana saja yang dikunjungi?",
          answer: "Program reguler mengunjungi universitas top seperti UI, ITB, UGM, Unpad, ITS, dll. Untuk Private Tour, Anda dapat memilih universitas sesuai keinginan. Study Abroad Visit mencakup NUS, NTU, SMU di Singapura."
        },
        {
          question: "Apakah bisa ketemu dengan mahasiswa dan dosen?",
          answer: "Tentu! Setiap program includesesi sharing dengan mahasiswa aktif dan dialog dengan dosen/perwakilan fakultas. Ini adalah salah satu highlight utama program kami."
        }
      ]
    },
    {
      category: "Teknis & Keamanan",
      questions: [
        {
          question: "Bagaimana dengan akomodasi dan transportasi?",
          answer: "Kami menyediakan hotel bintang 3-4 dengan standar kebersihan tinggi. Transportasi menggunakan bus AC dengan driver berpengalaman dan asuransi perjalanan. Semua telah teruji safety dan comfort."
        },
        {
          question: "Apakah program aman untuk siswa?",
          answer: "Keamanan adalah prioritas utama. Setiap grup didampingi guide terlatih, ada koordinator lapangan 24jam, dan kami bekerja sama dengan universitas untuk memastikan keamanan peserta."
        },
        {
          question: "Bagaimana jika ada peserta yang sakit?",
          answer: "Kami memiliki protokol kesehatan lengkap. Tour guide membawa P3K, ada hotline medis 24 jam, dan kami akan mengatur penanganan medis jika diperlukan. Peserta disarankan membawa asuransi kesehatan."
        },
        {
          question: "Apakah ada dokumentasi program?",
          answer: "Ya! Kami menyediakan foto dan video dokumentasi selama program, sertifikat partisipasi, dan laporan kegiatan. Semua akan diberikan dalam bentuk digital setelah program selesai."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya punya pertanyaan yang tidak ada di FAQ. Bisa dibantu?");
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang program college tour kami
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Cari pertanyaan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQ.map((category, categoryIdx) => (
            <div key={categoryIdx} className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, idx) => (
                  <AccordionItem key={idx} value={`${categoryIdx}-${idx}`} className="border rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {filteredFAQ.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Tidak ditemukan FAQ yang sesuai dengan pencarian Anda.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchTerm("")}
              >
                Reset Pencarian
              </Button>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <Card className="max-w-2xl mx-auto mt-16 text-center">
          <CardHeader>
            <CardTitle>Pertanyaan Tidak Terjawab?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk menghubungi tim customer service kami.
              Kami siap membantu 24/7!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsAppClick} className="bg-success hover:bg-success/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat via WhatsApp
              </Button>
              <Button variant="outline">
                Kirim Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;