import { useRef } from "react";
import { motion } from "framer-motion";
import StatCounter from "./StatCounter";
import { Check, X } from "lucide-react";
import { comparisonData, whyChooseHighlights } from "../data/whyChooseUs";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyChooseUs() {
  const tableRef = useRef(null);

  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Why Punarv Precast
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-cream sm:text-5xl">
            Not Just Stronger.
            <br />
            Provably Better.
          </h2>
        </motion.div>

        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {whyChooseHighlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, borderColor: "#F4C542" }}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-6 transition-colors"
            >
              <p className="text-3xl font-extrabold text-gold sm:text-4xl">
               <StatCounter value={h.stat} suffix={h.suffix} /> 
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-cream/60 sm:text-sm">
                {h.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={tableRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="overflow-x-auto rounded-2xl border border-cream/10"
        >
          <table className="w-full min-w-160 border-collapse text-left">
            <thead>
              <tr className="bg-cream/5">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-cream/60">
                  Property
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-cream/60">
                  Traditional Wall
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-gold">
                  Punarv Precast Wall
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <motion.tr
                  key={row.property}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group border-t border-cream/10 transition-colors hover:bg-cream/5"
                >
                  <td className="px-6 py-5 text-sm font-bold text-cream">{row.property}</td>
                  <td className="px-6 py-5 text-sm text-cream/50">
                    <span className="flex items-start gap-2">
                      <X size={16} className="mt-0.5 shrink-0 text-maroon-light" />
                      {row.traditional}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-cream/90">
                    <span className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                      {row.precast}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 wall-divider" />
    </section>
  );
}