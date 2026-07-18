import { useMemo } from "react";
import { motion } from "framer-motion";
import { Factory, MapPin } from "lucide-react";
import { areasServed } from "../data/areas";

const RADIUS = 220;

function polarPoint(index, total, radius) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

export default function Areas() {
  const points = useMemo(
    () => areasServed.map((_, i) => polarPoint(i, areasServed.length, RADIUS)),
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

        <div className="relative mx-auto hidden h-135 max-w-3xl items-center justify-center lg:flex">
          <svg viewBox="-260 -260 520 520" className="absolute inset-0 h-full w-full">
            {points.map((p, i) => (
              <motion.line
                key={i}
                x1="0" y1="0" x2={p.x} y2={p.y}
                stroke="#163A5C" strokeWidth="1" strokeDasharray="4 5" strokeOpacity="0.35"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
              />
            ))}
            {[110, 165, 220].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="#8B9196" strokeOpacity="0.2" />
            ))}
          </svg>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-navy text-cream shadow-xl"
          >
            <Factory size={22} className="text-gold" />
            <span className="mt-1 text-[9px] font-bold uppercase tracking-wide">Plant</span>
          </motion.div>

          {areasServed.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08, borderColor: "#F4C542" }}
              style={{
                position: "absolute",
                left: `calc(50% + ${points[i].x}px)`,
                top: `calc(50% + ${points[i].y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-navy/15 bg-cream-dark px-4 py-2 text-xs font-bold text-navy shadow-sm"
            >
              <MapPin size={12} className="text-maroon" />
              {area}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {areasServed.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-2 rounded-xl border border-navy/10 bg-cream-dark px-4 py-3 text-sm font-bold text-navy"
            >
              <MapPin size={14} className="text-maroon" />
              {area}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}