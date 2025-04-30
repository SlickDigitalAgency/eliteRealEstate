import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../../constants/global/navbar/NavbarData";
import { NavbarProps } from "../../../types/global/navbar/NavbarTypes";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScheduleModal from "@/components/common/modal/SchedualModal";

const Navbar = ({}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("transparent");

  const handleConsultationSubmit = (formData: any) => {
    console.log("Consultation form submitted:", formData);
    // Add form submission logic here
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setNavbarBg(heroBottom > 0 ? "transparent" : "rgba(0, 0, 0, 0.8)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 backdrop-blur-md ${
        navbarBg === "transparent"
          ? "bg-transparent"
          : "bg-black/80 border-b border-gold-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="relative group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wider">
              <span className="text-gold">{`ELITE`}</span>{" "}
              <span className="relative">
                ESTATES
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300"
                  initial={false}
                  animate={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="relative group text-sm font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button with Modal Trigger */}
          <div className="hidden lg:flex items-center">
            <ScheduleModal
              trigger={
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </Button>
              }
              onSubmit={handleConsultationSubmit}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden mobile-menu-button p-2 text-white/90 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu lg:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-t border-b border-gold-10"
            style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white hover:translate-x-2 transition-all duration-300 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Button with Modal Trigger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <ScheduleModal
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Schedule Consultation</span>
                    </Button>
                  }
                  onSubmit={handleConsultationSubmit}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
