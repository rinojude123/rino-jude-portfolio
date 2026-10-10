import { Link, Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/footer/Footer.jsx";
import { Navbar } from "../components/navigation/Navbar.jsx";
import { getProjectBySlug } from "../data/projects.js";
import { projectCanonical, projectTitle } from "../data/seo.js";
import { site } from "../data/site.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const valid = Boolean(project?.featured);

  useDocumentTitle(
    valid ? projectTitle(project.title) : `Page not found — ${site.name}`,
    valid ? project.summary : site.metaDescription,
    valid ? projectCanonical(project.slug) : `${site.siteUrl}/404`,
  );

  if (!valid) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Navbar />
      <main id="main" className="project-detail">
        <p className="technical-label">
          {project.number} · {project.eyebrow}
        </p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {project.metrics.length ? (
          <div className="detail-metrics">
            {project.metrics.map((metric) => (
              <span className="skill-tag" key={metric.label}>
                {metric.label}: {metric.value}
              </span>
            ))}
          </div>
        ) : null}
        <h2 className="technical-label">PROCESS</h2>
        <ul className="process-list">
          {project.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
        <div className="tech-row">
          {project.technologies.map((tech) => (
            <span className="skill-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link className="hand-button" to="/#work">
            ← BACK TO WORK
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
