import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-maroon">
            On Site
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
            Real Walls, Real Sites
          </h2>
        </motion.div>

        <div className="grid auto-rows-35 grid-cols-2 gap-4 sm:auto-rows-45 sm:grid-cols-3 lg:auto-rows-55 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              layoutId={`gallery-${img.id}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(img)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${img.span}`}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/40" />
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy">
                  <ZoomIn size={18} />
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-90 flex items-center justify-center bg-navy/95 p-6 backdrop-blur-sm"
          >
            <motion.img
              layoutId={`gallery-${active.id}`}
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-navy"
              aria-label="Close"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}