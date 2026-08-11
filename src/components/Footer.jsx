import { Link } from "react-scroll";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import logo from "../assets/images/punarv_logo.png";

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

export default function Footer() {
  return (
    <footer className="relative bg-navy pt-20">
      <div className="wall-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Punarv Precast" className="h-20 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {siteConfig.tagline} — engineered precast compound walls for homes,
              industries, and farms across Bangalore North.
            </p>
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