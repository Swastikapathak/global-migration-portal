
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { toast } from "@/lib/toast";
import { Eye, EyeOff, CreditCard, User, Calendar } from "lucide-react";

const paymentFormSchema = z.object({
  cardName: z.string().min(2, "Cardholder name is required"),
  cardNumber: z.string().refine((val) => /^\d{16}$/.test(val), {
    message: "Card number must be 16 digits",
  }),
  expiryDate: z.string().refine((val) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(val), {
    message: "Expiry date must be in MM/YY format",
  }),
  cvv: z.string().refine((val) => /^\d{3,4}$/.test(val), {
    message: "CVV must be 3 or 4 digits",
  }),
});

interface PaymentFormProps {
  amount: number;
  description: string;
  onSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, description, onSuccess }) => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCvv, setShowCvv] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    
    // Format card number with spaces for display (but store without spaces)
    if (name === "cardNumber") {
      value = value.replace(/\s/g, "").slice(0, 16);
    }
    
    // Format expiry date with / character
    if (name === "expiryDate") {
      value = value.replace(/\D/g, "").slice(0, 4);
      if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
    }
    
    // Limit CVV to 3 or 4 digits
    if (name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      paymentFormSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast.success("Payment successful! Thank you for your payment.");
      onSuccess();
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
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Format card number with spaces for display
  const formattedCardNumber = formData.cardNumber
    ? formData.cardNumber.match(/.{1,4}/g)?.join(" ") || formData.cardNumber
    : "";
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Payment Details</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{description}</span>
          <span className="text-xl font-bold">${amount.toFixed(2)}</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="cardName" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <User size={16} className="mr-2" /> Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.cardName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Name on card"
          />
          {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
        </div>
        
        <div>
          <label htmlFor="cardNumber" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <CreditCard size={16} className="mr-2" /> Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formattedCardNumber}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="1234 5678 9012 3456"
          />
          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Calendar size={16} className="mr-2" /> Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.expiryDate ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="MM/YY"
            />
            {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
          </div>
          
          <div>
            <label htmlFor="cvv" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <div className="relative">
              <input
                type={showCvv ? "text" : "password"}
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                  errors.cvv ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="123"
              />
              <button
                type="button"
                onClick={() => setShowCvv(!showCvv)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showCvv ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
          </div>
        </div>
        
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-4 rounded-lg"
          >
            {isSubmitting ? "Processing..." : `Pay $${amount.toFixed(2)}`}
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mt-6">
          <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Mastercard" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="American Express" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="PayPal" className="h-8" />
        </div>
        
        <p className="text-xs text-gray-500 text-center">
          Your payment information is encrypted and secure.
          We do not store your credit card details.
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;
