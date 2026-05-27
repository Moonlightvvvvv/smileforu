import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const CRIMSON = "hsl(356 68% 47%)";
const CRIMSON_DARK = "hsl(356 68% 38%)";

function scrollToAppointmentForm() {
  const el = document.getElementById("appointment-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

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

  function handleBookAppointment(closeMobile?: boolean) {
    if (closeMobile) setMobileMenuOpen(false);
    if (location === "/contact") {
      scrollToAppointmentForm();
    } else {
      setLocation("/contact");
      setTimeout(scrollToAppointmentForm, 350);
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Brand — deep crimson */}
        <Link href="/">
          <div
            className="text-2xl font-serif font-bold cursor-pointer flex items-center gap-2"
            style={{ color: CRIMSON }}
          >
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
                className="text-sm font-medium transition-colors cursor-pointer"
                style={
                  location === link.path
                    ? { color: CRIMSON, fontWeight: 600 }
                    : { color: "hsl(220 15% 40%)" }
                }
                onMouseEnter={(e) => {
                  if (location !== link.path)
                    (e.currentTarget as HTMLElement).style.color = CRIMSON;
                }}
                onMouseLeave={(e) => {
                  if (location !== link.path)
                    (e.currentTarget as HTMLElement).style.color = "hsl(220 15% 40%)";
                }}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+918299219918"
            className="text-sm font-medium flex items-center gap-1.5 transition-colors"
            style={{ color: "hsl(220 15% 50%)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = CRIMSON)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "hsl(220 15% 50%)")}
          >
            <Phone className="w-3.5 h-3.5" />
            +91 82992 19918
          </a>
          <button
            onClick={() => handleBookAppointment()}
            className="flex items-center gap-2 text-sm font-semibold text-white rounded-full px-5 py-2.5 transition-all active:scale-95 shadow-md"
            style={{ background: `linear-gradient(135deg, ${CRIMSON}, ${CRIMSON_DARK})` }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = `linear-gradient(135deg, ${CRIMSON_DARK}, hsl(356 68% 30%))`)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = `linear-gradient(135deg, ${CRIMSON}, ${CRIMSON_DARK})`)
            }
            data-testid="nav-book-appointment"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          style={{ color: CRIMSON }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/96 backdrop-blur-xl border-b border-border/60 shadow-xl py-4 px-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <div
                onClick={() => setMobileMenuOpen(false)}
                className="text-base py-3 px-2 border-b border-border/25 rounded-sm"
                style={
                  location === link.path
                    ? { color: CRIMSON, fontWeight: 600 }
                    : { color: "hsl(220 20% 30%)", fontWeight: 500 }
                }
              >
                {link.name}
              </div>
            </Link>
          ))}
          <button
            onClick={() => handleBookAppointment(true)}
            className="mt-3 w-full flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-full px-5 py-3.5 active:scale-95 transition-transform shadow-md"
            style={{ background: `linear-gradient(135deg, ${CRIMSON}, ${CRIMSON_DARK})` }}
            data-testid="nav-mobile-book"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>
          <a
            href="tel:+918299219918"
            className="mt-1 w-full flex items-center justify-center gap-2 text-sm font-medium py-2"
            style={{ color: "hsl(220 15% 50%)" }}
          >
            <Phone className="w-4 h-4" />
            +91 82992 19918
          </a>
        </div>
      )}
    </header>
  );
}
