import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import PaketTour from "./pages/PaketTour";
import PaketBundling from "./pages/PaketBundling";
import PaketInternasional from "./pages/PaketInternasional";
import FlashSale from "./pages/FlashSale";
import Galeri from "./pages/Galeri";
import Testimoni from "./pages/Testimoni";
import Blog from "./pages/Blog";
import Profil from "./pages/Profil";
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
              <Route path="/paket-tour/bundling" element={<PaketBundling />} />
              <Route path="/paket-tour/internasional" element={<PaketInternasional />} />
              <Route path="/paket-tour/flash-sale" element={<FlashSale />} />
              <Route path="/pengalaman/galeri" element={<Galeri />} />
              <Route path="/pengalaman/testimoni" element={<Testimoni />} />
              <Route path="/pengalaman/blog" element={<Blog />} />
              <Route path="/tentang/profil" element={<Profil />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
