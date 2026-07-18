import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Materials from "./components/Materials";
import Process from "./components/Process";
import Areas from "./components/Areas";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhyChooseUs />
            <Products />
            <Materials />
            <Process />
            <Areas />
            <Gallery />
            <Contact />
            <Footer />
            <FloatingButtons />
          </main>
        </>
      )}
    </>
  );
}