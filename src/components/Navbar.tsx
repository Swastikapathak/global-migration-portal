
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQs", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`font-montserrat font-medium hover:text-gold transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gold after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100 ${
                      location.pathname === link.path ? "text-gold after:origin-bottom-left after:scale-x-100" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button asChild className="bg-black hover:bg-black/90 hover:scale-105 transition-transform">
            <Link to="/booking">Book Consultation</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto py-5">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 font-montserrat font-medium hover:text-gold transition-colors ${
                    location.pathname === link.path ? "text-gold" : "text-gray-800"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Button asChild className="w-full bg-black hover:bg-black/90">
                <Link to="/booking" onClick={closeMenu}>Book Consultation</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
