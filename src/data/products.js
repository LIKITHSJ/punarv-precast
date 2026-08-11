import { ShieldCheck, Home, Warehouse, TreePine, LayoutGrid } from "lucide-react";
import compoundWallImg from "../assets/images/products/compound-wall.png";
import securityWallImg from "../assets/images/products/security-wall.png";
import residentialWallImg from "../assets/images/products/residential-wall.png";
import farmhouseWallImg from "../assets/images/products/farmhouse-wall.png";
import laborQuartersImg from "../assets/images/products/labor-quarters.png";

export const products = [
  {
    id: "compound-wall",
    title: "Compound Wall",
    icon: LayoutGrid,
    image: compoundWallImg,
    description: "Our standard precast compound wall — fully RCC with steel, engineered for speed and durability. Available 5 ft to 10 ft high.",
    applications: ["Residential plots", "Commercial layouts", "Institutional campuses"],
  },
  {
    id: "security-wall",
    title: "Security Compound Wall",
    icon: ShieldCheck,
    image: securityWallImg,
    description: "Reinforced precast wall designed to pair with barbed wire or razor coil fencing on top for high-security perimeters.",
    applications: ["Industrial security", "Factories", "Restricted zones"],
  },
  {
    id: "residential-wall",
    title: "Precast Prestressed Wall — Residential",
    icon: Home,
    image: residentialWallImg,
    description: "A clean, durable boundary solution for homes and residential layouts, resistant to weathering with zero maintenance.",
    applications: ["Independent houses", "Gated communities", "Residential plots"],
  },
  {
    id: "farmhouse-wall",
    title: "Farmhouse Compound Wall",
    icon: TreePine,
    image: farmhouseWallImg,
    description: "Aesthetic wave-top precast walls with ventilated diamond/leaf cut-outs — built for open, green farmhouse plots.",
    applications: ["Farmhouses", "Agricultural land", "Weekend homes"],
  },
  {
    id: "labor-quarters",
    title: "Precast Labor Quarters",
    icon: Warehouse,
    image: laborQuartersImg,
    description: "Rapidly assembled precast structures for on-site labor housing — quick to install and easy to relocate.",
    applications: ["Construction sites", "Industrial campuses"],
  },
];