import { useEffect, useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";

export function CustomCursor({ x, y, hostRef }) {
  const [visible, setVisible] = useState(false);
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useMotionValueEvent(x, "change", (latest) => {
    const host = hostRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    setPoint((current) => ({ ...current, x: rect.left + latest }));
  });

  useMotionValueEvent(y, "change", (latest) => {
    const host = hostRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    setPoint((current) => ({ ...current, y: rect.top + latest }));
  });

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    const show = () => {
      setVisible(true);
      document.body.classList.add("cursor-hidden");
    };
    const hide = () => {
      setVisible(false);
      document.body.classList.remove("cursor-hidden");
    };
    host.addEventListener("pointerenter", show);
    host.addEventListener("pointerleave", hide);
    return () => {
      hide();
      host.removeEventListener("pointerenter", show);
      host.removeEventListener("pointerleave", hide);
    };
  }, [hostRef]);

  if (!visible) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{ x: point.x, y: point.y }}
      aria-hidden="true"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 15 L6 3 L9 9 L15 7 L8 16 Z" stroke="#1F1E1A" strokeWidth="1.4" fill="#F6F3EA" />
        <path d="M6.2 3.2 L5.4 1.4" stroke="#1F1E1A" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
