
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1679758629328-c35d0ff10eab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1tZWdyYXRpb24lMjBzZXJ2aWNlJTIwY29tcGFueSUyMHdpdGglMjBhZXJvcGxhbmV8ZW58MHx8MHx8fDA%3D"
          alt="Global landmarks"
          className="w-full h-full object-cover transform-gpu transition-all duration-1000 ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container-custom relative z-10 pt-28">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in delay-100 ">
            <span className="block mb-3">Open Doors to</span>
            <span className="text-charcoal">Global Opportunities</span>
          </h1>
          {/* Hero Description */}
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in delay-300">
            Expert guidance for your immigration journey to Canada, Australia, and Europe.
            Transform your dreams into reality with our professional consultancy services.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button
              asChild
              size="lg"
              className="bg-mocha hover:bg-gold/90 text-black font-semibold px-8 text-base transform transition-transform hover:scale-105"
            >
              <Link to="/services">
                Explore Services <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className=" text-black hover:bg-white/10 px-8 text-base transform transition-transform hover:scale-105"
            >
              <Link to="/booking">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24"
        >
          <path
            fill="#ffffff"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,144.82,143.35,212.4,128.51,265.57,117.41,280.86,70.02,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;