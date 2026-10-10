import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

/* Background paper grid */
export function SketchDecorationLayer() {
  return (
    <div className="sketch-bg" aria-hidden="true">
      <svg width="0" height="0" />
    </div>
  );
}

/*
  LARGE SKETCHES: Real engineering relationships and diagrams.
*/
const SKETCHES = [
  {
    id: "rc-filter", section: "about", side: "right", top: 6, size: 150, rotate: 4, mode: "draw",
    viewBox: "0 0 120 90", note: "RC low-pass: fc = 1 / 2πRC",
    paths: [
      "M5 30 H30", "M30 30 l4 -8 l8 16 l8 -16 l8 16 l8 -16 l4 8", "M70 30 H110",
      "M85 30 V48 M75 48 H95 M75 55 H95 M85 55 V70", "M75 70 H95 M79 74 H91 M83 78 H87",
    ],
  },
  {
    id: "ecg", section: "about", side: "left", top: 72, size: 160, rotate: -3, mode: "draw",
    viewBox: "0 0 120 70", note: "ECG: P · QRS · T",
    paths: ["M2 45 H20 l4 -6 l4 6 H40 l4 4 l5 -38 l6 50 l4 -16 H75 q8 -14 16 0 H118", "M2 62 H118 M2 58 V66 M118 58 V66"],
  },
  {
    id: "wheatstone", section: "skills", side: "right", top: 4, size: 140, rotate: 0, mode: "draw",
    viewBox: "0 0 120 90", note: "balanced when R1/R2 = R3/R4",
    paths: [
      "M60 8 L100 42 L60 76 L20 42 Z", "M20 42 H53 M67 42 H100", "M60 42 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0",
      "M60 8 V2 M60 76 V84", "M54 40 L66 44",
    ],
  },
  {
    id: "oximeter", section: "skills", side: "left", top: 62, size: 140, rotate: -2, mode: "fade",
    viewBox: "0 0 120 90", note: "SpO₂: red + IR light",
    paths: [
      "M15 30 H85 a14 14 0 0 1 0 28 H15 Z", "M45 84 l8 -12 l8 12 z", "M45 6 l8 12 l8 -12 z",
      "M53 70 V60", "M53 28 V22", "M50 63 l3 -4 l3 4",
    ],
  },
  {
    id: "opamp", section: "experience", side: "right", top: 10, size: 150, rotate: 3, mode: "draw",
    viewBox: "0 0 120 80", note: "inverting bio-amp: gain = −Rf / Rin",
    paths: [
      "M40 10 V70 L95 40 Z", "M5 25 H10 l3 -5 l6 10 l6 -10 l3 5 H40", "M40 55 H28 V62 M22 62 H34",
      "M30 25 V6 H108 V40", "M95 40 H118",
    ],
  },
  {
    id: "arm", section: "experience", side: "left", top: 58, size: 140, rotate: 0, mode: "draw",
    viewBox: "0 0 120 90", note: "2-DOF arm: θ₁, θ₂",
    paths: [
      "M10 80 H50 M30 80 V68", "M30 62 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0", "M34 58 L62 35",
      "M65 32 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0", "M68 33 L100 45", "M100 45 l8 -6 M100 45 l8 6", "M30 50 A12 12 0 0 1 38 54",
    ],
  },
  {
    id: "mcu", section: "contact", side: "right", top: 6, size: 130, rotate: -4, mode: "fade",
    viewBox: "0 0 120 90", note: "sense → process → display",
    paths: [
      "M30 15 h60 v60 h-60 z", "M42 15 a6 6 0 0 0 12 0",
      "M20 28 H30 M20 40 H30 M20 52 H30 M20 64 H30", "M90 28 H100 M90 40 H100 M90 52 H100 M90 64 H100",
    ],
  },
  {
    id: "pid", section: "contact", side: "left", top: 66, size: 160, rotate: 2, mode: "draw",
    viewBox: "0 0 120 70", note: "PID = P + I + D",
    paths: [
      "M2 28 H14 M21 28 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0", "M28 28 H42 M42 16 h30 v24 h-30 z",
      "M72 28 H100 M82 28 V58 H21 V35", "M100 28 l-5 -3 M100 28 l-5 3",
    ],
  },
  {
    id: "dimension", section: "about", side: "right", top: 78, size: 120, rotate: -6, mode: "draw",
    viewBox: "0 0 120 40", note: "tolerance ±0.5 mm",
    paths: ["M8 20 H112 M8 10 V30 M112 10 V30", "M8 20 l6 -3 M8 20 l6 3 M112 20 l-6 -3 M112 20 l-6 3"],
  },
];

