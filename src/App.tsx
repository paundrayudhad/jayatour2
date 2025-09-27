import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import PaketTour from "./pages/PaketTour";
import PaketDomestik from "./pages/PaketDomestik";
import PaketInternasional from "./pages/PaketInternasional";
import FlashSale from "./pages/FlashSale";
import Galeri from "./pages/Galeri";
import Testimoni from "./pages/Testimoni";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/paket-tour" element={<PaketTour />} />
            <Route path="/paket-tour/domestik" element={<PaketDomestik />} />
            <Route path="/paket-tour/internasional" element={<PaketInternasional />} />
            <Route path="/paket-tour/flash-sale" element={<FlashSale />} />
            <Route path="/pengalaman/galeri" element={<Galeri />} />
            <Route path="/pengalaman/testimoni" element={<Testimoni />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
