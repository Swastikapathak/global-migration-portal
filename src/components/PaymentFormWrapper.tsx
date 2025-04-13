
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/lib/toast";

const PaymentFormWrapper = () => {
  const navigate = useNavigate();
  
  const handlePaymentClick = () => {
    navigate("/payment");
    toast.info("Navigating to payment page...");
  };
  
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">Access Our Immigration Services</h2>
      <p className="mb-6">
        Schedule your consultation and complete the payment to begin your immigration journey.
      </p>
      <Button 
        className="bg-gold hover:bg-gold/90 text-black transition-transform duration-200"
        onClick={handlePaymentClick}
      >
        Proceed to Payment
      </Button>
    </div>
  );
};

export default PaymentFormWrapper;
