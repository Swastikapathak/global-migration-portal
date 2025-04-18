
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Canada Immigration",
    description: "Express Entry, Provincial Nominee Programs, Family Sponsorship, and Student Visas with Pathway to PR",
    imageUrl: "https://images.unsplash.com/photo-1486130866659-157d3080a652?ixlib=rb-4.0.3",
    link: "/services"
  },
  {
    id: 2,
    title: "Australia Migration",
    description: "Skilled Independent Visa, Employer Sponsored Visas, Business Innovation Visas, and Regional Migration Program",
    imageUrl: "https://images.unsplash.com/photo-1494233914607-8d8722ce3906?ixlib=rb-4.0.3",
    link: "/services"
  },
  {
    id: 3,
    title: "European Opportunities",
    description: "EU Blue Card Program, Entrepreneur Visas, Investment Immigration, and Work Permits",
    imageUrl: "https://images.unsplash.com/photo-1519677584237-752f8853252e?ixlib=rb-4.0.3",
    link: "/services"
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
          Our <span className="text-gold">Services</span>
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
                  className="text-gold font-semibold flex items-center hover:underline"
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
            className="inline-flex items-center py-3 px-6 rounded-full border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-black transition-colors duration-300"
          >
            View All Services <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
