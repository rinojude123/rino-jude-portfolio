import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../../data/site.js";
import { Annotation } from "../common/Annotation.jsx";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="brand" style={{ marginBottom: "0.35rem" }}>
          {site.name}
        </p>
        <p className="technical-label">{site.title}</p>
        <div className="footer-links" style={{ marginTop: "1rem" }}>
          <a href={site.linkedinUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={site.githubUrl} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
      </div>
      <div>
        <AnimatedStatus />
        <Annotation className="see-you">{site.annotations.footerSeeYou}</Annotation>
      </div>
    </footer>
  );
}

function AnimatedStatus() {
  const reduced = usePrefersReducedMotion();
  const words = site.footerStatusWords;
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("write");

  useEffect(() => {
    if (reduced) return undefined;
    const hold = phase === "write" ? 1800 : 420;
    const timer = window.setTimeout(() => {
      if (phase === "write") setPhase("erase");
      else {
        setIndex((current) => (current + 1) % words.length);
        setPhase("write");
      }
    }, hold);
    return () => window.clearTimeout(timer);
  }, [phase, reduced, words.length]);

  const word = words[index];

  if (reduced) {
    return <p className="status-line">{word}</p>;
  }

  return (
    <p className="status-line" aria-live="off">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${word}-${phase}`}
          className="status-write"
          initial={{ width: phase === "write" ? 0 : "100%" }}
          animate={{ width: phase === "write" ? "100%" : 0 }}
          transition={{ duration: phase === "write" ? 0.85 : 0.45, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </p>
  );
}
