import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, Award } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const wireLength = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-maroon">
            Who We Are
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
            Engineered With Precision,
            <br />
            Built for the Long Run
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1px_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
            className="flex flex-col justify-center"
          >
            <p className="text-lg leading-relaxed text-charcoal/80">
              {siteConfig.about}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                <Award size={26} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-navy">
                Stringent Quality Control
                <span className="block font-normal normal-case text-charcoal/60">
                  on every raw material and finished panel
                </span>
              </p>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <svg
              viewBox="0 0 2 400"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <line x1="1" y1="0" x2="1" y2="400" stroke="#8B9196" strokeWidth="1" strokeDasharray="4 4" />
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="400"
                stroke="#F4C542"
                strokeWidth="2"
                style={{ pathLength: wireLength }}
              />
            </svg>
          </div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={2}
              whileHover={{ y: -4 }}
              className="panel-texture group relative overflow-hidden rounded-2xl bg-navy p-8 shadow-xl transition-shadow hover:shadow-2xl"
            >
              <Sprout className="mb-4 text-gold" size={28} />
              <h3 className="text-2xl font-bold text-cream">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {siteConfig.mission}
              </p>
              <div className="wall-divider absolute inset-x-0 bottom-0 opacity-60" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={3}
              whileHover={{ y: -4 }}
              className="panel-texture group relative overflow-hidden rounded-2xl bg-maroon p-8 shadow-xl transition-shadow hover:shadow-2xl"
            >
              <Award className="mb-4 text-gold" size={28} />
              <h3 className="text-2xl font-bold text-cream">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                {siteConfig.vision}
              </p>
              <div className="wall-divider absolute inset-x-0 bottom-0 opacity-60" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}