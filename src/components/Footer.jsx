import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const FOOTER_LINKS = [
  { label: "About", to: "about" },
  { label: "Why Us", to: "why-choose-us" },
  { label: "Products", to: "products" },
  { label: "Materials", to: "materials" },
  { label: "Process", to: "process" },
  { label: "Areas", to: "areas" },
  { label: "Gallery", to: "gallery" },
  { label: "Contact", to: "contact" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.3.4a4.6 4.6 0 0 1 2.6 2.6c.2.5.4 1.2.4 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.4 2.3a4.6 4.6 0 0 1-2.6 2.6c-.5.2-1.2.4-2.3.4-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.3-.4a4.6 4.6 0 0 1-2.6-2.6c-.2-.5-.4-1.2-.4-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.4-2.3a4.6 4.6 0 0 1 2.6-2.6c.5-.2 1.2-.4 2.3-.4C8.9 2 9.3 2 12 2Zm0 1.8c-2.7 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.4.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.4 1 .6.3.1.8.3 1.7.3 1 .1 1.3.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.4-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.3.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7a2.8 2.8 0 0 0-.6-1 2.8 2.8 0 0 0-1-.6c-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-4-.1Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z",
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    path: "M23 12s0-3.6-.5-5.3a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.6a3 3 0 0 0-2.1 2.1C1 8.4 1 12 1 12s0 3.6.5 5.3a3 3 0 0 0 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.4-.6a3 3 0 0 0 2.1-2.1c.5-1.7.5-5.3.5-5.3ZM9.8 15.3V8.7L15.8 12l-6 3.3Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy pt-20">
      <div className="wall-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold tracking-wide text-gold">PUNARV</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.4em] text-cream/60">
                Precast
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {siteConfig.tagline} — engineered precast compound walls for homes,
              industries, and farms across Bangalore North.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, path }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, backgroundColor: "#F4C542", color: "#163A5C" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors"
                  aria-label={label}
                >
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                    <path d={path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-cream/50">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  smooth
                  duration={600}
                  offset={-90}
                  className="w-fit cursor-pointer text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-cream/50">
              Products
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {["Compound Wall", "Security Wall", "Residential Wall", "Farmhouse Wall", "Labor Quarters"].map(
                (p) => (
                  <Link
                    key={p}
                    to="products"
                    smooth
                    duration={600}
                    offset={-90}
                    className="w-fit cursor-pointer text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {p}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-cream/50">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </div>
              <a href={`tel:${siteConfig.phone[0].replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-gold">
                <Phone size={16} className="text-gold" />
                {siteConfig.phone[0]}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition-colors hover:text-gold">
                <Mail size={16} className="text-gold" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Punarv Precast. All rights reserved.</p>
          <p>Designed & Built by GB</p>
        </div>
      </div>

      <div className="h-2 w-full bg-linear-to-r from-gold via-gold-dark to-gold" />
    </footer>
  );
}