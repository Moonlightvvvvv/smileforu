import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

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

  const brandBlue = "hsl(200 85% 45%)";
  const brandBlueBg = "hsl(200 85% 45%)";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Brand — always blue */}
        <Link href="/">
          <div className="text-2xl font-serif font-bold cursor-pointer flex items-center gap-2" style={{ color: brandBlue }}>
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
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  location === link.path
                    ? "font-semibold"
                    : "text-foreground/75 hover:text-foreground"
                }`}
                style={location === link.path ? { color: brandBlue } : undefined}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+918299219918"
            className="text-sm font-medium flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            data-testid="nav-phone"
          >
            <Phone className="w-4 h-4" />
            +91 82992 19918
          </a>
          <Link href="/contact">
            <button
              className="flex items-center gap-2 text-sm font-semibold text-white rounded-full px-5 py-2.5 transition-all hover:opacity-90 active:scale-95"
              style={{ background: brandBlueBg }}
              data-testid="nav-book-appointment"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b shadow-xl py-4 px-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <div
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2.5 border-b border-border/40 ${
                  location === link.path ? "font-semibold" : "text-foreground"
                }`}
                style={location === link.path ? { color: brandBlue } : undefined}
              >
                {link.name}
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-full px-5 py-3"
              style={{ background: brandBlueBg }}
              data-testid="nav-mobile-book"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
