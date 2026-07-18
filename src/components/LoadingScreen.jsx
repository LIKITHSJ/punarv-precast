import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLUMNS = Array.from({ length: 7 });
const PANELS = Array.from({ length: 6 });

const columnVariants = {
  hidden: { scaleY: 0 },
  visible: (i) => ({
    scaleY: 1,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const panelVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i) => ({
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.55 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState("build");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 1300);
    const t2 = setTimeout(() => onComplete?.(), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-navy">
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-navy brick-bg-dark"
        initial={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-navy brick-bg-dark"
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex h-20 items-end justify-center gap-3 sm:h-28">
          {COLUMNS.map((_, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={columnVariants}
              initial="hidden"
              animate="visible"
              style={{ transformOrigin: "top" }}
              className="w-[3px] bg-gold sm:w-1"
            />
          ))}
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col gap-[6px]">
            {PANELS.map((_, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                style={{ transformOrigin: "center" }}
                className="mx-auto h-[3px] w-24 rounded-full bg-concrete sm:w-40"
              />
            ))}
          </div>
        </div>

        {phase === "reveal" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-wide text-gold-gradient sm:text-5xl">
              PUNARV PRECAST
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-2 text-sm uppercase tracking-[0.3em] text-cream/70"
            >
              Better Way To Build
            </motion.p>
          </motion.div>
        )}

        <div className="mt-10 h-[2px] w-40 overflow-hidden rounded-full bg-cream/10 sm:w-56">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            className="h-full bg-gold"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}