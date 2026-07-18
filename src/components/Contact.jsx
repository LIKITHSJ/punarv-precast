import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

function useIsOpenNow() {
  return useState(() => {
    const day = new Date().getDay();
    const hour = new Date().getHours();
    return day !== 0 && hour >= 9 && hour < 18.5;
  })[0];
}

export default function Contact() {
  const isOpen = useIsOpenNow();

  return (
    <section id="contact" className="relative bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-cream sm:text-5xl">
            Let's Build Your
            <br />
            Boundary Wall
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
            className="overflow-hidden rounded-2xl border border-cream/10"
          >
            <iframe
              title="Punarv Precast location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`}
              className="h-105 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={2}
            className="panel-texture flex flex-col justify-between rounded-2xl bg-cream/5 p-8 sm:p-10"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-cream/50">
                    Plant Address
                  </p>
                  <p className="mt-1 text-cream/85">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-cream/50">Call Us</p>
                  {siteConfig.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="mt-1 block text-cream/85 transition-colors hover:text-gold"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-cream/50">WhatsApp</p>
                  {siteConfig.whatsapp.map((w) => (
                    <a
                      key={w}
                      href={`https://wa.me/${w}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-cream/85 transition-colors hover:text-gold"
                    >
                      +{w.slice(0, 2)} {w.slice(2)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-cream/50">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-cream/85 transition-colors hover:text-gold"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-cream/10 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Clock size={20} />
              </span>
              <div className="flex-1">
                {siteConfig.businessHours.map((b) => (
                  <div key={b.day} className="flex justify-between text-sm text-cream/70">
                    <span>{b.day}</span>
                    <span className="font-semibold text-cream">{b.time}</span>
                  </div>
                ))}
              </div>
              <span
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                  isOpen ? "bg-green-500/15 text-green-400" : "bg-maroon/20 text-maroon-light"
                }`}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-green-400" : "bg-maroon-light"}`}
                />
                {isOpen ? "Open Now" : "Closed"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}