import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import PaketTour from "./pages/PaketTour";
import TourDetail from "./pages/TourDetail";
import PaketBundling from "./pages/PaketBundling";
import BundlingDetail from "./pages/BundlingDetail";
import PaketInternasional from "./pages/PaketInternasional";
import InternationalDetail from "./pages/InternationalDetail";
import FlashSale from "./pages/FlashSale";
import FlashSaleDetail from "./pages/FlashSaleDetail";
import Galeri from "./pages/Galeri";
import GalleryDetail from "./pages/GalleryDetail";
import Testimoni from "./pages/Testimoni";
import Blog from "./pages/Blog";
import Profil from "./pages/Profil";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import HowToBook from "./pages/HowToBook";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/paket-tour" element={<PaketTour />} />
              <Route path="/paket-tour/:id" element={<TourDetail />} />
              <Route path="/paket-tour/bundling" element={<PaketBundling />} />
              <Route path="/paket-tour/bundling/:id" element={<BundlingDetail />} />
              <Route path="/paket-tour/internasional" element={<PaketInternasional />} />
              <Route path="/paket-tour/internasional/:id" element={<InternationalDetail />} />
              <Route path="/paket-tour/flash-sale" element={<FlashSale />} />
              <Route path="/paket-tour/flash-sale/:id" element={<FlashSaleDetail />} />
              <Route path="/pengalaman/galeri" element={<Galeri />} />
              <Route path="/pengalaman/galeri/:id" element={<GalleryDetail />} />
              <Route path="/pengalaman/testimoni" element={<Testimoni />} />
              <Route path="/pengalaman/blog" element={<Blog />} />
              <Route path="/tentang/profil" element={<Profil />} />
              <Route path="/tentang/kontak" element={<Contact />} />
              <Route path="/tentang/faq" element={<FAQ />} />
              <Route path="/tentang/cara-booking" element={<HowToBook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
