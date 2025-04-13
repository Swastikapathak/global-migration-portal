
import PaymentForm from "@/components/PaymentForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PaymentPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Payment - Global Migration Portal";
  }, []);
  
  const handlePaymentSuccess = () => {
    // Redirect to thank you page after successful payment
    navigate("/thank-you");
  };
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Complete Your <span className="text-gold">Payment</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-in">
              Securely pay for your consultation to confirm your booking.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4 pb-4 border-b border-gray-200">
                  Immigration Consultation
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Consultation Fee</span>
                    <span className="font-semibold">$150.00</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-700">Duration</span>
                    <span>60 minutes</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>$150.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Personalized eligibility assessment</li>
                    <li>• Immigration pathways recommendation</li>
                    <li>• Document checklist preparation</li>
                    <li>• Timeline and cost breakdown</li>
                    <li>• Q&A with immigration expert</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">
                  <strong>Refund Policy:</strong> Full refund available if cancelled at least 24 hours before the scheduled consultation.
                </p>
                <p>
                  <strong>Note:</strong> This fee will be credited toward your full service package if you proceed with our services within 30 days.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-3 animate-on-scroll">
              <PaymentForm 
                amount={150} 
                description="Immigration Consultation (60 minutes)" 
                onSuccess={handlePaymentSuccess}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
