import { motion } from "framer-motion";
import { Factory, MapPin } from "lucide-react";
import { areasServed } from "../data/areas";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Areas() {
  return (
    <section id="areas" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-2xl"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.35 }}
          className="mx-auto mb-12 flex w-fit flex-col items-center gap-2 rounded-2xl bg-navy px-8 py-5 text-cream shadow-lg"
        >
          <Factory size={26} className="text-gold" />
          <span className="text-xs font-bold uppercase tracking-[0.25em]">
            Our Plant
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {areasServed.map((area, i) => (
            <motion.div
              key={area}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: "#F4C542" }}
              className="flex flex-col items-center gap-2 rounded-xl border border-navy/15 bg-cream-dark px-4 py-6 text-center shadow-sm transition-colors"
            >
              <MapPin size={20} className="text-maroon" />
              <span className="text-sm font-bold text-navy">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}