function Sketch({ sketch, reduced }) {
  const { viewBox, paths, mode, size, rotate, side, top, note } = sketch;
  const drawn = mode === "draw" && !reduced;

  return (
    <motion.figure
      className={`sketch sketch-${side}`}
      style={{ top: `${top}%`, width: size, rotate }}
      initial={{ opacity: reduced ? 0.6 : 0 }}
      whileInView={{ opacity: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: reduced ? 0.01 : 0.8 }}
    >
      <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            initial={{ pathLength: drawn ? 0 : 1 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: i * 0.25, ease: "easeOut" }}
          />
        ))}
      </svg>
      <figcaption>{note}</figcaption>
    </motion.figure>
  );
}

/*
  SMALL SKETCH ELEMENTS, GLYPHS & LOGOS
*/
const GLYPHS = {
  angle: { vb: "0 0 70 56", paths: ["M8 50 H62", "M8 50 L44 12", "M30 50 A22 22 0 0 0 24 37"] },
  axes: { vb: "0 0 70 56", paths: ["M10 52 V6 M10 6 l-3 7 M10 6 l3 7", "M10 52 H66 M66 52 l-7 -3 M66 52 l-7 3", "M10 52 C 24 40, 40 20, 60 14"] },
  radius: { vb: "0 0 70 56", paths: ["M35 28 m-24 0 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0", "M35 28 L56 16", "M35 28 m-1.5 0 a1.5 1.5 0 1 0 3 0 a1.5 1.5 0 1 0 -3 0"] },
  cube: { vb: "0 0 70 62", paths: ["M35 4 L64 19 V45 L35 58 L6 45 V19 Z", "M6 19 L35 34 L64 19", "M35 34 V58"] },
  sine: { vb: "0 0 90 40", paths: ["M2 20 q10 -26 20 0 t20 0 t20 0 t20 0", "M2 36 H88"] },
  flow: { vb: "0 0 130 36", paths: ["M2 8 h32 v20 h-32 z", "M34 18 h10 M44 18 l-4 -3 M44 18 l-4 3", "M46 8 h32 v20 h-32 z", "M78 18 h10 M88 18 l-4 -3 M88 18 l-4 3", "M90 8 h32 v20 h-32 z"] },
  cross: { vb: "0 0 44 44", paths: ["M22 3 V41 M3 22 H41", "M22 22 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0"] },
  projection: { vb: "0 0 80 56", paths: ["M10 14 h34 v28 h-34 z", "M44 14 L70 8 M44 42 L70 36 M70 8 V36"], dashed: [1, 2] },
  dimrect: { vb: "0 0 80 56", paths: ["M10 10 h60 v28 h-60 z", "M10 48 H70 M10 44 V52 M70 44 V52"] },
  circleDetail: { vb: "0 0 80 48", paths: ["M12 26 C 8 8, 58 2, 68 20 S 44 44, 22 40 S 4 34, 14 16"] },
  grid: { vb: "0 0 60 48", paths: ["M4 14 H44 M4 28 H44 M4 42 H44", "M14 4 V46 M28 4 V46 M42 4 V46"] },
  rotation: { vb: "0 0 70 56", paths: ["M35 28 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0", "M35 28 L35 6", "M35 28 m-20 0 a20 20 0 0 1 20 -20", "M20 3 l-6 4 M20 3 l-3 -6", "M52 12 a24 24 0 0 1 4 18 M56 30 l2 -7 M56 30 l-6 -3"] },
  exploded: { vb: "0 0 70 64", paths: ["M12 6 h46 v10 h-46 z", "M12 27 h46 v10 h-46 z", "M12 48 h46 v10 h-46 z", "M35 16 V27 M35 37 V48"], dashed: [1, 3] },
  arrow: { vb: "0 0 60 40", paths: ["M4 8 C 24 4, 44 14, 50 32", "M50 32 l-7 -6 M50 32 l-1 -9"] },
  circuit: { vb: "0 0 90 40", paths: ["M2 20 H20 l3 -7 l6 14 l6 -14 l6 14 l3 -7 H58", "M58 20 V8 M50 8 H66", "M58 20 V32 M50 32 H66 M54 36 H62"] },
  
  /* NEW SOCIAL & CONTACT LOGOS */
  github: { vb: "0 0 24 24", paths: ["M9 19c-5 1.5-5-2.5-7-3", "M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"] },
  linkedin: { vb: "0 0 24 24", paths: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2z", "M4 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"] },
  mobile: { vb: "0 0 24 24", paths: ["M7 2 h10 a2 2 0 0 1 2 2 v16 a2 2 0 0 1 -2 2 H7 a2 2 0 0 1 -2 -2 V4 a2 2 0 0 1 2 -2 z", "M11 18 h2"] }
};

/*
  EXPANDED BIOMEDICAL ENGINEERING ANNOTATIONS & MARKS
*/
const MARKS = [
  /* ---------- ABOUT ---------- */
  { id: "a1", section: "about", kind: "note", text: "Notch filter @ 50/60Hz", x: "8%", edge: "top", offset: 18, rotate: -4, mobile: true },
  { id: "a2", section: "about", kind: "glyph", glyph: "angle", text: "θ = 45°", x: "74%", edge: "top", offset: 12, rotate: 3 },
  { id: "a3", section: "about", kind: "note", text: "baseline wander removal", x: "42%", edge: "top", offset: 28, rotate: 2 },
  { id: "a4", section: "about", kind: "glyph", glyph: "axes", text: "REF. AXIS", x: "85%", edge: "bottom", offset: 15, rotate: -2 },
  { id: "a5", section: "about", kind: "note", text: "clinical validation pending", x: "68%", edge: "bottom", offset: 20, rotate: 3 },
  { id: "a6", section: "about", kind: "glyph", glyph: "flow", text: "SENSE → PROCESS → DISPLAY", x: "12%", edge: "bottom", offset: 10, rotate: -1 },

  /* ---------- PROJECTS / WORK ---------- */
  { id: "p1", section: "work", kind: "note", text: "Ag/AgCl electrodes", x: "62%", edge: "top", offset: 20, rotate: -3, mobile: true },
  { id: "p2", section: "work", kind: "glyph", glyph: "cube", text: "prototype / 01", x: "14%", edge: "top", offset: 8, rotate: -3 },
  { id: "p3", section: "work", kind: "note", text: "leakage current < 10µA", x: "82%", edge: "top", offset: 34, rotate: 4 },
  { id: "p4", section: "work", kind: "glyph", glyph: "dimrect", text: "L = 120 mm", x: "36%", edge: "top", offset: 14, rotate: 1 },
  { id: "p5", section: "work", kind: "note", text: "ISO 13485 compliance", x: "18%", edge: "bottom", offset: 22, rotate: -2, mobile: true },
  { id: "p6", section: "work", kind: "glyph", glyph: "projection", text: "TOP VIEW", x: "48%", edge: "bottom", offset: 12, rotate: 2 },
  { id: "p7", section: "work", kind: "note", text: "built this", x: "76%", edge: "bottom", offset: 20, rotate: 4 },
  { id: "p8", section: "work", kind: "note", text: "impedance matching network", x: "90%", edge: "bottom", offset: 32, rotate: -3 },

  /* Duplicate aliases for "projects" id if Section uses id="projects" */
  { id: "pj1", section: "projects", kind: "note", text: "Ag/AgCl electrodes", x: "62%", edge: "top", offset: 20, rotate: -3, mobile: true },
  { id: "pj2", section: "projects", kind: "glyph", glyph: "cube", text: "prototype / 01", x: "14%", edge: "top", offset: 8, rotate: -3 },
  { id: "pj3", section: "projects", kind: "note", text: "leakage current < 10µA", x: "82%", edge: "top", offset: 34, rotate: 4 },
  { id: "pj4", section: "projects", kind: "glyph", glyph: "dimrect", text: "L = 120 mm", x: "36%", edge: "top", offset: 14, rotate: 1 },
  { id: "pj5", section: "projects", kind: "note", text: "ISO 13485 compliance", x: "18%", edge: "bottom", offset: 22, rotate: -2, mobile: true },
  { id: "pj6", section: "projects", kind: "glyph", glyph: "projection", text: "TOP VIEW", x: "48%", edge: "bottom", offset: 12, rotate: 2 },
  { id: "pj7", section: "projects", kind: "note", text: "built this", x: "76%", edge: "bottom", offset: 20, rotate: 4 },
  { id: "pj8", section: "projects", kind: "note", text: "impedance matching network", x: "90%", edge: "bottom", offset: 32, rotate: -3 },

  /* ---------- SKILLS ---------- */
  { id: "s1", section: "skills", kind: "note", text: "SIGNAL → CONDITION → OUTPUT", x: "54%", edge: "top", offset: 22, rotate: 2, mono: true },
  { id: "s2", section: "skills", kind: "glyph", glyph: "sine", text: "raw signal", x: "10%", edge: "top", offset: 8, rotate: -3 },
  { id: "s3", section: "skills", kind: "note", text: "noise floor limit?", x: "88%", edge: "top", offset: 16, rotate: 4 },
  { id: "s4", section: "skills", kind: "glyph", glyph: "circuit", text: "Galvanic isolation", x: "72%", edge: "bottom", offset: 8, rotate: 2 },
  { id: "s5", section: "skills", kind: "note", text: "EMG envelope detection", x: "12%", edge: "bottom", offset: 22, rotate: -2, mono: true },
  { id: "s6", section: "skills", kind: "note", text: "CMRR > 100dB", x: "44%", edge: "bottom", offset: 18, rotate: -1, mobile: true },
  { id: "s7", section: "skills", kind: "glyph", glyph: "grid", text: "CHECK SCALE", x: "86%", edge: "bottom", offset: 12, rotate: 3 },

  /* ---------- EXPERIENCE ---------- */
  { id: "e1", section: "experience", kind: "glyph", glyph: "rotation", text: "↻ rotation", x: "72%", edge: "top", offset: 8, rotate: 4 },
  { id: "e2", section: "experience", kind: "note", text: "ADC sampling rate > 1kHz", x: "12%", edge: "top", offset: 22, rotate: -3, mobile: true },
  { id: "e3", section: "experience", kind: "note", text: "SNR improvement req.", x: "42%", edge: "top", offset: 28, rotate: 2 },
  { id: "e4", section: "experience", kind: "glyph", glyph: "dimrect", text: "± 0.5 mm", x: "16%", edge: "bottom", offset: 8, rotate: -2 },
  { id: "e5", section: "experience", kind: "glyph", glyph: "exploded", text: "exploded view", x: "50%", edge: "bottom", offset: 10, rotate: 1 },
  { id: "e6", section: "experience", kind: "note", text: "biocompatible?", x: "78%", edge: "bottom", offset: 22, rotate: 3 },
  { id: "e7", section: "experience", kind: "note", text: "back to the drawing board", x: "88%", edge: "top", offset: 40, rotate: -4 },

  /* ---------- CONTACT (WITH SOCIAL LOGOS) ---------- */
  { id: "c1", section: "contact", kind: "note", text: "EEG α waves ~8-12Hz", x: "80%", edge: "top", offset: 10, rotate: 4, mobile: true },
  { id: "c2", section: "contact", kind: "glyph", glyph: "cross", text: "ALIGN", x: "12%", edge: "top", offset: 8, rotate: 0 },
  { id: "c3", section: "contact", kind: "glyph", glyph: "github", text: "source_code.git", x: "35%", edge: "top", offset: 24, rotate: -2 },
  { id: "c4", section: "contact", kind: "glyph", glyph: "linkedin", text: "professional_network", x: "68%", edge: "bottom", offset: 32, rotate: 2 },
  { id: "c5", section: "contact", kind: "glyph", glyph: "circleDetail", text: "check impedance", x: "14%", edge: "bottom", offset: 8, rotate: 3 },
  { id: "c6", section: "contact", kind: "glyph", glyph: "mobile", text: "RX/TX comm link", x: "42%", edge: "bottom", offset: 18, rotate: -1 },
];

/* Handwriting-style reveal: text is "written" left to right. */
function WrittenText({ text, mono, reduced, delay = 0.2 }) {
  const hidden = "inset(-8px 100% -8px -2px)";
  const shown = "inset(-8px -4px -8px -2px)";
  return (
    <motion.span
      className={mono ? "mark-text mark-text-mono" : "mark-text"}
      initial={{ clipPath: reduced ? shown : hidden }}
      whileInView={{ clipPath: shown }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduced ? 0.01 : 0.3 + text.length * 0.05, delay, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
}

function Mark({ mark, reduced }) {
  const { kind, text, x, edge, offset, rotate, mobile, mono, glyph } = mark;
  const style = { left: x, [edge]: offset, rotate };
  const cls = `mark mark-${kind}${mobile ? " mark-keep" : ""}`;

  if (kind === "note") {
    return (
      <div className={cls} style={style}>
        <WrittenText text={text} mono={mono} reduced={reduced} />
      </div>
    );
  }

  const g = GLYPHS[glyph];
  
  // Custom styling for social icons so they fit the standard SVG size
  const isSocial = glyph === "github" || glyph === "linkedin" || glyph === "mobile";
  const viewBoxWidth = isSocial ? "0 0 24 24" : g.vb;
  const svgStyle = isSocial ? { width: "24px", height: "24px", marginBottom: "4px" } : {};

  return (
    <motion.div
      className={cls}
      style={style}
      initial={{ opacity: reduced ? 0.55 : 0 }}
      whileInView={{ opacity: 0.55 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduced ? 0.01 : 0.6 }}
    >
      <svg viewBox={viewBoxWidth} style={svgStyle} fill="none" stroke="currentColor" strokeWidth={isSocial ? "1.5" : "1.2"} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {g.paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            strokeDasharray={g.dashed ? g.dashed.join(" ") : undefined}
            initial={{ pathLength: reduced ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
          />
        ))}
      </svg>
      {text && <WrittenText text={text} reduced={reduced} delay={0.5} />}
    </motion.div>
  );
}

/* Renders the sketches + marks that belong to the given section. */
export function SectionSketches({ sectionId }) {
  const reduced = usePrefersReducedMotion();
  const list = SKETCHES.filter((s) => s.section === sectionId);
  const marks = MARKS.filter((m) => m.section === sectionId);
  if (!list.length && !marks.length) return null;

  return (
    <>
      {list.length > 0 && (
        <div className="sketch-layer" aria-hidden="true">
          {list.map((s) => (
            <Sketch key={s.id} sketch={s} reduced={reduced} />
          ))}
        </div>
      )}
      {marks.length > 0 && (
        <div className="mark-layer" aria-hidden="true">
          {marks.map((m) => (
            <Mark key={m.id} mark={m} reduced={reduced} />
          ))}
        </div>
      )}
    </>
  );
}