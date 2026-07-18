import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { materials } from "../data/materials";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay, duration: 1, ease: "easeInOut" },
  }),
};

function SpecDiagram({ type }) {
  const isColumn = type === "column";
  return (
    <svg viewBox="0 0 240 280" className="h-64 w-full sm:h-80">
      {isColumn ? (
        <>
          <motion.rect
            x="95" y="30" width="50" height="220" rx="2"
            fill="#8B9196" fillOpacity="0.25" stroke="#F4C542" strokeWidth="1.5"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          {[70, 100, 130, 160, 190, 220].map((y, i) => (
            <motion.line
              key={y} x1="100" y1={y} x2="140" y2={y}
              stroke="#F4C542" strokeWidth="0.75" strokeDasharray="3 2"
              variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={0.3 + i * 0.08}
            />
          ))}
          <motion.line
            x1="60" y1="30" x2="60" y2="250" stroke="#FDF8ED" strokeWidth="1"
            variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
          />
          <text x="30" y="145" fill="#FDF8ED" fontSize="11" fontWeight="700" transform="rotate(-90 30 145)">
            150mm
          </text>
          <motion.line
            x1="95" y1="270" x2="145" y2="270" stroke="#FDF8ED" strokeWidth="1"
            variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}
          />
          <text x="105" y="266" fill="#FDF8ED" fontSize="11" fontWeight="700">150mm</text>
        </>
      ) : (
        <>
          <motion.rect
            x="20" y="120" width="200" height="40" rx="2"
            fill="#8B9196" fillOpacity="0.25" stroke="#F4C542" strokeWidth="1.5"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          {[45, 80, 115, 150, 185].map((x, i) => (
            <motion.line
              key={x} x1={x} y1="125" x2={x} y2="155"
              stroke="#F4C542" strokeWidth="0.75" strokeDasharray="3 2"
              variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={0.3 + i * 0.08}
            />
          ))}
          <motion.line
            x1="20" y1="180" x2="220" y2="180" stroke="#FDF8ED" strokeWidth="1"
            variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
          />
          <text x="100" y="196" fill="#FDF8ED" fontSize="11" fontWeight="700">2100mm (7ft)</text>
          <motion.line
            x1="235" y1="120" x2="235" y2="160" stroke="#FDF8ED" strokeWidth="1"
            variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}
          />
          <text x="238" y="145" fill="#FDF8ED" fontSize="10" fontWeight="700">50mm</text>
        </>
      )}
    </svg>
  );
}

function SpecCard({ data, type, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index}
      className="rounded-2xl bg-navy p-7 shadow-xl sm:p-9"
    >
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
        Technical Spec
      </span>
      <h3 className="mt-2 text-2xl font-extrabold text-cream">{data.label}</h3>

      <SpecDiagram type={type} />

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-cream/10 pt-5">
        {Object.entries(data)
          .filter(([key]) => key !== "label")
          .map(([key, value]) => (
            <div key={key}>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-cream/50">
                {key.replace(/([A-Z])/g, " $1")}
              </p>
              <p className="mt-1 text-sm font-bold text-cream">{value}</p>
            </div>
          ))}
      </div>
    </motion.div>
  );
}

export default function Materials() {
  return (
    <section id="materials" className="relative bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-maroon">
            Materials & Specification
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
            Precision Down to
            <br />
            the Millimeter
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <SpecCard data={materials.column} type="column" index={0} />
          <SpecCard data={materials.panel} type="panel" index={1} />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
          className="mt-10 rounded-2xl border border-navy/10 bg-cream p-7 sm:p-9"
        >
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="text-xl font-extrabold text-navy">Wall Characteristics</h3>
            <p className="text-sm text-charcoal/60">
              Height {materials.wallSpec.heightRange} · Foundation {materials.wallSpec.foundationDepth} deep ·{" "}
              {materials.wallSpec.weightPerRMT}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {materials.characteristics.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -3, borderColor: "#F4C542" }}
                className="flex items-center gap-2 rounded-full border border-navy/15 bg-cream-dark px-4 py-2 text-sm font-semibold text-navy transition-colors"
              >
                <CheckCircle2 size={16} className="text-maroon" />
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}