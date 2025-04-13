import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { toast } from "@/lib/toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
});

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      formSchema.parse(formData);
      toast.success("Thank you! We'll contact you shortly to schedule your consultation.");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };
  
  return (
    <section className="section-padding bg-charcoal-gray text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-gold">Immigration Journey</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Book your personalized consultation with our immigration experts. We'll analyze your profile and recommend the best pathway for your goals.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Personalized immigration strategy",
                "Document checklist preparation",
                "Eligibility assessment for multiple programs",
                "Clear roadmap for your immigration journey"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-gold rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-black">
              <Link to="/booking" className="flex items-center">
                <CalendarPlus size={18} className="mr-2" /> Book Full Consultation
              </Link>
            </Button>
          </div>
          
          <div className="bg-white text-black p-8 rounded-lg shadow-xl animate-on-scroll">
            <h3 className="font-bold text-xl mb-6 text-center">Request a Call Back</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-black font-medium py-3">
                Request Call Back
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
