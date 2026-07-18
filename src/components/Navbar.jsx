import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const NAV_LINKS = [
  { label: "About", to: "about" },
  { label: "Why Us", to: "why-choose-us" },
  { label: "Products", to: "products" },
  { label: "Process", to: "process" },
  { label: "Areas", to: "areas" },
  { label: "Gallery", to: "gallery" },
  { label: "Contact", to: "contact" },
];

function NavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      smooth
      duration={600}
      offset={-90}
      spy
      onClick={onClick}
      activeClass="text-gold"
      className="group relative cursor-pointer text-sm font-semibold uppercase tracking-wide text-cream/90 transition-colors hover:text-gold"
    >
      {label}
      <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.04 }} className="flex flex-col leading-none">
            <span className="text-2xl font-extrabold tracking-wide text-gold sm:text-3xl">
              PUNARV
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-cream/70">
              Precast
            </span>
          </motion.div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} {...l} />
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <motion.a
            href={`tel:${siteConfig.phone[0].replace(/\s/g, "")}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-md transition-colors hover:bg-gold-dark"
          >
            <Phone size={16} />
            Call Now
          </motion.a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="text-cream lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      <div className="wall-divider absolute inset-x-0 bottom-0" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-navy/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex justify-end p-5">
              <button onClick={() => setOpen(false)} className="text-cream" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 pt-10">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink {...l} onClick={() => setOpen(false)} />
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
                href={`tel:${siteConfig.phone[0].replace(/\s/g, "")}`}
                className="mt-4 flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy"
              >
                <Phone size={16} />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}