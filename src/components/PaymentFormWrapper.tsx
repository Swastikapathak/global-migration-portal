
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/lib/toast";
import { useEffect, useState } from "react";

const PaymentFormWrapper = () => {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  const handlePaymentClick = () => {
    setIsRedirecting(true);
    toast.info("Navigating to payment page...");
    
    // Small timeout to allow the toast to show before navigation
    setTimeout(() => {
      navigate("/payment");
    }, 200);
  };
  
  useEffect(() => {
    // Pre-fetch the payment page to speed up navigation
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/payment';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">Access Our Immigration Services</h2>
      <p className="mb-6">
        Schedule your consultation and complete the payment to begin your immigration journey.
      </p>
      <Button 
        className="bg-gold hover:bg-gold/90 text-black transition-transform duration-200"
        onClick={handlePaymentClick}
        disabled={isRedirecting}
      >
        {isRedirecting ? (
          <>
            <span className="mr-2 h-4 w-4 rounded-full border-2 border-b-transparent border-white animate-spin"></span>
            Redirecting...
          </>
        ) : (
          "Proceed to Payment"
        )}
      </Button>
    </div>
  );
};

export default PaymentFormWrapper;
