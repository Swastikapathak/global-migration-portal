
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import AnimationProvider from "./contexts/AnimationContext";

// Pages
import HomePage from "./pages/Index";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import FaqPage from "./pages/Faq";
import ContactPage from "./pages/Contact";
import BookingPage from "./pages/Booking";
import PaymentPage from "./pages/Payment";
import ThankYouPage from "./pages/ThankYou";
import BlogPage from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AnimationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="booking" element={<BookingPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="thank-you" element={<ThankYouPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AnimationProvider>
  </QueryClientProvider>
);

export default App;
