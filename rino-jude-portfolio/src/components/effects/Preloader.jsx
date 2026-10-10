import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { site } from "../../data/site.js";
import { useDocumentReady } from "../../hooks/useDocumentReady.js";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

export function Preloader() {
  const ready = useDocumentReady();
  const reduced = usePrefersReducedMotion();
  const [writingDone, setWritingDone] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setWritingDone(true);
    }
  }, [reduced]);

  useEffect(() => {
    if (ready && writingDone) {
      window.dispatchEvent(new Event("preloader-complete"));
    }
  }, [ready, writingDone]);

  return (
    <AnimatePresence>
      {!ready || !writingDone ? (
        <motion.div
          className="preloader"
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: "-100vh",
            opacity: 1,
            transition: {
              duration: reduced ? 0.15 : 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          role="status"
          aria-live="polite"
        >
          <p className="sr-only">Loading {site.name}</p>

          <div
            style={{
              position: "relative",
              width: "min(78vw, 620px)",
              aspectRatio: "4 / 1",
              display: "grid",
              placeItems: "center",
            }}
          >
            <svg
              viewBox="0 0 620 155"
              width="100%"
              height="100%"
              role="img"
              aria-label={`Loading ${site.name}`}
              style={{ overflow: "visible" }}
            >
              <defs>
                <clipPath id="writing-reveal">
                  <motion.rect
                    x="0"
                    y="0"
                    height="155"
                    initial={{ width: 0 }}
                    animate={{ width: 620 }}
                    transition={{
                      duration: reduced ? 0 : 2.6,
                      ease: "easeInOut",
                    }}
                    onAnimationComplete={() => setWritingDone(true)}
                  />
                </clipPath>
              </defs>

              <g clipPath="url(#writing-reveal)">
                <text
                  x="310"
                  y="102"
                  textAnchor="middle"
                  fill="#2b2924"
                  opacity="0.78"
                  fontSize="72"
                  fontWeight="500"
                  letterSpacing="1"
                  fontFamily="'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive"
                >
                  {site.name}
                </text>

                <text
                  x="311"
                  y="103"
                  textAnchor="middle"
                  fill="none"
                  stroke="#2b2924"
                  strokeWidth="0.9"
                  opacity="0.18"
                  fontSize="72"
                  fontWeight="500"
                  letterSpacing="1"
                  fontFamily="'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive"
                >
                  {site.name}
                </text>
              </g>
            </svg>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}