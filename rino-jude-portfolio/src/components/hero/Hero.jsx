import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

import { site } from "../../data/site.js";
import { useFinePointer } from "../../hooks/useFinePointer.js";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";
import { HandDrawnButton } from "../common/HandDrawnButton.jsx";
import { TechnicalLabel } from "../common/TechnicalLabel.jsx";
import { CustomCursor } from "./CustomCursor.jsx";

const MASK_SIZE = 92;

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const interactive = finePointer && !reduced;

  const frameRef = useRef(null);

  const maskX = useMotionValue(180);
  const maskY = useMotionValue(220);

  // Direct movement — no spring delay
  const cursorX = maskX;
  const cursorY = maskY;

  const active = useMotionValue(0);

  useEffect(() => {
    if (!interactive) return undefined;

    const frame = frameRef.current;
    if (!frame) return undefined;

    const onMove = (event) => {
      const rect = frame.getBoundingClientRect();

      maskX.set(event.clientX - rect.left);
      maskY.set(event.clientY - rect.top);
      active.set(1);
    };

    const onLeave = () => {
      animate(active, 0, {
        duration: 0.35,
        ease: "easeOut",
      });
    };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);

    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
    };
  }, [active, interactive, maskX, maskY]);

  useEffect(() => {
    if (!interactive) return undefined;

    let raf = 0;

    const node = frameRef.current?.querySelector(".hero-layer");

    const tick = () => {
      if (node) {
        const x = cursorX.get();
        const y = cursorY.get();
        const alpha = active.get();

        const size = MASK_SIZE * (0.35 + alpha * 0.65);

        node.style.opacity = String(alpha);

        const mask = `radial-gradient(
          circle ${size}px at ${x}px ${y}px,
          #000 62%,
          transparent 100%
        )`;

        node.style.webkitMaskImage = mask;
        node.style.maskImage = mask;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [active, cursorX, cursorY, interactive]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <TechnicalLabel className="hero-kicker">
          PORTFOLIO / 01
        </TechnicalLabel>

        <h1>{site.name}</h1>

        <p className="hero-role">{site.title}</p>

        <p className="hero-about">{site.about}</p>

        <div className="hero-actions">
          <HandDrawnButton href="/#work">
            {site.hero.primaryCta}
          </HandDrawnButton>

          <HandDrawnButton href={site.resumePath}>
            {site.hero.secondaryCta}
          </HandDrawnButton>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-frame" ref={frameRef}>
          <div className="construction-marks mobile-hide" />

          <img
            className="hero-img"
            src={site.hero.imageB}
            alt={site.hero.imageBAlt}
            width="720"
            height="900"
            fetchPriority="high"
          />

          {interactive ? (
            <img
              className="hero-layer"
              src={site.hero.imageA}
              alt=""
              width="720"
              height="900"
              aria-hidden="true"
            />
          ) : null}
        </div>

        {interactive ? (
          <CustomCursor
            x={cursorX}
            y={cursorY}
            hostRef={frameRef}
          />
        ) : null}
      </div>
    </section>
  );
}