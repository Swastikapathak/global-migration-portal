
import BookingCalendar from "@/components/BookingCalendar";
import { ClipboardList } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BookingPage = () => {
  useEffect(() => {
    document.title = "Book a Consultation - Global Migration Portal";
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Book Your <span className="text-gold">Consultation</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-in">
              Schedule a personalized consultation with our immigration experts to discuss your options and develop a tailored immigration strategy.
            </p>
            <div className="mt-4">
              <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                <Link to="/payment">
                  Skip to Payment Page
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-8">Your Immigration Journey Starts Here</h2>
              <p className="text-gray-700 mb-6">
                Our consultation sessions are designed to provide you with personalized immigration advice tailored to your unique situation and goals.
              </p>
              
              <div className="bg-gold/10 border border-gold/20 rounded-lg p-6 mb-8">
                <h3 className="flex items-center text-xl font-bold mb-4">
                  <ClipboardList className="mr-2 text-gold" size={24} />
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-gold text-black rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0 font-medium text-sm">
                      1
                    </span>
                    <span>
                      <span className="font-semibold">Thorough Assessment</span> - We'll evaluate your education, work experience, language skills, and personal circumstances.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gold text-black rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0 font-medium text-sm">
                      2
                    </span>
                    <span>
                      <span className="font-semibold">Immigration Options</span> - We'll explain suitable immigration pathways based on your profile and goals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gold text-black rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0 font-medium text-sm">
                      3
                    </span>
                    <span>
                      <span className="font-semibold">Personalized Strategy</span> - You'll receive a tailored action plan with clear steps and timeline.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gold text-black rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0 font-medium text-sm">
                      4
                    </span>
                    <span>
                      <span className="font-semibold">Cost & Timeline</span> - Detailed breakdown of all costs and processing timeframes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gold text-black rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0 font-medium text-sm">
                      5
                    </span>
                    <span>
                      <span className="font-semibold">Q&A Session</span> - Opportunity to ask questions and address concerns.
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Consultation Details</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Duration:</span>
                    <span className="font-semibold">60 minutes</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Format:</span>
                    <span className="font-semibold">Video call or In-person</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Consultation Fee:</span>
                    <span className="font-semibold">$150 USD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Languages Available:</span>
                    <span className="font-semibold">English, Hindi, Spanish</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Note:</span> Consultation fees will be credited toward your full service package if you choose to proceed with our representation within 30 days of your consultation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <BookingCalendar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
