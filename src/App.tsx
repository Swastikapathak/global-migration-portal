
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import AnimationProvider from "./contexts/AnimationContext";
import { lazy, Suspense } from "react";

// Eagerly load home page for initial render performance
import HomePage from "./pages/Index";

// Lazily load other pages
const AboutPage = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/Services"));
const FaqPage = lazy(() => import("./pages/Faq"));
const ContactPage = lazy(() => import("./pages/Contact"));
const BookingPage = lazy(() => import("./pages/Booking"));
const PaymentPage = lazy(() => import("./pages/Payment"));
const ThankYouPage = lazy(() => import("./pages/ThankYou"));
const BlogPage = lazy(() => import("./pages/Blog"));
const CanadaPage = lazy(() => import("./pages/Canada"));
const AustraliaPage = lazy(() => import("./pages/Australia"));
const EuropeanPage = lazy(() => import("./pages/European"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 bg-gold rounded-full mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

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
              <Route path="about" element={
                <Suspense fallback={<PageLoader />}>
                  <AboutPage />
                </Suspense>
              } />
              <Route path="services" element={
                <Suspense fallback={<PageLoader />}>
                  <ServicesPage />
                </Suspense>
              } />
              <Route path="canada" element={
                <Suspense fallback={<PageLoader />}>
                  <CanadaPage />
                </Suspense>
              } />

              <Route path="australia" element={
                <Suspense fallback={<PageLoader />}>
                  <AustraliaPage />
                </Suspense>
              } />
              <Route path="european" element={
                <Suspense fallback={<PageLoader />}>
                  <EuropeanPage />
                </Suspense>
              } />
              <Route path="faq" element={
                <Suspense fallback={<PageLoader />}>
                  <FaqPage />
                </Suspense>
              } />
              <Route path="contact" element={
                <Suspense fallback={<PageLoader />}>
                  <ContactPage />
                </Suspense>
              } />
              <Route path="booking" element={
                <Suspense fallback={<PageLoader />}>
                  <BookingPage />
                </Suspense>
              } />
              <Route path="payment" element={
                <Suspense fallback={<PageLoader />}>
                  <PaymentPage />
                </Suspense>
              } />
              <Route path="thank-you" element={
                <Suspense fallback={<PageLoader />}>
                  <ThankYouPage />
                </Suspense>
              } />
              <Route path="blog" element={
                <Suspense fallback={<PageLoader />}>
                  <BlogPage />
                </Suspense>
              } />
              <Route path="*" element={
                <Suspense fallback={<PageLoader />}>
                  <NotFound />
                </Suspense>
              } />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AnimationProvider>
  </QueryClientProvider>
);

export default App;
