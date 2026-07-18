import { useMemo } from "react";
import { motion } from "framer-motion";
import { Factory, MapPin } from "lucide-react";
import { areasServed } from "../data/areas";

const RADIUS_PERCENT = 38;

function polarPercent(index, total, radiusPercent) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.cos(angle) * radiusPercent,
    y: Math.sin(angle) * radiusPercent,
  };
}

export default function Areas() {
  const points = useMemo(
    () => areasServed.map((_, i) => polarPercent(i, areasServed.length, RADIUS_PERCENT)),
    []
  );

  return (
    <section id="areas" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-maroon">
            Coverage
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
            Delivering Across
            <br />
            Bangalore North
          </h2>
        </motion.div>

        <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <svg viewBox="-50 -50 100 100" className="absolute inset-0 h-full w-full">
            {points.map((p, i) => (
              <motion.line
                key={i}
                x1="0" y1="0" x2={p.x} y2={p.y}
                stroke="#163A5C" strokeWidth="0.3" strokeDasharray="1.2 1.4" strokeOpacity="0.35"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
              />
            ))}
            {[20, 30, 40].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="#8B9196" strokeOpacity="0.2" strokeWidth="0.25" />
            ))}
          </svg>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-cream shadow-xl sm:h-20 sm:w-20 lg:h-24 lg:w-24"
          >
            <Factory size={20} className="text-gold sm:size-6" />
            <span className="mt-1 text-[7px] font-bold uppercase tracking-wide sm:text-[9px]">
              Plant
            </span>
          </motion.div>

          {areasServed.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08, borderColor: "#F4C542" }}
              whileTap={{ scale: 1.08, borderColor: "#F4C542" }}
              style={{
                position: "absolute",
                left: `calc(50% + ${points[i].x}%)`,
                top: `calc(50% + ${points[i].y}%)`,
                transform: "translate(-50%, -50%)",
              }}
              className="flex items-center gap-1 whitespace-nowrap rounded-full border border-navy/15 bg-cream-dark px-2 py-1 text-[9px] font-bold text-navy shadow-sm sm:gap-1.5 sm:px-4 sm:py-2 sm:text-xs"
            >
              <MapPin size={10} className="shrink-0 text-maroon sm:hidden" />
              <MapPin size={12} className="hidden shrink-0 text-maroon sm:block" />
              {area}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}