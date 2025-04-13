
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PaymentFormWrapper = () => {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">Access Our Immigration Services</h2>
      <p className="mb-6">
        Schedule your consultation and complete the payment to begin your immigration journey.
      </p>
      <Button asChild className="bg-gold hover:bg-gold/90 text-black">
        <Link to="/payment">
          Proceed to Payment
        </Link>
      </Button>
    </div>
  );
};

export default PaymentFormWrapper;
