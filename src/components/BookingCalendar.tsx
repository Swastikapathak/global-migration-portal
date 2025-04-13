
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/lib/toast";
import { z } from "zod";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  immigrationType: z.string().min(1, "Please select an immigration type"),
});

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM"
];

const immigrationTypes = [
  { value: "canada", label: "Canada Immigration" },
  { value: "australia", label: "Australia Migration" },
  { value: "europe", label: "European Opportunities" },
  { value: "student", label: "Student Visas" },
  { value: "family", label: "Family Sponsorship" },
  { value: "business", label: "Business Immigration" },
  { value: "other", label: "Other" },
];

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1); // 1: date/time selection, 2: personal details
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    immigrationType: "",
    notes: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleNextStep = () => {
    if (!date) {
      toast.error("Please select a date for your consultation");
      return;
    }
    
    if (!selectedTime) {
      toast.error("Please select a time slot for your consultation");
      return;
    }
    
    setStep(2);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      bookingFormSchema.parse(formData);
      
      // Format the date and time for display
      const formattedDate = date?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      
      // Create a booking summary for the success message
      const bookingSummary = `
        Consultation booked for ${formattedDate} at ${selectedTime}
        Service: ${immigrationTypes.find(type => type.value === formData.immigrationType)?.label}
        Name: ${formData.name}
      `;
      
      toast.success("Consultation successfully booked! You will receive a confirmation email shortly.");
      
      // Redirect to payment page using React Router navigate
      navigate("/payment");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };
  
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {step === 1 ? (
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <CalendarIcon className="mr-2 text-gold" /> Select Date & Time
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md"
                disabled={(date) => {
                  return (
                    date < new Date(new Date().setHours(0, 0, 0, 0)) || // Disable past dates
                    isWeekend(date) // Disable weekends
                  );
                }}
                initialFocus
              />
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Clock className="mr-2 text-gold" size={18} /> Available Time Slots
              </h4>
              {date ? (
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`justify-start h-10 px-3 ${
                        selectedTime === time ? "bg-gold text-black hover:bg-gold/90" : ""
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 italic">Please select a date first</div>
              )}
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <Button asChild variant="outline">
              <Link to="/services">Back to Services</Link>
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-gold hover:bg-gold/90 text-black"
              disabled={!date || !selectedTime}
            >
              Next: Your Details
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold mb-6">Complete Your Booking</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Selected Date:</span>{" "}
                {date?.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Selected Time:</span> {selectedTime}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStep(1)}
              className="mt-3 sm:mt-0"
            >
              Change
            </Button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="immigrationType" className="block text-sm font-medium text-gray-700 mb-1">
                  Immigration Type *
                </label>
                <select
                  id="immigrationType"
                  name="immigrationType"
                  value={formData.immigrationType}
                  onChange={handleFormChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold ${
                    errors.immigrationType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Immigration Type</option>
                  {immigrationTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.immigrationType && <p className="text-red-500 text-sm mt-1">{errors.immigrationType}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleFormChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Please share any specific questions or information relevant to your immigration needs"
              ></textarea>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button type="submit" className="bg-gold hover:bg-gold/90 text-black">
                Book & Proceed to Payment
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
