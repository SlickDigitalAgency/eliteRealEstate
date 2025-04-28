import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/constants/global/navbar/NavbarData";
import { NavbarProps } from "@/types/global/navbar/NavbarTypes";
import { cn } from "@/lib/utils";

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const navLinkVariants = {
    hover: {
      color: "#D4AF37",
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed w-full top-0 left-0 z-50 px-6 md:px-12 transition-all duration-300 ease-in-out",
        {
          "bg-transparent": transparent && !scrolled && !isMenuOpen,
          "bg-[rgb(var(--color-dark))] backdrop-blur-sm shadow-lg":
            !transparent || scrolled || isMenuOpen,
          // Add the black background for mobile screens
          "bg-black md:bg-transparent": isMenuOpen || scrolled,
        }
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-20">
        <Link
          to="/"
          className="flex items-center z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <h1 className="text-2xl md:text-3xl font-serif">
            <span className="text-[rgb(var(--color-gold))] font-normal">
              ELITE
            </span>
            <span className="text-white font-bold ml-2">ESTATES</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center justify-center space-x-8">
          {NAV_LINKS.map((link) => (
            <motion.div key={link.id} whileHover="hover">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm uppercase tracking-wider relative hover:text-[rgb(var(--color-gold))] transition-colors duration-300",
                    {
                      "text-white": !isActive,
                      "text-[rgb(var(--color-gold))]": isActive,
                    }
                  )
                }
              >
                <motion.span variants={navLinkVariants}>
                  {link.label}
                </motion.span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        <Link to="/contact" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 py-2 px-4 border border-[rgb(var(--color-gold))] rounded-md text-[rgb(var(--color-gold))] hover:bg-[rgb(var(--color-gold))/10] transition-all duration-300"
          >
            <Phone size={16} />
            <span className="text-sm tracking-wide">Schedule Consultation</span>
          </motion.button>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white z-50 p-2 hover:bg-white/10 rounded-md transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 bg-black/100 md:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 w-[300px] bg-[rgb(var(--color-dark))] shadow-xl md:hidden z-40 flex flex-col"
            >
              <div className="flex flex-col items-start p-6 h-full">
                <div className="w-full space-y-6 mt-16">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block w-full py-2 text-lg font-medium tracking-wide transition-colors duration-300",
                          {
                            "text-white hover:text-[rgb(var(--color-gold))]":
                              !isActive,
                            "text-[rgb(var(--color-gold))]": isActive,
                          }
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-auto w-full pb-8">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full"
                  >
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 py-3 border border-[rgb(var(--color-gold))] rounded-md text-[rgb(var(--color-gold))] hover:bg-[rgb(var(--color-gold))/10] transition-all duration-300"
                    >
                      <Phone size={16} />
                      <span className="text-sm tracking-wide">
                        Schedule Consultation
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
