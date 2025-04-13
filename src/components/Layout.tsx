
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const setupAnimations = () => {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      };

      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((el) => observer.observe(el));

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    };

    // Small delay to ensure DOM is ready before setting up animations
    const timer = setTimeout(() => {
      setupAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-run when route changes

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
