import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import StatCounter from "./StatCounter";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { heroStats, heroSlides } from "../data/heroStats";

const headline = "Precast Compound Walls Built to Outlast".split(" ");

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lineX = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const lineY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-navy"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.16 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 4.6, ease: "linear" } }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlides[slide]})` }}
        />
      </AnimatePresence>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,58,92,0.85) 0%, rgba(22,58,92,0.78) 50%, rgba(22,26,29,0.92) 100%)",
        }}
      />

      <motion.div
        style={{ x: lineX, y: lineY }}
        className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-linear-to-b from-transparent via-gold/40 to-transparent sm:block"
      />
      <motion.div
        style={{ x: lineX, y: lineY }}
        className="pointer-events-none absolute inset-y-0 right-8 hidden w-px bg-linear-to-b from-transparent via-gold/40 to-transparent sm:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-5 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          {siteConfig.tagline}
        </motion.span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          {headline.map((word, i) => (
            <span key={i} className="mr-4 inline-block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg text-cream/80"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link to="products" smooth duration={600} offset={-80} className="cursor-pointer">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-lg shadow-gold/20"
            >
              Explore Products
              <ArrowRight size={16} />
            </motion.span>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80} className="cursor-pointer">
            <motion.span
              whileHover={{ scale: 1.04, backgroundColor: "rgba(253,248,237,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-bold text-cream"
            >
              Get a Quote
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8 sm:grid-cols-4"
        >
          {heroStats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-extrabold text-gold sm:text-4xl">
                {stat.countUp ? (
  <StatCounter value={stat.value} suffix={stat.suffix} />
) : (
  stat.display
)}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-cream/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60"
      >
        <ArrowDown size={22} />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 wall-divider" />
    </section>
  );
}