# PROJECT_DATA.md

Use this as the single source of truth for project cards and detail pages. Keep content structured in code (for example, `src/data/projects.js`).

## Display order

The recommended homepage order is:

1. Post-ICU Readmission Prediction
2. Pneumonia Detection from Chest X-Rays
3. Smart Stethoscope
4. Automated Patient Medical Report Generation
5. 3D Printed Medical Model
6. 3D Printed SCARA Robot
7. Smart Walking Stick
8. Iontophoresis Device

The amplifier circuit remains optional/archival.

## Project object shape

```js
{
  slug,
  number,
  title,
  eyebrow,
  summary,
  description,
  technologies: [],
  domains: [],
  metrics: [],
  status,
  featured,
  media: [],
  links: {
    github,
    demo,
    paper
  }
}
```

Use `null`/empty arrays for unavailable links or media. Never generate fake URLs.

## 01 Post-ICU Readmission Prediction

- slug: `post-icu-readmission-prediction`
- eyebrow: `AI / HEALTHCARE`
- technologies: Python, pandas, NumPy, scikit-learn, Random Forest, XGBoost, LightGBM, CatBoost, Logistic Regression, SMOTE, Google Colab
- metrics: 98.67% accuracy; 99.64% recall; 98.91% F1-score
- source dataset: approximately 30,000 structured patient records
- approach: 80/20 train-test split; SMOTE on training data only; four heterogeneous base learners; Logistic Regression meta-learner
- status: completed/project
- links: add only real links supplied by user

## 02 Pneumonia Detection from Chest X-Rays

- slug: `pneumonia-detection`
- eyebrow: `DEEP LEARNING / MEDICAL IMAGING`
- technologies: EfficientNetB0, transfer learning, deep learning
- metrics: 82% accuracy; 0.92 ROC-AUC; 96% recall; 373/390 pneumonia cases correctly identified
- additional fact: approximately 62,720 deep features per X-ray
- status: completed/project

## 03 Smart Stethoscope

- slug: `smart-stethoscope`
- eyebrow: `BIOMEDICAL / AUDIO ELECTRONICS`
- technologies: audio recording, encryption, transmission, decoding, filtering, amplification, audio output
- note: no AI integration claimed
- status: prototype/project

## 04 Automated Patient Medical Report Generation

- slug: `automated-medical-report-generation`
- eyebrow: `RPA / HEALTHCARE`
- technologies: UiPath, RPA
- metric: roughly 90% reduction in manual reporting effort
- status: completed/project

## 05 3D Printed Medical Model

- slug: `3d-printed-medical-model`
- eyebrow: `MEDICAL 3D / MODELLING`
- technologies: 3D Slicer, Blender, 3D printing
- process: CT scan → 3D Slicer model/segmentation → Blender minor edits → 3D print
- title/anatomy needs user verification because the notes currently conflict on the scan type/anatomical region
- status: completed/project

## 06 3D Printed SCARA Robot

- slug: `scara-robot`
- eyebrow: `ROBOTICS / PROTOTYPING`
- technologies: 3D printing, SCARA architecture, gripper end-effector
- process: 3D-printed robotic arm with a finger-like grasping gripper
- status: completed/project

## 07 Smart Walking Stick

- slug: `smart-walking-stick`
- eyebrow: `EMBEDDED / ASSISTIVE PROTOTYPING`
- technologies: Arduino, ultrasonic sensor, buzzer
- process: obstacle sensing → buzzer alert
- status: completed/prototype

## 08 Iontophoresis Device

- slug: `iontophoresis-device`
- eyebrow: `BIOMEDICAL PROTOTYPE`
- technologies: user-described homemade setup; additional component details unavailable
- safety language: prototype only; do not claim clinical performance or medical readiness
- status: experimental prototype

## Optional — Stethoscope Amplifier Circuit

- slug: `stethoscope-amplifier-circuit`
- eyebrow: `CIRCUIT / AUDIO`
- technologies: resistors, capacitors, audio amplifier
- status: basic prototype
- default featured: false
