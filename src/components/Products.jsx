import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "../data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ProductCard({ product, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = product.icon;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ rotateX: { duration: 0.3 }, rotateY: { duration: 0.3 } }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className="panel-texture group relative overflow-hidden rounded-2xl border border-navy/10 bg-cream-dark p-7 shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-maroon">
        <Icon size={26} />
      </div>

      <h3 className="text-xl font-extrabold text-navy">{product.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
        {product.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.applications.map((app) => (
          <span
            key={app}
            className="rounded-full border border-navy/15 px-3 py-1 text-xs font-medium text-navy/70"
          >
            {app}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy opacity-0 transition-opacity group-hover:opacity-100"
      >
        <ArrowUpRight size={18} />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-maroon">
              Our Range
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
              One Technology,
              <br />
              Every Boundary Need
            </h2>
          </div>
          <p className="max-w-sm text-sm text-charcoal/60">
            Every product is cast using the same pre-stressed technology — only the design,
            dimensions, and finish change to suit the site.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}