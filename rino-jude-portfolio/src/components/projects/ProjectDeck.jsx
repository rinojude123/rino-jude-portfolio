import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";
import "../../styles/projects.css";

/* Fixed "imperfect" offsets so the pile looks the same on every visit. */
const TILT = [-2.4, 1.9, -1.3, 2.7, -3, 1.2, -2, 2.4];
const SHIFT_X = [-10, 12, -6, 9, -13, 7, -8, 11];
const SHIFT_Y = [4, -2, 6, 0, 5, -3, 3, -1];
const VISIBLE_DEPTH = 3;

/* Timing — raise MOVE_MS to slow the shuffle down. */
const MOVE_MS = 1150; /* one card travelling: out to the side, then to the other end */
const OUT_SHARE = 0.4; /* fraction of the trip spent sliding out before tucking away */

const EASE_OUT = [0.22, 1, 0.36, 1];
const EASE_IN_OUT = [0.45, 0, 0.2, 1];

function restingPose(position, i) {
  const k = i % TILT.length;
  if (position === 0) {
    return { x: SHIFT_X[k] * 0.3, y: 0, rotate: TILT[k] * 0.45, scale: 1, opacity: 1 };
  }
  const depth = Math.min(Math.max(position, 0), VISIBLE_DEPTH);
  return {
    x: SHIFT_X[k],
    y: SHIFT_Y[k] + depth * 9,
    rotate: TILT[k],
    scale: 1 - depth * 0.012,
    opacity: position > VISIBLE_DEPTH ? 0 : 1,
  };
}

/*
  The travelling card follows ONE continuous path (keyframes):
  current spot -> out to the side -> its final spot at the other end of the pile.
  All values are plain numbers (px / deg) so nothing snaps between units.
*/
function travelPose(finalPosition, i, compact) {
  const k = i % TILT.length;
  const end = restingPose(finalPosition, i);
  return {
    x: [null, compact ? 50 : 230, end.x],
    y: [null, -34, end.y],
    rotate: [null, TILT[k] + 9, end.rotate],
    scale: [null, 1.02, end.scale],
    opacity: [null, 1, end.opacity],
  };
}

function DeckCard({ project, index, position, total, move, compact, reduced, onShuffle }) {
  const travelling = move?.index === index;
  const isTop = position === 0 && !travelling;
  const metric = project.metrics?.[0];
  const techs = project.technologies.slice(0, 3);
  const extra = project.technologies.length - techs.length;

  let animate;
  let transition;
  let zIndex = total - position;

  if (travelling) {
    const finalPosition = move.dir === "next" ? total - 1 : 0;
    animate = travelPose(finalPosition, index, compact);
    transition = {
      duration: MOVE_MS / 1000,
      times: [0, OUT_SHARE, 1],
      ease: [EASE_OUT, EASE_IN_OUT],
    };
    /* on its way to the back it passes behind the pile once it has slid out */
    zIndex = move.dir === "next" && move.phase === "in" ? 1 : total + 1;
  } else {
    animate = restingPose(position, index);
    transition = reduced
      ? { duration: 0.01 }
      : { duration: 0.75, ease: EASE_OUT, delay: Math.max(position, 0) * 0.04 };
  }

  return (
    <motion.article
      className={`deck-card${isTop ? " is-top" : ""}`}
      style={{ zIndex }}
      initial={false}
      animate={animate}
      transition={transition}
      inert={!isTop}
      aria-hidden={!isTop}
      onClick={(event) => {
        if (!isTop || event.target.closest("a")) return;
        onShuffle();
      }}
    >
      <div className="deck-card-head">
        <span className="deck-num">{project.number}</span>
        <span className="deck-eyebrow technical-label">{project.eyebrow}</span>
        <span className="deck-status">{project.status}</span>
      </div>

      <div className="deck-body">
        <h3 className="deck-title">{project.title}</h3>
        <p className="deck-summary">{project.summary}</p>
      </div>

      <div className="deck-tags">
        {techs.map((tech) => (
          <span className="skill-tag" key={tech}>
            {tech}
          </span>
        ))}
        {extra > 0 ? <span className="deck-more">+{extra}</span> : null}
      </div>

      <div className="deck-foot">
        <span className="metric">
          {metric ? `${metric.label} ${metric.value}` : project.domains.join(" · ")}
        </span>
        <Link className="hand-button deck-view" to={`/project/${project.slug}`} tabIndex={isTop ? 0 : -1}>
          VIEW PROJECT →
        </Link>
      </div>
    </motion.article>
  );
}

export function ProjectDeck({ projects }) {
  const reduced = usePrefersReducedMotion();
  const total = projects.length;

  const [order, setOrder] = useState(() => projects.map((_, i) => i));
  const [move, setMove] = useState(null); /* { index, dir: "next" | "prev" } */
  const [compact, setCompact] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 999px)").matches,
  );
  const busy = useRef(false);
  const timers = useRef([]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 999px)");
    const update = () => setCompact(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  const later = (fn, ms) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const run = (dir) => {
    if (busy.current || total < 2) return;
    busy.current = true;

    const index = dir === "next" ? order[0] : order[order.length - 1];
    const reorder = (o) => (dir === "next" ? [...o.slice(1), o[0]] : [o[o.length - 1], ...o.slice(0, -1)]);

    if (reduced) {
      setOrder(reorder);
      busy.current = false;
      return;
    }

    /* The card travels along one path while the rest of the pile shifts at the same time. */
    setMove({ index, dir, phase: "out" });
    later(() => setMove((m) => (m ? { ...m, phase: "in" } : m)), MOVE_MS * OUT_SHARE);

    /* When it has arrived, the order is updated to match what is already on screen. */
    later(() => {
      setOrder(reorder);
      setMove(null);
      busy.current = false;
    }, MOVE_MS + 60);
  };

  const next = () => run("next");
  const prev = () => run("prev");

  if (!total) return null;
  const current = projects[order[0]];

  /* While a card is sliding out, the rest of the pile already shifts. */
  const displayPosition = (i) => {
    const base = order.indexOf(i);
    if (!move || i === move.index) return base;
    return move.dir === "next" ? base - 1 : base + 1;
  };

  return (
    <div className="deck">
      <div className="deck-stage-wrap">
        <div className="deck-stage">
          {projects.map((project, i) => (
            <DeckCard
              key={project.slug}
              project={project}
              index={i}
              position={displayPosition(i)}
              total={total}
              move={move}
              compact={compact}
              reduced={reduced}
              onShuffle={next}
            />
          ))}
        </div>
      </div>

      <div className="deck-controls">
        <button type="button" className="hand-button" onClick={prev}>
          ← PREV
        </button>
        <span className="deck-counter technical-label">
          {String(order[0] + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button type="button" className="hand-button" onClick={next}>
          NEXT →
        </button>
      </div>

      <p className="annotation deck-hint">click the card to shuffle ↻</p>

      <p className="deck-sr" aria-live="polite">
        Showing project {order[0] + 1} of {total}: {current.title}
      </p>
    </div>
  );
}