import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Media", path: "/media" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-serif font-bold text-primary cursor-pointer flex items-center gap-2">
            Smile 4U
            <span className="text-sm font-sans font-normal text-muted-foreground hidden sm:inline-block">
              Family Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <div
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === link.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+918299219918" className="text-sm font-medium flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +91 82992 19918
          </a>
          <Link href="/contact">
            <Button className="gap-2 rounded-full">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <div
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-border/50 ${
                  location === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="w-full mt-4 gap-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
