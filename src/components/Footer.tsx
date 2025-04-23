
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Logo className="mb-6" />
            <p className="text-gray-300 text-sm mb-5">
              Opening doors to global opportunities through expert immigration services. Your journey starts here.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-5 text-mocha">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-5 text-mocha">Immigration Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Canada Immigration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Australia Migration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  European Opportunities
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Student Visas
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-5 text-mocha">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-gold shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  123 Migration Street, Suite 456, Global City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-gold shrink-0" size={18} />
                <a href="tel:+917619523761" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  +91 7619523761
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-gold shrink-0" size={18} />
                <a href="mailto:info@globalmigration.com" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  info@globalmigration.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center sm:flex sm:justify-between text-sm text-gray-400">
          <p>© {currentYear} Global Migration Portal. All Rights Reserved.</p>
          <div className="flex justify-center sm:justify-end space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-gold transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
