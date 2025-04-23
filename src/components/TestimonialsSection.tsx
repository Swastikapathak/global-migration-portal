
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Successful Canada PR",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    text: "Global Migration Portal made my dream of moving to Canada come true. The Express Entry process was smooth and their guidance was invaluable. I'm now enjoying my new life in Toronto!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Zhang",
    title: "Australia Business Visa",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    text: "The team's expertise in Australian immigration is unmatched. They helped me secure a Business Innovation Visa and provided guidance on setting up my business in Sydney. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Petrova",
    title: "EU Blue Card Holder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    text: "Moving to Germany seemed impossible until I found Global Migration Portal. Their step-by-step assistance with the EU Blue Card application was exceptional. Now I'm working in Berlin at my dream job!",
    rating: 5
  },
  {
    id: 4,
    name: "Rajesh Patel",
    title: "Student to PR Pathway",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    text: "Started with a student visa to Canada and now have my PR, all thanks to Global Migration Portal. Their long-term strategy and constant support made it possible. Forever grateful!",
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialsLength = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === testimonialsLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonialsLength - 1 : current - 1);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [current, autoplay]);

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    setAutoplay(false);
    
    if (direction === 'prev') {
      prevSlide();
    } else {
      nextSlide();
    }
    
    // Restart autoplay after manual navigation
    setTimeout(() => {
      setAutoplay(true);
    }, 5000);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading animate-on-scroll">
          Success <span className="text-mocha">Stories</span>
        </h2>
        <p className="section-subheading animate-on-scroll">
          Don't just take our word for it. Hear from our clients who have successfully migrated with our help.
        </p>

        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform ease-out duration-500" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-mocha">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={18} className="fill-gold text-gold" />
                          ))}
                        </div>
                        <blockquote>
                          <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                          <footer>
                            <div className="font-montserrat font-bold text-lg">{testimonial.name}</div>
                            <div className="text-mocha">{testimonial.title}</div>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => handleNavigation('prev')}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gold hover:text-white transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleNavigation('next')}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gold hover:text-white transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 5000);
                }}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  index === current ? "w-6 bg-mocha" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
