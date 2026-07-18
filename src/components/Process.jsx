import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "../data/process";

const fadeSide = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            How We Build
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-cream sm:text-5xl">
            From Cast to Compound Wall
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cream/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gold shadow-[0_0_8px_rgba(244,197,66,0.6)]"
          />

          <div className="flex flex-col gap-14">
            {processSteps.map((step, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-center ${
                    fromLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeSide(fromLeft)}
                    className={`w-[calc(50%-2.5rem)] rounded-2xl border border-cream/10 bg-cream/5 p-6 ${
                      fromLeft ? "text-right" : "text-left"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold text-cream">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">
                      {step.description}
                    </p>
                  </motion.div>

                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold bg-navy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 wall-divider" />
    </section>
  );
}