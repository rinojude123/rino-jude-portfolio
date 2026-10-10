export const site = {
  name: "Rino Jude",
  title: "Biomedical Engineering Student",
  about:
    "I'm a Biomedical Engineering student exploring different fields of technology, learning how they work, and experimenting with how they can come together.",
  email: "rinojude1810@gmail.com",
  linkedinLabel: "rino-jude-rj218",
  githubLabel: "rinojude123",
  linkedinUrl: "https://www.linkedin.com/in/rino-jude-rj218",
  githubUrl: "https://github.com/rinojude123",
  resumePath: "/Rino-Jude-Resume.pdf",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://rinojude.vercel.app",
  metaDescription:
    "Rino Jude is a Biomedical Engineering student exploring technology across healthcare, AI/ML, software, embedded systems, design, and automation.",
  education: {
    school: "Karunya Institute of Technology & Sciences",
    program: "B.Tech in Biomedical Engineering",
    years: "2023–2027",
    place: "Coimbatore, India",
  },
  aboutFields: [
    "healthcare",
    "software / web",
    "AI / ML",
    "embedded systems",
    "IoT",
    "instrumentation",
    "design / 3D",
    "automation",
  ],
  annotations: {
    about: "currently experimenting ↓",
    projects: "idea → prototype",
    footerSeeYou: "see you →",
  },
  footerStatusWords: [
    "still building",
    "still exploring",
    "still learning",
    "still creating",
    "still experimenting",
    "still discovering",
    "still improving",
    "still understanding",
    "still questioning",
    "still making",
  ],
  hero: {
    primaryCta: "VIEW WORK →",
    secondaryCta: "RESUME ↗",
    imageA: "/images/hero/hero-color.png", 
    imageB: "/images/hero/hero-sketch.png",
    imageAAlt:
      "Full-color illustration of Rino Jude in a dark suit with an HP laptop.",
    imageBAlt:
      "Monochrome ink sketch of the same seated pose wearing a Meta Quest headset with an HP laptop.",
  },
};

export const seo = {
  defaultTitle: `${site.name} — ${site.title}`,
  defaultDescription: site.metaDescription,
};
