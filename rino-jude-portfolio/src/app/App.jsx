import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";

import { Preloader } from "../components/effects/Preloader.jsx";

import { SketchDecorationLayer } from "../components/effects/SketchDecorationLayer.jsx";

import { AppRoutes } from "./routes.jsx";

export default function App() {
  const location = useLocation();

  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    const handleComplete = () => {
      setPreloaderDone(true);
    };

    window.addEventListener("preloader-complete", handleComplete);

    return () => {
      window.removeEventListener("preloader-complete", handleComplete);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const node = document.getElementById(id);

      if (node) {
        node.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SketchDecorationLayer />

      <Preloader />

      <motion.div
        className="page-content"
        initial={{ y: "100vh" }}
        animate={{
          y: preloaderDone ? 0 : "100vh",
        }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <AppRoutes />
      </motion.div>
    </div>
  );
}