import { motion } from "framer-motion";
import { Phone, GraduationCap } from "lucide-react";
import { team } from "../data/team";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TeamCard({ person, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      className="panel-texture group relative overflow-hidden rounded-2xl border border-navy/10 bg-cream-dark p-7 shadow-sm transition-shadow hover:shadow-xl sm:flex sm:items-start sm:gap-6 sm:p-8"
    >
      <img
        src={person.photo}
        alt={person.name}
        className="h-24 w-24 shrink-0 rounded-full border-4 border-gold object-cover shadow-md sm:h-28 sm:w-28"
      />

      <div className="mt-5 sm:mt-0">
        <h3 className="text-xl font-extrabold text-navy">{person.name}</h3>
        <p className="text-sm font-bold uppercase tracking-wide text-maroon">
          {person.role}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          {person.bio}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-navy/70">
          <GraduationCap size={14} className="text-gold" />
          {person.expertise.join(" · ")}
        </div>

        <a
          href={`tel:${person.phone.replace(/\s/g, "")}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-maroon"
        >
          <Phone size={15} className="text-gold" />
          {person.phone}
        </a>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-maroon">
            The People Behind It
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">
            Meet Our Team
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {team.map((person, i) => (
            <TeamCard key={person.id} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}