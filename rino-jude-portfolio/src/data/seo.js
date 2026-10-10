import { site } from "../data/site.js";
import { featuredProjects } from "../data/projects.js";

const origin = site.siteUrl.replace(/\/$/, "");

export function homeCanonical() {
  return `${origin}/`;
}

export function projectCanonical(slug) {
  return `${origin}/project/${slug}`;
}

export function projectTitle(title) {
  return `${title} — ${site.name}`;
}

export const sitemapUrls = [
  "/",
  ...featuredProjects.map((project) => `/project/${project.slug}`),
];
