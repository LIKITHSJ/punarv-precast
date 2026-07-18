import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { MessageCircle, Phone, ArrowUp, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function ContactMenu({ type, open, onClose }) {
  const isWhatsapp = type === "whatsapp";
  const contacts = isWhatsapp ? siteConfig.whatsapp : siteConfig.phone;
  const labels = ["Sales", "Support"];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-full right-0 mb-3 w-56 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between bg-navy px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-wide text-cream">
              {isWhatsapp ? "WhatsApp Us" : "Call Us"}
            </span>
            <button onClick={onClose} className="text-cream/70 hover:text-gold" aria-label="Close">
              <X size={16} />
            </button>
          </div>
          <div className="flex flex-col divide-y divide-navy/10">
            {contacts.map((contact, i) => (
              <a
                key={contact}
                href={isWhatsapp ? `https://wa.me/${contact}` : `tel:${contact.replace(/\s/g, "")}`}
                target={isWhatsapp ? "_blank" : undefined}
                rel={isWhatsapp ? "noreferrer" : undefined}
                className="flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-cream-dark"
              >
                <span className="font-semibold text-navy">{labels[i] ?? "Contact"}</span>
                <span className="text-charcoal/60">
                  {isWhatsapp ? `+${contact.slice(0, 2)} ${contact.slice(2)}` : contact}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FloatingButton({ icon: Icon, color, onClick, active }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      animate={{ rotate: active ? 45 : 0 }}
      transition={{ duration: 0.25 }}
      className={`flex w-13 h-13 items-center justify-center rounded-full shadow-lg ${color}`}
      style={{ width: 52, height: 52 }}
    >
      <Icon size={22} className="text-white" />
    </motion.button>
  );
}

export default function FloatingButtons() {
  const [openMenu, setOpenMenu] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (type) => setOpenMenu((prev) => (prev === type ? null : type));

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative flex h-13 w-13 items-center justify-center rounded-full bg-navy shadow-lg"
            style={{ width: 52, height: 52 }}
            aria-label="Back to top"
          >
            <svg className="absolute inset-0 h-full w-full -rotate-90">
              <circle cx="26" cy="26" r="23" fill="none" stroke="rgba(253,248,237,0.15)" strokeWidth="2" />
              <motion.circle
                cx="26" cy="26" r="23" fill="none" stroke="#F4C542" strokeWidth="2"
                style={{ pathLength: progress }}
                strokeDasharray="1 1"
                pathLength="1"
              />
            </svg>
            <ArrowUp size={20} className="text-gold" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative">
        <ContactMenu type="call" open={openMenu === "call"} onClose={() => setOpenMenu(null)} />
        <FloatingButton
          icon={Phone}
          color="bg-navy"
          active={openMenu === "call"}
          onClick={() => toggle("call")}
        />
      </div>

      <div className="relative">
        <ContactMenu type="whatsapp" open={openMenu === "whatsapp"} onClose={() => setOpenMenu(null)} />
        <FloatingButton
          icon={MessageCircle}
          color="bg-green-500"
          active={openMenu === "whatsapp"}
          onClick={() => toggle("whatsapp")}
        />
      </div>
    </div>
  );
}