
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock } from "lucide-react";
import { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    document.title = "Thank You - Global Migration Portal";
  }, []);

  return (
    <div className="pt-24">
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                <CalendarCheck size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Thank You for Your <span className="text-gold">Booking</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in">
                Your consultation has been confirmed and payment received successfully.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg max-w-xs">
                  <div className="flex items-center mb-4">
                    <Clock size={24} className="text-gold mr-3" />
                    <h3 className="font-semibold text-lg">Confirmation Email</h3>
                  </div>
                  <p className="text-gray-700">
                    We've sent a confirmation email with all the details of your consultation to your registered email address.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg max-w-xs">
                  <div className="flex items-center mb-4">
                    <Clock size={24} className="text-gold mr-3" />
                    <h3 className="font-semibold text-lg">Prepare Documents</h3>
                  </div>
                  <p className="text-gray-700">
                    If available, please gather your education credentials, work experience details, and identity documents for the consultation.
                  </p>
                </div>
              </div>
              
              <p className="text-lg font-medium mb-6">
                One of our consultants will contact you 24 hours prior to your appointment to confirm and provide connection details.
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 mb-2">
                  Have questions before your consultation?
                </p>
                <p className="font-medium">
                  Email us at <a href="mailto:support@globalmigration.com" className="text-gold hover:underline">support@globalmigration.com</a> or call <a href="tel:+917619523761" className="text-gold hover:underline">+91 7619523761</a>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                <Link to="/">Return to Homepage</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
