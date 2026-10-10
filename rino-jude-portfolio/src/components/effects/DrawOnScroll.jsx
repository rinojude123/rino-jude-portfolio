import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

export function DrawOnScroll({
  className = "",
  d = "M2 8 H220",
  width = 224,
  height = 16,
  stretch = false,
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <svg
      className={className}
      width={stretch ? "100%" : width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio={stretch ? "none" : undefined}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: reduced ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: reduced ? 0.01 : 0.7, ease: "easeOut" }}
      />
    </svg>
  );
}