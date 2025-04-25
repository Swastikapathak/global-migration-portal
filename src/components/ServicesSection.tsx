
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Canada Immigration",
    description: "Express Entry, Provincial Nominee Programs, Family Sponsorship, and Student Visas with Pathway to PR",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661645711536-2c06a6015e05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuYWRhJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/canada"
  },
  {
    id: 2,
    title: "Australia Migration",
    description: "Skilled Independent Visa, Employer Sponsored Visas, Business Innovation Visas, and Regional Migration Program",
    imageUrl: "https://plus.unsplash.com/premium_photo-1674588218282-0f031423194b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXVzdHJhaWxpYSUyMGZsYWd8ZW58MHx8MHx8fDA%3D",
    link: "/australia"
  },
  {
    id: 3,
    title: "European Opportunities",
    description: "EU Blue Card Program, Entrepreneur Visas, Investment Immigration, and Work Permits",
    imageUrl: "https://images.unsplash.com/photo-1625440153141-1ae4c27ff33b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXVyb3BlJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/european"
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-heading opacity-0">
          Our <span className="text-black">Services</span>
        </h2>
        <p className="section-subheading opacity-0">
          Comprehensive immigration solutions tailored to your needs. Our expert team guides you through every step of the process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="overflow-hidden opacity-0 border-none shadow-lg hover-scale transition-all duration-300" 
              ref={el => cardsRef.current[index] = el}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-700 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link 
                  to={service.link}
                  className="text-mocha font-semibold flex items-center hover:underline"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center py-3 px-6 rounded-full border-2 border-charcoal text-mocha font-semibold hover:bg-gold hover:text-black transition-colors duration-300"
          >
            View All Services <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;