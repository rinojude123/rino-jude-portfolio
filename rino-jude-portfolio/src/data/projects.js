export const projects = [
  {
    slug: "post-icu-readmission-prediction",
    number: "01",
    title: "30-Day Post-ICU Readmission Prediction",
    eyebrow: "AI / HEALTHCARE",
    summary:
      "Stacking ensemble that predicts 30-day post-ICU readmission from structured electronic health records.",
    description:
      "Built a stacking ensemble to predict 30-day post-ICU readmission from structured electronic health records. The pipeline used Random Forest, XGBoost, LightGBM, and CatBoost as base learners with Logistic Regression as the meta-learner, with SMOTE applied only to the training set.",
    process: [
      "Approximately 30,000 structured patient records",
      "80/20 train-test split",
      "SMOTE applied only to training data",
      "Four heterogeneous base learners with a Logistic Regression meta-learner",
    ],
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "Random Forest",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Logistic Regression",
      "SMOTE",
      "Google Colab",
    ],
    domains: ["AI", "Healthcare"],
    metrics: [
      { label: "Accuracy", value: "98.67%" },
      { label: "Recall", value: "99.64%" },
      { label: "F1-score", value: "98.91%" },
    ],
    status: "completed",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "pneumonia-detection",
    number: "02",
    title: "Pneumonia Detection from Chest X-Rays",
    eyebrow: "DEEP LEARNING / MEDICAL IMAGING",
    summary:
      "Transfer-learning pneumonia classifier using EfficientNetB0 and deep features from chest X-ray images.",
    description:
      "Built a transfer-learning pneumonia classifier using EfficientNetB0 and extracted deep features from chest X-ray images.",
    process: [
      "EfficientNetB0 transfer learning",
      "Approximately 62,720 deep features extracted per X-ray",
      "373 of 390 pneumonia cases correctly identified",
    ],
    technologies: ["EfficientNetB0", "transfer learning", "deep learning"],
    domains: ["Deep Learning", "Medical Imaging"],
    metrics: [
      { label: "Accuracy", value: "82%" },
      { label: "ROC-AUC", value: "0.92" },
      { label: "Recall", value: "96%" },
    ],
    status: "completed",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "smart-stethoscope",
    number: "03",
    title: "Smart Stethoscope",
    eyebrow: "BIOMEDICAL / AUDIO ELECTRONICS",
    summary:
      "Biomedical audio and electronics system covering capture, transmission, filtering, amplification, and output.",
    description:
      "Biomedical audio/electronics system covering audio recording, encryption, transmission, decoding, filtering, amplification, and audio output. This project is not described as AI-powered, a diagnosis engine, or an ML classifier.",
    process: [
      "Audio recording",
      "Encryption and transmission",
      "Decoding, filtering, and amplification",
      "Audio output",
    ],
    technologies: [
      "audio recording",
      "encryption",
      "transmission",
      "decoding",
      "filtering",
      "amplification",
      "audio output",
    ],
    domains: ["Biomedical", "Audio Electronics"],
    metrics: [],
    status: "prototype",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "automated-medical-report-generation",
    number: "04",
    title: "Automated Patient Medical Report Generation",
    eyebrow: "RPA / HEALTHCARE",
    summary:
      "UiPath RPA workflow that extracts and structures hospital data into patient reports.",
    description:
      "Built a UiPath RPA workflow to extract and structure hospital data into patient reports, reducing manual reporting effort by roughly 90%.",
    process: [
      "Extract hospital data with UiPath RPA",
      "Structure fields into patient reports",
      "Reduce manual reporting effort",
    ],
    technologies: ["UiPath", "RPA"],
    domains: ["RPA", "Healthcare"],
    metrics: [{ label: "Manual effort reduced", value: "~90%" }],
    status: "completed",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "3d-printed-medical-model",
    number: "05",
    title: "3D Printed Medical Model",
    eyebrow: "MEDICAL 3D / MODELLING",
    summary:
      "CT-based model created in 3D Slicer, refined in Blender, and 3D printed. Anatomical region is not specified until verified.",
    description:
      "Used 3D Slicer to create a model from CT scans, made minor refinements in Blender, and 3D printed the result. The scan type and anatomical region are not stated here because the source notes currently conflict.",
    process: [
      "CT scan source",
      "Model / segmentation in 3D Slicer",
      "Minor edits in Blender",
      "3D print",
    ],
    technologies: ["3D Slicer", "Blender", "3D printing"],
    domains: ["Medical 3D", "Modelling"],
    metrics: [],
    status: "completed",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "scara-robot",
    number: "06",
    title: "3D Printed SCARA Robot",
    eyebrow: "ROBOTICS / PROTOTYPING",
    summary:
      "3D-printed SCARA robotic arm with a gripper end-effector designed to mimic finger-like grasping.",
    description:
      "Built a 3D-printed SCARA robotic arm with a gripper end-effector designed to mimic finger-like grasping.",
    process: [
      "3D-printed SCARA architecture",
      "Gripper end-effector for finger-like grasping",
    ],
    technologies: ["3D printing", "SCARA architecture", "gripper end-effector"],
    domains: ["Robotics", "Prototyping"],
    metrics: [],
    status: "completed",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "smart-walking-stick",
    number: "07",
    title: "Smart Walking Stick",
    eyebrow: "EMBEDDED / ASSISTIVE PROTOTYPING",
    summary:
      "Basic obstacle-detection walking stick using Arduino, an ultrasonic sensor, and a buzzer.",
    description:
      "Built a basic obstacle-detection walking stick using Arduino, an ultrasonic sensor, and a buzzer. Obstacle sensing triggers a buzzer alert.",
    process: ["Ultrasonic obstacle sensing", "Buzzer alert"],
    technologies: ["Arduino", "ultrasonic sensor", "buzzer"],
    domains: ["Embedded", "Assistive Prototyping"],
    metrics: [],
    status: "prototype",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "iontophoresis-device",
    number: "08",
    title: "Iontophoresis Device",
    eyebrow: "BIOMEDICAL PROTOTYPE",
    summary:
      "Homemade iontophoresis prototype created as an experimental build. Not clinically validated or intended for patient use.",
    description:
      "Homemade iontophoresis prototype created as an experimental build with ChatGPT assistance. This is a prototype only. It is not described as medically safe, clinically validated, effective as treatment, or regulatory compliant. Additional component details were not supplied.",
    process: [
      "Homemade experimental setup",
      "Prototype only — not for patient use",
    ],
    technologies: ["homemade prototype"],
    domains: ["Biomedical Prototype"],
    metrics: [],
    status: "experimental prototype",
    featured: true,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
  {
    slug: "stethoscope-amplifier-circuit",
    number: "09",
    title: "Stethoscope Amplifier Circuit",
    eyebrow: "CIRCUIT / AUDIO",
    summary:
      "Basic audio-amplifier circuit using resistors, capacitors, and an audio amplifier component.",
    description:
      "Basic audio-amplifier circuit using resistors, capacitors, and an audio amplifier component. Kept as an archival / optional experimental build.",
    process: ["Passive components with an audio amplifier"],
    technologies: ["resistors", "capacitors", "audio amplifier"],
    domains: ["Circuit", "Audio"],
    metrics: [],
    status: "basic prototype",
    featured: false,
    media: [],
    links: { github: null, demo: null, paper: null },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}
