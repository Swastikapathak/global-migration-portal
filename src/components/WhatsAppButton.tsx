
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { toast } from "@/lib/toast";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "917619523761"; // The number you want to connect to WhatsApp

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message") as string;
    
    if (!message.trim()) {
      toast.error("Please type a message before sending");
      return;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form and close chat
    e.currentTarget.reset();
    toast.success("Opening WhatsApp with your message");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-40 bottom-8 right-8 shadow-lg bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? "animate-pulse" : "animate-none"
        }`}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </button>

      {/* WhatsApp Chat Window */}
      <div
        className={`fixed z-30 bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-green-500 p-4 rounded-t-lg">
          <h3 className="text-white font-semibold">Chat with Us</h3>
          <p className="text-green-100 text-sm">Send us a message on WhatsApp</p>
        </div>
        
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Type your message here..."
                className="w-full border rounded-md p-3 h-24 focus:outline-none focus:ring focus:ring-green-300 text-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium transition-colors"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
        
        <div className="p-3 bg-gray-50 rounded-b-lg text-xs text-center text-gray-500">
          Chat connects to WhatsApp number: +91 7619523761
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
