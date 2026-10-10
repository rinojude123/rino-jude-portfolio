import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

/*
  Scroll-linked ink thread. The path is rebuilt only on resize (state),
  while scroll progress drives pathLength through motion values (no re-renders).
  It stays in the side gutters and crosses sideways only inside the empty
  padding between sections, so it never touches text.
*/
function buildPath(layer) {
  const main = layer.parentElement;
  const sections = Array.from(main.children).filter((el) => el.tagName === "SECTION");
  if (sections.length < 2) return { d: "", w: 0, h: 0 };

  const W = main.clientWidth;
  const H = main.clientHeight;
  const xL = Math.max(W * 0.022, (W - 1200) / 2 - 34);
  const xR = W - xL;
  let side = 1; // start on the right
  const xs = () => (side ? xR : xL);

  const first = sections[1].offsetTop;
  let y = first - 260;
  let d = `M${xs().toFixed(1)} ${Math.max(y, 0).toFixed(1)}`;

  for (let i = 1; i < sections.length; i++) {
    const b = sections[i].offsetTop;
    const pad = parseFloat(getComputedStyle(sections[i]).paddingTop) || 100;
    const h = Math.min(pad * 0.7, 130);
    const xa = xs();
    const drift = (i % 2 ? 1 : -1) * 8;
    // gentle wobble down to the crossing point
    d += ` C${(xa + drift).toFixed(1)} ${(y + (b - h - y) * 0.35).toFixed(1)}, ${(xa - drift).toFixed(1)} ${(y + (b - h - y) * 0.7).toFixed(1)}, ${xa.toFixed(1)} ${(b - h).toFixed(1)}`;
    side = side ? 0 : 1;
    const xb = xs();
    d += ` C${xa.toFixed(1)} ${b.toFixed(1)}, ${xb.toFixed(1)} ${b.toFixed(1)}, ${xb.toFixed(1)} ${(b + h).toFixed(1)}`;
    y = b + h;
  }

  const last = sections[sections.length - 1];
  const endY = last.offsetTop + last.offsetHeight - 40;
  const x = xs();
  d += ` L${x.toFixed(1)} ${(endY - 30).toFixed(1)} c0 18 ${side ? -22 : 22} 22 ${side ? -22 : 22} 8 c0 -10 ${side ? -14 : 14} -8 ${side ? -14 : 14} 0`;
  return { d, w: W, h: H };
}

export function EngineeringThread() {
  const layerRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [geo, setGeo] = useState({ d: "", w: 0, h: 0 });

  const { scrollYProgress } = useScroll({
    target: layerRef,
    offset: ["start 70%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;
    const update = () => setGeo(buildPath(layer));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(layer.parentElement);
    window.addEventListener("load", update);
    document.fonts?.ready.then(update);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", update);
    };
  }, []);

  return (
    <div className="thread-layer" ref={layerRef} aria-hidden="true">
      {geo.d && (
        <svg width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} fill="none">
          <motion.path
            d={geo.d}
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            style={{ pathLength: reduced ? 1 : progress }}
          />
        </svg>
      )}
    </div>
  );
}
